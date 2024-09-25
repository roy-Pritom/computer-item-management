import { useState } from 'react';
import { Button, Modal } from 'antd';
import { FaEdit } from 'react-icons/fa';
import ProductUpdateInput from '../ui/ProductUpdateInput';
import SaleInput from '../ui/SaleInput';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
const MyModal = ({ productId, isEdit }: { productId: string; isEdit: boolean }) => {
  const { isDuplicate } = useAppSelector((state: RootState) => state.myState)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // for only cancel button
  const modalFooter = [
    <Button key="back" onClick={handleCancel}>
      Cancel
    </Button>,
  ];

  return (
    <>
      <Button type="primary" className=' bg-slate-900' onClick={showModal}>
        {
          isDuplicate ?
            'Duplicate' :
            (isEdit ? <FaEdit /> : 'Sale')
        }
      </Button>
      <Modal title={`${isDuplicate ? 'Create Product' :
       (isEdit?'Update your product' : 'Create sale')}`} open={isModalOpen} onCancel={handleCancel} footer={modalFooter}>
        {
          isEdit ?
            <ProductUpdateInput productId={productId} setIsModalOpen={setIsModalOpen} />
            :
            <SaleInput productId={productId} setIsModalOpen={setIsModalOpen} />
        }
      </Modal>
    </>
  );
};

export default MyModal;