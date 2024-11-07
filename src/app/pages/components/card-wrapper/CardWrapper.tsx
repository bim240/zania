import React from 'react'
import ImageViewer from 'react-simple-image-viewer'
import {useDrop} from 'react-dnd'

import Card from '../card'
import type {HomeResponse} from '../../../utils/types/home'

import classes from './styles.module.css'

export default function CardWrapper({
  cardData,
  setCardData,
}: {
  cardData: HomeResponse[] | undefined
  setCardData: React.Dispatch<React.SetStateAction<HomeResponse[] | undefined>>
}) {
  const [currentImage, setCurrentImage] = React.useState<number>()
  const [, drop] = useDrop({
    accept: 'card',
    drop: () => ({name: 'title'}),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const handleCardMove = (dragIndex: number, hoverIndex: number) => {
    if (cardData) {
      const dragItem = cardData[dragIndex]

      if (dragItem) {
        setCardData(prevState => {
          if (prevState) {
            const coppiedStateArray = [...prevState]

            // remove item by "hoverIndex" and put "dragItem" instead
            const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem)

            // remove item by "dragIndex" and put "prevItem" instead
            coppiedStateArray.splice(dragIndex, 1, prevItem[0])

            return coppiedStateArray
          }
        })
      }
    }
  }
  const handleImageClick = (position: number) => {
    setCurrentImage(position + 1)
  }
  const closeImageViewer = () => {
    setCurrentImage(undefined)
  }
  return (
    <div ref={drop} className={classes.container}>
      {cardData?.map((data: HomeResponse, idx: number) => (
        <div key={`${data.title} ${idx}`}>
          <Card
            details={{...data, index: idx}}
            onImageClick={handleImageClick}
            handleCardMove={handleCardMove}
          />
        </div>
      ))}
      {(currentImage === 0 || !!currentImage) && (
        <ImageViewer
          src={currentImage && cardData ? cardData.map(data => data.src) : []}
          currentIndex={currentImage - 1}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  )
}
