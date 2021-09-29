export interface IScrape{
    updateOne(companyId: number): Promise<string>;
    updateAll(): Promise<string>;
}
