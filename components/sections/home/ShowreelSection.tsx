"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShowreelSection() {
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = () => {
		setIsPlaying(true);
	};

	// YouTube thumbnail at best quality (maxresdefault = 1280x720)
	const thumbnailUrl = "https://img.youtube.com/vi/LbBf4wHA99Y/maxresdefault.jpg";

	return (
		<section className="relative w-full bg-brand-900 overflow-hidden">
			{/* Video container — aspect ratio 16/9, full width */}
			<div className="relative w-full aspect-video">
				{/* YouTube iframe — visibile solo quando in play */}
				<AnimatePresence>
					{isPlaying && (
						<motion.iframe
							key="youtube-iframe"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.4 }}
							src="https://www.youtube.com/embed/LbBf4wHA99Y?autoplay=1&rel=0&modestbranding=1"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="absolute inset-0 w-full h-full"
						/>
					)}
				</AnimatePresence>

				{/* Thumbnail + Overlay — visibile solo quando non in play */}
				<AnimatePresence>
					{!isPlaying && (
						<motion.div
							key="overlay"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.4 }}
							className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
							onClick={handlePlay}
						>
							{/* Thumbnail del video (freeze frame) */}
							<div className="absolute inset-0 w-full h-full overflow-hidden">
								<img
									src={thumbnailUrl}
									alt="Showreel thumbnail"
									className="w-full h-full object-cover"
									style={{ objectPosition: 'center' }}
								/>
								{/* Sfondo scuro semitrasparente sopra la thumbnail */}
								<div className="absolute inset-0 bg-black/40" />
							</div>

							{/* Titolo SHOWREEL — solo bordi, stile text-hero */}
							<div className="relative flex items-center justify-center w-full px-4 z-10">
								<h2
									className="font-display text-hero leading-none uppercase tracking-tight select-none text-center"
									style={{
										color: "transparent",
										WebkitTextStroke: "1px white",
									}}
								>
									SHOWREEL
								</h2>

								{/* Icona play — sovrapposta alla scritta */}
								<motion.div
									className="absolute flex items-center justify-center"
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.2 }}
								>
									<svg
										viewBox="0 0 80 80"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28"
									>
										{/* Cerchio bordo bianco */}
										<circle
											cx="40"
											cy="40"
											r="38"
											stroke="white"
											strokeWidth="1.5"
										/>
										{/* Triangolo play — fill bianco */}
										<polygon
											points="32,24 60,40 32,56"
											fill="white"
										/>
									</svg>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
