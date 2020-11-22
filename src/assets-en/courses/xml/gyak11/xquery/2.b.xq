declare namespace cd = "http://iit.uni-miskolc.hu/xml/catalog";

for $cd in fn:doc("data/catalog.xml")/cd:catalog/cd:cd
where $cd/@id mod 2 ne 0
return 
  delete node $cd