import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-gray-300 mt-10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <p className="text-2xl font-bold text-white cursor-pointer">Never.io</p>
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link href="/about">
              <p className="hover:text-white cursor-pointer">About</p>
            </Link>
            <Link href="/blog">
              <p className="hover:text-white cursor-pointer">Blog</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-white cursor-pointer">Contact</p>
            </Link>
            <Link href="/privacy">
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            </Link>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-center mt-6 space-x-6">
          <Link href="https://facebook.com">
            <svg className="h-6 w-6 fill-current hover:text-white cursor-pointer" viewBox="0 0 24 24">
              {/* Facebook SVG Path */}
              <path d="M22.675 0h-21.35C.595 0 0 .588 0 1.313v21.375C0 23.412.594 24 1.325 24h11.494v-9.281H9.692v-3.62h3.127V8.324c0-3.1 1.892-4.787 4.656-4.787 1.325 0 2.464.099 2.797.144v3.243l-1.918.001c-1.503 0-1.794.715-1.794 1.764v2.31h3.586l-.467 3.62h-3.12V24h6.116c.73 0 1.325-.588 1.325-1.313V1.313C24 .588 23.406 0 22.675 0z" />
            </svg>
          </Link>
          <Link href="https://twitter.com">
            <svg className="h-6 w-6 fill-current hover:text-white cursor-pointer" viewBox="0 0 24 24">
              {/* Twitter SVG Path */}
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.722 0-4.928 2.205-4.928 4.917 0 .39.045.765.127 1.125-4.09-.205-7.719-2.165-10.148-5.144-.423.722-.666 1.561-.666 2.457 0 1.694.86 3.188 2.166 4.065-.799-.025-1.554-.245-2.212-.616v.062c0 2.367 1.684 4.342 3.918 4.789-.41.111-.843.171-1.292.171-.314 0-.615-.03-.911-.086.615 1.921 2.396 3.32 4.504 3.36-1.654 1.295-3.74 2.068-6.006 2.068-.39 0-.779-.023-1.158-.067 2.145 1.373 4.693 2.175 7.438 2.175 8.923 0 13.803-7.388 13.803-13.79 0-.21 0-.423-.015-.634.945-.682 1.76-1.52 2.408-2.481z" />
            </svg>
          </Link>
          <Link href="https://linkedin.com">
            <svg className="h-6 w-6 fill-current hover:text-white cursor-pointer" viewBox="0 0 24 24">
              {/* LinkedIn SVG Path */}
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5 1.11 1 2.5 1s2.48 1.119 2.48 2.5zm.02 4.5H0V24h5v-16.5zm7 0h-5v16.5h5v-8.25c0-4.75 6-5.125 6 0v8.25h5v-10.5c0-9-10.5-8.625-11 0V8z" />
            </svg>
          </Link>
        </div>
        {/* Footer Bottom Text */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Never.io. All rights reserved.
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer