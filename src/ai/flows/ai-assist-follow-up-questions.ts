'use server';
/**
 * @fileOverview An AI assistant that generates pertinent follow-up questions for client contact messages.
 *
 * - aiAssistFollowUpQuestions - A function that generates follow-up questions based on a client's message.
 * - FollowUpQuestionsInput - The input type for the aiAssistFollowUpQuestions function.
 * - FollowUpQuestionsOutput - The return type for the aiAssistFollowUpQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FollowUpQuestionsInputSchema = z.object({
  message: z.string().describe("The client's initial contact message."),
});
export type FollowUpQuestionsInput = z.infer<typeof FollowUpQuestionsInputSchema>;

const FollowUpQuestionsOutputSchema = z.object({
  questions: z.array(z.string()).describe('An array of pertinent follow-up questions.'),
});
export type FollowUpQuestionsOutput = z.infer<typeof FollowUpQuestionsOutputSchema>;

export async function aiAssistFollowUpQuestions(
  input: FollowUpQuestionsInput
): Promise<FollowUpQuestionsOutput> {
  return aiAssistFollowUpQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAssistFollowUpQuestionsPrompt',
  input: {schema: FollowUpQuestionsInputSchema},
  output: {schema: FollowUpQuestionsOutputSchema},
  prompt: `You are an AI assistant for Otical Digital, a web development agency.
Your task is to analyze a client's initial contact message and generate a list of pertinent follow-up questions.
The goal is to clarify their project needs, understand their goals, and gather more detailed requirements to accelerate the proposal process.

Keep the questions concise and professional.

Client's Message:
"""{{{message}}}"""

Based on the message above, what follow-up questions should be asked to clarify the project details?`,
});

const aiAssistFollowUpQuestionsFlow = ai.defineFlow(
  {
    name: 'aiAssistFollowUpQuestionsFlow',
    inputSchema: FollowUpQuestionsInputSchema,
    outputSchema: FollowUpQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
