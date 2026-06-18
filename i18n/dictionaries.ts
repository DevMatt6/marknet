import type { Locale } from "./config";

export const dictionaries = {
	it: {
		hero: {
			title: "Connecting Minds and Brands",
			description:
				"Un network di professionisti video selezionati per ogni fase della tua produzione. Dal brief alla consegna, veloce e su misura.",
			primaryCta: "Avvia un progetto video",
			secondaryCta: "Contattaci",
		},
		intro: {
			titleStart:
				"Marknet connette brand, agenzie e creator con i professionisti video giusti per ogni tipo di produzione.",
			paragraphOne:
				"Video editor, operatori, drone pilot, motion designer e content creator. Selezioniamo i talenti dal nostro network e componiamo il team in base al tuo progetto, al tuo formato e alle tue scadenze.",
		},
		services: {
			title: "Scegli la produzione. Pensiamo noi al team.",
			items: [
				{
					title: "Content Creation",
					badges: [
						"Social Video",
						"Reels & Shorts",
						"YouTube",
						"TikTok",
						"UGC",
						"Brand Content",
						"Storytelling",
					],
					description:
						"Produciamo contenuti video per social media, campagne brand e piattaforme digitali. Dalla sceneggiatura alle riprese, fino al montaggio e alla distribuzione multipiattaforma.",
					buttonText: "Attiva Content Creation",
				},
				{
					title: "Spot Pubblicitari",
					badges: [
						"TV",
						"Digital",
						"Pre-roll",
						"Campagne Social",
						"Branded Content",
						"Out-of-Home",
						"Lancio Prodotto",
					],
					description:
						"Produciamo spot per TV, digital e piattaforme social. Dal concept alla consegna, con un team composto da regista, DOP, crew di ripresa e post-produzione completa.",
					buttonText: "Attiva Spot Pubblicitari",
				},
				{
					title: "Produzioni Cinematografiche",
					badges: [
						"Cortometraggi",
						"Documentari",
						"Web Series",
						"Film Istituzionali",
						"Lungometraggi",
						"Videoclip",
						"Fiction",
					],
					description:
						"Assembliamo crew complete per produzioni cinematografiche di qualsiasi scala: dal cortometraggio indipendente al documentario per piattaforme streaming, fino alla fiction e al film istituzionale.",
					buttonText: "Attiva una Produzione Cinematografica",
				},
				{
					title: "Video Corporate",
					badges: [
						"Presentazioni Aziendali",
						"Interviste",
						"Formazione",
						"Video Prodotto",
						"Recruitment",
						"Investor Relations",
						"Istituzionale",
					],
					description:
						"Video aziendali per presentazioni, formazione, lancio prodotto e comunicazione interna. Produzioni rapide, curate nel dettaglio e pronte per ogni canale di distribuzione.",
					buttonText: "Attiva Video Corporate",
				},
				{
					title: "Eventi & Convegni",
					badges: [
						"Conferenze",
						"Fiere",
						"Convention",
						"Lanci di Prodotto",
						"Award Ceremony",
						"Summit",
						"Multicam",
					],
					description:
						"Riprese professionali per eventi, conferenze, fiere e convention. Crew multicamera, regia in tempo reale e post-produzione per trasformare ogni evento in un asset di comunicazione.",
					buttonText: "Attiva Riprese Evento",
				},
				{
					title: "Live Streaming",
					badges: [
						"Webinar",
						"Conferenze Online",
						"Lanci in Diretta",
						"YouTube Live",
						"LinkedIn Live",
						"Multipiattaforma",
						"Ibrido",
					],
					description:
						"Gestiamo la regia e la distribuzione di eventi in diretta su YouTube, LinkedIn, Vimeo e piattaforme custom. Setup multicamera, grafiche in tempo reale e archivio in alta qualità.",
					buttonText: "Attiva Live Streaming",
				},
				{
					title: "Riprese Aeree con Drone",
					badges: [
						"Immobiliare",
						"Industria",
						"Turismo",
						"Cinema",
						"Costruzioni",
						"Paesaggio",
						"4K / RAW",
					],
					description:
						"Riprese aeree con pilot certificati ENAC per ogni tipo di progetto: real estate, turismo, industria, spot e cinema. Materiale in 4K o RAW, pronto per la post-produzione.",
					buttonText: "Attiva Riprese Aeree",
				},
				{
					title: "Documentari",
					badges: [
						"Documentari Sociali",
						"Reportage",
						"Brand Documentary",
						"Docu-serie",
						"Piattaforme Streaming",
						"Broadcast",
						"Festival",
					],
					description:
						"Produciamo documentari per piattaforme streaming, broadcast e festival. Dal reportage aziendale alla docu-serie originale, con un team editoriale e tecnico dedicato.",
					buttonText: "Attiva Produzione Documentario",
				},
				{
					title: "Videoclip & Musica",
					badges: [
						"Videoclip Ufficiali",
						"Lyric Video",
						"Behind the Scenes",
						"Live Session",
						"EPK",
						"Concert Film",
						"Promo",
					],
					description:
						"Videoclip ufficiali, live session e EPK per artisti e label. Crew creative con esperienza nel settore musicale, capaci di trasformare un brano in una narrazione visiva.",
					buttonText: "Attiva Videoclip",
				},
				{
					title: "Post-produzione",
					badges: [
						"Montaggio",
						"Color Grading",
						"VFX",
						"Motion Graphics",
						"Sound Design",
						"Mix Audio",
						"Finalizzazione",
					],
					description:
						"Servizi completi di post-produzione: montaggio, color grading, VFX, motion graphics e sound design. Disponibile anche per materiale già girato che ha bisogno di una post-produzione di qualità.",
					buttonText: "Attiva Post-produzione",
				},
			],
		},
		howItWorks: {
			label: "Come funziona",
			title: "Dal brief al video in quattro passi",
			steps: [
				{
					number: "01",
					title: "Inviaci il brief",
					description:
						"Descrivi il progetto: tipo di video, formato, durata, date di ripresa e scadenza di consegna. Più il brief è preciso, più i professionisti saranno calibrati sulle tue esigenze.",
				},
				{
					number: "02",
					title: "Selezioniamo i professionisti",
					description:
						"Identifichiamo i profili più adatti dal nostro network per competenze, stile, disponibilità e attrezzatura — e li proponiamo entro 24 ore.",
				},
				{
					number: "03",
					title: "Avviamo la produzione",
					description:
						"Entriamo in azione con un flusso di lavoro definito, milestone chiare e aggiornamenti costanti per garantire qualità e rispetto delle scadenze.",
				},
				{
					number: "04",
					title: "Consegniamo i file",
					description:
						"Materiale revisionato e pronto per la distribuzione. Consegna nei formati richiesti, nei tempi stabiliti, senza sorprese.",
				},
			],
		},
		homeCta: {
			label: "Lavoriamo insieme",
			title: "Hai un progetto video da avviare?",
			description:
				"Spot, documentari, contenuti social, riprese aeree o animazioni: troviamo il professionista giusto e avviamo la produzione in tempi rapidi.",
			primaryCta: "Avvia un progetto video",
		},
		recruitingCta: {
			label: "Entra nel network",
			title: "Sei un professionista del video?",
			description:
				"Lavoriamo con video editor, operatori, drone pilot, motion designer e content creator. Se hai competenze verticali nel mondo video e vuoi far parte di un network selezionato, raccontaci chi sei.",
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
					{ label: "Content Creation", href: "/services" },
					{ label: "Spot Pubblicitari", href: "/services" },
					{ label: "Produzioni Cinematografiche", href: "/services" },
					{ label: "Video Corporate", href: "/services" },
					{ label: "Eventi & Convegni", href: "/services" },
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
				"A curated network of video professionals for every stage of your production. From brief to delivery, fast and tailored to your project.",
			primaryCta: "Start a video project",
			secondaryCta: "Contact us",
		},
		intro: {
			titleStart:
				"Marknet connects brands, agencies and creators with the right video professionals for any type of production.",
			paragraphOne:
				"Video editors, camera operators, drone pilots, motion designers and content creators. We select the talent from our network and assemble the team based on your project, your format and your deadlines.",
		},
		services: {
			title: "Choose the production. We'll build the team.",
			items: [
				{
					title: "Content Creation",
					badges: [
						"Social Video",
						"Reels & Shorts",
						"YouTube",
						"TikTok",
						"UGC",
						"Brand Content",
						"Storytelling",
					],
					description:
						"We produce video content for social media, brand campaigns and digital platforms. From scripting to shooting, editing and multi-platform distribution.",
					buttonText: "Start Content Creation",
				},
				{
					title: "Advertising & Commercials",
					badges: [
						"TV",
						"Digital",
						"Pre-roll",
						"Social Campaigns",
						"Branded Content",
						"Out-of-Home",
						"Product Launch",
					],
					description:
						"We produce commercials for TV, digital and social platforms. From concept to delivery, with a dedicated team including director, DOP, shoot crew and full post-production.",
					buttonText: "Start Advertising Production",
				},
				{
					title: "Film & Cinema",
					badges: [
						"Short Films",
						"Documentaries",
						"Web Series",
						"Institutional Film",
						"Feature Film",
						"Music Video",
						"Fiction",
					],
					description:
						"We assemble full crews for film productions of any scale: from independent short films to streaming documentaries, institutional films and fiction series.",
					buttonText: "Start a Film Production",
				},
				{
					title: "Corporate Video",
					badges: [
						"Company Presentations",
						"Interviews",
						"Training",
						"Product Video",
						"Recruitment",
						"Investor Relations",
						"Institutional",
					],
					description:
						"Corporate videos for presentations, training, product launches and internal communications. Fast turnaround, attention to detail and ready for every distribution channel.",
					buttonText: "Start Corporate Video",
				},
				{
					title: "Events & Conferences",
					badges: [
						"Conferences",
						"Trade Shows",
						"Conventions",
						"Product Launches",
						"Award Ceremonies",
						"Summits",
						"Multicam",
					],
					description:
						"Professional video coverage for events, conferences, trade shows and conventions. Multicam crews, real-time switching and post-production to turn every event into a lasting communication asset.",
					buttonText: "Start Event Coverage",
				},
				{
					title: "Live Streaming",
					badges: [
						"Webinars",
						"Online Conferences",
						"Live Launches",
						"YouTube Live",
						"LinkedIn Live",
						"Multi-platform",
						"Hybrid Events",
					],
					description:
						"We manage direction and live distribution on YouTube, LinkedIn, Vimeo and custom platforms. Multicam setup, real-time graphics and high-quality archive recording.",
					buttonText: "Start Live Streaming",
				},
				{
					title: "Aerial & Drone",
					badges: [
						"Real Estate",
						"Industrial",
						"Tourism",
						"Cinema",
						"Construction",
						"Landscape",
						"4K / RAW",
					],
					description:
						"Aerial footage with ENAC-certified pilots for any project: real estate, tourism, industrial, commercials and cinema. Material in 4K or RAW, ready for post-production.",
					buttonText: "Start Aerial Production",
				},
				{
					title: "Documentaries",
					badges: [
						"Social Documentaries",
						"Reportage",
						"Brand Documentary",
						"Docu-series",
						"Streaming Platforms",
						"Broadcast",
						"Film Festivals",
					],
					description:
						"We produce documentaries for streaming platforms, broadcast and film festivals. From corporate reportage to original docu-series, with a dedicated editorial and technical team.",
					buttonText: "Start a Documentary",
				},
				{
					title: "Music Video",
					badges: [
						"Official Music Video",
						"Lyric Video",
						"Behind the Scenes",
						"Live Session",
						"EPK",
						"Concert Film",
						"Promo",
					],
					description:
						"Official music videos, live sessions and EPKs for artists and labels. Creative crews with experience in the music industry, turning a track into a visual story.",
					buttonText: "Start a Music Video",
				},
				{
					title: "Post-production",
					badges: [
						"Editing",
						"Color Grading",
						"VFX",
						"Motion Graphics",
						"Sound Design",
						"Audio Mix",
						"Finishing",
					],
					description:
						"Full post-production services: editing, color grading, VFX, motion graphics and sound design. Also available for already-shot material that needs a professional finishing touch.",
					buttonText: "Start Post-production",
				},
			],
		},
		howItWorks: {
			label: "How it works",
			title: "From brief to final video in four steps",
			steps: [
				{
					number: "01",
					title: "Send us your brief",
					description:
						"Tell us about the project: video type, format, duration, shoot dates and delivery deadline. The more detail you provide, the better we match the professional to your needs.",
				},
				{
					number: "02",
					title: "We select the right professional",
					description:
						"We find the best match from our network — based on skills, style, availability and equipment — and present them within 24 hours.",
				},
				{
					number: "03",
					title: "Production starts",
					description:
						"The professional gets to work with a defined workflow, clear milestones and regular updates to ensure quality and on-time delivery.",
				},
				{
					number: "04",
					title: "We deliver the files",
					description:
						"Reviewed, distribution-ready material. Delivered in the required formats, on schedule, with no surprises.",
				},
			],
		},
		homeCta: {
			label: "Let's work together",
			title: "Got a video project to launch?",
			description:
				"Commercials, documentaries, social content, aerial footage or animation: we find the right professional and get production moving fast.",
			primaryCta: "Start a video project",
		},
		recruitingCta: {
			label: "Join the network",
			title: "Are you a video professional?",
			description:
				"We work with video editors, camera operators, drone pilots, motion designers and content creators. If you have deep expertise in video production and want to join a curated network, tell us about yourself.",
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
					{ label: "Video Editor", href: "/services" },
					{ label: "Content Creator", href: "/services" },
					{ label: "Camera Operator", href: "/services" },
					{ label: "Drone Pilot", href: "/services" },
					{ label: "Motion Designer", href: "/services" },
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
