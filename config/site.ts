import type { SiteConfig } from "@/types/index";
export const siteConfig = {
	name: "Progetti e Servizi V",
	tagline: "Progettiamo spazi. Costruiamo fiducia.",
	description:
		"Ristrutturazione di ambienti residenziali, commerciali e strutture ricettive. Un architetto al tuo fianco — dalla prima idea alla consegna delle chiavi.",
	url: "https://www.progettiserviziv.it",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Servizi", href: "/servizi" },
		{ label: "Il Metodo", href: "/il-metodo" },
		{ label: "Progetti", href: "/progetti" },
		{ label: "Contatti", href: "/contatti" },
	],
	projects: [
		{
			slug: "appartamento-prati",
			title: "Appartamento Prati",
			category: "Residenziale",
			location: "Roma, Prati",
			year: "2024",
			image: "/images/projects/appartamento-prati.jpg",
		},
		{
			slug: "showroom-centro-storico",
			title: "Showroom Centro Storico",
			category: "Commerciale",
			location: "Roma, Centro Storico",
			year: "2024",
			image: "/images/projects/showroom-centro-storico.jpg",
		},
		{
			slug: "bb-trastevere",
			title: "B&B Trastevere",
			category: "Strutture Ricettive",
			location: "Roma, Trastevere",
			year: "2023",
			image: "/images/projects/bb-trastevere.jpg",
		},
		{
			slug: "villa-appia-antica",
			title: "Villa Appia Antica",
			category: "Residenziale",
			location: "Roma, Appia",
			year: "2023",
			image: "/images/projects/villa-appia-antica.jpg",
		},
		{
			slug: "uffici-eur",
			title: "Uffici EUR",
			category: "Commerciale",
			location: "Roma, EUR",
			year: "2022",
			image: "/images/projects/uffici-eur.jpg",
		},
	],
	cta: {
		label: "Consulenza gratuita",
		href: "/contatti",
	},
	contact: {
		address: "",
		email: "",
		phone: "",
	},
};
