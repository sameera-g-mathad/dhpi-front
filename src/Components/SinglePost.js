import React, { useState, useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { GrLinkNext } from 'react-icons/gr';
import DairyContext from '../Context/dairyContext';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
export const SinglePost = (props) => {
  const { deletePost } = useContext(DairyContext);
  const [open, setOpen] = useState(false);
  const { el } = props;
  let description = [],
    arr = [],
    string = '';
  if (el.description.length > 20) {
    description = el.description.split(' ');
    arr = description.slice(0, 20);
    string = arr.join(' ');
  }
  return (
    <div
      key={el._id}
      className="flex flex-col p-2 m-2 transition-all bg-white rounded-lg shadow"
    >
      <span className="flex items-center justify-between">
        <span className="w-48 text-lg font-semibold tracking-wide capitalize truncate">
          {el.title}
        </span>
        <span className="flex justify-between w-12 ml-2 text-lg item-center">
          <button className="focus:outline-none" onClick={() => setOpen(true)}>
            <MdDelete />
          </button>
          <FaEdit />
        </span>
      </span>
      <span className="h-32 py-2 overflow-y-hidden ">
        {arr.length === 0 ? el.description : string + '...'}
      </span>
      <span className="flex justify-end">
        <button className="px-4 font-semibold tracking-wider capitalize">
          <span className="flex items-center justify-between w-16">
            <span>view</span>
            <GrLinkNext />
          </span>
        </button>
      </span>
      <Modal centered={true} isOpen={open}>
        <ModalHeader className="text-lg font-bold">Are you sure?</ModalHeader>
        <ModalBody className="h-20 font-semibold capitalize truncate">
          do you wish to delete "{el.title}"
        </ModalBody>
        <ModalFooter>
          <button
            onClick={() => {
              deletePost(el._id);
              window.location.reload(false);
            }}
            className="px-4 font-semibold tracking-wider capitalize"
          >
            confirm
          </button>
          <button
            className="px-2 font-semibold tracking-wider capitalize"
            onClick={() => {
              setOpen(false);
            }}
          >
            cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
