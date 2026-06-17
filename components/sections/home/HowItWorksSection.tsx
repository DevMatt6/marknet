"use client";

import { motion } from "framer-motion";
import { useMessages } from "@/providers/LocaleProvider";

export default function HowItWorksSection() {
	const { howItWorks } = useMessages();

	return (
		<section className="relative overflow-hidden bg-bg-primary py-24 md:py-32">
			<div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "0px 0px -80px 0px" }}
					transition={{ duration: 0.55 }}
					className="mb-16 flex flex-col gap-4"
				>
					<span className="font-body text-sm font-medium uppercase tracking-widest text-text-secondary">
						{howItWorks.label}
					</span>
					<h2 className="max-w-full font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary md:text-3xl">
						{howItWorks.title}
					</h2>
				</motion.div>

				{/* Steps list */}
				<ol className="flex flex-col">
					{howItWorks.steps.map((step, index) => (
						<motion.li
							key={step.number}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "0px 0px -60px 0px" }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							className="group flex flex-col gap-4 border-t border-border py-8 md:flex-row md:items-start md:gap-12"
						>
							<div className="flex flex-1 flex-col gap-2 md:flex-row md:items-start md:gap-12">
								<span className="flex h-10 w-10 items-center justify-center text-xl font-bold text-foreground">
									{step.number}
								</span>
								<h3 className="w-full font-display text-xl font-semibold leading-snug tracking-tight text-text-primary md:w-72 md:shrink-0">
									{step.title}
								</h3>
								<p className="max-w-prose font-body text-base leading-relaxed text-foreground">
									{step.description}
								</p>
							</div>
						</motion.li>
					))}
					{/* closing border */}
					<li className="border-t border-border" aria-hidden="true" />
				</ol>
			</div>
		</section>
	);
}
