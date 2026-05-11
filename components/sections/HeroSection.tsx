"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NavbarDark } from "@/components/ui/NavbarDark";

export function HeroSection() {
	const { scrollY } = useScroll();
	const bgY = useTransform(scrollY, [0, 600], ["0%", "5%"]);

	return (
		<>
			<NavbarDark />
			<section
				style={{
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					paddingBlock: "clamp(80px, 10vw, 140px)",
					paddingInline: "clamp(24px, 5vw, 80px)",
					position: "relative",
					overflow: "hidden",
					background: "var(--primary)",
				}}
			>
				{/* Background image con parallax */}
				<motion.div
					style={{
						position: "absolute",
						inset: "-10%",
						y: bgY,
						zIndex: 0,
					}}
				>
					<Image
						src="/images/hero-image.jpg"
						alt=""
						fill
						priority
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</motion.div>

				{/* Overlay */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						background: "rgba(0, 0, 0, 0.5)",
						zIndex: 1,
					}}
				/>

				{/* Content */}
				<div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
					{/* 1. Eyebrow 
				<ScrollReveal variant="fadeUp" delay={0.1}>
					<p
						style={{
							fontSize: "var(--text-sm)",
							color: "rgba(255,255,255,0.6)",
							letterSpacing: "0.12em",
							textTransform: "uppercase",
							marginBottom: "var(--space-6)",
							fontWeight: 500,
						}}
					>
						Progetti e Servizi V — Roma
					</p>
				</ScrollReveal>*/}

					{/* 2. Heading */}
					<SplitText
						tag="h1"
						stagger={0.03}
						delay={0.2}
						immediate
						accentWords={["fine."]}
						accentColor="var(--accent)"
						style={{
							fontSize: "var(--text-hero)",
							fontWeight: 500,
							color: "#ffffff",
							lineHeight: 1.1,
							marginBottom: "var(--space-8)",
							fontFamily: "var(--font-display)",
						}}
					>
						Progettiamo il tuo spazio
					</SplitText>

					{/* 3. Subheading */}
					<ScrollReveal variant="fadeUp" delay={0.5}>
						<p
							style={{
								fontSize: "var(--text-lg)",
								color: "rgba(255,255,255)",
								maxWidth: 650,
								lineHeight: 1.6,
								marginBottom: "var(--space-10)",
							}}
						>
							Ristrutturazione di ambienti residenziali, commerciali e strutture
							ricettive. Un architetto al tuo fianco — dalla prima idea alla
							consegna delle chiavi.
						</p>
					</ScrollReveal>

					{/* 4. CTA Row */}
					<ScrollReveal variant="fadeUp" delay={0.65}>
						<div
							style={{
								display: "flex",
								gap: "var(--space-4)",
								flexWrap: "wrap",
							}}
						>
							<MagneticButton
								as="a"
								href="/il-metodo"
								style={{
									padding: "14px 32px",
									background: "var(--accent)",
									color: "white",
									fontSize: "var(--text-sm)",
									fontWeight: 600,
									textDecoration: "none",
									display: "inline-block",
								}}
							>
								Scopri il nostro metodo
							</MagneticButton>

							<MagneticButton
								as="a"
								href="/progetti"
								style={{
									padding: "14px 32px",
									background: "transparent",
									color: "#ffffff",
									fontSize: "var(--text-sm)",
									fontWeight: 600,
									border: "1px solid rgba(255,255,255,0.4)",
									textDecoration: "none",
									display: "inline-block",
								}}
							>
								Guarda i progetti
							</MagneticButton>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</>
	);
}
