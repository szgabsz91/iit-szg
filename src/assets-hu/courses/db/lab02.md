## 1. feladat

Írjunk Java alkalmazást a Hibernate JPA library használatával. Az alkalmazás tároljon személyeket és autókat egy Oracle adatbázisban, a következő adatokkal:

* `Person` osztály: a `People` táblában tárolódjon, és a következő mezőkkel rendelkezzen:
  * `id`: automatikusan generált, `number` típusú azonosító, nem lehet `NULL`
  * `firstName`: `varchar2` típusú mező, nem lehet `NULL`
  * `lastName`: `varchar2` típusú mező, nem lehet `NULL`
  * `cars`: `List<Car>` típusú property, azonnal töltődjön be memóriába lekérdezés után, és ha töröljük a személyt, az autói is törlődjenek
* `Car` osztály: a `Cars` táblában tárolódjon, és a következő propertykkel rendelkezzen:
  * `licensePlateNumber`: nem automatikusan generált, `varchar2` típusú azonosító, nem lehet `NULL`
  * `manufacturer`: `varchar2` típusú mező, nem lehet `NULL`
  * `model`: `string` típusú mező, nem lehet `NULL`
  * `price`: `double` típusú mező, nem lehet `NULL`
  * `owner_id`: `number` típusú idegen kulcs, nem lehet `NULL`

Állítsuk be úgy a Hibernate konfigurációt, hogy az alkalmazás indulásakor az adatbázis automatikusan jöjjön létre a fenti leírás alapján, a `SessionFactory` lezárásakor pedig törlődjön.

Végezzük el a következő alfeladatokat:

<ol type="a">
  <li>Hozzunk létre legalább két, azonos vezetéknevű személyt, akik közül az egyiknek 1, a másiknak 2 autója legyen.</li>
  <li>Adjunk egy nevesített queryt a <code>Person</code> osztályhoz, ami lekérdezi az adott vezetéknevű személyeket, az autóikkal együtt. Ezt a queryt használva kérdezzük le az előző vezetéknevű személyeket és autóikat, és írjuk ki őket a konzolra.</li>
</ol>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/db/lab02/solution.zip) érhetők el.
