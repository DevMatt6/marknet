import { SectorPageTemplate } from "@/components/templates/SectorPageTemplate";

export const metadata = {
	title: "Ristrutturazione Strutture Ricettive | Progetti e Servizi V",
	description:
		"Progettiamo e realizziamo hotel, B&B, affittacamere e strutture ricettive a Roma. Ambienti che elevano l'esperienza degli ospiti e semplificano la gestione.",
};

export default function RicettivoPage() {
	return (
		<SectorPageTemplate
			sector={{
				slug: "ricettivo",
				name: "Ricettivo",
				label: "Settore Ricettivo",
			}}
			heroTagline="Creiamo ambienti che fanno sentire gli ospiti a casa, valorizzando ogni spazio per offrire un'esperienza indimenticabile."
			heroImage="/images/pillow-bed-luxury-hotel-room.jpg"
			descriptionTitle="L'ospitalità inizia dal progetto"
			description={[
				"In una struttura ricettiva ogni dettaglio conta: dalla prima impressione in reception alla qualità del riposo in camera. Un progetto ben pensato si traduce direttamente in recensioni positive e clienti fedeli.",
				"Lavoriamo con hotel, B&B, affittacamere, case vacanza e strutture agrituristiche, progettando spazi che bilanciano l'identità della struttura con la praticità gestionale.",
				"Conosciamo le normative specifiche del settore — dalla sicurezza antincendio all'accessibilità — e ci occupiamo di ogni aspetto burocratico, permettendoti di concentrarti sull'accoglienza.",
			]}
			services={[
				{
					icon: "Hotel",
					title: "Concept e identità della struttura",
					description:
						"Definiamo il posizionamento estetico della struttura, dalle aree comuni alle camere, creando un'atmosfera coerente e memorabile.",
				},
				{
					icon: "PenTool",
					title: "Progettazione di interni e layout",
					description:
						"Ottimizziamo la distribuzione degli spazi per massimizzare il numero di unità, il comfort degli ospiti e l'efficienza del personale.",
				},
				{
					icon: "SwatchBook",
					title: "Selezione materiali contract",
					description:
						"Scegliamo finiture e arredi con il giusto equilibrio tra estetica, durabilità e facilità di manutenzione tipici del settore hospitality.",
				},
				{
					icon: "Lightbulb",
					title: "Impianti e comfort tecnologico",
					description:
						"Progettazione di impianti di climatizzazione, illuminazione scenografica e sistemi domotici per il controllo centralizzato delle camere.",
				},
				{
					icon: "FileText",
					title: "Conformità e classificazione",
					description:
						"Gestione delle pratiche per l'apertura, l'agibilità, i requisiti di classificazione stellare e le normative regionali per le strutture ricettive.",
				},
				{
					icon: "HardHat",
					title: "Cantiere con struttura attiva",
					description:
						"Organizziamo i lavori per fasi o sezioni, permettendo alla struttura di restare operativa durante l'intervento, se necessario.",
				},
			]}
			process={[
				{
					icon: "TextSearch",
					title: "Analisi e posizionamento",
					description:
						"Studiamo la struttura, il target di ospiti e il mercato locale per definire un concept che differenzi la tua offerta.",
				},
				{
					icon: "PenTool",
					title: "Progetto architettonico e di interni",
					description:
						"Elaboriamo il progetto completo — dalla distribuzione degli spazi all'arredo — con render realistici per visualizzare il risultato.",
				},
				{
					icon: "FileText",
					title: "Pratiche e classificazione",
					description:
						"Gestiamo l'iter autorizzativo presso Comune e Regione, compresi i requisiti per la classificazione e i certificati di agibilità.",
				},
				{
					icon: "HardHat",
					title: "Cantiere per fasi",
					description:
						"Pianifichiamo l'esecuzione per minimizzare l'impatto sull'operatività: dove possibile, interveniamo senza chiudere la struttura.",
				},
				{
					icon: "CheckCircle2",
					title: "Apertura e supporto post-lavori",
					description:
						"Consegniamo la struttura con tutta la documentazione necessaria e rimaniamo disponibili per assistenza nei mesi successivi.",
				},
			]}
			projects={[
				{
					slug: "bb-trastevere",
					title: "B&B Trastevere",
					location: "Roma, Trastevere",
					year: "2023",
					image: "/images/projects/bb-trastevere.jpg",
				},
			]}
		/>
	);
}
