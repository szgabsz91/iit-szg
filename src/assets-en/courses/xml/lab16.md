  <p class="text-center">
    <img src="xml/gyak12.png" alt="Rel�ci�s modell" title="Rel�ci�s modell">
  </p>
  
  <ol>
    <li>
      Oldjuk meg a k�vetkez� feladatokat!
      <ol class="letters">
        <li>Hozzuk l�tre a People �s Messages t�bl�t a fenti rel�ci�s modell alapj�n.</li>
        <li>
          Vegy�nk fel 4 szem�lyt (John, Mike, Jack, James) �s 2 �zenetet az adatb�zisba �gy, hogy
          <ul>
            <li>Az els� �zenetet k�ls� f�jlb�l t�lts�k fel, a m�sodikat manu�lisan sz�vegk�nt.</li>
            <li>Az �zenetek tartalma feleljen meg a message.xsd f�jlnak.</li>
            <li>Az �zenetek adatait az al�bbi t�bl�zat tartalmazza.</li>
          </ul>
        </li>
        <li>K�rdezz�k le a c�mzettek adatait.</li>
        <li>K�rdezz�k le azon �zenetek sz�veg�t �s d�tum�t, amelyeket okt�ber h�napban k�ldtek el.</li>
        <li>K�rdezz�k le azon �zenetek sz�veg�t, melyek t�rgya "XML".</li>
        <li>K�rdezz�k le a leghosszabb sz�veg� �zenet sz�veg�t.</li>
        <li>K�rdezz�k le a legmagasabb priorit�s� �zenet azonos�t�j�t. �gyelj�nk arra, hogy a priorit�s opcion�lis elem, alap�rtelmezett �rt�ke 0.</li>
        <li>K�rdezz�k le azon �zenetek �sszes adat�t, amelyek nem tartalmaznak kulcsszavakat.</li>
        <li>K�rdezz�k le azon �zenetek �sszes adat�t, amelyeknek legal�bb egy kulcsszava tartalmazza a "database" sz�t �s felad�juk John.</li>
        <li>Adjuk hozz� az "xml" kulcssz�t a 2-es azonos�t�j� �zenethez.</li>
        <li>M�dos�tsuk a 2-es azonos�t�j� �zenet priorit�s�t 0.5-re.</li>
        <li>T�r�lj�k a 2-es azonos�t�j� �zenet kulcsszavait.</li>
        <li>XQuery seg�ts�g�vel hat�rozzuk meg az "XML" t�rgy� �zenet sz�veg�t.</li>
        <li>XQuery seg�ts�g�vel hat�rozzuk meg a kulcssz�val rendelkez� �zenetek sz�veg�t.</li>
      </ol>
    </li>
    
    <li>
      Oldjuk meg a k�vetkez� feladatokat!
      <ol class="letters">
        <li>Hozzuk l�tre a PersonContacts t�bl�t is a fenti rel�ci�s modell alapj�n.</li>
        <li>T�lts�k fel az �j t�bl�t a lenti m�sodik t�bl�zat adataival �gy, hogy az els� sort k�ls� XML f�jlb�l, a m�sodik sort pedig be�gyazott XML-lel sz�rjuk be.</li>
        <li>K�rdezz�k le azon szem�lyek nev�t �s telefonsz�mait, akik rendelkeznek telefonsz�mmal �s e-mail c�mmel is.</li>
        <li>K�rdezz�k le a C v�rosban �l�k teljes c�m�t.</li>
        <li>K�rdezz�k le azon szem�lyek e-mail c�m�t, akikn�l nincs megadva c�m.</li>
        <li>K�rdezz�k le a legt�bb telefonsz�mmal rendelkez� szem�lyek weboldal�t.</li>
        <li>K�rdezz�k le a 47-es k�rzet� telefonsz�mmal rendelkez� szem�lyek �sszes el�rhet�s�g�t. Ha nincs megadva egy el�rhet�s�g, ott k�rzetsz�m eset�n 46, h�zsz�m eset�n 0, a t�bbi sz�veges mez� eset�n pedig az "N/A" sz�veg j�jj�n vissza.</li>
        <li>K�rdezz�k le azon szem�lyek nev�t, akiknek van weboldala.</li>
        <li>K�rdezz�k le azon szem�lyek nev�t, akiknek az e-mail c�me �s a weboldala is "z.com"-ra v�gz�dik.</li>
        <li>Adjuk hozz� a "mike@xml.com" e-mail c�met Mike-hoz.</li>
        <li>M�dos�tsuk a 2-es azonos�t�j� contact rekord telefonsz�m�t "48/123-458"-ra.</li>
        <li>T�r�lj�k Mike telefonsz�m�t.</li>
        <li>XQuery seg�ts�g�vel hat�rozzuk meg az "123-456" telefonsz�m� szem�ly e-mail c�m�t.</li>
        <li>XQuery seg�ts�g�vel hat�rozzuk meg a telefonsz�mmal nem rendelkez� szem�lyek v�ros�t.</li>
      </ol>
    </li>
  </ol>
  
  <hr>
  
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Date</th>
        <th>Subject</th>
        <th>Keywords</th>
        <th>Text</th>
        <th>Priority</th>
      </tr>
    </thead>
    <tbody>
      <tr>
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
  
  <hr>
  
  <table class="table table-striped table-hover">
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
          46/123-456<br>
          46/123-457
        </td>
        <td>-</td>
        <td>x.y@z.com</td>
        <td>http://www.z.com</td>
      </tr>
      <tr>
        <td>Mike</td>
        <td>47/123-458</td>
        <td>C, S 1</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>

gyak12.png
gyak12 folder
gyak12_start folder

=== MD

A szükséges fájlok letölthetők [innen](courses/xml/practice12_start.zip).

![Relációs modell](practice12.png)

Oldjuk meg a következő feladatokat:

* Hozzuk létre a `People` és `Messages` táblát a fenti relációs modell alapján.
* Vegyünk fel 4 személyt (*John*, *Mike*, *Jack*, *James*) és 2 üzenetet az adatbázisba úgy, hogy
    * az első üzenetet külső fájlból töltsük fel, a másodikat manuálisan szövegként,
    * az üzenetek tartalma feleljen meg a message.xsd fájlnak,
    * az üzenetek adatait az alábbi táblázat tartalmazza.
* Kérdezzük le a címzettek adatait.
* Kérdezzük le azon üzenetek szövegét és dátumát, amelyeket október hónapban küldtek el.
* Kérdezzük le azon üzenetek szövegét, melyek tárgya *"XML"*.
* Kérdezzük le a leghosszabb szövegű üzenet szövegét.
* Kérdezzük le a legmagasabb prioritású üzenet azonosítóját. Ügyeljünk arra, hogy a prioritás opcionális elem, alapértelmezett értéke 0.
* Kérdezzük le azon üzenetek összes adatát, amelyek nem tartalmaznak kulcsszavakat.
* Kérdezzük le azon üzenetek összes adatát, amelyeknek legalább egy kulcsszava tartalmazza a *"database"* szót és feladójuk *John*.
* Adjuk hozzá az *"xml"* kulcsszót a 2-es azonosítójú üzenethez.
* Módosítsuk a 2-es azonosítójú üzenet prioritását 0.5-re.
* Töröljük a 2-es azonosítójú üzenet kulcsszavait.
* XQuery segítségével határozzuk meg az *"XML"* tárgyú üzenet szövegét.
* XQuery segítségével határozzuk meg a kulcsszóval rendelkező üzenetek szövegét.

Oldjuk meg a következő feladatokat:

* Hozzuk létre a `PersonContacts` táblát is a fenti relációs modell alapján.
* Töltsük fel az új táblát a lenti második táblázat adataival úgy, hogy az első sort külső XML fájlból, a második sort pedig beágyazott XML-lel szúrjuk be.
* Kérdezzük le azon személyek nevét és telefonszámait, akik rendelkeznek telefonszámmal és e-mail címmel is.
* Kérdezzük le a *C* városban élők teljes címét.
* Kérdezzük le azon személyek e-mail címét, akiknél nincs megadva cím.
* Kérdezzük le a legtöbb telefonszámmal rendelkező személyek weboldalát.
* Kérdezzük le a 47-es körzetű telefonszámmal rendelkező személyek összes elérhetőségét. Ha nincs megadva egy elérhetőség, ott körzetszám esetén *46*, házszám esetén *0*, a többi szöveges mező esetén pedig az *"N/A"* szöveg jöjjön vissza.
* Kérdezzük le azon személyek nevét, akiknek van weboldala.
* Kérdezzük le azon személyek nevét, akiknek az e-mail címe és a weboldala is *"z.com"*-ra végződik.
* Adjuk hozzá a *"mike@xml.com"* e-mail címet Mike-hoz.
* Módosítsuk a 2-es azonosítójú contact rekord telefonszámát *"48/123-458"*-ra.
* Töröljük Mike telefonszámát.
* XQuery segítségével határozzuk meg az *"123-456"* telefonszámú személy e-mail címét.
* XQuery segítségével határozzuk meg a telefonszámmal nem rendelkező személyek városát.

| From | To    | Date       | Subject                | Keywords                               | Text                                                                                 | Priority |
| ---- | ----- | ---------- | ---------------------- | -------------------------------------- | ------------------------------------------------------------------------------------ | -------- |
| John | Jack  | 2014-09-30 | Weak data inside a DB? | relational database, weak data, how to | I need a way to put weak data inside a relational database. Is there a standard way? | -        |
| Mike | James | 2014-10-12 | XML                    | -                                      | XML rocks even inside a relational database!                                         | 1.0      |

| Person | Phone numbers          | Addresses | E-mail addresses | Websites         |
| ------ | ---------------------- | --------- | ---------------- | ---------------- |
| John   | 46/123-456, 46/123-457 | -         | x.y@z.com        | http://www.z.com |
| Mike   | 47/123-458             | C, S 1    | -                | -                |
