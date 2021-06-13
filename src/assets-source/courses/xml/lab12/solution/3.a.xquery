declare namespace ns = "NS";

declare function ns:factorial($n as xs:integer) as xs:integer
{
  return (
    if ($n eq 0)
    then 1
    else ns:factorial($n - 1) * $n
  )
};

<ns:results>
  {
    for $i in 0 to 10
    return
      element ns:result {
        attribute input {
          $i
        },

        text {
          ns:factorial($i)
        }
      }
  }
</ns:results>
