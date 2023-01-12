export interface GuestDto
{
    name: string;
    age: number;
}

export class GuestEntity {

  private valideLenghtGuest(name : string){
    return name.length >=4;
  }
  props: GuestDto;
  constructor(props: GuestDto) {
    const guestValidate = this.valideLenghtGuest(props.name)
    if(!guestValidate){
      throw new Error("Nome precisa ter mais de 5 caracteres")
    }
    this.props = {
      ...props,
    };
  }
}

