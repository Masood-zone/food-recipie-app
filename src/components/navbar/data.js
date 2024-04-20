import { foodCategory, foodIcon, users } from "../../assets/svgs";

export const NAVBAR_LINKS = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Menu",
    path: "#menu",
  },
  {
    id: 3,
    title: "Web-App",
    path: "#web-app",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "#contact-us",
  },
  {
    id: 5,
    title: "About Us",
    path: "/about-us",
  },
];

export const admin_links = [
  {
    id: 2,
    title: "Users",
    path: "/admin",
    icon: users,
  },
  {
    id: 3,
    title: "Foods",
    path: "/admin/foods",
    icon: foodIcon,
  },
  {
    id: 4,
    title: "Food Categories",
    path: "/admin/category",
    icon: foodCategory,
  },
];
