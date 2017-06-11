import * as R from 'ramda';

interface Student {
    name: string;
    score: number;
}
const reduceToNamesBy = R.reduceBy((acc: string[], student: Student) => acc.concat(student.name), []);
const namesByGrade = reduceToNamesBy(function(student: Student) {
      let score = student.score;
      return score < 65 ? 'F' :
             score < 70 ? 'D' :
             score < 80 ? 'C' :
             score < 90 ? 'B' : 'A';
});
let students = [{name: 'Lucy', score: 92},
                {name: 'Drew', score: 85},
                {name: 'Bart', score: 62}];
// @dts-jest:skip Dictionary<string[]>
namesByGrade(students);
// {
//   'A': ['Lucy'],
//   'B': ['Drew']
//   'F': ['Bart']
// }
