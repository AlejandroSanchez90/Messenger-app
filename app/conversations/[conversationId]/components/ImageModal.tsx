'use client';

import Modal from '@/app/components/Modal';
import Image from 'next/image';

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
};

function ImageModal({ isOpen, onClose, src }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='w-96 h-96'>
        <Image alt='Image' className='object-cover' fill src={src!} />
      </div>
    </Modal>
  );
}

export default ImageModal;
