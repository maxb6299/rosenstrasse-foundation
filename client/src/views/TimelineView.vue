<template>
    <div>
        <BodyTemplate title="Timeline">
            <TimelineBody></TimelineBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import TimelineBody from "@/components/bodies/TimelineBody.vue";

export default {
    components: {
        BodyTemplate,
        TimelineBody,
    },
};
</script>
