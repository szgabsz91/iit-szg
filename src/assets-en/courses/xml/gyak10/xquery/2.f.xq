<gyartok>
{
  let $doc := fn:doc("data/cars.xml")
  for $gyarto in fn:distinct-values($doc/autoDB/autok/auto/gyarto)
  return
    element gyarto {
      attribute gyarto {
        $gyarto
      },
      
      attribute avg {
        fn:avg(
          for $auto in $doc/autoDB/autok/auto
          where $auto/gyarto/text() eq $gyarto
          return number($auto/ar/text())
        )
      }
    }
}
</gyartok>

(:

vagy duplac ciklus nélkül:

<gyartok>
{
  let $doc := fn:doc("data/cars.xml")
  for $gyarto in fn:distinct-values($doc/autoDB/autok/auto/gyarto)
  let $atlag := avg($doc/autoDB/autok/auto[gyarto = $gyarto]/ar)
  return
    element gyarto {
      attribute gyarto {
        $gyarto
      },
      
      attribute avg {
        $atlag
      }
    }
}
</gyartok>

:)