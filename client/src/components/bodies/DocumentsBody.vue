<template>
    <div class="big-group">
        <div class="big-group">
            <div class="title">Primary Sources</div>
            <a class="blue-button" v-for="(item, itemKey) in documents" :href="item.link" target="_blank">
                {{ item.title }}
            </a>
        </div>
        <div class="big-group">
            <div class="title">Publications</div>
            <a class="blue-button" v-for="(item, itemKey) in publications" :href="item.link" target="_blank">
                {{ item.title }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publications: [
                {
                    title: 'OSS Report: [April 1, 1943]',
                    link: 'https://4dac91b8-5102-4943-bb53-b8e5c1e67f53.filesusr.com/ugd/4c4715_9e68ff5f2815443eb2c36be74c87ea79.pdf'
                },
                {
                    title: `Historical Evidence and Plausible History: Interpreting the Berlin Gestapo's Attempted "Final Roundup" of Jews (also known as the "Factory Action")`,
                    link: 'https://4dac91b8-5102-4943-bb53-b8e5c1e67f53.filesusr.com/ugd/4c4715_838cb1eec51943de8116d9ea8691c46a.pdf'
                },
                {
                    title: 'Nazi Conspiracy and Aggression Volume III Document No. 069-PS',
                    link: 'https://4dac91b8-5102-4943-bb53-b8e5c1e67f53.filesusr.com/ugd/4c4715_838cb1eec51943de8116d9ea8691c46a.pdf'
                },
                {
                    title: 'After 80 years: Why we commemorate the Rosenstrasse protest - Jerusalem Post Article By Nathan Stoltzfus and Mordecai Paldiel [March 6, 2023]',
                    link: 'https://geschichtedergegenwart.ch/die-frauen-der-rosenstrasse-ns-widerstand-als-problem-der-ns-geschichtsschreibung/'
                },
                {
                    title: 'Resistance to Rosenstrasse History by Antonia Leugers',
                    link: 'https://theologie-geschichte.de/ojs2/index.php/tg/article/view/133/148'
                },
                {
                    title: 'Resistance to Rosenstrasse History II by Antonia Leugers',
                    link: 'https://theologie-geschichte.de/ojs2/index.php/tg/article/view/536/575'
                },
            ],
            documents: [
                {
                    title: 'Names and Messages of Protestors at Rosenstrasse from the Wiener Holocaust Library Collections',
                    link: 'https://4dac91b8-5102-4943-bb53-b8e5c1e67f53.filesusr.com/ugd/4c4715_c0d1752eb03d4b6f96ad153a8ba27a9f.pdf'
                },
                {
                    title: 'German and English Translation of Hitler’s order in 1938 to divide intermarried Jews into privileged and non-privileged',
                    link: 'https://avalon.law.yale.edu/imt/069-ps.asp'
                },
                {
                    title: `Appendices for “Protest in Hitler's "national community": popular unrest and the Nazi response”`,
                    link: 'https://4dac91b8-5102-4943-bb53-b8e5c1e67f53.filesusr.com/ugd/4c4715_3f8b126e1e6a4a69bc068a6f90e369f1.pdf'
                }
            ]
        }
    },

    methods: {
        sortData() {
            this.documents = this.documents.sort((a, b) => a.title.localeCompare(b.title));
            this.publications = this.publications.sort((a, b) => a.title.localeCompare(b.title));
        }
    },

    beforeMount() {
        this.sortData();
    }
}
</script>