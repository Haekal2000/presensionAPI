CREATE DATABASE  IF NOT EXISTS `presensidb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `presensidb`;
-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: presensidb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `academicperiods`
--

DROP TABLE IF EXISTS `academicperiods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `academicperiods` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `academicperiods`
--

LOCK TABLES `academicperiods` WRITE;
/*!40000 ALTER TABLE `academicperiods` DISABLE KEYS */;
INSERT INTO `academicperiods` VALUES ('28104643-57bb-466b-9a68-091f3322c450','Antara 2022/2023','2022-10-13 06:55:14','2022-10-13 06:55:14'),('b68be57f-c28c-4b46-867a-d92714465eab','Antara 2021/2022','2022-10-13 06:55:14','2022-10-13 06:55:14'),('c3041736-4975-4579-af04-280e78c5c8f3','Genap 2021/2022','2022-10-13 06:55:14','2022-10-13 06:55:14'),('d85d7d97-c26b-4fcc-bead-6916cf7a039f','Genap 2022/2023','2022-10-13 06:55:14','2022-10-13 06:55:14'),('ef3a2809-61b1-4750-b11e-91456d4d11ca','Ganjil 2022/2023','2022-10-13 06:55:14','2022-10-13 06:55:14'),('f84ecfdb-06ca-4db0-b33c-1c503a6b9e85','Ganjil 2021/2022','2022-10-13 06:55:14','2022-10-13 06:55:14');
/*!40000 ALTER TABLE `academicperiods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `credits` varchar(255) DEFAULT NULL,
  `department_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('IN210','Jaringan Komputer','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN211','Logika Informatika','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN212','Web Dasar','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN213','Bahasa Inggris','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN214','Pengantar Aplikasi Komputer','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN215','Sibernetika','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN216','Computational Thinking','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN217','Teknik Komunikasi Bahasa Inggris','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN220','Dasar Pemrograman','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN221','Arsitektur dan Keamanan Jaringan','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN222','Arsitektur Komputer Modern','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN223','Aljabar Linier','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN224','Desain Basis Data','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN230','Rekayasa Perangkat Lunak','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN231','Teknologi Multimedia','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN232','Matematika Diskrit','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN233','Algoritma dan Struktur Data','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN234','Paradigma Pemrograman','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN235','Pola Desain Perangkat Lunak','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN236','Pemrograman Terapan','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN237','Basis Data Lanjut','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN240','Pemrograman Web Lanjut','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN241','Statistika','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN242','Kecerdasan Mesin','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN243','Sistem Operasi Komputer','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN244','Strategi Algoritmik','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN250','Manajemen Proyek','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN252','Desain Antarmuka','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN253','Grafika Komputer','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN254','Proyek Perangkat Lunak','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN255','Proses Bisnis','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN260','Metode Penelitian Informatika','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN261','Start-up Technopreneur','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN262','Pemrograman Mobile','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN263','Competitive Programming','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN264','Web Semantik','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN265','Pemrosesan Data Berbasis Cloud','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN266','Pengenalan Pemrograman Game','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN267','Administrasi Jaringan Komputer','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN268','Ethical Hacking 1','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN269','Kecerdasan Bisnis','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN270','Kerja Praktik','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN271','Internet of Things','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN272','Pengolahan Citra Digital','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN273','Pemrograman Game','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN274','Ethical Hacking 2','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN275','Progressive Web Apps','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN276','Pencarian Informasi Media Online','3','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN277','Topik Lanjut Data Analyst 1','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN278','Topik Lanjut Multimedia and Game Developer 1','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN279','Topik Lanjut Network and Security Architect 1','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN280','Seminar Tugas Akhir','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN281','Tugas Akhir','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN282','Topik Lanjut Data Analyst 2','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN283','Topik Lanjut Multimedia and Game Developer 2','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN284','Topik Lanjut Network and Security Architect 2','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN285','Pemrograman Multi-Platform','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('IN286','Pemrosesan Bahasa Alami','4','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('MK017','Pancasila','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('MK024','Pendidikan Kewarganegaraan','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('MK037','Kepemimpinan','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('MK039','Bahasa Indonesia','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('MK060','Fenomenologi Agama','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('MK061','Etika Profesi','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27'),('MK062','Pendidikan Agama Kristen','2','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-11 01:29:27','2022-10-11 01:29:27');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `faculty_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `faculty_id` (`faculty_id`),
  CONSTRAINT `departments_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES ('466b6f96-b463-4688-991c-5f78ee3e00e0','S1 Sistem Informasi','10ef5262-22cb-4500-b224-a35d5b5dd403','2022-10-10 13:42:40','2022-10-10 13:42:40'),('46c0d3ec-0063-4f26-8f14-6be3bbe99f07','S1 Teknik Informatika','10ef5262-22cb-4500-b224-a35d5b5dd403','2022-10-10 13:42:40','2022-10-10 13:42:40');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculties`
--

DROP TABLE IF EXISTS `faculties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculties` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculties`
--

LOCK TABLES `faculties` WRITE;
/*!40000 ALTER TABLE `faculties` DISABLE KEYS */;
INSERT INTO `faculties` VALUES ('10ef5262-22cb-4500-b224-a35d5b5dd403','Teknologi Informasi','2022-10-10 13:36:19','2022-10-10 13:36:19'),('20538c98-7d55-44a3-9b2b-8c953df2dee9','Hukum','2022-10-10 13:36:19','2022-10-10 13:36:19'),('26cb08f4-eee2-4dbd-a953-0837053c0a26','Teknik','2022-10-10 13:36:19','2022-10-10 13:36:19'),('39df5699-3a37-4dd6-b18c-f7e7c747c6e9','Psikologi','2022-10-10 13:36:19','2022-10-10 13:36:19'),('45ac5043-fb2b-4cc5-b494-0740a657951c','Kedokteran Gigi','2022-10-10 13:36:19','2022-10-10 13:36:19'),('4e2af1f1-bde4-41d8-b867-5765053671ee','Kedokteran','2022-10-10 13:36:19','2022-10-10 13:36:19'),('5ee640e2-379d-411c-a6f8-847aa7075075','Bisnis','2022-10-10 13:36:19','2022-10-10 13:36:19'),('b343a1aa-ca0a-45ab-873c-5fe4c43dcef6','Seni Rupa dan Desain','2022-10-10 13:36:19','2022-10-10 13:36:19'),('f16f16ac-02ca-4c57-b21c-a9c5deefcf58','Bahasa dan Budaya','2022-10-10 13:36:19','2022-10-10 13:36:19');
/*!40000 ALTER TABLE `faculties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lecturers`
--

DROP TABLE IF EXISTS `lecturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lecturers` (
  `nik` varchar(255) NOT NULL,
  `nidn` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `department_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`nik`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `lecturers_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lecturers`
--

LOCK TABLES `lecturers` WRITE;
/*!40000 ALTER TABLE `lecturers` DISABLE KEYS */;
INSERT INTO `lecturers` VALUES ('710001','','Risal, S.T., M.T.','laurentius.risal@it.maranatha.edu','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('710003','','Djoni Setiawan Kartawihardja, S.T., M.T. ','djoni.sk@it.maranatha.edu','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('710004','','Dr. Hapnes Toba, M.Sc. ','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('710071','','Tiur Gantini, S.T., M.T.','-','admin12345',1,'466b6f96-b463-4688-991c-5f78ee3e00e0','2022-10-13 08:03:13','2022-10-13 08:03:13'),('710096','','Sulaeman Santoso, S.Kom., M.T. ','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720001','','Hendra Bunyamin, S.Si., M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720004','','Ir. Teddy Marcus Zakaria, M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720062','','Dr. Bernard R Sutedja, S.Kom., M.Kom.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720080','','Tjatur Kandaga, S.Si., M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720140','','Dr. Ir. Mewati Ayub, M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720211','','Diana Trivena Yulianti, S.Kom., M.T.','-','admin12345',1,'466b6f96-b463-4688-991c-5f78ee3e00e0','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720212','','Daniel Jahja Surjawan, S.Kom., M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720225','','Meliana Christianti Johan, S.Kom., M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720246','','Timotius Witono, S.Kom., M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720247','','Erico Darmawan Handoyo, S.Kom., M.T.','--','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720282','','Andreas Widjaja, S.Si., M.Sc., Ph.D','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720286','','Julianti Kasih, M.Kom.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720302','','Maresha Caroline, S.Kom., M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720303','','Wenny Franciska Senjaya, S.Kom., M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720307','','Robby Tan, S.T., M.Kom.','robby.tan@it.maranatha.edu','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720309','','Oscar Karnalim, S.T., M.T.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720317','','Dr. Swat Lie, S.H., M.Hum.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('720319','','Rossevine Artha Nathasya, S.Kom.','-','admin12345',1,'46c0d3ec-0063-4f26-8f14-6be3bbe99f07','2022-10-13 08:03:13','2022-10-13 08:03:13'),('730001','','Radiant Victor Imbar, S. Kom., M.T.','-','admin12345',1,'466b6f96-b463-4688-991c-5f78ee3e00e0','2022-10-13 08:03:13','2022-10-13 08:03:13'),('730003','','Yenni M. Djajalaksana, Ph.D.','--','admin12345',1,'466b6f96-b463-4688-991c-5f78ee3e00e0','2022-10-13 08:03:13','2022-10-13 08:03:13'),('730009','','Doro Edi, S.T., M. Kom.','--','admin12345',1,'466b6f96-b463-4688-991c-5f78ee3e00e0','2022-10-13 08:03:13','2022-10-13 08:03:13'),('730011','','Setia Budi, S.Kom., M.Cs., Ph.D.','-','admin12345',1,'466b6f96-b463-4688-991c-5f78ee3e00e0','2022-10-13 08:03:13','2022-10-13 08:03:13'),('730015','','Niko Ibrahim, S.Kom., M.I.T.','-','admin12345',1,'466b6f96-b463-4688-991c-5f78ee3e00e0','2022-10-13 08:03:13','2022-10-13 08:03:13'),('730049','','Adelia, S. Kom., M.T.','--','admin12345',1,'466b6f96-b463-4688-991c-5f78ee3e00e0','2022-10-13 08:03:13','2022-10-13 08:03:13'),('730062','','Sendy Ferdian Sujadi, S.Kom., M.T.','-','admin12345',1,'466b6f96-b463-4688-991c-5f78ee3e00e0','2022-10-13 08:03:13','2022-10-13 08:03:13');
/*!40000 ALTER TABLE `lecturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedulerecords`
--

DROP TABLE IF EXISTS `schedulerecords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedulerecords` (
  `id` varchar(255) NOT NULL,
  `lecturer_nik` varchar(255) DEFAULT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `schedule_id` varchar(255) DEFAULT NULL,
  `isComplete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lecturer_nik` (`lecturer_nik`),
  KEY `course_id` (`course_id`),
  KEY `schedule_id` (`schedule_id`),
  CONSTRAINT `schedulerecords_ibfk_1` FOREIGN KEY (`lecturer_nik`) REFERENCES `lecturers` (`nik`),
  CONSTRAINT `schedulerecords_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  CONSTRAINT `schedulerecords_ibfk_3` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedulerecords`
--

LOCK TABLES `schedulerecords` WRITE;
/*!40000 ALTER TABLE `schedulerecords` DISABLE KEYS */;
INSERT INTO `schedulerecords` VALUES ('ThPWL','710003','IN212','YIzVZ',1,'2022-12-31 07:01:58','2022-12-31 07:01:58');
/*!40000 ALTER TABLE `schedulerecords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedules` (
  `id` varchar(255) NOT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `lecturer_nik` varchar(255) DEFAULT NULL,
  `academic_period_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `day` varchar(255) DEFAULT NULL,
  `hours` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `method` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_id` (`course_id`),
  KEY `lecturer_nik` (`lecturer_nik`),
  KEY `academic_period_id` (`academic_period_id`),
  CONSTRAINT `schedules_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  CONSTRAINT `schedules_ibfk_2` FOREIGN KEY (`lecturer_nik`) REFERENCES `lecturers` (`nik`),
  CONSTRAINT `schedules_ibfk_3` FOREIGN KEY (`academic_period_id`) REFERENCES `academicperiods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES ('uVvpM','IN213','710071','d85d7d97-c26b-4fcc-bead-6916cf7a039f','2022-12-30 08:15:10','2022-12-30 08:15:10','Rabu','15.00 - 17.00','Lab Komputer','$2b$10$NClfVRTtaxhcfI3z4irzaOZ8syJ1WCCcuXPs0WbnmtwCsFIpOtOGW','teori'),('YIzVZ','IN212','710003','28104643-57bb-466b-9a68-091f3322c450','2022-12-30 08:13:58','2022-12-30 08:13:58','senin','08.00 - 10.00','Lab Komputer','$2b$10$Qc1kyW3sh7dmAslDxJHor.xhZPmVZoFpmTA4.JSpK8yy5ZOr2ZBNa','teori-praktikum');
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20221007021617-create-student.js'),('20221010115754-create-faculty.js'),('20221010122328-create-student.js'),('20221010122924-create-department.js'),('20221010123212-create-faculty.js'),('20221010123328-create-department.js'),('20221010124350-create-faculty.js'),('20221010131349-create-faculty.js'),('20221010131434-create-department.js'),('20221010131527-create-department.js'),('20221010131623-create-student.js'),('20221011012414-create-course.js'),('20221011073005-create-student.js'),('20221013063039-create-role.js'),('20221013065203-create-academicperiod.js'),('20221013070338-create-lecturer.js'),('20221013072714-create-lecturer.js'),('20221013090805-create-schedule.js'),('20221013121906-addcolumncourse.js'),('20221013123156-deletecolumncourse.js'),('20221013123241-deletecolumncourse2.js'),('20221013123611-deletecolumncourse3.js'),('20221013123905-addcolumnschedules.js'),('20221014072506-addcolumnschedules1.js'),('20221014073138-addcolumnschedules2.js'),('20221014080501-addcolumnschedules3.js'),('20221109021950-change-academic-column.js'),('20221226092929-add-schedule-password.js'),('20221226100912-remove-schedule-method-column.js'),('20221226101052-add-schedule-method-column.js'),('20221227080515-create-finishedcourse.js'),('20221227122050-add-finishedSchedule-scheduleid.js'),('20221227123540-remove-finishedSchedule-scheduleid.js'),('20221227123628-add-finishedcourse-scheduleid.js'),('20221227133614-change-finishedcourse-scheduleid.js'),('20221230073052-finishedcourse-add-isdone.js'),('20221230082015-finished-defaultValue-value.js'),('20221230114925-create-studentrecord.js'),('20221230120225-create-schedulerecord.js'),('20221230130941-studentrecord-addlecturenik.js'),('20221230222547-schedulerecord-addstudentrecordid.js'),('20221230225236-remove-studentrecordid.js'),('20221230234902-remove-schedule-recordid.js'),('20221231031353-remove-schedulerecord_lecturernik.js'),('20221231071126-remove-roleid.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentrecords`
--

DROP TABLE IF EXISTS `studentrecords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentrecords` (
  `id` varchar(255) NOT NULL,
  `student_id` varchar(255) DEFAULT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `schedule_id` varchar(255) DEFAULT NULL,
  `acceptDate` datetime DEFAULT NULL,
  `isPresent` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `lecturer_nik` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  KEY `course_id` (`course_id`),
  KEY `schedule_id` (`schedule_id`),
  KEY `lecturer_nik` (`lecturer_nik`),
  CONSTRAINT `studentrecords_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `studentrecords_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  CONSTRAINT `studentrecords_ibfk_3` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`),
  CONSTRAINT `studentrecords_ibfk_4` FOREIGN KEY (`lecturer_nik`) REFERENCES `lecturers` (`nik`),
  CONSTRAINT `studentrecords_lecturer_nik_foreign_idx` FOREIGN KEY (`lecturer_nik`) REFERENCES `lecturers` (`nik`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentrecords`
--

LOCK TABLES `studentrecords` WRITE;
/*!40000 ALTER TABLE `studentrecords` DISABLE KEYS */;
INSERT INTO `studentrecords` VALUES ('XDnJD','1973013','IN212','YIzVZ','2022-12-31 07:00:43',1,'2022-12-31 07:00:43','2022-12-31 07:00:43','710003');
/*!40000 ALTER TABLE `studentrecords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `department_id` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `academic_period_id` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`),
  KEY `academic_period_id` (`academic_period_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`academic_period_id`) REFERENCES `academicperiods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('1973010','haekal mahendra','$2b$10$Vepc.YgRdd8q5RDu3ytaJ.aMx69Zfn8cfnNeKxlzqiz8szAbfbBmG','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','https://i.ibb.co/QNXQM3F/user.png','2022-12-27 07:12:57','2022-12-27 07:12:57','28104643-57bb-466b-9a68-091f3322c450','haekal762013@gmail.com'),('1973013','renaldy kharisma','$2b$10$7gmhtBunJsFHZ45ml0J.3OZM7TS08OaOsFx6v71FjDuI2cFNtDjua','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','https://i.ibb.co/QNXQM3F/user.png','2022-12-23 07:14:38','2022-12-23 07:14:38','28104643-57bb-466b-9a68-091f3322c450','renaldykhrsm8@gmail.com');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-31 14:49:50
