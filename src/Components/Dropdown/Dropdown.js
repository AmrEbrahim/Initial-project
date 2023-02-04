import React, { useEffect, useState } from 'react';
import style from './Dropdown.module.scss';
import { useTranslation } from 'react-i18next';

export default function Dropdown(props) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(t('Select'));

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  const handleOpen = () => {
    setIsOpen((previous) => !previous);
  };

  const handleSelectItem = (item) => {
    props.handleSelectItem(item.name);
    setIsOpen((previous) => !previous);
  };

  return (
    <div className={style.dropdownContainer}>
      <div className={`${style.dropdownBtn} ${isOpen ? style.active : null}`} onClick={handleOpen}>
        {title}
      </div>
      <div className={`${style.dropdownList} ${isOpen ? style.show : style.hide}`}>
        {props.List.map((item) => (
          <div
            key={item.id}
            className={`${style.dropdownItem} ${props.title === item.name ? style.selected : null}`}
            onClick={() => handleSelectItem(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
