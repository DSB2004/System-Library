import React from 'react'
import "./file-folder-card.css"
import Loader from '../loader/loader'
import { handleFolderIcon } from '../../utils/icon-render'
export default function FileFolderCard({ content, pathFunction }) {
  const handleClick = async () => {
    if (content) {
      if (content.isFile) {
        window.directoryfunction.openFile(content.absolutePath)
      }
      else {
        window.directoryfunction.addPath(content.absolutePath)
        pathFunction(content.absolutePath)
      }
    }
  }
  return (
    <div title={content.absolutePath} className={`file-folder-card m-5 flex-even`} onClick={() => { handleClick() }}>
      {content ? <>
        {handleFolderIcon(content.type, content.isFile)}
        <div className='file-folder-card-content-div'>
          <h5 className='file-folder-card-name '>{content && content.name}</h5>
          <h5 className='file-folder-card-path'>{content.absolutePath}</h5>
        </div>
      </> : <>
        < Loader />
        <div className='file-folder-card-icon loading'></div>
        <div className='file-folder-card-content-div-loader'>
          <div className='loading file-folder-card-content-tag'></div>
          <div className='loading file-folder-card-content-tag' style={{ 'width': '80%' }}></div>
        </div>
      </>
      }
    </div >
  )
}
