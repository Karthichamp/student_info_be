const fs = require('fs');
const path = require('path');
const studentJsonPath = path.dirname(__dirname) + '/data/student.json';

module.exports = {
    add: async (req, res) => {
        let student = req.body;
        const studentsData = JSON.parse(fs.readFileSync(studentJsonPath));
        studentsData.push(student);
        await fs.writeFileSync(studentJsonPath, JSON.stringify(studentsData));
        res.code(200).send("Student recorded added successfully")
    },
    update: async (req, res) => {
        const stuId = req.params.studentId;
        let student = req.body;
        const studentsData = JSON.parse(fs.readFileSync(studentJsonPath));
        let index = studentsData.findIndex(stu => stu.studentId == stuId);
        if (index >= 0) {
            studentsData[index] = student;
            await fs.writeFileSync(studentJsonPath, JSON.stringify(studentsData));
            res.code(200).send("Updated the student record successfully");
        }
        else {
            res.code(402).send("Student ID not found");
        }
    },
    delete: async (req, res) => {
        const stuId = req.params.studentId;
        const studentsData = JSON.parse(fs.readFileSync(studentJsonPath));
        let index = studentsData.findIndex(stu => stu.studentId == stuId);
        if (index >= 0) {
            studentsData.splice(index, 1);
            await fs.writeFileSync(studentJsonPath, JSON.stringify(studentsData));
            res.code(200).send("Deleted the student record successfully");
        }
        else {
            res.code(402).send("Student ID not found");
        }
    },
    report: async (req, res) => {
        const studentsData = JSON.parse(fs.readFileSync(studentJsonPath));
        res.code(200).send(studentsData);
    }
}