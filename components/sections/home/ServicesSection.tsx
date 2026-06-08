"use client";

import { motion } from "framer-motion";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ButtonDemo from "@/components/shadcn-space/button/button-16";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";

function getTitleText(serviceTitle: string): string {
	const titleMap: Record<string, string> = {
		"Content Creation": "Content Creation",
		"Brand Strategy": "Brand Strategy",
		Marketing: "Marketing",
		Event: "Event",
	};
	return titleMap[serviceTitle] || serviceTitle;
}

const servicesData = [
	{
		title: "Content Creation",
		badges: ["Video", "Audio", "Social", "Web TV", "Streaming"],
		description:
			"Creiamo contenuti che catturano l'attenzione e trasformano i visitatori in clienti. Dalla produzione video alla gestione social, ogni contenuto è studiato per emozionare e convertire.",
		buttonText: "Trova il team di Content Creation",
	},
	{
		title: "Brand Strategy",
		badges: [
			"Branding",
			"CX Design",
			"User Research",
			"Visual Design",
			"UX/UI Design",
			"Content Design",
			"Motion Design",
			"Product Design",
		],
		description:
			"Costruiamo identità di brand potenti che rimangono nel cuore delle persone. Trasformiamo la tua visione in un'esperienza memorabile che differenzia il tuo business dalla concorrenza.",
		buttonText: "Trova il team di Brand Strategy",
	},
	{
		title: "Marketing",
		badges: ["Strategy", "Digital", "Analytics", "SEO", "Performance"],
		description:
			"Strategie di marketing che fanno crescere il tuo business in modo concreto. Uniamo creatività e dati per raggiungere il tuo pubblico giusto al momento perfetto.",
		buttonText: "Trova il team di Marketing",
	},
	{
		title: "Event",
		badges: ["Live", "Streaming", "Production", "Web TV", "Broadcast"],
		description:
			"Produciamo eventi che lasciano il segno. Dal corporate al live streaming, ogni dettaglio è curato per creare esperienze incredibili che coinvolgono il tuo pubblico.",
		buttonText: "Trova il team di Event",
	},
];

export default function ServicesSection() {
	return (
		<section className="relative py-48 overflow-hidden y">
			{/* Background */}
			<div className="absolute inset-0 bg-bg-primary" />

			<div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				{/* Carosello */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, margin: "0px 0px -100px 0px" }}
				>
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						className="w-full"
						orientation="horizontal"
					>
						{/* Titolo + pulsanti navigazione */}
						<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<h2 className="font-display text-3xl uppercase leading-tight text-text-primary">
								Trova il team giusto per ogni progetto
							</h2>
							<div className="flex items-center gap-2">
								<CarouselPrevious className="static translate-y-0" />
								<CarouselNext className="static translate-y-0" />
							</div>
						</div>
						<CarouselContent className="-ml-2">
							{servicesData.map((service, index) => (
								<CarouselItem key={index} className="pl-2 md:basis-1/3">
									<div className="p-2">
										<Card className="h-[500px] !rounded-4xl !ring-0 !overflow-hidden flex flex-col justify-between">
											<div>
												<CardHeader className="pb-4">
													<CardTitle className="font-regular text-2xl text-foreground">
														{service.title}
													</CardTitle>
												</CardHeader>
												<CardContent className="pb-4">
													<p className="text-foreground font-regular">
														{service.description}
													</p>
												</CardContent>
												<div className="px-4 gap-2 flex flex-wrap ">
													{service.badges.map((badge, badgeIndex) => (
														<Badge key={badgeIndex} variant="secondary">
															{badge}
														</Badge>
													))}
												</div>
											</div>
											<CardFooter className="pt-4 gap-2">
												<ButtonDemo
													text={`Trova il team di ${service.title}`}
													variant="secondary"
													size="lg"
												/>
											</CardFooter>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</motion.div>
			</div>
		</section>
	);
}
