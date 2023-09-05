export type NavigationItem = {
  direct: string;
  icon: string;
  name: string;
};

export const Data: NavigationItem[] = [
  {
    direct: "/",
    icon: "BiHomeAlt2",
    name: "Home",
  },
  {
    direct: "/photos",
    icon: "BiImages",
    name: "Photos",
  },
  {
    direct: "/collections",
    icon: "BiCollection",
    name: "Collections",
  },
  {
    direct: "/topics",
    icon: "BiBook",
    name: "Topics",
  },
];
