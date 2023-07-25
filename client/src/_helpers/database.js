import { v4 as generateNewId } from "uuid";

export default {
  async getData(database) {
    const URL = `http://localhost:3000/${database}/`;

    const response = await fetch(URL, { method: "GET" });

    if (!response.ok) return null;
    else {
      const data = await response.json();
      return data;
    }
  },
  getImageUrl(database, id) {
    return `http://localhost:3000/${database}/${id}/image`;
  },
  async saveData(database, data) {
    const URL = `http://localhost:3000/${database}/`;
    const BODY = JSON.stringify(data);

    await fetch(URL, {
      method: "POST",
      body: BODY,
      headers: { "Content-type": "application/json" },
    });
  },

  async saveNewItem(database, newMember) {
    newMember._id = generateNewId();

    const URL = `http://localhost:3000/${database}/${newMember._id}`;
    const BODY = JSON.stringify(newMember);

    await fetch(URL, {
      method: "POST",
      body: BODY,
      headers: { "Content-Type": "application/json" },
    });
  },
  async deleteItem(database, id) {
    const URL = `http://localhost:3000/${database}/${id}`;

    await fetch(URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  },

  async saveNewImage(database, id) {
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.name = "image";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", async (event) => {
      if (event.target.files.length > 0) {
        let selectedFile = event.target.files[0];

        var formdata = new FormData();
        formdata.append("image", fileInput.files[0]);

        const URL = `http://localhost:3000/${database}/${id}/image`;

        await fetch(URL, {
          method: "POST",
          body: formdata,
          enctype: "multipart/form-data",
          redirect: "follow",
        });
      }
    });

    document.body.appendChild(fileInput);
    fileInput.click();
  },

  async saveImageToGallery(database, id) {
    const imageId = generateNewId();

    // appends imageId to gallery id list and saves
    const testimonyData = this.getData(database).find(id);
    const updatedTestimonyData = testimonyData.gallertIds.append(imageId);
    await this.saveNewItem(database, updatedTestimonyData);

    await this.saveNewImage(database, imageId);
  },

  async deleteImage(database, id) {
    const URL = `http://localhost:3000/${database}/${id}/image`;

    await fetch(URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  },
};
