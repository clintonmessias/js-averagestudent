const students = [
  {
    name: 'João',
    nota1: 6,
    nota2: 3
  },
  {
    name: 'Giovana',
    nota1: 10,
    nota2: 9
  },
  {
    name: 'Clinton',
    nota1: 9,
    nota2: 9
  },
  {
    name: 'Rafaela',
    nota1: 7,
    nota2: 8
  }
]

const averageCalc = function (students) {
  for(let student of students){
    let average = (student.nota1 + student.nota2)/2;

    let approved = average > 7 ? `Parabéns, ${student.name}! Você foi aprovado(a)` : `Não foi dessa vez, ${student.name}! Tente novamente!`;

    alert(`
      A média do(a) aluno(a) ${student.name} é: ${average}

      ${approved}
    `);

  };
};

averageCalc(students);