<template>
    <div>
        Testimonies
        <div v-if="isAdmin">
            <form @submit.prevent="saveNewItem">
                Name: <input required v-model="newTestimony.name">
                Description: <input required v-model="newTestimony.description">
                Author: <input required v-model="newTestimony.author">
                <div>Category:
                    RosenstrasseProtest: <input v-model="newTestimony.categories.rosenstrasseProtest" type="checkbox">
                    GermanIntermarriage: <input v-model="newTestimony.categories.germanIntermarriage" type="checkbox">
                    WomensResistance: <input v-model="newTestimony.categories.womensResistance" type="checkbox">
                    GermanCivilCourage: <input v-model="newTestimony.categories.germanCivilCourage" type="checkbox">
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