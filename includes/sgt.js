//Student Grade Table
class SGT{
    constructor(){
        this.Classes = [];
        this.students = [];
    }

    /**
     *
     * @param name
     * @return none
     */
    addClass(name){
        var course = new Class(name);
        this.Classes.push(course);
    }

    /**
     *
     * @param name
     * @return none
     */
    addStudent(name){
        var student = new Student(name)
        this.students.push(student);
    }

    /**
     *
     * @param Class
     * @param student
     */
    addStudentToClass(Class, student){

    }

    /**
     *
     * @param Class - this is optional
     * if supplied with Class than return students with particulars
     * else return all the students
     * @return
     */
    listClassRosters(Class){

    }

    /**
     *
     * @param student
     * @return an individual student
     */
    findStudent(student){

    }
}