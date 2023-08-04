import { useState } from 'react';
import { ClientHeader } from '../../../components/Header';
import { ClientMessage } from '../../../components/Message';
import { ClientPlanning } from '../../../components/Planning';
import '../../../style/index.css';

function Cours() {
    document.title ="Contact - Name"

    const [fileName, setFileName] = useState("")
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFileName(file.name);
      console.log(file.name);
    };


    return ( 
        <>
        <ClientHeader/>
        <main className='w-full h-screen flex'>
          <div className='w-full medium:w-10/12 small:w-9/12 h-full flex justify-between relative left-32 mr-[400px] medium:mr-40 small:left-20 small:mr-0'>
            <div className='w-11/12 medium:w-full small:w-full h-full'>
              {/* Message de bienvenue */}
              <ClientMessage />

              {/* Contenue principale */}
              <section className="w-full flex flex-col justify-center items-center">
                <section className="bg-[#f5edeb] w-11/12 small:w-full h-[35em] rounded-xl boxshadow mb-10 flex flex-col justify-center items-center">
                <h2 className="text-center underline decoration-solid text-2xl mt-4 mb-9">Contact</h2>
                  <form className='border-2 border-[#4E2F2E] w-4/5 medium:w-[90%] h-3/4 rounded-md mb-5'>
                    <input className='w-full border-b-2 bg-transparent border-[#4E2F2E] h-14 small:h-16 px-5 rounded-t-lg ' type="email" name="email" id="email" placeholder='Email' />
                    <input className='w-full border-b-2 bg-transparent border-[#4E2F2E] h-14 small:h-16 px-5' type="text" name="objet" id="objet" placeholder='Objet' />
                    <textarea className='w-full border-b-2 bg-transparent border-[#4E2F2E] h-48 small:h-80 px-5 py-3' type="text" name="message" id="message" placeholder='Message' />
                    <div className='h-12 relative small:h-16'>
                      <input className='absolute w-full h-full opacity-0 cursor-pointer' type="file" name="file" id="file" onChange={handleFileChange} /> 
                      {fileName == "" ? (
                        <> <p className='px-5 pt-3 small:pt-5 text-[#9CA3AF]'>Fichier</p> </>
                      ) : (
                        <> <p className='px-5 pt-3 small:pt-5 whitespace-nowrap text-ellipsis overflow-hidden'>{fileName}</p> </>
                      )}
                    </div>
                    <input className='w-full border-t-2 border-[#4E2F2E] h-[3.1em] medium:h-[3.13em] small:h-20 rounded-b-sm text-xl cursor-pointer' type="button" value="Envoyer" id='button-contact' />
                  </form>
                </section>
              </section>

            </div>
          </div>
          <ClientPlanning />
        </main>
        </>
     );
}

export default Cours;