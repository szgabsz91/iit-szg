declare namespace xq = "http://iit.uni-miskolc.hu/xml/xquery/functions";

declare function xq:fibonacci($n as xs:integer) as xs:integer
{
  let $result := 1
  return (
    if ($n eq 0)
    then 0
    else if ($n eq 1)
      then 1
      else xq:fibonacci($n - 1) + xq:fibonacci($n - 2)
  )
};

<numbers>
{
  for $i in 0 to 10
  return
    element fibonacci {
      attribute index {
        $i
      },
      
      text {
        xq:fibonacci($i)
      }
    }
}
</numbers>