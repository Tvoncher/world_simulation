import { EventType, IEvent } from "./types";

export const initialEvent: IEvent = {
  type: EventType.info,
  title: "Welcome to world simulator",
  text: "Select country by clicking on it. First picked country will become yours. Use buttons in left bottom corner to improve your country and try to conquer whole world.",
};

export const allEvents: IEvent[] = [
  {
    type: EventType.info,
    title: "Historic Peace Treaty Signed, Ending Decades-Long Conflict",
    text: "After years of negotiations, a historic peace treaty has been signed, bringing an end to a decades-long conflict. This monumental agreement paves the way for a new era of stability and cooperation.",
  },
  {
    type: EventType.info,
    title: "Breakthrough in Quantum Computing Achieved",
    text: "Scientists have achieved a major breakthrough in quantum computing, unlocking unprecedented processing power. This advancement has the potential to revolutionize industries and solve complex problems at an unprecedented speed.",
  },
  {
    type: EventType.info,
    title: "New Species Discovered in Unexplored Rainforest",
    text: "In a remote rainforest, researchers have discovered a new species previously unknown to science. This finding highlights the importance of preserving biodiversity and protecting our planet's ecosystems.",
  },
  {
    type: EventType.info,
    title: "Global Stock Markets Plummet Amidst Economic Uncertainty",
    text: "Global stock markets experienced a sharp decline due to mounting economic uncertainty. Investors are growing increasingly cautious as trade tensions and geopolitical factors continue to impact market stability.",
  },
  {
    type: EventType.info,
    title: "Record-Breaking Heatwave Sweeps Across Continent",
    text: "A record-breaking heatwave is scorching the continent, with temperatures soaring to unprecedented levels. This extreme weather event raises concerns about the impact of climate change on our planet.",
  },
  {
    type: EventType.info,
    title: "World Leaders Gather for Emergency Summit on Humanitarian Crisis",
    text: "World leaders have convened for an emergency summit to address a pressing humanitarian crisis. The summit aims to find solutions and provide aid to those affected by the ongoing crisis.",
  },
  {
    type: EventType.info,
    title: "Breakthrough in Renewable Energy Storage Technology",
    text: "Scientists have made a significant breakthrough in renewable energy storage technology, paving the way for more efficient and sustainable energy solutions. This development holds promise for a greener future.",
  },
  {
    type: EventType.info,
    title: "New Drug Shows Promise in Cancer Treatment",
    text: "A new drug has shown promising results in early-stage clinical trials, offering hope for improved cancer treatment. This breakthrough brings us closer to finding more effective therapies for patients.",
  },
  {
    type: EventType.info,
    title: "Global Trade Agreement Reached, Boosting Economic Growth",
    text: "After intense negotiations, a global trade agreement has been reached, promoting international cooperation and boosting economic growth. This agreement opens up new opportunities for businesses worldwide.",
  },
  {
    type: EventType.info,
    title: "Major Conservation Effort Saves Endangered Species from Extinction",
    text: "Thanks to a major conservation effort, an endangered species has been saved from the brink of extinction. This success story highlights the importance of conservation efforts in preserving our planet's biodiversity.",
  },

  {
    type: EventType.message,
    title: "Message from German General",
    text: "Our intelligence reports indicate that enemy forces are amassing near our borders. We must prepare for a possible invasion and strengthen our defenses immediately.",
  },
  {
    type: EventType.message,
    title: "Message from French President",
    text: "We have received intelligence that our allies are facing heavy casualties on the Eastern Front. We must provide them with additional support to turn the tide of the war.",
  },
  {
    type: EventType.message,
    title: "Message from British Minister of Defense",
    text: "Our naval fleet has intercepted enemy communications revealing plans for a surprise attack. We must reinforce our coastal defenses and prepare for an imminent assault.",
  },
  {
    type: EventType.message,
    title: "Message from Soviet General",
    text: "Our spies have uncovered a secret enemy weapon development facility. We must launch a covert operation to sabotage their progress and gain the upper hand in the war.",
  },
  {
    type: EventType.message,
    title: "Message from Italian Prime Minister",
    text: "Our economy is suffering due to the war effort. We must explore new trade agreements and secure resources to support our troops and maintain stability at home.",
  },
  {
    type: EventType.message,
    title: "Message from Japanese Admiral",
    text: "Our air force has successfully destroyed a key enemy supply route. This disruption will weaken their forces and give us an advantage in the upcoming battles.",
  },
  {
    type: EventType.message,
    title: "Message from American General",
    text: "Our intelligence suggests that the enemy is planning a major offensive in the coming weeks. We must reinforce our troops and coordinate with our allies to repel their advance.",
  },
  {
    type: EventType.message,
    title: "Message from Chinese President",
    text: "Our forces have successfully liberated a strategic city from enemy control. This victory boosts morale and strengthens our position in the region.",
  },
  {
    type: EventType.message,
    title: "Message from Australian Minister of Defense",
    text: "Our troops have encountered fierce resistance in the latest offensive. We must provide them with additional reinforcements and supplies to sustain their momentum.",
  },
  {
    type: EventType.message,
    title: "Message from Canadian General",
    text: "Our intelligence indicates that enemy spies have infiltrated our ranks. We must enhance our counterintelligence efforts to protect our plans and ensure the success of our operations.",
  },
  {
    type: EventType.info,
    title: "Breakthrough in Artificial Intelligence Research",
    text: "Researchers have made a groundbreaking discovery in artificial intelligence, advancing the field's capabilities and potential applications. This development has the potential to revolutionize various industries and improve everyday life.",
  },
  {
    type: EventType.info,
    title: "New Vaccine Shows Promise in Preventing Infectious Disease",
    text: "A new vaccine has shown promising results in preventing a highly infectious disease. This breakthrough brings hope for controlling the spread of the disease and protecting public health.",
  },
  {
    type: EventType.info,
    title: "International Space Mission Successfully Launches",
    text: "An international space mission has successfully launched, marking a significant milestone in space exploration. This collaborative effort aims to expand our understanding of the universe and push the boundaries of human knowledge.",
  },
  {
    type: EventType.info,
    title: "Record-Breaking Athlete Sets New World Record",
    text: "A record-breaking athlete has set a new world record in their respective sport, showcasing exceptional skill and determination. This achievement inspires aspiring athletes and pushes the limits of human performance.",
  },
  {
    type: EventType.info,
    title: "New Technology Enables Breakthrough in Renewable Energy Generation",
    text: "A new technology has enabled a breakthrough in renewable energy generation, making it more efficient and accessible. This advancement contributes to the transition towards a sustainable and greener energy future.",
  },
  {
    type: EventType.info,
    title: "Global Effort Launched to Combat Plastic Pollution",
    text: "A global effort has been launched to combat plastic pollution and reduce its impact on the environment. This initiative aims to raise awareness, implement sustainable practices, and protect marine ecosystems.",
  },
  {
    type: EventType.info,
    title: "Scientific Study Reveals New Insights into Climate Change",
    text: "A scientific study has revealed new insights into the causes and effects of climate change, providing valuable information for policymakers and environmentalists. This research emphasizes the urgency of taking action to mitigate climate change.",
  },
  {
    type: EventType.info,
    title: "New Treatment Breakthrough for Alzheimer's Disease",
    text: "A new treatment breakthrough has been discovered for Alzheimer's disease, offering hope for patients and their families. This advancement brings us closer to finding a cure for this debilitating condition.",
  },
  {
    type: EventType.info,
    title:
      "International Collaboration Leads to Breakthrough in Cancer Research",
    text: "International collaboration among scientists has led to a breakthrough in cancer research, uncovering new treatment options and improving patient outcomes. This collaborative effort accelerates progress in the fight against cancer.",
  },
  {
    type: EventType.info,
    title: "Major Infrastructure Project Approved to Improve Transportation",
    text: "A major infrastructure project has been approved to improve transportation systems, enhancing connectivity and efficiency. This investment in infrastructure benefits both the economy and the quality of life for citizens.",
  },
  {
    type: EventType.message,
    title: "Message from United Nations Secretary-General",
    text: "The United Nations calls for immediate action to address the humanitarian crisis unfolding in a conflict-stricken region. Urgent aid and diplomatic efforts are needed to alleviate suffering and restore stability.",
  },
  {
    type: EventType.message,
    title: "Message from Indian Prime Minister",
    text: "Our country is facing a severe drought, threatening agricultural production and livelihoods. We must implement water conservation measures and provide support to affected communities.",
  },
  {
    type: EventType.message,
    title: "Message from Brazilian President",
    text: "Illegal deforestation rates in the Amazon rainforest have reached alarming levels. We must strengthen environmental protection measures and combat illegal activities to preserve this vital ecosystem.",
  },
  {
    type: EventType.message,
    title: "Message from South Korean Defense Minister",
    text: "Our intelligence indicates increased military activity from a neighboring country. We must remain vigilant and ensure the readiness of our armed forces to protect our national security.",
  },
  {
    type: EventType.message,
    title: "Message from Mexican President",
    text: "Our government is implementing comprehensive reforms to address corruption and promote transparency. These measures aim to strengthen our institutions and restore public trust.",
  },
  {
    type: EventType.message,
    title: "Message from Israeli Prime Minister",
    text: "Our intelligence agencies have uncovered a terrorist plot targeting major cities. We must enhance security measures and coordinate with international partners to prevent any potential attacks.",
  },
  {
    type: EventType.message,
    title: "Message from Nigerian President",
    text: "Our country is facing a humanitarian crisis due to ongoing conflict and displacement. We appeal to the international community for assistance in providing aid and support to affected populations.",
  },
  {
    type: EventType.message,
    title: "Message from Argentinean Minister of Economy",
    text: "Our government is implementing economic reforms to stabilize the country's financial situation and attract foreign investment. These measures aim to stimulate economic growth and create new opportunities.",
  },
  {
    type: EventType.message,
    title: "Message from Egyptian General",
    text: "Our military forces have successfully neutralized a terrorist cell, disrupting their plans and ensuring the safety of our citizens. We remain committed to combating terrorism and maintaining national security.",
  },
  {
    type: EventType.message,
    title: "Message from Canadian Prime Minister",
    text: "Our government is investing in renewable energy infrastructure to reduce greenhouse gas emissions and combat climate change. These initiatives contribute to a sustainable and greener future for our country.",
  },
];
