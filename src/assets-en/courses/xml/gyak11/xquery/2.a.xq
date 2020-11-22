declare namespace cd = "http://iit.uni-miskolc.hu/xml/catalog";

for $cd in fn:doc("data/catalog.xml")/cd:catalog/cd:cd
return 
  rename node $cd as "cd:album"