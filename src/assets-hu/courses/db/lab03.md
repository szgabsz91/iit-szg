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

Írjunk C# alkalmazást LINQ segítségével, amelyben egy komplex lekérdezést végzünk el a következő pontok figyelembevételével:

* Kapcsoljuk össze a személyeket és autókat a vezetéknév, keresztnév és tulajdonos tulajdonságok segítségével.
* Csoportosítsuk a párokat a személy fizetésében szereplő számjegyek száma szerint.
* A csoportok értéke legyen a csoportban szereplő autók összára.
* Az így kapott *(fizetés számjegyeinek száma, autók összára)* párokat rendezzük az autók összárai szerint csökkenő sorrendbe.
* Írassuk ki a konzolra a kapott párokat.

Készítsük el a lekérdezést kétféle módon:

<ol type="a">
  <li>LINQ kifejezések segítségével</li>
  <li>Láncolt metódusok segítségével</li>
</ol>

A lekérdezést ne bontsuk több részlépésre. Az egyszerűség kedvéért a részlépések eredményeihez használjunk névtelen típusokat.

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/db/lab03/solution.zip) érhetők el.
