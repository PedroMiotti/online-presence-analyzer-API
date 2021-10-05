import Sql = require("../infra/sql");

class CompanyRepository{
    public id: number;
    public name: string;
    public avaliadas: string
    public indice_solucao: string
    public n_respondidas: string
    public nota: string
    public porcentagem_resp: string
    public reclamacoes_total: string
    public reputacao_geral: string
    public respondidas_total: string
    public voltaria_negocio: string


    public static async updateOne(id: number): Promise<string>{
        try{
            await Sql.conectar(async (sql: Sql) => {

            })
        }
        catch (e) {
            console.log(e);
        }
    }

}

export = CompanyRepository;