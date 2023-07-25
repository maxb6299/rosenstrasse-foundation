<template>
    <div>
        <div>
            <div>
                <div>Rosenstrasse Protest Testimonials</div>
                <div class v-for="(value, key) in data" :key="key">
                    <div v-if="value.categories.rosenstrasseProtest">
                        <div>{{ value.name }}</div>
                        <div>{{ value.description }}</div>
                        <div>Written By {{ value.author }}</div>
                        <div class="gallery" v-for="(value, key) in data.galleryIds" :key="key">
                            <img class="testimonyImage" :src="getImageUrl(value._id)"
                            onerror="this.src='/assets/placeholder.png'" alt="Team Member Image">
                        </div>
                    </div>
                </div>
            </div>
              
            <div>
                <div>German Intermarriage Testimonials</div>
                <div class v-for="(value, key) in data" :key="key">
                    <div v-if="value.categories.germanIntermarriage">
                        <div>{{ value.name }}</div>
                        <div>{{ value.description }}</div>
                        <div>Written By {{ value.author }}</div>
                        <div class="gallery" v-for="(value, key) in data.galleryIds" :key="key">
                            <img class="testimonyImage" :src="getImageUrl(value._id)"
                            onerror="this.src='/assets/placeholder.png'" alt="Team Member Image">
                        </div>
                    </div>
                </div>
            </div>
                
            <div>
                <div>Women's Resistance Testimonials</div>
                <div class v-for="(value, key) in data" :key="key">
                    <div v-if="value.categories.womensResistance">
                        <div>{{ value.name }}</div>
                        <div>{{ value.description }}</div>
                        <div>Written By {{ value.author }}</div>
                        <div class="gallery" v-for="(value, key) in data.galleryIds" :key="key">
                            <img class="testimonyImage" :src="getImageUrl(value._id)"
                            onerror="this.src='/assets/placeholder.png'" alt="Team Member Image">
                        </div>
                    </div>
                </div>
            </div>
    
            <div>
                <div>German Civil Courage Testimonials</div>
                <div class v-for="(value, key) in data" :key="key">
                    <div v-if="value.categories.germanCivilCourage">
                        <div>{{ value.name }}</div>
                        <div>{{ value.description }}</div>
                        <div>Written By {{ value.author }}</div>
                        <div class="gallery" v-for="(value, key) in data.galleryIds" :key="key">
                            <img class="testimonyImage" :src="getImageUrl(value._id)"
                            onerror="this.src='/assets/placeholder.png'" alt="Team Member Image">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isAdmin">
            <form @submit.prevent="saveNewItem">
                Name: <input required v-model="newTestimony.name">
                Description: <input required v-model="newTestimony.description">
                Author: <input required v-model="newTestimony.author">
                <div>Category:
                    Rosenstrasse Protest: <input v-model="newTestimony.categories.rosenstrasseProtest" type="checkbox">
                    German Intermarriage: <input v-model="newTestimony.categories.germanIntermarriage" type="checkbox">
                    Womens Resistance: <input v-model="newTestimony.categories.womensResistance" type="checkbox">
                    German CivilCourage: <input v-model="newTestimony.categories.germanCivilCourage" type="checkbox">
                </div>
                <input type="submit" value="Save">
            </form>
        </div>
    </div>
</template>

<script>
import databaseHelper from "@/_helpers/database.js"

export default {
    data() {
        return {
            data: {},
            newTestimony: {
                _id: '',
                name: '',
                description: '',
                author: '',
                categories: {
                    rosenstrasseProtest: false,
                    germanIntermarriage: false,
                    womensResistance: false,
                    germanCivilCourage: false
                },
                galleryIds: []
            },
            isAdmin: true,
            databaseName: "testimonies"
        }
    },

    methods: {
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
            await databaseHelper.deleteImage
        }
    },

    beforeMount() {
        this.getData()
    }
}
</script>