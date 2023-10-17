import {FaKey} from 'react-icons/fa'
import {BsBox} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {RiMoneyDollarBoxLine} from 'react-icons/ri'
import {LiaPercentageSolid} from 'react-icons/lia'
import {MdOutlineLiveHelp} from 'react-icons/md'
import {AiOutlineRight} from 'react-icons/ai'
import headset from '../assets/headset.jpg'
import camera from '../assets/tableimg.jpg'

const data = [
    {
        pathname: '/',
        title: 'Dashboard',
        icons: <FaKey size={20} />,
        righticon: <AiOutlineRight size={15}/>,
    },
    {
        pathname: '/product',
        title: 'Product',
        icons: <BsBox size={20} />,
        righticon: <AiOutlineRight size={15}/>,
    },
    {
        pathname: '/customers',
        title: 'customers',
        icons: <CgProfile size={20} />,
        righticon: <AiOutlineRight size={15}/>,
    },
    {
        pathname: '/income',
        title: 'Income',
        icons: <RiMoneyDollarBoxLine size={20} />,
        righticon: <AiOutlineRight size={15}/>,
    },
    {
        pathname: '/promote',
        title: 'Promote',
        icons: <LiaPercentageSolid size={20}/>,
        righticon: <AiOutlineRight size={15}/>,
    },
    {
        pathname: '/help',
        title: 'Help',
        icons: <MdOutlineLiveHelp size={20}/>,
        righticon: <AiOutlineRight size={15}/>,
    },
]
const tabledata = [
    {
        name: 'Headset',
        img: headset,
        discription: 'Headsets enable hands-free operation',
        stock: '10',
        prize: '$8000',
        Totalsales: '50',
    },
    {
        name: 'camrea',
        img: camera,
        discription: 'They digitize documents for archiving and sharing',
        stock: '20',
        prize: '$12000',
        Totalsales: '30',
    }
]
const Productdata = [
    {
        name: 'Headset',
        img: headset,
        discription: 'Headsets enable hands-free operation',
        stock: '10',
        prize: '$8000',
        Totalsales: '50',
    },
    {
        name: 'camrea',
        img: camera,
        discription: 'They digitize documents for archiving and sharing',
        stock: '20',
        prize: '$12000',
        Totalsales: '30',
    },
    {
        name: 'camrea',
        img: camera,
        discription: 'They digitize documents for archiving and sharing',
        stock: '20',
        prize: '$12000',
        Totalsales: '30',
    },
    {
        name: 'camrea',
        img: camera,
        discription: 'They digitize documents for archiving and sharing',
        stock: '20',
        prize: '$12000',
        Totalsales: '30',
    },
    {
        name: 'camrea',
        img: camera,
        discription: 'They digitize documents for archiving and sharing',
        stock: '20',
        prize: '$12000',
        Totalsales: '30',
    },
    {
        name: 'camrea',
        img: camera,
        discription: 'They digitize documents for archiving and sharing',
        stock: '20',
        prize: '$12000',
        Totalsales: '30',
    }
]
const customerdata = [
    {
        name: 'Surya Prakash',
        productname: 'camera',
        quantity: '2',
        prize: '$12000',  
    },
    {
        name: 'Monish',
        productname: 'Headset',
        quantity: '1',
        prize: '$2000',  
    },
    {
        name: 'Hari',
        productname: 'camera',
        quantity: '4',
        prize: '$15000',  
    },
    {
        name: 'Vignesh',
        productname: 'Headset',
        quantity: '3',
        prize: '$6000',  
    },
    {
        name: 'Jothi',
        productname: 'Airpods',
        quantity: '1',
        prize: '$1500',  
    }
]
export default data;
export {Productdata};
export {customerdata};
export {tabledata};
