import { JobListItem, Site } from '@/sites/site'
import { post } from '@/utils/request'
import { Nullable, YN } from '@/types/base.type'

interface NaverSearchParams {
  classNm?: string
  entTypeCd?: string
  searchTxt?: string
  searchSysComCd?: string
  startNum: number
  endNum: number
}

interface NaverSearchResult {
  annoId: number
  staYmd: string
  endYmd: string
  jobNm: string
  jobKeyword: Nullable<string>
}

export class Naver extends Site {
  async fetchJobListPage (): Promise<JobListItem[]> {
    const formData = new URLSearchParams()
    formData.set('classNm', 'developer')
    formData.set('startNum', '1')
    formData.set('endNum', '70')
    const data = await post<NaverSearchResult[], FormData>(`${this.baseUrl}${this.jobListUrl}`, formData)

    const jobListItemList: JobListItem[] = data.map(x => ({
        title: x.jobNm,
        url: `https://recruit.navercorp.com/naver/job/detail/developer?annoId=${x.annoId}`,
        location: null,
        company: null,
        field: 'developer',
        employmentType: null,
        keywords: x.jobKeyword ? x.jobKeyword.split(/,|#/).map(x => x.trim()).filter(x => x) : []
      })
    )

    return jobListItemList
  }

  async fetchJobListPageSize (): Promise<number> {
    return 1
  }

  async fetchJobPage (): Promise<JobListItem> {
    return {} as JobListItem
  }
}
