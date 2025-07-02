export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Chat model',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
  // OpenAI Standard Models
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: 'Latest OpenAI model with multimodal capabilities',
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o Mini',
    description: 'Faster, more affordable version of GPT-4o',
  },
  // OpenAI Reasoning Models
  {
    id: 'o1',
    name: 'OpenAI o1',
    description: 'Advanced reasoning model for complex problems',
  },
  {
    id: 'o1-preview',
    name: 'OpenAI o1 Preview',
    description: 'Preview version of o1 with streaming support',
  },
  {
    id: 'o1-mini',
    name: 'OpenAI o1 Mini',
    description: 'Faster, cheaper reasoning model for coding and math',
  },
  {
    id: 'o3-mini',
    name: 'OpenAI o3 Mini',
    description: 'Latest mini reasoning model with enhanced STEM capabilities',
  },
];
