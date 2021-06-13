<ns:cars xmlns:ns="NS">
  {
    for $car in fn:doc("car-database.xml")/ns:car-database/ns:cars/ns:car
    where $car/ns:price > 10
    order by $car/ns:manufacturer, $car/ns:price descending
    return
      $car
  }
</ns:cars>
