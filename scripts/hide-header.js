
const header = document.getElementsByClassName("h")[0];

window.addEventListener(
    "wheel",
    (event) => {

        // scroll up
        if (event.deltaY > 0){
            header.style.top = "-150px";
        }

        // scroll down
        else{
            header.style.top = "0px";
        }
    }
);