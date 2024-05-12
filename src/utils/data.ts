const courses = [
    {
        id: 1,
        name: 'Introduction to Artificial Intelligence',
        instructor: 'Dr. Emily Chen',
        description: 'Explore the fundamentals of artificial intelligence and its applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'ai_course.jpg',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Calculus', 'Linear Algebra', 'Programming Basics'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to AI',
                content: 'Overview of artificial intelligence, its history, and its impact on society.'
            },
            {
                week: 2,
                topic: 'Machine Learning Fundamentals',
                content: 'Understanding supervised, unsupervised, and reinforcement learning.'
            },
            {
                week: 3,
                topic: 'Neural Networks and Deep Learning',
                content: 'Exploring the architecture and training of artificial neural networks.'
            },
            {
                week: 4,
                topic: 'Computer Vision and Image Recognition',
                content: 'Applying AI techniques to analyze and interpret visual data.'
            },
            {
                week: 5,
                topic: 'Natural Language Processing',
                content: 'Techniques for understanding, interpreting, and generating human language.'
            },
            {
                week: 6,
                topic: 'Decision Making and Planning',
                content: 'Algorithms for optimal decision-making and problem-solving.'
            },
            {
                week: 7,
                topic: 'Robotics and Autonomous Systems',
                content: 'Integrating AI into physical systems and robots.'
            },
            {
                week: 8,
                topic: 'Ethical Considerations in AI',
                content: 'Discussing the societal impact and ethical challenges of AI.'
            },
            {
                week: 9,
                topic: 'AI Applications and Case Studies',
                content: 'Exploring real-world applications of AI in various industries.'
            },
            {
                week: 10,
                topic: 'Future of AI and Emerging Trends',
                content: 'Discussing the latest advancements and future directions of AI.'
            }
        ]
    },
    {
        id: 2,
        name: 'Data Science Fundamentals',
        instructor: 'Dr. Michael Johnson',
        description: 'Learn the essential tools and techniques for data-driven decision making.',
        enrollmentStatus: 'Open',
        thumbnail: 'data_science.jpg',
        duration: '6 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Statistics', 'Programming (Python or R)'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data Science',
                content: 'Overview of data science, its applications, and the data science lifecycle.'
            },
            {
                week: 2,
                topic: 'Data Collection and Preprocessing',
                content: 'Techniques for gathering, cleaning, and transforming data.'
            },
            {
                week: 3,
                topic: 'Exploratory Data Analysis',
                content: 'Analyzing and visualizing data to uncover insights.'
            },
            {
                week: 4,
                topic: 'Statistical Modeling and Inference',
                content: 'Applying statistical methods for data analysis and hypothesis testing.'
            },
            {
                week: 5,
                topic: 'Machine Learning Fundamentals',
                content: 'Understanding supervised, unsupervised, and reinforcement learning algorithms.'
            },
            {
                week: 6,
                topic: 'Regression and Classification',
                content: 'Techniques for predictive modeling and decision-making.'
            },
        ]
    },
    {
        id: 3,
        name: 'Web Development Bootcamp',
        instructor: 'Emily Wilson',
        description: 'Learn the essential skills for building modern web applications from scratch.',
        enrollmentStatus: 'Open',
        thumbnail: 'web_dev.jpg',
        duration: '14 weeks',
        schedule: 'Mondays and Wednesdays, 6:30 PM - 9:30 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge (JavaScript)'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Web Development',
                content: 'Overview of web technologies, development tools, and best practices.'
            },
            {
                week: 2,
                topic: 'HTML and CSS Fundamentals',
                content: 'Building the structure and styling of web pages.'
            },
            {
                week: 3,
                topic: 'JavaScript Basics',
                content: 'Introduction to JavaScript syntax, variables, and data types.'
            },
            {
                week: 4,
                topic: 'DOM Manipulation',
                content: 'Interacting with the Document Object Model (DOM) using JavaScript.'
            },
            {
                week: 5,
                topic: 'Asynchronous JavaScript',
                content: 'Handling asynchronous operations with callbacks, promises, and async/await.'
            },
            {
                week: 6,
                topic: 'Front-end Frameworks',
                content: 'Introduction to popular front-end frameworks like React or Angular.'
            },
            {
                week: 7,
                topic: 'Back-end Development with Node.js',
                content: 'Building server-side applications using Node.js and Express.'
            },
            {
                week: 8,
                topic: 'Databases and Data Persistence',
                content: 'Working with databases like MongoDB or SQL for data storage.'
            },
            {
                week: 9,
                topic: 'Authentication and Security',
                content: 'Implementing user authentication and securing web applications.'
            },
            {
                week: 10,
                topic: 'Web APIs and Third-Party Services',
                content: 'Integrating web applications with external APIs and services.'
            },
            {
                week: 11,
                topic: 'Testing and Deployment',
                content: 'Writing tests and deploying web applications to production environments.'
            },
            {
                week: 12,
                topic: 'Performance Optimization',
                content: 'Techniques for optimizing web application performance and speed.'
            },
            {
                week: 13,
                topic: 'Progressive Web Apps (PWAs)',
                content: 'Building web applications with app-like features using PWA technologies.'
            },
            {
                week: 14,
                topic: 'Final Project and Presentations',
                content: 'Developing and presenting a full-stack web application project.'
            }
        ]
    },
    {
        id: 4,
        name: 'Cybersecurity Essentials',
        instructor: 'Dr. Robert Thompson',
        description: 'Gain the knowledge and skills to protect digital systems and data.',
        enrollmentStatus: 'Upcoming',
        thumbnail: 'cybersecurity.jpg',
        duration: '10 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic computer networking knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Cybersecurity',
                content: 'Understanding cybersecurity threats, risk management, and security principles.'
            },
            {
                week: 2,
                topic: 'Network Security',
                content: 'Securing networks, firewalls, and network monitoring.'
            },
            {
                week: 3,
                topic: 'Cryptography and Encryption',
                content: 'Exploring cryptographic techniques and encryption methods.'
            },
            {
                week: 4,
                topic: 'Access Control and Authentication',
                content: 'Managing user access and implementing secure authentication mechanisms.'
            },
            {
                week: 5,
                topic: 'Web Application Security',
                content: 'Preventing common web application vulnerabilities like XSS and SQL injection.'
            },
            {
                week: 6,
                topic: 'Malware and Incident Response',
                content: 'Understanding malware types and incident response procedures.'
            },
            {
                week: 7,
                topic: 'Cloud Security',
                content: 'Securing cloud computing environments and services.'
            },
            {
                week: 8,
                topic: 'Penetration Testing and Ethical Hacking',
                content: 'Conducting penetration tests and ethical hacking techniques.'
            },
            {
                week: 9,
                topic: 'Risk Management and Compliance',
                content: 'Assessing and managing security risks, and compliance with regulations.'
            },
            {
                week: 10,
                topic: 'Emerging Threats and Trends',
                content: 'Discussing the latest cybersecurity threats and future trends.'
            }
        ]
    },
    {
        id: 5,
        name: 'Machine Learning Engineering',
        instructor: 'Dr. Sarah Lee',
        description: 'Dive into the practical aspects of building and deploying machine learning models.',
        enrollmentStatus: 'Open',
        thumbnail: 'machine_learning.jpg',
        duration: '12 weeks',
        schedule: 'Saturdays, 10:00 AM - 1:00 PM',
        location: 'Online',
        prerequisites: ['Python programming', 'Statistics', 'Linear Algebra'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Machine Learning Engineering',
                content: 'Overview of machine learning engineering roles, workflows, and best practices.'
            },
            {
                week: 2,
                topic: 'Data Preprocessing and Feature Engineering',
                content: 'Techniques for cleaning, transforming, and extracting relevant features from data.'
            },
            {
                week: 3,
                topic: 'Supervised Learning Algorithms',
                content: 'Exploring and implementing various supervised learning models.'
            },
            {
                week: 4,
                topic: 'Unsupervised Learning and Dimensionality Reduction',
                content: 'Clustering techniques, anomaly detection, and dimensionality reduction methods.'
            },
            {
                week: 5,
                topic: 'Model Evaluation and Optimization',
                content: 'Assessing model performance, hyperparameter tuning, and model optimization strategies.'
            },
            {
                week: 6,
                topic: 'Deep Learning Fundamentals',
                content: 'Introduction to neural networks and deep learning architectures.'
            },
            {
                week: 7,
                topic: 'Computer Vision and Natural Language Processing',
                content: 'Applying deep learning techniques to computer vision and NLP tasks.'
            },
            {
                week: 8,
                topic: 'Productionizing Machine Learning Models',
                content: 'Deploying and serving machine learning models in production environments.'
            },
            {
                week: 9,
                topic: 'Scalable Machine Learning Systems',
                content: 'Designing and implementing scalable machine learning systems and pipelines.'
            },
            {
                week: 10,
                topic: 'Ethical Considerations and Responsible AI',
                content: 'Examining the ethical implications and responsible use of AI systems.'
            },
            {
                week: 11,
                topic: 'Advanced Topics in Machine Learning',
                content: 'Exploring cutting-edge techniques and emerging trends in machine learning.'
            },
            {
                week: 12,
                topic: 'Final Project and Presentations',
                content: 'Developing and presenting a machine learning project.'
            }
        ]
    },
    {
        id: 6,
        name: 'Mobile App Development with React Native',
        instructor: 'John Anderson',
        description: 'Learn how to build cross-platform mobile applications using React Native.',
        enrollmentStatus: 'Upcoming',
        thumbnail: 'react_native.jpg',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['JavaScript', 'React fundamentals'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, its architecture, and development environment setup.'
            },
            {
                week: 2,
                topic: 'React Native Components and Styling',
                content: 'Building user interfaces with React Native components and styling techniques.'
            },
            {
                week: 3,
                topic: 'State Management and Navigation',
                content: 'Managing application state and implementing navigation in React Native apps.'
            },
            {
                week: 4,
                topic: 'Interaction and Animations',
                content: 'Handling user interactions and creating animations in React Native.'
            },
            {
                week: 5,
                topic: 'Integrating Native APIs',
                content: 'Accessing native device features and APIs in React Native apps.'
            },
            {
                week: 6,
                topic: 'Testing and Debugging',
                content: 'Writing tests and debugging techniques for React Native applications.'
            },
            {
                week: 7,
                topic: 'Performance Optimization',
                content: 'Optimizing React Native app performance and improving rendering efficiency.'
            },
            {
                week: 8,
                topic: 'Third-Party Libraries and Packages',
                content: 'Integrating and using third-party libraries and packages in React Native.'
            },
            {
                week: 9,
                topic: 'Deployment and Publishing',
                content: 'Deploying and publishing React Native apps to app stores.'
            },
            {
                week: 10,
                topic: 'Final Project and Presentations',
                content: 'Developing and presenting a mobile application using React Native.'
            }
        ]
    },
    {
        id: 7,
        name: 'Blockchain and Cryptocurrencies',
        instructor: 'Dr. Michael Davies',
        description: 'Explore the fundamentals of blockchain technology and cryptocurrencies.',
        enrollmentStatus: 'Open',
        thumbnail: 'blockchain.jpg',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Blockchain',
                content: 'Overview of blockchain technology, its history, and its applications.'
            },
            {
                week: 2,
                topic: 'Cryptography and Hashing',
                content: 'Understanding cryptographic principles and hashing algorithms.'
            },
            {
                week: 3,
                topic: 'Distributed Ledgers and Consensus Mechanisms',
                content: 'Exploring distributed ledgers and consensus algorithms like Proof-of-Work and Proof-of-Stake.'
            },
            {
                week: 4,
                topic: 'Bitcoin and Cryptocurrencies',
                content: 'In-depth look at Bitcoin and other major cryptocurrencies.'
            },
            {
                week: 5,
                topic: 'Smart Contracts and Decentralized Applications (DApps)',
                content: 'Building and deploying smart contracts and decentralized applications.'
            },
            {
                week: 6,
                topic: 'Blockchain Platforms and Frameworks',
                content: 'Exploring popular blockchain platforms like Ethereum, Hyperledger, and others.'
            },
            {
                week: 7,
                topic: 'Blockchain Use Cases and Industry Applications',
                content: 'Examining real-world use cases and applications of blockchain technology.'
            },
            {
                week: 8,
                topic: 'Regulatory and Governance Considerations',
                content: 'Discussing regulatory challenges and governance models for blockchain systems.'
            }
        ]
    },
    {
        id: 8,
        name: 'Digital Marketing Strategies',
        instructor: 'Emily Johnson',
        description: 'Learn effective strategies and tactics for marketing in the digital age.',
        enrollmentStatus: 'Upcoming',
        thumbnail: 'digital_marketing.jpg',
        duration: '10 weeks',
        schedule: 'Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: [],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Digital Marketing',
                content: 'Overview of digital marketing, its channels, and its role in modern businesses.'
            },
            {
                week: 2,
                topic: 'Search Engine Optimization (SEO)',
                content: 'Optimizing websites and content for better search engine visibility.'
            },
            {
                week: 3,
                topic: 'Pay-Per-Click (PPC) Advertising',
                content: 'Running effective pay-per-click advertising campaigns on platforms like Google Ads and Bing Ads.'
            },
            {
                week: 4,
                topic: 'Social Media Marketing',
                content: 'Leveraging social media platforms for brand awareness, engagement, and lead generation.'
            },
            {
                week: 5,
                topic: 'Content Marketing and Blogging',
                content: 'Creating and promoting valuable, relevant, and consistent content.'
            },
            {
                week: 6,
                topic: 'Email Marketing and Lead Nurturing',
                content: 'Building and maintaining effective email marketing campaigns.'
            },
            {
                week: 7,
                topic: 'Influencer Marketing and Affiliate Programs',
                content: 'Working with influencers and affiliates to promote products or services.'
            },
            {
                week: 8,
                topic: 'Analytics and Measurement',
                content: 'Tracking and analyzing digital marketing performance using tools like Google Analytics.'
            },
            {
                week: 9,
                topic: 'Conversion Rate Optimization (CRO)',
                content: 'Strategies for optimizing website and landing page conversions.'
            },
            {
                week: 10,
                topic: 'Digital Marketing Strategy and Planning',
                content: 'Developing a comprehensive digital marketing strategy and plan.'
            }
        ]
    },
    {
        id: 9,
        name: 'Game Development with Unity',
        instructor: 'Emily Thompson',
        description: 'Learn how to create immersive and interactive games using the Unity game engine.',
        enrollmentStatus: 'Upcoming',
        thumbnail: 'unity.jpg',
        duration: '14 weeks',
        schedule: 'Saturdays, 2:00 PM - 5:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge (C#)'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Unity',
                content: 'Overview of the Unity game engine, interface, and development workflow.'
            },
            {
                week: 2,
                topic: 'Unity Scripting and C#',
                content: 'Writing scripts and programming game logic using C# in Unity.'
            },
            {
                week: 3,
                topic: 'Game Objects and Components',
                content: 'Understanding game objects, components, and their roles in Unity.'
            },
            {
                week: 4,
                topic: 'Physics and Collision Detection',
                content: 'Implementing physics and collision detection in Unity games.'
            },
            {
                week: 5,
                topic: 'User Input and Controls',
                content: 'Handling user input and designing controls for Unity games.'
            },
            {
                week: 6,
                topic: 'Animations and Particle Systems',
                content: 'Creating animations and visual effects using Unitys animation and particle systems.'
            },
            {
                week: 7,
                topic: 'Audio and Sound Design',
                content: 'Integrating audio and sound effects into Unity games.'
            },
            {
                week: 8,
                topic: 'User Interfaces and Menus',
                content: 'Building user interfaces and menu systems for Unity games.'
            },
            {
                week: 9,
                topic: 'Game Optimization and Performance',
                content: 'Optimizing Unity games for better performance and resource management.'
            },
            {
                week: 10,
                topic: 'Multiplayer and Networking',
                content: 'Implementing multiplayer functionality and networking in Unity games.'
            },
            {
                week: 11,
                topic: 'Virtual and Augmented Reality',
                content: 'Developing VR and AR experiences using Unity.'
            },
            {
                week: 12,
                topic: 'Mobile Game Development',
                content: 'Building and deploying Unity games for mobile platforms.'
            },
            {
                week: 13,
                topic: 'Game Testing and Quality Assurance',
                content: 'Testing and quality assurance processes for Unity games.'
            },
            {
                week: 14,
                topic: 'Final Project and Presentations',
                content: 'Developing and presenting a complete Unity game project.'
            }
        ]
    },
    {
        id: 10,
        name: 'UI/UX Design Principles',
        instructor: 'Sarah Wilson',
        description: 'Learn the fundamentals of user interface and user experience design.',
        enrollmentStatus: 'Open',
        thumbnail: 'ui_ux.jpg',
        duration: '10 weeks',
        schedule: 'Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: [],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to UI/UX Design',
                content: 'Understanding the importance of UI/UX design and its role in product development.'
            },
            {
                week: 2,
                topic: 'Design Thinking and User Research',
                content: 'Applying design thinking methodologies and conducting user research.'
            },
            {
                week: 3,
                topic: 'Interaction Design and Usability',
                content: 'Principles of interaction design and creating usable interfaces.'
            },
            {
                week: 4,
                topic: 'Information Architecture and Navigation',
                content: 'Organizing and structuring information for effective navigation.'
            },
            {
                week: 5,
                topic: 'Visual Design and Typography',
                content: 'Principles of visual design, color theory, and typography.'
            },
            {
                week: 6,
                topic: 'Prototyping and Wireframing',
                content: 'Creating low and high-fidelity prototypes and wireframes.'
            },
            {
                week: 7,
                topic: 'User Testing and Feedback',
                content: 'Conducting user testing and gathering feedback for design iterations.'
            },
            {
                week: 8,
                topic: 'Accessibility and Inclusive Design',
                content: 'Designing for accessibility and creating inclusive user experiences.'
            },
            {
                week: 9,
                topic: 'Design Tools and Collaboration',
                content: 'Exploring design tools and collaboration techniques in UI/UX design projects.'
            },
            {
                week: 10,
                topic: 'UI/UX Design Case Studies',
                content: 'Analyzing real-world UI/UX design examples and best practices.'
            }
        ]
    },

]

export default courses;