let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered=false;
let runnersAge=18;

if(runnersAge>18 && earlyRegistered){
  let adultraceNumber=raceNumber+1000;
  console.log(adultraceNumber + " you will start race at 9:30 Am");
  
}else if(runnersAge>18 && !earlyRegistered){
  console.log(raceNumber + " You will start race at 11am");
}else if(runnersAge<18){
  console.log(raceNumber + " you will race at 12:30 pm")
}else if(runnersAge===18){
  console.log("Go to the registration desk");

}
else{
  console.log("Something is wrong!")
}
