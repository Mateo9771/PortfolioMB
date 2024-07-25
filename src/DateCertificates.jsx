import Ademika from './assets/certificados/Certificados dev/CertificateDesarrolloWebFullStack.webp'
import CoderhouseFER from './assets/certificados/Certificados dev/CertificateFrontEndReact.webp'
import Iso27001 from './assets/certificados/Certificados S.I/Iso27001.webp'
import Analisis from './assets/certificados/Certificados S.I/Analisis de riesgo.webp'
import Hacking from './assets/certificados/Certificados S.I/HackingEtico.webp'
import Ciberseguridad from './assets/certificados/Certificados S.I/Ciberseguridad.webp'
import IntCiberseguridad from './assets/certificados/Certificados S.I/IntroducciónCiberseguridad.webp'
import Locked from './assets/Locked.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNpm } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiBurpsuite } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { GiHydra } from "react-icons/gi";

const CertificatesDev = [
    {
       title: 'Desarrollo web Full Stack',
       institucion: 'ADEMIKA', 
       category:'developer',
       state:'Finalizado',
       fecha: '20/06/2023',
       description: [
            <FaHtml5 color='orange' size='1.5rem'/>,
            <FaCss3Alt color='blue' size='1.5rem' />,
            <DiJavascript color='yellow' size='1.5rem' />,
            <SiPhp color='black' size='1.5rem' />,
            <SiMysql color='black' size='1.5rem'/>,
            <FaBootstrap color='violet' size='1.5rem' />

        ],
            
       img: Ademika,
    },
    {
        title: 'Carrera Front End React',
       institucion: 'CODERHOUSE', 
       category:'developer',
       state:'Finalizado',
       fecha: '11/05/2024',
       description: [
            <FaHtml5  color='orange' size='1.5rem'/>,
            <FaCss3Alt  color='blue' size='1.5rem' />,
            <FaSass  color='black' size='1.5rem'/>,
            <FaBootstrap  color='violet' size='1.5rem' />,
            <FaGithub  color='black' size='1.5rem'/>,
            <TbBrandVite color='orange' size='1.5rem' />,
            <FaNpm color='black' size='1.5rem' />,
            <FaNodeJs  color='green' size='1.5rem' />,
            <IoLogoFirebase  color='orange' size='1.5rem'/>,
            <FaReact  color='#22f8ff' size='1.5rem'/>,
            <DiJavascript  color='yellow' size='1.5rem' />
       ],
       img: CoderhouseFER,
    },
    {
        title: 'Carrera de desarrollo Back End',
       institucion: 'CODERHOUSE', 
       category:'developer',
       state:'Inicio',
       fecha: '05/08/2024',
       description: '',
       img: Locked
    },
  
]

const CertificatesSec = [
    {
        title: 'Ciberseguridad',
        institucion: 'CODERHOUSE', 
        category:'security',
        state:'Finalizado',
        fecha: '29/08/2023',
        description: [
            <SiBurpsuite size='1.5rem' color='orange'/>,
            <SiKalilinux size='1.5rem' color='black'/>,
            <GiHydra size='1.5rem' color='black'/>
         ],
             
        img: Ciberseguridad,
     },
     {
        title: 'Hacking Ético',
        institucion: 'UDEMY', 
        category:'security',
        state:'Finalizado',
        fecha: '12/01/2024',
        description: [
            <SiBurpsuite size='1.5rem' color='orange'/>,
            <SiKalilinux size='1.5rem' color='black'/>,
            <GiHydra size='1.5rem' color='black'/>
         ],
             
        img: Hacking,
     },
     {
        title: 'ISO/IEC 27001',
        institucion: 'UDEMY', 
        category:'security',
        state:'Finalizado',
        fecha: '29/05/2024',
        description: [
           'Plan-Do-Check-Act'
         ],
             
        img: Iso27001,
     },
     {
        title: 'Analisis de Riesgo',
        institucion: 'CAPACITATE PARA EL EMPLEO', 
        category:'security',
        state:'Finalizado',
        fecha: '29/06/2024',
        description: [
           
         ],
             
        img: Analisis,
     },
     {
        title: 'Introducción a Ciberseguridad',
        institucion: 'CISCO', 
        category:'security',
        state:'Finalizado',
        fecha: '30/06/2024',
        description: [
           
         ],
             
        img: IntCiberseguridad,
     },
     {
        title: 'Concepto Básicos de redes',
        institucion: 'CISCO', 
        category:'security',
        state:'En curso',
        fecha: '',
        description: [
           
         ],
             
        img: Locked,
     },

]

const Tecnico = [
    {
        title: 'Tecnicatura superior en programación',
        institucion: 'TECLAB', 
        category:'tecnico',
        state:'En curso',
        fecha: '04/04/2023',
        description: [
            <SiCplusplus size='1.5rem' color='#1fa1d4'/>,
            <SiPostgresql size='1.5rem' color='black'/>,
            <SiMysql color='black' size='1.5rem'/>
         ],
             
        img: Locked,   
    }
]

export const getCertificatesDev = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(CertificatesDev)
        })
    })
}

export const getCertificatesSec = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(CertificatesSec)
        })
    })
}

export const getCertificatesTec = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Tecnico)
        })
    })
}