const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  background: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomColor = () => {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.background.style.backgroundColor = colors[randomColor];
};



const onChangeColorHandler = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    refs.startBtn.disabled = true;
    this.isActive = true;
    this.intervalId = setInterval(() => setRandomColor(), 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    refs.startBtn.disabled = false;
    this.intervalId = null;
    this.isActive = false;
    refs.background.style.backgroundColor = null;
  },
};

refs.startBtn.addEventListener(
  'click',
  onChangeColorHandler.start.bind(onChangeColorHandler),
);
refs.stopBtn.addEventListener(
  'click',
  onChangeColorHandler.stop.bind(onChangeColorHandler),
);
