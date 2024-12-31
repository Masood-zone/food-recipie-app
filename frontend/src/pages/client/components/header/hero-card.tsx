import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroCard = () => {
  return (
    <section className="min-h-72 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg  py-16 shadow-lg md:py-20 xl:py-48">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-foreground mix-blend-multiply"></div>
      {/* Text Content */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          Welcome to <br />
          <span className="text-primary">Aven Foods</span>
        </h1>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Button>
            <Link to="/auth/signup">Start now</Link>
          </Button>
          <Button variant="secondary">
            <Link to="#order-something">Order something</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
