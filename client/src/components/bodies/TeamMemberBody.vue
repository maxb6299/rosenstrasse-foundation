<template>
    <div class="big-group">
        <div class="title">{{ teamMember.name }}</div>
        <div><img :src="getImageUrl(teamMember._id)" onerror="this.src='/assets/placeholder.png'" alt="Team Member Image" style="height: 300px" /></div>
        <div>{{ teamMember.description }}</div>
    </div>
</template>

<script>
import databaseHelper from "@/_helpers/database.js";

export default {
    data() {
        return {
            teamMember: {},
            databaseName: "team-members",
        }
    },

    methods: {
        getImageUrl(id) {
            return databaseHelper.getImageUrl(this.databaseName, id);
        },
        async getTeamMember() {
            const data = await databaseHelper.getData(this.databaseName);
            for (let teamMemberKey in data) {
                if (data[teamMemberKey]._id == this.$route.params.id) {
                    this.teamMember = data[teamMemberKey];
                    return;
                }
            }
        }
    },

    beforeMount() {
        this.getTeamMember();
    }
}
</script>

<style style="scss">
.author {
    font-weight: 400;
    font-style: italic;
}
</style>
