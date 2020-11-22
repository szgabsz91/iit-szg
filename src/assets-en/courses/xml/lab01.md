<h3>1. feladat</h3>
  
  <p>Hozzunk l�tre XDM modellt az al�bbi XML dokumentumhoz:</p>
  
  <pre class="prettyprint" data-label="XML"
>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;termeklista&gt;
  &lt;gyartok&gt;
    &lt;gyarto kod=&quot;g1&quot;&gt;
      &lt;nev&gt;Blackberry&lt;/nev&gt;
      &lt;orszag&gt;Kanada&lt;/orszag&gt;
    &lt;/gyarto&gt;
    
    &lt;gyarto kod=&quot;g2&quot;&gt;
      &lt;nev&gt;Apple&lt;/nev&gt;
      &lt;orszag&gt;USA&lt;/orszag&gt;
    &lt;/gyarto&gt;
  &lt;/gyartok&gt;
  
  &lt;termekek&gt;
    &lt;termek tkod=&quot;t1&quot; gyarto=&quot;g2&quot;&gt;
      &lt;megnevezes&gt;MacBook Air&lt;/megnevezes&gt;
      &lt;ujdonsag/&gt;
      &lt;ear pnem=&quot;Ft&quot;&gt;310000&lt;/ear&gt;
    &lt;/termek&gt;
    
    &lt;termek tkod=&quot;t2&quot; gyarto=&quot;g1&quot;&gt;
      &lt;megnevezes&gt;Z10 Mobilephone&lt;/megnevezes&gt;
      &lt;ear pnem=&quot;Ft&quot;&gt;130000&lt;/ear&gt;
    &lt;/termek&gt;
  &lt;/termekek&gt;
&lt;/termeklista&gt;</pre>
  
  <h3>2. feladat</h3>
  
  <p>Hozzunk l�tre XML dokumentumot az al�bbi XDM modellhez!</p>
  
  <p class="text-center">
    <img src="xml/gyak01.png" alt="XDM modell" title="XDM modell">
  </p>
  
  <h3>3. feladat</h3>
  
  <h4>3.1. feladat</h4>
  
  <p>Milyen hib�k vannak az al�bbi XML k�dokban?</p>
  
  <ul>
    <li>
      &lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;a a=&quot;G&quot;&gt;&lt;/A&gt;
    </li>
    
    <li>
      &lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;a a=&quot;G&quot;/&gt;&lt;/A&gt;
    </li>
    
    <li>
      &lt;?xml version=1.0?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;b a=&apos;G&apos;&gt;&lt;/A&gt;
    </li>
    
    <li>
      &lt;xml version=&quot;1.0&quot;/&gt;&lt;A&gt;&lt;a&gt;2&lt;/a b=&apos;G&apos;&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;a&gt;&lt;/a&gt;
    </li>
    
    <li>
      &lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/a&gt;&lt;/d&gt;&lt;a/&gt;&lt;/A&gt;&lt;a&gt;2&lt;/a&gt;
    </li>
    
    <li>
      &lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a=3&gt;&lt;a&gt;&lt;/A&gt;
    </li>
  </ul>
  
  <h4>3.2. feladat</h4>
  
  <p>Tegy�nk minden elemet az ALMA n�vt�rbe alias seg�ts�g�vel!</p>
  
  <h4>3.3. feladat</h4>
  
  <p>Tegy�nk minden elemet egy ALMA n�vt�rbe alias haszn�lata n�lk�l!</p>
  
  <h4>3.4. feladat</h4>
  
  <p>Tegy�k be az attrib�tumokat is a n�vt�rbe!</p>
  
  <h4>3.5. feladat</h4>
  
  <p>Tegy�nk egy elemet �s annak attrib�tumait k�l�nb�z� n�vterekbe!</p>
  
  <h4>3.6. feladat</h4>
  
  <p>Tegy�nk megjegyz�seket az XML dokumentumokba!</p>
  
  <h4>3.7. feladat</h4>
  
  <p>Szimb�lumok seg�ts�g�vel tegy�nk egy XML sz�vegr�szt egy befoglal� XML sz�vegtartalm�ba!</p>
  
  <h4>3.8. feladat</h4>
  
  <p>CDATA szekci� seg�ts�g�vel tegy�nk egy XML sz�vegr�szt egy befoglal� XML sz�vegtartalm�ba!</p>
  
  <h3>4. feladat</h3>
  
  <p>Hozzunk l�tre XDM modellt �s XML dokumentumot az al�bbi szerkezetekhez:</p>
  
  <ul class="letters">
    <li>n�vjegyk�rty�k gy�jtem�nye</li>
    <li>di�kok tanulm�nyi eredm�nyei</li>
    <li>be�rkez� panaszok egy �gyf�lnyilv�ntart�son</li>
    <li>egy vas�ti t�rsas�g menetrendje</li>
  </ul>
  
  <h3>5. feladat</h3>
  
  <p>Hozzuk l�tre a megadott diagramt�pusokat a felsorolt t�m�khoz!</p>
  
  <ul class="letters">
    <li>XDM
      <ul>
        <li>v�rakoz�sor</li>
        <li>bin�ris fa</li>
        <li>heap</li>
        <li>ir�ny�tott �l� gr�f</li>
      </ul>
    </li>
    
    <li>ER, XDM
      <ul>
        <li>n�vjegyk�rtya</li>
        <li>be�rkezett rendel�sek</li>
        <li>elv�gzett szerv�zmunk�k</li>
        <li>gy�rtm�nyok �s alkatr�szeik</li>
      </ul>
    </li>
    
    <li>UML, XDM
      <ul>
        <li>meteorol�giai m�r��llom�sok</li>
        <li>e-mail</li>
        <li>menetrend</li>
        <li>sz�llodai szobafoglal�sok</li>
      </ul>
    </li>
  </ul>

  gyak01.png
  gyak01 folder

[Starter project](assets/courses/course1/lab1/starter.zip)

[Solution project](assets/courses/course1/lab1/solution.zip)

=== MD

### 1. feladat

Hozzunk létre XDM modellt az alábbi XML dokumentumhoz:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<termeklista>
    <gyartok>
        <gyarto kod="g1">
            <nev>Blackberry</nev>
            <orszag>Kanada</orszag>
        </gyarto>
        
        <gyarto kod="g2">
            <nev>Apple</nev>
            <orszag>USA</orszag>
        </gyarto>
    </gyartok>
    
    <termekek>
        <termek tkod="t1" gyarto="g2">
            <megnevezes>MacBook Air</megnevezes>
            <ujdonsag/>
            <ear pnem="Ft">310000</ear>
        </termek>
        
        <termek tkod="t2" gyarto="g1">
            <megnevezes>Z10 Mobilephone</megnevezes>
            <ear pnem="Ft">130000</ear>
        </termek>
    </termekek>
</termeklista>
```

### 2. feladat

Hozzunk létre XML dokumentumot az alábbi XDM modellhez!

![XDM modell](practice01.png)

### 3. feladat

Milyen hibák vannak az alábbi XML kódokban?

* <?xml version="1.0"?><A><a>2</a><a>3</a><a>3<d>aa</d><a><a a="G"></A>
* <?xml version="1.0"?><A><a>2</a><a></a><a>3<d>aa</d><a><a a="G"/></A>
* <?xml version=1.0?><A><a>2</a><a>3</a><a>3<d>aa</d><a><b a='G'></A>
* <xml version="1.0"/><A><a>2</a b='G'><a>3</a><a>3<d>aa</d><a><a></a>
* <?xml version="1.0"?><A><a>2</a><a>3</a><a>3<d>aa</a></d><a/></A><a>2</a>
* <?xml version="1.0"?><A><a>2</a><a>3</a><a>3<d>aa</d><a=3><a></A>

Hajtsuk végre a következő feladatokat:

* Tegyünk minden elemet az ALMA névtérbe alias segítségével!
* Tegyünk minden elemet egy ALMA névtérbe alias használata nélkül!
* Tegyük be az attribútumokat is a névtérbe!
* Tegyünk egy elemet és annak attribútumait különböző névterekbe!
* Tegyünk megjegyzéseket az XML dokumentumokba!
* Szimbólumok segítségével tegyünk egy XML szövegrészt egy befoglaló XML szövegtartalmába!
* CDATA szekció segítségével tegyünk egy XML szövegrészt egy befoglaló XML szövegtartalmába!

### 4. feladat

Hozzunk létre XDM modellt és XML dokumentumot az alábbi szerkezetekhez:

* névjegykártyák gyűjteménye
* diákok tanulmányi eredményei
* beérkező panaszok egy ügyfélnyilvántartása
* egy vasúti társaság menetrendje

### 5. feladat

Hozzuk létre a megadott diagramtípusokat a felsorolt témákhoz!

* XDM
    * várakozósor
    * bináris fa
    * heap
    * irányított élű gráf
* ER, XDM
    * névjegykártya
    * beérkezett rendelések
    * elvégzett szervízmunkák
    * gyártmányok és alkatrészeik
* UML, XDM
    * meteorológiai mérőállomások
    * e-mail
    * menetrend
    * szállodai szobafoglalások
