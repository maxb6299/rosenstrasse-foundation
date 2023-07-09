<template>
    <div>
        <div v-for="(value, key) in data" :key="object" >
            Name: {{ value.name }} <br>
            Position: {{ value.position }} <br>
            Description: {{ value.description }} <br>
            Image: <img :src="getImageUrl(value.id)" alt="Team Member Image"> <br>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: []
            }
        },

        methods: {
            async getData() {
                const URL = 'http://localhost:3000/team-members/';

                const response = await fetch(URL, { method: 'GET' });
                this.data = await response.json();
            },
                getImageUrl(id) {
                return `http://localhost:3000/team-members/${id}/image`; 
            }
            
        },

        beforeMount() {
            this.getData();
        }
    }
</script>