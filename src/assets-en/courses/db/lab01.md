## Exercise 1

Let's create a Java application that executes the following subtasks:

<ol type="a">
  <li>Let's connect to the OpenLDAP server as the admin user with the correct password.</li>
  <li>Let's connect to the OpenLDAP server as the admin user with an incorrect password.</li>
  <li>
    Let's create a new entry as the admin user. The new entry should have the following attributes:
    <ul>
      <li>Parent: <code>dc=example,dc=org</code></li>
      <li><code>cn = tanderson</code></li>
      <li><code>givenname = thomas</code></li>
      <li><code>sn = anderson</code></li>
      <li><code>objectClass = Person</code></li>
      <li><code>description = Neo</code></li>
    </ul>
  </li>
  <li>Let's modify the <code>description</code> attribute of the newly created entry to <i>The One</i>.</li>
  <li>Let's query all the attributes of the newly created entry as the admin user.</li>
  <li>Let's delete the newly created entry as the admin user.</li>
</ol>

## Solution

To download the solution of the above exercises, [click here](assets/courses/db/lab01/solution.zip).
