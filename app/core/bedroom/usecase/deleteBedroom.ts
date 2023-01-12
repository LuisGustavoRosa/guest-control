import BedroomRepository from "../repository/bedroomRepository";

export default class deleteBedroom {
  bedroomRepository: BedroomRepository;

  constructor(userRepository: BedroomRepository) {
    this.bedroomRepository = userRepository;
  }

  async execute(id: number) {
    const bedroom = await this.bedroomRepository.deleteBedroom(id);
    return {bedroom};
  }
}
