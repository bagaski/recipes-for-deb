import React from 'react';

const Time = () => {

  const checkTime = (i) => {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }

  const startTime = () => {
      const today = new Date();
      const h = today.getHours();
      const m = today.getMinutes();
      const s = today.getSeconds();
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('footer').innerHTML = h + ":" + m + ":" + s;
      const t = setTimeout(function () {
        startTime()
      }, 500);
  }
  return (
    <div id="time">
      {startTime}
    </div>
  );
}

export default Time;
