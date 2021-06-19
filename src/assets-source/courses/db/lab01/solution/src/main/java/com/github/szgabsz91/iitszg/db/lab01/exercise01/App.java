package com.github.szgabsz91.iitszg.db.lab01.exercise01;

import com.github.szgabsz91.iitszg.db.lab01.exercise01.model.AutoClosableConnection;
import com.github.szgabsz91.iitszg.db.lab01.exercise01.model.Person;
import com.github.szgabsz91.iitszg.db.lab01.exercise01.steps.*;
import com.novell.ldap.LDAPConnection;
import com.novell.ldap.LDAPException;

public class App {

    private static final String HOST = "localhost";
    private static final int PORT = 389;
    private static final int LDAP_VERSION = LDAPConnection.LDAP_V3;
    private static final String DN = "cn=admin,dc=example,dc=org";
    private static final String PASSWORD_CORRECT = "password";
    private static final String PASSWORD_INCORRECT = "incorrect";
    private static final Person PERSON_TO_CREATE = new Person("inetOrgPerson", "dc=example,dc=org", "tanderson", "thomas", "anderson", "Neo");
    private static final String NEW_DESCRIPTION = "The One";

    public static void main(String[] args) throws LDAPException {
        try (AutoClosableConnection connection = new StepA(HOST, PORT, LDAP_VERSION, DN, PASSWORD_CORRECT).execute()) {
            new StepC(connection, PERSON_TO_CREATE).execute();
            new StepD(connection, PERSON_TO_CREATE.getDistinguishedName(), NEW_DESCRIPTION).execute();
            new StepE(connection, PERSON_TO_CREATE.getDistinguishedName()).execute();
            new StepF(connection, PERSON_TO_CREATE.getDistinguishedName()).execute();
        }

        try (AutoClosableConnection connection = new StepA(HOST, PORT, LDAP_VERSION, DN, PASSWORD_INCORRECT).execute()) {
            System.out.println("This line won't be reached");
        }
        catch (LDAPException e) {
            System.err.printf("Could not bind to admin with password \"%s\"\n", PASSWORD_INCORRECT);
            e.printStackTrace();
        }
    }

}
