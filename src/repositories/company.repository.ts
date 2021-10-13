import Sql = require("../infra/sql");
import {ICompanyResult} from "@/routes/gateway/results/ICompanyResult";

export class CompanyRepository{
    public static async insertOneRecordByCompanyId(company: ICompanyResult): Promise<void>{
        try{
            const { empresa_id, avaliadas, n_respondidas, nota, porcentagem_resp, respondidas_total, reclamacoes_total, reputacao_geral, voltaria_negocio, indice_solucao } = company.data.companies;

            await Sql.conectar(async (sql: Sql) => {
                await sql.query("INSERT INTO record " +
                    "(empresa_id, reputacao_geral, reclamacoes_total, respondidas_total, porcentagem_resp, nota, n_respondidas, avaliadas, indice_solucao, voltaria_negocio) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                    empresa_id, reputacao_geral, reclamacoes_total, respondidas_total, porcentagem_resp, nota, n_respondidas, avaliadas, indice_solucao, voltaria_negocio
                ]);
            })
        }
        catch (e) {
            console.log(e);
        }
    }

}

