<template>
    <div>
        <BodyTemplate title="Media Resources">
            <MediaResourcesBody></MediaResourcesBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import MediaResourcesBody from "@/components/bodies/MediaResourcesBody.vue";

export default {
    components: {
        BodyTemplate,
        MediaResourcesBody,
    },
};
</script>
