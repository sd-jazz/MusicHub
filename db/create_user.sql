insert into users(auth0_id, profile_name, email, picture)
values($1, $3, $2, $4) returning *;