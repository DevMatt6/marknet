"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonDemo from "@/components/shadcn-space/button/button-16";
import { useMessages } from "@/providers/LocaleProvider";

const ctaImageSrc = "/images/services/man-filming-with-professional-camer";

export default function HomeCTASection() {
	const { homeCta } = useMessages();

	return (
		<section className="relative overflow-hidden py-24">
			{/* Background image */}
			<Image
				src={ctaImageSrc}
				alt={homeCta.title}
				fill
				className="object-cover"
				sizes="100vw"
				unoptimized
			/>
			{/* Overlay */}
			<div className="absolute inset-0 bg-bg-primary" />

			<div className="relative z-10 mx-auto max-w-full px-4 sm:px-6 lg:px-8">
				<motion.div
					className="flex flex-col gap-8 "
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="font-display font-bold text-4xl leading-tight tracking-tight text-foreground md:text-5xl max-w-7xl">
						{homeCta.title}
					</h2>

					<p className="font-body text-md leading-relaxed text-foreground max-w-xl">
						{homeCta.description}
					</p>

					<div className="mt-2">
						<ButtonDemo text={homeCta.primaryCta} variant="default" size="sm" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
