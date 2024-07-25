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
import { SiVisualstudio } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiBurpsuite } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { GiHydra } from "react-icons/gi";
import { SiCplusplus } from "react-icons/si";

const Skill = [
    {
        name: 'HTML',
        icon: <FaHtml5 size='1.7rem' color='orange'/>,
        category:'developer'
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt size='1.7rem' color='blue'/>,
        category:'developer'
    },
    {
        name: 'Javascript',
        icon: <DiJavascript size='1.7rem' color='yellow'/>,
        category:'lenguaje'
    },
    {
        name: 'Bootstrap',
        icon: <FaBootstrap size='1.7rem' color='violet'/>,
        category:'developer'
    },
    {
        name: 'Sass',
        icon: <FaSass size='1.7rem' color='black'/>,
        category:'developer'
    },
    {
        name: 'React',
        icon: <FaReact size='1.7rem' color='#22f8ff'/>,
        category:'developer'
    },
    {
        name:'Node.Js',
        icon: <FaNodeJs size='1.7rem' color='green'/>,
        category:'developer'
    },
    {
        name:'MySQL',
        icon: <SiMysql size='1.7rem' color='black'/>,
        category:'lenguaje'
    },
    {
        name:'PHP',
        icon: <SiPhp size='1.7rem' color='black'/>,
        category:'lenguaje'
    },
    {
        name:'VisualStudio',
        icon: <SiVisualstudio size='1.7rem' color='#1fa1d4'/>,
        category:'tools'
    },
    {
        name:'PostgrSQL',
        icon: <SiPostgresql size='1.7rem' color='black'/>,
        category:'tools'
    },
    {
        name:'GitHub',
        icon: <FaGithub size='1.7rem' color='black'/>,
        category:'tools'
    },
    {
        name:'Firebase',
        icon: <IoLogoFirebase size='1.7rem' color='orange'/>,
        category:'tools'
    },
    {
        name: 'BurpSuit',
        icon: <SiBurpsuite size='1.7rem' color='orange'/>,
        category:'auditory'
    },
    {
        name: 'Kali Linux',
        icon: <SiKalilinux size='1.7rem' color='black'/>,
        category:'auditory'
    },
    {
        name: 'Hydra',
        icon: <GiHydra size='1.7rem' color='black'/>,
        category:'auditory'
    },
    {
        name: 'C++',
        icon: <SiCplusplus size='1.7rem' color='#1fa1d4'/>,
        category:'lenguaje'
    },
]

export const getSkill = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Skill)
        })
    })
}
