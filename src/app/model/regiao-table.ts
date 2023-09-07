import { Geracao, Compra, PrecoMedio } from "./agente";

export class RegiaoTable{
    codigo: number;
    data: String;
    sigla: String;
    geracao: Geracao[];
    compra: Compra[];
    precoMedio: PrecoMedio[];

    constructor(){
        
    }
}