// Como podemos melhorar o esse código usando TS? 

enum Trabalho {
    Atriz,
    Padeiro
}

type humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}
let pessoa1: humano = {
    nome: "maria",
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: humano = {
    nome: 'leo',
    idade: 19,
    profissao: Trabalho.Padeiro
};


let pessoa3: humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4 : humano = {
    nome : "carlos",
    idade : 19,
    profissao : Trabalho.Padeiro
};