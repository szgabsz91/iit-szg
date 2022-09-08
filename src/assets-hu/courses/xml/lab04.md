## 1. feladat

Adott a következő XML séma:

<pre class="prettyprint lang-xml" data-label="1.xsd">&lt;?xml version="1.0" encoding="UTF-8"?>
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;car-database&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;cars&quot; type=&quot;carsType&quot;/&gt;
        &lt;xsd:element name=&quot;owners&quot; type=&quot;ownersType&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

  &lt;xsd:complexType name=&quot;carsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;car&quot; type=&quot;carType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;ownersType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;owner&quot; type=&quot;ownerType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;licensePlateNumberType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;
      &lt;xsd:pattern value=&quot;[A-Z]{2}\d{2} [A-Z]{3}&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

  &lt;xsd:complexType name=&quot;carType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;manufacturer&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;model&quot; type=&quot;xsd:string&quot;/&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;license-plate-number&quot; type=&quot;licensePlateNumberType&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;ownerType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;name&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;owned-cars&quot;&gt;
        &lt;xsd:complexType&gt;
          &lt;xsd:sequence&gt;
            &lt;xsd:element name=&quot;owned-car&quot; type=&quot;licensePlateNumberType&quot; maxOccurs=&quot;unbounded&quot;/&gt;
          &lt;/xsd:sequence&gt;
        &lt;/xsd:complexType&gt;
      &lt;/xsd:element&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;id&quot; type=&quot;xsd:positiveInteger&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

Egészítsük ki a fenti XML sémát integritási feltételekkel a következők alapján:

* Az autók `license-plate-number` attribútuma és a tulajdonosok `id` attribútuma legyen elsődleges kulcs.
* A tulajdonosok alatt szereplő `owned-car` elemek tartalma legyen idegen kulcs.
* Egy `owner` elem alatt ugyanaz az autó csak egyszer szerepelhessen.

Hozzunk létre egy valid XML dokumentumot a módosított XML sémához.

## 2. feladat

Adott a következő XML séma és valid XML dokumentum:

<pre class="prettyprint lang-xml" data-label="2.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?>
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;people&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;person&quot; type=&quot;personType&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

  &lt;xsd:complexType name=&quot;personType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;first-name&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;last-name&quot; type=&quot;xsd:string&quot;/&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;id&quot; type=&quot;xsd:positiveInteger&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="2.xml">&lt;?xml version="1.0" encoding="UTF-8"?>
&lt;people xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
        xsi:noNamespaceSchemaLocation=&quot;2.xsd&quot;&gt;

  &lt;person id=&quot;1&quot;&gt;
    &lt;first-name&gt;Vincent&lt;/first-name&gt;
    &lt;last-name&gt;Vega&lt;/last-name&gt;
  &lt;/person&gt;

  &lt;person id=&quot;2&quot;&gt;
    &lt;first-name&gt;Jules&lt;/first-name&gt;
    &lt;last-name&gt;Winnfield&lt;/last-name&gt;
  &lt;/person&gt;

&lt;/people&gt;</pre>

Alakítsuk át a fenti XML sémát és XML dokumentumot úgy, hogy névtereket használunk bennük, a következők szerint:

<ol type="a">
  <li>A sémában legyen a séma névtere aliaszos, a saját névtér default, és a nem globális elemek is kerüljenek be a névtérbe. A dokumentumban használjunk aliaszt.</li>
  <li>A sémában legyen a séma névtere a default, a saját névtér aliaszos, és a nem globális elemek is kerüljenek be a névtérbe. A dokumentumban ne használjunk aliaszt.</li>
  <li>A sémában használjunk aliaszt mindkét névtérre, de a nem globális elemek ne kerüljenek be a saját névtérbe.</li>
  <li>A sémában használjunk aliaszt mindkét névtérre, és minden elem illetve attribútum kerüljön be a saját névtérbe.</li>
  <li>A sémában használjunk aliaszt mindkét névtérre, és a <code>first-name</code> elemek kivételével kerüljön be minden elem a saját névtérbe.</li>
</ol>

## 3. feladat

Adott a következő XML séma:

<pre class="prettyprint lang-xml" data-label="3.xsd">&lt;?xml version="1.0" encoding=&quot;UTF-8&quot;?>
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:complexType name=&quot;personType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;first-name&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;last-name&quot; type=&quot;xsd:string&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:element name=&quot;car&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;manufacturer&quot; type=&quot;xsd:string&quot;/&gt;
        &lt;xsd:element name=&quot;model&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

Hozzunk létre a fenti séma mellé egy másik sémát, amely beemeli a *3.xsd* fájl tartalmát, és létrehoz egy gyökérelem definíciót, amelyben egy `person` és egy `car` elem szerepel. A két séma tartozzon azonos névtérhez:

<ol type="a">
  <li>először a default névtérhez</li>
  <li>utána az <i>NS</i> névtérhez</li>
</ol>

Mindkét alfeladathoz hozzunk lére valid XML dokumentumot.

## 4. feladat

Adott a következő XML séma:

<pre class="prettyprint lang-xml" data-label="4.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:complexType name=&quot;personType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;first-name&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;last-name&quot; type=&quot;xsd:string&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<ol type="a">
  <li>Hozzunk létre a fenti séma mellé egy másik sémát, amely kiegészíti <i>4.xsd</i>-ben található típust egy <code>middle-name</code> elemmel.</li>
  <li>Módosítsuk a sémákat úgy, hogy minden elem és típus tartozzon az <i>NS</i> névtérbe.</li>
</ol>

Mindkét alfeladathoz hozzunk lére valid XML dokumentumot.

## 5. feladat

Adott a következő két XML séma:

<pre class="prettyprint lang-xml" data-label="5.a.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS1&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:complexType name=&quot;personType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;first-name&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;last-name&quot; type=&quot;xsd:string&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="5.b.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS2&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:element name=&quot;car&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;manufacturer&quot; type=&quot;xsd:string&quot;/&gt;
        &lt;xsd:element name=&quot;model&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

Hozzunk létre egy *5.c.xsd* fájlt, amely beemeli az előző két séma tartalmát, és létrehoz egy gyökérelemet egy saját, *NS3* névtérben.

Hozzunk létre egy valid XML dokumentumot az új XML sémához.

## 6. feladat

Írjunk XML sémát és valid XML dokumentumot a következő XDM modell alapján:

<p align="center">
  <a href="assets/courses/xml/lab04/exercise06/reservation-system.dot.png" target="_blank">
    <img src="assets/courses/xml/lab04/exercise06/reservation-system.dot.png" alt="XDM modell">
  </a>
</p>

A következőkre ügyeljünk:

* A szobák azonosítójának formátuma: nagybetű, kötőjel, számjegy, kötőjel, számjegyek. Pl.: *A-1-2*, *A-1-2345*
* A `suite` attribútum default értéke `false` legyen.
* A vendégek azonosítójának formátuma: 6 számjegy, 2 nagybetű. Pl.: *123456AB*
* A szobák és vendégek azonosítója legyen elsődleges kulcs, a foglalásoknál pedig hivatkozzunk ezekre idegen kulccsal.
* Minden elem tartozzon az *NS* névtérbe, az attribútumok tartozzanak a default névtérbe.

## 7. feladat

Mi a hiba a következő kódrészletekben?

### a)

<pre class="prettyprint lang-xml" data-label="7.a.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:int&quot; maxOccurs=&quot;unbounded&quot;/&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:int&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;

    &lt;xsd:key name=&quot;key&quot;&gt;
      &lt;xsd:selector xpath=&quot;b&quot;/&gt;
      &lt;xsd:field xpath=&quot;.&quot;/&gt;
    &lt;/xsd:key&gt;

    &lt;xsd:keyref name=&quot;keyref&quot;&gt;
      &lt;xsd:selector xpath=&quot;c&quot;/&gt;
      &lt;xsd:field xpath=&quot;.&quot;/&gt;
    &lt;/xsd:keyref&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.a.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;7.a.xsd&quot;&gt;

  &lt;b&gt;1&lt;/b&gt;
  &lt;b&gt;2&lt;/b&gt;
  &lt;c&gt;1&lt;/c&gt;
  &lt;c&gt;2&lt;/c&gt;

&lt;/a&gt;</pre>

### b)

<pre class="prettyprint lang-xml" data-label="7.b.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:int&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;

    &lt;xsd:key name=&quot;key&quot;&gt;
      &lt;xsd:selector xpath=&quot;.&quot;/&gt;
      &lt;xsd:field xpath=&quot;b&quot;/&gt;
    &lt;/xsd:key&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.b.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;7.b.xsd&quot;&gt;

  &lt;b&gt;1&lt;/b&gt;
  &lt;b&gt;2&lt;/b&gt;

&lt;/a&gt;</pre>

### c)

<pre class="prettyprint lang-xml" data-label="7.c.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:int&quot; maxOccurs=&quot;unbounded&quot;&gt;
          &lt;xsd:unique name=&quot;unique&quot;&gt;
            &lt;xsd:selector xpath=&quot;.&quot;/&gt;
            &lt;xsd:field xpath=&quot;.&quot;/&gt;
          &lt;/xsd:unique&gt;
        &lt;/xsd:element&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.c.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;7.c.xsd&quot;&gt;

  &lt;b&gt;1&lt;/b&gt;
  &lt;b&gt;1&lt;/b&gt;

&lt;/a&gt;</pre>

### d)

<pre class="prettyprint lang-xml" data-label="7.d.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; maxOccurs=&quot;unbounded&quot;&gt;
          &lt;xsd:complexType&gt;
            &lt;xsd:complexContent&gt;
              &lt;xsd:extension base=&quot;xsd:anyType&quot;&gt;
                &lt;xsd:attribute name=&quot;id&quot; type=&quot;xsd:integer&quot; use=&quot;required&quot;/&gt;
              &lt;/xsd:extension&gt;
            &lt;/xsd:complexContent&gt;
          &lt;/xsd:complexType&gt;
        &lt;/xsd:element&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;

    &lt;xsd:key name=&quot;key&quot;&gt;
      &lt;xsd:selector xpath=&quot;b&quot;/&gt;
      &lt;xsd:field xpath=&quot;id&quot;/&gt;
    &lt;/xsd:key&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.d.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;7.d.xsd&quot;&gt;

  &lt;b id=&quot;1&quot;&gt;1&lt;/b&gt;
  &lt;b id=&quot;2&quot;&gt;1&lt;/b&gt;

&lt;/a&gt;</pre>

### e)

<pre class="prettyprint lang-xml" data-label="7.e.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;car-database&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;cars&quot; type=&quot;carsType&quot;/&gt;
        &lt;xsd:element name=&quot;owners&quot; type=&quot;ownersType&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;

    &lt;xsd:key name=&quot;carLicensePlateNumberKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;cars/car&quot;/&gt;
      &lt;xsd:field xpath=&quot;@license-plate-number&quot;/&gt;
    &lt;/xsd:key&gt;

    &lt;xsd:key name=&quot;ownerIdKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;owners/owner&quot;/&gt;
      &lt;xsd:field xpath=&quot;@id&quot;/&gt;
    &lt;/xsd:key&gt;

    &lt;xsd:unique name=&quot;ownedCarUnique&quot;&gt;
      &lt;xsd:selector xpath=&quot;owners/owner/owned-cars/owned-car&quot;/&gt;
      &lt;xsd:field xpath=&quot;.&quot;/&gt;
    &lt;/xsd:unique&gt;

    &lt;xsd:keyref name=&quot;ownerOwnedCarKeyref&quot; refer=&quot;carLicensePlateNumberKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;owners/owner/owned-cars/owned-car&quot;/&gt;
      &lt;xsd:field xpath=&quot;.&quot;/&gt;
    &lt;/xsd:keyref&gt;
  &lt;/xsd:element&gt;

  &lt;xsd:complexType name=&quot;carsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;car&quot; type=&quot;carType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;ownersType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;owner&quot; type=&quot;ownerType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;licensePlateNumberType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;
      &lt;xsd:pattern value=&quot;[A-Z]{2}\d{2} [A-Z]{3}&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

  &lt;xsd:complexType name=&quot;carType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;manufacturer&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;model&quot; type=&quot;xsd:string&quot;/&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;license-plate-number&quot; type=&quot;licensePlateNumberType&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;ownerType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;name&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;owned-cars&quot;&gt;
        &lt;xsd:complexType&gt;
          &lt;xsd:sequence&gt;
            &lt;xsd:element name=&quot;owned-car&quot; type=&quot;licensePlateNumberType&quot; maxOccurs=&quot;unbounded&quot;/&gt;
          &lt;/xsd:sequence&gt;
        &lt;/xsd:complexType&gt;
      &lt;/xsd:element&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;id&quot; type=&quot;xsd:positiveInteger&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.e.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;car-database xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
              xsi:noNamespaceSchemaLocation=&quot;7.e.xsd&quot;&gt;

  &lt;cars&gt;
    &lt;car license-plate-number=&quot;AB12 CDE&quot;&gt;
      &lt;manufacturer&gt;Tesla&lt;/manufacturer&gt;
      &lt;model&gt;Model 3&lt;/model&gt;
    &lt;/car&gt;

    &lt;car license-plate-number=&quot;AB12 CDF&quot;&gt;
      &lt;manufacturer&gt;Volkswagen&lt;/manufacturer&gt;
      &lt;model&gt;ID.4&lt;/model&gt;
    &lt;/car&gt;

    &lt;car license-plate-number=&quot;AB12 CDG&quot;&gt;
      &lt;manufacturer&gt;Kia&lt;/manufacturer&gt;
      &lt;model&gt;e-Niro&lt;/model&gt;
    &lt;/car&gt;
  &lt;/cars&gt;

  &lt;owners&gt;
    &lt;owner id=&quot;1&quot;&gt;
      &lt;name&gt;John Doe&lt;/name&gt;
      &lt;owned-cars&gt;
        &lt;owned-car&gt;AB12 CDE&lt;/owned-car&gt;
      &lt;/owned-cars&gt;
    &lt;/owner&gt;

    &lt;owner id=&quot;2&quot;&gt;
      &lt;name&gt;Jane Doe&lt;/name&gt;
      &lt;owned-cars&gt;
        &lt;owned-car&gt;AB12 CDE&lt;/owned-car&gt;
        &lt;owned-car&gt;AB12 CDF&lt;/owned-car&gt;
        &lt;owned-car&gt;AB12 CDG&lt;/owned-car&gt;
      &lt;/owned-cars&gt;
    &lt;/owner&gt;
  &lt;/owners&gt;

&lt;/car-database&gt;</pre>

### f)

<pre class="prettyprint lang-xml" data-label="7.f.1.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS1&quot;&gt;

  &lt;xsd:element name=&quot;a&quot; type=&quot;xsd:anySimpleType&quot;/&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.f.2.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS2&quot;&gt;

  &lt;xsd:include schemaLocation=&quot;7.f.1.xsd&quot;/&gt;

&lt;/xsd:schema&gt;</pre>

### g)

<pre class="prettyprint lang-xml" data-label="7.g.1.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS&quot;&gt;

  &lt;xsd:complexType name=&quot;a&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.g.2.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS&quot;
            xmlns:ns=&quot;NS&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:redefine schemaLocation=&quot;7.g.1.xsd&quot;&gt;
    &lt;xsd:complexType name=&quot;a&quot;&gt;
      &lt;xsd:complexContent&gt;
        &lt;xsd:extension base=&quot;ns:a&quot;&gt;
          &lt;xsd:sequence&gt;
            &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
          &lt;/xsd:sequence&gt;
        &lt;/xsd:extension&gt;
      &lt;/xsd:complexContent&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:redefine&gt;

  &lt;xsd:element name=&quot;a&quot; type=&quot;ns:a&quot;/&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.g.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;NS1 7.g.2.xsd&quot;
   xmlns=&quot;NS&quot;&gt;

  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;

&lt;/a&gt;</pre>

### h)

<pre class="prettyprint lang-xml" data-label="7.h.1.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS1&quot;&gt;

  &lt;xsd:simpleType name=&quot;b&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:integer&quot;&gt;
      &lt;xsd:minInclusive value=&quot;0&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.h.2.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS2&quot;&gt;

  &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.h.3.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema
            targetNamespace=&quot;NS3&quot;
            xmlns:ns1=&quot;NS1&quot;
            xmlns:ns2=&quot;NS2&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:import namespace=&quot;NS1&quot; schemaLocation=&quot;7.h.1.xsd&quot;/&gt;
  &lt;xsd:import namespace=&quot;NS2&quot; schemaLocation=&quot;7.h.2.xsd&quot;/&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;ns1:b&quot;/&gt;
        &lt;xsd:element ref=&quot;ns2:c&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.h.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;ns3:a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xsi:schemaLocation=&quot;NS3 7.h.3.xsd&quot;
       xmlns:ns1=&quot;NS1&quot;
       xmlns:ns2=&quot;NS2&quot;
       xmlns:ns3=&quot;NS3&quot;&gt;

  &lt;ns1:b&gt;1&lt;/ns1:b&gt;
  &lt;ns2:c&gt;2&lt;/ns2:c&gt;

&lt;/ns3:a&gt;</pre>

### i)

<pre class="prettyprint lang-xml" data-label="7.i.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS&quot;
            elementFormDefault=&quot;qualified&quot;
            attributeFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot;&gt;
          &lt;xsd:complexType&gt;
            &lt;xsd:attribute name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
          &lt;/xsd:complexType&gt;
        &lt;/xsd:element&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.i.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;NS 7.i.xsd&quot;
   xmlns=&quot;NS&quot;&gt;

  &lt;b c=&quot;1&quot;/&gt;

&lt;/a&gt;</pre>

### j)

<pre class="prettyprint lang-xml" data-label="7.j.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:anySimpleType&quot; form=&quot;unqualified&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.j.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;NS 7.j.xsd&quot;
   xmlns=&quot;NS&quot;&gt;

  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;1&lt;/c&gt;
  &lt;d&gt;1&lt;/d&gt;

&lt;/a&gt;</pre>

### k)

<pre class="prettyprint lang-xml" data-label="7.k.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;b&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

  &lt;xsd:complexType name=&quot;b&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
      &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

### l)

<pre class="prettyprint lang-xml" data-label="7.l.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.l.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;7.l.xsd&quot;&gt;

  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;

&lt;/a&gt;</pre>

### m)

<pre class="prettyprint lang-xml" data-label="7.m.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.m.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;7.m.xsd&quot;
   xmlns=&quot;NS&quot;&gt;

  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;

&lt;/a&gt;</pre>

### n)

<pre class="prettyprint lang-xml" data-label="7.n.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="7.n.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;NS 7.n.xsd&quot;&gt;

  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;

&lt;/a&gt;</pre>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/xml/lab04/solution.zip) érhetők el.
