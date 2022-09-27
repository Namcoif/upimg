import logo from './logo.svg';
import './App.css';
import Select from './_components/Select';
import SentData from './_components/SentData';
import Map from './_components/Map';
import UploadIMG from './_components/UploadIMG';
import Basic from './_components/Formik';

function App() {
  return (
    <div className="App">
      {/* <Select/> */}
      {/* <SentData/>
      <Map/> */}

      {/* <User/> */}
      <UploadIMG/>
      {/* <Basic/> */}
    </div>
  );

  // return (

  //   <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden  md:max-w-2xl ">
  //     <div class="md-flex">
  //       <div class="md:shrink-0">
          
  //       </div>

       
  //       <div class="p-8 ">
  //         <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
  //         <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
  //         <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default App;
