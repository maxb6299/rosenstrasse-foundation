<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/meet-the-team">Meet The Team</router-link>
      <router-link to="/testimonies">Testimonies</router-link>
    </nav>
  </div>
</template>

<style>
nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
