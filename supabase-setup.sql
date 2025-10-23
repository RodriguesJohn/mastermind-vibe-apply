-- Supabase SQL Schema for Course Platform

-- 1. Users table (extends Supabase auth.users)
CREATE TABLE public.user_profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Course Enrollments
CREATE TABLE public.enrollments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  course_id TEXT DEFAULT 'ai-mastery-cohort',
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'active', -- active, completed, cancelled
  UNIQUE(user_id, course_id)
);

-- 3. Module Progress
CREATE TABLE public.module_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  module_id INTEGER NOT NULL,
  course_id TEXT DEFAULT 'ai-mastery-cohort',
  status TEXT DEFAULT 'not_started', -- not_started, in_progress, completed
  completed_at TIMESTAMP WITH TIME ZONE,
  progress_percentage INTEGER DEFAULT 0,
  UNIQUE(user_id, module_id, course_id)
);

-- 4. User Modules (which modules they've unlocked)
CREATE TABLE public.user_modules (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  module_id INTEGER NOT NULL,
  course_id TEXT DEFAULT 'ai-mastery-cohort',
  unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, module_id, course_id)
);

-- 5. Payments
CREATE TABLE public.payments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  module_id INTEGER,
  amount INTEGER, -- in cents
  currency TEXT DEFAULT 'usd',
  status TEXT, -- pending, completed, failed
  payment_intent_id TEXT, -- Stripe payment intent ID
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Policies (users can only see their own data)
CREATE POLICY "Users can view own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can view own enrollments" ON public.enrollments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view own progress" ON public.module_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view own modules" ON public.user_modules
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view own payments" ON public.payments
  FOR SELECT USING (auth.uid() = user_id);

