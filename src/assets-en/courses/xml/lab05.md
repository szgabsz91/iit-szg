## Exercise 1

Given the following XML Schema and valid XML document:

<pre class="prettyprint lang-xml" data-label="reservation-system.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS&quot;
            xmlns:ns=&quot;NS&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:element name=&quot;reservation-system&quot; type=&quot;ns:reservationSystemType&quot;&gt;
    &lt;xsd:key name=&quot;roomIdKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;ns:rooms/ns:room&quot;/&gt;
      &lt;xsd:field xpath=&quot;@id&quot;/&gt;
    &lt;/xsd:key&gt;

    &lt;xsd:key name=&quot;customerIdKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;ns:customers/ns:customer&quot;/&gt;
      &lt;xsd:field xpath=&quot;@id&quot;/&gt;
    &lt;/xsd:key&gt;

    &lt;xsd:keyref name=&quot;reservationCustomerIdKeyref&quot; refer=&quot;ns:customerIdKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;ns:reservations/ns:reservation&quot;/&gt;
      &lt;xsd:field xpath=&quot;@customer-id&quot;/&gt;
    &lt;/xsd:keyref&gt;

    &lt;xsd:keyref name=&quot;reservationRoomIdKeyref&quot; refer=&quot;ns:roomIdKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;ns:reservations/ns:reservation&quot;/&gt;
      &lt;xsd:field xpath=&quot;@room-id&quot;/&gt;
    &lt;/xsd:keyref&gt;
  &lt;/xsd:element&gt;

  &lt;xsd:complexType name=&quot;reservationSystemType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;rooms&quot; type=&quot;ns:roomsType&quot;/&gt;
      &lt;xsd:element name=&quot;customers&quot; type=&quot;ns:customersType&quot;/&gt;
      &lt;xsd:element name=&quot;reservations&quot; type=&quot;ns:reservationsType&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;roomsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;room&quot; type=&quot;ns:roomType&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;roomType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;description&quot; type=&quot;xsd:string&quot;/&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;id&quot; type=&quot;ns:roomIdType&quot; use=&quot;required&quot;/&gt;
    &lt;xsd:attribute name=&quot;suite&quot; type=&quot;xsd:boolean&quot; default=&quot;false&quot;/&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;roomIdType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;
      &lt;xsd:pattern value=&quot;[A-Z]-\d-\d+&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

  &lt;xsd:complexType name=&quot;customersType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;customer&quot; type=&quot;ns:customerType&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;customerType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;name&quot; type=&quot;xsd:string&quot;/&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;id&quot; type=&quot;ns:customerIdType&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;customerIdType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;
      &lt;xsd:pattern value=&quot;\d{6}[A-Z]{2}&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

  &lt;xsd:complexType name=&quot;reservationsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;reservation&quot; type=&quot;ns:reservationType&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;reservationType&quot;&gt;
    &lt;xsd:attribute name=&quot;customer-id&quot; type=&quot;ns:customerIdType&quot; use=&quot;required&quot;/&gt;
    &lt;xsd:attribute name=&quot;room-id&quot; type=&quot;ns:roomIdType&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="reservation-system.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;ns:reservation-system xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
                       xsi:schemaLocation=&quot;NS reservation-system.xsd&quot;
                       xmlns:ns=&quot;NS&quot;&gt;

  &lt;ns:rooms&gt;
    &lt;ns:room id=&quot;A-1-102&quot; suite=&quot;true&quot;&gt;
      &lt;ns:description&gt;Description for room A-1-102&lt;/ns:description&gt;
    &lt;/ns:room&gt;

    &lt;ns:room id=&quot;B-2-13&quot;&gt;
      &lt;ns:description&gt;Description for room B-2-13&lt;/ns:description&gt;
    &lt;/ns:room&gt;
  &lt;/ns:rooms&gt;

  &lt;ns:customers&gt;
    &lt;ns:customer id=&quot;123456AB&quot;&gt;
      &lt;ns:name&gt;John Doe&lt;/ns:name&gt;
    &lt;/ns:customer&gt;

    &lt;ns:customer id=&quot;123456AC&quot;&gt;
      &lt;ns:name&gt;Jane Doe&lt;/ns:name&gt;
    &lt;/ns:customer&gt;
  &lt;/ns:customers&gt;

  &lt;ns:reservations&gt;
    &lt;ns:reservation customer-id=&quot;123456AB&quot; room-id=&quot;A-1-102&quot;/&gt;
    &lt;ns:reservation customer-id=&quot;123456AC&quot; room-id=&quot;B-2-13&quot;/&gt;
    &lt;ns:reservation customer-id=&quot;123456AB&quot; room-id=&quot;B-2-13&quot;/&gt;
    &lt;ns:reservation customer-id=&quot;123456AB&quot; room-id=&quot;A-1-102&quot;/&gt;
  &lt;/ns:reservations&gt;

&lt;/ns:reservation-system&gt;</pre>

<ol type="a">
  <li>Let's create a Java SAX application that counts all the reservations of John Doe.</li>
  <li>Let's create a Java SAX application that counts how many suites John Doe reserved.</li>
</ol>

In the applications we should also validate the XML document. In case of any errors, let's print the exception to the console.

## Exercise 2

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

<ol type="a">
  <li>Let's create a Java SAX application that counts how many cars there are in the document,</li>
  <li>Let's create a Java SAX application that sums up the owners' ages,</li>
  <li>Let's create a Java SAX application that calculates the average of the owners' ages,</li>
  <li>Let's create a Java SAX application that calculates the average of the owners' ages who own at least one silver car.</li>
</ol>

In the applications we should also validate the XML document. In case of any errors, let's print the exception to the console.

## Exercise 3

Given the following XML Schema and valid XML document:

<pre class="prettyprint lang-xml" data-label="cars.xsd">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            targetNamespace=&quot;NS&quot;
            xmlns:ns=&quot;NS&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:element name=&quot;cars&quot; type=&quot;ns:carsType&quot;&gt;
    &lt;xsd:key name=&quot;carIdKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;ns:car&quot;/&gt;
      &lt;xsd:field xpath=&quot;@id&quot;/&gt;
    &lt;/xsd:key&gt;
  &lt;/xsd:element&gt;

  &lt;xsd:complexType name=&quot;carsType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;car&quot; type=&quot;ns:carType&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;carType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;manufacturer&quot; type=&quot;ns:manufacturerType&quot;/&gt;
      &lt;xsd:element name=&quot;model&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;price&quot; type=&quot;xsd:decimal&quot;/&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;id&quot; type=&quot;xsd:positiveInteger&quot; use=&quot;required&quot;/&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;manufacturerType&quot;&gt;
    &lt;xsd:simpleContent&gt;
      &lt;xsd:extension base=&quot;xsd:string&quot;&gt;
        &lt;xsd:attribute name=&quot;group&quot; type=&quot;xsd:string&quot; use=&quot;required&quot;/&gt;
      &lt;/xsd:extension&gt;
    &lt;/xsd:simpleContent&gt;
  &lt;/xsd:complexType&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="cars.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;cars xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
      xsi:schemaLocation=&quot;NS cars.xsd&quot;
      xmlns=&quot;NS&quot;&gt;

  &lt;car id=&quot;1&quot;&gt;
    &lt;manufacturer group=&quot;PSA&quot;&gt;Citroën&lt;/manufacturer&gt;
    &lt;model&gt;ë-C4&lt;/model&gt;
    &lt;price&gt;8.8&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;2&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Hyundai&lt;/manufacturer&gt;
    &lt;model&gt;Ioniq&lt;/model&gt;
    &lt;price&gt;8.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;3&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Hyundai&lt;/manufacturer&gt;
    &lt;model&gt;IONIQ 5&lt;/model&gt;
    &lt;price&gt;13.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;4&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Hyundai&lt;/manufacturer&gt;
    &lt;model&gt;Kona&lt;/model&gt;
    &lt;price&gt;7.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;5&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Kia&lt;/manufacturer&gt;
    &lt;model&gt;e-Niro&lt;/model&gt;
    &lt;price&gt;8.9&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;6&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Kia&lt;/manufacturer&gt;
    &lt;model&gt;e-Soul&lt;/model&gt;
    &lt;price&gt;8.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;7&quot;&gt;
    &lt;manufacturer group=&quot;Hyundai&quot;&gt;Kia&lt;/manufacturer&gt;
    &lt;model&gt;EV6&lt;/model&gt;
    &lt;price&gt;13.5&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;8&quot;&gt;
    &lt;manufacturer group=&quot;PSA&quot;&gt;Opel&lt;/manufacturer&gt;
    &lt;model&gt;Corsa-e&lt;/model&gt;
    &lt;price&gt;8.2&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;9&quot;&gt;
    &lt;manufacturer group=&quot;PSA&quot;&gt;Peugeot&lt;/manufacturer&gt;
    &lt;model&gt;e-208&lt;/model&gt;
    &lt;price&gt;7.8&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;10&quot;&gt;
    &lt;manufacturer group=&quot;PSA&quot;&gt;Peugeot&lt;/manufacturer&gt;
    &lt;model&gt;e-2008&lt;/model&gt;
    &lt;price&gt;8.6&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;11&quot;&gt;
    &lt;manufacturer group=&quot;Volkswagen&quot;&gt;Skoda&lt;/manufacturer&gt;
    &lt;model&gt;ENYAQ&lt;/model&gt;
    &lt;price&gt;12.6&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;12&quot;&gt;
    &lt;manufacturer group=&quot;Volkswagen&quot;&gt;Volkswagen&lt;/manufacturer&gt;
    &lt;model&gt;ID.3&lt;/model&gt;
    &lt;price&gt;8.3&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;13&quot;&gt;
    &lt;manufacturer group=&quot;Volkswagen&quot;&gt;Volkswagen&lt;/manufacturer&gt;
    &lt;model&gt;ID.4&lt;/model&gt;
    &lt;price&gt;16.8&lt;/price&gt;
  &lt;/car&gt;

  &lt;car id=&quot;14&quot;&gt;
    &lt;manufacturer group=&quot;Volkswagen&quot;&gt;Volkswagen&lt;/manufacturer&gt;
    &lt;model&gt;e-UP!&lt;/model&gt;
    &lt;price&gt;5.6&lt;/price&gt;
  &lt;/car&gt;

&lt;/cars&gt;</pre>

Let's create a Java SAX application that calculates the average price of the PSA Group cars.

In the application we should also validate the XML document. In case of any errors, let's print the exception to the console.

## Exercise 4

Given the following XML Schema and valid XML document:

<pre class="prettyprint lang-xml" data-label="catalog.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xsd:schema xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;
            xmlns:ns=&quot;NS&quot;
            targetNamespace=&quot;NS&quot;
            elementFormDefault=&quot;qualified&quot;&gt;

  &lt;xsd:element name=&quot;catalog&quot; type=&quot;ns:catalogType&quot;&gt;
    &lt;xsd:key name=&quot;cdIdKey&quot;&gt;
      &lt;xsd:selector xpath=&quot;ns:cd&quot;/&gt;
      &lt;xsd:field xpath=&quot;@id&quot;/&gt;
    &lt;/xsd:key&gt;
  &lt;/xsd:element&gt;

  &lt;xsd:complexType name=&quot;catalogType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;cd&quot; type=&quot;ns:cdType&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xsd:sequence&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:complexType name=&quot;cdType&quot;&gt;
    &lt;xsd:sequence&gt;
      &lt;xsd:element name=&quot;title&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;artist&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;country&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;company&quot; type=&quot;xsd:string&quot;/&gt;
      &lt;xsd:element name=&quot;price&quot; type=&quot;xsd:decimal&quot;/&gt;
      &lt;xsd:element name=&quot;year&quot; type=&quot;xsd:gYear&quot;/&gt;
    &lt;/xsd:sequence&gt;
    &lt;xsd:attribute name=&quot;id&quot; type=&quot;xsd:int&quot; use=&quot;required&quot;/&gt;
    &lt;xsd:attribute name=&quot;discount&quot; type=&quot;ns:percentType&quot; use=&quot;optional&quot;/&gt;
  &lt;/xsd:complexType&gt;

  &lt;xsd:simpleType name=&quot;percentType&quot;&gt;
    &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;
      &lt;xsd:pattern value=&quot;\d+%&quot;/&gt;
    &lt;/xsd:restriction&gt;
  &lt;/xsd:simpleType&gt;

&lt;/xsd:schema&gt;</pre>

<pre class="prettyprint lang-xml" data-label="catalog.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;ns:catalog xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
            xsi:schemaLocation=&quot;NS catalog.xsd&quot;
            xmlns:ns=&quot;NS&quot;&gt;

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

Let's create a Java SAX application that calculates the average price of those albums from the '80s whose identifier has only one digit.

In the applications we should also validate the XML document. In case of any errors, let's print the exception to the console.

## Solution

If you're ready with the exercises above, [check out the solution](assets/courses/xml/lab05/solution.zip).
