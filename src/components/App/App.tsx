import { FC, useState } from "react";
import "../../styles/styles.css";

import ImageGallery from "../ImageGallery/ImageGallery";
import Searchbar from "../SearchBar/Searchbar";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import useImageLoader from "../../hooks/useImageLoader";
import useModal from "../../hooks/useModal";

const App: FC = () => {
  const [userQuery, setUserQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { requestedImg, isLoading, isShowButton } = useImageLoader(
    userQuery,
    page
  );
  const { selectedImg, isShowModal, onSelectImg, toggleModal } = useModal();

  const onFormSubmit = (query: string) => {
    setUserQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <Searchbar onFormSubmit={onFormSubmit} />

      {requestedImg && requestedImg.length > 0 && (
        <>
          <ImageGallery requestedImg={requestedImg} onSelect={onSelectImg} />
          {isLoading && <Loader />}
          {isShowButton && <Button onClick={handleLoadMore} />}
        </>
      )}

      {isShowModal && selectedImg !== null && (
        <Modal onClose={toggleModal} selectedImg={selectedImg} />
      )}
    </div>
  );
};

export default App;
