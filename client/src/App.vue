<template>
  <div class="body">
    <Team></Team>
  </div>
</template>

<script>
import Team from './components/bodies/Team.vue'

export default {
  name: 'App',
  components: {
    Team
  }
}
</script>

<style>
  body {
    display: flex;
    justify-content: center;
  }
  .body {
    width: 860px;
    background-color: #D9D9D9;
  }
</style>
