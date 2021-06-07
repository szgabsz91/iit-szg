package com.github.szgabsz91.iitszg.xml.lab07.exercise01;

import com.github.szgabsz91.iitszg.xml.lab07.exercise01.model.Person;
import com.github.szgabsz91.iitszg.xml.lab07.exercise01.steps.StepA;
import com.github.szgabsz91.iitszg.xml.lab07.exercise01.steps.StepB;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;

import java.io.IOException;

public class App {

    private static final String DOCUMENT_FILENAME = "person.xml";

    public static void main(String[] args) throws JAXBException, IOException {
        JAXBContext jaxbContext = JAXBContext.newInstance(Person.class);
        Person person = new StepA(jaxbContext).execute("/" + DOCUMENT_FILENAME);
        new StepB(jaxbContext).execute(person, "build/" + DOCUMENT_FILENAME);
    }

}
