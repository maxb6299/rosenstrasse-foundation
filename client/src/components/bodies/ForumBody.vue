<template>
    <div>
        <div class="big-group">
            <div class="title">Film Reviews</div>
            <div v-for="(item, itemKey) in filmReviews">
                <div @click="item.isVisible = !item.isVisible" class="blue-button">
                    {{ item.title }}
                </div>
                <pre v-if="item.isVisible">{{ item.text }}</pre>
            </div>
            
            <div class="title">Historical Media Reviews</div>
            <div v-for="(item, itemKey) in historicalMediaReviews">
                <div @click="item.isVisible = !item.isVisible" class="blue-button">
                    {{ item.title }}
                </div>
                <pre v-if="item.isVisible">{{ item.text }}</pre>
            </div>
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
                    isVisible: false,
                    text: `Date: July 26, 2004 
Language: English
Film review 

Frank Noack reviews audience’s enthusiasm for Margarethe Von Trotta’s 
Rosentrasse, alongside other pop-culture movies 

I
Near the end of 2003, several German newspaper and magazine editors
asked their film reviewers to name what they considered to be the best
and the worst achievements of the year. With the polls of the
Berlin-based magazines _TIP_ and _Zitty_ (appearing every two weeks) and
_Der Tagesspiegel_ (the only daily newspaper in Germany to conduct such
a poll) combined, the winners in the "worst" category were _Matrix
Reloaded_ and _Matrix Revolutions_, followed by _Kill Bill Vol. 1_, _Das
Wunder von Bern_, _Irreversible_, and--if only with three
votes--_Rosenstrasse_.

_Kill Bill Vol. 1_ and _Irreversible_ were also among the year's
favorite films; a few critics even championed _Das Wunder von Bern_, but
nobody showed real enthusiasm for _Rosenstrasse_. Even its defenders
were defensive, asking readers to ignore the film's flaws because of its
honorable content. Director Margarethe von Trotta wasn't slaughtered
but, even worse, she was treated patronizingly as someone who means well
and isn't much of an artist. When the nominations for the German Film
Awards were announced in mid-April 2004, _Rosenstrasse_ was completely
overlooked--just a few days after winning Italy's David di Donatello
Award as Best Foreign Picture.

Audiences were kinder. According to the magazine _Filmecho/Filmwoche_
(No. 7 / February 14, 2004), more than 600,000 people have paid to see
_Rosenstrasse_ after its nationwide release on September 18, 2003. Half
a year later, it was still shown in a few cinemas across Germany, and
its recent DVD premiere was well-promoted. Von Trotta has scored an
average, solid success. Among German films released during 2003, only
_Good Bye, Lenin!_, _Das Wunder von Bern_, _Luther_, _Das fliegende
Klassenzimmer_, _Werner--gekotzt wird später_, _Die wilden Kerle_, _Till
Eulenspiegel_ and _Anatomie 2_ had attracted more cinemagoers. If one
adds all international films released in Germany during 2003,
_Rosenstrasse_ was at number 57--not too bad a place, considering that
Ang Lee's _The Hulk_ occupied number 58.

Promotion for _Rosenstrasse_ had visibly been inspired by Max
Färberböck's similarly-themed 1999 hit _Aimee and Jaguar_ in which
'Aryan' housewife Juliane Köhler falls in love with Jewish resistance
fighter Maria Schrader. Blond Köhler and dark-haired Schrader had
dominated the ads for _Aimee and Jaguar_ just as blond Katja Riemann and
Schrader were to dominate those for _Rosenstrasse_.

Before the film's nationwide release, leading lady Katja Riemann had won
a Best Actress award at Venice, the first given to an actress in a
German film since 1942, when Kristina Söderbaum won for _Die goldene
Stadt_. During the 1950s, two of West Germany's biggest stars won, but
Lilli Palmer did so for the US film _The Four Poster_ and Maria Schell
for the French drama _Gervaise_. Apart from some flattering press
reports, Katja Riemann's award did nothing for her.

Riemann also got a Best Actress nomination at the European Film Awards.
Born in 1963, she hadn't achieved stardom until she reached the age of
thirty, when she became a national box office draw via several
"Beziehungskomödien" ("relationship comedies"). For about five years she
was Germany's Meg Ryan, but overexposure hurt her career, as did some
unpleasant public appearances. She insulted journalists (not all of them
with justification) and on several occasions imitated the worst
eccentricities of Madonna and Jennifer Lopez.

In Egon Günther's well-meant but painfully uninspired TV movie
_Elsa--Geschichte einer leidenschaftlichen Frau_ (1999)--von Trotta is a
genius compared with Günther--Riemann was supposed to play a Jewish
mother who leaves Nazi Germany in the mid-1930s, sending her children
into exile first and following them later. Riemann, mother of a daughter
born in 1993, protested that she would never travel without her children
and insisted on a script change that had nothing to do with historical
facts but satisfied her ego. Whatever one may say against her, she has a
strong presence and remains a national celebrity. Her portrayal of Lena
Fischer certainly contributed to the minor success of _Rosenstrasse_.
Outside of Germany, the film will get some attention because of its
subject matter, even if it isn't really that new: Meryl Streep had
already played a blond, non-Jewish woman fighting for her Jewish husband
in the TV series _Holocaust_ back in 1977.

II
For nearly ten years, _Rosenstrasse_ had a reputation as the picture
that never got made, like Jodie Foster's _Flora Plum_. Once production
started, there were no serious conflicts. After 54 days of shooting,
filming was completed on December 18, 2002. The first Berlin press
screening was held on July 16, 2003.

One minor pre-shooting conflict involved 1943-born Jutta Lampe, one of
Germany's two or three greatest living stage actresses, who had
hesitated to play Maria Schrader's orthodox Jewish mother Ruth
Weinstein. Her hesitation was justified. Lampe gives an unhappy, even
campy performance, having to play a character completely alien to her
and, one may assume, to von Trotta as well. To anyone who has seen
Lampe's Phaedra, Andromache, Masha (_The Three Sisters_), Ranevskaya
(_The Cherry Orchard_), or Arkadina (_The Seagull_) on-stage, she's ill
at ease and most reviewers were kind enough not to mention her at all.
Like the similarly protestant Meryl Streep, she is unable to wear a
black wig without audiences being aware of it being a wig.

Within Germany Lampe contributed to the film's prestige. The cast of
_Rosenstrasse_ includes two relatively bankable stars (Riemann,
Schrader) as well as superior stage actresses such as Lampe, Doris
Schade (enjoyably sarcastic as 90-year-old Lena Fischer) and Jutta
Wachowiak, a Brecht performer from East Berlin's Deutsches Theater to
whom film historian Annette Insdorf had paid tribute in her book
_Indelible Shadows. Film and the Holocaust_, in connection with the 1980
concentration camp drama _Die Verlobte_. Wachowiak and Belgian actor Jan
Decleir play an elderly couple and although they act in different scenes
until he is released, you know they belong to one another, with their
combination of larger than life dignity and earthiness.

Schrader (playing Hannah, the protagonist of the present day plot),
though not Jewish herself, was associated with filmmaker/actor Dani Levy
for many years (in 1998 they co-wrote _Meschugge_). There is an
undertone of bitchiness in Schrader's and Riemann's star personae that
gives von Trotta's film a much needed energy. Too often, the good
characters bore audiences to death. Schrader and Riemann are
refreshingly different from the noble heroines of von Trotta's earlier
pictures. It is an intriguing anecdote, mentioned by Riemann in an
interview, that one American company had developed a _Rosenstrasse_
project starring Sharon Stone, and seeking German money for it. For the
record, the cast of _Rosenstrasse_ also includes a veteran bit player,
76-year-old Johanna Penski, who had debuted as an extra in Veit Harlan's
_Durchhalte_ spectacle, _Kolberg_ (whose production had begun in 1943;
it was released on January 30, 1945).

Among the male cast, the dashing presence of Martin Feifel (as Lena
Fischer's Jewish musician husband Fabian) and Fedja van Huet (as Luis
Marquez, Hannah's South American fiancee) stand out. Fedja van Huet had
starred, alongside Jan Decleir, in the Academy Award winning Dutch film
_Karakter_. Considering his talent, he is scandalously wasted by von
Trotta. The Nazis could easily have become stock villains, but von
Trotta knows there was a gray zone, and in this respect the insecure
guard of Rainer Strecker deserves praise. On the debit side, Martin
Wuttke (a fine stage actor who had his breakthrough as Brecht's
Hitlerian Arturo Ui, but who is generally unremarkable on-screen)
struggles hopelessly with the admittedly difficult part of Joseph
Goebbels. He is leagues below Martin Kosleck, who so brilliantly
impersonated the minister of propaganda in John Farrow's _The Hitler
Gang_ (1944) and Stuart Heisler's _Hitler_ (1962), or Cliff Gorman, who
portrayed Goebbels to Anthony Hopkins's Hitler in George Schaefer's TV
movie _The Bunker_ (1981).

Even the best performances cannot compensate for the dull sets and
cinematography. _Rosenstrasse_ is neither a historical pageant nor an
intense chamber piece. It has flaws that are typical for a medium-budget
film. Von Trotta lacked the money and, it must be admitted, the
imagination to recreate 1943's Berlin. The scenes set in the present are
damaging not for dramaturgical reasons, but, since they include
spectacular shots from present-day New York and Berlin, you realize all
the more that the old Berlin consists of only one street corner and
various interiors. You never have a sense of 1943's everyday life. You
are never really there.

III
Most historical films contain inaccuracies. Who decides which
inaccuracies matter and which don't? It depends on each filmgoer's
special knowledge, which he all too often considers to be an absolute. I
initially laughed when I read the following letter to the editors of the
British film magazine _Sight & Sound_ (March 1999): "For all the talk of
the 'realism' of 'Saving Private Ryan' (...), the film contains many
gaffes. In Iowa in mid-June fields of ripe grain are nonsensical, as are
the fields of ripe grass in France shortly after D-Day. The mother in
Iowa is shown looking out of a window over her sink, but in those days
(...) farm sinks had high backs – don't sinks by windows belong to the
50s or later? And the old gramophone is remarkably 'high-fidelity' for
its time". As said, I did laugh initially at this letter, but if I were
an expert in horticulture, sink architecture, or gramophones, I would
also have complained of the several gaffes.

Several German reviewers of _Rosenstrasse_ have complained of historical
inaccuracies. I want to single out Iris Noah's article "Willkommen seid
ihr, Klischees" which appeared in the weekly _Jungle World_ (September
17, 2003) because it managed to attack the film for alleged inaccuracies
while adding inaccuracies of its own. Noah's tone is unusually
aggressive, full of resentments that have nothing to do with von
Trotta's film itself; she seems to be unfamiliar with Nazi culture and
subculture, and she seems not to have talked to or read books by
participants of the _Rosenstrasse_ events.

She accuses Margarethe von Trotta of anti-Semitism, even if it is not a
malicious one. Indeed, the casting company who chose the extras seems to
have used such dubious expressions as "Jewish types" or "Aryan types",
but these faux pas have nothing to do with what happens on-screen and
don't justify Noah's beginning her article with the following sentence:
"In Margarethe von Trottas Film 'Rosenstrasse' soll man die Juden schon
an der Nasenspitze erkennen und Deutsche haben unbedingt blond zu sein".
Even after a second viewing, I have not detected a single nose that
called attention to itself. Katja Riemann's blond hair is covered most
of the time. The Nazi star Litzy (Nina Kunzendorf) looks like a Latin
import and Hannah's non-Jewish fiancée has dark curls. In order to
create a somber mood, von Trotta even let several blond actors (Jürgen
Vogel, Frank Behnke, Rainer Strecker) dye their hair.

Had von Trotta used some racial stereotypes, they still would have been
justified because it was easier for blond, Nordic-looking Jews to remain
unharassed in Nazi Germany, as Herbert A. Strauss has described in his
autobiography _In the Eye of the Storm_ (1997), and a blond 'Aryan'
woman possessed more authority when confronting Gestapo men. While hair
color doesn't reveal anything about a person's character, religion or
ethnic identity, it does contribute to his or her appeal to others.
Anyway, von Trotta makes no use of such stereotypes.

One attack that seriously backfires is the one on the admittedly dubious
Goebbels episode. In front of Joseph Goebbels and other high-ranking
Nazis, Lena Fischer plays the piano while her friend Litzy sings "Ich
weiss nicht, zu wem ich gehöre". Such an event, Noah argues, would never
have been possible in 1943 because the song had been written by the
exiled Jew Friedrich Hollaender, and it was associated with Marlene
Dietrich, whom Germans despised as a traitor for her entertaining U.S.
troops. With this argument, Noah reveals herself as someone who, instead
of doing research of her own, merely reproduces the usual Dietrich
clichés from the yellow press. It is true that Friedrich Hollaender had
written the song, but it was first sung by Anna Sten in the 1932 UFA
melodrama "Stürme der Leidenschaft" ("Storms of Passion").

Anna Sten's singing of "Ich weiss nicht ..." did have a political
meaning when it was first heard. Sten, star of several Soviet and
leftist German films, had been bought by the nationalist UFA. Thereafter
the communist newspaper _Die Rote Fahne_ denounced her as a traitor who
tries to lure proletarian audiences into bourgeois cinemas. Noah has
never heard of Anna Sten, but she has heard somewhere that Germans used
to attack Marlene Dietrich as a traitor. This, however, was in 1960,
when Dietrich gave her first (and only) live concerts in Germany. The
motivation behind the protests against her is too complex to be
discussed in the _Rosenstrasse_ context, having to do with the tickets
being too expensive for the average German Dietrich fan, and with
Dietrich visiting them so late.

_Rosenstrasse_ is set in 1943, not 1960. In 1943, Marlene Dietrich was
not viewed as a traitor but as a German-born actress who made it in
Hollywood. There is no factual evidence for Germans having felt hatred
for Dietrich during the Nazi era. On the contrary, it was Germans who
turned "The Scarlet Empress" (1934), a box office disaster in the United
States and elsewhere, into a huge financial success. Dietrich was on the
covers of Nazi film magazines. During the 1937 Venice Film Festival--a
fascist event that was boycotted by leftist and liberal artists--she
personally appeared after having appeared in the anti-Communist
melodrama _Knight without Armour_ in which she, as a Russian aristocrat,
was assaulted and raped by greasy, subhuman Bolsheviks. At the same
time, Luise Rainer participated in a demonstration against Vittorio
Mussolini's visit to Hollywood, which severely damaged her reputation. A
few ugly Nazi articles of that time depicted Dietrich as a victim of
"Hollywood Jews", but these articles were anti-Semitic, not anti-Dietrich.

Dietrich had helped émigrés financially, yet she never publicly attacked
Nazi Germany until it was safe to do so; had she done that before 1945,
her mother, sister and cousin (a Wehrmacht soldier) who had remained in
Germany might have suffered. Dietrich began entertaining U.S. troops in
the summer of 1944, a year after the _Rosenstrasse_ episode. The people
of the liberated town of Aachen greeted her enthusiastically in 1944,
and her films were successfully shown in German cinemas during the
1950s. If she felt uneasy towards her homeland, it was chiefly because
she had not left it as a star who knows and trusts her audience. Nobody
in 1943 associated the song "Ich weiss nicht, zu wem ich gehöre" with
Dietrich, since it hadn't been recorded by her at that time, and even
afterwards nobody considered Dietrich to be a traitor for entertaining
U.S. troops because these were the days before CNN. Germans didn't even
care when their biggest star, Zarah Leander, left for Sweden in 1943.
And Germans loved stage actress Tilla Durieux who spent World War II
among partisans in Yugoslavia (who haven't been particularly nice to
German soldiers), resuming her German career in the 1950s.

The song "Ich weiss nicht ..." didn't make much of an impact for decades
since the film _Stürme der Leidenschaft_ (directed by Robert Siodmak)
was not too successful. In 1975, Israeli singer Daliah Lavi (a big star
in West Germany since the 1960s) added the song to her repertory and
made it famous. Dietrich's interpretation never achieved the popularity
of Lavi's. Lena Fischer's interpretation of Friedrich Hollaender's "Ich
weiss nicht ..." is certainly meant by von Trotta to be an act of subtle
resistance, but its presentation is hardly comparable to the rousing
"Allons enfants de la patrie" episode from _Casablanca_. Even if all the
people present at the occasion had known the song had been written by an
exiled Jew--and it is well-documented that due to uncertain authorship,
much forbidden music was played during the Nazi era--the fact remains
that the Nazi élite privately enjoyed forbidden fruits.

IV
Iris Noah considers the conditions under which the men live in their
Rosenstrasse prison to be too comfortable. Although she doesn't express
it that directly, she misses the smell of sweat and urine. Obviously,
she confuses the Rosenstrasse building with a train leading to
Auschwitz. In his autobiography _Und Gad ging zu David_ (Berlin 1995),
Gad Beck (b. 1923) described his stay in that environment as not
particularly nightmarish; he felt nervous but he also got warm food, and
he spent most of the time cruising and having sex (p. 112 ff.). A more
audacious, provocative filmmaker than von Trotta might have worked Gad
Beck's experiences into her and Pamela Katz's pious screenplay. Also,
according to Beck, many more men had been involved in the protests than
is officially recognized.

But then, who cares for authentic witnesses anyway? One of the women who
had helped to free her beloved during the Rosenstrasse protests, Gisela
Miessner, defended the film to little avail in the daily newspaper
_Junge Welt_ (September 26, 2003). It seems that actual experience is
not in demand these days. It is second-hand experience that counts. A
few years ago, I had to endure a whining girl accusing a real Auschwitz
survivor--who told audiences how much she enjoyed visiting today's
Germany--of being naive and inappropriately optimistic. Today's Germany
is so horrible! the girl (or girlish woman) screamed, trying to upstage
the woman who really had been in hell.

V
Margarethe von Trotta's worst decision was to suggest a sexual encounter
between Lena Fischer and Joseph Goebbels. Too many people have left the
cinemas asking themselves: Did they or didn't they? As if that mattered
in the context. As someone who pays particular attention to sexual
improbabilities (as opposed to other cinemagoers who detect
horticultural improbabilities), I would say they didn't, and couldn't
have done. For her meeting with the Propaganda minister, Lena wears a
tight red dress that she's incapable of putting on without help from
others. After Goebbels has left, she is still wearing her dress, with no
button unbuttoned. Friends have to help her out of it. Of course, there
may have been sexual practices that didn't require undressing, but I
won't go further into that. It is a well-documented fact that Goebbels
wasn't attracted to blondes, and unlike Hermann Göring (whose WW I
sweetheart, actress Käthe Dorsch, repeatedly persuaded him to release
prisoners), Goebbels rigidly separated sex from politics.

VI
The chief reason why _Rosenstrasse_ was attacked despite its good
intentions is, to me, an ideological one. I dare say that _Rosenstrasse_
was attacked for its humanism, its homage to non-political antifascism.
If you study the lives of people who saved Jews during the Third Reich,
you'll discover that they usually were apolitical. Those who do the
right thing are not identical with those who write the right thing.
Self-righteous journalists and historians who promote civil courage are
almost never identical with those anonymous people who risk their lives
by intervening when neo-Nazis attack blacks or Arabs in the subway.
Needless to say, these real heroes don't get any awards for their
courage, and usually they don't want them. Such humanitarian awards go
to talk show humanists – glamorous people who say on TV that they hate
Nazism and violence. A notable exception is politician and marijuana
activist Christian Ströbele ("Die Grünen") who, after being attacked
with an iron rod by a neo-Nazi, fought back despite being unarmed and
bleeding.

The Rosenstrasse women demonstrated courage because they loved their
husbands, sons, or cousins. Their attitude is still not taken seriously
even if it has saved more lives than the writings of more politically
motivated people.

Another taboo subject which von Trotta has touched is the gray zone. In
his review of Fred Zinnemann's 1944 antifascist drama _The Seventh
Cross_, the _New York Times_ critic Bosley Crowther felt it necessary to
remind his readers that the film based on Anna Seghers's novel was set
in 1936 and that in the meantime, all good Germans as depicted must have
emigrated or been killed. In view of the bombs dropped on Germany, this
position was understandable.

Less understandable is the fact that German émigrés who spent World War
II in Hollywood (not the worst place, if I had to choose) and came back
to Germany after 1945 miraculously didn't meet any good German or
concentration camp survivor, only Nazis and opportunists. Never mind
that leading West German film producers Gyula Trebitsch, Arthur Brauner
and Walter Koppel had survived the holocaust, that our most popular
literature critic Marcel Reich-Ranicki and his wife had witnessed the
Warsaw ghetto uprising; popular talk host Hans Rosenthal had survived in
hiding, and theater and TV director Imo Moszkowicz had been an Auschwitz
inmate. Somehow, no Hollywood émigré (as opposed to Moscow émigrés,
whose views are far more differentiated) wanted to know about these
people's fates. A notable exception is actor Fritz Kortner who spent
World War II in Hollywood: Kortner, one of the most viciously attacked
Jewish stars of the Weimar years, never forgot the cowardly and
reactionary behavior of many of his fellow émigrés who would have become
Nazis had they been allowed.

Younger German journalists of today have chosen what I call the
Hollywood perspective. It is easier, more comfortable to divide Germans
into killers, victims, and émigrés. And the Rosenstrasse women didn't
fit into any of these categories. They could save lives because they
were part of the system. At least one of the Rosenstrasse women is
depicted by von Trotta as a Nazi, wearing her swastika on her chest, but
she is still fighting for a Jewish relative. (German actor Michael Degen
recently revealed that those Gentiles who saved his and his mother's
lives had been anti-Semites, but they were horrified by Nazi violence
against Jews.)

All films that have dealt with German resistance made it clear that
these courageous people had been a minority. Yet even these few decent
people seem to offend the average young German of today. It was
different in the early 1980s. In those days when thousands of young
Germans (as well as older people like Heinrich Böll who had remained
young at heart) protested against nuclear weapons, the heroes of German
resistance were appreciated. After reunification, if you asked people in
the streets to name antifascists, they would certainly have mentioned
Oskar Schindler and Marlene Dietrich. Both have done good, particularly
Schindler, but both are impossible to imitate. The average German could
not go to the Gestapo and say: "Heil Hitler, please give me a thousand
Jews to help me repair my roof". As much as I usually disagree with
Claude Lanzman, I think he was right in accusing _Schindler's List_ of
telling a story that was too atypical to be of educational value. As for
Dietrich, she is too Apollonian a figure to invite identification. By
focusing on extraordinary situations (Schindler) or personalities
(Dietrich), the German media intimidate ordinary people instead of
encouraging them to become politically active. Having to look up to Gods
makes you passive.

Like such emigrants as Klaus and Erika Mann (two of my favorite
enemies), most journalists today say that the average German couldn't
have fought Hitler anyway, so it was better to leave Germany in the
first place. Fortunately, another 2003 poll asking who were the greatest
Germans of all time had the following antifascists among the top ten:
Hans and Sophie Scholl (resistance fighters who were executed), Willy
Brandt (a resistance fighter who emigrated to Norway and Sweden and
later became German Chancellor), and Albert Einstein, one of the few
pacifists during WW I. All of them had either been Nazi victims (the
Scholls) or émigrés, though Brandt did visit Nazi Germany illegally
until the outbreak of World War II. There remains a distrust of all
Germans who survived within Nazi Germany. This distrust is hardly
reduced to non-Jewish Germans. I vividly recall a scene from Otto
Preminger's Leon Uris adaptation _Exodus_ (1960) in which concentration
camp survivor Sal Mineo is brutally interrogated after the liberation,
having to explain why he had managed to survive the death camps.

VI
Discussing _Rosenstrasse_ is much more engrossing than watching the film
itself. In view of the subject, this is not too bad an effect. There are
great films which leave audiences paralyzed, unable to talk for days.
_Rosenstrasse_ has flaws and could easily be improved upon by a more
virtuoso filmmaker. But it raises questions that its makers may never
have thought about.`
                },
                {
                    title: `Beate Meyers Film Review on Rosenstrasse`,
                    isVisible: false,
                    text: `Date: 2004 
Language: German 
Film review 

Beate Meyer’s film review written in German summarizing the prosecution
of Jews, mixed marriages during the Rosentrassee Protest 

Geschichte im Film - Judenverfolgung, Mischehen und der Protest in der
Rosenstraße 1943

Gleich nach der Uraufführung des Filmes "Rosenstraße" brach zwischen dem
Historiker Wolfgang Benz und der Filmemacherin Margarethe von Trotta ein
Streit um die Darstellung des Protestes der Frauen in der Rosenstraße
aus.[1]

Der Film greift die Verfolgung der rd. 35.000 deutsch-jüdischen
Mischehen im Nationalsozialismus auf.[2] Es hatten in den Jahrzehnten
zuvor mehr jüdische Männer als jüdische Frauen einen nichtjüdischen
Partner (1,5 bis 2,5 x so viele) geheiratet,[3] vor allem in Großstädten
wie Berlin. Wenn Margarethe von Trotta die Konstellation "nichtjüdische
Frau" und "jüdischer Mann" gewählt hat, ist dies also typisch und
erklärt, warum es überwiegend Frauen waren, die in der Rosenstraße
protestierten. Dass unter Künstlern Mischehen öfter vorkamen, ist
bekannt. Die Kombination "adlige Frau – jüdischer Mann" war in der
Realität allerdings selten aufzufinden, zeichnete sich der Adel doch -
vor allem in der jüngeren Generation - durch prononcierte antisemitische
Tendenzen aus.[4]

Juden in Mischehen litten zunächst unter der NS-Verfolgung genauso wie
andere Juden: Sie stiegen sozial ab, ihr Vermögen wurde gesperrt, sie
mussten die Zwangsnamen "Sara" und "Israel" annehmen und in Mischehe
lebende jüdische Männer wurden am 9./10. November 1938 mit verhaftet.
Dies führte den nichtjüdischen Ehefrauen schlagartig vor Augen, dass
künftig neben der Armut auch der Makel der Kriminalisierung und der
Status absoluter Rechtlosigkeit auf ihnen lasten würde.[5] In dieser
Zeit zerbrachen gerade die aus materiellen Gründen geschlossenen Ehen,
insbesondere die mit jüdischen Ehemännern. Auf die Mischehen mit
jüdischen Frauen wagte der NS-Staat noch nicht so zuzugreifen.

Die Scheidungsraten in Mischehen wurden früher auf 7-10% geschätzt. Die
Historikerin Ursula Büttner sprach deshalb vom "Bollwerk Familie", das
gegen alle Zumutungen des NS-Staates Bestand gehabt habe.[6] Ähnlich
argumentiert Nathan Stoltzfus.[7] Er konstatiert bei denen, die an der
Ehe festhielten, einen "lebensgefährlichen zivilen Ungehorsam".
Zerrüttungstendenzen in den Ehen und steigende Scheidungsraten finden
bei so viel Wunschdenken wenig Aufmerksamkeit. Mittlerweile ist bekannt,
dass die Scheidungen bei 20% und höher lagen, und zwar auch noch zu
einer Zeit, als das Scheidungs- mit dem Todesurteil gleichzusetzen
war.[8] Ein Fünftel bis ein Viertel der nichtjüdischen Frauen entschied
sich unter massivem Druck, den jüdischen Partner preiszugeben.[9] Im
Film heißt es demgegenüber, so viele "arische" Männer hätten ihre
jüdischen Frauen verlassen. Diese empirisch nicht haltbare Vorstellung
geistert seit den achtziger Jahren durch die Forschungsliteratur.[10]
Dabei wurden 80 bis 90% der Mischehenscheidungen von "deutschblütigen"
Frauen eingereicht!

In einer Filmsequenz droht ein Gestapobeamter Lena Fischer, wenn sie
sich nicht scheiden ließe, würden beide Eheleute deportiert. Diese
Möglichkeit wurde tatsächlich auf der Wannsee- und den Folgekonferenzen
erwogen, jedoch nicht in die Tat umgesetzt.[11]

Die Verfolgung der Mischehen hatte immer wieder zu Protesten der
"deutschblütigen" Verwandten geführt, die nach der Pogromnacht 1938
erneut anstiegen. Zur Beruhigung verkündete Göring im Winter 1938,
künftig werde zwischen "privilegierten" und "nichtprivilegierten"
Mischehen unterschieden.[12] Als "nicht privilegiert" galten nun
kinderlose Ehen mit jüdischem Ehemann (wie Lena Fischers Ehe im Film)
und solche mit jüdisch erzogen Kindern (auch dazu gibt es im Film eine
Entsprechung: die Jugendliche im Sammellager, deren jüdischer Vater sich
dort einweisen lässt, um ihr beizustehen). "Privilegiert" waren Ehen mit
jüdischer Frau – auch kinderlose - und solche mit nichtjüdisch erzogenen
Kindern.

Die "Privilegien" bestanden im wesentlichen darin, dass diese Mischehen
in ihren Wohnungen verbleiben durften und nicht der
Kennzeichnungspflicht unterlagen. Sie konnten ihr Vermögen auf den
nichtjüdischen Partner übertragen. Zwangsarbeit mussten beide Gruppen
leisten. Ab Herbst 1941 wurde bedeutsam, dass "privilegierte" wie
"nichtprivilegierte" Juden von den Deportationen zunächst ausgenommen
waren.[13]

Wenn im Film die inhaftierten Juden Lager Rosenstraße fast alle einen
Stern tragen, so ist dies historisch nicht richtig, ca. 2/3 der
Inhaftierten dort mußten den Stern nicht tragen. Ihre _nicht_jüdischen
Kinder, die "Mischlinge ersten Grades", waren ebenfalls von der
Kennzeichnungspflicht befreit. Von Trotta wählte auch hier die absolut
seltenste Kombination: Die kleine Ruth im Film, die anfangs den Stern
trägt, ist in der Filmkonstruktion nicht "Mischling ersten Grades" wie
über 90% der ca. 73.000 "Halbjuden" in der Realität,[14] sondern sie ist
als "Geltungsjüdin" eingestuft, also als jüdisch erzogene "Halbjüdin"
wie nur ca. 8.000 Personen. In der NS-Zeit wäre der Unterschied zwischen
"Mischling ersten Grades" und "Geltungsjüdin" doppelt lebensentscheidend
gewesen, denn ein minderjähriger "Mischling ersten Grades" schützte eine
jüdische Mutter vor dem Abtransport und wurde selbst nicht deportiert.
Da im Film aber nun Mutter und Kind jüdisch sind und durch die Scheidung
den Schutz des nichtjüdischen Vater verloren hatten – das sagt auch der
Gestapobeamte – hätten sie eigentlich schon vorher in die Transporte
eingereiht werden sollen.

Im Film gibt es eine Szene, in der die Ehefrau eines deportierten Juden
einem Gestapobeamten eine Passage über den Schutz durch die Mischehe aus
dem Text der Nürnberger Gesetze zitieren will. Historisch ist das nicht
korrekt, denn die 1935 erlassenen Nürnberger Gesetze beschränken sich
auf das Verbot der Mischehe und außerehelicher Sexualität. Die
Kategorien der "privilegierten" und der "nichtprivilegierten" Mischehen
wurden im Winter 1938 eingeführt und nie gesetzlich fixiert.

Außer den in Mischehen Lebenden waren zwischen Oktober 1941 und Ende
Februar 1943 auch jüdische Rüstungsarbeiter (bedingt) von den
Deportationen ausgenommen. Ende 1942/Anfang 1943 konnten sie durch
ausländische Zwangsarbeiter ersetzt werden. Mit der "Fabrik-Aktion"
begann ihre Deportation.[15] Während dies andernorts ohne großes
Aufsehen stattfand, fuhren in Berlin Lastwagen vor den Fabriken vor,
schwärmten bewaffnete SS- und Gestapoleute aus, um jeden Juden
festzunehmen, dessen sie habhaft werden konnten. Ab 1. März wurden ca.
12.500 Juden, davon knapp 9.000 aus Berlin,[16] nach Auschwitz
transportiert. Proteste gegen ihre Deportation sind nicht überliefert.

Währenddessen wurden in den Sammellagern die 1.500-2.000 in Mischehe
lebenden Juden und "Geltungsjuden" ausgesiebt, in das Gebäude in der
Rosenstraße überstellt und dort ca. eine Woche festgehalten.[17] Laut
Erlass des Reichssicherheitshauptamtes (RSHA) sollten sie registriert,
erfasst, aber _nicht deportiert_ werden - was sie nicht wissen konnten.
Sie schwebten in Todesangst und glaubten später, der Protest ihrer
Ehefrauen habe sie gerettet. Der Film greift diese gegensätzlichen
Positionen auf und verarbeitet beide. Während die Gesamthandlung den
Erfolg der Frauen nahe legt, wird die These von der geplanten
Freilassung vom Baron von Eschenbach (Jürgen Vogel) etwas sarkastisch
als Erklärung eingebracht - und dient wohl gleichzeitig zur
Beschwichtigung möglicher Einwände von Historikern.[18]

Ein Passus in dem erwähnten Erlaß mahnte, die Gestapo dürfe nicht den
Eindruck erwecken, "dass bei dieser Aktion das Mischeheproblem
gleichzeitig grundlegend bereinigt werden soll." Doch genau dies nahmen
die Angehörigen der in der Rosenstraße Inhaftierten natürlich an. Voller
Angst sammelten sie sich vor dem Gebäude. Die Zahlenangaben schwanken
zwischen 150 Personen (die wahrscheinlichste Angabe) und 6000, die sich
vorübergehend oder ständig dort aufhielten.[19] Der Film hält sich an
die realistischere Zahl von ca. 150-200 Personen.

Eine Minderheit der Zeitzeugen hat später von einem SS-Fahrzeug und
einem Maschinengewehr gesprochen, vielleicht, weil häufig Wagen mit
Uniformierten durch die Reichshauptstadt fuhren. Ich vermute, das
Maschinengewehr wurde nachträglich der Erinnerung hinzugefügt, um das
Ausmaß der Angst zu demonstrieren. Im Film allerdings wird beides zum
Teil des dramaturgischen Spannungsbogens. Dieser zugespitzten Bedrohung
setzen die Frauen im Film nicht nur – wie in der Realität - ihre
Forderung, "wir wollen unsere Männer wiederhaben" entgegen, sondern die
Regisseurin lässt sie "Mörder, Mörder" rufen. Hier überschreiten die
Frauen im Film die Schwelle vom Protest zum Widerstand. Es wird
suggeriert, sie würden sich öffentlich gegen das NS-Regime generell
wenden, und das ist hochproblematisch.

Die meisten Häftlinge wurden eine Woche in der Rosenstraße festgehalten.
Am Ende dieser Woche wurden 25 Männer aus nichtprivilegierten Mischehen
von dort deportiert[20] - im Film ein Anzeichen für den allgemeinen
Abtransport. Doch hier handelte es sich ganz offensichtlich um eine
Aktion der Gestapobeamten ohne die dazu notwendige Genehmigung des RSHA.
Sie setzten die Männer als "Schutzhäftlinge" Richtung Auschwitz in
Marsch. Zwei Wochen später befahl ein Fernschreiben des RSHA ihre
Rückführung - eben weil sie durch die Mischehe vor der Deportation
geschützt waren. Die meisten der Männer überlebten nach einer
Lagerodyssee die NS-Zeit. Der Film greift den Abtransport der Männer
auf, ohne die spätere Rückführung zu erwähnen. So stützt die
"irrtümliche" Deportation im Film unausgesprochen die These von der
angeblichen geplanten Deportation.

Am Ende der Filmerzählung begeben sich die nun wieder vereinten Paare
nach Hause. Die unmittelbare Bedrohung ist vorbei und die immerhin noch
zwei Jahre währende NS-Zeit scheint eine Art Wartezeit auf das
Kriegsende zu sein. Die Realität wich davon sehr stark ab. Im April 1943
lebten noch ca. 17.000 Juden in Mischehe in Deutschland, deren Zahl bis
1944 auf 12.000 Paare sank.[21] Reichsweit erhielten im Oktober 1944 die
"arischen" Ehemänner und Söhne von Jüdinnen die Einberufung zur
Zwangsarbeit in Lager der Organisation Todt. Die Verfolgung hatte nun
auch diesen Personenkreis mit voller Härte erreicht. Die meisten der in
Mischehen lebenden Jüdinnen und Juden bekamen zu Jahresbeginn 1945 den
Deportationsbefehl nach Theresienstadt.[22] Proteste fürchteten die
Machthaber nicht mehr. Diese Zuspitzung der Situation ist im Film
ausgespart.

Die inhaltliche Vorlage des Films war Stoltzfus’ Studie mit der
Schlussfolgerung, hätten sich mehr Deutsche so verhalten wie diese
Frauen, hätte "individuelle oder kollektive Gehorsamsverweigerung die
Verbrechen möglicherweise eingedämmt."[23] Deshalb ist auch die
Freilassung als Folge des Protestes für Stoltzfus - und in der Folge für
von Trotta - so wichtig - als sei nicht schon die Protestaktion an sich
bemerkenswert. Es kommt von Trotta entgegen, dass überwiegend Frauen
agierten, denn sie hat sich bisher filmisch mit Frauen befasst, die
manchmal zweifelten oder Angst zeigten, aber doch stark, mutig und
kämpferisch handelten. Die störenden Teile der Realität, nämlich
Egoismus, Feigheit, Angst oder die Schwäche jener Frauen, die nicht an
ihren Ehen festhielten, spart sie in diesem Film nicht nur aus, sondern
projiziert sie auf die Männer, die sich angeblich massenhaft von ihren
jüdischen Frauen scheiden ließen. So sind es die Frauen, die dem von
männlicher Brutalität gekennzeichneten NS-Regime einen Sieg abtrotzen.
Als sie diesen errungen haben, gehen sie – im Film – noch einen Schritt
weiter: Sie setzen diesem unmenschlichen Regime eine neue, solidarische
Gemeinschaft entgegen, in die alle Verfolgten aufgenommen werden (Lena
und ihr Mann nehmen Ruth zu sich, die Familie der Jugendlichen nimmt
eine Inhaftierte auf, deren Mann an der Ostfront steht).

Neben der Utopie des gewaltfreien Widerstandes und dem feministischen
Anliegen bestimmt noch ein drittes Moment von Trottas Werk maßgeblich:
Nicht eine Metzgerstochter oder die eines kleinen Beamten, was der
Realität mehr entsprochen hätte, kämpft als Ehefrau eines Juden, sondern
eine deutsche Adlige.[24] Sie verkörpert Schönheit, Mut, Stärke, Liebe,
vor allem aber Treue bis zur Selbstaufopferung. Margarethe von Trotta
geht - so ihre homepage – davon aus, die Machthaber hätten bei den
Frauen nicht bestrafen hätten können, was sie ansonsten von ihren
Untertanen forderten. Dafür könnten freilich viele Gegenbeispiele
angeführt werden. Aber Lena Fischer alias Baroness von Eschenbach ist
überdies die personifizierte Moral. Hätte das die Metzgerstochter
symbolisieren können? Nein! So wird der Widerstand getragen vom
deutschen Adel, die Metzgers- und Beamtentöchter befinden sich nur in
der flankierenden Menge. Als einzelne treten sie nicht hervor, sie
überwinden jedoch in der Menge ihre Differenzen. So wird die Frau mit
dem "Goldenen Parteiabzeichen" der NSDAP integriert, ohne ihrer
Weltanschauung abzuschwören. Die Menge wird mit lauten Rufen und
langsamen Vorrücken Richtung Gebäude aktiv. Das Privileg des
individuellen Handelns hingegen liegt beim Adel. Dieser ist im Film
gespalten zwischen dem alten Vater, der aus Treue zum Regime dessen
Verbrechen nicht wahrhaben will, und der jungen Generation, die Treue an
der Seite der Juden übt. Hier dürfte unterschwellig eine glorifizierende
Vorstellung vom Widerstand des 20. Juli eingeflossen sein.

Es mischen sich also drei Elemente:
1. Ziviler Ungehorsam bzw. gewaltfreier Widerstand bis hin zur
Selbstopferung – eine Vorstellung der undogmatischen Linken und
Pazifisten der achtziger Jahre;
2. Feminismus, erwachsen aus der Frauenbewegung der siebziger und
achtziger Jahre;
3. Adlige Moral – ein Mythos der Widerstandsgeschichte, der sich durch
die deutsche Nachkriegsgeschichte zieht.
Alle drei Elemente haben mit dem Dritten Reich wenig, mit der Projektion
gegenwärtiger Utopien auf einen historischen Stoff aber viel zu tun.
Um nun Baroness von Eschenbach besonders glänzen zu lassen, bedarf es
neben dem jüdischen Ehemann, der recht farblos und passiv bleibt, einer
bewährten Vergleichsfolie, auf der ihr Handeln besonders gut zur Wirkung
kommt, die das Kinopublikum anrührt und emotional und wie rational die
Opfer rechtfertigt: Sie rettet ein unschuldiges jüdisches Kind. Diese
Rettung ist in der Wirkung des Films bedeutsamer als die Rettung des
Ehemannes, die explizit im Vordergrund steht.

Margarethe von Trottas Retterin Lena Fischer agiert in einer extrem
polarisierten und reduzierten deutschen Gesellschaft. Da kommunizieren
vor allem Uniformierte: SS, Polizei, Gestapo. Als Contrapart stehen
ihnen die protestierenden Frauen gegenüber. Protagonisten, die keiner
der beiden Seiten zugerechnet werden können, sind dagegen rar und dienen
lediglich zur Kontrastierung der mutigen Frauen wie der brüllenden
Uniformträger.
Inzwischen haben rd. 600.000 Personen in Deutschland und 30.000 in den
Niederlanden den Film gesehen. Wenn er ab Juni in den USA läuft, werden
Tausende hinzukommen.

Ihr und unser Bild vom Nationalsozialismus, von der deutschen
Gesellschaft dieser Zeit und den verfolgten Juden ist ohnehin stark von
Medien geprägt, die dafür bestimmte Symbole anbieten: den Judenstern,
den bewaffneten, brüllenden SS-Mann, düstere Beleuchtung für die Welt
der Verfolgten, Goebbels als lüsternen "Bock von Babelsberg" und vieles
mehr. Die ungewöhnliche Geschichte des Protestes wird im
Rosenstraßen-Film leider gewaltsam an dieses Bild angepasst. So vergibt
der Film die Chance, unser Bild von der Vergangenheit zu differenzieren
und lässt uns mit den sich "jagenden happy-ends" – so eine Rezensentin -
und der Frage allein, wie es eigentlich zum Judenmord kommen konnte,
wenn es doch nur sieben Tage der Standhaftigkeit bedurfte, ihn zu
verhindern.


Notes

[1]. Wolfgang Benz, Kitsch, Klamotte, Klitterei, in: Süddeutsche Zeitung
v. 18.09.2003 und Margarethe von Trotta, Interview mit dem Bayrischen
Rundfunk, zitiert nach: Stefan Koldehoff, Gepflegtes Misstrauen, in:
Süddeutsche Zeitung v. 22.09.2003. Eine Langfassung dieses Textes siehe
Beate Meyer, Geschichte im Film - Judenverfolgung, Mischehen und der
Protest in der Rosenstraße 1943: Zeitschrift für Geschichtswissenschaft
1/2004, S. 23-36.

[2]. Vgl. Beate Meyer, "Jüdische Mischlinge". Rassenpolitik und
Verfolgungserfahrung 1933-1945, Hamburg 1999, S. 24ff.; siehe auch
Ursula Büttner, Die Not der Juden teilen, Hamburg 1988, S. 14.

[3]. Vgl. Meyer, "Jüdische Mischlinge", S. 24f.

[4]. Vgl. Stefan Malinowski, Vom König zum Führer: Sozialer Niedergang
und politische Radikalisierung im deutschen Adel zwischen Kaiserreich
und NS-Staat, Berlin 2003. Es muss von Trotta zugute gehalten werden,
daß sie die untypische Hauptfigur (frei) nach den Erzählungen eines
Zeitzeugen entwarf.

[5]. Vgl. Meyer, "Jüdische Mischlinge", S. 29f.

[6]. Vgl. Ursula Büttner, Bollwerk Familie. Die rettung der Juden in
"Mischehen", in: Günther B. Ginzel (Hrsg.), Mut zur Menschlichkeit, Köln
1993, S. 59-77.

[7]. Nathan Stoltzfus, Resistance of the Heart: Intermarriage and the
Rosenstrasse Protest in Nazi Germany, New York 1996; ders., Widerstand
des Herzens - der Aufstand der Frauen in der Rosenstraße, München 1999;
ders., Widerstand des Herzens. Der Protest in der Rosenstraße und die
deutsch-jüdische Mischehe, in: Geschichte und Gesellschaft 21/1995, S.
218-247 und die Replik von Christoph Dipper, Die Schwierigkeiten mit der
Resistenz, in: Geschichte und Gesellschaft 22/1996, S. 409-416; siehe
Meyer, "Jüdische Mischlinge", S. 93f..

[8]. Vgl. Beate Meyer, The Mixed Marriage. A Guarantee of Survival or a
Reflection of German Society during the Nazi Regime? in: David Bankier
(Hrsg.), Probing the Depths of German Antisemitism. German Society and
the Persecution of the Jews, 1933-1941, New York/Jerusalem 2000, S. 54-77.

[9]. Vgl. Meyer, "Jüdische Mischlinge", S. 68ff. und Tabelle
"Mischehenscheidungen und Aufhebungen 1937-1945", S. 462. Trauriger
Höhepunkt der Scheidungen nach 1938: Das Jahr 1943.

[10]. Diese Zahl übernahmen div. Historiker von Dorothee Klinksiek, Die
Frau im NS-Staat, Stuttgart 1982.

[11]. Vgl. Besprechungsprotokoll der Wannsee-Konferenz vom 20.1.1942,
abgedruckt in: Kurt Pätzold/Erika Schwarz, Tagesordnung Judenmord. Die
Wannsee-Konferenz am 30. Januar 1942, Berlin 1992, S. 102-112.

[12]. Bundesarchiv Berlin, R 18, RMdI, 343-345, Geheimer Schnellbrief
des Ministerpräsidenten Generalfeldmarschall Göring, Beauftragter für
den Vierjahresplan, an den RmdI u.a. v. 28.12.1938.

[13]. Vgl. Meyer, "Jüdische Mischlinge", S. 30ff.

[14]. Zu den Zahlen siehe ebd., S. 162ff.

[15]. Vgl. Wolf Gruner, Der geschlossene Arbeitseinsatz deutscher Juden.
Zwangsarbeit als Element der Verfolgung 1938-1943, Berlin 1997, S.
306ff., ders., Die Fabrik-Aktion und die Ereignisse in der Berliner
Rosenstraße. Fakten und Fiktionen um den 27. Februar 1943, in: Jahrbuch
für Antisemitismusforschung 11/2002, S. 137-177, hier: S. 145f.

[16]. Zahlen nach Gruner, Arbeitseinsatz, S. 320.

[17]. Vgl. Beate Meyer, Die Inhaftierung der "jüdisch Versippten" in der
Berliner Rosenstraße im Spiegel staatsanwaltlicher Zeugenvernehmungen in
der DDR, in: Jahrbuch für Antisemitismusforschung 11/2000, S. 178-197,
S. hier: S. 184ff.

[18]. Auf der Berliner Tagung zum Thema bestätigte der Produzent des
Filmes diese Vermutung: die Erklärung sei nach einem Gutachten, das Wolf
Gruner zur ersten Drehbuchfassung erstattet hatte, hineingenommen
worden. Vgl. zur Position der am Film Beteiligten ansonsten Felix
Möller, Der Protest in der Rosenstraße, in: Thilo Wydra, Rosenstraße.
Ein Film von Margarethe von Trotta. Die Geschichte. Die Hintergründe,
Berlin 2003, S. 25-60.

[19]. Vgl. zu den Zahlenangaben und ihrer jeweiligen Herkunft: Gruner,
Fabrik-Aktion, S. 168.

[20]. Vgl. Stoltzfus, Widerstand, S. 336ff., Schulle, "Gebt unsere
Männer frei", in: Beate Meyer/Hermann Simon (Hg.), Juden in Berlin
1938-1945, Berlin 2000, S. 164f.

[21]. Zahlen nach: Herbert Strauss, Jewish Emigration from Germany .
Nazi Policies and Jewish Responses , in: Leo Baeck Yearbook XXV/1980, S.
313-358, hier: S. 317.

[22]. Vgl. Meyer, "Jüdische Mischlinge", S. 237ff.

[23]. Stoltzfus, Wahrheit.

[24]. Damit hebt von Trotta die von Stoltzfus kreierte Dichotomie
"Widerstand des 20. Juli" und "Aufstand von unten" für sich wieder auf
und vereint diese Momente im Rosenstraßen-Protest wieder.`
                },
                {
                    title: `Konrad Weiss's Film Review on Rosenstrasse `,
                    isVisible: false,
                    text: `Date: July 27, 2004
Language: German 
Film Review 

Konrad Weib’s film review written in German on Rosentrassee  

Anmerkungen zum Film "Rosenstraße"

"Mißtraut den Grünlagen!" Mit diesem sprichwörtlich gewordenen Satz
beginnt Heinz Knobloch sein Buch über Moses Mendelssohn _Herr Moses in
Berlin_, das zuerst 1979 erschienen ist. Es war eines der wenigen Bücher
in der DDR, die sich mit jüdischer Tradition, jüdischer Kultur und
jüdischem Leben beschäftigten. Über den Widerstand der Frauen in der
Rosenstraße heißt es dort:

"Wenn wir neben dem Polnischen Kulturzentrum den Durchgang benutzen,
also nicht weiter in Richtung Markthalle gehen, nicht abgelenkt werden
von Schokolade, Wurst-Spezialitäten, Elektrik und Porzellan, gelangen
wir in die Rosenstraße, die eigentlich ein geräumiger Parkplatz ist.
Früher gab es zwischen der Spandauer Straße und der Rosenstraße eine
Verbindung, Heidereutergasse genannt. Hier stand zu Mendelssohn Zeit die
Synagoge. Es war die älteste Berlins, und niemand weiß mehr, wer sie
gebaut hat. (...) Dem Tempel war die Besonderheit vorgeschrieben, daß er
als Bauwerk der Juden keinesfalls mit einer christlichen Kirche
gleichgesetzt und nicht höher sein durfte als ein einstöckiges
Bürgerhaus. (...)
Vor diesem Haus und in der Rosenstraße sowie vor Hafträumen der Geheimen
Staatspolizei kam es im Frühjahr 1943 zu wiederholten Demonstrationen.
Ehefrauen protestierten offen gegen die Verschleppung ihrer jüdischen
Männer.
Wer von alledem nichts weiß, denkt wohl, den Parkplatz hier hat es schon
immer gegeben."[1]

Ich weiß nicht mehr, wann ich zuerst vom Frauenprotest in der
Rosenstraße gehört habe. In der DDR stand immer der kommunistische
Widerstand im Mittelpunkt. Über den "bürgerlichen", kirchlichen oder gar
jüdischen Widerstand las und hörte man viel weniger. 1967 habe ich, noch
als Student, einen Film über die jüdisch-kommunistische
Widerstandsgruppe Herbert Baum gemacht, den Film _Flammen_.[2] Möglich,
daß ich bei den Recherchen zu diesem Film auch auf die
Rosenstraßen-Aktion gestoßen bin oder bei Gesprächen mit den
Überlebenden der Gruppe Baum davon gehört habe. Ganz gewiß habe ich es
1979 in Knoblochs Buch gelesen. Jedenfalls wußte ich vom Widerstand der
jüdischen Frauen, ohne ihn aber mit seinem historischen Ort in
Verbindung zu bringen. Daß jener Parkplatz in der Nähe des Polnischen
Kulturzentrums, auf dem auch ich oft mein Auto abgestellt habe, der Ort
jenes Geschehens ist, ist mir aber erst bewußt geworden, als dort Mitte
der 90iger Jahre das eindrucksvolle Denkmal von Ingeborg Hunzinger
errichtet worden war.

Wenn Geschichte nur abstrakt, mit nackten Jahreszahlen oder in trockenen
historischen Fakten überliefert wird, fällt es schwer, sich ein
lebendiges Bild zu machen, sie mitzuleiden und mitzuleben. Vom Ursprung
her war Geschichtsschreibung ja immer auch Erzählung, und in vielen
Völkern wurde Geschichte nur durch das gesprochene, vielfältig
ausgeschmückte Wort lebendig erhalten. So es ist völlig legitim, wenn
auch in unserer Zeit Geschichte mit allen zur Verfügung stehenden
Medien, also auch mit dem Theater, dem Hörspiel, dem Film, dem Internet
und allen denkbaren multimedialen Formen überliefert wird.

Als Filmdokumentarist war ich immer der Überzeugung, daß sich
historische Ereignisse am wirksamsten über das Schicksal realer Menschen
vermitteln lassen. So habe ich auch meine Geschichtsfilme gestaltet,
etwa den Film _Dawids Tagebuch_[3] über den jüdischen Jungen Dawid
Rubinowicz oder den Film _Ich bin klein aber wichtig_[4] über den
polnischen jüdischen Kinderarzt, Erzieher und Schriftsteller Janusz
Korczak. Ich war mir immer bewußt, daß für die heute Geborenen die
Ereignisse im nationalsozialistischen Deutschland genauso fern,
unverständlich und kaum nachvollziehbar sind wie die Punischen Kriege
der Römer.

Und so habe ich auch den Film _Rosenstraße_ von Margarethe von Trotta
gesehen, einen Film, der mich bewegt und tief berührt hat. Die harsche
Kritik von Wolfgang Benz,[5] den ich für einen der besten Kenner des
Nationalsozialismus halte und als einen der bedeutendsten
zeitgenössischen Historiker achte, habe ich nicht verstanden. Benz reibt
sich vor allem an einem Satz im Vorspann, der auf die Historizität der
Ereignisse hinweist, hat diesen Satz aber ungenau gelesen und zitiert.
Benz schreibt: "Im Vorspann zu Margarethe von Trottas Film 'Rosenstraße'
steht zu lesen, daß die Ereignisse sich tatsächlich Ende Februar/Anfang
März 1943 so in Berlin zugetragen haben. Der Film nimmt damit
Authentizität in Anspruch."[6]

Tatsächlich heißt es im Vorspann aber, daß die Ereignisse in der
Rosenstraße stattgefunden haben, nicht, daß sie sich so zugetragen
haben, wie der Film sie darstellt. Das ist ein ganz wesentlicher
Unterschied. Denn der Film "Rosenstraße" ist ein Spielfilm, eine Fiktion
– eine Fiktion allerdings auf der Grundlage historischer Ereignisse. Ein
Dokumentarfilm müßte die Geschehnisse so genau wie nur irgend möglich
nachzeichnen und versuchen, Geschichte zu rekonstruieren. Ein Spielfilm
aber darf und muß eine Geschichte erzählen, eine Geschichte allerdings,
die auf historischen Tatsachen beruht. Ein Dokumentarfilm muß
authentisch sein; seine Protagonisten sind reale Menschen. Ein Spielfilm
darf Figuren und Szenen erfinden.

Ein fiktionaler Film, auch ein historischer, _kann_ nicht authentisch
sein. Was er allerdings leisten kann, ist die größtmögliche Detailtreue
in der Darstellung der Ereignisse, in der Echtheit der Orte, der
Genauigkeit der Ausstattung, in der Zeittreue der Sprache, der Musik,
der Bilder. Das alles leistet Margarethe von Trottas Film. Für meinen
Film _Dawids Tagebuch_ konnte ich nur auf ein einziges kleinformatiges
Klassenfoto zurückgreifen, das Dawid verschwommen im Hintergrund zeigt.
Ein anderes Bild ist von dem Jungen nicht erhalten geblieben. Ich mußte
es dem Zuschauer überlassen, sich _sein_ Bild zu machen. Doch dabei
konnte ich dem Zuschauer behilflich sein: durch das Tagebuch des Jungen,
durch die Aussagen von Menschen, die ihn gekannt haben, durch die
Landschaft, in der er gelebt hat, durch Fotos, Filmaufnahmen und
Dokumente aus jener Zeit. Für den Spielfilm jedoch ist es völlig
legitim, daß er Menschen und ihre Gefühle, Gedanken und Handlungen
erfindet und durch Schauspieler darstellen läßt. Und je überzeugender
und mit unserer eigenen Erfahrung übereinstimmend die Charaktere sind,
desto glaubwürdiger ist der Film. Auch dies ist Margarehe von Trotta und
ihren Darstellern gelungen.

Im zeitgenössischen Filmschaffen ist allerdings ein verhängnisvoller
Trend zu beobachten: die Vermischung der Genres. Viele Filmemacher
vertrauen offenbar dem dokumentarischen Material nicht. Sie arbeiten mit
Inszenierung, mit nachgestellten Szenen, mit der Vermischung von
Zeitebenen, ohne dies für den Zuschauer eindeutig kenntlich zu machen.
In meinen Augen werden dadurch letztlich die Filmdokumente entwertet.
Filmdokumente, die doch in Wahrheit überaus kostbar sind. Denn sie
zeigen immer reale Menschen, Menschen, die wirklich gelebt haben und vor
der Kamera gelacht und gelitten haben, die etwas von sich preisgegeben
haben, und die oft genug auch vor laufender Kamera gestorben sind. Ich
habe bei meiner Filmarbeit vieler solcher Bilder gesehen und bearbeitet,
und ich war mir stets der Verantwortung bewußt, mit solchen Bildern
nicht leichfertig umzugehen oder gar formal zu spielen. Im übrigen ist
auch das Betrachten dieser Bilder, der Umgang mit ihnen im Kopf und am
Schneidetisch, eine überaus anstrengende, belastende, ja quälende
Arbeit. Viele dieser Aufnahmen verfolgten mich bis in meine Träume.

Man sollte den Film _Rosenstraße_ nicht als einen Film über Geschichte
sehen, schon gar nicht mit den Augen eines Historikers, sondern als
einen Film über Menschen und menschliche Schicksale in einer konkreten
historischen Situation. Als einen Film, der, ganz in der Tradition der
antiken Tragödie, Mitleid wecken und Mitgefühl erregen soll. Im Grunde
gilt auch für den historischen Spielfilm noch immer, was Aristoteles
über die griechische Tragödie schrieb: "Die Handlung wird nicht durch
bloßen Bericht erzählt, sondern von Menschen vorgeführt. Sie bewirkt
durch Mitleid und Furcht eine Katharsis, die läuternde Reinigung von
derartigen Gefühlen."[7]

So ist auch für den historischen Spielfilm das wichtigste, daß seine
Figuren und ihre Schicksale den Zuschauer ergreifen, daß sie für ihn in
ihren Gefühlen und Handlungen nachvollziehbar sind, auch dann, wenn
seine Lebensumstände ganz andere sind. Ein fiktionaler historischer Film
muß keine Geschichtsstunde ersetzen, aber er kann dem Zuschauer Menschen
in ihrem historischen Umfeld nahebringen und auf diesem Weg auch sein
Interesse für die tatsächlichen geschichtlichen Ereignisse wecken. Ein
beredtes Beispiel dafür war der Film _Holocaust_, ein Film, an dessen
Darstellungsweise und historischer Treue sicher manches zu bemängeln
ist. Und doch hat dieser Film etwas geschafft, was zahllose andere Filme
und Bücher und wissenschaftliche Arbeiten nicht vermocht haben--nämlich
in Deutschland eine umfassende Debatte über die Shoa, die
industrialisierte Judenvernichtung der deutschen Nationalsozialisten
auszulösen.

Ein anderes Beispiel in dieser Hinsicht ist das Theaterstück _Korczak
und die Kinder_[8] von Erwin Sylvanus. Erwin Sylvanus standen, als er
1956 mit dem Schreiben begann, nur wenige historisch belegte Fakten zur
Verfügung. Er übernahm auch eine Legende, die schon in Auschwitz unter
den jüdischen Häftlingen kursierte: Als Korczaks Waisenhaus deportiert
werden sollte, habe ein deutscher Soldat, der ein Kinderbuch Korczaks
gelesen hatte, ihm Rettung angeboten. Korczak aber habe abgelehnt und
ist mit den Kindern in die Gaskammer gegangen, wie die anderen Erzieher
und Erzieherinnen auch. Letzteres entspricht den historischen Fakten.
Aber daß ein deutscher Soldat ein Buch Korczaks gelesen haben soll, ist
mehr als unwahrscheinlich. Zwar war im Herbst 1935 tatsächlich ein
Kinderbuch Korczaks in deutscher Übersetzung[9] in einem kleinen
jüdischen Verlag erschienen, aber seit Frühjahr 1935 durften die Bücher
jüdischer Autoren nur im Judaica-Handel vertrieben werden, für
Nichtjuden waren sie verboten. Wie sollte es also ein nichtjüdischer
Deutscher Korczaks Buch gelesen haben?

Aber entscheidend ist doch, daß Korczak mit den Kindern ins Gas gegangen
ist, und es schmälert nichts von seinem Heldenmut und seiner
Menschlichkeit, wenn sich jenes Angebot eines deutschen Soldaten als
Legende erwiesen hat. Ich habe das Stück von Erwin Sylvanus Anfang der
sechziger Jahre in einer eindrucksvollen Inszenierung des Magdeburger
Theaters gesehen. Es war für mich--und für viele Deutsche--nicht nur die
erste, mich tief berührende Begegnung mit Korczak, sondern auch mit den
schrecklichen Geschehnissen im Warschauer Ghetto. Und das war das
wesentliche an Sylvanus' Stück, nicht das eine oder andere historische
Detail.

Im übrigen halte ich die Vorstellung, man könne die Geschichte eines
totalitären Staates umfassend und genau anhand von belegbaren Fakten
darstellen, für mehr als naiv. Ein Beispiel aus jüngerer Zeit ist der
Schießbefehl der DDR-Machthaber. Nach 1989 haben ganze Heerscharen von
Archivaren und Historikern nach einem entsprechenden Dokument gefahndet
und es nicht gefunden. Aber den Schießbefehl hat es gegeben. Die Toten
an der Mauer belegen es schrecklich genug. Und es gehört doch zum Wesen
eines diktatorischen Regimes, daß es die Geschichte klittert, Dokumente
fälscht und Fakten manipuliert. Andererseits ist auch vieles, was im
Widerstand gedacht, gesprochen und getan wurde, nicht dokumentarisch
belegt--weil jede Aufzeichnung eine Gefährdung gewesen wäre und die
Konspiration gewahrt werden mußte. Der Historiker wie der
Schriftsteller, der Filmemacher muß sich damit abfinden, daß er nie die
ganze Wahrheit über die Geschichte wissen wird. Das gilt auch für die
Widerstandsaktion der jüdischen Frauen in der Berliner Rosenstraße.


Notes

[1]. Heinz Knobloch, Herr Moses in Berlin. Auf den Spuren eines
Menschenfreundes. Berlin (DDR), Buchverlag Der Morgen, 1979. S.212f.

[2]. 1967/1970. Produktion: Deutsche Hochschule für Filmkunst /
Fernsehen der DDR. Buch und Regie: Konrad Weiß

[3] 1980. Produktion: DEFA Studio für Dokumentarfilme Berlin. Buch:
Walther Petri und Konrad Weiß. Regie: Konrad Weiß. – Siehe auch:
http://www.bln.de/k.weiss/tx_dawid.htm

[4] 1988. Produktion: DEFA Studio für Dokumentarfilme Berlin im Auftrag
des Fernsehens der DDR. Buch: Walther Petri und Konrad Weiß. Regie:
Konrad Weiß. – Siehe auch: http://www.bln.de/k.weiss/tx_korcz.htm

[5] vgl. Wolfgang Benz, "Kitsch as Kitsch can", Süddeutsche Zeitung,
18.09.2003

[6] Benz, a.a.O.

[7] Aristoteles, Poetik. Griechisch und deutsch, Leipzig, Verlag Philipp
Reclam jun., 1979, S.25

[8] Erwin Sylvanus, Korczak und die Kinder, Uraufführung 1957. – Eine
neuere Ausgabe s. Reinbek bei Hamburg, Rowohlt-Taschenbuchverlag, 1980.

[9] Janusz Korczak, Der Bankrott des kleinen Jack, Berlin, Verlag
Williams & Co., 1935. – Zur Rezeptionsgeschichte des Buches s.a.: Konrad
Weiß, Nach Deutschland durch die Hintertür? - in: Beiträge zur Kinder-
und Jugendliteratur, Berlin (DDR) 1988, Heft 87, S.23ff. und
Korczak-Bulletin, Jg.12 Heft 1 vom Mai 2003, S.12ff.`
                },
                {
                    title: `Harold Marcuse's Review on Rosenstrasse`,
                    isVisible: false,
                    text: `Date: July 29, 2004
Language: English 
Film Review 

Harold Marcuse reviews the historical accuracy and main points of the film, Rosentrassee. 

Wow. In commenting on the 4 reviews of von Trotta's film _Rosenstrasse_
I have to start by praising the H-German editors and consultants for
their selection of initial reviewers. This spectrum of opinions and
approaches gives us internet eavesdroppers the basis for a truly
insightful discussion.

Beate Meyer summarizes the case made by the critics of the film's
historical accuracy, namely that it overemphasizes the efficacy of the
Christian wives' non-violent disobedience, exaggerates their heroism,
and accords too much weight to the role of aristocrats. Antonia Leugers
presents detailed evidence that the Rosenstrasse protest was indeed
crucial in prompting the release of the arrested husbands.

Konrad Weiss and Frank Noack also address the question of historical
accuracy at length. Both argue that the benefits of introducing an event
into broader public consciousness, and of provoking debate about that
event, outweigh any false conceptions the film may implant. While Weiss
argues this issue more generally, Noack closely examines several
purported inaccuracies to demonstrate that the film is more accurate
than some critics claim.

These reviews underscored two main points for me. First, a feature film
is not a history book, and should not be held to the same standard of
accuracy and nuance. Second, historical accuracy is a moving target.
History is neither solely the story told by "official" documents, nor is
there ever only one "way that it actually was." Rather, there are
competing versions of reality perceived by the various actors and
observers as the events unfolded, as well as by later historians. Ask
any three historians why the Holocaust happened, or ask any three
friends why the US invaded Iraq, and you'll see what I mean.

The first point about the nature of the medium is probably the main one
I would have made in this review of reviews if Konrad Weiss hadn't made
it so competently and eloquently. As a historian and filmmaker, Weiss
knows firsthand that feature films operate under very different
constraints than historical portrayals. They rely on blunt visual
symbols to convey quickly absorbed information about complex people and
events. They must engage viewers on an emotional level, drawing on
emotionally laden preconceptions and maintaining our attention with a
narrative structure. As tools for teaching history they at best lay the
groundwork with a few facts and a general emotional valency, opening the
door to deeper historical learning and understanding. At worst they
create or reinforce incorrect preconceptions that are hard to
counteract. That brings us to the second point: how do we determine when
conceptions are incorrect?

I started my reading with Beate Meyer's review, which summarizes
critiques of historical accuracy that she, Wolf Gruner and Wolfgang Benz
have previously published. I had no reason to suspect their scholarship,
especially since I know them and respect the high quality of their work.
I merely felt their criticisms were rather beside the point, just as I
had when reading about historical inaccuracies in the TV miniseries
_Holocaust_, or in _Schindler's List_. Noack's review contributes a
wonderful anecdote about the relevance of accuracy from _Saving Private
Ryan_, where grain is shown ripe in mid-June. Clearly some inaccuracies
matter more than others. The question is, where should we draw the line?
Or, as Noack asks in part III of his review, "who decides which
inaccuracies matter and which don't?"

In the final analysis, this is a question of values. Noack offers us
rich detail about several presumptive inaccuracies, which we can use to
judge the issue of accuracy vs. artistic license. After arguing that
several alleged inaccuracies are actually accurate, Noack turns to the
fictitious sexual encounter between Lena and Goebbels. He argues that it
is not only historically inaccurate and unconvincing, but also that it
distracts viewers from thinking about more important questions. Still,
one could argue that the stereotype of powerful Nazis extracting sexual
favors rings true often enough, and few of us would dispute that many
popularly successful novels and films have an obligatory but irrelevant
sex scene.

Meyer argues that von Trotta's _Rosenstrasse_ implants three
anachronistic distortions of the event: 1) that non-violent civil
disobedience in the face of lethal threat was effective, 2) that
intermarried Christian wives were more stalwart than intermarried
Christian husbands, and 3) that aristocratic morality predisposed the
female lead to oppose the predations of the Nazi regime.

On the issue of noble lineage I tend to agree with Meyer that inasmuch
as the historical evidence suggests that working- and middle-class women
(and men) were more likely disobey the regime, then artistic license
probably doesn't justify choosing an aristocrat as the lead. I have long
been disturbed by the pervasive focus on the "von's" in the 20th July
plot. Von (sic) Trotta may have a personal bias in this regard, but one
could argue that she may also be boosting her film's appeal by drawing
on an existing popular preference for elite leadership. Still, my values
say this preconception should rather be debunked than reinforced.

I'd say Meyer's second issue, von Trotta's presumptive feminist bias
towards women's activism, is also a question of perspective. Gosh, how
much will it change our moral assessment of the group if we know that
not 7-10%, but as many as 20-25% of Christian wives divorced their
Jewish husbands? Doesn't the vastly unequal distribution of power
according to gender go a long way to explain why Christian wives were 4
to 9 times more likely than Christian husbands to divorce their Jewish
partner? How can we quibble about how fractionally or nominally Jewish
someone had to be before Gestapo interpretations of the law subjected
them to deportation, when we have ample evidence that local officials
often ignored such distinctions at will? Does it matter whether
non-Jewish spouses actually were deported if they refused to divorce,
when they had good reason to expect that they would be? Can we condemn
spouses for divorcing when that act meant certain deportation of their
partner, if they had little reason to think that remaining married would
change that outcome?

While rational people can disagree on such value judgments, Meyer's
first point about the efficacy of civil disobedience is a more
straightforward question of causality: Why were the deported men brought
back from Auschwitz, and why were the imprisoned men released?

Meyer claims, based on an RSHA telegram, that some of the deported
Jewish husbands were brought back from Auschwitz _because_ (her
emphasis) the RSHA was correcting the Berlin Gestapo's overeager
deportation of a legally still-protected subset of intermarried Jews. I
made the marginal note: "Trust of documents? What other reason
would/could they have given?" I think most scholars would agree that
such trans-legal overeagerness, "working towards the Fuehrer" as Ian
Kershaw has promoted the term (see _Hitler, 1889-1936_, 1998, xxix), was
a key element in the mechanics of mass murder in Nazi Germany. Why
should Meyer privilege the RSHA, notorious for its contempt of codified
law, in this case?

In Antonia Leugers' review I found a persuasive case made for the
opposite point of view. Leugers quotes from a report of an interrogation
of two men about information they had received from Catholic pro-Jewish
activist Gertrud Luckner. The interrogator noted that Luckner was
"precisely informed" about the Gestapo's "internal" plan to proceed
against previously excepted Jews, _if_ they had a criminal record. The
language in the Stapo summary report to the RSHA on Luckner implies that
the Gestapo had an "innerdienstliche" intention to "trotzdem" go beyond
that internal plan and "take measures" against even those ostensibly
protected intermarried Jews without criminal records. The "trotzdem" in
that quote is about as close to a smoking gun as one might wish for.

In order to understand why scholars of the caliber of Meyer, Gruner and
Benz are so adamant that the women's public protest had neither affected
nor effected the Gestapo's release and recall of the intermarried
Berliners, I followed the link on the H-German Rosenstrasse page to the
H-Soz-u-Kult report about the April 2004 Berlin conference. There I read
details of Gruner's argument, and Graml's explanation why Goebbels'
remarks in his diary aren't necessarily definitive proof. I also found
that Nathan Stoltzfus expressed the same skepticism of RSHA documents as
I do (and had already done so in his October 2003 _Die Zeit_ rebuttal of
Benz' critique).

Most notably, however, I found that Monica Kingreen thought that her
research on the deportations in Frankfurt supported the notion that the
RSHA, not protest from the populace, had forced the local Gestapo to
adhere to (internal) policy and stop arresting still "protected"
intermarried Jews. Indeed, she cites a May 21, 1943 RSHA directive
telling the Frankfurt Gestapo to leave non-criminal intermarried Jews
alone. Does that prove that the RSHA protected those Jewish men? The
real question is why the RSHA felt it necessary to curb Frankfurt's
activism. In this case the RSHA explained its directive by noting that
it had received "inquiries" about the Frankfurt arrests. Touché! For me
that is direct evidence that the RSHA was responsive to the (minimal)
pressure of a few spouses (or Church officials) willing to write
letters--at least _after_ the solidarity shown by intermarried women at
the Rosenstrasse.

Now we really need to ask why German historians so utterly beyond
reproach would stubbornly minimize the impact of public protest,
especially with the self-contradictory argument that the RSHA was
limiting anti-Jewish activities to "measures" that had not previously
aroused noteworthy protest.

Noack addresses this question. In part VI of his review he suggests that
verbal promoters of humanism feel threatened by apolitical practitioners
of humanistic deeds, especially when those practitioners were "normal,"
not extraordinarily situated people. He hypothesizes a desire to
categorize everyone neatly as perpetrators or victims, or as impotent
bystander-émigrés or unemulatable resistors. Such categorization avoids
the discomfort raised by "normal" bystanders who took action. I can't
say I find this explanation convincing, although I would grant that the
spontaneous group action in the Rosenstrasse apparently causes more
discomfort than the individual heroism of the White Rose or Schindler.

Instead, I would suggest that what I call a legacy of the "myth of
resistance" may be at work here. I define the myth of resistance as the
postwar claim by many Germans that, inasmuch as they knew about Nazi
crimes, and within the limits of acceptable risk, they had attempted to
resist the regime. The first legacy of this myth, which emerges in the
1960s among a generation Germans who came of age after about 1953, is
the vigorous and categorical rejection of all claims that there had been
meaningful popular resistance during the Nazi period. Even as research
since the 1970s has revealed many stunning examples of group and
individual opposition and resistance, there remains in Germany a
stubborn suspicion of any claims that there was effective resistance to
the Nazi regime. Postwar generations of Germans want to ensure that
their countryfolk do not complacently identify with feel-good resistance
against Nazism. While this is in general admirable, in this case I'd say
that their efforts are counterproductive. I see nothing wrong with
today's Germans realizing that bureaucracies require civic oversight, or
identifying with a tradition of non-violent civil disobedience,
especially when it involved reaching out to a powerless minority group.

And now I'm interested in hearing our film-critical German colleagues'
thoughts about why they seem so willing to stretch the evidence towards
minimizing the historical role of the women, and why they think that
purported inaccuracy will reinforce counterproductive stereotypes among
viewers.`
                },
                {
                    title: `Evelyn Wilcox's Review on Rosenstrasse`,
                    isVisible: false,
                    text: `Date: July 28, 2004
Language: English 
Historical Media Review 

Evelyn Wilcock summarizes the relevant literature in relation to the 
cinematic effects of the Rosentrassee film. 

Rosenstrasse - a response

When Margarethe von Trotta decided to make a film about the Rosenstrasse
demonstration, one wonders whether she anticipated the critical
barracking. Those of us who live in Jewish intermarried families or
research their treatment in the Third Reich could have predicted that,
no matter how faultless her work, any film about the heroism of
non-Jewish women married to Jews would arouse dissent and resentment.
Half a century after the end of Nazism, disparagement of the
intermarried is not just history but unfinished business. This essay
will consider the responses to von Trotta's _Rosenstrasse_, and argue
that her handling of the topic merits some respect for its tact and
even-handedness.

If von Trotta had chosen to make a historical film about the
Rosenstrasse demonstration set safely in the past, the result might well
have been the documentary imagined by historian Wolfgang Benz.[1]
Bigger budget films like _The Pianist_ or _Schindler's List_ have
certainly done better at re-creating the mistrust and panic of wartime
life on the margins of a Nazi dictatorship. But these were films about
Nazi persecution of Jews, a well defined victim group whose destruction
has been extensively documented. Not so the persecution of mixed
families; academic attention has been sparse and the Rosenstrasse
demonstration, if it has been known at all, has survived as a folk
memory rather than as a fully documented event.

Critics of the oral history have focussed on recent research which
effectively destroys the belief inspiring von Trotta's film, that a
week's protest by non-Jewish German wives played any part in securing
the release of their Jewish husbands. Wolf Gruner claims on the basis of
Gestapo documents that the Jews from mixed families who were taken from
their places of forced labor and incarcerated in the Rosenstrasse
building in February 1943 were not held as a prelude to deportation but
only in order to select individuals with Jewish connections to replace
deported Jews in positions of communal administration. Antonia Leugers
questions this re-interpretation, reminding historians that twenty five
Jews were initially sent from the Rosenstrasse to Auschwitz Monowitz,
the labor camp later chronicled by Primo Levi who was a prisoner there.
She cites in particular contemporary evidence from Margarete Sommer of
the Catholic Hilfswerk organization who was closely involved in the
support of  mixed couples in the Berlin diocese and was in no doubt that
deportation was only averted by the protest.[2] It seems difficult to
believe that there was no intention to deport the Jews held in the
Rosenstrasse in February 1943, or at least to hold them. But "difficult"
and "belief" are significant words. In academic terms the question must
remain open, since the documentation is inconclusive.

Historian Beate Meyer, author of an authoritative work on the
persecution of children of Jewish mixed marriage in Hamburg,[3] probably
knows more than anyone about the Byzantine application of Nazi law to
intermarried Jewish/non-Jewish families in Germany. Her analysis of the
film Rosenstrasse in the light of her own meticulous research cannot be
faulted. Not only does she pin point its historical oddities and explain
where its examples are atypical, but she correctly identifies the
post-war intellectual developments--civil disobedience, feminism and
idealization of German aristocracy--which shaped von Trotta and
retrospectively flavor her Rosenstrasse script. This is not the film a
historian of the subject might chose to make but one must concede that
von Trotta has done well enough with the scant information available to
her and has falsified nothing.

But von Trotta is in deeper water; in spite of its title, _Rosenstrasse_
is not a holocaust history so much as a film about the far more
problematic aftermath. On the Jewish side, women writers have already
produced notable books; one thinks of _Weiter Leben_ by the Austrian
Ruth Klüger[4] or Eva Hoffman's recent essay on Poland, _After Such
Knowledge; Memory, History and the Legacy of the Holocaust_.[5]  But for
many Germans this ground remains taboo.  It is too difficult and the gap
between German and Jewish understanding simply too wide.  Lifelong
campaigners against German anti-Semitism may well be concerned that, in
a situation where German self-respect is daily sustained by the
satisfying television coverage of Israeli (that is Jewish) misdoings in
the Middle East, by raising the question of Jewish hostility to
intermarriage, Von Trotta has trespassed on issues too delicate to be
left to the mass media or trusted in German hands.

Jewish religious law traditionally abhors mixing of any kind. The Nazi
propagandists in _Der Stürmer_ knew that, if the Nazis opposed
intermarriage, equally so did the orthodox Jews. The Nazis are gone, but
Jewish opposition to intermarriage remains right across the religious
spectrum.  Since 1945, Judaism in Germany has been dominated by the
orthodox. Jewish identity has been formulated only in terms of orthodox
matrilineal descent and the majority of Germans of mixed Jewish descent
have been rigorously excluded. Non-orthodox and secular Jewish
identities are dismissed as "imaginary" or insultingly regarded as a
psychological aberration. On the rare occasions where German writers
protest at Jewish rejection, their work may lack balance and portray
Judaism as inferior to Christianity. One might compare the _Jewish
Burial_[6] with the British treatment in Maggie O'Farrell's tragic
_After you'd gone_.[7] I am relieved that von Trotta has not dodged the
issue.

Perhaps feeling that attack is the best form of defense, Jewish
commentator Iris Noah accuses the film of anti-Semitism.[8]  Although as
a Jew I share some of her doubts about its portrayal of Judaism, I am
inclined to agree with Frank Noack that she is seeing prejudice where
none exists. Denouncing the film as racist may be a means of
discrediting von Trotta and avoiding her argument.

Iris Noah opens her discussion by ridiculing the film-makers' lack of
respect for Orthodox Judaism when the makers apparently approached the
Berlin Community at short notice for help with the film. It is a
familiar story and the breakdown in communication can never be blamed
entirely on one side. Most Germans know no Jews; their tentative
approaches to the Community--a community sadly too small to handle the
interest it arouses--are too often met with equal lack of understanding
and a brusqueness bordering on rejection. Noah assumes (and she may be
right) that it is through lack of Jewish knowledge that some details of
the mourning rituals which open the film  are  (apparently) as
unfamiliar to her in Berlin as they are to me in London. But Noah
remains silent on a more contentious matter, why von Trotta has chosen
to open her film about intermarried couples in the Third Reich with a
present day New York Jewish family sitting Shiva. To those familiar with
Jewish customs there is an immediate connection. Traditionally any child
of an orthodox Jew who married a non-Jew was treated as a child who had
died and the cutting of all contact was symbolized by their parents
sitting Shiva. Von Trotta could have given a more graphic portrayal of
Jewish rejection. Instead the Shiva for Ruth's husband serves as a
sub-text and the only words spoken are Ruth's to her horrified son, that
if Hannah marries her non-Jewish partner, she will no longer be Ruth's
daughter. The audience is assured from the start that this film about
Nazi objections to intermarriage will not exclude the Jewish.

Iris Noah claims that Rosenstrasse was cast in physical stereotypes. The
opposite is the case:  in both time frames, the 1940s and the present
day, von Trotta is at particular pains to not to differentiate between
Non-Jew and Jew. Ruth's Jewish New York cousin is blond and so is her
daughter in law, whereas Luis, Hannah's non-Jewish fiancé, is dark as is
Arthur von Eschenbach's "Aryan" wife.

Von Trotta also takes trouble to remove the distinction between German
and Jew.  Iris Noah asks how the "half-Jewish" child Ruth could identify
as German after seeing the difference between the way she was treated
during the Third Reich and the lives of her non-Jewish classmates who
suffered no such daily deprivations. The emigration and destruction of
the home-born German Jewish population has unfortunately perpetuated the
Nazi separation of Jew from German. Iris Noah appears unaware that,
notwithstanding Nazi legislation to the contrary, many German Jews,
including refugees rightly regarded themselves as fully German.  Adorno
like Ruth defined being German in terms of the language. The current
Jewish Community in Germany includes many foreign-born Jews, many
originating in the Soviet Union where Jews were allocated a separate
nationality. But Iris Noah is wrong to suggest that this is or ought to
be the case.  In Western Europe and the USA,   Jews identify their
nationality as that of the countries where they live, and this would
apply particularly to Jews in mixed families many of whom lack orthodox
descent credentials and are not acceptable as Jews in Israel.

I shared Noah's irritation at the weird portrayal of mourning rituals.
An orthodox friend confirmed that he had never once been asked to remove
his shoes at a Shiva (it is a mourning ritual usually performed only by
the most immediate relatives of the deceased), but he pointed out that
Jewish practice is determined not only by religious law but by the folk
customs of each community. Although I have never removed my shoes at a
Shiva, I was asked to remove my shoes at the door as a house-guest in
Germany last Spring.  Many non-Jewish Germans do ask guests to remove
their shoes before entering their home.  Who knows what is Jewish and
what is German in this survivor's family? Ruth has somewhat improbably
brought her children up speaking German.

When I watch the film, this is what I see. A Jewish German girl from New
York begins to ask questions about her mother's history which has
previously been suppressed.  She comes back to Germany to find the woman
who rescued her mother and this is what the film is about, to the
exclusion of all else. Because it is a fiction there are many
improbabilities both visual and linguistic. It is unlikely that the
American heroine Hannah speaks fluent German and that for much of her
visit she wears a spotless white coat, but even more unlikely is it that
a German film director might decide to take this for her topic.

During this visit the survivor's child meets (it seems) only one German,
the Good German, Lena Fischer, who rescued her mother. Lena Fischer is
the "good" German in every sense. She is of noble birth, and is a woman
artist (as is von Trotta), Lena is anti-racist: we see her and her
brother dance in a nightclub entertained by an Afro-American singer
reminding us that Josephine Baker toured in Weimar Germany and Germans
relished black jazz. Lena marries a Jew, a fellow musician. His
profession, though irritating, is significant. Modern opponents of
intermarriage emphasize the importance of preserving cultures, culture
standing in as a synonym for race. Lena and Fabian, non- Jew and Jew,
have classical music as their common heritage. The folkloric celebration
at Hannah's wedding celebration demonstrates that the recently
popularized East European version of Jewish culture is not exclusively
for Jews.

I would suggest that the film's departures from historical reality arise
from the need to present its argument. Beate Meyer and Nathan Stoltzfus
have both rightly pointed out that non-Jewish women who married Jews
were often from modest backgrounds: trades people and shopkeepers.
Moreover, professional musicians such as Lena and her husband, being
barred from work in Germany, were likely to have emigrated. But the film
requires a Baron's family with its weight of German historical
significance to serve as the equivalent of the Jewish family whose
responsibility it is to transmit to its children an inheritance reaching
back for thousands of years. The (half) Jewish mother Ruth who opposes
her daughter's marriage to a non-Jew is neither better nor worse than
the Baron who cast off his daughter Lena on her marriage to a Jew. Von
Trotta grasps this nettle and makes it her subject. The New York Jewish
heroine is in love with a non Jewish South American and she must decide
whether or not to marry the non-Jewish fiancé rejected by her Jewish
mother.

The happiness of Lena and her husband must be balanced by the mixed
marriage of Ruth's mother who was divorced by her non-Jewish husband.
Statistics seem to show that intermarriage presents a higher risk of
divorce. But 1930s Germany mixed couples where the wife was the Jewish
partner were a minority, and only a minority of the non-Jewish men
divorced their Jewish wives. Beate Meyer questions whether that divorce
would have left Ruth's mother and possibly Ruth herself liable for
deportation. Their identification with the Jewish community is not in
question; some children of mixed marriage were enrolled in Jewish
schools and Ruth's mother might have needed to take Jewish employment..
Von Trotta provides no details but individual stories suggest that the
scenario is a reasonable one, though less common within Germany than for
mixed families who were trapped as refugees in some occupied countries.
The Nazis were not punctilious when it came to applying the fine letter
of the law and Jews of mixed descent do not feature as a separate
category in statistical analysis of victims. Ruth's mother must die so
that von Trotta can make it clear that the Rosenstrasse demonstration
saved at best only a few Jews, while the majority perished.

Since 1994 German holocaust literature has notably portrayed the German
people themselves as the victims of Hitler.  During the visit to Berlin
the Jewish American Hannah discovers that her maternal grandfather was a
non-Jewish German not a Good German but an ordinary German who abandoned
his Jewish wife by divorcing her. She does not go off in search of him.
By divorcing his Jewish wife, Ruth's father would have qualified himself
to remain in the army and might well have died among the thousands on
the Eastern Front. Trotta excises any historical detail which might
shift the attention from the persecution of the Jews.

Even the persecution of intermarried couples and of Lena herself is
understated.  But it is not fair to accuse von Trotta of idealizing the
German resistance. When Lena rescued a Jewish child "just like that" she
behaved true to type; a significant number of people who helped
persecuted Jews in the Second World War had family ties to Jews or were
themselves of distant part-Jewish descent. Ruth's own rescue and
survival usefully demonstrate the extent to which Jewish survival relied
on non-Jewish contacts.

Von Trotta's film wavers. Many writers on race, and one might include
Gilroy and Edward Said, as well as Salman Rushdie, rightly claim that
hybridity is a reality of modern life, elevating it to the keystone of
modernity. But in relishing and asserting the value of multiple
heritage, there is an equal danger that anti-racists with von Trotta
among them might suggest that hybridity is superior to what one may
loosely call an "unmixed" descent. The supporters of mixed marriage in
this film represent the good, the motivation of those who oppose it
remains in doubt.

This film therefore needs to be compared with other films about mixed
marriage including _My Big Fat Greek Wedding_,[9] or from a Jewish
perspective the tragic _Solomon and Gaenor_,[10] and films opposing
Jewish mixed marriage such as _Crossing Delancey_.[11]  It has to stand
comparison with that controversial masterpiece of Holocaust film, the
Italian _Life is Beautiful_,[12] which also focuses on a mixed
Jewish/non-Jewish couple. One regrets that _Rosenstrasse_ lacks depth of
characterization and is so low-brow in its aspirations but the film was
worth making.  It is an honorable attempt to communicate to a wider
audience that, as Stoltzfus concluded in his academic study of the
Rosenstrasse Demonstration,[13] even under Nazism, intimate family
relationships proved stronger than social coercion.

There are not many films dealing so sympathetically with couples in a
mixed relationship, nor having the courage to take Nazi racist attitudes
out of their time frame and question their persistence in the here and
now. The lesson of the Rosenstrasse demonstration, as relayed to Hannah
in the film is that personal loyalties and relationships between
ordinary people can be stronger and confer more worth on individuals
than loyalty to a people or a family, even a family with a proud and
long history. Hannah returns from her exploration of the Holocaust to
marry Luis her fiancé.

Hannah also brings back from Berlin her grandmother's ring, a ring which
she says can make wishes come true. Are we to understand that the ending
itself is wishful thinking? The Jewish style wedding with which
_Rosenstrasse_ concludes would probably not be likely in Britain or
would not be easy. Hannah's tram ride does not expose her to racist
remarks about Turks, Russian Jews or other immigrants to Berlin.
Rosenstrasse ignores the nationalism and fundamentalism in modern
Europe. Those of us who are Jews in mixed families are an insignificant
number and hardly representative.  But the women who demonstrated in
Rosenstrasse were similarly few in number and representative of nothing
but themselves. If this is von Trotta's message, she may rest her case.


Evelyn Wilcock, Institute of Germanic Studies, London


Notes

[1].  Wolfgang Benz, 'Kitsch as Kitsch can', Süddeutsche Zeitung, 18
Sept. 2003 on website http://www.sueddeutsche.de/kultur/artikel/167/18149.

[2]  Antonia Leugers, 'Die "laut erhobene Proteste" in der Rosenstraße
1943', h-German website response and providing full references for
research by Wolf Gruner and the ensuing discussion.

[3].  Beate Meyer, 'Geschichte im Film - Judenverfolgung, Mischehen und
der Protest in der Rosenstraße 1943', h-German website response.

[4].  Ruth Klüger, Weiter leben; eine Jugend, Göttingen: Wallenstein
Verlag, (1992). English language edition  (addressed to an American
rather than a German speaking audience and thus omitting some pertinent
observations) Ruth Kluger [sic], Landscapes of memory, a Holocaust
Girlhood remembered, New York: The Feminist Press (2001) London
Bloomsbury publishers, (2003)

[5].  Eva Hoffman. After Such Knowledge: Memory, History and the Legacy
of the Holocaust, London: Secker and Warburg, USA: Public Affairs (2004)

[6].  Lothar Schöne,  Das jüdische Begräbnis, Köln: Kiepenhauer & Witsch
(1996)

[7].  O'Farrell, Maggie. After you'd gone, London: Review (Hodder
Headline Publishing) (2000)

[8].  Iris Noah, 'What do they tell about us -Was sagen die über uns?'
Teil 5:' Im Kino- Rosenstrasse' [Web Page]. Available at:
http://hagalil.org/s1/judentum-net/what-do-they-tell/rosenstrasse.htm.

[9].  My Big Fat Greek Wedding, Nia Vardalos, script, Joel Zwick,
director (2002)

[10].  Solomon and Gaenor, S4C and Filmfour Arts Council of England and
Arts Council of Wales, Sheryl Crown producer; Paul Morrison, director
(1998)

[11].  Crossing Delancey, Dan Leigh, producer; Michael Nozik, director
(1988)

[12].  La Vita è Bella, Roberto Benigni, director (1997). Script
published in Roberto Benigni and Vincenzo Cerami, La Vita è Bella,
Turin:Giulio Einaudi editore (1998) and in German as Das Leben ist
Schön, Frankfurt am Main: Suhrkamp (1998)

[13].  Nathan  Stoltzfus, Resistance of the Heart: Intermarriage and the
Rosenstrasse Protest in Nazi Germany. London and New York: W.W. Norton &
Co (1996)`
                },
            ],
            historicalMediaReviews: [
                {
                    title: `Evelyn Wilcock summarizes the relevant literature in relation to the cinematic effects of the Rosentrassee film`,
                    isVisible: false,
                    text: `Date: July 28, 2004
Language: English 
Historical Media Review 

Evelyn Wilcock summarizes the relevant literature in relation to the 
cinematic effects of the Rosentrassee film. 

Rosenstrasse - a response

When Margarethe von Trotta decided to make a film about the Rosenstrasse
demonstration, one wonders whether she anticipated the critical
barracking. Those of us who live in Jewish intermarried families or
research their treatment in the Third Reich could have predicted that,
no matter how faultless her work, any film about the heroism of
non-Jewish women married to Jews would arouse dissent and resentment.
Half a century after the end of Nazism, disparagement of the
intermarried is not just history but unfinished business. This essay
will consider the responses to von Trotta's _Rosenstrasse_, and argue
that her handling of the topic merits some respect for its tact and
even-handedness.

If von Trotta had chosen to make a historical film about the
Rosenstrasse demonstration set safely in the past, the result might well
have been the documentary imagined by historian Wolfgang Benz.[1]
Bigger budget films like _The Pianist_ or _Schindler's List_ have
certainly done better at re-creating the mistrust and panic of wartime
life on the margins of a Nazi dictatorship. But these were films about
Nazi persecution of Jews, a well defined victim group whose destruction
has been extensively documented. Not so the persecution of mixed
families; academic attention has been sparse and the Rosenstrasse
demonstration, if it has been known at all, has survived as a folk
memory rather than as a fully documented event.

Critics of the oral history have focussed on recent research which
effectively destroys the belief inspiring von Trotta's film, that a
week's protest by non-Jewish German wives played any part in securing
the release of their Jewish husbands. Wolf Gruner claims on the basis of
Gestapo documents that the Jews from mixed families who were taken from
their places of forced labor and incarcerated in the Rosenstrasse
building in February 1943 were not held as a prelude to deportation but
only in order to select individuals with Jewish connections to replace
deported Jews in positions of communal administration. Antonia Leugers
questions this re-interpretation, reminding historians that twenty five
Jews were initially sent from the Rosenstrasse to Auschwitz Monowitz,
the labor camp later chronicled by Primo Levi who was a prisoner there.
She cites in particular contemporary evidence from Margarete Sommer of
the Catholic Hilfswerk organization who was closely involved in the
support of  mixed couples in the Berlin diocese and was in no doubt that
deportation was only averted by the protest.[2] It seems difficult to
believe that there was no intention to deport the Jews held in the
Rosenstrasse in February 1943, or at least to hold them. But "difficult"
and "belief" are significant words. In academic terms the question must
remain open, since the documentation is inconclusive.

Historian Beate Meyer, author of an authoritative work on the
persecution of children of Jewish mixed marriage in Hamburg,[3] probably
knows more than anyone about the Byzantine application of Nazi law to
intermarried Jewish/non-Jewish families in Germany. Her analysis of the
film Rosenstrasse in the light of her own meticulous research cannot be
faulted. Not only does she pin point its historical oddities and explain
where its examples are atypical, but she correctly identifies the
post-war intellectual developments--civil disobedience, feminism and
idealization of German aristocracy--which shaped von Trotta and
retrospectively flavor her Rosenstrasse script. This is not the film a
historian of the subject might chose to make but one must concede that
von Trotta has done well enough with the scant information available to
her and has falsified nothing.

But von Trotta is in deeper water; in spite of its title, _Rosenstrasse_
is not a holocaust history so much as a film about the far more
problematic aftermath. On the Jewish side, women writers have already
produced notable books; one thinks of _Weiter Leben_ by the Austrian
Ruth Klüger[4] or Eva Hoffman's recent essay on Poland, _After Such
Knowledge; Memory, History and the Legacy of the Holocaust_.[5]  But for
many Germans this ground remains taboo.  It is too difficult and the gap
between German and Jewish understanding simply too wide.  Lifelong
campaigners against German anti-Semitism may well be concerned that, in
a situation where German self-respect is daily sustained by the
satisfying television coverage of Israeli (that is Jewish) misdoings in
the Middle East, by raising the question of Jewish hostility to
intermarriage, Von Trotta has trespassed on issues too delicate to be
left to the mass media or trusted in German hands.

Jewish religious law traditionally abhors mixing of any kind. The Nazi
propagandists in _Der Stürmer_ knew that, if the Nazis opposed
intermarriage, equally so did the orthodox Jews. The Nazis are gone, but
Jewish opposition to intermarriage remains right across the religious
spectrum.  Since 1945, Judaism in Germany has been dominated by the
orthodox. Jewish identity has been formulated only in terms of orthodox
matrilineal descent and the majority of Germans of mixed Jewish descent
have been rigorously excluded. Non-orthodox and secular Jewish
identities are dismissed as "imaginary" or insultingly regarded as a
psychological aberration. On the rare occasions where German writers
protest at Jewish rejection, their work may lack balance and portray
Judaism as inferior to Christianity. One might compare the _Jewish
Burial_[6] with the British treatment in Maggie O'Farrell's tragic
_After you'd gone_.[7] I am relieved that von Trotta has not dodged the
issue.

Perhaps feeling that attack is the best form of defense, Jewish
commentator Iris Noah accuses the film of anti-Semitism.[8]  Although as
a Jew I share some of her doubts about its portrayal of Judaism, I am
inclined to agree with Frank Noack that she is seeing prejudice where
none exists. Denouncing the film as racist may be a means of
discrediting von Trotta and avoiding her argument.

Iris Noah opens her discussion by ridiculing the film-makers' lack of
respect for Orthodox Judaism when the makers apparently approached the
Berlin Community at short notice for help with the film. It is a
familiar story and the breakdown in communication can never be blamed
entirely on one side. Most Germans know no Jews; their tentative
approaches to the Community--a community sadly too small to handle the
interest it arouses--are too often met with equal lack of understanding
and a brusqueness bordering on rejection. Noah assumes (and she may be
right) that it is through lack of Jewish knowledge that some details of
the mourning rituals which open the film  are  (apparently) as
unfamiliar to her in Berlin as they are to me in London. But Noah
remains silent on a more contentious matter, why von Trotta has chosen
to open her film about intermarried couples in the Third Reich with a
present day New York Jewish family sitting Shiva. To those familiar with
Jewish customs there is an immediate connection. Traditionally any child
of an orthodox Jew who married a non-Jew was treated as a child who had
died and the cutting of all contact was symbolized by their parents
sitting Shiva. Von Trotta could have given a more graphic portrayal of
Jewish rejection. Instead the Shiva for Ruth's husband serves as a
sub-text and the only words spoken are Ruth's to her horrified son, that
if Hannah marries her non-Jewish partner, she will no longer be Ruth's
daughter. The audience is assured from the start that this film about
Nazi objections to intermarriage will not exclude the Jewish.

Iris Noah claims that Rosenstrasse was cast in physical stereotypes. The
opposite is the case:  in both time frames, the 1940s and the present
day, von Trotta is at particular pains to not to differentiate between
Non-Jew and Jew. Ruth's Jewish New York cousin is blond and so is her
daughter in law, whereas Luis, Hannah's non-Jewish fiancé, is dark as is
Arthur von Eschenbach's "Aryan" wife.

Von Trotta also takes trouble to remove the distinction between German
and Jew.  Iris Noah asks how the "half-Jewish" child Ruth could identify
as German after seeing the difference between the way she was treated
during the Third Reich and the lives of her non-Jewish classmates who
suffered no such daily deprivations. The emigration and destruction of
the home-born German Jewish population has unfortunately perpetuated the
Nazi separation of Jew from German. Iris Noah appears unaware that,
notwithstanding Nazi legislation to the contrary, many German Jews,
including refugees rightly regarded themselves as fully German.  Adorno
like Ruth defined being German in terms of the language. The current
Jewish Community in Germany includes many foreign-born Jews, many
originating in the Soviet Union where Jews were allocated a separate
nationality. But Iris Noah is wrong to suggest that this is or ought to
be the case.  In Western Europe and the USA,   Jews identify their
nationality as that of the countries where they live, and this would
apply particularly to Jews in mixed families many of whom lack orthodox
descent credentials and are not acceptable as Jews in Israel.

I shared Noah's irritation at the weird portrayal of mourning rituals.
An orthodox friend confirmed that he had never once been asked to remove
his shoes at a Shiva (it is a mourning ritual usually performed only by
the most immediate relatives of the deceased), but he pointed out that
Jewish practice is determined not only by religious law but by the folk
customs of each community. Although I have never removed my shoes at a
Shiva, I was asked to remove my shoes at the door as a house-guest in
Germany last Spring.  Many non-Jewish Germans do ask guests to remove
their shoes before entering their home.  Who knows what is Jewish and
what is German in this survivor's family? Ruth has somewhat improbably
brought her children up speaking German.

When I watch the film, this is what I see. A Jewish German girl from New
York begins to ask questions about her mother's history which has
previously been suppressed.  She comes back to Germany to find the woman
who rescued her mother and this is what the film is about, to the
exclusion of all else. Because it is a fiction there are many
improbabilities both visual and linguistic. It is unlikely that the
American heroine Hannah speaks fluent German and that for much of her
visit she wears a spotless white coat, but even more unlikely is it that
a German film director might decide to take this for her topic.

During this visit the survivor's child meets (it seems) only one German,
the Good German, Lena Fischer, who rescued her mother. Lena Fischer is
the "good" German in every sense. She is of noble birth, and is a woman
artist (as is von Trotta), Lena is anti-racist: we see her and her
brother dance in a nightclub entertained by an Afro-American singer
reminding us that Josephine Baker toured in Weimar Germany and Germans
relished black jazz. Lena marries a Jew, a fellow musician. His
profession, though irritating, is significant. Modern opponents of
intermarriage emphasize the importance of preserving cultures, culture
standing in as a synonym for race. Lena and Fabian, non- Jew and Jew,
have classical music as their common heritage. The folkloric celebration
at Hannah's wedding celebration demonstrates that the recently
popularized East European version of Jewish culture is not exclusively
for Jews.

I would suggest that the film's departures from historical reality arise
from the need to present its argument. Beate Meyer and Nathan Stoltzfus
have both rightly pointed out that non-Jewish women who married Jews
were often from modest backgrounds: trades people and shopkeepers.
Moreover, professional musicians such as Lena and her husband, being
barred from work in Germany, were likely to have emigrated. But the film
requires a Baron's family with its weight of German historical
significance to serve as the equivalent of the Jewish family whose
responsibility it is to transmit to its children an inheritance reaching
back for thousands of years. The (half) Jewish mother Ruth who opposes
her daughter's marriage to a non-Jew is neither better nor worse than
the Baron who cast off his daughter Lena on her marriage to a Jew. Von
Trotta grasps this nettle and makes it her subject. The New York Jewish
heroine is in love with a non Jewish South American and she must decide
whether or not to marry the non-Jewish fiancé rejected by her Jewish
mother.

The happiness of Lena and her husband must be balanced by the mixed
marriage of Ruth's mother who was divorced by her non-Jewish husband.
Statistics seem to show that intermarriage presents a higher risk of
divorce. But 1930s Germany mixed couples where the wife was the Jewish
partner were a minority, and only a minority of the non-Jewish men
divorced their Jewish wives. Beate Meyer questions whether that divorce
would have left Ruth's mother and possibly Ruth herself liable for
deportation. Their identification with the Jewish community is not in
question; some children of mixed marriage were enrolled in Jewish
schools and Ruth's mother might have needed to take Jewish employment..
Von Trotta provides no details but individual stories suggest that the
scenario is a reasonable one, though less common within Germany than for
mixed families who were trapped as refugees in some occupied countries.
The Nazis were not punctilious when it came to applying the fine letter
of the law and Jews of mixed descent do not feature as a separate
category in statistical analysis of victims. Ruth's mother must die so
that von Trotta can make it clear that the Rosenstrasse demonstration
saved at best only a few Jews, while the majority perished.

Since 1994 German holocaust literature has notably portrayed the German
people themselves as the victims of Hitler.  During the visit to Berlin
the Jewish American Hannah discovers that her maternal grandfather was a
non-Jewish German not a Good German but an ordinary German who abandoned
his Jewish wife by divorcing her. She does not go off in search of him.
By divorcing his Jewish wife, Ruth's father would have qualified himself
to remain in the army and might well have died among the thousands on
the Eastern Front. Trotta excises any historical detail which might
shift the attention from the persecution of the Jews.

Even the persecution of intermarried couples and of Lena herself is
understated.  But it is not fair to accuse von Trotta of idealizing the
German resistance. When Lena rescued a Jewish child "just like that" she
behaved true to type; a significant number of people who helped
persecuted Jews in the Second World War had family ties to Jews or were
themselves of distant part-Jewish descent. Ruth's own rescue and
survival usefully demonstrate the extent to which Jewish survival relied
on non-Jewish contacts.

Von Trotta's film wavers. Many writers on race, and one might include
Gilroy and Edward Said, as well as Salman Rushdie, rightly claim that
hybridity is a reality of modern life, elevating it to the keystone of
modernity. But in relishing and asserting the value of multiple
heritage, there is an equal danger that anti-racists with von Trotta
among them might suggest that hybridity is superior to what one may
loosely call an "unmixed" descent. The supporters of mixed marriage in
this film represent the good, the motivation of those who oppose it
remains in doubt.

This film therefore needs to be compared with other films about mixed
marriage including _My Big Fat Greek Wedding_,[9] or from a Jewish
perspective the tragic _Solomon and Gaenor_,[10] and films opposing
Jewish mixed marriage such as _Crossing Delancey_.[11]  It has to stand
comparison with that controversial masterpiece of Holocaust film, the
Italian _Life is Beautiful_,[12] which also focuses on a mixed
Jewish/non-Jewish couple. One regrets that _Rosenstrasse_ lacks depth of
characterization and is so low-brow in its aspirations but the film was
worth making.  It is an honorable attempt to communicate to a wider
audience that, as Stoltzfus concluded in his academic study of the
Rosenstrasse Demonstration,[13] even under Nazism, intimate family
relationships proved stronger than social coercion.

There are not many films dealing so sympathetically with couples in a
mixed relationship, nor having the courage to take Nazi racist attitudes
out of their time frame and question their persistence in the here and
now. The lesson of the Rosenstrasse demonstration, as relayed to Hannah
in the film is that personal loyalties and relationships between
ordinary people can be stronger and confer more worth on individuals
than loyalty to a people or a family, even a family with a proud and
long history. Hannah returns from her exploration of the Holocaust to
marry Luis her fiancé.

Hannah also brings back from Berlin her grandmother's ring, a ring which
she says can make wishes come true. Are we to understand that the ending
itself is wishful thinking? The Jewish style wedding with which
_Rosenstrasse_ concludes would probably not be likely in Britain or
would not be easy. Hannah's tram ride does not expose her to racist
remarks about Turks, Russian Jews or other immigrants to Berlin.
Rosenstrasse ignores the nationalism and fundamentalism in modern
Europe. Those of us who are Jews in mixed families are an insignificant
number and hardly representative.  But the women who demonstrated in
Rosenstrasse were similarly few in number and representative of nothing
but themselves. If this is von Trotta's message, she may rest her case.


Evelyn Wilcock, Institute of Germanic Studies, London


Notes

[1].  Wolfgang Benz, 'Kitsch as Kitsch can', Süddeutsche Zeitung, 18
Sept. 2003 on website http://www.sueddeutsche.de/kultur/artikel/167/18149.

[2]  Antonia Leugers, 'Die "laut erhobene Proteste" in der Rosenstraße
1943', h-German website response and providing full references for
research by Wolf Gruner and the ensuing discussion.

[3].  Beate Meyer, 'Geschichte im Film - Judenverfolgung, Mischehen und
der Protest in der Rosenstraße 1943', h-German website response.

[4].  Ruth Klüger, Weiter leben; eine Jugend, Göttingen: Wallenstein
Verlag, (1992). English language edition  (addressed to an American
rather than a German speaking audience and thus omitting some pertinent
observations) Ruth Kluger [sic], Landscapes of memory, a Holocaust
Girlhood remembered, New York: The Feminist Press (2001) London
Bloomsbury publishers, (2003)

[5].  Eva Hoffman. After Such Knowledge: Memory, History and the Legacy
of the Holocaust, London: Secker and Warburg, USA: Public Affairs (2004)

[6].  Lothar Schöne,  Das jüdische Begräbnis, Köln: Kiepenhauer & Witsch
(1996)

[7].  O'Farrell, Maggie. After you'd gone, London: Review (Hodder
Headline Publishing) (2000)

[8].  Iris Noah, 'What do they tell about us -Was sagen die über uns?'
Teil 5:' Im Kino- Rosenstrasse' [Web Page]. Available at:
http://hagalil.org/s1/judentum-net/what-do-they-tell/rosenstrasse.htm.

[9].  My Big Fat Greek Wedding, Nia Vardalos, script, Joel Zwick,
director (2002)

[10].  Solomon and Gaenor, S4C and Filmfour Arts Council of England and
Arts Council of Wales, Sheryl Crown producer; Paul Morrison, director
(1998)

[11].  Crossing Delancey, Dan Leigh, producer; Michael Nozik, director
(1988)

[12].  La Vita è Bella, Roberto Benigni, director (1997). Script
published in Roberto Benigni and Vincenzo Cerami, La Vita è Bella,
Turin:Giulio Einaudi editore (1998) and in German as Das Leben ist
Schön, Frankfurt am Main: Suhrkamp (1998)

[13].  Nathan  Stoltzfus, Resistance of the Heart: Intermarriage and the
Rosenstrasse Protest in Nazi Germany. London and New York: W.W. Norton &
Co (1996)`
                },
                {
                    title: `Antonia Leugers’ research review written in German on the “loud protests” of the Rosentrassee Protests in 1943 `,
                    isVisible: false,
                    text: `Date: July 27, 2004
Language: German 
Research Review 

Antonia Leugers’ research review written in German on the “loud protests” 
of the Rosentrassee Protests in 1943.

Mit der dezidierten Feststellung, "daß die im Februar und März dieses
Jahres [1943] bereits zu Tausenden aus ihrer Familie herausgerissenen
nichtarischen Ehegatten aus Mischehen auf die [...] aus den
verschiedensten Kreisen der Bevölkerung laut erhobenen Proteste hin
wieder aus den Sammellagern entlassen worden sind", hätte man zwar die
zentrale Aussage des Spielfilms "Rosenstraße" von Margarethe von Trotta
getroffen, dürfte damit aber in einer historischen Seminararbeit bei
Beate Meyer wohl kaum reüssieren können. Meyer bewertet den Film nämlich
als historisch nicht korrekt.[1] Sie vertritt die Gegenposition, die
Protestierenden hätten irrtümlich angenommen, die Ehepartner sollten
deportiert werden. Tatsächlich sollten sie, darin folgt Meyer Wolf
Gruner,[2] nur registriert werden. Einige hundert Personen sollten zudem
als geeignete Ersatzkräfte für die später zu deportierenden Angestellten
der noch existierenden jüdischen Einrichtungen in Berlin ausgewählt
werden. Ein öffentlicher Protest hätte im übrigen die damaligen
Machthaber, selbst wenn sie die Ehegatten hätten deportieren wollen, von
ihren Vorhaben nicht abhalten können.

Eine unerfahrene Studierende - von dieser Argumentation sicherlich
beeindruckt - würde ihren Text ändern. Da das obige Zitat[3] aber nicht
einer Seminararbeit des Jahres 2004 entnommen wurde, sondern im August
1943 von der ausgezeichnet unterrichteten Dr. Margarete Sommer in Berlin
formuliert worden ist, werden die unveränderlichen Originalquellen zur
kritischen Instanz, an der die Ergebnisse der Historiker zu messen sind.
Der von Meyer und Gruner vorschnell als geklärt angesehenen Debatte[4]
zum Rosenstraßenprotest dürfte eine breitere Basis förderlich sein. Noch
immer sind aufschlußreiche Quellen, auf die ich im folgenden eingehen
möchte, in ihrer Bedeutung für die historische Urteilsbildung
hinsichtlich der Ereignisse in der Rosenstraße weitgehend
unberücksichtigt geblieben.[5] Daß aufgrund dieser Quellen Meyers und
Gruners These kritisch hinterfragt werden muß und deshalb der
Interpretation Trottas, die sich auf Nathan Stoltzfus stützt,[6] eine
begründete Chance einzuräumen bleibt, sei schon vorweg verraten.
Margarete Sommers Aussagen über die Ereignisse in der Rosenstraße sind
von nicht zu unterschätzendem Gewicht, da sie sich professionell für die
vom nationalsozialistischen Regime als sogenannte "katholische
Nichtarier", als "Mischlinge" und "Mischehepartner" diskriminierten,
entrechteten und verfolgten Menschen einsetzte.[7] Sie leitete seit 1941
das für diese Personengruppe eingerichtete "Hilfswerk beim Bischöflichen
Ordinariat Berlin", das ab 1939 in der Schönhauser Allee 182 auf dem
Gelände der Herz-Jesu-Gemeinde untergebracht war - in Fußwegentfernung
zur Rosenstraße. Wenn Sommer also im August 1943 rückblickend die "aus
den verschiedensten Kreisen der Bevölkerung laut erhobenen Proteste" als
Ursache für die Entlassung der dort gefangenen "Mischehepartner"
wertete, so beruhte dies auf gezielter Beobachtung und besten
Informationen über die Geschehnisse. Das widerspricht der These Gruners,
auch in Berlin sei man gemäß der Verordnung des
Reichssicherheitshauptamts (RSHA) vom 20. Februar 1943[8] bzw. analog
zum Erlaß der Geheimen Staatspolizei (Gestapo) Frankfurt/Oder vom 24.
Februar 1943[9] verfahren, wonach die "Mischehepartner" von der
allgemein verfügten Deportation der "Volljuden" im Zuge der
"Schlußaktion" ausgenommen blieben, sie lediglich registriert und  - in
Berlin - für bestimmte Einsatzfelder ausgewählt werden sollten.
Interessant in diesem Zusammenhang ist es, daß auch Margarete Sommer
zunächst im Februar 1943 davon ausging, die "Mischehen" seien
"geschützt". Der Umschwung, den sie bei der Einschätzung der Lage
vollzog, dürfte daher symptomatisch für den unvorhergesehen gewaltsamen
Übergriff der NS-Seite in Berlin sein - oder wie es Hans Günther Adler
im Anschluß an die zuvor von ihm referierten RSHA-Richtlinien vom 20.
Februar 1943 nannte, in Berlin "erfolgte ein Vorstoß".[10]
Sommer zählt zu jenen wenigen Personen, die sich über das Ziel der
NS-"Judenpolitik" keinen Illusionen hingab. Ihre Informationskanäle
erlaubten ihr einen erschreckenden Einblick in die Vorhaben der
Gegenseite: "die Vorbereitung der Endlösung der europäischen
Judenfrage".[11] Wie erst kürzlich aufgetauchte Dokumente belegen, wurde
sie sogar vertraulich von den Ergebnissen der "Wannsee-Konferenz" vom
20. Januar 1942 in Kenntnis gesetzt.[12] Da Informationen, die im
Zusammenhang mit der Hilfsstelle eruiert wurden, über Sommer oder ihren
unmittelbaren Dienstvorgesetzten, den Berliner Bischof Konrad Graf von
Preysing, zum Vorsitzenden der Fuldaer Bischofskonferenz, den Breslauer
Kardinal Adolf Bertram, und zu Papst Pius XII. gelangten, waren also
nicht nur die NS-Machthaber, sondern auch das Oberhaupt der Katholischen
Kirche und die deutschen Bischöfe im Bild über die ungeheuerlichen
Mordpläne und deren Durchführung.[13] Was angesichts dieses Wissens von
der Kirche pflichtgemäß zu geschehen habe, darüber gingen die Meinungen
damals auseinander. Als Antipoden der unversöhnlichen Richtungen im
Episkopat traten Preysing und Bertram auf.[14] Preysing setzte als
Mitglied des 1941 konstitutierten "Ausschusses für
Ordensangelegenheiten"[15] auf die Information der Öffentlichkeit und
deren Reaktionen, Bertram vertraute auf stille Eingaben in den
Ministerien und fürchtete selbst in der Diktatur eine Störung der
gottgewollten "Harmonie zwischen Kirche und Staat".[16] Margarete Sommer
plädierte wie Preysing für öffentlichkeitswirksame Schritte des
Episkopats im Einsatz für die "unveräußerlichen Rechte aller Menschen",
denn sonst würden die Bischöfe "vor Gott und den Menschen" durch
"Schweigen schuldig".[17] Sie vermochte bei Bertram jedoch nur wegen
eines angeblich in Vorbereitung befindlichen Gesetzes zur
Zwangsscheidung von "Mischehen" im November 1942 eine Eingabe zu
erwirken, weil Bertram hier das Sakrament der Ehe verletzt sah. Sich zu
rein humanitären und menschenrechtlichen Angelegenheiten zu äußern, dazu
fühlte er sich als Bischof nicht befugt.[18]

Die Ereignisse in der Rosenstraße sollten die verschiedenen Akteure
wieder zusammen führen. Da das vermeintliche Zwangsscheidungsgesetz
ausblieb, maß man dem Schritt Bertrams vom Herbst 1942 eine gewisse
Bedeutung bei und wiegte sich in Sicherheit, wie Sommer am 2. März
feststellte: "Streng vertraulich wurde einem unserer Herren aus einem
Ministerium mitgeteilt, daß noch vor einer Woche auf eine Anfrage hin
von der SS-Führung geantwortet worden sei, daß bei der geplanten Razzia
die Mischehen nicht einbezogen würden, daß sie 'geschützt' seien".[19]
Vorsorglich hatte Sommer bereits am 17. Februar eine Rundfrage an alle
Pfarreien in Berlin gerichtet, um den betroffenen Personenkreis aktuell
statistisch zu erheben.[20] Der Rücklauf war schleppend,[21] da die
Daten mittels Hausbesuche überprüft werden mußten. Diese Unterlagen
erlaubten Sommer jedoch spätestens nach der Einbeziehung der
"Mischehepartner" und "Mischlinge" in die sogenannte "Fabrik-Aktion" vom
27. Februar 1943 eine gezielte Weiterverfolgung der persönlichen
Schicksale.[22] Sommer erhielt vor den Deportationen, von denen auch
"katholische Nichtarier" erfaßt wurden, genaue Listen, so daß sie mit
ihrem Mitarbeiterstab seelsorglich fürsorgerisch diese Personen faktisch
auf den Todesgang vorbereiten konnte.[23] Die Sammellager und die
Verfahrensabläufe waren ihr bekannt. Während also schon seit Oktober
1941 aus Berlin auch Katholiken jüdischer Herkunft, die der NS-Ideologie
gemäß als "Nichtarier" eingestuft wurden, deportiert worden waren,
wogegen sich kein Protest seitens der Bischöfe und des Papstes erhoben
hatte,[24] entwickelten sich bei der Frage der Ehen und Familien, d.h.
der "Mischehepartner" und "Mischlinge", Aktivitäten.

Sommer berichtete am 2. März in Breslau Kardinal Bertram von den
Vorgängen, die sie unmittelbar nach der Razzia in Berlin in Erfahrung
gebracht hatte: "Am Sonnabend, dem 27. Februar, setzte in Berlin eine
Evakuierung ein in einem Ausmaß und mit einer Härte, wie sie in Berlin
bisher nicht erlebt worden war. Innerhalb von zwei Tagen wurden ca. 8000
Nichtarier abgeholt ohne Rücksicht darauf, ob sie schon lange - oft
schon seit Jahrzehnten - getauft worden waren; aber vor allem dieses Mal
ohne Rücksicht darauf, ob sie in einer Mischehe leben oder nicht; auch
die christlichen Mischehen sind auf diese Weise gewaltsam getrennt
worden." Mit Bezug auf allererste Reaktionen der Familienangehörigen und
das Verhalten der NS-Seite schilderte Sommer rüdeste Methoden: "Alle
Bemühungen der arischen Ehegatten und der halbarischen Kinder, den
nichtarischen Gatten, bzw. Elternteil freizubekommen, sind vergeblich.
In härtester Form werden sie abgewiesen und buchstäblich vertrieben. Die
Straße, in der die aus den Mischehen stammenden Männer und Frauen
untergebracht sind, ist polizeilich abgesperrt worden; und selbst
Wohnungsschlüssel und Lebensmittelkarten, die die Eingeschlossenen in
vielen Fällen von der ganzen Familie bei sich führten, durften nicht
ausgehändigt werden". Die Räumlichkeiten seien nicht vorbereitet, für
Kleidung und Verpflegung nicht gesorgt. "Gerade dieser Umstand, daß in
keiner Weise für die Zukunft der Tausende gesorgt werden darf, macht die
Sorge, daß sie keine Zukunft haben sollen, zur Gewißheit." Mit
"erschreckender Schnelligkeit" seien schon etwa 3500 Menschen
abtransportiert worden. Doch die "Mischehepartner" seien bis zum
Montagabend, dem 1. März, wie "streng vertraulich" von Sommer
festgestellt worden war, noch nicht evakuiert worden. Sommer forderte
einen sofortigen persönlichen Schritt des bischöflichen Unterhändlers
Wienken, denn Bertrams Eingabe vom November sei, wie aus "zuverlässiger
Quelle" zu erfahren gewesen sei, "nicht ungehört und nicht wirkungslos
geblieben". Sommer erwartete jedoch mehr: Für Sonntag, den 7. März,
verlangte sie "ein klares, anklagendes Protestwort aller deutschen
Oberhirten". Schließlich solle Papst Pius XII. "ein an das Weltgewissen
gerichtetes Hirtenwort über den Vatikanischen Sender" verbreiten.[25]

Bertram beschränkte sich hingegen weiterhin auf seine, der
Öffentlichkeit verborgene Eingaben- und Verhandlungspolitik. Er bat in
seinem Schreiben, das er gleichlautend an das RSHA, die Reichskanzlei,
das Reichskirchen-, Reichsinnen- und Reichsjustizministerium schickte,
den "Maßnahmen Einhalt zu gebieten", d.h. die Trennung der Ehen
aufzuheben.[26] Am 4. März sprach Weihbischof Wienken persönlich bei
Adolf Eichmann im RSHA vor. Er erhielt die mündliche Auskunft, die
"nichtarischen Katholiken in rassischen Mischehen werden von der
Abwanderungsaktion nicht erfaßt", auch kinderlose Ehen nicht. Die
"sogenannten Geltungsjuden" würden nach Theresienstadt gebracht. Die in
Berlin "von den Arbeitsstätten und zum Teil auch aus den Familien
abgeholten nichtarischen Katholiken rassisch gemischter Ehen werden
wieder freigelassen" und in Rüstungsbetrieben eingestellt.[27] Da
Wienken diese Auskunft am 6. Tag der Proteste in der Rosenstraße
entgegen nahm, wird man schwerlich diese Proteste als völlig
bedeutungslos abtun können, zumal es ein Leichtes gewesen wäre, Wienken
den nach Gruner rein verwaltungstechnisch notwendigen Aufwand für
Registrierung und Ersatzauswahl in schlichten, klaren Worten zu
erläutern. Dies hätte man eigentlich auch den Protestierenden
verständlich machen können. Doch Wolf Gruner sieht in dieser Auskunft
Eichmanns eine Bestätigung seiner These der nie anvisierten
Deportationsabsicht bei den Rosenstraßenpersonen.[28]

Andere meinen wiederum, gerade dieser Schritt seitens der Kirche sei mit
entscheidend gewesen für die Entlassungen in der Rosenstraße als Rettung
vor der Deportation.[29] Das Mitglied im Ordensausschuß,
Dominikanerpater Odilo Braun, wertete Stil und Inhalt der Eingaben des
Vorsitzenden der Bischofskonferenz allerdings "wegen ihres weichen Tones
zu unwirksam",[30] womit er die entscheidende Spur für die
Interpretation legt. Bertrams stille Eingabe vom November 1942 dürfte
für diejenigen auf NS-Seite ein willkommenes Signal gewesen sein, das
Zwangsscheidungsgesetz schon deswegen nicht in Angriff zu nehmen, weil
dies den Ärger mit der Kirche erst herauf beschwören mochte. Das
bedeutete umgekehrt, man schuf einfach vollendete gewaltsame Tatsachen,
auf welche seitens der Kirche erfahrungsgemäß höchstens stille Eingaben
und höfliche Nachfragen von Wienken kamen, der lediglich mündliche, d.h.
unverbindliche Auskünfte Eichmanns erhielt, was ganz dem taktischen
Kalkül im Umgang mit der Kirche entsprach, der keinerlei Achtung
entgegen gebracht wurde. Es gehörte zu den Standardwarnungen des
Ordensausschusses gegenüber solcher Taktik: "Beruhigende Erklärungen und
das Bestreiten solcher Pläne von der anderen Seite haben nur den Zweck,
uns in Sicherheit zu wiegen und ein öffentliches Eintreten für diese
Ehen zu unterbinden. Man befürchtet eine Behandlung der Frage in der
Öffentlichkeit".[31] Erst im Februar 1944 wird Bertram - erfolglos -
monieren, daß er sich bei Eingaben "nicht mit einer nur mündlich
erklärten Stellungnahme des Reichssicherheitshauptamtes begnügen"
könne.[32]

Bertrams Schreiben, ähnlich jenen, die der protestantische Landesbischof
Wurm formulierte,[33] boten ihrerseits ein Einfallstor für
"gerechtfertigte" Vorgehensweisen der NS-Seite. So formulierte der
Breslauer Kardinal im Herbst, oblgeich er sich doch eigentlich für die
Verfolgten der NS-Rasseideologie einsetzen wollte: "Es bedarf dabei
nicht der Versicherung, daß diese meine Vorstellungen nicht einem Mangel
an Liebe zum Deutschtum, nicht einem Mangel an Gefühl nationaler Würde
entspringen, auch nicht einer Geringschätzung der schädlichen Einflüsse
eines Überwucherns jüdischer Einflüsse gegenüber deutscher Kultur und
vaterländischer Interessen".[34] Diese "schädlichen Einflüsse" boten
gemeinhin der NS-Seite jegliche Handhabe, um gegen "die Juden"
vorzugehen. Bertram seinerseits war empfänglich für angebliche Verstöße
von "Juden" gegen staatliche Anordnungen. Er sah nicht einmal eine
Veranlassung, einen Protest wenigstens dann zu erheben, wenn die
unverhältnismäßige "Strafe" für diese Verstöße in der Deportation nach
Auschwitz und baldigem Tod bestand.[35] Daß die Methode, die die
NS-Seite in dieser Phase gegen die in den RSHA-Richtlinien und dem
Frankfurter Erlaß angeblich "geschützten" Personenkreise anwandte, einen
Teil der "Lösung der Judenfrage" bildete, bestätigen die Gestapoberichte
über Dr. Gertrud Luckner aus Freiburg, die sich wie Margarete Sommer für
Katholiken jüdischer Herkunft einsetzte und mit ihr eng zusammen
arbeitete.[36]

Während Sommer in den Berliner Pfarreien ab dem 17. Februar 1943 ihre
statistischen Erhebungen durchführte, reiste Luckner von Freiburg aus
zwischen dem 22. Februar und 2. März über Stuttgart, Würzburg, Bamberg,
Nürnberg, Eichstätt und München zurück nach Freiburg. Die Gestapo
beobachtete Luckner und vernahm danach deren Gesprächspartner.
Schließlich wurde sie am 24. März verhaftet und später in das
Konzentrationslager Ravensbrück gebracht, wo sie erst 1945 befreit
wurde. Luckner hatte in den israelitischen Kultusgemeinden die Listen
der "Mischehen" und "Mischlinge" erbeten, also noch nachdem die
RSHA-Richtlinien am 20. Februar heraus gekommen waren, die diese
Personen angeblich schützten. Luckner habe, so der Kriminal-Sekretär
Hans von Ameln in seinem Bericht, schon am 24. Februar in Würzburg
Johanna Stahl darauf hingewiesen, "daß z.Zt. in Berlin eine große
Abwanderung vonstatten ginge"![37] Luckner wußte also von der geplanten
"Schlußaktion" vom 27. Februar. Sie habe Ivan Schwab in Würzburg und
Justin Baum in Bamberg, wo sie sich am 25. Februar aufhielt, darauf
aufmerksam gemacht, daß das Mischehengesetz "vorerst zurückgestellt
worden sei", aber dennoch "Maßnahmen gegen Mischehen und Mischlinge"
bevorstünden. "Auch die Tatsache, daß die Luckner darauf hingewiesen
hat, daß die Mischlinge nicht kriminell werden dürften, um nicht der
Geheimen Staatspolizei eine Handhabe zum Einschreiten zu geben, läßt
klar erkennen, daß sie über die Handhabung der Lösung der Judenfrage und
über die internen behördlichen Anweisungen genauestens unterrichtet
ist".[38] Die Staatspolizeileitstelle Düsseldorf fand gerade diesen
Punkt hervorhebenswert im abschließenden Ermittlungsbericht zum Fall
Luckner für das Berliner RSHA: "Es hat sich demnach bestätigt, daß die
Luckner im ganzen Reich Anlaufstellen unterhält, sich persönlich an
Juden, Mischehen und Mischlinge wendet und diese auf bevorstehende
Maßnahmen hinweist". Man müsse, so Luckner, "trotzdem mit
staatspolizeilichen Maßnahmen gegen Mischehen und Mischlinge rechnen".
"Damit dürfte der Beweis erbracht sein, daß die Luckner über
innerdienstliche Anweisungen genauestens unterrichtet wird".[39]

Diese seltene, von verschiedenen Polizeistellen geübte interne Offenheit
bezüglich der wahren Ziele der NS-Seite wurde durch die Handhabung der
"Mischehenfrage" in den verschiedenen Regionen in Deutschland bestätigt.
So notierte Viktor Klemperer am 14. März, auf den Dresdener Friedhof
komme täglich eine Frau, "Arierin", um eine Urnenstelle zu schmücken.
"Man hat ihren jüdischen Mann und ihren als 'jüdischen Mischling'
deklarierten Sohn aus unbekannten Gründen verhaftet und ein paar Wochen
später 'bei Fluchtversuch' erschossen".[40] Eugen Grimminger, der wegen
der Finanzierung der Fahrten und der Flugblattaktion der "Weißen
Rose"[41] am 2. März verhaftet worden war, sah seine jüdische Ehefrau
Jenny, die er 1922 geheiratet hatte, nicht wieder: Sie wurde am 10.
April in Stuttgart verhaftet, in das KZ Ravensbrück und von dort nach
Auschwitz gebracht, wo sie am 2. Dezember 1943 ermordet wurde.[42] Odilo
Braun, im Auftrag der Hilfsstelle Sommers unterwegs, nannte es "den
kalten Weg", den man beschreite.[43] Margarete Sommer faßte die
Entwicklungen rückblickend im August 1943 zusammen, indem sie die
unterschiedlichen Methoden schilderte: Seit März erhielten sie
Nachrichten aus den einzelnen Bistümern, "die beweisen, daß statt der
befürchteten, aber nicht getroffenen, bzw. rückgängig gemachten
generellen Maßnahmen, nun Teilaktionen in einzelnen Gauen in weniger
auffälliger, aber auch radikaler Weise - ohne gesetzliche Grundlage -
die faktische Trennung der rassischen Mischehe bewirken".[44] "In Hessen
wurden eine Woche, nachdem die Berliner nichtarischen Ehegatten aus
Mischehen nach der Ende Februar, Anfang März erfolgten Abholung wieder
entlassen worden waren (auf die ungewöhnlich scharfen Proteste hin),
nach und nach eine große Anzahl nichtarischer Ehegatten verhaftet;
teilweise ohne Angabe von Gründen, teilweise mit nicht nachgeprüften
Behauptungen, daß sie sich irgend welcher Vergehen schuldig gemacht
haben sollten." Sommer nennt sie "Scheingründe". "Diese 'Verhafteten'
wurden in großen Räumen untergebracht, die in kleinste Käfige eingeteilt
waren." Monatelang seien die Betroffenen eingesperrt gewesen. "Viele
dieser Verhafteten wurden dann abtransportiert, nachdem sie einen
sogenannten Lagerschein hatten unterzeichnen müssen, der den Eindruck
erwecken soll, als seien sie freiwillig ins Evakuierungslager gegangen.
Schon 14 Tage nach dem ersten Abtransport dieser unglücklichen Menschen
trafen die ersten Todesnachrichten ein. Es verlautet, daß auf diese
Weise des 'Kriminellmachens' auch in weiteren Gebieten Deutschlands die
Mischehe getrennt werden soll".[45]

Aufgrund ihrer umfänglichen Hintergrundinformationen und Recherchen wäre
es Sommer nicht verborgen geblieben, wenn es in der Rosenstraße keine
Deportationsabsicht gegeben hätte. Ihr lag ja gerade daran, die Lage,
auch mit lokalen und regionalen Unterschieden in der Vorgehensweise zu
analysieren und darzustellen. Sie betonte aber auch noch im August 1943,
die Proteste hätten erst die Entlassungen bewirkt. Als Beweis für die
Deportationsabsicht wurde im übrigen gewertet, daß aus der Rosenstraße
schon 25 Personen deportiert worden waren. Die neuesten Recherchen
Joachim Neanders[46] vermögen die These Gruners auch hier nicht zu
stützen, daß sie als "Schutzhäftlinge" abtransportiert worden seien und
von Auschwitz-Monowitz zurück geschickt wurden, weil sie als
Mischehepartner ja eigentlich als "geschützt" galten. Margarete Sommer
führte in ihrem Bericht vom August 1943 sogar ein weiteres Beispiel auf
als Beleg dafür, daß nur durch einen Protest Maßnahmen der NS-Seite
rückgängig gemacht werden konnten. Die näheren Umstände dieses
interessanten Falles müßten noch untersucht werden: "In Innsbruck und
anderen Städten Tirols wurden die nichtarischen Ehegatten ohne jede
Begründung abgeholt und in Konzentrationslager gebracht. Auf heftigste
Proteste von katholischer Seite Wiens hin wurden diese Mischehegatten
wieder in ihre Familien zurückgeführt".[47]

Zu ergänzen bleibt schließlich, daß Margarete Sommer in ihrem Entwurf
vom August 1943 für die Eingabe des Episkopats neben die "laut erhobenen
Proteste" der Bevölkerung als Ursache für die Entlassungen in der
Rosenstraße Proteste "von den Bischöfen" setzte.[48] Einen laut
erhobenen Protest, wie Sommer ihn sofort am 2. März von den Bischöfen
und vom Papst gefordert hatte, hatte es aber nicht gegeben. Auch der
Versuch von Odilo Braun, der einige Tage später, am 6. März, "in der
furchtbaren Judenverfolgung" einen "öffentlichen Protest"[49] forderte
und jener Versuch von Bischof Preysing,[50] der Pius XII. ebenfalls am
6. März um ein Eintreten für die Deportierten bat, blieben vergeblich.
Der Papst schwieg.[51] Die weiche Eingabe Bertrams vom November 1942
hatte den Berliner "Vorstoß" (H. G. Adler) nicht hindern können,
Eichmanns zur Beruhigung dienende Zusagen an Wienken kamen erst am 6.
Protesttag, Bertram selbst erhielt keine Antwort. Nach außen drang von
all dem nichts. Auch die vorbereitende Planung für einen Hirtenbrief im
April 1943, falls jemals ein "Mischehengesetz" kommen sollte, war
lediglich für den Eventualfall, der nie eintrat, weil die NS-Seite die
gesetzliche Lösung taktisch verworfen hatte.[52] Sommer ging es bei
ihrem Entwurf vom August 1943 letztlich darum, daß der Episkopat im
nachhinein die enge Verbindung zwischen Bischöfen und protestierender
Bevölkerung und deren gleich starke und wirkungsvolle Ablehnung der
NS-Maßnahmen gegenüber den Regierungsstellen betonen sollte. Das Volk
stehe nicht hinter der Regierung, so die beabsichtigte Botschaft
Sommers. Darin folgte sie natürlich der von ihr und dem Ordensausschuß
vertretenen Konzeption. Doch blieb dieser Entwurf in den Breslauer
Aktenschränken liegen, denn Bertram lehnte diese deutliche Eingabe an
die Regierung ab, ebenso wie er auch den gemeinsamen Dekalog-Hirtenbrief
zur Aufklärung des Volkes im Sommer 1943 nicht mittragen wollte allein
schon wegen der zaghaften Andeutung von Menschenrechtsverletzungen des
Regimes, die er als zu politisch wertete.[53] Für Sommer und den
Ordensausschuß waren die "laut erhobenen Proteste" in der Rosenstraße
ein hoffnungsvolles Zeichen gewesen, dem die Kirche als einzige noch
nicht zerschlagene Großorganisation mit ihren Möglichkeiten und ihrem
ungeheuerlichen Wissen über die Verbrechen des Regimes zur Aufklärung
des gesamten Volkes hätte stützend und verstärkend öffentlich
beispringen können. Das geschah nicht.[54]
Beate Meyer urteilte über den Film "Rosenstraße", die Gesamthandlung
lege den "Erfolg der Frauen nahe", doch habe von Trotta eine "etwas
sarkastisch als Erklärung" eingebrachte Bemerkung Baron von Eschenbachs,
die Meyers und Gruners These andeutet, eingefügt, die "wohl gleichzeitig
zur Beschwichtigung möglicher Einwände von Historikern" diene.[55] Die
bestens informierte Dr. Margarete Sommer würde Margarethe von Trotta von
der Gesamthandlung her, also dem Protesterfolg, Recht geben - trotz
möglicher Einwände von Historikern.


Notes

[1].  Vgl. Beate Meyer, Geschichte im Film - Judenverfolgung, Mischehen
und der Protest in der Rosenstraße 1943. Dort weitere Literaturhinweise
auf Meyers Forschungen.

[2].  Vgl.  Wolf Gruner, Die Internierung der Juden aus Mischehen in der
Rosenstraße 1943. Das Ereignis, seine Diskussion und seine Geschichte,
in: Zeitschrift für Geschichtswissenschaft [= ZfG] 52 (2004) H. 1, S.
5-22. Dort weitere Literaturhinweise auf Gruners Forschungen. Gruners
These schließt sich an: Claudia Schoppmann, Rettung von Juden: ein kaum
beachteter Widerstand von Frauen, in: Beate Kosmala, Claudia Schoppmann
(Hg.), Solidarität und Hilfe für Juden während der NS-Zeit, Bd. 5:
Überleben im Untergrund. Hilfe für Juden in Deutschland 1941-1945,
Berlin 2002, S. 113f.

[3].  Entwurf einer Eingabe des deutschen Episkopats [von Margarete
Sommer]  (I), [22./23.8.1943], in: Ludwig Volk (Bearb.), Akten deutscher
Bischöfe über die Lage der Kirche 1933-1945, Bd. VI: 1943-1945, Mainz
1985 [= Volk VI], S. 217.

[4].  Gruner zieht vorschnell das Fazit: "Neue Quellen zwingen [!] also
zu einer Re-Interpretation der Ereignisse Ende Februar 1943." W. Gruner,
Internierung, S. 21.

[5].  Jana Leichsenring, Katholiken in der Rosenstraße: Das "Hilfswerk
beim Bischöflichen Ordinariat Berlin" und die "Mischehen", in: ZfG 52
(2004) H. 1, S. 37-49, folgt weitgehend meiner Analyse des Handelns der
Amtskirche und Sommers: vgl. A. Leugers, Widerstand oder pastorale
Fürsorge katholischer Frauen im Dritten Reich? Das Beispiel Dr.
Margarete Sommer (1893-1965), in: Irmtraud Götz von Olenhusen u.a.,
Frauen unter dem Patriarchat der Kirchen. Katholikinnen und
Protestantinnen im 19. und 20. Jahrhundert, Stuttgart 1995, S. 161-188;
A. Leugers, Gegen eine Mauer bischöflichen Schweigens. Der Ausschuß für
Ordensangelegenheiten und seine Widerstandskonzeption 1941 bis 1945,
Frankfurt a.M. 1996. Die expliziten Wertungen Sommers zum Protest in der
Rosenstraße und den Kontext, der sich aus Gertrud Luckners
Gestapobeobachtung ergibt, reflektiert Leichsenring erstaunlicherweise
nicht, daher wird hier darauf ausführlicher eingegangen.

[6].  Vgl. Nathan Stoltzfus, Resistance of the Heart. Intermarriage and
the Rosenstrasse Protest in Nazi Germany, New Brunswick, New Jersey,
London 1996; dt. Übersetzung: Widerstand des Herzens. Der Aufstand der
Berliner Frauen in der Rosenstraße - 1943, München 1999, 2. Aufl. 2002;
vgl. Rezension: A. Leugers, Deutscher Widerstand gegen den
Nationalsozialismus, in: Neue Politische Literatur 47 (2002) H. 2, S.
249-276, hier: S. 260f.; N. Stoltzfus, Der "Versuch, in der Wahrheit zu
leben" und die Rettung von jüdischen Angehörigen durch deutsche Frauen
im "Dritten Reich", in: Jana Leichsenring (Hg.), Frauen und Widerstand,
Münster 2003, S. 74-88 und S. 89-95 (Diskussion).
[7].  Vgl. A. Leugers, Widerstand oder pastorale Fürsorge; Heinrich
Herzberg, Dienst am höheren Gesetz. Dr. Margarete Sommer und das
"Hilfswerk beim Bischöflichen Ordinariat Berlin", Fredersdorf 2000; J.
Leichsenring, Katholiken.
[8].  Teildruck in: Hans Günther Adler, Der verwaltete Mensch. Studien
zur Deportation der Juden aus Deutschland, Tübingen 1974, S. 199f.
[9].  Druck in: Wolf Gruner, Die Fabrik-Aktion und die Ereignisse in der
Berliner Rosenstraße. Fakten und Fiktionen um den 27. Februar 1943, in:
Jahrbuch für Antisemitismusforschung 11 (2002), S. 176f.  Im vorletzten
Absatz wohl  irrtümlich: 27.2.1945 statt korrekt 1943 wie im Druck bei:
Gernot Jochheim, Frauenprotest in der Rosenstraße Berlin 1943. Berichte
Dokumente Hintergründe, erweiterte Neuausgabe, Berlin 2002, S. 30f.

[10].  H. G. Adler, Der verwaltete Mensch,  S. 202: "Als sich Anfang
1943 die Massentransporte dem Ende zuneigten, erfolgte ein Vorstoß zur
Beseitigung der jüdischen Männer in Berlin, die mit deutschen Frauen
verheiratet waren. Viele wurden verhaftet und sollten fortgeschafft
werden, doch eine mutige Demonstration der Frauen bewog die Gestapo
ausnahmsweise zum Nachgeben und die Männer wurden entlassen [...]".
Vgl. auch ebd., S. 307, 340.

[11].  Protokoll der Wannsee-Konferenz, in: Die Grunewald-Rampe. Die
Deportation der Berliner Juden, 2. korr. Aufl., Berlin 1993, S. 59.

[12].  Jana Leichsenring, die sich im Rahmen ihrer Dissertation über
Margarete Sommer damit befaßte,  stellte diese Quelle auf der Konferenz
zum Rosenstraßenprotest in Berlin, 29./30.4.2004, erstmals vor. Vgl. den
Link auf den Tagungsbericht in H-Soz-u-Kult. Zu den Informanten vgl.
auch: A. Leugers, Gegen eine Mauer, S. 471 Anm. 348; A. Leugers,
Widerstand oder pastorale Fürsorge, S. 175 Anm. 83; J. Leichsenring,
Katholiken, S. 42 Anm. 43, S. 45 Anm. 72.

[13].  Vgl. z.B. den Vermerk auf dem Bericht Sommers, [nach 5.8.1942],
in: Ludwig Volk (Bearb.),  Akten deutscher Bischöfe über die Lage der
Kirche 1933-1945, Bd. V: 1940-1942, Mainz 1983 [= Volk V], S. 817: "Ging
durch Kurier nach Rom". Vgl. auch: A. Leugers, Gegen eine Mauer, S. 272.

[14].  Vgl. A. Leugers, Positionen der Bischöfe zum Nationalsozialismus
und zur nationalsozialistischen Staatsautorität, in: Rainer Bendel
(Hg.), Die katholische Schuld? Katholizismus im Dritten Reich - Zwischen
Arrangement und Widerstand, 2. durchges. Aufl., Münster 2004, S. 122-142.

[15].  Vgl. ausführlich: A. Leugers, Gegen eine Mauer.

[16].  Bertram an Muhs, [27.10.1944], in: Volk VI, S. 436.

[17].  Entwurf einer Eingabe des deutschen Episkopats [von Margarete
Sommer] (II), [22./23.8.1943], in: Volk VI, S. 220.

[18].  Vgl. Bertram an Thierack, Frick, Muhs, 11.11.1942, in: Volk V, S.
944f. Vgl. A. Leugers, Widerstand oder pastorale Fürsorge, S. 175f.; A.
Leugers, Adolf Kardinal Bertram und die Menschenrechte, in: Die Diözese
Hildesheim in Vergangenheit und Gegenwart. Jahrbuch des Vereins für
Geschichte und Kunst im Bistum Hildesheim 63 (1995), S. 205-229. Vgl.
demgegenüber die Predigt Preysings vom 15. November 1942, Teildruck in:
A. Leugers, Georg Angermaier 1913-1945. Katholischer Jurist zwischen
nationalsozialistischem Regime und Kirche. Lebensbild und Tagebücher, 2.
Aufl., Frankfurt a.M. 1997, Nr. 58.

[19].  Bericht Sommers, 2.3.1943, in: Volk VI, S. 20.

[20].  Vgl. N. Stoltzfus, Widerstand, S. 281,  S. 447 Anm. 77. Stoltzfus
schreibt, die Listen seien der jüdischen Gemeinde oder der Gestapo
übergeben worden. Sollte dies tatsächlich geschehen sein, so wäre die
Arbeit der Hilfsstelle Sommers mehr als ambivalent zu bewerten. Für die
Kopien des Erhebungsmaterials danke ich N. Stoltzfus, der es entdeckt hat.

[21].  So antwortete das Katholische Pfarramt St. Marien dem Hilfswerk
am 9.3.1943, Sandberger "wohnte noch beim Hausbesuch am 26.2." dort.
Erhebungsmaterial Sommers (wie Anm. 20).

[22].  In den Berichten der Zeitzeuginnen und Zeitzeugen findet sich
nicht selten ein Verwundern darüber, sie seien von einer ihnen
unbekannten Person informiert worden über den Ort der Unterbringung des
Partners bzw. über den Termin der Freilassung. Es sollte der Frage
systematisch nachgegangen werden, ob dies in Zusammenhang mit Sommers
Erhebungen und Hilfsnetzen gestanden haben mochte. So auch die Vermutung
von J. Leichsenring, Katholiken, S. 44 bzgl. der Familie Reis, die auf
der Erhebungsliste Sommers "Privilegierte Mischehen III" unter Nr. 93
und in der Liste "Nichtarisch-katholische Haushaltsvorstände" unter Nr.
188, in der Liste "Privilegierte Ehen" unter Nr. 66 mit Ehepaar und Sohn
auftaucht. Erhebungsmaterial Sommers (wie Anm. 20).

[23].  Vgl. A. Leugers, Widerstand oder pastorale Fürsorge, S. 184-188.

[24].  Zum Scheitern eines Hirtenbriefs im November 1941, der die
Menschenrechtsverletzungen des Regimes thematisierte, vgl. A. Leugers,
Gegen eine Mauer, S. 245-258.

[25].  Bericht Sommers, 2.3.1943, in: Volk VI, S. 19-21.

[26].  Bertram an Frick, Muhs, Thierack, Lammers, RSHA, 2.3.1943, in:
Volk VI, S. 23.

[27].  Wienken an Bertram, 4.3.1943, in: Volk VI, S. 25.

[28].  Vgl. W. Gruner, Internierung, S. 15, 21.

[29].  Vgl. Heinz Hürten, Deutsche Katholiken 1918 bis 1945, Paderborn
u.a. 1992, S. 513f, S. 645f Anm. 54; Wilhelm Damberg, Katholiken,
Antisemitismus und Ökumene, in: Joachim Kuropka (Hg.), Clemens August
Graf von Galen. Menschenrechte - Widerstand. Euthanasie - Neubeginn,
Münster 1998, S. 61f; Stephan Adam, Die Auseinandersetzung des Bischofs
Konrad von Preysing mit dem Nationalsozialismus in den Jahren 1933-1945,
St. Ottilien 1996, S. 111; Klemens-August Recker, "Wem wollt ihr
glauben?" Bischof Berning im Dritten Reich, Paderborn u.a. 1998, S. 347
wertet den Protest in der Rosenstraße und die Eingabe Bertrams als
entscheidend; ebenso Ursula Büttner, Die anderen Christen. Ihr Einsatz
für verfolgte Juden und "Nichtarier" im nationalsozialistischen
Deutschland, in:  B. Kosmala, C. Schoppmann, Solidarität und Hilfe, Bd.
5, S. 134;  J. Leichsenring, Katholiken, S. 49 formuliert vorsichtiger,
Bertrams Schritt sei mit zu berücksichtigen.

[30].  [Braun] an Bischof [Dietz], 6.3.1943. Druck: A. Leugers, Georg
Angermaier 1913-1945, S. 234 Anm. 9.

[31].  Bericht für die Fuldaer Bischofskonferenz, 14.8.1943, in: Volk
VI, S. 128.

[32].  Bertram an Wienken, 21.2.1944, in: Volk VI, S. 293 Anm. 2.

[33].  Wurm an Reichsinnenministerium, 14.3.1943, in:  Landesbischof D.
Wurm und der Nationalsozialistische Staat 1940-1945. Eine Dokumentation,
Stuttgart 1968, S. 162: Wurm freue sich, daß die Personen in Berlin
wieder entlassen wurden. Das begrüße er "nicht aus Vorliebe für das
Judentum, dessen übergroßer Einfluß auf das kulturelle, wirtschaftliche
und politische Leben in der Zeit, in der fast die ganze Presse
philosemitisch eingestellt war, fast nur von christlicher Seite als
verhängnisvoll erkannt wurde [...]."

[34].  Bertram an Thierack, Frick und Muhs, 11.11.1942, in: Volk V, S.
944. Vgl. die ähnliche Formulierung noch im Schreiben: Bertram an Frick,
Muhs, Thierack, Lammers, RSHA, 2.3.1943, in: Volk VI, S. 22.

[35].  Vgl. den von mir geschilderten Fall in: A. Leugers, Widerstand
oder pastorale Fürsorge, S. 183f. Schon im Oktober 1941 erhielt Bischof
Berning (an Bertram, 27.10.1941, in: Volk V, S. 583) die Auskunft von
Adolf Eichmann, "daß christliche Nichtarier nur ausnahmsweise evakuiert
würden, besonders nur diejenigen, die mit der Staatspolizei schon in
Konflikt gekommen seien. Die in Mischehe lebenden Nichtarier würden
vorläufig nicht betroffen".

[36].  Vgl. Hans-Josef Wollasch, "Betrifft: Nachrichtenzentrale des
Erzbischofs Gröber in Freiburg". Die Ermittlungsakten der Geheimen
Staatspolizei gegen Gertrud Luckner 1942-1944, Konstanz 1999, S. 16-82;
Angela Borgstedt, "... zu dem Volk Israel in einer geheimnisvollen Weise
hingezogen". Der Einsatz von Hermann Maas und Gertrud Luckner für
verfolgte Juden, in: Michael Kißener (Hg.), Widerstand gegen die
Judenverfolgung, Konstanz 1996, S. 227-259; Angela Borgstedt,
"Bruderring" und "Lucknerkreis": Rettung im deutschen Südwesten, in: B.
Kosmala, C. Schoppmann, Solidarität und Hilfe, Bd. 5, S. 191-203; Zur
Zusammenarbeit von Luckner, Sommer und Magnis vgl. J. Leichsenring,
Gabriele Gräfin Magnis - Sonderbeauftragte Kardinal Bertrams für die
Betreuung der katholischen "Nichtarier" Oberschlesiens: Auftrag -
Grenzüberschreitung - Widerstand?, Stuttgart 2000, S. 75-96.

[37].  Bericht Kriminal-Sekretärs Hans von Ameln über Vernehmung J.
Stahl, 6.3.1943, in: H.-J.Wollasch, Nachrichtenzentrale, S. 131f.

[38].  Bericht H. von Amelns über Vernehmung J. Baum und I. Schwab,
7.3.1943, in: ebd., S.  133f.

[39].  Bericht der Staatspolizeileitstelle Düsseldorf an RSHA IV B1,
[11.]3.1943, in: ebd., S. 144f.

[40].  Notiz vom 14.3.1943, in: Viktor Klemperer, Ich will Zeugnis
ablegen bis zum letzten. Tagebücher 1942-1945, hg. v. Walter Nowojski u.
Hadwig Klemperer, Bd. 2, 3. Aufl., Berlin 1995, S. 343.

[41].  Vgl. Hochverrat? Neue Forschungen zur "Weißen Rose", hg. v.
Rudolf Lill, veränderte Neuaufl., Konstanz 1999 (mit einer
Bibliographie, S. 161-179).

[42].  Vgl. Armin Ziegler, Eugen Grimminger. Widerständler und
Genossenschaftspionier, Crailsheim 2000, S. 118.

[43].  Aktenvermerk des Ordinariats Limburg, 26.6.1943 (in: Volk VI, S.
99) über die Informationen, die P. Odilo Braun brachte. Er sei im
Auftrag der Hilfsstelle in Berlin unterwegs gewesen: Braun an Jüdische
Gemeinde Frankfurt, Juli 1977 (A. Leugers, Gegen eine Mauer, S. 471 Anm.
358).

[44].  Entwurf einer Eingabe des deutschen Episkopats, [22./23.8.1943],
in: Volk VI, S. 217.

[45].  Bericht Sommers, [24.8.1943], in: Volk VI, S. 219. Für den Fall
Hessen wurden Sommers Beobachtungen  nicht berücksichtigt von Monica
Kingreen, Verfolgung und Rettung in Frankfurt am Main und der
Rhein-Main-Region, in: B. Kosmala, C. Schoppmann (Hg.), Solidarität und
Hilfe, Bd. 5, S. 182-185; Monica Kingreen, Gewaltsam verschleppt aus
Frankfurt. Die Deportationen der Juden in den Jahren 1941-1945, in:
Monica Kingreen (Hg.), "Nach der Kristallnacht". Jüdisches Leben und
antijüdische Politik in Frankfurt am Main 1938-1945, Frankfurt/New York
1999, S. 383-390. Zu den Vorkommnissen in Frankfurt vgl. auch die
Beobachtungen, die Odilo Braun auf seiner Reise von Worms über Frankfurt
machte: [Braun] an Bischof [Dietz], 6.3.1943. Druck: A. Leugers, Georg
Angermaier 1913-1945, S. 233f Anm. 9; Im Nachlaß Wurm befindet sich auch
eine Aufzeichnung von Mitte 1943, in: Landesbischof D. Wurm und der
Nationalsozialistische Staat 1940-1945, S. 165-167, hier: S. 166: "Es
wäre auch völlig unglaublich, wenn plötzlich in einer einzelnen Stadt
[Frankfurt a.M.] zahlreiche Personen gegen Gesetze verstoßen haben
sollten, die zufällig sämtlich in einer Mischehe leben".  Für Beuthen:
vgl. J. Leichsenring, Gabriele Gräfin Magnis.
[46].  Joachim Neander auf der Konferenz zum Rosenstraßenprotest in
Berlin, 29./30.4.2004. Vgl. den Link auf den Tagungsbericht in
H-Soz-u-Kult.

[47].  Bericht Sommers, [24.8.1943], in: Volk VI, S. 219.

[48].  Auslassungszeichen im Anfangszitat (wie Anm. 3) am Textbeginn :
"nicht nur von den Bischöfen, sondern".

[49].  [Braun] an Bischof [Dietz], 6.3.1943. Druck: A. Leugers, Georg
Angermaier 1913-1945, S. 234 Anm. 9.

[50].  Vgl. Preysing an Pius XII., 6.3.1943, in: Burkhart Schneider
(Hg.), Die Briefe Pius' XII. an die Deutschen Bischöfe 1939-1944, Mainz
1966,  S. 239 Anm. 1.

[51].  Vgl. Pius XII. an Preysing, 30.4.1943, in: B. Schneider, Briefe,
S. 239.

[52].  Zur weiteren Entwicklung vgl. A. Leugers, Widerstand oder
pastorale Fürsorge, S. 179-184.

[53].  Zum Dekalog-Hirtenbrief vgl. A. Leugers, Gegen eine Mauer, S.
274-289.

[54].  Nach 1945, als die Kirche ins Kreuzfeuer der Kritik geriet wegen
ihres Verhaltens während der NS-Zeit, verteidigte Sommer - obgleich vor
1945 kritische Verfechterin einer anderen Konzeption als Kardinal
Bertram - die Linie der Bischöfe. Vgl. zu dieser "loyalen
Erinnerungsarbeit":  A. Leugers, Widerstand oder pastorale Fürsorge, S.
186-188.

[55].  B. Meyer  (wie Anm. 1).`
                },
                {
                    title: `Rene L. Ash Discusses the Rosenstrasse Film, Alongside her Familial Heritage to the Protest`,
                    isVisible: false,
                    text: `Date: July 26, 2004
Language: English 
Historical Media Review 

Rene L. Ash discusses the Rosentrassee film, alongside her familial heritage 
to the Rosentrassee Protest.

A note of interest:
Even though these German women did everything in their power to help their
Jewish husbands to be released from the Gestapo, these going ons also took
place in other parts of Europe. Speaking from experience, my mother went to
the Gestapo with me in Brussels on numerous occasions to secure the release
of my father. Our closest friends, whose wife being Catholic did the same in
Prague for her Jewish husband.

Rosenstrasse which I saw in Germany is an excellent film.`
                },
                {
                    title: `Bruce Campbell evaluates the prior authors, Konrad Weiss and Beate Meyer’s, argument on the cinematic presentation of the film, Rosentrassee.`,
                    isVisible: false,
                    text: `Date: July 30, 2004
Language: English 
Historical Media Review 

Bruce Campbell evaluates the prior authors, Konrad Weiss and Beate Meyer’s, 
argument on the cinematic presentation of the film, Rosentrassee.

First, I would like to take issue with Konrad Weiss (though I agree with
much of what he says otherwise): whatever the exact wording at the
beginning of the film, Margarethe von Trotta does claim
authenticity--otherwise she would not be stating that the events actually
happened. In fact, any historical film makes this claim to some degree, by
simply taking up historical events or situating the action in a
recognizably historical context. This does not mean we can't treat
historical events in a fictional way, it simply places a special
responsibility on a filmmaker not to depart too far from the historical
record.

More important, I see the film as one of a recent series of cultural
productions which memorialize the Third Reich more and more as a time when
Germans were either victims or heroes--not perpetrators, and as a time when
Jews, if mentioned at all, are seen as merely adding to the German's
problems. (My thinking here is strongly influenced by Omer Bartov's essay
"Seit die Juden Weg sind", printed most recently in his book _Germany's War
and the Holocaust: Disputed Histories._)  In von Trotta's film Jews are
almost just a part of the scenery; they serve to demonstrate the nobility
of the Aryan Germans, they disrupt the lives of their German spouses (by
being arrested) and they add a bit of exoticism with their curious burial
customs, but the main story of the film does quite well without them. The
real heroes are Aryan German women (and one, crippled Aryan man....), who
are also victims of (in first instance) men (including Jewish men) and
(secondly) of cliches in SS uniform who are to one-dimensional to be
considered real people. This leaves the film with the simple message that
(female) Germans were heroes in opposing the Nazis and continuing life under

the burdens of war--which burdens were made worse by having to look after
weak and helpless Jews. (I found Beate Meyer's remarks particularly helpful
here.)

But I would go a step further and argue that Rosenstrasse really argues for
kind of integralist or fundamentalist identity politics: what ultimately
defines people is an integral identity which cannot be denied or overcome:
Aryans are Aryans, Jews are Jews, women and women, and anyone who attempts
to combine or deny one of these fundamental identities will sooner or later
suffer the consequences or return to the fold: thus Ruth insists on
mourning her husband in the strict orthodox tradition, and her daughter
Hannah goes to Germany in search of her Jewish identity. Though von Trotta
may seem on the surface to be arguing for a "humanistic" or "non-political
anti-fascism", I think the real logic of her film is quite different. This
is only intensified by the melodramatic character of the film and by its
heavy use of stereotypes, which contributes to its ultimately conservative,
even reactionary message.

Bruce Campbell
Dept. Of Modern Languages and Literatures, the College of William and Mary`
                },
            ]
        }
    }
}
</script>