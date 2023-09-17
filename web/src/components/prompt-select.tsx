'use client'
import { useEffect, useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { api } from '@/lib/api'

interface Prompt {
  id: string
  title: string
  template: string
}

interface PromptSelectProps {
  onPromptSelected: (template: string) => void
}

export function PromptSelect({ onPromptSelected }: PromptSelectProps) {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null)

  useEffect(() => {
    api.get('/prompts').then((response) => {
      setPrompts(response.data)
    })
  }, [])

  function handlePromptSeleceted(promptId: string) {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId)

    if (!selectedPrompt) {
      return
    }

    onPromptSelected(selectedPrompt.template)
  }

  return (
    <Select onValueChange={handlePromptSeleceted}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((prompt) => {
          return (
            <SelectItem key={prompt.id} value={prompt.id}>
              {prompt.title}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}