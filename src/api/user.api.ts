import type { Login, User } from '@/domains/user' 
import { supabase } from '@/plugins/supabase'

async function login (credentials: Login): Promise<User> {
  const {data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', credentials.username)
    .eq('password', credentials.password)
    .single()

  if (error) {
    throw new Error(error.message)
  }
  return data
}

async function register (user: User): Promise<User> {
  const { data, error } = await supabase
    .from('users')
    .insert([user])
    .single()

  if (error) {
    throw new Error(error.message)
  }
  return data
}

export { login, register }
