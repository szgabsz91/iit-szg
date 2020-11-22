<gyartok>
{
  let $doc := fn:doc("data/cars.xml")
  for $gyarto in fn:distinct-values($doc/autoDB/autok/auto/gyarto)
  return
    element gyarto {
      attribute gyarto {
        $gyarto
      },
      
      for $auto in $doc/autoDB/autok/auto
      where $auto/gyarto/text() eq $gyarto
      return
        element auto {
          text {
            $auto/@rsz
          }
        }
    }
}
</gyartok>