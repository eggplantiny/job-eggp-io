import { lineScraper } from './sites'

async function scrap () {
  const asd = await lineScraper.fetchJobListPage()
  console.log(asd)
}

scrap()
