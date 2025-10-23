# Course Platform Setup Guide

## Overview
This guide explains how to make your course platform functional with user authentication, payments, and progress tracking.

## Architecture

```
Frontend (React) → Supabase (Backend/DB) → Stripe (Payments)
```

### Components:
1. **Frontend**: React with TypeScript
2. **Backend**: Supabase (PostgreSQL + Auth + Storage)
3. **Payments**: Stripe for processing payments
4. **Deployment**: Vercel or Netlify

## Step-by-Step Setup

### 1. Supabase Setup

#### Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

#### Run Database Schema
1. In Supabase dashboard, go to SQL Editor
2. Copy and paste `supabase-setup.sql`
3. Run the SQL to create tables

#### Enable Email Auth
1. Go to Authentication → Providers
2. Enable Email provider
3. Configure email templates

### 2. Stripe Setup

#### Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Create account and get API keys
3. Get your publishable key and secret key

#### Create Product
1. Go to Products in Stripe dashboard
2. Create a product: "Course Module Unlock" - $99
3. Note the product ID

### 3. Environment Variables

Create `.env.local` file:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 4. Install Dependencies

```bash
npm install @supabase/supabase-js @stripe/stripe-js stripe
```

### 5. Add Authentication Pages

Create login/signup pages to handle user authentication.

### 6. Update Course Page

Use the Supabase functions to:
- Check if user is logged in
- Load user's unlocked modules
- Check module lock status
- Handle payment flow

## How It Works

### User Flow:
1. User visits `/course` page
2. If not logged in → redirect to login
3. If logged in → check enrollment
4. If enrolled → show unlocked modules
5. If module locked → show payment modal
6. User pays → Stripe processes payment
7. Webhook updates Supabase → Module unlocked
8. User can access module content

### Payment Flow:
1. User clicks locked module
2. Payment modal opens
3. User enters card details
4. Frontend creates Stripe PaymentIntent
5. Payment processed
6. Webhook received → Update Supabase
7. Module unlocked for user

### Progress Tracking:
1. User completes video/content
2. Frontend calls `updateModuleProgress()`
3. Supabase stores progress
4. Progress bar updates automatically

## Security

- **Row Level Security (RLS)**: Users can only see their own data
- **Auth**: Supabase handles authentication
- **Payments**: Stripe handles secure payment processing
- **Webhooks**: Secure server-side verification

## Testing

### Test Payment Flow:
1. Use Stripe test card: `4242 4242 4242 4242`
2. Any future expiry date
3. Any CVV

### Test User Flow:
1. Create test account
2. Login
3. Try to access locked module
4. Complete payment
5. Verify module unlocks

## Next Steps

1. **Add Authentication Pages**: Login/Signup
2. **Integrate Stripe**: Payment processing
3. **Add Webhooks**: Handle payment confirmation
4. **Add Video Player**: Actual video content
5. **Add Progress Tracking**: Mark videos as complete

## Resources

- [Supabase Docs](https://supabase.com/docs)
- [Stripe Docs](https://stripe.com/docs)
- [React Router](https://reactrouter.com/)

