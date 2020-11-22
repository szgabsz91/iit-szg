<h3>Neo4J - JDBC</h3>
  
  <p>Oldjuk meg a következő feladatot Neo4J JDBC API-t és prepared statementeket használva. A prepared statementeket egyszer fordítsuk le, majd különböző paraméterekkel futassuk őket többször egymás után.. A Maven artifact váza letölthető <a href="courses/dbmsc/gyak10_start.zip">innen</a>.</p>
  
  <p>A feladatban töltsünk fel egy in-memory Neo4J adatbázist személyekkel, telefonokkal és gyártókkal. A személyeket fűzzük fel egy listára. A következő táblázatok és listák tartalmazzák a szükséges adatokat.</p>
  
  <table class="table table-striped table-hover">
	<caption>Személyek</caption>
    <thead>
	  <tr>
	    <th>Név</th>
		<th>Objektum típus</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>Peter</td>
		<td>PERSON</td>
	  </tr>
	  <tr>
	    <td>Jack</td>
		<td>PERSON</td>
	  </tr>
	  <tr>
	    <td>John</td>
		<td>PERSON</td>
	  </tr>
	</tbody>
  </table>
  
  <p>Legyen egy <i>PEOPLE</i> típusú node, amiből kiindulva <i>LIST</i> típusú kapcsolatokon keresztül tudjunk végignavigálni a személyeken a fenti táblázat sorrendjében.</p>
  
  <table class="table table-striped table-hover">
	<caption>Telefonok</caption>
    <thead>
	  <tr>
	    <th>Típus</th>
		<th>Ár</th>
		<th>Objektum típus</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>Nexus 6P</td>
		<td>499</td>
		<td>TELEPHONE</td>
	  </tr>
	  <tr>
	    <td>Microsoft Lumia 1320</td>
		<td>533</td>
		<td>TELEPHONE</td>
	  </tr>
	  <tr>
	    <td>iPhone 6S</td>
		<td>749</td>
		<td>TELEPHONE</td>
	  </tr>
	  <tr>
	    <td>Nexus 5X</td>
		<td>299</td>
		<td>TELEPHONE</td>
	  </tr>
	  <tr>
	    <td>iPhone 6 Plus</td>
		<td>649</td>
		<td>TELEPHONE</td>
	  </tr>
	</tbody>
  </table>
  
  <p>A személyek és telefonjaik között legyen <i>OWNS</i> típusú kapcsolat a következő lista alapján:</p>
  
  <ul>
    <li>
	  Peter
	  <ul>
	    <li>Nexus 6P</li>
		<li>Microsoft Lumia 1320</li>
	  </ul>
	<li>
	<li>
	  Jack
	  <ul>
	    <li>iPhone 6S</li>
	  </ul>
	<li>
	<li>
	  John
	  <ul>
	    <li>Nexus 5X</li>
		<li>iPhone 6 Plus</li>
	  </ul>
	<li>
  </ul>
  
  <table class="table table-striped table-hover">
	<caption>Gyártók</caption>
    <thead>
	  <tr>
	    <th>Név</th>
		<th>Objektum típus</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>Google</td>
		<td>MANUFACTURER</td>
	  </tr>
	  <tr>
	    <td>Microsoft</td>
		<td>MANUFACTURER</td>
	  </tr>
	  <tr>
	    <td>Apple</td>
		<td>MANUFACTURER</td>
	  </tr>
	</tbody>
  </table>
  
  <p>A gyártók és telefonok között legyen <i>MANUFACTURES</i> típusú kapcsolat a következő lista alapján:</p>
  
  <ul>
    <li>
	  Google
	  <ul>
	    <li>Nexus 6P</li>
		<li>Nexus 5X</li>
	  </ul>
	</li>
	<li>
	  Apple
	  <ul>
	    <li>iPhone 6S</li>
		<li>iPhone 6 Plus</li>
	  </ul>
	</li>
	<li>
	  Microsoft
	  <ul>
	    <li>Microsoft Lumia 1320</li>
	  </ul>
	</li>
  </ul>
  
  <p>Az adatok beszúrása után írjuk meg a következő lekérdezéseket:</p>
  
  <ul>
    <li>Kérdezzük le azokat a személyeket, akiknek Google által gyártott telefonjuk van. Írassuk ki a személyek nevét ábécé sorrendben.</li>
	<li>Kérdezzük le a listában szereplő első olyan személyt, akinek Apple által gyártott telefonja van és írassuk ki a nevét.</li>
	<li>Kérdezzük le a legmagasabb átlagárú telefonok gyártóját és írassuk ki a nevét.</li>
	<li>Kérdezzük le a listában szereplő első olyan személyt, akinek nincs Microsoft telefonja.</li>
  </ul>

  gyak10_start
  practice_10
  
  === MD

  Oldjuk meg a következő feladatot Neo4J JDBC API-t és prepared statementeket használva. A prepared statementeket egyszer fordítsuk le, majd különböző paraméterekkel futassuk őket többször egymás után. A Maven artifact váza letölthető [innen](courses/db-msc/practice10_start.zip).

A feladatban töltsünk fel egy in-memory Neo4J adatbázist személyekkel, telefonokkal és gyártókkal. A személyeket fűzzük fel egy listára. A következő táblázatok és listák tartalmazzák a szükséges adatokat.

Személyek:

| Név   | Objektum típus |
| ----- |:--------------:|
| Peter | PERSON         |
| Jack  | PERSON         |
| John  | PERSON         |

Legyen egy *PEOPLE* típusú node, amiből kiindulva *LIST* típusú kapcsolatokon keresztül tudjunk végignavigálni a személyeken a fenti táblázat sorrendjében.

Telefonok:

| Típus                | Ár  | Objektum típus |
| -------------------- | ---:|:--------------:|
| Nexus 6P             | 499 | TELEPHONE      |
| Microsoft Lumia 1320 | 533 | TELEPHONE      |
| iPhone 6S            | 749 | TELEPHONE      |
| Nexus 5X             | 299 | TELEPHONE      |
| iPhone 6 Plus        | 649 | TELEPHONE      |

A személyek és telefonjaik között legyen *OWNS* típusú kapcsolat a következő lista alapján:

* Peter
    * Nexus 6P
    * Microsoft Lumia 1320
* Jack
    * iPhone 6S
* John
    * Nexus 5X
    * iPhone 6 Plus

Gyártók:

| Név       | Objektum típus |
| --------- |:--------------:|
| Google    | MANUFACTURER   |
| Microsoft | MANUFACTURER   |
| Apple     | MANUFACTURER   |

A gyártók és telefonok között legyen *MANUFACTURES* típusú kapcsolat a következő lista alapján:

* Google
    * Nexus 6P
    * Nexus 5X
* Apple
    * iPhone 6S
    * iPhone 6 Plus
* Microsoft
    * Microsoft Lumia 1320

Az adatok beszúrása után írjuk meg a következő lekérdezéseket:

* Kérdezzük le azokat a személyeket, akiknek Google által gyártott telefonjuk van. Írassuk ki a személyek nevét ábécé sorrendben.
* Kérdezzük le a listában szereplő első olyan személyt, akinek Apple által gyártott telefonja van és írassuk ki a nevét.
* Kérdezzük le a legmagasabb átlagárú telefonok gyártóját és írassuk ki a nevét.
* Kérdezzük le a listában szereplő első olyan személyt, akinek nincs Microsoft telefonja.
