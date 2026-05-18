import { SectorPageTemplate } from "@/components/templates/SectorPageTemplate";

export const metadata = {
	title: "Ristrutturazione Commerciale | Progetti e Servizi V",
	description:
		"Progettiamo e realizziamo uffici, negozi, showroom e spazi direzionali a Roma. Soluzioni su misura che ottimizzano la funzionalità e valorizzano il brand.",
};

export default function CommercialePage() {
	return (
		<SectorPageTemplate
			sector={{
				slug: "commerciale",
				name: "Commerciale",
				label: "Settore Commerciale",
			}}
			heroTagline="Progettiamo spazi commerciali che comunicano il tuo brand, ottimizzano i flussi e aumentano la produttività."
			heroImage="/images/modern-minimalist-office.jpg"
			descriptionTitle="Spazi che lavorano per te"
			description={[
				"Un ufficio ben progettato migliora il benessere dei collaboratori e l'efficienza del lavoro. Un negozio curato nei dettagli trasforma il passante in cliente. Sappiamo quanto conti l'ambiente in cui si svolge un'attività.",
				"Realizziamo interventi su uffici, showroom, negozi, studi professionali e centri direzionali, coniugando estetica, funzionalità e conformità alle normative commerciali.",
				"Gestiamo l'intero ciclo — progetto, autorizzazioni, cantiere — minimizzando l'interruzione della tua attività.",
			]}
			descriptionImage="/images/modern-minimalist-office.jpg"
			services={[
				{
					icon: "TextSearch",
					title: "Analisi funzionale degli spazi",
					description:
						"Studio dei flussi, delle esigenze operative e dell'identità di brand per definire il concept più adatto alla tua attività.",
				},
				{
					icon: "PenTool",
					title: "Progettazione architettonica",
					description:
						"Layout, render 3D e documentazione tecnica per visualizzare e validare il progetto prima di avviare i lavori.",
				},
				{
					icon: "SwatchBook",
					title: "Interior e brand identity",
					description:
						"Selezione di materiali, finiture e arredi coerenti con l'identità del marchio e le aspettative dei tuoi clienti.",
				},
				{
					icon: "Lightbulb",
					title: "Impianti e illuminazione professionale",
					description:
						"Progettazione di impianti elettrici, dati, climatizzazione e illuminotecnica per ambienti di lavoro efficienti e confortevoli.",
				},
				{
					icon: "FileText",
					title: "Autorizzazioni e conformità",
					description:
						"Gestione di permessi edilizi, agibilità, norme antincendio e accessibilità per mettere in regola il tuo spazio commerciale.",
				},
				{
					icon: "HardHat",
					title: "Direzione lavori con continuità operativa",
					description:
						"Coordiniamo il cantiere programmando le fasi per ridurre al minimo le interruzioni della tua attività.",
				},
			]}
			process={[
				{
					icon: "TextSearch",
					title: "Briefing e analisi operativa",
					description:
						"Incontriamo il team, studiamo i flussi di lavoro e definiamo gli obiettivi funzionali ed estetici del progetto.",
				},
				{
					icon: "PenTool",
					title: "Progetto e validazione",
					description:
						"Elaboriamo il progetto architettonico e lo condividiamo con il cliente, apportando le modifiche necessarie prima di procedere.",
				},
				{
					icon: "FileText",
					title: "Autorizzazioni e pratiche",
					description:
						"Gestiamo tutte le pratiche burocratiche, dalla SCIA all'agibilità, garantendo la piena conformità normativa.",
				},
				{
					icon: "HardHat",
					title: "Cantiere coordinato",
					description:
						"Pianifichiamo i lavori per intervenire negli orari meno critici per la tua attività, rispettando i tempi concordati.",
				},
				{
					icon: "CheckCircle2",
					title: "Collaudo e apertura",
					description:
						"Verifichiamo ogni impianto e finitura, rilasciamo la documentazione completa e ti supportiamo fino all'apertura.",
				},
			]}
			projects={[
				{
					slug: "showroom-centro-storico",
					title: "Showroom Centro Storico",
					location: "Roma, Centro Storico",
					year: "2024",
					image: "/images/projects/showroom-centro-storico.jpg",
				},
				{
					slug: "uffici-eur",
					title: "Uffici EUR",
					location: "Roma, EUR",
					year: "2022",
					image: "/images/projects/uffici-eur.jpg",
				},
			]}
		/>
	);
}
