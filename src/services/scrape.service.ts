import { IScrape } from "../routes/gateway/services/ports/IScrape";
import { _scrapeClient } from "../routes/gateway/services/container";

export class ScrapeService {
    private readonly _scrapeClient: IScrape;

    public constructor(_scrapeClient: IScrape) {
        this._scrapeClient = _scrapeClient;
    }

    public async triggerOne(companyId: number){
        await _scrapeClient.updateOne(companyId);
    }

    public async triggerAll(){
        await _scrapeClient.updateAll();
    }
}