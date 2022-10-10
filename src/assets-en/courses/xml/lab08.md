## Exercise 1

Given the following XML Schema and valid XML document:

<pre class="prettyprint lang-xml" data-label="car-database.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            xmlns:ns=&quot;NS&quot;
            targetNamespace=&quot;NS&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:element name=&quot;car-database&quot;&gt;
    &lt;xsd:complexType&gt;
      &lt;xsd:sequence&gt;
        &lt;xsd:element name=&quot;cars&quot; type=&quot;ns:carsType&quot;/&gt;
        &lt;xsd:element name=&quot;owners&quot; type=&quot;ns:ownersType&quot;/&gt;
      &lt;/xsd:sequence&gt;
    &lt;/xsd:complexType&gt;

    &lt;xsd:key name=&quot;carLicensePlateNumberKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;ns:cars/ns:car&quot;/&gt;
      &lt;xsd:field xpath=&quot;@license-plate-number&quot;/&gt;
    &lt;/xsd:key&gt;

    &lt;xsd:key name=&quot;ownerIdKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;ns:owners/ns:owner&quot;/&gt;
      &lt;xsd:field xpath=&quot;@id&quot;/&gt;
    &lt;/xsd:key&gt;

    &lt;xsd:keyref name=&quot;ownedCarKeyref&quot; refer=&quot;ns:carLicensePlateNumberKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;ns:owners/ns:owner/ns:owned-cars/ns:owned-car&quot;/&gt;
      &lt;xsd:field xpath=&quot;.&quot;/&gt;
    &lt;/xsd:keyref&gt;
  &lt;/xsd:element&gt;

  &lt;xsd:complexType name=&quot;carsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;car&quot; type=&quot;ns:carType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;ownersType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;owner&quot; type=&quot;ns:ownerType&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;&gt;
        &lt;xsd:unique name=&quot;ownedCarUnique&quot;&gt;
          &lt;xsd:selector xpath=&quot;ns:owned-cars/ns:owned-car&quot;/&gt;
          &lt;xsd:field xpath=&quot;.&quot;/&gt;
        &lt;/xsd:unique&gt;
      &lt;/xsd:element&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;licensePlateNumberType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;
      &lt;xsd:pattern value=&quot;[A-Z]{2}\d{2} [A-Z]{3}&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

  &lt;xsd:complexType name=&quot;carType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;manufacturer&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;model&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;color&quot; type=&quot;xsd:string&quot;/&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;license-plate-number&quot; type=&quot;ns:licensePlateNumberType&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;ownerType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;name&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;age&quot; type=&quot;xsd:positiveInteger&quot;/&gt;
      &lt;xsd:element name=&quot;owned-cars&quot;&gt;
        &lt;xsd:complexType&gt;
          &lt;xsd:sequence&gt;
            &lt;xsd:element name=&quot;owned-car&quot; type=&quot;ns:licensePlateNumberType&quot; maxOccurs=&quot;unbounded&quot;/&gt;
          &lt;/xsd:sequence&gt;
        &lt;/xsd:complexType&gt;
      &lt;/xsd:element&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;id&quot; type=&quot;xsd:positiveInteger&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="car-database.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;ns:car-database xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
                 xsi:schemaLocation=&quot;NS car-database.xsd&quot;
                 xmlns:ns=&quot;NS&quot;&gt;

  &lt;ns:cars&gt;
    &lt;ns:car license-plate-number=&quot;AB12 CDE&quot;&gt;
      &lt;ns:manufacturer&gt;Tesla&lt;/ns:manufacturer&gt;
      &lt;ns:model&gt;Model 3&lt;/ns:model&gt;
      &lt;ns:color&gt;red&lt;/ns:color&gt;
    &lt;/ns:car&gt;

    &lt;ns:car license-plate-number=&quot;AB12 CDF&quot;&gt;
      &lt;ns:manufacturer&gt;Volkswagen&lt;/ns:manufacturer&gt;
      &lt;ns:model&gt;ID.4&lt;/ns:model&gt;
      &lt;ns:color&gt;silver&lt;/ns:color&gt;
    &lt;/ns:car&gt;

    &lt;ns:car license-plate-number=&quot;AB12 CDG&quot;&gt;
      &lt;ns:manufacturer&gt;Kia&lt;/ns:manufacturer&gt;
      &lt;ns:model&gt;e-Niro&lt;/ns:model&gt;
      &lt;ns:color&gt;silver&lt;/ns:color&gt;
    &lt;/ns:car&gt;
  &lt;/ns:cars&gt;

  &lt;ns:owners&gt;
    &lt;ns:owner id=&quot;1&quot;&gt;
      &lt;ns:name&gt;John Doe&lt;/ns:name&gt;
      &lt;ns:age&gt;30&lt;/ns:age&gt;
      &lt;ns:owned-cars&gt;
        &lt;ns:owned-car&gt;AB12 CDE&lt;/ns:owned-car&gt;
        &lt;ns:owned-car&gt;AB12 CDF&lt;/ns:owned-car&gt;
      &lt;/ns:owned-cars&gt;
    &lt;/ns:owner&gt;

    &lt;ns:owner id=&quot;2&quot;&gt;
      &lt;ns:name&gt;Jane Doe&lt;/ns:name&gt;
      &lt;ns:age&gt;46&lt;/ns:age&gt;
      &lt;ns:owned-cars&gt;
        &lt;ns:owned-car&gt;AB12 CDG&lt;/ns:owned-car&gt;
      &lt;/ns:owned-cars&gt;
    &lt;/ns:owner&gt;
  &lt;/ns:owners&gt;

&lt;/ns:car-database&gt;</pre>

Let's create a .NET Core application that executes the following steps one by one:

<ol type="a">
  <li>It calculates the average of the owners' ages who own at least one silver car using the <code>System.Xml.XmlTextReader</code> class.</li>
  <li>It writes a new <code>Person</code> object to an external XML file that contains an <code>id</code> attribute, as well as a <code>first-name</code> and a <code>last-name</code> child element using the <code>System.Xml.XmlTextWriter</code> class.</li>
</ol>

## Exercise 2

Let's create a .NET Core application for the above *car-database.xml* file that executes the following steps one by one using the `System.Xml.XmlDocument` class:

<ol type="a">
  <li>It calculates the average of the owners' ages who own at least one silver car.</li>
  <li>It adds a new car to the XML document.</li>
  <li>It removes Jane Doe from the XML document.</li>
  <li>It writes the resulting XML document to an external XML file.</li>
</ol>

## Exercise 3

Let's create a .NET Core application for the above *car-database.xml* file that executes the following steps one by one using the `System.Xml.Linq.XDocument` class:

<ol type="a">
  <li>It calculates the average of the owners' ages who own at least one silver car.</li>
  <li>It adds a new car to the XML document.</li>
  <li>It removes Jane Doe from the XML document.</li>
  <li>It writes the resulting XML document to an external XML file.</li>
</ol>

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/xml/lab08/solution.zip).
