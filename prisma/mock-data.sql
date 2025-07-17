-- Insert mock data for users
INSERT INTO public.users (id, name, email, password, avatar_url, dob, gender, status, created_at)
SELECT
  g.id,
  'User ' || g.id,
  'user' || g.id || '@example.com',
  'hashedpassword' || g.id,
  NULL,
  '1990-01-01',
  'male',
  'ACTIVE',
  NOW()
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for roles
INSERT INTO public.roles (id, name, description, created_at)
SELECT
  g.id,
  CASE WHEN g.id = 1 THEN 'ADMIN' ELSE 'USER' END,
  'Role ' || g.id,
  NOW()
FROM generate_series(1, 2) AS g(id);

-- Insert mock data for user_has_role
INSERT INTO public.user_has_role (user_id, role_id, state)
SELECT
  u.id,
  CASE WHEN u.id = 1 THEN 1 ELSE 2 END,
  'ACTIVE'
FROM public.users u
WHERE u.id <= 20;

-- Insert mock data for categories
INSERT INTO public.categories (id, name, description, status, created_at)
SELECT
  g.id,
  'Category ' || g.id,
  'Description for category ' || g.id,
  'ACTIVE',
  NOW()
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for products
INSERT INTO public.products (id, name, description, is_available, sold_quantity, average_rating, total_reviews, status, created_at, category_id)
SELECT
  g.id,
  'Product ' || g.id,
  'Description for product ' || g.id,
  TRUE,
  (random() * 100)::int,
  round(random() * 5, 2),
  (random() * 50)::int,
  'ACTIVE',
  NOW(),
  ((g.id - 1) % 20) + 1
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for colors
INSERT INTO public.colors (id, name)
SELECT
  g.id,
  'Color ' || g.id
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for sizes
INSERT INTO public.sizes (id, name)
SELECT
  g.id,
  'Size ' || g.id
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for product_variants
INSERT INTO public.product_variants (id, is_available, price, quantity, status, product_id, color_id, size_id)
SELECT
  g.id,
  TRUE,
  round(random() * 100 + 10, 2),
  (random() * 50)::int + 1,
  'ACTIVE',
  ((g.id - 1) % 20) + 1,
  ((g.id - 1) % 20) + 1,
  ((g.id - 1) % 20) + 1
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for carts
INSERT INTO public.carts (id, created_at, user_id)
SELECT
  g.id,
  NOW(),
  g.id
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for cart_items
INSERT INTO public.cart_items (id, price, quantity, cart_id, product_variant_id)
SELECT
  g.id,
  round(random() * 100 + 10, 2),
  (random() * 5)::int + 1,
  ((g.id - 1) % 20) + 1,
  ((g.id - 1) % 20) + 1
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for orders
INSERT INTO public.orders (id, order_date, total_price, order_status, user_id)
SELECT
  g.id,
  NOW(),
  round(random() * 500 + 50, 2),
  'PROGRESS',
  ((g.id - 1) % 20) + 1
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for order_items
INSERT INTO public.order_items (id, quantity, unit_price, product_variant_id, order_id)
SELECT
  g.id,
  (random() * 5)::int + 1,
  round(random() * 100 + 10, 2),
  ((g.id - 1) % 20) + 1,
  ((g.id - 1) % 20) + 1
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for addresses
INSERT INTO public.addresses (id, is_default, is_visible, status, phone, street_detail, ward_code, district_id, province_id, user_id, created_at)
SELECT
  g.id,
  TRUE,
  TRUE,
  'ACTIVE',
  '0123456789',
  'Street ' || g.id,
  'W' || g.id,
  ((g.id - 1) % 20) + 1,
  ((g.id - 1) % 20) + 1,
  ((g.id - 1) % 20) + 1,
  NOW()
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for reviews
INSERT INTO public.reviews (id, rating, comment, created_at, user_id, product_id)
SELECT
  g.id,
  round(random() * 5, 2),
  'Review comment ' || g.id,
  NOW(),
  ((g.id - 1) % 20) + 1,
  ((g.id - 1) % 20) + 1
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for promotions
INSERT INTO public.promotions (id, code, description, discount_percent, start_date, end_date, status, created_at)
SELECT
  g.id,
  'PROMO' || g.id,
  'Promotion ' || g.id,
  (random() * 50)::int,
  NOW(),
  NOW() + interval '30 days',
  'ACTIVE',
  NOW()
FROM generate_series(1, 20) AS g(id);

-- Insert mock data for payment_history
INSERT INTO public.payment_history (id, is_primary, payment_method, total_amount, payment_status, payment_time, order_id)
SELECT
  g.id,
  TRUE,
  'CREDIT_CARD',
  round(random() * 500 + 50, 2),
  'PAID',
  NOW(),
  ((g.id - 1) % 20) + 1
FROM generate_series(1, 20) AS g(id);
