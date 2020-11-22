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
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void createPersonObjects(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void createListRelationships(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void createTelephoneObjects(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void createOwnsRelationships(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void createManufacturerObjects(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void createManufacturesRelationships(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void selectPeopleWithGooglePhones(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void selectFirstPersonWithApplePhone(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void selectManufacturerWithHighestAveragePrice(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

    private static void selectFirstPersonWithoutMicrosoftPhone(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("TODO: implement");
    }

}
