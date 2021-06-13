<ns:manufacturers xmlns:ns="NS">
  {
    let $document := fn:doc("car-database.xml")
    for $manufacturer in fn:distinct-values($document/ns:car-database/ns:cars/ns:car/ns:manufacturer)
    return
      element ns:manufacturer {
        attribute manufacturer {
          $manufacturer
        },

        for $car in $document/ns:car-database/ns:cars/ns:car
        where $car/ns:manufacturer/text() eq $manufacturer
        return
          element ns:car {
            text {
              $car/@license-plate-number
            }
          }
      }
  }
</ns:manufacturers>
