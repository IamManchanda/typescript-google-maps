import { name as fakerName, address as fakerAddress } from "faker";
import { Mappable } from "../interfaces";

class User implements Mappable {
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

  markerContent(): string {
    return `
      <div>
        <h1>User Name: ${this.name}</h1>
      </div>
    `;
  }
}

export default User;
