import { IDogs } from "../app";

class DogService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://dog.ceo/api";
  }

  async getBassetsByCount(count: number): Promise<IDogs> {
    const bassetRamdomUrl: string = `${this.baseUrl}/breed/hound/basset/images/random`;
    return await fetch(`${bassetRamdomUrl}/${count}`)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}
export default DogService;
