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
    const content = mappable.markerContent();
    const marker = new google.maps.Marker({
      map: this.gMap,
      position: {
        lat,
        lng,
      },
    } as GMapMarkerConfig);

    const handleMarkerClick: () => void = () => {
      const infoWindow = new google.maps.InfoWindow({ content });
      infoWindow.open(this.gMap, marker);
    };
    marker.addListener("click", handleMarkerClick);
  }
}

export default Gmap;
