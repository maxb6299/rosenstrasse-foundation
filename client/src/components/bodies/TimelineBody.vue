<template>
    <div class="timeline-container">
        <div class="big-group">
            <div v-for="(item, key) in timelineData">
                <div class="small-group blue-button">
                    <div class="title" @click="item.isVisible = !item.isVisible">{{ item.date }}</div>
                    <div v-if=item.isVisible>
                        {{ item.text }}
                    </div>
                </div>
            </div>
        </div>
        <div class="vertical-line"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timelineData: [
                {
                    isVisible: false,
                    date: '1933',
                    text: 'In 1933, civil service candidates had to prove the German ancestry of their spouses. The German Railroad refused to hire “Aryans” married to Jews and fired such “Aryans” already working there. GOOD as we were discussing last week, this varied by agency – another indication that Nazism progressed not only or even sometimes mostly by laws and orders, but by indiiduals and agencies eager to “virtue signal” their good Nazi qualities In 1936, the pressure on mixed marriages increased as the civil service  QUESTION:  is this federal or local or regional?  This is important - perhaps it started at one level and was met by non-coerced imitation at othersrefused to promote state and federal employees married to Jews.GOOD Shortly thereafter, it required their resignation. By the winter of 1936–37, the government expelled mixed families from the German Winter Relief. They had to seek assistance from the Jewish Winter Relief Agency: in Hamburg alone, of 535 new applicants, 457 (or 85 percent) came from mixed families in which the wife was “Aryan.” Kaplan, Marion A., ed. Between Dignity and Despair: Jewish Life in Nazi Germany. New York: Oxford University Press, 1998. 88.'
                },
                {
                    isVisible: false,
                    date: 'APRIL 7, 1933',
                    text: `The Law for the Restoration of the Professional Civil Service became the law of the Reich. It included the “Aryan Paragraph,” which excluded Jews, including those in intermarriage, from working for the state government at all levels. A number of German professional and occupational associations began adopting their own guidelines that expelled Jews from membership. This consolidated Hitler's power without orders compelling these organizations to do so, illustrating a mechanism of popular support for tyrants: conformity to the tyrant in advance of orders to conform.`
                },
                {
                    isVisible: false,
                    date: 'JUNE 30, 1933',
                    text: 'Workers in the German civil service must prove that their marriage partners have Aryan ancestry. Workers married to non-Aryans (gentiles) were dismissed from their positions. Though intermarriage was not yet banned, Justice Minister Kerrl commented that the disadvantages of having Jewish relatives would certainly persuade them to abandon intermarriages. This was the initial and ongoing Nazi expectation: self-interest would cause non-Jews in intermarriage to divorce and those who did not initially divorce would be persuaded by the continuously escalating pressures resulting from binding their fate to that of a Jew.'
                },
                {
                    isVisible: false,
                    date: 'JULY 1933',
                    text: `The popular Marriage Loan Program excludes Jewish-gentile intermarried couples. The program awarded loans to German couples whose wives left the workforce to have children, acquitting them of one-fourth of the loan for each child the couple bore. The regime strove to stifle rather than promote the “Mischling” children of intermarriages. [1] Nathan Stoltzfus, Resistance of the Heart (WW Norton, 1996).`
                },
                {
                    isVisible: false,
                    date: 'DECEMBER 1933',
                    text: 'Intermarried couples were no longer recognized as adoptive parents to children, as announced in December of 1933 by the Reich Interior Ministry.'
                },
                {
                    isVisible: false,
                    date: 'AUGUST 1934',
                    text: `The Law for the Restoration of the Professional Civil Service's initial exemption for German Jews who had served in World War I was eliminated following the death German President Paul von Hindenburg in August 1934. Victor Klemperer, one of more than 11,000 German Jews who survived Nazi Germany due to his intermarriage, stays on as professor until January 1935 by swearing an oath of “loyalty to the Führer and Chancellor Adolf Hitler,” illustrating the excruciating compromises Nazism extracted given his loyalty to what he considered to be the real Germany and his love for his work.[2]  Showing that the leeway for dissent among the masses was larger than most exercised, Klemperer repeatedly voted no on Nazi plebiscites, noting on March 26 that Hitler's latest plebiscite “will receive millions upon millions of votes for "peace and freedom." It will not need to fake a single vote.” Still Klemperer has to be careful not to cross the line into criminality or draw attention to blatant defiance: he waited to put out the flat at their house until the “whole street” put out the flag in compliance with orders.   Klemperer's diary illustrates the almost immediate social death of Jews and gentile partners as friends and family abandoned them under Hitler's new rule. [2] For statistics on German Jews see Bruno Blau, The Jewish Population of Germany 1939-1945 Jewish Social Studies , Apr., 1950, Vol. 12, No. 2 (Apr., 1950), pp. 161-172, here 166. Victor Klemperer, I Will Bear Witness Vol. 1, diary entry for November 20 1934.  On voting: March 10, November 14, 1933, August 21, 1934. On putting out the flag: November 9, 1934, February 9, 1935. Klemperer's diary entry for March 17 is one of the many recurring indications of German voluntary support for Hitler's Nazism, although of course they could not yet be aware of the genocide Nazi policies were leading toward.`
                },
                {
                    isVisible: false,
                    date: 'SEPTEMBER 15, 1935',
                    text: `Nuremberg Laws included two parts: the Law for the Protection of German Blood and German Honor, and The Reich Citizenship Law requiring that all citizens have German “blood.” The Law for the Protection of German Blood banned sexual intercourse between Jews and non-Jews, a crime punishable by death that was called Rassenschande (racial treason).  It also determined which citizens would be classified as Jewish (those with three or four Jewish grandparents). Those with two Jewish grandparents (“half Jews”) would be “counted as a Jew” (Geltungsjuden, if they were married to a Jew or belonged to the Jewish community). Only about 10 percent of “half Jews” were Geltungsjuden.[1] [3] Blau, The Jewish Population, 163`
                },
                {
                    isVisible: false,
                    date: 'SEPTEMBER 1935',
                    text: 'According to The Right of Exception for Jews in European Countries, Jewish individuals and Intermarried Gentiles were prohibited from saluting the national flag, hoisting the flag, and showing the Imperial Colors. This is under the Law for the Protection of German Blood and German Honor.'
                },
                {
                    isVisible: false,
                    date: 'JULY 1938',
                    text: `In 1938, German divorce law was changed to take Nazi eugenics into account. Marriage and divorce requests were now granted or denied based on whether they served the Nazi vision for society. An intermarried couple could now get an easy divorce simply because one partner was identified as Jewish. Following this law, the Gestapo began ramping up pressures on intermarried non-Jews to divorce, with incentives and threats worked together hand in hand. From the beginning, Hitler's dictatorship supposed that the enormous and mounting hardships of marriage to a Jew would lead to the dissolution of intermarriages, as non-Jewish partners followed their self interest. But despite escalating terror from from the Gestapo and also neighbors and colleagues, the overwhelming majority intermarried couples in HItler's Reich did not divorce, according to postwar studies in Germany and Austria. The impact of this intermarried defiance was registered further late in HItler's Third Reich. Throughout 1943 and into late 1944  high-ranking ministers from Interior, Justice, Propaganda, and Himmler's Reich Security Main Office  convened repeatedly to discuss a proposed law which sought to increase the German population by loosening divorce laws for barren couples so they could form more fertile unions. This plan, however, was scrapped for two reasons: Secret Police Reports showed that popular opinion would oppose looser divorce standards, and secondly, the disregard of Jewish-German intermarriages for the July 1938 making divorce just as easy indicated, the law makers said, that such laws may would not lead to much divorce in any case. Evan Bukey concluded that among the intermarried couples in Vienna, only some 5 to 7 percent divorced.[4] Steven M. Lowenstein, “Jewish Intermarriage and Conversion in Germany and Austria”, Modern Judaism: A Journal of Jewish Ideas & Experience Volume 25 Issue 1 (February 2005): 23-61, https://doi.org/10.1093/mj/kji003.`
                },
                {
                    isVisible: false,
                    date: 'DECEMBER 1938',
                    text: `On Goering's suggestion, Hitler issued a secret decree that divided the intermarriages into two categories: 1) privileged and 2) “simple” or “non-privileged.' The majority was “privileged” while the remaining one quarter was identified as  “simple” or “non-privileged.” Mixed marriages with children baptized as Christians, as well as mixed marriages in which the wife rather than the husband was Jewish, were identified as “privileged.” The rest were not. This bisection followed the politically strategic division in the 1935 Nuremberg Laws that had exempted the overwhelming majority of German “half Jews,” or “Mischlinge,” from treatment as Jews. The momentous difference between the two intermarriage categories became yet more clear in September 1941 because non-privileged Jews were required to wear the yellow star marking them for inclusion in the Holocaust, while privileged intermarried did not wear the star. These divisions of Mischlinge and even more so of those in intermarriages compromised Nazi race ideology that required every drop of Jewish blood to be removed from the Reich. This was due to the political challenges of separating German gentiles from Jews as if they had not been integrated when Hitler took power or had not mingled over the preceding centuries in Europe.  The division of both Mischlinge and intermarried Jews into two parts was made so that the tough political challenges of separating Jews from gentiles could be approached step by step, testing popular German reactions to the separation of families of mixed ancestry in small ways to begin with. Of course intermarried Jews represented an urgent priority of the first degree for the regime, not only because they were “full” Jews in comparison with “half Jewish” Mischlinge, but also because they were public indicators of ongoing Rassenschande (race treason) as well as public exhibits that some non-Jews put their lives on the line to continue to live with those Nazis considered so inferior they had to be expelled from the land. With their division into two parts, the persecution of the Mischlinge and the “full” Jews in intermarriages was supposed to proceed in stages. Yet the Gestapo's “temporary” exemption of both of these categories continued phase by phase until war's end when these persons, privileged and unprivileged, comprised the vast majority of German Jews who survived the war.`
                },
                {
                    isVisible: false,
                    date: '1939',
                    text: `A German census of 1939 showed that 57.5% of intermarried men in Vienna, were “non-Aryan”, as were 64% in Hamburg and 65% in Berlin. By May of 1939, the Reich found 4,443 intermarried couples in the Austrian city of Danubian, compared with 5,919 in the German city of Berlin. [5] Steven M. Lowenstein, “Jewish Intermarriage and Conversion in Germany and Austria”, Modern Judaism: A Journal of Jewish Ideas & Experience Volume 25 Issue 1 (February 2005): 23-61, https://doi.org/10.1093/mj/kji003.`
                },
                {
                    isVisible: false,
                    date: 'APRIL 30, 1939',
                    text: `Law of 30 April 1939 concerning Jewish Tenants requires “non-privileged” intermarried couples to move from buildings shared with “Aryans” into “Jewish Houses” confined to Jews alone. Non-Jewish in intermarriages that were not privileged were required to divorce or move with their partners. . Despite the outright identification with Nazi victims of moving into a house only for Jews, the overwhelming majority of gentiles in intermarriage did not divorce, thwarting again Nazi hopes in escalated pressures. In May 1940, Eva Klemperer, a non-Jew married to the Jewish German Professor Victor Klemperer chose to move into a Jewish house in Dresden with him. Later when the Holocaust deportation of Jews begins, Eva refuses her husband's suggestion that she abandon him if and when he is hauled away.`
                },
                {
                    isVisible: false,
                    date: 'September 1, 1941',
                    text: `Mandate that Jews must wear the star of David put into effect. Intermarried Jews in privileged intermarriages were exempted for political reasons, in contradiction to their racial identity as “full Jews” under the Nuremberg Laws.  The yellow star marked Jews as 'enemies of the German people' and criminals, as stated by Goebbels, identifying the persons the regime intended to deport and murder. November 1941 Goebbels wrote: “Whoever wears a Jewish Star is marked as an 'enemy of the People.' Whoever still goes around with [a Jew] privately in everyday life belongs to him and must be valued and treated as a Jew. He earns the contempt of the entire People, whom he abandons in base cowardice at the hardest moment, by putting himself at the side of his despiser”[6] Goebbels, "Die Juden Sind Schuld,“ Das Eherne Herz (Munich: Eher Verlag, 1943), 87, 91. On general public condemnation regarding intermarriages, see SD report, February 2. 1942, in Heinz Boberach, Meldungen aus dem Reich (Herrsching: Pawlak. 1984), 9: 3245-3248.`
                },
                {
                    isVisible: false,
                    date: 'October 1941',
                    text: `October saw the beginning of deportations of German Jews who wore the Star of David. The Jewish individuals in both “privileged” and “non-privileged” marriages were “temporarily held back” from deportation (vorläufig zurückgestellt) If, however, the 'Aryan' partner within an intermarried couple agreed to divorce or died, the protections granted to the Jewish spouse were revoked. The regime's policy of deporting intermarried Jews whose partners had died or divorced demonstrated that the reason it waited “temporarily” was due to Aryans who would not consent to let go of their Jewish partners. When State Secretary of the Interior Minstry Wilhelm Stuckart proposed to resolve this issue by declaring all intermarriages dissolved, Acting Justice Minister Schlegelberger pointed out that this would do nothing to solve the problem since the couples would still act as if they were married, continuing to join the fate of a gentile and a Jew in open displays of loyalty the regime preferred to hide. During its efforts to maintain secrecy around the Nazi 'euthanasia' murders of so-called incurables, the regime had learned that the persons most motivated to threaten secrecy and defy the regime due to the murders were family members of victims.`
                },
                {
                    isVisible: false,
                    date: 'November 6, 1941',
                    text: `Popular gentile Actor Joachim Gottschalk along with his Jewish wife and eight-year-old son, committed suicide. Gottschalk had been urged by Goebbels to divorce his Jewish wife, excluding him from film roles and stage performances. Goebbels wrote that he “could no longer find any way to escape the conflict between state and family. I will thus immediately see to it that this case . . .  is not used to construct alarming rumors.” Trying to limit popular awareness of his miscalculation, Goebbels forbade obituaries and banned anyone from attending Gottschalk's funeral. Nevertheless, a number of Gottschalk's professional associates attended the funeral. Such, public acts revealed publicly that the consensus of support the Nazis claimed was false and that dissent was possible.`
                },
                {
                    isVisible: false,
                    date: 'November 22, 1941',
                    text: `Cautiously following the Gottschalk suicides, which Goebbels considered a miscalculation resulting in suicide rather than divorce, Hitler, according to Goebbels stated that “concerning the Jewish Question, the Führer is fully in agreement with my points of view. He wants a forceful policy against the Jews, though one that does not cause us unnecessary difficulties. The evacuation of the Jews is to be conducted city by city. It is therefore still unclear when it will be Berlin's turn; but when it has its turn, then the evacuation should also be carried out as quickly as possible. Concerning the Jewish mixed marriages, especially those in artist's circles, the Führer recommends that I follow a somewhat reserved course of action since he is of the opinion that these marriages in any case will die out bit by bit, and one shouldn't get any gray hair over this.” [7] Nathan Stoltzfus, Hitler's Compromises (New Haven: Yale University Press, 2016), 248.`
                },
                {
                    isVisible: false,
                    date: 'January 20, 1942',
                    text: `Wannsee Conference: Reinhard Heydrich discusses plans to kill 11 million Jews, but spends much time speaking of strategy on how to kill the 30,000 Jews in intermarried relationships. judging by the minutes of the conference recorded by Adolph Eichmann, almost half of the conference was devoted to how to deport Jews in intermarried couples from the German Reich and their Mischlinge children. Rather than a planning conference, this was a meeting to indicate that important Nazis authorizing the Holocaust were on board, with a lack of dissent indicating consent. At his trial in Jerusalem Eichmann stated that Heydrich had been surprised that so few questions had been asked about the proposed murder of eleven million Jews, and asked how he was supposed to have known that he was doing something wrong since no one protested his work but, on the contrary, rewarded him.`
                },
                {
                    isVisible: false,
                    date: 'January 1942',
                    text: `The Reich banned German Jews from buying non-Jewish newspapers. When intermarried Germans disobeyed, providing non-Jewish newspapers to their Jewish partners, the ban was modified. At first, it agreed to relax the law by allowing only those in privileged intermarriages to receive newspapers (since allowing Jews in nonprivileged intermarriages would mean “too much of a violation of the rule”). When it became clear that the regime had no better means of keeping newspapers from reaching Jews in nonprivileged intermarriages than from Jews in privileged intermarriages, the law was finally abandoned: “A check on whether someone ordering newspapers or magazines is part of a Jewish mixed marriage, and above that whether the person might be a part of a privileged or nonprivileged mixed marriage, is practically impossible to carry out, since a partner of a mixed marriage is not outwardly apparent as such.”`
                },
                {
                    isVisible: false,
                    date: 'March 6, 1942',
                    text: `Propaganda ministry and the Justice Ministry refuse a law that would annul all intermarriages. Several months later voiced his own reason for objection: “silly laws like that would merely bind his hands rather than leaving the playing field open so that he could strike quickly whenever the opportunity for deporting intermarried Jews arose, without causing public scenes of dissension threatening secrecy around the Holocaust and drawing attention to the fact that intermarriages continued to exist. The regime decided to wait for the non- Jewish half of the intermarriage to request divorce to avoid the divorce from appearing forced.[8] Nathan Stoltzfus, Hitler's Compromises (New Haven: Yale University Press, 2016), 250.  `
                },
                {
                    isVisible: false,
                    date: 'March 7, 1942',
                    text: `Goebbels writes: there will be no peace and quiet in Europe if the Jews are not entirely pushed out of the European territory. That raises a gazillion questions of extraordinary delicacy. What happens to the half-Jews, what happens to those related to Jews, their in-laws, those married to Jews? We will thus be having a few things to do and in the context of solving this problem a whole lot of personal tragedies will play out.`
                },
                {
                    isVisible: false,
                    date: 'March 12, 1942',
                    text: `Joseph Goebbels contemplates the effect of Jewish intermarriage on the English population: “It is astonishing how strongly indeed the English Volk, above all those in the highest circles, have been corrupted by Jewry (verjudet) and hardly show English character any longer. That can in fact be traced back mainly to the fact that the top ten thousand are so strongly infected by Jewish marriages that they can barely still think like English.” [9]  Joseph Goebbels and Louis Lochner, The Goebbels Diaries: 1942-43 (Garden City: Doubleday, 1948).`
                },
                {
                    isVisible: false,
                    date: 'September 30, 1942',
                    text: `Goebbels writes: "The Führer once again gives voice to his firm determination, to remove the Jews from Berlin at any rate. The claims of our economic advisors and manufacturers that they could not do without the so-called fine work of the Jews, also does not impress him."  (Compare with Speer's record of the same week: "In the meeting of 20 to 22 September, Hitler ordered Saukel to deport all Jews who are still working in armament factories in eastern locations. By this, [Hitler] meant mostly the Berlin Jews." [10] Albert Speer, Der Sklavenstaat [Stuttgart, 1981], 346.)`
                },
                {
                    isVisible: false,
                    date: 'October 27, 1942',
                    text: `A third major “Final Solution” conference, staged by the RSHA, devised and enacted a plan to compel divorce. The meeting also produced an agreement that intermarriages would be legally annulled, and that all intermarried Jews, as well as intermarried half-Jews who wore the star, should be deported regardless of privilege status, according to Otto Hünsche, Eichmann's deputy and a participant at the conference.`
                },
                {
                    isVisible: false,
                    date: 'December 6, 1942',
                    text: `Goebbels' diary entry reflected on and rejected the Reich Security Main Office's proposal for annulling mixed marriages. Instead, he had now secured Hitler's permission to make his Gau (greater Berlin) free of Jews that he had mentioned on 22 November 1941. He recorded that Hitler had commissioned him to “push out the unprivileged full Jews from Germany.” He stated “A new proposal for the liquidation of Jewish marriages was presented to me….  It would bring about so much unrest and confusion in public opinion that at least at the moment the affair is not worth it.  In addition, the Führer commissioned me to first ensure that the unprivileged full Jews are removed from Germany.  Once they are all gone, we can approach the remnants of the Jewish problem that still remain.”  Goebbels' use of the word “privileged” at this point indicates that he wanted to deport all Jews wearing the star—including those full Jews in intermarriage who lived in “nonprivileged intermarriages.”`
                },
                {
                    isVisible: false,
                    date: 'February 2, 1943',
                    text: `Goebbels writes: Sepp Dietrich “even offers to possibly place a company of the [SS] Leibstandarte [Hitler] at my disposal once, so that I can reach my goal with brute force, which is not exactly the appropriate means by which to prevail, under the current circumstances.” [particularly the German defeat at Stalingrad]`
                },
                {
                    isVisible: false,
                    date: 'February 18, 1943',
                    text: `By February, Goebbels intended for Berlin's intermarried Jews to be completely detained. From the diary of Joseph Goebbels: “The Jews in Berlin will now once and for all be pushed out. With the final deadline of February 28 they are supposed to be first brought to collection centers and deported, up to 2,000, batch by batch, day by day. I have set for myself a goal to make Berlin  Entirely free of Jews by the middle or end of March at the latest.”[11] Joseph Goebbels and Louis Lochner, The Goebbels Diaries: 1942-43 (Garden City: Doubleday, 1948).`
                },
                {
                    isVisible: false,
                    date: 'February 27 1943',
                    text: `Himmler's RSHA permitted and called for arrests, by the name of 'the Elimination of Jews from Reich Territories Actions', which led to the arrest of intermarried Jews and the Rosenstrasse Protest in Berlin, Germany.`
                },
                {
                    isVisible: false,
                    date: 'February 27 1943',
                    text: `Beginning of the Elimination of Jews from Reich Territory arrests which the Berlin Gestapo code-named the Final Roundup of Berlin Jews. Per Goebbels conversation with Sepp Dietrich earlier that month, members of the Leibstandarte Hitler (the most elite SS group) in fact were among those arresting some 10,000 Berlin Jews in heart-rending scenes of brutality. This was the latest escalation of regime force and the show of force designed to intimidate gentile partners from coming out in support of Jewish family members. But they did come out to show that they still cared enough to put their lives on the line, and by the evening a group of wives meeting in front of their imprisoned family members on Rosenstrsse agreed that they would meet early the next day to make a scene in protest, according to Charlotte Israel.`
                },
                {
                    isVisible: false,
                    date: 'February 28, 1943',
                    text: `Annie Radlauer testifying for the German judiciary in 1966 reported that early on Feb. 28 as she neared the Rosenstrasse she begin to hear a faint cry that grew louder and louder as she approached: “Give us our husbands back.”`
                },
                {
                    isVisible: false,
                    date: 'February - March 6, 1943',
                    text: `The Rosenstrasse protest followed the arrest Himmler's men called the Elimination of Jews from Reich Territory, according to which as of November 5, 1942 this would include even the Mischlinge in prisons and camps, and which the Berlin Gestapo code-named the Final Roundup of Berlin Jews. Only after the war (a google program indicates this was in 1955) did persons begin to call this by the euphemism Fabrikaktion (Factory Action). Over 2,000 Jews were detained at Rosenstrasse 2-4. Under the impression that their Jewish partners would be deported to death camps, the non-Jewish partners, overwhelmingly women, collected outside on the street in front of Rosenstrasse 2-4 beginning on February 27 and as a sense of solidarity developed they began to call out in a chorus: "give us our husbands back.” Repeated threats that they would be shot if they did not clear the streets, scattered the protesters for the moment, before they regrouped and continued their demand. The protests lasted for one week. The Gestapo released most of the detained Jews on March 6 following the protest.[12] March 2 and 3, Telegrams from Auschwitz revealing that the Reich Security Office in Berlin had promised that thousands of intermarried Jews would be arriving in Auschwitz. Joachim Neander has shown that the push from Berlin to expel intermarried Jews was matched in Auschwitz where war industry factories demanded more workers to meet the quota Himmler had said he could deliver. A telegram written during the fourth day of the Rosenstrasse Protests from the SS Main Economic and Administrative Office (WVHA) shows unmistakably that the entrepreneurs were expecting a number of skilled Jewish workers from Berlin that could not be met without the inclusion of intermarried Jews, already rounded up and waiting to be transported. In fact, dozens of Berlin's intermarried Jews were sent as workers to Auschwitz in early March.[13] [12] United States Holocaust Memorial Museum. United States Holocaust Memorial Museum. Accessed April 9, 2020. https://encyclopedia.ushmm.org/content/en/article/the-rosenstrasse-demonstration-1943. [13] See Neander's article in Protest in Hitler's 'National Community' and appendix 8 of that book, which shows the complete correspondence and is posted on this website.`
                },
                {
                    isVisible: false,
                    date: 'March 6, 1943',
                    text: `25 intermarried Jewish men (who had no children) were selected to be sent from Rosenstraße 2-4 to Auschwitz. These men were charged with treason and sent as Protective Custody prisoners to work camps of Auschwitz, 12 days into their labor at Auschwitz, were told that they were to prepare to return to Berlin. After returning, they were charged with other crimes and sent to different labor camps.[14] Other intermarried Jewish men at Auschwitz were released, sworn to secrecy about what they had experienced at Auschwitz, and then sent as slave laborers to a Nazi camp where their wives were allowed to visit them.Goebbels contemplates the protest of Jewish evacuations and details a plan to react: "The SD considers this exact moment to be right for proceeding with the evacuation of the Jews. Unfortunately, some disagreeable scenes have played out in front of a Jewish Old People's Home. The people gathered together in large throngs and even sided with the Jews to some extent. I will commission the security police not to continue the Jewish evacuations during such a critical time. Rather we want to put that off for a few weeks; then we can carry it out all the more thoroughly. One has to intervene all over the place, to ward off damages.”[15] This is one of the most direct indications of the regime's preference for improvising measures to exploit circumstances for achieving their ends as they arose, rather than issuing orders that would be carried out machine-like without regard to circumstances and human foibles. the history of intermarriages during the Third Reich illuminates important features of Hitler's power, demonstrating that the “cumulative radicalization” that historians have used to understand how the basic Nazi resolve to remove Jews from the Reich escalated to the genocide of Jews across Europe, functioned at a limited level within the Reich because of the Hitler Myth. Historians who deny that the Rosenstrasse Protest rescued Jews leave key questions unanswered such as why the regime could have preferred to send home intermarried Jews, the most reprehensible Jews for Nazis, rather than deporting them, or why almost all German Jews who survived were protected by a non-Jewish partner who had refused to divorce. [14] Nathan Stoltzfus, Hitler's Compromises (New Haven: Yale University Press, 2016), 257 [15] Joseph Goebbels and Louis Lochner, The Goebbels Diaries: 1942-43 (Garden City: Doubleday, 1948).`
                },
                {
                    isVisible: false,
                    date: 'March 9, 1943',
                    text: `Goebbels is the first to meet personally with Hitler about his release of Jews from his Gau, and gets Hitler's approval for his release of the intermarried News considering the ” psychological" (political) Effect indicated by the protest. From Goebbels Diary: "I discuss the news about Berlin with Gutterer [Goebbels' Deputy for the Greater Berlin Gau/region]. There is nothing essentially new to report. . . The Führer has the greatest understanding for the psychological questions of the war and expressed himself very sharply about the tactical imprudence of prominent persons as well as their wives. . . In the Jewish question he approves of my actions and specifically gives me the mandate to render Berlin free of Jews . . . I describe my actions to the Führer as generous toward the people, hard toward the wrong doers. The Führer also considers this completely correct." [Gutterer confirmed in interviews in August 1986 at his home in Aachen that Goebbels did make the decision to release rather than deport the intermarried Jews imprisoned at Rosenstrasse, because this was the easiest way to get rid of the street protests, and that Goebbels reviewed this decision with Hitler on March 9]`
                },
                {
                    isVisible: false,
                    date: 'March 11, 1943',
                    text: `From the diary of Joseph Goebbels: "The evacuation of the Jews from Berlin did in fact lead to some disagreements. Unfortunately, the Jews and Jewesses from privileged marriages were arrested too at first, which led to great fear and confusion. Because of the short-sightedness of industrialists, who warned the Jews in time, the supposed arrest of Jews on one day was a flop. In total, 4,000 Jews evaded us. They are now going around unregistered and without housing in Berlin and comprise, of course, a great danger for the public. I order the police, army and party to put everything into settling up with these Jews as fast as possible. The arrest of Jews and Jewesses from privileged marriages had a particularly strong, sensational effect on artist circles. Because precisely among actors these privileged marriages exist in a certain number. But in the moment, I can't pay overly much attention to that. If a German man can still even now manage to live in a legal marriage with a Jewess, then that speaks against him absolutely, and during war there is no longer time to be all too sentimental in judging this question." [16] Joseph Goebbels and Louis Lochner, The Goebbels Diaries: 1942-43 (Garden City: Doubleday, 1948).`
                },
                {
                    isVisible: false,
                    date: 'April 18, 1943',
                    text: `From Goebbels Diary: "The Jewish question in Berlin is still not yet completely solved. A whole collection of so-called 'Geltungsjuden' ['half-Jewish' 'Mischlinge' who are considered Jews and wear the Star of David], Jews from privileged intermarriages ["full Jews" according to the Nuremberg Laws but exempted from wearing the Star of David], and also Jews from intermarriages ["full Jews" required to wear the Star of David, who comprised the vast majority interned on Rosenstrasse]  are still to be found in Berlin. A lot of extraordinarily difficult problems arise from this. In any case, I authorize that all Jews who still find themselves in Berlin, will undergo a further inspection. I do not want Jews with the Jewish star running around the  Reich capital.  Either one must take the Jewish star away and privilege them, or on the other hand once and for all evacuate them from the Reich capital. I am convinced that with the freeing of Berlin of the Jews, I have completed one of my greatest political achievements."`
                },
                {
                    isVisible: false,
                    date: 'May 19, 1943',
                    text: `Goebbels declared Berlin to be cleansed of Jews (Judenfrei).[17] “We are faced once again with the problem of whether to reopen the schools in Berlin. So far I have turned this down. If we open the schools again, the stream of evacuees returning [to their homes] will continue uninterrupted. One dare not bend to the will of the people in this point [evacuations] since the people of course have no overview of the coming probable developments in the air war."  The shuffling back and forth of German masses between evacuation sites and their bombed home cities puts an undue strain on the transportation (train) system,[17] Stoltzfus, Nathan. Hitler's Compromises: Coercion and Consensus in Nazi Germany. New Haven: Yale University Press, 2016, 255.`
                },
                {
                    isVisible: false,
                    date: 'November 2, 1943',
                    text: `From Goebbels Diary: "we must therefore try to dam up this reverse current with suitable measures. If this is not to be achieved through friendly cajoling, then one must use force. It is not true that force does not lead to results. Of course it leads to results if is explained to the public with the necessary specificity, and then is actually deployed. Up until now, one has not sensed any of this, and the people know just exactly where the soft spot of the leadership is, and will always exploit this. Should we firm up this spot where we have been soft up until now, then the will of the people will bend to the will of the state. Currently we're on the best path to bending the will of the state to the will of the people. I consider that to be extraordinarily cataclysmic, not only from the objective perspective but also from the standpoint of leadership in general.  The state may never, against its better insight, give in to the pressure of the street. If it does this the second time, it will be still less strong than it was the first time, and gradually lose its entire authority." `
                },
                {
                    isVisible: false,
                    date: 'January 1944',
                    text: `Hitler ordered that the discussions of the removal of intermarried Jews needed to stop.  He did this in order to distance the Nazi party from the publicity surrounding the Rosenstrasse protest. [18] Stoltzfus, Nathan. Hitler's Compromises: Coercion and Consensus in Nazi Germany. New Haven: Yale University Press, 2016.`
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/_shared.scss";

.timeline-container {
    position: relative;
}
.vertical-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: #333;
  transform: translateX(-50%);
  z-index: 1;
}
.big-group {
    position: relative;
    z-index: 2;
}
</style>