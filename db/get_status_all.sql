SELECT * FROM listings WHERE listing_name ILIKE CONCAT('%', $1, '%');