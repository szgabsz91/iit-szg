declare namespace xq = "http://iit.uni-miskolc.hu/xml/xquery/functions";

declare function xq:factorial($n as xs:integer) as xs:integer
{
  let $result := 1
  return (
    if ($n eq 0)
    then $result
    else xq:factorial($n - 1) * $n
  )
};

<numbers>
{
  for $i in 0 to 10
  return
    element factorial {
      attribute input {
        $i
      },
      
      text {
        xq:factorial($i)
      }
    }
}
</numbers>