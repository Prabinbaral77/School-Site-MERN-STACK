import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Message from '../components/Message'
import Navigations from '../components/Navigations'
import NoticeBoard from '../components/NoticeBoard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shree Ratan Pandey Secondary School.</title>
      </Head>
      <Navigations />
      <Banner />
      <Message/>
      <NoticeBoard />
      <Footer />
    </div>
  )
}
