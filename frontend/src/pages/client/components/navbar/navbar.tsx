import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "@/assets";
import { useAuthStore } from "@/store/use-auth.store";
import { useShopStore } from "@/store/use-shop-store";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Menu,
  ShoppingBag,
  KeyRound,
  UserRoundPlus,
  LogOut,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { getInitials } from "@/utils/generateInitials";

export function Navbar() {
  const { user, clearUser } = useAuthStore();
  const cart = useShopStore((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
  ];

  const handleLogout = () => {
    clearUser();
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between px-4 py-4 md:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
      >
        <img src={logo} alt="Aven Foods" className="h-8 w-8 md:h-10 md:w-10" />
        Aven Foods
      </Link>

      <div className="hidden gap-8 lg:flex">
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

      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative">
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute top-2 -right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Button>
        </Link>

        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium hidden md:inline-block">
              {user.username} ({user.email})
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.email} alt={user.username} />
                    <AvatarFallback>
                      {getInitials(user?.username, user?.email)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.username}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                {user.role === "ADMIN" && (
                  <DropdownMenuItem>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>
                      <Link to="/admin">Dashboard</Link>
                    </span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="hidden sm:flex sm:items-center sm:gap-4">
            <Button asChild variant="ghost">
              <Link to="/auth/login">
                <KeyRound className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link to="/auth/signup">
                <UserRoundPlus className="mr-2 h-4 w-4" />
                Register
              </Link>
            </Button>
          </div>
        )}

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through our delicious offerings
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg font-semibold text-primary transition duration-100 hover:text-foreground active:text-muted/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {!user && (
                <>
                  <Button asChild variant="outline">
                    <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                      <KeyRound className="mr-2 h-4 w-4" />
                      Login
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link
                      to="/auth/signup"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserRoundPlus className="mr-2 h-4 w-4" />
                      Register
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
