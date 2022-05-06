import axios from 'axios'
import { readFileSync } from 'fs'
import { load } from 'cheerio'

const URL = 'https://careers.linecorp.com/jobs?ca=All'
const BASE_URL = 'https://careers.linecorp.com'

async function scrap () {
  // const { data } = await axios.get(URL, {
  //   headers: {
  //     'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; + http://www.google.com/bot.html)'
  //   }
  // })

  const data = readFileSync('../line.html').toString()

  const $ = load(data)

  $('#container > div > div.job_result > ul > li').each(function () {
    const title = $(this).find('.title').text().trim()
    const url = `${BASE_URL}${$(this).find('a').attr('href')}`
    console.log(title, url)
  })
}

scrap()