// calculate
document.getElementById("calculate").addEventListener("click", function () {
    let markAssi1 = inputToNum("assignment1")
    let markAssi2 = inputToNum("assignment2")
    let markAssi3 = inputToNum("assignment3")
    let markAssi4 = inputToNum("assignment4")
    let markAssi5 = inputToNum("assignment5")
    let markAssi6 = inputToNum("assignment6")
    let markAssi7 = inputToNum("assignment7")
    let markAssi8 = inputToNum("assignment8")
    let markAssi9 = inputToNum("assignment9")
    let markAssi10 = inputToNum("assignment10")
    let markAssi11 = inputToNum("assignment11")
    let markAssi12 = inputToNum("assignment12")
    let assigenmentAttempted = inputToNum("assigenmentAttempted")
    let restExam = 12 - assigenmentAttempted
    let totalScoreRequired = 48 * 12

    let totalMark = totalMarkTillNow(markAssi1, markAssi2, markAssi3, markAssi4, markAssi5, markAssi6, markAssi7, markAssi8, markAssi9, markAssi10, markAssi11, markAssi12)
    document.getElementById("totalScore").innerText = totalMark

    let average = totalMark / assigenmentAttempted
    document.getElementById("totalAverage").innerText = average

    let scoreHaveToEarn = totalScoreRequired - 84 - totalMark
    let haveToMaintainAvg = scoreHaveToEarn / (restExam-2)

    document.getElementById("haveToMaintainAvg").innerText = haveToMaintainAvg
    document.getElementById("restExam").innerText = restExam-2

    /*
     * student have tyo maintain average of 48 marks in all assignment
     * and 70% in assignment 11 and 12
     * total mark required 576 in 12 assigenment
     * and 84 in 11- 12
     * so 492 in rest 10
     * as you have got 100 in 5 assignment 
     * so you have to score 492-100
     * average 492-100 / 10-given exam
     */
})