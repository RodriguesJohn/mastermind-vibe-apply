// Supabase utility functions for course platform

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth Functions
export const auth = {
  // Sign up
  async signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { data, error };
  },

  // Sign in
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Get current user
  getCurrentUser() {
    return supabase.auth.getUser();
  },

  // Session
  getSession() {
    return supabase.auth.getSession();
  },
};

// Course Functions
export const course = {
  // Check if user is enrolled
  async isEnrolled(userId: string) {
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', 'ai-mastery-cohort')
      .single();
    
    return { isEnrolled: !!data, data, error };
  },

  // Enroll user in course
  async enrollUser(userId: string) {
    const { data, error } = await supabase
      .from('enrollments')
      .insert({
        user_id: userId,
        course_id: 'ai-mastery-cohort',
        status: 'active',
      });
    
    return { data, error };
  },

  // Get user's module progress
  async getModuleProgress(userId: string, moduleId: number) {
    const { data, error } = await supabase
      .from('module_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('module_id', moduleId)
      .eq('course_id', 'ai-mastery-cohort')
      .single();
    
    return { data, error };
  },

  // Update module progress
  async updateModuleProgress(userId: string, moduleId: number, status: string) {
    const { data, error } = await supabase
      .from('module_progress')
      .upsert({
        user_id: userId,
        module_id: moduleId,
        course_id: 'ai-mastery-cohort',
        status: status,
        progress_percentage: status === 'completed' ? 100 : 50,
        completed_at: status === 'completed' ? new Date().toISOString() : null,
      });
    
    return { data, error };
  },

  // Check if module is unlocked
  async isModuleUnlocked(userId: string, moduleId: number) {
    const { data, error } = await supabase
      .from('user_modules')
      .select('*')
      .eq('user_id', userId)
      .eq('module_id', moduleId)
      .eq('course_id', 'ai-mastery-cohort')
      .single();
    
    return { isUnlocked: !!data, data, error };
  },

  // Unlock module
  async unlockModule(userId: string, moduleId: number) {
    const { data, error } = await supabase
      .from('user_modules')
      .insert({
        user_id: userId,
        module_id: moduleId,
        course_id: 'ai-mastery-cohort',
      });
    
    return { data, error };
  },

  // Get all user's unlocked modules
  async getUnlockedModules(userId: string) {
    const { data, error } = await supabase
      .from('user_modules')
      .select('module_id')
      .eq('user_id', userId)
      .eq('course_id', 'ai-mastery-cohort');
    
    return { data, error };
  },
};

// Payment Functions
export const payments = {
  // Create payment record
  async createPayment(userId: string, moduleId: number, amount: number, paymentIntentId: string) {
    const { data, error } = await supabase
      .from('payments')
      .insert({
        user_id: userId,
        module_id: moduleId,
        amount: amount,
        currency: 'usd',
        status: 'pending',
        payment_intent_id: paymentIntentId,
      });
    
    return { data, error };
  },

  // Update payment status
  async updatePaymentStatus(paymentIntentId: string, status: string) {
    const { data, error } = await supabase
      .from('payments')
      .update({ status })
      .eq('payment_intent_id', paymentIntentId);
    
    return { data, error };
  },
};

