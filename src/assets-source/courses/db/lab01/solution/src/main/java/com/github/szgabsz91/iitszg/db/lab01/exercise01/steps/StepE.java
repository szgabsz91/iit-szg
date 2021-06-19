package com.github.szgabsz91.iitszg.db.lab01.exercise01.steps;

import com.github.szgabsz91.iitszg.db.lab01.exercise01.model.AutoClosableConnection;
import com.novell.ldap.LDAPAttribute;
import com.novell.ldap.LDAPException;

public class StepE implements IStep {

    private final AutoClosableConnection connection;
    private final String distinguishedNameToRead;

    public StepE(AutoClosableConnection connection, String distinguishedNameToRead) {
        this.connection = connection;
        this.distinguishedNameToRead = distinguishedNameToRead;
    }

    @Override
    public AutoClosableConnection execute() throws LDAPException {
        var attributes = this.connection.getConnection().read(this.distinguishedNameToRead).getAttributeSet();

        for (var attributeObject : attributes) {
            LDAPAttribute attribute = (LDAPAttribute) attributeObject;
            System.out.printf("%s = %s\n", attribute.getName(), attribute.getStringValue());
        }

        return this.connection;
    }

}
