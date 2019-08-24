import Gmap from "./Gmap";
import User from "./data/User";
import Company from "./data/Company";

const myGmap: Gmap = new Gmap("map");

const myUser: User = new User();
myGmap.addMarker(myUser);

const myCompany: Company = new Company();
myGmap.addMarker(myCompany);
