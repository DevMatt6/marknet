"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = Array.from({ length: 8 }, (_, index) => ({
	id: index,
	src: "/images/logo.svg",
	alt: `Marks Network logo ${index + 1}`,
}));

export default function LogosSection() {
	return (
		<section className="relative w-full overflow-hidden bg-bg-primary py-12">
			<div className="relative flex overflow-hidden">
				<motion.div
					className="flex gap-8 md:gap-12"
					animate={{
						x: [0, -720],
					}}
					transition={{
						duration: 20,
						ease: "linear",
						repeat: Infinity,
					}}
				>
					{[...logos, ...logos].map((logo, index) => (
						<div
							key={`${logo.id}-${index}`}
							className="flex h-16 w-32 shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-white px-6 dark:border-white/10 dark:bg-white/6 md:h-20 md:w-40"
						>
							<div className="relative h-7 w-full md:h-8 dark:brightness-0 dark:invert">
								<Image
									src={logo.src}
									alt={logo.alt}
									fill
									className="object-contain"
									unoptimized
								/>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
