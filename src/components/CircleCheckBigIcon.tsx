"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation, Variants } from "framer-motion";
import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";

export interface CircleCheckBigIconHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}

interface CircleCheckBigIconProps {
	size?: number;
	duration?: number;
	className?: string;
}

const CircleCheckBigIcon = forwardRef<
	CircleCheckBigIconHandle,
	CircleCheckBigIconProps
>(
	(
		{
			className,
			size = 28,
			duration = 1,
		},
		ref,
	) => {
		const controls = useAnimation();
		const tickControls = useAnimation();
		const isControlled = useRef(false);

		// Start animation loop on mount
		useEffect(() => {
			if (!isControlled.current) {
				controls.start("animate");
				tickControls.start("animate");
			}
		}, [controls, tickControls]);

		useImperativeHandle(ref, () => {
			isControlled.current = true;
			return {
				startAnimation: () => {
					controls.start("animate");
					tickControls.start("animate");
				},
				stopAnimation: () => {
					controls.start("normal");
					tickControls.start("normal");
				},
			};
		});

		const svgVariants: Variants = {
			normal: { scale: 1 },
			animate: {
				scale: [1, 1.05, 0.98, 1],
				transition: {
					duration: 1 * duration,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
					repeatDelay: 0.5,
				},
			},
		};

		const circleVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: { 
				pathLength: [0, 1],
				opacity: 1,
				transition: {
					duration: 0.6 * duration,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
					repeatDelay: 0.5,
				},
			},
		};

		const tickVariants: Variants = {
			normal: { pathLength: 1, opacity: 1 },
			animate: {
				pathLength: [0, 1],
				opacity: 1,
				transition: {
					duration: 0.8 * duration,
					ease: [0.42, 0, 0.58, 1],
					repeat: Infinity,
					repeatDelay: 0.5,
				},
			},
		};

		return (
			<motion.div
				className={cn("inline-flex items-center justify-center", className)}
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
					variants={svgVariants}
				>
					<motion.path
						d="M21.801 10A10 10 0 1 1 17 3.335"
						variants={circleVariants}
						initial="normal"
						animate={controls}
					/>
					<motion.path
						d="m9 11 3 3L22 4"
						animate={tickControls}
						initial="normal"
						variants={tickVariants}
					/>
				</motion.svg>
			</motion.div>
		);
	},
);

CircleCheckBigIcon.displayName = "CircleCheckBigIcon";

export { CircleCheckBigIcon };

