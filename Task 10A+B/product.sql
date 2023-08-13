CREATE TABLE `product` (
  `product_id` int(20) NOT NULL,
  `product_name` varchar(120) NOT NULL,
  `product_brand` varchar(100) NOT NULL,
  `product_price` decimal(8,2) NOT NULL,
  `product_ram` char(5) NOT NULL,
  `product_storage` varchar(50) NOT NULL,
  `product_camera` varchar(20) NOT NULL,
  `product_image` varchar(100) NOT NULL,
  `product_quantity` mediumint(5) NOT NULL,
  `product_status` enum('0','1') NOT NULL COMMENT '0-active,1-inactive'
);

ALTER TABLE `product` ADD PRIMARY KEY (`product_id`);

-- AUTO_INCREMENT for dumped tables

-- AUTO_INCREMENT for table `product`

ALTER TABLE `product` MODIFY `product_id` int(20) NOT NULL AUTO_INCREMENT;

INSERT INTO `product` (`product_id`, `product_name`, `product_brand`, `product_price`, `product_ram`, `product_storage`, `product_camera`, `product_image`, `product_quantity`, `product_status`) VALUES
(1, 'Honor 9 Lite (Sapphire Blue, 64 GB)  (4 GB RAM)', 'Honor', '14499.00', '4', '64', '13', 'image-1.jpeg', 10, '1'),
(2, '\r\nInfinix Hot S3 (Sandstone Black, 32 GB)  (3 GB RAM)', 'Infinix', '8999.00', '3', '32', '13', 'image-2.jpeg', 10, '1'),
(3, 'VIVO V9 Youth (Gold, 32 GB)  (4 GB RAM)', 'VIVO', '16990.00', '4', '32', '16', 'image-3.jpeg', 10, '1'),
(4, 'Moto E4 Plus (Fine Gold, 32 GB)  (3 GB RAM)', 'Moto', '11499.00', '3', '32', '8', 'image-4.jpeg', 10, '1'),
(5, 'Lenovo K8 Plus (Venom Black, 32 GB)  (3 GB RAM)', 'Lenevo', '9999.00', '3', '32', '13', 'image-5.jpg', 10, '1'),
(6, 'Samsung Galaxy On Nxt (Gold, 16 GB)  (3 GB RAM)', 'Samsung', '10990.00', '3', '16', '13', 'image-6.jpeg', 10, '1'),
(7, 'Moto C Plus (Pearl White, 16 GB)  (2 GB RAM)', 'Moto', '7799.00', '2', '16', '8', 'image-7.jpeg', 10, '1'),
(8, 'Panasonic P77 (White, 16 GB)  (1 GB RAM)', 'Panasonic', '5999.00', '1', '16', '8', 'image-8.jpeg', 10, '1'),
(9, 'OPPO F5 (Black, 64 GB)  (6 GB RAM)', 'OPPO', '19990.00', '6', '64', '16', 'image-9.jpeg', 10, '1'),
(10, 'Honor 7A (Gold, 32 GB)  (3 GB RAM)', 'Honor', '8999.00', '3', '32', '13', 'image-10.jpeg', 10, '1'),
(11, 'Asus ZenFone 5Z (Midnight Blue, 64 GB)  (6 GB RAM)', 'Asus', '29999.00', '6', '128', '12', 'image-12.jpeg', 10, '1'),
(12, 'Redmi 5A (Gold, 32 GB)  (3 GB RAM)', 'MI', '5999.00', '3', '32', '13', 'image-12.jpeg', 10, '1'),
(13, 'Intex Indie 5 (Black, 16 GB)  (2 GB RAM)', 'Intex', '4999.00', '2', '16', '8', 'image-13.jpeg', 10, '1'),
(14, 'Google Pixel 2 XL (18:9 Display, 64 GB) White', 'Google', '61990.00', '4', '64', '12', 'image-14.jpeg', 10, '1'),
(15, 'Samsung Galaxy A9', 'Samsung', '36000.00', '8', '128', '24', 'image-15.jpeg', 10, '1'),
(16, 'Lenovo A5', 'Lenovo', '5999.00', '2', '16', '13', 'image-16.jpeg', 10, '1'),
(17, 'Asus Zenfone Lite L1', 'Asus', '5999.00', '2', '16', '13', 'image-17.jpeg', 10, '1'),
(18, 'Lenovo K9', 'Lenovo', '8999.00', '3', '32', '13', 'image-18.jpeg', 10, '1'),
(19, 'Infinix Hot S3x', 'Infinix', '9999.00', '3', '32', '13', 'image-19.jpeg', 10, '1'),
(20, 'Realme 2', 'Realme', '8990.00', '4', '64', '13', 'image-20.jpeg', 10, '1'),
(21, 'Redmi Note 6 Pro', 'Redmi', '13999.00', '4', '64', '20', 'image-21.jpeg', 10, '1'),
(22, 'Realme C1', 'Realme', '7999.00', '2', '16', '15', 'image-22.jpeg', 10, '1'),
(23, 'Vivo V11', 'Vivo', '22900.00', '6', '64', '21', 'image-23.jpeg', 10, '1'),
(24, 'Oppo F9 Pro', 'Oppo', '23990.00', '6', '64', '18', 'image-24.jpg', 10, '1'),
(25, 'Honor 9N', 'Honor', '11999.00', '4', '64', '15', 'image-25.jpg', 10, '1'),
(26, 'Redmi 6A', 'Redmi', '6599.00', '2', '16', '13', 'image-26.jpeg', 10, '1'),
(27, 'InFocus Vision 3', 'InFocus', '7399.00', '2', '16', '13', 'image-27.jpeg', 10, '1'),
(28, 'Vivo Y69', 'Vivo', '11390.00', '3', '32', '16', 'image-28.jpeg', 10, '1'),
(29, 'Honor 7x', 'Honor', '12721.00', '4', '32', '18', 'image-29.jpeg', 10, '1'),
(30, 'Nokia 2.1', 'Nokia', '6580.00', '2', '1', '8', 'image-30.jpeg', 10, '1');

