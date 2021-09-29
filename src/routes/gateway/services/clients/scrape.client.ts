import { IScrape } from "../ports/IScrape";

const axios = require('axios').default;

export class ScrapeClient implements IScrape{
    async updateAll(): Promise<string> {
        const response = await axios.get('http://localhost:5000/run')
        console.log(response)
        return Promise.resolve("");
    }

    async updateOne(companyId: number): Promise<string> {
        return Promise.resolve("");
    }
}