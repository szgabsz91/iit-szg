## Exercise 1

Let's create an XDM model for the following XML document:

<pre class="prettyprint lang-xml">
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;product-database&gt;
  &lt;manufacturers&gt;
    &lt;manufacturer id=&quot;m1&quot;&gt;
      &lt;name&gt;Microsoft&lt;/name&gt;
      &lt;country&gt;USA&lt;/country&gt;
    &lt;/manufacturer&gt;

    &lt;manufacturer id=&quot;m2&quot;&gt;
      &lt;name&gt;Apple&lt;/name&gt;
      &lt;country&gt;USA&lt;/country&gt;
    &lt;/manufacturer&gt;
  &lt;/manufacturers&gt;

  &lt;products&gt;
    &lt;product id=&quot;p1&quot; manufacturer=&quot;m2&quot;&gt;
      &lt;name&gt;MacBook Air&lt;/name&gt;
      &lt;new /&gt;
      &lt;price currency=&quot;USD&quot;&gt;899&lt;/price&gt;
    &lt;/product&gt;

    &lt;product id=&quot;p2&quot; manufacturer=&quot;m1&quot;&gt;
      &lt;name&gt;Surface Pro 7&lt;/name&gt;
      &lt;price currency=&quot;USD&quot;&gt;749.99&lt;/price&gt;
    &lt;/product&gt;
  &lt;/products&gt;
&lt;/product-database&gt;</pre>

## Exercise 2

Let's create an XML document for the following XDM model:

<p align="center">
  <a href="assets/courses/xml/lab01/exercise02/movie-database.xdm.dot.svg" target="_blank">
    <img src="assets/courses/xml/lab01/exercise02/movie-database.xdm.dot.svg" alt="XDM model" loading="lazy">
  </a>
</p>

## Exercise 3

What errors do the following XML documents have?

<ol type="a">
  <li>
    <pre>&lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;a a=&quot;G&quot;&gt;&lt;/A&gt;</pre>
  </li>
  <li>
    <pre>&lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;a a=&quot;G&quot;/&gt;&lt;/A&gt;</pre>
  </li>
  <li>
    <pre>&lt;?xml version=1.0?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;b a=&apos;G&apos;&gt;&lt;/A&gt;</pre>
  </li>
  <li>
    <pre>&lt;xml version=&quot;1.0&quot;/&gt;&lt;A&gt;&lt;a&gt;2&lt;/a b=&apos;G&apos;&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a&gt;&lt;a&gt;&lt;/a&gt;</pre>
  </li>
  <li>
    <pre>&lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/a&gt;&lt;/d&gt;&lt;a/&gt;&lt;/A&gt;&lt;a&gt;2&lt;/a&gt;</pre>
  </li>
  <li>
    <pre>&lt;?xml version=&quot;1.0&quot;?&gt;&lt;A&gt;&lt;a&gt;2&lt;/a&gt;&lt;a&gt;3&lt;/a&gt;&lt;a&gt;3&lt;d&gt;aa&lt;/d&gt;&lt;a=3&gt;&lt;a&gt;&lt;/A&gt;</pre>
  </li>
</ol>

## Exercise 4

Given the following XML document:

<pre class="prettyprint lang-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;A&gt;
  &lt;a&gt;2&lt;/a&gt;
  &lt;a&gt;3&lt;/a&gt;
  &lt;a&gt;
    3
    &lt;d&gt;aa&lt;/d&gt;
    &lt;a&gt;
      &lt;a a=&quot;G&quot;/&gt;
    &lt;/a&gt;
  &lt;/a&gt;
&lt;/A&gt;</pre>

Let's execute the following modifications:

<ol type="a">
  <li>Let's put every element into the <i>NS</i> namespace using an alias.</li>
  <li>Let's put every element into the <i>NS</i> namespace without using an alias.</li>
  <li>Let's put both the elements and the attributes into the <i>NS</i> namespace.</li>
  <li>Let's put the element having an attribute into the <i>NS1</i> namespace, and its attribute into the <i>NS2</i> namespace.</li>
  <li>Let's put comments into the XML document.</li>
  <li>Let's add a new child element named <code>xml</code> to the root element, and let's make its content a valid XML document, using entities.</li>
  <li>Let's add a new child element named <code>xml</code> to the root element, and let's make its content a valid XML document, using a CDATA section.</li>
</ol>

## Exercise 5

Let's create an XDM model and an XML document for the following topics:

<ol type="a">
  <li>a collection of business cards that contain the person's name, company, position, phone number and e-mail address, as well as the company's address, phone number and website</li>
  <li>the grades of students for each course</li>
  <li>a CRM system containing complaints of customers, where we store the complaint date, subject and content</li>
  <li>a train timetable where we store the departure and arrival data of trains, including the settlement, station, platform and time</li>
</ol>

## Exercise 6

Let's create the following diagrams for various topics:

<ol type="a">
  <li>XDM model for a queue</li>
  <li>XDM model for a binary tree</li>
  <li>XDM model for a heap</li>
  <li>XDM model for a directed graph</li>
  <li>ER and XDM models for a collection of business cards that contain the person's name, company, position, phone number and e-mail address, as well as the company's address, phone number and website</li>
  <li>ER and XDM models for an order management system where we store products and their prices, customers, their names and phone numbers, as well as orders (customer, products, quantities)</li>
  <li>UML and XDM models for weather stations, where wheater stations have measuring devices that produce data items containing a datetime and a measurement</li>
  <li>UML and XDM models for an e-mail management system where we store e-mail messages containing a sender's data, recipients' data, subject, date, content and attachments</li>
  <li>UML and XDM models for a hotel reservation system where customers can reserve rooms</li>
</ol>

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/xml/lab01/solution.zip).
