export default function spreadOverTime(startDate, endDate, parts) {
  const tasksAmount = parts.length;
  const daysAmount = endDate.getDate() - startDate.getDate();
  const multiplier = (daysAmount - 1) / tasksAmount;
  const daysList = [];
  const newParts = [];

  if (daysAmount == tasksAmount) {
    for (let i = 0; i < tasksAmount; i++) {
      daysList.push(i);
    }
  } else if (daysAmount - 2 >= tasksAmount) {
    for (let i = 0; i < tasksAmount; i++) {
      daysList.push(i * Math.round(multiplier));
    }
  } else if (daysAmount - 1 <= tasksAmount) {
    for (let i = 0; i < tasksAmount; i++) {
      daysList.push(Math.floor(i * multiplier));
    }
  }

  const partDate = startDate;
  const startDay = startDate.getDate();
  parts.map((content, index) => {
    partDate.setDate(startDay + daysList[index]);

    newParts.push({
      content,
      date: new Date(partDate),
    });
  });

  return newParts;
}
