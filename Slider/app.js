console.log("connected");

let valo = [
  {
    agent: "Jett",
    role: "Duelist",
    description:
      "Jett is an agile and evasive fighter, able to outmaneuver opponents and strike with deadly precision.",
    src: "https://example.com/images/jett.png",
  },
  {
    agent: "Phoenix",
    role: "Duelist",
    description:
      "Phoenix is a self-sufficient duelist with a versatile toolkit, able to heal himself and control the battlefield with fire.",
    src: "https://boosting-ground.com/upload/206ceecc064d01d74e708bae5a67e7568914f5c2.jpeg",
  },
  {
    agent: "Sova",
    role: "Initiator",
    description:
      "Sova is a master archer who can reveal enemy positions and eliminate them with deadly precision.",
    src: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*2l9lSPCejlLgwPPo4nV6lQ.jpeg",
  },
  {
    agent: "Viper",
    role: "Controller",
    description:
      "Viper uses poisonous gas to control the battlefield, making it difficult for enemies to navigate and fight.",
    src: "https://admin.esports.gg/wp-content/uploads/2024/04/Viper_VALORANT-968x544.jpg",
  },
  {
    agent: "Yoru",
    role: "Duelist",
    description:
      "Yoru uses poisonous gas to control the battlefield, making it difficult for enemies to navigate and fight.",
    src: "https://files.bo3.gg/uploads/news/18967/title_image/960x480-8967f5c95773db2d6457a5424eecd4b8.webp",
  },
];

let img = document.getElementById("img");
let description = document.getElementById("description");
let role = document.getElementById("role");
let charName = document.getElementById("name");

let prev = document.getElementById("prev");
let rand = document.getElementById("rand");
let next = document.getElementById("next");

let indexNumber = 2;

window.addEventListener("DOMContentLoaded", () => {
  displayCharacter(indexNumber);
});

prev.addEventListener("click", () => {
  indexNumber = (indexNumber - 1 + valo.length) % valo.length;
  displayCharacter(indexNumber);
});

rand.addEventListener("click", () => {
  indexNumber = Math.floor(Math.random() * valo.length);
  displayCharacter(indexNumber);
});

next.addEventListener("click", () => {
  indexNumber = (indexNumber + 1) % valo.length;
  displayCharacter(indexNumber);
});

function displayCharacter(index) {
  let arr = valo[index];
  charName.innerText = arr.agent;
  role.innerText = arr.role;
  description.innerText = arr.description;
  img.src = arr.src;
}
