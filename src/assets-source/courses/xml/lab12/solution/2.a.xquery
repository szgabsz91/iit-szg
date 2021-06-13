<ns:years xmlns:ns="NS">
  {
    let $document := fn:doc("catalog.xml")
    for $year in fn:distinct-values($document/ns:catalog/ns:cd/ns:year/text())
    order by $year
    return
      element ns:year {
        attribute year {
          $year
        },

        for $cd in $document/ns:catalog/ns:cd
        let $title := $cd/ns:title/text()
        where $cd/ns:year/text() eq $year
        order by $title
        return
          element ns:cd {
            $title
          }
      }
  }
</ns:years>
