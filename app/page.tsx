import NavBar from './components/NavBar';
import Header from './components/Header';
import ChatApp from './components/ChatApp';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen relative'>
       <NavBar/>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <main className='h-screen'>
          <Header/>
          {/* HEADER */} {/* CARDS */}
          <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
            {/* CARD */}
            <ChatApp/>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
        
      </main>
      <Footer/>
    </main>
  );
}
