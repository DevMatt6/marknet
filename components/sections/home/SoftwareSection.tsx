import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { italic } from "next/dist/lib/picocolors";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

export function SoftwareSection() {
	return (
		<section
			style={{
				...sectionPad,
				background: "var(--accent)",
			}}
		>
			<div
				style={{
					display: "grid",
					gridTemplateColumns:
						"repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
					gap: "clamp(40px, 6vw, 80px)",
					alignItems: "center",
				}}
			>
				{/* Sinistra: immagine */}
				<ScrollReveal variant="fadeUp" delay={0.25}>
					<div
						style={{
							position: "relative",
							width: "100%",
							aspectRatio: "16/9",
							borderRadius: 16,
							overflow: "hidden",
						}}
					>
						<Image
							src="/images/arch-angelo-intindoli3.png"
							alt="Interior design"
							fill
							style={{ objectFit: "cover" }}
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>
				</ScrollReveal>

				{/* Destra: testo */}
				<div>
					<ScrollReveal variant="fadeUp" delay={0}>
						<h2
							style={{
								fontSize: "var(--text-4xl)",
								fontWeight: 500,
								color: "#ffffff",
								lineHeight: 1.1,
								marginBottom: "var(--space-8)",
								fontFamily: "var(--font-display)",
							}}
						>
							L'architettura è un filo testo tra l'arte e la tecnica
						</h2>
					</ScrollReveal>

					<ScrollReveal variant="fadeUp" delay={0.15}>
						<p
							style={{
								fontSize: "var(--text-md)",
								color: "rgba(255,255,255,0.7)",
								lineHeight: 1.7,
								marginBottom: "var(--space-8)",
							}}
						>
							Il mio ruolo è quello di tradurre, fondere, con il progetto prima
							e la realizzazione poi, i due aspetti che compongono la natura
							umana: razionalità irrazionalità. Fine ultimo è interpetare i
							desideri, tradurli in spazio, colori e materiali. Creare Emozioni.
						</p>
					</ScrollReveal>

					<ScrollReveal variant="fadeUp" delay={0}>
						<h2
							style={{
								fontSize: "var(--text-lg)",
								fontWeight: 500,
								fontStyle: "italic",
								color: "#ffffff",
								lineHeight: 1.1,
								marginBottom: "var(--space-8)",
								fontFamily: "var(--font-display)",
							}}
						>
							- Arch. A. Intindoli -
						</h2>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
