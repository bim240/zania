import React from 'react'
import {HomeResponse} from '../../../utils/types/home'
import classes from './styles.module.css'

export default function Card({details}: {details: HomeResponse}) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{details.title}</div>
      <img src={details.src} height={200} width={200} />
    </div>
  )
}
