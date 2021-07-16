function onSubmit() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let gender = document.getElementById('gender').value;
    document.getElementById("output").innerHTML = day + month + year + gender;


    let century = year.slice(0, 2);
    let year1 = year.substr(2, 2);
    console.log(century + " " + year1);
    let dd = parseInt(day);
    let mm = parseInt(month);
    let cc = parseInt(century);
    let yy = parseInt(year1);
    console.log(dd + mm + year);

    if (dd >= 32) {}



    let dayL = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

    const finalValue = Math.round(dayL)



    document.getElementById("output").innerHTML = day + " " + month + " " + year + " " + finalValue



    let isFemale = gender;
    let dayOfTheWeek = finalValue;

    let isMale = gender;
    let dayOfTheWeekMale = finalValue;

    if (dayOfTheWeek == 0 && isFemale == "2") {
        document.getElementById('akan').innerHTML = "Your Akan name is  Akosua";;
    } else if (dayOfTheWeek == 1 && isFemale == "2") {
        document.getElementById('akan').innerHTML = "Your Akan name is Adwoa";
    } else if (dayOfTheWeek == 2 && isFemale == "2") {
        document.getElementById('akan').innerHTML = "Your Akan name is  Abenaa";
    } else if (dayOfTheWeek == 3 && isFemale == "2") {
        document.getElementById('akan').innerHTML = "Your Akan name is  Akua";
    } else if (dayOfTheWeek == 4 && isFemale) {
        document.getElementById('akan').innerHTML = "Your Akan name is  Yaa";
    } else if (dayOfTheWeek == 5 && isFemale == "2") {
        document.getElementById('akan').innerHTML = "Your Akan name is  Afua";;
    } else if (dayOfTheWeek == 6 && isFemale == "2") {
        document.getElementById('akan').innerHTML = "Your Akan name is Ama";
    } else if (dayOfTheWeek <= 6 || dayOfTheWeek >= 0 && isFemale == "1") {
        document.getElementById("akan").innerHTML = "";
    } else {
        document.getElementById('akan').innerHTML = "invalid day of the week";
    }


    if (dayOfTheWeekMale == 0 && isMale == "1") {
        document.getElementById('akan2').innerHTML = "Your Akan name is  Kwasi";
    } else if (dayOfTheWeekMale == 1 && isMale == "1") {
        document.getElementById('akan2').innerHTML = "Your Akan name is Kwadwo";
    } else if (dayOfTheWeekMale == 2 && isMale == "1") {
        document.getElementById('akan2').innerHTML = "Your Akan name is  Kwabena";
    } else if (dayOfTheWeekMale == 3 && isMale == "1") {
        document.getElementById('akan2').innerHTML = "Your Akan name is  Kwaku";
    } else if (dayOfTheWeekMale == 4 && isMale == "1") {
        document.getElementById('akan2').innerHTML = "Your Akan name is  Yaw";
    } else if (dayOfTheWeekMale == 5 && isMale == "1") {
        document.getElementById('akan2').innerHTML = "Your Akan name Kofi";
    } else if (dayOfTheWeekMale == 6 && isMale == "1") {
        document.getElementById('akan2').innerHTML = "Your Akan name is Kwame";
    } else if (dayOfTheWeekMale <= 6 || dayOfTheWeekMale >= 0 && male == "2") {
        document.getElementById("akan2").innerHTML = "";
    } else {
        document.getElementById('akan2').innerHTML = "invalid day of the week";
    }

}