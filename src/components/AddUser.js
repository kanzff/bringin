import React, { useState } from 'react'
import { Button, ToggleSwitch , Label, Modal, TextInput, Select, Spinner } from 'flowbite-react';


const AddUser = ({user, register, isLoading}) => {

    const [switch1, setSwitch1] = useState(true);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('user')


    const handleSubmit = (e) => {
        e.preventDefault()
        register(name, email, phone, password, role, switch1)
    }


    return (
        <>
            {/* <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}> */}
                <Modal.Header />
                    <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-2xl text-center font-medium text-gray-900 dark:text-white">Tambah User</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Nama" />
                            </div>
                            <TextInput id="name" type="text" required value={name} onChange={(e)=> setName(e.target.value)} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput id="email" type="text" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="phone" value="No. Telepon" />
                            </div>
                            <TextInput id="phone" type="number" required value={phone} onChange={(e)=> setPhone(e.target.value)} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput id="password" type="password" required value={password} onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="countries" value="Role" />
                            </div>
                            <Select id="roles" onChange={(e) => setRole(e.target.value)} required>
                                <option value={'user'}>User</option>
                                <option value={'admin'}>Admin</option>
                            </Select>
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

export default AddUser