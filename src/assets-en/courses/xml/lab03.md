## Exercise 1

Let's create XML Schemas and valid XML documents that contain the following structures:

<ol type="a">
  <li>empty element</li>
  <li>empty element with a prohibited, an optional and a required attribute</li>
  <li>empty element with attributes with fix and default values</li>
  <li>text-only element using a built-in type</li>
  <li>text-only element using a custom type</li>
  <li>list and union types using built-in types</li>
  <li>list and union types using custom types</li>
  <li>mixed type element with a child element and an attribute</li>
  <li>child-only element with and without an attribute</li>
  <li>let's restrict the previous child-only element's child element</li>
  <li>let's extend the previous child-only element's type with a new child element</li>
  <li><code>phone-number</code> element that has an <code>area-code</code> attribute and contains the phone number as a string content, restricted by a regular expression</li>
  <li>a complex element structure that contains an <code>a</code> element, then either a <code>(b, c)</code> or a <code>(c, b)</code> sequence</li>
  <li>let's modify the previous complex element structure such that the either-or part can appear exactly twice</li>
</ol>

## Exercise 2

Let's create XML Schemas valid XML documents that show how to handle the following ER model structures:

<ol type="a">
  <li>entity</li>
  <li>key attribute</li>
  <li>simple attribute</li>
  <li>composite attribute</li>
  <li>multi-valued attribute</li>
  <li>1:N relationship</li>
  <li>N:M relationship</li>
</ol>

## Exercise 3

Let's create an XML Schema and a valid XML document for Exercise 9 of <a href="/courses/xml/labs/2" target="_blank">Lab 2</a> such that we don't care about integrity constraints yet, and

<ol type="a">
  <li>we use anonymous types</li>
  <li>we use named types</li>
</ol>

## Exercise 4

Let's create an XML Schema and a valid XML document for the following subtasks:

<ol type="a">
  <li>Let's define a <i>carType</i> type in the schema that models an empty element with an <code>id</code> attribute. The type should be implemented by 3 elements that relate to different languages: there should be an <code>auto</code> element (Hungarian), a <code>car</code> element (English) and a <code>wagen</code> element (German) in a common substitution group. The root element may contain an arbitrary number of such elements.</li>
  <li>Let's modify the schema such that the Hungarian <code>auto</code> element cannot be used in the XML document.</i>
  <li>Let's make the <i>carType</i> type unrestrictable.</li>
  <li>Let's make the <i>carType</i> type unextendable.</li>
  <li>Let's make the <i>carType</i> type both unrestrictable and unextendable.</li>
</ol>

## Exercise 5

Let's create an XML Schema and a valid XML document for a car database based on the following ER model:

<p align="center">
  <img src="assets/courses/xml/lab03/exercise05/car-database.er.dot.png" alt="ER model">
</p>

Let's create the XML Schema in two ways:

<ol type="a">
  <li>using named types</li>
  <li>using global elements, attributes and references</li>
</ol>

## Exercise 6

What errors are there in the following XML Schemas and XML documents?

### a)

<pre class="prettyprint lang-xml" data-label="6.a.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:element name=&quot;a&quot; type=&quot;aType&quot;/&gt;

  &lt;xsd:complexType name=&quot;aType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anyType&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;
&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="6.a.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;b xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;6.a.xsd&quot;&gt;
  hello
&lt;/b&gt;</pre>

### b)

<pre class="prettyprint lang-xml" data-label="6.b.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:complexType name=&quot;a&quot;&gt;
    &lt;xsd:all&gt;
      &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anyType&quot;/&gt;
      &lt;xsd:choice&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anyType&quot;/&gt;
        &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:anyType&quot;/&gt;
      &lt;/xsd:choice&gt;
    &lt;/xsd:all&gt;
  &lt;/xsd:complexType&gt;
&lt;/xsd:schema&gt;</pre>

### c)

<pre class="prettyprint lang-xml" data-label="5.c.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:simpleType name=&quot;a&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:double&quot;&gt;
      &lt;xsd:fractionDigits value=&quot;2&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;
&lt;/xsd:schema&gt;</pre>

### d)

<pre class="prettyprint lang-xml" data-label="6.d.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:complexType name=&quot;a&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anyType&quot; minOccurs=&quot;2&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;
&lt;/xsd:schema&gt;</pre>

### e)

<pre class="prettyprint lang-xml" data-label="6.e.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:choice minOccurs=&quot;2&quot; maxOccurs=&quot;2&quot;&gt;
          &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
          &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;/xsd:choice&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;
&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="6.e.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;6.e.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;
  &lt;d&gt;3&lt;/d&gt;
  &lt;d&gt;4&lt;/d&gt;
  &lt;c&gt;5&lt;/c&gt;
&lt;/a&gt;</pre>

### f)

<pre class="prettyprint lang-xml" data-label="6.f.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
        &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;
&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="6.f.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;6.f.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;d&gt;3&lt;/d&gt;
  &lt;c&gt;2&lt;/c&gt;
&lt;/a&gt;</pre>

### g)

<pre class="prettyprint lang-xml" data-label="6.g.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xsd:element name=&quot;a&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;b&quot; type=&quot;xsd:date&quot;/&gt;
        &lt;xsd:element name=&quot;c&quot; type=&quot;xsd:time&quot;/&gt;
        &lt;xsd:element name=&quot;d&quot; type=&quot;xsd:dateTime&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;
  &lt;/xsd:element&gt;
&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="6.g.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;6.g.xsd&quot;&gt;
  &lt;b&gt;2013.01.01.&lt;/b&gt;
  &lt;c&gt;10:00&lt;/c&gt;
  &lt;d&gt;2013-01-01 10:00:00&lt;/d&gt;
&lt;/a&gt;</pre>

### h)

<pre class="prettyprint lang-xml" data-label="6.h.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;schema xmlns=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;element name=&quot;a&quot;&gt;
    &lt;complexType&gt;
      &lt;sequence&gt;
        &lt;element name=&quot;b&quot; type=&quot;xsd:anySimpleType&quot;/&gt;
      &lt;/sequence&gt;
    &lt;/complexType&gt;
  &lt;/element&gt;
&lt;/schema&gt;</pre>

## Exercise 7

Let's create an XML Schema for Exercise 2 of <a href="/courses/xml/labs/2" target="_blank">Lab 2</a> (business cards) using named types. The following rules should be implemented:

* The identifiers should be positive integers.
* The format for the zip codes should be: 2 letters, space, 5 digits. For example: *CA 95014*
* The format for the phone numbers should be *xxx-xxxx*, while the area codes should be positive integers containing at most 3 digits.
* If we don't define the area code of a phone number, it should be 410 by default.
* The websites must start with the *https://* prefix, and they should contain two strings, separated by a dot. For example: *https://google.com*
* The postfix of e-mail addresses must be the same as for the websites, and they should start with an arbitrary string, a *@* symbol and another arbitrary string. For example: *something1.something2@something3.com*
* On the business cards, there should be either the company's website or e-mail address, but not both.
* The XML document must contain at least 1 business card.

## Exercise 8

Let's create an XML Schema and a valid XML document for the following topics:

<ol type="a">
  <li>timetable (classes: identifier, subject, day, start and end hour, classroom, teacher)</li>
  <li>donation database (donors: identifier, name, address, bith place and birth date; recipients: identifier, private-person, name; donations: donor, recipient, description, price)</i>
  <li>library database (books: ISBN identifier, author, title, year, length)</li>
</ol>

## Solution

To download the solution of the above exercises, [click here](assets/courses/xml/lab03/solution.zip).
