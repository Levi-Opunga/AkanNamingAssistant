function dateInputs() {
    console.log("Function has been hit!!!");
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let fullYear = document.getElementById("year").value;
    let century = parseInt(fullYear.slice(0, 2));
    let year = parseInt(fullYear.slice(-1, -3));


    console.log(month);
    console.log(century);
    console.log(year);

}
dateInputs()

function calculateDay(day, month, year, day)