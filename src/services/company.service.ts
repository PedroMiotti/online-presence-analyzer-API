import {CompanyRepository} from "../repositories/company.repository";

export class CompanyService {

    public async fetchOne(companyId: number): Promise<any[]>{
        const companyRecords: any[] = await CompanyRepository.getCompanyRecordById(companyId);

        return companyRecords;
    }

    public async fetchAll(): Promise<any[]>{
        const companiesRecords: any[] = await CompanyRepository.getCompaniesRecords();

        return companiesRecords;
    }

}