function spreadOverTime (startDate, endDate, parts) {
  const tasksAmount = parts.length;
  const daysAmount = endDate.getDate() - startDate.getDate();
  const multiplier = (daysAmount - 2) / (tasksAmount - 1);
  const daysList = [];
  const newParts = [];

  if(daysAmount == tasksAmount) {
    for(let i=0;i<tasksAmount;i++) {
      daysList.push(i);
    }

  } else if (daysAmount-2 >= tasksAmount) {
    for(let i=0;i<tasksAmount-1;i++) {
      daysList.push(Math.floor(i*multiplier));
    }

    daysList.push(daysAmount-3);
    //-1 => we start counting from 0
    //-2 => last day is deadline and one day before deadline is for break

  } else if (daysAmount-1 <= tasksAmount) {
    for(let i=0;i<tasksAmount;i++) {
      daysList.push(Math.floor(i*multiplier));
    }
  }

  // let partDate = startDate;
  const partDate = startDate;
  parts.map((content, index) => {
    partDate.setDate(startDate.getDate() + daysList[index]);

    newParts.push({
      content,
      date: new Date(partDate),
    });
  });

  console.log(newParts);
}

const exampleParts = [
  "past tense",
  "some grammar",
  "use of english",
];
const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 1);
const newDate = new Date('2020-12-8');
spreadOverTime(currentDate, newDate, exampleParts);
