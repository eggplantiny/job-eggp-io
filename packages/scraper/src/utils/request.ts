import axios from 'axios'

const instance = axios.create({
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; + http://www.google.com/bot.html)'
  }
})

export async function request (url: string) {
  const { data } = await instance.get(url)
  return data
}

export async function post <Result, Params> (url: string, body: Params): Promise<Result>  {
  const { data } = await instance.post(url, body)
  return data as Result
}
