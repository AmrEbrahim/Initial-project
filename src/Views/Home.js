import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Dropdown from '../Components/Dropdown/Dropdown';
import style from './Home.module.scss';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const [dropdownValue, setDropdownValue] = useState(t('Select'));
  let DropdownList = [
    { id: '1', name: 'item 1' },
    { id: '2', name: 'item 2' },
    { id: '3', name: 'item 3' },
    { id: '4', name: 'item 4' },
  ];
  const handleSelectItem = (e) => {
    setDropdownValue(e);
  };
  return (
    <Container className="py-4">
      <div className={style.background}>
        <Dropdown title={dropdownValue} List={DropdownList} handleSelectItem={handleSelectItem} />
      </div>
    </Container>
  );
}
