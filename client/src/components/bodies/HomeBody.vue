<template>
  <div>
    Welcome to the Rosenstrasse Foundation website <br />
    (under construction)
    <div>
      <NavigationBarDropdown title="Currently Working Links" :items="links"></NavigationBarDropdown>
    </div>
  </div>
</template>


<script>
import NavigationBarDropdown from '../NavigationBarDropdown.vue';
export default {
  components: {
    NavigationBarDropdown
  },

   data() {
    return {
      links: [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Meet The Team",
          link: "/meet-the-team"
        },
        {
          title: "Personal Testimonies",
          link: "/personal-testimonies"
        }
      ]
    }
  }
}
</script>