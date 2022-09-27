class DogService {
  apiUrls: string;
  constructor() {
    this.apiUrls = "https://dog.ceo/api/breed/hound/images";
  }

  getDogUrls() {
    const dogUrls = [];

    fetch(this.apiUrls)
      .then((response) => response.json())
      .then((result) => {
        for (let i = 0; i < 25; i++) {
          dogUrls.push(result.message[i]);
        }
      })
      .catch((error) => console.log("error", error));

    return dogUrls;
  }
}
export default DogService;
