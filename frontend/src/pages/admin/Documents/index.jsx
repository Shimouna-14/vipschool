import { useState } from 'react';
import { AdminHeader } from '../../../components/Header';
import { AdminMessage } from '../../../components/Message';
import { AdminPlanning } from '../../../components/Planning';
import '../../../style/index.css';

function Documents() {
  document.title ="Documents"

  const [fileName, setFileName] = useState("")
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFileName(file.name);
    };
    return ( 
        <>
        <AdminHeader />
        <main className='w-full h-screen flex'>
          <div className='w-full medium:w-10/12 small:w-9/12 h-full flex justify-between relative left-32 mr-[400px] medium:mr-40 small:left-20 small:mr-0'>
            <div className='w-11/12 medium:w-full small:w-full h-full'>
              {/* Message de bienvenue */}
              <AdminMessage />

              {/* Contenue principale */}
              <section className="w-full flex flex-col justify-center items-center">
                <form className='w-11/12 small:w-full mb-12 flex small:flex-col justify-around'>
                  <div className='border-2 border-sapphire-opacity w-4/6 medium:w-7/12 small:w-full h-12 relative small:h-16'>
                    <input className='absolute w-full h-full opacity-0 cursor-pointer' type="file" name="file" id="file" onChange={handleFileChange} /> 
                      {fileName == "" ? (
                        <> <p className='px-5 pt-2 small:pt-5 text-[#9CA3AF]'>Fichier</p> </>
                      ) : (
                        <> <p className='px-5 pt-2 small:pt-5 whitespace-nowrap text-ellipsis overflow-hidden'>{fileName}</p> </>
                      )}
                    </div>
                    <input className='rounded-[0.8rem] border-2 px-9 py-2 cursor-pointer button-params small:mt-5' type='button' value='Publier' id='btn-document' />
                </form>
                <section className="bg-pastel-blue w-11/12 small:w-full h-[39em] rounded-xl boxshadow mb-10 overflow-hidden overflow-y-auto">
                  <h2 className="text-center underline decoration-solid text-2xl mt-4 mb-9">Documents</h2>
                  <section className="flex justify-center mb-2">
                    <div className="w-11/12 flex flex-col justify-between border-b border-black pb-4">
                      <p className="mb-2 whitespace-nowrap text-ellipsis overflow-hidden"> Lorem-ipsum-dolor-sit-amet-consectetur-vhfksdwbfguoi</p>
                      <div className="flex justify-between">
                        <p>26/02</p>
                        <p>Voir</p>
                        <p>Télécharger</p>
                        <p>Supprimer</p>
                      </div>
                    </div>
                  </section>
                  <section className="flex justify-center mb-2">
                    <div className="w-11/12 flex flex-col justify-between border-b border-black pb-4">
                      <p className="mb-2 whitespace-nowrap text-ellipsis overflow-hidden"> Lorem-ipsum-dolor-sit-amet-consectetur-vhfksdwbfguoi</p>
                      <div className="flex justify-between">
                        <p>26/02</p>
                        <p>Voir</p>
                        <p>Télécharger</p>
                        <p>Supprimer</p>
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

export default Documents;