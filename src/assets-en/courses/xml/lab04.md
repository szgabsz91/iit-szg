a cím még nem jó, nemcsak integritás van itt plusszban, fixáljuk

legyen egy olyan feladat is, amiben a software-company-t egészítjük ki integritással

<p>A feladatokhoz sz�ks�ges f�jlok let�lthet�ek <a href="<?php echo getLink('xml/gyak04_start.zip'); ?>">innen</a>.</p>
  
  <h3>1. feladat</h3>
  
  <p>Az 1.xsd aut�s XML s�m�t eg�sz�ts�k ki integrit�si felt�telekkel:</p>
  
  <ul>
    <li>Az aut�k rsz �s a tulajdonosok id attrib�tuma legyen els�dleges kulcs</li>
    <li>A tulajdonosok alatt szerepl� aut� elemek tartalma legyen idegen kulcs</li>
    <li>Egy tulajdonos alatt egy aut� csak egyszer szerepelhessen</li>
  </ul>
  
  <h3>2. feladat</h3>
  
  <p>A 2.xsd XML s�m�t alak�tsuk �t �gy, hogy n�vtereket is haszn�ljunk:</p>
  
  <ul class="letters">
    <li>A s�m�ban legyen a s�ma n�vtere aliasos, a saj�t n�vt�r default, �s a nem glob�lis elemek is ker�ljenek be a n�vt�rbe. A dokumentumban haszn�ljunk aliast.</li>
    <li>A s�m�ban legyen a s�ma n�vtere a default, a saj�t n�vt�r aliasos, �s a nem glob�lis elemek is ker�ljenek be a n�vt�rbe. A dokumentumban ne haszn�ljunk aliast.</li>
    <li>A s�m�ban haszn�ljunk aliast mindk�t n�vt�rre, de a nem glob�lis elemek ne ker�ljenek be a saj�t n�vt�rbe.</li>
    <li>A s�m�ban haszn�ljunk aliast mindk�t n�vt�rre, �s minden elem illetve attrib�tum ker�lj�n be a saj�t n�vt�rbe.</li>
    <li>A s�m�ban haszn�ljunk aliast mindk�t n�vt�rre, �s a keresztn�v elemek kiv�tel�vel ker�lj�n be minden elem a saj�t n�vt�rbe.</li>
  </ul>
  
  <h3>3. feladat</h3>
  
  <p>A 3.xsd s�m�hoz hozzunk l�tre egy m�sik s�m�t, amely beemeli annak tartalm�t, �s l�trehoz egy gy�k�relem defin�ci�t, amelyben egy szem�ly �s egy aut� elem szerepel. A k�t s�ma tartozzon azonos n�vt�rhez:</p>
  
  <ul class="letters">
    <li>el�sz�r a default n�vt�rhez,</li>
    <li>majd egy saj�t n�vt�rhez.</li>
  </ul>
  
  <h3>4. feladat</h3>
  
  <ul class="letters">
    <li>A 4.xsd s�m�hoz hozzunk l�tre egy m�sik s�m�t, amely kieg�sz�ti az el�z� s�ma t�pus�t egy k�z�ps�n�v elemmel.</li>
    <li>Alak�tsuk �t a n�vtereket �gy, hogy n�vtereket is alkalmazzunk!</li>
  </ul>
  
  <h3>5. feladat</h3>
  
  <p>Az 5.a.xsd �s 5.b.xsd s�m�khoz hozzunk l�tre egy 5.c.xsd s�m�t, amely beemeli az el�z� k�t s�ma tartalm�t, �s l�trehoz egy gy�k�relemet egy saj�t, harmadik n�vt�rben.</p>
  
  <h3>6. feladat</h3>
  
  <p>�rjunk XML s�m�t a 6.xml f�jlhoz! A k�vetkez�kre figyelj�nk:</p>
  
  <ul>
    <li>Az szob�k azonos�t�j�nak form�tuma: nagybet�, k�t�jel, sz�mjegy, k�t�jel, sz�mjegyek. Pl.: A-1-2, A-1-2345</li>
    <li>A lakoszt�ly attrib�tum default �rt�ke false legyen.</li>
    <li>A szisz attrib�tum form�tuma: 6 sz�mjegy, 2 nagybet�. Pl.: 123456AB</li>
    <li>A szob�k �s vend�gek azonos�t�ja legyen els�dleges kulcs, a foglal�sokn�l hivatkozzunk ezekre idegen kulccsal.</li>
  </ul>
  
  <h3>7. feldat</h3>
  
  <p class="margined">Mi a hiba az al�bbi k�dr�szletekben?</p>
  
  <h4>1. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="1.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:int&quot; maxOccurs=&quot;unbounded&quot;/&gt;
        &lt;xs:element name=&quot;c&quot; type=&quot;xs:int&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
    
    &lt;xs:key name=&quot;k&quot;&gt;
      &lt;xs:selector xpath=&quot;b&quot;/&gt;
      &lt;xs:field xpath=&quot;.&quot;/&gt;
    &lt;/xs:key&gt;
    
    &lt;xs:keyref name=&quot;kr&quot;&gt;
      &lt;xs:selector xpath=&quot;c&quot;/&gt;
      &lt;xs:field xpath=&quot;.&quot;/&gt;
    &lt;/xs:keyref&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="1.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;1.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;b&gt;2&lt;/b&gt;
  &lt;c&gt;1&lt;/c&gt;
  &lt;c&gt;2&lt;/c&gt;
&lt;/a&gt;</pre>
  
  <h4>2. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="2.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:int&quot; maxOccurs=&quot;unbounded&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
    
    &lt;xs:key name=&quot;k&quot;&gt;
      &lt;xs:selector xpath=&quot;.&quot;/&gt;
      &lt;xs:field xpath=&quot;b&quot;/&gt;
    &lt;/xs:key&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="2.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;2.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;b&gt;2&lt;/b&gt;
&lt;/a&gt;</pre>
  
  <h4>3. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="3.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:int&quot; maxOccurs=&quot;unbounded&quot;&gt;
          &lt;xs:unique name=&quot;k&quot;&gt;
            &lt;xs:selector xpath=&quot;.&quot;/&gt;
            &lt;xs:field xpath=&quot;.&quot;/&gt;
          &lt;/xs:unique&gt;
        &lt;/xs:element&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="3.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;3.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;b&gt;1&lt;/b&gt;
&lt;/a&gt;</pre>
  
  <h4>4. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="4.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; maxOccurs=&quot;unbounded&quot;&gt;
          &lt;xs:complexType&gt;
            &lt;xs:complexContent&gt;
              &lt;xs:extension base=&quot;xs:anyType&quot;&gt;
                &lt;xs:attribute name=&quot;id&quot; type=&quot;xs:integer&quot; use=&quot;required&quot;/&gt;
              &lt;/xs:extension&gt;
            &lt;/xs:complexContent&gt;
          &lt;/xs:complexType&gt;
        &lt;/xs:element&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
    
    &lt;xs:key name=&quot;k&quot;&gt;
      &lt;xs:selector xpath=&quot;b&quot;/&gt;
      &lt;xs:field xpath=&quot;id&quot;/&gt;
    &lt;/xs:key&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="4.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:noNamespaceSchemaLocation=&quot;4.xsd&quot;&gt;
  &lt;b id=&quot;1&quot;&gt;1&lt;/b&gt;
  &lt;b id=&quot;2&quot;&gt;1&lt;/b&gt;
&lt;/a&gt;</pre>
  
  <h4>5. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="5.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;autoDB&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;autok&quot; type=&quot;autok&quot;/&gt;
        &lt;xs:element name=&quot;tulajok&quot; type=&quot;tulajok&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
    
    &lt;xs:key name=&quot;autoKey&quot;&gt;
      &lt;xs:selector xpath=&quot;autok/auto&quot;/&gt;
      &lt;xs:field xpath=&quot;@id&quot;/&gt;
    &lt;/xs:key&gt;
    
    &lt;xs:key name=&quot;tulajKey&quot;&gt;
      &lt;xs:selector xpath=&quot;tulajok/tulaj&quot;/&gt;
      &lt;xs:field xpath=&quot;id&quot;/&gt;
    &lt;/xs:key&gt;
    
    &lt;xs:unique name=&quot;tulajAutoUnique&quot;&gt;
      &lt;xs:selector xpath=&quot;tulajok/tulaj/auto&quot;/&gt;
      &lt;xs:field xpath=&quot;.&quot;/&gt;
    &lt;/xs:unique&gt;
    
    &lt;xs:keyref name=&quot;tulajAutoKeyRef&quot; refer=&quot;autoKey&quot;&gt;
      &lt;xs:selector xpath=&quot;tulajok/tulaj/auto&quot;/&gt;
      &lt;xs:field xpath=&quot;.&quot;/&gt;
    &lt;/xs:keyref&gt;
  &lt;/xs:element&gt;
  
  &lt;xs:complexType name=&quot;autok&quot;&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element name=&quot;auto&quot; type=&quot;auto&quot; maxOccurs=&quot;unbounded&quot;/&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;
  
  &lt;xs:complexType name=&quot;tulajok&quot;&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element name=&quot;tulaj&quot; maxOccurs=&quot;unbounded&quot;&gt;
        &lt;xs:complexType&gt;
          &lt;xs:sequence&gt;
            &lt;xs:element name=&quot;id&quot; type=&quot;xs:int&quot;/&gt;
            &lt;xs:element name=&quot;nev&quot; type=&quot;xs:string&quot;/&gt;
            &lt;xs:element name=&quot;auto&quot; type=&quot;xs:int&quot; maxOccurs=&quot;unbounded&quot;/&gt;
          &lt;/xs:sequence&gt;
        &lt;/xs:complexType&gt;
      &lt;/xs:element&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;
  
  &lt;xs:complexType name=&quot;auto&quot;&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element name=&quot;marka&quot; type=&quot;xs:string&quot;/&gt;
    &lt;/xs:sequence&gt;
    &lt;xs:attribute name=&quot;id&quot; type=&quot;xs:int&quot; use=&quot;required&quot;/&gt;
  &lt;/xs:complexType&gt;
  
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="5.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;autoDB xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
        xsi:noNamespaceSchemaLocation=&quot;5.xsd&quot;&gt;
  
  &lt;autok&gt;
    &lt;auto id=&quot;1&quot;&gt;
      &lt;marka&gt;Honda&lt;/marka&gt;
    &lt;/auto&gt;
    &lt;auto id=&quot;2&quot;&gt;
      &lt;marka&gt;BMW&lt;/marka&gt;
    &lt;/auto&gt;
    &lt;auto id=&quot;3&quot;&gt;
      &lt;marka&gt;Mercedes&lt;/marka&gt;
    &lt;/auto&gt;
  &lt;/autok&gt;
  
  &lt;tulajok&gt;
    &lt;tulaj&gt;
      &lt;id&gt;1&lt;/id&gt;
      &lt;nev&gt;X1 Y1&lt;/nev&gt;
      &lt;auto&gt;1&lt;/auto&gt;
      &lt;auto&gt;2&lt;/auto&gt;
    &lt;/tulaj&gt;
    &lt;tulaj&gt;
      &lt;id&gt;2&lt;/id&gt;
      &lt;nev&gt;X2 Y2&lt;/nev&gt;
      &lt;auto&gt;2&lt;/auto&gt;
      &lt;auto&gt;3&lt;/auto&gt;
    &lt;/tulaj&gt;
    &lt;tulaj&gt;
      &lt;id&gt;3&lt;/id&gt;
      &lt;nev&gt;X3 Y3&lt;/nev&gt;
      &lt;auto&gt;1&lt;/auto&gt;
      &lt;auto&gt;3&lt;/auto&gt;
    &lt;/tulaj&gt;
  &lt;/tulajok&gt;
  
&lt;/autoDB&gt;</pre>
  
  <h4>6. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="6.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns2&quot;&gt;
  &lt;xs:element name=&quot;a&quot; type=&quot;xs:anySimpleType&quot;/&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="6.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns1&quot;&gt;
  &lt;xs:include schemaLocation=&quot;6.xsd&quot;/&gt;
&lt;/xs:schema&gt;</pre>
  
  <h4>7. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="7.1.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns1&quot;&gt;
  &lt;xs:complexType name=&quot;a&quot;&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element name=&quot;b&quot; type=&quot;xs:anySimpleType&quot;/&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="7.2.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns1&quot;
           xmlns:tn=&quot;ns1&quot;
           elementFormDefault=&quot;qualified&quot;&gt;
  &lt;xs:redefine schemaLocation=&quot;7.1.xsd&quot;&gt;
    &lt;xs:complexType name=&quot;a&quot;&gt;
      &lt;xs:complexContent&gt;
        &lt;xs:extension base=&quot;tn:a&quot;&gt;
          &lt;xs:sequence&gt;
            &lt;xs:element name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
          &lt;/xs:sequence&gt;
        &lt;/xs:extension&gt;
      &lt;/xs:complexContent&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:redefine&gt;
  
  &lt;xs:element name=&quot;a&quot; type=&quot;tn:a&quot;/&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="7.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;ns1 7.2.xsd&quot;
   xmlns=&quot;ns1&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;
&lt;/a&gt;</pre>
  
  <h4>8. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="8.1.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns1&quot;&gt;
  &lt;xs:simpleType name=&quot;b&quot;&gt;
    &lt;xs:restriction base=&quot;xs:integer&quot;&gt;
      &lt;xs:minInclusive value=&quot;0&quot;/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="8.2.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns2&quot;&gt;
  &lt;xs:element name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="8.3.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns3&quot;
           xmlns:ns1=&quot;ns1&quot;
           xmlns:ns2=&quot;ns2&quot;
           elementFormDefault=&quot;qualified&quot;&gt;
  &lt;xs:import namespace=&quot;ns1&quot; schemaLocation=&quot;8.1.xsd&quot;/&gt;
  &lt;xs:import namespace=&quot;ns2&quot; schemaLocation=&quot;8.2.xsd&quot;/&gt;
  
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;ns1:b&quot;/&gt;
        &lt;xs:element ref=&quot;ns2:c&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="8.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;ns3:a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xsi:schemaLocation=&quot;ns3 8.3.xsd&quot;
       xmlns:ns1=&quot;ns1&quot;
       xmlns:ns2=&quot;ns2&quot;
       xmlns:ns3=&quot;ns3&quot;&gt;
  &lt;ns1:b&gt;1&lt;/ns1:b&gt;
  &lt;ns2:c&gt;2&lt;/ns2:c&gt;
&lt;/ns3:a&gt;</pre>
  
  <h4>9. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="9.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns&quot;
           elementFormDefault=&quot;qualified&quot;
           attributeFormDefault=&quot;qualified&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot;&gt;
          &lt;xs:complexType&gt;
            &lt;xs:attribute name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
          &lt;/xs:complexType&gt;
        &lt;/xs:element&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="9.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;ns 9.xsd&quot;
   xmlns=&quot;ns&quot;&gt;
  &lt;b c=&quot;1&quot;/&gt;
&lt;/a&gt;</pre>
  
  <h4>10. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="10.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns&quot;
           elementFormDefault=&quot;qualified&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:anySimpleType&quot;/&gt;
        &lt;xs:element name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
        &lt;xs:element name=&quot;d&quot; type=&quot;xs:anySimpleType&quot; form=&quot;unqualified&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="10.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;ns 10.xsd&quot;
   xmlns=&quot;ns&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;1&lt;/c&gt;
  &lt;d&gt;1&lt;/d&gt;
&lt;/a&gt;</pre>
  
  <h4>11. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="11.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;b&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
  
  &lt;xs:complexType name=&quot;b&quot;&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
      &lt;xs:element name=&quot;d&quot; type=&quot;xs:anySimpleType&quot;/&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;
&lt;/xs:schema&gt;</pre>
  
  <h4>12. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="12.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:anySimpleType&quot;/&gt;
        &lt;xs:element name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="12.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;12.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;
&lt;/a&gt;</pre>
  
  <h4>13. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="13.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns&quot;
           elementFormDefault=&quot;qualified&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:anySimpleType&quot;/&gt;
        &lt;xs:element name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="13.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;13.xsd&quot;
   xmlns=&quot;ns&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;
&lt;/a&gt;</pre>
  
  <h4>14. k�dr�szlet</h4>
  
  <pre class="prettyprint" data-label="14.xsd">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
           targetNamespace=&quot;ns&quot;
           elementFormDefault=&quot;qualified&quot;&gt;
  &lt;xs:element name=&quot;a&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=&quot;b&quot; type=&quot;xs:anySimpleType&quot;/&gt;
        &lt;xs:element name=&quot;c&quot; type=&quot;xs:anySimpleType&quot;/&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
  
  <pre class="prettyprint" data-label="14.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;a xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
   xsi:schemaLocation=&quot;ns 14.xsd&quot;&gt;
  &lt;b&gt;1&lt;/b&gt;
  &lt;c&gt;2&lt;/c&gt;
&lt;/a&gt;</pre>

gyak04
gyak04_start

=== MD

A feladatokhoz szükséges fájlok letölthetőek [innen](courses/xml/practice04_start.zip).

### 1. feladat

Az *1.xsd* autós XML sémát egészítsük ki integritási feltételekkel:

* Az autók *rsz* és a tulajdonosok *id* attribútuma legyen elsődleges kulcs.
* A tulajdonosok alatt szereplő autó elemek tartalma legyen idegen kulcs.
* Egy tulajdonos alatt egy autó csak egyszer szerepelhessen.

### 2. feladat

A *2.xsd* XML sémát alakítsuk át úgy, hogy névtereket is használjunk:

* A sémában legyen a séma névtere aliaszos, a saját névtér default, és a nem globális elemek is kerüljenek be a névtérbe. A dokumentumban használjunk aliaszt.
* A sémában legyen a séma névtere a default, a saját névtér aliaszos, és a nem globális elemek is kerüljenek be a névtérbe. A dokumentumban ne használjunk aliaszt.
* A sémában használjunk aliaszt mindkét névtérre, de a nem globális elemek ne kerüljenek be a saját névtérbe.
* A sémában használjunk aliaszt mindkét névtérre, és minden elem illetve attribútum kerüljön be a saját névtérbe.
* A sémában használjunk aliaszt mindkét névtérre, és a keresztnév elemek kivételével kerüljön be minden elem a saját névtérbe.

### 3. feladat

A *3.xsd* sémához hozzunk létre egy másik sémát, amely beemeli annak tartalmát, és létrehoz egy gyökérelem definíciót, amelyben egy személy és egy autó elem szerepel. A két séma tartozzon azonos névtérhez:

* először a default névtérhez,
* majd egy saját névtérhez.

### 4. feladat

* A *4.xsd* sémához hozzunk létre egy másik sémát, amely kiegészíti az előző séma típusát egy középsőnév elemmel.
* Alakítsuk át a sémákat úgy, hogy névtereket is alkalmazzunk.

### 5. feladat

Az *5.a.xsd* és *5.b.xsd* sémákhoz hozzunk létre egy *5.c.xsd* sémát, amely beemeli az előző két séma tartalmát, és létrehoz egy gyökérelemet egy saját, harmadik névtérben.

### 6. feladat

Írjunk XML sémát a *6.xml* fájlhoz. A következőkre figyeljünk:

* Az szobák azonosítójának formátuma: nagybetű, kötőjel, számjegy, kötőjel, számjegyek. Pl.: *A-1-2*, *A-1-2345*
* A *lakosztály* attribútum default értéke `false` legyen.
* A *szisz* attribútum formátuma: 6 számjegy, 2 nagybetű. Pl.: *123456AB*
* A szobák és vendégek azonosítója legyen elsődleges kulcs, a foglalásoknál hivatkozzunk ezekre idegen kulccsal.

### 7. feldat

Mi a hiba az alábbi kódrészletekben?

#### 1. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:int" maxOccurs="unbounded"/>
                <xs:element name="c" type="xs:int" maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>
        
        <xs:key name="k">
            <xs:selector xpath="b"/>
            <xs:field xpath="."/>
        </xs:key>
        
        <xs:keyref name="kr">
            <xs:selector xpath="c"/>
            <xs:field xpath="."/>
        </xs:keyref>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="1.xsd">
    <b>1</b>
    <b>2</b>
    <c>1</c>
    <c>2</c>
</a>
```

#### 2. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:int" maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>
        
        <xs:key name="k">
            <xs:selector xpath="."/>
            <xs:field xpath="b"/>
        </xs:key>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="2.xsd">
    <b>1</b>
    <b>2</b>
</a>
```

#### 3. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:int" maxOccurs="unbounded">
                    <xs:unique name="k">
                        <xs:selector xpath="."/>
                        <xs:field xpath="."/>
                    </xs:unique>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="3.xsd">
    <b>1</b>
    <b>1</b>
</a>
```

#### 4. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:complexContent>
                            <xs:extension base="xs:anyType">
                                <xs:attribute name="id" type="xs:integer" use="required"/>
                            </xs:extension>
                        </xs:complexContent>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
        
        <xs:key name="k">
            <xs:selector xpath="b"/>
            <xs:field xpath="id"/>
        </xs:key>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="4.xsd">
    <b id="1">1</b>
    <b id="2">1</b>
</a>
```

#### 5. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="autoDB">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="autok" type="autok"/>
                <xs:element name="tulajok" type="tulajok"/>
            </xs:sequence>
        </xs:complexType>
        
        <xs:key name="autoKey">
            <xs:selector xpath="autok/auto"/>
            <xs:field xpath="@id"/>
        </xs:key>
        
        <xs:key name="tulajKey">
            <xs:selector xpath="tulajok/tulaj"/>
            <xs:field xpath="id"/>
        </xs:key>
        
        <xs:unique name="tulajAutoUnique">
            <xs:selector xpath="tulajok/tulaj/auto"/>
            <xs:field xpath="."/>
        </xs:unique>
        
        <xs:keyref name="tulajAutoKeyRef" refer="autoKey">
            <xs:selector xpath="tulajok/tulaj/auto"/>
            <xs:field xpath="."/>
        </xs:keyref>
    </xs:element>
    
    <xs:complexType name="autok">
        <xs:sequence>
            <xs:element name="auto" type="auto" maxOccurs="unbounded"/>
        </xs:sequence>
    </xs:complexType>
    
    <xs:complexType name="tulajok">
        <xs:sequence>
            <xs:element name="tulaj" maxOccurs="unbounded">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element name="id" type="xs:int"/>
                        <xs:element name="nev" type="xs:string"/>
                        <xs:element name="auto" type="xs:int" maxOccurs="unbounded"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
    </xs:complexType>
    
    <xs:complexType name="auto">
        <xs:sequence>
            <xs:element name="marka" type="xs:string"/>
        </xs:sequence>
        <xs:attribute name="id" type="xs:int" use="required"/>
    </xs:complexType>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<autoDB xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="5.xsd">
    <autok>
        <auto id="1">
            <marka>Honda</marka>
        </auto>
        <auto id="2">
            <marka>BMW</marka>
        </auto>
        <auto id="3">
            <marka>Mercedes</marka>
        </auto>
    </autok>
    
    <tulajok>
        <tulaj>
            <id>1</id>
            <nev>X1 Y1</nev>
            <auto>1</auto>
            <auto>2</auto>
        </tulaj>
        <tulaj>
            <id>2</id>
            <nev>X2 Y2</nev>
            <auto>2</auto>
            <auto>3</auto>
        </tulaj>
        <tulaj>
            <id>3</id>
            <nev>X3 Y3</nev>
            <auto>1</auto>
            <auto>3</auto>
        </tulaj>
    </tulajok>
</autoDB>
```

#### 6. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns2">
    <xs:element name="a" type="xs:anySimpleType"/>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns1">
    <xs:include schemaLocation="6.xsd"/>
</xs:schema>
```

#### 7. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns1">
    <xs:complexType name="a">
        <xs:sequence>
            <xs:element name="b" type="xs:anySimpleType"/>
        </xs:sequence>
    </xs:complexType>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns1"
           xmlns:tn="ns1"
           elementFormDefault="qualified">
    <xs:redefine schemaLocation="7.1.xsd">
        <xs:complexType name="a">
            <xs:complexContent>
                <xs:extension base="tn:a">
                    <xs:sequence>
                        <xs:element name="c" type="xs:anySimpleType"/>
                    </xs:sequence>
                </xs:extension>
            </xs:complexContent>
        </xs:complexType>
    </xs:redefine>
    
    <xs:element name="a" type="tn:a"/>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="ns1 7.2.xsd"
   xmlns="ns1">
    <b>1</b>
    <c>2</c>
</a>
```

#### 8. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns1">
    <xs:simpleType name="b">
        <xs:restriction base="xs:integer">
            <xs:minInclusive value="0"/>
        </xs:restriction>
    </xs:simpleType>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns2">
    <xs:element name="c" type="xs:anySimpleType"/>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns3"
           xmlns:ns1="ns1"
           xmlns:ns2="ns2"
           elementFormDefault="qualified">
    <xs:import namespace="ns1" schemaLocation="8.1.xsd"/>
    <xs:import namespace="ns2" schemaLocation="8.2.xsd"/>
    
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="ns1:b"/>
                <xs:element ref="ns2:c"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ns3:a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="ns3 8.3.xsd"
       xmlns:ns1="ns1"
       xmlns:ns2="ns2"
       xmlns:ns3="ns3">
    <ns1:b>1</ns1:b>
    <ns2:c>2</ns2:c>
</ns3:a>
```

#### 9. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns"
           elementFormDefault="qualified"
           attributeFormDefault="qualified">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b">
                    <xs:complexType>
                        <xs:attribute name="c" type="xs:anySimpleType"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="ns 9.xsd"
   xmlns="ns">
    <b c="1"/>
</a>
```

#### 10. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns"
           elementFormDefault="qualified">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:anySimpleType"/>
                <xs:element name="c" type="xs:anySimpleType"/>
                <xs:element name="d" type="xs:anySimpleType" form="unqualified"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="ns 10.xsd"
   xmlns="ns">
    <b>1</b>
    <c>1</c>
    <d>1</d>
</a>
```

#### 11. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="b"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
    
    <xs:complexType name="b">
        <xs:sequence>
            <xs:element name="c" type="xs:anySimpleType"/>
            <xs:element name="d" type="xs:anySimpleType"/>
        </xs:sequence>
    </xs:complexType>
</xs:schema>
```

#### 12. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:anySimpleType"/>
                <xs:element name="c" type="xs:anySimpleType"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="12.xsd">
    <b>1</b>
    <c>2</c>
</a>
```

#### 13. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns"
           elementFormDefault="qualified">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:anySimpleType"/>
                <xs:element name="c" type="xs:anySimpleType"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="13.xsd"
   xmlns="ns">
    <b>1</b>
    <c>2</c>
</a>
```

#### 14. kódrészlet

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="ns"
           elementFormDefault="qualified">
    <xs:element name="a">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="b" type="xs:anySimpleType"/>
                <xs:element name="c" type="xs:anySimpleType"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<a xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="ns 14.xsd">
    <b>1</b>
    <c>2</c>
</a>
```
