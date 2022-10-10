## Exercise 1

Given the following XML document:

<pre class="prettyprint lang-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;donation-database&gt;
  &lt;donors&gt;
    &lt;donor id=&quot;d1&quot;&gt;
      &lt;name&gt;Leonardo Dicaprio&lt;/name&gt;
      &lt;address&gt;
        &lt;zip-code&gt;CA 90069&lt;/zip-code&gt;
        &lt;city&gt;West Hollywood&lt;/city&gt;
        &lt;street&gt;Sunset Blvd.&lt;/street&gt;
        &lt;house-number&gt;9255&lt;/house-number&gt;
      &lt;/address&gt;
      &lt;birth&gt;
        &lt;place&gt;Hollywood&lt;/place&gt;
        &lt;date&gt;1974-11-11&lt;/date&gt;
      &lt;/birth&gt;
      &lt;millionaire/&gt;
    &lt;/donor&gt;

    &lt;donor id=&quot;d2&quot;&gt;
      &lt;name&gt;Bill Gates&lt;/name&gt;
      &lt;address&gt;
        &lt;zip-code&gt;WA 98039&lt;/zip-code&gt;
        &lt;city&gt;Medina&lt;/city&gt;
        &lt;street&gt;73rd Ave NE&lt;/street&gt;
        &lt;house-number&gt;1835&lt;/house-number&gt;
      &lt;/address&gt;
      &lt;birth&gt;
        &lt;place&gt;Seattle&lt;/place&gt;
        &lt;date&gt;1955-10-28&lt;/date&gt;
      &lt;/birth&gt;
      &lt;millionaire/&gt;
    &lt;/donor&gt;
  &lt;/donors&gt;

  &lt;recipients&gt;
    &lt;recipient id=&quot;r1&quot; private-person=&quot;true&quot;&gt;
      &lt;name&gt;John Doe&lt;/name&gt;
    &lt;/recipient&gt;

    &lt;recipient id=&quot;r2&quot; private-person=&quot;true&quot;&gt;
      &lt;name&gt;Jane Doe&lt;/name&gt;
    &lt;/recipient&gt;
  &lt;/recipients&gt;

  &lt;donations&gt;
    &lt;donation donor=&quot;d1&quot; recipient=&quot;r1&quot;&gt;
      &lt;description&gt;Donation 1&lt;/description&gt;
      &lt;price&gt;10000000&lt;/price&gt;
    &lt;/donation&gt;

    &lt;donation donor=&quot;d2&quot; recipient=&quot;r2&quot;&gt;
      &lt;description&gt;Donation 2&lt;/description&gt;
      &lt;price&gt;20000000&lt;/price&gt;
    &lt;/donation&gt;
  &lt;/donations&gt;
&lt;/donation-database&gt;</pre>

Let's create a DTD for the above XML document such that

<ol type="a">
  <li>the DTD is part of the XML document,</li>
  <li>the DTD is in an external file.</li>
</ol>

## Exercie 2

Given the following XDM model:

<p align="center">
  <a href="assets/courses/xml/lab02/exercise02/business-cards.xdm.dot.svg" target="_blank">
    <img src="assets/courses/xml/lab02/exercise02/business-cards.xdm.dot.svg" alt="XDM model" loading="lazy">
  </a>
</p>

Let's execute the following subtasks:

<ol type="a">
  <li>Let's create a DTD and a valid XML document for the above XDM model.</li>
  <li>Let's modify the DTD such that a company has either a website or an e-mail address, and the DTD doesn't allow an empty root element.</li>
</ol>

## Exercise 3

Can the following DTD be implemented by a valid XML document? If yes, let's create it, otherwise let's modify the DTD and create a valid XML document for the modified version.

```dtd
<!ELEMENT a (b+)>
<!ELEMENT b (a+)>
```

## Exercise 4

Let's create entities for the repeating strings in the following XML document:

<pre class="prettyprint lang-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE people [
  &lt;!ELEMENT people (person+)&gt;
  &lt;!ELEMENT person (name)&gt;
  &lt;!ELEMENT name (#PCDATA)&gt;
]>
&lt;people&gt;
  &lt;person&gt;
    &lt;name&gt;John Doe&lt;/name&gt;
  &lt;/person&gt;
  &lt;person&gt;
    &lt;name&gt;Jane Doe&lt;/name&gt;
  &lt;/person&gt;
  &lt;person&gt;
    &lt;name&gt;John Doe&lt;/name&gt;
  &lt;/person&gt;
  &lt;person&gt;
    &lt;name&gt;Jane Doe&lt;/name&gt;
  &lt;/person&gt;
&lt;/people&gt;</pre>

## Exercise 5

Let's create parameter entities for the repeating elements in the following XML document:

<pre class="prettyprint lang-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;email-messages&gt;
  &lt;email-message id=&quot;1&quot;&gt;
    &lt;sender&gt;
      &lt;name&gt;John Doe&lt;/name&gt;
      &lt;email-address&gt;john.doe@gmail.com&lt;/email-address&gt;
    &lt;/sender&gt;

    &lt;recipients&gt;
      &lt;recipient type=&quot;to&quot;&gt;
        &lt;name&gt;Jane Doe&lt;/name&gt;
        &lt;email-address&gt;jane.doe@gmail.com&lt;/email-address&gt;
      &lt;/recipient&gt;
      &lt;recipient type=&quot;cc&quot;&gt;
        &lt;name&gt;John Smith&lt;/name&gt;
        &lt;email-address&gt;john.smith@gmail.com&lt;/email-address&gt;
      &lt;/recipient&gt;
      &lt;recipient type=&quot;bcc&quot;&gt;
        &lt;name&gt;Mr. Brown&lt;/name&gt;
        &lt;email-address&gt;mr.brown@gmail.com&lt;/email-address&gt;
      &lt;/recipient&gt;
    &lt;/recipients&gt;

    &lt;date-time&gt;2013-09-14T10:15:00&lt;/date-time&gt;
    &lt;subject&gt;Subject&lt;/subject&gt;
    &lt;content&gt;
      &lt;![CDATA[
        Content
      ]]&gt;
    &lt;/content&gt;
  &lt;/email-message&gt;
&lt;/email-messages&gt;</pre>

Why are parameter entities beneficial? Let's add a new optional `phone-number` element to the sender and recipient elements.

## Exercise 6

Let's create a DTD that makes it possible to store the data of either a book or an album.

## Exercise 7

Let's create DTD files and valid XML documents that show how to handle the following ER model structures:

<ol type="a">
  <li>entity</li>
  <li>key attribute</li>
  <li>simple attribute</li>
  <li>composite attribute</li>
  <li>multi-valued attribute</li>
  <li>1:N relationship</li>
  <li>N:M relationship</li>
</ol>

## Exercise 8

Let's create DTD files and matching valid XML documents for the following topics:

<ol type="a">
  <li>timetable (classes: identifier, subject, day, start and end hour, classroom, teacher)</li>
  <li>library database (books: ISBN identifier, author, title, year, length)</li>
</ol>

## Exercise 9

A software company would like to store worklog data in XML. The XML file should contain the following data items:

* developer data,
* teams data,
* project data,
* worklog data (who did what, on which day)

During the requirement analysis phase, the following ER diagram was created:

<p align="center">
  <a href="assets/courses/xml/lab02/exercise09/worklog.er.dot.svg" target="_blank">
    <img src="assets/courses/xml/lab02/exercise09/worklog.er.dot.svg" alt="ER model" loading="lazy">
  </a>
</p>

<ol type="a">
  <li>Let's convert the above ER diagram to an XDM model.</li>
  <li>Let's create a DTD file that matches the above ER model and the below extra rules. Let's create a valid XML document that implements the DTD file. Let's use entities for the possible technologies.</li>
</ol>

Besides the above ER model the DTD file should describe additional rules as well. The different activity types should have related XML elements. The company would like to distinguish the following activity categories:

* meeting
* designing
* programming
* testing
* demo
* bugfixing

These activity types should have related XML elements whose text content should be the length of the activities in hours. These elements should also have an attribute that identifies the related project.

Additionally, the company has restrictions on the order of activities that can be worked on after each other. The following rules should be considered:

* Every day starts with at least one meeting. A developer may have several meetings after each other.
* After the meeting(s), there can be two types of activity list, depending on the project status:
  * At the beginning of a project's lifecycle, after the meeting(s) there will be an optional designing phase, then a programming activity, and finally an arbitrary number of testing activities.
  * At the end of a project's lifecycle, after the meeting(s) there will be a testing activity, then either a demo activity or a bugfixing activity.

The company gave us sample workflows:

* meeting (project 1), meeting (project 2), designing, programming
* meeting, designing, programming, testing (project 1), testing (project 2)
* meeting, programming, testing
* meeting, testing, demo
* meeting, testing, bugfixing

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/xml/lab02/solution.zip).
