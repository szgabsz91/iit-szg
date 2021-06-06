package com.github.szgabsz91.iitszg.xml.lab06.exercise01.steps;

import com.github.szgabsz91.iitszg.xml.lab06.exercise01.model.Car;
import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Text;

public class StepC implements IStep {

    private static final String NAMESPACE_URI = "NS";

    private final Car car;

    public StepC(Car car) {
        this.car = car;
    }

    @Override
    public void execute(Document document) {
        Element carsElement = document.getDocumentElement();

        // <car/>
        Element carElement = document.createElementNS(NAMESPACE_URI, "car");
        carsElement.appendChild(carElement);

        // <car id="${car.id}"/>
        Attr idAttribute = document.createAttribute("id");
        idAttribute.setValue(Integer.toString(car.getId()));
        carElement.setAttributeNode(idAttribute);

        // <car id="${car.id}">
        //   <manufacturer>${car.manufacturer.name}</manufacturer>
        // </car>
        Element manufacturerElement = document.createElementNS(NAMESPACE_URI, "manufacturer");
        Text manufacturerText = document.createTextNode(car.getManufacturer().getName());
        manufacturerElement.appendChild(manufacturerText);
        carElement.appendChild(manufacturerElement);

        // <car id="${car.id}">
        //   <manufacturer group="${car.manufacturer.group}">${car.manufacturer.name}</manufacturer>
        // </car>
        Attr groupAttribute = document.createAttribute("group");
        groupAttribute.setValue(car.getManufacturer().getGroup());
        manufacturerElement.setAttributeNode(groupAttribute);

        // <car id="${car.id}">
        //   <manufacturer group="${car.manufacturer.group}">${car.manufacturer.name}</manufacturer>
        //   <model>${car.model}</model>
        // </car>
        Element modelElement = document.createElementNS(NAMESPACE_URI, "model");
        Text modelText = document.createTextNode(car.getModel());
        modelElement.appendChild(modelText);
        carElement.appendChild(modelElement);

        // <car id="${car.id}">
        //   <manufacturer group="${car.manufacturer.group}">${car.manufacturer.name}</manufacturer>
        //   <model>${car.model}</model>
        //   <price>${car.price}</price>
        // </car>
        Element priceElement = document.createElementNS(NAMESPACE_URI, "price");
        Text priceText = document.createTextNode(Double.toString(car.getPrice()));
        priceElement.appendChild(priceText);
        carElement.appendChild(priceElement);
    }

}
