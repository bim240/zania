import React from 'react'
import type {XYCoord} from 'dnd-core'
import {useDrag, useDrop} from 'react-dnd'
import classes from './styles.module.css'

import type {HomeResponse} from '../../../utils/types/home'

export interface ExtendedCardProps extends HomeResponse {
  index: number
}

export default function Card({
  details,
  onImageClick,
  handleCardMove,
}: {
  details: ExtendedCardProps
  onImageClick: (position: number) => void
  handleCardMove: (dragIndex: number, hoverIndex: number) => void
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [, drop] = useDrop<ExtendedCardProps, void>({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: ExtendedCardProps, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = details.index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      handleCardMove(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{isDragging}, drag] = useDrag({
    type: 'card',
    item: () => {
      return {id: details.position, index: details.index}
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  return (
    <div className={classes.container} ref={ref} style={{opacity}}>
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
