import { ScrollReveal } from "@/components/ui/ScrollReveal";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

export function SoftwareSection() {
	return (
		<section
			style={{
				...sectionPad,
				background: "var(--primary)",
				textAlign: "center",
			}}
		>
			<ScrollReveal variant="fadeUp" delay={0}>
				<h2
					style={{
						fontSize: "var(--text-hero)",
						fontWeight: 500,
						color: "#ffffff",
						lineHeight: 1.1,
						marginBottom: "var(--space-8)",
						fontFamily: "var(--font-display)",
						maxWidth: 800,
						marginInline: "auto",
					}}
				>
					Ristrutturare senza stress?{" "}
					<span style={{ color: "var(--accent)" }}>È possibile.</span>
				</h2>
			</ScrollReveal>

			<ScrollReveal variant="fadeUp" delay={0.15}>
				<p
					style={{
						fontSize: "var(--text-md)",
						color: "rgba(255,255,255,0.7)",
						maxWidth: 680,
						marginInline: "auto",
						lineHeight: 1.7,
					}}
				>
					Coordinamento totale, un solo numero da chiamare, aggiornamenti
					puntuali a ogni fase. Progetti e Servizi V gestisce tutto — tu ti
					preoccupi solo del risultato finale.
				</p>
			</ScrollReveal>
		</section>
	);
}
