export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  theme: {
    default: "light" | "dark" | "system";
    accent: string;
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    github: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
};

export type RoutesConfig = {
  home: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type NavConfig = {
  navItems: NavItem[];
};
