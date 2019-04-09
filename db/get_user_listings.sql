select * from listings
where user_id = $1
order by time_stamp desc; 