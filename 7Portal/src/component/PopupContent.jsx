import React from 'react'
import {createPortal} from 'react-dom'

const PopupContent = ({copied}) => {
  return createPortal(
    <section>
      {copied && <div style={{ position:"absolute", bottom:"3rem" }}> Text berhasil di copy </div>}
    </section>,document.getElementById("popupContent")
  )
}

export default PopupContent
