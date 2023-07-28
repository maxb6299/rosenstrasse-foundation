<template>
    <div>
        <BodyTemplate title="Testimonies">
            <IndividualTestimoniesBody></IndividualTestimoniesBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import IndividualTestimoniesBody from "@/components/bodies/IndividualTestimoniesBody.vue";

export default {
    components: {
        BodyTemplate,
        IndividualTestimoniesBody,
    },
};
</script>
