delete from room_data where room_name = $1;

delete from rooms where room_id = $2;

delete from listings where listing_id = $3;

select l.listing_id, l.listing_name, l.description, l.time_stamp, l.type, l.tags, l.price, l.sold, l.images, l.zipcode, r.room_id, r.room_name
from listings l
left join rooms r
on l.listing_id = r.listing_id
where user_id = $4
order by time_stamp desc; 