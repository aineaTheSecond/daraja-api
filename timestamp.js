// generate the timestamp

let date = new Date();
let timestamp =
  date.getFullYear() +
  "" +
  "0" +
  date.getMonth() +
  "" +
  "" +
  date.getDate() +
  "" +
  "0" +
  date.getHours() +
  "" +
  "" +
  date.getMinutes() +
  "" +
  "" +
  date.getSeconds();

alert(timestamp);
