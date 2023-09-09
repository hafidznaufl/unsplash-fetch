export type NavigationItem = {
  direct: string;
  name: string;
};

export const Data: NavigationItem[] = [
  {
    direct: "/",
    name: "Home",
  },
  {
    direct: "/search",
    name: "Search",
  },
  {
    direct: "/photos",
    name: "Photos",
  },
  {
    direct: "/collections",
    name: "Collections",
  },
  {
    direct: "/topics",
    name: "Topics",
  },
];
