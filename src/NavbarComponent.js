
import { Disclosure, Menu, Transition } from '@headlessui/react'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Emotions', href: '#', current: false },
  { name: 'Manifesto', href: '#', current: false },
  { name: 'Self-awareness test', href: '#', current: false },
  { name: 'Work with us', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbaar() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <div className='flex flex-row w-[100%] justify-center items-center sticky top-[-15px] bg-white '>
            <div className='w-[30%] '>
                <div className="flex-shrink-0 flex flex-row justify-center">
                <img src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg" alt="homeowel" className="img-fluid w-[20%]"></img>
                </div>
            </div>
            <Disclosure as="nav"  className='w-[50%]'>
            {({ open }) => (
                <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-black hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>
                
                    </div>
                </div>

                </>
            )}
            </Disclosure>
            <div className=" w-[20%]">
                <a className=' text-white bg-black rounded-full px-6 py-3 text-sm font-medium'> Download app</a>        
            </div>
        </div>                
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 h-[300px]">
            
            <div className='flex flex-row w-[100%]'>
                
                <div className='flex flex-col justify-center items-start w-[50%] gap-4'>
                    <p className='text-sm'>Ahead App</p>
                    <h1 className='text-5xl break-normal'> Master Your life By Mastering Your Emotions</h1>
                    <div className="flex flex-row justify-between items-start">
                    <img src="https://ahead-app.com/images/app-store.svg" width="150px"/>
                        <a className=' text-white bg-black rounded-full px-6 py-3 text-sm font-medium'> Download app</a>       
                     </div>            
                </div>
                <div className='w-[50%]'>
                <img src="https://self-awareness.ahead-app.com/static/media/bannerhome.ef4ddb66.svg" alt="bannerhomeImg" class="homeBanner" width="560"/>
                </div>



            </div>

          </div>
        </main>
      </div>
    </>
  )
}