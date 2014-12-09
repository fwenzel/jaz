import {hsla} from '../util.js';

export class Blub {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.speed = 500;
    this.ringMargin = 40;  // Distance between rings.
    // Largest ring we'll draw is just barely outside the canvas.
    this.maxRadius = (Math.sqrt(Math.pow(this.canvas.width, 2) +
                                Math.pow(this.canvas.height, 2)) + 1);
  }

  tick(phase) {
    this.ctx.save();
    this.ctx.lineWidth = 10;

    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.ctx.rotate(phase * Math.PI * 2);

    var ringRep = this.speed * phase % this.ringMargin;  // Repeat faster than phase.
    // Starting points in 4 quadrants.
    for (var x of [-this.canvas.width / 4, this.canvas.width / 4]) {
      for (var y of [-this.canvas.height / 4, this.canvas.height / 4]) {
        // Draw all rings.
        for (var radius = ringRep; radius < this.maxRadius; radius += this.ringMargin) {
          this.ctx.strokeStyle = hsla(radius / this.maxRadius * 360, 100, 50, .4);
          this.ctx.beginPath();
          this.ctx.arc(x, y, radius, 0, Math.PI * 2);
          this.ctx.stroke();
        }
      }
    }

    this.ctx.restore();
  }
}
