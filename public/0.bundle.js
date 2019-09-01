(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/CalendarData/CalendarData.jsx":
/*!**********************************************!*\
  !*** ./client/CalendarData/CalendarData.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var newDate = new Date();\nvar currentDay = newDate.toDateString();\ncurrentDay = currentDay.replace(/2019/gi, '');\nvar SeptemberDays = [];\n\nfor (var i = 1; i <= 30; i += 1) {\n  SeptemberDays.push(i);\n}\n\nvar October = [];\nvar OctoberMonthValue = '2019-10';\n\nfor (var _i = 1; _i <= 31; _i += 1) {\n  var OctoberObj = {};\n  var OctoberDateTimeDayValue = '2019-10-';\n\n  if (_i < 10) {\n    OctoberDateTimeDayValue += \"0\".concat(_i);\n  } else {\n    OctoberDateTimeDayValue += \"\".concat(_i);\n  }\n\n  OctoberObj.dateTimeDay = OctoberDateTimeDayValue;\n  OctoberObj.day = _i;\n  October.push(OctoberObj);\n}\n\nvar NovemberDays = [];\n\nfor (var _i2 = 1; _i2 <= 30; _i2 += 1) {\n  NovemberDays.push(_i2);\n}\n\nvar availableTimes = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];\nvar partySize = ['2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people'];\nvar dayAbbreviations = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];\nmodule.exports = {\n  currentDay: currentDay,\n  OctoberMonthValue: OctoberMonthValue,\n  dayAbbreviations: dayAbbreviations,\n  October: October,\n  availableTimes: availableTimes,\n  partySize: partySize\n};\n\n//# sourceURL=webpack:///./client/CalendarData/CalendarData.jsx?");

/***/ })

}]);