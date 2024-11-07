import {data} from '../../utils/data'
import type {HomeResponse} from '../../utils/types/home'

export class homeService {
  async getHomeData(): Promise<HomeResponse[]> {
    // We can make the api call to get the data here
    // const res = await apiAxiosV1.get(`homeData`)
    // return res?.data
    return data
  }
}
