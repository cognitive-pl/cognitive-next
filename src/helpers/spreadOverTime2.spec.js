import spreadOverTime from './spreadOverTime2';
import isSameDay from 'date-fns/isSameDay';

describe('Spread Over Time Script', () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 10);

  const exampleParts = [
    'part 1',
    'part 2',
    'part 3',
    'part 4',
  ];

  it('is truthy', () => {
    expect(spreadOverTime).toBeTruthy();
  });

  it('give right array back', async () => {
    const results = await spreadOverTime(tomorrow, endDate, exampleParts);
    expect(results.length).toBe(exampleParts.length*3);
  });

  it('return elements in right time interval', async () => {
    const results = await spreadOverTime(tomorrow, endDate, exampleParts);
    const firstDate = new Date(results[0].date);
    const secondDate = new Date(results[results.length-1].date);

    expect(firstDate > tomorrow || isSameDay(firstDate, tomorrow)).toBe(true);
    expect(secondDate < endDate || isSameDay(secondDate, endDate)).toBe(true);
  });
});