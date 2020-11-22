<h3>JAXB</h3>
  
  <p>A JAXB (Java API for XML Binding) olyan technol�gia, amellyel Java objektumokat tudunk automatikusan XML-l� konvert�lni, illetve adott s�m�ra illeszked� XML dokumentumokb�l automatikusan Java objektumokat l�trehozni. �gy programoz�k�nt nem kell foglalkoznunk a szerializ�ci�val/deszerializ�ci�val.</p>
  
  <p>A technol�gia l�nyege, hogy oszt�lyainkat Java annot�ci�kkal l�tjuk el, metaadatokat biztos�tva a rendszer sz�m�ra arr�l, hogy hogyan kell a konverzi�t elv�gezni. �gy megadhatjuk, hogy az egyes Java attrib�tumokb�l pl. XML elemek vagy attrib�tumok keletkezzenek.</p>
  
  <p>Az <a href="<?php echo getLink('xml/jaxb.zip'); ?>">itt</a> tal�lhat� zip egy Eclipse projektet tartalmaz, amely demonstr�lja az annot�ci�k megad�s�t �s a JAXB konverzi� manu�lis megh�v�s�t.</p>
  
  <p>Magasabb szint� technol�gi�k eset�n (pl. <a href="<?php echo getLink('http://www.vogella.com/articles/REST/article.html'); ?>" class="track">JAX-RS</a>) el�g az annot�ci�k megad�sa �s a konverzi� ezek ut�n automatikus. R�ad�sul megadhatjuk, hogy pl. XML, JSON vagy egy�b form�tum� szerializ�ci�t t�mogatunk, �s a JAXB-s annot�ci�knak k�sz�nhet�en a szerver oldal automatikusan a megfelel� v�lasz �zenetet gener�lja.</p>

  jaxb folder
  
  === MD

  A szükséges fájlok letölthetők [innen](courses/xml/practice13_start.zip).

Ezek a technológiák nem képezik részét az anyagnak, csak érdekességként raktam ki őket. Java fejlesztőknek a JAXB-t, C# fejlesztőknek a LINQ to SQL-t érdemes kipróbálni, mert ezek magasabb szintű technológiák, mint az eddigiek (SAX, DOM).

### JAXB

A JAXB (Java API for XML Binding) olyan technológia, amellyel Java objektumokat tudunk automatikusan XML-lé konvertálni, illetve adott sémára illeszkedő XML dokumentumokból automatikusan Java objektumokat létrehozni. Így programozóként nem kell foglalkoznunk a szerializációval/deszerializációval.

A technológia lényege, hogy osztályainkat Java annotációkkal látjuk el, metaadatokat biztosítva a rendszer számára arról, hogy hogyan kell a konverziót elvégezni. Így megadhatjuk, hogy az egyes Java attribútumokból pl. XML elemek vagy attribútumok keletkezzenek.

A zip fájl *jaxb* mappája egy Eclipse projektet tartalmaz, amely demonstrálja az annotációk megadását és a JAXB konverzió manuális meghívását.

Magasabb szintű technológiák esetén (pl. [JAX-RS](http://www.vogella.com/articles/REST/article.html)) elég az annotációk megadása és a konverzió ezek után automatikus. Ráadásul megadhatjuk, hogy pl. XML, JSON vagy egyéb formátumú szerializációt támogatunk, és a JAXB-s annotációknak köszönhetően a szerver oldal automatikusan a megfelelő válasz üzenetet generálja.
