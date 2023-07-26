<template>
    <div>
        <BodyTemplate title="Home">
            <GalleryBody></GalleryBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import GalleryBody from "@/components/bodies/GalleryBody.vue";

export default {
    components: {
        BodyTemplate,
        GalleryBody,
    },
};
</script>
