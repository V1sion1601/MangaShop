-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2022 at 07:47 AM
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
  `ID_google` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID`, `Name`) VALUES
(1, 'Light Novel'),
(2, 'Manga');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `ID` int(11) NOT NULL,
  `Name` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ID_account` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `ID` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `shipping` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `ID_order` int(11) NOT NULL,
  `ID_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `image` varchar(25) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `ID_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `Name`, `price`, `ID_author`, `ID_publisher`, `image`, `status`, `ID_category`) VALUES
(1, 'Dã ngoại thảnh thơi - Tập 1', 30000, 1, 7, '../assets/yurucamp.jpg', 1, 2),
(2, 'Chú Thuật Hồi Chiến - Tập 1', 30000, 5, 7, '../assets/jjk01.jpg', 1, 2),
(3, 'Dã ngoại thảnh thơi - Tập 2', 30000, 1, 7, '../assets/yurucamp02.jpg', 1, 2),
(4, 'Chú Thuật Hồi Chiến - Tập 2', 30000, 5, 7, '../assets/jjk02.jpg', 1, 2),
(5, 'Dr.Stone - Tập 1', 25000, 3, 7, '../assets/stone01.jpg', 1, 2),
(6, 'Dr.Stone - Tập 2', 25000, 3, 7, '../assets/stone02.jpg', 1, 2),
(7, 'Dr.Stone - Tập 3', 25000, 3, 7, '../assets/stone03.jpg', 1, 2),
(8, 'Dr.Stone - Tập 4', 25000, 3, 7, '../assets/stone04.jpg', 1, 2),
(9, 'Văn Phòng Thám Tử Quái Vật - Tập 3', 30000, 4, 8, '../assets/kemono03.jpg', 1, 2),
(10, 'Văn Phòng Thám Tử Quái Vật - Tập 2', 30000, 4, 8, '../assets/kemono02.jpg', 1, 2),
(11, 'Văn Phòng Thám Tử Quái Vật - Tập 1', 30000, 4, 8, '../assets/kemono01.jpg', 1, 2),
(12, ' 86 - EIGHTY SIX - Tập 1', 104400, 2, 8, '../assets/8601.jpg', 1, 1),
(13, ' 86 - EIGHTY SIX - Tập 2', 104400, 2, 8, '../assets/8602.jpg', 1, 1),
(14, '86-EIGHTY SIX- Tập 3', 104400, 2, 8, '../assets/8603.jpg', 1, 1),
(15, '86-EIGHTY SIX- Tập 4', 104400, 2, 8, '../assets/8604.jpg', 1, 1),
(16, 'Dr.Stone - Tập 5', 25000, 3, 7, '../assets/stone05.jpg', 1, 2),
(17, 'Dr.Stone - Tập 6', 25000, 3, 7, '../assets/stone06.jpg', 1, 2),
(18, 'Dr.Stone - Tập 7', 25000, 3, 7, '../assets/stone07.jpg', 1, 2),
(19, 'Dr.Stone - Tập 8', 25000, 3, 7, '../assets/stone08.jpg', 1, 2),
(20, 'Dr.Stone - Tập 9', 25000, 3, 7, '../assets/stone09.jpg', 1, 2);

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
  `ID` int(11) NOT NULL,
  `Percent` int(11) NOT NULL,
  `Require` int(11) NOT NULL,
  `description` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  ADD PRIMARY KEY (`ID`);

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
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `publisher`
--
ALTER TABLE `publisher`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sale`
--
ALTER TABLE `sale`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `ID_account` FOREIGN KEY (`ID_account`) REFERENCES `account` (`ID`);

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
