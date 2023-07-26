<template>
    <div>
        <BodyTemplate title="Home">
            <TheRosenstrasseProtestBody></TheRosenstrasseProtestBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import TheRosenstrasseProtestBody from "@/components/bodies/TheRosenstrasseProtestBody.vue";

export default {
    components: {
        BodyTemplate,
        TheRosenstrasseProtestBody,
    },
};
</script>
