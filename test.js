function timeSpanToString(startDate, endDate) {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const diff = end - start;
  const HH = Math.trunc(diff / 3600000);
  const mm = Math.trunc((diff - HH * 3600000) / 60000);
  const ss = Math.trunc((diff - HH * 3600000 - mm * 60000) / 1000);
  const sss = diff % 1000;
  return `${HH}:${mm}:${ss}.${sss}`;
}
console.log(timeSpanToString(new Date(2000, 1, 1, 10, 0, 0), new Date(2000, 1, 1, 15, 20, 10, 453)));
