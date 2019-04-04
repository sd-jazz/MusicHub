insert into rooms(user_1,user_2,room_name, listing_id, listing_name, user1_name, user2_name)
values($1,$2,$3,$4,$5,$6,$7)
returning *;