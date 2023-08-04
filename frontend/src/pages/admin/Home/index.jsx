import { AdminHeader } from '../../../components/Header';
import { AdminMessage } from '../../../components/Message';
import { AdminPlanning } from '../../../components/Planning';
import '../../../style/index.css';

function Home() {
  document.title ="Accueil"
    return ( 
      <>
        <AdminHeader />
        <main className='w-full h-screen flex'>
          <div className='w-full medium:w-10/12 small:w-9/12 h-full flex justify-between relative left-32 mr-[400px] medium:mr-40 small:left-20 small:mr-0'>
            <div className='w-11/12 medium:w-full small:w-full h-full '>
            {/* Message de bienvenue */}
              <AdminMessage />

            {/* Contenue principale */}
              <section className='flex medium:flex-col small:flex-col justify-between medium:items-center mb-10'>
              {/* Bloc de gauche */}
                <section className='w-[48%] medium:w-3/4 small:w-full large:h-[38em]'>
                  {/* Cours */}
                  <section className='bg-pastel-blue w-full large:h-full h-96 rounded-xl boxshadow'>
                    <h2 className='text-center underline decoration-solid text-2xl p-4'>Documents</h2>
                    <div className='flex justify-between mx-5 mb-3'>
                      <p className='w-8/12 whitespace-nowrap text-ellipsis overflow-hidden'>Lorem-ipsum-dolor-sit-amet-consectetur</p>
                      <p>25/06/23</p>
                    </div>
                    <div className='flex justify-between mx-5 mb-3'>
                      <p className='w-8/12 whitespace-nowrap text-ellipsis overflow-hidden'>Lorem-ipsum-dolor-sit-amet-consectetur</p>
                      <p>25/06/23</p>
                    </div>
                  </section>
                </section>

                <section className='w-[48%] medium:w-3/4 small:w-full'>
                  {/* Promotions */}
                  <section className='bg-pastel-blue w-full large:h-full h-96 mt-12 large:mt-0 mb-12 rounded-xl boxshadow'>
                    <h2 className='text-center underline decoration-solid text-2xl p-4'>Promotions</h2>
                    <div className='flex flex-col mx-5'>
                      <p className='mb-3'>Lorem ipsum</p>
                      <p className='mb-3'>Lorem ipsum</p>
                      <p className='mb-3'>Lorem ipsum</p>
                    </div>
                  </section>
                </section>
              </section>

            </div>
          </div>
          <AdminPlanning />
        </main>
      </>
     );
}

export default Home;