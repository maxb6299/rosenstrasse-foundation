import { defineStore } from "pinia";
import cookieHelper from "@/_helpers/cookie.js";

export const useAuthenticateStore = defineStore("authenticateStore", {
  state: () => {
    return {
      isAuthenticated: false,
    };
  },
  actions: {
    async checkAuthentication() {
      const credential = cookieHelper.readCookie("id_token");

      const URL = `https://rosenstrassefoundation-backend-dev.vercel.app`;
      const URI = `${URL}/authenticate`;

      const response = await fetch(URI, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${credential}`,
        },
      });

      this.isAuthenticated = response.ok;
    },
  },
  getters: {
    getAuthentication: (state) => {
      return state.isAuthenticated;
    },
  },
});
