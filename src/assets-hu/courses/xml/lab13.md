## 1. feladat

Adott a következő relációs modell:

<p align="center">
  <img src="assets/courses/xml/lab13/exercise01/messages.dot.png" alt="Relációs modell">
</p>

Oldjuk meg a következő alfeladatokat:

<ol type="a">
  <li>Hozzuk létre a <code>People</code> és <code>Messages</code> táblákat a fenti relációs modell alapján.</li>
  <li>Vegyünk fel 4 személyt (John, Mike, Jack, James) és 2 üzenetet az adatbázisba úgy, hogy az első üzentetet külső fájlból, a másodikat SQL-be ágyazott szövegként töltsük fel, és az üzenetek tartalma feleljen meg a lenti <i>message.xsd</i> sémának. A táblák adatait a lenti táblázat tartalmazza.</li>
  <li>Kérdezzük le a címzettek adatait.</li>
  <li>Kérdezzük le azon üzenetek szövegét és dátumát, amelyeket október hónapban küldtek el.</li>
  <li>Kérdezzük le azon üzenetek szövegét, melyek tárgya <i>"XML"</i>.</li>
  <li>Kérdezzük le a leghosszabb szövegű üzenet szövegét.</li>
  <li>Kérdezzük le a legmagasabb prioritású üzenet azonosítóját. Ügyeljünk arra, hogy a prioritás opcionális elem, alapértelmezett értéke 0.</li>
  <li>Kérdezzük le azon üzenetek összes adatát, amelyek nem tartalmaznak kulcsszavakat.</li>
  <li>Kérdezzük le azon üzenetek összes adatát, amelyeknek legalább egy kulcsszava tartalmazza a <i>"database"</i> szót és feladójuk John.</li>
  <li>Adjuk hozzá az <i>"xml"</i> kulcsszót a 2-es azonosítójú üzenethez.</li>
  <li>Módosítsuk a 2-es azonosítójú üzenet prioritását 0.5-re.</li>
  <li>Töröljük a 2-es azonosítójú üzenet kulcsszavait.</li>
  <li>XQuery segítségével határozzuk meg az <i>"XML"</i> tárgyú üzenet szövegét.</li>
  <li>XQuery segítségével határozzuk meg a kulcsszóval rendelkező üzenetek szövegét.</li>
</ol>

<pre class="prettyprint lang-xml" data-label="message.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;message&quot; type=&quot;messageType&quot;/&gt;

  &lt;xsd:complexType name=&quot;messageType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;subject&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;keywords&quot; type=&quot;keywordsType&quot; minOccurs=&quot;0&quot;/&gt;
      &lt;xsd:element name=&quot;content&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;priority&quot; type=&quot;priorityType&quot; minOccurs=&quot;0&quot; default=&quot;0.0&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;keywordsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;keyword&quot; type=&quot;xsd:string&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;priorityType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:double&quot;&gt;
      &lt;xsd:minInclusive value=&quot;0.0&quot;/&gt;
      &lt;xsd:maxInclusive value=&quot;1.0&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

&lt;/xsd:schema&gt;</pre>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>From</th>
      <th>To</th>
      <th>Date</th>
      <th>Subject</th>
      <th>Keywords</th>
      <th>Content</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John</td>
      <td>Jack</td>
      <td>2014-09-30</td>
      <td>Weak data inside a DB?</td>
      <td>
        relational database<br>
        weak data<br>
        how to
      </td>
      <td>I need a way to put weak data inside a relational database. Is there a standard way?</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Mike</td>
      <td>James</td>
      <td>2014-10-12</td>
      <td>XML</td>
      <td>-</td>
      <td>XML rocks even inside a relational database!</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>

## 2. feladat

Oldjuk meg a következő alfeladatokat:

<ol type="a">
  <li>Hozzuk létre a <code>PersonContacts</code> táblát a fenti relációs modell alapján.</li>
  <li>Töltsük fel az új táblát a lenti táblázat adataival úgy, hogy az első sort külső fájlból, a másodikat SQL-be ágyazott szövegként töltsük fel, és a <code>contacts</code> oszlop tartalma feleljen meg a lenti <i>contacts.xsd</i> sémának.</li>
  <li>Kérdezzük le azon személyek nevét és telefonszámait, akik rendelkeznek telefonszámmal és e-mail címmel is.</li>
  <li>Kérdezzük le a San Franciscóban élők teljes címét.</li>
  <li>Kérdezzük le azon személyek e-mail címét, akiknél nincs megadva cím.</li>
  <li>Kérdezzük le a legtöbb telefonszámmal rendelkező személyek weboldalát.</li>
  <li>Kérdezzük le a 415-ös körzetű telefonszámmal rendelkező személyek összes elérhetőségét. Ha nincs megadva egy elérhetőség, ott körzetszám esetén 202, házszám esetén 0, a többi szöveges mező esetén pedig az <i>"N/A"</i> szöveg jöjjön vissza.</li>
  <li>Kérdezzük le azon személyek nevét, akiknek van weboldala.</li>
  <li>Kérdezzük le azon személyek nevét, akiknek az e-mail címe és a weboldala is <i>"google.com"</i>-ra végződik.</li>
  <li>Adjuk hozzá a <i>"mike@microsoft.com"</i> e-mail címet Mike-hoz.</li>
  <li>Módosítsuk a 2-es azonosítójú contact rekord telefonszámát <i>"206/123-4569"</i>-re.</li>
  <li>Töröljük Mike telefonszámát.</li>
  <li>XQuery segítségével határozzuk meg az <i>"123-4567"</i> telefonszámú személy e-mail címét.</li>
  <li>XQuery segítségével határozzuk meg a telefonszámmal nem rendelkező személyek városát.</li>
</ol>

<pre class="prettyprint lang-xml" data-label="contacts.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;contacts&quot; type=&quot;contactsType&quot;/&gt;

  &lt;xsd:complexType name=&quot;contactsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;phone-number&quot; type=&quot;phoneNumberType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;xsd:element name=&quot;address&quot; type=&quot;addressType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;xsd:element name=&quot;email-address&quot; type=&quot;xsd:string&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;xsd:element name=&quot;website&quot; type=&quot;xsd:string&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;phoneNumberSimpleType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;
      &lt;xsd:pattern value=&quot;\d{3}-\d{4}&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

  &lt;xsd:complexType name=&quot;phoneNumberType&quot;&gt;
    &lt;xsd:simpleContent&gt;
      &lt;xsd:extension base=&quot;phoneNumberSimpleType&quot;&gt;
        &lt;xsd:attribute name=&quot;area-code&quot; type=&quot;areaCodeType&quot; use=&quot;required&quot;/&gt;
      &lt;/xsd:extension&gt;
    &lt;/xsd:simpleContent&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;areaCodeType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:positiveInteger&quot;&gt;
      &lt;xsd:totalDigits value=&quot;3&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

  &lt;xsd:complexType name=&quot;addressType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;city&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;street&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;house-number&quot; type=&quot;xsd:positiveInteger&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<table>
  <thead>
    <tr>
      <th>Person</th>
      <th>Phone numbers</th>
      <th>Addresses</th>
      <th>E-mail addresses</th>
      <th>Websites</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>
        206/123-4567<br>
        206/123-4568
      </td>
      <td>-</td>
      <td>john@google.com</td>
      <td>https://john.google.com</td>
    </tr>
    <tr>
      <td>Mike</td>
      <td>415/123-4569</td>
      <td>580 4th Street, San Francisco</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/xml/lab13/solution.zip) érhetők el.
