import { v4 as generateNewId } from "uuid";
import cookieHelper from "./cookie.js";

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
    const credential = this.getCredentials();

    await fetch(URI, {
      method: "POST",
      body: BODY,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${credential}`,
      },
    });
  },
  async deleteItem(database, id) {
    const URI = `${URL}/${database}/${id}`;
    const credential = this.getCredentials();

    await fetch(URI, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${credential}`,
      },
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
        const credential = this.getCredentials();

        await fetch(URI, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${credential}`,
          },
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
    const testimonyData = await this.getData(database);
    const foundTestimony = testimonyData.find((item) => item._id == id);

    if (foundTestimony) {
      foundTestimony.galleryIds.push(imageId);
      const updatedTestimonyData = foundTestimony;

      await this.deleteItem(database, id);
      await this.saveNewItem(database, updatedTestimonyData);
      await this.saveNewImage(database, imageId);
    } else {
      console.log("Testimony not found");
    }
  },

  async deleteImage(database, id) {
    const URI = `${URL}/${database}/${id}/image`;
    const credential = this.getCredentials();

    await fetch(URI, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${credential}`,
      },
    });
  },

  getCredentials() {
    return cookieHelper.readCookie("id_token");
  },
};
