## Exercise 1

Let's create a Java application using the Hibernate JPA library. The application should store people and their cars in an Oracle database with the following data:

* `Person` class: should be stored in the `People` table, with the following fields:
  * `id`: auto-generated `number` primary key field that cannot be `NULL`
  * `firstName`: `varchar2` field that cannot be `NULL`
  * `lastName`: `varchar2` field that cannot be `NULL`
  * `cars`: a `List<Car>` property that should be populated eagerly, and if the owner is deleted, then her/his cars should be deleted as well
* `Car` class: should be stored in the `Cars` table, with the following fields:
  * `licensePlateNumber`: `varchar2` primary key field that cannot be `NULL`
  * `manufacturer`: `varchar2` field that cannot be `NULL`
  * `model`: `varchar2` field that cannot be `NULL`
  * `price`: `double` field that cannot be `NULL`
  * `owner_id`: `number` foreign key field that cannot be `NULL`

Let's configure Hibernate such that the database is created automatically on startup based on the above description, and it is destroyed after the `SessionFactory` is closed.

Let's execute the following subtasks

<ol type="a">
  <li>Let's create at least two owners with the same last name. One of them should have 1, the other one should have 2 cars.</li>
  <li>Let's create a named query on the <code>Person</code> class that returns the owners and their cars with the given last name parameter. Let's query and print the results to the console using this named query.</li>
</ol>

## Solution

To download the solution of the above exercises, [click here](assets/courses/db/lab02/solution.zip).
