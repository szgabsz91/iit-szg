package com.github.szgabsz91.iitszg.xml.lab06.exercise03.steps;

import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class StepB implements IStep {

    private final String albumTitleToRemove;

    public StepB(String albumTitleToRemove) {
        this.albumTitleToRemove = albumTitleToRemove;
    }

    @Override
    public void execute(Document document) {
        NodeList cdElements = document.getElementsByTagName("ns:cd");

        for (int i = 0; i < cdElements.getLength(); i++) {
            Element cdElement = (Element) cdElements.item(i);
            Element titleElement = (Element) cdElement.getElementsByTagName("ns:title").item(0);

            if (titleElement.getTextContent().equals(this.albumTitleToRemove)) {
                Element catalogElement = (Element) cdElement.getParentNode();
                catalogElement.removeChild(cdElement);
                break;
            }
        }
    }

}
