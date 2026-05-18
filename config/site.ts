import type { SiteConfig } from "@/types/index";
export const siteConfig = {
	name: "Progetti e Servizi V",
	tagline: "Progettiamo spazi. Costruiamo fiducia.",
	description:
		"Ristrutturazione di ambienti residenziali, commerciali e strutture ricettive. Un architetto al tuo fianco — dalla prima idea alla consegna delle chiavi.",
	url: "https://www.progettiserviziv.it",
	nav: [
		{ label: "Chi Siamo", href: "/chi-siamo" },

		{
			label: "Servizi",
			href: "/servizi",
			children: [
				{
					label: "Residenziale",
					href: "/servizi/residenziale",
					description: "Appartamenti, ville e condomini su misura.",
				},
				{
					label: "Commerciale",
					href: "/servizi/commerciale",
					description: "Uffici, negozi, showroom e spazi direzionali.",
				},
				{
					label: "Ricettivo",
					href: "/servizi/ricettivo",
					description: "Hotel, B&B e strutture ricettive.",
				},
			],
		},
		{ label: "Contatti", href: "/contatti" },
	],
	projects: [
		{
			slug: "negozio",
			title: "Negozio Studded",
			category: "Commerciale",
			location: "Roma, C.so Trieste",
			year: "2024",
			image: "/images/projects/studded.jpeg",
		},
		{
			slug: "negozio-ufficio",
			title: "Negozio Ufficio",
			category: "Commerciale",
			location: "Roma, C.so Trieste",
			year: "2024",
			image: "/images/projects/ufficio.jpeg",
		},
		{
			slug: "corso-trieste",
			title: "Appartamento C.so Trieste",
			category: "Residenziale",
			location: "Roma, C.so Trieste",
			year: "2024",
			image: "/images/projects/csotrieste.jpg",
		},
		{
			slug: "showroom-centro-storico",
			title: "Showroom Centro Storico",
			category: "Commerciale",
			location: "Roma, Centro Storico",
			year: "2024",
			image: "/images/projects/hotel1.jpg",
		},
		{
			slug: "bb-trastevere",
			title: "B&B Trastevere",
			category: "Strutture Ricettive",
			location: "Roma, Trastevere",
			year: "2023",
			image: "/images/projects/ristrutturazione1.jpg",
		},
		{
			slug: "villa-appia-antica",
			title: "Villa Appia Antica",
			category: "Residenziale",
			location: "Roma, Appia",
			year: "2023",
			image: "/images/projects/terrazzo.jpg",
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
