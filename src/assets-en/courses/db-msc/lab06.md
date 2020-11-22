talán szét lehet szedni: típusok és metódusok, ha van elég feladat

<h3>ORDBMS</h3>
  
  <p>Feladat: SQL script, ami először létrehozza a lenti UML diagram modelljét, majd beszúr néhány adatot és végrehajt egy lekérdezést!</p>
  
  <p>A megvalósítandó UML diagram:</p>
  
  <p class="video">
    <img src="courses/dbmsc/gyak06.png" alt="UML Diagram">
  </p>
  
  <p>A létrehozandó táblák és típusok további információi:</p>
  
  <ul>
    <li>A Car típus példányosítható és nem final, és tartozik hozzá egy collection tábla ref elemekkel.</li>
	<li>Hozzunk létre egy táblát a PersonInfo típusnak is, referenciák nélkül.</li>
	<li>A People tábla referenciát tartalmazzon a PersonInfo elemekre, illetve egy nested táblát a Car típus collectionjére.</li>
	<li>Az adatbázis tartalmazzon legalább 2 személyt, 1 és 2 autóval.</li>
  </ul>
  
  <p>A lekérdezés eredménye két oszlopot tartalmazzon:</p>
  
  <ul>
    <li>A személy neve, formátum: <em>"${lastName}, ${firstName}"</em></li>
	<li>A személy autóinak összértéke</li>
  </ul>
  
  <p>Adatbázis hozzáférés: 193.6.5.58:1521:xe</p>

  gyak06.png

  ---

  drop table People;
drop table Cars;
drop table PersonInfos;
drop type PersonInfo;
drop type CarCollection;
drop type Car;

create or replace type Car as object(
  plateNumber char(7),
  manufacturer varchar2(50),
  price number
) instantiable not final;

create or replace type CarCollection as table of ref Car;

create table Cars of Car;

insert into Cars values(Car('ABC-123', 'Honda', 8.9));
insert into Cars values(Car('ABC-124', 'Mercedes', 10.8));
insert into Cars values(Car('ABC-125', 'Audi', 6.2));

create or replace type PersonInfo as object(
  id int,
  firstName varchar2(50),
  lastName varchar2(50)
);

create table PersonInfos of PersonInfo;

insert into PersonInfos values(1, 'John', 'Doe');
insert into PersonInfos values(2, 'Jane', 'Doe');

create table People(
  id int not null primary key,
  personInfo ref PersonInfo,
  cars CarCollection
) nested table cars store as cars_table;

insert into People values(
  1,
  (select ref(pi) from PersonInfos pi where pi.id = 1),
  CarCollection(
    (select ref(c) from Cars c where c.plateNumber = 'ABC-124')
  )
);

insert into People values(
  2,
  (select ref(pi) from PersonInfos pi where pi.id = 2),
  CarCollection(
    (select ref(c) from Cars c where c.plateNumber = 'ABC-123'),
    (select ref(c) from Cars c where c.plateNumber = 'ABC-125')
  )
);

select
  deref(p.personInfo).lastName || ', ' || deref(p.personInfo).firstName as name,
  sum(deref(c.column_value).price) as totalPrice
from
  People p,
  table(p.cars) c
group by
  deref(p.personInfo).lastName || ', ' || deref(p.personInfo).firstName;

gyak06.zargo

===

<h3>ORDBMS</h3>
  
  <p>Feladat: SQL script, ami TodoItem objektumokat kezel.</p>
  
  <p>Egy TodoItem szerkezete:</p>
  
  <ul>
    <li>id: integer primary key, mindig egy szekvenciából kell értéket adni neki</li>
	<li>summary: string</li>
	<li>priority: integer, 0 és 10 közti szám (check feltétel)</li>
	<li>konstruktor: paramétere a summary, amit eltárol, az id-t beállítja a szekvencia következő értékére, a prioritást 0-ra</li>
	<li>UpdatePriority(newPriority): procedúra, ami elmenti az új prioritást az objektumba és frissíti a tábla értékét az id alapján</li>
	<li>ToString: függvény, ami visszaad egy stringet a következő formátumban: "${id} ${summary} ${priority}"</li>
	<li>InsertTodoItem(summary): statikus procedúra, ami beszúrja a táblába az új TodoItem objektumot a megfelelő summary-val</li>
  </ul>
  
  <p>A feladat lépései:</p>
  
  <ul>
    <li>Hozzuk létre a megfelelő típust az attribútumokkal, procedúrákkal és függvényekkel.</li>
	<li>Hozzunk létre egy szekvenciát.</li>
	<li>Hozzunk létre egy táblát a fenti típus és megszorítások alapján.</li>
	<li>Szúrjunk be két TodoItem objektumot a statikus procedúra segítségével.</li>
	<li>PL/SQL blokkban kérjük le a második TodoItem objektumot summary alapján, és hívjuk meg rajta az UpdatePriority függvényt. Ha negatív vagy 10-nél nagyobb értékkel hívjuk meg, a hívásnak hibát kell dobnia a CHECK megszorítás miatt.</li>
	<li>Írjunk egy selectet, ami prioritás szerint csökkenő sorrendben visszaadja a TodoItem objektumokat. Az eredmény tábla egyetlen oszlopot tartalmazzon, amiben az adott objektum ToString függvénye által visszaadott string szerepeljen.</li>
  </ul>
  
  <p>Adatbázis hozzáférés: 193.6.5.58:1521:xe</p>

drop table TodoItems;
drop sequence TodoItemSequence;

create or replace type TodoItem as object(
  id int,
  summary varchar(50),
  priority int,
  
  constructor function TodoItem(summary varchar2) return self as result,
  member procedure UpdatePriority(newPriority int),
  member function ToString return varchar2,
  static procedure InsertTodoItem(summary varchar2)
);

create table TodoItems of TodoItem(
  primary key (id),
  check (priority >= 0 and priority <= 10)
);

create sequence TodoItemSequence;

create or replace type body TodoItem as
  constructor function TodoItem(summary varchar2) return self as result is
  begin
    self.summary := summary;
    self.id := TodoItemSequence.nextval;
    self.priority := 0;
    return;
  end;
  
  member procedure UpdatePriority(newPriority in int) is
  begin
    self.priority := newPriority;
    update TodoItems set priority = self.priority where id = self.id;
  end;
  
  member function ToString return varchar2 is
  begin
    return self.id || ' ' || self.summary || ' ' || self.priority;
  end;
  
  static procedure InsertTodoItem(summary varchar2) is
  begin
    insert into TodoItems values(TodoItem(summary));
  end;
end;

exec TodoItem.InsertTodoItem('Todo 1');
exec TodoItem.InsertTodoItem('Todo 2');
select ti.* from TodoItems ti;

set serveroutput on;
declare
  ti TodoItem;
begin
  select value(ti) into ti from TodoItems ti where ti.summary = 'Todo 2';
  ti.UpdatePriority(5);
end;

select
  value(ti).ToString()
from
  TodoItems ti
order by
  ti.priority desc;


=== MD

Feladat: SQL script, ami először létrehozza a lenti UML diagram modelljét, majd beszúr néhány adatot és végrehajt egy lekérdezést!

A megvalósítandó UML diagram:

![UML Diagram](practice06.png)

A létrehozandó táblák és típusok további információi:

* A `Car` típus példányosítható és nem final, és tartozik hozzá egy collection tábla ref elemekkel.
* Hozzunk létre egy táblát a `PersonInfo` típusnak is, referenciák nélkül.
* A `People` tábla referenciát tartalmazzon a `PersonInfo` elemekre, illetve egy nested táblát a `Car` típus collectionjére.
* Az adatbázis tartalmazzon legalább 2 személyt, 1 és 2 autóval.

A lekérdezés eredménye két oszlopot tartalmazzon:

* A személy neve, formátum: `"${lastName}, ${firstName}"`
* A személy autóinak összértéke

Adatbázis hozzáférés: 193.6.5.58:1521:xe

=== MD

Feladat: SQL script, ami `TodoItem` objektumokat kezel.

Egy `TodoItem` szerkezete:

* `id`: integer primary key, mindig egy szekvenciából kell értéket adni neki
* `summary`: string
* `priority`: integer, 0 és 10 közti szám (check feltétel)
* `constructor`: paramétere a summary, amit eltárol, az `id`-t beállítja a szekvencia következő értékére, a prioritást 0-ra
* `UpdatePriority(newPriority)`: procedúra, ami elmenti az új prioritást az objektumba és frissíti a tábla értékét az id alapján
* `ToString`: függvény, ami visszaad egy stringet a következő formátumban: `"${id} ${summary} ${priority}"`
* `InsertTodoItem(summary)`: statikus procedúra, ami beszúrja a táblába az új `TodoItem` objektumot a megfelelő `summary`-val

A feladat lépései:

* Hozzuk létre a megfelelő típust az attribútumokkal, procedúrákkal és függvényekkel.
* Hozzunk létre egy szekvenciát.
* Hozzunk létre egy táblát a fenti típus és megszorítások alapján.
* Szúrjunk be két TodoItem objektumot a statikus procedúra segítségével.
* PL/SQL blokkban kérjük le a második `TodoItem` objektumot `summary` alapján, és hívjuk meg rajta az `UpdatePriority` függvényt. Ha negatív vagy 10-nél nagyobb értékkel hívjuk meg, a hívásnak hibát kell dobnia a `CHECK` megszorítás miatt.
* Írjunk egy selectet, ami prioritás szerint csökkenő sorrendben visszaadja a `TodoItem` objektumokat. Az eredmény tábla egyetlen oszlopot tartalmazzon, amiben az adott objektum `ToString` függvénye által visszaadott string szerepeljen.

Adatbázis hozzáférés: 193.6.5.58:1521:xe
