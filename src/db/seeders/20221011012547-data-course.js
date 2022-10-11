"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          "id": "IN210",
          "name": "Jaringan Komputer",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN211",
          "name": "Logika Informatika",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN212",
          "name": "Web Dasar",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN213",
          "name": "Bahasa Inggris",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN214",
          "name": "Pengantar Aplikasi Komputer",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN215",
          "name": "Sibernetika",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN216",
          "name": "Computational Thinking",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN217",
          "name": "Teknik Komunikasi Bahasa Inggris",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN220",
          "name": "Dasar Pemrograman",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN221",
          "name": "Arsitektur dan Keamanan Jaringan",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN222",
          "name": "Arsitektur Komputer Modern",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN223",
          "name": "Aljabar Linier",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN224",
          "name": "Desain Basis Data",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN230",
          "name": "Rekayasa Perangkat Lunak",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN231",
          "name": "Teknologi Multimedia",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN232",
          "name": "Matematika Diskrit",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN233",
          "name": "Algoritma dan Struktur Data",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN234",
          "name": "Paradigma Pemrograman",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN235",
          "name": "Pola Desain Perangkat Lunak",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN236",
          "name": "Pemrograman Terapan",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN237",
          "name": "Basis Data Lanjut",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN240",
          "name": "Pemrograman Web Lanjut",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN241",
          "name": "Statistika",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN242",
          "name": "Kecerdasan Mesin",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN243",
          "name": "Sistem Operasi Komputer",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN244",
          "name": "Strategi Algoritmik",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN250",
          "name": "Manajemen Proyek",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN252",
          "name": "Desain Antarmuka",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN253",
          "name": "Grafika Komputer",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN254",
          "name": "Proyek Perangkat Lunak",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN255",
          "name": "Proses Bisnis",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN260",
          "name": "Metode Penelitian Informatika",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN261",
          "name": "Start-up Technopreneur",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN262",
          "name": "Pemrograman Mobile",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN263",
          "name": "Competitive Programming",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN264",
          "name": "Web Semantik",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN265",
          "name": "Pemrosesan Data Berbasis Cloud",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN266",
          "name": "Pengenalan Pemrograman Game",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN267",
          "name": "Administrasi Jaringan Komputer",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN268",
          "name": "Ethical Hacking 1",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN269",
          "name": "Kecerdasan Bisnis",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN270",
          "name": "Kerja Praktik",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN271",
          "name": "Internet of Things",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN272",
          "name": "Pengolahan Citra Digital",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN273",
          "name": "Pemrograman Game",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN274",
          "name": "Ethical Hacking 2",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN275",
          "name": "Progressive Web Apps",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN276",
          "name": "Pencarian Informasi Media Online",
          "credits": "3",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN277",
          "name": "Topik Lanjut Data Analyst 1",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN278",
          "name": "Topik Lanjut Multimedia and Game Developer 1",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN279",
          "name": "Topik Lanjut Network and Security Architect 1",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN280",
          "name": "Seminar Tugas Akhir",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN281",
          "name": "Tugas Akhir",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN282",
          "name": "Topik Lanjut Data Analyst 2",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN283",
          "name": "Topik Lanjut Multimedia and Game Developer 2",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN284",
          "name": "Topik Lanjut Network and Security Architect 2",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN285",
          "name": "Pemrograman Multi-Platform",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "IN286",
          "name": "Pemrosesan Bahasa Alami",
          "credits": "4",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "MK017",
          "name": "Pancasila",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "MK024",
          "name": "Pendidikan Kewarganegaraan",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "MK037",
          "name": "Kepemimpinan",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "MK039",
          "name": "Bahasa Indonesia",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "MK060",
          "name": "Fenomenologi Agama",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "MK061",
          "name": "Etika Profesi",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "id": "MK062",
          "name": "Pendidikan Agama Kristen",
          "credits": "2",
          "department_id": "46c0d3ec-0063-4f26-8f14-6be3bbe99f07",
          "createdAt": new Date(),
          "updatedAt": new Date()
      }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('courses', null, {});
  },
};
