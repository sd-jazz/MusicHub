
create table users (
    user_id serial primary key,
    auth0_id integer,
    profile_name text,
    email text, 
    picture text
);

create table listings (
    listing_id serial primary key,
    user_id int references users(user_id),
    listing_name text,
    description text,
    time_stamp text,
    type text,
    tags text,
    price integer,
    sold boolean
);

create table messages(
    message_id serial primary key,
    sender_id int references users(user_id),
    receivers_id int,
    message text,
    time_stamp text
);

create table completed_transactions (
    transaction_id serial primary key,
    listing_id int references listings(listing_id),
    seller_id int references users(user_id),
    buyers_id int references users(user_id),
);

create table favorites (
    favorites_id serial primary key,
    listing_id int references listings(listing_id),
    seller_id int references users(user_id),
    buyers_id int references users(user_id),
);

create table pictures(
    picture_id serial primary key,
    listing_id int references listings(listing_id),
    picture_url text
);



