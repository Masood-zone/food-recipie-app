import { logo } from "@/assets";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="flex flex-col items-start lg:w-1/4">
            <Link
              to="/"
              className="inline-flex items-start gap-2.5 text-2xl font-bold md:text-3xl"
            >
              <img
                src={logo}
                alt="Aven Foods"
                className="h-8 w-8 md:h-10 md:w-10"
              />
              Aven Foods
            </Link>
            <p className="mt-4 text-sm">
              Aven Foods is a food delivery service that provides a wide range
              of delicious and healthy meals. Our mission is to make food
              ordering easy and convenient for everyone.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:col-span-2 lg:mt-0 lg:grid-cols-4">
            <div>
              <h2 className="text-2xl font-bold">Services</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/catering"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Catering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/delivery"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wholesale"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Wholesale
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Company
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Helpful Links
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/faq"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Follow Us
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <p className="text-center text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Aven Foods. All rights reserved.
            <br />
            Created with passion and care for food lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
