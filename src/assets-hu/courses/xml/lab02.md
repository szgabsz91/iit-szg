## 1. feladat

Adott a következő XML dokumentum:

<pre class="prettyprint lang-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;donation-database&gt;
  &lt;donors&gt;
    &lt;donor id=&quot;d1&quot;&gt;
      &lt;name&gt;Leonardo Dicaprio&lt;/name&gt;
      &lt;address&gt;
        &lt;zip-code&gt;CA 90069&lt;/zip-code&gt;
        &lt;city&gt;West Hollywood&lt;/city&gt;
        &lt;street&gt;Sunset Blvd.&lt;/street&gt;
        &lt;house-number&gt;9255&lt;/house-number&gt;
      &lt;/address&gt;
      &lt;birth&gt;
        &lt;place&gt;Hollywood&lt;/place&gt;
        &lt;date&gt;1974-11-11&lt;/date&gt;
      &lt;/birth&gt;
      &lt;millionaire/&gt;
    &lt;/donor&gt;

    &lt;donor id=&quot;d2&quot;&gt;
      &lt;name&gt;Bill Gates&lt;/name&gt;
      &lt;address&gt;
        &lt;zip-code&gt;WA 98039&lt;/zip-code&gt;
        &lt;city&gt;Medina&lt;/city&gt;
        &lt;street&gt;73rd Ave NE&lt;/street&gt;
        &lt;house-number&gt;1835&lt;/house-number&gt;
      &lt;/address&gt;
      &lt;birth&gt;
        &lt;place&gt;Seattle&lt;/place&gt;
        &lt;date&gt;1955-10-28&lt;/date&gt;
      &lt;/birth&gt;
      &lt;millionaire/&gt;
    &lt;/donor&gt;
  &lt;/donors&gt;

  &lt;recipients&gt;
    &lt;recipient id=&quot;r1&quot; private-person=&quot;true&quot;&gt;
      &lt;name&gt;John Doe&lt;/name&gt;
    &lt;/recipient&gt;

    &lt;recipient id=&quot;r2&quot; private-person=&quot;true&quot;&gt;
      &lt;name&gt;Jane Doe&lt;/name&gt;
    &lt;/recipient&gt;
  &lt;/recipients&gt;

  &lt;donations&gt;
    &lt;donation donor=&quot;d1&quot; recipient=&quot;r1&quot;&gt;
      &lt;description&gt;Donation 1&lt;/description&gt;
      &lt;price&gt;10000000&lt;/price&gt;
    &lt;/donation&gt;

    &lt;donation donor=&quot;d2&quot; recipient=&quot;r2&quot;&gt;
      &lt;description&gt;Donation 2&lt;/description&gt;
      &lt;price&gt;20000000&lt;/price&gt;
    &lt;/donation&gt;
  &lt;/donations&gt;
&lt;/donation-database&gt;</pre>

Hozzunk létre DTD-t a fenti XML dokumentumhoz úgy, hogy

<ol type="a">
  <li>a DTD legyen az XML dokumentum része,</li>
  <li>a DTD kerüljön külső fájlba.</li>
</ol>

## 2. feladat

Adott a következő XDM modell:

<p align="center">
  <a href="assets/courses/xml/lab02/exercise02/business-cards.xdm.dot.png" target="_blank">
    <img src="assets/courses/xml/lab02/exercise02/business-cards.xdm.dot.png" alt="XDM modell" loading="lazy">
  </a>
</p>

Végezzük el a következő feladatokat:

<ol type="a">
  <li>Hozzunk létre DTD-t és valid XML dokumentumot a fenti XDM modellhez.</li>
  <li>Alakítsuk át úgy a DTD-t, hogy a cégnek vagy a weblapja, vagy az e-mail címe legyen rajta a névjegykártyán, illetve a séma ne engedje meg az üres gyökérelemet.</li>
</ol>

## 3. feladat

Létezik-e a következő DTD-t megvalósító valid XML dokumentum? Ha igen, hozzuk létre, ha nem, akkor módosítsuk a DTD-t és hozzunk létre valid XML dokumentumot hozzá.

```dtd
<!ELEMENT a (b+)>
<!ELEMENT b (a+)>
```

## 4. feladat

Entitások segítségével emeljük ki az ismétlődő szövegrészeket a következő XML dokumentumból:

<pre class="prettyprint lang-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE people [
  &lt;!ELEMENT people (person+)&gt;
  &lt;!ELEMENT person (name)&gt;
  &lt;!ELEMENT name (#PCDATA)&gt;
]>
&lt;people&gt;
  &lt;person&gt;
    &lt;name&gt;John Doe&lt;/name&gt;
  &lt;/person&gt;
  &lt;person&gt;
    &lt;name&gt;Jane Doe&lt;/name&gt;
  &lt;/person&gt;
  &lt;person&gt;
    &lt;name&gt;John Doe&lt;/name&gt;
  &lt;/person&gt;
  &lt;person&gt;
    &lt;name&gt;Jane Doe&lt;/name&gt;
  &lt;/person&gt;
&lt;/people&gt;</pre>

## 5. feladat

Paraméter entitások segítségével emeljük ki az ismétlődő elemeket a következő XML dokumentumból:

<pre class="prettyprint lang-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;email-messages&gt;
  &lt;email-message id=&quot;1&quot;&gt;
    &lt;sender&gt;
      &lt;name&gt;John Doe&lt;/name&gt;
      &lt;email-address&gt;john.doe@gmail.com&lt;/email-address&gt;
    &lt;/sender&gt;

    &lt;recipients&gt;
      &lt;recipient type=&quot;to&quot;&gt;
        &lt;name&gt;Jane Doe&lt;/name&gt;
        &lt;email-address&gt;jane.doe@gmail.com&lt;/email-address&gt;
      &lt;/recipient&gt;
      &lt;recipient type=&quot;cc&quot;&gt;
        &lt;name&gt;John Smith&lt;/name&gt;
        &lt;email-address&gt;john.smith@gmail.com&lt;/email-address&gt;
      &lt;/recipient&gt;
      &lt;recipient type=&quot;bcc&quot;&gt;
        &lt;name&gt;Mr. Brown&lt;/name&gt;
        &lt;email-address&gt;mr.brown@gmail.com&lt;/email-address&gt;
      &lt;/recipient&gt;
    &lt;/recipients&gt;

    &lt;date-time&gt;2013-09-14T10:15:00&lt;/date-time&gt;
    &lt;subject&gt;Subject&lt;/subject&gt;
    &lt;content&gt;
      &lt;![CDATA[
        Content
      ]]&gt;
    &lt;/content&gt;
  &lt;/email-message&gt;
&lt;/email-messages&gt;</pre>

Miért előnyös ez a fajta megközelítés? Egészítsük ki a feladó és címzett elemeket egy új, opcionális `phone-number` elemmel.

## 6. feladat

Hozzunk létre olyan DTD sémát, amely lehetővé teszi, hogy az őt felhasználó XML dokumentum tárolhassa egy könyv vagy egy CD adatait.

## 7. feladat

Adjuk meg az alábbi ER szerkezetek DTD megfelelőjét:

<ol type="a">
  <li>egyed</li>
  <li>kulcs tulajdonság</li>
  <li>elemi tulajdonság</li>
  <li>összetett tulajdonság</li>
  <li>többértékű tulajdonság</li>
  <li>1:N kapcsolat</li>
  <li>N:M kapcsolat</li>
</ol>

## 8. feladat

Hozzunk létre DTD-t és rá illeszkedő valid XML dokumentumot az alábbi szerkezetekhez:

<ol type="a">
  <li>órarend (órák: azonosító, tárgy, nap, óra tól-ig, terem, tanár)</li>
  <li>könyvtári nyilvántartás (könyvek: ISBN azonosító, szerző, cím, évszám, hossz)</li>
</ol>

## 9. feladat

Egy szoftverfejlesztő cég XML-ben szeretné tárolni az adminisztrációs adatokat. Az XML fájlnak a következő elemeket kell tartalmaznia:

* a fejlesztők adatai
* a fejlesztőcsapatok adatai
* a projektek adatai
* a fejlesztők munkájának adminisztrációja (ki, melyik nap mit csinált)

A követelményanalízis során a következő ER diagramot készítették el:

<p align="center">
  <a href="assets/courses/xml/lab02/exercise09/worklog.er.dot.png" target="_blank">
    <img src="assets/courses/xml/lab02/exercise09/worklog.er.dot.png" alt="ER modell" loading="lazy">
  </a>
</p>

<ol type="a">
  <li>Konvertáljuk az ER diagramot XDM modellé.</li>
  <li>Hozzunk létre egy DTD fájlt, ami megfelel a fenti ER diagramnak, és a lenti szabályoknak. Hozzunk létre egy XML dokumentumot, ami az elkészült DTD fájlnak megfelel. A technológiákhoz hozzunk létre újrahasznosítható entitásokat, és ezeket használjuk az XML dokumentumban.</li>
</ol>

A fenti ER modellen felül a DTD fájlnak egyéb szabályokat is le kell írnia. Az activityk jellege ne csak egy activity elem szöveges tartalmából legyen kikövetkeztethető, hanem külön elemek írják le a különböző fejlesztői feladatokat. A cég a következő feladatokat szeretné megkülönböztetni:

* meeting
* designing
* programming
* testing
* demo
* bugfixing

Ezekhez a feladatokhoz külön XML elemeket kell létrehozni úgy, hogy azok szöveges tartalma a feladatra fordított időt írja le órában mérve, és egy attribútum utaljon arra, hogy melyik projekthez tartozik a feladat.

A fentieken túl a cégnek arra is megkötései vannak, hogy egy fejlesztő milyen munkát végezhet egymás után. A következő szabályokat is figyelembe kell venni:

* A cég minden nap reggel meetinget tart. Egy fejlesztő több meetingen is részt vehet, de legalább egyen kötelező megjelennie.
* Meeting után kétféle munkafolyamatot kell tudni leírni, attól függően, hogy a projekt milyen stádiumban van:
  * Korai stádiumban a meeting után egy opcionális tervezési fázis következik, majd egy programozási fázis, végül tetszőleges számú tesztelési fázis.
  * A leadási határidőt elérve meeting után következhet egy tesztelési fázis, ezek után pedig vagy a demó szoftver bemutatása, vagy hibajavítás.

A cég minta workflowkat is mellékelt, hogy jobban megértsük az igényeket. Ezek szerint például egy workflow a következő tevékenységeket tartalmazhatja:

* meeting (project 1), meeting (project 2), designing, programming
* meeting, designing, programming, testing (project 1), testing (project 2)
* meeting, programming, testing
* meeting, testing, demo
* meeting, testing, bugfixing

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/xml/lab02/solution.zip) érhetők el.
