create (:MOVIE { title: "Batman Begins", year: 2005 });
create (:MOVIE { title: "The Dark Knight", year: 2008 });
create (:MOVIE { title: "The Dark Knight Rises", year: 2012 });

MATCH (m1:MOVIE { title: "Batman Begins" }) MATCH (m2:MOVIE { title: "The Dark Knight" }) CREATE (m1)-[:SEQUEL]->(m2);
MATCH (m1:MOVIE { title: "The Dark Knight" }) MATCH (m2:MOVIE { title: "The Dark Knight Rises" }) CREATE (m1)-[:SEQUEL]->(m2);
