// Como podemos rodar isso em um arquivo .ts sem causar erros? 


// Solução 1

interface employee {
    code : number,
    name : string
};

let employee : employee = {
    code : 10,
    name : 'Matheus'
};

// Solucação 2
let employee2 = {
    code : 10,
    name : 'Gabriel'
};

//Solução 3

let employee3 = {} as employee;
employee3.code = 10;
employee3.name = 'Carlos';