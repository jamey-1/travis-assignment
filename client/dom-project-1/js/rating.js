let els = document.getElementsByClassName("selectionButton");

let ul = document.querySelector(".nameList");

const topThreeSelection = document.getElementById("topThreeSelection");
const selectionList = document.getElementById("selectionList");
const thanksInfo = document.getElementById("thanksInfo");

Array.prototype.forEach.call(els, (el) => {
  el.addEventListener("click", () => {
    const count = ul.getElementsByTagName("li").length;

    if (count < 3) {
      // console.log(el.textContent);
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(el.textContent));
      ul.appendChild(li);
    //   console.log(ul.getElementsByTagName("li").length);
    } else {
      alert("You can only choose three speakers");
    }
  });
});

document.querySelector(".submitButton").addEventListener("click", () => {
  const count = ul.getElementsByTagName("li").length;
  if (count === 3) {
    topThreeSelection.classList.add("hide");
    selectionList.classList.add("hide");
    thanksInfo.classList.remove("hide");
    thanksInfo.classList.add("show");
  }
});
