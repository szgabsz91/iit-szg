package com.github.szgabsz91.iitszg.xml.lab06.exercise01.steps;

import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class StepB implements IStep {

    private final String groupName;

    public StepB(String groupName) {
        this.groupName = groupName;
    }

    @Override
    public void execute(Document document) {
        NodeList manufacturerElements = document.getElementsByTagName("manufacturer");

        for (int i = 0; i < manufacturerElements.getLength(); i++) {
            Element manufacturerElement = (Element) manufacturerElements.item(i);
            String currentGroupName = manufacturerElement.getAttribute("group");

            if (currentGroupName.equals(this.groupName)) {
                i--;
                Node carElement = manufacturerElement.getParentNode();
                Node carsElement = carElement.getParentNode();
                carsElement.removeChild(carElement);
            }
        }
    }

}
