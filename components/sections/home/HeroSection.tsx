"use client";

import { motion } from "framer-motion";
import ButtonDemo from "@/components/shadcn-space/button/button-16";
import { useMessages } from "@/providers/LocaleProvider";

const HERO_VIDEO_URL =
	"https://cdn.coverr.co/videos/coverr-team-working-together-1560678884303?download=1080p";

export default function HeroSection() {
	const { hero } = useMessages();

	return (
		<section className="relative min-h-[calc(60vh)] flex items-center justify-center overflow-hidden bg-bg-primary">
			{/* Add a video background if needed, currently commented out for performance reasons. */}
			{/*
			<video
				className="absolute inset-0 h-full w-full object-cover"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				aria-hidden="true"
			>
				<source src={HERO_VIDEO_URL} type="video/mp4" />
			</video>
			*/}

			<div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center py-24 text-center ">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className=" font-display font-bold leading-tight tracking-tight text-hero md:text-hero lg:text-hero text-foreground max-w-7xl"
				>
					{hero.title}
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="font-body text-lg sm:text-lg font-regular text-foreground mt-6 max-w-3xl"
				>
					{hero.description}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-10 flex gap-4"
				>
					<ButtonDemo text={hero.primaryCta} variant="default" size="sm" />
					<ButtonDemo text={hero.secondaryCta} variant="outline" size="sm" />
				</motion.div>
			</div>
		</section>
	);
}
