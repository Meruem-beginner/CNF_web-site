const characters = [
  {
    name: "禍津日神",
    img: "images/handsome-icon_5-8-8-40.webp",
    feature: "冷静沈着なパーカッション。闇を切り裂く旋律を奏でる。"
  },
  {
    name: "大獄丸",
    img: "images/showcase-558491ad9890d2f7f12124d4500242a3-20230907232747.jpeg",
    feature: "神秘的なドラマー。リズムで世界を支配する。"
  },
  {
    name: "虎熊童子",
    img: "images/showcase-6983cfe3fc3cf613dba4190a77d6fe4c-20230530102048.jpeg",
    feature: "激情的なボーカリスト。魂を震わせる歌声を持つ。"
  }
];

let currentIndex = 0;

function showCharacter(index) {
  const char = characters[index];
  const infoDiv = document.getElementById("character-info");
  infoDiv.innerHTML = `
    <h2>${char.name}</h2>
    <img src="${char.img}" alt="${char.name}">
    <p>${char.feature}</p>
  `;
}

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + characters.length) % characters.length;
  showCharacter(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % characters.length;
  showCharacter(currentIndex);
});

// 初期表示
showCharacter(currentIndex);
