For the most technologies in this course, we can use <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a> as our editor, equipped with some extensions to support the different file types.

The below sections detail how to handle the different technologies, as well as any other software that is necessary to be installed on your machine.

## Java

To execute Java applications, we can use any Java IDEs, for instance

* Visual Studio Code with the <a href="https://marketplace.visualstudio.com/items?itemName=redhat.java" target="_blank">Language Support for Java(TM) by Red Hat</a> extension, or
* <a href="https://www.jetbrains.com/idea" target="_blank">IntelliJ IDEA</a>.

## LDAP

The following command starts an <a href="https://www.openldap.org" target="_blank">OpenLDAP</a> server with a preconfigured user (*admin:password*) in a <a href="https://www.docker.com" target="_blank">Docker</a> container using the <a href="https://github.com/osixia/docker-openldap" target="_blank">docker-openldap</a> project, and opens the necessary ports for the host machine:

<pre class="prettyprint">docker run \
  -p 389:389 \
  -p 636:636 \
  --env LDAP_READONLY_USER=true \
  --env LDAP_READONLY_USER_USERNAME=admin \
  --env LDAP_READONLY_USER_PASSWORD=password \
  --detach \
  osixia/openldap:1.5.0</pre>

After the server starts, we can connect to the OpenLDAP server on localhost.

## Oracle Database

For labs that require the Oracle Database, we need to install <a href="https://www.oracle.com/database/technologies/xe-downloads.html" target="_blank">Oracle Database XE</a>. At the time of writing the solutions, I used the 18c XE version.

For the client, we can use <a href="https://www.oracle.com/tools/downloads/sqldev-downloads.html" target="_blank">Oracle SQL Developer</a> or Visual Studio Code with the <a href="https://marketplace.visualstudio.com/items?itemName=Oracle.oracledevtools" target="_blank">Oracle Developer Tools for VS Code</a> extension.

## C#

To execute C# applications, we can use any C# IDEs, for instance

* Visual Studio Code with the <a href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp" target="_blank">C#</a> extension, or
* <a href="https://visualstudio.microsoft.com" target="_blank">Visual Studio</a>.

These C# applications can also be executed on Window, Linux and macOS using <a href="https://dotnet.microsoft.com/download" target="_blank">.NET Core</a> which is a platform independent .NET platform implementation. <a href="https://code.visualstudio.com/docs/languages/dotnet" target="_blank">This tutorial</a> explains how to use Visual Studio Code to write .NET Core applications.

## MongoDB

The following command starts a <a href="https://www.mongodb.com" target="_blank">MongoDB</a> database in a <a href="https://www.docker.com" target="_blank">Docker</a> container using the official <a href="https://hub.docker.com/_/mongo" target="_blank">mongo Docker image</a>, and opens the necessary port for the host machine:

<pre class="prettyprint">docker run -p 27017:27017 --detach mongo:4.4.6</pre>

To interact with the database, we can use the <a href="https://www.mongodb.com/try/download/shell" target="_blank">MongoDB Shell</a>, or if we need a graphical user interface, we can download <a href="https://robomongo.org" target="_blank">Robo 3T</a>.

## Neo4j

To use the <a href="https://neo4j.com" target="_blank">Neo4j database</a>, we can download the <a href="https://neo4j.com/download" target="_blank">Neo4j Desktop</a> application that makes it possible to create and manage databases from a graphical user interface. The integrated Neo4j Browser can also visualize the results of our Cypher queries.

If we want to write Cypher queries in VSCode, we can also download the <a href="https://marketplace.visualstudio.com/items?itemName=jakeboone02.cypher-query-language" target="_blank">Cypher Query Language</a> VSCode extension.

## Ontologies

To manage ontologies, let's download the <a href="https://protege.stanford.edu" target="_blank">Protége</a> tool.
