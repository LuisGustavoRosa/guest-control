
import {BedroomProps} from "app/core/bedroom/entity/bedroomEntity";
import { GuestEntity } from "../../../core/bedroom/entity/guestsEntity";
import BedroomRepository from "app/core/bedroom/repository/bedroomRepository";
export class InMemoryBedroomRepository implements BedroomRepository
{

  bedroom : BedroomProps[]= [
		{
			id: 1234,
      description : 'Quarto 2',
      vacancies : 2,
      value : 1200,
      guests : new GuestEntity({
        name: "Luis",
        age: 15,
      }),
      entry_date : new Date('12/05/2022'),
      departure_date :  new Date('12/05/2022'),
      how_many_days : 2
		},
    {
			id: 12345,
      description : 'Quarto 1',
      vacancies : 2,
      value : 1200,
      guests : new GuestEntity({
        name: "Luis",
        age: 15,
      }),
      entry_date : new Date('12/05/2022'),
      departure_date :  new Date('12/05/2022'),
      how_many_days : 2
		}
	];

  async saveBedroom(input: BedroomProps): Promise<BedroomProps[]> {
    this.bedroom.push(input);
    return this.bedroom
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

