import { CompanyService } from "../company.service";
import { ScrapeService } from "../scrape.service";
import { _scrapeClient } from '../../routes/gateway/container'

const companyService = new CompanyService();
const scrapeService = new ScrapeService(_scrapeClient);

export { companyService, scrapeService }