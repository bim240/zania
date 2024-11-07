import React from 'react'
import ImageViewer from 'react-simple-image-viewer'

import Card from '../card'
import type {HomeResponse} from '../../../utils/types/home'

export default function CardWrapper({cardData}: {cardData: HomeResponse[] | undefined}) {
  const [currentImage, setCurrentImage] = React.useState<number>()

  const handleImageClick = (position: number) => {
    setCurrentImage(position + 1)
  }
  const closeImageViewer = () => {
    setCurrentImage(undefined)
  }
  return (
    <>
      {cardData?.map((data: HomeResponse, idx: number) => (
        <div key={`${data.title} ${idx}`}>
          <Card details={data} onImageClick={handleImageClick} />
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
    </>
  )
}
