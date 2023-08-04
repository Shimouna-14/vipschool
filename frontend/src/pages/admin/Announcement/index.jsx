import { AdminHeader } from '../../../components/Header';
import { AdminMessage } from '../../../components/Message';
import { AdminPlanning } from '../../../components/Planning';
import '../../../style/index.css';

const Announcement = () => {
  document.title = "Annonce"
    return (
        <>
        <AdminHeader />
        <main className='w-full h-screen flex'>
          <div className='w-full medium:w-10/12 small:w-9/12 h-full flex justify-between relative left-32 mr-96 medium:mr-40 small:left-20 small:mr-0'>
            <div className='w-11/12 medium:w-full small:w-full h-full'>
            {/* Message de bienvenue */}
              <AdminMessage />

            {/* Contenue principale */}
            <section className="w-full flex flex-col justify-center items-center">
                <section className="bg-beige w-11/12 small:w-full h-[35em] small:h-[49.8em] rounded-xl boxshadow mb-10 flex flex-col justify-center items-center">
                <h2 className="text-center underline decoration-solid text-2xl mt-4 mb-9">Publier une annonce</h2>
                  <form className='border-2 border-[#4E2F2E] w-4/5 medium:w-[90%] h-3/4 rounded-md mb-5'>
                    <input className='w-full border-b-2 bg-transparent border-[#4E2F2E] h-14 small:h-16 px-5 rounded-t-lg ' type="email" name="email" id="email" placeholder='Promotion(s)' />
                    <input className='w-full border-b-2 bg-transparent border-[#4E2F2E] h-14 small:h-16 px-5' type="text" name="objet" id="objet" placeholder='Objet' />
                    <textarea className='w-full bg-transparent h-60 small:h-96 px-5 py-3' type="text" name="message" id="message" placeholder='Message' />
                    <input className='w-full border-t-2 border-[#4E2F2E] h-[3.1em] medium:h-[3.13em] small:h-20 rounded-b-sm text-xl cursor-pointer' type="button" value="Envoyer" id='button-announcement' />
                  </form>

                </section>
              </section>

            </div>
          </div>
          <AdminPlanning />
        </main>
        </>
     );
}

export default Announcement;