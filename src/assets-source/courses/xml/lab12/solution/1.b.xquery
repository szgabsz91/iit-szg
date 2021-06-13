<ns:owners xmlns:ns="NS">
  {
    for $owner in fn:doc("car-database.xml")/ns:car-database/ns:owners/ns:owner
    let $fullName := fn:concat($owner/ns:first-name, " ", $owner/ns:last-name)
    return
      <ns:owner>{$fullName}</ns:owner>
  }
</ns:owners>
