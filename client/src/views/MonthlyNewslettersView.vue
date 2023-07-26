<template>
    <div>
        <BodyTemplate title="Monthly Newsletters">
            <MonthlyNewslettersBody></MonthlyNewslettersBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import MonthlyNewslettersBody from "@/components/bodies/MonthlyNewslettersBody.vue";

export default {
    components: {
        BodyTemplate,
        MonthlyNewslettersBody,
    },
};
</script>
