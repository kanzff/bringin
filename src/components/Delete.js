import { Button, Modal, Spinner } from 'flowbite-react'
import React from 'react'

const Delete = ({type, product, deleteProduct, setDeleteModal, user, deleteUser, setDeleteUserModal, isLoading}) => {
  return (
    <>
        <Modal.Header />
        <Modal.Body>
        <div className="text-center">
            <div className='flex justify-center'>
                <svg className='mb-8' width='30' height='30' fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 21.063v-15.063c0-0.563 0.438-1 1-1s1 0.438 1 1v15.063h-2zM15 23.031h2v1.875h-2v-1.875zM0 16c0-8.844 7.156-16 16-16s16 7.156 16 16-7.156 16-16 16-16-7.156-16-16zM30.031 16c0-7.719-6.313-14-14.031-14s-14 6.281-14 14 6.281 14 14 14 14.031-6.281 14.031-14z"></path> </g></svg>
            </div>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this?
            </h3>
            <div className="flex justify-center gap-4">
            {!!isLoading ? 
                <div className='flex m-4 justify-center'>
                    <Spinner color="info" aria-label="Info spinner example" />
                </div> :
                <>
                    {type === 'product' &&
                        <>
                            <Button color="failure" onClick={() => deleteProduct(product.id)}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setDeleteModal(false)}>
                                No, cancel
                            </Button>
                        </>
                    }
                    {type === 'user' &&
                        <>
                            <Button color="failure" onClick={() => deleteUser(user.id)}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setDeleteUserModal(false)}>
                                No, cancel
                            </Button>
                        </>
                    }
                </>
            }
            </div>
        </div>
        </Modal.Body>
    </>
  )
}

export default Delete