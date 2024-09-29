// ID TO NUMBER
function idToNum(id) {
    let i = document.getElementById(id).innerText;
    return Number(i);
}

// INPUT VALUE TO NUMBER
function inputToNum(id) {
    let i = document.getElementById(id).value;
    return Number(i);
}

// Total 
function totalMarkTillNow(one = 0, two = 0, three = 0, four = 0, five = 0, six = 0, seven = 0, eight = 0, nine = 0, ten = 0, eleven = 0, twelve = 0) {
    let result = one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve
    return result;
}

// 50% Check
function fiftyCheck(scoreID, optionID, showID){
    
    if(scoreID/50 !== 0){

    }
}