import BedroomRepository from "../repository/bedroomRepository";

export default class GetBedroom {
  bedroomRepository: BedroomRepository;

  constructor(bedroomRepository: BedroomRepository) {
    this.bedroomRepository = bedroomRepository;
  }

  async execute(id: number) {
    const bedroom = await this.bedroomRepository.getBedroom(id);
    return {bedroom};
  }
}
