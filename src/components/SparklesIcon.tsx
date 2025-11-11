"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation, Variants } from "framer-motion";
import { forwardRef, useCallback, useImperativeHandle, useRef, useEffect } from "react";

export interface SparklesIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface SparklesIconProps {
	size?: number;
	duration?: number;
	className?: string;
}

const SparklesIcon = forwardRef<SparklesIconHandle, SparklesIconProps>(
	(
		{
			className,
			size = 28,
			duration = 1,
		},
		ref,
	) => {
		const controls = useAnimation();
		const isControlled = useRef(false);

		// Start animation loop on mount
		useEffect(() => {
			if (!isControlled.current) {
				controls.start("animate");
			}
		}, [controls]);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => controls.start("animate"),
				stopAnimation: () => controls.start("normal"),
			};
		});

		const handleEnter = useCallback(
			() => {
				if (!isControlled.current) controls.start("animate");
			},
			[controls],
		);

		const handleLeave = useCallback(
			() => {
				if (!isControlled.current) controls.start("normal");
			},
			[controls],
		);

		const iconVariants: Variants = {
			normal: { scale: 1, rotate: 0 },
			animate: {
				scale: [1, 1.06, 0.98, 1],
				rotate: [0, -3, 3, 0],
				transition: { 
					duration: 1.1 * duration, 
					ease: "easeInOut",
					repeat: Infinity,
					repeatDelay: 0.5,
				},
			},
		};

		const starVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: {
				pathLength: [0.9, 1, 1],
				opacity: [0.8, 1, 1],
				transition: {
					duration: 0.9 * duration,
					ease: "easeInOut",
					delay: 0.05,
					repeat: Infinity,
					repeatDelay: 0.5,
				},
			},
		};

		const crossVariants: Variants = {
			normal: { opacity: 1, scale: 1 },
			animate: {
				opacity: [0.6, 1, 0.8, 1],
				scale: [0.9, 1.05, 1],
				transition: {
					duration: 0.8 * duration,
					ease: "easeInOut",
					delay: 0.18,
					repeat: Infinity,
					repeatDelay: 0.5,
				},
			},
		};

		const dotVariants: Variants = {
			normal: { opacity: 1, scale: 1, y: 0 },
			animate: {
				opacity: [0.7, 1, 1],
				scale: [0.85, 1.1, 1],
				y: [1.5, -0.5, 0],
				transition: {
					duration: 0.9 * duration,
					ease: "easeInOut",
					delay: 0.28,
					repeat: Infinity,
					repeatDelay: 0.5,
				},
			},
		};

		return (
			<motion.div
				className={cn("inline-flex items-center justify-center", className)}
				onMouseEnter={handleEnter as any}
				onMouseLeave={handleLeave as any}
			>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					animate={controls}
					initial="normal"
					variants={iconVariants}
				>
					<motion.path
						d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
						variants={starVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="M20 2v4"
						variants={crossVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="M22 4h-4"
						variants={crossVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.circle
						cx="4"
						cy="20"
						r="2"
						variants={dotVariants}
						initial="normal"
						animate={controls}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

SparklesIcon.displayName = "SparklesIcon";

export { SparklesIcon };

