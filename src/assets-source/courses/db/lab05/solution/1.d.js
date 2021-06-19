db.people
  .aggregate([{
    $project: {
      _id: 0,
      fullName: {
        $concat: [
          '$firstName',
          ' ',
          '$lastName'
        ]
      },
      cars: 1
    }
  }, {
    $unwind: '$cars'
  }, {
    $group: {
      _id: '$fullName',
      totalPrice: {
        $sum: '$cars.price'
      }
    }
  }]);
