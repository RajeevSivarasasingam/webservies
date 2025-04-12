const students = require('./studentdb')

function getstudents()
{
    return students;
}

function getStudent(id)
{
    return students.find((student)=>student.regno==id)
}

//
// function get

module.exports={getStudent,getstudents}
