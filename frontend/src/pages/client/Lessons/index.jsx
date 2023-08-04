import { ClientHeader } from '../../../components/Header';
import { ClientMessage } from '../../../components/Message';
import { ClientPlanning } from '../../../components/Planning';
import "../../../style/index.css";

function Lessons() {
  document.title = "Cours - Name";
  return (
    <>
      <ClientHeader/>
      <main className="w-full h-screen flex">
        <div className="w-full medium:w-10/12 small:w-9/12 h-full flex justify-between relative left-32 mr-[400px] medium:mr-40 small:left-20 small:mr-0">
          <div className="w-11/12 medium:w-full small:w-full h-full ">
            {/* Message de bienvenue */}
            <ClientMessage />

            {/* Contenue principale */}
            <section className="w-full flex flex-col justify-center items-center">
              <section className="bg-pastel-blue w-11/12 small:w-full h-[35em] rounded-xl boxshadow mb-10 overflow-hidden overflow-y-auto">
                <h2 className="text-center underline decoration-solid text-2xl mt-4 mb-9">Cours</h2>
                <section className="flex justify-center mb-2">
                  <div className="w-11/12 flex flex-col justify-between border-b border-black pb-4">
                    <p className="whitespace-nowrap text-ellipsis overflow-hidden mb-2"> Lorem-ipsum-dolor-sit-amet-consectetur-vhfksdwbfguoi</p>
                    <div className="flex justify-between">
                      <p>26/02</p>
                      <p>Voir</p>
                      <p>Télécharger</p>
                    </div>
                  </div>
                </section>
              </section>
              <section className="bg-pastel-blue w-11/12 small:w-full h-[20em] rounded-xl boxshadow mb-10 overflow-hidden overflow-y-auto">
                <h2 className="text-center underline decoration-solid text-2xl p-4">Notes</h2>
                <section className="flex justify-center mb-2">
                  <div className="w-11/12 flex justify-between border-b border-black p-4">
                    <p className="whitespace-nowrap text-ellipsis overflow-hidden w-4/12">Matière</p>
                    <p>Date</p>
                    <p>Note</p>
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

export default Lessons;
