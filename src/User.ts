import { name as fakerName, address as fakerAddress } from "faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = fakerName.firstName();
    this.location = {
      lat: parseFloat(fakerAddress.latitude()),
      lng: parseFloat(fakerAddress.longitude()),
    };
  }
}

export default User;
