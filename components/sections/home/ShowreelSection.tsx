"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ShowreelSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

	return (
		<section
			ref={sectionRef}
			className="relative w-full overflow-hidden bg-brand-900"
		>
			<div className="relative aspect-video w-full">
				<iframe
					src="https://www.youtube.com/embed/6AYAWmk8dQs?autoplay=1&mute=1&loop=1&playlist=6AYAWmk8dQs&controls=0&rel=0&modestbranding=1&playsinline=1"
					title="Showreel video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					className="absolute inset-0 h-full w-full"
				/>

				<div className="absolute inset-0 z-10" aria-hidden="true" />

				<div className="pointer-events-none absolute inset-0 bg-black/20" />

				<div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
					<motion.h2
						className="font-display text-hero leading-none uppercase tracking-tight select-none text-center"
						style={{
							color: "transparent",
							WebkitTextStroke: "1px white",
						}}
						initial={{ opacity: 0, y: 40 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						SHOWREEL
					</motion.h2>
				</div>
			</div>
		</section>
	);
}
