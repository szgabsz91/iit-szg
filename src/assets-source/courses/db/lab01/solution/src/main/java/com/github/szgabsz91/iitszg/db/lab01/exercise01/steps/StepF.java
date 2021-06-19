package com.github.szgabsz91.iitszg.db.lab01.exercise01.steps;

import com.github.szgabsz91.iitszg.db.lab01.exercise01.model.AutoClosableConnection;
import com.novell.ldap.LDAPException;

public class StepF implements IStep {

    private final AutoClosableConnection connection;
    private final String distinguishedNameToDelete;

    public StepF(AutoClosableConnection connection, String distinguishedNameToDelete) {
        this.connection = connection;
        this.distinguishedNameToDelete = distinguishedNameToDelete;
    }

    @Override
    public AutoClosableConnection execute() throws LDAPException {
        this.connection.getConnection().delete(this.distinguishedNameToDelete);

        return this.connection;
    }

}
