let ratePerkg = 45
function checkWage(kgPlucked, ratePerkg){
    let dailyWage = kgPlucked * ratePerkg;
    if(kgPlucked > 30){
        console.log("Bonus Applied");
    }
    else{
        console.log("No Bonus");
    }
    return dailyWage;
}

console.log(checkWage(35, ratePerkg));