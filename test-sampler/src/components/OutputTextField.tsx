import React from 'react'

const OutputTextField = ({ template }: any) => {
  return (
    <textarea
      readOnly
      value={template}
      rows={10}
      cols={50}
      placeholder="Test generated template will appear here"
    />
  )
}

export default OutputTextField