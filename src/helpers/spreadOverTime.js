export default function spreadOverTime(startDate, endDate, parts) {
  const tasksAmount = parts.length;
  const diffTime = Math.abs(startDate - endDate);
  const daysAmount = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const multiplier = (daysAmount - 1) / tasksAmount;
  const daysList = [];
  const newParts = [];

  const testParts = [];
  parts.forEach((part, index) => {
    if (index === 1) {
      testParts.push(part);
      testParts.push(parts[index - 1]);
    } else if (index > 1) {
      testParts.push(part);
      testParts.push(parts[index - 1]);
      testParts.push(parts[index - 2]);
    } else testParts.push(part);
  });
  console.log(testParts);

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
      date: new Date(partDate).toString(),
    });
  });

  return newParts;
}
