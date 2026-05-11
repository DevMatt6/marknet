"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Ruler, Wrench, Clock } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

const STEPS = [
	{
		icon: Ruler,
		title: "Progettazione",
		text: "Tutto parte dal progetto. Prima di toccare un muro, studiamo ogni dettaglio: layout, materiali, flussi di luce e spazio.",
	},
	{
		icon: Wrench,
		title: "Ristrutturazione",
		text: "Quando il progetto è approvato e condiviso, inizia la fase operativa. I lavori sono coordinati dal nostro architetto di riferimento.",
	},
	{
		icon: Clock,
		title: "Consegna in tempi brevi",
		text: "Rispettiamo le scadenze. Non è uno slogan: è il risultato di anni di pianificazione rigorosa. La consegna nei tempi concordati è parte integrante del nostro contratto.",
	},
];

export function ApplicationsSection() {
	const [underlineHovered, setUnderlineHovered] = useState(false);
	const imgRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: imgRef,
		offset: ["start end", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

	return (
		<section
			style={{ ...sectionPad, paddingBottom: 0, background: "var(--surface)" }}
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
							Approccio modulare
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
							Un processo collaudato che migliora a ogni progetto.
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
							Ogni progetto nasce da un metodo collaudato. Progettiamo e
							ristrutturiamo con un unico interlocutore al tuo fianco — dalla
							prima riunione fino alla consegna delle chiavi.
						</p>
					</ScrollReveal>

					<ScrollReveal variant="fadeUp" delay={0.45}>
						<div style={{ marginTop: 32 }}>
							<Link
								href="/chi-siamo"
								style={{
									position: "relative",
									display: "inline-block",
									color: "var(--accent)",
									fontSize: "var(--text-sm)",
									fontWeight: 600,
									textDecoration: "none",
								}}
								onMouseEnter={() => setUnderlineHovered(true)}
								onMouseLeave={() => setUnderlineHovered(false)}
							>
								Scopri chi siamo →
								<motion.span
									aria-hidden
									style={{
										position: "absolute",
										left: 0,
										bottom: -2,
										height: 1,
										width: "100%",
										background: "var(--accent)",
										transformOrigin: "left",
										display: "block",
									}}
									animate={{ scaleX: underlineHovered ? 1 : 0 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									initial={{ scaleX: 0 }}
								/>
							</Link>
						</div>
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
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
						paddingInline: "clamp(24px, 5vw, 80px)",
					}}
				>
					{STEPS.map((step, i) => (
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
										fontSize: "var(--text-xl)",
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
										fontSize: "var(--text-base)",
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
				ref={imgRef}
				style={{
					marginInline: "calc(-1 * clamp(24px, 5vw, 80px))",
					lineHeight: 0,
					overflow: "hidden",
					height: "clamp(260px, 40vw, 600px)",
				}}
			>
				<motion.img
					src="/images/colorful-pastel-minimal-interior-design.jpg"
					alt="Progettazione interni"
					width={1920}
					height={800}
					loading="lazy"
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
