import type { NextPage } from 'next'
import Entries from '../components/Entries'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div>
      <Link href={`/createEntry`}><a >AddEntry</a></Link>

      <div>Its a budget app</div>
      <div>
        <Entries />
      </div>
    </div>
  )
}

export default Home
