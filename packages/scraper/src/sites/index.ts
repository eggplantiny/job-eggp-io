import { Line } from './modules/line'
import { Naver } from './modules/naver'

export const lineScraper = new Line('https://careers.linecorp.com', '/jobs?ca=ALL')
export const naverScraper = new Naver('https://recruit.navercorp.com', '/naver/job/listJson')