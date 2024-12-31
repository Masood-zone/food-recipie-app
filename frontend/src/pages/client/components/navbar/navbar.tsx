import { logo } from "@/assets";
import { Button } from "@/components/ui/button";
import { Heart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <NavButton icon={<Menu className="h-6 w-6" />} label="Menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Visit Pages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to="/wishlist">Wishlist</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/account">Account</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navbar() {
  const links = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-4 md:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
      >
        <img src={logo} alt="Aven Foods" className="h-8 w-8 md:h-10 md:w-10" />
        Aven Foods
      </Link>

      <div className="hidden gap-12 lg:flex 2xl:ml-16">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-lg font-semibold text-primary transition duration-100 hover:text-foreground active:text-muted/20"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex divide-x border-r sm:border-l">
        <NavButton icon={<Heart className="h-6 w-6" />} label="Wishlist" />
        <NavButton icon={<User className="h-6 w-6" />} label="Account" />
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function NavButton({
  icon,
  label,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`h-12 w-12 flex-col items-center justify-center gap-1.5 sm:h-20 sm:w-20 md:h-24 md:w-24 ${className}`}
    >
      {icon}
      <span className="hidden text-xs font-semibold text-gray-500 sm:block">
        {label}
      </span>
    </Button>
  );
}
