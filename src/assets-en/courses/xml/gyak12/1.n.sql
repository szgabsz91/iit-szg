select xmlquery(
  'for $m in ora:view("Messages")
  where fn:count($m/ROW/CONTENT/message/keywords/keyword) > 0
  return $m/ROW/CONTENT/message/text'
  returning content
) from dual;