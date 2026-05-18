"use client";

import { MessageCircle, ListChecks, Gem } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

const VALUES = [
	{
		icon: MessageCircle,
		title: "Ascolto",
		text: "Partiamo sempre dalle tue esigenze, ascoltando ogni dettaglio per costruire una visione condivisa del progetto.",
	},
	{
		icon: ListChecks,
		title: "Metodo",
		text: "Un processo strutturato e trasparente, con un unico referente al tuo fianco in ogni fase — dalla prima idea alla consegna delle chiavi.",
	},
	{
		icon: Gem,
		title: "Cura",
		text: "Ogni spazio è un progetto unico. Curiamo ogni dettaglio — dalla scelta dei materiali alla direzione lavori — con la massima attenzione.",
	},
];

export function ValoriList() {
	return (
		<>
			<style>{`
				@media (max-width: 767px) {
					.valori-grid { grid-template-columns: 1fr !important; }
				}
			`}</style>
			<section
				style={{
					...sectionPad,
					paddingBottom: 0,
					background: "white",
				}}
			>
				{/* Header a due colonne */}
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
								I nostri valori
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
								Il carattere che guida ogni progetto.
							</h2>
						</ScrollReveal>
					</div>

					{/* Destra: paragrafo */}
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
							Tre princìpi orientano il nostro lavoro da sempre: ascoltare
							davvero il cliente, seguire un metodo rigoroso e curare ogni
							dettaglio come se fosse il nostro spazio.
						</p>
					</ScrollReveal>
				</div>

				{/* Riga unica di 3 card */}
				<div
					style={{
						marginInline: "calc(-1 * clamp(24px, 5vw, 80px))",
						borderTop: "1px solid var(--border)",
						borderBottom: "1px solid var(--border)",
					}}
				>
					<div
						className="valori-grid"
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							paddingInline: "clamp(24px, 5vw, 80px)",
						}}
					>
						{VALUES.map((v, i) => (
							<ScrollReveal
								key={v.title}
								variant="fadeUp"
								delay={0.1 + i * 0.1}
							>
								<div
									style={{
										paddingTop: "var(--space-12)",
										paddingBottom: "var(--space-12)",
										paddingRight: "clamp(24px, 3vw, 40px)",
										...(i > 0 && {
											borderLeft: "1px solid var(--border)",
											paddingLeft: "clamp(24px, 3vw, 40px)",
										}),
									}}
								>
									<v.icon
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
										{v.title}
									</h3>
									<p
										style={{
											fontSize: "var(--text-sm)",
											color: "var(--foreground)",
											lineHeight: 1.7,
											maxWidth: "48ch",
										}}
									>
										{v.text}
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

export default ValoriList;
