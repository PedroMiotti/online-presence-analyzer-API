import { IScrape } from "../routes/gateway/ports/IScrape";
import { _scrapeClient } from "../routes/gateway/container";
import { ICompanyResult } from "../routes/gateway/results/ICompanyResult";
import { CompanyRepository } from "../repositories/company.repository";

export class ScrapeService {
    private readonly _scrapeClient: IScrape;

    public constructor(_scrapeClient: IScrape) {
        this._scrapeClient = _scrapeClient;
    }

    public async triggerOne(companyName: string): Promise<ICompanyResult>{
        const companyData: ICompanyResult = await _scrapeClient.updateOne(companyName);

        await CompanyRepository.insertOneRecordByCompanyId(companyData);

        return companyData;
    }

    public async triggerAll(): Promise<ICompanyResult>{
        return await _scrapeClient.updateAll();
    }

}