"use strict";

const pi = Math.PI;

/**
 * Fill rect to colour
 * @param {CanvasRenderingContext2D} ctx Graphics context
 * @param {Array.<number>} pos Vector x,y
 * @param {Array.<number>} size Vector w,h
 * @param {string} colour Colour string
 */
function rectFill(ctx, pos, size, colour = "#000000") {
	ctx.save(); // Store state
	ctx.fillStyle = colour;
	ctx.fillRect(pos[0],pos[1],size[0],size[1]);
	ctx.restore(); // Restore state
}

/**
 * Wipe Screen
 * @param {CanvasRenderingContext2D} ctx Graphics context
 * @param {string} colour Colour string
 */
function wipeScreen(ctx, colour = "#000000") {
	rectFill(ctx, [0,0], [128,128], colour);
}

function resizeCanvas() {
	const canv = document.getElementById("canvas");
	// (window.innerWidth > window.innerHeight);
	const size = (window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth;
	canv.style.width = size + "px";
	canv.style.height = size + "px";
}

window.addEventListener("resize", resizeCanvas);

function main() {
	// Make canvas square
	resizeCanvas();

	// Take 2d context
	const ctx = document.getElementById("canvas").getContext("2d");

	if(!ctx) {
		alert("Could not set up the canvas context");
	}

	// Theme colour = blueviolet = #8a2be2
	wipeScreen(ctx);
}

// Bind onload
window.onload = main;