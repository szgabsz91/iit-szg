For the most technologies in this course, we can use <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a> as our editor, equipped with some extensions to support the different file types.

The below sections detail how to handle the different technologies, as well as any other software that is necessary to be installed on your machine.

## XDM, ER, UML, Relational Diagrams

The different diagrams can be created using any graphical editors, but we can also use <a href="https://graphviz.org" target="_blank">Graphviz</a> that can be installed easily on any popular operating systems. This way we have to write text files with the *.dot* extension that describe the diagrams using a well defined language.

The <a href="https://marketplace.visualstudio.com/items?itemName=joaompinto.vscode-graphviz" target="_blank">Graphviz (dot) language support for Visual Studio Code</a> VSCode extension helps us to easily generate the images from these text files, but we can do this also in command line with the help of the following command:

<pre class="prettyprint">dot $FILENAME -Tpng -O</pre>

## XML, DTD, XML Schema

To edit XML files, let's install the <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml" target="_blank">XML</a> VSCode extension. This extension makes it possible to easily validate XML documents against DTD and XML Schema files.

## Markdown

To preview Markdown files, let's install the <a href="https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced" target="_blank">Markdown Preview Enhanced</a> VSCode extension.

## Java

To execute Java applications, we can use any Java IDEs, for instance

* Visual Studio Code with the <a href="https://marketplace.visualstudio.com/items?itemName=redhat.java" target="_blank">Language Support for Java(TM) by Red Hat</a> extension, or
* <a href="https://www.jetbrains.com/idea" target="_blank">IntelliJ IDEA</a>.

## C#

To execute C# applications, we can use any C# IDEs, for instance

* Visual Studio Code with the <a href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp" target="_blank">C#</a> extension, or
* <a href="https://visualstudio.microsoft.com" target="_blank">Visual Studio</a>.

These C# applications can also be executed on Window, Linux and macOS using <a href="https://dotnet.microsoft.com/download" target="_blank">.NET Core</a> which is a platform independent .NET platform implementation. <a href="https://code.visualstudio.com/docs/languages/dotnet" target="_blank">This tutorial</a> explains how to use Visual Studio Code to write .NET Core applications.

## Vue

The solution of <a href="/courses/xml/labs/9" target="_blank">Lab 9</a> contains a Vue web application. For maximal editor support, let's install the <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a> Visual Studio Code extension.

## XPath

To evaluate XPath expressions, let's install the <a href="https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml" target="_blank">XML Tools</a> VSCode extension that is compatible with XPath 1.0.

For some exercises, we'll need an XPath 2.0 engine that we can find in the <a href="https://www.oxygenxml.com" target="_blank">Oxygen XML Editor</a>.

## XSLT

To evaluate XSLT files, first we need to download the <a href="https://www.saxonica.com/download/java.xml" target="_blank">Saxon-HE</a> Java library. At the time of writing the solutions, the latest version of this library was version 10.

After downloading Saxon, let's install the <a href="https://marketplace.visualstudio.com/items?itemName=WashirePie.vscode-xsl-transform" target="_blank">XSL Transform</a> VSCode extension, and set it up according to its readme so that it can find the above JAR file.
