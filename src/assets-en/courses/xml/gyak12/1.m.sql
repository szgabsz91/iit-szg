select xmlquery(
  'for $m in ora:view("Messages")
  where $m/ROW/CONTENT/message/subject = "XML"
  return $m/ROW/CONTENT/message/text'
  returning content
) from dual;