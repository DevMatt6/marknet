export interface NavItem {
	label: string;
	href: string;
	description?: string;
	children?: NavItem[];
}

export interface SiteConfig {
	name: string;
	description: string;
	url: string;
	nav: NavItem[];
	products: Product[];
	projects: Project[];
}

export interface Project {
	slug: string;
	title: string;
	category: string;
	location: string;
	year: string;
	image: string;
}
