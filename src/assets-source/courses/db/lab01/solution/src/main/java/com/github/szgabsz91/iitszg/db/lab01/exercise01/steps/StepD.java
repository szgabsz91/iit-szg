package com.github.szgabsz91.iitszg.db.lab01.exercise01.steps;

import com.github.szgabsz91.iitszg.db.lab01.exercise01.model.AutoClosableConnection;
import com.novell.ldap.LDAPAttribute;
import com.novell.ldap.LDAPException;
import com.novell.ldap.LDAPModification;

public class StepD implements IStep {

    private final AutoClosableConnection connection;
    private final String distinguishedNameToModify;
    private final String newDescription;

    public StepD(AutoClosableConnection connection, String distinguishedNameToModify, String newDescription) {
        this.connection = connection;
        this.distinguishedNameToModify = distinguishedNameToModify;
        this.newDescription = newDescription;
    }

    @Override
    public AutoClosableConnection execute() throws LDAPException {
        LDAPModification modification = new LDAPModification(LDAPModification.REPLACE, new LDAPAttribute("description", this.newDescription));
        connection.getConnection().modify(this.distinguishedNameToModify, modification);

        return this.connection;
    }

}
