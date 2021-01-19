export default function spreadOverTime(startDate, endDate, parts) {
  const tasksAmount = parts.length + 1;
  const diffTime = Math.abs(startDate - endDate);
  const daysAmount = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const multiplier = (daysAmount - 1) / tasksAmount;
  const newParts = [];

  const partDate = startDate;
  const startDay = startDate.getDate();

  if (daysAmount == tasksAmount) {
    parts.forEach((part, i) => {
      partDate.setDate(startDay + i);

      if (i === 1) {
        newParts.push({
          content: part,
          date: new Date(partDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(partDate).toString(),
        });
      } else if (i > 1) {
        newParts.push({
          content: part,
          date: new Date(partDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(partDate).toString(),
        }, {
          content: `${parts[i - 2]} (repetition 2)`,
          date: new Date(partDate).toString(),
        });
      } else {
        newParts.push({
          content: part,
          date: new Date(partDate).toString(),
        });
      }
    });

    partDate.setDate(startDay + parts.length);
    newParts.push({
      content: `${parts[parts.length - 1]} (repetition 1)`,
      date: new Date(partDate).toString(),
    }, {
      content: `${parts[parts.length - 2]} (repetition 2)`,
      date: new Date(partDate).toString(),
    });
  } else if (daysAmount - 2 >= tasksAmount) {
    parts.forEach((part, i) => {
      partDate.setDate(startDay + (i * Math.round(multiplier)));

      if (i === 1) {
        newParts.push({
          content: part,
          date: new Date(partDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(partDate).toString(),
        });
      } else if (i > 1) {
        newParts.push({
          content: part,
          date: new Date(partDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(partDate).toString(),
        }, {
          content: `${parts[i - 2]} (repetition 2)`,
          date: new Date(partDate).toString(),
        });
      } else {
        newParts.push({
          content: part,
          date: new Date(partDate).toString(),
        });
      }
    });

    partDate.setDate(startDay + (parts.length * Math.round(multiplier)));
    newParts.push({
      content: `${parts[parts.length - 1]} (repetition 1)`,
      date: new Date(partDate).toString(),
    }, {
      content: `${parts[parts.length - 2]} (repetition 2)`,
      date: new Date(partDate).toString(),
    });
  } else if (daysAmount - 1 <= tasksAmount) {
    parts.forEach((part, i) => {
      partDate.setDate(startDay + Math.floor(i * multiplier));

      if (i === 1) {
        newParts.push({
          content: part,
          date: new Date(partDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(partDate).toString(),
        });
      } else if (i > 1) {
        newParts.push({
          content: part,
          date: new Date(partDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(partDate).toString(),
        }, {
          content: `${parts[i - 2]} (repetition 2)`,
          date: new Date(partDate).toString(),
        });
      } else {
        newParts.push({
          content: part,
          date: new Date(partDate).toString(),
        });
      }
    });

    partDate.setDate(startDay + Math.floor(parts.length * multiplier));
    newParts.push({
      content: `${parts[parts.length - 1]} (repetition 1)`,
      date: new Date(partDate).toString(),
    }, {
      content: `${parts[parts.length - 2]} (repetition 2)`,
      date: new Date(partDate).toString(),
    });
  }

  return newParts;
}
