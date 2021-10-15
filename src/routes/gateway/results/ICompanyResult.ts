export type companyInfo = {
    empresa_id: string,
    nome_empresa: string,
    avaliadas: string,
    indice_solucao: string,
    n_respondidas: string,
    nota: string,
    porcentagem_resp: string,
    reclamacoes_total: string,
    reputacao_geral: string,
    respondidas_total: string,
    voltaria_negocio: string
}


export interface ICompanyResult {
    data: {
        companies: companyInfo[],
        message: string,
        status: number
    }
}