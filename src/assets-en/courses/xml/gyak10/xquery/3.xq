declare namespace cd = "http://iit.uni-miskolc.hu/xml/catalog";

<years>
{
  let $doc := fn:doc("data/catalog.xml")
  for $year in fn:distinct-values($doc/cd:catalog/cd:cd/cd:year/text())
  order by $year
  return 
    element year {
      attribute year {
        $year
      },
      
      for $cd in $doc/cd:catalog/cd:cd
      let $title := $cd/cd:title/text()
      where $cd/cd:year/text() eq $year
      order by $title
      return
        element cd {
          $title
        }
    }
}
</years>