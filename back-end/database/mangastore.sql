-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2022 at 05:31 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mangastore`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `ID` int(11) NOT NULL,
  `Username` varchar(25) NOT NULL,
  `Password` int(11) NOT NULL,
  `ID_google` varchar(200) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`ID`, `Username`, `Password`, `ID_google`, `status`, `role`) VALUES
(1, 'hao456q', 123456, '12', 1, 0),
(2, 'hao456q@gmail.com', 123456, NULL, 1, 1),
(3, 'hao456c@gmail.com', 123456, '110843520044508299581', 1, 0),
(5, 'hao4561', 123456, NULL, 1, 0),
(7, 'hao456q', 123456, NULL, 1, 0),
(9, 'hao456ca@gmail.com', 1234567, '', 1, 0),
(10, 'hao456s@gmail.com', 123456, NULL, 1, 0),
(11, 'hao456sa@gmail.com', 123456, NULL, 1, 0),
(12, 'hao456saa@gmail.com', 123456, NULL, 1, 0),
(13, 'hao456saaa@gmail.com', 123456, NULL, 1, 0),
(14, 'hao456saaas@gmail.com', 123456, NULL, 1, 0),
(15, 'hao456sasaas@gmail.com', 123456, NULL, 1, 0),
(16, 'hao456abc@gmail.com', 123456, NULL, 1, 0),
(17, 'hao456l@gmail.com', 123456, NULL, 0, 0),
(18, 'hao123@gmail.com', 123456, NULL, 1, 0),
(19, 'hao4561@gmail.com', 123456, NULL, 1, 0),
(20, 'hao45w61@gmail.com', 123456, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `ID` int(11) NOT NULL,
  `Name` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`ID`, `Name`) VALUES
(1, 'Afro'),
(2, 'Asato Asato'),
(3, 'Inagaki Riichiro'),
(4, 'Aimoto Sho'),
(5, 'Gege Akutami');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID`, `Name`, `status`) VALUES
(1, 'Light Novel', 0),
(2, 'Manga', 0),
(6, 'văn phòng phẩm', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `ID` int(11) NOT NULL,
  `Name` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ID_account` int(11) NOT NULL,
  `adress` varchar(50) NOT NULL,
  `phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`ID`, `Name`, `ID_account`, `adress`, `phone`) VALUES
(8, 'Nguyễn Hoàng Hảo', 3, '20/9a Thới Tây ', '092038071'),
(21, 'Lâm Thiên Bảo', 5, 'abc', '0902380717'),
(22, 'Nguyễn Hoàng Hảo', 16, '123456', '123456789'),
(23, 'Nguyễn Hoàng Hảo', 17, '21342131', '0909090'),
(24, 'Nguyễn Hoàng Hảo ', 18, 'abcabcbac', '09090909'),
(25, 'Nguyễn Hoàng Hảo', 19, 'abcabca', '012932019'),
(26, 'Nguyễn Hoàng Hảo', 20, 'abcabca', '012932019');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `ID` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `ID_customer` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`ID`, `price`, `quantity`, `ID_customer`, `status`) VALUES
(2, 30000, 1, 8, 1),
(9, 210000, 7, 8, 2),
(10, 210000, 7, 8, 0),
(11, 109200, 7, 8, 2),
(12, 210000, 7, 8, 0);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `ID_order` int(11) NOT NULL,
  `ID_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`ID_order`, `ID_product`, `quantity`) VALUES
(2, 12, 23),
(9, 11, 1),
(10, 11, 1),
(10, 10, 6),
(11, 10, 6),
(11, 11, 1),
(12, 10, 6),
(12, 11, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `ID_author` int(11) NOT NULL,
  `ID_publisher` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `ID_category` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `Name`, `price`, `ID_author`, `ID_publisher`, `image`, `status`, `ID_category`, `quantity`) VALUES
(1, 'Dã ngoại thảnh thơi - Tập 1', 30000, 1, 7, 'yurucamp02.jpg', 0, 2, 41),
(2, 'Chú Thuật Hồi Chiến - Tập 1', 30000, 5, 7, 'jjk01.jpg', 0, 2, 30),
(3, 'Dã ngoại thảnh thơi - Tập 2', 30000, 1, 7, 'yurucamp02.jpg', 0, 2, 20),
(4, 'Chú Thuật Hồi Chiến - Tập 2', 30000, 5, 7, 'jjk02.jpg', 0, 2, 20),
(5, 'Dr.Stone - Tập 1', 25000, 3, 7, 'stone01.jpg', 0, 2, 20),
(6, 'Dr.Stone - Tập 2', 25000, 3, 7, 'stone02.jpg', 0, 2, 20),
(7, 'Dr.Stone - Tập 3', 25000, 3, 7, 'stone03.jpg', 0, 2, 20),
(8, 'Dr.Stone - Tập 4', 25000, 3, 7, 'stone04.jpg', 0, 2, 20),
(9, 'Văn Phòng Thám Tử Quái Vật - Tập 3', 30000, 4, 8, 'kemono03.jpg', 0, 2, 20),
(10, 'Văn Phòng Thám Tử Quái Vật - Tập 2', 30000, 4, 8, 'kemono02.jpg', 0, 2, 8),
(11, 'Văn Phòng Thám Tử Quái Vật - Tập 1', 30000, 4, 8, 'kemono01.jpg', 0, 2, 14),
(12, ' 86 - EIGHTY SIX - Tập 1', 104400, 2, 8, '8601.jpg', 0, 1, 20),
(13, ' 86 - EIGHTY SIX - Tập 2', 104400, 2, 8, '8602.jpg', 0, 1, 20),
(14, '86-EIGHTY SIX- Tập 3', 104400, 2, 8, '8603.jpg', 0, 1, 20),
(15, '86-EIGHTY SIX- Tập 4', 104400, 2, 8, '8604.jpg', 0, 1, 20),
(16, 'Dr.Stone - Tập 5', 25000, 3, 7, 'stone05.jpg', 0, 2, 20),
(17, 'Dr.Stone - Tập 6', 25000, 3, 7, 'stone06.jpg', 0, 2, 20),
(18, 'Dr.Stone - Tập 7', 25000, 3, 7, 'stone07.jpg', 0, 2, 20),
(19, 'Dr.Stone - Tập 8', 25000, 3, 7, 'stone08.jpg', 0, 2, 20),
(20, 'Dr.Stone - Tập 9', 25000, 3, 7, 'stone09.jpg', 0, 2, 20),
(24, 'Dã ngoại Thảnh Thơi - Tập 7', 30000, 1, 7, 'yurucamp.jpg', 0, 1, 123);

-- --------------------------------------------------------

--
-- Table structure for table `publisher`
--

CREATE TABLE `publisher` (
  `ID` int(10) NOT NULL,
  `Name` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `Address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `Phone` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `publisher`
--

INSERT INTO `publisher` (`ID`, `Name`, `Address`, `Phone`) VALUES
(7, 'NXB Kim Đồng', '55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội', '1900571595'),
(8, 'NXB Trẻ', '161B Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3 , TP. Hồ Chí Minh', '0839141579');

-- --------------------------------------------------------

--
-- Table structure for table `sale`
--

CREATE TABLE `sale` (
  `id` int(11) NOT NULL,
  `Percent` int(11) NOT NULL,
  `Require` int(11) NOT NULL,
  `date_start` varchar(10) NOT NULL,
  `date_finish` varchar(10) NOT NULL,
  `Name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sale`
--

INSERT INTO `sale` (`id`, `Percent`, `Require`, `date_start`, `date_finish`, `Name`) VALUES
(3, 0, 0, '2022-05-10', '2022-05-20', 'Mã khuyến mãi 1'),
(31, 30, 100000, '2022-05-10', '2022-05-21', 'Mã khuyến mãi 2'),
(32, 30, 100000, '2022-05-10', '2022-05-20', 'Mã khuyến mãi 12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_account` (`ID_account`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_customer` (`ID_customer`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD KEY `ID_order` (`ID_order`),
  ADD KEY `ID_product` (`ID_product`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_author` (`ID_author`),
  ADD KEY `ID_publisher` (`ID_publisher`),
  ADD KEY `ID_category` (`ID_category`);

--
-- Indexes for table `publisher`
--
ALTER TABLE `publisher`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `publisher`
--
ALTER TABLE `publisher`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sale`
--
ALTER TABLE `sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `ID_account` FOREIGN KEY (`ID_account`) REFERENCES `account` (`ID`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`ID_customer`) REFERENCES `customers` (`ID`);

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`ID_order`) REFERENCES `order` (`ID`),
  ADD CONSTRAINT `orderdetail_ibfk_2` FOREIGN KEY (`ID_product`) REFERENCES `product` (`ID`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`ID_author`) REFERENCES `author` (`ID`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`ID_publisher`) REFERENCES `publisher` (`ID`),
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`ID_category`) REFERENCES `category` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
