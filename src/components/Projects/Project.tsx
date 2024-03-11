'use client';

import type { Dispatch, SetStateAction } from 'react';
import type { ModalStateType } from '.';

type ProjectType = {
  index: number;
  title: string;
  setModal: Dispatch<SetStateAction<ModalStateType>>;
};

export function Project({ index, title, setModal }: ProjectType) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className='w-full py-12 border-t-[1px] border-t-black last-of-type:border-b-[1px] border-b-black group'
    >
      <div className='container flex justify-between items-center'>
        <h2 className='text-[60px] m-0 font-normal transition duration-500 group-hover:-translate-x-3 text-[#242424] group-hover:text-lime-500'>
          {title}
        </h2>
        <p className='transition duration-500 font-light group-hover:-translate-x-3 text-[#242424]'>
          Design & Development
        </p>
      </div>
    </div>
  );
}
