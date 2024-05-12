import { IMethod } from './interfaces/IMethod'

export const generateTestTemplate = (className: string, dependencies: string[], methods: IMethod[]): string => {
  const dependencyImports = dependencies.map(dep => `import { ${dep} } from 'path/to/${dep}';`).join('\n')
  const mockInstances = dependencies.map(dep => `const ${dep.toLowerCase()} = mocker.createMockInstance(${dep});`).join('\n')

  const describeBlock = `describe('${className}', () => {
const mocker = AutoMocker.createJestMocker(jest)
${mockInstances}

beforeEach(() => {
  jest.resetAllMocks()
})`

  const methodTests = methods.map(method => `describe('${method.name}', () => {
  it('should ', ${method.isAsync ? 'async ' : ''}() => {
    // Arrange
    const instance = create${className}();
    
    // Act
    
    // Assert
  });
})`).join('\n\n')

  const createInstanceFunction = `
function create${className}(): ${className} {
  return new ${className}(
    ${dependencies.map(dep => `${dep.toLowerCase()},`).join('\n')}
  );
}`

  const template = `${dependencyImports}

${describeBlock}

${methodTests}

${createInstanceFunction}
});`

  return template
}