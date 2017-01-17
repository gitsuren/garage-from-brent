"use strict";

function currentDate() {
        var currentDate = new Date;
        var Day = currentDate.getDate();
        if (Day < 10) {
            Day = '0' + Day;
        } //end if
        var Month = currentDate.getMonth() + 1;
        if (Month < 10) {
            Month = '0' + Month;
        } //end if
        var Year = currentDate.getFullYear();
        var fullDate = Month + '/' + Day + '/' + Year;
        return fullDate;
    } //end current date function

function currentTime() {
        var currentTime = new Date;
        var Minutes = currentTime.getMinutes();
        if (Minutes < 10) {
            Minutes = '0' + Minutes;
        }
        var Hour = currentTime.getHours();
        if (Hour > 12) {
            Hour -= 12;
        } //end if
        var Time = Hour + ':' + Minutes;
        if (currentTime.getHours() <= 12) {
            Time += ' AM';
        } //end if
        if (currentTime.getHours() > 12) {
            Time += ' PM';
        } //end if
        return Time;
    } // end current time function

var datetimeUtil = {
	currentDate : function(){ var today = currentDate(); console.log('printing date :' + today); return today; },
	currentTime : function(){ var now = currentTime(); console.log('printing time : ' + now); return now;}
};

module.exports = datetimeUtil;