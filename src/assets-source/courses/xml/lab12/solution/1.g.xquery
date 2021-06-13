<ns:manufacturers xmlns:ns="NS">
  {
    let $document := fn:doc("car-database.xml")
    for $manufacturer in fn:distinct-values($document/ns:car-database/ns:cars/ns:car/ns:manufacturer)
    let $averagePrice := avg($document/ns:car-database/ns:cars/ns:car[ns:manufacturer = $manufacturer]/ns:price/text())
    return
      element ns:manufacturer {
        attribute manufacturer {
          $manufacturer
        },

        attribute average-price {
          $averagePrice
        }
      }
  }
</ns:manufacturers>
