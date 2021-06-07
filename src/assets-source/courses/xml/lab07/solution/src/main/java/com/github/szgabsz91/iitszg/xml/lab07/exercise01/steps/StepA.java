package com.github.szgabsz91.iitszg.xml.lab07.exercise01.steps;

import com.github.szgabsz91.iitszg.xml.lab07.exercise01.App;
import com.github.szgabsz91.iitszg.xml.lab07.exercise01.model.Person;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;

public class StepA {

    private final JAXBContext jaxbContext;

    public StepA(JAXBContext jaxbContext) {
        this.jaxbContext = jaxbContext;
    }

    public Person execute(String xmlFilename) throws JAXBException {
        Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
        return (Person) jaxbUnmarshaller.unmarshal(App.class.getResourceAsStream(xmlFilename));
    }

}
