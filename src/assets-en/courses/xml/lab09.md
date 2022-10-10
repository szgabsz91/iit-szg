## Exercise 1

Given the following XML document:

<pre class="prettyprint lang-xml" data-label="business-cards.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;business-cards&gt;

  &lt;business-card id=&quot;1&quot;&gt;
    &lt;name&gt;Steve Jobs&lt;/name&gt;
    &lt;company&gt;
      &lt;name&gt;Apple&lt;/name&gt;
      &lt;address&gt;
        &lt;zip-code&gt;CA 95014&lt;/zip-code&gt;
        &lt;city&gt;Cupertino&lt;/city&gt;
        &lt;street&gt;Apple Park Way&lt;/street&gt;
        &lt;house-number&gt;1&lt;/house-number&gt;
      &lt;/address&gt;
      &lt;phone-number area-code=&quot;408&quot;&gt;996-1010&lt;/phone-number&gt;
      &lt;email-address&gt;info@apple.com&lt;/email-address&gt;
    &lt;/company&gt;
    &lt;position&gt;CEO&lt;/position&gt;
    &lt;phone-number area-code=&quot;408&quot;&gt;996-1010&lt;/phone-number&gt;
    &lt;email-address&gt;steve.jobs@apple.com&lt;/email-address&gt;
  &lt;/business-card&gt;

  &lt;business-card id=&quot;2&quot;&gt;
    &lt;name&gt;Bill Gates&lt;/name&gt;
    &lt;company&gt;
      &lt;name&gt;Microsoft&lt;/name&gt;
      &lt;address&gt;
        &lt;zip-code&gt;WA 98052&lt;/zip-code&gt;
        &lt;city&gt;Redmond&lt;/city&gt;
        &lt;street&gt;Microsoft Way&lt;/street&gt;
        &lt;house-number&gt;1&lt;/house-number&gt;
      &lt;/address&gt;
      &lt;phone-number area-code=&quot;425&quot;&gt;882-8080&lt;/phone-number&gt;
      &lt;website&gt;https://microsoft.com&lt;/website&gt;
    &lt;/company&gt;
    &lt;position&gt;CEO&lt;/position&gt;
    &lt;phone-number area-code=&quot;425&quot;&gt;882-8080&lt;/phone-number&gt;
    &lt;email-address&gt;bill.gates@microsoft.com&lt;/email-address&gt;
  &lt;/business-card&gt;

  &lt;business-card id=&quot;3&quot;&gt;
    &lt;name&gt;Larry Page&lt;/name&gt;
    &lt;company&gt;
      &lt;name&gt;Google&lt;/name&gt;
      &lt;address&gt;
        &lt;zip-code&gt;CA 94043&lt;/zip-code&gt;
        &lt;city&gt;Mountain View&lt;/city&gt;
        &lt;street&gt;Amphitheatre Pkwy&lt;/street&gt;
        &lt;house-number&gt;1600&lt;/house-number&gt;
      &lt;/address&gt;
      &lt;phone-number&gt;253-0000&lt;/phone-number&gt;
      &lt;website&gt;https://about.google&lt;/website&gt;
    &lt;/company&gt;
    &lt;position&gt;CEO&lt;/position&gt;
    &lt;phone-number&gt;253-0000&lt;/phone-number&gt;
    &lt;email-address&gt;larry.page@google.com&lt;/email-address&gt;
  &lt;/business-card&gt;

&lt;/business-cards&gt;</pre>

Convert the above XML document to JSON format.

## Exercise 2

Given the following XML document:

<pre class="prettyprint lang-xml" data-label="cars.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;ns:cars xmlns:ns=&quot;NS&quot;&gt;

  &lt;ns:car license-plate-number=&quot;AB12 CDE&quot;&gt;
    &lt;ns:manufacturer&gt;Tesla&lt;/ns:manufacturer&gt;
    &lt;ns:model&gt;Model 3&lt;/ns:model&gt;
    &lt;ns:color&gt;red&lt;/ns:color&gt;
  &lt;/ns:car&gt;

  &lt;ns:car license-plate-number=&quot;AB12 CDF&quot;&gt;
    &lt;ns:manufacturer&gt;Volkswagen&lt;/ns:manufacturer&gt;
    &lt;ns:model&gt;ID.4&lt;/ns:model&gt;
    &lt;ns:color&gt;blue&lt;/ns:color&gt;
  &lt;/ns:car&gt;

  &lt;ns:car license-plate-number=&quot;AB12 CDG&quot;&gt;
    &lt;ns:manufacturer&gt;Kia&lt;/ns:manufacturer&gt;
    &lt;ns:model&gt;e-Niro&lt;/ns:model&gt;
    &lt;ns:color&gt;black&lt;/ns:color&gt;
  &lt;/ns:car&gt;

&lt;/ns:cars&gt;</pre>

<ol type="a">
  <li>Convert the above XML document to JSON format.</li>
  <li>Create a web client application using an arbitrary technology that processes the above XML document and its JSON counterpart, and displays their contents in a table. The table should have 3 columns (license plate number, manufacturer and model), and the rows should be displayed in the color of the cars.</li>
</ol>

## Exercise 3

Let's create a web client application using an arbitrary technology that displays our Facebook profile picture, name and e-mail address, as well as a link to our Facebook profile using the Facebook application with the ID of *509088797192998*.

## Exercise 4

Let's create a web client application that displays the entries of <a href="https://feeds.hanselman.com/ScottHanselman" target="_blank">Scott Hanselman's RSS feed</a>. For each entry, let's display the title and the content. Clicking the title should navigate to the appropriate YouTube video.

## Exercise 5

Given the following XHTML document:

<pre class="prettyprint lang-xml" data-label="5.xhtml">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
  &lt;head&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;/&gt;
    &lt;title&gt;Sample XHTML File&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Sample XHTML File&lt;/h1&gt;

    &lt;div class=&quot;content&quot;&gt;
      &lt;p&gt;This is the first paragraph.&lt;/p&gt;

      &lt;div class=&quot;subcontent&quot;&gt;
        &lt;p&gt;This is the second paragraph.&lt;/p&gt;

        &lt;p&gt;
          &lt;img src=&quot;https://upload.wikimedia.org/wikipedia/commons/1/1f/Valid_XHTML_1.0.svg&quot; alt=&quot;Valid XHTML&quot;/&gt;
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

Let's create a Java SAX application that prints out how many paragraphs the above XHTML document has.

## Exercise 6

Let's create an SVG image that contains circles and rectangles of different color, size and position.

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/xml/lab09/solution.zip).
