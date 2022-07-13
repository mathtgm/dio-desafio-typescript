// Como podemos melhorar o esse código usando TS? 

interface Pessoa {
    nome : string,
    idade : number,
    profissao : profissao
}

enum profissao { 
    'Atriz', 
    'Padeiro'
};

let pessoa1 = {} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = profissao.Atriz;

let pessoa2 = {} as Pessoa
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = profissao.Padeiro;

let pessoa3 : Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4 : Pessoa = {
    nome : "Carlos",
    idade : 19,
    profissao : profissao.Padeiro
}