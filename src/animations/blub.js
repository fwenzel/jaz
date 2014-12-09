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
    //var s = this.canvas.height / 2;

    this.ctx.save();
    //this.ctx.fillStyle = '#fff';
    this.ctx.strokeStyle = '#fff';
    this.ctx.lineWidth = 3;

    // Draw all rings.
    for (var radius = this.radius;;) {
      if (radius > this.maxradius) {
        break;
      }

      // Draw ring.
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.stroke();

      // Next larger ring.
      radius += this.ringMargin;
    }

    this.radius += 2;
    this.radius %= this.ringMargin;

    /*
    this.ctx.translate(x, y);
    this.ctx.rotate(Math.PI * phase / 2);

    var a = 0.2;
    var colors = [rgba(0, 0, 0, a), hsla(360 * phase, 100, 25, a), 'none'];
    var colorIndex = 0;
    var phaseOffset = 3 * phase % 0.3;
    var top = 2.0 + phaseOffset;

    for (var mult = top; mult > 0; mult -= 0.1) {
      this.ctx.save();
      this.ctx.rotate(mult);
      this.ctx.fillStyle = colors[colorIndex];
      this.ctx.fillRect(-s * mult, -s * mult, s * 2 * mult, s * 2 * mult);
      this.ctx.restore();
      colorIndex = (colorIndex + 1) % colors.length;
    }
    */

    this.ctx.restore();
  }
}
