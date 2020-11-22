<p>XML szerkeszt�k�nt az Eclipse IDE-t lehet haszn�lni k�l�nb�z� pluginekkel.</p>
  
  <p>Az Eclipse el�felt�tele a Java JDK, melyet <a href="<?php echo getLink('http://www.oracle.com/technetwork/java/javase/downloads/index.html'); ?>" class="track">innen</a> t�lthet�nk le.</p>
  
  <p>Ezek ut�n t�lts�k le az <a href="<?php echo getLink('http://www.eclipse.org/downloads/'); ?>" class="track">Eclipse Luna</a> fejleszt�k�rnyezet Java EE v�ltozat�t (Eclipse IDE for Java EE Developers). A let�lt�tt zip f�jl tartalm�t csomagoljuk ki, mag�t az IDE-t nem kell telep�teni, r�gt�n futtathat�.</p>
  
  <p>Linux oper�ci�s rendszer �s Gnome 3 eset�n az <i>eclipse.ini</i> f�jlba sz�rjuk be a <i>--launcher.appendVmargs</i> sor el� a k�vetkez� 2 sort:</p>
  
  <p>
    <i>--launcher.GTK_version</i><br>
    <i>2</i>
  </p>
  
  <p>Az �gy kapott Eclipse tartalmazza az XML, DTD, XSD �s XSLT szerkeszt�ket.</p>
  
  <p><a id="xslt"></a>Modellez�shez a <a href="<?php echo getLink('https://wiki.gnome.org/action/show/Apps/Dia?action=show&redirect=Dia'); ?>" class="track">Dia</a> program haszn�lhat�.</p>
  
  <h3>XSLT 2.0</h3>
  
  <p><a id="xpath"></a>Az XSLT 2.0 verzi�j�hoz sz�ks�ges a Saxon Home Edition (jelenlegi legfrissebb verzi�: 9.5), ami let�lthet� <a href="<?php echo getLink('http://saxon.sourceforge.net'); ?>" class="track">innen</a> (<i>SaxonHE9-5-1-6J.zip</i>). Ez egy Java program, amely k�pes v�grehajtani az XSLT 2.0 �llom�nyokat. Miut�n let�lt�tt�k, az Eclipse-ben a <i>Window/Preferences</i> men�ponton bel�l az <i>XML/XSL/Java Processors</i> alatt adjuk hozz� a jar f�jlt Saxon (XSLT 2.0) t�pus� feldolgoz�k�nt, majd pip�ljuk be a l�trehozott processort.</p>
  
  <h3>XPath</h3>
  
  <p>Miel�tt plugineket pr�b�ln�nk telep�teni, az Eclipse mapp�j�ban l�v� <i>eclipse.ini</i> f�jl v�g�re sz�rjuk be a k�vetkez� sort: <i>-Djava.net.preferIPv4Stack=true</i>
  
  <p>Ha a be�p�tettn�l jobb XPath plugint szeretn�nk haszn�lni, akkor Eclipse-ben nyissuk meg a <i>Help</i> men� <i>Install New Software</i> men�pontj�t, �s �rjuk be a <i>http://eclipse-xpath-evaluation-plugin.googlecode.com/svn/trunk/eclipse-xpath-evaluation-plugin-update-site/</i> weboldalt! A megjelen� f�ban v�lasszuk ki a plugint �s telep�ts�k!</p>
  
  <p><a id="xquery"></a>Telep�t�s ut�n ind�tsuk �jra az Eclipse-et, �s a <i>Window</i> men� <i>Show View</i> men�pontja alatt az <i>Other</i> elemre kattintva v�lasszuk ki a telep�tett XPath viewt. Ennek ikonja h�rom k�r nyilakkal �sszek�tve, �s nem egy X bet�!</p>
  
  <h3>XQuery</h3>
  
  <p>XQuery-hez a <i>Help</i> men� <i>Install New Software...</i> men�pontj�n kereszt�l telep�ts�k a <i>Dynamic Language Toolkit - Core Frameworks</i> plugint!</p>
  
  <p class="alert alert-warning">
    <strong>FONTOS!</strong> A plugin Eclipse Indigo v�ltozat�t kell telep�teni, mert egy�bk�nt az XQuery Development Tools plugin nem fog telep�lni.<br>
    Ehhez a <i>http://download.eclipse.org/releases/indigo</i> URL-t kell megadni.
  </p>
  
  <p>Miut�n bet�lt�dtek a pluginek, v�lasszuk a <i>General Purpose Tools</i>-on bel�li <i>Dynamic Language Toolkit - Core Frameworks</i> plugint!</p>
  
  <p>XQuery fejleszt�shez az <i>XQuery Development Tools Feature</i> plugin sz�ks�ges, ezt az el�z�ekhez hasonl�an telep�thetj�k, csak most a <i>http://download.eclipse.org/webtools/incubator/repository/xquery/milestones</i> URL-t adjuk meg! A sz�ks�ges plugin az <i>XQDT Core</i> kateg�ri�ban tal�lhat�.</p>
  
  <p>Ahhoz, hogy az XQuery moduljainkat futtatni is tudjuk, futtat� k�rnyezetre van sz�ks�g�nk. Ehhez t�lts�k le az MXQuery programot <a href="<?php echo getLink('http://mxquery.org/?page_id=7'); ?>" class="track">innen</a>. V�lasszuk a lap alj�n tal�lhat� <i>Binary Package</i> opci�t. A let�lt�tt zip f�jl tartalmazza a sz�ks�ges Java programokat, ezeket is csomagoljuk ki. Fontos, hogy az el�r�si �t ne tartalmazzon sz�k�z�ket, vagy egy�b speci�lis karaktert.</p>
  
  <p>Ezek ut�n konfigur�ljuk az Eclipse XQuery pluginj�t a <i>Window</i> men� <i>Preferences</i> men�pontj�ban. A bal oldali f�ban v�lasszuk az <i>XQuery</i> kateg�ri�ban tal�lhat� <i>Interpreters</i> elemet, �s kattintsunk az <i>Add</i> gombra. Az interpreter be�ll�t�sai:</p>
  
  <table class="table table-striped table-hover interpreter">
    <tbody>
      <tr>
        <td>Interpreter Name:</td>
        <td>MXQuery</td>
      </tr>
      <tr>
        <td>Interpreter JAR/WAR:</td>
        <td>${MXQUERY_PATH}/dist/mxquery.jar</td>
      </tr>
      <tr>
        <td>Java arguments: <sup>1</sup></td>
        <td></td>
      </tr>
      <tr>
        <td>Main class:</td>
        <td>ch.ethz.mxquery.cmdline.MXQuery</td>
      </tr>
      <tr>
        <td>Interpreter arguments:</td>
        <td>-f ${query_file} --xquery11Mode --updateMode --updateFiles -b &lt;arguments&gt;</td>
      </tr>
    </tbody>
  </table>
  
  <p>1: Linux oper�ci�s rendszer alatt a Java arguments sorba is be kell tenni egy hivatkoz�st a JAR f�jlra, mert egy�bk�nt "Could not find or load mainc class" hib�t fogunk kapni:</p>
  
  <table class="table table-striped table-hover interpreter">
    <tbody>
      <tr>
        <td>Java arguments:</td>
        <td>-cp ${MXQUERY_PATH}/dist/mxquery.jar</td>
      </tr>
    </tbody>
  </table>
  
  <p><a id="json"></a>�gy m�r l�trehozhatunk a k�s�bbiekben XQuery projekteket, azon bel�l pedig XQuery modulokat. A modulokban haszn�lhatjuk az XQuery Update Facility-t, �s a m�dos�tott XML f�jlokr�l biztons�gi m�solat is k�sz�l a konfigur�ci�nak k�sz�nhet�en.</p>
  
  <h3>JSON</h3>
  
  <p>JSON fejleszt�shez a <i>Help</i> men� <i>Install New Software...</i> men�pontj�n kereszt�l telep�ts�k a <i>Json Tools</i> plugint! Ennek URL-je: <i>https://bitbucket.org/denmiroch/jsontools/src/default/JsonSite/</i></p>
  
  <p><a id="svg"></a>Ezen k�v�l az AJAX k�r�sekhez sz�ks�g lehet egy lok�lis webszerverre, Windows rendszer alatt a <a href="<?php echo getLink('https://www.apachefriends.org'); ?>" class="track">XAMPP</a> aj�nlott.</p>
  
  <h3>SVG</h3>
  
  <p>Az SVG form�tum XML alap�, de az Eclipse-ben be kell �ll�tani, hogy automatikusan az XML szerkeszt�vel ny�ljanak meg az SVG f�jljaink.</p>
  
  <p>Ehhez a <i>Window</i> men� <i>Preferences</i> men�pontj�n bel�l v�lasszuk ki a bal oldali f�b�l a <i>General</i> - <i>Editors</i> kateg�ri�ban tal�lhat� <i>File Associations</i> elemet. A fels� <i>Add...</i> gombra kattintva adjuk hozz� a list�hoz a <i>*.svg</i> kiterjeszt�st, majd ezt fel�l kiv�lasztva az also <i>Add...</i> gombbal adjuk hozz� az <i>XML Editor</i>-t.</p>
  
  <p><a id="xmldb"></a>Ezek ut�n v�lasszuk a bal oldali f�b�l a <i>General</i> kateg�ri�ban tal�lhat� <i>Content Types</i> elemet. Fel�l v�lasszuk a <i>Text</i> alatt tal�lhat� <i>XML (lllformed)</i> elemet, alul pedig adjuk hozz� a <i>*.svg</i> kiterjeszt�st.</p>
  
  <h3>XML-DB</h3>
  
  <p><a id="cs"></a>XML-DB-hez az <a href="<?php echo getLink('http://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/index.html'); ?>" class="track">Oracle Database 11g R2 Express Edition</a> �s <a href="<?php echo getLink('http://www.oracle.com/technetwork/developer-tools/sql-developer/downloads/index.html'); ?>" class="track">Oracle SQL Developer 4</a> programok sz�ks�gesek.</p>
  
  <h3>C#</h3>
  
  <p>C#-ban val� fejleszt�shez a <a href="<?php echo getLink('http://www.microsoft.com/visualstudio/eng/downloads', 'd-express-windows-desktop'); ?>" class="track">Visual Studio 2013 Express for Windows Desktop</a> kiad�sa is elegend�, ennek seg�ts�g�vel egyszer� console alkalmaz�sokon kereszt�l tesztelhetj�k az XML API-kat.</p>

  VirtualBox VM előállítása és mentése Google Drive-ra
JiraReporter tool továbbfejlesztése
Frontend pom.xml fájlok rendberakása
Protractor
E2E Tesztek rendberakása

# XML

Username: xml
Password: xml
Administrative password: xml

General:
* date and time and location
* set up folders and gedit

Sudo
	su
	apt-get install sudo
	usermod -a -G sudo xml
	reboot

Modify labels in grub
	Open /boot/grub/grub.cfg
	Modify the labels as you wish.
Autologin
	Modify the following lines in /etc/gdm3/daemon.conf:
	[daemon] AutomaticLoginEnable = true AutomaticLogin = szgabsz91
Download google chrome from Iceweasal private window
chrome (incognito)
	sudo dpkg -i google*.deb
	sudo apt-get -f install
	rm google*.deb
Chrome settings:
	no thanks
	don't translate hungarian
	set as default
	developer tools on the bottom
vbox extensions + bidirectional clipboard
	sudo sh /media/cdrom0/VBoxLinuxAdditions.run
java
	Download
	tar -zxvf jdk*
	sudo mv jdk1.8.0_60 /usr/lib/jvm
	rm jdk*.tar.gz
	sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk1.8.0_60/bin/java 1
	sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk1.8.0_60/bin/javac 1
	sudo update-alternatives --install /usr/bin/javaws javaws /usr/lib/jvm/jdk1.8.0_60/bin/javaws 1
	sudo update-alternatives --install /usr/bin/jps jps /usr/lib/jvm/jdk1.8.0_60/bin/jps 1
	sudo update-alternatives --config java
	sudo update-alternatives --config javac
	sudo update-alternatives --config javaws
	sudo update-alternatives --config jps
apache maven
	Download
	tar -zxvf apache-maven*.tar.gz
	rm apache-maven*.tar.gz
	sudo mkdir /opt/apache
	sudo mv apache-maven-3.3.3 /opt/apache/maven-3.3.3
	sudo update-alternatives --install /usr/bin/mvn mvn /opt/apache/maven-3.3.3/bin/mvn 1
	sudo update-alternatives --config mvn
intellij
	Download
	tar -zxvf ideIC*.tar.gz
	rm ideIC*.tar.gz
	sudo mkdir /opt/jetbrains
	sudo mv idea-IC* /opt/jetbrains/intellij
	/opt/jetbrains/intellij/bin/idea.sh
	# setup with Maven
	don't show tips on startup, tool windows quick access
	edit menus (generate dtd, xsd)
	do not ask me to exit
	open in dia
	line numbering
	always open in same window
	project sdk
	xquery plugin
	saxon for XSLT 2.0 --> project dependencies --> add jar
	mxquery
	#!/bin/sh
	java -jar /opt/mxquery/dist/mxquery.jar -f $1 --xquery11Mode --updateMode --updateFiles -b
	update-alternatives
	export settings
vs code
	Download
	unzip VSCode*.zip
	rm VSCode*.zip
	sudo mkdir /opt/microsoft
	sudo mv VSCode* /opt/microsoft/vscode
	add it to main menu
dia
	sudo apt-get install dia
	sudo apt-get -f install
oracle
	http://blog.whitehorses.nl/2014/03/18/installing-java-oracle-11g-r2-express-edition-and-sql-developer-on-ubuntu-64-bit/
	sudo usermod -a -G dba xml
	alter system set memory_target = 172m scope = spfile;
	alter system set memory_max_target = 172m scope = spfile;
	then decrease memory
sql developer
	download transparent icon
delete everything (history, bash history, etc., notifications)
menu: chrome, folders, terminal, intellij, vscode, SQL Developer, dia

=== MD

XML szerkesztőként az Eclipse IDE-t lehet használni különböző pluginekkel.

Az Eclipse előfeltétele a Java JDK, melyet [innen](http://www.oracle.com/technetwork/java/javase/downloads/index.html) tölthetünk le.

Ezek után töltsük le az [Eclipse Luna](http://www.eclipse.org/downloads) fejlesztőkörnyezet Java EE változatát (Eclipse IDE for Java EE Developers). A letöltött zip fájl tartalmát csomagoljuk ki, magát az IDE-t nem kell telepíteni, rögtön futtatható.

Linux operációs rendszer és Gnome 3 esetén az *eclipse.ini fájlba szúrjuk be a *--launcher.appendVmargs* sor elé a következő 2 sort:

    --launcher.GTK_version
    2

Az így kapott Eclipse tartalmazza az XML, DTD, XSD és XSLT szerkesztőket.

Modellezéshez a [Dia](https://wiki.gnome.org/action/show/Apps/Dia?action=show&redirect=Dia) program használható.

### XSLT 2.0

Az XSLT 2.0 verziójához szükséges a *Saxon Home Edition* (jelenlegi legfrissebb verzió: 9.5), ami letölthető [innen](http://saxon.sourceforge.net) (*SaxonHE9-5-1-6J.zip*). Ez egy Java program, amely képes végrehajtani az XSLT 2.0 állományokat. Miután letöltöttük, az Eclipse-ben a *Window/Preferences* menüponton belül az *XML/XSL/Java Processors* alatt adjuk hozzá a jar fájlt Saxon (XSLT 2.0) típusú feldolgozóként, majd pipáljuk be a létrehozott processort.

### XPath

Mielőtt plugineket próbálnánk telepíteni, az Eclipse mappájában lévő *eclipse.ini* fájl végére szúrjuk be a következő sort: *-Djava.net.preferIPv4Stack=true*

Ha a beépítettnél jobb XPath plugint szeretnénk használni, akkor Eclipse-ben nyissuk meg a *Help* menü *Install New Software* menüpontját, és írjuk be a *http://eclipse-xpath-evaluation-plugin.googlecode.com/svn/trunk/eclipse-xpath-evaluation-plugin-update-site* weboldalt! A megjelenő fában válasszuk ki a plugint és telepítsük!

Telepítés után indítsuk újra az Eclipse-et, és a *Window* menü *Show View* menüpontja alatt az *Other* elemre kattintva válasszuk ki a telepített XPath viewt. Ennek ikonja három kör nyilakkal összekötve, és nem egy X betű!

### XQuery

XQuery-hez a *Help* menü *Install New Software...* menüpontján keresztül telepítsük a *Dynamic Language Toolkit - Core Frameworks* plugint!

**FONTOS!** A plugin Eclipse Indigo változatát kell telepíteni, mert egyébként az XQuery Development Tools plugin nem fog települni.
Ehhez a *http://download.eclipse.org/releases/indigo* URL-t kell megadni.

Miután betöltődtek a pluginek, válasszuk a *General Purpose Tools*-on belüli *Dynamic Language Toolkit - Core Frameworks* plugint!

XQuery fejlesztéshez az *XQuery Development Tools Feature* plugin szükséges, ezt az előzőekhez hasonlóan telepíthetjük, csak most a *http://download.eclipse.org/webtools/incubator/repository/xquery/milestones* URL-t adjuk meg! A szükséges plugin az *XQDT Core* kategóriában található.

Ahhoz, hogy az XQuery moduljainkat futtatni is tudjuk, futtató környezetre van szükségünk. Ehhez töltsük le az *MXQuery* programot [innen](http://mxquery.org/?page_id=7). Válasszuk a lap alján található *Binary Package* opciót. A letöltött zip fájl tartalmazza a szükséges Java programokat, ezeket is csomagoljuk ki. Fontos, hogy az elárési út ne tartalmazzon szóközöket, vagy egyéb speciális karaktert.

Ezek után konfiguráljuk az Eclipse XQuery pluginját a *Window* menü *Preferences* menüpontjában. A bal oldali fában válasszuk az *XQuery* kategóriában található *Interpreters* elemet, és kattintsunk az *Add* gombra. Az interpreter beállításai:

* Interpreter Name: MXQuery
* Interpreter JAR/WAR: `${MXQUERY_PATH}/dist/mxquery.jar`
* Java arguments: `-cp ${MXQUERY_PATH}/dist/mxquery.jar`
* Main class: `ch.ethz.mxquery.cmdline.MXQuery`
* Interpreter arguments: `-f ${query_file} --xquery11Mode --updateMode --updateFiles -b <arguments>`

Így már létrehozhatunk a későbbiekben XQuery projekteket, azon belül pedig XQuery modulokat. A modulokban használhatjuk az *XQuery Update Facility*-t, és a módosított XML fájlokról biztonsági másolat is készül a konfigurációnak köszönhetően.

### JSON

JSON fejlesztéshez a *Help* menü *Install New Software...* menüpontján keresztül telepítsük a *Json Tools* plugint! Ennek URL-je: *https://bitbucket.org/denmiroch/jsontools/src/default/JsonSite*

Ezen kívül az AJAX kérésekhez szükség lehet egy lokális webszerverre, Windows rendszer alatt a [XAMPP](https://www.apachefriends.org) ajánlott.

### SVG

Az SVG formátum XML alapú, de az Eclipse-ben be kell állítani, hogy automatikusan az XML szerkesztővel nyíljanak meg az SVG fájljaink.

Ehhez a *Window* menü *Preferences* menüpontján belül válasszuk ki a bal oldali fából a *General* - *Editors* kategóriában található *File Associations* elemet. A felső *Add...* gombra kattintva adjuk hozzá a listához a *\*.svg* kiterjesztést, majd ezt felül kiválasztva az alsó *Add...* gombbal adjuk hozzá az *XML Editor*-t.

Ezek után válasszuk a bal oldali fából a *General kategóriában található *Content Types* elemet. Felül válasszuk a *Text* alatt található *XML (lllformed)* elemet, alul pedig adjuk hozzá a *\*.svg* kiterjesztést.

### XML-DB

XML-DB-hez az [Oracle Database 11g R2 Express Edition](http://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/index.html) és [Oracle SQL Developer 4](http://www.oracle.com/technetwork/developer-tools/sql-developer/downloads/index.html) programok szükségesek.

### C&#35;

C#-ban való fejlesztéshez a [Visual Studio 2013 Express for Windows Desktop](http://www.microsoft.com/visualstudio/eng/downloads#d-express-windows-desktop) kiadása is elegendő, ennek segítségével egyszerű console alkalmazásokon keresztül tesztelhetjük az XML API-kat.
