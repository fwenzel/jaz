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
    this.ctx.save();
    this.ctx.strokeStyle = '#fff';
    this.ctx.lineWidth = 2;

    // Starting points in 4 quadrants.
    for (var x of [this.canvas.width / 4, this.canvas.width * 3 / 4]) {
      for (var y of [this.canvas.height / 4, this.canvas.height * 3 / 4]) {
        // Draw all rings.
        var ringRep = 500 * phase % this.ringMargin;
        for (var radius = ringRep; radius < this.maxRadius; radius += this.ringMargin) {
          this.ctx.beginPath();
          this.ctx.arc(x, y, radius, 0, Math.PI * 2);
          this.ctx.stroke();
        }
      }
    }

    this.ctx.restore();
  }
}
