new Vue({
  el: "#vue-app",
  data: {
    fname: "",
    lname: "",
    fullName: "",
    error: "",
    validNumber: "",
    courseDetails: {
      title: "",
      credit: "",
      grade: "",
      gradePoint: "",
      score: "",
    },
    studentGrade: [],
  },
  methods: {
    gradeStudent() {
      if (this.fname == "") this.error = " enter your first name";
      else if (this.lname == "") this.error = "enter your last name";
      else if (this.courseDetails.title == "")
        this.error = "enter the course title";
      else if (this.courseDetails.score == "")
        this.error = "enter the course score";
      else if (this.courseDetails.credit == "")
        this.error = "enter the course credit unit";
      else {
        this.fullName = this.fname + " " + this.lname;
        this.validNumber = Number.isNaN(this.courseDetails.score);

        if (this.courseDetails.score >= 70 && this.validNumber == false) {
          this.courseDetails.grade = "GRADE A";
          this.courseDetails.gradePoint = 5.0;
        } else if (
          this.courseDetails.score >= 60 &&
          this.validNumber == false
        ) {
          this.courseDetails.grade = "GRADE B";
          this.courseDetails.gradePoint = 4.0;
        } else if (
          this.courseDetails.score >= 50 &&
          this.validNumber == false
        ) {
          this.courseDetails.grade = "GRADE C";
          this.courseDetails.gradePoint = 3.0;
        } else if (
          this.courseDetails.score >= 45 &&
          this.validNumber == false
        ) {
          this.courseDetails.grade = "GRADE D";
          this.courseDetails.gradePoint = 2.0;
        } else if (
          this.courseDetails.score >= 40 &&
          this.validNumber == false
        ) {
          this.courseDetails.grade = "GRADE E";
          this.courseDetails.gradePoint = 1.0;
        } else {
          this.courseDetails.grade = "GRADE F";
          this.courseDetails.gradePoint = 0.0;
        }
        this.studentGrade.push(this.courseDetails);

        this.courseDetails = {
          title: "",
          credit: "",
          grade: "",
          gradePoint: "",
          score: "",
        };
      }
    },
    clearError() {
      this.error = "";
    },

    resetGradingSystem() {
      this.fname = "";
      this.lname = "";
      this.fullName = "";
      this.courseDetails = {
        title: "",
        credit: "",
        grade: "",
        gradePoint: "",
        score: "",
      };
      this.studentGrade = [];
    },
    removeCourse(index) {
      this.studentGrade.splice(index, 1);
    },
    max100() {
      if (this.courseDetails.score > 100) this.courseDetails.score = null;
    },
  },
  computed: {
    gpa() {
      let totalCredits = 0;
      let totalPoints = 0;

      this.studentGrade.forEach((courseDetails) => {
        totalCredits += parseFloat(courseDetails.credit);
        totalPoints +=
          parseFloat(courseDetails.gradePoint) *
          parseFloat(courseDetails.credit);
      });

      return (totalPoints / totalCredits).toFixed(2);
    },
    gpaCalc() {
      let totalCredits = 0;
      let totalPoints = 0;

      this.studentGrade.forEach((courseDetails) => {
        totalCredits += parseFloat(courseDetails.credit);
        totalPoints +=
          parseFloat(courseDetails.gradePoint) *
          parseFloat(courseDetails.credit);
      });

      return 874 - (874 * (totalPoints / totalCredits).toFixed(2)) / 5;
    },
  },
});
