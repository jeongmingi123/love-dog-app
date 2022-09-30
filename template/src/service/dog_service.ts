import { IDogs } from "../app";

export type Dog =
  | "afghan"
  | "basset"
  | "blood"
  | "english"
  | "ibizan"
  | "plott"
  | "walker"
  | undefined;

class DogService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://dog.ceo/api";
  }

  async findDogsByDogTypeAndCount(dogType: Dog, count: number): Promise<IDogs> {
    const dogsRandomUrl: string = `${this.baseUrl}/breed/hound/${dogType}/images/random`;

    return await fetch(`${dogsRandomUrl}/${count}`)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}
export default DogService;
