import { Redis } from '@upstash/redis'

// @ts-ignore
export const db: Redis = new Redis({
    url: 'https://usw2-patient-dog-30902.upstash.io',
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});