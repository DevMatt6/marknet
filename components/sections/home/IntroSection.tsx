"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { useMessages } from "@/providers/LocaleProvider";

function ScrollRevealText({
	text,
	progress,
}: {
	text: string;
	progress: MotionValue<number>;
}) {
	const characters = useMemo(() => text.split(""), [text]);

	return (
		<>
			{characters.map((character, index) => {
				const start = index / characters.length;
				const end = (index + 1) / characters.length;
				const color = useTransform(
					progress,
					[start, end],
					["rgba(255,255,255,0.18)", "rgba(255,255,255,1)"],
				);

				return (
					<motion.span key={`${character}-${index}`} style={{ color }}>
						{character === " " ? "\u00A0" : character}
					</motion.span>
				);
			})}
		</>
	);
}

export default function IntroSection() {
	const { intro } = useMessages();
	const sectionRef = useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start 85%", "end 20%"],
	});
	const fullText = `${intro.titleStart} ${intro.highlight} ${intro.titleEnd} ${intro.paragraphOne} ${intro.paragraphTwo}`;

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden bg-bg-primary py-24"
		>
			<div className="relative z-10 mx-auto flex max-w-full justify-center px-4 sm:px-6 lg:px-8">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-7xl font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl"
				>
					<ScrollRevealText text={fullText} progress={scrollYProgress} />
				</motion.h2>
			</div>
		</section>
	);
}
