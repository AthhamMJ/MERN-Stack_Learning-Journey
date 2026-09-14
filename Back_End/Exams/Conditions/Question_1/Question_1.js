// Answer for A)

function main(){
    let ratePerkg = 45;
    let wname = "Sudhan";
    let kgPlucked = 32;
    let daytype = "sunday" 
    let dailyWage = kgPlucked * ratePerkg;
    console.log(wname + "'s wage today is Rs. "+ dailyWage);
    console.log(calculateBonus(dailyWage, kgPlucked, daytype))
}   

// Answer for B)
    function calculateBonus(dailyWage, kgPlucked, daytype){
        if(kgPlucked > 30){
            dailyWage += dailyWage * 0.15;
            dailyWage = getDayMultiplier(daytype) * dailyWage
        }
        return dailyWage;
    }

// Answer for C)
    function getDayMultiplier(daytype){
        switch(daytype){
            case "weekday" :
                return 1;
                break;
            case "saturday" :
                return 1.25;
                break;
            case "sunday" :
                return 1.5;
                break;
            default:
                return 1;
                break
        } 

}
main();