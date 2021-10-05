import { IScrape } from "../ports/IScrape";
import { ICompanyResult } from "../../../routes/gateway/results/ICompanyResult";

const axios = require('axios').default;

export class ScrapeClient implements IScrape{
    async updateAll(): Promise<ICompanyResult> {
        const response: ICompanyResult = await axios.get('http://localhost:5000/run')

        return response;
    }

    async updateOne(companyName: string): Promise<ICompanyResult> {
        const response: ICompanyResult = await axios.get(`http://localhost:5000/run/${companyName}`)

        return response;
    }
}