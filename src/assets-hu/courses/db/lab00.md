Ebben a kurzusban a legtöbb technológiához használhatjuk a <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a> szerkesztőt, néhány előre telepített extension segítségével.

Az alábbi fejezetek bemutatják, hogyan tudjuk használni a különböző technológiákat, és kitérnek arra is, hogy esetleg még milyen szoftvereket érdemes telepítenünk.

## Java

Java alkalmazások futtatásához bármilyen Java IDE-t használhatunk, például

* Visual Studio Code-ot a <a href="https://marketplace.visualstudio.com/items?itemName=redhat.java" target="_blank">Language Support for Java(TM) by Red Hat</a> extensionnel, vagy
* az <a href="https://www.jetbrains.com/idea" target="_blank">IntelliJ IDEA</a> fejlesztőeszközt.

## LDAP

A következő parancs elindít egy <a href="https://www.openldap.org" target="_blank">OpenLDAP</a> szervert egy előre létrehozott felhasználóval (*admin:password*) egy <a href="https://www.docker.com" target="_blank">Docker</a> containerben a <a href="https://github.com/osixia/docker-openldap" target="_blank">docker-openldap</a> projekt segítségével, és a szükséges portokat megnyitja a host gép számára:

<pre class="prettyprint">docker run \
  -p 389:389 \
  -p 636:636 \
  --name ldap-container \
  --env LDAP_READONLY_USER=true \
  --env LDAP_READONLY_USER_USERNAME=admin \
  --env LDAP_READONLY_USER_PASSWORD=password \
  --detach \
  osixia/openldap:1.5.0</pre>

Miután a szerver elindult, csatlakozhatunk az OpenLDAP szerverhez localhoston.

## Oracle Database

Azokhoz a gyakorlatokhoz, amelyek Oracle adatbázist igényelnek, telepítenünk kell az <a href="https://www.oracle.com/database/technologies/xe-downloads.html" target="_blank">Oracle Database XE</a>-t. A feladatok megoldásainak írásakor a 18c XE verziót használtam.

Kliensként használhatjuk az <a href="https://www.oracle.com/tools/downloads/sqldev-downloads.html" target="_blank">Oracle SQL Developer</a> eszközt, vagy a Visual Studio Code-ot az <a href="https://marketplace.visualstudio.com/items?itemName=Oracle.oracledevtools" target="_blank">Oracle Developer Tools for VS Code</a> extensionnel.

## C#

C# alkalmazások futtatásához bármilyen C# IDE-t használhatunk, például

* Visual Studio Code-ot a <a href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp" target="_blank">C#</a> extensionnel, vagy
* a <a href="https://visualstudio.microsoft.com" target="_blank">Visual Studio</a> fejlesztőeszközt.

A C# alkalmazásainkat Windows, Linux és macOS operációs rendszeren is futtathatjuk a <a href="https://dotnet.microsoft.com/download" target="_blank">.NET Core</a> segítségével, ami egy platformfüggetlen .NET platform implementáció. <a href="https://code.visualstudio.com/docs/languages/dotnet" target="_blank">Ez a tutorial</a> elmagyarázza, hogyan használhatjuk a .NET Core-t Visual Studio Code-ban.
