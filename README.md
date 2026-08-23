# student-management-system
B.Tech IT Student Management System
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Student Management System | BBDEC</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

<div class="app">

    <!-- SIDEBAR -->

    <aside class="sidebar">

        <div class="logo">

            <h2>SMS<span>+</span></h2>

            <p>Student Management System</p>

        </div>

        <div class="college">

            Babu Banarasi Das Engineering college
            * {

    box-sizing: border-box;

    margin: 0;

    padding: 0;

}

body {

    font-family: Arial, Helvetica, sans-serif;

    background: #f5f7fb;

    color: #172033;

}

.app {

    min-height: 100vh;

    display: flex;

}

/* SIDEBAR */

.sidebar {

    width: 260px;

    height: 100vh;

    position: fixed;

    left: 0;

    top: 0;

    background: #111827;

    color: white;

    padding: 28px 18px;

}

.logo h2 {

    font-size: 30px;

}

.logo h2 span {

    color: #60a5fa;

}

.logo p {

    font-size: 11px;

    color: #9ca3af;

    margin-top: 4px;

}

.college {

    font-size: 12px;

    color: #aab5c7;

    line-height: 1.5;

    margin: 28px 10px;

}

nav {

    display: flex;

    flex-direction: column;

    gap: 6px;

}

.nav-btn {

    border: none;

    background: transparent;

    color: #cbd5e1;

    padding: 13px 14px;

    text-align: left;

    border-radius: 10px;

    cursor: pointer;

    font-size: 14px;

}

.nav-btn:hover {

    background: #1e293b;

    color: white;

}

.nav-btn.active {

    background: #2563eb;

    color: white;

}

/* PROFILE */

.student-profile {

    position: absolute;

    bottom: 25px;

    left: 28px;

    right: 20px;

    border-top: 1px solid #293548;

    padding-top: 18px;

}

.student-profile strong {

    display: block;

    font-size: 14px;

}

.student-profile small {

    display: block;

    color: #94a3b8;

    margin-top: 5px;

    font-size: 11px;

}

/* MAIN */

.main {

    margin-left: 260px;

    width: calc(100% - 260px);

    padding: 32px 5%;

}

/* HEADER */

.topbar {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 30px;

}

.course {

    color: #2563eb;

    font-size: 12px;

    font-weight: bold;

    text-transform: uppercase;

    letter-spacing: 0.07em;

}

h1 {

    font-size: 32px;

    margin-top: 6px;

}

.theme-btn {

    border: none;

    background: white;

    padding: 11px 15px;

    border-radius: 10px;

    cursor: pointer;

    font-size: 18px;

}

/* CARDS */

.cards {

    display: grid;

    grid-template-columns:

        repeat(4, 1fr);

    gap: 18px;

}

.card {

    background: white;

    border: 1px solid #e7ebf2;

    border-radius: 16px;

    padding: 22px;

    box-shadow:

        0 5px 20px rgba(23, 32, 51, 0.05);

}

.card small {

    color: #64748b;

}

.metric {

    font-size: 28px;

    font-weight: 800;

    margin-top: 10px;

}

/* GRID */

.grid {

    display: grid;

    grid-template-columns: 2fr 1fr;

    gap: 18px;

    margin-top: 18px;

}

.panel {

    background: white;

    border: 1px solid #e7ebf2;

    border-radius: 16px;

    padding: 22px;

    box-shadow:

        0 5px 20px rgba(23, 32, 51, 0.05);

}

.panel h3 {

    margin-bottom: 18px;

}

/* ROW */

.row {

    display: flex;

    justify-content: space-between;

    padding: 13px 0;

    border-bottom: 1px solid #edf0f5;

}

/* ATTENDANCE BAR */

.bar {

    height: 10px;

    background: #e8edf5;

    border-radius: 20px;

    overflow: hidden;

    margin: 15px 0;

}

.bar i {

    display: block;

    height: 100%;

    background: #2563eb;

    border-radius: 20px;

}

/* TABLE */

.table {

    width: 100%;

    border-collapse: collapse;

}

.table th,

.table td {

    text-align: left;

    padding: 13px;

    border-bottom: 1px solid #edf0f5;

    font-size: 14px;

}

.table th {

    color: #64748b;

    font-size: 12px;

    text-transform: uppercase;

}

/* BADGE */

.badge {

    display: inline-block;

    padding: 5px 10px;

    border-radius: 20px;

    background: #dbeafe;

    color: #1d4ed8;

    font-size: 12px;

    font-weight: bold;

}

/* SEARCH */

.search {

    width: 100%;

    padding: 13px;

    border: 1px solid #dbe3ee;

    border-radius: 10px;

    margin-bottom: 18px;

    outline: none;

}

.search:focus {

    border-color: #2563eb;

}

/* DARK MODE */

body.dark {

    background: #0b1220;

    color: #e5e7eb;

}

body.dark .card,

body.dark .panel,

body.dark .theme-btn {

    background: #111827;

    color: #e5e7eb;

    border-color: #243044;

}

body.dark .table th,

body.dark .table td,

body.dark .row {

    border-color: #263244;

}

body.dark .search {

    background: #111827;

    color: white;

    border-color: #334155;

}

/* MOBILE */

@media(max-width: 900px) {

    .sidebar {

        width: 75px;

    }

    .logo p,

    .logo h2,

    .college,

    .student-profile {

        display: none;

    }

    .nav-btn {

        font-size: 0;

        text-align: center;

    }

    .nav-btn:first-letter {

        font-size: 18px;

    }

    .main {

        margin-left: 75px;

        width: calc(100% - 75px);

        padding: 22px;

    }

    .cards {

        grid-template-columns:

            repeat(2, 1fr);

    }

    .grid {

        grid-template-columns: 1fr;

    }

}

@media(max-width: 600px) {

    .cards {

        grid-template-columns: 1fr;

    }

    .table {

        font-size: 12px;

    }

    .table th,

    .table td {

        padding: 9px;

    }

    h1 {

        font-size: 25px;
        }
    }

    const students = [

    [

        "1850810074",

        "Priyansh Agnihotri",

        "B.Tech IT",

        "Final Year",

        "Active"

    ],

    [

        "1850810075",

        "Aarav Sharma",

        "B.Tech IT",

        "Final Year",

        "Active"

    ],

    [

        "1850810076",

        "Ananya Singh",

        "B.Tech IT",

        "Final Year",

        "Active"

    ],

    [

        "1850810077",

        "Rahul Verma",

        "B.Tech IT",

        "Final Year",

        "Active"

    ],

    [

        "1850810078",

        "Karan Gupta",

        "B.Tech IT",

        "Final Year",

        "Active"

    ]

];

const content =

    document.getElementById("content");

const pageTitle =

    document.getElementById("pageTitle");

/* DASHBOARD */

function dashboard() {

    return `

        <div class="cards">

            <div class="card">

                <small>Total Students</small>

                <div class="metric">128</div>

            </div>

            <div class="card">

                <small>Average Attendance</small>

                <div class="metric">86%</div>

            </div>

            <div class="card">

                <small>Average CGPA</small>

                <div class="metric">8.21</div>

            </div>

            <div class="card">

                <small>Pending Fees</small>

                <div class="metric">₹24,500</div>

            </div>

        </div>

        <div class="grid">

            <div class="panel">

                <h3>Attendance Overview</h3>

                <p>

                    Overall attendance

                </p>

                <div class="bar">

                    <i style="width:86%"></i>

                </div>

                <p>

                    86% present this semester

                </p>

                <div class="row">

                    <span>Present</span>

                    <b>110</b>

                </div>

                <div class="row">

                    <span>Absent</span>

                    <b>18</b>

                </div>

            </div>

            <div class="panel">

                <h3>Student Profile</h3>

                <div class="row">

                    <span>Name</span>

                    <b>Priyansh Agnihotri</b>

                </div>

                <div class="row">

                    <span>Roll No.</span>

                    <b>1850810074</b>

                </div>

                <div class="row">

                    <span>Branch</span>

                    <b>Information Technology</b>

                </div>

                <div class="row">

                    <span>Year</span>

                    <b>Final Year</b>

                </div>

                <div class="row">

                    <span>Status</span>

                    <span class="badge">Active</span>

                </div>

            </div>

        </div>

    `;

}

/* STUDENTS */

function studentsPage() {

    return `

        <div class="panel">

            <h3>Student Records</h3>

            <input

                class="search"

                type="text"

                placeholder="Search by name or roll number..."

                oninput="filterStudents(this.value)"

            >

            <table class="table">

                <thead>

                    <tr>

                        <th>Roll No.</th>

                        <th>Name</th>

                        <th>Course</th>

                        <th>Year</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody id="studentRows">

                    ${studentRows(students)}

                </tbody>

            </table>

        </div>

    `;

}

function studentRows(data) {

    return data.map(student => `

        <tr>

            <td>${student[0]}</td>

            <td>${student[1]}</td>

            <td>${student[2]}</td>

            <td>${student[3]}</td>

            <td>

                <span class="badge">

                    ${student[4]}

                </span>

            </td>

        </tr>

    `).join("");

}

function filterStudents(search) {

    const query =

        search.toLowerCase();

    const filtered =

        students.filter(student =>

            student.join(" ")

                .toLowerCase()

                .includes(query)

        );

    document.getElementById(

        "studentRows"

    ).innerHTML =

        studentRows(filtered);

}

/* ATTENDANCE */

function attendance() {

    const subjects = [

        ["Software Engineering", 34, 38, "89%"],

        ["Cloud Computing", 31, 36, "86%"],

        ["Artificial Intelligence", 33, 39, "85%"],

        ["Major Project", 12, 15, "80%"]

    ];

    return `

        <div class="panel">

            <h3>

                Attendance —

                Priyansh Agnihotri

            </h3>

            <p>

                Semester Attendance:

                <b>86%</b>

            </p>

            <div class="bar">

                <i style="width:86%"></i>

            </div>

            <table class="table">

                <thead>

                    <tr>

                        <th>Subject</th>

                        <th>Present</th>

                        <th>Total</th>

                        <th>Attendance</th>

                    </tr>

                </thead>

                <tbody>

                    ${subjects.map(subject => `

                        <tr>

                            <td>${subject[0]}</td>

                            <td>${subject[1]}</td>

                            <td>${subject[2]}</td>

                            <td>

                                <span class="badge">

                                    ${subject[3]}

                                </span>

                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;

}

/* MARKS */

function marks() {

    const subjects = [

        ["Software Engineering", 27, 61, "A"],

        ["Cloud Computing", 26, 58, "A"],

        ["Artificial Intelligence", 25, 55, "B+"],

        ["Major Project", 29, 64, "A+"]

    ];

    return `

        <div class="panel">

            <h3>Marks & Results</h3>

            <table class="table">

                <thead>

                    <tr>

                        <th>Subject</th>

                        <th>Internal</th>

                        <th>External</th>

                        <th>Grade</th>

                    </tr>

                </thead>

                <tbody>

                    ${subjects.map(subject => `

                        <tr>

                            <td>${subject[0]}</td>

                            <td>${subject[1]}/30</td>

                            <td>${subject[2]}/70</td>

                            <td>

                                <span class="badge">

                                    ${subject[3]}

                                </span>

                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

            <br>

            <h3>

                Current CGPA:

                <strong>8.21</strong>

            </h3>

        </div>

    `;

}

/* FEES */

function fees() {

    return `

        <div class="cards">

            <div class="card">

                <small>Total Fee</small>

                <div class="metric">

                    ₹1,20,000

                </div>

            </div>

            <div class="card">

                <small>Paid</small>

                <div class="metric">

                    ₹1,00,000

                </div>

            </div>

            <div class="card">

                <small>Due</small>

                <div class="metric">

                    ₹20,000

                </div>

            </div>

            <div class="card">

                <small>Status</small>

                <div class="metric">

                    Pending

                </div>

            </div>

        </div>

        <div class="panel" style="margin-top:18px">

            <h3>Fee History</h3>

            <table class="table">

                <thead>

                    <tr>

                        <th>Date</th>

                        <th>Type</th>

                        <th>Amount</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>10 Aug 2026</td>

                        <td>Semester Fee</td>

                        <td>₹40,000</td>

                        <td>

                            <span class="badge">

                                Paid

                            </span>

                        </td>

                    </tr>

                    <tr>

                        <td>05 Apr 2026</td>

                        <td>Semester Fee</td>

                        <td>₹40,000</td>

                        <td>

                            <span class="badge">

                                Paid

                            </span>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    `;

}

/* PAGE RENDER */

function renderPage(page) {

    const pages = {

        dashboard: dashboard,

        students: studentsPage,

        attendance: attendance,

        marks: marks,

        fees: fees

    };

    const titles = {

        dashboard: "Dashboard",

        students: "Students",

        attendance: "Attendance",

        marks: "Marks & Results",

        fees: "Fees"

    };

    pageTitle.textContent =

        titles[page];

    content.innerHTML =

        pages[page]();

}

/* NAVIGATION */

document

    .querySelectorAll(".nav-btn")

    .forEach(button => {

        button.addEventListener(

            "click",

            () => {

                document

                    .querySelectorAll(".nav-btn")

                    .forEach(btn =>

                        btn.classList.remove(

                            "active"

                        )

                    );

                button.classList.add(

                    "active"

                );

                renderPage(

                    button.dataset.page

                );

            }

        );

    });

/* DARK MODE */

document

    .getElementById("themeBtn")

    .addEventListener("click", () => {

        document.body.classList.toggle(

            "dark"

        );

        const dark =

            document.body.classList.contains(

                "dark"

            );

        document.getElementById(

            "themeBtn"

        ).textContent =

            dark ? "☀️" : "🌙";

    });

/* INITIAL PAGE */

renderPage("dashboard");

# Student Management System

## B.Tech IT Final Year Project

A web-based Student Management System developed for academic management.

### Student Details

**Name:** Priyansh Agnihotri

**Roll Number:** 1850810074

**Course:** B.Tech Information Technology

**Year:** Final Year

**College:** Babu Banarasi Das Engineering College

---

## Features

- Student Dashboard

- Student Records

- Student Search

- Attendance Management

- Marks and Results

- CGPA Display

- Fee Management

- Fee History

- Responsive Design

- Dark Mode

---

## Technologies Used

- HTML5

- CSS3

- JavaScript

- Responsive Web Design

---

## Project Structure

student-management-system/

├── index.html

├── style.css

├── script.js

└── README.md

---

## How to Run

Open `index.html` in any modern web browser.

---

## GitHub Pages

This project can be deployed using GitHub Pages.
    

            
