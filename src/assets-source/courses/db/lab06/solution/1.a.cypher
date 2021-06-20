create (:DIRECTOR { name: "Quentin Tarantino", hasOscar: true });

create (:ACTOR { name: "Samuel L. Jackson", hasOscar: false });
create (:ACTOR { name: "Kurt Russell", hasOscar: false });
create (:ACTOR { name: "Tim Roth", hasOscar: false });
create (:ACTOR { name: "Jamie Foxx", hasOscar: true });
create (:ACTOR { name: "Christoph Waltz", hasOscar: true });
create (:ACTOR { name: "Leonardo DiCaprio", hasOscar: true });
create (:ACTOR { name: "Brad Pitt", hasOscar: true });
create (:ACTOR { name: "Michael Fassbender", hasOscar: false });
create (:ACTOR { name: "John Travolta", hasOscar: false });

create (:MOVIE { title: "The Hateful Eight", year: 2015 });
create (:MOVIE { title: "Django Unchained", year: 2012 });
create (:MOVIE { title: "Inglorious Basterds", year: 2009 });
create (:MOVIE { title: "Pulp Fiction", year: 1994 });

MATCH (d:DIRECTOR { name: "Quentin Tarantino" }), (m:MOVIE { title: "The Hateful Eight" }) CREATE (d)-[:DIRECTED]->(m);
MATCH (d:DIRECTOR { name: "Quentin Tarantino" }), (m:MOVIE { title: "Django Unchained" }) CREATE (d)-[:DIRECTED]->(m);
MATCH (d:DIRECTOR { name: "Quentin Tarantino" }), (m:MOVIE { title: "Inglorious Basterds" }) CREATE (d)-[:DIRECTED]->(m);
MATCH (d:DIRECTOR { name: "Quentin Tarantino" }), (m:MOVIE { title: "Pulp Fiction" }) CREATE (d)-[:DIRECTED]->(m);

MATCH (a:ACTOR { name: "Samuel L. Jackson" }), (m:MOVIE { title: "The Hateful Eight" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Kurt Russell" }), (m:MOVIE { title: "The Hateful Eight" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Tim Roth" }), (m:MOVIE { title: "The Hateful Eight" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Jamie Foxx" }), (m:MOVIE { title: "Django Unchained" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Christoph Waltz" }), (m:MOVIE { title: "Django Unchained" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Leonardo DiCaprio" }), (m:MOVIE { title: "Django Unchained" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Samuel L. Jackson" }), (m:MOVIE { title: "Django Unchained" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Brad Pitt" }), (m:MOVIE { title: "Inglorious Basterds" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Christoph Waltz" }), (m:MOVIE { title: "Inglorious Basterds" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Michael Fassbender" }), (m:MOVIE { title: "Inglorious Basterds" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Tim Roth" }), (m:MOVIE { title: "Pulp Fiction" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "John Travolta" }), (m:MOVIE { title: "Pulp Fiction" }) CREATE (a)-[:ACTED_IN]->(m);
MATCH (a:ACTOR { name: "Samuel L. Jackson" }), (m:MOVIE { title: "Pulp Fiction" }) CREATE (a)-[:ACTED_IN]->(m);
