const button = document.querySelector("button");

function add(n1: number, n2: number){
    if(n1 + n2 > 0){
        return n1 + n2;
    }
}


function clickHandler(message: string){
    let userName = "Max";
    console.log("Cliked! " + message);
}

if(button){
    button?.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}