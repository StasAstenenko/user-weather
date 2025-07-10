export interface UserResponse {
  results: User[];
}

export interface User {
  name: UserName;
  gender: string;
  picture: UserImg;
  location: UserLocation;
  email: string;
}

interface UserName {
  first: string;
  last: string;
  title: string;
}

interface UserImg {
  large: string;
  medium: string;
  thumbnail: string;
}

interface UserLocation {
  city: string;
  coordinates: Coordinates;
  country: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}
