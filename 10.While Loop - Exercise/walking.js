function walking(input){

let index = 0;
let target = 10000;
let command = input[index];
index++;
let steps = 0;

while(command !== "Going home"){
    let tempStep = Number(command);
    steps+=tempStep;

    if(steps>=target){
        
        break;
    }
    command = input[index];
    index++;

}
if(command === "Going home"){
    let tempStep=Number(input[index]);
    index++;
    steps+=tempStep
}
let diff = Math.abs(target-steps);

if(target<=steps){
    
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
}else{
    console.log(`${diff} more steps to reach goal.`);
}

}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])

