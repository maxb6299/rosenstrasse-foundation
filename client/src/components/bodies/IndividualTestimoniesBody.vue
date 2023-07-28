<template>
    <div>
        <div class="title">{{ testimony.name }}</div>
        <div>{{ testimony.description }}</div>
        <div class="author">Written By {{ testimony.author }}</div>
        <div class="gallery">
            <img 
            v-for="(imageId, imageKey) in testimony.galleryIds"
            :key="imageKey"
            class="testimonyImage"
            :src="getImageUrl(imageId)"
            onerror="this.src='/assets/placeholder.png'"
            alt="Team Member Image"
            style="height: 300px"
            />
        </div>
    </div>
</template>

<script>
import databaseHelper from "@/_helpers/database.js";

export default {
    data() {
        return {
            testimony: {},
            databaseName: "testimonies",
        }
    },

    methods: {
        getImageUrl(id) {
            return databaseHelper.getImageUrl(this.databaseName, id);
        },
        async getTestimony() {
            const data = await databaseHelper.getData(this.databaseName);
            for (let testimonyKey in data) {
                if (data[testimonyKey]._id == this.$route.params.id) {
                    this.testimony = data[testimonyKey];
                    return;
                } 
            }
        }
    },
    
    beforeMount() {
        this.getTestimony();
    }
}
</script>

<style style="scss">
.author {
    font-weight: 400;
    font-style: italic;
}
</style>
