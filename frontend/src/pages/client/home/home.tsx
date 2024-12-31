import { InstagramIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";
import HeroCard from "../components/header/hero-card";

export default function Home() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 mx-auto">
        <HeroCard />
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          {["Men", "Women", "Teens"].map((category) => (
            <Link
              key={category}
              to="#"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
            Social
          </span>
          <span className="h-px w-12 bg-gray-200"></span>

          <div className="flex gap-4">
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
