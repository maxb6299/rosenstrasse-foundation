import { v4 as generateNewId } from "uuid";

const URL = `https://rosenstrassefoundation-backend-dev.vercel.app`;

export default {
  async getData(database) {
    const URI = `${URL}/${database}/`;

    const response = await fetch(URI, { method: "GET" });

    if (!response.ok) return null;
    else {
      const data = await response.json();
      return data;
    }
  },
  getImageUrl(database, id) {
    return `${URL}/${database}/${id}/image`;
  },
  async saveData(database, data) {
    const URI = `${URL}/${database}/`;
    const BODY = JSON.stringify(data);

    await fetch(URI, {
      method: "POST",
      body: BODY,
      headers: { "Content-type": "application/json" },
    });
  },

  async saveNewItem(database, newMember) {
    newMember._id = generateNewId();

    const URI = `${URL}/${database}/${newMember._id}`;
    const BODY = JSON.stringify(newMember);

    await fetch(URI, {
      method: "POST",
      body: BODY,
      headers: { "Content-Type": "application/json" },
    });
  },
  async deleteItem(database, id) {
    const URI = `${URL}/${database}/${id}`;

    await fetch(URI, {
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
        var formdata = new FormData();
        formdata.append("image", fileInput.files[0]);

        const URI = `${URL}/${database}/${id}/image`;

        await fetch(URI, {
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
    const URI = `${URL}/${database}/${id}/image`;

    await fetch(URI, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  },
};
