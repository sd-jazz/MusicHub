select l.listing_id, l.user_id, l.listing_name, l.description, l.time_stamp, l.type, l.tags, l.price, l.sold, u.profile_name, u.email
from listings l
join users u
on l.user_id = u.user_id
where l.listing_id = $1;
