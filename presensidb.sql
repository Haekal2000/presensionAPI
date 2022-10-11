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
INSERT INTO `SequelizeMeta` VALUES ('20221007021617-create-student.js'),('20221010115754-create-faculty.js'),('20221010122328-create-student.js'),('20221010122924-create-department.js'),('20221010123212-create-faculty.js'),('20221010123328-create-department.js'),('20221010124350-create-faculty.js'),('20221010131349-create-faculty.js'),('20221010131434-create-department.js'),('20221010131527-create-department.js'),('20221010131623-create-student.js'),('20221011012414-create-course.js'),('20221011073005-create-student.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
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
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('FVXypV9FLp','wibu','$2b$10$B2RfJLVrAPaKp8l62/VNGuQS3AdX4IQcbycQC8SZtvh1aeh.TSW5u','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','https://i.ibb.co/QNXQM3F/user.png','2022-10-11 07:35:50','2022-10-11 07:35:50'),('L3XqVmuPY2','haekal wibu','$2b$10$SdJ09KmY5W8WVg5CvpXgBOCoOGUxmxcDmrR6GMSU8Uiedpp2aNOn.','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','https://i.ibb.co/QNXQM3F/user.png','2022-10-11 10:57:44','2022-10-11 10:57:44'),('O7i8oXpcVZ','haekal 123','$2b$10$mJsmdAHLYOa/SfEVXI9z6OX6HXkGK5nIEiGT13mRKzSMqeliCoDMK','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','https://i.ibb.co/QNXQM3F/user.png','2022-10-11 10:00:01','2022-10-11 10:00:01'),('zKJPhXU12I','haekal','$2b$10$EsC6avFbVWxuPJagPt/qMuFQ6dsQ8iCSgs2MR1.C5UYSvRVN.dXJW','46c0d3ec-0063-4f26-8f14-6be3bbe99f07','https://i.ibb.co/QNXQM3F/user.png','2022-10-11 07:31:53','2022-10-11 07:31:53');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'presensidb'
--

--
-- Dumping routines for database 'presensidb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-11 19:04:15
