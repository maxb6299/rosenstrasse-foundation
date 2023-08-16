<template>
    <div class="big-group">
        <div v-for="(newsItem, newsItemKey) in news" :key="newsItemKey">
            <a class="blue-button" :href="newsItem.link" target="_blank">{{ newsItem.title }}</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: [
                {
                    title: "january",
                    link: "https://www.google.com/"
                },
                {
                    title: "febuary",
                    link: "https://www.google.com/"
                },
                {
                    title: "march",
                    link: "https://www.google.com/"
                },
            ]
        }
    }
}
</script>