Raphael(function () {
  var p = Raphael("animation-holder", 320, 160);
  p.path("M 0 80 H 320");
  p.path("M 160 0 V 160");
  
  var ox = 160, oy = 80, u = 50.0, N = 100, R5 = Math.sqrt(5);
  function scaleX(x) { return ox + u * x; }
  function scaleY(y) { return oy - u * y; } 
  function angle(i) { return i * Math.PI * 2 / N; }

  var points = [];

  function setup() {
    points.forEach(function (x) {
      x.remove();
    });
    points = [];
    for (var i = 0; i < N; i++) {
      points.push(
          p.circle(
            scaleX(R5 / 2 * Math.cos(angle(i)) + 1. / 2),
            scaleY(R5 / 2 * Math.sin(angle(i))),
            3).attr({
              'fill': Raphael.hsl(i * 360 / N, 80, 70),
              'stroke': null,
            }));
    }
    setTimeout(update, 1000);
  }

  function update() {
    var headAnim;
    points.forEach(function (p, i) {
      var d = 3 + R5 * Math.cos(angle(i));
      var callback = (i != 0) ? undefined : function() {
        setTimeout(update2, 50);
      };
      var anim = Raphael.animation({
        'cx': scaleX((R5 * Math.cos(-angle(i)) + 1) / d),
        'cy': scaleY((R5 * Math.sin(-angle(i))) / d),
      }, 1000, 'linear', callback);
      if (i == 0) {
        p.animate(anim);
        headAnim = anim;
      } else {
        p.animateWith(points[0], headAnim, anim);
      }
    });
  }

  function update2() {
    var headAnim;
    points.forEach(function (p, i) {
      var callback = (i != 0) ? undefined : function() {
        setTimeout(setup, 2000);
      };
      var anim = Raphael.animation({
        'cx': p.attr('cx') + u,
      }, 1000, 'linear', callback);
      if (i == 0) {
        p.animate(anim);
        headAnim = anim;
      } else {
        p.animateWith(points[0], headAnim, anim);
      }
    });
  }

  var startButton = p.text(ox, oy/2, 'Start animation')
    .attr({
      'font-size': 30,
      'cursor': 'pointer',
    }).click(function () {
    setup();
    startButton.remove();
  });
});
