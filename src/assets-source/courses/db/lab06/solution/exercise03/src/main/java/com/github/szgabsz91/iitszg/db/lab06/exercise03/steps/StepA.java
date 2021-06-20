package com.github.szgabsz91.iitszg.db.lab06.exercise03.steps;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class StepA implements IStep {

    private final Connection connection;

    public StepA(Connection connection) {
        this.connection = connection;
    }

    @Override
    public void execute() throws SQLException {
        System.out.println("Creating the objects and relationships...");
        this.createPeopleObject();
        this.createPersonObjects();
        this.createListRelationships();
        this.createTelephoneObjects();
        this.createOwnsRelationships();
        this.createManufacturerObjects();
        this.createManufacturesRelationships();
    }

    private void createPeopleObject() throws SQLException {
        try (PreparedStatement preparedStatement = this.connection.prepareStatement("CREATE (p:PEOPLE)")) {
            preparedStatement.execute();
        }
    }

    private void createPersonObjects() throws SQLException {
        try (PreparedStatement preparedStatement = this.connection.prepareStatement("CREATE (p:PERSON { name: ? })")) {
            preparedStatement.setString(1, "Peter");
            preparedStatement.execute();

            preparedStatement.setString(1, "Jack");
            preparedStatement.execute();

            preparedStatement.setString(1, "John");
            preparedStatement.execute();
        }
    }

    private void createListRelationships() throws SQLException {
        try (PreparedStatement preparedStatement = this.connection.prepareStatement("MATCH (p1:PEOPLE), (p2:PERSON { name: ? }) CREATE (p1)-[:LIST]->(p2)")) {
            preparedStatement.setString(1, "Peter");
            preparedStatement.execute();
        }

        try (PreparedStatement preparedStatement = this.connection.prepareStatement("MATCH (p1:PERSON { name: ? }), (p2:PERSON { name: ? }) CREATE (p1)-[:LIST]->(p2)")) {
            preparedStatement.setString(1, "Peter");
            preparedStatement.setString(2, "Jack");
            preparedStatement.execute();

            preparedStatement.setString(1, "Jack");
            preparedStatement.setString(2, "John");
            preparedStatement.execute();
        }
    }

    private void createTelephoneObjects() throws SQLException {
        try (PreparedStatement preparedStatement = this.connection.prepareStatement("CREATE (t:TELEPHONE { type: ?, price: ? })")) {
            preparedStatement.setString(1, "Nexus 6P");
            preparedStatement.setInt(2, 499);
            preparedStatement.execute();

            preparedStatement.setString(1, "Lumia 1320");
            preparedStatement.setInt(2, 533);
            preparedStatement.execute();

            preparedStatement.setString(1, "iPhone 6S");
            preparedStatement.setInt(2, 749);
            preparedStatement.execute();

            preparedStatement.setString(1, "Nexus 5X");
            preparedStatement.setInt(2, 299);
            preparedStatement.execute();

            preparedStatement.setString(1, "iPhone 6 Plus");
            preparedStatement.setInt(2, 649);
            preparedStatement.execute();
        }
    }

    private void createOwnsRelationships() throws SQLException {
        try (PreparedStatement preparedStatement = this.connection.prepareStatement("MATCH (p:PERSON { name: ? }), (t:TELEPHONE { type: ? }) CREATE (p)-[:OWNS]->(t)")) {
            preparedStatement.setString(1, "Peter");
            preparedStatement.setString(2, "Nexus 6P");
            preparedStatement.execute();

            preparedStatement.setString(1, "Peter");
            preparedStatement.setString(2, "Lumia 1320");
            preparedStatement.execute();

            preparedStatement.setString(1, "Jack");
            preparedStatement.setString(2, "iPhone 6S");
            preparedStatement.execute();

            preparedStatement.setString(1, "John");
            preparedStatement.setString(2, "Nexus 5X");
            preparedStatement.execute();

            preparedStatement.setString(1, "John");
            preparedStatement.setString(2, "iPhone 6 Plus");
            preparedStatement.execute();
        }
    }

    private void createManufacturerObjects() throws SQLException {
        try (PreparedStatement preparedStatement = this.connection.prepareStatement("CREATE (m:MANUFACTURER { name: ? })")) {
            preparedStatement.setString(1, "Google");
            preparedStatement.execute();

            preparedStatement.setString(1, "Microsoft");
            preparedStatement.execute();

            preparedStatement.setString(1, "Apple");
            preparedStatement.execute();
        }
    }

    private void createManufacturesRelationships() throws SQLException {
        try (PreparedStatement preparedStatement = this.connection.prepareStatement("MATCH (m:MANUFACTURER { name: ? }), (t:TELEPHONE { type: ? }) CREATE (m)-[:MANUFACTURES]->(t)")) {
            preparedStatement.setString(1, "Google");
            preparedStatement.setString(2, "Nexus 6P");
            preparedStatement.execute();

            preparedStatement.setString(1, "Google");
            preparedStatement.setString(2, "Nexus 5X");
            preparedStatement.execute();

            preparedStatement.setString(1, "Apple");
            preparedStatement.setString(2, "iPhone 6 Plus");
            preparedStatement.execute();

            preparedStatement.setString(1, "Apple");
            preparedStatement.setString(2, "iPhone 6S");
            preparedStatement.execute();

            preparedStatement.setString(1, "Microsoft");
            preparedStatement.setString(2, "Lumia 1320");
            preparedStatement.execute();
        }
    }

}
