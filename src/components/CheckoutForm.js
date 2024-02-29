import React from 'react'
import { Button, Label, TextInput, Textarea } from 'flowbite-react';


const CheckoutForm = () => {
  return (
    <div className='mt-32 flex max-w-screen-2xl min-h-screen justify-center mx-auto p-4'>
      <div className='h-[30rem] w-1/2 py-8 px-12 flex justify-center bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className="flex w-full flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username3" color="success" value="Name" />
            </div>
            <TextInput
              id="username"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username3" color="success" value="Email" />
            </div>
            <TextInput
              id="username"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username3" color="success" value="Address" />
            </div>
            <Textarea
              id="username"
              required
              rows={4}
            />
          </div>
          <div className='flex justify-center mt-8'>
            <Button>Confirm Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm