"use client";

import React, { useEffect } from "react";

interface TriangleProps {
	hypotenuse: number;
	startX: number;
	startY: number;
}

export default function Canvas() {
	const initializeCanvas = () => {
		const canvas = document.getElementById(
			"background-canvas"
		) as HTMLCanvasElement;

		const context = canvas.getContext("2d");

		if (context) draw(context);
	};

	const draw = (ctx: CanvasRenderingContext2D) => {
		ctx.fillStyle = "rgb(255,0,0)";
		drawTriangle({ hypotenuse: 50, startX: 23, startY: 50 }, ctx);
	};

	const drawTriangle = (
		props: TriangleProps,
		ctx: CanvasRenderingContext2D
	) => {
		const { hypotenuse, startX, startY } = props;

		ctx.beginPath();
		ctx.moveTo(startX, startY);

		const { x, y } = getTriangleEdges(hypotenuse);

		ctx.lineTo(x + startX, startY - y);
		ctx.lineTo(2 * x + startX, startY);
		ctx.fill();
	};

	const getTriangleEdges = (hypotenuse: number) => {
		const rad = (60 * Math.PI) / 180;
		const x = hypotenuse / 2;
		const y = Math.sin(rad) * hypotenuse;

		return { x, y };
	};

	useEffect(() => {
		initializeCanvas();
	}, []);

	return <canvas id="background-canvas" width={800} height={800} />;
}
