import Image1 from '../assets/pg1.png';
import Image2 from '../assets/pg3.png';
import Image3 from '../assets/pg2.png';






const Projects = () => {
    const projects = [
      { title: 'Task Trek', stack:"Gemini AI API, Next.js, Firebase, Clerk", desp:"Build a collaborative workspace project management website that handles and coordinates multiple users in real time.Integrated Gemini AI to automate project planning and content generation as well as management. Handled user authentication and organization switching using Clerk", image: Image1, link: 'https://task-trek-rouge.vercel.app/' },

      { title: 'Host Hive', stack:"Docker, Kafka, Clickhouse, AWS ECS, AWS ECR, S3, PostgreSQL, Redis", desp:"Used Docker containers to host the github repositories in isolated environments and run them independently using AWS ECS, and promote parallelism. Used Redis and Kafka for fast throughput of build logs and PostgreSQL/Clickhouse for data retrieval.",  image: Image2, link: 'https://github.com/shubhamMukherjee2304/Host-Hive' },
      { title: 'My Farm', stack:" React, NodeJS, MongoDB", desp:"Developed a marketplace for farmers to showcase products and connect with buyers. Implemented JWT authentication, CRUD operations, and Google Sign-In with Firebase.",  image: Image3, link: 'https://agro-mart-1.onrender.com/' },
    ];
  
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-white font-bold text-center py-3">Projects</h2>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex text-white my-10 flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center my-8`}
            >
              <img src={`${project.image}`} alt={project.title} className="w-2/5 rounded-lg shadow-md" />
              <div className="md:ml-8 md:text-left md:px-4 md:mx-2 sm:text-center sm:p-2">
                <h3 className="text-2xl font-Roboto font-semibold">{project.title}</h3>
                <h4 className='text-medium font-medium'><span className='text-medium font-Ubuntu font-semibold'>Tech Stack: </span>{project.stack}</h4>
                <p className='text-medium sm:text-center md:text-left md:mx-0 sm:mx-auto font-Montserrat w-4/5'>{project.desp}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;