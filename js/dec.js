function lPad(val, digits){
  digits = digits || 2;
  return ('000' + val).slice(digits * -1);
}

function getTime(){
  var today = new Date();
  // conventional
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var milliseconds = today.getMilliseconds();
  var millisecondsTotal = hours*60*60*1000 + minutes*60*1000 + seconds*1000 + milliseconds;
  var secondsTotal = Math.floor(millisecondsTotal/1000);
  return {
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
    'milliseconds': milliseconds,
    'secondsTotal': secondsTotal,
    'time': lPad(hours) + ":" + lPad(minutes) + ":" + lPad(seconds)
  };
}

function getDecimalTime(){
  var today = new Date();
  // conventional
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var milliseconds = today.getMilliseconds();
  var millisecondsTotal = hours*60*60*1000 + minutes*60*1000 + seconds*1000 + milliseconds;
  // decimal
  var dMillisecondsTotal = Math.floor(millisecondsTotal/0.864);
  var dSecondsTotal = Math.floor(dMillisecondsTotal/1000);
  
  var dHours = Math.floor(dMillisecondsTotal/(100*100*1000));
  var dMinutes = Math.floor(dMillisecondsTotal/(100*1000) % 100);
  var dSeconds = Math.floor(dMillisecondsTotal/1000 % 100);
  var dMilliseconds = Math.floor(dMillisecondsTotal % 1000);
  return {
    'hours': dHours,
    'minutes': dMinutes,
    'seconds': dSeconds,
    'milliseconds': dMilliseconds,
    'secondsTotal': dSecondsTotal,
    'time': dHours + "." + lPad(dMinutes) + "." + lPad(dSeconds),
    'timePrecise': dHours + "." + lPad(dMinutes) + "." + lPad(dSeconds) + "." + lPad(dMilliseconds, 3)
  };
}

function setClock(){
  var t = getTime();
  document.getElementById('clock-regular').innerHTML = t.time;
}

function setDecimalClock(){
  var t = getDecimalTime();
  document.getElementById('clock-decimal').innerHTML = t.time;
}

setClock();
setInterval(setClock, 1000)

setDecimalClock();
setInterval(setDecimalClock, 864)