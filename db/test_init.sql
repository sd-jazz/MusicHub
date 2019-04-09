create table fake_users (
user_id serial primary key,
profile_name text,
email text
);

create table fake_listings (
listing_id serial primary key,
listing_name text,
price integer
);
