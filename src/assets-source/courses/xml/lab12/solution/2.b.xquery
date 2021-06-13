declare namespace ns = "NS";

for $cd in fn:doc("catalog.xml")/ns:catalog/ns:cd
return
  rename node $cd as "ns:album"
