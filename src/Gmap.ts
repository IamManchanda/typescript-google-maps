import { Mappable, GMapConfig, GMapMarkerConfig } from "./interfaces";

class Gmap {
  private gMap: google.maps.Map;

  constructor(public containerId: string) {
    this.gMap = new google.maps.Map(
      document.getElementById(containerId) as HTMLElement,
      {
        zoom: 2,
        center: {
          lat: 0,
          lng: 0,
        },
      } as GMapConfig,
    );
  }

  addMarker(mappable: Mappable) {
    const { lat, lng } = mappable.location;
    new google.maps.Marker({
      map: this.gMap,
      position: {
        lat,
        lng,
      },
    } as GMapMarkerConfig);
  }
}

export default Gmap;
