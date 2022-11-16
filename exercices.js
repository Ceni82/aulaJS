// 1. Declare uma variável de nome weight

//var weight;
//or
//let weight;


// 2. Que tipo de dado é a variável acima?

//console.log(typeof weight)

/* 3. Declare uma variável e atribua valores para cada um dos dados:
    *name: string
    * age: number (integer)
    * stars: number (float)
    * isSubscribed: Boolean
*/
//let name = "mateus"
//let age = 34
//let stars = 4.56
//let isSubscribed = true

//4. A variável student abaixo é de que mtipo de dado?
//OBJECT ===>"{}"
//let student ={}
//console.log(student)

//4.1. Atribua a ela as mermas propriedades e valores do exercício 3

let student = {
    name: "Mateus",
    age: 40,
    weight: 94.2,
}

//console.log (`O ${student.name} tem ${student.age} anos e pesa ${student.weight} kg`)


//5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor,ou seja, som,ente o array vazio.

//let students = []

//6. Retribua valor para avariável acim, colocando dentro dela o objetostudent da questáo 4. (Não copie e cole o objeto, mas usar o objeto criado e o inserir ele no Array)

/*/students = [
    student
]
console.log(students)*/

// 7. coloque no console o valor da posição zero do array acima

students = [
    student
]
console.log(student[0])