<template>
  <div>
    <nav>
      <NavigationBarDropdown title="Links" :items="links"></NavigationBarDropdown>
    </nav>
  </div>
</template>

<script>
import NavigationBarDropdown from './NavigationBarDropdown.vue';

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
          title: "Testimonies",
          link: "/testimonies"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 140px;
  width: 100vw;
  background-color: $navy;
}
</style>
