select xmlquery(
  'for $message in ora:view("Messages")
  where fn:count($message/ROW/CONTENT/message/keywords/keyword) > 0
  return $message/ROW/CONTENT/message/content'
  returning content
) as result from dual;
