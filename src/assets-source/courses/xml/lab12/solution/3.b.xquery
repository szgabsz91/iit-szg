declare namespace ns = "NS";

declare function ns:fibonacci($i as xs:integer) as xs:integer
{
  return (
    if ($i eq 0)
    then 0
    else if ($i eq 1)
      then 1
      else ns:fibonacci($i - 1) + ns:fibonacci($i - 2)
  )
};

<ns:results>
  {
    for $i in 0 to 10
    return
      element result {
        attribute index {
          $i
        },

        text {
          ns:fibonacci($i)
        }
      }
  }
</ns:results>
