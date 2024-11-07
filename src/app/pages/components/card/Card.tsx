import React from 'react'
import classes from './styles.module.css'

import type {HomeResponse} from '../../../utils/types/home'

export default function Card({
  details,
  onImageClick,
}: {
  details: HomeResponse
  onImageClick: (position: number) => void
}) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{details.title}</div>
      <img
        src={details.src}
        height={200}
        width={200}
        className={classes.image}
        onClick={() => onImageClick(details.position)}
      />
    </div>
  )
}
