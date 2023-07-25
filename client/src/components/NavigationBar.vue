<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/meet-the-team">Meet The Team</router-link>
      <router-link to="/testimonies">Testimonies</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_shared.scss";

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 140px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $navy;
}

nav a {
  font-weight: bold;
  font-size: 32px;
  color: white;
}

nav a.router-link-exact-active {
  color: $lightBlue;
}
</style>
