<template>
    <div class="cards">
        <div class="card" v-for="(value, key) in data" :key="key" >
            <div :key="showImages"><img class="team-card-image" :src="getImageUrl(value.id)" alt="Team Member Image"></div>

            <div v-if="true && isAdmin">
                <!-- TODO set if statement to be based on if there is an image sent -->
                <form @submit.prevent="saveNewImage(value.id)">
                <input type="submit" value="Insert image here">
                </form>
            </div>

            <div class="team-card-text">
                <div class="team-card-text-name">{{ value.name }}</div>  
                <div class="team-card-text-position">{{ value.position }}</div>
                
                <a class="team-card-text-readmore">Read more</a>
            </div>
            
            <div v-if="isAdmin">
                <button @click="deleteItem(value.id)">Delete</button>
            </div>

            <!-- <div>{{ value.description }}</div> -->
        </div>
    </div>

    <div v-if="isAdmin">
        <form @submit.prevent="saveNewItem">
            Name: <input required v-model="newMember.name">
            Position: <input required v-model="newMember.position">
            Description: <input required v-model="newMember.description">
            <input type="submit" value="Save">
        </form>
    </div>
    <div>
        
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

    export default {
        data() {
            return {
                data: [],
                newMember: {
                    id: '',
                    name: '',
                    position: '',
                    description: '',
                    imagePath: '',
                    rank: -1
                },
                showImages: true,
                isAdmin: true
            }
        },

        methods: {
            async getData() {
                const URL = 'http://localhost:3000/team-members/';

                const response = await fetch(URL, { method: 'GET' });
                
                if (!response.ok) {
                    throw new Error(`Error getting data from server. Status: ${response.status}`)
                } else {
                    this.data = await response.json();
                }
            },
            getImageUrl(id) {
                return `http://localhost:3000/team-members/${id}/image?${this.showImages}`; 
            },
            refreshImages() {
                this.showImages += 1;
            },
            async saveNewItem() {
                this.newMember.id = uuidv4();
                this.newMember.imagePath = `./database/team-members/images/${this.newMember.id}.png`

                this.newMember.rank = 0; // TODO FIX THIS
                
                const URL = 'http://localhost:3000/team-members/appendItem';
                const BODY = JSON.stringify(this.newMember);

                await fetch (URL, { method: 'POST', 
                              body: BODY, 
                              headers: { 'Content-Type': 'application/json' } 
                });

                await this.getData();
            },
            async deleteItem(id) {
                const URL = `http://localhost:3000/team-members/${id}`;

                await fetch(URL, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                });

                await this.getData();
            },
            async saveNewImage(id) {
                let fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.name = 'image'
                fileInput.accept = 'image/*';

                fileInput.addEventListener('change', async (event) => {
                    if (event.target.files.length > 0) {

                        let selectedFile = event.target.files[0];
                        
                        var formdata = new FormData();
                        formdata.append("image", fileInput.files[0]);
                        
                        const URL = `http://localhost:3000/team-members/${id}/image`;
                        
                        var requestOptions = {
                            method: 'POST',
                            body: formdata,
                            enctype: 'multipart/form-data',
                            redirect: 'follow'
                        };
                        
                        await fetch(URL, requestOptions);
                        this.refreshImages();
                    }
                });
                    
                document.body.appendChild(fileInput);
                fileInput.click();
            }
        },

        beforeMount() {
            this.getData();
        }
    }
</script>

<style>
/* latin */
@font-face {
  font-family: 'Crimson Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/crimsonpro/v23/q5uUsoa5M_tv7IihmnkabC5XiXCAlXGks1WZzm1MP5s-.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
    background-color: #D9D9D9;
}
.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: stretch;
    flex-wrap: wrap; 
    padding: 32px 18px;
    gap: 32px 64px;
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
    font-family: 'Crimson Pro';
    font-size: 20px;
    font-weight: 500;
}
.team-card-text-position {
    color: #6C6C6C;
    font-family: 'Crimson Pro';
    font-size: 16px;
    font-weight: 300;
}
.team-card-text-readmore {
    color: #6F859F;
    font-family: 'Crimson Pro';
    font-size: 14px;
    font-weight: 500;
}
</style>