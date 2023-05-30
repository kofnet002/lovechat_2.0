import { z } from "zod";

export const messageValidator = z.object({
    id: z.string(),
    senderId: z.string(),
    text: z.string(),
    timestamp: z.number()
})

export const messageArrayValidator = z.array(messageValidator) // validate the array of messages

export type Message = z.infer<typeof messageValidator>