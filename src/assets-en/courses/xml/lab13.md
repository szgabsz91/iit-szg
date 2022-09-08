## Exercise 1

Given the following relational model:

<p align="center">
  <a href="assets/courses/xml/lab13/exercise01/messages.dot.png" target="_blank">
    <img src="assets/courses/xml/lab13/exercise01/messages.dot.png" alt="Relational model">
  </a>
</p>

Let's execute the following subtasks:

<ol type="a">
  <li>Let's create the <code>People</code> and <code>Messages</code> tables based on the above relational model.</li>
  <li>Let's insert 4 people (John, Mike, Jack, James) and 2 messages into the database such that the first message is inserted from an external file and the second message is inserted using embedded text in the SQL file. The message content should match the <i>message.xsd</i> XML Schema below. The message data can be seen in the table below.</li>
  <li>Let's query the data of the recipients.</li>
  <li>Let's query the content and date of those messages that were sent in October.</li>
  <li>Let's query the content of those messages whose subject is <i>"XML"</i>.</li>
  <li>Let's query the content of the message with the longest content.</li>
  <li>Let's query the identifier of the message with the highest priority. If a message has no priority, the default value should be 0.</li>
  <li>Let's query all the data of those messages that have no keywords.</li>
  <li>Let's query all the data of those messages for which at least one keyword contains the word <i>"database"</i> and was sent by John.</li>
  <li>Let's insert the <i>"xml"</i> keyword to the message with the identifier of 2.</li>
  <li>Let's modify the priority of the message with the identifier of 2 to 0.5.</li>
  <li>Let's delete the keywords of the message with the identifier of 2.</li>
  <li>Let's query the content of the message whose subject is <i>"XML"</i> using XQuery.</li>
  <li>Let's query the content of those messages that have at least one keyword using XQuery.</li>
</ol>

<pre class="prettyprint lang-xml" data-label="message.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;message&quot; type=&quot;messageType&quot;/&gt;

  &lt;xsd:complexType name=&quot;messageType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;subject&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;keywords&quot; type=&quot;keywordsType&quot; minOccurs=&quot;0&quot;/&gt;
      &lt;xsd:element name=&quot;content&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;priority&quot; type=&quot;priorityType&quot; minOccurs=&quot;0&quot; default=&quot;0.0&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;keywordsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;keyword&quot; type=&quot;xsd:string&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;priorityType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:double&quot;&gt;
      &lt;xsd:minInclusive value=&quot;0.0&quot;/&gt;
      &lt;xsd:maxInclusive value=&quot;1.0&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

&lt;/xsd:schema&gt;</pre>

<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>From</th>
      <th>To</th>
      <th>Date</th>
      <th>Subject</th>
      <th>Keywords</th>
      <th>Content</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John</td>
      <td>Jack</td>
      <td>2014-09-30</td>
      <td>Weak data inside a DB?</td>
      <td>
        relational database<br>
        weak data<br>
        how to
      </td>
      <td>I need a way to put weak data inside a relational database. Is there a standard way?</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Mike</td>
      <td>James</td>
      <td>2014-10-12</td>
      <td>XML</td>
      <td>-</td>
      <td>XML rocks even inside a relational database!</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>

## Exercise 2

Let's execute the following subtasks:

<ol type="a">
  <li>Let's create the <code>PersonContacts</code> table based on the above relational model.</li>
  <li>Let's insert the contacts with the data of the below table such that the first record is inserted from an external file and the second record is inserted using embedded text in the SQL file. The records should match the <i>contacts.xsd</i> XML Schema below.</li>
  <li>Let's query the name and phone numbers of those people who have at least 1 phone number and e-mail address.</li>
  <li>Let's query the full address of those people who live in San Francisco.</li>
  <li>Let's query the e-mail address of those people who have no address.</li>
  <li>Let's query the website of the people having the most phone numbers.</li>
  <li>Let's query all the contacts of the people having at least 1 phone number with the 415 area code. If not stored, the default area code should be 202, the default house number should be 0, and all other fields should have the default value of <i>"N/A"</i>.</li>
  <li>Let's query the name of those people who have a website.</li>
  <li>Let's query the name of those people whose e-mail address and website ends with <i>"google.com"</i>.</li>
  <li>Let's add the <i>"mike@microsoft.com"</i> e-mail address to Mike.</li>
  <li>Let's modify the phone number of the record with the identifier of 2 to be <i>"206/123-4569"</i>.</li>
  <li>Let's delete Mike's phone number.</li>
  <li>Let's query the e-mail address of the person with the phone number of <i>"123-4567"</i> using XQuery.</li>
  <li>Let's query the city of those people who have no phone numbers using XQuery.</li>
</ol>

<pre class="prettyprint lang-xml" data-label="contacts.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;

  &lt;xsd:element name=&quot;contacts&quot; type=&quot;contactsType&quot;/&gt;

  &lt;xsd:complexType name=&quot;contactsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;phone-number&quot; type=&quot;phoneNumberType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;xsd:element name=&quot;address&quot; type=&quot;addressType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;xsd:element name=&quot;email-address&quot; type=&quot;xsd:string&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;xsd:element name=&quot;website&quot; type=&quot;xsd:string&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;phoneNumberSimpleType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;
      &lt;xsd:pattern value=&quot;\d{3}-\d{4}&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

  &lt;xsd:complexType name=&quot;phoneNumberType&quot;&gt;
    &lt;xsd:simpleContent&gt;
      &lt;xsd:extension base=&quot;phoneNumberSimpleType&quot;&gt;
        &lt;xsd:attribute name=&quot;area-code&quot; type=&quot;areaCodeType&quot; use=&quot;required&quot;/&gt;
      &lt;/xsd:extension&gt;
    &lt;/xsd:simpleContent&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;areaCodeType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:positiveInteger&quot;&gt;
      &lt;xsd:totalDigits value=&quot;3&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

  &lt;xsd:complexType name=&quot;addressType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;city&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;street&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;house-number&quot; type=&quot;xsd:positiveInteger&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<table>
  <thead>
    <tr>
      <th>Person</th>
      <th>Phone numbers</th>
      <th>Addresses</th>
      <th>E-mail addresses</th>
      <th>Websites</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>
        206/123-4567<br>
        206/123-4568
      </td>
      <td>-</td>
      <td>john@google.com</td>
      <td>https://john.google.com</td>
    </tr>
    <tr>
      <td>Mike</td>
      <td>415/123-4569</td>
      <td>580 4th Street, San Francisco</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## Solution

To download the solution of the above exercises, [click here](assets/courses/xml/lab13/solution.zip).
