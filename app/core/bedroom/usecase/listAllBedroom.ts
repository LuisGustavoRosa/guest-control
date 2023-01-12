import BedroomRepository from "../repository/bedroomRepository";

export default class ListAllBedroom{
  bedroomRepository: BedroomRepository;

  constructor(bedroomRepository: BedroomRepository) {
    this.bedroomRepository = bedroomRepository;
  }

  async execute() {
    const bedroom = await this.bedroomRepository.listAllBedroom();
    return {bedroom};
  }
}
