"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitLinkButton } from "@/components/ui/SplitLinkButton";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(120px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

export function HeroContatti() {
	const imgRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: imgRef,
		offset: ["start end", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
	return (
		<section
			style={{
				...sectionPad,
				paddingBottom: 0,
				background: "var(--surface-2)",
			}}
		>
			<div
				style={{
					display: "grid",
					gridTemplateColumns:
						"repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
					gap: "clamp(32px, 5vw, 80px)",
					alignItems: "center",
					paddingBottom: "clamp(40px, 6vw, 80px)",
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
							Contatti
						</p>
					</ScrollReveal>
					<ScrollReveal variant="fadeUp" delay={0.1}>
						<h1
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
							Parliamo del tuo progetto.
						</h1>
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
							Che si tratti di una ristrutturazione, di un nuovo spazio
							commerciale o di un progetto ricettivo, siamo pronti ad
							ascoltarti. Scrivici e ti ricontatteremo entro 24 ore.
						</p>
					</ScrollReveal>

					<div style={{ marginTop: 32 }}>
						<SplitLinkButton href="#form" label="Scrivici ora" delay={0.45} />
					</div>
				</div>
			</div>
			<div
				ref={imgRef}
				style={{
					marginInline: "calc(-1 * clamp(24px, 5vw, 80px))",
					lineHeight: 0,
					overflow: "hidden",
					height: "clamp(260px, 40vw, 600px)",
				}}
			>
				<motion.img
					src="/images/broker-clients-discussing-blueprint.jpg"
					alt="Studio Progetti e Servizi V — Contatti"
					width={1920}
					height={800}
					loading="eager"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						display: "block",
						scale,
						transformOrigin: "center center",
					}}
				/>
			</div>
		</section>
	);
}

export default HeroContatti;
