import React, { useState } from 'react'
import { Button, ToggleSwitch , Label, Modal, TextInput, Spinner } from 'flowbite-react';


const EditProduct = ({product, editProduct, isLoading}) => {

    const [switch1, setSwitch1] = useState(product.is_active);
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [image, setImage] = useState(product.image)

    const handleSubmit = (e) => {
        e.preventDefault()
        editProduct(product.id, name, price, image, switch1)
    }


    return (
        <>
            {/* <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}> */}
                <Modal.Header />
                    <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-2xl text-center font-medium text-gray-900 dark:text-white">Edit Produk</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Nama" />
                            </div>
                            <TextInput id="name" type="text" required value={name} onChange={(e)=> setName(e.target.value)} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="price" value="Harga" />
                            </div>
                            <TextInput id="price" type="number" required value={price} onChange={(e)=> setPrice(e.target.value)} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="image" value="Url Gambar" />
                            </div>
                            <TextInput id="image" type="text" required value={image} onChange={(e)=> setImage(e.target.value)} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="status" value="Status" />
                            </div>
                            <div className='flex border rounded-lg p-1 bg-slate-100 border-slate-300'>
                                <div className='items-center p-1'>
                                    <ToggleSwitch checked={switch1} onChange={setSwitch1} />
                                </div>
                                <div>
                                    <p className={`ml-2 font-medium border rounded-lg py-1 px-2 text-white ${switch1 ? 'bg-green-600' : 'bg-red-600'}`}>{switch1 ? 'AKTIF' : 'TIDAK AKTIF'}</p>
                                </div>
                            </div>
                        </div>
                        {!!isLoading ? 
                            <div className='flex m-4 justify-center'>
                                <Spinner color="info" aria-label="Info spinner example" />
                            </div> :
                            <div className="w-full flex justify-center">
                                <Button onClick={handleSubmit}>SIMPAN</Button>
                            </div>
                        }
                    </div>
                </Modal.Body>
            {/* </Modal> */}
        </>
    )
}

export default EditProduct