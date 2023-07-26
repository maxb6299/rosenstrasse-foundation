<template>
  <div>
    <div class="big-group">
      <div v-for="(category, key) in categories" :key="key">
        <div class="title">{{ category }}:</div>
        <div class="small-group">
          <div v-for="(testimony, key) in data" :key="key">
            <div v-if="getCategory(category, testimony)">
              <div>-{{ testimony.name }}</div>
              <div v-if="true">
                <div>{{ testimony.description }}</div>
                <div class="author">Written By {{ testimony.author }}</div>
                <div
                  class="gallery"
                  v-for="(imageId, key) in testimony.galleryIds"
                  :key="key"
                >
                  <img
                    class="testimonyImage"
                    :src="getImageUrl(imageId)"
                    onerror="this.src='/assets/placeholder.png'"
                    alt="Team Member Image"
                  />
                  <button v-if="isAdmin" @click="deleteImage(imageId)">Delete this image</button>
                </div>
                <div v-if="isAdmin">
                  <button @click="saveNewImage(testimony._id)">Save New Image</button>
                  <button @click="deleteItem(testimony._id)">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isAdmin">
      <form @submit.prevent="saveNewItem">
        Name: <input required v-model="newTestimony.name" /> Description:
        <input required v-model="newTestimony.description" /> Author:
        <input required v-model="newTestimony.author" />
        <div>
          Category: Rosenstrasse Protest:
          <input
            v-model="newTestimony.categories.rosenstrasseProtest"
            type="checkbox"
          />
          German Intermarriage:
          <input
            v-model="newTestimony.categories.germanIntermarriage"
            type="checkbox"
          />
          Womens Resistance:
          <input
            v-model="newTestimony.categories.womensResistance"
            type="checkbox"
          />
          German Civil Courage:
          <input
            v-model="newTestimony.categories.germanCivilCourage"
            type="checkbox"
          />
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  </div>
</template>

<script>
import databaseHelper from "@/_helpers/database.js";

export default {
  data() {
    return {
      data: {},
      newTestimony: {
        _id: "",
        name: "",
        description: "",
        author: "",
        categories: {
          rosenstrasseProtest: false,
          germanIntermarriage: false,
          womensResistance: false,
          germanCivilCourage: false,
        },
        galleryIds: [],
      },
      categories: ['Rosenstrasse Protest', 'German Intermarriage', 'Womens Resistance', 'German Civil Courage'],
      isAdmin: true,
      databaseName: "testimonies",
    };
  },
  methods: {
    getCategory(category, testimony) {
      if (category == 'Rosenstrasse Protest') return testimony.categories.rosenstrasseProtest;
      else if (category == 'German Intermarriage') return testimony.categories.germanIntermarriage;
      else if (category == 'Womens Resistance') return testimony.categories.womensResistance;
      else if (category == 'German Civil Courage') return testimony.categories.germanCivilCourage;
    },
    async getData() {
      this.data = await databaseHelper.getData(this.databaseName);
    },
    getImageUrl(id) {
      return databaseHelper.getImageUrl(this.databaseName, id);
    },
    async saveNewItem() {
      await databaseHelper.saveNewItem(this.databaseName, this.newTestimony);
      await this.getData();
    },
    async saveNewImage(id) {
      await databaseHelper.saveImageToGallery(this.databaseName, id);
    },
    async deleteItem(id) {
      await databaseHelper.deleteItem(this.databaseName, id);
      await this.getData();
    },
    async deleteImage(id) {
      await databaseHelper.deleteImage(id);
    },
  },

  beforeMount() {
    this.getData();
  },
};
</script>

<style style="scss">
.author {
  font-weight: 400;
  font-style: italic;
}
</style>
