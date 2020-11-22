<h3>Neo4J</h3>
  
  <p>Adatbázis hozzáférés: 193.6.5.58:7474, authentikáció: neo4j/admin1</p>
  
  <h4>1. feladat</h4>
  
  <p>Az első feladatban töltsük fel az adatbázist filmekkel, rendezőkkel és színészekkel. Az objektumok között legyen <i>DIRECTED</i> és <i>ACTED_IN</i> kapcsolat.</p>
  
  <table class="table table-striped table-hover">
	<caption>Személyek</caption>
    <thead>
	  <tr>
	    <th>Név</th>
		<th>Objektum típus</th>
		<th>Kapott Oscar-díjat?</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>Quentin Tarantino</td>
		<td>DIRECTOR</td>
		<td>igen</td>
	  </tr>
	  <tr>
	    <td>Samuel L. Jackson</td>
		<td>ACTOR</td>
		<td>nem</td>
	  </tr>
	  <tr>
	    <td>Kurt Russell</td>
		<td>ACTOR</td>
		<td>nem</td>
	  </tr>
	  <tr>
	    <td>Tim Roth</td>
		<td>ACTOR</td>
		<td>nem</td>
	  </tr>
	  <tr>
	    <td>Jamie Foxx</td>
		<td>ACTOR</td>
		<td>igen</td>
	  </tr>
	  <tr>
	    <td>Christoph Waltz</td>
		<td>ACTOR</td>
		<td>igen</td>
	  </tr>
	  <tr>
	    <td>Leonardo DiCaprio</td>
		<td>ACTOR</td>
		<td>igen</td>
	  </tr>
	  <tr>
	    <td>Brad Pitt</td>
		<td>ACTOR</td>
		<td>igen</td>
	  </tr>
	  <tr>
	    <td>Michael Fassbender</td>
		<td>ACTOR</td>
		<td>nem</td>
	  </tr>
	  <tr>
	    <td>John Travolta</td>
		<td>ACTOR</td>
		<td>nem</td>
	  </tr>
	</tbody>
  </table>
  
  <table class="table table-striped table-hover">
	<caption>Filmek</caption>
    <thead>
	  <tr>
	    <th>Cím</th>
		<th>Évszám</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>The Hateful Eight</td>
		<td>2015</td>
	  </tr>
	  <tr>
	    <td>Django Unchained</td>
		<td>2012</td>
	  </tr>
	  <tr>
	    <td>Inglourious Basterds</td>
		<td>2009</td>
	  </tr>
	  <tr>
	    <td>Pulp Fiction</td>
		<td>1994</td>
	  </tr>
	</tbody>
  </table>
  
  <p>Az objektumok közti kapcsolatok:</p>
  
  <ul>
    <li>Quentin Tarantino rendezte mind a 4 filmet.</li>
	<li>
	  A <i>The Hateful Eight</i> szereplői:
	  <ul>
	    <li>Samuel L. Jackson</li>
		<li>Kurt Russell</li>
		<li>Tim Roth</li>
	  </ul>
	</li>
	<li>
	  A <i>Django Unchained</i> szereplői:
	  <ul>
	    <li>Jamie Foxx</li>
		<li>Christoph Waltz</li>
		<li>Leonardo DiCaprio</li>
		<li>Samuel L. Jackson</li>
	  </ul>
	</li>
	<li>
	  Az <i>Inglourious Basterds</i> szereplői:
	  <ul>
	    <li>Brad Pitt</li>
		<li>Christoph Waltz</li>
		<li>Michael Fassbender</li>
	  </ul>
	</li>
	<li>
	  A <i>Pulp Fiction</i> szereplői:
	  <ul>
	    <li>Tim Roth</li>
		<li>John Travolta</li>
		<li>Samuel L. Jackson</li>
	  </ul>
	</li>
  </ul>
  
  <p>Írjuk meg a következő lekérdezéseket:</p>
  
  <ul>
    <li>Quentin Tarantino mely Oscar-díjas színészekkel dolgozott együtt 2009 és 2015 között?</li>
	<li>Quentin Tarantino hány Oscar-díjas színésszel dolgozott már együtt összesen?</li>
	<li>A Django Unchained című film készítésében hány Oscar-díjas rendező és színész vett részt?</li>
	<li>Samuel L. Jackson hány filmben szerepelt összesen?</li>
  </ul>
  
  <h4>2. feladat</h4>
  
  <p>Adjunk hozzá még három filmet az adatbázishoz úgy, hogy köztük <i>SEQUEL</i> típusú kapcsolat legyen mindig a korábbi film irányából a folytatás irányába.</p>
  
  <table class="table table-striped table-hover">
	<caption>Folytatások</caption>
    <thead>
	  <tr>
	    <th>Cím</th>
		<th>Évszám</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>Batman Begins</td>
		<td>2005</td>
	  </tr>
	  <tr>
	    <td>The Dark Knight</td>
		<td>2008</td>
	  </tr>
	  <tr>
	    <td>The Dark Knight Rises</td>
		<td>2012</td>
	  </tr>
	</tbody>
  </table>
  
  <p>Írjunk lekérdezést, amely visszaadja azt a filmet, ami a <i>The Dark Knight Rises</i> című film sorozatának első része volt. A lekérdezésben induljunk ki a megadott filmből, és a kapcsolatok mentén navigáljunk el a legutolsó filmig a láncban.</p>

  ---

  // First Task

create (:DIRECTOR {name: "Quentin Tarantino", oscar: true})

create (:ACTOR {name: "Samuel L. Jackson", oscar: false})
create (:ACTOR {name: "Kurt Russell", oscar: false})
create (:ACTOR {name: "Tim Roth", oscar: false})
create (:ACTOR {name: "Jamie Foxx", oscar: true})
create (:ACTOR {name: "Christoph Waltz", oscar: true})
create (:ACTOR {name: "Leonardo DiCaprio", oscar: true})
create (:ACTOR {name: "Brad Pitt", oscar: true})
create (:ACTOR {name: "Michael Fassbender", oscar: false})
create (:ACTOR {name: "John Travolta", oscar: false})

create (:MOVIE {title: "The Hateful Eight", year: 2015})
create (:MOVIE {title: "Django Unchained", year: 2012})
create (:MOVIE {title: "Inglorious Basterds", year: 2009})
create (:MOVIE {title: "Pulp Fiction", year: 1994})

MATCH (d:DIRECTOR {name: "Quentin Tarantino"}), (m:MOVIE {title: "The Hateful Eight"}) CREATE (d)-[:DIRECTED]->(m)
MATCH (d:DIRECTOR {name: "Quentin Tarantino"}), (m:MOVIE {title: "Django Unchained"}) CREATE (d)-[:DIRECTED]->(m)
MATCH (d:DIRECTOR {name: "Quentin Tarantino"}), (m:MOVIE {title: "Inglorious Basterds"}) CREATE (d)-[:DIRECTED]->(m)
MATCH (d:DIRECTOR {name: "Quentin Tarantino"}), (m:MOVIE {title: "Pulp Fiction"}) CREATE (d)-[:DIRECTED]->(m)

MATCH (a:ACTOR {name: "Samuel L. Jackson"}), (m:MOVIE {title: "The Hateful Eight"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Kurt Russell"}), (m:MOVIE {title: "The Hateful Eight"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Tim Roth"}), (m:MOVIE {title: "The Hateful Eight"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Jamie Foxx"}), (m:MOVIE {title: "Django Unchained"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Christoph Waltz"}), (m:MOVIE {title: "Django Unchained"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Leonardo DiCaprio"}), (m:MOVIE {title: "Django Unchained"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Samuel L. Jackson"}), (m:MOVIE {title: "Django Unchained"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Brad Pitt"}), (m:MOVIE {title: "Inglorious Basterds"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Christoph Waltz"}), (m:MOVIE {title: "Inglorious Basterds"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Michael Fassbender"}), (m:MOVIE {title: "Inglorious Basterds"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Tim Roth"}), (m:MOVIE {title: "Pulp Fiction"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "John Travolta"}), (m:MOVIE {title: "Pulp Fiction"}) CREATE (a)-[:ACTED_IN]->(m)
MATCH (a:ACTOR {name: "Samuel L. Jackson"}), (m:MOVIE {title: "Pulp Fiction"}) CREATE (a)-[:ACTED_IN]->(m)

MATCH (d:DIRECTOR {name: "Quentin Tarantino"})
MATCH (d)-[:DIRECTED]->(m:MOVIE)
WHERE m.year >= 2009 and m.year <= 2015
MATCH (a:ACTOR {oscar: true})-[:ACTED_IN]->(m)
RETURN a

MATCH (d:DIRECTOR {name: "Quentin Tarantino"})
MATCH (d)-[:DIRECTED]->(m:MOVIE)
MATCH (a:ACTOR {oscar: true})-[:ACTED_IN]->(m)
RETURN count(DISTINCT a)

MATCH (m:MOVIE {title: "Django Unchained"})
MATCH (m)<-[:DIRECTED]-(d:DIRECTOR {oscar: true})
MATCH (m)<-[:ACTED_IN]-(a:ACTOR {oscar: true})
RETURN count(DISTINCT d) + count(DISTINCT a)

MATCH (a:ACTOR {name: "Samuel L. Jackson"})
MATCH (a)-[:ACTED_IN]->(m:MOVIE)
RETURN count(DISTINCT m)

// Second Task

create (:MOVIE {title: "Batman Begins", year: 2005})
create (:MOVIE {title: "The Dark Knight", year: 2008})
create (:MOVIE {title: "The Dark Knight Rises", year: 2012})

MATCH (m1:MOVIE {title: "Batman Begins"}) MATCH (m2:MOVIE {title: "The Dark Knight"}) CREATE (m1)-[:SEQUEL]->(m2)
MATCH (m1:MOVIE {title: "The Dark Knight"}) MATCH (m2:MOVIE {title: "The Dark Knight Rises"}) CREATE (m1)-[:SEQUEL]->(m2)

START movie = node(*)
WHERE movie.title = "The Dark Knight Rises"
MATCH path = (movie)<-[:SEQUEL*]-(prequel:MOVIE)
WITH collect(path) AS paths, max(length(path)) AS maxLength
WITH filter(p IN paths WHERE length(p) = maxLength) AS longestPaths
WITH last(longestPaths) as longestPath
RETURN last(nodes(longestPath))

=== MD

Adatbázis hozzáférés: 193.6.5.58:7474, authentikáció: neo4j/admin1

### 1. feladat

Az első feladatban töltsük fel az adatbázist filmekkel, rendezőkkel és színészekkel. Az objektumok között legyen *DIRECTED* és *ACTED_IN* kapcsolat.

Személyek:

| Név                | Objektum típus | Kapott Oscar-díjat? |
| ------------------ |:--------------:|:-------------------:|
| Quentin Tarantino  | DIRECTOR       | igen                |
| Samuel L. Jackson  | ACTOR          | nem                 |
| Kurt Russell       | ACTOR          | nem                 |
| Tim Roth           | ACTOR          | nem                 |
| Jamie Foxx         | ACTOR          | igen                |
| Christoph Waltz    | ACTOR          | igen                |
| Leonardo DiCaprio  | ACTOR          | igen                |
| Brad Pitt          | ACTOR          | igen                |
| Michael Fassbender | ACTOR          | nem                 |
| John Travolta      | ACTOR          | nem                 |

Filmek:

| Cím                  | Évszám |
| -------------------- |:------:|
| The Hateful Eight    | 2015   |
| Django Unchained     | 2012   |
| Inglourious Basterds | 2009   |
| Pulp Fiction         | 1994   |

Az objektumok közti kapcsolatok:

* Quentin Tarantino rendezte mind a 4 filmet.
* A *The Hateful Eight* szereplői:
    * Samuel L. Jackson
    * Kurt Russell
    * Tim Roth
* A *Django Unchained* szereplői:
    * Jamie Foxx
    * Christoph Waltz
    * Leonardo DiCaprio
    * Samuel L. Jackson
* Az *Inglourious Basterds* szereplői:
    * Brad Pitt
    * Christoph Waltz
    * Michael Fassbender
* A *Pulp Fiction* szereplői:
    * Tim Roth
    * John Travolta
    * Samuel L. Jackson

Írjuk meg a következő lekérdezéseket:

* Quentin Tarantino mely Oscar-díjas színészekkel dolgozott együtt 2009 és 2015 között?
* Quentin Tarantino hány Oscar-díjas színésszel dolgozott már együtt összesen?
* A *Django Unchained* című film készítésében hány Oscar-díjas rendező és színész vett részt?
* Samuel L. Jackson hány filmben szerepelt összesen?

### 2. feladat

Adjunk hozzá még három filmet az adatbázishoz úgy, hogy köztük *SEQUEL* típusú kapcsolat legyen mindig a korábbi film irányából a folytatás irányába.

| Cím                   | Évszám |
| --------------------- |:------:|
| Batman Begins         | 2005   |
| The Dark Knight       | 2008   |
| The Dark Knight Rises | 2012   |

Írjunk lekérdezést, amely visszaadja azt a filmet, ami a *The Dark Knight Rises* című film sorozatának első része volt. A lekérdezésben induljunk ki a megadott filmből, és a kapcsolatok mentén navigáljunk el a legutolsó filmig a láncban.
