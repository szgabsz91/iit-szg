## Exercise 1

Given the following XML document:

<pre class="prettyprint lang-xml" data-label="car-database.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;ns:car-database xmlns:ns=&quot;NS&quot;&gt;

  &lt;ns:cars&gt;
    &lt;ns:car license-plate-number=&quot;AB12 CDE&quot;&gt;
      &lt;ns:manufacturer&gt;Tesla&lt;/ns:manufacturer&gt;
      &lt;ns:model&gt;Model 3&lt;/ns:model&gt;
      &lt;ns:color&gt;red&lt;/ns:color&gt;
      &lt;ns:price&gt;13.5&lt;/ns:price&gt;
    &lt;/ns:car&gt;

    &lt;ns:car license-plate-number=&quot;AB12 CDF&quot;&gt;
      &lt;ns:manufacturer&gt;Volkswagen&lt;/ns:manufacturer&gt;
      &lt;ns:model&gt;ID.4&lt;/ns:model&gt;
      &lt;ns:color&gt;silver&lt;/ns:color&gt;
      &lt;ns:price&gt;16.8&lt;/ns:price&gt;
    &lt;/ns:car&gt;

    &lt;ns:car license-plate-number=&quot;AB12 CDG&quot;&gt;
      &lt;ns:manufacturer&gt;Kia&lt;/ns:manufacturer&gt;
      &lt;ns:model&gt;e-Niro&lt;/ns:model&gt;
      &lt;ns:color&gt;silver&lt;/ns:color&gt;
      &lt;ns:price&gt;8.9&lt;/ns:price&gt;
    &lt;/ns:car&gt;

    &lt;ns:car license-plate-number=&quot;AB12 CDH&quot;&gt;
      &lt;ns:manufacturer&gt;Volkswagen&lt;/ns:manufacturer&gt;
      &lt;ns:model&gt;ID.3&lt;/ns:model&gt;
      &lt;ns:color&gt;turquoise&lt;/ns:color&gt;
      &lt;ns:price&gt;8.3&lt;/ns:price&gt;
    &lt;/ns:car&gt;
  &lt;/ns:cars&gt;

  &lt;ns:owners&gt;
    &lt;ns:owner id=&quot;1&quot;&gt;
      &lt;ns:first-name&gt;John&lt;/ns:first-name&gt;
      &lt;ns:last-name&gt;Doe&lt;/ns:last-name&gt;
      &lt;ns:age&gt;30&lt;/ns:age&gt;
      &lt;ns:owned-cars&gt;
        &lt;ns:owned-car&gt;AB12 CDE&lt;/ns:owned-car&gt;
        &lt;ns:owned-car&gt;AB12 CDF&lt;/ns:owned-car&gt;
      &lt;/ns:owned-cars&gt;
    &lt;/ns:owner&gt;

    &lt;ns:owner id=&quot;2&quot;&gt;
      &lt;ns:first-name&gt;Jane&lt;/ns:first-name&gt;
      &lt;ns:last-name&gt;Doe&lt;/ns:last-name&gt;
      &lt;ns:age&gt;46&lt;/ns:age&gt;
      &lt;ns:owned-cars&gt;
        &lt;ns:owned-car&gt;AB12 CDG&lt;/ns:owned-car&gt;
      &lt;/ns:owned-cars&gt;
    &lt;/ns:owner&gt;

    &lt;ns:owner id=&quot;3&quot;&gt;
      &lt;ns:first-name&gt;Jack&lt;/ns:first-name&gt;
      &lt;ns:last-name&gt;Brown&lt;/ns:last-name&gt;
      &lt;ns:age&gt;23&lt;/ns:age&gt;
    &lt;/ns:owner&gt;
  &lt;/ns:owners&gt;

&lt;/ns:car-database&gt;</pre>

Let's execute the following subtasks for the above XML document using XQuery:

<ol type="a">
  <li>Let's query the cars whose price is greater than 10, sorted by their manufacturer in ascending and by their price in descending order.</li>
  <li>Let's query the full name of the owners.</li>
  <li>Let's query the Cartesian product of the cars' license plate numbers and the owners' identifiers. Every element should contain two children with the license plate number and the owner identifier as their text content.</li>
  <li>Let's query those people who do not own a car. The resulting elements should have a <code>first-name</code> and a <code>last-name</code> element, as well as an <code>id</code> attribute.</li>
  <li>Let's query the manufacturers and their related license plate numbers as child elements.</li>
  <li>Let's query the manufacturers with a <code>count</code> attribute that contains the number of cars with the given manufacturer.</li>
  <li>Let's query the manufacturers with an <code>average-price</code> attribute that contains the average price of cars with the given manufacturer.</li>
  <li>Let's insert an <code>x</code> element with a text content of <i>y</i> at the end of every <code>car</code> element.</li>
  <li>Let's delete the car with the license plate number of <i>AB12 CDE</i>.</li>
  <li>Let's replace every <code>price</code> element with a new <code>ar</code> element (Hungarian for price) that contains the same text content.</li>
  <li>Let's rename every <code>price</code> element to <code>ar</code> (Hungarian for price).</li>
  <li>Let's multiply every price by 2.</li>
</ol>

## Exercise 2

Given the following XML document:

<pre class="prettyprint lang-xml" data-label="catalog.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;ns:catalog xmlns:ns=&quot;NS&quot;&gt;

  &lt;ns:cd id=&quot;1&quot;&gt;
    &lt;ns:title&gt;Empire Burlesque&lt;/ns:title&gt;
    &lt;ns:artist&gt;Bob Dylan&lt;/ns:artist&gt;
    &lt;ns:country&gt;USA&lt;/ns:country&gt;
    &lt;ns:company&gt;Columbia&lt;/ns:company&gt;
    &lt;ns:price&gt;10.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1985&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;2&quot;&gt;
    &lt;ns:title&gt;Hide your heart&lt;/ns:title&gt;
    &lt;ns:artist&gt;Bonnie Tyler&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;CBS Records&lt;/ns:company&gt;
    &lt;ns:price&gt;9.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1988&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;3&quot;&gt;
    &lt;ns:title&gt;Greatest Hits&lt;/ns:title&gt;
    &lt;ns:artist&gt;Dolly Parton&lt;/ns:artist&gt;
    &lt;ns:country&gt;USA&lt;/ns:country&gt;
    &lt;ns:company&gt;RCA&lt;/ns:company&gt;
    &lt;ns:price&gt;9.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1982&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;4&quot;&gt;
    &lt;ns:title&gt;Still got the blues&lt;/ns:title&gt;
    &lt;ns:artist&gt;Gary Moore&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;Virgin records&lt;/ns:company&gt;
    &lt;ns:price&gt;10.20&lt;/ns:price&gt;
    &lt;ns:year&gt;1990&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;5&quot;&gt;
    &lt;ns:title&gt;Eros&lt;/ns:title&gt;
    &lt;ns:artist&gt;Eros Ramazzotti&lt;/ns:artist&gt;
    &lt;ns:country&gt;EU&lt;/ns:country&gt;
    &lt;ns:company&gt;BMG&lt;/ns:company&gt;
    &lt;ns:price&gt;9.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1997&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;6&quot;&gt;
    &lt;ns:title&gt;One night only&lt;/ns:title&gt;
    &lt;ns:artist&gt;Bee Gees&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;Polydor&lt;/ns:company&gt;
    &lt;ns:price&gt;10.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1998&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;7&quot;&gt;
    &lt;ns:title&gt;Sylvias Mother&lt;/ns:title&gt;
    &lt;ns:artist&gt;Dr.Hook&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;CBS&lt;/ns:company&gt;
    &lt;ns:price&gt;8.10&lt;/ns:price&gt;
    &lt;ns:year&gt;1973&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;8&quot;&gt;
    &lt;ns:title&gt;Maggie May&lt;/ns:title&gt;
    &lt;ns:artist&gt;Rod Stewart&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;Pickwick&lt;/ns:company&gt;
    &lt;ns:price&gt;8.50&lt;/ns:price&gt;
    &lt;ns:year&gt;1990&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;9&quot;&gt;
    &lt;ns:title&gt;Romanza&lt;/ns:title&gt;
    &lt;ns:artist&gt;Andrea Bocelli&lt;/ns:artist&gt;
    &lt;ns:country&gt;EU&lt;/ns:country&gt;
    &lt;ns:company&gt;Polydor&lt;/ns:company&gt;
    &lt;ns:price&gt;10.80&lt;/ns:price&gt;
    &lt;ns:year&gt;1996&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;10&quot;&gt;
    &lt;ns:title&gt;When a man loves a woman&lt;/ns:title&gt;
    &lt;ns:artist&gt;Percy Sledge&lt;/ns:artist&gt;
    &lt;ns:country&gt;USA&lt;/ns:country&gt;
    &lt;ns:company&gt;Atlantic&lt;/ns:company&gt;
    &lt;ns:price&gt;8.70&lt;/ns:price&gt;
    &lt;ns:year&gt;1987&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;11&quot;&gt;
    &lt;ns:title&gt;Black angel&lt;/ns:title&gt;
    &lt;ns:artist&gt;Savage Rose&lt;/ns:artist&gt;
    &lt;ns:country&gt;EU&lt;/ns:country&gt;
    &lt;ns:company&gt;Mega&lt;/ns:company&gt;
    &lt;ns:price&gt;10.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1995&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;12&quot; discount=&quot;50%&quot;&gt;
    &lt;ns:title&gt;1999 Grammy Nominees&lt;/ns:title&gt;
    &lt;ns:artist&gt;Many&lt;/ns:artist&gt;
    &lt;ns:country&gt;USA&lt;/ns:country&gt;
    &lt;ns:company&gt;Grammy&lt;/ns:company&gt;
    &lt;ns:price&gt;10.20&lt;/ns:price&gt;
    &lt;ns:year&gt;1999&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;13&quot; discount=&quot;50%&quot;&gt;
    &lt;ns:title&gt;For the good times&lt;/ns:title&gt;
    &lt;ns:artist&gt;Kenny Rogers&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;Mucik Master&lt;/ns:company&gt;
    &lt;ns:price&gt;8.70&lt;/ns:price&gt;
    &lt;ns:year&gt;1995&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;14&quot;&gt;
    &lt;ns:title&gt;Big Willie style&lt;/ns:title&gt;
    &lt;ns:artist&gt;Will Smith&lt;/ns:artist&gt;
    &lt;ns:country&gt;USA&lt;/ns:country&gt;
    &lt;ns:company&gt;Columbia&lt;/ns:company&gt;
    &lt;ns:price&gt;9.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1997&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;15&quot;&gt;
    &lt;ns:title&gt;Tupelo Honey&lt;/ns:title&gt;
    &lt;ns:artist&gt;Van Morrison&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;Polydor&lt;/ns:company&gt;
    &lt;ns:price&gt;8.20&lt;/ns:price&gt;
    &lt;ns:year&gt;1971&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;16&quot;&gt;
    &lt;ns:title&gt;Soulsville&lt;/ns:title&gt;
    &lt;ns:artist&gt;Jorn Hoel&lt;/ns:artist&gt;
    &lt;ns:country&gt;Norway&lt;/ns:country&gt;
    &lt;ns:company&gt;WEA&lt;/ns:company&gt;
    &lt;ns:price&gt;7.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1996&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;17&quot;&gt;
    &lt;ns:title&gt;The very best of&lt;/ns:title&gt;
    &lt;ns:artist&gt;Cat Stevens&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;Island&lt;/ns:company&gt;
    &lt;ns:price&gt;8.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1990&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;18&quot;&gt;
    &lt;ns:title&gt;Stop&lt;/ns:title&gt;
    &lt;ns:artist&gt;Sam Brown&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;A and M&lt;/ns:company&gt;
    &lt;ns:price&gt;8.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1988&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;19&quot;&gt;
    &lt;ns:title&gt;Bridge of Spies&lt;/ns:title&gt;
    &lt;ns:artist&gt;T`Pau&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;Siren&lt;/ns:company&gt;
    &lt;ns:price&gt;7.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1987&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;20&quot;&gt;
    &lt;ns:title&gt;Private Dancer&lt;/ns:title&gt;
    &lt;ns:artist&gt;Tina Turner&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;Capitol&lt;/ns:company&gt;
    &lt;ns:price&gt;8.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1983&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;21&quot;&gt;
    &lt;ns:title&gt;Midt om natten&lt;/ns:title&gt;
    &lt;ns:artist&gt;Kim Larsen&lt;/ns:artist&gt;
    &lt;ns:country&gt;EU&lt;/ns:country&gt;
    &lt;ns:company&gt;Medley&lt;/ns:company&gt;
    &lt;ns:price&gt;7.80&lt;/ns:price&gt;
    &lt;ns:year&gt;1983&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;22&quot; discount=&quot;50%&quot;&gt;
    &lt;ns:title&gt;Pavarotti Gala Concert&lt;/ns:title&gt;
    &lt;ns:artist&gt;Luciano Pavarotti&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;DECCA&lt;/ns:company&gt;
    &lt;ns:price&gt;9.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1991&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;23&quot;&gt;
    &lt;ns:title&gt;The dock of the bay&lt;/ns:title&gt;
    &lt;ns:artist&gt;Otis Redding&lt;/ns:artist&gt;
    &lt;ns:country&gt;USA&lt;/ns:country&gt;
    &lt;ns:company&gt;Atlantic&lt;/ns:company&gt;
    &lt;ns:price&gt;7.90&lt;/ns:price&gt;
    &lt;ns:year&gt;1987&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;24&quot;&gt;
    &lt;ns:title&gt;Picture book&lt;/ns:title&gt;
    &lt;ns:artist&gt;Simply Red&lt;/ns:artist&gt;
    &lt;ns:country&gt;EU&lt;/ns:country&gt;
    &lt;ns:company&gt;Elektra&lt;/ns:company&gt;
    &lt;ns:price&gt;7.20&lt;/ns:price&gt;
    &lt;ns:year&gt;1985&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;25&quot;&gt;
    &lt;ns:title&gt;Red&lt;/ns:title&gt;
    &lt;ns:artist&gt;The Communards&lt;/ns:artist&gt;
    &lt;ns:country&gt;UK&lt;/ns:country&gt;
    &lt;ns:company&gt;London&lt;/ns:company&gt;
    &lt;ns:price&gt;7.80&lt;/ns:price&gt;
    &lt;ns:year&gt;1987&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

  &lt;ns:cd id=&quot;26&quot;&gt;
    &lt;ns:title&gt;Unchain my heart&lt;/ns:title&gt;
    &lt;ns:artist&gt;Joe Cocker&lt;/ns:artist&gt;
    &lt;ns:country&gt;USA&lt;/ns:country&gt;
    &lt;ns:company&gt;EMI&lt;/ns:company&gt;
    &lt;ns:price&gt;8.20&lt;/ns:price&gt;
    &lt;ns:year&gt;1987&lt;/ns:year&gt;
  &lt;/ns:cd&gt;

&lt;/ns:catalog&gt;</pre>

Let's execute the following subtasks for the above XML document using XQuery:

<ol type="a">
  <li>Let's write a new XQuery file whose output contains year elements (the year should be the value of their <code>year</code> attribute), and under each year, we can find the album titles as child elements that were released in the given year. The resulting XML should be sorted by the years in ascending order, and by the titles in ascending alphabetical order.</li>
  <li>Let's rename every <code>cd</code> element to <code>album</code>.</li>
  <li>Let's remove all the albums with odd identifiers.</li>
</ol>

## Exercise 3

Let's implement the following operations as custom XQuery functions:

<ol type="a">
  <li>Let's calculate the value of the factorial function from 0 to 10 such that the resulting XML contains 11 elements with an <code>input</code> attribute and the output as text content.</li>
  <li>
    Let's calculate the Fibonacci numbers from 0 to 10:
    <ul>
      <li><code>F(0) = 0</code></li>
      <li><code>F(1) = 1</code></li>
      <li><code>F(2) = 1</code></li>
      <li><code>F(3) = 2</code></li>
      <li>...</li>
    </ul>
  </li>
</ol>

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/xml/lab12/solution.zip).
