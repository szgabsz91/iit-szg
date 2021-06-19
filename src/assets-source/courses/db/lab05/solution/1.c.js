db.people
  .find({
    $and: [{
      salary: {
        $gt: 50
      }
    }, {
      salary: {
        $lte: 150
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
  .limit(1);
