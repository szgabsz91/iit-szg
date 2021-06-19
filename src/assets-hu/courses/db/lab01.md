## 1. feladat

Írjunk Java alkalmazást, amely elvégzi a következő alfeladatokat:

<ol type="a">
  <li>Csatlakozzunk az OpenLDAP szerverhez admin userként, helyes jelszóval.</li>
  <li>Csatlakozzunk az OpenLDAP szerverhez admin userként, helytelen jelszóval.</li>
  <li>
    Hozzunk létre egy új bejegyzést admin userként, amely a következő attribútumokat tartalmazza:
    <ul>
      <li>Szülő: <code>dc=example,dc=org</code></li>
      <li><code>cn = tanderson</code></li>
      <li><code>givenname = thomas</code></li>
      <li><code>sn = anderson</code></li>
      <li><code>objectClass = Person</code></li>
      <li><code>description = Neo</code></li>
    </ul>
  </li>
  <li>Módosítsuk az újonnan létrehozott bejegyzés <code>description</code> attribútumát <i>The One</i>-ra.</li>
  <li>Kérdezzük le az újonnan létrehozott bejegyzés összes attribútumát admin userként.</li>
  <li>Töröljük az újonnan létrehozott bejegyzést admin userként.</li>
</ol>

## Megoldások

A feladatok megoldásai az [alábbi linkre kattintva](assets/courses/db/lab01/solution.zip) érhetők el.
