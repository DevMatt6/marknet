"use client";

import { motion } from "framer-motion";
import { useMessages } from "@/providers/LocaleProvider";

export default function IntroSection() {
	const { intro } = useMessages();

	return (
		<section className="relative py-24 bg-bg-primary overflow-hidden">
			<div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-4 gap-x-8 gap-y-12 lg:grid-cols-4">
					<motion.div
						className="lg:col-span-2 lg:row-start-1 col-span-4 row-start-1"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="font-display max-w-2xl text-3xl leading-tight tracking-tight font-bold text-text-primary ">
							{intro.titleStart}{" "}
							<span
								className="inline"
								style={{
									color: "white",
								}}
							>
								{intro.highlight}
							</span>{" "}
							{intro.titleEnd}
						</h2>
					</motion.div>

					<motion.div
						className="lg:col-start-3 lg:col-span-2 lg:row-start-2 col-span-4 row-start-2 flex flex-col gap-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<p className="font-body text-lg text-primary leading-tight">
							{intro.paragraphOne}
						</p>
						<p className="font-body text-lg text-primary leading-tight">
							{intro.paragraphTwo}
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
