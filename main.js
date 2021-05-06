
   const gridcontainer =document.querySelector("#grid-container");
   let grid = 20;
 

   for (let index2 = 0; index2 < grid; index2++) {
       let rowCon = document.createElement("div")
       
        for (let index = 0; index < grid; index++) {

        const singlecell = document.createElement("div");
        singlecell.textContent = " .";
        singlecell.style.color = "bg-red";
        singlecell.classList.add("bg-red");
        singlecell.addEventListener(
            "mouseover", () => {
                singlecell.classList.add("bg-blue");
                singlecell.style.color = "bg-blue";
            }
        );
        rowCon.appendChild(singlecell)
        }

        gridcontainer.appendChild(rowCon);
    }