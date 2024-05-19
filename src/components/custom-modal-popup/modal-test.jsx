



import React, { useState } from 'react'
import Modal from './modal';

function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);
    function handleToggleModalPupup() {
        setShowModalPopup(!showModalPopup)
    }
  return (
    <div>
        <button onClick={handleToggleModalPupup}>Open Modal Popup</button>
        {
            showModalPopup && <Modal />
        }
    </div>
  )
}

export default ModalTest