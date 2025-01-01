import { GalleryVerticalEnd, Settings2, SquareTerminal } from "lucide-react";

export const data = {
  teams: [
    {
      name: "Food Delivery App",
      logo: GalleryVerticalEnd,
      plan: "",
    },
  ],
  navMain: [
    {
      title: "Admin Panel",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/admin",
        },
        {
          title: "Users",
          url: "/admin/users",
        },
        {
          title: "Home Page",
          url: "/",
        },
      ],
    },
    {
      title: "Setup",
      url: "#",
      icon: GalleryVerticalEnd,
      items: [
        {
          title: "Customers",
          url: "/admin/customers",
        },
        {
          title: "Category",
          url: "/admin/category",
        },
        {
          title: "Products",
          url: "/admin/products",
        },
        {
          title: "Orders",
          url: "/admin/orders",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/admin/settings",
        },
      ],
    },
  ],
};
