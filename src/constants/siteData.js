export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Resources', href: '#resources' },
  { label: 'Services', href: '#services' },
]

export const FOOTER_NAV = {
  services: [
    { label: 'Data Engineering', href: '#services' },
    { label: 'AI Integration', href: '#services' },
    { label: 'Data and AI Consulting', href: '#services' },
  ],
  explore: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Resources', href: '#resources' },
    { label: 'Portfolio', href: '#portfolio' },
  ],
  connect: [
    { label: 'Schedule Consultation', href: '#contact' },
    { label: 'Events', href: '#contact' },
  ],
}

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/selvavel', icon: 'linkedin' },
  { label: 'Blog', href: '#blog', icon: 'blog' },
]

export const STATS = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '1,500+', label: 'Professional Connections' },
  { value: '50+', label: 'Clients Supported' },
  { value: '500+', label: 'BI Dashboards Deployed' },
]

export const SERVICES = [
  {
    title: 'Advanced Data Architecture',
    description: 'Design and implement scalable data platforms with modern architectures, governance models, and infrastructure that serve as the foundation for analytics and AI.',
    iconKey: 'database',
  },
  {
    title: 'Global Team Leadership',
    description: 'Lead distributed data engineering teams across continents, fostering collaboration, mentorship, and delivery excellence in international settings.',
    iconKey: 'globe',
  },
  {
    title: 'Business Intelligence Solutions',
    description: 'Transform raw data into actionable intelligence with custom BI dashboards, self-service analytics, and decision-support systems.',
    iconKey: 'chart',
  },
  {
    title: 'End-to-End Data Management',
    description: 'Manage the complete data lifecycle: collection, storage, processing, governance, and quality assurance with best practices.',
    iconKey: 'layer',
  },
  {
    title: 'AI Integration Services',
    description: 'Integrate practical AI and machine learning solutions into existing workflows to improve forecasting, automation, and decision-making.',
    iconKey: 'brain',
  },
  {
    title: 'Analytics Strategy',
    description: 'Develop comprehensive analytics and data science roadmaps aligned to business goals, capability maturity, and organizational readiness.',
    iconKey: 'lightbulb',
  },
]

export const TESTIMONIALS = [
  {
    quote: 'Selvavel transformed our entire data strategy. The insights we gained directly contributed to a 40% improvement in operational efficiency.',
    name: 'Samantha Ray',
    title: 'Chief Data Officer',
    rating: 5,
  },
  {
    quote: 'Working with Selvavel was a game-changer. Their team brought not just technical expertise but genuine partnership and business acumen.',
    name: 'Michael Chen',
    title: 'VP of Analytics',
    rating: 5,
  },
  {
    quote: 'The breadth of Selvavel\'s experience in global data engineering teams is unmatched. They understood our challenges immediately and delivered results.',
    name: 'Priya Kumar',
    title: 'Head of Data Engineering',
    rating: 5,
  },
]

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'Enterprise Data Lake Migration',
    category: 'Data Engineering',
    description: 'Migrated a Fortune 500 company from legacy on-prem data warehouse to a modern cloud-native data lake, reducing query times by 70% and storage costs by 45%.',
    tech: ['Azure Data Factory', 'Databricks', 'Delta Lake', 'Power BI'],
    outcome: '70% faster queries',
  },
  {
    id: 2,
    title: 'Real-Time Analytics Platform',
    category: 'BI Solutions',
    description: 'Built end-to-end real-time streaming analytics for a global retail client with 500+ BI dashboards serving 2,000+ daily users across 12 countries.',
    tech: ['Apache Kafka', 'Spark Streaming', 'Snowflake', 'Tableau'],
    outcome: '500+ dashboards deployed',
  },
  {
    id: 3,
    title: 'AI-Driven Forecasting System',
    category: 'AI Integration',
    description: 'Integrated ML forecasting models into supply chain operations, improving demand forecast accuracy by 35% and reducing inventory holding costs.',
    tech: ['Python', 'scikit-learn', 'MLflow', 'Azure ML'],
    outcome: '35% accuracy improvement',
  },
  {
    id: 4,
    title: 'Global Data Governance Framework',
    category: 'Data Management',
    description: 'Established enterprise-wide data governance across 8 global teams, achieving GDPR compliance and reducing data quality incidents by 60%.',
    tech: ['Collibra', 'Apache Atlas', 'dbt', 'Great Expectations'],
    outcome: '60% fewer data incidents',
  },
  {
    id: 5,
    title: 'Self-Service Analytics Enablement',
    category: 'Analytics Strategy',
    description: 'Designed and rolled out a self-service analytics platform enabling 300+ business users to access data insights independently without engineering support.',
    tech: ['Power BI', 'Azure Synapse', 'DAX', 'Custom Connectors'],
    outcome: '300+ empowered users',
  },
  {
    id: 6,
    title: 'Multi-Cloud Data Integration',
    category: 'Data Engineering',
    description: 'Architected a multi-cloud data integration layer connecting AWS, Azure, and GCP workloads, creating a unified data mesh for cross-platform analytics.',
    tech: ['Terraform', 'Airflow', 'dbt', 'Fivetran'],
    outcome: 'Unified cross-cloud data',
  },
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Why Your Data Platform Needs a Governance Layer Before AI',
    excerpt: 'Organizations rushing to adopt AI often overlook the foundational data governance required to make AI trustworthy, explainable, and compliant.',
    category: 'Data Governance',
    readTime: '6 min read',
    date: 'January 2025',
    tags: ['AI', 'Data Governance', 'Strategy'],
    content: 'The rush to adopt AI in organizations often leads to overlooking the foundational data governance required to make AI trustworthy, explainable, and compliant. A strong data governance framework is the backbone of any successful AI initiative.',
    highlights: [
      'Data quality is foundational to trustworthy AI',
      'Governance reduces compliance and liability risks',
      'Metadata management enables AI explainability',
      'Data lineage ensures audit trails and accountability',
      'Privacy-by-design protects customer data and brand reputation',
    ],
    topics: ['Data Governance', 'AI Ethics', 'Compliance', 'Privacy', 'Trust'],
  },
  {
    id: 2,
    title: 'Data Mesh vs. Data Lakehouse: Choosing the Right Architecture',
    excerpt: 'A practical comparison of modern data architectures to help enterprise leaders make informed decisions aligned with their team structure and scale.',
    category: 'Architecture',
    readTime: '8 min read',
    date: 'December 2024',
    tags: ['Architecture', 'Data Mesh', 'Lakehouse'],
    content: 'Modern data architectures like Data Mesh and Data Lakehouse each solve different organizational challenges. Understanding their strengths and limitations helps you choose the right approach for your scale and structure.',
    highlights: [
      'Data Mesh: Domain-driven architecture for large, distributed teams',
      'Data Lakehouse: Unified platform combining data lake flexibility with warehouse performance',
      'Data Mesh excels at organizational scaling and autonomy',
      'Data Lakehouse offers simplicity and unified governance',
      'Hybrid approaches often work best for mature organizations',
    ],
    topics: ['Data Architecture', 'Data Mesh', 'Data Lakehouse', 'Scaling', 'Organization'],
  },
  {
    id: 3,
    title: 'Leading Global Data Engineering Teams: Lessons from 3 Continents',
    excerpt: 'What I learned building and scaling distributed data engineering teams across the US, UK, and India — and how culture shapes technical outcomes.',
    category: 'Leadership',
    readTime: '5 min read',
    date: 'November 2024',
    tags: ['Leadership', 'Global Teams', 'Culture'],
    content: 'Building distributed data engineering teams across three continents taught me that technical excellence is inseparable from cultural intelligence. Each region brings unique perspectives and challenges that shape how we deliver solutions.',
    highlights: [
      'Asynchronous communication requires explicit documentation and clarity',
      'Cultural differences influence technical decision-making processes',
      'Time zone advantages enable 24/7 development velocity when managed well',
      'Mentorship and career development become critical retention tools',
      'Remote-first practices scale beyond geographic distribution',
    ],
    topics: ['Leadership', 'Remote Teams', 'Culture', 'Mentorship', 'Global Business'],
  },
  {
    id: 4,
    title: 'From Raw Data to Revenue: Building an Analytics Maturity Roadmap',
    excerpt: 'A step-by-step framework for assessing your organization\'s analytics maturity and defining a realistic roadmap from reactive reporting to predictive intelligence.',
    category: 'Analytics Strategy',
    readTime: '7 min read',
    date: 'October 2024',
    tags: ['Analytics', 'Maturity Model', 'Roadmap'],
    content: 'Organizations often struggle to move beyond reactive reporting toward predictive and prescriptive analytics. A clear maturity framework helps leaders understand their current state and plan the transformation journey.',
    highlights: [
      'Maturity Levels: Reporting → Self-Service → Predictive → Autonomous Intelligence',
      'Assessment framework evaluates people, process, and technology',
      'Roadmap should align with business priorities and capability gaps',
      'Quick wins build momentum and executive support',
      'Sustainable growth requires continuous learning and investment',
    ],
    topics: ['Analytics', 'Maturity Model', 'Roadmap', 'Business Value', 'Transformation'],
  },
  {
    id: 5,
    title: 'The Real Cost of Data Silos in Enterprise Organizations',
    excerpt: 'Data silos cost organizations more than time — they erode trust, slow decisions, and create compliance risk. Here\'s how to systematically eliminate them.',
    category: 'Data Engineering',
    readTime: '5 min read',
    date: 'September 2024',
    tags: ['Data Silos', 'Enterprise', 'Integration'],
    content: 'Data silos are a persistent challenge in enterprise organizations. Beyond the obvious technical costs, they create organizational friction, slow decision-making, and increase compliance risk. Systematic elimination requires architecture, governance, and cultural shifts.',
    highlights: [
      'Data silos slow down business decisions and market response',
      'Fragmented data governance creates compliance vulnerabilities',
      'Redundant data warehouses multiply infrastructure and maintenance costs',
      'Teams lose trust in data quality when sources conflict',
      'Integration strategies require both technical and organizational alignment',
    ],
    topics: ['Data Silos', 'Integration', 'Enterprise', 'Governance', 'Architecture'],
  },
  {
    id: 6,
    title: 'Responsible AI Adoption: A Framework for Data Leaders',
    excerpt: 'AI adoption without responsible design leads to bias, liability, and loss of user trust. A practical framework for data leaders navigating this challenge.',
    category: 'AI Integration',
    readTime: '9 min read',
    date: 'August 2024',
    tags: ['Responsible AI', 'Framework', 'Data Leaders'],
    content: 'Responsible AI is not just an ethical imperative — it\'s a business necessity. Data leaders must ensure their AI initiatives are designed with fairness, transparency, and accountability from the ground up.',
    highlights: [
      'Bias detection requires diverse datasets and testing across demographic groups',
      'Explainability (XAI) is critical for high-stakes decisions',
      'Governance frameworks define ownership, monitoring, and remediation',
      'Transparency builds customer trust and regulatory compliance',
      'Continuous monitoring catches performance drift and emerging biases',
    ],
    topics: ['Responsible AI', 'AI Ethics', 'Bias', 'Explainability', 'Governance'],
  },
]

export const RESOURCES = [
  {
    id: 1,
    title: 'Taming the Data Chaos',
    description: 'How data engineering services bring order to your data ecosystem and create a dependable foundation for analytics and AI.',
    type: 'Guide',
  },
  {
    id: 2,
    title: 'Data and AI: The Dynamic Duo',
    description: 'Why combining modern data architecture and AI services unlocks better execution speed, intelligence, and business value.',
    type: 'Whitepaper',
  },
  {
    id: 3,
    title: 'Roadmap to Intelligent Transformation',
    description: 'A consulting-led approach to prioritize initiatives, reduce delivery risk, and scale data and AI capabilities responsibly.',
    type: 'Framework',
  },
]
