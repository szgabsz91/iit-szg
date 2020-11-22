<ul>
    <li><a href="<?php echo getLink('xml/setup-ide.php', 'xpath'); ?>">XPath be�ll�t�sa</a></li>
  </ul>

<h3>XPath feladatok</h3>
  
  <ol>
    <li>Az src/data/catalog.xml f�jlhoz �rjunk XPath kifejez�seket! Pr�b�ljuk meg�rni a kifejez�sek r�vid�tett �s teljes alakj�t is! A kifejez�sek a k�vetkez� elemeket adj�k vissza:
      <ol class="letters">
        <li>az �sszes cd nev� elemet az XDM b�rmely szintj�n</li>
        <li>tetsz�leges szinten l�v� cd elemek artist gyerekeit</li>
        <li>a catalog alatti cd elemek artist gyerekeit</li>
        <li>a catalog alatti harmadik cd elemet</li>
        <li>azon CD-k c�m�t, melyek el�ad�ja Bob Dylan</li>
        <li>a '80-as �vek albumainak �tlag�r�t (pr�b�ljuk meg az �tlagf�ggv�nnyel, illetve az �sszeg �s darabsz�m f�ggv�nyek h�nyadosak�nt is)</li>
        <li>az els� �s utols� album �r�nak �sszeg�t</li>
        <li>a 26-os id-j� albumra a k�vetkez� szerkezet� stringet: "El�ad�: C�m (�vsz�m, kiad�)", azaz az elv�rt eredm�ny: "Joe Cocker: Unchain my heart (1987, EMI)"</li>
        <li>Luciano Pavarotti lemez�nek azonos�t�j�t</li>
        <li>az akci�s cd elemeket</li>
      </ol>
    </li>
    
    <li>A src/data/autoDB.xml f�jlhoz �rjunk XPath kifejez�seket, amelyek a k�vetkez�ket adj�k vissza:
      <ol class="letters">
        <li>azon tulajdonosokat, akiknek t�bb mint egy aut�juk van</li>
        <li>a k�k aut�k rendsz�mait</li>
        <li>a k�k aut�k �tlag�r�t</li>
        <li>azon tulajdonosok darabsz�ma, akik vezet�kneve Doe</li>
      </ol>
    </li>
  </ol>

gyak08 folder
gyak08_start folder

=== MD

* Az *src/data/catalog.xml* fájlhoz írjunk XPath kifejezéseket. Próbáljuk megírni a kifejezések rövidített és teljes alakját is. A kifejezések a következő elemeket adják vissza:
    * az összes *cd* nevű elemet az XDM bármely szintjén
    * tetszőleges szinten lévő *cd* elemek *artist* gyerekeit
    * a *catalog* alatti *cd* elemek *artist* gyerekeit
    * a *catalog* alatti harmadik *cd* elemet
    * azon CD-k címét, melyek előadója Bob Dylan
    * a '80-as évek albumainak átlagárát (próbáljuk meg az átlagfüggvénnyel, illetve az összeg és darabszám függvények hányadosaként is)
    * az első és utolsó album árának összegét
    * a 26-os id-jű albumra a következő szerkezetű stringet: *"Előadó: Cím (évszám, kiadó)"*, azaz az elvárt eredmény: *"Joe Cocker: Unchain my heart (1987, EMI)"*
    * Luciano Pavarotti lemezének azonosítóját
    * az akciós *cd* elemeket
* A *src/data/autoDB.xml* fájlhoz írjunk XPath kifejezéseket, amelyek a következőket adják vissza:
    * azon tulajdonosokat, akiknek több mint egy autójuk van
    * a kék autók rendszámait
    * a kék autók átlagárát
    * azon tulajdonosok darabszáma, akik vezetékneve Doe
