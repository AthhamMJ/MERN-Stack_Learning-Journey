//Answer for A)
function main(){
    let Sname = "Ajith";
    let mathsMarks = 85;
    let scienceMarks = 79;
    let englishMarks = 90;
    let average = (mathsMarks + scienceMarks + englishMarks) / 3;
    console.log(Sname +"'s average is " + average + " " +getGrade(average))
}
//Answer for B)
function isPass(mathsMarks, scienceMarks, englishMarks){
    if (mathsMarks > 35 && scienceMarks > 35 && englishMarks > 35){
        return true;
    }
    else{
        return false;
    }
}
//Answer for C)
function getGrade(average){
    switch(true){
        case average >= 75:
            return "A";
            break;
        case average >= 65:
            return "B";
            break;
        case average >= 50:
            return "C";
            break;
        case average >= 35:
            return "S";
            break;
        case average < 35:
            return "F";
            break;
    }
}
main();