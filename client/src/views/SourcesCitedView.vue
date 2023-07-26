<template>
    <div>
        <BodyTemplate title="Home">
            <SourcesCitedBody></SourcesCitedBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import SourcesCitedBody from "@/components/bodies/SourcesCitedBody.vue";

export default {
    components: {
        BodyTemplate,
        SourcesCitedBody,
    },
};
</script>
