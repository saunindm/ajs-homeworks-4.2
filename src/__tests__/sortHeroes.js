import sortHeroes from '../sortHeroes';

test.each([
  [
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 30 },
      { name: 'маг', health: 40 },
      { name: 'лучник', health: 50 },
    ],
    [
      { name: 'лучник', health: 50 },
      { name: 'маг', health: 40 },
      { name: 'мечник', health: 30 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 95 },
      { name: 'маг', health: 15 },
      { name: 'лучник', health: 60 },
    ],
    [
      { name: 'мечник', health: 95 },
      { name: 'лучник', health: 60 },
      { name: 'маг', health: 15 },
    ],
  ],
])('testing sortHeroes function with %s heroesLists', (unsortedList, sortedList) => {
  const result = sortHeroes(unsortedList);
  expect(result).toEqual(sortedList);
});
