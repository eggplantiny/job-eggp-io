import axios from 'axios'

export async function request (url: string) {
  const { data } = await axios.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; + http://www.google.com/bot.html)'
    }
  })

  return data
}
