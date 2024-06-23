import { TypeAnimation } from 'react-type-animation';
const HeroSection: React.FC = () => {
    return (
      <div className="flex w-full h-[90vh] rounded-md  bg-[#eafafe]">
         <div className="  text-blue-900 px-10 
          w-[40%] flex flex-col gap-4 ">
            <h1 className=" mt-40 font-serif  font-semibold  text-[60px]" >
            <TypeAnimation
                    sequence={[
                        
                    
                        'Welcome to TaskBliss',
                        2000,
                        ' ',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                    
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                    /></h1>
            <p className=" font-mono   text-[24px] text-left">  Your ultimate tool for effortless task management and goal achievement. Streamline your day, conquer your to-do lists, and reach new heights of productivity with ease. Whether it's organizing your tasks or realizing your dreams, TaskBliss empowers you to make every moment count</p>
        </div>
        <div className="w-[60%] h-full flex items-center justify-center">
        <img src="https://www.cutehr.io/wp-content/uploads/2020/03/schedule-400x400.png" alt="" className="animate-mask-left transition-all duration-1000 w-[80%] h-[80%] object-contain "/>
        </div>
       
      </div>
    );
  };
  
  export default HeroSection;