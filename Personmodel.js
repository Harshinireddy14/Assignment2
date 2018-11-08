function Person(first, last, courseDetail) {
    this.firstName = first;
    this.lastName = last;
    this.courseDetail = courseDetail
}
function courseDetail(course, grade)
{
    this.course = course;
    this.grade = grade
}

var person1 = new Person("Mounika", "Devireddy", [new courseDetail("course1","A"),new courseDetail("cours2","B"),new courseDetail("course3","A")]);
var person6 = new Person("Harshini", "Devireddy", [new courseDetail("course1","A"),new courseDetail("cours2","a"),new courseDetail("course3","A+")]);
var person2 = new Person("John", "Doe", [new courseDetail("course1","A"),new courseDetail("cours2","B"),new courseDetail("course3","A")]);
var person3 = new Person("Monica", "Geller", [new courseDetail("course1","A"),new courseDetail("cours2","B"),new courseDetail("course3","A")]);
var person5 = new Person("Recheal", "Greeen", [new courseDetail("course1","A"),new courseDetail("cours2","B"),new courseDetail("course3","A")]);
var persons = [person1,person2,person3,person5,person6];