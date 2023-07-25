<template>
  <div>
    <BodyTemplate title="Home">
      <HomeBody></HomeBody>
    </BodyTemplate>
  </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import HomeBody from "@/components/bodies/HomeBody.vue";

export default {
  components: {
    BodyTemplate,
    HomeBody,
  },
};
</script>
