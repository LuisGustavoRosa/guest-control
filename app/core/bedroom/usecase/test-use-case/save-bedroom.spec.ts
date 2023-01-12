import { test } from '@japa/runner'
import { InMemoryBedroomRepository } from '../../../../infra/repository/bedroom/in-memory-bedroom-repository';
import { GuestEntity } from '../../entity/guestsEntity';
import SaveBedroom from '../saveBedroom';

test.group('Bedroom', () => {
  test('should be able to create a bedroom ', async ({expect}) => {
    const bedroomRepository = new InMemoryBedroomRepository()
    const createBedroom = new SaveBedroom(bedroomRepository)
    const {bedroom}  = await createBedroom.execute({
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
