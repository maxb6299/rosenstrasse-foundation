<template>
    <div>
        <BodyTemplate title="Testimonies">
            <TeamMemberBody></TeamMemberBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import TeamMemberBody from "@/components/bodies/TeamMemberBody.vue";

export default {
    components: {
        BodyTemplate,
        TeamMemberBody,
    },
};
</script>
