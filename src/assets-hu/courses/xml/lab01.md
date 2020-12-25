## 1. feladat

Hozzunk létre XDM modellt az alábbi XML dokumentumhoz:

<pre class="prettyprint lang-xml">
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;product-database&gt;
  &lt;manufacturers&gt;
    &lt;manufacturer id=&quot;m1&quot;&gt;
      &lt;name&gt;Microsoft&lt;/name&gt;
      &lt;country&gt;USA&lt;/country&gt;
    &lt;/manufacturer&gt;

    &lt;manufacturer id=&quot;m2&quot;&gt;
      &lt;name&gt;Apple&lt;/name&gt;
      &lt;country&gt;USA&lt;/country&gt;
    &lt;/manufacturer&gt;
  &lt;/manufacturers&gt;

  &lt;products&gt;
    &lt;product id=&quot;p1&quot; manufacturer=&quot;m2&quot;&gt;
      &lt;name&gt;MacBook Air&lt;/name&gt;
      &lt;new /&gt;
      &lt;price currency=&quot;USD&quot;&gt;899&lt;/price&gt;
    &lt;/product&gt;

    &lt;product id=&quot;p2&quot; manufacturer=&quot;m1&quot;&gt;
      &lt;name&gt;Surface Pro 7&lt;/name&gt;
      &lt;price currency=&quot;USD&quot;&gt;749.99&lt;/price&gt;
    &lt;/product&gt;
  &lt;/products&gt;
&lt;/product-database&gt;</pre>

## 2. feladat

Hozzunk létre XML dokumentumot az alábbi XDM modellhez:

<p align="center">
  <img src="assets/courses/xml/lab01/exercise02/projects.xdm.dot.png" alt="XDM modell">
</p>

## 3. feladat

Milyen hibák vannak az alábbi XML kódokban?

<ol type="a">
  <li>
    <pre>&lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;a a=&quot;G&quot;&gt;&lt;/A&gt;</pre>
  </li>
  <li>
    <pre>&lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;a a=&quot;G&quot;/&gt;&lt;/A&gt;</pre>
  </li>
  <li>
    <pre>&lt;?xml version=1.0?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;b a=&apos;G&apos;&gt;&lt;/A&gt;</pre>
  </li>
  <li>
    <pre>&lt;xml version=&quot;1.0&quot;/&gt;&lt;A&gt;&lt;a&gt;2&lt;/a b=&apos;G&apos;&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;a&gt;&lt;/a&gt;</pre>
  </li>
  <li>
    <pre>&lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/a&gt;&lt;/d&gt;&lt;a/&gt;&lt;/A&gt;&lt;a&gt;2&lt;/a&gt;</pre>
  </li>
  <li>
    <pre>&lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a=3&gt;&lt;a&gt;&lt;/A&gt;</pre>
  </li>
</ol>

## 4. feladat

Adott a következő XML dokumentum:

<pre class="prettyprint lang-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;A&gt;
  &lt;a&gt;2&lt;/a&gt;
  &lt;a&gt;3&lt;/a&gt;
  &lt;a&gt;
    3
    &lt;d&gt;aa&lt;/d&gt;
    &lt;a&gt;
      &lt;a a=&quot;G&quot;/&gt;
    &lt;/a&gt;
  &lt;/a&gt;
&lt;/A&gt;</pre>

Hajtsuk végre a következő feladatokat:

<ol type="a">
  <li>Tegyünk minden elemet az <i>NS</i> névtérbe alias segítségével.</li>
  <li>Tegyünk minden elemet az <i>NS</i> névtérbe alias használata nélkül.</li>
  <li>Tegyük be az attribútumokat is az <i>NS</i> névtérbe.</li>
  <li>Tegyük be az egyetlen attribútummal rendelkező elemet az <i>NS1</i>, attribútumát pedig az <i>NS2</i> névtérbe.</li>
  <li>Tegyünk megjegyzéseket az XML dokumentumba.</li>
  <li>Adjunk hozzá a gyökérelemhez egy új, <code>xml</code> nevű gyerek elemet, melynek tartalma legyen egy valid XML dokumentum, entitások használatával.</li>
  <li>Adjunk hozzá a gyökérelemhez egy új, <code>xml</code> nevű gyerek elemet, melynek tartalma legyen egy valid XML dokumentum, CDATA szekció használatával.</li>
</ol>

## 5. feladat

Hozzunk létre XDM modellt és XML dokumentumot az alábbi témákhoz:

<ol type="a">
  <li>névjegykártyák gyűjteménye, ahol tároljuk a személy nevét, cégét, pozícióját, telefonszámát és e-mail címét, valamint a cég címét, telefonszámát és weboldalát</li>
  <li>diákok tanulmányi eredményeinek gyűjteménye, ahol tároljuk, hogy mely diák milyen tárgyból milyen jegyet kapott</li>
  <li>beérkező panaszok nyilvántartása, ahol tároljuk a panaszok dátumát, tárgyát és tartalmát</li>
  <li>egy vasúti társaság menetrendje, ahol tároljuk a vonatok érkezési és elindulási adatait (település, állomás, vágány, időpont)</li>
</ol>

## 6. feladat

Hozzuk létre a megadott diagramtípusokat a felsorolt témákhoz:

<ol type="a">
  <li>XDM modell egy várakozósorhoz</li>
  <li>XDM modell egy bináris fához</li>
  <li>XDM modell egy heaphez</li>
  <li>XDM modell egy irányított élű gráfhoz</li>
  <li>ER és XDM modell névjegykártyák gyűjteményéhez, ahol tároljuk a személy nevét, cégét, pozícióját, telefonszámát és e-mail címét, valamint a cég címét, telefonszámát és weboldalát</li>
  <li>ER és XDM modell beérkezett rendelések nyilvántartásához, ahol tároljuk a termékeket és áraikat, vásárlók nevét és telefonszámát, valamint a rendelések adatait (mely vásárló mely termékből mennyit rendelt)</li>
  <li>UML és XDM modell meteorológiai mérőállomások és adataik nyilvántartásához, ahol minden meteorológiai mérőállomáshoz tartoznak mérőeszközök, amelyek adatelemeket (időpont, adat) továbbítanak</li>
  <li>UML és XDM modell e-mail üzenetek nyilvántartásához, ahol tároljuk az üzenetek feladójának, címzettjeinek adatait, az üzenet tárgyát, dátumát, tartalmát és csatolmányait</li>
  <li>UML és XDM modell szállodai szobafoglalások nyilvántartásához, ahol tároljuk hogy mely ügyfél mely szobákat foglalta le</li>
</ol>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/xml/lab01/solution.zip) érhetők el.
