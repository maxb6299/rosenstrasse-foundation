<template>
    <div class="big-group">
        <div v-for="(newsItem, newsItemKey) in data" :key="newsItemKey">
            <a class="blue-button" :href="newsItem.link" target="_blank">{{ newsItem.title }}</a>
            <div v-if="authenticateStore.getAuthentication">
                <button @click="deleteItem(newsItem._id)">Delete</button>
            </div>
        </div>

        <div v-if="authenticateStore.getAuthentication">
          <form class="small-group" @submit.prevent="saveNewItem">
                Title: <input required v-model="newNews.title" />
                Link: <input required v-model="newNews.link" />
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
            databaseName: "news",

            data: {},

            newNews: {
                title: '',
                link: ''
            },
        }
    },

    methods: {
        async getData() {
            const DATABASE_DATA = await databaseHelper.getData(this.databaseName);
            this.data = Object.values(DATABASE_DATA).reverse();
        },
        async saveNewItem() {
            await databaseHelper.saveNewItem(this.databaseName, this.newNews);
            await this.getData();
        },
        async deleteItem(id) {
            await databaseHelper.deleteItem(this.databaseName, id);
            await this.getData();
        }
    },

    beforeMount() {
        this.getData();
    },
}
</script>