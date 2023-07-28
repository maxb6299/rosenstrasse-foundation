<template>
    <div class="menu">
        <GoogleLogin v-show="!authenticateStore.getAuthentication" :callback="signIn" />
        <button v-show="authenticateStore.getAuthentication" @click="signOut">Sign out</button>
    </div>
</template>

<script>
import cookieHelper from '@/_helpers/cookie.js'
import { useAuthenticateStore } from "@/store/AuthenticateStore.js";

export default {
    setup() {
        const authenticateStore = useAuthenticateStore();
        return { authenticateStore }
    },
    
    methods: {
        signOut() {
            cookieHelper.deleteCookie('id_token');
            this.authenticateStore.checkAuthentication();
        },
        async signIn(response) {
            let dataString = JSON.stringify(response.credential);
            document.cookie = `id_token=${dataString}; expires= Sun, 1 January 2030 12:00:00 UTC; path=/`

            this.authenticateStore.checkAuthentication();
        }
    },
}
</script>

<style>
.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>