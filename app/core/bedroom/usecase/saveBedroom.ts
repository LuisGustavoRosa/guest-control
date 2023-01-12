import { Bedroom, BedroomProps } from "../entity/bedroomEntity";
import BedroomRepository from "../repository/bedroomRepository";

export default class SaveBedroom {
  constructor(private bedroomRepository: BedroomRepository) {}

  async execute(input: BedroomProps) {
    const {
      id,
      description,
      vacancies,
      value,
      guests,
      entry_date,
      departure_date,
      how_many_days,
    } = input;

    const bedroomCreate : any  = new Bedroom({
      id,
      description,
      vacancies,
      value,
      guests,
      entry_date,
      departure_date,
      how_many_days,
    });


    const bedroom = await this.bedroomRepository.saveBedroom(bedroomCreate);
    return { bedroom };
  }
}
