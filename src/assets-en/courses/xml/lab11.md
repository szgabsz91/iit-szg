## Exercise 1

Given the following XML document:

<pre class="prettyprint lang-xml" data-label="1.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;cars xmlns=&quot;NS&quot;&gt;

  &lt;car id=&quot;1&quot;&gt;
    &lt;manufacturer group=&quot;PSA&quot;&gt;Citroën&lt;/manufacturer&gt;
    &lt;model&gt;ë-C4&lt;/model&gt;
    &lt;color&gt;blue&lt;/color&gt;
    &lt;price&gt;8.8&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;2&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Hyundai&lt;/manufacturer&gt;
    &lt;model&gt;Ioniq&lt;/model&gt;
    &lt;color&gt;darkgrey&lt;/color&gt;
    &lt;price&gt;8.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;3&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Hyundai&lt;/manufacturer&gt;
    &lt;model&gt;IONIQ 5&lt;/model&gt;
    &lt;color&gt;black&lt;/color&gt;
    &lt;price&gt;13.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;4&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Hyundai&lt;/manufacturer&gt;
    &lt;model&gt;Kona&lt;/model&gt;
    &lt;color&gt;red&lt;/color&gt;
    &lt;price&gt;7.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;5&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Kia&lt;/manufacturer&gt;
    &lt;model&gt;e-Niro&lt;/model&gt;
    &lt;color&gt;red&lt;/color&gt;
    &lt;price&gt;8.9&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;6&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Kia&lt;/manufacturer&gt;
    &lt;model&gt;e-Soul&lt;/model&gt;
    &lt;color&gt;green&lt;/color&gt;
    &lt;price&gt;8.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;7&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Kia&lt;/manufacturer&gt;
    &lt;model&gt;EV6&lt;/model&gt;
    &lt;color&gt;grey&lt;/color&gt;
    &lt;price&gt;13.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;8&quot;&gt;
    &lt;manufacturer group=&quot;PSA&quot;&gt;Opel&lt;/manufacturer&gt;
    &lt;model&gt;Corsa-e&lt;/model&gt;
    &lt;color&gt;blue&lt;/color&gt;
    &lt;price&gt;8.2&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;9&quot;&gt;
    &lt;manufacturer group=&quot;PSA&quot;&gt;Peugeot&lt;/manufacturer&gt;
    &lt;model&gt;e-208&lt;/model&gt;
    &lt;color&gt;gold&lt;/color&gt;
    &lt;price&gt;7.8&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;10&quot;&gt;
    &lt;manufacturer group=&quot;PSA&quot;&gt;Peugeot&lt;/manufacturer&gt;
    &lt;model&gt;e-2008&lt;/model&gt;
    &lt;color&gt;blue&lt;/color&gt;
    &lt;price&gt;8.6&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;11&quot;&gt;
    &lt;manufacturer group=&quot;Volkswagen&quot;&gt;Skoda&lt;/manufacturer&gt;
    &lt;model&gt;ENYAQ&lt;/model&gt;
    &lt;color&gt;green&lt;/color&gt;
    &lt;price&gt;12.6&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;12&quot;&gt;
    &lt;manufacturer group=&quot;Volkswagen&quot;&gt;Volkswagen&lt;/manufacturer&gt;
    &lt;model&gt;ID.3&lt;/model&gt;
    &lt;color&gt;turquoise&lt;/color&gt;
    &lt;price&gt;8.3&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;13&quot;&gt;
    &lt;manufacturer group=&quot;Volkswagen&quot;&gt;Volkswagen&lt;/manufacturer&gt;
    &lt;model&gt;ID.4&lt;/model&gt;
    &lt;color&gt;gold&lt;/color&gt;
    &lt;price&gt;16.8&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;14&quot;&gt;
    &lt;manufacturer group=&quot;Volkswagen&quot;&gt;Volkswagen&lt;/manufacturer&gt;
    &lt;model&gt;e-UP!&lt;/model&gt;
    &lt;color&gt;blue&lt;/color&gt;
    &lt;price&gt;5.6&lt;/price&gt;
  &lt;/car&gt;

&lt;/cars&gt;</pre>

Let's write XSLT to solve the following subtasks:

<ol type="a">
  <li>
    Let's translate the above XML document to Hungarian. The content (e.g. the colors) doesn't need to be translated, only the element and attribute names. The elements should be created directly, without using XSL elements. The translated names should be the following:
    <ul>
      <li><code>cars</code> → <code>autok</code></li>
      <li><code>car</code> → <code>auto</code></li>
      <li><code>id</code> → <code>id</code></li>
      <li><code>manufacturer</code> → <code>gyarto</code></li>
      <li><code>group</code> → <code>csoport</code></li>
      <li><code>model</code> → <code>modell</code></li>
      <li><code>color</code> → <code>szin</code></li>
      <li><code>price</code> → <code>ar</code></li>
    </ul>
  </li>
  <li>
    Let's convert the above XML document to HTML using XSLT. The following rules should be considered:
    <ul>
      <li>The page should display <i>"Cars"</i> as its title (<code>h1</code> element), and then a table containing the id, group, manufacturer, model and price of each car.</li>
      <li>The elements and attributes should be created using built-in XSL elements.</li>
      <li>Every row should be displayed in the color of the related car.</li>
      <li>If we open the XML document in a browser, the resulting HTML should be displayed automatically.</li>
    </ul>
  </li>
</ol>

## Exercise 2

Given the following XML document:

<pre class="prettyprint lang-xml" data-label="2.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
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

Let's write XSLT to solve the following subtasks:

<ol type="a">
  <li>
    Let's convert the above XML document to HTML using XSLT. The following rules should be considered:
    <ul>
      <li>The page should display <i>"CD Catalog"</i> as its title (<code>h1</code> element), and then a table containing all the data of each album.</li>
      <li>The elements and attributes should be created using built-in XSL elements.</li>
      <li>The first column should be the identifier, while the last one should contain <i>"yes"</i> if the album has a discount, or <i>"no"</i> otherwise.</li>
      <li>If we open the XML document in a browser, the resulting HTML should be displayed automatically.</li>
    </ul>
  </li>
  <li>Let's group the albums by year such that for every year we enumerate the appropriate albums, sorted by their identifiers in a descending order. The years should be sorted in an ascending order. The expected result looks like this:</li>
</ol>

<pre class="prettyprint lang-xml">&lt;ns:catalog xmlns:ns="NS"&gt;

  &lt;ns:year year=&quot;1982&quot;&gt;

    &lt;ns:cd&gt;
      &lt;!-- ... --&gt;
    &lt;/ns:cd&gt;

    &lt;!-- ... --&gt;

  &lt;/ns:year&gt;

  &lt;!-- ... --&gt;

&lt;/ns:catalog&gt;</pre>

## Exercise 3

Given the following XML document:

<pre class="prettyprint lang-xml" data-label="3.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;plane-figures&gt;

  &lt;circle&gt;
    &lt;radius&gt;100&lt;/radius&gt;
    &lt;position&gt;
      &lt;x&gt;300&lt;/x&gt;
      &lt;y&gt;500&lt;/y&gt;
    &lt;/position&gt;
    &lt;color&gt;red&lt;/color&gt;
  &lt;/circle&gt;

  &lt;circle&gt;
    &lt;radius&gt;50&lt;/radius&gt;
    &lt;position&gt;
      &lt;x>75&lt;/x&gt;
      &lt;y&gt;100&lt;/y&gt;
    &lt;/position&gt;
    &lt;color&gt;blue&lt;/color&gt;
  &lt;/circle&gt;

  &lt;square&gt;
    &lt;size&gt;100&lt;/size&gt;
    &lt;position&gt;
      &lt;x&gt;500&lt;/x&gt;
      &lt;y&gt;400&lt;/y&gt;
    &lt;/position&gt;
    &lt;color&gt;green&lt;/color&gt;
  &lt;/square&gt;

  &lt;square&gt;
    &lt;size&gt;200&lt;/size&gt;
    &lt;position&gt;
      &lt;x&gt;200&lt;/x&gt;
      &lt;y&gt;100&lt;/y&gt;
    &lt;/position&gt;
    &lt;color&gt;brown&lt;/color&gt;
  &lt;/square&gt;

&lt;/plane-figures&gt;</pre>

Let's convert the above XML document to an SVG image  in which we can see all the plane figures contained by the XML document.

## Exercise 4

Let's write XSLT to solve the following subtasks:

<ol type="a">
  <li>Let's create an XSLT named template that can calculate the area of a rectangle based on its length and width.</li>
  <li>Let's write an XSLT function that can calculate the area of a rectangle based on its length and width.</li>
  <li>Let's implement the factorial function in XSLT.</li>
  <li>
    Let's write an XSLT function that can return the <i>i</i>th Fibonacci number:
    <ul>
      <li><code>F(0) = 0</code></li>
      <li><code>F(1) = 1</code></li>
      <li><code>F(2) = 1</code></li>
      <li><code>F(3) = 2</code></li>
      <li>...</li>
    </ul>
  </li>
  <li>Let's implement exponentiation as an XSLT function. The function should be able to return <code>x</code><sup><code>y</code></sup> based on the base <code>x</code> and the exponent <code>y</code>. The resulting function should be able to handles negative, zero and positive exponents as well.</li>
</ol>

## Solution

To download the solution of the above exercises, [click here](assets/courses/xml/lab11/solution.zip).
