interface Options {
  speed?: number;
}

// Text to rotate through
let rotatingTextArray: string[] = [];

// Text source element
const source: Element = document.querySelector(".rotating-text");

const rotateText = (
  { speed }: Options = { speed: 2000 } // default value
) => {
  // split text string by separator
  rotatingTextArray = source.innerHTML.split(",");

  // Set element with first entry in array to begin with
  source.innerHTML = rotatingTextArray[0];

  // default time = 2000ms
  sourceInterval(speed);
};

// init index counter
let currentSourceIndex: number = 0;

// rotate through array on interval
const sourceInterval = (speed: number) => {
  const timeoutFadeSync: number = speed / 3;

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
      source.innerHTML = rotatingTextArray[currentSourceIndex];
      source.classList.toggle("fade");
    }, timeoutFadeSync);
  }, speed);
};
