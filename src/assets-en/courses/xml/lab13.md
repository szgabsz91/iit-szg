<h3>XSLT feladatok</h3>
  
  <ol>
    <li>�rjunk XSLT programot, amely leford�tja az src/data/cars.xml �llom�nyt magyarra. A felhaszn�land� tagnevek: autok, auto, gyarto, szin, ar. A tartalmat (pl. a sz�nek) nem kell leford�tani, csak a strukt�raelemeket. Az elemeket k�zvetlen�l, XSL elemek haszn�lata n�lk�l hozzuk l�tre!</li>
    
    <li>�rjunk XSLT programot, amely HTML form�tumban �rja ki a catalog.xml �llom�nyt. Az oldal a <i>"CD Catalog"</i> c�m (h1 elem) ut�n t�bl�zatban jelen�tse meg az egyes albumok �sszes adat�t. Az elemek �s attrib�tumok l�trehoz�sakor haszn�ljuk a be�p�tett XSL elemeket! Az els� oszlop az id legyen, az utols� pedig tartalmazza a <i>"yes"</i> sz�veget, ha az album akci�s �s a <i>"no"</i> sz�veget egy�bk�nt. A catalog.xml f�jlt b�ng�sz�ben megnyitva az �gy elk�sz�tett HTML oldal jelenjen meg!</li>
    
    <li>�rjunk XSLT programot, amely HTML form�tumban �rja ki a cars.xml �llom�nyt. Az oldal a <i>"Cars"</i> c�m (h1 elem) ut�n t�bl�zatban jelen�tse meg az aut�k gy�rt�j�t �s �r�t �gy, hogy az adott aut� sor�ban minden karakter olyan sz�n� legyen, mint amilyen az aut� sz�ne. (A sz�n be�ll�t�s�hoz haszn�lhat� a tr tagekn�l a <i>style="color:x"</i> CSS szab�ly.) A cars.xml f�jlt b�ng�sz�ben megnyitva az �gy elk�sz�tett HTML oldal jelenjen meg!</li>
    
    <li>Alak�tsuk �t az src/data/planeFigures.xml f�jlt XSLT seg�ts�g�vel egy olyan SVG k�pp�, amelyen az XML dokumentumban megadott s�kidomok vannak!</li>
  </ol>

gyak08 folder
gyak08_start folder

<ol>
    <li>A data/catalog.xml f�jlhoz �rjunk olyan XSLT f�jlt, amely csoportos�tja az albumokat �vsz�m szerint, �s minden �vsz�mhoz felsorolja az oda tartoz� albumokat id szerint cs�kken� sorrendben. Az �vsz�mok n�vekv� sorrendben szerepeljenek! A k�v�nt XML szerkezet:
      <pre class="prettyprint" data-label="XML"
>&lt;catalog&gt;
  &lt;year year=&quot;1982&quot;&gt;
    &lt;cd&gt;&lt;/cd&gt;
    ...
  &lt;/year&gt;
  ...
&lt;/catalog&gt;</pre>
    </li>
    
    <li>�rjunk XSLT neves�tett template-et �s f�ggv�nyt, amelyek egy t�glalap ter�let�t sz�molj�k ki az oldalhosszak ismeret�ben.</li>
    
    <li>Val�s�tsuk meg a faktori�lis f�ggv�nyt XSLT-ben!</li>
    
    <li>�rjunk XSLT f�ggv�nyt, amely visszaadja az i-edik Fibonacci-sz�mot! F(0)=0, F(1)=1, F(2)=1, F(3)=2, ...</li>
    
    <li>Val�s�tsuk meg a hatv�nyoz�st XSLT f�ggv�nyk�nt! A f�ggv�ny x �s y ismeret�ben adja vissza x<sup>y</sup>-t. A f�ggv�ny m�k�dj�n helyesen negat�v, 0 �s pozit�v kitev�k eset�n is.</li>
  </ol>

gyak09 folder
gyak09_start folder

=== MD

* Írjunk XSLT programot, amely lefordítja az *src/data/cars.xml* állományt magyarra. A felhasználandó tagnevek: *autok*, *auto*, *gyarto*, *szin*, *ar*. A tartalmat (pl. a színek) nem kell lefordítani, csak a struktúraelemeket. Az elemeket közvetlenül, XSL elemek használata nélkül hozzuk létre.
* Írjunk XSLT programot, amely HTML formátumban írja ki a *catalog.xml* állományt. Az oldal a *"CD Catalog"* cím (`h1` elem) után táblázatban jelenítse meg az egyes albumok összes adatát. Az elemek és attribútumok létrehozásakor használjuk a beépített XSL elemeket. Az első oszlop az id legyen, az utolsó pedig tartalmazza a *"yes"* szöveget, ha az album akciós és a *"no"* szöveget egyébként. A *catalog.xml* fájlt böngészőben megnyitva az így elkészített HTML oldal jelenjen meg.
* Írjunk XSLT programot, amely HTML formátumban írja ki a *cars.xml* állományt. Az oldal a *"Cars"* cím (`h1` elem) után táblázatban jelenítse meg az autók gyártóját és árát úgy, hogy az adott autó sorában minden karakter olyan színű legyen, mint amilyen az autó színe. (A szín beállításához használható a `tr` tageknél a *style="color:x"* CSS szabály.) A *cars.xml* fájlt böngészőben megnyitva az így elkészített HTML oldal jelenjen meg.
* Alakítsuk át az *src/data/planeFigures.xml* fájlt XSLT segítségével egy olyan SVG képpé, amelyen az XML dokumentumban megadott síkidomok vannak.

=== MD

A feladatokhoz szükséges fájlok letölthetőek [innen](courses/xml/practice09_start.zip).

* A *data/catalog.xml* fájlhoz írjunk olyan XSLT fájlt, amely csoportosítja az albumokat évszám szerint, és minden évszámhoz felsorolja az oda tartozó albumokat id szerint csökkenő sorrendben. Az évszámok növekvő sorrendben szerepeljenek. A kívánt XML szerkezet:

```xml
<catalog>
    <year year="1982">
        <cd></cd>
        ...
    </year>
    ...
</catalog>
```

* Írjunk XSLT nevesített template-et és függvényt, amelyek egy téglalap területét számolják ki az oldalhosszak ismeretében.
* Valósítsuk meg a faktoriális függvényt XSLT-ben.
* Írjunk XSLT függvényt, amely visszaadja az i-edik Fibonacci-számot: `F(0)=0`, `F(1)=1`, `F(2)=1`, `F(3)=2`, ...
* Valósítsuk meg a hatványozást XSLT függvényként. A függvény `x` és `y` ismeretében adja vissza `x^y`-t. A függvény működjön helyesen negatív, 0 és pozitív kitevők esetén is.
