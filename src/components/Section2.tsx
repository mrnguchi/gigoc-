import Link from "next/link";

export default function Section2() {
  return (
    <section className="bg-white px-4 py-24 align-start sm:px-10 lg:px-16">
      <div className="mx-auto md:mx-0 max-w-3xl left-0">
        
        {/* Main Card */}
        <div className="bg-white rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] -mt-12 px-5 md:px-12 py-8 md:py-16">
          
          <div className="max-w-2xl">
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight text-[#1e2351] ">
              A Multi-Sector Vision for the Future
            </h2>

            {/* Paragraph */}
            <p className="mt-8 text-base leading-8 text-gray-700">
              At Gebah Investment Group of Companies, we bring together innovation, creativity, and enterprise under one unified vision. Our presence across multiple industries enables us to build synergies that drive sustainable growth and competitive advantage.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-700">
              From infrastructure and logistics to entertainment and technology, we are committed to delivering excellence at every level. Our mission is to create lasting impact by transforming ideas into scalable solutions that serve both businesses and communities.
            </p>

            {/* Link (not button) */}
            <Link
              href="#"
              className="inline-block mt-8 text-sm text-blue-600 hover:underline"
            >
              Read More
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}