
import { BedroomProps } from "../entity/bedroomEntity";

export default interface BedroomRepository {
  getBedroom(id: number): Promise<BedroomProps>;
  listAllBedroom(): Promise<BedroomProps[]>;
  saveBedroom(input : BedroomProps): Promise<BedroomProps[]>;
  deleteBedroom(id: number): Promise<BedroomProps[]>;
}
