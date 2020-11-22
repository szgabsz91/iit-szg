<eredmeny>
{
  let $doc := fn:doc("data/autok.xml")
  for $auto in $doc/autoDB/auto
  for $tulaj in $doc/autoDB/tulajdonos
  where
    $auto/@tulajdonos eq $tulaj/@id and
    $auto/gyartasi-ev eq "2014"
  order by $auto/marka descending
  return
    element rekord {
      element marka {
        text {
          $auto/marka/text()
        }
      },
      
      element tulajdonos {
        text {
          fn:concat($tulaj/nev/vezeteknev/text(), " ", $tulaj/nev/keresztnev/text())
        }
      }
    }
}
</eredmeny>