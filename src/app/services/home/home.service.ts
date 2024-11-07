import {useQuery} from '@tanstack/react-query'
import {homeService} from './home.data'

const svc = new homeService()

export const useGetHomeData = () => {
  const data = useQuery({
    queryKey: ['home'], // when scaling the project we can define all the key at one place.
    queryFn: () => svc.getHomeData(),
  })
  return {data: data.data, isFetchingData: data.isLoading, isError: data.isError}
}
