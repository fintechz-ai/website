'use client'
import React, { useEffect, useRef, useState } from 'react'
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

// import { getPrediction } from '@/API';

const Chat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const [app, setApp] = useState(null); 
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [ loading, setLoading ] = useState(false);
  
  const onsubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessages([...messages, { type: 'sent', content: query }]);
    
    console.log(query);
    const response = await getPrediction({"inputs": `${query}` });
    console.log(JSON.stringify(response));
  
    response.map((item) => {
      setMessages(prevMessages => [...prevMessages, { type: 'received', content: item.generated_text }]);
    });
    setLoading(false);
    setQuery("");
  }

  async function getPrediction(data) {
    const auth = `Bearer ${process.env.NEXT_PUBLIC_HUGGINFACES_API_KEY}`;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/ahxt/LiteLlama-460M-1T",
      {
        headers: { Authorization:  "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }
  
  

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
          <div className='w-full h-full overflow-y-auto flex flex-col font-MerriWeatherSans overflowdesign'>
            {messages.map((message, index) => (
              <p key={index} className={message.type === 'sent' ? 'msgsend' : 'msgreceive'}>
                {message.content}
              </p>
            ))}
          </div>
          </section>
          </DrawerBody>

          <DrawerFooter className='bg-slate-900'>
              <div className=' flex flex-row gap-1 mx-2 my-4 items-center justify-evenly w-full'>
                  <Input colorScheme='teal' className='text-white' variant='flushed' value={query} type='text' size='sm' placeholder='Your Query Here...'  onChange={(e)=>setQuery(e.target.value)} />
                  <Button isLoading={loading} colorScheme='teal' variant='outline' size='sm' onClick={onsubmit} ><IoIosSend /></Button>
              </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Chat