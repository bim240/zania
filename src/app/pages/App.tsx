import React from 'react'
import {useGetHomeData} from '../services'
import Loader from './components/loader'
import {HomeResponse} from '../utils/types/home'
import CardWrapper from './components/card-wrapper'
import classes from './styles.module.css'

function App() {
  const {data} = useGetHomeData()
  const [cardData, setCardData] = React.useState<HomeResponse[]>()
  const [isLoading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setCardData(data)
      setLoading(false)
    }, 2000)
  }, [data?.length])

  return (
    <div className={classes.container}>
      {isLoading ? (
        Array.from(Array(5).keys()).map(item => <Loader key={item} />)
      ) : (
        <CardWrapper cardData={cardData} />
      )}
    </div>
  )
}

export default App
