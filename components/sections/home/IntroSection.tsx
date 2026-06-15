"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { useMessages } from "@/providers/LocaleProvider";

function RevealToken({
	token,
	index,
	total,
	progress,
}: {
	token: string;
	index: number;
	total: number;
	progress: MotionValue<number>;
}) {
	const start = index / total;
	const end = (index + 1) / total;
	const opacity = useTransform(progress, [start, end], [0.18, 1]);

	return (
		<motion.span
			key={`${token}-${index}`}
			style={{ opacity }}
			className="inline"
		>
			{token}
		</motion.span>
	);
}

function ScrollRevealText({
	text,
	progress,
}: {
	text: string;
	progress: MotionValue<number>;
}) {
	const tokens = useMemo(() => text.split(/(\s+)/), [text]);
	const total = tokens.length;

	return (
		<>
			{tokens.map((token, index) => {
				if (/^\s+$/.test(token)) {
					return <span key={`space-${index}`}>{token}</span>;
				}

				return (
					<RevealToken
						key={`${token}-${index}`}
						token={token}
						index={index}
						total={total}
						progress={progress}
					/>
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
		offset: ["start 80%", "end 50%"],
	});
	const fullText = `${intro.titleStart} ${intro.highlight} ${intro.titleEnd} ${intro.paragraphOne} `;

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden bg-bg-primary py-48"
		>
			<div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="w-full break-words font-display text-3xl font-bold leading-tight tracking-tight text-foreground [overflow-wrap:break-word]"
				>
					<ScrollRevealText text={fullText} progress={scrollYProgress} />
				</motion.h2>
			</div>
		</section>
	);
}
