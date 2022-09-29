import { IDogs } from "../app";

class DogService {
  private apiUrls: string;

  constructor() {
    this.apiUrls = "https://dog.ceo/api/breed/hound/basset/images/random/28";
  }

  async getDogs(): Promise<IDogs> {
    return await fetch(this.apiUrls)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }
}
export default DogService;
