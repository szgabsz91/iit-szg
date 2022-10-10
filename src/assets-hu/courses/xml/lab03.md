## 1. feladat

Hozzuk létre a következő struktúrákat XML séma segítségével:

<ol type="a">
  <li>üres elem</li>
  <li>üres elem tiltott, opcionális és kötelező attribútummal</li>
  <li>üres elem fix és default értékű attribútummal</li>
  <li>text-only elem gyári típussal</li>
  <li>text-only elem saját típussal</li>
  <li>lista, unió gyári típussal</li>
  <li>lista, unió saját típussal</li>
  <li>mixed-type elem gyerekelemel és attribútummal</li>
  <li>child-only elem attribútummal és attribútum nélkül</li>
  <li>korlátozzuk az előző child-only típus gyerekelemét</li>
  <li>bővítsük ki az előző child-only típust egy új gyerekelemmel</li>
  <li>hozzunk létre egy saját telefonszám típust reguláris kifejezéssel és egy körzetszám attribútummal</li>
  <li>hozzunk létre egy komplex struktúrájú típust, amely tartalmaz egy <code>a</code> elemet, utána pedig vagy egy <code>(b, c)</code> vagy egy <code>(c, b)</code> szekvenciát</li>
  <li>módosítsuk az előző struktúrát úgy, hogy a vagy szerkezet pontosan kétszer szerepeljen</li>
</ol>

## 2. feladat

Adjuk meg az alábbi ER szerkezetek XML séma megfelelőjét:

<ol type="a">
  <li>egyed</li>
  <li>kulcs attribútum</li>
  <li>elemi attribútum</li>
  <li>összetett attribútum</li>
  <li>többértékű attribútum</li>
  <li>1:N kapcsolat</li>
  <li>N:M kapcsolat</li>
</ol>

## 3. feladat

Hozzunk létre az <a href="/courses/xml/labs/2" target="_blank">2. gyakorlat</a> 9. feladatához XML sémát és hozzá tartozó valid XML dokumentumot úgy, hogy az integritási feltételekkel még nem foglalkozunk, és

<ol type="a">
  <li>névtelen típusokat használunk</li>
  <li>nevesített típusokat használunk</li>
</ol>

## 4. feladat

Hozzunk létre egy-egy XML sémát és valid XML dokumentumot a következők szerint:

<ol type="a">
  <li>A sémában legyen definiálva egy <i>carType</i> típus, amely egy üres elemet ír le egy <code>id</code> attribútummal. A típust valósítsa meg három elem, amelyek különböző nyelvű XML dokumentumokban használhatjuk: legyen egy <code>auto</code> (magyar), egy <code>car</code> (angol) és egy <code>wagen</code> (német) elem egy közös substitution groupban. Ezekből tetszőleges számú elem állhasson a gyökér elem alatt.</li>
  <li>Módosítsuk a sémát úgy, hogy a magyar nyelvű <code>auto</code> elemet ne lehessen használni a dokumentumokban.</li>
  <li>Érjük el, hogy a <i>carType</i> típust ne lehessen korlátozni.</li>
  <li>Érjük el, hogy a <i>carType</i> típust ne lehessen kibővíteni.</li>
  <li>Érjük el, hogy a <i>carType</i> típust ne lehessen se korlátozni, se kibővíteni.</li>
</ol>

## 5. feladat

Hozzunk létre XML sémát és valid XML dokumentumot egy autó nyilvántartó rendszerhez a következő ER modell alapján:

<p align="center">
  <a href="assets/courses/xml/lab03/exercise05/car-database.er.dot.svg" target="_blank">
    <img src="assets/courses/xml/lab03/exercise05/car-database.er.dot.svg" alt="ER modell" loading="lazy">
  </a>
</p>

Készítsük el a sémát kétféleképpen:

<ol type="a">
  <li>nevesített típusokkal</li>
  <li>globális elemekkel, attribútumokkal és referenciákkal</li>
</ol>

## 6. feladat

Mi a hiba a következő kódrészletekben?

### a)

<pre class="prettyprint lang-xml" data-label="6.a.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:element name=&quot;a&quot; type=&quot;aType&quot;/&gt;

  &lt;xsd:complexType name=&quot;aType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anyType&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;
&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="6.a.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;b xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;6.a.xsd&quot;&gt;
  hello
&lt;/b&gt;</pre>

### b)

<pre class="prettyprint lang-xml" data-label="6.b.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:complexType name=&quot;a&quot;&gt;
    &lt;xsd:all&gt;
      &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anyType&quot;/&gt;
      &lt;xsd:choice&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anyType&quot;/&gt;
        &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:anyType&quot;/&gt;
      &lt;/xsd:choice&gt;
    &lt;/xsd:all&gt;
  &lt;/xsd:complexType&gt;
&lt;/xsd:schema&gt;</pre>

### c)

<pre class="prettyprint lang-xml" data-label="5.c.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:simpleType name=&quot;a&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:double&quot;&gt;
      &lt;xsd:fractionDigits value=&quot;2&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;
&lt;/xsd:schema&gt;</pre>

### d)

<pre class="prettyprint lang-xml" data-label="6.d.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:complexType name=&quot;a&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anyType&quot; minOccurs=&quot;2&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;
&lt;/xsd:schema&gt;</pre>

### e)

<pre class="prettyprint lang-xml" data-label="6.e.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:choice minOccurs=&quot;2&quot; maxOccurs=&quot;2&quot;&gt;
          &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
          &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;/xsd:choice&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;
&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="6.e.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;6.e.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;
  &lt;d&gt;3&lt;/d&gt;
  &lt;d&gt;4&lt;/d&gt;
  &lt;c&gt;5&lt;/c&gt;
&lt;/a&gt;</pre>

### f)

<pre class="prettyprint lang-xml" data-label="6.f.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;
&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="6.f.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;6.f.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;d&gt;3&lt;/d&gt;
  &lt;c&gt;2&lt;/c&gt;
&lt;/a&gt;</pre>

### g)

<pre class="prettyprint lang-xml" data-label="6.g.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:date&quot;/&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:time&quot;/&gt;
        &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:dateTime&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;
&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="6.g.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;6.g.xsd&quot;&gt;
  &lt;b&gt;2013.01.01.&lt;/b&gt;
  &lt;c&gt;10:00&lt;/c&gt;
  &lt;d&gt;2013-01-01 10:00:00&lt;/d&gt;
&lt;/a&gt;</pre>

### h)

<pre class="prettyprint lang-xml" data-label="6.h.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;schema xmlns=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;element name=&quot;a&quot;&gt;
    &lt;complexType&gt;
      &lt;sequence&gt;
        &lt;element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
      &lt;/sequence&gt;
    &lt;/complexType&gt;
  &lt;/element&gt;
&lt;/schema&gt;</pre>

## 7. feladat

Készítsünk XML sémát nevesített típusokkal a <a href="/courses/xml/labs/2" target="_blank">2. gyakorlat</a> 2. feladatához (névjegykártya adatbázis). A következő szabályokat valósítsuk meg:

* Az azonosítók pozitív számok legyenek.
* Az irányítószámok formátuma: két betű, szóköz, 5 szám. Pl.: *CA 95014*
* A telefonszámok formátuma *xxx-xxxx*, a körzetszámok pedig legfeljebb 3 számjegyű pozitív számok.
* Ha nem adjuk meg a körzetszámot explicite, annak értéke legyen alapértelmezetten 410.
* A weblapok címeinél kötelezően meg kell adni a *https://* prefixet, és kötelezően két sztringből kell állniuk, ponttal elválasztva. Pl.: *https://google.com*
* Az e-mail címek posztfixe ugyanaz lehet, mint a weblapoké, kezdetük tetszőleges sztring, utána *@* jel, tetszőleges sztring, posztfix. Pl.: *valami1.valami2@valami3.com*
* A névjegykártyákon vagy a cég weblapja, vagy az e-mail címe szerepeljen: legalább az egyik, de ne mind a kettőt egyszerre.
* Legalább egy névjegykártya megadása kötelező.

## 8. feladat

Hozzunk létre XML sémát és valid XML dokumentumot az alábbi témákhoz:

<ol type="a">
  <li>órarend (órák: azonosító, tárgy, nap, óra tól-ig, terem, tanár)</li>
  <li>adomány adatbázis (adományozó: azonosító, név, cím, születési idő és hely; adományozott: azonosító, magánszemély, név; adomány: adományozó, adományozott, leírás, érték)</i>
  <li>könyvtári nyilvántartás (könyvek: ISBN azonosító, szerző, cím, évszám, hossz)</li>
</ol>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/xml/lab03/solution.zip) érhetők el.
