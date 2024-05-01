const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

async function sendDB(e) {
  e.preventDefault();
  const form = document.getElementById("form");
  const name = form["name"].value;
  const studentsNum = +form["studentsNum"].value;
  const startYear = +form["startYear"].value;
  if (name.split("").some((char) => !letters.includes(char))) {
    return alert("invalid name");
  }
  if (isNaN(studentsNum) || studentsNum > 20) {
    return alert("invalid studentsNum");
  }
  if (isNaN(startYear) || startYear > 9999 || startYear < 1000) {
    return alert("invalid start year");
  }
  const res = await fetch("http://localhost:3000/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, studentsNum: studentsNum, startYear }),
  });
  if (res.status !== 200) {
    return alert("user already exists");
  }
}

async function displayAllCourses() {
  const res = await fetch("http://localhost:3000/all");
  const courses = await res.json();
  courses.forEach((course) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = `${course.name} | ${course.studentsNum} | ${course.startYear}`;
    div.append(span);
    document.body.append(div);
  });
}
