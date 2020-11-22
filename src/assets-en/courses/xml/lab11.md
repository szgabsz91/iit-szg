<p>El�felt�telek:</p>
  
  <ul>
    <li><a href="<?php echo getLink('xml/setup-ide.php', 'json'); ?>">JSON</a></li>
    <li><a href="<?php echo getLink('xml/setup-ide.php', 'svg'); ?>">SVG</a></li>
  </ul>
  
  <ol>
    <li>Alak�tsuk �t az src/data/1.xml f�jlt JSON form�tumra!</li>
    
    <li>jQuery seg�ts�g�vel dolgozzuk fel <a href="<?php echo getLink('xml/api/cars.php'); ?>" class="track">ezt az aut� adatb�zist</a> XML �s JSON form�tum� adatk�nt is. (A <i>format</i> GET param�terrel �ll�that� a k�v�nt form�tum.) A HTML oldalra tegy�nk egy 3 oszlopos t�bl�zatot az adatoknak, �s minden sor bet�sz�ne egyezzen meg az aut� sz�n�vel!</li>
    
    <li>A <i>719908684724824</i> azonos�t�j� Facebook alkalmaz�st �s jQuery-t haszn�lva �rjunk olyan webes alkalmaz�st, amely megjelen�ti a saj�t Facebook profilunk k�p�t, a nev�nket �s e-mail c�m�nket, valamint egy linket a profilunkra!</li>
    
    <li>jQuery seg�ts�g�vel jelen�ts�k meg a <a href="<?php echo getLink('http://gdata.youtube.com/feeds/api/users/GoogleDevelopers/uploads'); ?>" class="track">Google Developers</a> YouTube csatorna RSS folyam�nak bejegyz�seit! Minden elemhez jelen�ts�k meg a c�m�t, egy k�pet �s a bejegyz�s tartalm�t. A c�mre kattintva �j oldalon ny�ljon meg a YouTube vide�.</li>
    
    <li>�rjunk SAX alkalmaz�st, amely ki�rja, hogy h�ny bekezd�s tal�lhat� az src/data/5.xhtml f�jlban!</li>
    
    <li>K�sz�ts�nk egy SVG k�pet, amelyen k�l�nb�z� sz�n�, m�ret� �s poz�ci�j� k�r�k �s n�gyzetek vannak!</li>
  </ol>
  
  gyak07 folder
  gyak07_start folder

<?php

header('Access-Control-Allow-Origin: *');

if (!isset($_GET['format'])) {
  exit('Format not specified!');
}

if ($_GET['format'] === 'xml'):
  header('Content-Type: application/xml; Charset=UTF-8');

?>
<?xml version="1.0" encoding="ISO-8859-2"?>
<c:cars xmlns:c="http://iit.uni-miskolc.hu/xml/cars">
  
  <c:car>
    <c:manufacturer>Honda</c:manufacturer>
    <c:color>green</c:color>
    <c:price>5.2</c:price>
  </c:car>
  
  <c:car>
    <c:manufacturer>BMW</c:manufacturer>
    <c:color>blue</c:color>
    <c:price>4.5</c:price>
  </c:car>
  
  <c:car>
    <c:manufacturer>Mercedes</c:manufacturer>
    <c:color>black</c:color>
    <c:price>7.4</c:price>
  </c:car>
  
  <c:car>
    <c:manufacturer>Kia</c:manufacturer>
    <c:color>blue</c:color>
    <c:price>3.8</c:price>
  </c:car>
  
  <c:car>
    <c:manufacturer>Honda</c:manufacturer>
    <c:color>black</c:color>
    <c:price>6.1</c:price>
  </c:car>
  
  <c:car>
    <c:manufacturer>Hyundai</c:manufacturer>
    <c:color>silver</c:color>
    <c:price>4.2</c:price>
  </c:car>
  
  <c:car>
    <c:manufacturer>Honda</c:manufacturer>
    <c:color>blue</c:color>
    <c:price>5</c:price>
  </c:car>
  
</c:cars>
<?php

elseif ($_GET['format'] === 'json'):
  header('Content-Type: application/json; Charset=UTF-8');

?>
[
  {
    "manufacturer": "Honda",
    "color": "green",
    "price": 5.2
  },
  
  {
    "manufacturer": "BMW",
    "color": "blue",
    "price": 4.5
  },
  
  {
    "manufacturer": "Mercedes",
    "color": "black",
    "price": 7.4
  },
  
  {
    "manufacturer": "Kia",
    "color": "blue",
    "price": 3.8
  },
  
  {
    "manufacturer": "Honda",
    "color": "black",
    "price": 6.1
  },
  
  {
    "manufacturer": "Hyundai",
    "color": "silver",
    "price": 4.2
  },
  
  {
    "manufacturer": "Honda",
    "color": "blue",
    "price": 5
  }
]
<?php

endif;

?>

RSS: https://www.youtube.com/feeds/videos.xml?channel_id=UCnUYZLuoy1rq1aVMwx4aTzw

=== MD

A feladatokhoz szükséges fájlok letölthetőek [innen](courses/xml/practice07_start.zip).

* Alakítsuk át az *src/data/1.xml* fájlt JSON formátumra!
* jQuery segítségével dolgozzuk fel [ezt az autó adatbázist](xml/api/cars.php) XML és JSON formátumú adatként is. (A `format` GET paraméterrel állítható a kívánt formátum.) A HTML oldalra tegyünk egy 3 oszlopos táblázatot az adatoknak, és minden sor betűszíne egyezzen meg az autó színével!
* A *719908684724824* azonosítójú Facebook alkalmazást és jQuery-t használva írjunk olyan webes alkalmazást, amely megjeleníti a saját Facebook profilunk képét, a nevünket és e-mail címünket, valamint egy linket a profilunkra!
* jQuery segítségével jelenítsük meg a [Google Chrome Developers](https://www.youtube.com/feeds/videos.xml?channel_id=UCnUYZLuoy1rq1aVMwx4aTzw) YouTube csatorna RSS folyamának bejegyzéseit! Minden elemhez jelenítsük meg a címét, egy képet és a bejegyzés tartalmát. A címre kattintva új oldalon nyíljon meg a YouTube videó.
* Írjunk SAX alkalmazást, amely kiírja, hogy hány bekezdés található az *src/data/5.xhtml* fájlban!
* Készítsünk egy SVG képet, amelyen különböző színű, méretű és pozíciójú körök és négyzetek vannak!
