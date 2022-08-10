import React from 'react'

const Modal = () => {
    return (
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none justify-center items-center"
            id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <p className="font-bold leading-normal text-gray-800" id="exampleModalLabel">Different weather</p>
                        <button type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body relative p-4">
                        <div className='grid grid-cols-4 gap-4'>
                            
                        </div>
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button" 
                        className="px-3 py-3 bg-gray-800 text-white font-medium text-md leading-tight rounded-full shadow-md hover:bg-gray-300 transitionduration-150 ease-in-out ml-1">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
