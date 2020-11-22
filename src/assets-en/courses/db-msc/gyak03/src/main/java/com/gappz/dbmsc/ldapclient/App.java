package com.gappz.dbmsc.ldapclient;

import com.novell.ldap.LDAPAttribute;
import com.novell.ldap.LDAPAttributeSet;
import com.novell.ldap.LDAPConnection;
import com.novell.ldap.LDAPException;

public class App {

    private static final String HOST = "localhost";
    private static final int PORT = 12345;
    private static final int VERSION = LDAPConnection.LDAP_V3;
    private static final String DN = "cn=szabo84,ou=ev2016,ou=meinfo,dc=maxcrc,dc=com";
    private static final String PASSWORD = "szabo84";

    private static final String INCORRECT_PASSWORD = "xyz";

    private static final String NEW_DN = "cn=newentry,".concat(DN);
    private static final String NEW_OBJECT_CLASS = "Person";
    private static final String NEW_SN = "SN";
    private static final String NEW_DESCRIPTION = "Description";

    private static final String MODIFIED_SN = "New SN";

    public static void main(String[] args) {
        try (Connection connection = new Connection(HOST, PORT, VERSION, DN, PASSWORD)) {
            // Checking password
            System.out.println("Checking password...");
            checkPassword(connection, PASSWORD);
            checkPassword(connection, INCORRECT_PASSWORD);
            System.out.println("Done");

            // Adding and deleting an entry
            System.out.print("Adding new entry... ");
            connection.addEntry(NEW_DN, createAttributeSet(NEW_OBJECT_CLASS, NEW_SN, NEW_DESCRIPTION));
            connection.deleteEntry(NEW_DN);
            System.out.println("Done");

            // Modifying and revering the surname
            System.out.print("Modifying SN... ");
            String originalSN = connection.getAttribute(DN, "sn");
            connection.modifyAttribute(DN, new LDAPAttribute("sn", MODIFIED_SN));
            connection.modifyAttribute(DN, new LDAPAttribute("sn", originalSN));
            System.out.println("Done");
        }
        catch (LDAPException e) {
            e.printStackTrace();
        }
    }

    private static void checkPassword(Connection connection, String password) throws LDAPException {
        if (connection.compareAttribute(DN, "userPassword", password)) {
            System.out.printf("\tPassword %s is correct%n", password);
        }
        else {
            System.out.printf("\tPassword %s is incorrect%n", password);
        }
    }

    private static LDAPAttributeSet createAttributeSet(String objectClass, String sn, String description) {
        LDAPAttributeSet ldapAttributeSet = new LDAPAttributeSet();
        ldapAttributeSet.add(new LDAPAttribute("objectClass", objectClass));
        ldapAttributeSet.add(new LDAPAttribute("sn", sn));
        ldapAttributeSet.add(new LDAPAttribute("description", description));
        return ldapAttributeSet;
    }

}
