function gradeCalculate(marks){
    switch(true){
        case (marks >= 75):
            return 'A';

        case (marks >= 65):
            return 'B';

        case (marks >= 50):
            return 'C';

        case (marks >= 35):
            return 'S';

        default:
            return 'F';
    }
}

export default gradeCalculate;