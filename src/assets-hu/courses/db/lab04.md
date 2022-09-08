## 1. feladat

Adott a következő UML diagram:

<p align="center">
  <a href="assets/courses/db/lab04/exercise01/people.dot.png" target="_blank">
    <img src="assets/courses/db/lab04/exercise01/people.dot.png" alt="UML diagram">
  </a>
</p>

A fenti UML diagram alapján végezzük el a következő Oracle adatbázishoz kapcsolódó alfeladatokat:

<ol type="a">
  <li>Hozzuk létre a fenti UML diagram alapján a <code>Car</code> típust az adatbázison belül. A típus legyen példányosítható és kiterjeszthető. Hozzuk létre a <code>CarCollection</code> típust, amely <code>Car</code> típusú referenciákból áll. Hozzuk létre a <code>Cars</code> táblát a <code>Car</code> típusból.</li>
  <li>Szúrjunk be legalább 3 <code>Car</code> típusú objektumot a <code>Cars</code> táblába.</li>
  <li>Hozzuk létre a fenti UML diagram alapján a <code>PersonInfo</code> típust és hozzá a <code>PersonInfos</code> táblát.</li>
  <li>Szúrjunk be legalább 2 <code>PersonInfo</code> objektumot a <code>PersonInfos</code> táblába.</li>
  <li>Hozzuk létre a fenti UML diagram alapján a <code>People</code> táblát.</li>
  <li>Szúrjunk be legalább 2 rekordot a <code>People</code> táblába úgy, hogy az első személynek legalább 1, a második személynek legalább 2 autója legyen.</li>
  <li>Írjunk lekérdezést, melynek eredménye 2 oszlopot tartalmaz: a személyek teljes nevét és az általuk birtokolt autók összárát.</li>
</ol>

## 2. feladat

A feladat `TodoItem` típusú objektumok tárolása. A `TodoItem` típus szerkezete a következő:

* `id` attribútum: integer azonosító, mindig egy szekvenciából kell értéket adni neki
* `summary` attribútum: string típusú
* `priority` attribútum: 0 és 10 közti egész szám lehet (*check* feltétel)
* konstruktor: paramétere a summary, amit eltárol, az azonosítót beállítja a szekvencia következő értékére, a prioritást pedig 0-ra
* `UpdatePriority` metódus: procedúra, aminek paramétere az új prioritás, amit elment az objektumba és frissíti a tábla értékét az azonosító alapján
* `ToString` metódus: függvény, ami visszaad egy stringet a következő formátumban: *"${id} ${summary} ${priority}"*
* `InsertTodoItem`: statikus procedúra, aminek paramétere a summary, amiből létrehoz egy új `TodoItem` objektumot, és beszúrja a táblába

A fenti leírás alapján végezzük el a következő Oracle adatbázishoz kapcsolódó alfeladatokat:

<ol type="a">
  <li>Hozzuk létre a <code>TodoItem</code> típust és annak implementációját, a <code>TodoItems</code> táblát és a <code>TodoItemSequence</code> szekvenciát.</li>
  <li>Szúrjunk be legalább 2 <code>TodoItem</code> objektumot az adatbázisba az <code>InsertTodoItem</code> statikus metódus segítségével.</li>
  <li>Frissítsük a második <code>TodoItem</code> objektum prioritását 5-re az <code>UpdatePriority</code> metódus segítségével. Figyeljük meg, hogy ha negatív, vagy 10-nél nagyobb értékkel próbálkozunk, hibát kapunk.</li>
  <li>Kérdezzük le az összes <code>TodoItem</code> objektum <code>ToString</code> metódusának eredményét, prioritás szerint csökkenő sorrendben.</li>
</ol>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/db/lab04/solution.zip) érhetők el.
