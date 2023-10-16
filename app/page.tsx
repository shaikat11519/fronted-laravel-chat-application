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
          <div className='py-3 px-3 md:px-8 lg:px-20 xl:px-36 mt-3 flex flex-wrap justify-center'>
            <ChatApp/>
          </div>
        </main>
        
      </main>
      <Footer/>
    </main>
  );
}
