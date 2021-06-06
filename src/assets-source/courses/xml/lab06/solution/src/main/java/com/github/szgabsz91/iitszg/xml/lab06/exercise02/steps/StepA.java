package com.github.szgabsz91.iitszg.xml.lab06.exercise02.steps;

import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

public class StepA implements IStep {

    @Override
    public void execute(Document document) {
        NodeList carElements = document.getElementsByTagName("ns:car");
        int numberOfCarElements = carElements.getLength();
        System.out.printf("The number of cars in the XML document: %d\n", numberOfCarElements);
    }

}
