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
