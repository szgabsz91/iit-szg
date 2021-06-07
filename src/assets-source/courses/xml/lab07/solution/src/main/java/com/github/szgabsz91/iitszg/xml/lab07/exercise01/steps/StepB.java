package com.github.szgabsz91.iitszg.xml.lab07.exercise01.steps;

import com.github.szgabsz91.iitszg.xml.lab07.exercise01.model.Person;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;

import java.io.FileWriter;
import java.io.IOException;

public class StepB {

    private final JAXBContext jaxbContext;

    public StepB(JAXBContext jaxbContext) {
        this.jaxbContext = jaxbContext;
    }

    public void execute(Person person, String xmlFilename) throws JAXBException, IOException {
        Marshaller jaxbMarshaller = jaxbContext.createMarshaller();
        jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        jaxbMarshaller.marshal(person, new FileWriter(xmlFilename));
    }

}
