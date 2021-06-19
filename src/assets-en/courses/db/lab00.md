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
  --name ldap-container \
  --env LDAP_READONLY_USER=true \
  --env LDAP_READONLY_USER_USERNAME=admin \
  --env LDAP_READONLY_USER_PASSWORD=password \
  --detach \
  osixia/openldap:1.5.0</pre>

After the server starts, we can connect to the OpenLDAP server on localhost.
