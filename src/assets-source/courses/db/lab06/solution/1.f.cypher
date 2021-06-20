MATCH (a:ACTOR { name: "Samuel L. Jackson" })
MATCH (a)-[:ACTED_IN]->(m:MOVIE)
RETURN count(DISTINCT m);
