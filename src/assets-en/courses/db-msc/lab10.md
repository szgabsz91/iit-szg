<h3>Ontológia - SPARQL</h3>
  
  <p>Hozzunk létre egy ontológiát <i>Protégé</i>-ben, majd írjunk hozzá egy <i>SPARQL</i> lekérdezést a következő leírás alapján.</p>
  
  <p>Az ontológia IRI azonosítója legyen a következő: <i>http://iit.uni-miskolc.hu/db-msc/ontologies/cars</i></p>
  
  <p>Az ontológiában két objektumtípus létezzen, mindkettő az alap <i>owl:Thing</i> típusból származzon:</p>
  
  <ul>
    <li><i>Person</i></li>
	<li><i>Car</i></li>
  </ul>
  
  <p>A <i>Person</i> típusnak legyen 2 adat attribútuma, mindkettő funkcionális, <i>xsd:string</i> típusú:</p>
  
  <ul>
    <li><i>firstName</i></li>
	<li><i>lastName</i></li>
  </ul>
  
  <p>A <i>Car</i> típusnak legyen 3 adat attribútuma, mindegyik funkcionális, első kettő <i>xsd:string</i>, a harmadik <i>xsd:decimal</i>:</p>
  
  <ul>
    <li><i>manufacturer</i></li>
	<li><i>plateNumber</i></li>
	<li><i>price</i></li>
  </ul>
  
  <p>Ezen kívül jelölje a tulajdonosi kapcsolatot a <i>Car</i> típusban egy objektum attribútum: <i>owner</i>, amely egy <i>Person</i> típusú egyedre mutathat, és szintén funkcionális.</p>
  
  <p>A statikus rész után létrehozhatjuk a következő indivídumokat:</p>
  
  <table class="table table-striped table-hover">
	<caption>Személyek</caption>
    <thead>
	  <tr>
	    <th>First Name</th>
		<th>Last Name</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>Peter</td>
		<td>Black</td>
	  </tr>
	  <tr>
	    <td>Jack</td>
		<td>Brown</td>
	  </tr>
	  <tr>
	    <td>John</td>
		<td>White</td>
	  </tr>
	</tbody>
  </table>
  
  <table class="table table-striped table-hover">
	<caption>Autók</caption>
    <thead>
	  <tr>
	    <th>Manufacturer</th>
		<th>Plate Number</th>
		<th>Price</th>
		<th>Owner</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>Honda</td>
		<td>ABC-123</td>
		<td>28</td>
		<td>Peter Black</td>
	  </tr>
	  <tr>
	    <td>Ferrari</td>
		<td>ABC-124</td>
		<td>56</td>
		<td>Jack Brown</td>
	  </tr>
	  <tr>
	    <td>Mercedes</td>
		<td>ABC-125</td>
		<td>36</td>
		<td>Peter Black</td>
	  </tr>
	  <tr>
	    <td>Renault</td>
		<td>ABC-126</td>
		<td>19</td>
		<td>John White</td>
	  </tr>
	</tbody>
  </table>
  
  <p>Az egyedeknél soroljuk fel minden esetben a tőle különböző, azonos típusú egyéb egyedeket (<i>different individuals</i>).</p>
  
  <p>Az adatok felvitele után írjuk meg a következő <i>SPARQL</i> lekérdezést:</p>
  
  <ul>
    <li>Adjuk vissza a 30-nál drágább autók gyártóját, árát és tulajdonosuk vezeték- és keresztnevét, ár szerint csökkenő sorrendben.</li>
  </ul>
  
  <p>Az eredményt mentsük el egy <i>OWL XML</i> fájlba, és mellé a <i>SPARQL</i> lekérdezést is!</p>
  
  gyak11

  == MD

  Hozzunk létre egy ontológiát *Protégé*-ben, majd írjunk hozzá egy *SPARQL* lekérdezést a következő leírás alapján.

Az ontológia IRI azonosítója legyen a következő: *http://iit.uni-miskolc.hu/db-msc/ontologies/cars*

Az ontológiában két objektumtípus létezzen, mindkettő az alap `owl:Thing` típusból származzon:

* `Person`
* `Car`

A `Person` típusnak legyen 2 adat attribútuma, mindkettő funkcionális, `xsd:string` típusú:

* `firstName`
* `lastName`

A `Car` típusnak legyen 3 adat attribútuma, mindegyik funkcionális, első kettő `xsd:string`, a harmadik `xsd:decimal`:

* `manufacturer`
* `plateNumber`
* `price`

Ezen kívül jelölje a tulajdonosi kapcsolatot a `Car` típusban egy objektum attribútum: `owner`, amely egy `Person` típusú egyedre mutathat, és szintén funkcionális.

A statikus rész után létrehozhatjuk a következő indivídumokat:

Személyek:

| First Name | Last Name |
| ---------- | --------  |
| Peter      | Black     |
| Jack       | Brown     |
| John       | White     |

Autók:

| Manufacturer | Plate Number | Price | Owner       |
| ------------ |:------------:| -----:| ----------- |
| Honda        | ABC-123      | 28    | Peter Black |
| Ferrari      | ABC-124      | 56    | Jack Brown  |
| Mercedes     | ABC-125      | 36    | Peter Black |
| Renault      | ABC-126      | 19    | John White  |

Az egyedeknél soroljuk fel minden esetben a tőle különböző, azonos típusú egyéb egyedeket (*different individuals*).

Az adatok felvitele után írjuk meg a következő *SPARQL* lekérdezést:

* Adjuk vissza a 30-nál drágább autók gyártóját, árát és tulajdonosuk vezeték- és keresztnevét, ár szerint csökkenő sorrendben.

Az eredményt mentsük el egy *OWL XML* fájlba, és mellé a *SPARQL* lekérdezést is!
