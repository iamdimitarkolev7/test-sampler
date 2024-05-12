import { parseClassName, parseDependencies, parsePublicMethods } from './parsers'
import { generateTestTemplate } from './templateGenerator'


export const generateTestSample = (nestJsClass: string) => {
  const className = parseClassName(nestJsClass)
  const dependencies = parseDependencies(nestJsClass)
  const publicMethods = parsePublicMethods(nestJsClass)

  console.log(className)
  console.log(dependencies)
  console.log(publicMethods)

  if (!className || !dependencies || !publicMethods) {
    return
  }

  return generateTestTemplate(className, dependencies, publicMethods)
}

