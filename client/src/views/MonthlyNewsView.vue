<template>
    <div>
        <BodyTemplate title="Home">
            <MonthlyNewsBody></MonthlyNewsBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import MonthlyNewsBody from "@/components/bodies/MonthlyNewsBody.vue";

export default {
    components: {
        BodyTemplate,
        MonthlyNewsBody,
    },
};
</script>
