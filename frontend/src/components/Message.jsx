import Teachers from '../assets/teacher.png'
import Students from '../assets/students.png'

export function AdminMessage() {
  return (
    <>
        <section className='bg-dark-blue mt-14 mb-24 large:h-44 rounded-3xl large:flex large:justify-between push-message'>
            <h1 className='pl-6 pt-4 large:pt-12 small:px-4 medium:px-5 mb-5 text-xl small:text-lg'>Bonjour Mme Lorem, <br />
                Aujourd'hui nous sommes le Jour-Mois-Année.</h1>
            {/* Image */}
            <div className='hidden medium:flex small:flex items-center justify-center'>
                <img className='h-full w-3/4 object-contain' src={Teachers} alt="Seven teachers" />
            </div>
        </section>
    </>
  )
};

export function ClientMessage() {
  return (
    <>
        <section className='bg-dark-blue
        
        mt-14 mb-24 large:h-44 rounded-3xl large:flex large:justify-between push-message'>
            <h1 className='pl-6 pt-4 large:pt-12 small:px-4 medium:px-5 mb-5 text-xl small:text-lg'>Bonjour Name, <br />
                Aujourd'hui nous sommes le Jour-Mois-Année.</h1>
            {/* Photo */}
            <div className='medium:hidden small:hidden m-4 w-36'>
                <div className='w-full h-full border rounded-full'></div>
            </div>
            {/* Image */}
            <div className='hidden medium:flex small:flex items-center justify-center'>
                <img className='h-full w-3/4 object-contain' src={Students} alt="Five students studying" />
            </div>
        </section>
    </>
  )
};
