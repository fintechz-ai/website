'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { 
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Avatar,
  AvatarBadge,
  Spinner,
 } from '@chakra-ui/react'

export default function AccountForm({ session }) {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="w-screen h-screen bg-black flex flex-col justify-center gap-4 items-center">
      <Avatar size='2xl' name={fullname} src='https://bit.ly/broken-link' className=' shadow-lg shadow-teal-200' />
      <section className=' bg-zinc-900 border-teal-400 rounded-lg w-1/2 h-1/2 border shadow-inner p-12 flex flex-col gap-2 items-start justify-evenly text-white '>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input id="email" type="text" value={session?.user.email} disabled />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            id="fullName"
            type="text"
            value={fullname || ''}
            onChange={(e) => setFullname(e.target.value)}
            />
          <FormHelperText>What do you want us to call you?</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            id="username"
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
            />
          <FormHelperText>This is what others will see</FormHelperText>
        </FormControl>
        
        {/* <div>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="url"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div> */}

      </section>

      <div className=' flex flex-row justify-between w-1/2'>
        <Button
          className="button primary block"
          onClick={() => updateProfile({ fullname, username, website, avatar_url })}
          disabled={loading}
          colorScheme='teal'
          variant='solid'
        >
          {loading ? <Spinner size='md' /> : 'Update'}
        </Button>
        <form action="/Auth/signout" method="post">
          <Button className="button block" colorScheme='teal' variant='outline' type="submit">
            Sign out
          </Button>
        </form>
      </div>
    </main>
  )
}