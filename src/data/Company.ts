import { company as fakerCompany, address as fakerAddress } from "faker";
import { Mappable } from "../interfaces";

class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = fakerCompany.companyName();
    this.catchPhrase = fakerCompany.catchPhrase();
    this.location = {
      lat: parseFloat(fakerAddress.latitude()),
      lng: parseFloat(fakerAddress.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catch Phrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}

export default Company;
