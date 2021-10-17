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
        try{

            const companyData: ICompanyResult = await _scrapeClient.updateOne(companyName);

            // @ts-ignore
            await CompanyRepository.insertOneCompanyRecord(companyData.data.companies);

            return companyData;
        }catch (e) {
            console.log(e);
        }

    }

    public async triggerAll(): Promise<ICompanyResult>{
        try{
            const companiesData: ICompanyResult = await _scrapeClient.updateAll();


            for (const company of companiesData.data.companies)
                await CompanyRepository.insertOneCompanyRecord(company);

            return companiesData;

        }catch (e) {
            console.log(e);
        }
    }

}