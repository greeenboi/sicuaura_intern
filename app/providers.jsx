'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
        //   fontFamily: ' "Onest", "Raleway", sans-serif',
        },
      }),
    },
  });


export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}