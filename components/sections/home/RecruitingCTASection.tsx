"use client";

import { motion } from "framer-motion";
import ButtonDemo from "@/components/shadcn-space/button/button-16";
import { useMessages } from "@/providers/LocaleProvider";

export default function RecruitingCTASection() {
	const { recruitingCta } = useMessages();

	return (
		<section className="relative overflow-hidden bg-surface py-24 md:py-32">
			<div className="relative z-10 mx-auto w-full bg-bg-primary max-w-7xl px-5 sm:px-8 lg:px-10">
				<div className="grid grid-cols-4 gap-x-8 gap-y-10 lg:grid-cols-4 items-end border-t border-border pt-16">
					{/* Label */}
					<motion.div
						className="col-span-4"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "0px 0px -80px 0px" }}
						transition={{ duration: 0.5 }}
					>
						<span className="font-body text-sm font-medium uppercase tracking-widest text-text-secondary">
							{recruitingCta.label}
						</span>
					</motion.div>

					{/* Heading */}
					<motion.div
						className="col-span-4 lg:col-span-3"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "0px 0px -60px 0px" }}
						transition={{ duration: 0.55, delay: 0.08 }}
					>
						<h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary md:text-4xl">
							{recruitingCta.title}
						</h2>
					</motion.div>

					{/* CTA button — right-aligned on desktop */}
					<motion.div
						className="col-span-4 lg:col-span-1 flex lg:justify-end lg:items-end"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "0px 0px -60px 0px" }}
						transition={{ duration: 0.55, delay: 0.18 }}
					>
						<ButtonDemo
							text={recruitingCta.primaryCta}
							variant="secondary"
							size="lg"
						/>
					</motion.div>

					{/* Description */}
					<motion.div
						className="col-span-4 lg:col-span-2 lg:col-start-1"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "0px 0px -60px 0px" }}
						transition={{ duration: 0.5, delay: 0.28 }}
					>
						<p className="font-body text-base leading-relaxed text-text-secondary">
							{recruitingCta.description}
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
