const currentMonth = (new Date()).getMonth();
const months = [];
for (var i = currentMonth + 1; i < currentMonth + 13; i++) months.push(i % 12);
console.log(months);
