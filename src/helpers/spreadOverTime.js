import add from 'date-fns/add';

export default class SpreadOverTime {
  constructor(startDate, endDate, parts) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.parts = parts;

    this.tasksAmount = this.parts.length + 2;
    this.diffTime = Math.abs(this.startDate - this.endDate);
    this.daysAmount = Math.ceil(this.diffTime / (1000 * 60 * 60 * 24));
    this.multiplier = (this.daysAmount - 1) / this.tasksAmount;
    this.newParts = [];

    this.partDate = startDate;
  }

  schedule() {
    if (this.daysAmount == this.tasksAmount) {
      return this.schedulingScript((firstDate, days) => add(firstDate, { days }));
    } else if ((this.daysAmount - 2) >= this.tasksAmount) {
      return this.schedulingScript((firstDate, days) => add(firstDate, {
        days: days * Math.round(this.multiplier),
      }));
    } else if ((this.daysAmount - 1) <= this.tasksAmount) {
      return this.schedulingScript((firstDate, days) => add(firstDate, {
        days: Math.floor(days * this.multiplier),
      }));
    }
  }

  schedulingScript(makeNewDate) {
    this.parts.forEach((part, i) => {
      const updatedDate = makeNewDate(this.partDate, i);

      if (i === 1) {
        this.newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${this.parts[i - 1]} (repetition 1)`,
          date: new Date(updatedDate).toString(),
        });
      } else if (i > 1) {
        this.newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${this.parts[i - 1]} (repetition 1)`,
          date: new Date(updatedDate).toString(),
        }, {
          content: `${this.parts[i - 2]} (repetition 2)`,
          date: new Date(updatedDate).toString(),
        });
      } else {
        this.newParts.push({
          content: part,
          date: new Date(updatedDate).toString(),
        });
      }
    });

    const updatedDate = makeNewDate(this.partDate, this.parts.length);
    const updatedDate2 = makeNewDate(this.partDate, this.parts.length + 1);
    this.newParts.push({
      content: `${this.parts[this.parts.length - 1]} (repetition 1)`,
      date: new Date(updatedDate).toString(),
    }, {
      content: `${this.parts[this.parts.length - 2]} (repetition 2)`,
      date: new Date(updatedDate).toString(),
    }, {
      content: `${this.parts[this.parts.length - 1]} (repetition 2)`,
      date: new Date(updatedDate2).toString(),
    });

    return this.newParts;
  }
}
