import type { Locale } from "./config";

export const dictionaries = {
	it: {
		hero: {
			title: "Connecting Minds and Brands",
			description:
				"Marknet unisce strategia, contenuti, design, digitale ed eventi per costruire brand coerenti, riconoscibili e performanti.",
			primaryCta: "Attiva un nuovo progetto",
			secondaryCta: "Contattaci",
		},
		intro: {
			titleStart: "Siamo la",
			highlight: "regia",
			titleEnd: "per la tua content communication",
			paragraphOne:
				"Marknet nasce per mettere in relazione brand e specialisti verticali in strategia, contenuti, design, digitale ed eventi, riducendo la distanza tra idea, execution e risultati.",
			paragraphTwo:
				"Ogni progetto prende forma dentro un network coordinato da una visione comune, così che ogni attivazione, campagna, contenuto o piattaforma rafforzi la stessa identità di marca.",
		},
		services: {
			title: "Garantiamo il team perfetto per ogni progetto",
			items: [
				{
					title: "Brand Strategy",
					badges: [
						"Positioning",
						"Value Proposition",
						"Brand Architecture",
						"Storytelling",
						"Tone of Voice",
						"Brand System",
						"Web Design",
					],
					description:
						"Definiamo il tracciato comune che tiene insieme posizionamento, messaggi, identità e direzione strategica del brand. Dalla value proposition al brand system, costruiamo una base solida su cui far camminare campagne, contenuti, lanci e rebranding.",
					buttonText: "Attiva il team di Brand Strategy",
				},
				{
					title: "Content Creation",
					badges: [
						"Editorial Strategy",
						"Social Formats",
						"Copywriting",
						"Platform Content",
						"Performance Monitoring",
					],
					description:
						"Creiamo contenuti che danno una voce al brand e generano engagement reale su ogni piattaforma. Format originali, storytelling e piani editoriali pensati per mantenere coerenza narrativa e rilevanza nel tempo.",
					buttonText: "Attiva il team di Content Creation",
				},
				{
					title: "Marketing",
					badges: [
						"Digital Strategy",
						"Audience Development",
						"Campaign Planning",
						"SEO Optimization",
						"Analytics",
						"Performance Growth",
					],
					description:
						"Progettiamo piattaforme digitali e attivazioni di marketing che non si limitano a informare, ma accompagnano il brand verso conversione e crescita. Strategie, contenuti e dati lavorano insieme per generare valore misurabile.",
					buttonText: "Attiva il team di Marketing",
				},
				{
					title: "Event",
					badges: [
						"Experience Design",
						"Live Production",
						"Content Coverage",
						"Social Amplification",
						"Audience Engagement",
						"KPI Measurement",
					],
					description:
						"Disegniamo esperienze dal vivo pensate per essere vissute, raccontate e amplificate. Lanci, conferenze e attivazioni diventano asset di comunicazione che generano buzz, contenuti riutilizzabili e impatto misurabile.",
					buttonText: "Attiva il team di Event",
				},
			],
		},
		cta: {
			label: "Inizia un nuovo progetto",
			title: "Hai un progetto in mente?",
			description:
				"Raccontaci la tua idea. Costruiamo insieme il team e la strategia giusta per portarla al risultato.",
			primaryCta: "Attiva un nuovo progetto",
			secondaryCta: "Contattaci",
		},
	},
	en: {
		hero: {
			title: "Connecting Minds and Brands",
			description:
				"Marknet brings together strategy, content, design, digital and events to build brands that are coherent, recognizable and performance-driven.",
			primaryCta: "Start your project",
			secondaryCta: "Contact us",
		},
		intro: {
			titleStart: "We are not an agency. We are the",
			highlight: "direction",
			titleEnd: "behind your communication projects",
			paragraphOne:
				"Marknet connects brands with vertical specialists across strategy, content, design, digital and events, reducing the distance between idea, execution and results.",
			paragraphTwo:
				"Every project takes shape inside a network guided by a shared vision, so that every activation, campaign, content piece or platform reinforces the same brand identity.",
		},
		services: {
			title: "We assemble the right team for every project",
			items: [
				{
					title: "Brand Strategy",
					badges: [
						"Positioning",
						"Value Proposition",
						"Brand Architecture",
						"Storytelling",
						"Tone of Voice",
						"Brand System",
						"Web Design",
					],
					description:
						"We define the shared path that aligns positioning, messaging, identity and strategic direction. From value proposition to brand system, we build the foundation that supports campaigns, content, launches and rebranding.",
					buttonText: "Activate the Brand Strategy team",
				},
				{
					title: "Content Creation",
					badges: [
						"Editorial Strategy",
						"Social Formats",
						"Copywriting",
						"Platform Content",
						"Performance Monitoring",
					],
					description:
						"We create content that gives brands a distinct voice and generates real engagement across platforms. Original formats, storytelling and editorial planning designed to maintain narrative consistency and long-term relevance.",
					buttonText: "Activate the Content Creation team",
				},
				{
					title: "Marketing",
					badges: [
						"Digital Strategy",
						"Audience Development",
						"Campaign Planning",
						"SEO Optimization",
						"Analytics",
						"Performance Growth",
					],
					description:
						"We design digital platforms and marketing activations that do more than inform — they guide brands toward conversion and growth. Strategy, content and data work together to generate measurable value.",
					buttonText: "Activate the Marketing team",
				},
				{
					title: "Event",
					badges: [
						"Experience Design",
						"Live Production",
						"Content Coverage",
						"Social Amplification",
						"Audience Engagement",
						"KPI Measurement",
					],
					description:
						"We design live experiences meant to be lived, told and amplified. Launches, conferences and activations become communication assets that generate buzz, reusable content and measurable impact.",
					buttonText: "Activate the Event team",
				},
			],
		},
		cta: {
			label: "Start a new project",
			title: "Do you have a project in mind?",
			description:
				"Tell us about your idea. We will build the right team and strategy to bring it to the right outcome.",
			primaryCta: "Start your project",
			secondaryCta: "Contact us",
		},
	},
} satisfies Record<Locale, object>;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale];
}
