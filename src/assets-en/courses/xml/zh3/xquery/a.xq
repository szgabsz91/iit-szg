<eredmeny>
{
  let $doc := fn:doc("data/hallgatok.xml")
  for $hallgato in $doc/hallgatoDB/hallgato
  for $szulo in $doc/hallgatoDB/szulo
  where
    $hallgato/@anyja eq $szulo/@id and
    $hallgato/szuletesi-ev eq "1991"
  order by $szulo/nev/vezeteknev
  return
    element rekord {
      element hallgato-neve {
        text {
          $hallgato/nev/text()
        }
      },
      
      element anyja-neve {
        text {
          fn:concat($szulo/nev/vezeteknev/text(), " ", $szulo/nev/keresztnev/text())
        }
      }
    }
}
</eredmeny>