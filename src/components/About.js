import AboutImg from  '../asserts/About.png';


export default function About () {

     const config ={
        line1:'Hi, I am a Full-stack developer.I built beautiful websites with html,css and javascript and React js.',
        line2:'I am a passionate and dedicated Full Stack Developer with a strong foundation in both frontend and backend development. With expertise in crafting seamless and user-friendly interfaces, I specialize in building dynamic, responsive, and scalable web applications. My skill set includes modern technologies like HTML, CSS, JavaScript, React.js, and Node.js, along with proficiency in backend frameworks, database management, and API integration.'
        
     }



    return <section className=' flex-col md:flex-row flex bg-teritary px-5' id='about'>
        <div className=' md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className=' md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl  border-b-4 border-[#b8b3bd] mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>{config.line1} </p>
        <p className='pb-5'>{config.line2}</p>
        </div>
        </div>
    </section>
}