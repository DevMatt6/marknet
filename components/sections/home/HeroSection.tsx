"use client";

import { motion } from "framer-motion";
import ButtonDemo from "@/components/shadcn-space/button/button-16";

export default function HeroSection() {
	return (
		<section className="relative min-h-[calc(100vh)] flex items-center justify-center overflow-hidden bg-bg-primary">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-surface to-bg-primary opacity-100" />

			<div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full py-24 text-center">
				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="font-display text-hero md:text-hero lg:text-hero leading-tight text-text-primary uppercase max-w-full"
				>
					Connettiamo Talenti
				</motion.h1>

				{/* Subheadline */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="font-body text-lg sm:text-lg font-regular text-text-primary mt-6 max-w-2xl"
				>
					Servizi professionali per il tuo business. Brand identity, web
					development, art direction e project management creativo.
				</motion.p>

				{/* Button Group - pulsanti separati con border radius */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-10 flex gap-4"
				>
					<ButtonDemo text="Get Started" variant="secondary" size="lg" />
					<ButtonDemo text="Contact Us" variant="default" size="lg" />
				</motion.div>
			</div>
		</section>
	);
}
