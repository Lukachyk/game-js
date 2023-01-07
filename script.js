const wtf = document.getElementById("wtf");
const pngwing = document.getElementById("pngwing");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (wtf.classList != "jump") {
    wtf.classList.add("jump");
  }
  setTimeout(function () {
    wtf.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(function () {
  let wtfTop = parseInt(window.getComputedStyle(wtf).getPropertyValue("top"));
  let pngwingLeft = parseInt(
    window.getComputedStyle(pngwing).getPropertyValue("left")
  );
  if (pngwingLeft < 50 && pngwingLeft > 0 && wtfTop >= 140) {
    alert("GAME OVER");
  }
}, 10);
