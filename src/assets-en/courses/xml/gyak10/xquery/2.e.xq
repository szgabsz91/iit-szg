<gyartok>
{
  let $doc := fn:doc("data/cars.xml")
  for $gyarto in fn:distinct-values($doc/autoDB/autok/auto/gyarto)
  return
    element gyarto {
      attribute gyarto {
        $gyarto
      },
      
      attribute db {
        fn:count(
          for $auto in $doc/autoDB/autok/auto
          where $auto/gyarto/text() eq $gyarto
          return $auto
        )
      }
    }
}
</gyartok>

(:

vagy dupla ciklus nélkül:

<gyartok>
{
  let $doc := fn:doc("data/cars.xml")
  for $gyarto in fn:distinct-values($doc/autoDB/autok/auto/gyarto)
  let $db := count($doc/autoDB/autok/auto[gyarto = $gyarto])
  return
    element gyarto {
      attribute gyarto {
        $gyarto
      },
      
      attribute db {
        $db
      }
    }
}
</gyartok>

:)