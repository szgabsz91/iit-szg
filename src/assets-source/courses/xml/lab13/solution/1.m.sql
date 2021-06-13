select xmlquery(
  'for $message in ora:view("Messages")
  where $message/ROW/CONTENT/message/subject = "XML"
  return $message/ROW/CONTENT/message/content'
  returning content
) as result from dual;
