import { ClientHeader } from '../../../components/Header';
import { ClientMessage } from '../../../components/Message';
import { ClientPlanning } from '../../../components/Planning';
import '../../../style/index.css';

function Home() {
  document.title ="Accueil - Name"
    return ( 
      <>
        <ClientHeader/>
        <main className='w-full h-screen flex'>
          <div className='w-full medium:w-10/12 small:w-9/12 h-full flex justify-between relative left-32 mr-[400px] medium:mr-40 small:left-20 small:mr-0'>
            <div className='w-11/12 medium:w-full small:w-full h-full '>
            {/* Message de bienvenue */}
              <ClientMessage />

            {/* Contenue principale */}
              <section className='flex medium:flex-col small:flex-col justify-between medium:items-center mb-10'>
              {/* Bloc de gauche */}
                <section className='w-[48%] medium:w-3/4 small:w-full'>
                  {/* Cours */}
                  <section className=' bg-pastel-blue w-full h-96 rounded-xl boxshadow overflow-hidden overflow-y-auto'>
                    <h2 className='text-center underline decoration-solid text-2xl p-4'>Cours ajoutés</h2>
                    <div className='flex justify-between mx-5'>
                      <p className='w-8/12 whitespace-nowrap text-ellipsis overflow-hidden'>Lorem-ipsum-dolor-sit-amet-consectetur</p>
                      <p>25/06/23</p>
                    </div>
                  </section>
                  {/* Annonces */}
                  <section className='bg-yellow w-full h-72 mt-12 rounded-xl boxshadow overflow-hidden overflow-y-auto'>
                    <h2 className='text-center underline decoration-solid text-2xl p-4'>Annonces</h2>
                    <div className='mt-4 mx-3'>
                      <p className='border-b-2 border-yellow'>26/07/2023</p>
                      <p className='m-2 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies eleifend turpis, non pellentesque quam. Maecenas elementum risus sed dignissim sollicitudin. Morbi quis justo id velit sodales pellentesque.</p>
                    </div>
                    <div className='mt-4 mx-3'>
                      <p className='border-b-2 border-yellow'>25/07/2023</p>
                      <p className='m-2 text-base'>Vestibulum id est sed elit volutpat ultricies sed non erat. Curabitur egestas volutpat magna, id aliquet augue dictum eget. Vestibulum non enim non turpis ultrices mollis.</p>
                    </div>
                  </section>
                </section>

                {/* Bloc de droite */}
                <section className='w-[48%] medium:w-3/4 small:w-full flex flex-col medium:flex-col-reverse small:flex-col-reverse'>
                  {/* Matière */}
                  <section className='bg-red w-full h-72 rounded-xl boxshadow overflow-hidden overflow-y-auto'>
                    <h2 className='text-center underline decoration-solid text-2xl p-4'>Matières</h2>
                  </section>
                  {/* Notes */}
                  <section className=' bg-purple w-full h-96 mt-12 mb-12 rounded-xl boxshadow overflow-hidden overflow-y-auto'>
                    <h2 className='text-center underline decoration-solid text-2xl p-4'>Notes</h2>
                    <div className='flex justify-between mx-5'>
                      <p className='w-3/4 whitespace-nowrap text-ellipsis overflow-hidden'>Matières</p>
                      <p>25/06/23</p>
                    </div>
                  </section>
                </section>
              </section>

            </div>
          </div>
          <ClientPlanning />
        </main>
      </>
     );
}

export default Home;