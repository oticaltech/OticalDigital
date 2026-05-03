
"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, Send, CheckCircle2, Sparkles, PlusCircle } from "lucide-react"
import { aiAssistFollowUpQuestions } from "@/ai/flows/ai-assist-follow-up-questions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [aiQuestions, setAiQuestions] = React.useState<string[]>([])
  const [isLoadingAi, setIsLoadingAi] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // Simulate Firebase storage or actual implementation if config provided
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)

    // Trigger AI follow-up questions
    setIsLoadingAi(true)
    try {
      const result = await aiAssistFollowUpQuestions({ message: values.message })
      setAiQuestions(result.questions)
    } catch (error) {
      console.error("AI Error:", error)
    } finally {
      setIsLoadingAi(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h3 className="text-3xl font-headline font-bold mb-4">Message Sent!</h3>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          Thank you for reaching out, {form.getValues("name")}. We'll get back to you within 24 hours.
        </p>

        <AnimatePresence>
          {(isLoadingAi || aiQuestions.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 max-w-xl mx-auto text-left space-y-4"
            >
              <div className="flex items-center gap-2 mb-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <Sparkles className="text-primary w-5 h-5 shrink-0" />
                <p className="text-sm font-medium">
                  {isLoadingAi 
                    ? "Our AI Assistant is analyzing your message to help us prepare better..." 
                    : "To help us speed up your proposal, you might want to consider these points:"}
                </p>
              </div>

              {isLoadingAi ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="grid gap-3">
                  {aiQuestions.map((q, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className="glass-card hover:border-primary/50 transition-colors">
                        <CardContent className="p-4 flex gap-3 items-start">
                          <PlusCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm">{q}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {!isLoadingAi && (
                <div className="text-center pt-6">
                  <Button variant="ghost" onClick={() => {
                    setIsSuccess(false)
                    setAiQuestions([])
                    form.reset()
                  }}>
                    Send another message
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="h-12 rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" className="h-12 rounded-xl" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Details</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your project goals and requirements..." 
                  className="min-h-[150px] rounded-xl py-4" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-14 text-lg rounded-xl font-headline font-bold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
