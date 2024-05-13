import { parseClassName, parseDependencies, parseDependencyImportPaths, parsePublicMethods } from './parsers'
import { generateTestTemplate } from './templateGenerator'


export const generateTestSample = (nestJsClass: string) => {
  const className = parseClassName(nestJsClass)
  const dependencies = parseDependencies(nestJsClass)
  const dependencyImportPaths = parseDependencyImportPaths(nestJsClass, dependencies!)
  const publicMethods = parsePublicMethods(nestJsClass)

  console.log(className)
  console.log(dependencies)
  console.log(dependencyImportPaths)
  console.log(publicMethods)

  if (!className || !dependencies || !dependencyImportPaths || !publicMethods) {
    return
  }

  return generateTestTemplate(className, dependencies, dependencyImportPaths, publicMethods)
}

