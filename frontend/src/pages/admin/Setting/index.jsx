import { AdminHeader } from '../../../components/Header';
import '../../../style/index.css';

function Setting() {
    document.title = "Paramètres - Name"
    return (
        <>
        <AdminHeader />
        <main className='w-full h-screen flex '>
          <div className='w-10/12 medium:w-10/12 small:w-9/12 h-full flex justify-between relative left-36 medium:left-32 medium:mr-40 small:left-20 small:mr-0'>
            <div className='w-full medium:w-full small:w-full h-full'>

              {/* Contenue principale */}
              <section className="w-full flex flex-col justify-center items-center">
                <section className="bg-[#f3f3f3] w-11/12 small:w-full rounded-xl boxshadow mt-12 mb-10 flex flex-col justify-center items-center ">

                <form className='w-full medium:w-[90%] flex flex-col items-center justify-center mb-20'>
                <h2 className="text-center underline decoration-solid text-3xl my-10">Informations générales</h2>
                    <section className='w-full px-3'>
                        <div className='flex medium:flex-col small:flex-col justify-around w-full mb-5'>
                            <div className='w-full large:w-2/6'>
                                <label className='block' htmlFor="firstName">Nom</label>
                                <input className='border-2 border-black rounded bg-sable w-full px-3 py-1' type="text" />
                            </div>
                            <div className='w-full large:w-2/6'>
                                <label className='block' htmlFor="lasttName">Prénom</label>
                                <input className='border-2 border-black rounded bg-sable w-full px-3 py-1 ' type="text" />
                            </div>
                        </div>

                        <div className='flex medium:flex-col small:flex-col justify-around w-full mb-14'>
                            <div className='w-full large:w-1/6'>
                                <label className='block' htmlFor="phone">Téléphone</label>
                                <input className='border-2 border-black rounded bg-sable w-full px-3 py-1' type="text" />
                            </div>
                            <div className='w-full large:w-3/6'>
                                <label className='block' htmlFor="email">Email</label>
                                <input className='border-2 border-black rounded bg-sable w-full px-3 py-1' type="text" />
                            </div>
                        </div>
                    </section>
                    <input className='rounded-[0.8rem] border-2 px-9 py-2 cursor-pointer button-params' type='button' value='Sauvegarder' id='btn-info' />
                  </form>

                  <form className='w-4/5 small:w-full medium:w-[90%] flex flex-col items-center justify-center mb-10 px-3'>
                    <h2 className="text-center underline decoration-solid text-3xl my-10 ">Mot de passe</h2>
                        <div className='flex medium:flex-col small:flex-col items-center justify-around w-full mb-8'>
                            <div className='w-full large:w-2/5'>
                                <label className='block' htmlFor="oldPassword">Ancien de mot de passe</label>
                                <input className='border-2 border-black rounded bg-sable w-full px-3 py-1' type="text" />
                            </div>
                            <div className='w-full large:w-2/5'>
                                <label className='block' htmlFor="newPassword">Nouveau de mot de passe</label>
                                <input className='border-2 border-black rounded bg-sable w-full px-3 py-1' type="text" />
                            </div>
                        </div>
                    <input className='rounded-[0.8rem] border-2 px-9 py-2 cursor-pointer button-params' type='button' value='Sauvegarder' id='btn-password' />
                  </form>

                </section>
              </section>

            </div>
          </div>
        </main>
        </> 
    );
}

export default Setting;