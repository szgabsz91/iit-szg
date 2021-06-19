package com.github.szgabsz91.iitszg.db.lab01.exercise01.model;

import com.novell.ldap.LDAPConnection;
import com.novell.ldap.LDAPException;

public class AutoClosableConnection implements AutoCloseable {

    private final LDAPConnection connection;

    public AutoClosableConnection(LDAPConnection connection) {
        this.connection = connection;
    }

    public LDAPConnection getConnection() {
        return connection;
    }

    @Override
    public void close() throws LDAPException {
        this.connection.disconnect();
    }

}
