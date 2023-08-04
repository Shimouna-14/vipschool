import { DateCalendar , LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const datePickerStyle = { width: '100%' };

export function AdminPlanning() {
  
  return (
    <aside className='bg-dark-blue w-[19rem] h-screen rounded-l-3xl fixed right-0 z-[2] flex flex-col justify-around items-center small:hidden medium:hidden overflow-hidden overflow-y-auto'>
        <section className="bg-white w-72 rounded-xl h-80 shadow-aside mt-10">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar style={datePickerStyle} />          
          </LocalizationProvider>
        </section>

        <section className="bg-white w-11/12 rounded-xl h-96 shadow-aside overflow-hidden overflow-y-auto my-5">
          <div className='text-[17px] mt-6 mx-4 '>
            <h3 className='text-center text-xl'>Annonce</h3>
            <div className='mt-4'>
              <p className='border-b-2 border-yellow'>26/07/2023</p>
              <p className='m-2 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies eleifend turpis, non pellentesque quam. Maecenas elementum risus sed dignissim sollicitudin. Morbi quis justo id velit sodales pellentesque.</p>
            </div>
          </div>
        </section>

    </aside>
  )
};

export function ClientPlanning() {

    return (
      <aside className='bg-dark-blue w-[19rem] h-screen rounded-l-3xl fixed right-0 z-[2] flex flex-col justify-around items-center small:hidden medium:hidden overflow-hidden overflow-y-auto'>
          <section className="bg-white w-72 rounded-xl h-80 shadow-aside mt-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar style={datePickerStyle} />          
            </LocalizationProvider>
          </section>
  
          <section className="bg-white w-11/12 rounded-xl h-96 shadow-aside overflow-hidden overflow-y-auto my-5">
            <div className='text-[17px] mt-6 px-4'>
              <p>Date Mois Année</p>
              <div className='flex items-center mt-4'>
                <p className='mr-3'>Heure</p>
                <div className='border-l-[3px] border-red'>
                  <p className='ml-2 mb-2'>Cours</p>
                  <p className='ml-2'>Professeur</p>
                </div>
              </div>
              <div className='flex items-center mt-4'>
                <p className='mr-3'>Heure</p>
                <div className='border-l-[3px] border-red'>
                  <p className='ml-2 mb-2'>Cours</p>
                  <p className='ml-2'>Professeur</p>
                </div>
              </div>
            </div>
  
            <div className='text-[17px] mt-6 px-4'>
              <p>Date Mois Année</p>
              <div className='flex items-center mt-4'>
                <p className='mr-3'>Heure</p>
                <div className='border-l-[3px] border-red'>
                  <p className='ml-2 mb-2'>Cours</p>
                  <p className='ml-2'>Professeur</p>
                </div>
              </div>
            </div>
  
            <div className='text-[17px] mt-6 px-4'>
              <p>Date Mois Année</p>
              <div className='flex items-center mt-4'>
                <p className='mr-3'>Heure</p>
                <div className='border-l-[3px] border-red'>
                  <p className='ml-2 mb-2'>Cours</p>
                  <p className='ml-2'>Professeur</p>
                </div>
              </div>
            </div>
  
            <div className='text-[17px] mt-6 px-4 mb-6'>
              <p>Date Mois Année</p>
              <div className='flex items-center mt-4'>
                <p className='mr-3'>Heure</p>
                <div className='border-l-[3px] border-red'>
                  <p className='ml-2 mb-2'>Cours</p>
                  <p className='ml-2'>Professeur</p>
                </div>
              </div>
            </div>
          </section>
  
      </aside>
    )
  };
