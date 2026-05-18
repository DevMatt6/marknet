"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useMotionValue,
	animate,
} from "framer-motion";
import {
	ArrowRight,
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	Sparkles,
	type LucideIcon,
	Activity,
	BarChart3,
	Building2,
	ClipboardList,
	FileText,
	HardHat,
	Home,
	Hotel,
	Lightbulb,
	PenTool,
	ShieldCheck,
	SwatchBook,
	TextSearch,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitLinkButton } from "@/components/ui/SplitLinkButton";

/* ─── Lucide icon resolver ─────────────────────────────────────── */
const ICON_MAP: Record<string, LucideIcon> = {
	Activity,
	ArrowRight,
	BarChart3,
	Building2,
	CheckCircle2,
	ClipboardList,
	FileText,
	HardHat,
	Home,
	Hotel,
	Lightbulb,
	PenTool,
	ShieldCheck,
	Sparkles,
	SwatchBook,
	TextSearch,
};

function DynamicIcon({ name, size = 28 }: { name: string; size?: number }) {
	const Icon = ICON_MAP[name] ?? Sparkles;
	return <Icon size={size} strokeWidth={1.5} />;
}

/* ─── Types ────────────────────────────────────────────────────── */
export interface SectorPageProps {
	sector: {
		slug: "residenziale" | "commerciale" | "ricettivo";
		name: string;
		/** Etichetta eyebrow es. "Settore Residenziale" */
		label: string;
	};
	heroTagline: string;
	/** Immagine hero — passata da ogni page.tsx */
	heroImage: string;
	description: string[];
	descriptionTitle?: string;
	/** Percorso immagine custom; default → /images/sectors/{slug}-detail.jpg */
	descriptionImage?: string;
	services: Array<{
		title: string;
		description: string;
		icon: string;
	}>;
	process?: Array<{
		title: string;
		description: string;
		icon: string;
	}>;
	projects?: Array<{
		slug: string;
		title: string;
		location: string;
		year: string;
		image: string;
	}>;
}

/* ─── Section styles ───────────────────────────────────────────── */
const sectionPad: React.CSSProperties = {
	paddingBlock: "clamp(80px,10vw,140px)",
	paddingInline: "clamp(24px,5vw,80px)",
};

/* ════════════════════════════════════════════════════════════════ */
/*  1. HERO                                                         */
/* ════════════════════════════════════════════════════════════════ */
function SectorHero({
	sector,
	heroTagline,
	heroImage,
}: Pick<SectorPageProps, "sector" | "heroTagline" | "heroImage">) {
	const imgRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: imgRef,
		offset: ["start end", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

	return (
		<section
			style={{
				paddingBlock: "clamp(120px, 10vw, 140px)",
				paddingInline: "clamp(24px, 5vw, 80px)",
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
							{sector.label}
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
								maxWidth: 495,
								margin: 0,
							}}
						>
							{sector.name}
						</h1>
					</ScrollReveal>
				</div>

				{/* Destra: tagline + link */}
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
							{heroTagline}
						</p>
					</ScrollReveal>
					<div style={{ marginTop: 32 }}>
						<SplitLinkButton
							href="/contatti"
							label="Consulenza gratuita"
							delay={0.45}
						/>
					</div>
				</div>
			</div>

			{/* Immagine full-bleed con parallax */}
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
					src={heroImage}
					alt={sector.name}
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

/* ════════════════════════════════════════════════════════════════ */
/*  2. DESCRIPTION                                                  */
/* ════════════════════════════════════════════════════════════════ */
function SectorDescription({
	description,
	sector,
	descriptionTitle,
	descriptionImage,
}: Pick<
	SectorPageProps,
	"description" | "sector" | "descriptionTitle" | "descriptionImage"
>) {
	const imageRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

	const imgSrc =
		descriptionImage ?? `/images/sectors/${sector.slug}-detail.jpg`;

	return (
		<>
			<style>{`
        @media (min-width: 1024px) {
          .sec-desc-grid { grid-template-columns: 55fr 45fr !important; }
        }
      `}</style>
			<section style={{ ...sectionPad, background: "var(--surface-2)" }}>
				<div
					className="sec-desc-grid"
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "clamp(32px, 5vw, 80px)",
						alignItems: "center",
					}}
				>
					{/* Testo */}
					<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
						<ScrollReveal variant="fadeIn" delay={0}>
							<p
								style={{
									margin: 0,
									textTransform: "uppercase",
									fontSize: "var(--text-md)",
									letterSpacing: "0.1em",
									color: "var(--accent)",
									display: "inline-block",
									fontWeight: 600,
								}}
							>
								{sector.label}
							</p>
						</ScrollReveal>

						{descriptionTitle && (
							<ScrollReveal variant="fadeUp" delay={0.05}>
								<h2
									style={{
										margin: 0,
										fontSize: "var(--text-3xl)",
										fontWeight: 500,
										color: "var(--primary)",
										lineHeight: 1.3,
										maxWidth: 700,
									}}
								>
									{descriptionTitle}
								</h2>
							</ScrollReveal>
						)}

						{description.map((para, i) => (
							<ScrollReveal key={i} variant="fadeUp" delay={0.1 + i * 0.12}>
								<p
									style={{
										margin: 0,
										fontSize: "var(--text-base)",
										color: "var(--muted-foreground)",
										lineHeight: 1.75,
									}}
								>
									{para}
								</p>
							</ScrollReveal>
						))}
					</div>

					{/* Immagine con parallax */}
					<ScrollReveal variant="fadeIn" delay={0.2}>
						<div
							ref={imageRef}
							style={{
								overflow: "hidden",
								aspectRatio: "4/3",
								borderRadius: 8,
							}}
						>
							<motion.div
								style={{
									y,
									width: "100%",
									height: "116%",
									backgroundImage: `url(${imgSrc})`,
									backgroundPosition: "center",
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundColor: "var(--muted)",
									marginTop: "-8%",
								}}
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  3. SERVICES                                                     */
/* ════════════════════════════════════════════════════════════════ */
function SectorServices({ services }: Pick<SectorPageProps, "services">) {
	const half = Math.ceil(services.length / 2);
	const firstRow = services.slice(0, half);
	const secondRow = services.slice(half);

	return (
		<>
			<style>{`
				@media (max-width: 767px) {
					.svc-grid { grid-template-columns: 1fr !important; }
				}
			`}</style>
			<section
				style={{
					...sectionPad,
					paddingBottom: 0,
					background: "var(--background)",
				}}
			>
				{/* Header */}
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
								Cosa offriamo
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
								Servizi dedicati
							</h2>
						</ScrollReveal>
					</div>
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
								Ogni intervento è studiato sulle specificità del settore, con
								soluzioni su misura che uniscono qualità progettuale e rispetto
								dei tempi.
							</p>
						</ScrollReveal>
					</div>
				</div>

				{/* Prima riga */}
				<div
					style={{
						marginInline: "calc(-1 * clamp(24px, 5vw, 80px))",
						borderTop: "1px solid var(--border)",
						borderBottom: "1px solid var(--border)",
					}}
				>
					<div
						className="svc-grid"
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(${firstRow.length}, 1fr)`,
							paddingInline: "clamp(24px, 5vw, 80px)",
						}}
					>
						{firstRow.map((svc, i) => (
							<ScrollReveal
								key={svc.title}
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
									<div
										style={{
											color: "var(--accent)",
											marginBottom: "var(--space-12)",
											lineHeight: 0,
										}}
									>
										<DynamicIcon name={svc.icon} size={40} />
									</div>
									<h3
										style={{
											fontSize: "var(--text-lg)",
											fontWeight: 500,
											color: "var(--foreground)",
											marginBottom: "var(--space-3)",
											fontFamily: "var(--font-display)",
										}}
									>
										{svc.title}
									</h3>
									<p
										style={{
											fontSize: "var(--text-sm)",
											color: "var(--foreground)",
											lineHeight: 1.7,
											maxWidth: "48ch",
										}}
									>
										{svc.description}
									</p>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>

				{/* Seconda riga */}
				{secondRow.length > 0 && (
					<div
						style={{
							marginInline: "calc(-1 * clamp(24px, 5vw, 80px))",
							borderBottom: "1px solid var(--border)",
						}}
					>
						<div
							className="svc-grid"
							style={{
								display: "grid",
								gridTemplateColumns: `repeat(${firstRow.length}, 1fr)`,
								paddingInline: "clamp(24px, 5vw, 80px)",
							}}
						>
							{secondRow.map((svc, i) => (
								<ScrollReveal
									key={svc.title}
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
										<div
											style={{
												color: "var(--accent)",
												marginBottom: "var(--space-12)",
												lineHeight: 0,
											}}
										>
											<DynamicIcon name={svc.icon} size={40} />
										</div>
										<h3
											style={{
												fontSize: "var(--text-lg)",
												fontWeight: 500,
												color: "var(--foreground)",
												marginBottom: "var(--space-3)",
												fontFamily: "var(--font-display)",
											}}
										>
											{svc.title}
										</h3>
										<p
											style={{
												fontSize: "var(--text-sm)",
												color: "var(--foreground)",
												lineHeight: 1.7,
												maxWidth: "48ch",
											}}
										>
											{svc.description}
										</p>
									</div>
								</ScrollReveal>
							))}
						</div>
					</div>
				)}
			</section>
		</>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  4. PROCESS (opzionale)                                          */
/* ════════════════════════════════════════════════════════════════ */
const PROC_CARDS_DESKTOP = 3;
const PROC_CARDS_MOBILE = 1;
const PROC_GAP = 24;

function SectorProcess({
	process,
}: {
	process: NonNullable<SectorPageProps["process"]>;
}) {
	const total = process.length;
	const containerRef = useRef<HTMLDivElement>(null);
	const [cardWidth, setCardWidth] = useState(320);
	const cardWidthRef = useRef(320);
	const [cardsPerView, setCardsPerView] = useState(PROC_CARDS_DESKTOP);
	const [current, setCurrent] = useState(0);
	const currentRef = useRef(0);
	const x = useMotionValue(0);
	const dragStartX = useRef(0);
	const maxIndex = Math.max(0, total - cardsPerView);

	useEffect(() => {
		const measure = () => {
			if (!containerRef.current) return;
			const w = containerRef.current.offsetWidth;
			const cpv =
				w < 768 ? PROC_CARDS_MOBILE : Math.min(PROC_CARDS_DESKTOP, total);
			setCardsPerView(cpv);
			const cw = Math.floor((w - PROC_GAP * (cpv - 1)) / cpv);
			cardWidthRef.current = cw;
			setCardWidth(cw);
			const newMax = Math.max(0, total - cpv);
			const clamped = Math.min(currentRef.current, newMax);
			currentRef.current = clamped;
			x.set(-(clamped * (cw + PROC_GAP)));
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
			animate(x, -(next * (cardWidthRef.current + PROC_GAP)), {
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
		<section style={{ ...sectionPad, background: "var(--background)" }}>
			{/* Header */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-end",
					marginBottom: "clamp(32px, 5vw, 56px)",
					flexWrap: "wrap",
					gap: 16,
				}}
			>
				<div>
					<ScrollReveal variant="fadeIn" delay={0}>
						<p
							style={{
								margin: "0 0 12px",
								textTransform: "uppercase",
								fontSize: "var(--text-xs)",
								letterSpacing: "0.1em",
								color: "var(--accent)",
								fontWeight: 600,
							}}
						>
							Come lavoriamo
						</p>
					</ScrollReveal>
					<ScrollReveal variant="fadeUp" delay={0.05}>
						<h2
							style={{
								margin: 0,
								fontSize: "var(--text-3xl)",
								fontWeight: 500,
								color: "var(--foreground)",
								lineHeight: 1.2,
								maxWidth: 640,
							}}
						>
							Il nostro processo
						</h2>
					</ScrollReveal>
				</div>

				{maxIndex > 0 && (
					<div style={{ display: "flex", gap: 8 }}>
						<button
							onClick={() => goTo(current - 1)}
							disabled={current === 0}
							aria-label="Passo precedente"
							style={{
								width: 44,
								height: 44,
								borderRadius: 50,
								border: "1px solid var(--border)",
								background: "var(--background)",
								color: "var(--primary)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: current === 0 ? "not-allowed" : "pointer",
								opacity: current === 0 ? 0.4 : 1,
								transition: "opacity 200ms",
							}}
						>
							<ChevronLeft size={18} />
						</button>
						<button
							onClick={() => goTo(current + 1)}
							disabled={current === maxIndex}
							aria-label="Passo successivo"
							style={{
								width: 44,
								height: 44,
								borderRadius: 50,
								border: "1px solid var(--border)",
								background: "var(--background)",
								color: "var(--primary)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: current === maxIndex ? "not-allowed" : "pointer",
								opacity: current === maxIndex ? 0.4 : 1,
								transition: "opacity 200ms",
							}}
						>
							<ChevronRight size={18} />
						</button>
					</div>
				)}
			</div>

			{/* Carosello */}
			<div ref={containerRef} style={{ overflow: "hidden", cursor: "grab" }}>
				<motion.div
					style={{ x, display: "flex", gap: PROC_GAP, width: "max-content" }}
					drag="x"
					dragConstraints={{
						left: -(maxIndex * (cardWidth + PROC_GAP)),
						right: 0,
					}}
					dragElastic={0.08}
					onDragStart={() => {
						dragStartX.current = x.get();
					}}
					onDragEnd={handleDragEnd}
					whileDrag={{ cursor: "grabbing" }}
				>
					{process.map((step) => (
						<div
							key={step.title}
							style={{
								width: cardWidth,
								flexShrink: 0,
								padding: "clamp(24px, 3vw, 40px)",
								border: "1px solid var(--border)",
								background: "var(--background)",
								userSelect: "none",
								display: "flex",
								flexDirection: "column",
								gap: 16,
							}}
						>
							<div style={{ color: "var(--accent)", lineHeight: 0 }}>
								<DynamicIcon name={step.icon} size={36} />
							</div>
							<h3
								style={{
									margin: 0,
									fontSize: "var(--text-lg)",
									fontWeight: 500,
									color: "var(--foreground)",
									lineHeight: 1.3,
									fontFamily: "var(--font-display)",
								}}
							>
								{step.title}
							</h3>
							<p
								style={{
									margin: 0,
									fontSize: "var(--text-sm)",
									color: "var(--muted-foreground)",
									lineHeight: 1.75,
								}}
							>
								{step.description}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  6. CTA                                                          */
/* ════════════════════════════════════════════════════════════════ */
function SectorCTA({ sector }: Pick<SectorPageProps, "sector">) {
	return (
		<section
			style={{
				...sectionPad,
				background: "var(--primary)",
				color: "white",
				textAlign: "center",
				position: "relative",
			}}
		>
			<div
				style={{
					position: "absolute",
					inset: 0,
					zIndex: 1,
					pointerEvents: "none",
					overflow: "hidden",
				}}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="/images/construction-plans-architectural-project.jpg"
					alt=""
					aria-hidden
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						display: "block",
						opacity: 0.2,
					}}
				/>
			</div>

			<div style={{ position: "relative", zIndex: 2 }}>
				<ScrollReveal variant="fadeUp" delay={0.05}>
					<SplitText
						text={`Parliamo del tuo progetto `}
						tag="h2"
						stagger={0.03}
						delay={0.1}
						style={{
							fontSize: "var(--text-3xl)",
							fontWeight: 400,
							color: "white",
							margin: 0,
							lineHeight: 1.2,
						}}
					/>
				</ScrollReveal>

				<ScrollReveal variant="fadeUp" delay={0.25}>
					<p
						style={{
							marginTop: 16,
							fontSize: "var(--text-base)",
							color: "rgba(255,255,255,0.7)",
							maxWidth: 500,
							marginInline: "auto",
							lineHeight: 1.65,
						}}
					>
						Contattaci per una consulenza gratuita. Ti ascoltiamo e ti
						accompagniamo dalla prima idea fino alla consegna delle chiavi.
					</p>
				</ScrollReveal>

				<ScrollReveal variant="fadeUp" delay={0.4}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: 16,
							marginTop: 40,
							flexWrap: "wrap",
						}}
					>
						<MagneticButton
							as="a"
							href="/contatti"
							style={{
								padding: "14px 40px",
								background: "var(--accent)",
								color: "white",
								fontSize: "var(--text-sm)",
								fontWeight: 600,
								textDecoration: "none",
							}}
						>
							Consulenza gratuita
						</MagneticButton>
						<MagneticButton
							as="a"
							href="/servizi"
							style={{
								padding: "14px 40px",
								border: "1px solid rgba(255,255,255,0.5)",
								color: "white",
								fontSize: "var(--text-sm)",
								fontWeight: 600,
								textDecoration: "none",
								background: "transparent",
							}}
						>
							Tutti i servizi
						</MagneticButton>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}

/* ════════════════════════════════════════════════════════════════ */
/*  ROOT TEMPLATE                                                   */
/* ════════════════════════════════════════════════════════════════ */
export function SectorPageTemplate({
	sector,
	heroTagline,
	heroImage,
	description,
	descriptionTitle,
	descriptionImage,
	services,
	process,
}: SectorPageProps) {
	return (
		<>
			<SectorHero
				sector={sector}
				heroTagline={heroTagline}
				heroImage={heroImage}
			/>
			<SectorDescription
				description={description}
				sector={sector}
				descriptionTitle={descriptionTitle}
				descriptionImage={descriptionImage}
			/>
			<SectorServices services={services} />
			{process && process.length > 0 && <SectorProcess process={process} />}
			<SectorCTA sector={sector} />
		</>
	);
}
