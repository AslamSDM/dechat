import { Card,CardBody } from '@nextui-org/card'
import Image from 'next/image'

export default function Company() {
  return (
    <>
    <div id="imgShow" className='lg:mb-6'>
        <Card>
            <CardBody className='items-center justify-center'>
      <Image src="/figures/company.png" alt="chatdev-company" width={600} height={600} id="chatdev-company" className="..." />
      <Image src="/figures/right.png" id="right" alt='right' width={300} height={300} className="hidden relative w-10 h-10 -top-90 left-105 blink" />
      <Image src="/figures/left.png" id="left" alt='left' width={300} height={300} className="hidden w-10 h-10 relative -top-116 left-31 blink" />
            </CardBody>
        </Card>
    </div>
    </>
  )
}
