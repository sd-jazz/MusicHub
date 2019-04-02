delete from listings where listing_id = $1;

select * from listings where user_id = $2;