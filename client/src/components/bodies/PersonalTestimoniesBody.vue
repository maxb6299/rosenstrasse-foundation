<template>
  <div>
    <div class="big-group">
      <div v-for="(category, categoryKey) in categories" :key="categoryKey">
        <div class="title">{{ category }}:</div>
        <div class="small-group">
          <div v-for="(testimony, testimonyKey) in data" :key="testimonyKey">
            <div v-if="getCategory(category, testimony)">
              <router-link :to="{name: 'individual-testimonies', params:{id: testimony._id}}">
                <div>-{{ testimony.name }} by {{ testimony.author }}</div>
              </router-link>
              
              <div v-if="authenticateStore.getAuthentication">
                <button @click="saveNewImage(testimony._id)">Save New Image</button>
                <button @click="deleteItem(testimony._id)">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="authenticateStore.getAuthentication">
      <form class="small-group" @submit.prevent="saveNewItem">
        Name: <input required v-model="newTestimony.name" /> Description:
        <input required v-model="newTestimony.description" /> Author:
        <input required v-model="newTestimony.author" />
        <div class="small-group">
          <div>Category:</div> 
          Rosenstrasse Protest:
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
import { useAuthenticateStore } from "@/store/AuthenticateStore.js";

export default {
  setup() {
    const authenticateStore = useAuthenticateStore();
    return { authenticateStore }
  },

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
      const unsortedData = await databaseHelper.getData(this.databaseName);
      this.data = unsortedData.sort((a, b) => a.name.localeCompare(b.name));
    },
    async saveNewItem() {
      await databaseHelper.saveNewItem(this.databaseName, this.newTestimony);
      await this.getData();
    },
    async saveNewImage(id) {
      await databaseHelper.saveImageToGallery(this.databaseName, id);
    },
    async deleteItem(id) {
      const foundTestimony = this.data.find((item) => item._id == id);
      for (const imageId of foundTestimony.galleryIds) {
        databaseHelper.deleteImage(imageId, this.databaseName);
      }
      
      await databaseHelper.deleteItem(this.databaseName, id);
      await this.getData();
    }
  },

  beforeMount() {
    this.getData();
  },
};
</script>

