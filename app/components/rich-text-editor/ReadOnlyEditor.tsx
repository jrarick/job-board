import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'

import { PopulateEditorContentPlugin } from './plugins/PopulateEditorContentPlugin'
import { ClientOnly } from 'remix-utils/client-only'

export default function ReadOnlyEditor({
  jobDescription,
  jobId,
}: {
  jobDescription: string
  jobId: string
}) {
  return (
    <ClientOnly>
      {() => (
        <LexicalComposer
          initialConfig={{
            namespace: jobId,
            onError(error: Error) {
              throw error
            },
            editable: false,
            nodes: [
              HeadingNode,
              ListNode,
              ListItemNode,
              QuoteNode,
              AutoLinkNode,
              LinkNode,
            ],
          }}
        >
          <RichTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={<span></span>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <PopulateEditorContentPlugin jobDescription={jobDescription} />
        </LexicalComposer>
      )}
    </ClientOnly>
  )
}
