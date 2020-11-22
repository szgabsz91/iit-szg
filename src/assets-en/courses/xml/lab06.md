<h3>1. feladat</h3>
  
  <p>�rjunk SAX alkalmaz�st, amely meghat�rozza, John Doe-nak h�ny szobafoglal�sa volt.</p>
  
  <ul class="letters">
    <li>El�sz�r hat�rozzuk meg az �sszes szobafoglal�s�t.</li>
    <li>Ut�na m�dos�tsuk �gy a programot, hogy csak a lakoszt�lyokat sz�molja �ssze.</li>
  </ul>
  
  <h3>2. feladat</h3>
  
  <p>Adott a k�vetkez� ER modell:</p>
  
  <p class="text-center">
    <img src="xml/gyak05.png" alt="ER modell" title="ER modell">
  </p>
  
  <ul class="letters">
    <li>K�sz�ts�k el az ER modellhez tartoz� XDM modellt �gy, hogy egy gy�k�relem alatt legyen egy aut�k �s tulajdonosok elem, azok alatt az ER modellben megadott strukt�r�k. A tulajdonosok �s aut�k k�zti kapcsolatot �gy reprezent�ljuk, hogy a tulajdonos elemen bel�l hozzunk l�tre egy aut�k elemet, �s azon bel�l aut� elemekkel soroljuk fel a birtokolt aut�k rendsz�m�t.</li>
    <li>K�sz�ts�k el az XDM-nek megfelel� XML �llom�nyt. Minden elem �s attrib�tum egy <i>"a"</i> aliasszal legyen k�tve a <i>http://iit.uni-miskolc.hu/xml/autok</i> n�vt�rhez. A mell�kelt k�t t�bl�zat tartalmazza a felt�ltend� adatokat.</li>
    <li>�rjunk XML Schem�t az elk�sz�lt XML f�jlhoz a k�vetkez� felt�telekkel:
      <ul>
        <li>A s�m�ban a saj�t n�vt�rhez haszn�ljunk <i>"a"</i> aliast.</li>
        <li>A rendsz�mok �s id-k legyenek els�dleges kulcsok, a tulajdonoson bel�li aut� elemek legyenek idegen kulcsok a rendsz�mokra.</li>
        <li>Egy aut� rendsz�ma legfeljebb csak egyszer szerepelhessen a tulajdonosokon bel�l.</li>
        <li>A rendsz�m form�tuma a szok�sos: 3 nagybet�, k�t�jel, 3 sz�m. Pl.: ABC-123</li>
      </ul>
    </li>
    <li>Hozzunk l�tre egy s�m�nak megfelel� XML dokumentumot a mell�kelt t�bl�zatok adatai alapj�n.</li>
    <li>�rjunk SAX alkalmaz�st, amely meghat�rozza a k�k sz�n� aut�k tulajdonosainak �tlagfizet�s�t. Figyelj�nk arra, hogy ha egy tulajdonosnak t�bb k�k sz�n� aut�ja is van, a fizet�se akkor is csak egyszer szerepeljen az �tlagban.</li>
  </ul>
  
  <table class="table table-striped table-hover" id="cars">
    <tbody>
      <tr>
        <th>Rendsz�m</th>
        <th>Gy�rt�</th>
        <th>Sz�n</th>
      </tr>
      <tr>
        <td>ABC-123</td>
        <td>Honda</td>
        <td>feh�r</td>
      </tr>
      <tr>
        <td>ABC-124</td>
        <td>BMW</td>
        <td>k�k</td>
      </tr>
      <tr>
        <td>ABC-125</td>
        <td>Mercedes</td>
        <td>fekete</td>
      </tr>
      <tr>
        <td>ABC-126</td>
        <td>Kia</td>
        <td>k�k</td>
      </tr>
      <tr>
        <td>ABC-127</td>
        <td>Hyundai</td>
        <td>ez�st</td>
      </tr>
      <tr>
        <td>ABC-128</td>
        <td>Honda</td>
        <td>k�k</td>
      </tr>
    </tbody>
  </table>
  
  <table class="table table-striped table-hover" id="owners">
    <tbody>
      <tr>
        <th>Id</th>
        <th>Fizet�s</th>
        <th>Aut�k</th>
      </tr>
      <tr>
        <td>1</td>
        <td>10</td>
        <td>ABC-123</td>
      </tr>
      <tr>
        <td>2</td>
        <td>15</td>
        <td>ABC-124 �s ABC-125</td>
      </tr>
      <tr>
        <td>3</td>
        <td>20</td>
        <td>ABC-127</td>
      </tr>
      <tr>
        <td>4</td>
        <td>25</td>
        <td>ABC-126 �s ABC-128</td>
      </tr>
      </tr>
    </tbody>
  </table>
  
  <p>Pr�b�ljuk megoldani, hogy feldolgoz�skor valid�ljuk is a dokumentumot. Hiba eset�n �rjuk ki a kapott kiv�telt. Egy kis seg�ts�g: <a href="<?php echo getLink('http://docs.oracle.com/javase/tutorial/jaxp/sax/validation.html'); ?>" class="track">http://docs.oracle.com/javase/tutorial/jaxp/sax/validation.html</a></p>
  
  <h3>3. feladat</h3>
  
  <p>�rjunk SAX alkalmaz�st, amely meghat�rozza a k�vetkez� mennyis�geket:</p>
  
  <ol class="letters">
    <li>a tulajdonosok �sszfizet�se</li>
    <li>az aut�k darabsz�ma</li>
    <li>az tulajdonosok �tlagfizet�se</li>
  </ol>

  gyak05.png
  gyak05 folder
  gyak05_start folder
  
  === MD

  A feladatokhoz szükséges fájlok letölthetőek [innen](courses/xml/practice05_start.zip).

### 1. feladat

Írjunk SAX alkalmazást, amely meghatározza, John Doe-nak hány szobafoglalása volt.

* Először határozzuk meg az összes szobafoglalását.
* Utána módosítsuk úgy a programot, hogy csak a lakosztályokat számolja össze.

### 2. feladat

Adott a következő ER modell:

![ER modell](practice05.png)

* Készítsük el az ER modellhez tartozó XDM modellt úgy, hogy egy gyökérelem alatt legyen egy autók és tulajdonosok elem, azok alatt az ER modellben megadott struktúrák. A tulajdonosok és autók közti kapcsolatot úgy reprezentáljuk, hogy a tulajdonos elemen belül hozzunk létre egy autók elemet, és azon belül autó elemekkel soroljuk fel a birtokolt autók rendszámát.
* Készítsük el az XDM-nek megfelelő XML állományt. Minden elem és attribútum egy *"a"* aliasszal legyen kötve a *http://iit.uni-miskolc.hu/xml/autok* névtérhez. A mellékelt két táblázat tartalmazza a feltöltendő adatokat.
* Írjunk XML Schemát az elkészült XML fájlhoz a következő feltételekkel:
    * A sémában a saját névtérhez használjunk *"a"* aliast.
    * A rendszámok és id-k legyenek elsődleges kulcsok, a tulajdonoson belüli autó elemek legyenek idegen kulcsok a rendszámokra.
    * Egy autó rendszáma legfeljebb csak egyszer szerepelhessen a tulajdonosokon belül.
    * A rendszám formátuma a szokásos: 3 nagybetű, kötőjel, 3 szám. Pl.: *ABC-123*
* Hozzunk létre egy sémának megfelelő XML dokumentumot a mellékelt táblázatok adatai alapján.
* Írjunk SAX alkalmazást, amely meghatározza a kék színű autók tulajdonosainak átlagfizetését. Figyeljünk arra, hogy ha egy tulajdonosnak több kék színű autója is van, a fizetése akkor is csak egyszer szerepeljen az átlagban.

| Rendszám | Gyártó   | Szín   |
| -------- | -------- | ------ |
| ABC-123  | Honda    | fehér  |
| ABC-124  | BMW      | kék    |
| ABC-125  | Mercedes | fekete |
| ABC-126  | Kia      | kék    |
| ABC-127  | Hyundai  | ezüst  |
| ABC-128  | Honda    | kék    |

| Id | Fizetés | Autók              |
| --:| -------:| ------------------ |
| 1  | 10      | ABC-123            |
| 2  | 15      | ABC-124 és ABC-125 |
| 3  | 20      | ABC-127            |
| 4  | 25      | ABC-126 és ABC-128 |

Próbáljuk megoldani, hogy feldolgozáskor validáljuk is a dokumentumot. Hiba esetén írjuk ki a kapott kivételt. Egy kis segítség: [http://docs.oracle.com/javase/tutorial/jaxp/sax/validation.html](http://docs.oracle.com/javase/tutorial/jaxp/sax/validation.html)

### 3. feladat

Írjunk SAX alkalmazást, amely meghatározza a következő mennyiségeket:

* a tulajdonosok összfizetése
* az autók darabszáma
* az tulajdonosok átlagfizetése
