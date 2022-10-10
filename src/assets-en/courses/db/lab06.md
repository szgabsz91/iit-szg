## Exercise 1

Given the following people:

| Name               | Object type     | Has Oscar |
|:-------------------|:----------------|:----------|
| Quentin Tarantino  | DIRECTOR        | yes       |
| Samuel L. Jackson  | ACTOR           | no        |
| Kurt Russell       | ACTOR           | no        |
| Tim Roth           | ACTOR           | no        |
| Jamie Foxx         | ACTOR           | yes       |
| Christoph Waltz    | ACTOR           | yes       |
| Leonardo DiCaprio  | ACTOR           | yes       |
| Brad Pitt          | ACTOR           | yes       |
| Michael Fassbender | ACTOR           | no        |
| John Travolta      | ACTOR           | no        |

And given the following movies:

| Title                | Year   | Director          | Actors                                                            |
|:---------------------|:-------|:------------------|:------------------------------------------------------------------|
| The Hateful Eight    | 2015   | Quentin Tarantino | Samuel L. Jackson, Kurt Russell, Tim Roth                         |
| Django Unchained     | 2012   | Quentin Tarantino | Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Samuel L. Jackson |
| Inglourious Basterds | 2009   | Quentin Tarantino | Brad Pitt, Christoph Waltz, Michael Fassbender                    |
| Pulp Fiction         | 1994   | Quentin Tarantino | Tim Roth, John Travolta, Samuel L. Jackson                        |

Let's execute the following subtasks in a Neo4j database:

<ol type="a">
  <li>
    Let's insert the above data into the Neo4j database such that the following relationships are used:
    <ul>
      <li><code>ACTED_IN</code>: points from an actor to a movie</li>
      <li><code>DIRECTED</code>: points from a director to a movie</li>
    </ul>
  </li>
  <li>Let's query all the nodes from the database.</li>
  <li>Let's query how many actors with an Oscar did Quentin Tarantino work with between 2009 and 2015.</li>
  <li>Let's query how many actors with an Oscar has Quentin Tarantino worked with altogether.</li>
  <li>Let's query how many actors and directors with an Oscar has contributed to the movie Django Unchained.</li>
  <li>Let's query how many movies has Samuel L. Jackson starred in altogether.</li>
</ol>

## Exercise 2

Given the following movie trilogy:

| Title                 | Year |
|:----------------------|:-------|
| Batman Begins         | 2005   |
| The Dark Knight       | 2008   |
| The Dark Knight Rises | 2012   |

Let's execute the following subtasks in a Neo4j database:

<ol type="a">
  <li>Let's insert the above data into the Neo4j database such that we use a <code>SEQUEL</code> relationship that points from the prequel to the sequel.</li>
  <li>Let's query all the nodes from the database.</li>
  <li>Let's query the first movie in the series of The Dark Knight Rises. In the query, let's start from the given movie and move towards the prequels.</li>
</ol>

## Exercise 3

Given the following people:

| Name  | Object type |
|:------|:------------|
| Peter | PERSON      |
| Jack  | PERSON      |
| John  | PERSON      |

Given the following manufacturers:

| Name      | Object type  |
|:----------|:-------------|
| Apple     | MANUFACTURER |
| Google    | MANUFACTURER |
| Microsoft | MANUFACTURER |

Given the following telephones:

| Model         | Price | Object type | Manufacturer | Owner |
|:--------------|:------|:------------|:-------------|:------|
| Nexus 6P      | 499   | TELEPHONE   | Google       | Peter |
| Lumia 1320    | 533   | TELEPHONE   | Microsoft    | Peter |
| iPhone 6S     | 749   | TELEPHONE   | Apple        | Jack  |
| Nexus 5X      | 299   | TELEPHONE   | Google       | John  |
| iPhone 6 Plus | 649   | TELEPHONE   | Apple        | John  |

Let's execute the following subtasks in a Neo4j database, using the Java JDBC API:

<ol type="a">
  <li>Let's insert the above data into the Neo4j database. The people should be part of a chain, starting from a <code>PEOPLE</code> object, using <code>LIST</code> relationships. Their order should be: Peter, Jack and John. There should be <code>MANUFACTURES</code> relationships from the manufacturers to the telephones, and <code>OWNS</code> relationships from the people to the telephones.</li>
  <li>Let's query those people who own at least 1 telephone manufactured by Google. Let's print their names to the console in alphabetical order.</li>
  <li>Let's query the first person in the list who owns at least 1 telephone manufactured by Apple. Let's print his name to the console.</li>
  <li>Let's query the manufacturer that has the highest average price among its manufactured telephones. Let's print its name to the console.</li>
  <li>Let's query the first person in the list who does not own any telephones manufactured by Microsoft. Let's print his name to the console.</li>
</ol>

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/db/lab06/solution.zip).
