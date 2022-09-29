import { IDogs } from "../app";

class DogService {
  private bassetRamdomUrl: string;
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://dog.ceo/api";
    this.bassetRamdomUrl = `${this.baseUrl}/breed/hound/basset/images/random`;
  }

  async getDogsByCount(count: number): Promise<IDogs> {
    return await fetch(`${this.bassetRamdomUrl}/${count}`)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}
export default DogService;
