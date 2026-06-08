"use client";

import { motion } from "framer-motion";

const logos = [
	"Client 1",
	"Client 2",
	"Client 3",
	"Client 4",
	"Client 5",
	"Client 6",
	"Client 7",
	"Client 8",
];

export default function LogosSection() {
	return (
		<section className="relative w-full bg-bg-primary overflow-hidden py-12">
			{/* Carosello infinito */}
			<div className="relative flex overflow-hidden">
				<motion.div
					className="flex gap-16"
					animate={{
						x: [0, -500],
					}}
					transition={{
						duration: 20,
						ease: "linear",
						repeat: Infinity,
					}}
				>
					{/* Prima copia */}
					{logos.map((logo, index) => (
						<div
							key={`logo-1-${index}`}
							className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
						>
							<div className="w-full h-full bg-brand-600 rounded-lg flex items-center justify-center">
								<span className="text-brand-200 font-medium">{logo}</span>
							</div>
						</div>
					))}
					{/* Seconda copia (duplicata per loop infinito) */}
					{logos.map((logo, index) => (
						<div
							key={`logo-2-${index}`}
							className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
						>
							<div className="w-full h-full bg-brand-600 rounded-lg flex items-center justify-center">
								<span className="text-brand-200 font-medium">{logo}</span>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
