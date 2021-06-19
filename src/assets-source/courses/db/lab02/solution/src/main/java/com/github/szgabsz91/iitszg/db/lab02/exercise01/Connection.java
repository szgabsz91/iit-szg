package com.github.szgabsz91.iitszg.db.lab02.exercise01;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Connection implements AutoCloseable {

    private final EntityManagerFactory entityManagerFactory;
    private final EntityManager entityManager;

    public Connection(String persistenceUnitName) {
        this.entityManagerFactory = Persistence.createEntityManagerFactory(persistenceUnitName);
        this.entityManager = entityManagerFactory.createEntityManager();
    }

    @Override
    public void close() {
        this.entityManager.close();
        this.entityManagerFactory.close();
    }

    public EntityManager getEntityManager() {
        return this.entityManager;
    }

}
