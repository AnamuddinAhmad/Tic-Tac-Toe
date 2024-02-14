let allbox = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let div = document.createElement("h1");

let choiceo = true;

let winpater = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//Reset game

let resutl = 0;
reset.addEventListener("click", () => {
  div.style.display = "none";
  allbox.innerText = "";
  resutl=0;
  document.querySelector(".game").style.display = "flex";
  enablebox();
});

const disablebox = () => {
  for (const box of allbox) {
    box.disabled = true;
    resutl=0;
    div.style.display = "block";
  }
};


const enablebox = () => {
  for (const box of allbox) {
    box.disabled = false;
    box.innerHTML = "";
    resutl=0;
    document.querySelector(".reset-btn").innerHTML = "Reset";
  }
};

//Here box will give all the btn value;
allbox.forEach((box) => {
  box.addEventListener("click", () => {
    resutl++;
    if (choiceo) {
      box.innerHTML = "O";
      choiceo = false;
    } else {
      box.innerHTML = "X";
      choiceo = true;
    }
    box.disabled = true;
    iswin();
  });
});

//Creatin Extra element;

const iswin = () => {
  for (const pattern of winpater) {
    let postion1 = allbox[pattern[0]].innerText;
    let postion2 = allbox[pattern[1]].innerText;
    let postion3 = allbox[pattern[2]].innerText;

    //Condtion cheking for the winner
    if (postion1 != "" && postion2 != "" && postion3 != "") {
      if (postion1 == postion2 && postion2 == postion3) {
        resutl=0;
        div.style.color = "white";
        // document.querySelector(".game").style.display = "none";
        div.innerText = `${postion1} IS WON THE MATCH`;
        //Here appending element for last result
        document.querySelector(".wraper").before(div);
        disablebox();
        document.querySelector(".reset-btn").innerText = "New Game";
        return;
      } else if ((resutl == 9)&&(postion1 != postion2 && postion2 != postion3)) {
        console.log(resutl);
        resutl=0;
        disablebox();
        div.innerText = `MATCH DRAW`;
        document.querySelector(".wraper").before(div);
        return;
      }
    }
  }
};
