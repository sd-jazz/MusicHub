insert into users(auth0_id, profile_name, email, picture)
values($1, $2, $3, $4) returning *;