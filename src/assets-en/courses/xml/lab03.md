<h3>1. feladat</h3>
  
  <p>Hozzuk l�tre a k�vetkez� strukt�r�kat XML Schema seg�ts�g�vel!</p>
  
  <ul class="letters">
    <li>�res elem</li>
    <li>�res elem tiltott, opcion�lis �s k�telez� attrib�tummal</li>
    <li>�res elem fix �s default �rt�k� attrib�tummal</li>
    <li>Text-only elem gy�ri t�pussal</li>
    <li>Text-only elem saj�t t�pussal
      <ul>
        <li>String: minimum/maximum hossz, enumer�ci�, regul�ris kifejez�s</li>
        <li>Number: minimum/maximum �rt�k, sz�mjegyek/tizedesjegyek sz�ma</li>
      </ul>
    </li>
    <li>Lista, uni� gy�ri t�pussal</li>
    <li>Lista, uni� saj�t t�pussal</li>
    <li>Mixed type attrib�tummal/gyerekelemmel</li>
    <li>Child-only t�pus attrib�tummal �s attrib�tum n�lk�l</li>
    <li>Korl�tozzuk az el�z� child-only t�pus gyerekelem�t</li>
    <li>B�v�ts�k ki az el�z� child-only t�pust egy �j gyerekelemmel</li>
    <li>Hozzunk l�tre egy saj�t telefonsz�m t�pust regul�ris kifejez�ssel �s egy k�rzetsz�m attrib�tummal</li>
    <li>Hozzunk l�tre egy komplex strukt�r�j� t�pust, amely tartalmaz egy a elemet, ut�na pedig vagy egy (b, c), vagy egy (c, b) szekvenci�t. M�dos�tsuk a strukt�r�t �gy, hogy a vagy szerkezet pontosan k�tszer szerepeljen!</li>
  </ul>
  
  <h3>2. feladat</h3>
  
  <p>Adjuk meg az al�bbi ER szerkezetek XML Schema megfelel�j�t!</p>
  
  <ol class="letters">
    <li>egyed</li>
    <li>kulcs attrib�tum</li>
    <li>elemi attrib�tum</li>
    <li>�sszetett attrib�tum</li>
    <li>t�bb�rt�k� attrib�tum</li>
    <li>1:N kapcsolat</li>
    <li>N:M kapcsolat</li>
  </ol>
  
  <h3>3. feladat</h3>
  
  <p>Hozzunk l�tre az el�z� gyakorlat 9. feladat�hoz XML Schem�t �s hozz� valid XML dokumentumot �gy, hogy az integrit�si felt�telekkel m�g ne foglalkozzunk, �s</p>
  
  <ol class="letters">
    <li>n�vtelen t�pusokat haszn�ljunk,</li>
    <li>neves�tett t�pusokat haszn�ljunk</li>
  </ol>
  
  <h3>4. feladat</h3>
  
  <p>Hozzunk l�tre egy XML Schem�t a k�vetkez�k szerint:</p>
  
  <ul class="letters">
    <li>A s�m�ban legyen defini�lva egy aut� t�pus, amely egy �res elemet �r le id attrib�tummal.</li>
    <li>A t�pust val�s�tsa meg h�rom elem, amelyek k�l�nb�z� nyelv� XML dokumentumokban haszn�lhatjuk: legyen egy aut�, egy car �s egy wagen elem egy k�z�s substitution groupban. Ezekb�l tetsz�leges sz�m� elem �llhasson a gy�k�r elem alatt.</li>
    <li>M�dos�tsuk a s�m�t �gy, hogy a magyar nyelv� aut� elemet ne lehessen haszn�lni a dokumentumokban.</li>
    <li>Hogyan �rhetj�k el, hogy az aut� t�pust ne lehessen
      <ul>
        <li>korl�tozni (restriction)</li>
        <li>kib�v�teni (extension)</li>
        <li>egyiket sem?</li>
      </ul>
    </li>
  </ul>
  
  <h3>5. feladat</h3>
  
  <p>Hozzunk l�tre XML Schem�t egy aut� nyilv�ntart� rendszerhez a mell�kelt ER modell alapj�n.</p>
  
  <p>K�sz�ts�k el a s�m�t k�tf�lek�ppen:</p>
  
  <ul class="letters">
    <li>neves�tett t�pusokkal,</li>
    <li>glob�lis elemekkel, attrib�tumokkal �s referenci�kkal</li>
  </ul>
  
  <p class="text-center">
    <img src="xml/gyak03.png" alt="ER modell" title="ER modell">
  </p>
  
  <h3>6. feladat</h3>
  
  <p class="margined">Mi a hiba a k�vetkez� k�dr�szletekben?</p>
  
  <h4>1. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="1.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;a&quot; type=&quot;aType&quot;/&gt;
  
  &lt;xs:complexType name=&quot;aType&quot;&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element name=&quot;b&quot; type=&quot;xs:anyType&quot;/&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="1.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;b xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;1.xsd&quot;&gt;
  hello
&lt;/b&gt;</pre>
  
  <h4>2. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="2.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:complexType name=&quot;a&quot;&gt;
    &lt;xs:all&gt;
      &lt;xs:element name=&quot;b&quot; type=&quot;xs:anyType&quot;/&gt;
      &lt;xs:choice&gt;
        &lt;xs:element name=&quot;c&quot; type=&quot;xs:anyType&quot;/&gt;
        &lt;xs:element name=&quot;d&quot; type=&quot;xs:anyType&quot;/&gt;
      &lt;/xs:choice&gt;
    &lt;/xs:all&gt;
  &lt;/xs:complexType&gt;
&lt;/xs:schema&gt;</pre>
  
  <h4>3. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="3.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:simpleType name=&quot;a&quot;&gt;
    &lt;xs:restriction base=&quot;xs:double&quot;&gt;
      &lt;xs:fractionDigits value=&quot;2&quot;/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
&lt;/xs:schema&gt;</pre>
  
  <h4>4. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="4.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:complexType name=&quot;a&quot;&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element name=&quot;b&quot; type=&quot;xs:anyType&quot; minOccurs=&quot;2&quot;/&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;
&lt;/xs:schema&gt;</pre>
  
  <h4>5. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="5.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:anySimpleType&quot;/&gt;
        &lt;xs:choice minOccurs=&quot;2&quot; maxOccurs=&quot;2&quot;&gt;
          &lt;xs:element name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
          &lt;xs:element name=&quot;d&quot; type=&quot;xs:anySimpleType&quot;/&gt;
        &lt;/xs:choice&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="5.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;5.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;
  &lt;d&gt;3&lt;/d&gt;
  &lt;d&gt;4&lt;/d&gt;
  &lt;c&gt;5&lt;/c&gt;
&lt;/a&gt;</pre>
  
  <h4>6. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="6.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:anySimpleType&quot;/&gt;
        &lt;xs:element name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
        &lt;xs:element name=&quot;d&quot; type=&quot;xs:anySimpleType&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="6.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;6.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;d&gt;3&lt;/d&gt;
  &lt;c&gt;2&lt;/c&gt;
&lt;/a&gt;</pre>
  
  <h4>7. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="7.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:date&quot;/&gt;
        &lt;xs:element name=&quot;c&quot; type=&quot;xs:time&quot;/&gt;
        &lt;xs:element name=&quot;d&quot; type=&quot;xs:dateTime&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="7.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;7.xsd&quot;&gt;
  &lt;b&gt;2013.01.01.&lt;/b&gt;
  &lt;c&gt;10:00&lt;/c&gt;
  &lt;d&gt;2013-01-01 10:00:00&lt;/d&gt;
&lt;/a&gt;</pre>
  
  <h4>8. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="8.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;schema xmlns=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;element name=&quot;a&quot;&gt;
    &lt;complexType&gt;
      &lt;sequence&gt;
        &lt;element name=&quot;b&quot; type=&quot;xs:anySimpleType&quot;/&gt;
      &lt;/sequence&gt;
    &lt;/complexType&gt;
  &lt;/element&gt;
&lt;/schema&gt;</pre>
  
  <h3>7. feladat</h3>
  
  <p>K�sz�ts�nk XML Schem�t neves�tett t�pusokkal a 2. gyakorlat 2. feladat�hoz (n�vjegyk�rtya adatb�zis)! A k�vetkez� szab�lyokat val�s�tsuk meg:</p>
  
  <ul>
    <li>Az azonos�t�k pozit�v sz�mok legyenek.</li>
    <li>Az ir�ny�t�sz�mok pontosan n�gy sz�mjegyb�l �lljanak.</li>
    <li>A telefonsz�mok vagy xxx-xxx vagy xxxx-xx-xx alak�ak legyenek, a k�rzetsz�mok pedig legfeljebb k�t sz�mjegy� pozit�v sz�mok.</li>
    <li>Ha nem adjuk meg a k�rzetsz�mot explicite, annak �rt�ke legyen alap�rtelmezetten 46.</li>
    <li>A weblapok c�mein�l k�telez�en meg kell adni a <i>http://www.</i> prefixet, �s k�telez�en <i>.hu</i>, <i>.com</i> vagy <i>.org</i> postfixszel kell v�gz�dni�k. A c�m eleje �s v�ge k�z�tt tetsz�leges string szerepelhet. Pl.: <i>http://www.valami.org</i></li>
    <li>Az e-mail c�mek postfixe ugyanaz lehet, mint a weblapok�, kezdet�k tetsz�leges string, ut�na <i>@</i> jel, tetsz�leges string, postfix. Pl.: <i>valami1.valami2@valami3.com</i></li>
    <li>A n�vjegyk�rty�kon vagy a c�g weblapja, vagy az e-mail c�me szerepeljen: legal�bb az egyik, de ne engedj�k meg mind a kett�t egyszerre.</li>
    <li>Legal�bb egy n�vjegyk�rtya megad�sa k�telez�.</li>
  </ul>
  
  <h3>8. feladat</h3>
  
  <p>Hozzunk l�tre XML Schem�t �s valid XML dokumentumot az al�bbi t�m�khoz:</p>
  
  <ol class="letters">
    <li>�rarend</li>
    <li>adom�nyoz�k, adom�nyok</li>
    <li>k�nyvt�ri nyilv�ntart�s</li>
  </ol>

  gyak03.png
  gyak03
  
  === MD

  ### 1. feladat

Hozzuk létre a következő struktúrákat XML Schema segítségével:

* Üres elem
* Üres elem tiltott, opcionális és kötelező attribútummal
* Üres elem fix és default értékű attribútummal
* Text-only elem gyári típussal
* Text-only elem saját típussal
    * String: minimum/maximum hossz, enumeráció, reguláris kifejezés
    * Number: minimum/maximum érték, számjegyek/tizedesjegyek száma
* Lista, unió gyári típussal
* Lista, unió saját típussal
* Mixed type attribútummal/gyerekelemmel
* Child-only típus attribútummal és attribútum nélkül
* Korlátozzuk az előző child-only típus gyerekelemét
* Bővítsük ki az előző child-only típust egy új gyerekelemmel
* Hozzunk létre egy saját telefonszám típust reguláris kifejezéssel és egy körzetszám attribútummal
* Hozzunk létre egy komplex struktúrájú típust, amely tartalmaz egy a elemet, utána pedig vagy egy (b, c), vagy egy (c, b) szekvenciát. Módosítsuk a struktúrát úgy, hogy a vagy szerkezet pontosan kétszer szerepeljen!

### 2. feladat

Adjuk meg az alábbi ER szerkezetek XML Schema megfelelőjét:

* egyed
* kulcs attribútum
* elemi attribútum
* összetett attribútum
* többértékű attribútum
* 1:N kapcsolat
* N:M kapcsolat

### 3. feladat

Hozzunk létre az előző gyakorlat 9. feladatához XML Schemát és hozzá valid XML dokumentumot úgy, hogy az integritási feltételekkel még ne foglalkozzunk, és

* névtelen típusokat használjunk,
* nevesített típusokat használjunk

### 4. feladat

Hozzunk létre egy XML Schemát a következők szerint:

* A sémában legyen definiálva egy autó típus, amely egy üres elemet ír le id attribútummal.
* A típust valósítsa meg három elem, amelyek különböző nyelvű XML dokumentumokban használhatjuk: legyen egy autó, egy car és egy wagen elem egy közös substitution groupban. Ezekből tetszőleges számú elem állhasson a gyökér elem alatt.
* Módosítsuk a sémát úgy, hogy a magyar nyelvű autó elemet ne lehessen használni a dokumentumokban.
* Hogyan érhetjük el, hogy az autó típust ne lehessen
    * korlátozni (restriction)
    * kibővíteni (extension)
    * egyiket sem?

### 5. feladat

Hozzunk létre XML Schemát egy autó nyilvántartó rendszerhez a mellékelt ER modell alapján.

Készítsük el a sémát kétféleképpen:

* nevesített típusokkal,
* globális elemekkel, attribútumokkal és referenciákkal

![ER modell](practice03.png)

### 6. feladat

Mi a hiba a következő kódrészletekben?

#### 1. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="a" type="aType"/>
    
    <xs:complexType name="aType">
        <xs:sequence>
            <xs:element name="b" type="xs:anyType"/>
        </xs:sequence>
    </xs:complexType>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<b xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="1.xsd">
    hello
</b>
```

#### 2. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:complexType name="a">
        <xs:all>
            <xs:element name="b" type="xs:anyType"/>
            <xs:choice>
                <xs:element name="c" type="xs:anyType"/>
                <xs:element name="d" type="xs:anyType"/>
            </xs:choice>
        </xs:all>
    </xs:complexType>
</xs:schema>
```

#### 3. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:simpleType name="a">
        <xs:restriction base="xs:double">
            <xs:fractionDigits value="2"/>
        </xs:restriction>
    </xs:simpleType>
</xs:schema>
```

#### 4. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:complexType name="a">
        <xs:sequence>
            <xs:element name="b" type="xs:anyType" minOccurs="2"/>
        </xs:sequence>
    </xs:complexType>
</xs:schema>
```

#### 5. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:anySimpleType"/>
                <xs:choice minOccurs="2" maxOccurs="2">
                    <xs:element name="c" type="xs:anySimpleType"/>
                    <xs:element name="d" type="xs:anySimpleType"/>
                </xs:choice>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="5.xsd">
    <b>1</b>
    <c>2</c>
    <d>3</d>
    <d>4</d>
    <c>5</c>
</a>
```

#### 6. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:anySimpleType"/>
                <xs:element name="c" type="xs:anySimpleType"/>
                <xs:element name="d" type="xs:anySimpleType"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="6.xsd">
    <b>1</b>
    <d>3</d>
    <c>2</c>
</a>
```

#### 7. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:date"/>
                <xs:element name="c" type="xs:time"/>
                <xs:element name="d" type="xs:dateTime"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="7.xsd">
    <b>2013.01.01.</b>
    <c>10:00</c>
    <d>2013-01-01 10:00:00</d>
</a>
```

#### 8. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns="http://www.w3.org/2001/XMLSchema">
    <element name="a">
        <complexType>
            <sequence>
                <element name="b" type="xs:anySimpleType"/>
            </sequence>
        </complexType>
    </element>
</schema>
```

### 7. feladat

Készítsünk XML Schemát nevesített típusokkal a 2. gyakorlat 2. feladatához (névjegykártya adatbázis)! A következő szabályokat valósítsuk meg:

* Az azonosítók pozitív számok legyenek.
* Az irányítószámok pontosan négy számjegyből álljanak.
* A telefonszámok vagy *xxx-xxx* vagy *xxxx-xx-xx* alakúak legyenek, a körzetszámok pedig legfeljebb két számjegyű pozitív számok.
* Ha nem adjuk meg a körzetszámot explicite, annak értéke legyen alapértelmezetten 46.
* A weblapok címeinél kötelezően meg kell adni a *http://www.* prefixet, és kötelezően *.hu*, *.com* vagy *.org* postfixszel kell végződniük. A cím eleje és vége között tetszőleges string szerepelhet. Pl.: *http://www.valami.org*
* Az e-mail címek postfixe ugyanaz lehet, mint a weblapoké, kezdetük tetszőleges string, utána *@* jel, tetszőleges string, postfix. Pl.: *valami1.valami2@valami3.com*
* A névjegykártyákon vagy a cég weblapja, vagy az e-mail címe szerepeljen: legalább az egyik, de ne engedjük meg mind a kettőt egyszerre.
* Legalább egy névjegykártya megadása kötelező.

### 8. feladat

Hozzunk létre XML Schemát és valid XML dokumentumot az alábbi témákhoz:

* órarend
* adományozók, adományok
* könyvtári nyilvántartás
