import Image1 from '../assets/she1.jpeg';
import Image2 from '../assets/cd2.jpeg';
import Image3 from '../assets/cd3.jpeg';



const Achievements = () => {
    const achievements = [
      { title: 'SheCodes Contestant', image:Image1, description: 'Selected for SheCodes Hackathon by Reva University, Bengaluru'},
      { title: '1st runner-up', image:Image2, description: '2nd Rank in CodeSprint Hackathon by GDSC.'},
      { title: 'Winner', image:Image3, description: '1st Rank in Cryptec Coding Battle (DSA) and 3rd Rank in Cryptec CSS Battle by NMIT' },
      
    ];
  
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl text-white font-bold mb-8">Achievements</h2>
          <div className="grid px-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-white hover:shadow-lg- transition-shadow"
              >
                <img src={`${achievement.image}`} alt={achievement.title} className="w-9/10 mx-auto p-3 mb-5 rounded-lg h-52 shadow-md" />
                <div className='bg-gray-900 h-1 w-2/2 my-2'></div>
                <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                <p className="text-gray-600 mt-2 pb-3 px-3">{achievement.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Achievements;