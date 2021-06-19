package com.github.szgabsz91.iitszg.db.lab01.exercise01.steps;

import com.github.szgabsz91.iitszg.db.lab01.exercise01.model.AutoClosableConnection;
import com.novell.ldap.LDAPConnection;
import com.novell.ldap.LDAPException;

import java.nio.charset.StandardCharsets;

public class StepA implements IStep {

    private final String host;
    private final int port;
    private final int ldapVersion;
    private final String distinguishedName;
    private final String password;

    public StepA(String host, int port, int ldapVersion, String distinguishedName, String password) {
        this.host = host;
        this.port = port;
        this.ldapVersion = ldapVersion;
        this.distinguishedName = distinguishedName;
        this.password = password;
    }

    @Override
    public AutoClosableConnection execute() throws LDAPException {
        var connection = new LDAPConnection();
        connection.connect(this.host, this.port);
        connection.bind(this.ldapVersion, this.distinguishedName, this.password.getBytes(StandardCharsets.UTF_8));
        return new AutoClosableConnection(connection);
    }

}
