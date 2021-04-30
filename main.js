
   const gridcontainer =document.querySelector("#grid-container");
   let grid = 10;

for (let index = 0; index < grid; index++) {

const singlecell = document.createElement("div");
singlecell.textContent = ".";
singlecell.style.color = "black";
singlecell.classList.add("bg-red");
singlecell.addEventListener(
    "mouseover", () => {
        singlecell.classList.add("bg-blue");
    }
);
gridcontainer.appendChild(singlecell);

}
