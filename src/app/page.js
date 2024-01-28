import Image from 'next/image'
import Vercel from '../../public/next.svg'

export default function Home() {
  return (
    <main>
      <div className='mt-10'>
        <p>Home Page</p>
        <Image src={Vercel} alt='Vercel Image'/>
      </div>
    </main>
  )
}
