## Exercise 1

The goal is to create a new ontology in Protége. The IRI identifier of the ontology should be <i>https://com.github.szgabsz91/iit-szg/courses/db/lab07/cars</i>.

In the ontology, there should be two object types, both of them extending the base <code>owl:Thing</code> type:

* `Person`
* `Car`

The `Person` type should have two data attrbiutes, both of them should be functional and of type <code>xsd:string</code>:

* `firstName`
* `lastName`

The `Car` type should have 4 data attributes, all of them should be functional, and the first 3 attributes should be of type <code>xsd:string</code>, while the fourth one should be of type <code>xsd:decimal</code>:

* `licensePlateNumber`
* `manufacturer`
* `model`
* `price`

Besides that, the ownership relation should be represented by an `owner` object attribute in the `Car` type that can point to a `Person` object. This object attribute should be functional as well.

The ontology should store the following `Person` object instances:

| First name | Last name |
|:-----------|:----------|
| Anne       | Walker    |
| Michael    | Smith     |
| George     | White     |
| Tom        | Brown     |
| Emma       | Jones     |

And it should store the following `Car` object instances:

| License plate number | Manufacturer | Model   | Price | Owner         |
|:---------------------|:-------------|:--------|------:|:--------------|
| AB12 CDE             | Tesla        | Model 3 | 13.5  | Michael Smith |
| AB12 CDF             | Volkswagen   | ID.4    | 16.8  | Tom Brown     |
| AB12 CDG             | Kia          | e-Niro  | 8.9   | Michael Smith |
| AB12 CDH             | Volkswagen   | ID.3    | 8.3   | Emma Jones    |
| AB12 CDI             | Hyundai      | Ioniq   | 8.5   | George White  |
| AB12 CDJ             | Hyundai      | IONIQ 5 | 13.5  | Emma Jones    |
| AB12 CDK             | Kia          | EV6     | 13.5  | Anne Walker   |
| AB12 CDL             | Skoda        | ENYAQ   | 12.6  | Tom Brown     |
| AB12 CDM             | Hyundai      | Kona    | 7.5   | Michael Smith |

For the object instances, we should always list the different individuals of the same type.

<ol type="a">
  <li>Let's create the ontology in Protége based on the above description. Let's save the ontology as an OWL file.</li>
  <li>Let's write a SPARQL query for the resulting ontology that returns the manufacturer, model, price and owner's first and last name of the cars that are more expensive than 9, sorted by their prices in descending order.</li>
</ol>

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/db/lab07/solution.zip).
