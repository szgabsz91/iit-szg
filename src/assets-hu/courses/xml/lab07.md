## 1. feladat

Adott a következő XML dokumentum:

<pre class="prettyprint lang-xml" data-label="person.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;person id=&quot;3&quot;&gt;
  &lt;first-name&gt;John&lt;/first-name&gt;
  &lt;last-name&gt;Doe&lt;/last-name&gt;
&lt;/person&gt;</pre>

Írjunk egy Java alkalmazást, amely

<ol type="a">
  <li>beolvassa a fenti XML dokumentumot JAXB segítségével, majd</li>
  <li>kiírja a beolvasott objektumot egy új XML fájlba.</li>
</ol>

Az alkalmazásban hozzunk létre egy modell osztályt, amelyet annotáljunk úgy, hogy a fenti XML struktúrának megfeleljen, és a beolvasás és kiírás az elvárt módjon működjön.

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/xml/lab07/solution.zip) érhetők el.
