import React, { useEffect, useState } from 'react';
import Heading from '../components/shared/Heading';
import QuakeItemList from '../components/ui/quake/QuakeItemList';
import apiService from '../services/apiService';

const Quake: React.FC = () => {
  const [quake, setQuake] = useState<Quake>();

  const fetchQuakeData = async () => {
    const quakeData: Quake | undefined = await apiService.getQuake();
    setQuake(quakeData);
  };

  useEffect(() => {
    fetchQuakeData();
  }, []);

  if (!quake) return null;

  return (
    <>
      <Heading headingName="Info Gempa Terkini" />

      <QuakeItemList quake={quake} />
    </>
  );
};

export default Quake;
