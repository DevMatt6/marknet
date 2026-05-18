"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TIPO_PROGETTO = [
	"Residenziale",
	"Commerciale",
	"Ricettivo",
	"Ristrutturazione",
	"Interior Design",
	"Altro",
];

const labelStyle: React.CSSProperties = {
	display: "block",
	fontSize: "var(--text-xs)",
	textTransform: "uppercase",
	letterSpacing: "0.08em",
	marginBottom: 6,
	color: "var(--accent)",
	fontWeight: 600,
};

function fieldStyle(hasError: boolean): React.CSSProperties {
	return {
		width: "100%",
		border: hasError
			? "1px solid var(--destructive)"
			: "1px solid var(--border)",
		padding: "12px 16px",
		fontSize: "var(--text-sm)",
		background: "white",
		outline: "none",
		boxSizing: "border-box",
		fontFamily: "inherit",
	};
}

export function ContactForm() {
	const [nome, setNome] = useState("");
	const [cognome, setCognome] = useState("");
	const [tipo, setTipo] = useState("");
	const [email, setEmail] = useState("");
	const [messaggio, setMessaggio] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [errors, setErrors] = useState<Record<string, boolean>>({});

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const newErrors: Record<string, boolean> = {};
		if (!nome.trim()) newErrors.nome = true;
		if (!email.trim()) newErrors.email = true;
		if (!messaggio.trim()) newErrors.messaggio = true;
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		setErrors({});
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSuccess(true);
		}, 1500);
	}

	return (
		<>
			<style>{`
				@media (min-width: 768px) {
					.contact-grid { grid-template-columns: 1fr 1fr !important; }
					.name-row { grid-template-columns: 1fr 1fr !important; }
				}
			`}</style>
			<div
				id="form"
				className="contact-grid"
				style={{
					display: "grid",
					gridTemplateColumns: "1fr",
					gap: "clamp(32px,5vw,64px)",
					alignItems: "start",
				}}
			>
				{/* SINISTRA — form */}
				<div
					style={{
						padding: "clamp(32px,4vw,48px)",
						backgroundColor: "var(--primary)",
					}}
				>
					<p
						style={{
							fontSize: "var(--text-xl)",
							fontWeight: 500,
							margin: 0,
							marginBottom: 32,
							color: "white",
							fontFamily: "var(--font-display)",
						}}
					>
						Scrivici
					</p>

					<AnimatePresence mode="wait">
						{success ? (
							<motion.div
								key="success"
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									color: "white",
									fontSize: "var(--text-base)",
									fontWeight: 500,
									paddingBlock: 32,
								}}
							>
								✓ Messaggio inviato. Ti ricontatteremo entro 24 ore.
							</motion.div>
						) : (
							<motion.form
								key="form"
								onSubmit={handleSubmit}
								style={{ display: "flex", flexDirection: "column", gap: 20 }}
								initial={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								{/* Nome + Cognome */}
								<div
									className="name-row"
									style={{
										display: "grid",
										gridTemplateColumns: "1fr",
										gap: 20,
									}}
								>
									<div>
										<label style={labelStyle}>Nome *</label>
										<input
											type="text"
											value={nome}
											onChange={(e) => setNome(e.target.value)}
											style={fieldStyle(!!errors.nome)}
										/>
									</div>
									<div>
										<label style={labelStyle}>Cognome</label>
										<input
											type="text"
											value={cognome}
											onChange={(e) => setCognome(e.target.value)}
											style={fieldStyle(false)}
										/>
									</div>
								</div>

								{/* Tipo di progetto */}
								<div>
									<label style={labelStyle}>Tipo di progetto</label>
									<select
										value={tipo}
										onChange={(e) => setTipo(e.target.value)}
										style={fieldStyle(false)}
									>
										<option value="">Seleziona</option>
										{TIPO_PROGETTO.map((t) => (
											<option key={t} value={t}>
												{t}
											</option>
										))}
									</select>
								</div>

								{/* Email */}
								<div>
									<label style={labelStyle}>Email *</label>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										style={fieldStyle(!!errors.email)}
									/>
								</div>

								{/* Messaggio */}
								<div>
									<label style={labelStyle}>Messaggio *</label>
									<textarea
										value={messaggio}
										onChange={(e) => setMessaggio(e.target.value)}
										style={{
											...fieldStyle(!!errors.messaggio),
											minHeight: 120,
											resize: "vertical",
										}}
									/>
								</div>

								{/* Submit */}
								<button
									type="submit"
									disabled={loading}
									style={{
										padding: "14px 40px",
										background: "var(--accent)",
										color: "white",
										fontSize: "var(--text-sm)",
										fontWeight: 600,
										width: "100%",
										marginTop: 8,
										border: "none",
										cursor: loading ? "not-allowed" : "pointer",
										fontFamily: "inherit",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: 8,
									}}
								>
									{loading ? (
										<>
											Invio in corso...
											<motion.span
												animate={{ rotate: 360 }}
												transition={{
													repeat: Infinity,
													duration: 0.8,
													ease: "linear",
												}}
												style={{ display: "inline-block", marginLeft: 8 }}
											>
												⟳
											</motion.span>
										</>
									) : (
										"Invia messaggio"
									)}
								</button>
							</motion.form>
						)}
					</AnimatePresence>
				</div>

				{/* DESTRA — info */}
				<div style={{ padding: "clamp(32px,4vw,48px) 0" }}>
					<ScrollReveal variant="fadeUp" delay={0}>
						<h2
							style={{
								fontWeight: 500,
								fontSize: "var(--text-3xl)",
								lineHeight: 1.2,
								margin: 0,
								marginBottom: 24,
								color: "var(--foreground)",
								fontFamily: "var(--font-display)",
							}}
						>
							Inizia il tuo progetto con noi.
						</h2>
					</ScrollReveal>

					<ScrollReveal variant="fadeUp" delay={0.1}>
						<span
							style={{
								fontSize: "var(--text-sm)",
								color: "var(--muted-foreground)",
								display: "block",
								padding: "16px 0",
								borderBottom: "1px solid var(--border)",
							}}
						>
							Via Ludovico Micara, 41 — 00165 Roma
						</span>
					</ScrollReveal>

					<ScrollReveal variant="fadeUp" delay={0.15}>
						<a
							href="tel:+393475183978"
							style={{
								fontSize: "var(--text-sm)",
								color: "var(--muted-foreground)",
								display: "block",
								padding: "16px 0",
								borderBottom: "1px solid var(--border)",
								textDecoration: "none",
							}}
						>
							+39 347 518 3978
						</a>
					</ScrollReveal>

					<ScrollReveal variant="fadeUp" delay={0.2}>
						<a
							href="mailto:info@progettiserviziv.it"
							style={{
								fontSize: "var(--text-sm)",
								color: "var(--muted-foreground)",
								display: "block",
								padding: "16px 0",
								borderBottom: "1px solid var(--border)",
								textDecoration: "none",
							}}
						>
							info@progettiserviziv.it
						</a>
					</ScrollReveal>
				</div>
			</div>
		</>
	);
}
