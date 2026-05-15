"use client";

import Lenis from "lenis";
import {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
	type ReactNode,
} from "react";
import { useAnimationFrame } from "framer-motion";

const LenisContext = createContext<Lenis | null>(null);

interface LenisProviderProps {
	children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
	const lenisRef = useRef<Lenis | null>(null);
	const [lenis, setLenis] = useState<Lenis | null>(null);

	useEffect(() => {
		const instance = new Lenis({
			lerp: 0.08,
			duration: 1.2,
			smoothWheel: true,
		});
		lenisRef.current = instance;
		setLenis(instance);

		return () => {
			instance.destroy();
			lenisRef.current = null;
			setLenis(null);
		};
	}, []);

	useAnimationFrame((time) => {
		lenisRef.current?.raf(time);
	});

	return (
		<LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
	);
}

export function useLenis(): Lenis | null {
	return useContext(LenisContext);
}
