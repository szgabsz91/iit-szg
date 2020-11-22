package iit.dbmsc.neo4j;

import java.sql.*;

public class App {

    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        Class.forName("org.neo4j.jdbc.Driver");

        try (Connection connection = DriverManager.getConnection("jdbc:neo4j:mem")) {
            createPeopleObject(connection);
            createPersonObjects(connection);
            createListRelationships(connection);
            createTelephoneObjects(connection);
            createOwnsRelationships(connection);
            createManufacturerObjects(connection);
            createManufacturesRelationships(connection);

            System.out.println("People who own phones manufactured by Google, in alphabetical order:");
            selectPeopleWithGooglePhones(connection);
            System.out.println("==========");

            System.out.println("First person in the list who owns a phone manufactured by Apple:");
            selectFirstPersonWithApplePhone(connection);
            System.out.println("==========");

            System.out.println("Manufacturer with the highest average price:");
            selectManufacturerWithHighestAveragePrice(connection);
            System.out.println("==========");

            System.out.println("First person in the list who does not own a phone manufactured by Microsoft:");
            selectFirstPersonWithoutMicrosoftPhone(connection);
            System.out.println("==========");
        }
    }

    private static void createPeopleObject(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("CREATE (p:PEOPLE)")) {
            preparedStatement.execute();
        }
    }

    private static void createPersonObjects(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("CREATE (p:PERSON { name: {1} })")) {
            preparedStatement.setString(1, "Peter");
            preparedStatement.execute();

            preparedStatement.setString(1, "Jack");
            preparedStatement.execute();

            preparedStatement.setString(1, "John");
            preparedStatement.execute();
        }
    }

    private static void createListRelationships(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("MATCH (p1:PEOPLE), (p2:PERSON { name: {1} }) CREATE (p1)-[:LIST]->(p2)")) {
            preparedStatement.setString(1, "Peter");
            preparedStatement.execute();
        }

        try (PreparedStatement preparedStatement = connection.prepareStatement("MATCH (p1:PERSON { name: {1} }), (p2:PERSON { name: {2} }) CREATE (p1)-[:LIST]->(p2)")) {
            preparedStatement.setString(1, "Peter");
            preparedStatement.setString(2, "Jack");
            preparedStatement.execute();

            preparedStatement.setString(1, "Jack");
            preparedStatement.setString(2, "John");
            preparedStatement.execute();
        }
    }

    private static void createTelephoneObjects(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("CREATE (t:TELEPHONE { type: {1}, price: {2} })")) {
            preparedStatement.setString(1, "Nexus 6P");
            preparedStatement.setInt(2, 499);
            preparedStatement.execute();

            preparedStatement.setString(1, "Microsoft Lumia 1320");
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

    private static void createOwnsRelationships(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("CREATE (p:PERSON { name: {1} }), (t:TELEPHONE { type: {2} }) CREATE (p)-[:OWNS]->(t)")) {
            preparedStatement.setString(1, "Peter");
            preparedStatement.setString(2, "Nexus 6P");
            preparedStatement.execute();

            preparedStatement.setString(1, "Peter");
            preparedStatement.setString(2, "Microsoft Lumia 1320");
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

    private static void createManufacturerObjects(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("CREATE (m:MANUFACTURER { name: {1} })")) {
            preparedStatement.setString(1, "Google");
            preparedStatement.execute();

            preparedStatement.setString(1, "Microsoft");
            preparedStatement.execute();

            preparedStatement.setString(1, "Apple");
            preparedStatement.execute();
        }
    }

    private static void createManufacturesRelationships(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("MATCH (m:MANUFACTURER { name: {1} }), (t:TELEPHONE { type: {2} }) CREATE (m)-[:MANUFACTURES]->(t)")) {
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
            preparedStatement.setString(2, "Microsoft Lumia 1320");
            preparedStatement.execute();
        }
    }

    private static void selectPeopleWithGooglePhones(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("MATCH (m:MANUFACTURER { name: {1} })-[:MANUFACTURES]->(t:TELEPHONE)<-[:OWNS]-(p:PERSON) RETURN p.name AS name ORDER BY name")) {
            preparedStatement.setString(1, "Google");

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    System.out.println(resultSet.getString("name"));
                }
            }
        }
    }

    private static void selectFirstPersonWithApplePhone(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("MATCH (p:PERSON)-[:OWNS]->(t:TELEPHONE)<-[:MANUFACTURES]-(m:MANUFACTURER { name: {1} }) MATCH (people:PEOPLE)-[:LIST*1..]->(p2:PERSON) WHERE p2.name = p.name RETURN p2.name AS name LIMIT 1")) {
            preparedStatement.setString(1, "Apple");

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    System.out.println(resultSet.getString("name"));
                }
            }
        }
    }

    private static void selectManufacturerWithHighestAveragePrice(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("MATCH (m:MANUFACTURER)-[:MANUFACTURES]->(t:TELEPHONE) WITH m AS manufacturer, AVG(t.price) AS averagePrice RETURN manufacturer.name AS manufacturer ORDER BY averagePrice DESC LIMIT 1");
             ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                System.out.println(resultSet.getString("manufacturer"));
            }
        }
    }

    private static void selectFirstPersonWithoutMicrosoftPhone(Connection connection) throws SQLException {
        try (PreparedStatement preparedStatement = connection.prepareStatement("MATCH (p:PERSON)-[:OWNS]->(t:TELEPHONE)<-[:MANUFACTURES]-(m:MANUFACTURER { name: {1} }) MATCH (people:PEOPLE)-[:LIST*1..]->(p2:PERSON) WHERE p.name <> p2.name RETURN p2.name AS name LIMIT 1")) {
            preparedStatement.setString(1, "Microsoft");

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    System.out.println(resultSet.getString("name"));
                }
            }
        }
    }

}
