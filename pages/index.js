import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Preparing..</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Preparing.." />
        <p className="description">
         这是一个为抑郁症患者留有纪念的地方，目前还在准备中..
        </p>
        <p className="description">
         It's a place to remember for those with depression, and it's still being prepared...
        </p>
      </main>

      <Footer />
    </div>
  )
}
