import Footer from '@/components/Footer';
import fs from 'fs';
import matter from 'gray-matter';

import Link from 'next/link';
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from '@/components/onThisPage';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export default async function Page({ params }) {
  const filePath = `/markdownproject/content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath);
  const { content, data } = matter(fileContent);

  // Convert markdown content to HTML

  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings)
  .use(rehypePrettyCode, {
    theme: 'one-dark-pro',
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
  })
  
  const htmlContent =  (await processor.process(content)).toString()

  return (
    <>
    <div className="max-w-5xl mx-auto p-4">
      {/* Title */}
      <h3 className="text-4xl font-bold mb-4">{data.title}</h3>
      
      {/* Author and Time */}
      <div className="text-gray-600 mb-2">
        <span className="font-semibold">{data.author}</span> | 
        <span className="mx-2">{data.time}</span>
      </div>
      
      {/* Image with shadow and hover effects */}
      {/* <img 
        src={data.image} 
        alt={data.title} 
        className="lg:w-[600px] mx-auto h-auto mb-4 rounded shadow-lg sm:w-[300px] hover:shadow-2xl " 
      /> */}

      {/* Render the markdown content */}
      <div className="prose prose-lg dark:prose-invert mb-4">
        {/* Use the prose class to style and ensure headings are bold */}
        <div 
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
          
        />

      </div>
<OnThisPage htmlContent={htmlContent}  />

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Read More
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition">
          <Link href={'/blogs'}>Back to Blog</Link>
        </button>
      </div>
     

    </div>


    <section className="mt-8">
  <h2 className="text-2xl font-bold mb-4 text-center">Comments</h2>

  {/* Comment Wrapper */}
  <div className=" space-y-4 max-w-2xl mx-auto">
    {/* Demo Comment 1 */}
    <div className="flex items-start border p-4 rounded-lg shadow-md mx-auto">
      <img 
        src="https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" 
        alt="Avatar" 
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <p className="font-semibold">Alice Johnson</p>
        <p className="text-gray-600">This blog post is really insightful! I learned a lot about cooking at home.</p>
      </div>
    </div>

    {/* Demo Comment 2 */}
    <div className="flex items-start border p-4 rounded-lg shadow-md mx-auto">
      <img 
        src="https://images.firstpost.com/wp-content/uploads/2018/11/samworthington-380.jpg" 
        alt="Avatar" 
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <p className="font-semibold">David Smith</p>
        <p className="text-gray-600">Great tips on time management. I’ll definitely implement these in my routine!</p>
      </div>
    </div>

    {/* Demo Comment 3 */}
    <div className="flex items-start border p-4 rounded-lg shadow-md mx-auto">
      <img 
        src="https://img.freepik.com/premium-photo/bussiness-women-office_1165411-3953.jpg" 
        alt="Avatar" 
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <p className="font-semibold">Emma Brown</p>
        <p className="text-gray-600">Mindfulness has changed my life! Thanks for sharing your thoughts on this.</p>
      </div>
    </div>
  </div>
</section>





    <Footer/>
    </>
  );
}
