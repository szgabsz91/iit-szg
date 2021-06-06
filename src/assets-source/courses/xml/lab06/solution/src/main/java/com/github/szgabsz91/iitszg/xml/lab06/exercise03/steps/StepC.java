package com.github.szgabsz91.iitszg.xml.lab06.exercise03.steps;

import com.github.szgabsz91.iitszg.xml.lab06.exercise03.model.Cd;
import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

public class StepC implements IStep {

    private static final String NAMESPACE_URI = "NS";

    private final Cd newCd;

    public StepC(Cd newCd) {
        this.newCd = newCd;
    }

    @Override
    public void execute(Document document) {
        Element catalogElement = document.getDocumentElement();

        // <ns:cd/>
        Element cdElement = document.createElementNS(NAMESPACE_URI, "ns:cd");
        catalogElement.appendChild(cdElement);

        // <ns:cd id="${cd.id}"/>
        Attr idAttribute = document.createAttribute("id");
        idAttribute.setValue(Integer.toString(newCd.getId()));
        cdElement.setAttributeNode(idAttribute);

        // <ns:cd id="${cd.id}">
        //   <ns:title>${cd.title}</ns:title>
        // </ns:cd>
        Element titleElement = document.createElementNS(NAMESPACE_URI, "ns:title");
        titleElement.setTextContent(newCd.getTitle());
        cdElement.appendChild(titleElement);

        // <ns:cd id="${cd.id}">
        //   <ns:title>${cd.title}</ns:title>
        //   <ns:artist>${cd.artist}</ns:artist>
        // </ns:cd>
        Element artistElement = document.createElementNS(NAMESPACE_URI, "ns:artist");
        artistElement.setTextContent(newCd.getArtist());
        cdElement.appendChild(artistElement);

        // <ns:cd id="${cd.id}">
        //   <ns:title>${cd.title}</ns:title>
        //   <ns:artist>${cd.artist}</ns:artist>
        //   <ns:country>${cd.country}</ns:country>
        // </ns:cd>
        Element countryElement = document.createElementNS(NAMESPACE_URI, "ns:country");
        countryElement.setTextContent(newCd.getCountry());
        cdElement.appendChild(countryElement);

        // <ns:cd id="${cd.id}">
        //   <ns:title>${cd.title}</ns:title>
        //   <ns:artist>${cd.artist}</ns:artist>
        //   <ns:country>${cd.country}</ns:country>
        //   <ns:company>${cd.country}</ns:company>
        //   <ns:price>${cd.price}</ns:price>
        // </ns:cd>
        Element priceElement = document.createElementNS(NAMESPACE_URI, "ns:price");
        priceElement.setTextContent(Double.toString(newCd.getPrice()));
        cdElement.appendChild(priceElement);

        // <ns:cd id="${cd.id}">
        //   <ns:title>${cd.title}</ns:title>
        //   <ns:artist>${cd.artist}</ns:artist>
        //   <ns:country>${cd.country}</ns:country>
        //   <ns:company>${cd.country}</ns:company>
        //   <ns:price>${cd.price}</ns:price>
        //   <ns:year>${cd.year}</ns:year>
        // </ns:cd>
        Element yearElement = document.createElementNS(NAMESPACE_URI, "ns:year");
        yearElement.setTextContent(Integer.toString(newCd.getYear()));
        cdElement.appendChild(yearElement);
    }

}
