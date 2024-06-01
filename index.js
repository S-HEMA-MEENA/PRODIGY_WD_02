const playButton = document.querySelector(".play-button");
const flagButton = document.querySelector(".flag-button");
const pauseButton = document.querySelector(".pause-button");
const resetButton = document.querySelector(".reset-button");
const button = document.querySelector(".button");
const sec = document.querySelector(".sec");
const msec = document.querySelector(".msec");
const min = document.querySelector(".min");
const laps = document.querySelector(".laps");
const bg = document.querySelector(".outter-circle");

let s = 0;

let m = 0;

let q=0;

let l=0;

const toggleButton = () => {
  flagButton.classList.remove("hidden");
  pauseButton.classList.remove("hidden");
  playButton.classList.toggle("hidden");

};

const play = () => {
  toggleButton();
  bg.classList.add("animation-bg");
  minId  = setInterval(() => {
    min.innerHTML = `&nbsp;${++q}.`;
  }, 60*1000);
  secondId = setInterval(() => {
    if (s== 59){
        s=-1;
    }
    sec.innerHTML = `&nbsp;${++s}.`;
  }, 1000);
  millisecId = setInterval(() => {
    if (m== 100){
        m=0;
    }
    msec.innerHTML = `&nbsp;${++m} `;
  }, 10);
};

playButton.addEventListener("click", play);

const play2 = () => {
  button.classList.remove("hidden");
  resetButton.classList.remove("hidden");
  pauseButton.classList.toggle("hidden");
  flagButton.classList.toggle("hidden");
  clearInterval(millisecId );
  clearInterval(secondId);
  clearInterval(minId);
};

pauseButton.addEventListener("click", play2);

const play3 = () => {
  button.classList.toggle("hidden");
  resetButton.classList.toggle("hidden");
  playButton.classList.remove("hidden");
  sec.innerHTML = `&nbsp;0.`;
  msec.innerHTML = `&nbsp;0`;
  min.innerHTML = `0:`;
  s = 0;
  m = 0;
  q = 0;
  l=0;
  bg.classList.remove("animation-bg");
  clear();
};

resetButton.addEventListener("click", play3);


button.addEventListener("click", () =>{
  button.classList.toggle("hidden");
  resetButton.classList.toggle("hidden");
  playButton.classList.toggle("hidden");
  play();
});

const lap = () => {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeStamp = document.createElement("span");

  li.setAttribute("class","lap-item");
  number.setAttribute("class","number");
  timeStamp.setAttribute("class","time-stamp");

  number.innerHTML=`#${++l}`;
  timeStamp.innerHTML=`${q}:&nbsp;${s}.&nbsp;${m}`;

  li.append(number, timeStamp);
  laps.appendChild(li); 

}

const clear = ()=>{
  laps.innerHTML=``;
}

flagButton.addEventListener("click", lap);