let userInput: unknown;
let userName: string; 

userInput = 5;
userInput = "Max";

userInput = 3;
sdadsdas
if(typeof userInput == "string"){
userName = userInput;
}

function generateError(message: string, code: number): never{
    // throw {message: message, errorCode: code};
    while(true){
        
    }
}

const result = generateError("An error occurred!", 500);
console.log(result);
