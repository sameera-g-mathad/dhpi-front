import React, { useState, useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import DairyContext from '../Context/dairyContext';
import ColorContext from './../Context/colorContext';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
export const SinglePost = (props) => {
  const { state, deletePost } = useContext(DairyContext);
  const { color } = useContext(ColorContext);
  const [open, setOpen] = useState(false);
  const { el } = props;
  const { token } = state;
  const history = useHistory();
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
        <span
          className={`w-48 text-lg font-semibold tracking-widest capitalize truncate title ${color.text}`}
        >
          {el.title}
        </span>
        <span className="flex justify-between w-12 ml-2 text-lg item-center">
          <button
            className={`${color.text} focus:outline-none`}
            onClick={() => setOpen(true)}
          >
            <MdDelete />
          </button>
          <Link
            className={`${color.text} focus:outline-none`}
            to={{
              pathname: '/edit_note',
              state: { el, id: token },
            }}
          >
            <FaEdit />
          </Link>
        </span>
      </span>
      <span
        className={`h-32 py-2 overflow-y-hidden flex flex-wrap capitalize text-md font-semibold tracking-wider ${color.text}`}
      >
        {arr.length === 0 ? el.description : string + '...'}
      </span>
      <span className="flex justify-end">
        <Link
          to={{
            pathname: `/view_dairy/${el._id}`,
            state: {
              title: el.title,
              description: el.description,
            },
          }}
          className={`${color.text} px-2  font-semibold tracking-wider capitalize hover:no-underline hover:${color.text}`}
        >
          <span
            className={`flex items-center justify-end border-2 rounded-lg ${color.border}  py-1 px-4`}
          >
            <span>view</span>
          </span>
        </Link>
      </span>
      <Modal centered={true} isOpen={open}>
        <ModalHeader className={`${color.bg} ${color.text} text-lg font-bold`}>
          Are you sure?
        </ModalHeader>
        <ModalBody
          className={`${color.bg} ${color.text} h-20 font-semibold capitalize truncate`}
        >
          do you wish to delete "{el.title}"
        </ModalBody>
        <ModalFooter className={` ${color.bg}`}>
          <button
            onClick={() => {
              deletePost(el._id, () => window.location.reload(false));
            }}
            className={`px-4 font-semibold tracking-wider capitalize ${color.text} focus:outline-none`}
          >
            confirm
          </button>
          <button
            className={`px-4 font-semibold tracking-wider capitalize ${color.text} focus:outline-none `}
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
