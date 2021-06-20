match(movie:MOVIE { title: "The Dark Knight Rises" })
match path = (movie:MOVIE)<-[:SEQUEL*]-(prequel:MOVIE)
with path as path, length(path) as pathLength, max(length(path)) as maxPathLength
where pathLength = maxPathLength
return last(nodes(path))
order by maxPathLength desc
limit 1;
