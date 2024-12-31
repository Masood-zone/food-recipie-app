import { InstagramIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Find your
            <br />
            style online
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares characteristics of real text.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <img
              src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550"
              alt="Photo by Kaung Htet"
              width={550}
              height={550}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550"
              alt="Photo by Manny Moreno"
              width={550}
              height={550}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            to="#"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            to="#"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            to="#"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
            Social
          </span>
          <span className="h-px w-12 bg-gray-200"></span>

          <div className="flex gap-4">
            <InstagramIcon />
            <TwitterIcon />
            {/* < /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
