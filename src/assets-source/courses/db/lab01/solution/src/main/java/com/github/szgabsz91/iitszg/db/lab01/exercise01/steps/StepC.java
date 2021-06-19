package com.github.szgabsz91.iitszg.db.lab01.exercise01.steps;

import com.github.szgabsz91.iitszg.db.lab01.exercise01.model.AutoClosableConnection;
import com.github.szgabsz91.iitszg.db.lab01.exercise01.model.Person;
import com.novell.ldap.LDAPAttribute;
import com.novell.ldap.LDAPAttributeSet;
import com.novell.ldap.LDAPEntry;
import com.novell.ldap.LDAPException;

public class StepC implements IStep {

    private final AutoClosableConnection connection;
    private final Person personToCreate;

    public StepC(AutoClosableConnection connection, Person personToCreate) {
        this.connection = connection;
        this.personToCreate = personToCreate;
    }

    @Override
    public AutoClosableConnection execute() throws LDAPException {
        var attributes = new LDAPAttributeSet();
        attributes.add(new LDAPAttribute("objectClass", this.personToCreate.getObjectClass()));
        attributes.add(new LDAPAttribute("cn", this.personToCreate.getCommonName()));
        attributes.add(new LDAPAttribute("givenname", this.personToCreate.getGivenName()));
        attributes.add(new LDAPAttribute("sn", this.personToCreate.getSurname()));
        attributes.add(new LDAPAttribute("description", this.personToCreate.getDescription()));

        LDAPEntry ldapEntry = new LDAPEntry(this.personToCreate.getDistinguishedName(), attributes);
        this.connection.getConnection().add(ldapEntry);

        return this.connection;
    }

}
