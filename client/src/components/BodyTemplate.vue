<template>
    <div>
        <div>{{title}}</div>
        <div class="body"><slot></slot></div>
    </div>
</template>

<script>
export default {
    props: { title:''}
}
</script>

<style>
body {
    display: flex;
    justify-content: center;
}

.body {
    width: 860px;
    background-color: #D9D9D9;
}
</style>