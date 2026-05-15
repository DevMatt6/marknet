"use client";

import {
	TextSearch,
	PenTool,
	SwatchBook,
	Lightbulb,
	FileText,
	HardHat,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitLinkButton } from "@/components/ui/SplitLinkButton";
import { text } from "framer-motion/client";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

const STEPS = [
	{
		icon: TextSearch,
		title: "Analisi degli spazi e ascolto delle tue esigenze",
		text: "Ascoltiamo i tuoi desideri e analizziamo lo spazio per costruire soluzioni su misura, in linea con il tuo stile di vita.",
	},
	{
		icon: PenTool,
		title: "Progetto architettonico e layout funzionale",
		text: "Traduciamo le tue idee in un progetto dettagliato che massimizza lo spazio e bilancia estetica e praticità.",
	},
	{
		icon: SwatchBook,
		title: "Scelta dei materiali e dei complementi d'arredo",
		text: "Ti guidiamo nella selezione di materiali, finiture e arredi, curandone l'integrazione con il progetto complessivo.",
	},
	{
		icon: Lightbulb,
		title: "Cura di impianti, finiture, illuminazione e colori",
		text: "Definiamo ogni dettaglio — dagli impianti ai colori — per ambienti funzionali, confortevoli e dall'atmosfera unica.",
	},
	{
		icon: FileText,
		title: "Pratiche burocratiche e conformità alle normative",
		text: "Gestiamo permessi, autorizzazioni e tutta la documentazione necessaria, sollevandoti da ogni onere burocratico.",
	},
	{
		icon: HardHat,
		title: "Coordinamento delle imprese, direzione lavori, collaudo e consegna",
		text: "Coordiniamo le imprese e supervisioniamo i lavori in ogni fase, fino al collaudo finale e alla consegna delle chiavi.",
	},
];

export function ServiziList() {
	return (
		<>
			<style>{`
				@media (max-width: 767px) {
					.step-grid { grid-template-columns: 1fr !important; }
				}
			`}</style>
			<section
				style={{
					...sectionPad,
					paddingBottom: 0,
					background: "var(--background)",
				}}
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
						gap: "clamp(32px, 5vw, 80px)",
						alignItems: "flex-end",
						marginBottom: "clamp(40px, 6vw, 80px)",
					}}
				>
					{/* Sinistra: eyebrow + heading */}
					<div style={{ display: "flex", flexDirection: "column" }}>
						<ScrollReveal variant="fadeUp" delay={0}>
							<p
								style={{
									fontSize: "var(--text-sm)",
									color: "var(--accent)",
									fontWeight: 600,
									letterSpacing: "0.1em",
									textTransform: "uppercase",
									marginBottom: "var(--space-6)",
								}}
							>
								Progettazione su misura
							</p>
						</ScrollReveal>
						<ScrollReveal variant="fadeUp" delay={0.1}>
							<h2
								style={{
									fontSize: "var(--text-4xl)",
									fontWeight: 500,
									color: "var(--foreground)",
									lineHeight: 1.1,
									fontFamily: "var(--font-display)",
									maxWidth: 600,
									margin: 0,
								}}
							>
								Il tuo progetto, passo dopo passo.
							</h2>
						</ScrollReveal>
					</div>

					{/* Destra: paragrafo + link */}
					<div style={{ display: "flex", flexDirection: "column" }}>
						<ScrollReveal variant="fadeUp" delay={0.3}>
							<p
								style={{
									marginTop: 32,
									marginBottom: 0,
									fontSize: "var(--text-base)",
									color: "var(--foreground)",
									lineHeight: 1.75,
								}}
							>
								Ogni progetto è un viaggio unico, e noi siamo al tuo fianco in
								ogni tappa. Dall'idea iniziale alla consegna finale, ti guidiamo
								con competenza e passione, trasformando i tuoi desideri in
								realtà tangibili.
							</p>
						</ScrollReveal>
					</div>
				</div>

				<div
					style={{
						marginInline: "calc(-1 * clamp(24px, 5vw, 80px))",
						borderTop: "1px solid var(--border)",
						borderBottom: "1px solid var(--border)",
					}}
				>
					<div
						className="step-grid"
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							paddingInline: "clamp(24px, 5vw, 80px)",
						}}
					>
						{STEPS.slice(0, 3).map((step, i) => (
							<ScrollReveal
								key={step.title}
								className="step-card"
								variant="fadeUp"
								delay={0.1 + i * 0.1}
							>
								<div
									style={{
										paddingTop: "var(--space-12)",
										paddingBottom: "var(--space-12)",
										paddingRight: "clamp(24px, 3vw, 40px)",
									}}
								>
									<step.icon
										style={{
											width: "clamp(2.5rem, 4vw, 3.5rem)",
											height: "clamp(2.5rem, 4vw, 3.5rem)",
											color: "var(--accent)",
											marginBottom: "var(--space-12)",
											strokeWidth: 1.5,
										}}
									/>

									<h3
										style={{
											fontSize: "var(--text-lg)",
											fontWeight: 500,
											color: "var(--foreground)",
											marginBottom: "var(--space-3)",
											fontFamily: "var(--font-display)",
										}}
									>
										{step.title}
									</h3>
									<p
										style={{
											fontSize: "var(--text-sm)",
											color: "var(--foreground)",
											lineHeight: 1.7,
											maxWidth: "48ch",
										}}
									>
										{step.text}
									</p>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>

				<div
					style={{
						marginInline: "calc(-1 * clamp(24px, 5vw, 80px))",
						borderBottom: "1px solid var(--border)",
					}}
				>
					<div
						className="step-grid"
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							paddingInline: "clamp(24px, 5vw, 80px)",
						}}
					>
						{STEPS.slice(3).map((step, i) => (
							<ScrollReveal
								key={step.title}
								className="step-card"
								variant="fadeUp"
								delay={0.1 + i * 0.1}
							>
								<div
									style={{
										paddingTop: "var(--space-12)",
										paddingBottom: "var(--space-12)",
										paddingRight: "clamp(24px, 3vw, 40px)",
									}}
								>
									<step.icon
										style={{
											width: "clamp(2.5rem, 4vw, 3.5rem)",
											height: "clamp(2.5rem, 4vw, 3.5rem)",
											color: "var(--accent)",
											marginBottom: "var(--space-12)",
											strokeWidth: 1.5,
										}}
									/>

									<h3
										style={{
											fontSize: "var(--text-lg)",
											fontWeight: 500,
											color: "var(--foreground)",
											marginBottom: "var(--space-3)",
											fontFamily: "var(--font-display)",
										}}
									>
										{step.title}
									</h3>
									<p
										style={{
											fontSize: "var(--text-sm)",
											color: "var(--foreground)",
											lineHeight: 1.7,
											maxWidth: "48ch",
										}}
									>
										{step.text}
									</p>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
