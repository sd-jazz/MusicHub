select l.listing_id, l.listing_name, l.description, l.time_stamp, l.type, l.tags, l.price, l.sold, l.images, l.zipcode, r.room_id, r.room_name
from listings l
left join rooms r
on l.listing_id = r.listing_id
where user_id = $1
order by time_stamp desc; 