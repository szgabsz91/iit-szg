## Exercise 1

Given the following people (first name, last name and salary):

| First name | Last name | Salary |
|:-----------|:----------|-------:|
| Anne       | Walker    | 30     |
| Michael    | Smith     | 1000   |
| George     | White     | 50     |
| Tom        | Brown     | 200    |
| Emma       | Jones     | 150    |

And given the following cars (license plate number, manufacturer, model, price and owner):

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

Let's create a C# application using LINQ that executes a complex query based on the following constraints:

* Let's join the people with their cars using the first name, last name and owner properties.
* Let's group the pairs based on the number of digits in the owners' salaries.
* The value of each group should be the total price of cars in the group.
* Let's sort the *(number of salary digits, total price)* pairs based on their total prices in a descending order.
* Let's print the resulting pairs to the console.

Let's implement the above query in two ways:

<ol type="a">
  <li>using LINQ expressions</li>
  <li>using chained method calls</li>
</ol>

The query should be implemented in a single step. For simplicity, we can use anonymous types for the intermediate results.

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/db/lab03/solution.zip).
