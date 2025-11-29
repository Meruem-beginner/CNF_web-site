const characters = [
  {
    name: "KAI",
    img: "images/kai.jpg",
    feature: "冷静沈着なギタリスト。闇を切り裂く旋律を奏でる。"
  },
  {
    name: "REI",
    img: "images/rei.jpg",
    feature: "激情的なボーカリスト。魂を震わせる歌声を持つ。"
  },
  {
    name: "YUU",
    img: "images/yuu.jpg",
    feature: "神秘的なドラマー。リズムで世界を支配する。"
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
