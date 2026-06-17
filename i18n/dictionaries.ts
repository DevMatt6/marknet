import type { Locale } from "./config";

export const dictionaries = {
	it: {
		hero: {
			title: "Connecting Minds and Brands",
			description:
				"Un network specializzato per realizzare progetti video con i talenti giusti, in modo rapido e su misura",
			primaryCta: "Attiva un nuovo progetto",
			secondaryCta: "Contattaci",
		},
		intro: {
			titleStart:
				"Marknet connette professionisti del mondo creativo e digitale con brand, agenzie e startup che cercano talenti veri. Nessun annuncio generico, nessuna candidatura nel vuoto. ",
			paragraphOne:
				"Marknet nasce per mettere in relazione brand e specialisti verticali in: Strategia, Brand Design, Content Creation ed Eventi. Riducendo la distanza tra idea, execution e risultati.",
		},
		services: {
			title: "Il team giusto per ogni progetto",
			items: [
				{
					title: "Video Editor",
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
						"Dalla value proposition al brand system, costruiamo una base solida su cui far camminare campagne, contenuti, lanci e rebranding.",
					buttonText: "Richiedi team di Video Editing",
				},
				{
					title: "Content Creator",
					badges: [
						"Editorial Strategy",
						"Social Formats",
						"Copywriting",
						"Platform Content",
						"Performance Monitoring",
					],
					description:
						"Format originali, storytelling e piani editoriali pensati per mantenere coerenza narrativa e rilevanza nel tempo.",
					buttonText: "Richiedi team di Content Creation",
				},
				{
					title: "Operatori Video",
					badges: [
						"Digital Strategy",
						"Audience Development",
						"Campaign Planning",
						"SEO Optimization",
						"Analytics",
						"Performance Growth",
					],
					description:
						"Strategie, contenuti e dati lavorano insieme per generare valore misurabile.",
					buttonText: "Richiedi team di Marketing",
				},
				{
					title: "Drone Pilot",
					badges: [
						"Experience Design",
						"Live Production",
						"Content Coverage",
						"Social Amplification",
						"Audience Engagement",
						"KPI Measurement",
					],
					description:
						"Eventi e conferenze diventano asset di comunicazione che generano valore, contenuti riutilizzabili e impatto misurabile.",
					buttonText: "Richiedi team di Eventi",
				},
				{
					title: "Motion Graphics Designer",
					badges: [
						"Experience Design",
						"Live Production",
						"Content Coverage",
						"Social Amplification",
						"Audience Engagement",
						"KPI Measurement",
					],
					description:
						"Eventi e conferenze diventano asset di comunicazione che generano valore, contenuti riutilizzabili e impatto misurabile.",
					buttonText: "Richiedi team di Motion Graphics",
				},
			],
		},
		howItWorks: {
			label: "Come funziona",
			title: "Quattro passi per avviare il tuo progetto",
			steps: [
				{
					number: "01",
					title: "Inviaci il brief del progetto",
					description:
						"Raccontaci l'obiettivo, il contesto e i tempi. Più dettagli ci dai, più il team sarà calibrato sulle tue esigenze.",
				},
				{
					number: "02",
					title: "Selezioniamo i professionisti adatti",
					description:
						"Identifichiamo le figure più adatte dal nostro network di specialisti verticali e componiamo il team su misura per il progetto.",
				},
				{
					number: "03",
					title: "Avviamo la produzione",
					description:
						"Il team entra in azione con un flusso di lavoro chiaro, milestone definite e aggiornamenti costanti per garantire qualità e rispetto delle scadenze.",
				},
				{
					number: "04",
					title: "Consegniamo il progetto",
					description:
						"Deliverable curati, revisionati e pronti all'uso. Il progetto viene consegnato nei tempi stabiliti, con tutto ciò che ti serve per andare live.",
				},
			],
		},
		homeCta: {
			label: "Lavoriamo insieme",
			title: "Il tuo brand ha bisogno del miglior team",
			description:
				"Dalla brand identity alla content strategy, dal digitale agli eventi: costruiamo il team giusto per ogni fase del tuo progetto.",
			primaryCta: "Attiva un nuovo progetto",
		},
		recruitingCta: {
			label: "Entra nel network",
			title: "Sei un professionista del mondo creativo?",
			description:
				"Lavoriamo con videomaker, operatori, drone pilot, motion designer ed editor. Se hai competenze verticali e vuoi far parte di un network selezionato, raccontaci chi sei.",
			primaryCta: "Unisciti al team",
		},
		footer: {
			tagline: "Connecting Minds and Brands.",
			nav: {
				label: "Navigazione",
				items: [
					{ label: "Home", href: "/" },
					{ label: "Servizi", href: "/services" },
					{ label: "Chi siamo", href: "/about" },
					{ label: "Contatti", href: "/contact" },
				],
			},
			services: {
				label: "Servizi",
				items: [
					{ label: "Brand Strategy", href: "/services" },
					{ label: "Content Creation", href: "/services" },
					{ label: "Marketing", href: "/services" },
					{ label: "Event", href: "/services" },
				],
			},
			contact: {
				label: "Contatti",
			},
			copyright: "Tutti i diritti riservati.",
			cta: {
				startProject: "Avvia un progetto",
				joinTeam: "Unisciti al team",
			},
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
		howItWorks: {
			label: "How it works",
			title: "Four steps to launch your project",
			steps: [
				{
					number: "01",
					title: "Send us your project brief",
					description:
						"Tell us the goal, context and timeline. The more detail you share, the better we can calibrate the team to your needs.",
				},
				{
					number: "02",
					title: "We select the right professionals",
					description:
						"We identify the most suitable profiles from our network of vertical specialists and assemble a team tailored to your project.",
				},
				{
					number: "03",
					title: "We start production",
					description:
						"The team gets to work with a clear workflow, defined milestones and consistent updates to ensure quality and on-time delivery.",
				},
				{
					number: "04",
					title: "We deliver the project",
					description:
						"Polished, reviewed deliverables ready to use. The project is handed over on schedule with everything you need to go live.",
				},
			],
		},
		homeCta: {
			label: "Let's work together",
			title: "Your brand deserves a tailored strategy.",
			description:
				"From brand identity to content strategy, from digital to events: we assemble the right team for every stage of your project.",
			primaryCta: "Start your project",
		},
		recruitingCta: {
			label: "Join the network",
			title: "Are you a creative professional?",
			description:
				"We work with videomakers, camera operators, drone pilots, motion designers and editors. If you have vertical expertise and want to be part of a curated network, tell us who you are.",
			primaryCta: "Join the team",
		},
		footer: {
			tagline: "Connecting Minds and Brands.",
			nav: {
				label: "Navigation",
				items: [
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/services" },
					{ label: "About", href: "/about" },
					{ label: "Contact", href: "/contact" },
				],
			},
			services: {
				label: "Services",
				items: [
					{ label: "Brand Strategy", href: "/services" },
					{ label: "Content Creation", href: "/services" },
					{ label: "Marketing", href: "/services" },
					{ label: "Event", href: "/services" },
				],
			},
			contact: {
				label: "Contact",
			},
			copyright: "All rights reserved.",
			cta: {
				startProject: "Start a project",
				joinTeam: "Join the team",
			},
		},
	},
} satisfies Record<Locale, object>;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale];
}
