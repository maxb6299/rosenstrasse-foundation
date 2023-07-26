<template>
    <div>
        <BodyTemplate title="Contact Us">
            <ContactUsBody></ContactUsBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import ContactUsBody from "@/components/bodies/ContactUsBody.vue";

export default {
    components: {
        BodyTemplate,
        ContactUsBody,
    },
};
</script>
