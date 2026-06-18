"use client";

import { motion } from "framer-motion";
import { FileText, Users, Clapperboard, PackageCheck } from "lucide-react";
import { useMessages } from "@/providers/LocaleProvider";

const STEP_ICONS = [FileText, Users, Clapperboard, PackageCheck];

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
					<h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary">
						{howItWorks.title}
					</h2>
				</motion.div>

				{/* Cards grid */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{howItWorks.steps.map((step, index) => {
						const Icon = STEP_ICONS[index] ?? FileText;
						return (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "0px 0px -60px 0px" }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								className="flex flex-col gap-5 rounded-2xl border border-border bg-bg-secondary p-6"
							>
								<div className="flex items-center justify-between">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-primary">
										<Icon
											className="h-5 w-5 text-text-primary"
											strokeWidth={1.5}
										/>
									</div>
									<span className="font-body text-xs font-medium tabular-nums text-text-secondary/50">
										{step.number}
									</span>
								</div>
								<div className="flex flex-col gap-2">
									<h3 className="font-display text-base font-semibold leading-snug tracking-tight text-text-primary">
										{step.title}
									</h3>
									<p className="font-body text-sm leading-relaxed text-text-secondary">
										{step.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
