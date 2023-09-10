import {
  backup,
  calender,
  chart,
  element,
  form,
  home,
  log,
  note,
  order,
  post2,
  product,
  setting,
  user,
} from "../assets/icons";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Home",
        url: "/",
        icon: home,
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: user,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: user,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: product,
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: order,
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: post2,
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: element,
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: note,
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: form,
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: calender,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: setting,
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: backup,
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: chart,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: log,
      },
    ],
  },
];
