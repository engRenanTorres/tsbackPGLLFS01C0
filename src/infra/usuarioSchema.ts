export type UsarioSchema = {
    id: number;
    nome: string;
    ativo: boolean,
    horasAulas?: bigint,
    contato?: Record<string, unknown>
}
