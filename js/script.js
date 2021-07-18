function onSubmit() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let gender = document.getElementById("gender").value;
    //document.getElementById("output").innerHTML = day + month + year + gender;

    let century = year.slice(0, 2);
    let year1 = year.substr(2, 2);
    console.log(century + " " + year1);
    let dd = parseInt(day);
    let mm = parseInt(month);
    let cc = parseInt(century);
    let yy = parseInt(year1);
    console.log(dd + mm + year);

    if (dd >= 32) {
        document.getElementById("dayerror").innerHTML =
            "Invalid entry: An entry above 31 will result in errors ❌";
        document.getElementById("daycorrect").innerHTML = "";
    } else if (dd <= 0) {
        document.getElementById("dayerror").innerHTML =
            "Invalid entry: An entry below zero will result in errors ❌";
        document.getElementById("daycorrect").innerHTML = "";
    } else if (dd >= 1 && dd < 32) {
        document.getElementById("daycorrect").innerHTML = "Valid entry ✅";
        document.getElementById("dayerror").innerHTML = "";
    } else {
        document.getElementById("daycorrect").innerHTML = "";
        document.getElementById("dayerror").innerHTML = "";
    }

    if (mm >= 13) {
        document.getElementById("montherror").innerHTML =
            "Invalid month such an entry will result in errors ❌";
        document.getElementById("monthcorrect").innerHTML = "";
    } else if (mm <= 0) {
        document.getElementById("montherror").innerHTML =
            "Invalid month such an entry will result in errors ❌";
        document.getElementById("monthcorrect").innerHTML = "";
    } else if (mm >= 1 && mm < 13) {
        document.getElementById("monthcorrect").innerHTML = "Valid entry ✅";
        document.getElementById("montherror").innerHTML = "";
    } else {
        document.getElementById("monthcorrect").innerHTML = "";
        document.getElementById("montherror").innerHTML = "";
    }

    let dayL =
        (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
    const finalValue = Math.abs(Math.round(dayL));
    //document.getElementById("output").innerHTML =
    //day + " " + month + " " + year + " " + finalValue;

    let isFemale = gender;
    let dayOfTheWeek = finalValue;

    let isMale = gender;
    let dayOfTheWeekMale = finalValue;
    if (dayOfTheWeek == 0 && isFemale == "2") {
        document.getElementById("akan").innerHTML =
            '🌼🌺Your Akan name is  <b class="femaletext">Akosua</b>🌺🌼';
    } else if (dayOfTheWeek == 1 && isFemale == "2") {
        document.getElementById("akan").innerHTML =
            '🌼🌺Your Akan name is <b class="femaletext">Adwoa</b>🌺🌼';
    } else if (dayOfTheWeek == 2 && isFemale == "2") {
        document.getElementById("akan").innerHTML =
            '🌼🌺Your Akan name is <b class="femaletext"> Abenaa</b>🌺🌼';
    } else if (dayOfTheWeek == 3 && isFemale == "2") {
        document.getElementById("akan").innerHTML =
            '🌼🌺Your Akan name is  <b class="femaletext">Akua</b>🌺🌼';
    } else if (dayOfTheWeek == 4 && isFemale == "2") {
        document.getElementById("akan").innerHTML =
            '🌼🌺Your Akan name is  <b class="femaletext">Yaa</b>🌺🌼';
    } else if (dayOfTheWeek == 5 && isFemale == "2") {
        document.getElementById("akan").innerHTML =
            '🌼🌺Your Akan name is <b class="femaletext"> Afua</b>🌺🌼';
    } else if (dayOfTheWeek == 6 && isFemale == "2") {
        document.getElementById("akan").innerHTML =
            '🌼🌺Your Akan name is <b class="femaletext">Ama</b>🌺🌼';
    } else if (dayOfTheWeek == 7 && isFemale == "2") {
        document.getElementById("akan").innerHTML =
            '🌼🌺Your Akan name is <b class="femaletext">Ama</b>🌺🌼';
    } else if (dayOfTheWeek <= 7 || (dayOfTheWeek >= 0 && isFemale == "1")) {
        document.getElementById("akan").innerHTML = "";
    } else {
        document.getElementById("akan").innerHTML = "Missing Entry !!!!!!!!";
    }

    if (dayOfTheWeekMale == 0 && isMale == "1") {
        document.getElementById("akan2").innerHTML =
            '♧♢🔥Your Akan name is  <b class="maletext">Kwasi</b>🔥♢♧';
    } else if (dayOfTheWeekMale == 1 && isMale == "1") {
        document.getElementById("akan2").innerHTML =
            '♧♢🔥Your Akan name is <b class="maletext">Kwadwo</b>🔥♢♧';
    } else if (dayOfTheWeekMale == 2 && isMale == "1") {
        document.getElementById("akan2").innerHTML =
            '♧♢🔥Your Akan name is  <b class="maletext">Kwabena🔥♢♧';
    } else if (dayOfTheWeekMale == 3 && isMale == "1") {
        document.getElementById("akan2").innerHTML =
            '♧♢🔥Your Akan name is  <b class="maletext">Kwaku</b>🔥♢♧';
    } else if (dayOfTheWeekMale == 4 && isMale == "1") {
        document.getElementById("akan2").innerHTML =
            '♧♢🔥Your Akan name is  <b class="maletext">Yaw</b>🔥♢♧';
    } else if (dayOfTheWeekMale == 5 && isMale == "1") {
        document.getElementById("akan2").innerHTML =
            '♧♢🔥Your Akan name <b class="maletext">Kofi</b>🔥♢♧';
    } else if (dayOfTheWeekMale == 6 && isMale == "1") {
        document.getElementById("akan2").innerHTML =
            '♧♢🔥Your Akan name is <b class="maletext">Kwame</b>🔥♢♧';
    } else if (dayOfTheWeekMale == 7 && isMale == "1") {
        document.getElementById("akan2").innerHTML =
            '♧♢🔥Your Akan name is <b class="maletext">Kwame</b>🔥♢♧';
    } else if (
        dayOfTheWeekMale <= 7 ||
        (dayOfTheWeekMale >= 0 && isMale == "2")
    ) {
        document.getElementById("akan2").innerHTML = "";
    } else if (isMale == 1 || (isMale == 2 && dayOfTheWeekMale != 0)) {
        document.getElementById("errorG").innerHTML = "";
    } else if (isMale != 1 || isMale != 2) {
        document.getElementById("errorG").innerHTML =
            "Gender Error Refresh Page And Enter Valid Entry ";
    } else if (
        (isMale != 1 && dayOfTheWeekMale && dayOfTheWeek >= 0) ||
        (isMale != 2 && dayOfTheWeekMale && dayOfTheWeek >= 0)
    ) {
        document.getElementById("errorG").innerHTML =
            "Gender Error Refresh Page And Enter Valid Entry ";
    } else {
        document.getElementById("akan").innerHTML = "Missing Entry !!!!!!!!";
    }
}