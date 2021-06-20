## 1. feladat

A feladat egy ontológia létrehozása Protége-ben. Az ontológia IRI azonosítója legyen <i>https://com.github.szgabsz91/iit-szg/courses/db/lab07/cars</i>.

Az ontológiában két objektumtípus létezzen, mindkettő az alap <code>owl:Thing</code> típusból származzon:

* `Person`
* `Car`

A `Person` típusnak legyen 2 adat attribútuma, mindkettő funkcionális, <code>xsd:string</code> típusú:

* `firstName`
* `lastName`

A `Car` típusnak legyen 4 adat attribútuma, mindegyik funkcionális, az első három <code>xsd:string</code>, a negyedik <code>xsd:decimal</code> típusú:

* `licensePlateNumber`
* `manufacturer`
* `model`
* `price`

Ezen kívül jelölje a tulajdonosi kapcsolatot a `Car` típusban egy objektum attribútum (`owner`), amely egy `Person` típusú egyedre mutathat, és szintén funkcionális.

Az ontológiában a következő személyek adatai szerepeljenek:

| Vezetéknév | Keresztnév |
|:-----------|:-----------|
| Walker     | Anne       |
| Smith      | Michael    |
| White      | George     |
| Brown      | Tom        |
| Jones      | Emma       |

Ezen kívül az ontológiában a következő autók adatai szerepeljenek:

| Rendszám | Gyártó     | Modell  | Ár   | Tulajdonos    |
|:---------|:-----------|:--------|-----:|:--------------|
| AB12 CDE | Tesla      | Model 3 | 13.5 | Michael Smith |
| AB12 CDF | Volkswagen | ID.4    | 16.8 | Tom Brown     |
| AB12 CDG | Kia        | e-Niro  | 8.9  | Michael Smith |
| AB12 CDH | Volkswagen | ID.3    | 8.3  | Emma Jones    |
| AB12 CDI | Hyundai    | Ioniq   | 8.5  | George White  |
| AB12 CDJ | Hyundai    | IONIQ 5 | 13.5 | Emma Jones    |
| AB12 CDK | Kia        | EV6     | 13.5 | Anne Walker   |
| AB12 CDL | Skoda      | ENYAQ   | 12.6 | Tom Brown     |
| AB12 CDM | Hyundai    | Kona    | 7.5  | Michael Smith |

Az egyedeknél soroljuk fel minden esetben a tőle különböző, azonos típusú egyéb egyedeket (<i>different individuals</i>).

<ol type="a">
  <li>Hozzunk létre ontológiát a fenti leírásnak megfelelően Protége-ben. Az ontológiát mentsük le egy OWL fájlba.</li>
  <li>Írjunk egy SPARQL lekérdezést a létrehozott ontológiához, amely visszaadja a 9-nél drágább autók gyártóját, modelljét, árát és tulajdonosuk vezeték- és keresztnevét, ár szerint csökkenő sorrendben.</li>
</ol>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/db/lab07/solution.zip) érhetők el.
