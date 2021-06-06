package com.github.szgabsz91.iitszg.xml.lab06.exercise01.steps;

import com.github.szgabsz91.iitszg.xml.lab06.interfaces.IStep;
import org.w3c.dom.Document;

import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.nio.file.Path;

public class StepD implements IStep {

    private final Path outputPath;

    public StepD(Path outputPath) {
        this.outputPath = outputPath;
    }

    @Override
    public void execute(Document document) {
        try {
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            transformer.setOutputProperty(OutputKeys.INDENT, "yes");
            transformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "2");

            DOMSource source = new DOMSource(document);
            StreamResult result = new StreamResult(this.outputPath.toFile());

            transformer.transform(source, result);
        }
        catch (TransformerException e) {
            throw new RuntimeException(e);
        }
    }

}
