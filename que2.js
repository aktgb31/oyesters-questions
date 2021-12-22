function answer(time) {
    let hour = parseInt(time.slice(0, 2));
    let minute = parseInt(time.slice(3, 5));
    let second = parseInt(time.slice(6, 8));
    if (time.slice(8, 10) == "PM") {
        if (hour != 12)
            hour += 12;
    } else {
        if (hour == 12)
            hour = 0;
    }
    let result = hour * 3600 + minute * 60 + second;
    result += 45 * 60 + 45;

    result = result % 86400;
    hour = Math.floor(result / 3600);
    minute = Math.floor((result % 3600) / 60);
    second = result % 60;
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (second < 10)
        second = "0" + second;
    return hour + ":" + minute + ":" + second;
}