Ebben a kurzusban a legtöbb technológiához használhatjuk a <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a> szerkesztőt, néhány előre telepített extension segítségével.

Az alábbi fejezetek bemutatják, hogyan tudjuk használni a különböző technológiákat, és kitérnek arra is, hogy esetleg még milyen szoftvereket érdemes telepítenünk.

## XDM, ER, UML, relációs diagramok

A különböző típusú diagramokat bármilyen grafikus szerkesztővel megrajzolhatjuk, de akár a <a href="https://graphviz.org" target="_blank">Graphviz</a>t is használhatjuk hozzá, ami egyszerűen telepíthető a népszerű operációs rendszerek alatt. Ilyenkor *.dot* kiterjesztésű fájlokat kell írnunk, amelyek egy jól definiált nyelv segítségével írják le a diagramjainkat.

A <a href="https://marketplace.visualstudio.com/items?itemName=joaompinto.vscode-graphviz" target="_blank">Graphviz (dot) language support for Visual Studio Code</a> nevű VSCode extension segítségével egyszerűen legenerálhatjuk a képeket a szöveges fájlokból, de akár parancssorban is megtehetjük ugyanezt a következő parancs segítségével:

<pre class="prettyprint">dot $FILENAME -Tpng -O</pre>

## XML, DTD, XML séma

XML fájlok szerkesztéséhez telepítsük az <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml" target="_blank">XML</a> extensiont a VSCode-ban. Ez a kiterjesztés lehetővé teszi XML fájlok egyszerű validációját is DTD és XML séma alapján.