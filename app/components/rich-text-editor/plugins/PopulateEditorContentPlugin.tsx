import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useEffect } from 'react'

export const PopulateEditorContentPlugin = ({
  jobDescription,
}: {
  jobDescription?: string
}) => {
  const [editor] = useLexicalComposerContext()
  useEffect(() => {
    if (jobDescription) {
      const editorState = editor.parseEditorState(jobDescription)
      editor.setEditorState(editorState)
    }
  }, [editor, jobDescription])

  return null
}
