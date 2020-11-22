<h3>JPA</h3>
  
  <p>Feladat: írjunk Java alkalmazást a lenti leírás alapján!</p>
  
  <p>A program tároljon személyeket és autókat, a következő adatokkal:</p>
  
  <ul>
    <li>
	  Person osztály: People táblában tárolódjon
	  <ul>
	    <li>id: auto generated identifier</li>
		<li>firstName: NOT NULL, string</li>
		<li>lastName: NOT NULL, string</li>
		<li>cars: List&lt;Car&gt;, eager loaded, cascade all</li>
	  </ul>
	</li>
	<li>
	  Car osztály: Cars táblában tárolódjon
	  <ul>
	    <li>plateNumber: ID, string</li>
		<li>manufacturer: NOT NULL, string</li>
		<li>type: NOT NULL, string</li>
		<li>age: NOT NULL, integer</li>
		<li>owner: Person</li>
	  </ul>
	</li>
  </ul>
  
  <p>Adjunk egy nevesített queryt a Person osztályhoz, ami lekérdezi az adott vezetéknevű személyeket, az autóikkal együtt.</p>
  
  <p>A főprogram hozzon létre legalább két, azonos vezetéknevű személyt, akik közül az egyiknek 1, a másiknak 2 autója legyen. Ezek után a nevesített queryvel kérdezze le az ilyen vezetéknevű személyeket, és írja ki, hogy kinek milyen autói vannak.</p>
  
  <p>Az adatbázis automatikusan jöjjön létre, végrehajtás után pedig automatikusan törlődjenek a táblák!</p>
  
  <p>A Maven artifact váza letölthető <a href="courses/dbmsc/gyak04_start.zip">innen</a>.</p>

  gyak04 folder
  gyak04_start folder
  
  === MD

  Feladat: írjunk Java alkalmazást a lenti leírás alapján!

A program tároljon személyeket és autókat, a következő adatokkal:

* `Person` osztály: `People` táblában tárolódjon
    * `id`: auto generated identifier
    * `firstName`: `NOT NULL`, string
    * `lastName`: `NOT NULL`, string
    * `cars`: `List<Car>`, eager loaded, cascade all

* `Car` osztály: `Cars` táblában tárolódjon
    * `plateNumber`: ID, string
    * `manufacturer`: `NOT NULL`, string
    * `type`: `NOT NULL`, string
    * `age`: `NOT NULL`, integer
    * `owner`: `Person`

Adjunk egy nevesített queryt a `Person` osztályhoz, ami lekérdezi az adott vezetéknevű személyeket, az autóikkal együtt.

A főprogram hozzon létre legalább két, azonos vezetéknevű személyt, akik közül az egyiknek 1, a másiknak 2 autója legyen. Ezek után a nevesített queryvel kérdezze le az ilyen vezetéknevű személyeket, és írja ki, hogy kinek milyen autói vannak.

Az adatbázis automatikusan jöjjön létre, végrehajtás után pedig automatikusan törlődjenek a táblák!

A Maven artifact váza letölthető [innen](courses/db-msc/practice04_start.zip).
