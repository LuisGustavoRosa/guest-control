
import {BedroomProps} from "app/core/bedroom/entity/bedroomEntity";
import { GuestEntity } from "../../../core/bedroom/entity/guestsEntity";
import BedroomRepository from "app/core/bedroom/repository/bedroomRepository";
import Bedroom from "app/Models/Bedroom";
export class InMemoryBedroomRepository implements BedroomRepository
{

  async saveBedroom(input : BedroomProps ): Promise<BedroomProps[]> {
    return await Bedroom.create(input);
  }

  async getBedroom(id: number): Promise<BedroomProps> {
    const raw: any = this.bedroom.find(item => item.id === id);
    return Promise.resolve(raw);
  }

  async listAllBedroom(): Promise<BedroomProps[]> {
    return this.bedroom;
  }

  async deleteBedroom(id: number): Promise<BedroomProps[]> {
    this.bedroom.map((item,indice) => {
      if(item.id === id) {
       this.bedroom.splice(indice, 1)
      }
    })
    return this.bedroom;
  }
}

