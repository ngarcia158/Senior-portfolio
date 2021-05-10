let output = testProject.split("");
let counter = 0;
for(let i = 0; i <=output.length; i++){
    if(output[i] == "("){
        if(output[i + 1]== "("){
            i++;
            counter--;
        }
        else{
            counter--;
        }
    }
    if(output[i] == ")"){
        if(output[i + 1]== ")"){
            i++;
            counter++;
        }
        else{
            counter++;
        }
    }

}

if(counter < 0){
    console.log("The train is " + Math.abs(counter) + " stations to the west")
}
if(counter > 0){
    console.log("The train is " + Math.abs(counter) + " stations to the east")
}
if(counter == 0){
    console.log('You are at the train')
}


