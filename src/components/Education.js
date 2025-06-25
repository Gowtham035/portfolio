export default function EducationDetails() {
  const education = {
    college: {
      title: 'B.E. Computer Science and Engineering',
      institute: 'Velammal Engineering College',
      percentage: '79% upto 5th sem ',
      year: '2022 - 2026',
    },
    twelfth: {
      title: 'Higher Secondary Education (12th)',
      institute: 'Government Higher Secondary School, Konur',
      percentage: '83%',
      year: '2021 - 2022',
    },
    tenth: {
      title: 'Secondary Education (10th)',
      institute: 'Government Higher Secondary School, Konur',
      percentage: '66%',
      year: '2019 - 2020',
    },
  };

  return (
    <section id="education" className="bg-teritary px-5 py-20 text-center text-black">
      <h1 className="text-4xl font-bold border-b-4 border-[#8765a9] inline-block mb-12 text-center">
        Education Details
      </h1>

      <div className="w-[40%] mx-auto">
        {/* College */}
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 p-6 rounded-xl shadow-lg mb-8 hover:scale-105 transition-all duration-500 animate-fade-up">
          <h2 className="text-2xl font-bold mb-2">{education.college.title}</h2>
          <p className="text-gray-200 mb-1">{education.college.institute}</p>
          <p className="text-gray-300 mb-1">Percentage: {education.college.percentage}</p>
          <p className="text-gray-400">Year: {education.college.year}</p>
        </div>

        {/* 12th */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 rounded-xl shadow-lg mb-8 hover:scale-105 transition-all duration-500 animate-fade-up delay-200">
          <h2 className="text-2xl font-bold mb-2">{education.twelfth.title}</h2>
          <p className="text-gray-200 mb-1">{education.twelfth.institute}</p>
          <p className="text-gray-300 mb-1">Percentage: {education.twelfth.percentage}</p>
          <p className="text-gray-400">Year: {education.twelfth.year}</p>
        </div>

        {/* 10th */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-500 animate-fade-up delay-400">
          <h2 className="text-2xl font-bold mb-2">{education.tenth.title}</h2>
          <p className="text-gray-200 mb-1">{education.tenth.institute}</p>
          <p className="text-gray-300 mb-1">Percentage: {education.tenth.percentage}</p>
          <p className="text-gray-400">Year: {education.tenth.year}</p>
        </div>
      </div>
    </section>
  );
}
