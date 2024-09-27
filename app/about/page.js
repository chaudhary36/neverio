// pages/about.js

'use client'
import Footer from '@/components/Footer';
import Head from 'next/head';
import { useState } from 'react';

export default function About() {
 

  return (
    <>
      <Head>
        <title>About Us - Never.io</title>
        <meta name="description" content="Learn more about Never.io and our mission to provide quality content." />
      </Head>
     

      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16">
  {/* Hero Section */}
  <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-16">
    <div className="flex flex-col items-center text-center">
      {/* Animated Text with Writing Effect */}
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6 typing-effect">
        Welcome to <span className="text-blue-600">Never.io</span>
      </h1>

      <div className="relative overflow-hidden h-10">
        <div className="absolute top-0 left-0 w-full h-full animate-[slide-up_10s_infinite]">
          <p className="text-lg text-gray-600 dark:text-gray-300 typing-effect">
            Empowering you with knowledge.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 typing-effect">
            Insights that inspire innovation.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 typing-effect">
            Your trusted source for reliable content.
          </p>
        </div>
      </div>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mt-8">
        At Never.io, we are committed to providing high-quality, insightful content that informs and inspires our readers. From the latest trends to in-depth tutorials, our mission is to be your trusted source for reliable information.
      </p>

      <a href="#learn-more" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        Learn More
      </a>
    </div>
  </div>


  {/* Team or Values Section */}
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300">To empower individuals with accurate and valuable information through easily accessible content.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Our Values</h2>
        <p className="text-gray-600 dark:text-gray-300">Integrity, Innovation, and Community. We believe in providing content that is both reliable and forward-thinking.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Our Vision</h2>
        <p className="text-gray-600 dark:text-gray-300">To be a leader in the digital content industry by delivering insightful knowledge to a global audience.</p>
      </div>
    </div>
  </div>
</div>


          {/* Features Section */}
          <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Our Features</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                Explore what makes Never.io unique.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <FeatureCard
                icon="📚"
                title="High Quality Content"
                description="Our articles are well-researched and written by experienced professionals, ensuring you get the most accurate and up-to-date information."
              />
              <FeatureCard
                icon="💻"
                title="User-Friendly Design"
                description="Our platform is designed with you in mind. With a clean and intuitive interface, finding the content you need is simple and hassle-free."
              />
              <FeatureCard
                icon="🌐"
                title="Global Community"
                description="Join a global community of readers and contributors. Share your thoughts, ask questions, and engage with like-minded individuals."
              />
              <FeatureCard
                icon="🔒"
                title="Secure and Reliable"
                description="We prioritize your privacy and security. Never.io uses advanced security measures to protect your data and ensure a safe browsing experience."
              />
              <FeatureCard
                icon="🔍"
                title="Comprehensive Search"
                description="Easily find the content you're looking for with our powerful search feature, designed to quickly deliver the most relevant results."
              />
              <FeatureCard
                icon="📈"
                title="Constantly Evolving"
                description="We are always updating and improving our platform, adding new features and content to enhance your experience."
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Meet the Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                Our team is dedicated to delivering quality content and ensuring a great user experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member Cards */}
              <TeamMemberCard
                image="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2268"
                name="Jane Doe"
                role="Content Writer"
                description="Jane is an experienced writer with a passion for crafting engaging and informative articles."
              />
              <TeamMemberCard
                image="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                name="John Smith"
                role="Web Developer"
                description="John ensures that our website runs smoothly and efficiently, focusing on the user experience."
              />
              <TeamMemberCard
                image="https://media.istockphoto.com/id/1213961256/photo/head-shot-excited-african-american-man-showing-big-size-gesture.jpg?s=612x612&w=0&k=20&c=de3DViZ_0749arhInLqXBiO14UfgOzfJg-C2dCEiUkA="
                name="Alice Johnson"
                role="Marketing Specialist"
                description="Alice is our marketing expert, helping us reach a wider audience and grow our community."
              />
            </div>
          </div>
       

        <div>
          <Footer/>
        </div>
    </>
  );
}

// FeatureCard Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

// TeamMemberCard Component
function TeamMemberCard({ image, name, role, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{role}</p>
      <p className="text-gray-600 dark:text-gray-300 mt-4">{description}</p>
    </div>

   

    
  );
}
