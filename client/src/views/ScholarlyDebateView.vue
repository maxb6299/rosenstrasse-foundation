<template>
    <div>
        <BodyTemplate title="Scholarly Debate">
            <ScholarlyDebateBody></ScholarlyDebateBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import ScholarlyDebateBody from "@/components/bodies/ScholarlyDebateBody.vue";

export default {
    components: {
        BodyTemplate,
        ScholarlyDebateBody,
    },
};
</script>
