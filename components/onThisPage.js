'use client';

import { useEffect, useState } from 'react';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Create a temporary DOM element to parse the htmlContent
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    // Extract all h2 elements from the parsed HTML
    const h2Elements = tempDiv.querySelectorAll('h2');

    // Map over the h2 elements to extract their text and id
    const extractedHeadings = Array.from(h2Elements).map((h2) => {
      let headingId = h2.id || h2.textContent.toLowerCase().replace(/\s+/g, '-');
      if (!h2.id) h2.id = headingId;  // Assign the generated id if none exists
      return { id: headingId, text: h2.textContent };
    });

    setHeadings(extractedHeadings);
  }, [htmlContent]);

  return (
    <nav className="on-this-page mt-8 font-bold absolute w-1/4 top-32 right-24 space-y-3">
      <h3>On This Page</h3>
      <ul className='space-y-1 text-gray-600 text-md'>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OnThisPage;
