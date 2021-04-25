function customDate(days){
    const todayDate = moment().format('ddd Do MMM YYYY')
    const addDays = moment().add(days, 'days').format('ddd Do MMM YYYY')
    // console.log(addDays)
    return addDays
}

// document.getElementById("day1").innerHTML = customDate()
// document.getElementById("day2").innerHTML = customDate()
// document.getElementById("day3").innerHTML = customDate()
