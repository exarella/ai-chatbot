import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { openai } from '@ai-sdk/openai';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
        // OpenAI test models (using the same mock models for now)
        'gpt-4o': chatModel,
        'gpt-4o-mini': chatModel,
        'o1': reasoningModel,
        'o1-preview': reasoningModel,
        'o1-mini': reasoningModel,
        'o3-mini': reasoningModel,
      },
    })
  : customProvider({
      languageModels: {
        // XAI Models (existing)
        'chat-model': xai('grok-2-vision-1212'),
        'chat-model-reasoning': wrapLanguageModel({
          model: xai('grok-3-mini-beta'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': xai('grok-2-1212'),
        'artifact-model': xai('grok-2-1212'),
        // OpenAI Standard Models
        'gpt-4o': openai('gpt-4o'),
        'gpt-4o-mini': openai('gpt-4o-mini'),
        // OpenAI Reasoning Models
        'o1': openai('o1', {
          structuredOutputs: true,
        }),
        'o1-preview': openai('o1-preview'),
        'o1-mini': openai('o1-mini', {
          structuredOutputs: true,
        }),
        'o3-mini': openai('o3-mini', {
          structuredOutputs: true,
        }),
      },
      imageModels: {
        'small-model': xai.image('grok-2-image'),
        'openai-image': openai.image('dall-e-3'),
      },
    });
