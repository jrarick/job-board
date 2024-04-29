import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { EditorState } from 'lexical'
import { Dispatch, SetStateAction, useState } from 'react'
import { ClientOnly } from 'remix-utils/client-only'

import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin'
import OnChangePlugin from './plugins/OnChangePlugin'
import { PopulateEditorContentPlugin } from './plugins/PopulateEditorContentPlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import { cn } from '~/lib/utils'

export const provTheme = {
  paragraph: 'leading-7 [&:not(:first-child)]:mt-2',
  quote: 'mt-2 border-l-2 pl-6 italic',
  heading: {
    h1: 'scroll-m-20 text-2xl font-display font-semibold tracking-tight [&:not(:first-child)]:mt-2',
    h2: 'uppercase font-bold font-display tracking-widest text-base [&:not(:first-child)]:mt-2',
  },
  list: {
    ol: 'my-2 ml-6 list-decimal [&>li]:mt-2',
    ul: 'my-2 ml-6 list-disc [&>li]:mt-2',
    listitem: 'text-xs',
  },
  link: 'text-blue-500 cursor-pointer hover:underline',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
  },
}

export const editorConfig = {
  namespace: 'JobDescriptionEditor',
  theme: provTheme,
  onError(error: Error) {
    throw error
  },
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    AutoLinkNode,
    LinkNode,
  ],
}

const Editor = ({
  setEditorState,
  jobDescription,
  className,
}: {
  setEditorState: Dispatch<SetStateAction<string | null>>
  jobDescription?: string
  className?: string
}) => {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  function onChange(editorState: EditorState) {
    const editorStateJSON = editorState.toJSON()
    setEditorState(JSON.stringify(editorStateJSON))
  }

  return (
    <ClientOnly>
      {() => (
        <LexicalComposer initialConfig={editorConfig}>
          <div className={cn(
            "bg-background border border-input rounded has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring",
            className
            )}>
            <ToolbarPlugin />
            <div className="text-sm relative">
              <RichTextPlugin
                contentEditable={
                  <div
                    className="max-h-96 overflow-y-auto relative"
                  ref={onRef}>
                    <ContentEditable className="p-3 min-h-56 focus-visible:outline-none" />
                  </div>
                }
                placeholder={
                  <div className="text-muted-foreground absolute top-4 left-3 pointer-events-none">
                    Enter job description...
                  </div>
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
              <HistoryPlugin />
              <AutoLinkPlugin />
              {floatingAnchorElem ? (
                <FloatingLinkEditorPlugin
                  anchorElem={floatingAnchorElem}
                  isLinkEditMode={isLinkEditMode}
                  setIsLinkEditMode={setIsLinkEditMode}
                />
              ) : null}
              <ListPlugin />
              <LinkPlugin />
              <OnChangePlugin onChange={onChange} />
              {jobDescription ? (
                <PopulateEditorContentPlugin jobDescription={jobDescription} />
              ) : null}
            </div>
          </div>
        </LexicalComposer>
      )}
    </ClientOnly>
  )
}

export default Editor
