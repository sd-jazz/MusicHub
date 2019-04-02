insert into rooms(user_1,user_2,room_name)
values($1,$2,$3)
returning *;