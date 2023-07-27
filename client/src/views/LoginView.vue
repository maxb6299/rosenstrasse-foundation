<template>
    <div>
        <BodyTemplate title="Login">
            <LoginBody></LoginBody>
        </BodyTemplate>
    </div>
</template>

<script>
import BodyTemplate from "@/components/BodyTemplate.vue";
import LoginBody from "@/components/bodies/LoginBody.vue";

export default {
    components: {
        BodyTemplate,
        LoginBody,
    },
};
</script>
