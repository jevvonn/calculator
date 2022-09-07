const resultHTML = document.querySelector(".result-box");
const numberHTML = document.querySelectorAll(".number");
const operatorHTML = document.querySelectorAll(".operator");
const resetHTML = document.querySelector(".reset");
const equalHTML = document.querySelector(".equal");
const delHTML = document.querySelector(".delete");

let count = "0";
resultHTML.textContent = count;

document.addEventListener("click", (e) => {
  if (e.target.classList[1] == "number") {
    process(e.target.getAttribute("data-num"));
  }

  if (e.target.classList[1] == "dot") {
    process(e.target.getAttribute("data-dot"));
  }

  if (e.target.classList[1] == "operator") {
    process(e.target.getAttribute("data-opt"));
  }

  if (e.target.classList[1] == "delete") {
    if (count == "0") return;
    count = count.slice(0, -1);
    if (count.length < 1) showContent("0");
    count != "0" ? showContent("") : false;
  }

  if (e.target.classList[1] == "reset") {
    count = "0";
    showContent("0");
  }

  if (e.target.classList[1] == "equal") {
    resultHTML.textContent = eval(count);
    count = eval(count).toString();
  }

  if (e.target.classList[0] == "btn-change") {
    // document.body.classList[0] = e.target.getAttribute("data-theme");
    document.body.classList.remove("theme2");
    document.body.classList.remove("theme1");
    document.body.classList.remove("theme3");
    document.body.classList.add(e.target.getAttribute("data-theme"));
  }
});

function process(input) {
  if (input == "+" || input == "-" || input == "*" || input == "/") {
    let countLastChar = count.charAt(count.length - 1);
    if (countLastChar == "+" || countLastChar == "-" || countLastChar == "*" || countLastChar == "/") {
      count = count.slice(0, -1);
    }
    count != "0" ? showContent(input) : false;
  } else {
    showContent(input);
  }
}

function showContent(input) {
  count == "0" ? (count = input) : (count += input);
  let result = count.split("");
  resultHTML.textContent = "";
  result.forEach((r) => {
    if (r == "*") {
      resultHTML.textContent += `x`;
    } else {
      resultHTML.textContent += `${r}`;
    }
  });
}
