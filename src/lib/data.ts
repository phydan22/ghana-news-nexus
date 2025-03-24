
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  publishedAt: Date;
  source: string;
  author: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export const sampleArticles: NewsArticle[] = [
  {
    id: '1',
    title: "Ghana's Economy Shows Signs of Recovery Amid Global Challenges",
    excerpt: "Recent economic indicators suggest Ghana's economy is beginning to stabilize after a challenging period of inflation and currency depreciation.",
    content: `
      <p>Ghana's economy is showing promising signs of recovery, according to the latest data released by the Ghana Statistical Service. After months of grappling with high inflation rates and currency depreciation, several key indicators are now pointing toward stabilization and potential growth.</p>
      
      <p>The country's GDP grew by 3.8% in the last quarter, exceeding analysts' expectations of 3.2%. This growth has been primarily driven by the agriculture and service sectors, which have shown remarkable resilience despite global supply chain disruptions.</p>
      
      <p>"We are cautiously optimistic about these developments," said Finance Minister in a press briefing yesterday. "The government's fiscal consolidation efforts and monetary policy adjustments are beginning to yield positive results."</p>
      
      <p>Inflation, which peaked at 21.3% earlier this year, has gradually decreased to 16.8%, providing some relief to consumers who have been struggling with rising prices of essential commodities.</p>
      
      <p>The Ghana cedi has also shown signs of stability against major international currencies in recent weeks, following months of significant depreciation.</p>
      
      <p>International financial institutions have acknowledged these improvements. The International Monetary Fund (IMF) recently revised its growth forecast for Ghana upward, citing improved fiscal discipline and the implementation of structural reforms.</p>
      
      <p>However, challenges remain. Public debt levels continue to be a concern, and the government is working on strategies to manage debt sustainability while investing in critical infrastructure and social services.</p>
      
      <p>Economists warn that external factors, including global economic uncertainties and geopolitical tensions, could still impact Ghana's recovery trajectory. They emphasize the need for continued prudent economic management and diversification efforts.</p>
      
      <p>For ordinary Ghanaians, the economic indicators may not yet translate to immediate relief in daily living costs, but experts suggest that if the current trend continues, improvements in living standards could become more apparent in the coming months.</p>
    `,
    category: 'Business',
    imageUrl: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2969&q=80',
    publishedAt: new Date('2023-09-15T09:30:00'),
    source: 'Ghana Business Journal',
    author: 'Kofi Mensah'
  },
  {
    id: '2',
    title: 'Black Stars Announce Squad for Upcoming World Cup Qualifiers',
    excerpt: 'The Ghana Football Association has announced a 26-man squad for the upcoming FIFA World Cup qualifying matches against Central African Republic and Madagascar.',
    content: `
      <p>The Ghana Football Association (GFA) has unveiled a 26-man squad for the Black Stars' upcoming FIFA World Cup qualifying matches against the Central African Republic and Madagascar scheduled for next month.</p>
      
      <p>The squad, announced by head coach Otto Addo yesterday, includes both established international players and promising young talents who have been performing well for their clubs.</p>
      
      <p>Captain André Ayew leads the team, despite recent concerns about his fitness following a minor injury during his last club match. Other key players include Arsenal midfielder Thomas Partey, Ajax Amsterdam's Mohammed Kudus, and Leicester City's Abdul Fatawu Issahaku.</p>
      
      <p>Notable inclusions in the squad are rising stars Ibrahim Osman and Jerome Opoku, who have earned their first call-ups to the senior national team after impressive performances in the European leagues.</p>
      
      <p>"We've selected a balanced squad that combines experience with youthful energy," said Coach Addo during the announcement. "Our focus is on building a team that can not only qualify for the World Cup but also make Ghana proud on the global stage."</p>
      
      <p>However, some fans have expressed surprise at the omission of veteran defender Jonathan Mensah and in-form striker Benjamin Tetteh, who has scored five goals in his last six matches for his club.</p>
      
      <p>The Black Stars will begin their training camp in Accra next week before facing the Central African Republic on September 5th at the Baba Yara Sports Stadium in Kumasi. They will then travel to face Madagascar on September 9th.</p>
      
      <p>Ghana is currently second in their qualifying group with six points from three matches, behind group leaders South Africa on goal difference.</p>
      
      <p>These upcoming matches are crucial for Ghana's hopes of qualifying for the 2026 FIFA World Cup, which will be jointly hosted by the United States, Canada, and Mexico.</p>
    `,
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2156&q=80',
    publishedAt: new Date('2023-09-12T14:20:00'),
    source: 'Ghana Sports Network',
    author: 'Abena Poku'
  },
  {
    id: '3',
    title: "Ghana's Parliament Passes New Renewable Energy Bill",
    excerpt: "A landmark bill to boost investment in renewable energy projects has been passed by Ghana's Parliament, aiming to position the country as a leader in clean energy in West Africa.",
    content: `
      <p>Ghana's Parliament has passed a landmark Renewable Energy Amendment Bill, designed to accelerate the country's transition to clean energy and attract significant investment in the sector.</p>
      
      <p>The bill, which was approved after extensive debate yesterday, introduces several key provisions aimed at boosting Ghana's renewable energy capacity from the current 4% to 20% by 2030.</p>
      
      <p>Among the most significant aspects of the new legislation are tax incentives for companies investing in solar, wind, and hydroelectric projects in Ghana. The bill also establishes a green energy fund to provide financial support for community-based renewable energy initiatives.</p>
      
      <p>"This is a forward-thinking piece of legislation that positions Ghana as a leader in the clean energy transition in West Africa," said the Minister for Energy during a press briefing after the parliamentary session. "It will not only help us address climate change but also create thousands of green jobs and improve energy access across the country."</p>
      
      <p>The bill mandates that all new government buildings must incorporate solar installations and sets ambitious targets for renewable energy adoption by industrial and commercial entities.</p>
      
      <p>Environmental activists have largely welcomed the new legislation, although some have expressed concerns that the implementation timeline could be more aggressive.</p>
      
      <p>"While this is definitely a step in the right direction, the climate crisis demands even more urgent action," said James Mensah, director of Climate Action Ghana. "We will continue to advocate for faster deployment of renewable solutions."</p>
      
      <p>The business community has responded positively to the bill, with several international renewable energy companies already expressing interest in exploring opportunities in Ghana.</p>
      
      <p>The legislation now awaits presidential assent, which is expected within the next few weeks. Once signed into law, the Ministry of Energy will have 90 days to release detailed implementation guidelines.</p>
    `,
    category: 'Politics',
    imageUrl: 'https://images.unsplash.com/photo-1618522285348-5709d78157fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80',
    publishedAt: new Date('2023-09-10T11:45:00'),
    source: 'Ghana Political Monitor',
    author: 'Kwame Osei'
  },
  {
    id: '4',
    title: 'Ghanaian Tech Startup Secures $5 Million in Venture Capital Funding',
    excerpt: 'Accra-based fintech startup PayGhana has secured $5 million in Series A funding to expand its digital payment solutions across West Africa.',
    content: `
      <p>PayGhana, an Accra-based financial technology startup, has successfully secured $5 million in Series A funding led by Frontier Ventures, with participation from local investors including Ghana Tech Fund.</p>
      
      <p>The company, founded in 2019 by tech entrepreneurs Ama Darko and Emmanuel Kwarteng, has developed an innovative payment platform that allows small businesses and market vendors to accept digital payments without requiring smartphones or internet connectivity.</p>
      
      <p>"This investment will allow us to scale our operations beyond Ghana and into neighboring West African countries," said Darko, who serves as the company's CEO. "Our mission is to bring financial inclusion to the millions of unbanked individuals across the region."</p>
      
      <p>PayGhana's technology uses USSD codes and a unique verification system that works with basic feature phones, making digital transactions accessible to vendors and customers regardless of their access to smartphones or internet connectivity.</p>
      
      <p>The company has already onboarded over 15,000 merchants in Ghana and processes approximately 30,000 transactions daily. With the new funding, they plan to expand into Côte d'Ivoire and Togo by the end of the year.</p>
      
      <p>"What impressed us about PayGhana is their deep understanding of local market conditions and their innovative approach to solving real problems," said Sarah Chen, Partner at Frontier Ventures. "They're not just applying Western fintech models to Africa; they're creating solutions specifically designed for the African context."</p>
      
      <p>The investment represents one of the largest Series A funding rounds for a Ghanaian tech startup this year and signals growing investor confidence in Africa's burgeoning tech ecosystem.</p>
      
      <p>As part of their expansion plan, PayGhana will be hiring an additional 50 staff across engineering, sales, and customer support roles in the coming months.</p>
      
      <p>The company is also in discussions with several banks and telecommunications companies about potential partnerships to further extend their reach into rural communities.</p>
    `,
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    publishedAt: new Date('2023-09-08T10:15:00'),
    source: 'Tech Africa',
    author: 'Daniel Adjei'
  },
  {
    id: '5',
    title: 'Acclaimed Ghanaian Author Wins International Literary Prize',
    excerpt: 'Celebrated writer Efua Nyame has been awarded the prestigious Global Literary Award for her novel exploring post-colonial identity in modern Ghana.',
    content: `
      <p>Celebrated Ghanaian author Efua Nyame has been awarded the prestigious Global Literary Award for her novel "Children of the Returning Sun," which explores post-colonial identity and cultural reconciliation in contemporary Ghana.</p>
      
      <p>The award, announced at a ceremony in London yesterday, comes with a £50,000 prize and is expected to significantly boost international recognition of Nyame's work.</p>
      
      <p>"I am deeply honored to receive this recognition," Nyame said in her acceptance speech. "This novel is my love letter to Ghana—to our struggles, our resilience, and our continuing journey to define ourselves on our own terms."</p>
      
      <p>"Children of the Returning Sun" tells the story of three generations of a family in Accra navigating the complexities of tradition and modernity from Ghana's independence to the present day. The novel has been praised for its lyrical prose, complex characters, and nuanced exploration of national and personal identity.</p>
      
      <p>The head judge described the book as "a masterful work that speaks to both the specificity of the Ghanaian experience and universal themes of belonging, memory, and the search for home in a rapidly changing world."</p>
      
      <p>Nyame, who was born in Kumasi and educated at the University of Ghana before completing a Master's degree at Columbia University, has previously published two collections of short stories and a poetry anthology. This is her second novel and her first major international award.</p>
      
      <p>Literary critics have highlighted how the novel skillfully weaves traditional Ghanaian storytelling techniques with contemporary narrative styles, creating what one reviewer called "a new language for addressing the complexities of African modernity."</p>
      
      <p>Following the award announcement, Nyame's publisher confirmed that translation rights for the novel have already been sold in 15 languages, with a French translation set to be released next month.</p>
      
      <p>The author will begin a global book tour next week, with events planned in Accra, Lagos, London, New York, and Toronto.</p>
    `,
    category: 'Entertainment',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    publishedAt: new Date('2023-09-05T16:40:00'),
    source: 'Ghana Arts Review',
    author: 'Nana Ama Owusu'
  },
  {
    id: '6',
    title: 'Major Healthcare Initiative Launched to Combat Malaria in Northern Ghana',
    excerpt: "A new public-private partnership aims to reduce malaria cases by 60% in Ghana's Northern Region through innovative prevention and treatment approaches.",
    content: `
      <p>A comprehensive healthcare initiative aimed at dramatically reducing malaria cases in Ghana's Northern Region was officially launched yesterday in Tamale, marking one of the country's most ambitious public health campaigns in recent years.</p>
      
      <p>The Northern Ghana Malaria Elimination Project is a collaborative effort between Ghana's Ministry of Health, the World Health Organization, and several private sector partners including GlaxoSmithKline and the Gates Foundation.</p>
      
      <p>With a budget of $45 million over five years, the initiative aims to reduce malaria cases in the region by 60% and malaria-related deaths by 80%.</p>
      
      <p>"Malaria continues to be one of our most persistent public health challenges, particularly in northern Ghana where the burden is highest," said the Minister of Health at the launch event. "This initiative represents a holistic approach that combines proven interventions with innovative new strategies."</p>
      
      <p>The project will distribute over two million long-lasting insecticide-treated bed nets and implement a comprehensive indoor residual spraying program covering 350,000 households.</p>
      
      <p>Additionally, the initiative includes the deployment of 500 community health workers trained in early diagnosis and treatment, and the establishment of 50 new community health posts to improve access to care in remote areas.</p>
      
      <p>A particularly innovative aspect of the program is the use of mobile technology to track outbreaks and treatment adherence. A smartphone app will allow health workers to report cases in real-time and receive guidance on treatment protocols.</p>
      
      <p>"What makes this initiative special is its community-centered approach," explained Dr. Aminata Sesay, WHO Representative in Ghana. "Local communities are not just recipients of services but active participants in designing and implementing solutions."</p>
      
      <p>The project will initially focus on five districts with the highest malaria prevalence before expanding to cover the entire Northern Region by the third year.</p>
      
      <p>If successful, health officials plan to adapt and implement the model in other high-burden regions across Ghana, potentially transforming the country's approach to malaria control.</p>
    `,
    category: 'Health',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    publishedAt: new Date('2023-09-03T08:50:00'),
    source: 'Ghana Health Report',
    author: 'Dr. Joseph Boateng'
  },
  {
    id: '7',
    title: "Ghana's Cocoa Farmers Embrace Sustainable Farming Practices",
    excerpt: "A growing movement among Ghana's cocoa farmers is adopting organic and sustainable farming methods to improve yields and combat climate change impacts.",
    content: `
      <p>A significant shift is underway across Ghana's cocoa-growing regions as more farmers embrace sustainable and organic farming practices, moving away from conventional methods that have dominated the industry for decades.</p>
      
      <p>This transition, supported by both government initiatives and international certification programs, is helping farmers improve yields while reducing environmental impact and adapting to climate change.</p>
      
      <p>"We've seen remarkable results since adopting these new methods," said Akosua Frimpong, who manages a 5-acre cocoa farm in the Western Region. "Our yields have increased by about 30% over the past two years, and we're spending less on chemical inputs."</p>
      
      <p>The sustainable practices being adopted include agroforestry techniques where cocoa is grown alongside shade trees, application of organic compost instead of chemical fertilizers, and natural pest management strategies.</p>
      
      <p>The Ghana Cocoa Board (COCOBOD) has been instrumental in promoting this transition through its Cocoa Rehabilitation and Intensification Program, which provides training and resources to farmers willing to adopt sustainable practices.</p>
      
      <p>"Climate change poses a serious threat to cocoa production in Ghana," explained Dr. Emmanuel Opoku, Deputy Chief Executive of COCOBOD. "These sustainable farming methods not only help farmers adapt to changing weather patterns but also ensure the long-term viability of our cocoa sector."</p>
      
      <p>International chocolate companies are also playing a role by offering premium prices for sustainably grown cocoa. Major buyers including Lindt, Tony's Chocolonely, and Ferrero have established direct purchasing programs with Ghanaian farmer cooperatives that meet specific sustainability standards.</p>
      
      <p>The movement is gaining particular traction among younger farmers, many of whom have returned to agriculture after receiving formal education or working in urban areas.</p>
      
      <p>"Young farmers are bringing new perspectives and technologies to cocoa farming," noted Eric Danso, coordinator of the Young Cocoa Farmers Network. "They're using smartphones to access weather data, connect with buyers, and share knowledge with other farmers."</p>
      
      <p>While the transition faces challenges, including initial costs and the time required for training, the growing number of success stories is convincing more farmers to make the switch to sustainable methods.</p>
    `,
    category: 'Business',
    imageUrl: 'https://images.unsplash.com/photo-1591768462232-3f795a94a744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80',
    publishedAt: new Date('2023-09-01T13:25:00'),
    source: 'Agribusiness Ghana',
    author: 'Francis Aidoo'
  },
  {
    id: '8',
    title: 'International Film Festival to Showcase Ghanaian Cinema',
    excerpt: "The upcoming Accra International Film Festival will feature the largest selection of Ghanaian films in its history, highlighting the growing global interest in the country's cinema.",
    content: `
      <p>The Accra International Film Festival (AIFF) has announced that its upcoming eighth edition will feature the largest selection of Ghanaian films in the event's history, signaling growing international recognition for the country's cinema.</p>
      
      <p>Scheduled to run from October 15-22, the festival will screen 28 Ghanaian productions among its total lineup of 120 films from 45 countries.</p>
      
      <p>"We've witnessed a remarkable evolution in Ghanaian cinema over the past decade," said Festival Director Nana Yaa Serwaa during the program announcement yesterday. "Our filmmakers are creating bold, innovative works that speak to both our cultural specificities and universal human experiences."</p>
      
      <p>The festival will open with "The River's Song," a critically acclaimed drama by director Kwame Asante that explores environmental challenges facing communities along the Volta River. The film recently won the Special Jury Prize at the Rotterdam International Film Festival.</p>
      
      <p>Other highlighted Ghanaian selections include the documentary "Market Queens," which profiles the powerful women who control Ghana's major marketplaces, and "Accra After Dark," a neo-noir thriller set in the capital's nightlife scene.</p>
      
      <p>The festival has also confirmed attendance from several international film industry executives, including representatives from Netflix, CANAL+, and BBC Films, who will participate in networking events and a financing forum for African filmmakers.</p>
      
      <p>"This is a golden opportunity for our local film industry to secure international distribution deals and co-production opportunities," said Angela Andah, Chairperson of the Ghana Film Authority. "The global streaming platforms are actively looking for authentic African content, and Ghanaian stories are particularly attractive."</p>
      
      <p>In addition to screenings at traditional venues like Silverbird Cinemas and the National Theatre, this year's festival will feature free outdoor screenings in communities across Accra, including Jamestown, Nima, and Madina.</p>
      
      <p>The festival will close with an awards ceremony honoring achievements in various categories, with a special lifetime achievement award to be presented to veteran Ghanaian filmmaker Kwaw Ansah.</p>
    `,
    category: 'Entertainment',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80',
    publishedAt: new Date('2023-08-28T09:15:00'),
    source: 'Ghana Entertainment Today',
    author: 'Erica Mensah'
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Politics',
    slug: 'politics',
    description: "Latest news on Ghana's political landscape, government policies, and national governance.",
    count: 12
  },
  {
    id: '2',
    name: 'Business',
    slug: 'business',
    description: "Updates on Ghana's economy, local businesses, entrepreneurship, and financial markets.",
    count: 15
  },
  {
    id: '3',
    name: 'Sports',
    slug: 'sports',
    description: 'Coverage of local and international sports events with Ghanaian relevance, focusing on football and athletics.',
    count: 18
  },
  {
    id: '4',
    name: 'Entertainment',
    slug: 'entertainment',
    description: 'News about Ghanaian music, movies, celebrities, cultural events, and entertainment industry trends.',
    count: 14
  },
  {
    id: '5',
    name: 'Technology',
    slug: 'technology',
    description: 'Reporting on tech innovation, startups, digital transformation, and tech policy in Ghana.',
    count: 9
  },
  {
    id: '6',
    name: 'Health',
    slug: 'health',
    description: 'Information about public health initiatives, medical advancements, and healthcare access in Ghana.',
    count: 7
  },
  {
    id: '7',
    name: 'Education',
    slug: 'education',
    description: "News on educational policies, institutions, achievements, and challenges in Ghana's education sector.",
    count: 6
  },
  {
    id: '8',
    name: 'Opinion',
    slug: 'opinion',
    description: 'Thought pieces, editorials, and expert opinions on current events and issues affecting Ghana.',
    count: 10
  }
];
