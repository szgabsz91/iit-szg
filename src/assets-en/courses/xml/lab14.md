<p>A sz�ks�ges f�jlok let�lthet�k <a href="<?php echo getLink('xml/gyak10_start.zip'); ?>">innen</a>.</p>
  
  <p>El�felt�telek:</p>
  
  <ul>
    <li><a href="<?php echo getLink('xml/setup-ide.php', 'xquery'); ?>">XQuery be�ll�t�sa</a></li>
  </ul>
  
  <ol>
    <li>�rjunk XQuery lek�rdez�st a cars.xml f�jlhoz! Az eredm�ny j�l form�lt XML legyen! Az XQuery f�jl k�rdezze le az 5-n�l dr�g�bb aut�kat gy�rt� szerint n�vekv� �s �r szerint cs�kken� sorrendben!</li>
    <li>�rjunk XQuery lek�rdez�seket a cars.xml f�jlhoz! Az eredm�ny minden esetben j�l form�lt XML legyen! Az XQuery f�jlok csin�lj�k a k�vetkez�ket:
      <ol class="letters">
        <li>Lek�rdezi a tulajdonosok teljes nev�t.</li>
        <li>Visszaadja a dokumentumban l�v� aut�k rendsz�mainak �s a tulajdonosok azonos�t�inak Descartes-szorzat�t. Minden elem egy-egy gyerekelemben tartalmazza a rendsz�mot �s az azonos�t�t.</li>
        <li>Visszaadja azon szem�lyeket, akiknek nincs aut�ja. Az eredm�ny elemek tartalmazzanak egy vezeteknev �s egy keresztnev elemet, valamint egy id attrib�tumot.</li>
        <li>Visszaadja a dokumentumban l�v� aut� gy�rt�kat �s alattuk gyerekelemekk�nt a hozz�juk tartoz� rendsz�mokat.</li>
        <li>Visszaadja a dokumentumban l�v� aut� gy�rt�kat �s egy db attrib�tumban a hozz�juk tartoz� aut�k darabsz�m�t.</li>
        <li>Visszaadja a dokumentumban l�v� aut� gy�rt�kat �s egy avg attrib�tumban a hozz�juk tartoz� aut�k �tlag�r�t.</li>
      </ol>
    </li>
    
    <li>�rjunk XQuery lek�rdez�st a catalog.xml f�jlhoz! Az eredm�ny j�l form�lt XML legyen, �s tartalmazza az �vsz�mokat egy-egy elemk�nt (az �vsz�m attrib�tumban szerepeljen), �s minden �vsz�m elem alatt gyerekk�nt az adott �vben megjelent lemezek c�m�t. Az eredm�ny �vsz�m szerint n�vekv� sorrendben legyen, �s minden �vsz�m alatt a c�mek is �b�c� sorrendben szerepeljenek.</li>
  </ol>

  gyak10 folder
  gyak10_start folder

  <ol>
    <li>�rjunk XQuery lek�rdez�seket a cars.xml f�jlhoz! Az eredm�ny minden esetben j�l form�lt XML legyen! Az XQuery f�jlok csin�lj�k a k�vetkez�ket:
      <ol class="letters">
        <li>Besz�r egy x nev� elemet y sz�veges tartalommal minden auto elem v�g�re.</li>
        <li>T�rli az ABC-124-es rendsz�m� aut�t a dokumentumb�l.</li>
        <li>Minden ar elem hely�re egy price elemet sz�r be az eredeti tartalommal.</li>
        <li>Minden ar elemet �tnevez price elemm�.</li>
        <li>Minden �rat megszoroz 2-vel �s vissza�rja a dokumentumba.</li>
      </ol>
    </li>
    
    <li>�rjunk XQuery lek�rdez�seket a catalog.xml f�jlhoz! Az eredm�ny minden esetben j�l form�lt XML legyen! Az XQuery f�jlok csin�lj�k a k�vetkez�ket:
      <ol class="letters">
        <li>Minden cd elemet �tnevez albumra.</li>
        <li>Elt�vol�tja a p�ratlan id-j� cd elemeket.</li>
      </ol>
    </li>
    
    <li>�rjunk XQuery lek�rdez�st, amely egy saj�t f�ggv�ny seg�ts�g�vel
      <ol class="letters">
        <li>kisz�molja a faktori�lis f�ggv�ny �rt�keit 0-t�l 10-ig! Az eredm�ny legyen j�l form�lt XML, ahol az egyes elemek egy input attrib�tumban tartalmazz�k az inputot, a faktori�lis eredm�nye pedig a sz�veges tartalom.</li>
        <li>kisz�molja a Fibonacci-sz�mokat 0-t�l 10-ig: F(0)=0, F(1)=1, F(2)=1, F(3)=2, ...</li>
      </ol>
    </li>
  </ol>

gyak11 folder
gyak11_start folder

=== MD

A szükséges fájlok letölthetők [innen](courses/xml/practice10_start.zip).

* Írjunk XQuery lekérdezést a *cars.xml* fájlhoz. Az eredmény jól formált XML legyen. Az XQuery fájl kérdezze le az 5-nél drágább autókat gyártó szerint növekvő és ár szerint csökkenő sorrendben.
* Írjunk XQuery lekérdezéseket a *cars.xml* fájlhoz. Az eredmény minden esetben jól formált XML legyen. Az XQuery fájlok csinálják a következőket:
    * Lekérdezi a tulajdonosok teljes nevét.
    * Visszaadja a dokumentumban lévő autók rendszámainak és a tulajdonosok azonosítóinak Descartes-szorzatát. Minden elem egy-egy gyerekelemben tartalmazza a rendszámot és az azonosítót.
    * Visszaadja azon személyeket, akiknek nincs autója. Az eredmény elemek tartalmazzanak egy vezeteknev és egy keresztnev elemet, valamint egy id attribútumot.
    * Visszaadja a dokumentumban lévő autó gyártókat és alattuk gyerekelemekként a hozzájuk tartozó rendszámokat.
    * Visszaadja a dokumentumban lévő autó gyártókat és egy db attribútumban a hozzájuk tartozó autók darabszámát.
    * Visszaadja a dokumentumban lévő autó gyártókat és egy avg attribútumban a hozzájuk tartozó autók átlagárát.
* Írjunk XQuery lekérdezést a *catalog.xml* fájlhoz. Az eredmény jól formált XML legyen, és tartalmazza az évszámokat egy-egy elemként (az évszám attribútumban szerepeljen), és minden évszám elem alatt gyerekként az adott évben megjelent lemezek címét. Az eredmény évszám szerint növekvő sorrendben legyen, és minden évszám alatt a címek is ábécé sorrendben szerepeljenek.

=== MD

A szükséges fájlok letölthetők [innen](courses/xml/practice11_start.zip).

* Írjunk XQuery lekérdezéseket a *cars.xml* fájlhoz. Az eredmény minden esetben jól formált XML legyen. Az XQuery fájlok csinálják a következőket:
    * Beszúr egy *x* nevű elemet *y* szöveges tartalommal minden *auto* elem végére.
    * Törli az *ABC-124*-es rendszámú autót a dokumentumból.
    * Minden *ar* elem helyére egy *price* elemet szúr be az eredeti tartalommal.
    * Minden *ar* elemet átnevez *price* elemmé.
    * Minden árat megszoroz 2-vel és visszaírja a dokumentumba.
* Írjunk XQuery lekérdezéseket a *catalog.xml* fájlhoz. Az eredmény minden esetben jól formált XML legyen. Az XQuery fájlok csinálják a következőket:
    * Minden *cd* elemet átnevez *album*-ra.
    * Eltávolítja a páratlan id-jű *cd* elemeket.
* Írjunk XQuery lekérdezést, amely egy saját függvény segítségével
    * kiszámolja a faktoriális függvény értékeit 0-tól 10-ig. Az eredmény legyen jól formált XML, ahol az egyes elemek egy *input* attribútumban tartalmazzák az inputot, a faktoriális eredménye pedig a szöveges tartalom.
    * kiszámolja a Fibonacci-számokat 0-tól 10-ig: `F(0)=0`, `F(1)=1`, `F(2)=1`, `F(3)=2`, ...
