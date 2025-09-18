-- Create leads table to store form submissions
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  business_type TEXT NOT NULL,
  phone TEXT NOT NULL,
  currency TEXT NOT NULL CHECK (currency IN ('USD', 'BRL')),
  revenue_range TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'pt',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (for contact forms)
-- In production, you might want to add rate limiting or other restrictions
CREATE POLICY "Allow public lead insertion" ON public.leads
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading leads (for admin purposes)
-- You can modify this based on your admin authentication needs
CREATE POLICY "Allow reading leads" ON public.leads
  FOR SELECT 
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_business_type_idx ON public.leads(business_type);
