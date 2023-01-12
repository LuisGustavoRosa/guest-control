import { test } from '@japa/runner'
import { Bedroom } from '../bedroomEntity';
import { GuestEntity } from '../guestsEntity';

test.group('Bedroom', () => {
  test('should be able to create a notification ', ({expect}) => {
    const bedroom  = new Bedroom({
      id: 2,
      description: "ola",
      vacancies: 2,
      value: 100,
      guests: new GuestEntity({
        name:"Luis",
        age:15
      }),
      entry_date: new Date('08/12/2022'),
      departure_date:new Date('05/12/2022'),
      how_many_days: 2
    });
    expect(bedroom).toBeTruthy();
  });
});
