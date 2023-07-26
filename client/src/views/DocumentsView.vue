<template>
    <div>
        <BodyTemplate title="Home">
            <DocumentsBody></DocumentsBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import DocumentsBody from "@/components/bodies/DocumentsBody.vue";

export default {
    components: {
        BodyTemplate,
        DocumentsBody,
    },
};
</script>
