"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Head from 'next/head'
import { Header } from './Header'
import Image from 'next/image'
import { FaSortAmountDown } from "react-icons/fa";
import Icon from '../../public/image 18.svg'

import {
  Button,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
} from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";

import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);


export default function Dashboard () {
  const [hospitalData, setHospitalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    const fetchAllData = async () => {
      let { data, error } = await supabase.from('hospitalreg').select('*');
      if (error) {
        console.error('Error: ', error);
        setIsLoading(false);
      } else {
        setHospitalData(data);
        setIsLoading(false);
      }
    };
    fetchAllData();
  }, []);

  const fetchSearchData = async () => {
    setIsLoading(true);
    let { data, error } = await supabase
      .from('hospitalreg')
      .select('*')
      .ilike('hospital_name', `%${searchTerm}%`);
    if (error) {
      console.error('Error: ', error);
      setIsLoading(false);
    } else {
      setHospitalData(data);
      setIsLoading(false);
    }
  }

  const fetchFilteredData = async () => {
    setIsLoading(true);

    let { data, error } = await supabase
      .from('hospitalreg')
      .select('*')
      .order('date_reg', { ascending: true });
    if (error) {
      console.error('Error: ', error);
      setIsLoading(false);
    } else {
      setHospitalData(data);
      setIsFiltered(true);
      setIsLoading(false);
    }
  }

  return (
    <>
        <Header />
        <Head>
            <title>Dashboard</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main className='bg-white w-screen h-screen flex flex-col items-center py-24 overflow-x-hidden'>
          <div className='flex flex-row-reverse w-4/6 h-fit '>
            <Image src={Icon} alt="Cool Logo" width={83} height={83} />
          </div>
          <section className='w-11/12 h-fit overflow-x-hidden'>
              <div className=' flex flex-row w-full h-fit text-black justify-between'>
                <h1 className=' font-montserrat font-medium text-4xl'>Hospital Registrations</h1>
                <div className='flex items-center flex-row '>
                  <Input placeholder="Search" className='w-full h-fit ml-4 p-2 border-r-0 shadow-md' size='md' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                  <Button className='p-0 bg-white hover:bg-white active:bg-gray-400 right-10 z-10 hover:opacity-70' onClick={fetchSearchData} ><CiSearch /></Button>
                  {
                    isFiltered ? (
                      <Button className='p-0 hover:bg-white active:bg-gray-400 shadow-md ml-12' size="md" onClick={() => window.location.reload()}><FaSortAmountDown /></Button>
                    ) : (
                      <Button className='p-0 hover:bg-white active:bg-gray-400 shadow-md ml-12' too size="md" onClick={fetchFilteredData}><IoFilterOutline /></Button>
                    )
                  }
                  

                </div>
              </div>
              {isLoading ? 
                (
                  <section className='w-full h-96 flex flex-col justify-center items-center'> 
                    <Spinner size='xl' />
                  </ section>
                ) : (
                  <TableContainer className='text-black my-12 text-clip'>
                    <Table variant='striped' colorScheme='gray'>
                      <TableCaption>Made with 💖 by Suvan GS</TableCaption>
                      <Thead className='bg-teal-300 border rounded-xl my-2'>
                        <Tr >
                          <Th>No.</Th>
                          <Th>Date & Time</Th>
                          <Th >Hospital Name</Th>
                          <Th >Email</Th>
                          <Th >Address</Th>
                          <Th >Phone No.</Th>
                          <Th >City</Th>
                          <Th >State</Th>
                          <Th >Pincode</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        
                        {hospitalData.map((data, index) => (
                          <Tr key={index}>
                            <Td>{index+1}</Td>
                            <Td>{data.date_reg}</Td>
                            <Td>{data.hospital_name}</Td>
                            <Td>{data.email}</Td>
                            <Td>{data.address}</Td>
                            <Td>{data.phone_no}</Td>
                            <Td>{data.city}</Td>
                            <Td>{data.state}</Td>
                            <Td>{data.pincode}</Td>
                          </Tr>
                        ))}                    
                      </Tbody>
                      <Tfoot>
                        
                      </Tfoot>
                    </Table>
                  </TableContainer>                  
                ) 
              }
          </section>
        </main>
    </>
  )
}
