import { JobListItem, Site } from '../site'
import { request } from '../../utils/request'
import { load } from 'cheerio'

export class Line extends Site {
  async fetchJobListPage (): Promise<JobListItem[]> {
    const jobListItems: JobListItem[] = []

    const baseUrl = this.baseUrl
    const jobListUrl = this.jobListUrl

    const html = await request(`${baseUrl}${jobListUrl}`)
    const $ = load(html)

    $('#container > div > div.job_result > ul > li').each(function () {
      const title = $(this).find('.title').text().trim()
      const url = `${baseUrl}${$(this).find('a').attr('href')}`

      const item: JobListItem = {
        title,
        url,
        company: null,
        location: null,
        field: null,
        employmentType: null,
        keywords: [],
      }

      jobListItems.push(item)
    })

    return jobListItems
  }

  async fetchJobListPageSize (): Promise<number> {
    return 1
  }

  async fetchJobPage (): Promise<JobListItem> {
    return {} as JobListItem
  }
}
