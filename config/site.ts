import type { NavConfig, RoutesConfig, SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
	name: "",
	title: "",
	description: "",
	url: "",
	theme: {
		default: "light", // "light" | "dark" | "system"
		accent: "#ccff66", // lime green accent
	},
	social: {
		instagram: "",
		facebook: "",
		linkedin: "",
		github: "",
	},
	contact: {
		email: "",
		phone: "",
		address: "",
	},
};

export const navConfig: NavConfig = {
	navItems: [
		{ label: "Servizi", href: "/aziende" },
		{ label: "Professionisti", href: "/candidati" },
	],
};

export const routesConfig: RoutesConfig = {
	home: "/",
};
