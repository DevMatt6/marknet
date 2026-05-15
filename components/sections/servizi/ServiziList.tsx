"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const SERVICES = [
	{
		number: "01",
		title: "Progettazione",
		body: "Tutto parte dal progetto. Prima di toccare un muro, studiamo ogni dettaglio: distribuzione degli spazi, layout funzionale, scelta dei materiali, flussi di luce naturale e artificiale. Elaboriamo soluzioni su misura per ogni tipologia di immobile — ogni progetto è personalizzato in base alle tue esigenze, al contesto e alle potenzialità dello spazio. Il risultato è un progetto approvato e condiviso prima di iniziare: nessuna sorpresa in cantiere.",
	},
	{
		number: "02",
		title: "Amministrazione",
		body: "Ci occupiamo di tutte le pratiche burocratiche: permessi edilizi, autorizzazioni comunali, CILA, SCIA e rapporti con gli enti competenti. Ti solleviamo da ogni incombenza amministrativa — tu ti concentri sul risultato, noi gestiamo la burocrazia. Siamo aggiornati su bonus e detrazioni fiscali: ti consigliamo il regime più vantaggioso per il tuo intervento.",
	},
	{
		number: "03",
		title: "Ristrutturazione",
		body: "Quando il progetto è approvato, inizia la fase operativa. Coordiniamo direttamente maestranze e fornitori, con un direttore dei lavori dedicato che controlla avanzamento, qualità e rispetto dei costi. Rispettiamo le scadenze — non è uno slogan: è il risultato di anni di pianificazione rigorosa. La consegna nei tempi concordati è parte integrante del nostro metodo.",
	},
];

function ServiceRow({ number, title, body }: (typeof SERVICES)[number]) {
	return (
		<motion.div
			initial="rest"
			whileHover="hover"
			style={{
				position: "relative",
				paddingBlock: "clamp(32px, 4vw, 48px)",
				borderTop: "1px solid var(--border)",
				display: "grid",
				gridTemplateColumns: "80px 1fr",
				gap: "clamp(24px, 4vw, 48px)",
				alignItems: "start",
				cursor: "default",
			}}
		>
			{/* Accent top border */}
			<motion.div
				variants={{
					rest: { scaleX: 0 },
					hover: { scaleX: 1 },
				}}
				transition={{ duration: 0.35, ease: "easeOut" }}
				style={{
					position: "absolute",
					top: -1,
					left: 0,
					right: 0,
					height: 2,
					background: "var(--accent)",
					transformOrigin: "left",
				}}
			/>

			{/* Number */}
			<span
				style={{
					fontSize: "var(--text-sm)",
					color: "var(--muted-foreground)",
					paddingTop: 4,
				}}
			>
				{number}
			</span>

			{/* Content */}
			<div>
				<h3
					style={{
						fontSize: "var(--text-xl)",
						fontWeight: 700,
						fontFamily: "var(--font-display)",
						color: "var(--foreground)",
						marginBottom: "var(--space-4)",
					}}
				>
					{title}
				</h3>
				<p
					style={{
						fontSize: "var(--text-base)",
						color: "var(--foreground)",
						opacity: 0.6,
						lineHeight: 1.75,
						maxWidth: "64ch",
					}}
				>
					{body}
				</p>
			</div>
		</motion.div>
	);
}

export function ServiziList() {
	return (
		<section
			style={{
				paddingBlock: "clamp(80px, 10vw, 140px)",
				paddingInline: "clamp(24px, 5vw, 80px)",
				background: "var(--background)",
			}}
		>
			{/* Header */}
			<ScrollReveal variant="fadeUp" delay={0}>
				<p
					style={{
						fontSize: "var(--text-sm)",
						color: "var(--accent)",
						fontWeight: 600,
						letterSpacing: "0.1em",
						textTransform: "uppercase",
						marginBottom: "var(--space-4)",
					}}
				>
					Come lavoriamo
				</p>
			</ScrollReveal>

			<ScrollReveal variant="fadeUp" delay={0.1}>
				<h2
					style={{
						fontSize: "var(--text-4xl)",
						fontWeight: 500,
						fontFamily: "var(--font-display)",
						color: "var(--foreground)",
						lineHeight: 1.15,
						marginBottom: "clamp(40px, 6vw, 80px)",
						maxWidth: 700,
					}}
				>
					Tre fasi. Zero compromessi.
				</h2>
			</ScrollReveal>

			{/* Rows */}
			<div>
				{SERVICES.map((service, i) => (
					<ScrollReveal
						key={service.number}
						variant="fadeUp"
						delay={0.1 + i * 0.1}
					>
						<ServiceRow {...service} />
					</ScrollReveal>
				))}
				{/* Closing border */}
				<div style={{ borderTop: "1px solid var(--border)" }} />
			</div>
		</section>
	);
}

export default ServiziList;
