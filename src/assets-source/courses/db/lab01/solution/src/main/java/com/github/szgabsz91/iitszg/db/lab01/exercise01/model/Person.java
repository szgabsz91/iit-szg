package com.github.szgabsz91.iitszg.db.lab01.exercise01.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Person {

    private final String objectClass;
    private final String parentEntry;
    private final String commonName;
    private final String givenName;
    private final String surname;
    private final String description;

    public String getDistinguishedName() {
        return String.format("cn=%s,%s", this.commonName, this.parentEntry);
    }

}
