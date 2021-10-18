import Sql = require("../infra/sql");
import {companyInfo, ICompanyResult} from "../routes/gateway/results/ICompanyResult";

export class CompanyRepository {
    public static async insertOneCompanyRecord(company: companyInfo): Promise<void> {
        try {
            const {
                empresa_id, avaliadas, n_respondidas, nota, porcentagem_resp, respondidas_total, reclamacoes_total,
                reputacao_geral, voltaria_negocio, indice_solucao
            } = company;

            await Sql.conectar(async (sql: Sql) => {
                await sql.query("INSERT INTO record " +
                    "(empresa_id, reputacao_geral, reclamacoes_total, respondidas_total, porcentagem_resp, nota, n_respondidas, avaliadas, indice_solucao, voltaria_negocio) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                    empresa_id, reputacao_geral, reclamacoes_total, respondidas_total, porcentagem_resp, nota, n_respondidas, avaliadas, indice_solucao, voltaria_negocio
                ]);
            })
        } catch (e) {
            console.log(e);
        }
    }

    public static async getCompanyRecordById(companyId: number): Promise<any[]>{
        try{
            let companyRecords: any[];

            await Sql.conectar(async (sql: Sql) => {
                companyRecords = await sql.query("SELECT * FROM record WHERE empresa_id = ? ", [companyId]);

            })

            return companyRecords;

        }catch (e) {
            console.log(e);
        }
    }

    public static async getCompaniesRecords(): Promise<any[]>{
        try{
            let companiesRecords: any[];

            await Sql.conectar(async (sql: Sql) => {
                companiesRecords = await sql.query("SELECT * FROM record", []);
            })

            return companiesRecords;

        }catch (e) {
            console.log(e);
        }
    }

}

