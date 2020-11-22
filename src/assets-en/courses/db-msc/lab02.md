<h3>XQuery 3.0</h3>
  
  <p>Feladat: írjunk XQuery fájlt a következő XML fájlhoz:</p>
  
  <pre class="prettyprint" data-label="people.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;people&gt;
  &lt;person id=&quot;1&quot;&gt;
    &lt;firstName&gt;Vincent&lt;/firstName&gt;
    &lt;lastName&gt;Vega&lt;/lastName&gt;
    &lt;salary currency=&quot;euro&quot;&gt;2&lt;/salary&gt;
  &lt;/person&gt;
  &lt;person id=&quot;2&quot;&gt;
    &lt;firstName&gt;Butch&lt;/firstName&gt;
    &lt;lastName&gt;Coolidge&lt;/lastName&gt;
    &lt;salary currency=&quot;pound&quot;&gt;3&lt;/salary&gt;
  &lt;/person&gt;
  &lt;person id=&quot;3&quot;&gt;
    &lt;firstName&gt;Jules&lt;/firstName&gt;
    &lt;lastName&gt;Winnfield&lt;/lastName&gt;
    &lt;salary currency=&quot;euro&quot;&gt;2&lt;/salary&gt;
  &lt;/person&gt;
  &lt;person id=&quot;4&quot;&gt;
    &lt;firstName&gt;Marsellus&lt;/firstName&gt;
    &lt;lastName&gt;Wallace&lt;/lastName&gt;
    &lt;salary currency=&quot;dollar&quot;&gt;4&lt;/salary&gt;
  &lt;/person&gt;
  &lt;person id=&quot;5&quot;&gt;
    &lt;firstName&gt;Mia&lt;/firstName&gt;
    &lt;lastName&gt;Wallace&lt;/lastName&gt;
    &lt;salary&gt;N/A&lt;/salary&gt;
  &lt;/person&gt;
&lt;/people&gt;</pre>
  
  <p>A következő lépéseket kell elvégezni:</p>
  
  <ul>
    <li>Csoportosítsuk a személyeket fizetés szerint.</li>
	<li>A fizetéseket alakítsuk át úgy, hogy a számot a pénznemnek megfelelő szimbólum kövesse, pl. 2$</li>
	<li>A fizetéseket szorozzuk meg kettővel, és ahol ez a művelet nem végezhető el, legyen a fizetés 0.</li>
	<li>A fizetések növekvő sorrendben jelenjenek meg.</li>
	<li>A neveket alakítsuk át úgy, hogy elöl van a vezetéknév csupa nagybetűvel, aztán vessző és a keresztnév nagy kezdőbetűvel. Pl.: VEGA, Vincent</li>
	<li>Mindenhol jelöljük a típusokat, ahol lehet.</li>
  </ul>
  
  <p>Az XQuery fájlban a következő függvényekre lesz szükség:</p>
  
  <ul>
    <li>
	  salaryMapper(salaryElement):string
	  <ul>
	    <li>Input: salary elem (3, dollar)</li>
		<li>Output: az összeg kétszerese és a pénznem szimbóluma (6$)</li>
		<li>Megszorozza az összeget kettővel, és elkapja az esetleges hibát (try-catch). Hiba esetén az összeg 0.</li>
		<li>Átalakítja a pénznemet szimbólummá (switch-case).</li>
	  </ul>
	</li>
	<li>
	  nameMapper(personElement, lastNameMapper: function(string):string):element
	  <ul>
	    <li>Input: person elem és egy másik mapper függvény, ami a vezetéknév átalakításához szükséges</li>
		<li>(A második paraméter értékét a hívásnál inline függvényként adjuk át!)</li>
		<li>Output: name elem, benne a megfelelően formázott név</li>
		<li>Meghívja a kapott mappert a vezetéknévre, ez az első tagja az eredmény name elemnek.</li>
		<li>Utána konkatenál egy vesszőt és a keresztnév változatlan értékét.</li>
		<li>A kapott stringet átalakítja egy name elemmé (simple map operator).</li>
	  </ul>
	</li>
  </ul>
  
  <p>Az elvárt kimeneti XML dokumentum szerkezete a következő:</p>
  
  <pre class="prettyprint" data-label="people.xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;salaries&gt;
  &lt;salary salary=&quot;0&quot;&gt;
    &lt;employee&gt;
      &lt;name&gt;WALLACE, Mia&lt;/name&gt;
    &lt;/employee&gt;
  &lt;/salary&gt;
  &lt;salary salary=&quot;4€&quot;&gt;
    &lt;employee&gt;
      &lt;name&gt;VEGA, Vincent&lt;/name&gt;
    &lt;/employee&gt;
    &lt;employee&gt;
      &lt;name&gt;WINNFIELD, Jules&lt;/name&gt;
    &lt;/employee&gt;
  &lt;/salary&gt;
  &lt;salary salary=&quot;6£&quot;&gt;
    &lt;employee&gt;
      &lt;name&gt;COOLIDGE, Butch&lt;/name&gt;
    &lt;/employee&gt;
  &lt;/salary&gt;
  &lt;salary salary=&quot;8$&quot;&gt;
    &lt;employee&gt;
      &lt;name&gt;WALLACE, Marsellus&lt;/name&gt;
    &lt;/employee&gt;
  &lt;/salary&gt;
&lt;/salaries&gt;</pre>

---

xquery version "3.0";

declare namespace xsd = "http://www.w3.org/2001/XMLSchema";
declare namespace local = "http://iit.uni-miskolc.hu/dbmsc/xquery";

declare function local:salaryMapper($salary as element()) as xsd:string
{
    let $currency := $salary/@currency
    let $number := try {
        $salary/text() * 2
    } catch err:FORG0001 {
        0
    }

    return switch ($currency)
        case "dollar"
            return fn:concat($number, "$")
        case "euro"
            return fn:concat($number, "€")
        case "pound"
            return fn:concat($number,"£")
        default
            return fn:string($number)
};

declare function local:nameMapper($person as element(), $lastNameMapper as function(xsd:string) as xsd:string) as element()
{
    let $firstName := $person/firstName
    let $lastName := $person/lastName

    return
        fn:concat(
                $lastNameMapper($lastName),
                ", ",
                $firstName
        ) ! element name { . }
};

<salaries>
    {
        let $doc := fn:doc("people.xml")
        for $person in $doc/people/person
        group by $group := local:salaryMapper($person/salary)
        order by $group ascending
        return
            element salary {
                attribute salary {
                    $group
                },

                for $currentPerson in $person
                return
                    element employee {
                        local:nameMapper(
                                $currentPerson,
                                function($lastName) { fn:upper-case($lastName) }
                        )
                    }
            }
    }
</salaries>

=== MD

Feladat: írjunk XQuery fájlt a következő XML fájlhoz:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<people>
    <person id="1">
        <firstName>Vincent</firstName>
        <lastName>Vega</lastName>
        <salary currency="euro">2</salary>
    </person>
    <person id="2">
        <firstName>Butch</firstName>
        <lastName>Coolidge</lastName>
        <salary currency="pound">3</salary>
    </person>
    <person id="3">
        <firstName>Jules</firstName>
        <lastName>Winnfield</lastName>
        <salary currency="euro">2</salary>
    </person>
    <person id="4">
        <firstName>Marsellus</firstName>
        <lastName>Wallace</lastName>
        <salary currency="dollar">4</salary>
    </person>
    <person id="5">
        <firstName>Mia</firstName>
        <lastName>Wallace</lastName>
        <salary>N/A</salary>
    </person>
</people>
```

A következő lépéseket kell elvégezni:

* Csoportosítsuk a személyeket fizetés szerint.
* A fizetéseket alakítsuk át úgy, hogy a számot a pénznemnek megfelelő szimbólum kövesse, pl. *2$*
* A fizetéseket szorozzuk meg kettővel, és ahol ez a művelet nem végezhető el, legyen a fizetés 0.
* A fizetések növekvő sorrendben jelenjenek meg.
* A neveket alakítsuk át úgy, hogy elöl van a vezetéknév csupa nagybetűvel, aztán vessző és a keresztnév nagy kezdőbetűvel. Pl.: *VEGA, Vincent*
* Mindenhol jelöljük a típusokat, ahol lehet.

Az XQuery fájlban a következő függvényekre lesz szükség:

* `salaryMapper(salaryElement):string`
    * Input: salary elem (3, dollar)
    * Output: az összeg kétszerese és a pénznem szimbóluma (6$)
    * Megszorozza az összeget kettővel, és elkapja az esetleges hibát (try-catch). Hiba esetén az összeg 0.
    * Átalakítja a pénznemet szimbólummá (switch-case).
* `nameMapper(personElement, lastNameMapper: function(string):string):element`
    * Input: person elem és egy másik mapper függvény, ami a vezetéknév átalakításához szükséges
    * (A második paraméter értékét a hívásnál inline függvényként adjuk át!)
    * Output: name elem, benne a megfelelően formázott név
    * Meghívja a kapott mappert a vezetéknévre, ez az első tagja az eredmény name elemnek.
    * Utána konkatenál egy vesszőt és a keresztnév változatlan értékét.
    * A kapott stringet átalakítja egy name elemmé (simple map operator).

Az elvárt kimeneti XML dokumentum szerkezete a következő:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<salaries>
    <salary salary="0">
        <employee>
            <name>WALLACE, Mia</name>
        </employee>
    </salary>
    <salary salary="4€">
        <employee>
            <name>VEGA, Vincent</name>
        </employee>
        <employee>
            <name>WINNFIELD, Jules</name>
        </employee>
    </salary>
    <salary salary="6£">
        <employee>
            <name>COOLIDGE, Butch</name>
        </employee>
    </salary>
    <salary salary="8$">
        <employee>
            <name>WALLACE, Marsellus</name>
        </employee>
    </salary>
</salaries>
```
