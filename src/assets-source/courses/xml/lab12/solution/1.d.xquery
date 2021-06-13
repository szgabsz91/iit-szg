<ns:owners xmlns:ns="NS">
  {
    for $owner in fn:doc("car-database.xml")/ns:car-database/ns:owners/ns:owner
    let $id := $owner/@id
    let $firstName := $owner/ns:first-name
    let $lastName := $owner/ns:last-name
    where fn:count($owner/ns:owned-cars/ns:owned-car) eq 0
    return
      element ns:owner {
        attribute id {
          $id
        },

        element ns:first-name {
          text {
            $firstName
          }
        },

        element ns:last-name {
          text {
            $lastName
          }
        }
      }
  }
</ns:owners>
