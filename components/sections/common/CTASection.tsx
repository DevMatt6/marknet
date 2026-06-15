"use client";

import { motion } from "framer-motion";
import ButtonDemo from "@/components/shadcn-space/button/button-16";
import { useMessages } from "@/providers/LocaleProvider";

export default function CTASection() {
	const { homeCta } = useMessages();

	return (
		<section className="relative py-48 bg-bg-primary overflow-hidden">
			<div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-4 gap-x-8 gap-y-12 lg:grid-cols-4 items-end">
					<motion.div
						className="col-span-4 lg:col-span-3"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="font-display text-4xl md:text-5xl leading-tight text-text-primary uppercase">
							{homeCta.title}
						</h2>
					</motion.div>

					<motion.div
						className="col-span-4 lg:col-span-1 flex flex-col gap-4 lg:items-end"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, delay: 0.15 }}
					>
						<ButtonDemo text={homeCta.primaryCta} variant="secondary" size="lg" />
					</motion.div>

					<motion.div
						className="col-span-4 lg:col-span-2 lg:col-start-3"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, delay: 0.25 }}
					>
						<p className="font-body text-xl text-primary leading-tight">
							{homeCta.description}
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
