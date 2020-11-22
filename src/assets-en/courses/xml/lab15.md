<p>Oldjuk meg a k�vetkez�, data/hallgatok.xml f�jlra vonatkoz� feladatokat. A kezd� Eclipse Project <a href="<?php echo getLink('xml/zh3_start_a.zip'); ?>">itt</a> tal�lhat�.</p>
  
  <ol>
    <li>
      �rjunk 2 XPath kifejez�st:
      <ol class="letters">
        <li>K�rdezz�k le a 47-es k�rzetsz�m� hallgat�k Neptun-k�dj�t.</li>
        <li>K�rdezz�k le az 1991-es sz�let�s� hallgat�k l�tsz�m�t.</li>
      </ol>
    </li>
    <li>
      XSLT seg�ts�g�vel alak�tsuk az XML f�jlt HTML f�jll� �gy, hogy
      <ol class="letters">
        <li>A HTML f�jl head szekci�j�ban l�v� title legyen "Hallgat�k"</li>
        <li>Az oldal body szekci�j�ban szerepeljen egy t�bl�zat Neptun-k�d, N�v, Sz�let�si �v, Telefonsz�m fejl�ccel.</li>
        <li>A telefonsz�m oszlop cell�inak form�tuma: "${k�rzetsz�m}/${telefonsz�m}", pl. "46/123-456". Ne foglalkozzunk azzal, ha egy hallgat�n�l nincs megadva k�rzetsz�m vagy telefonsz�m.</li>
      </ol>
    </li>
    <li>XQuery seg�ts�g�vel k�rdezz�k le az 1991-es sz�let�si �v� hallgat�k nev�t �s anyjuk teljes nev�t. Az eredm�ny legyen well-formed, �s a gy�k�r elem alatti �sszes elem tartalmazzon egy "hallgato-neve" �s egy "anyja-neve" elemet. A rekordok az anya vezet�kneve szerint n�vekv� sorrendben szerepeljenek.</li>
  </ol>

  <p>Oldjuk meg a k�vetkez�, data/autok.xml f�jlra vonatkoz� feladatokat. A kezd� Eclipse Project <a href="<?php echo getLink('xml/zh3_start_b.zip'); ?>">itt</a> tal�lhat�.</p>
  
  <ol>
    <li>
      �rjunk 2 XPath kifejez�st:
      <ol class="letters">
        <li>K�rdezz�k le a met�lozott aut�k rendsz�m�t.</li>
        <li>K�rdezz�k le 2014-es gy�rt�si �v� aut�k darabsz�m�t.</li>
      </ol>
    </li>
    <li>
      XSLT seg�ts�g�vel alak�tsuk az XML f�jlt HTML f�jll� �gy, hogy
      <ol class="letters">
        <li>A HTML f�jl head szekci�j�ban l�v� title legyen "Aut�k"</li>
        <li>Az oldal body szekci�j�ban szerepeljen egy t�bl�zat Rendsz�m, M�rka, Gy�rt�si �v, Sz�n, Met�lozott fejl�ccel.</li>
        <li>A met�lozott oszlop cell�i tartalmazz�k az "igen" sz�veget, ha az attrib�tum �rt�ke igaz, �s a "nem" sz�veget egy�bk�nt.</li>
      </ol>
    </li>
    <li>XQuery seg�ts�g�vel k�rdezz�k le a 2014-es gy�rt�si �v� aut�k m�rk�j�t �s a hozz�juk tartoz� tulajdonos teljes nev�t. Az eredm�ny legyen well-formed, �s a gy�k�r elem alatti �sszes elem tartalmazzon egy "marka" �s egy "tulajdonos" elemet. A rekordok m�rka szerint cs�kken� sorrendben szerepeljenek.</li>
  </ol>

  zh3
  zh3_start_a
  zh3_start_b

  <p>Oldjuk meg a k�vetkez�, data/organization.xml f�jlra vonatkoz� feladatokat. A kezd� Eclipse Project <a href="<?php echo getLink('xml/potzh3_start.zip'); ?>">itt</a> tal�lhat�.</p>
  
  <ol>
    <li>
      �rjunk 2 XPath kifejez�st:
      <ol class="letters">
        <li>K�rdezz�k le az e2-es azonos�t�j� alkalmazott projektj�nek nev�t.</li>
        <li>K�rdezz�k le a p1-es azonos�t�j� projekt tagjainak azonos�t�it.</li>
      </ol>
    </li>
    <li>XSLT seg�ts�g�vel ford�tsuk le az XML f�jl elemeinek �s attrib�tumainak nev�t. A ford�t�sokat a lent tal�lhat� t�bl�zat tartalmazza.</li>
    <li>XQuery seg�ts�g�vel k�rdezz�k le (projektn�v, alkalmazottn�v) p�rokat a kapcsol�d� projektek �s alkalmazottak eset�n. Az elv�rt kimenet a k�vetkez�:</li>
  </ol>
  
  <pre class="prettyprint" data-label="XML">&lt;result&gt;
  &lt;item&gt;
    &lt;project&gt;Project 1&lt;/project&gt;
    &lt;employee&gt;Employee 1&lt;/employee&gt;
  &lt;/item&gt;
  &lt;item&gt;
    &lt;project&gt;Project 1&lt;/project&gt;
    &lt;employee&gt;Employee 2&lt;/employee&gt;
  &lt;/item&gt;
  &lt;item&gt;
    &lt;project&gt;Project 2&lt;/project&gt;
    &lt;employee&gt;Employee 3&lt;/employee&gt;
  &lt;/item&gt;
&lt;/result&gt;</pre>
  
  <table class="table table-striped table-hover">
    <thead>
	  <tr>
	    <th>Angol n�v</th>
		<th>Magyar n�v</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>organization</td>
		<td>szervezet</td>
	  </tr>
	  <tr>
	    <td>project</td>
		<td>projekt</td>
	  </tr>
	  <tr>
	    <td>pid</td>
		<td>pazonosito</td>
	  </tr>
	  <tr>
	    <td>name</td>
		<td>nev</td>
	  </tr>
	  <tr>
	    <td>member</td>
		<td>tag</td>
	  </tr>
	  <tr>
	    <td>employee</td>
		<td>alkalmazott</td>
	  </tr>
	  <tr>
	    <td>eid</td>
		<td>aazonosito</td>
	  </tr>
	</tbody>
  </table>

potzh3
potzh3_start
