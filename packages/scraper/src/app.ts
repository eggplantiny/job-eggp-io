import { lineScraper, naverScraper } from './sites'

async function scrap () {
  const asd = await naverScraper.fetchJobListPage()
  console.log(asd.map(x => x.keywords))
}

scrap()
