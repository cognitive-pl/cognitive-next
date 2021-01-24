import add from 'date-fns/add';

export default function spreadOverTime(startDate, endDate, parts) {
  const tasksAmount = parts.length + 2;
  const diffTime = Math.abs(startDate - endDate);
  const daysAmount = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const multiplier = (daysAmount - 1) / tasksAmount;
  const newParts = [];

  const partDate = startDate;

  if (daysAmount === tasksAmount) {
    parts.forEach((part, i) => {
      const updatedDate = add(partDate, {
        days: i,
      });

      if (i === 1) {
        newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(updatedDate).toString(),
        });
      } else if (i > 1) {
        newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${parts[i - 2]} (repetition 2)`,
          date: new Date(updatedDate).toString(),
        });
      } else {
        newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        });
      }
    });

    const updatedDate = add(partDate, {
      days: parts.length,
    });
    const updatedDate2 = add(partDate, {
      days: parts.length + 1,
    });
    newParts.push({
      content: `${parts[parts.length - 1]} (repetition 1)`,
      date: new Date(updatedDate).toString(),
    }, {
      content: `${parts[parts.length - 2]} (repetition 2)`,
      date: new Date(updatedDate).toString(),
    }, {
      content: `${parts[parts.length - 1]} (repetition 2)`,
      date: new Date(updatedDate2).toString(),
    });
  } else if (daysAmount - 2 >= tasksAmount) {
    parts.forEach((part, i) => {
      const updatedDate = add(partDate, {
        days: i * Math.round(multiplier),
      });

      if (i === 1) {
        newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(updatedDate).toString(),
        });
      } else if (i > 1) {
        newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${parts[i - 2]} (repetition 2)`,
          date: new Date(updatedDate).toString(),
        });
      } else {
        newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        });
      }
    });

    const updatedDate = add(partDate, {
      days: parts.length * Math.round(multiplier),
    });
    const updatedDate2 = add(partDate, {
      days: (parts.length + 1) * Math.round(multiplier),
    });
    newParts.push({
      content: `${parts[parts.length - 1]} (repetition 1)`,
      date: new Date(updatedDate).toString(),
    }, {
      content: `${parts[parts.length - 2]} (repetition 2)`,
      date: new Date(updatedDate).toString(),
    }, {
      content: `${parts[parts.length - 1]} (repetition 2)`,
      date: new Date(updatedDate2).toString(),
    });
  } else if (daysAmount - 1 <= tasksAmount) {
    parts.forEach((part, i) => {
      const updatedDate = add(partDate, {
        days: Math.floor(i * multiplier),
      });

      if (i === 1) {
        newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(updatedDate).toString(),
        });
      } else if (i > 1) {
        newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${parts[i - 1]} (repetition 1)`,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${parts[i - 2]} (repetition 2)`,
          date: new Date(updatedDate).toString(),
        });
      } else {
        newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        });
      }
    });

    const updatedDate = add(partDate, {
      days: Math.floor(parts.length * multiplier),
    });
    const updatedDate2 = add(partDate, {
      days: Math.floor((parts.length + 1) * multiplier),
    });
    newParts.push({
      content: `${parts[parts.length - 1]} (repetition 1)`,
      date: new Date(updatedDate).toString(),
    }, {
      content: `${parts[parts.length - 2]} (repetition 2)`,
      date: new Date(updatedDate).toString(),
    }, {
      content: `${parts[parts.length - 1]} (repetition 2)`,
      date: new Date(updatedDate2).toString(),
    });
  }

  return newParts;
}
