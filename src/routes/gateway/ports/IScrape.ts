import { ICompanyResult } from "../../../routes/gateway/results/ICompanyResult";

export interface IScrape{
    updateOne(companyName: string): Promise<ICompanyResult>;
    updateAll(): Promise<ICompanyResult>;
}
