update listings
set listing_name = $1,
    description = $2,
    type = $3,
    price = $4,
    condition = $5,
    zipcode = $6,
    category = $7
where 
listing_id = $8;

select * from listings where user_id = $9;