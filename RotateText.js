var rotatingTextArray = [];
var source = document.querySelector(".rotating-text");
var root = document.documentElement;
var rotateText = function (_a) {
    var _b = _a === void 0 ? { content: [], speed: 2000 } : _a, content = _b.content, speed = _b.speed;
    rotatingTextArray = content;
    source.innerHTML = rotatingTextArray[0];
    speed != undefined ? speed : speed = 2000;
    var timeoutFadeSync = speed / 3;
    var transTime = ((timeoutFadeSync % 60000) / 1000).toFixed(2);
    root.style.setProperty("--trans-speed", transTime + "s");
    sourceInterval(speed, timeoutFadeSync);
};
var currentSourceIndex = 0;
var sourceInterval = function (speed, timeoutFadeSync) {
    setInterval(function () {
        ++currentSourceIndex;
        if (currentSourceIndex >= rotatingTextArray.length) {
            currentSourceIndex = 0;
        }
        source.classList.toggle("fade");
        setTimeout(function () {
            source.classList.toggle("fade");
            source.innerHTML = rotatingTextArray[currentSourceIndex];
        }, timeoutFadeSync);
    }, speed);
};
