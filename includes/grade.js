
class Grade {
    constructor(student, course, grade){
        this.letterGrade = grade;
        this.student = student;
        this.course = course;
        this.date = new Date();
    }

    getData(){
        let studentObj = {};
        studentObj.name = this.student;
        studentObj.course = this.course;
        studentObj.grade = this.letterGrade;
        studentObj.time = this.date;

        return studentObj;
    }

    editGrade(){

    }

}