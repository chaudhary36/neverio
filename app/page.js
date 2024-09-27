'use client';


import { ChartData } from "@/components/Chart";
import Footer from "@/components/Footer";
import Link from "next/link";
import React , {useRef , useEffect} from "react";
import Typed from 'typed.js';


const HomePage = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Development', 'Coding',  'Mern Full-Stack' , 'Next.js' , 'C Tutorials' , 'Javascript Tutorials'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className="mx-4 lg:mx-40">
  <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
    <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
      <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
        A <span className="font-semibold">free repository</span> for community{" "}
        <br className="hidden lg:block" /> components using{" "}
        <span className="font-semibold underline decoration-primary">
        <span ref={el} />
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
        Open source Tailwind UI components and templates to{" "}
        <br className="hidden lg:block" /> bootstrap your new apps, projects or
        landing sites!
      </p>
      <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
        <form
          action="https://www.creative-tim.com/twcomponents/search"
          className="flex flex-wrap justify-between md:flex-row"
        >
        
        </form>
      </div>
    </div>
    <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
      <img
        src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
        alt="tailwind css components"
        className="w-full h-auto max-w-md mx-auto"
      />
    </div>
  </section>
</main>

<ChartData />
<section className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24 px-6 lg:px-20 bg-gray-100 dark:bg-gray-900">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
Build Beautiful Applications
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Create stunning and responsive web applications with ease using our powerful components and tools.
        </p>
        <Link href="#" className="inline-block bg-blue-600 dark:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-400 transition duration-300">
          Get Started
        </Link>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="Website Design"
          className="w-full h-auto max-w-md mx-auto"
        />
      </div>
    </section>

<section className="container px-4 py-12 mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 md:text-4xl">
          Our Pricing Plans
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
          Choose the plan that fits your needs.
        </p>
        <div className="flex flex-wrap items-center justify-center mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Basic Plan */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Basic
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A basic plan for small teams and projects.
            </p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                $19
              </span>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
                </svg>
                5 Projects
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
                </svg>
                10 GB Storage
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
                </svg>
                Basic Support
              </li>
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Choose Plan
            </button>
          </div>

          {/* Standard Plan */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Standard
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A perfect plan for growing teams and businesses.
            </p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                $49
              </span>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
                </svg>
                10 Projects
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
                </svg>
                50 GB Storage
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
                </svg>
                Priority Support
              </li>
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Premium
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              The best plan for large teams and enterprises.
            </p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                $99
              </span>
              <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
                </svg>
                Unlimited Projects
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
                </svg>
                200 GB Storage
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
                </svg>
                24/7 Support
              </li>
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Choose Plan
            </button>
          </div>
        </div>
      </section>


<section class="py-20 bg-white dark:bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 animate-fade-in-down">
      Why Choose Never.io?
    </h2>
    <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in">
      Discover the unique features and benefits that make Never.io stand out in the world of web development.
    </p>
    
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      
      <div class="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-in-up">
        <div class="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 17a4 4 0 11-8 0 4 4 0 018 0zm11 0a4 4 0 11-8 0 4 4 0 018 0zm-9 4a4 4 0 018-4 4 4 0 00-8 0zm-1-7.268A4.001 4.001 0 0112 7c1.657 0 3.156 1.028 3.742 2.484A8.001 8.001 0 0112 15a8.001 8.001 0 01-3.742-5.516C8.844 8.028 10.343 7 12 7a4.001 4.001 0 011 7.732"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Community Support</h3>
        <p class="text-gray-600 dark:text-gray-400 text-center">
          Get support from our vibrant and growing community of developers.
        </p>
      </div>

      
      <div class="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-in-up">
        <div class="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Trusted Quality</h3>
        <p class="text-gray-600 dark:text-gray-400 text-center">
          Deliver reliable and high-quality code with our comprehensive guides.
        </p>
      </div>

      
      <div class="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-in-up">
        <div class="flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6 3l-6-6m6 6l-6-6m0 0l-6 6m6-6l-6-6"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Continuous Learning</h3>
        <p class="text-gray-600 dark:text-gray-400 text-center">
          Stay updated with our latest tutorials and blog posts on web development.
        </p>
      </div>
    </div>
  </div>
</section>


      

      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4 lg:px-8">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
      Amazing Features
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Feature 1 */}
      <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="mb-5 text-primary">
          <svg
            className="w-12 h-12 mx-auto text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 12h6m-3-3v6m5-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Feature One
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Description of this amazing feature that makes your project stand out.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="mb-5 text-primary">
          <svg
            className="w-12 h-12 mx-auto text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8h-6a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2h-5l-4 4z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Feature Two
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Another brilliant feature description that showcases your offering.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="mb-5 text-primary">
          <svg
            className="w-12 h-12 mx-auto text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A8.032 8.032 0 0018 9.5c0-4.418-3.582-8-8-8S2 5.082 2 9.5c0 3.39 2.238 6.276 5.405 7.805L6 17h5l3 3 1-1-1-1zm0-4a5 5 0 100-10 5 5 0 000 10z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Feature Three
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Highlighting yet another outstanding feature of your project.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-white dark:bg-gray-900 py-12 px-4 mx-14 lg:px-8">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
      Top Blogs
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-8 lg:mx-12">
      {/* Blog 1 */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full h-48 object-cover"
          src="https://img.freepik.com/free-vector/blog-template-design_23-2149632344.jpg"
          alt="Blog 1"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Blog Title One
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A short description of the blog post to give readers an insight into the content.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Read more &rarr;
          </a>
        </div>
        <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-25 transition duration-300"></div>
      </div>

      {/* Blog 2 */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full h-48 object-cover"
          src="https://kerbco.com/wp-content/uploads/2022/09/divi-home-baker-layout-pack-blog-post-featured-image-2.jpg"
          alt="Blog 2"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Blog Title Two
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A brief overview of this blog post highlighting the main topics covered.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Read more &rarr;
          </a>
        </div>
        <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-25 transition duration-300"></div>
      </div>

      {/* Blog 3 */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full h-48 object-cover"
          src="https://github.blog/wp-content/uploads/2024/02/accelerator2024.jpg?resize=1600%2C850"
          alt="Blog 3"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Blog Title Three
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            An engaging summary that entices readers to click and read the full blog post.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Read more &rarr;
          </a>
        </div>
        <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-25 transition duration-300"></div>
      </div>
    </div>
  </div>
</section>


<section class="py-20 bg-white dark:bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
   
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 animate-fade-in-down">
      What Our Clients Say
    </h2>
    <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in">
      Hear from our satisfied clients about their experiences working with Never.io.
    </p>
    
   
    <div class="flex overflow-hidden space-x-6 animate-slide-in">
    
      <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div class="mb-4">
          <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Client 1" class="w-16 h-16 rounded-full mx-auto shadow-lg" />
        </div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">John Doe</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Working with Never.io was a fantastic experience. They delivered exactly what we needed, on time and within budget.</p>
        <span class="text-blue-600 dark:text-blue-400 font-semibold">CEO, Tech Solutions</span>
      </div>


      <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div class="mb-4">
          <img src="https://media.istockphoto.com/id/1213961256/photo/head-shot-excited-african-american-man-showing-big-size-gesture.jpg?s=612x612&w=0&k=20&c=de3DViZ_0749arhInLqXBiO14UfgOzfJg-C2dCEiUkA=" alt="Client 2" class="w-16 h-16 rounded-full mx-auto shadow-lg" />
        </div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Jane Smith</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">The team at Never.io truly exceeded our expectations. Their professionalism and attention to detail were top-notch.</p>
        <span class="text-blue-600 dark:text-blue-400 font-semibold">Marketing Head, Creative Studio</span>
      </div>

    
      <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div class="mb-4">
          <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2268" alt="Client 3" class="w-16 h-16 rounded-full mx-auto shadow-lg" />
        </div>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Michael Lee</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">From start to finish, the process was smooth and the results were outstanding. Highly recommend Never.io!</p>
        <span class="text-blue-600 dark:text-blue-400 font-semibold">Founder, Startup Inc.</span>
      </div>
    </div>
  </div>
</section>





<Footer/>


    </>
  );
};

export default HomePage;
