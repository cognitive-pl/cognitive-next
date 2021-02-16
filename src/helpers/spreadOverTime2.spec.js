import spreadOverTime from './spreadOverTime2';

describe('Spread Ober Time Script', () => {
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

  it('take props and give right array back', async () => {
    const result = await spreadOverTime(tomorrow, endDate, exampleParts);
    expect(result.length).toBe(exampleParts.length*3);
  });
});