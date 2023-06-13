import { type NextPage } from "next";
import HeadTag from "../components/HeadTag"


const GameSetup: NextPage = () => {

  return (
    <>
      <HeadTag />
      <main className="flex justify-center h-screen">
        <div className="h-full w-full">

          <div className="text-4xl text-center font-extrabold py-8">
            Game Setup
          </div>

          <div className="dropdown text-center p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
            Choosing...
          </div>          

        </div>
      </main>
    </>
  );
};

export default GameSetup;
