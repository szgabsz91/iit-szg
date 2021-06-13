<ns:manufacturers xmlns:ns="NS">
  {
    let $document := fn:doc("car-database.xml")
    for $manufacturer in fn:distinct-values($document/ns:car-database/ns:cars/ns:car/ns:manufacturer)
    let $count := count($document/ns:car-database/ns:cars/ns:car[ns:manufacturer = $manufacturer])
    return
      element ns:manufacturer {
        attribute manufacturer {
          $manufacturer
        },

        attribute count {
          $count
        }
      }
  }
</ns:manufacturers>
