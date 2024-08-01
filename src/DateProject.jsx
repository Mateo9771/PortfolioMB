import ECommerce from './assets/Proyectos/E-Commerce.mp4'
import AppFinanzas from './assets/Proyectos/GestorFinanzas.mp4'
import PasswordGenerator from './assets/Proyectos/Generador de contraseñas.mp4'
import LoginAndRegister from './assets/Proyectos/Login&Register.mp4'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiMysql } from "react-icons/si";

const proyectos = [
    {
        name: 'Login & Register',
        description:'Sistema de login y registro seguro, diseñado para proteger la información de los usuarios. Al registrarse Las contraseñas se hashean automáticamente, garantizando un nivel adicional de seguridad y confidencialidad. Esta arquitectura asegura que los datos sensibles estén protegidos contra accesos no autorizados y vulnerabilidades comunes',
        github: 'https://github.com/Mateo9771/Gestor-de-finanzas.git',
        skills:[
            <FaHtml5 size='1.5rem' color='orange'/>,
            <FaCss3Alt size='1.5rem' color='blue' />,
            <FaBootstrap size='1.5rem' color='violet'/>,
            <DiJavascript size='1.5rem' color='yellow'/>,
            <FaReact/>,
            <FaNpm/>,
            <TbBrandVite/>,
            <SiMysql/>
        ],
        picture: LoginAndRegister,
    },
    {
        name: 'Contraseñas seguras',
        description:'Aplicación para crear contraseñas seguras. Los usuarios pueden seleccionar entre diferentes tipos de caracteres, incluyendo letras minúsculas, mayúsculas, símbolos y números. La aplicación asegura un alto nivel de seguridad al no permitir la selección de menos de tres opciones, garantizando contraseñas complejas y difíciles de descifrar',
        github: 'https://github.com/Mateo9771/Gestor-de-finanzas.git',
        skills:[
            <FaHtml5 size='1.5rem' color='orange'/>,
            <FaCss3Alt size='1.5rem' color='blue' />,
            <FaBootstrap size='1.5rem' color='violet'/>,
            <DiJavascript size='1.5rem' color='yellow'/>,
        ],
        picture: PasswordGenerator,
    },
    {
        name: 'E-Commerce',
        picture: ECommerce,
        description:'Sitio web de venta electrónica con carrito de compras, filtro por categoría, formulario de contacto y login',
        github: 'https://github.com/Mateo9771/Ecommerce.git',
        skills:[
            <FaHtml5 size='1.5rem' color='orange'/>,
            <FaCss3Alt size='1.5rem' color='blue' />,
            <FaBootstrap size='1.5rem' color='violet'/>,
            <DiJavascript size='1.5rem' color='yellow'/>,
            <FaNpm size='1.5rem' color='width'/>,
            <TbBrandVite size='1.5rem' color='orange'/>,
            <FaReact size='1.5rem' color='#22f8ff'/> 
        ]
    },
    {
        name: 'Gestor de Finanzas',
        description:'Aplicación web para la gestión de finanzas personales. Registra transacciones de ingresos y gastos, visualizar totales de entradas y salidas, y calcular el balance total.',
        github: 'https://github.com/Mateo9771/Gestor-de-finanzas.git',
        skills:[
            <FaHtml5 size='1.5rem' color='orange'/>,
            <FaCss3Alt size='1.5rem' color='blue' />,
            <FaBootstrap size='1.5rem' color='violet'/>,
            <DiJavascript size='1.5rem' color='yellow'/>,
        ],
        picture: AppFinanzas,
    },
]

export const getProject = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(proyectos)
        })
    })
}