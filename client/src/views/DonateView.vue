<template>
    <div>
        <BodyTemplate title="Donate">
            <DonateBody></DonateBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import DonateBody from "@/components/bodies/DonateBody.vue";

export default {
    components: {
        BodyTemplate,
        DonateBody,
    },
};
</script>
