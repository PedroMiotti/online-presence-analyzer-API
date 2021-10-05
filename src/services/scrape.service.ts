import { IScrape } from "../routes/gateway/ports/IScrape";
import { _scrapeClient } from "../routes/gateway/container";

export class ScrapeService {
    private readonly _scrapeClient: IScrape;

    public constructor(_scrapeClient: IScrape) {
        this._scrapeClient = _scrapeClient;
    }

    public async triggerOne(companyName: string){
        return await _scrapeClient.updateOne(companyName);
    }

    public async triggerAll(){
        return await _scrapeClient.updateAll();
    }

}