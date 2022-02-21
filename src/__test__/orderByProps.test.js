import orderByProps from '../js/orderByProps';

test('sort check', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    deffence: 40,
  };
  const order = ['name', 'level'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'deffence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(obj, order)).toEqual(result);
});
