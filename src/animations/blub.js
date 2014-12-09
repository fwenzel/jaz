import {sinNorm, cosNorm} from '../cycles.js';

export class Blub {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.ringMargin = 30;  // Distance between rings.
    // Largest ring we'll draw is just barely outside the canvas.
    this.maxRadius = (Math.sqrt(Math.pow(this.canvas.width, 2)
                      + Math.pow(this.canvas.height, 2)) + 1);
  }

  tick(phase) {
    // Move center.
    var x = this.canvas.width / 2;
    var y = this.canvas.height / 2;

    this.ctx.save();
    this.ctx.strokeStyle = '#fff';
    this.ctx.lineWidth = 3;

    // Draw all rings.
    var ringRep = 500 * phase % this.ringMargin;
    for (var radius = ringRep; radius < this.maxRadius; radius += this.ringMargin) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    this.ctx.restore();
  }
}
