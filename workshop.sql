-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 20, 2022 lúc 11:14 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `workshop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill`
--

CREATE TABLE `bill` (
  `id` int(10) NOT NULL,
  `iduser` int(10) DEFAULT 0,
  `bill_name` varchar(255) NOT NULL,
  `bill_address` varchar(255) NOT NULL,
  `bill_phone` varchar(50) NOT NULL,
  `bill_email` varchar(100) NOT NULL,
  `bill_pttt` tinyint(1) NOT NULL COMMENT '0.Thanh toán trực tiếp\r\n1.Chuyển khoản ngân hàng\r\n2.Thanh toán Online',
  `total` int(10) NOT NULL DEFAULT 0,
  `bill_status` tinyint(1) DEFAULT 0 COMMENT '0.Đơn hàng mới\r\n1.Đang xử lý\r\n2.Đang giao hàng\r\n3.Đã giao hàng',
  `ngaydathang` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `bill`
--

INSERT INTO `bill` (`id`, `iduser`, `bill_name`, `bill_address`, `bill_phone`, `bill_email`, `bill_pttt`, `total`, `bill_status`, `ngaydathang`) VALUES
(126, 6, 'bach1234', 'đồng tháp', '123456789', 'bach@gmail.com', 0, 400, 0, '16-10-2021 15:25:03pm'),
(127, 6, 'bach1234', 'đồng tháp', '123456789', 'bach@gmail.com', 0, 400, 0, '16-10-2021 15:26:16pm'),
(128, 6, 'bach1234', 'đồng tháp', '123456789', 'bach@gmail.com', 0, 400, 0, '16-10-2021 15:26:34pm'),
(129, 6, 'bach1234', 'đồng tháp', '123456789', 'bach@gmail.com', 0, 400, 0, '16-10-2021 15:27:16pm'),
(130, 6, 'bach1234', 'đồng tháp', '123456789', 'bach@gmail.com', 0, 400, 0, '16-10-2021 15:28:08pm'),
(131, 6, 'bach1234', 'đồng tháp', '123456789', 'bach@gmail.com', 0, 400, 0, '16-10-2021 15:28:52pm'),
(132, 6, 'bach1234', 'đồng tháp', '123456789', 'bach@gmail.com', 0, 400, 0, '16-10-2021 15:29:42pm'),
(133, 6, 'bach1234', 'đồng tháp', '123456789', 'bach@gmail.com', 0, 400, 0, '16-10-2021 15:30:12pm'),
(134, 6, 'bach1234', 'đồng tháp', '123456789', 'bach@gmail.com', 0, 400, 0, '16-10-2021 18:33:34pm');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

CREATE TABLE `binhluan` (
  `id` int(10) NOT NULL,
  `noidung` varchar(255) NOT NULL,
  `iduser` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `idpro` int(10) NOT NULL,
  `ngaybinhluan` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `binhluan`
--

INSERT INTO `binhluan` (`id`, `noidung`, `iduser`, `username`, `idpro`, `ngaybinhluan`) VALUES
(53, 'asdcads', 6, 'bach1234', 30, '14-10-2021 00:35:32am'),
(54, 'asdcasc', 6, 'bach1234', 30, '14-10-2021 00:36:34am'),
(55, 'asdcascd', 6, 'bach1234', 30, '14-10-2021 00:53:56am'),
(56, 'sadcascd', 6, 'bach1234', 50, '14-10-2021 01:09:47am'),
(57, 'ascascd', 6, 'bach1234', 50, '14-10-2021 01:09:49am'),
(58, 'asdcasd', 6, 'bach1234', 50, '14-10-2021 01:21:55am'),
(59, 'asdcascd', 6, 'bach1234', 50, '14-10-2021 01:42:24am'),
(61, 'asdcas', 6, 'bach1234', 50, '14-10-2021 01:57:43am'),
(63, 'asdasd', 6, 'bach1234', 51, '14-10-2021 02:02:33am'),
(65, 'sadcasdc', 6, 'bach1234', 51, '14-10-2021 02:05:35am'),
(66, 'ascdascd', 6, 'bach1234', 35, '14-10-2021 02:18:08am'),
(67, 'asdcsadc', 6, 'bach1234', 35, '14-10-2021 02:18:11am'),
(68, 'asdcascd', 6, 'bach1234', 35, '14-10-2021 02:18:36am'),
(69, 'fwadwcasdc', 21, 'khang69', 50, '15-10-2021 20:45:39pm');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(10) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idpro` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(10) NOT NULL,
  `soluong` int(10) NOT NULL,
  `thanhtien` int(10) NOT NULL,
  `idbill` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `iduser`, `idpro`, `img`, `name`, `price`, `soluong`, `thanhtien`, `idbill`) VALUES
(302, 6, 50, 'upload/ao13.png', 'EXITED', 48, 4, 144, 126),
(303, 6, 51, 'upload/ao12.png', 'REBEL WASH', 48, 1, 48, 126),
(304, 6, 27, 'upload/2.png', 'JEANS JACKET', 40, 4, 160, 126),
(305, 6, 50, 'upload/ao13.png', 'EXITED', 48, 4, 144, 127),
(306, 6, 51, 'upload/ao12.png', 'REBEL WASH', 48, 1, 48, 127),
(307, 6, 27, 'upload/2.png', 'JEANS JACKET', 40, 4, 160, 127),
(308, 6, 50, 'upload/ao13.png', 'EXITED', 48, 4, 144, 128),
(309, 6, 51, 'upload/ao12.png', 'REBEL WASH', 48, 1, 48, 128),
(310, 6, 27, 'upload/2.png', 'JEANS JACKET', 40, 4, 160, 128),
(311, 6, 50, 'upload/ao13.png', 'EXITED', 48, 4, 144, 129),
(312, 6, 51, 'upload/ao12.png', 'REBEL WASH', 48, 1, 48, 129),
(313, 6, 27, 'upload/2.png', 'JEANS JACKET', 40, 4, 160, 129),
(314, 6, 50, 'upload/ao13.png', 'EXITED', 48, 4, 144, 130),
(315, 6, 51, 'upload/ao12.png', 'REBEL WASH', 48, 1, 48, 130),
(316, 6, 27, 'upload/2.png', 'JEANS JACKET', 40, 4, 160, 130),
(317, 6, 50, 'upload/ao13.png', 'EXITED', 48, 4, 144, 131),
(318, 6, 51, 'upload/ao12.png', 'REBEL WASH', 48, 1, 48, 131),
(319, 6, 27, 'upload/2.png', 'JEANS JACKET', 40, 4, 160, 131),
(320, 6, 50, 'upload/ao13.png', 'EXITED', 48, 4, 144, 132),
(321, 6, 51, 'upload/ao12.png', 'REBEL WASH', 48, 1, 48, 132),
(322, 6, 27, 'upload/2.png', 'JEANS JACKET', 40, 4, 160, 132),
(323, 6, 50, 'upload/ao13.png', 'EXITED', 48, 4, 144, 133),
(324, 6, 51, 'upload/ao12.png', 'REBEL WASH', 48, 1, 48, 133),
(325, 6, 27, 'upload/2.png', 'JEANS JACKET', 40, 4, 160, 133),
(326, 6, 48, 'upload/tui.png', 'BACKPACK OVER PRINT', 100, 4, 400, 134);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `id` int(11) NOT NULL,
  `ten_danhmuc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`id`, `ten_danhmuc`) VALUES
(41, 'JACKET'),
(42, 'T-SHIRT'),
(43, 'ACCESSORIES'),
(44, 'SHORT & PANTS'),
(95, 'hihi'),
(96, 'hihi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `id` int(11) NOT NULL,
  `id_danhmuc` int(11) NOT NULL,
  `ten_sanpham` varchar(255) NOT NULL,
  `gia_sanpham` double(10,2) NOT NULL DEFAULT 0.00,
  `img` varchar(255) DEFAULT NULL,
  `mota` text DEFAULT NULL,
  `view` int(11) DEFAULT 0,
  `hot` tinyint(4) NOT NULL DEFAULT 0,
  `createDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`id`, `id_danhmuc`, `ten_sanpham`, `gia_sanpham`, `img`, `mota`, `view`, `hot`, `createDate`) VALUES
(26, 41, 'LIGHTSPEED JK', 30.00, '1.png', 'Áo khoát LIGHTSPEED JK', 20, 1, '2021-02-17'),
(27, 41, 'JEANS JACKET', 40.00, '2.png', 'Áo khoát JEANS JACKET', 30, 0, '2021-03-17'),
(28, 41, 'BURN HOODIE', 15.00, '10.png', 'Áo khoát BURN HOODIE', 100, 1, '2021-04-22'),
(29, 44, 'BASICISM SHORT', 12.00, '7.png', 'Quần BASICISM SHORT', 50, 1, '2021-05-20'),
(30, 44, 'ALL BAD PANTS', 24.00, '8.png', 'Quần ALL BAD PANTS', 200, 0, '2021-01-15'),
(31, 43, 'CHAOS BUCKET HAT', 10.00, '21.png', 'Nón CHAOS BUCKET HAT', 40, 1, '2021-01-24'),
(33, 43, 'ALL BAD MINI BAG', 23.00, '23.png', 'Túi đeo chéo ALL BAD MINI BAG', 25, 1, '2021-06-22'),
(34, 42, 'SCIENTIST', 25.00, '16.png', 'Áo thun SCIENTIST', 35, 0, '2021-06-30'),
(35, 42, 'ROCKER', 28.00, '18.png', 'Áo thun ROCKER', 60, 0, '2021-07-05'),
(36, 43, 'GUMMY GLASSY', 50.00, '22.png', 'Túi GUMMY GLASSY BAG', 80, 1, '2021-07-24'),
(46, 44, 'FY JEANS', 30.00, 'quanjean.png', 'FY JEANS với thiết kế hiện đại, phóng khoáng, tạo nên một nét cá tính riêng. \r\n\r\nTừ dáng quần jeans suông nguyên bản, chiếc quần được đắp vải rải rác những kí tự ở cả mặt trước và sau. \r\n\r\nTúi quần cũng được nhấn nhá bởi hoạ tiết vải bandana đậm màu, logo BAD HABITS được gia công tỉ mỉ thành chiếc mạc da ở lưng quần. Biến hoá một chút với phần rách gấu, tạo nên tổng thể hài hoà nhưng vẫn đủ độ \"quậy\" cho các tín đồ thời trang đường phố.', 34, 1, '2021-08-17'),
(47, 44, 'SKULL PANTS X', 45.00, 'quanthun.png', '', 67, 1, '2021-08-23'),
(48, 43, 'BACKPACK OVER PRINT', 100.00, 'tui.png', 'BACKPACK OVER PRINT được làm từ chất liệu Simili cao cấp,  với ưu điểm chống thấm vượt trội, độ bền cao và giữ form chuẩn qua thời gian.\r\n\r\nThiết kế balo đa dụng, kích thước rộng rãi cùng 2 ngăn túi ngoài, hoàn toàn phù hợp để mang theo hàng ngày.  Dáng túi nắp gập tiện lợi và chắc chắn, quai đeo độ dày vừa phải kết hợp cùng chất liệu simili êm ái, đem lại cảm giác thoải mái dù mang suốt một ngày dài.\r\n\r\nĐiểm nhấn hoạ tiết monogram đặc trưng và logo được in sắc nét trên balo, tạo nên vẻ độc đáo, cá tính mang đậm dấu ấn của BAD. ', 23, 1, '2021-09-21'),
(50, 42, 'EXITED', 48.00, 'ao13.png', 'asdsadcasdcsacdasdcad', 79, 0, '2021-09-25'),
(51, 42, 'REBEL WASH', 48.00, 'ao12.png', '', 12, 1, '2021-08-18'),
(52, 41, 'CHAOTIC JACKET J', 150.00, 'aokhoat10.png', '', 45, 0, '2021-06-10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `diachi` varchar(110) DEFAULT NULL,
  `vaitro` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`id`, `username`, `password`, `fullName`, `phone`, `email`, `diachi`, `vaitro`) VALUES
(6, 'bach1234', '123456', '', '123456789', 'bach@gmail.com', 'đồng tháp', 1),
(37, 'admin', '$2b$10$k7A4L7i0sO5U3.lNYFxLRu8139YQPy7loBoz82hQHxNqS34T/786a', '', NULL, 'admin@gmail.com', NULL, 0),
(38, 'bach8', '$2b$10$K6w1OD8wZebiGKfaD4yPJODuTA819bDDE8VCxhQFzCrwK2UQlQCYG', '', NULL, 'bach@gmail.com', NULL, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tk_bl` (`iduser`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_user` (`iduser`),
  ADD KEY `cart_sanpham` (`idpro`),
  ADD KEY `cart_bill` (`idbill`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_iddm_sp` (`id_danhmuc`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=327;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_bill` FOREIGN KEY (`idbill`) REFERENCES `bill` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_sanpham` FOREIGN KEY (`idpro`) REFERENCES `sanpham` (`id`),
  ADD CONSTRAINT `cart_user` FOREIGN KEY (`iduser`) REFERENCES `taikhoan` (`id`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `fk_iddm_sp` FOREIGN KEY (`id_danhmuc`) REFERENCES `danhmuc` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
