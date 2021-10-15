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

            await CompanyRepository.insertOneCompanyRecord(companyData.data.companies[0]); // !Error --> Returns an error when [0]

            return companyData;
        }catch (e) {
            console.log(e);
        }

    }

    public async triggerAll(): Promise<ICompanyResult>{
        try{
            const companiesData: ICompanyResult = await _scrapeClient.updateAll();


            for (const company of companiesData.data.companies) {
                await CompanyRepository.insertOneCompanyRecord(company); // !Error --> Inserting a null row on the DB
            }

            return companiesData;

        }catch (e) {
            console.log(e);
        }
    }

}