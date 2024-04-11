import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link'
import {
  $isListNode,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListNode,
  REMOVE_LIST_COMMAND,
} from '@lexical/list'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {
  $createHeadingNode,
  $createQuoteNode,
  $isHeadingNode,
  HeadingTagType,
} from '@lexical/rich-text'
import { $setBlocksType } from '@lexical/selection'
import {
  $findMatchingParent,
  $getNearestNodeOfType,
  mergeRegister,
} from '@lexical/utils'
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from 'lexical'
import {
  Bold,
  ChevronDown,
  Heading1,
  Heading2,
  Italic,
  Link,
  List,
  ListChecks,
  ListOrdered,
  Pilcrow,
  Quote,
  Redo,
  Underline,
  Undo,
} from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { Button } from '~/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'

import { getSelectedNode } from '../utils/getSelectedNode'
import { sanitizeUrl } from '../utils/url'

const blockTypeToBlockName = {
  bullet: 'Bulleted List',
  check: 'Check List',
  h1: 'Heading 1',
  h2: 'Heading 2',
  number: 'Number List',
  paragraph: 'Normal',
  quote: 'Quote',
}

const blockTypeToIcon = {
  bullet: <List className="size-4" />,
  check: <ListChecks className="size-4" />,
  h1: <Heading1 className="size-4" />,
  h2: <Heading2 className="size-4" />,
  number: <ListOrdered className="size-4" />,
  paragraph: <Pilcrow className="size-4" />,
  quote: <Quote className="size-4" />,
}

export default function ToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext()
  const [activeEditor, setActiveEditor] = useState(editor)
  const [blockType, setBlockType] =
    useState<keyof typeof blockTypeToBlockName>('paragraph')
  const [isLink, setIsLink] = useState(false)
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)
  //   const [modal, showModal] = useModal()
  const [isEditable, setIsEditable] = useState(() => editor.isEditable())
  const [isApple, setIsApple] = useState(false)

  const updateToolbar = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode()
      let element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent()
              return parent !== null && $isRootOrShadowRoot(parent)
            })

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow()
      }

      const elementKey = element.getKey()
      const elementDOM = activeEditor.getElementByKey(elementKey)

      // Update text format
      setIsBold(selection.hasFormat('bold'))
      setIsItalic(selection.hasFormat('italic'))
      setIsUnderline(selection.hasFormat('underline'))

      // Update links
      const node = getSelectedNode(selection)
      const parent = node.getParent()
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true)
      } else {
        setIsLink(false)
      }

      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(
            anchorNode,
            ListNode
          )
          const type = parentList
            ? parentList.getListType()
            : element.getListType()
          setBlockType(type)
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType()
          if (type in blockTypeToBlockName) {
            setBlockType(type as keyof typeof blockTypeToBlockName)
          }
        }
      }
    }
  }, [activeEditor])

  useEffect(() => {
    setIsApple(
      navigator.userAgent.includes(
        'Mac' || 'iPhone' || 'iPad' || 'iPod' || 'Apple'
      )
    )
  }, [])

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        updateToolbar()
        setActiveEditor(newEditor)
        return false
      },
      COMMAND_PRIORITY_CRITICAL
    )
  }, [editor, updateToolbar])

  useEffect(() => {
    return mergeRegister(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable)
      }),
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar()
        })
      }),
      activeEditor.registerCommand<boolean>(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload)
          return false
        },
        COMMAND_PRIORITY_CRITICAL
      ),
      activeEditor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload)
          return false
        },
        COMMAND_PRIORITY_CRITICAL
      )
    )
  }, [activeEditor, editor, updateToolbar])

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl('https://'))
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)
    }
  }, [editor, isLink])

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode())
      }
    })
  }

  const formatHeading = (headingSize: HeadingTagType) => {
    if (blockType !== headingSize) {
      editor.update(() => {
        const selection = $getSelection()
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(headingSize))
        }
      })
    }
  }

  const formatBulletList = () => {
    if (blockType !== 'bullet') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)
    }
  }

  const formatNumberedList = () => {
    if (blockType !== 'number') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)
    }
  }

  const formatQuote = () => {
    if (blockType !== 'quote') {
      editor.update(() => {
        const selection = $getSelection()
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createQuoteNode())
        }
      })
    }
  }

  return (
    <div className="flex flex-row px-2 py-1.5 space-x-0.5 border-b border-border">
      <button
        disabled={!canUndo || !isEditable}
        onClick={() => {
          activeEditor.dispatchCommand(UNDO_COMMAND, undefined)
        }}
        title={isApple ? 'Undo (⌘Z)' : 'Undo (Ctrl+Z)'}
        type="button"
        className="max-[450px]:hidden p-2 rounded bg-background enabled:hover:bg-muted transition-colors disabled:cursor-not-allowed disabled:text-muted-foreground/50"
        aria-label="Undo"
      >
        <Undo className="size-4" />
      </button>
      <button
        disabled={!canRedo || !isEditable}
        onClick={() => {
          activeEditor.dispatchCommand(REDO_COMMAND, undefined)
        }}
        title={isApple ? 'Redo (⌘Y)' : 'Redo (Ctrl+Y)'}
        type="button"
        className="max-[450px]:hidden p-2 rounded bg-background enabled:hover:bg-muted transition-colors disabled:cursor-not-allowed disabled:text-muted-foreground/50"
        aria-label="Redo"
      >
        <Redo className="size-4" />
      </button>
      {blockType in blockTypeToBlockName && activeEditor === editor ? (
        <>
          <Popover>
            <PopoverTrigger className="!mx-2 px-2.5 py-1 flex flex-row items-center space-x-1 rounded ring-1 ring-inset ring-input/50 transition-colors bg-background hover:bg-muted text-sm">
              {blockTypeToIcon[blockType]}
              <span className="leading-4 w-20 text-left">
                {blockTypeToBlockName[blockType]}
              </span>
              <ChevronDown className="size-4" />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-1 flex flex-col">
              <Button
                variant="ghost"
                className="font-sans text-sm normal-case p-2 h-auto font-normal tracking-normal space-x-1 justify-start"
                onClick={formatParagraph}
              >
                <Pilcrow className="size-4" />
                <span className="leading-4">Normal</span>
              </Button>
              <Button
                variant="ghost"
                className="font-sans text-sm normal-case p-2 h-auto font-normal tracking-normal space-x-1 justify-start"
                onClick={() => formatHeading('h1')}
              >
                <Heading1 className="size-4" />
                <span className="leading-4">Heading 1</span>
              </Button>
              <Button
                variant="ghost"
                className="font-sans text-sm normal-case p-2 h-auto font-normal tracking-normal space-x-1 justify-start"
                onClick={() => formatHeading('h2')}
              >
                <Heading2 className="size-4" />
                <span className="leading-4">Heading 2</span>
              </Button>
              <Button
                variant="ghost"
                className="font-sans text-sm normal-case p-2 h-auto font-normal tracking-normal space-x-1 justify-start"
                onClick={formatBulletList}
              >
                <List className="size-4" />
                <span className="leading-4">Bullet List</span>
              </Button>
              <Button
                variant="ghost"
                className="font-sans text-sm normal-case p-2 h-auto font-normal tracking-normal space-x-1 justify-start"
                onClick={formatNumberedList}
              >
                <ListOrdered className="size-4" />
                <span className="leading-4">Number List</span>
              </Button>
              <Button
                variant="ghost"
                className="font-sans text-sm normal-case p-2 h-auto font-normal tracking-normal space-x-1 justify-start"
                onClick={formatQuote}
              >
                <Quote className="size-4" />
                <span className="leading-4">Quote</span>
              </Button>
            </PopoverContent>
          </Popover>
        </>
      ) : null}
      <button
        disabled={!isEditable}
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
        }}
        className={
          'p-2 rounded bg-background hover:bg-muted transition-colors ' +
          (!!isBold && 'bg-card ring-1 ring-input/20 ring-inset')
        }
        title={isApple ? 'Bold (⌘B)' : 'Bold (Ctrl+B)'}
        type="button"
        aria-label={`Format text as bold. Shortcut: ${
          isApple ? '⌘B' : 'Ctrl+B'
        }`}
      >
        <Bold className="size-4" />
      </button>
      <button
        disabled={!isEditable}
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
        }}
        className={
          'p-2 rounded bg-background hover:bg-muted transition-colors ' +
          (!!isItalic && 'bg-card ring-1 ring-input/20 ring-inset')
        }
        title={isApple ? 'Italic (⌘I)' : 'Italic (Ctrl+I)'}
        type="button"
        aria-label={`Format text as italics. Shortcut: ${
          isApple ? '⌘I' : 'Ctrl+I'
        }`}
      >
        <Italic className="size-4" />
      </button>
      <button
        disabled={!isEditable}
        onClick={() => {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
        }}
        className={
          'p-2 rounded bg-background hover:bg-muted transition-colors ' +
          (!!isUnderline && 'bg-card ring-1 ring-input/20 ring-inset')
        }
        title={isApple ? 'Underline (⌘U)' : 'Underline (Ctrl+U)'}
        type="button"
        aria-label={`Format text to underlined. Shortcut: ${
          isApple ? '⌘U' : 'Ctrl+U'
        }`}
      >
        <Underline className="size-4" />
      </button>
      <button
        disabled={!isEditable}
        onClick={insertLink}
        className={
          'p-2 rounded bg-background hover:bg-muted transition-colors ' +
          (!!isLink && 'bg-card ring-1 ring-input/20 ring-inset')
        }
        aria-label="Insert link"
        title="Insert link"
        type="button"
      >
        <Link className="size-4" />
      </button>
    </div>
  )
}
