import { ScrollReveal } from "@/components/ui/ScrollReveal";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

export function IntroSection() {
	return (
		<section
			style={{
				...sectionPad,
				background: "var(--background)",
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
				gap: "clamp(40px, 6vw, 100px)",
				alignItems: "center",
			}}
		>
			{/* Colonna testo */}
			<div>
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
						Chi siamo
					</p>
				</ScrollReveal>

				<ScrollReveal variant="fadeUp" delay={0.1}>
					<h2
						style={{
							fontSize: "var(--text-4xl)",
							fontWeight: 600,
							color: "var(--foreground)",
							lineHeight: 1.15,
							marginBottom: "var(--space-6)",
							fontFamily: "var(--font-display)",
						}}
					>
						Chi siamo davvero
					</h2>
				</ScrollReveal>

				<ScrollReveal variant="fadeUp" delay={0.2}>
					<p
						style={{
							fontSize: "var(--text-base)",
							color: "var(--foreground)",
							opacity: 0.7,
							lineHeight: 1.75,
							marginBottom: "var(--space-4)",
							maxWidth: "62ch",
						}}
					>
						Progetti e Servizi V nasce da un'idea semplice: ristrutturare non
						dovrebbe mai essere stressante. Ogni progetto inizia con un ascolto,
						si sviluppa con cura e si conclude nei tempi stabiliti — senza
						imprevisti, senza sorprese.
					</p>
				</ScrollReveal>

				<ScrollReveal variant="fadeUp" delay={0.3}>
					<p
						style={{
							fontSize: "var(--text-base)",
							color: "var(--foreground)",
							opacity: 0.7,
							lineHeight: 1.75,
							maxWidth: "62ch",
						}}
					>
						Non vendiamo solo lavori edili. Offriamo un percorso guidato: dalla
						visione iniziale al risultato finale, ogni scelta viene condivisa
						con te da un architetto dedicato, che conosce il tuo spazio meglio
						di chiunque altro.
					</p>
				</ScrollReveal>
			</div>

			{/* Colonna immagine — sostituire con next/image quando disponibile */}
			<ScrollReveal variant="fadeUp" delay={0.15}>
				<div
					style={{
						aspectRatio: "4/3",
						background: "var(--surface)",
						border: "1px solid rgba(10,25,50,0.08)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<p
						style={{
							color: "var(--foreground)",
							opacity: 0.3,
							fontSize: "var(--text-sm)",
						}}
					>
						Fotografia d'ambiente
					</p>
				</div>
			</ScrollReveal>
		</section>
	);
}
