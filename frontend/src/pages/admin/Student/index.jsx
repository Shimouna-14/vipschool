import { AdminHeader } from '../../../components/Header';
import { AdminMessage } from '../../../components/Message';
import { AdminPlanning } from '../../../components/Planning';
import '../../../style/index.css';

function Etudiant() {
  document.title ="Liste des étudiants"

    return ( 
        <>
        <AdminHeader />
         <main className='w-full h-screen flex'>
          <div className='w-full medium:w-10/12 small:w-9/12 h-full flex justify-between relative left-32 mr-[400px] medium:mr-40 small:left-20 small:mr-0'>
            <div className='w-11/12 medium:w-full small:w-full h-full'>
              {/* Message de bienvenue */}
              <AdminMessage />

              {/* Contenue principale */}
              <section className="w-full flex justify-center items-center">
              <section className="bg-pastel-blue w-11/12 small:w-full h-[70em] rounded-xl boxshadow mb-10 overflow-hidden overflow-y-auto">
                <h2 className="text-center underline decoration-solid text-2xl mt-4 mb-9">Listes des élèves</h2>
                <section className="flex justify-center mb-5">
                  <div className="w-11/12 flex flex-col items-center large:flex-row large:justify-between border-b border-black pb-4">
                    <div className="border-2 w-24 h-24 rounded-full border-black"></div>
                    <div className="flex large:w-3/5 w-full justify-between items-center">
                      <p>Nom Prénom</p>
                      <p>Promotions</p>
                    </div>
                  </div>
                </section>
                <section className="flex justify-center my-2">
                  <div className="w-11/12 flex flex-col items-center large:flex-row large:justify-between border-b border-black pb-4">
                    <div className="border-2 w-24 h-24 rounded-full border-black"></div>
                    <div className="flex large:w-3/5 w-full justify-between items-center">
                      <p>Nom Prénom</p>
                      <p>Promotions</p>
                    </div>
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

export default Etudiant;