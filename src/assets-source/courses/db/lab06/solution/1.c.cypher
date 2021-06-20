MATCH (d:DIRECTOR { name: "Quentin Tarantino" })
MATCH (d)-[:DIRECTED]->(m:MOVIE)
WHERE m.year >= 2009 and m.year <= 2015
MATCH (a:ACTOR { hasOscar: true })-[:ACTED_IN]->(m)
RETURN a;
