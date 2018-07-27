class Student{
    constructor(name){
        this.name = name;
        this.grades = [];
        this.classes = [];
    }
    addClass(Class){
        this.classes.push(Class);
    }
    addGrade(Grade){
        this.grades.push(Grade);
    }
}
