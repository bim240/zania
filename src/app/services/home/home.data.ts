import {data} from '../../utils/data'
import {HomeResponse} from '../../utils/types/home'

export class homeService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getHomeData(query?: string): Promise<HomeResponse[]> {
    // We can make the api call to get the data here
    // const res = await apiAxiosV1.get(`homeData`)
    // return res?.data
    return data
  }
}
