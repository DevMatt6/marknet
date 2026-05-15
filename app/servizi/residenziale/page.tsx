import { SectorPageTemplate } from "@/components/templates/SectorPageTemplate";

export const metadata = {
	title: "Ristrutturazione Residenziale | Progetti e Servizi V",
	description:
		"Progettiamo e realizziamo ristrutturazioni di appartamenti, ville e condomini a Roma. Dalla prima idea alla consegna delle chiavi, con un architetto al tuo fianco.",
};

export default function ResidenzialePage() {
	return (
		<SectorPageTemplate
			sector={{
				slug: "residenziale",
				name: "Progettiamo insieme il tuo spazio ideale",
				label: "Settore Residenziale",
			}}
			heroTagline="Trasformiamo la tua casa in uno spazio su misura, curandone ogni dettaglio dalla progettazione alla consegna."
			heroImage="/images/colorful-pastel-minimal-interior-design.jpg"
			descriptionTitle="La tua casa, il tuo stile"
			description={[
				"Ogni abitazione racconta una storia. Il nostro approccio parte dall'ascolto: capire come vivi, cosa ami e come immagini i tuoi spazi è il primo passo verso un progetto davvero tuo.",
				"Dall'appartamento in città alla villa, affianchiamo i nostri clienti con competenza e cura, gestendo ogni fase dei lavori — dai permessi alla direzione cantiere — con totale trasparenza.",
				"Qualità dei materiali, rispetto dei tempi e attenzione ai dettagli sono i principi che guidano ogni nostro intervento residenziale.",
			]}
			services={[
				{
					icon: "TextSearch",
					title: "Analisi e consulenza iniziale",
					description:
						"Sopralluogo tecnico, ascolto delle esigenze e definizione degli obiettivi di progetto. Nessun costo per la prima consulenza.",
				},
				{
					icon: "PenTool",
					title: "Progettazione architettonica",
					description:
						"Elaborazione di piante, render 3D e documentazione tecnica completa per visualizzare il risultato finale prima di iniziare i lavori.",
				},
				{
					icon: "SwatchBook",
					title: "Selezione materiali e arredi",
					description:
						"Selezione guidata di materiali, finiture e complementi d'arredo, con accesso ai migliori fornitori del settore.",
				},
				{
					icon: "Lightbulb",
					title: "Progetto impianti e illuminazione",
					description:
						"Studio degli impianti elettrici, idraulici e termici con particolare attenzione all'efficienza energetica e al comfort abitativo.",
				},
				{
					icon: "FileText",
					title: "Pratiche burocratiche",
					description:
						"Gestione completa di permessi, CILA, SCIA e ogni adempimento normativo necessario per procedere in sicurezza e legalità.",
				},
				{
					icon: "HardHat",
					title: "Direzione lavori e collaudo",
					description:
						"Coordinamento delle imprese esecutrici, supervisione quotidiana del cantiere e collaudo finale prima della consegna.",
				},
			]}
			process={[
				{
					icon: "TextSearch",
					title: "Sopralluogo e analisi",
					description:
						"Visitiamo l'immobile, rileviamo lo stato di fatto e ascoltiamo le tue aspettative per costruire insieme il brief di progetto.",
				},
				{
					icon: "PenTool",
					title: "Concept e progetto definitivo",
					description:
						"Sviluppiamo il concept creativo e lo traduciamo in elaborati tecnici condivisi e approvati con il cliente.",
				},
				{
					icon: "FileText",
					title: "Iter autorizzativo",
					description:
						"Predisponiamo e depositiamo tutta la documentazione presso gli enti competenti, gestendo l'iter burocratico dall'inizio alla fine.",
				},
				{
					icon: "HardHat",
					title: "Esecuzione e direzione lavori",
					description:
						"Selezioniamo le migliori imprese, coordiniamo il cantiere e garantiamo il rispetto di tempi, costi e qualità.",
				},
				{
					icon: "CheckCircle2",
					title: "Collaudo e consegna",
					description:
						"Verifichiamo ogni dettaglio prima di consegnarti le chiavi, con tutta la documentazione finale dell'intervento.",
				},
			]}
			projects={[
				{
					slug: "appartamento-prati",
					title: "Appartamento Prati",
					location: "Roma, Prati",
					year: "2024",
					image: "/images/projects/appartamento-prati.jpg",
				},
				{
					slug: "villa-appia-antica",
					title: "Villa Appia Antica",
					location: "Roma, Appia",
					year: "2023",
					image: "/images/projects/villa-appia-antica.jpg",
				},
			]}
		/>
	);
}
