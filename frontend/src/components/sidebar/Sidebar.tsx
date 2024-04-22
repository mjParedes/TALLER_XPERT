'use client'

import { Workshop, Dashboard, Orders, Statistics, Suppliers, Technicians } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { textLogo } from '@/config/fonts'

const sideItems = [
  {
    path: '/dashboard',
    icon: <Dashboard />,
    title: 'Dashboard'
  },
  {
    path: '/dashboard/technicians',
    icon: <Technicians />,
    title: 'Técnicos'
  },
  {
    path: '/dashboard/orders',
    icon: <Orders />,
    title: 'Ordenes'
  },
  {
    path: '/dashboard/suppliers',
    icon: <Suppliers />,
    title: 'Proveedores'
  },
  {
    path: '/dashboard/statistics',
    icon: <Statistics />,
    title: 'Estadísticas'
  },
  {
    path: '/dashboard/workshop',
    icon: <Workshop />,
    title: 'Taller'
  }
]

export const Sidebar = () => {
  const logoSidebar = '/logoSidebar.png'
  const tallerName = 'TechRepair'

  return (
    <nav className='w-[248px] h-screen min-h-[1024px] flex flex-col justify-around bg-primary shadow-xl px-6 py-[42px] text-white'>
      <div className='flex flex-col items-center gap-3'>
        <Image
          src={logoSidebar}
          alt='logo sidebar'
          width={80}
          height={80}
          className='rounded-full'
        />
        <h1 className='text-xl font-black text-center capitalize'>{tallerName}</h1>
      </div>

      {/* menu */}
      <ul className='flex flex-col gap-6 text-white uppercase'>
        {sideItems.map((item, index) => (
          <li key={index} className='py-2 rounded-lg hover:bg-white hover:text-primary'>
            <Link
              href={item.path}
              className='flex items-center py-[4.5px] gap-6 font-bold text-base pr-2'
            >
              <span className='ml-2 text-current group-hover:text-primary'>{item.icon}</span>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className='flex flex-col w-full items-center gap-[27px]'>
        <p className='text-base font-bold text-center text-white uppercase'>soporte</p>
        <Link href='/' className={`${textLogo.className} text-2xl`}>
          TallerXpert
        </Link>
      </div>
    </nav>
  )
}
