import React, { useState } from 'react'
import './App.css'
import GenerateTemplateButton from './components/GenerateTemplateButton'
import InputTextField from './components/InputTextField'
import OutputTextField from './components/OutputTextField'
import { generateTestSample } from './utils/testSamplerGenerator'

const App = () => {
  const [inputClass, setInputClass] = useState('')
  const [generatedTemplate, setGeneratedTemplate] = useState('')

  const handleGenerateTemplate = () => {
    const template = generateTestSample(inputClass)
    if (!template) {
      return
    }
    setGeneratedTemplate(template)
  }

  const handleInputChange = (value: string) => {
    setInputClass(value)
  }

  return (
    <div className="App">
      <div className="text-fields">
        <InputTextField onInputChange={handleInputChange}></InputTextField>
        <OutputTextField template={generatedTemplate}></OutputTextField>
      </div>
      <GenerateTemplateButton onClick={handleGenerateTemplate}></GenerateTemplateButton>
    </div>
  )
}

export default App