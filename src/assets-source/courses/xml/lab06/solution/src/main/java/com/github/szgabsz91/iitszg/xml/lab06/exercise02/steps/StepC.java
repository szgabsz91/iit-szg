package com.github.szgabsz91.iitszg.xml.lab06.exercise02.steps;

import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class StepC implements IStep {

    @Override
    public void execute(Document document) {
        NodeList ageElements = document.getElementsByTagName("ns:age");
        double averageAge = 0.0;
        int numberOfOwners = 0;

        for (int i = 0; i < ageElements.getLength(); i++) {
            Element ageElement = (Element) ageElements.item(i);
            int age = Integer.parseInt(ageElement.getTextContent());
            averageAge += age;
            numberOfOwners++;
        }

        averageAge /= numberOfOwners;

        System.out.printf("The average age of owners: %.2f\n", averageAge);
    }

}
