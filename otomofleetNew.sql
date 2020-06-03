-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 17, 2020 at 04:59 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `otomofleet`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id_customer` varchar(80) NOT NULL,
  `deviceID` varchar(80) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `phoneNumber` varchar(40) NOT NULL,
  `customerName` text NOT NULL,
  `city` text NOT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id_customer`, `deviceID`, `email`, `password`, `phoneNumber`, `customerName`, `city`, `latitude`, `longitude`) VALUES
('1584365887569', '', 'otomodit@gmail.com', '$2b$10$pKCj0wozo7qmhSJS7K.OYu5LtE7FqxmXtXwMAzbPG8UdZcSFunlny', '082369400291', 'otomodotco', 'jakarta', NULL, NULL),
('1584429526866', '', 'reyhanimut@gmail.com', '$2b$10$ttD3D7SaHi0eldvrNoqD0.k36hVCCYDC5XebQO5lfVFALRR2m.2hi', '082368590981', 'reyhan imut', 'jakarta selatan', NULL, NULL),
('22321', '', 'arwysyah@gmail.com', '$2b$10$tty6JCGXGc.aDP8MPoWsUe6YPT//Uh5o0wXvTZb9jZE23egZaBXQC', '082367899652', 'arwy', 'jakarta', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `id_driver` varchar(80) NOT NULL,
  `deviceID` varchar(80) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `nama` text NOT NULL,
  `platNumber` text NOT NULL,
  `no_sim` varchar(60) NOT NULL,
  `plat_type` varchar(30) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `city` text NOT NULL,
  `id_driverPicture` text NOT NULL,
  `brand` varchar(30) NOT NULL,
  `model` varchar(40) NOT NULL,
  `color` varchar(60) NOT NULL,
  `fuel_type` varchar(30) NOT NULL,
  `category` varchar(40) NOT NULL,
  `years` varchar(40) NOT NULL,
  `online_status` varchar(40) NOT NULL,
  `productClass` varchar(40) DEFAULT NULL,
  `accountStatus` varchar(40) NOT NULL,
  `status` varchar(30) NOT NULL,
  `pendapatan` int(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`id_driver`, `deviceID`, `email`, `password`, `phoneNumber`, `nama`, `platNumber`, `no_sim`, `plat_type`, `latitude`, `longitude`, `city`, `id_driverPicture`, `brand`, `model`, `color`, `fuel_type`, `category`, `years`, `online_status`, `productClass`, `accountStatus`, `status`, `pendapatan`) VALUES
('hdahshdhasjdhasdhajheahwhaha', 'sadskdasdhaeshehasheahsehashehas', 'myotomo@otomo.com', 'Kenzo123', '082345678542', 'My Testing Units', '12345', '12364645141', 'even', -8.7844665, 109.35315343067305, 'Jakarta', 'sadasdasdasdawdawad', 'toyota', 'avanza', 'hitam', 'premium', 'Mobil', '2014', 'Online', 'Economy', 'Verified', 'Aktif', 2000000),
('jajshshdgasgdagsd', 'lasjdjsdhgasgdgsad', 'justtest@gmail.com', '123456789', '09282625522', 'nama saya adalah', 'bk 213421 s', '231231442', 'ganjil', -6.300641, 106.814095, 'Jakarta ', 'sdhjadgaskjdgashd', 'Honda', 'Jazz', 'White', 'Premium', 'Mobil', '2018', 'Offline', 'Bisnis', 'Verified', 'Tidak Aktif', 300000);

-- --------------------------------------------------------

--
-- Table structure for table `driverPicture`
--

CREATE TABLE `driverPicture` (
  `id_image` varchar(200) NOT NULL,
  `id_driverPicture` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `id_item` varchar(40) NOT NULL,
  `product_name` text NOT NULL,
  `merk` text NOT NULL,
  `years` varchar(10) NOT NULL,
  `fuel_type` text NOT NULL,
  `transmission` text NOT NULL,
  `color` text NOT NULL,
  `seats` varchar(11) NOT NULL,
  `plat_number` varchar(20) NOT NULL,
  `plat_type` text NOT NULL,
  `price` int(20) NOT NULL,
  `category` text NOT NULL,
  `city` text NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id_item`, `product_name`, `merk`, `years`, `fuel_type`, `transmission`, `color`, `seats`, `plat_number`, `plat_type`, `price`, `category`, `city`, `latitude`, `longitude`) VALUES
('773d6cd0-58c4-11ea-8c82-791ef7227b39', 'Kaka', 'Mitsubishi', '', 'Bensin', 'Manual', 'White', '4', '12', 'odd', 1222, 'Motocycle', 'Medan', -6.2262651, 106.8543105),
('d05333e0-58b5-11ea-88a1-95ddfa100f70', 'Hello', 'Chevrolet', '', 'Hehe', '', '', '', '', '', 1111, 'Car', '', -6.2262651, 106.8543105);

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE `photo` (
  `id_photo` varchar(80) NOT NULL,
  `id_driver` varchar(80) NOT NULL,
  `photo_ktp` text NOT NULL,
  `photo_front` text NOT NULL,
  `photo_back` text NOT NULL,
  `photo_in` text NOT NULL,
  `photo_left` text NOT NULL,
  `photo_right` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `picture`
--

CREATE TABLE `picture` (
  `id_image` varchar(50) NOT NULL,
  `image` text NOT NULL,
  `id_item` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `picture`
--

INSERT INTO `picture` (`id_image`, `image`, `id_item`) VALUES
('097e4610-ac35-4c22-aba4-6515c42f3aa1', 'image_1582740911324_Screenshot_20200217_175718.png', 'ec6e2590-58c3-11ea-8c82-791ef7227b39'),
('0e86c2df-f2dc-407f-9fee-a9886be3e307', 'image_1582734850053_IMG-20200218-WA0005.jpg', 'd05333e0-58b5-11ea-88a1-95ddfa100f70'),
('148ac1dd-c40d-4894-9fd7-99429c37dc62', 'image_1582741142999_Screenshot_20200217_175718.png', '773d6cd0-58c4-11ea-8c82-791ef7227b39'),
('1dc2162f-80a1-40be-a1ce-09bc5ba7df4b', 'image_1582734850209_Screenshot_20200217_175718.png', 'd05333e0-58b5-11ea-88a1-95ddfa100f70'),
('256be32e-a20f-45e0-8cec-4a1c4eb94afc', 'image_1582734849907_IMG-20200218-WA0005.jpg', 'd05333e0-58b5-11ea-88a1-95ddfa100f70'),
('33d9e5ad-6c0e-4967-8382-7cf4a5906ce8', 'image_1582740910075_Screenshot_20200217_175718.png', 'ec6e2590-58c3-11ea-8c82-791ef7227b39'),
('3b783d63-d3ca-4f7a-95f9-16f20576b926', 'image_1583762873391_editIcon.png', 'asdasdasdsadas'),
('3f8ad2bf-cb5a-4695-9d8b-9dac35349ff8', 'image_1582740910013_IMG-20200218-WA0005.jpg', 'ec6e2590-58c3-11ea-8c82-791ef7227b39'),
('4ed907f1-f488-4fc6-ac31-b5a865b3dc9e', 'image_1582741142910_IMG-20200217-WA0011.jpg', '773d6cd0-58c4-11ea-8c82-791ef7227b39'),
('888c8db0-e1c8-4875-9422-9ae8de046717', 'image_1582741142885_IMG-20200218-WA0005.jpg', '773d6cd0-58c4-11ea-8c82-791ef7227b39'),
('ce6e1514-6cfb-479b-b976-5a8f9ec4e1b2', 'image_1583762873366_carOutline.png', 'asdasdasdsadas'),
('f60be71f-3832-47f0-ad56-a5653f08fe33', 'image_1583762873383_chatIcon.png', 'asdasdasdsadas');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` varchar(50) NOT NULL,
  `id_item` text NOT NULL,
  `id_driver` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `id_item`, `id_driver`) VALUES
('asdads', 'sdasdasdsadas', 'sadasd');

-- --------------------------------------------------------

--
-- Table structure for table `subtransaction`
--

CREATE TABLE `subtransaction` (
  `id_transaction` varchar(80) NOT NULL,
  `id_customer` text NOT NULL,
  `customerName` text NOT NULL,
  `id_driver` text NOT NULL,
  `id_subscription` text NOT NULL,
  `status` varchar(20) NOT NULL,
  `date` varchar(40) NOT NULL,
  `hour` varchar(40) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `location` text NOT NULL,
  `transaction_at` text NOT NULL,
  `totalPrice` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id_transaction` int(20) NOT NULL,
  `id_item` varchar(40) NOT NULL,
  `id_vendor` int(20) NOT NULL,
  `id_customer` int(20) NOT NULL,
  `transaction_at` date NOT NULL,
  `total_price` int(30) NOT NULL,
  `status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE `vendor` (
  `id_vendor` int(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `phone_number` double NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vendor`
--

INSERT INTO `vendor` (`id_vendor`, `username`, `password`, `email`, `phone_number`, `address`) VALUES
(1, 'arwysyah', '$2b$10$w5yfnaWyaWYVfeOnlTl6HecaxavQY8OjF.PmhXQ0hcDPhfTAaiCta', 'arwysyah@gmail.com', 6282369400291, 'Medan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id_customer`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`id_driver`);

--
-- Indexes for table `driverPicture`
--
ALTER TABLE `driverPicture`
  ADD PRIMARY KEY (`id_image`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id_item`);

--
-- Indexes for table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id_photo`);

--
-- Indexes for table `picture`
--
ALTER TABLE `picture`
  ADD PRIMARY KEY (`id_image`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `subtransaction`
--
ALTER TABLE `subtransaction`
  ADD PRIMARY KEY (`id_transaction`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id_transaction`);

--
-- Indexes for table `vendor`
--
ALTER TABLE `vendor`
  ADD PRIMARY KEY (`id_vendor`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id_transaction` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vendor`
--
ALTER TABLE `vendor`
  MODIFY `id_vendor` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
