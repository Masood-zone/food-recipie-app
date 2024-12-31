import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-primary dark:bg-primary-foreground py-6 sm:py-8 lg:py-12 h-screen">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Image - Start */}
          <div className="h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Theo Crazzolara"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* Content - Start */}
          <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <p className="mb-4 text-sm font-semibold uppercase text-primary md:text-base">
              Error 404
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
              Page not found
            </h1>

            <p className="mb-4 text-center text-gray-500 sm:text-left md:mb-8 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <nav className="flex gap-4 sm:block sm:space-y-1 md:space-y-2">
              <div>
                <Link
                  to="/"
                  className="inline-block text-sm text-primary transition duration-100 hover:text-primary active:text-primary md:text-base"
                >
                  Home
                </Link>
              </div>
            </nav>
          </div>
          {/* Content - End */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
