MATCH (m:MOVIE { title: "Django Unchained" })
MATCH (m)<-[:DIRECTED]-(d:DIRECTOR { hasOscar: true })
MATCH (m)<-[:ACTED_IN]-(a:ACTOR { hasOscar: true })
RETURN count(DISTINCT d) + count(DISTINCT a);
