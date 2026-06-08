"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
	return (
		<section className="relative py-48 bg-bg-primary overflow-hidden">
			<div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-4 gap-x-8 gap-y-12 lg:grid-cols-4">
					{/* Mobile: colonna verticale, Desktop: grid 4 colonne */}
					{/* Riga 1 - Titolo nelle prime 2 colonne */}
					<motion.div
						className="lg:col-span-2 lg:row-start-1 col-span-4 row-start-1"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="font-display text-4xl leading-tight text-text-primary uppercase">
							Il{" "}
							<span
								className="inline"
								style={{
									color: "transparent",
									WebkitTextStroke: "1px var(--foreground)",
								}}
							>
								network creativo
							</span>{" "}
							per connettere talenti e progetti ambiziosi
						</h2>
					</motion.div>

					{/* Riga 2 - Testo nelle ultime 2 colonne */}
					<motion.div
						className="lg:col-start-3 lg:col-span-2 lg:row-start-2 col-span-4 row-start-2 flex flex-col gap-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<p className="font-body text-base text-primary leading-relaxed">
							Siamo un team multidisciplinare che unisce creatività e strategia
							per dare vita a progetti ambiziosi. Dalla brand identity alla
							produzione video, ogni progetto è costruito con cura e attenzione
							al dettaglio.
						</p>
						<p className="font-body text-base text-primary leading-relaxed">
							La nostra forza è la capacità di connettere talenti diversi
							attorno a un obiettivo comune, garantendo qualità e coerenza in
							ogni fase del lavoro.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
