interface Options {
  speed?: number;
}

// Text to rotate through
let rotatingTextArray: string[] = [];

const source: Element = document.querySelector(".rotating-text");
let root = document.documentElement;

const rotateText = ({ speed }: Options = { speed: 2000 }) => {
  rotatingTextArray = source.innerHTML.split(",");
  // Set element with first entry in array to begin with
  source.innerHTML = rotatingTextArray[0];

  // default speed
  speed != undefined ? speed : (speed = 2000);

  // sync timeout with fade class
  const timeoutFadeSync: number = speed / 3;
  const transTime = ((timeoutFadeSync % 60000) / 1000).toFixed(2);

  root.style.setProperty("--trans-speed", `${transTime}s`);

  sourceInterval(speed, timeoutFadeSync);
};

// init index counter
let currentSourceIndex: number = 0;

// rotate through array on interval
const sourceInterval = (speed: number, timeoutFadeSync: number) => {
  setInterval(function () {
    // add to index counter
    ++currentSourceIndex;

    // When counter reaches end of array, reset counter
    if (currentSourceIndex >= rotatingTextArray.length) {
      currentSourceIndex = 0;
    }

    // toggle fade class
    source.classList.toggle("fade");

    // Sync fade with timeout
    setTimeout(function () {
      // update html in element with next index in array
      source.classList.toggle("fade");

      source.innerHTML = rotatingTextArray[currentSourceIndex];
    }, timeoutFadeSync);
  }, speed);
};
