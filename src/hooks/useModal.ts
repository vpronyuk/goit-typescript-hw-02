import { useState } from "react";

const useModal = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const onSelectImg = (largeImgURL: string) => {
    setSelectedImg(largeImgURL);
    setIsShowModal(true);
  };

  const toggleModal = () => {
    setIsShowModal((prevIsShowModal) => !prevIsShowModal);
  };

  return { selectedImg, isShowModal, onSelectImg, toggleModal };
};

export default useModal;
