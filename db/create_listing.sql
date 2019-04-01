insert into listings(user_id, listing_name, description, time_stamp, type, tags, price, sold, condition, images)
values($1, $2, $3, $4, $5, $6, $7, false, $8, $9) returning *;