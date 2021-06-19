package com.github.szgabsz91.iitszg.db.lab01.exercise01.steps;

import com.github.szgabsz91.iitszg.db.lab01.exercise01.model.AutoClosableConnection;
import com.novell.ldap.LDAPException;

public interface IStep {

    AutoClosableConnection execute() throws LDAPException;

}
