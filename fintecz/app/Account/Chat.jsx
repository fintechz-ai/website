'use client'
import React, { useRef } from 'react'
import {
    Button,
    Input,
} from '@chakra-ui/react'
import { IoIosSend } from "react-icons/io";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { PiChatsFill } from "react-icons/pi";

const Chat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      <Button className='absolute left-0 top-0' ref={btnRef} colorScheme='teal' variant='ghost' onClick={onOpen}>
        <PiChatsFill />
      </Button>
      <Drawer
        isOpen={isOpen}
        size='lg'
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className='bg-slate-900 text-white text-lg text-center font-KulimPark'>Talk With SRMFINPAY ChatBot</DrawerHeader>

          <DrawerBody className='bg-slate-900'>
          <section className=' flex flex-col gap-2 bg-slate-700 p-4 border-gray-300 border rounded-lg w-full h-full'>
              <div className='w-full  h-full overflow-y-auto flex flex-col font-MerriWeatherSans overflowdesign'>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
                <p className=' msgsend'>send</p>
                <p className=' msgreceive'>recieve</p>
              </div>
          </section>
          </DrawerBody>

          <DrawerFooter className='bg-slate-900'>
              <div className=' flex flex-row gap-1 mx-2 my-4 items-center justify-evenly w-full'>
                  <Input colorScheme='teal' variant='flushed' size='sm' placeholder='Your Query Here...' />
                  <Button colorScheme='teal' variant='outline' size='sm' ><IoIosSend /></Button>
              </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Chat