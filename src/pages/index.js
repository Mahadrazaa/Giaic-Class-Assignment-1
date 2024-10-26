import Link from "next/link";

function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-8 text-gray-700">Hello</h1>
      
      {/* Navbar Container */}
      <div className="flex justify-center items-center mt-10 bg-gray-700 text-white py-4 rounded-lg shadow-lg space-x-8 w-3/4 mx-auto">
        
        {/* About Link */}
        <Link href="/About" className="px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out text-center">
          About
        </Link>

        {/* Contact Link */}
        <Link href="/Contact" className="px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out text-center">
          Contact
        </Link>

        {/* Services Link */}
        <Link href="/Services" className="px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out text-center">
          Services
        </Link>

        {/* Blog Link */}
        <Link href="/Blog" className="px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out text-center">
          Blog
        </Link>

      </div>
    </div>
  );
}

export default Home;
