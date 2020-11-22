package com.gappz.dbmsc.ldapclient;

import com.novell.ldap.*;

import java.nio.charset.StandardCharsets;

public class Connection implements AutoCloseable {

    private final LDAPConnection connection;

    public Connection(String host, int port, int version, String dn, String password) throws LDAPException {
        this.connection = new LDAPConnection();
        this.connection.connect(host, port);
        this.connection.bind(version, dn, password.getBytes(StandardCharsets.UTF_8));
    }

    @Override
    public void close() throws LDAPException {
        if (this.connection != null) {
            this.connection.disconnect();
        }
    }

    public boolean compareAttribute(String dn, String attributeName, String attributeValue) throws LDAPException {
        LDAPAttribute ldapAttribute = new LDAPAttribute(attributeName, attributeValue);
        return this.connection.compare(dn, ldapAttribute);
    }

    public void addEntry(String dn, LDAPAttributeSet ldapAttributeSet) throws LDAPException {
        LDAPEntry ldapEntry = new LDAPEntry(dn, ldapAttributeSet);
        this.connection.add(ldapEntry);
    }

    public void deleteEntry(String dn) throws LDAPException {
        this.connection.delete(dn);
    }

    public String getAttribute(String dn, String attribute) throws LDAPException {
        LDAPEntry ldapEntry = this.connection.read(dn, new String[] { attribute });
        LDAPAttribute ldapAttribute = ldapEntry.getAttribute(attribute);
        return ldapAttribute.getStringValue();
    }

    public void modifyAttribute(String dn, LDAPAttribute attribute) throws LDAPException {
        LDAPModification ldapModification = new LDAPModification(LDAPModification.REPLACE, attribute);
        this.connection.modify(dn, ldapModification);
    }

}
