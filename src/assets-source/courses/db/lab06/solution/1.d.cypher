MATCH (d:DIRECTOR { name: "Quentin Tarantino" })
MATCH (d)-[:DIRECTED]->(m:MOVIE)
MATCH (a:ACTOR { hasOscar: true })-[:ACTED_IN]->(m)
RETURN count(DISTINCT a);
