db.createCollection('people');

db.people.insert({
  firstName: 'Anne',
  lastName: 'Walker',
  salary: 30,
  cars: [{
    plateNumber: 'AB12 CDK',
    manufacturer: 'Kia',
    model: 'EV6',
    price: 13.5
  }]
});

db.people.insert({
  firstName: 'Michael',
  lastName: 'Smith',
  salary: 1000,
  cars: [{
    plateNumber: 'AB12 CDE',
    manufacturer: 'Tesla',
    model: 'Model 3',
    price: 13.5
  }, {
    plateNumber: 'AB12 CDG',
    manufacturer: 'Kia',
    model: 'e-Niro',
    price: 8.9
  }, {
    plateNumber: 'AB12 CDM',
    manufacturer: 'Hyundai',
    model: 'Kona',
    price: 7.5
  }]
});

db.people.insert({
  firstName: 'George',
  lastName: 'White',
  salary: 50,
  cars: [{
    plateNumber: 'AB12 CDI',
    manufacturer: 'Hyundai',
    model: 'Ioniq',
    price: 8.5
  }]
});

db.people.insert({
  firstName: 'Tom',
  lastName: 'Brown',
  salary: 200,
  cars: [{
    plateNumber: 'AB12 CDF',
    manufacturer: 'Volkswagen',
    model: 'ID.4',
    price: 16.8
  }, {
    plateNumber: 'AB12 CDL',
    manufacturer: 'Skoda',
    model: 'ENYAQ',
    price: 12.6
  }]
});

db.people.insert({
  firstName: 'Emma',
  lastName: 'Jones',
  salary: 150,
  cars: [{
    plateNumber: 'AB12 CDH',
    manufacturer: 'Volkswagen',
    model: 'ID.3',
    price: 8.3
  }, {
    plateNumber: 'AB12 CDJ',
    manufacturer: 'Hyundai',
    model: 'IONIQ 5',
    price: 13.5
  }]
});
