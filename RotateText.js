var rotatingTextArray = [];
var source = document.querySelector(".rotating-text");
var rotateText = function (_a) {
    var speed = (_a === void 0 ? { speed: 2000 } : _a).speed;
    rotatingTextArray = source.innerHTML.split(",");
    source.innerHTML = rotatingTextArray[0];
    sourceInterval(speed);
};
var currentSourceIndex = 0;
var sourceInterval = function (speed) {
    var timeoutFadeSync = speed / 3;
    setInterval(function () {
        ++currentSourceIndex;
        if (currentSourceIndex >= rotatingTextArray.length) {
            currentSourceIndex = 0;
        }
        source.classList.toggle("fade");
        setTimeout(function () {
            source.innerHTML = rotatingTextArray[currentSourceIndex];
            source.classList.toggle("fade");
        }, timeoutFadeSync);
    }, speed);
};
