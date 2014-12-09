import {rgba, hsla} from '../util.js';
import {phaseMod} from '../cycles.js';

export class Blub {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.radius = 0;  // Smallest ring size
    this.ringMargin = 30;  // Distance between rings.
    this.maxradius = Math.sqrt(Math.pow(this.canvas.width, 2) + Math.pow(this.canvas.height, 2)) + 1;  // Largest ring we'll draw is just barely outside the canvas.
  }

  tick(phase) {
    var x = this.canvas.width / 2;
    var y = this.canvas.height / 2;

    this.ctx.save();
    this.ctx.strokeStyle = '#fff';
    this.ctx.lineWidth = 3;

    // Draw all rings.
    for (var radius = this.radius; radius < this.maxradius; radius += this.ringMargin) {
      // Draw ring.
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    this.radius += 1.5;
    this.radius %= this.ringMargin;

    this.ctx.restore();
  }
}
