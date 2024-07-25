import React from 'react'
import './CertificatesList.css'
import Timeline from '../TimeLine/TimeLine'
import { getCertificatesDev, getCertificatesSec, getCertificatesTec } from '../../DateCertificates';
import { useEffect, useState } from 'react';


const CertificatesList = () => {
  const [devCertificates, setDevCertificates] = useState([]);
  const [secCertificates, setSecCertificates] = useState([]);
  const [tecCertificates, setTecCertificates] = useState([]);

  useEffect(() => {
    getCertificatesDev().then(data => {
      setDevCertificates(data);
    });
    getCertificatesSec().then(data => {
      setSecCertificates(data);
    });
    getCertificatesTec().then(data => {
      setTecCertificates(data);
    });
  }, []);

  return (
    <div className='CertificatesList col-12' id='Certificates'>
      <h1>Formación academica</h1>
      <h2>Terciario</h2>
      <Timeline events={tecCertificates} />
      <h2>Certificados de Seguridad Informatica</h2>
      <Timeline events={secCertificates} />
      <h2>Certificados de Desarrollo</h2>
      <Timeline events={devCertificates} />
    </div>
  )
}

export default CertificatesList