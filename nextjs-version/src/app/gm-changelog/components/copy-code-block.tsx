import { CopyCode } from './copy-code'

const codeExample = `// Example of updated API usage
const agent = new AIAgent({
  model: "Shadcn/studio",
  reasoning: "enhanced",
  multiModal: true,
});`

export function CopyCodeBlock() {
  return (
    <div>
      <CopyCode code={codeExample} />
    </div>
  )
}
