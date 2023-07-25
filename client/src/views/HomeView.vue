<template>
  <div>
    <BodyTemplate title="Home">
      <Home></Home>
    </BodyTemplate>
  </div>
</template>

<script>
import BodyTemplate from '@/components/BodyTemplate.vue';
import Home from '@/components/bodies/Home.vue';

export default {
  components: {
    BodyTemplate,
    Home
  }
}
</script>