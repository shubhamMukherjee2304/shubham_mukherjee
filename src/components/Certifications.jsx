import Image1 from '../assets/aws-academy-graduate-aws-academy-cloud-foundations.png';
import Image2 from '../assets/Screenshot (433).png';
import Image3 from '../assets/Screenshot (432).png';



const Certifications = () => {
    const certifications = [
      { name: 'AWS Academy Cloud Foundation', image: Image1, link: 'https://www.credly.com/badges/57f6d326-e63b-4bd4-9922-a5f3fd71a573/public_url' },
      { name: 'Database Management System', image: Image2, link: 'https://drive.google.com/file/d/1EeT7xr5TGJ8aH14FXYVoe8bwDwyPAePs/view?usp=drive_link' },
      { name: 'Programming Using Java', image: Image3, link: 'https://drive.google.com/file/d/1d3iZzPSpDY1zFqMJy5WdEvviSYr-OsoN/view?usp=drive_link' },
    ];
  
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Certifications</h2>
          <div className="grid px-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white pt-4  rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={`${cert.image}`}
                  alt={cert.name}
                  className="w-9/10 h-3/5 mx-auto p-3 mb-5 rounded-lg shadow-md"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800 font-Ubuntu">{cert.name}</h3>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 inline-block"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Certifications;