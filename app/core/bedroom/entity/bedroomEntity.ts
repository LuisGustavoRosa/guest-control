import {GuestEntity} from "./guestsEntity";

export interface BedroomProps{
  id: number;
  description: string;
  vacancies: number;
  value: number;
  guests:GuestEntity;
  entry_date : Date
  departure_date : Date
  how_many_days : Number
}

export class Bedroom {
  props: BedroomProps;
  constructor(props: BedroomProps) {
    this.props = {
      ...props,

    };
  }
}
