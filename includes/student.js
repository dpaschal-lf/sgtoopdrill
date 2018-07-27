class Student{
    constructor(name){
        this.name = name;
        this.grades = [];
        this.classes = [];
    }
    addClass(course){
        this.classes.push(course);
    }
    addGrade(grade){
        this.grades.push(grade);
    }
}
