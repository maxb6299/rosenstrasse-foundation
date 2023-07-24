import { v4 as uuidv4 } from "uuid";

export default {
  async getData() {
    const URL = "http://localhost:3000/team-members/";

    const response = await fetch(URL, { method: "GET" });

    if (!response.ok) {
      throw new Error(
        `Error getting data from server. Status: ${response.status}`
      );
    } else {
      this.data = await response.json();
    }
  },
  getImageUrl(id) {
    return `http://localhost:3000/team-members/${id}/image?${this.showImages}`;
  },
  async saveData() {
    const URL = "http://localhost:3000/team-members/";
    const BODY = JSON.stringify(this.data);

    await fetch(URL, {
      method: "POST",
      body: BODY,
      headers: { "Content-type": "application/json" },
    });
  },
  async saveNewItem() {
    this.newMember.id = uuidv4();
    this.newMember.imagePath = `./database/team-members/images/${this.newMember.id}.png`;

    this.newMember.rank = this.data.length;

    const URL = "http://localhost:3000/team-members/appendItem";
    const BODY = JSON.stringify(this.newMember);

    await fetch(URL, {
      method: "POST",
      body: BODY,
      headers: { "Content-Type": "application/json" },
    });

    await this.getData();
  },
  async deleteItem(id) {
    const URL = `http://localhost:3000/team-members/${id}`;

    await fetch(URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    await this.getData();
  },
  async saveNewImage(id) {
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.name = "image";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", async (event) => {
      if (event.target.files.length > 0) {
        let selectedFile = event.target.files[0];

        var formdata = new FormData();
        formdata.append("image", fileInput.files[0]);

        const URL = `http://localhost:3000/team-members/${id}/image`;

        var requestOptions = {
          method: "POST",
          body: formdata,
          enctype: "multipart/form-data",
          redirect: "follow",
        };

        await fetch(URL, requestOptions);
        this.refreshImages();
      }
    });

    document.body.appendChild(fileInput);
    fileInput.click();
  },
};
