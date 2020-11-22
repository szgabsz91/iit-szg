<ol>
    <li>Hozzunk l�tre DTD-t az 1.xml dokumentumhoz!
      <ol class="letters">
        <li>A DTD legyen a dokumentum r�sze!</li>
        <li>Helyezz�k a DTD le�r�st k�l�n f�jlba!</li>
      </ol>
    </li>
    
    <li>Konvert�ljuk a 2.dia XDM modellt DTD-re, majd hozzunk l�tre valid XML dokumentumot a kapott s�male�r�shoz! Alak�tsuk �t �gy a DTD-t, hogy a c�gnek vagy a weblapja, vagy az email c�me legyen rajta a n�vjegyk�rty�n. Az XML f�jlban legal�bb egy n�vjegyk�rtya legyen t�rolva, a s�ma ne engedje meg az �res gy�k�relemet!</li>
    
    <li>L�tezik-e a 3.dtd s�m�t megval�s�t� valid XML dokumentum? Ha igen, hozzuk l�tre, ha nem, m�dos�tsuk a s�m�t!</li>
    
    <li>Entit�sok seg�ts�g�vel emelj�k ki az ism�tl�d� sz�vegr�szeket a 4.xml dokumentumb�l!</li>
    
    <li>Param�ter szimb�lumok seg�ts�g�vel emelj�k ki az ism�tl�d� elemeket az 5.xml dokumentumb�l! Mi�rt el�ny�s ez a fajta megk�zel�t�s? Eg�sz�ts�k ki a felad� �s c�mzett elemeket egy �j opcion�lis elemmel!</li>
    
    <li>Hozzunk l�tre olyan DTD s�m�t, amely lehet�v� teszi, hogy az �t felhaszn�l� XML dokumentum t�rolhassa egy k�nyv vagy egy CD adatait!</li>
    
    <li>Adja meg az al�bbi ER szerkezetek DTD megfelel�j�t!
      <ol class="letters">
        <li>egyed</li>
        <li>kulcs tulajdons�g</li>
        <li>elemi tulajdons�g</li>
        <li>�sszetett tulajdons�g</li>
        <li>t�bb�rt�k� tulajdons�g</li>
        <li>1:N kapcsolat</li>
        <li>N:M kapcsolat</li>
      </ol>
    </li>
    
    <li>Hozzon l�tre DTD-t �s r� illeszked� XML-t az al�bbi szerkezetekhez!
      <ol class="letters">
        <li>�rarend</li>
        <li>k�nyvt�ri nyilv�ntart�s</li>
      </ol>
    </li>
    
    <li>Az al�bbi le�r�s alapj�n oldjuk meg a k�vetkez� feladatokat!
      <ol class="letters">
        <li>Konvert�ljuk a lenti ER diagramot XDM-m�!</li>
        <li>Hozzunk l�tre egy DTD-t, amely megfelel a lent eml�tett szab�lyoknak, �s �rjunk egy teszt dokumentumot, amely kiel�g�ti ezt a s�m�t! A technol�gi�khoz hozzunk l�tre �jrahasznos�that� szimb�lumokat, �s ezeket haszn�ljuk az XML dokumentumban!</li>
      </ol>
    </li>
  </ol>
  
  <h3>9. feladat le�r�sa</h3>
  
  <p>Egy szoftverfejleszt� c�g XML-ben szeretn� t�rolni az adminisztr�ci�s adatokat.</p>
  
  <p>Az XML f�jlnak a k�vetkez� elemeket kell tartalmaznia:</p>
  
  <ul class="letters">
    <li>a fejleszt�k adatai</li>
    <li>a fejleszt�csapatok adatai</li>
    <li>a projektek adatai</li>
    <li>a fejleszt�k munk�j�nak adminisztr�ci�ja (ki, melyik nap mit csin�lt)</li>
  </ul>
  
  <p>A k�vetelm�nyanal�zis sor�n a k�vetkez� ER diagramot k�sz�tett�k el:</p>
  
  <p class="text-center">
    <img src="xml/gyak02.png" alt="ER modell" title="ER modell">
  </p>
  
  <p class="well">Konvert�ljuk az ER diagramot XDM-m�!</p>
  
  <p>A szoftverfejleszt� c�g r�j�tt, hogy az elk�sz�tett ER modell nem �rja le megfelel�en az ig�nyeket, ugyanis a worklogok strukt�r�ja m�g nem megfelel�. A c�ljuk az, hogy az activityk jellege ne csak egy activity elem sz�veges tartalm�b�l legyen kik�vetkeztethet�, hanem k�l�n elemek �rj�k le a k�l�nb�z� fejleszt�i feladatokat.</p>
  
  <p>A c�g a k�vetkez� feladatokat szeretn� megk�l�nb�ztetni:</p>
  
  <ol class="packed">
    <li>meeting</li>
    <li>designing</li>
    <li>programming</li>
    <li>testing</li>
    <li>demo</li>
    <li>bugfixing</li>
  </ol>
  
  <p>Ezekhez a feladatokhoz k�l�n XML elemeket kell l�trehozni �gy, hogy azok sz�veges tartalma a feladatra ford�tott id�t �rja le �r�ban m�rve, �s egy attrib�tum utaljon arra, hogy melyik projekthez tartozik a feladat.</p>
  
  <p>Azonban a c�gnek arra is megk�t�sei vannak, hogy egy fejleszt� milyen munk�t v�gezhet egym�s ut�n. A k�vetkez� szab�lyokat is figyelembe kell venni:</p>
  
  <ol class="packed">
    <li>A c�g minden nap reggel meetinget tart. Egy fejleszt� t�bb meetingen is r�szt vehet, de legal�bb egyen k�telez� megjelennie.</li>
    <li>Meeting ut�n k�tf�le munkafolyamatot kell tudni le�rni, att�l f�gg�en, hogy a projekt milyen st�diumban van:
      <ul class="letters">
        <li>Korai st�diumban a meeting ut�n egy opcion�lis tervez�si f�zis k�vetkezik, majd egy programoz�si f�zis, v�g�l tetsz�leges sz�m� tesztel�si f�zis.</li>
        <li>A lead�si hat�rid�t el�rve meeting ut�n k�vetkezhet egy tesztel�si f�zis, ezek ut�n pedig vagy a dem� szoftver bemutat�sa, vagy hibajav�t�s.</li>
      </ul>
    </li>
  </ol>
  
  <p>A c�g minta workflowkat is mell�kelt, hogy jobban meg�rts�k az ig�nyeket. Ezek szerint p�ld�ul egy workflow a k�vetkez� tev�kenys�geket tartalmazhatja:</p>
  
  <ul class="letters">
    <li>meeting (project 1), meeting (project 2), designing, programming</li>
    <li>meeting, designing, programming, testing (project 1), testing (project 2)</li>
    <li>meeting, programming, testing</li>
    <li>meeting, testing, demo</li>
    <li>meeting, testing, bugfixing</li>
  </ul>
  
  <p class="well">A fentiek alapj�n hozzunk l�tre egy DTD-t, amely megfelel az eml�tett szab�lyoknak, �s �rjunk egy teszt dokumentumot, amely kiel�g�ti ezt a s�m�t! A technol�gi�khoz hozzunk l�tre �jrahasznos�that� szimb�lumokat, �s ezeket haszn�ljuk az XML dokumentumban!</p>
</div>

gyak02.png
gyak02 folder
gyak02_start folder

=== MD

A feladatokhoz szükséges fájlok letölthetőek [innen](courses/xml/practice02_start.zip).

* Hozzunk létre DTD-t az *1.xml* dokumentumhoz.
    * A DTD legyen a dokumentum része.
    * Helyezzük a DTD leírást külön fájlba.
* Konvertáljuk a *2.dia* XDM modellt DTD-re, majd hozzunk létre valid XML dokumentumot a kapott sémaleíráshoz. Alakítsuk át úgy a DTD-t, hogy a cégnek vagy a weblapja, vagy az email címe legyen rajta a névjegykártyán. Az XML fájlban legalább egy névjegykártya legyen tárolva, a séma ne engedje meg az üres gyökérelemet.
* Létezik-e a *3.dtd* sémát megvalósító valid XML dokumentum? Ha igen, hozzuk létre, ha nem, módosítsuk a sémát.
* Entitások segítségével emeljük ki az ismétlődő szövegrészeket a *4.xml* dokumentumból.
* Paraméter szimbólumok segítségével emeljük ki az ismétlődő elemeket az *5.xml* dokumentumból. Miért előnyös ez a fajta megközelítés? Egészítsük ki a feladó és címzett elemeket egy új opcionális elemmel.
* Hozzunk létre olyan DTD sémát, amely lehetővé teszi, hogy az őt felhasználó XML dokumentum tárolhassa egy könyv vagy egy CD adatait.
* Adjuk meg az alábbi ER szerkezetek DTD megfelelőjét:
    * egyed
    * kulcs tulajdonság
    * elemi tulajdonság
    * összetett tulajdonság
    * többértékű tulajdonság
    * 1:N kapcsolat
    * N:M kapcsolat
* Hozzunk létre DTD-t és rá illeszkedő XML-t az alábbi szerkezetekhez:
    * órarend
    * könyvtári nyilvántartás
* Az alábbi leírás alapján oldjuk meg a következő feladatokat.
    * Konvertáljuk a lenti ER diagramot XDM-mé.
    * Hozzunk létre egy DTD-t, amely megfelel a lent említett szabályoknak, és írjunk egy teszt dokumentumot, amely kielégíti ezt a sémát. A technológiákhoz hozzunk létre újrahasznosítható szimbólumokat, és ezeket használjuk az XML dokumentumban.

### Komplex feladat

Egy szoftverfejlesztő cég XML-ben szeretné tárolni az adminisztrációs adatokat.

Az XML fájlnak a következő elemeket kell tartalmaznia:

* a fejlesztők adatai
* a fejlesztőcsapatok adatai
* a projektek adatai
* a fejlesztők munkájának adminisztrációja (ki, melyik nap mit csinált)

A követelményanalízis során a következő ER diagramot készítették el:

![ER modell](practice02.png)

Konvertáljuk az ER diagramot XDM-mé.

A szoftverfejlesztő cég rájött, hogy az elkészített ER modell nem írja le megfelelően az igényeket, ugyanis a worklogok struktúrája még nem megfelelő. A céljuk az, hogy az activityk jellege ne csak egy activity elem szöveges tartalmából legyen kikövetkeztethető, hanem külön elemek írják le a különböző fejlesztői feladatokat.

A cég a következő feladatokat szeretné megkülönböztetni:

* meeting
* designing
* programming
* testing
* demo
* bugfixing

Ezekhez a feladatokhoz külön XML elemeket kell létrehozni úgy, hogy azok szöveges tartalma a feladatra fordított időt írja le órában mérve, és egy attribútum utaljon arra, hogy melyik projekthez tartozik a feladat.

Azonban a cégnek arra is megkötései vannak, hogy egy fejlesztő milyen munkát végezhet egymás után. A következő szabályokat is figyelembe kell venni:

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

A fentiek alapján hozzunk létre egy DTD-t, amely megfelel az említett szabályoknak, és írjunk egy teszt dokumentumot, amely kielégíti ezt a sémát. A technológiákhoz hozzunk létre újrahasznosítható szimbólumokat, és ezeket használjuk az XML dokumentumban.
