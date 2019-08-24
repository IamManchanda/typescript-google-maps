export interface Mappable {
  location: google.maps.LatLngLiteral;
  markerContent(): string;
}

export interface GMapConfig {
  zoom: number;
  center: google.maps.LatLngLiteral;
}

export interface GMapMarkerConfig {
  map: google.maps.Map;
  position: google.maps.LatLngLiteral;
}
