<template>
    <div>
        <div class="big-group">
            <div class="title">Film Reviews</div>
            <a class="blue-button" v-for="(item, itemKey) in filmReviews" :href="item.link" target="_blank">
                {{ item.title }}
            </a>

            <div class="title">Film Reviews</div>
            <a class="blue-button" v-for="(item, itemKey) in historicalMediaReviews" :href="item.link" target="_blank">
                {{ item.title }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filmReviews: [
                {
                    title: `Frank Noack reviews Margarethe Von Trotta’s Rosentrasse`,
                    link: 'https://rosenstrassefounda.wixsite.com/my-site/copy-of-film-reviews'
                },
                {
                    title: `Beate Meyers Film Review on Rosenstrasse`,
                    link: 'https://rosenstrassefounda.wixsite.com/my-site/copy-of-margare-the-von-trotta-s-rose-2'
                },
                {
                    title: `Konrad Weiss's Film Review on Rosenstrasse `,
                    link: 'https://rosenstrassefounda.wixsite.com/my-site/copy-of-margare-the-von-trotta-s-rose-3'
                },
                {
                    title: `Harold Marcuse's Review on Rosenstrasse`,
                    link: 'https://rosenstrassefounda.wixsite.com/my-site/copy-of-konrad-weib-s-rosenstrasse-re'
                },
                {
                    title: `Evelyn Wilcox's Review on Rosenstrasse`,
                    link: 'https://rosenstrassefounda.wixsite.com/my-site/copy-of-harold-marcuse-reviews-rosens'
                }
            ],
            historicalMediaReviews: [
                {
                    title: `Evelyn Wilcock summarizes the relevant literature in relation to the cinematic effects of the Rosentrassee film`,
                    link: 'https://rosenstrassefounda.wixsite.com/my-site/copy-of-margare-the-von-trotta-s-rose'
                },
                {
                    title: `Antonia Leugers’ research review written in German on the “loud protests” of the Rosentrassee Protests in 1943 `,
                    link: 'https://rosenstrassefounda.wixsite.com/my-site/copy-of-evelyn-wilcock'
                },
                {
                    title: `Rene L. Ash Discusses the Rosenstrasse Film, Alongside her Familial Heritage to the Protest`,
                    link: 'https://rosenstrassefounda.wixsite.com/my-site/copy-of-evelyn-wilcock-1'
                },
                {
                    title: `Bruce Campbell evaluates the prior authors, Konrad Weiss and Beate Meyer’s, argument on the cinematic presentation of the film, Rosentrassee.`,
                    link: 'https://rosenstrassefounda.wixsite.com/my-site/copy-of-rene-l-ash'
                }
            ]
        }
    }
}
</script>