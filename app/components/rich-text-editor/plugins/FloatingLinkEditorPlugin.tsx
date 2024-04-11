import {
  $isAutoLinkNode,
  $isLinkNode,
  TOGGLE_LINK_COMMAND,
} from '@lexical/link'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $findMatchingParent, mergeRegister } from '@lexical/utils'
import {
  $getSelection,
  $isRangeSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  NodeSelection,
  BaseSelection,
  RangeSelection,
  SELECTION_CHANGE_COMMAND,
} from 'lexical'
import { CheckCircle, PenBox, Trash, XCircle } from 'lucide-react'
import { Dispatch, useCallback, useEffect, useRef, useState } from 'react'
import * as React from 'react'
import { createPortal } from 'react-dom'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

import { getSelectedNode } from '../utils/getSelectedNode'
import { setFloatingElemPositionForLinkEditor } from '../utils/setFloatingElemPositionForLinkEditor'
import { sanitizeUrl } from '../utils/url'

function FloatingLinkEditor({
  editor,
  isLink,
  setIsLink,
  anchorElem,
  isLinkEditMode,
  setIsLinkEditMode,
}: {
  editor: LexicalEditor
  isLink: boolean
  setIsLink: Dispatch<boolean>
  anchorElem: HTMLElement
  isLinkEditMode: boolean
  setIsLinkEditMode: Dispatch<boolean>
}): JSX.Element {
  const editorRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [linkUrl, setLinkUrl] = useState('')
  const [editedLinkUrl, setEditedLinkUrl] = useState('https://')
  const [lastSelection, setLastSelection] = useState<
    RangeSelection | BaseSelection | NodeSelection | null
  >(null)

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection)
      const linkParent = $findMatchingParent(node, $isLinkNode)

      if (linkParent) {
        setLinkUrl(linkParent.getURL())
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL())
      } else {
        setLinkUrl('')
      }
    }
    const editorElem = editorRef.current
    const nativeSelection = window.getSelection()
    const activeElement = document.activeElement

    if (editorElem === null) {
      return
    }

    const rootElement = editor.getRootElement()

    if (
      selection !== null &&
      nativeSelection !== null &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode) &&
      editor.isEditable()
    ) {
      const domRect: DOMRect | undefined =
        nativeSelection.focusNode?.parentElement?.getBoundingClientRect()
      if (domRect) {
        domRect.y += 40
        setFloatingElemPositionForLinkEditor(domRect, editorElem, anchorElem)
      }
      setLastSelection(selection)
    } else if (!activeElement || activeElement.className !== 'link-input') {
      if (rootElement !== null) {
        setFloatingElemPositionForLinkEditor(null, editorElem, anchorElem)
      }
      setLastSelection(null)
      setIsLinkEditMode(false)
      setLinkUrl('')
    }

    return true
  }, [anchorElem, editor, setIsLinkEditMode])

  useEffect(() => {
    const scrollerElem = anchorElem.parentElement

    const update = () => {
      editor.getEditorState().read(() => {
        updateLinkEditor()
      })
    }

    window.addEventListener('resize', update)

    if (scrollerElem) {
      scrollerElem.addEventListener('scroll', update)
    }

    return () => {
      window.removeEventListener('resize', update)

      if (scrollerElem) {
        scrollerElem.removeEventListener('scroll', update)
      }
    }
  }, [anchorElem.parentElement, editor, updateLinkEditor])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor()
        })
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor()
          return true
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_ESCAPE_COMMAND,
        () => {
          if (isLink) {
            setIsLink(false)
            return true
          }
          return false
        },
        COMMAND_PRIORITY_HIGH
      )
    )
  }, [editor, updateLinkEditor, setIsLink, isLink])

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor()
    })
  }, [editor, updateLinkEditor])

  useEffect(() => {
    if (isLinkEditMode && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isLinkEditMode, isLink])

  const monitorInputInteraction = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleLinkSubmission()
    } else if (event.key === 'Escape') {
      event.preventDefault()
      setIsLinkEditMode(false)
    }
  }

  const handleLinkSubmission = () => {
    if (lastSelection !== null) {
      if (linkUrl !== '') {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(editedLinkUrl))
      }
      setEditedLinkUrl('https://')
      setIsLinkEditMode(false)
    }
  }

  return (
    <div ref={editorRef} className="absolute top-0 left-0">
      {!isLink ? null : isLinkEditMode ? (
        <div className="bg-background border shadow-md rounded p-2 flex flex-row items-center space-x-2">
          <Input
            ref={inputRef}
            className="px-2 py-1 h-auto"
            value={editedLinkUrl}
            onChange={(event) => {
              setEditedLinkUrl(event.target.value)
            }}
            onKeyDown={(event) => {
              monitorInputInteraction(event)
            }}
          />
          <div className="flex flex-row space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5"
              tabIndex={0}
              onClick={() => {
                setIsLinkEditMode(false)
              }}
            >
              <XCircle className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5"
              tabIndex={0}
              onClick={handleLinkSubmission}
            >
              <CheckCircle className="size-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-background border shadow-md rounded p-2 flex flex-row items-center space-x-2">
          <a
            href={sanitizeUrl(linkUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {linkUrl}
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5"
            tabIndex={0}
            onClick={() => {
              setEditedLinkUrl(linkUrl)
              setIsLinkEditMode(true)
            }}
          >
            <PenBox className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5"
            tabIndex={0}
            onClick={() => {
              editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)
            }}
          >
            <Trash className="size-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

function useFloatingLinkEditorToolbar(
  editor: LexicalEditor,
  anchorElem: HTMLElement,
  isLinkEditMode: boolean,
  setIsLinkEditMode: Dispatch<boolean>
): JSX.Element | null {
  const [activeEditor, setActiveEditor] = useState(editor)
  const [isLink, setIsLink] = useState(false)

  useEffect(() => {
    function updateToolbar() {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        const node = getSelectedNode(selection)
        const linkParent = $findMatchingParent(node, $isLinkNode)
        const autoLinkParent = $findMatchingParent(node, $isAutoLinkNode)
        // We don't want this menu to open for auto links.
        if (linkParent !== null && autoLinkParent === null) {
          setIsLink(true)
        } else {
          setIsLink(false)
        }
      }
    }
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar()
        })
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolbar()
          setActiveEditor(newEditor)
          return false
        },
        COMMAND_PRIORITY_CRITICAL
      ),
      editor.registerCommand(
        CLICK_COMMAND,
        (payload) => {
          const selection = $getSelection()
          if ($isRangeSelection(selection)) {
            const node = getSelectedNode(selection)
            const linkNode = $findMatchingParent(node, $isLinkNode)
            if ($isLinkNode(linkNode) && (payload.metaKey || payload.ctrlKey)) {
              window.open(linkNode.getURL(), '_blank')
              return true
            }
          }
          return false
        },
        COMMAND_PRIORITY_LOW
      )
    )
  }, [editor])

  return createPortal(
    <FloatingLinkEditor
      editor={activeEditor}
      isLink={isLink}
      anchorElem={anchorElem}
      setIsLink={setIsLink}
      isLinkEditMode={isLinkEditMode}
      setIsLinkEditMode={setIsLinkEditMode}
    />,
    anchorElem
  )
}

export default function FloatingLinkEditorPlugin({
  anchorElem = document.body,
  isLinkEditMode,
  setIsLinkEditMode,
}: {
  anchorElem?: HTMLElement
  isLinkEditMode: boolean
  setIsLinkEditMode: Dispatch<boolean>
}): JSX.Element | null {
  const [editor] = useLexicalComposerContext()
  return useFloatingLinkEditorToolbar(
    editor,
    anchorElem,
    isLinkEditMode,
    setIsLinkEditMode
  )
}
