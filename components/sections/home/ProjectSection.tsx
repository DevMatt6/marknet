"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SplitLinkButton } from "@/components/ui/SplitLinkButton";

const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px, 10vw, 140px)",
	paddingInline: "clamp(24px, 5vw, 80px)",
};

const CARDS_DESKTOP = 3;
const CARDS_MOBILE = 1;
const GAP = 24;

export function ProjectSection() {
	const projects = siteConfig.projects;
	const total = projects.length;

	const [cardsPerView, setCardsPerView] = useState(CARDS_DESKTOP);
	const cardsPerViewRef = useRef(CARDS_DESKTOP);
	const maxIndex = Math.max(0, total - cardsPerView);
	const containerRef = useRef<HTMLDivElement>(null);
	const [cardWidth, setCardWidth] = useState(360);
	const cardWidthRef = useRef(360);
	const [current, setCurrent] = useState(0);
	const currentRef = useRef(0);
	const x = useMotionValue(0);
	const dragStartX = useRef(0);

	useEffect(() => {
		const measure = () => {
			if (!containerRef.current) return;
			const w = containerRef.current.offsetWidth;
			const cpv = w < 768 ? CARDS_MOBILE : CARDS_DESKTOP;
			cardsPerViewRef.current = cpv;
			setCardsPerView(cpv);
			const cw = Math.floor((w - GAP * (cpv - 1)) / cpv);
			cardWidthRef.current = cw;
			setCardWidth(cw);
			const newMax = Math.max(0, total - cpv);
			const clamped = Math.min(currentRef.current, newMax);
			currentRef.current = clamped;
			x.set(-(clamped * (cw + GAP)));
		};
		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [x]);

	const goTo = useCallback(
		(index: number) => {
			const next = Math.max(0, Math.min(index, maxIndex));
			currentRef.current = next;
			setCurrent(next);
			animate(x, -(next * (cardWidthRef.current + GAP)), {
				type: "spring",
				stiffness: 300,
				damping: 35,
			});
		},
		[x, maxIndex],
	);

	const handleDragEnd = useCallback(() => {
		const delta = x.get() - dragStartX.current;
		if (delta < -60) goTo(current + 1);
		else if (delta > 60) goTo(current - 1);
		else goTo(current);
	}, [x, current, goTo]);

	return (
		<section
			style={{
				...sectionPad,
				background: "var(--surface-2)",
				overflow: "visible",
			}}
		>
			{/* Header */}
			<ScrollReveal variant="fadeUp" delay={0}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
						marginBottom: "clamp(32px, 5vw, 56px)",
						flexWrap: "wrap",
						gap: "var(--space-4)",
					}}
				>
					<div>
						<p
							style={{
								fontSize: "var(--text-sm)",
								color: "var(--accent)",
								fontWeight: 600,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								marginBottom: "var(--space-3)",
							}}
						>
							I nostri lavori
						</p>
						<h2
							style={{
								fontSize: "var(--text-4xl)",
								fontWeight: 500,
								color: "var(--foreground)",
								lineHeight: 1.15,
								fontFamily: "var(--font-display)",
							}}
						>
							Alcuni dei nostri progetti
						</h2>
					</div>

					{/* Frecce */}
					<div style={{ display: "flex", gap: "var(--space-3)" }}>
						<button
							onClick={() => goTo(current - 1)}
							disabled={current === 0}
							aria-label="Progetto precedente"
							style={{
								width: 48,
								height: 48,
								borderRadius: 50,
								background: "var(--background)",
								color: "var(--primary)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: current === 0 ? "not-allowed" : "pointer",
								opacity: current === 0 ? 0.5 : 1,
								transition: "opacity 200ms",
							}}
						>
							<ChevronLeft size={20} />
						</button>
						<button
							onClick={() => goTo(current + 1)}
							disabled={current === maxIndex}
							aria-label="Progetto successivo"
							style={{
								width: 48,
								height: 48,
								borderRadius: 50,
								background: "var(--background)",
								color: "var(--primary)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: current === maxIndex ? "not-allowed" : "pointer",
								opacity: current === maxIndex ? 0.3 : 1,
								transition: "opacity 200ms",
							}}
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			</ScrollReveal>

			{/* Carosello drag */}
			<div ref={containerRef} style={{ overflow: "hidden", cursor: "grab" }}>
				<motion.div
					style={{
						x,
						display: "flex",
						gap: GAP,
						width: "max-content",
					}}
					drag="x"
					dragConstraints={{
						left: -(maxIndex * (cardWidth + GAP)),
						right: 0,
					}}
					dragElastic={0.08}
					onDragStart={() => {
						dragStartX.current = x.get();
					}}
					onDragEnd={handleDragEnd}
					whileDrag={{ cursor: "grabbing" }}
				>
					{projects.map((project) => (
						<motion.div
							key={project.slug}
							style={{
								width: cardWidth,
								flexShrink: 0,
								background: "var(--background)",
								overflow: "hidden",
								userSelect: "none",
							}}
							transition={{ duration: 0.3 }}
						>
							{/* Immagine progetto */}
							<div
								style={{
									height: "clamp(280px, 25vw, 420px)",
									overflow: "hidden",
									position: "relative",
									background: "var(--surface-2)",
								}}
							>
								<img
									src={project.image}
									alt={project.title}
									draggable={false}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										display: "block",
										pointerEvents: "none",
									}}
								/>
							</div>

							{/* Info
							<div style={{ padding: "var(--space-6)" }}>
								<p
									style={{
										fontSize: "var(--text-xs)",
										color: "var(--accent)",
										fontWeight: 600,
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										marginBottom: "var(--space-2)",
									}}
								>
									{project.category}
								</p>
								<p
									style={{
										fontSize: "var(--text-xl)",
										fontWeight: 600,
										color: "var(--foreground)",
										fontFamily: "var(--font-display)",
										marginBottom: "var(--space-2)",
									}}
								>
									{project.title}
								</p>
								<p
									style={{
										fontSize: "var(--text-sm)",
										color: "var(--foreground)",
										opacity: 0.5,
									}}
								>
									{project.location} · {project.year}
								</p>
							</div> */}
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Link tutti i progetti 
			<div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
				<SplitLinkButton
					href="/progetti"
					label="Vedi tutti i progetti"
					delay={0.45}
				/>
			</div>
			*/}
		</section>
	);
}
