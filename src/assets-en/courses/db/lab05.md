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

Let's execute the following subtasks in a MongoDB database:

<ol type="a">
  <li>Let's create a new <code>people</code> collection with the above data such that the cars appear as an embedded list named <code>cars</code> under each owner.</li>
  <li>Let's query all the data of the stored people.</li>
  <li>Let's query the person with the highest salary among those people whose salary is greater than 50 and less than or equal to 150. The result should contain the person's first name, last name and salary.</li>
  <li>Let's query the people and the total price of their cars such that the result contains the person's full name (formatted as <i>"${firstName} ${lastName}"</i>) and the total price.</li>
</ol>

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/db/lab05/solution.zip).
