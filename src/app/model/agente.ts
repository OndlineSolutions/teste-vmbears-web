export class Agente {
    codigo: number;
    data: String;
    regioes: Regiao[];
}

export class Regiao {
    sigla: String;
    geracao: Geracao[];
    compra: Compra[];
    precoMedio: PrecoMedio[];
}

export class Geracao {
    valor: String;
}

export class Compra {
    valor: String;
}

export class PrecoMedio {
    valor: String;
}