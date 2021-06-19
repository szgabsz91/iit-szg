## Exercise 1

Given the following UML diagram:

<p align="center">
  <img src="assets/courses/db/lab04/exercise01/people.dot.png" alt="UML diagram">
</p>

Based on the above UML diagram, let's execute the following subtasks in an Oracle database:

<ol type="a">
  <li>Based on the above UML diagram, let's create the <code>Car</code> type in the database. The type should be instantiable and extensible. Let's create the <code>CarCollection</code> type that contains references to objects of the <code>Car</code> type. Let's create the <code>Cars</code> table from the <code>Car</code> type.</li>
  <li>Let's insert at least 3 <code>Car</code> objects into the <code>Cars</code> table.</li>
  <li>Based on the above UML diagram, let's create the <code>PersonInfo</code> type and the <code>PersonInfos</code> table.</li>
  <li>Let's insert at least 2 <code>PersonInfo</code> objects into the <code>PersonInfos</code> table.</li>
  <li>Based on the above UML diagram, let's create the <code>People</code> table.</li>
  <li>Let's insert at least 2 records into the <code>People</code> table such that the first person owns at least 1, while the second person owns at least 2 cars.</li>
  <li>Let's write a query that outputs two columns: the full name of the stored people and the total price of their cars.</li>
</ol>

## Exercise 2

Let's store `TodoItem` objects in the Oracle database. The `TodoItem` type should contain the following elements:

* `id` attribute: integer primary key that is always populated from a sequence
* `summary` attribute: string
* `priority` attribute: has an integer value between 0 és 10 (*check* constraint)
* constructor: its parameter is the summary, that is stored by the constructor, the identifier is set to the next value of the sequence and the priority is set to 0
* `UpdatePriority` method: a procedure whose input parameter is the new priority, that is set into the object and the table is updated based on the identifier
* `ToString` method: a function that returns a string in the following format: *"${id} ${summary} ${priority}"*
* `InsertTodoItem`: static procedure whose parameter is the summary, from which it creates a new `TodoItem` object and inserts it into the table

Based on the above description, let's execute the following subtasks in an Oracle database:

<ol type="a">
  <li>Let's create the <code>TodoItem</code> type and its implementation, the <code>TodoItems</code> table and the <code>TodoItemSequence</code> sequence.</li>
  <li>Let's insert at least 2 <code>TodoItem</code> objects into the database using the <code>InsertTodoItem</code> static method.</li>
  <li>Let's update the priority of the second <code>TodoItem</code> object to 5 using the <code>UpdatePriority</code> method. Let's examine that the command will fail in case of a negative priority or a priority greater than 10.</li>
  <li>Let's query the output of the <code>ToString</code> method for all the <code>TodoItem</code> objects, sorted by their priorities in descending order.</li>
</ol>

## Solution

To download the solution of the above exercises, [click here](assets/courses/db/lab04/solution.zip).
