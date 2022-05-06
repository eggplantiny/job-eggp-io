import { JobListItem, Site } from '../site'
import { post } from '../../utils/get'

interface NaverSearchParams {
  classNm?: string
  entTypeCd?: string
  searchTxt?: string
  searchSysComCd?: string
  startNum: number
  endNum: number
}

export class Naver extends Site {
  async fetchJobListPage (): Promise<JobListItem[]> {
    const data = await post<JobListItem[], NaverSearchParams>(`${this.baseUrl}${this.jobListUrl}`, {
      classNm: 'developer',
      startNum: 1,
      endNum: 10
    })

    return data
  }

  async fetchJobListPageSize (): Promise<number> {
    return 1
  }

  async fetchJobPage (): Promise<JobListItem> {
    return {} as JobListItem
  }
}