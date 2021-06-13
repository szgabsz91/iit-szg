declare namespace ns = "NS";

for $cd in fn:doc("catalog.xml")/ns:catalog/ns:cd
where $cd/@id mod 2 ne 0
return
  delete node $cd
