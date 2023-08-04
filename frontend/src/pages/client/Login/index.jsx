import '../../../style/index.css';
import Logo from '../../../assets/vipschool-logo.png'
import Building from '../../../assets/building.png'

function Login() {
    document.title = "VIP School - Étudiant"
    return (
        <>
            <main className='bg-sapphire-opacity'>
                <div className='w-screen h-screen flex flex-row'>
                    <section className='h-full w-1/2 hidden large:block'>
                        <img className='h-full ' src={Building} alt="Les bureaux de l'entreprise" />
                    </section>
                    <section className='h-full w-full large:w-1/2 flex items-center justify-center'>
                        <div className='w-[30em] small:w-[25em] h-[35em] bg-sable rounded-2xl boxshadow'>
                            <form className='h-full flex flex-col items-center justify-center'>
                                <img className='w-14' src={Logo} alt="Logo V de VIP School" />
                                <h1 className='text-2xl text-center my-4'>Bienvenue sur l&#39;espace étudiant <br />VIP School</h1>
                                <h2 className='text-xl my-4'>Se connecter</h2>
                                <div className='mb-5'>
                                    <label className='block' htmlFor="newPassword">Email</label>
                                    <input className='border-2 border-black rounded bg-sable w-full px-3 py-1 boxshadow' type="email" />
                                </div>
                                <div className='mb-10'>
                                    <label className='block' htmlFor="newPassword">Mot de passe</label>
                                    <input className='border-2 border-black rounded bg-sable w-full px-3 py-1 boxshadow' type="password" />
                                </div>
                                <input className='rounded-[0.8rem] border-2 px-9 py-2 cursor-pointer button-params boxshadow' type='button' value='Sauvegarder' id='btn-password' />
                            </form>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
}

export default Login;