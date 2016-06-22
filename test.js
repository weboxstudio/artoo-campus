const currentMonth = (new Date()).getMonth();
const months = [];
for (var i = currentMonth; i < currentMonth + 12; i++) months.push(i % 12);
console.log(months.reverse());
