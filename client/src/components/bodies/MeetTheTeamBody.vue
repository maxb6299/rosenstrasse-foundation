<template>
  <div>
    <div class="cards">
      <div class="card" v-for="(value, key) in data" :key="key">
        <div v-if="authenticateStore.getAuthentication">
          <img
            class="team-card-image"
            :src="getImageUrl(value._id)"
            onerror="this.src='/assets/placeholder.png'"
            @click="saveNewImage(value._id)"
            alt="Team Member Image"
          />
        </div>
        <div v-if="!authenticateStore.getAuthentication">
          <img
            class="team-card-image"
            :src="getImageUrl(value._id)"
            onerror="this.src='/assets/placeholder.png'"
            alt="Team Member Image"
          />
        </div>

        <div class="team-card-text">
          <div class="team-card-text-name">{{ value.name }}</div>
          <div class="team-card-text-position">{{ value.position }}</div>

          <router-link class="team-card-text-readmore" :to="{ name: 'team-member', params: { id: value._id } }">
            Read more
          </router-link>
        </div>

        <div v-if="authenticateStore.getAuthentication">
          <button @click="deleteItem(value._id)">Delete</button>

          <div v-if="isEditCards">
            <button @click="moveCardLeft(value._id)">&lt;</button>
            <button @click="moveCardRight(value._id)">&gt;</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="authenticateStore.getAuthentication">
      <button @click="isEditCards = !isEditCards">Edit card order</button>
      <button v-if="isEditCards" @click="saveData">Save card order</button>
      <button v-if="isEditCards" @click="getData">Discard card order</button>
    </div>
    <div v-if="authenticateStore.getAuthentication">
      <form @submit.prevent="saveNewItem">
        Name: <input required v-model="newMember.name" /> Position:
        <input required v-model="newMember.position" /> Description:
        <input required v-model="newMember.description" />
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
      newMember: {
        _id: "",
        name: "",
        position: "",
        description: "",
        rank: -1,
      },
      showImages: true,
      isEditCards: false,
      databaseName: "team-members",
    };
  },

  methods: {
    async getData() {
      this.data = await databaseHelper.getData(this.databaseName);
      this.sortArray();
    },
    saveData() {
      databaseHelper.saveData(this.databaseName, this.data);
    },
    getImageUrl(id) {
      return databaseHelper.getImageUrl(this.databaseName, id);
    },
    async saveNewItem() {
      this.newMember.rank = this.data.length;
      await databaseHelper.saveNewItem(this.databaseName, this.newMember);
      await this.getData();
    },
    async saveNewImage(id) {
      await databaseHelper.saveNewImage(this.databaseName, id);
    },
    async deleteItem(id) {
      await databaseHelper.deleteItem(this.databaseName, id);
      await this.getData();
    },
    moveCardLeft(id) {
      const item = this.data.find((item) => item._id === id);
      if (item.rank != 0) {
        this.data[item.rank - 1].rank++;
        item.rank--;
      }

      this.sortArray();
    },
    moveCardRight(id) {
      const item = this.data.find((item) => item._id === id);
      const lowestRank = this.data.length;
      if (item.rank != lowestRank - 1) {
        this.data[item.rank + 1].rank--;
        item.rank++;
      }

      this.sortArray();
    },
    sortArray() {
      this.data = this.data.sort((a, b) => a.rank - b.rank);
    },
  },

  beforeMount() {
    this.getData();
  },
};
</script>

<style lang="scss">
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: stretch;
  flex-wrap: wrap;
  padding: 32px 18px;
  gap: 32px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.team-card-text {
  width: 200px;
}

.team-card-image {
  width: 210px;
  height: 210px;
  flex-shrink: 0;
}

.team-card-text-name {
  color: #000;
  font-family: "Crimson Pro";
  font-size: 20px;
  font-weight: 500;
}

.team-card-text-position {
  color: #6c6c6c;
  font-family: "Crimson Pro";
  font-size: 16px;
  font-weight: 300;
}

.team-card-text-readmore {
  color: #6f859f;
  font-family: "Crimson Pro";
  font-size: 14px;
  font-weight: 500;
}
</style>
