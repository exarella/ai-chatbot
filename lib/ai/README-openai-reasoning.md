# OpenAI Reasoning Models Guide

This project now supports OpenAI's advanced reasoning models alongside the existing XAI models. These models are designed to tackle complex reasoning and problem-solving tasks with increased focus and capability.

## Available OpenAI Models

### Standard Models
- **GPT-4o**: Latest OpenAI model with multimodal capabilities
- **GPT-4o Mini**: Faster, more affordable version of GPT-4o

### Reasoning Models
- **o1**: Advanced reasoning model for complex problems requiring deep analysis
- **o1-preview**: Preview version of o1 with streaming support
- **o1-mini**: Faster, cheaper reasoning model particularly good at coding and math
- **o3-mini**: Latest mini reasoning model with enhanced STEM capabilities

## Key Features of Reasoning Models

### What Makes Them Different
- **Deep Thinking**: Reasoning models spend more time processing your request internally
- **Complex Problem Solving**: Excel at multi-step reasoning, mathematical problems, and coding challenges
- **Enhanced Accuracy**: Provide more reliable answers for complex scenarios
- **Structured Outputs**: Support for structured JSON responses with reasoning summaries

### Best Use Cases
- Complex code generation and debugging
- Mathematical problem solving
- Scientific reasoning and analysis
- Multi-step logical deductions
- Advanced document analysis
- Complex workflow management

## Setup

### Environment Configuration
Add your OpenAI API key to your environment variables:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

### Usage in the Chat Interface
You can select any of the OpenAI models from the model dropdown in the chat interface:
- `GPT-4o` - For general conversations and multimodal tasks
- `GPT-4o Mini` - For faster, cost-effective responses
- `OpenAI o1` - For complex reasoning tasks
- `OpenAI o1 Mini` - For coding and math problems
- `OpenAI o3 Mini` - For enhanced STEM reasoning

## Performance Characteristics

### Reasoning Models vs Standard Models

| Feature | Standard Models (GPT-4o) | Reasoning Models (o1, o3-mini) |
|---------|-------------------------|--------------------------------|
| Speed | Fast response | Slower, more deliberate |
| Reasoning | Quick answers | Deep, step-by-step thinking |
| Math/Coding | Good | Excellent |
| Cost | Lower | Higher (due to reasoning tokens) |
| Use Case | General chat | Complex problems |

### When to Use Each Model

**Use GPT-4o/GPT-4o Mini for:**
- General conversations
- Quick questions
- Creative writing
- Customer support
- Real-time applications

**Use o1/o1-mini/o3-mini for:**
- Complex mathematical problems
- Advanced coding challenges
- Scientific analysis
- Multi-step logical reasoning
- Tasks requiring careful analysis

## Example Code Usage

### Basic Text Generation
```typescript
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

const { text } = await generateText({
  model: openai('o3-mini'),
  prompt: 'Solve this complex math problem step by step: ...',
});
```

### With Reasoning Effort Control
```typescript
const { text } = await generateText({
  model: openai('o1'),
  prompt: 'Analyze this complex scenario...',
  providerOptions: {
    openai: { 
      reasoningEffort: 'high' // 'low', 'medium', or 'high'
    },
  },
});
```

### Structured Output
```typescript
import { generateObject } from 'ai';
import { z } from 'zod';

const { object } = await generateObject({
  model: openai('o3-mini'),
  schema: z.object({
    analysis: z.string(),
    steps: z.array(z.string()),
    confidence: z.number(),
  }),
  prompt: 'Analyze this problem and provide structured output',
});
```

## Model Comparison

### Performance Benchmarks
- **o1**: Best for complex reasoning, highest accuracy
- **o1-mini**: 80% of o1 performance at lower cost
- **o3-mini**: Enhanced STEM capabilities, good balance of speed and reasoning
- **GPT-4o**: Fastest response, good for general use

### Cost Considerations
- Reasoning models use additional "reasoning tokens" for internal thinking
- This makes them more expensive but significantly more accurate for complex tasks
- Use `reasoningEffort: 'low'` for faster, cheaper responses when full reasoning isn't needed

## Best Practices

1. **Model Selection**: Choose reasoning models for complex tasks, standard models for general chat
2. **Reasoning Effort**: Start with 'medium', adjust based on complexity needs
3. **Prompt Engineering**: Keep prompts simple and direct - reasoning models don't need "think step by step" instructions
4. **Cost Optimization**: Use o1-mini or o3-mini for most reasoning tasks unless you need the full power of o1
5. **Structured Outputs**: Take advantage of structured output capabilities for better integration

## Migration from XAI Models

The OpenAI models can be used as drop-in replacements for XAI models:
- Replace `'chat-model'` with `'gpt-4o'` for general chat
- Replace `'chat-model-reasoning'` with `'o3-mini'` for reasoning tasks
- Update your model selection in the chat interface

Both XAI and OpenAI models will continue to work side by side, giving you the flexibility to choose the best model for each specific task.