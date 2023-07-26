<template>
    <div>
        <BodyTemplate title="About This Site">
            <AboutThisSiteBody></AboutThisSiteBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import AboutThisSiteBody from "@/components/bodies/AboutThisSiteBody.vue";

export default {
    components: {
        BodyTemplate,
        AboutThisSiteBody,
    },
};
</script>
