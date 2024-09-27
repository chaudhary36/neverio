// pages/contact.js
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Never.io</title>
        <meta name="description" content="Get in touch with us at Never.io. We'd love to hear from you!" />
      </Head>
      
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12">
        {/* Header Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-32 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 bg-blue-500 dark:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions, feel free to contact us directly at the information below.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Email:</span> <a href="mailto:info@never.io" className="text-blue-500 dark:text-blue-400 hover:underline">info@never.io</a>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Phone:</span> <a href="tel:+1234567890" className="text-blue-500 dark:text-blue-400 hover:underline">+1 (234) 567-890</a>
              </p>
              <p className="text-lg">
                <span className="font-semibold">Address:</span> 1234 Never St, Suite 567, Never City, NC 12345
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509368!2d144.95373531531855!3d-37.81627927975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774f06b21c76d3!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1603498266355!5m2!1sen!2sus"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="block w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
