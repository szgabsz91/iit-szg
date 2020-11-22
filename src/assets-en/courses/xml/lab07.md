<ol>
    <li>Az Eclipse projekt src/data/cars.xml f�jlj�hoz �rjunk SAX alkalmaz�st, amely lek�rdezi a Honda t�pus� aut�k �tlag�r�t. Az alkalmaz�s v�za az org.iit.xml.sax csomagban tal�lhat�, a feladatunk a CarHandler oszt�ly implement�l�sa.</li>
    
    <li>�rjunk DOM alkalmaz�st (az alkalmaz�s v�za az org.iit.xml.dom.a csomagban tal�lhat�), amely a k�vetkez�ket v�gzi el egym�s ut�n:
      <ul class="letters">
        <li>Lek�rdezi a Honda t�pus� aut�k �tlag�r�t.</li>
        <li>Elt�vol�tja az XML-b�l a Mercedes t�pus� aut�kat �s az eredm�nyt ki�rja a konzolra.</li>
        <li>Hozz�ad a dokumentumhoz egy �j aut�t �s az eredm�nyt ki�rja a konzolra.</li>
      </ul>
    </li>
    
    <li>�rjunk DOM alkalmaz�st, amely meghat�rozza az src/data/autoDB.xml f�jlban tal�lhat� k�k sz�n� aut�k tulajdonosainak az �tlagfizet�s�t. Figyelj�nk arra, hogy ha egy tulajdonosnak t�bb k�k sz�n� aut�ja is van, a fizet�se akkor is csak egyszer szerepeljen az �tlagban. Pr�b�ljuk megoldani, hogy a program feldolgoz�s el�tt valid�lja a dokumentumot, �s az esetleges hib�kat �rja ki! Egy kis seg�ts�g: <a href="<?php echo getLink('http://www.edankert.com/validate.html'); ?>" class="track">http://www.edankert.com/validate.html</a> Ezek ut�n adjunk hozz� a dokumentumhoz egy �j aut�t �s t�vol�tsuk el az utols� tulajdonost, majd �rassuk ki a kapott dokumentumot a konzolra, vagy egy k�ls� f�jlba. (<a href="<?php echo getLink('http://docs.oracle.com/javaee/1.4/tutorial/doc/JAXPXSLT4.html'); ?>" class="track">seg�ts�g a f�jlba ment�shez</a>)</li>
    
    <li>�rjunk DOM alkalmaz�st, amely meghat�rozza a k�vetkez� mennyis�geket:
      <ol class="letters">
        <li>a tulajdonosok �sszfizet�se</li>
        <li>az aut�k darabsz�ma</li>
        <li>az tulajdonosok �tlagfizet�se</li>
      </ol>
    </li>
  </ol>

  gyak06 folder
  gyak06_start folder
  
  <ol>
    <li>Az src/data/catalog.xml f�jlhoz �rjunk SAX �s DOM alkalmaz�st, amelyek ki�rj�k az egysz�mjegy� id-vel rendelkez�, '80-as �vekben megjelent albumok �tlag�r�t. A DOM alkalmaz�sban a lek�rdez�s ut�n t�vol�tsuk el a <i>"Hide your heart"</i> c�m� albumot, majd adjunk hozz� egy �j albumot a dokumentum v�g�hez. (Nem sz�ks�ges a m�dos�t�sokat visszamenteni f�jlba, el�g ki�rni az eredm�ny dokumentumot a konzolra. Ehhez haszn�lhatjuk az el�z� gyakorlat <i>printDocument</i> met�dus�t.)</li>
  </ol>

  gyak08_start folder
  gyak08 folder

=== MD

A feladatokhoz szükséges fájlok letölthetőek [innen](courses/xml/practice06_start.zip).

* Az Eclipse projekt *src/data/cars.xml* fájljához írjunk SAX alkalmazást, amely lekérdezi a Honda típusú autók átlagárát. Az alkalmazás váza az `org.iit.xml.sax` csomagban található, a feladatunk a `CarHandler` osztály implementálása.
* Írjunk DOM alkalmazást (az alkalmazás váza az `org.iit.xml.dom.a` csomagban található), amely a következőket végzi el egymás után:
    * Lekérdezi a Honda típusú autók átlagárát.
    * Eltávolítja az XML-ből a Mercedes típusú autókat és az eredményt kiírja a konzolra.
    * Hozzáad a dokumentumhoz egy új autót és az eredményt kiírja a konzolra.
* Írjunk DOM alkalmazást, amely meghatározza az *src/data/autoDB.xml* fájlban található kék színű autók tulajdonosainak az átlagfizetését. Figyeljünk arra, hogy ha egy tulajdonosnak több kék színű autója is van, a fizetése akkor is csak egyszer szerepeljen az átlagban. Próbáljuk megoldani, hogy a program feldolgozás előtt validálja a dokumentumot, és az esetleges hibákat írja ki! Egy kis segítség: [http://www.edankert.com/validate.html](http://www.edankert.com/validate.html). Ezek után adjunk hozzá a dokumentumhoz egy új autót és távolítsuk el az utolsó tulajdonost, majd írassuk ki a kapott dokumentumot a konzolra, vagy egy külső fájlba. ([Segítség a fájlba mentéshez](http://docs.oracle.com/javaee/1.4/tutorial/doc/JAXPXSLT4.html))
* Írjunk DOM alkalmazást, amely meghatározza a következő mennyiségeket:
    * a tulajdonosok összfizetése
    * az autók darabszáma
    * az tulajdonosok átlagfizetése

=== MD

* Az *src/data/catalog.xml* fájlhoz írjunk SAX és DOM alkalmazást, amelyek kiírják az egyszámjegyű id-vel rendelkező, '80-as években megjelent albumok átlagárát. A DOM alkalmazásban a lekérdezés után távolítsuk el a *"Hide your heart"* című albumot, majd adjunk hozzá egy új albumot a dokumentum végéhez. (Nem szükséges a módosításokat visszamenteni fájlba, elég kiírni az eredmény dokumentumot a konzolra. Ehhez használhatjuk az előző gyakorlat `printDocument` metódusát.) --> practice08
