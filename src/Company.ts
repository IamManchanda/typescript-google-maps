import { company as fakerCompany, address as fakerAddress } from "faker";

class Company {
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
}

export default Company;
