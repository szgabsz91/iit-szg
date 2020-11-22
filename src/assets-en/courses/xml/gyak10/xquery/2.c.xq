<tulajdonosok>
{
  for $tulaj in fn:doc("data/cars.xml")/autoDB/tulajdonosok/tulajdonos
  let $id := $tulaj/@id
  let $vezeteknev := $tulaj/@vezeteknev
  let $keresztnev := $tulaj/@keresztnev
  where fn:count($tulaj/auto) eq 0
  return
    element tulajdonos {
      attribute id {
        $id
      },
      
      element vezeteknev {
        text {
          $vezeteknev
        }
      },
      
      element keresztnev {
        text {
          $keresztnev
        }
      }
    }
}
</tulajdonosok>