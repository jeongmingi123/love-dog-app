class Dogs {
  constructor() {
    this.apiUrls = "https://dog.ceo/api/breed/hound/images";
  }

  getDogUrls() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const dogUrls = [];

    fetch(this.apiUrls, requestOptions)
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
export default Dogs;
