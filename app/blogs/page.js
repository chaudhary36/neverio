// pages/blog.js
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs'
import matter from 'gray-matter';

export default function Blog() {


  const dirContent = fs.readdirSync("content", 'utf-8');
  console.log(dirContent)
  const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`/markdownproject/content/${file}` , 'utf-8')
    const {data} = matter(fileContent);
    // console.log(data) // just for preview in terminal
    return data;    
  })



  // const blogs = [
  //   {
  //     _id: '1',
  //     title: 'How to Start a Blog',
  //     author: 'jack',
  //     content: 'A comprehensive guide on starting your own blog. Learn everything you need to get started, from choosing a platform to writing your first post.',
  //     image: 'https://media.istockphoto.com/id/1477183258/photo/woman-holding-ai-icons-with-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=RTy3cj2HXeN3LBwpCvFtTvv2G8DIDh5S6-U-iCkEXSc=',
  //     slug: 'how-to-start-a-blog',
  //   },
  //   {
  //     _id: '2',
  //     title: 'SEO Tips for Bloggers',
  //     author: 'Ezard',
  //     content: 'Effective SEO strategies for increasing your blog\'s visibility. Discover the best practices to boost your search engine ranking.',
  //     image: 'https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
  //     slug: 'seo-tips-for-bloggers',
  //   }
  // ];

  return (
    <>
      <Head>
        <title>Blog - Never.io</title>
        <meta name="description" content="Explore insightful articles and updates on Never.io." />
      </Head>
      
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Never.io Blog</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Welcome to our blog! Discover the latest articles, updates, and insights from Never.io. We cover a range of topics to keep you informed and inspired.
            </p>
          </div>
        </div>

        {/* Featured Post Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row">
            <img
              src="https://media.licdn.com/dms/image/C5612AQGETsN_hMwpKg/article-cover_image-shrink_600_2000/0/1520228806272?e=2147483647&v=beta&t=bJEXKgDTjZogsas-PA6hcy38JTKvJnnrTESr7cAkzYg"
              alt="Featured Post"
              className="w-full md:w-1/2 rounded-lg object-cover mb-4 md:mb-0 md:mr-8"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-2">Featured Post Title</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                This is a brief summary of the featured post. It gives an overview of the content and entices readers to click and read more.
              </p>
              <Button><Link href={'/signup'}>Read More</Link></Button>
            </div>
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                image={blog.image}
                title={blog.title}
                content={blog.content.substring(0, 100)} // Shortened content for preview
                slug={blog.slug}
              />
            ))}
          </div>
        </div>
     

        {/* Categories Section */}
         <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap justify-center">
              {['Blogging Tips', 'SEO', 'Content Marketing', 'Tech', 'Tutorials', 'Lifestyle'].map((category) => (
                <span
                  key={category}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2 m-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
          <div className="bg-blue-100 dark:bg-blue-900 rounded-lg shadow-lg p-6 md:p-8 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Subscribe to our Newsletter</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Get the latest updates and articles delivered directly to your inbox.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-2/3 px-4 py-2 mb-4 md:mb-0 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition"
              />
              <button className="w-full md:w-auto md:ml-4 px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <Footer/>
      </div>
    </>
  );
}

// BlogCard Component
function BlogCard({ image, title, content, slug }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{content}</p>
        <Button><Link href={`/blogspot/${slug}`}>Read More</Link></Button>
      </div>

 
    </div>

    
  );
}
