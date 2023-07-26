<template>
    <div>
        <BodyTemplate title="Home">
            <ForumBody></ForumBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import ForumBody from "@/components/bodies/ForumBody.vue";

export default {
    components: {
        BodyTemplate,
        ForumBody,
    },
};
</script>
