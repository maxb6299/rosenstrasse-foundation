<template>
    <div class="big-group">
        <div class="title">Sources (Rosenstrasse Protest)</div>
        <div v-for="(source, sourceKey) in rosenstrasseProtestSources">
            <p>{{ source }}</p>
        </div>

        <br>
        
        <div class="title">Sources (Intermarriage)</div>
        <div v-for="(source, sourceKey) in rosenstrasseProtestSources">
            <p>{{ source }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rosenstrasseProtestSources: [
                `Berghahn, Volker R., and Simone Lässig. Biography Between Structure and Agency: Central European Lives in International Historiography. New York: Berghahn Books, 2008.`,
                `Gruner, Wolf. Widerstand in der Rosenstrasse. Die Fabrik-Aktion und die Verfolgung der “Mischehen“ 1943. Frankfurt am Main: Fischer Taschenbuch Verlag, 2005.`,
                `Kohen, Ari, and Gerald J. Steinacher. Unlikely Heroes: The Place of Holocaust Rescuers in Research and Teaching. (Lincoln: University of Nebraska Press, 2019) 15-36.`,
                `Leugers, Antonia, ed. Berlin, Rosenstrasse 2-4 : Protest in der NS-Diktatur : neue Forschungen zum Frauenprotest in der Rosenstrasse 1943. Annweiler: Plöger, 2005.`,
                `Potter, Hilary. The Dynamics of German Remembering: The Rosenstraße Protest in Historical Debate and Cultural Representation. University of Bath: Doctoral Thesis, 2014.`,
                `Potter, Hilary. Remembering Rosenstrasse: History, Memory and Identity in Contemporary Germany. Bern, Switzerland: Peter Lang UK, 2018.`,
                `Potter, Hilary. “Rosenstraße: A Complex Site of German-Jewish Memory,” In Memorialization in Germany since 1945, edited by Bill Niven and Chloe Paver, 214-223. London: Palgrave Macmillan, London, 2010.`,
                `Stoltzfus, Nathan. Hitler's Compromises: Coercion and Consensus in Nazi Germany. New Haven: Yale University Press, 2016.`,
                `Stoltzfus, Nathan, Mordecai Paldiel, and Judy Baumel-Schwartz, ed. Women Defying Hitler: Rescue and Resistance under the Nazis. New York: Bloomsbury Academic, 2021.`,
                `Stoltzfus, Nathan. Resistance of the Heart: Intermarriage and the Rosenstrasse Protest in Nazi Germany. New York: W. W. Norton, 1996.`,
                `Stoltzfus, Nathan, and Christopher Osmar. The Power of Populism and People: Resistance and Protest in the Modern World. New York: Bloomsbury Academic, 2021.`,
                `Stoltzfus, Nathan, and Maier-Katkin, Birgit, eds. Protest in Hitler's “National Community”: Popular Unrest and the Nazi Response. New York: Berghahn, 2015.`,
            ],
            intermarriageSources: [
                `Engelman, Uriah Zevi. “Intermarriage among Jews in Germany, U.S.S.R., and Switzerland.” Jewish Social Studies 2. no.2 (1940): 157-178.`,
                `Kaplan, Thomas P. “Jews and Intermarriage in Nazi Austria.” Social History 37 no.2 (2012): 254-255.`,
                `Lowenstein, Steven M. “Jewish Intermarriage in Germany and Austria.” Modern Judaism. 25 no.1 (2005): 23-61.`,
                `Raggam-Blesch, Michaela. “'Privileged' under Nazi-Rule: The Fate of Three Intermarried Families in Vienna.” Journal of Genocide Research 21 no. 3. (2019): 378-397.`,
                `Stoltzfus, Nathan. Hitler's Compromises: Coercion and Consensus in Nazi Germany. New Haven: Yale University Press, 2016.`,
                `Stoltzfus, Nathan. Resistance of the Heart: Intermarriage and the Rosenstrasse Protest in Nazi Germany. New York: W. W. Norton, 1996.`,
            ]
        }
    }
}
</script>