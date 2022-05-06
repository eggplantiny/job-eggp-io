
export interface JobListItem {
  title: string
  url: string
  location: string
  field: string
  employmentType: string
}

export abstract class Site {
  private readonly _baseUrl: string
  private readonly _jobListUrl: string

  constructor (baseUrl: string, jobListUrl: string) {
    this._baseUrl = baseUrl
    this._jobListUrl = jobListUrl
  }

  abstract fetchJobListPage (page?: number): Promise<JobListItem[]>
  abstract fetchJobListPageSize (): Promise<number>
  abstract fetchJobPage (): Promise<JobListItem>

  protected get baseUrl () {
    return this._baseUrl
  }

  protected get jobListUrl () {
    return this._jobListUrl
  }
}
