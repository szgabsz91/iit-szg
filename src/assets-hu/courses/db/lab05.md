## 1. feladat

Adottak a következő személyek (vezetéknév, keresztnév és fizetés):

| Vezetéknév | Keresztnév | Fizetés |
|:-----------|:-----------|--------:|
| Walker     | Anne       | 30      |
| Smith      | Michael    | 1000    |
| White      | George     | 50      |
| Brown      | Tom        | 200     |
| Jones      | Emma       | 150     |

És adottak a következő autók (rendszám, gyártó, modell, ár és tulajdonos):

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

Végezzük el a következő alfeladatokat MongoDB adatbázisban:

<ol type="a">
  <li>Hozzunk létre egy új <code>people</code> collectiont, és töltsük fel a fenti adatokkal úgy, hogy az autók egy beágyazott <code>cars</code> listában szerepeljenek az adott személy alatt.</li>
  <li>Kérdezzük le a személyek összes adatát.</li>
  <li>Kérdezzük le az 50-nél többet, de legfeljebb 150-et kereső személyek közül a legmagasabb fizetésűt. Az eredmény tartalmazza a személy vezeték- és keresztnevét, valamint fizetését.</li>
  <li>Kérdezzük le a személyeket és az általuk birtokolt autók összárát úgy, hogy az eredmény tartalmazza a személy teljes nevét (<i>"${firstName} ${lastName}"</i> formátumban) és az autók összárát.</li>
</ol>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/db/lab05/solution.zip) érhetők el.
