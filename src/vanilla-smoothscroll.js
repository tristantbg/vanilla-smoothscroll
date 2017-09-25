function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}

function jump(target, options) {
    var start = window.pageYOffset;
    var opt = {
        duration: options.duration,
        offset: options.offset || 0,
        callback: options.callback,
        easing: options.easing || easeInOutCubic
    };
    var distance = typeof target === 'string' ? opt.offset + document.querySelector(target).getBoundingClientRect().top : target;
    var duration = typeof opt.duration === 'function' ? opt.duration(distance) : opt.duration;
    var timeStart = null,
        timeElapsed;
    requestAnimationFrame(function(time) {
        timeStart = time;
        loop(time);
    });

    function loop(time) {
        timeElapsed = time - timeStart;
        window.scrollTo(0, opt.easing(timeElapsed, start, distance - start, duration));
        if (timeElapsed < duration) requestAnimationFrame(loop)
        else end();
    }

    function end() {
        window.scrollTo(0, distance);
        typeof opt.callback === 'function' && opt.callback();
        timeStart = null;
    }
}