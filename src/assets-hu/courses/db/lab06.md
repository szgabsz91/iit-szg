## 1. feladat

Adottak az alábbi személyek:

| Név                | Objektum típusa | Oscar-díjas |
|:-------------------|:----------------|:------------|
| Quentin Tarantino  | DIRECTOR        | igen        |
| Samuel L. Jackson  | ACTOR           | nem         |
| Kurt Russell       | ACTOR           | nem         |
| Tim Roth           | ACTOR           | nem         |
| Jamie Foxx         | ACTOR           | igen        |
| Christoph Waltz    | ACTOR           | igen        |
| Leonardo DiCaprio  | ACTOR           | igen        |
| Brad Pitt          | ACTOR           | igen        |
| Michael Fassbender | ACTOR           | nem         |
| John Travolta      | ACTOR           | nem         |

És adottak a következő filmek:

| Cím                  | Évszám | Rendező           | Szereplők                                                         |
|:---------------------|:-------|:------------------|:------------------------------------------------------------------|
| The Hateful Eight    | 2015   | Quentin Tarantino | Samuel L. Jackson, Kurt Russell, Tim Roth                         |
| Django Unchained     | 2012   | Quentin Tarantino | Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Samuel L. Jackson |
| Inglourious Basterds | 2009   | Quentin Tarantino | Brad Pitt, Christoph Waltz, Michael Fassbender                    |
| Pulp Fiction         | 1994   | Quentin Tarantino | Tim Roth, John Travolta, Samuel L. Jackson                        |

Végezzük el a következő alfeladatokat Neo4j adatbázisban:

<ol type="a">
  <li>
    Töltsük fel a Neo4j adatbázist a fenti adatokkal úgy, hogy a következő kapcsolatokat használjuk:
    <ul>
      <li><code>ACTED_IN</code>: a színész irányából mutat a filmre</li>
      <li><code>DIRECTED</code>: a rendező irányából mutat a filmre</li>
    </ul>
  </li>
  <li>Kérdezzünk le minden csomópontot az adatbázisból.</li>
  <li>Kérdezzük le, hogy Quentin Tarantino mely Oscar-díjas színészekkel dolgozott együtt 2009 és 2015 között.</li>
  <li>Kérdezzük le, hogy Quentin Tarantino hány Oscar-díjas színésszel dolgozott már együtt összesen.</li>
  <li>Kérdezzük le, hogy a Django Unchained című film készítésében hány Oscar-díjas rendező és színész vett részt.</li>
  <li>Kérdezzük le, hogy Samuel L. Jackson hány filmben szerepelt összesen.</li>
</ol>

## 2. feladat

Adott az alábbi filmtrilógia:

| Cím                   | Évszám |
|:----------------------|:-------|
| Batman Begins         | 2005   |
| The Dark Knight       | 2008   |
| The Dark Knight Rises | 2012   |

Végezzük el a következő alfeladatokat Neo4j adatbázisban:

<ol type="a">
  <li>Töltsük fel a Neo4j adatbázist a fenti 3 filmmel úgy, hogy köztük <code>SEQUEL</code> típusú kapcsolat legyen, mindig a korábbi film irányából a folytatás irányába mutatva.</li>
  <li>Kérdezzünk le minden csomópontot az adatbázisból.</li>
  <li>Kérdezzük le, hogy mi volt a The Dark Knight Rises című film sorozatának első része. A lekérdezésben induljunk ki a megadott nevű filmből, és a kapcsolatok mentén navigáljunk el a láncban a legelső filmig.</li>
</ol>

## 3. feladat

Adottak a következő személyek:

| Név   | Objektum típus |
|:------|:---------------|
| Peter | PERSON         |
| Jack  | PERSON         |
| John  | PERSON         |

Adottak a következő gyártók:

| Név       | Objektum típus |
|:----------|:---------------|
| Apple     | MANUFACTURER   |
| Google    | MANUFACTURER   |
| Microsoft | MANUFACTURER   |

Adottak a következő telefonok:

| Modell        | Ár  | Objektum típus | Gyártó    | Tulajdonos |
|:--------------|:----|:---------------|:----------|:-----------|
| Nexus 6P      | 499 | TELEPHONE      | Google    | Peter      |
| Lumia 1320    | 533 | TELEPHONE      | Microsoft | Peter      |
| iPhone 6S     | 749 | TELEPHONE      | Apple     | Jack       |
| Nexus 5X      | 299 | TELEPHONE      | Google    | John       |
| iPhone 6 Plus | 649 | TELEPHONE      | Apple     | John       |

Végezzük el a következő alfeladatokat Neo4j adatbázisban, Java JDBC-t használva:

<ol type="a">
  <li>Töltsük fel a Neo4j adatbázist a fenti adatokkal. A személyekből képezzünk láncot egy <code>PEOPLE</code> típusú objektumból kiindulva, <code>LIST</code> típusú kapcsolatokkal, Peter, Jack, John sorrendben. A gyártókból a telefonok felé irányuljon <code>MANUFACTURES</code> típusú kapcsolat, a személyekből a telefonok felé pedig irányuljon <code>OWNS</code> típusú kapcsolat.</li>
  <li>Kérdezzük le azokat a személyeket, akiknek Google által gyártott telefonjuk van. Írassuk ki a személyek nevét a konzolra ábécé sorrendben.</li>
  <li>Kérdezzük le a listában szereplő első olyan személyt, akinek Apple által gyártott telefonja van és írassuk ki a nevét a konzolra.</li>
  <li>Kérdezzük le a legmagasabb átlagárú telefonok gyártóját és írassuk ki a nevét a konzolra.</li>
  <li>Kérdezzük le a listában szereplő első olyan személyt, akinek nincs Microsoft telefonja, és írassuk ki a nevét a konzolra.</li>
</ol>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/db/lab06/solution.zip) érhetők el.
