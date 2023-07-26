<template>
    <div>
        <BodyTemplate title="News/Events">
            <NewsEventsBody></NewsEventsBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import NewsEventsBody from "@/components/bodies/NewsEventsBody.vue";

export default {
    components: {
        BodyTemplate,
        NewsEventsBody,
    },
};
</script>
