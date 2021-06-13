<ns:pairs xmlns:ns="NS">
  {
    let $document := fn:doc("car-database.xml")
    for $car in $document/ns:car-database/ns:cars/ns:car
    for $owner in $document/ns:car-database/ns:owners/ns:owner
    let $licensePlateNumber := $car/@license-plate-number
    let $ownerId := $owner/@id
    return
      element ns:pair {
        element ns:license-plate-number {
          text {
            $licensePlateNumber
          }
        },

        element ns:owner-id {
          text {
            $ownerId
          }
        }
      }
  }
</ns:pairs>
