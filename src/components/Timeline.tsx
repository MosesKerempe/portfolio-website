import React from 'react';

const Timeline: React.FC = () => {
    const educationTimeline = [
        {
            year: '2010 - 2018',
            level: 'Primary School',
            institution: 'Enkare Ngiro Primary School',
            description: 'Successfully completed my primary education, laying a strong foundation in academics and personal development.',
        },
        {
            year: '2019 - 2022',
            level: 'High School',
            institution: 'Sr. Mary Stephen Nkoitoi Secondary School',
            description: 'Graduated from high school with excellent results, gaining valuable knowledge and skills to prepare for higher education.',
        },
        {
            year: '2023 up to date',
            level: 'Diploma in Information Communication Technology',
            institution: 'Technical University of Mombasa',
            description: 'Currently pursuing a diploma specializing in web development and software development, focusing on building modern and scalable applications.',
        },
    ];

    return (
        <div className="container mx-auto py-10 px-6">
            <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center">
                Education Timeline
            </h2>
            <ul className="space-y-8">
                {educationTimeline.map((item, index) => (
                    <li
                        key={index}
                        className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0"
                    >
                        <div className="flex-shrink-0 w-24 text-center">
                            <span className="text-xl font-semibold text-gray-800 dark:text-yellow-400">
                                {item.year}
                            </span>
                        </div>
                        <div className="flex-grow border-l-4 border-blue-500 dark:border-blue-400 pl-6">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                {item.level}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400">{item.institution}</p>
                            <p className="text-gray-500 dark:text-gray-300">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;