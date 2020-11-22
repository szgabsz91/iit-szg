<h3>MongoDB</h3>
  
  <p>Töltsük fel a MongoDB adatbázist a következő adatokkal:</p>
  
  <pre class="prettyprint" data-label="people.json">[{
  firstName: 'Anne',
  lastName: 'Walker',
  salary: 30.0,
  cars: [{
    plateNumber: 'ABC-129',
    manufacturer: 'Trabant',
    price: 0.3
  }]
}, {
  firstName: 'Michael',
  lastName: 'Smith',
  salary: 1000.0,
  cars: [{
    plateNumber: 'ABC-123',
    manufacturer: 'Audi',
    price: 6.8
  }, {
    plateNumber: 'ABC-125',
    manufacturer: 'Mercedes',
    price: 23.0
  }, {
    plateNumber: 'ABC-131',
    manufacturer: 'Mazda',
    price: 3.4
  }]
}, {
  firstName: 'George',
  lastName: 'White',
  salary: 50.0,
  cars: [{
    plateNumber: 'ABC-127',
    manufacturer: 'Renault',
    price: 3.9
  }]
}, {
  firstName: 'Tom',
  lastName: 'Brown',
  salary: 200.0,
  cars: [{
    plateNumber: 'ABC-124',
    manufacturer: 'Honda',
    price: 7.2
  }, {
    plateNumber: 'ABC-130',
    manufacturer: 'Fiat',
    price: 2.9
  }]
}, {
  firstName: 'Emma',
  lastName: 'Jones',
  salary: 150.0,
  cars: [{
    plateNumber: 'ABC-126',
    manufacturer: 'Opel',
    price: 3.1
  }, {
    plateNumber: 'ABC-128',
    manufacturer: 'BMW',
    price: 8.9
  }]
}]</pre>
  
  <ul>
    <li>
	  1. lekérdezés:
      <ul>
	    <li>Válasszuk ki azokat az embereket, akiknek a fizetése >150 vagy &lt;=50.</li>
		<li>Az eredmény tartalmazza a vezetéknevet, keresztnevet és fizetést, de az azonosítót ne.</li>
		<li>Rendezzük az eredményt fizetés szerint csökkenő sorrendbe.</li>
		<li>Válasszuk ki az első elemet.</li>
	  </ul>
	</li>
	<li>
	  2. lekérdezés:
	  <ul>
	    <li>
		  Transzformáljuk az embereket a következő szerkezetre:
		  <ul>
		    <li>name: "${lastName}, ${firstName}"</li>
			<li>cars</li>
		  </ul>
		</li>
		<li>Csoportosítsuk az adathalmazt név szerint, és minden névhez számítsuk ki az adott ember autóinak összárát.</li>
	  </ul>
	</li>
  </ul>
  
  <p>Adatbázis hozzáférés: 193.6.5.41:27017</p>

  ---

  db.dropDatabase()

use db

db.people.insert({
  firstName: 'Anne',
  lastName: 'Walker',
  salary: 30,
  cars: [{
    plateNumber: 'ABC-129',
    manufacturer: 'Trabant',
    price: 0.3
  }]
})

db.people.insert({
  firstName: 'Michael',
  lastName: 'Smith',
  salary: 1000,
  cars: [{
    plateNumber: 'ABC-123',
    manufacturer: 'Audi',
    price: 6.8
  }, {
    plateNumber: 'ABC-125',
    manufacturer: 'Mercedes',
    price: 23
  }, {
    plateNumber: 'ABC-131',
    manufacturer: 'Mazda',
    price: 3.4
  }]
})

db.people.insert({
  firstName: 'George',
  lastName: 'White',
  salary: 50,
  cars: [{
    plateNumber: 'ABC-127',
    manufacturer: 'Renault',
    price: 3.9
  }]
})

db.people.insert({
  firstName: 'Tom',
  lastName: 'Brown',
  salary: 200,
  cars: [{
    plateNumber: 'ABC-124',
    manufacturer: 'Honda',
    price: 7.2
  }, {
    plateNumber: 'ABC-130',
    manufacturer: 'Fiat',
    price: 2.9
  }]
})

db.people.insert({
  firstName: 'Emma',
  lastName: 'Jones',
  salary: 150,
  cars: [{
    plateNumber: 'ABC-126',
    manufacturer: 'Opel',
    price: 3.1
  }, {
    plateNumber: 'ABC-128',
    manufacturer: 'BMW',
    price: 8.9
  }]
})

db.people.find()

db.people
  .find({
    $or: [{
      salary: {
        $gt: 150
      }
    }, {
      salary: {
        $lte: 50
      }
    }]
  }, {
    _id: 0,
    firstName: 1,
    lastName: 1,
    salary: 1
  })
  .sort({
    salary: -1
  })
  .limit(1)

db.people
  .aggregate([{
    $project: {
      _id: 0,
      name: {
        $concat: [
          '$lastName',
          ', ',
          '$firstName'
        ]
      },
      cars: 1
    }
  }, {
    $unwind: '$cars'
  }, {
    $group: {
      _id: '$name',
      totalPrice: {
        $sum: '$cars.price'
      }
    }
  }])

  == MD

  Töltsük fel a MongoDB adatbázist a következő adatokkal:

```json
[{
  firstName: 'Anne',
  lastName: 'Walker',
  salary: 30.0,
  cars: [{
    plateNumber: 'ABC-129',
    manufacturer: 'Trabant',
    price: 0.3
  }]
}, {
  firstName: 'Michael',
  lastName: 'Smith',
  salary: 1000.0,
  cars: [{
    plateNumber: 'ABC-123',
    manufacturer: 'Audi',
    price: 6.8
  }, {
    plateNumber: 'ABC-125',
    manufacturer: 'Mercedes',
    price: 23.0
  }, {
    plateNumber: 'ABC-131',
    manufacturer: 'Mazda',
    price: 3.4
  }]
}, {
  firstName: 'George',
  lastName: 'White',
  salary: 50.0,
  cars: [{
    plateNumber: 'ABC-127',
    manufacturer: 'Renault',
    price: 3.9
  }]
}, {
  firstName: 'Tom',
  lastName: 'Brown',
  salary: 200.0,
  cars: [{
    plateNumber: 'ABC-124',
    manufacturer: 'Honda',
    price: 7.2
  }, {
    plateNumber: 'ABC-130',
    manufacturer: 'Fiat',
    price: 2.9
  }]
}, {
  firstName: 'Emma',
  lastName: 'Jones',
  salary: 150.0,
  cars: [{
    plateNumber: 'ABC-126',
    manufacturer: 'Opel',
    price: 3.1
  }, {
    plateNumber: 'ABC-128',
    manufacturer: 'BMW',
    price: 8.9
  }]
}]
```

1. lekérdezés:
    * Válasszuk ki azokat az embereket, akiknek a fizetése >150 vagy <=50.
    * Az eredmény tartalmazza a vezetéknevet, keresztnevet és fizetést, de az azonosítót ne.
    * Rendezzük az eredményt fizetés szerint csökkenő sorrendbe.
    * Válasszuk ki az első elemet.

2. lekérdezés:
    * Transzformáljuk az embereket a következő szerkezetre:
        * `name`: `"${lastName}, ${firstName}"`
        * `cars`
    * Csoportosítsuk az adathalmazt név szerint, és minden névhez számítsuk ki az adott ember autóinak összárát.

Adatbázis hozzáférés: 193.6.5.41:27017
