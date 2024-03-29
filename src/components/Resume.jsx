import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ResumeDoc from '../components/Moksh_Keloo_Resume.pdf';

const Resume = () => {
  // const skillBeginner = [
  //   { id: 9, name: 'Node JS' },
  //   { id: 10, name: 'Express JS' },
  //   { id: 11, name: 'MongoDB' },
  //   { id: 14, name: 'Django' },
  // ];

  //   const skillIntermediate = [
  //     { id: 1, name: 'Java' },
  //     { id: 2, name: 'Python' },
  //     { id: 3, name: 'C++' },
  //     { id: 4, name: 'HTML' },
  //     { id: 5, name: 'CSS' },
  //     { id: 15, name: 'Tailwind' },
  //     { id: 16, name: 'Bootstrap' },
  //     { id: 17, name: 'SCSS' },
  //     { id: 6, name: 'JavaScript' },
  //     { id: 21, name: 'JQuery' },
  //     { id: 21, name: 'TypeScript' },
  //     { id: 7, name: 'React JS' },
  //     { id: 8, name: 'Next JS' },
  //     { id: 12, name: 'SQL, PostgreSQL' },
  //     { id: 13, name: 'Git' },
  //     { id: 18, name: 'REST API' },
  //     { id: 19, name: 'Microsoft Suite' },
  //     { id: 20, name: 'Figma (UI/UX Design)' },
  //     { id: 22, name: 'Tableau' },
  //     { id: 23, name: 'Knowledge of SDLC, Agile, and Scrum Methodologies' },
  //   ];

  return (
    <div name="resume" className="max-w-[940px] mx-auto p-2 pt-[60px]">
      <h2 className="text-center text-4xl font-bold">Resume</h2>
      <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
        <h2 className="text-cente text-2xl font-bold ml-2">Moksh Keloo</h2>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/mokshkeloo"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn
              size={30}
              className="hover:scale-125 duration-300"
              style={{ marginRight: '2rem' }}
            />
          </a>
          <a href="https://github.com/mkeloo" target="_blank" rel="noreferrer">
            <FaGithub
              size={30}
              className="hover:scale-125 duration-300"
              style={{ marginRight: '2rem' }}
            />
          </a>
        </div>
      </div>
      <div className="text-center py-4 text-xl m-1 font-bold uppercase tracking-wider">
        <div className="hidden sm:block">
          <p>
            Proven Leadership <span className="px-1">|</span> Web Development{' '}
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <div className="block sm:hidden">
          <p>Proven Leadership</p>
          <p className="py-2">Web Development</p>
          <p>Complex Problem Solving</p>
        </div>
      </div>
      <p>
        Analytical, innovative, and motivated web development professional with
        experience in customer service, team leadership, and organizational
        effectiveness in fast-paced and challenging environments. Adept at
        developing strategies and driving streamlined operations. Diverse
        analytical skills, team collaboration, and relationship building.
        Consummate professional, and motivated leader, with solid interpersonal
        abilities and complex problem-solving skills. Effective and proven track
        record of critical thinking, idea generation, and optimizing
        efficiencies.
      </p>

      <div>
        <h5 className="text-center underline text-2xl font-bold py-3 mt-3">
          Education
        </h5>
        <div className="flex justify-between">
          <div>
            <p className="flex flex-col">
              <span className="font-bold">University of Florida</span>{' '}
              <span>Bachelors of Science in Computer Science</span>
            </p>
          </div>
          <div>
            <p className="font-bold">Expected in May 2024</p>
          </div>
        </div>
      </div>

      <div>
        <h5 className="text-center underline text-2xl font-bold py-3 mt-3">
          Relevant Coursework
        </h5>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            COP 3530 Data Structures & Algorithms
          </li>
          <li>CDA 3101 Intro to Computer Organization</li>
          <li>COP3503C Programming Fundamentals II: (C++ principles & OOP)</li>
        </ul>
      </div>

      {/* Skills */}
      <div className="text-center py-4 md:text-lg text-md">
        <h5 className="text-center underline text-2xl font-bold py-3 mt-3">
          Technical Skills (2+ years of Experience)
        </h5>

        <p className="py-2">
          Java | C++ | Python
          <br />
          HTML | CSS | JavaScript | TypeScript
          <br />
          ReactJS (Redux) | NextJS
          <br />
          Tailwind | Bootstrap
          <br />
          Node | Express | Django | Firebase | REST API
          <br />
          MongoDB | MySQL | PostgreSQL
          <br />
          Git | Figma (UI/UX) | Tableau | MS Suite
        </p>

        {/* <div className="flex flex-col-2 justify-center gap-2">
          <div className="flex flex-col items-center">
            <h5 className="text-center underline text-xl font-bold py-2 mt-3">
              Intermediate
            </h5>
            <div className="">
              <ul className="list-disc list-outside px-7 py-3 leading-relaxed">
                <li className="">
                  <span>
                    Java <span className="px-1">|</span> Python{' '}
                    <span className="px-2">|</span> C++{' '}
                  </span>
                </li>
                <li>
                  <span>
                    HTML <span className="px-1">|</span> CSS{' '}
                    <span className="px-2">|</span> JavaScript{' '}
                    <span className="px-2">|</span>TypeScript{' '}
                  </span>
                </li>
                <li>
                  <span>
                    React JS <span className="px-1">|</span> Next JS{' '}
                    <span className="px-2">|</span>JQuery{' '}
                  </span>
                </li>
                <li>
                  <span>
                    Tailwind CSS <span className="px-1">|</span> Bootstrap{' '}
                    <span className="px-2">|</span>SASS{' '}
                    <span className="px-2">|</span>SCSS{' '}
                  </span>
                </li>
                <li>
                  <span>
                    SQL <span className="px-1">|</span> PostgreSQl{' '}
                  </span>
                </li>
                <li>
                  <span>
                    GIT <span className="px-1">|</span> GitHub{' '}
                  </span>
                </li>
                <li>
                  <span>REST API</span>
                </li>
                <li>
                  <span>Figma (UI/UX Design)</span>
                </li>
                <li>
                  <span>Microsoft Suite</span>
                </li>
                <li>
                  <span>Tableau</span>
                </li>
                <li>
                  <span>Knowledge of SDLC, Agile, and Scrum Methodologies</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-center underline text-xl font-bold py-2 mt-3">
              Beginner
            </h5>
            <div>
              {skillBeginner.map((skill) => (
                <ul
                  key={skill.id}
                  className="py-1 list-disc list-outside px-7 leading-relaxed "
                >
                  <li>{skill.name}</li>
                </ul>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/*  */}
      <h5 className="text-center underline text-2xl font-bold py-2 mt-3">
        Work Experience
      </h5>

      {/* Experience */}
      <div className="py-6 m-2">
        <p className="italic">
          <span className="font-bold">
            Web Development Intern
          </span>
          <span className="px-2">|</span>Remote
        </p>
        <p className="py-1 italic">Kera (December 2021 – October 2022)</p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
           Assisted the lead developer in designing, developing, and maintaining the company's website, utilizing Next JS framework, TypeScript and Firebase for authentication and storage solutions.
          </li>
          <li>
           Utilized Tailwind CSS to create responsive web components to meet business requirements.
          </li>
          <li>
           Learned to Implement CI/CD pipelines to streamline development and deployment processes to overall efficiency.
          </li>
          <li>
            Grew skillset by working with web development tools such as Git, Jenkins, Docker, etc.
          </li>
           <li>
           Contributed to code reviews and participated in developing best practices to improve code quality and maintainability.
          </li>
        </ul>
      </div>
      {/* Experience */}
      <div className="py-6 m-2">
        <p className="italic">
          <span className="font-bold">Website Developer / Web Designer</span>
          <span className="px-2">|</span>Gainesville, FL
        </p>
        <p className="py-1 italic">
          <a
            className="text-blue-500 underline font-bold"
            href="https://www.ufshoes4smiles.org/"
            target="_blank"
            rel="noreferrer"
          >
            UF Shoes 4 Smiles
          </a>{' '}
          (October 2020 – Present)
        </p>
        <p>
          Shoes 4 Smiles is a student organization dedicated to fundraising and
          providing shoes and other basic necessities to people in local,
          disadvantaged communities.
        </p>

        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Ensured comprehensive mobile responsive UI layouts with
            understanding of React JS and Tailwind CSS.
          </li>
          <li>
            Worked directly with the President of the club to understand and
            implement multiple technologies and programs for the organization.
          </li>
          <li>
            Platform migration managing simple backend processes and ensuring a
            smooth migration process.
          </li>
            <li>
            Troubleshoot issues and concerns, configure operation and analytic
            plugins, and design changes as needed.
          </li>
        </ul>
      </div>


      <div className="flex justify-center p-6 mb-5">
        <button className="border-2 rounded-xl border-black p-4 text-black font-bold hover:scale-110 hover:bg-black hover:text-white duration-300">
          <a href={ResumeDoc} download="Moksh_Keloo_Resume.pdf">
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
