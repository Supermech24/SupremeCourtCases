'use client';
import Image from "next/image";
import Link from "next/link";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const supremeCourtCases = [
  { 
    id: 1, 
    name: "Marbury v. Madison", 
    year: 1803, 
    description: "Established the principle of judicial review in the U.S., allowing the Supreme court to nullify acts of other branches of government that violate the Consitution.",
    issue: "Do the Courts have the right to determine constitutionality of laws/actions?",
    ruling: "4-0",
    longDescription: "Focusing on Madison’s refusal to deliver commissions to appointed judges, this case established the principle of judicial review, meaning that the Supreme Court could nullify acts of the Legislative or Executive branch if they deemed any law or action passed by them unconstitutional. Prior to this decision, the Judical branch was considered the weakest branch of government, this strengthened them greatly and helped solidify the “checks and balances” system in the Federal Government. This decision has no effect on the individual liberties of the citizens.",
    charDesc1: "William Marbury was a successful American businessman and appointed Federal judge who was the plaintiff in this case. He sued Madison for not delivering his commission.",
    charDesc2: "James Madison was one of America’s founding fathers, and after this case he became President for 2 terms. Madison was secretary of State at the time, and refused to deliver commissions to judges appointed by the previous President.",
    img1: "https://en.wikipedia.org/wiki/William_Marbury",
    img2: "https://www.whitehouse.gov/about-the-white-house/presidents/james-madison/",
    libertyRank: 50,
    historicContext: "This decision took place during the early days of the U.S. government less than 30 years after gaining independence, so it was one of the decisions that shaped the role of the judicial branch for years to come.",
    movement: "Federal Government",
  },
  { 
    id: 2, 
    name: "McCulloch v. Maryland", 
    year: 1819, 
    description: "Confirmed the supremacy of the national over state government, establishing that the state could not tax the national bank.",
    issue: "Can a state tax a federal institution?",
    ruling: "7-0",
    longDescription: "This case upheld that states could not tax the federal bank, which once again confirmed the supremacy of the national government over state governments. The ruling established that the “Necessary and Proper” clause in the Constitution granted the federal government implied powers necessary for exercising the enumerated powers. This case did not affect the individual liberties of citizens.",
    charDesc1: "James McCulloch was a federal cashier who worked in the Baltimore branch of the US National Bank and refused to pay the taxes imposed by the state.",
    charDesc2: "The State of Maryland sued James McCulloch for refusing to pay taxes on behalf of the US National Bank.",
    img1: "https://www.findagrave.com/memorial/73098651/james-william-mcculloch",
    img2: "https://en.wikipedia.org/wiki/Flag_of_Maryland",
    libertyRank: 50,
    historicContext: "After the War of 1812, the United States was in economic trouble, so the federal government established a national bank. The bank was notorious for calling in loans it had made to states, causing many states to dislike the bank. As a result, many states passed laws and taxes against the bank.",
    movement: "Federal Government",
  },
  { 
    id: 3, 
    name: "Dred Scott v. Sandford", 
    year: 1857, 
    description: "Held that African Americans, whether enslaved or free, could not be American citizens and therefore had no standing to sue in federal court.",
    issue: "Can an enslaved person become free by residing in a free state?",
    ruling: "2-7",
    longDescription: "Widely regarded as the worst decision in Supreme Court history, this decision held that African Americans, enslaved or free, could not be American citizens and therefore had no standing to sue in federal court and that the federal government couldn’t regulate slavery in the federal territories acquired after the creation of the United States. This decision also had a huge dehumanizing effect on African Americans, and also allowed African Americans in free states, even freedmen, to be captured and brought back into slavery. This decision had a huge negative effect on the individual liberties of Black Americans.",
    charDesc1: "Dred Scott was an enslaved African American man who was brought into the Wisconsin territory and lived there for four years. He sued for his freedom because slavery was outlawed in Wisconsin.",
    charDesc2: "John F. A. Sanford, the brother of Dred Scott’s owner, was the defendant in this case.",
    img1: "http://www.civilwarmo.org/educators/resources/info-sheets/dred-scott-0",
    img2: "https://hd.housedivided.dickinson.edu/node/22012",
    libertyRank: 0,
    historicContext: "This decision was made during a time of extreme racial tensions, only 4 years before the Civil War, when many enslaved people were attempting to flee captivity into a free state, and this decision essentially made it so that nowhere was safe for them. ",
    movement: "Black Freedom Movement",
  },
  { 
    id: 4, 
    name: "Plessy v. Ferguson", 
    year: 1896, 
    description: "Upheld that segregation of public facilities was legal as long as quality was the same, an idea that came to be known as 'separate but equal'.",
    issue: "Does segregation violate the Equal Protection Clause?",
    ruling: "1-7",
    longDescription: "The court ruled that segregation does not violate the equal protection clause, and that the racial segregation of public facilities was legal as long as quality of the facilities was the same. This case caused a huge negative change in liberty for the African-American population, who could only use black public facilities, which were often funded less by the government. This decision was overturned in 1954 by Brown v. Board of Education.",
    charDesc1: "Homer Plessy was an activist who purchased a “whites only” train ticket in a purposeful act of civil disobedience to challenge the segregation of the South. He was arrested by a detective and brought his case all the way to the Supreme Court.",
    charDesc2: "John Ferguson was the defendant in the Plessy v. Ferguson case, he was a judge from Louisiana who ruled against Plessy’s case before it was at the Supreme Court.",
    img1: "https://www.blackpast.org/african-american-history/plessy-homer-1863-1925/",
    img2: "https://www.findagrave.com/memorial/11894037/john_howard-ferguson",
    libertyRank: 0,
    historicContext: "This Supreme Court decision took place in the post-Reconstruction America, which was a period of heavy racial discrimination in the South. Many member of the Supreme Court were racist, as revealed by the 7-1 decision.",
    movement: "Black Freedom Movement",
  },
  { 
    id: 5, 
    name: "Schenck v. United States", 
    year: 1919, 
    description: "Concluded that citizens who distributed anti-draft flyers to draft-age men, urging resistance to induction, could be convicted of an attempt to obstruct the draft, a criminal offense.",
    issue: "Does the Espionage Act violate the First Amendment?",
    ruling: "0-9",
    longDescription: "This decision concluded that citizens who distributed anti-draft flyers to draft-age men, urging resistance to induction, could be convicted of an attempt to obstruct the draft, a criminal offense. This established the principle of “clear and present danger,” where a person's 1st amendment rights could be limited if the speech caused a clear and present danger. This decision negatively affected individual liberty because it made some speech illegal, as long as it caused clear and present danger. This case was mostly overturned by Brandenburg v. Ohio",
    charDesc1: "Charles Schenck was a socialist and anti-draft activist who distributed flyers to men. He was then convicted as a criminal for this act and sued the US for obstructing his 1st amendment rights.",
    charDesc2: "The United States was the defendant in the case, sued by Charles Schenck for obstruction of his 1st amendment rights.",
    img1: "https://njdigitalhistory.org/1919/schenck-v-united-states/",
    img2: "https://en.wikipedia.org/wiki/Flag_of_the_United_States",
    libertyRank: 15,
    historicContext: "This decision occurred during the United States’ involvement in World War I when the Draft was in full force, at a time when many people opposed the Draft.",
    movement: "Federal Government",
  },
  { 
    id: 6, 
    name: "Brown v. Board of Education", 
    year: 1954, 
    description: "Declared state laws establishing separate public schools for black and white students to be unconstitutional, overturning Plessy v. Ferguson.",
    issue: "Does school segregation violate the Equal Protection Clause?",
    ruling: "9-0",
    longDescription: "This decision declared all state laws segregating public schools of black and white students unconstitutional, overturning Plessy v. Ferguson, and marking a significant victory in the fight against racial segregation. However, the decision by the Supreme Court ordered the states to desegregate their schools “with all deliberate speed,” so many states did nothing for years to come. Overall, this decision had a large positive effect on individual liberties, although it did restrict the rights of where parents could send their kids to school.",
    charDesc1: "Oliver Brown tried to enroll his daughter into a white Topeka public school, but she was rejected, Brown then filed a lawsuit against the school board, alleging that their segregation policy was unconstitutional.",
    charDesc2: "The Defendant in the case was the Topeka Board of Education, which rejected Oliver Brown’s daughter from a white school on the basis of race.",
    img1: "https://www.nps.gov/people/oliver-brown.htm",
    img2: "https://www.visittopeka.com/listing/brown-v-board-of-education-national-historical-park/47/",
    libertyRank: 85,
    historicContext: "This decision occurred during the buildup of the Civil Rights movement and was one of the first major changes that occurred in favor of Civil Rights in the United States.",
    movement: "Black Freedom Movement",
  },
  { 
    id: 7, 
    name: "Cooper v. Aaron", 
    year: 1958, 
    description: "Held that state governments must obey U.S. Supreme Court rulings and enforce the rights guaranteed by the Constitution to all citizens.",
    issue: "Can states choose to ignore federal court rulings?",
    ruling: "0-9",
    longDescription: "This case ruled against a school board in Arkansas requesting a delay of the integration of their school. The more important part of this decision, however, was the precedent that state government must obey the U.S. Supreme Court ruling, in this case, the ruling by Brown v. Board of Education. This decision did not affect the individual liberties of citizens.",
    charDesc1: "William G. Cooper, the defendant in this case, was a member of the board of directors of the Little Rock school district.",
    charDesc2: "John Aaron, among others, was the plaintiff in this case and filed a suit against the Little Rock school district for delaying desegregation.",
    img1: "https://aaregistry.org/story/cooper-v-aaron-ruled/",
    img2: "https://encyclopediaofarkansas.net/entries/aaron-v-cooper-741/",
    libertyRank: 50,
    historicContext: "This ruling took place a few years after Brown v. Board of Education when many schools in Southern states were resisting the court order of integration in this period of heavy racism.",
    movement: "State Government",
  }, 
  { 
    id: 8, 
    name: "Gideon v. Wainwright", 
    year: 1963, 
    description: "Guaranteed the right to an attorney for those who cannot afford one in criminal cases.",
    issue: "Does the Sixth Amendment's right to counsel in criminal cases extend to felony defendants in state courts?",
    ruling: "9-0",
    longDescription: "This case established that the right to an attorney would be granted to everyone regardless of the nature of the alleged crime. This was a great decision to help fix some of the widespread socioeconomic disparity in the US because innocent people who couldn’t afford an attorney would now be less likely to be falsely imprisoned/punished. This decision increased the individual liberties of citizens because access to attorneys became more common.",
    charDesc1: "Clarence Earl Gideon was a poor Florida man who was denied legal counsel after being convicted of breaking and entering, so he was forced to defend himself. After being sentenced to 5 years, he appealed to the Supreme Court for being denied counsel.",
    charDesc2: "Louie L. Wainwright was the secretary of the Florida Department of Corrections and served as the defendant in this case.",
    img1: "https://en.wikipedia.org/wiki/Clarence_Earl_Gideon",
    img2: "https://en.wikipedia.org/wiki/Louie_L._Wainwright",
    libertyRank: 75,
    historicContext: "In this period in American history, along with many other times, unemployment and the wealth gap were at a high, meaning that many people were committing petty crimes for their survival.",
    movement: "Criminal Rights",
  },
  { 
    id: 9, 
    name: "Miranda v. Arizona", 
    year: 1966, 
    description: "Established that the police must inform suspects of their rights before questioning them, including the right to remain silent and the right to an attorney, leading to the creation of 'Miranda rights'.",
    issue: "Do the Fifth Amendment's protection against self-incrimination extend to police interrogation of a suspect?",
    ruling: "5-4",
    longDescription: "In this decision, the Supreme Court ruled that law enforcement must warn a person of their constitutional rights before questioning them, or else their statements wouldn’t be admissible in trial, which was the creation of the famous ‘Miranda rights’. This case had a slight positive effect on the individual liberties of the citizens because anyone who wasn’t aware that they didn’t need to answer the police’s questions would now be able to remain silent without fear of punishment.",
    charDesc1: "Ernesto Miranda was a suspect in a rape case in Arizona, and he wrote a confession which was used against him in court. After he was sentenced to 20 years in jail, he appealed his case on the basis that his rights were not read to him before his confession.",
    charDesc2: "The state of Arizona was the defendant in this case.",
    img1: "https://constitutioncenter.org/blog/the-miranda-warning-is-born-47-years-ago-today",
    img2: "https://en.wikipedia.org/wiki/Flag_of_Arizona",
    libertyRank: 60,
    historicContext: "This case took place in 1966 and was one of the major Supreme Court decisions improving the rights of convicts.",
    movement: "Criminal Rights",
  },
  { 
    id: 10, 
    name: "Loving v. Virginia", 
    year: 1967, 
    description: "Invalidated laws prohibiting interracial marriage, holding that such laws violate the 14th Amendment.",
    issue: "Do laws banning interracial marriage violate the Fourteenth Amendment?",
    ruling: "9-0",
    longDescription: "This decision invalidated laws prohibiting interracial marriage, holding that those laws violated the Equal Protection clause of the 14th Amendment. This decision was an important precedent in cases like Obergefell v. Hodges, which legalized gay marriage. This case had a large effect on individual liberties, because in nationally legalized all interracial marriages.",
    charDesc1: "Richard and Mildred Loving were an interracial married couple in the state of Virginia, who were criminally charged with interracial marriage and were forced to flee the state to avoid jail. Wanting to return to their hometown, they filed a suit that went to the Supreme Court.",
    charDesc2: "The state of Virginia, which had a law prohibiting interracial marriage since 1924, was the defendant in this case.",
    img1: "https://en.wikipedia.org/wiki/Mildred_and_Richard_Loving",
    img2: "https://en.wikipedia.org/wiki/Flag_and_seal_of_Virginia",
    libertyRank: 80,
    historicContext: "This decision occurred during the tail end of the civil rights movement, one of many legal victories against racial discrimination at this time. This was one of the last landmark decisions in the Long Black Freedom Struggle.",
    movement: "Black Freedom Movement",
  },
  { 
    id: 11, 
    name: "Tinker v. Des Moines", 
    year: 1969, 
    description: "Held that students do not lose their First Amendment rights to freedom of speech when they step onto school property as long as the speech is not disruptive.",
    issue: "Does a prohibition against wearing armbands in public school as a form of symbolic protest violate the First Amendment?",
    ruling: "7-2",
    longDescription: "The decision in the case argued that students do not lose their constitutional right to freedom of speech when entering a public school, providing that the speech does not have the potential to cause disruption. Another step in the right direction for ensuring our First Amendment rights, this case had a large effect on our individual liberties.",
    charDesc1: "John Tinker and Mary Beth Tinker were students in the Des Moines School District and decided to wear armbands in protest of the Vietnam War. Both students received detentions, and their case was brought to the Supreme Court.",
    charDesc2: "The Des Moines Independent School District served as the defendant in this case.",
    img1: "https://www.thoughtco.com/tinker-v-des-moines-104968",
    img2: "https://en.wikipedia.org/wiki/Flag_of_Des_Moines,_Iowa",
    libertyRank: 90,
    historicContext: "This case happened during the Vietnam War, at a time when a large percentage of the population opposed the war, and the government was trying to censor the opposition.",
    movement: "Other",
  },
  { 
    id: 12, 
    name: "Roe v. Wade", 
    year: 1973, 
    description: "Legalized abortion nationwide, holding that a woman's right to an abortion is protected by the Fourteenth Amendment.",
    issue: "Does the Constitution recognize a woman's right to terminate her pregnancy by abortion?",
    ruling: "7-2",
    longDescription: "This decision ruled that a woman's right to choose an abortion was protected under the Fourteenth Amendment. The ruling effectively legalized abortion across the United States and was a significant milestone in women's rights. The decision sparked widespread debate and activism, polarizing public opinion greatly. This opinion has a large positive effect on the individual liberties of women, who were now free to choose whether to bear a child or not.",
    charDesc1: "Norma McCorvey, also known as “Jane Roe”, was the mother of 2 children, and didn’t want to have a third. However, she was pregnant, and couldn’t get an abortion under Texas law. Her lawyers filed a lawsuit for her right to an abortion that went to the Supreme Court.",
    charDesc2: "Henry Wade was the district attorney of Dallas County and served as the defendant in this landmark case.",
    img1: "https://en.wikipedia.org/wiki/Norma_McCorvey",
    img2: "https://en.wikipedia.org/wiki/Henry_Wade",
    libertyRank: 100,
    historicContext: "This decision took place amid second-wave feminism when many women’s rights activists were fighting for Equal Rights, and also the choice to live however they wanted, free from family responsibilities.",
    movement: "Womens Rights",
  },
  { 
    id: 13, 
    name: "Regents of the University of California v. Bakke", 
    year: 1978, 
    description: "Ruled that while affirmative action programs are constitutional, a university's use of racial quotas in its admissions process is not.",
    issue: "Do racial quotas in university admissions violate the Equal Protection Clause?",
    ruling: "1-8",
    longDescription: "This landmark case addressed the complexities of affirmative action programs within university admissions. The Supreme Court's decision struck down the use of explicit racial quotas but legalized affirmative action programs that consider race as one factor among many. This decision had no clear effect on the individual liberties of citizens.",
    charDesc1: "The Regents of the University of California, who rejected Bakke from their school, served as the defendant in the case.",
    charDesc2: "Allan Bakke, a white applicant, sued UC Davis after his admission was twice rejected while other positions were reserved for qualified minority candidates.",
    img1: "https://en.wikipedia.org/wiki/Regents_of_the_University_of_California",
    img2: "https://www.telegram.com/story/news/local/north/2007/06/24/history-lessons-bakke-decision/52866705007/",
    libertyRank: 50,
    historicContext: "To fix the issue of representation in their schools, specifically a lack of Black students, many universities had racial quotas to ensure that they reached a certain number of students from each minority at this time.",
    movement: "Other",
  },
  {
    id: 14, 
    name: "Rostker v. Goldberg", 
    year: 1981, 
    description: "Held that women were not 'similarly situated' for draft registration, essentially allowing the military to discriminate based on sex.",
    issue: "Do the gender distinctions in the military violate the Due Process Clause?",
    ruling: "6-3",
    longDescription: "This case decided that only requiring men to register for the draft was constitutional, which basically constitutionalized discrimination on the basis of sex in the military. It is difficult to decide what kind of effect this decision had on individual liberty. Although it did make a distinction between men and women in the military, it also made it so that women could choose whether to register for the draft, which could be seen as an increase of individual liberty.",
    charDesc1: "Bernard D. Rostker was the director of the United State Selective Servive System (the draft) in 1981, and served as the defendant.",
    charDesc2: "Robert L. Goldberg was an attorney who challenged the Military Selective Service Act as a gender distinction, and served as the plaintiff in this case.",
    img1: "https://en.wikipedia.org/wiki/Bernard_D._Rostker",
    img2: "https://www.acerislaw.com/what-do-arbitration-lawyers-do/",
    libertyRank: 40,
    historicContext: "The Military Selective Service Act of 1948 excluded women from the mandatory draft, but in 1975 the mandatory draft registration was discontinued. After the Soviet invasion of Afghanistan in 1980, the mandatory registration continued, so the issue had to be reconsidered.",
    movement: "Womens Rights",
  },
  { 
    id: 15, 
    name: "Texas v. Johnson", 
    year: 1989, 
    description: "Held that burning the American flag is protected by the First Amendment's right to free speech, sparking significant controversy about the limits of free expression.",
    issue: "Is the desecration of the American flag a form of speech that is protected under the First Amendment?",
    ruling: "4-5",
    longDescription: "This decision ruled that the burning of the American flag as a form of political protest is protected speech. The Supreme Court's decision emphasized that the government can’t prohibit the expression of an idea simply because society finds the idea offensive. The case increased the individual liberties of citizens, broadening the scope of the First Amendment.",
    charDesc1: "The state of Texas was the defendant in this case, defending the constitutionality of its law prohibiting the desecration of the flag.",
    charDesc2: "Gregory Lee Johnson was an activist who burned an American flag outside of the convention center where the 1984 Republican National Convention was being held, resulting in his arrest under Texas law prohibiting flag desecration.",
    img1: "https://www.britannica.com/topic/flag-of-Texas",
    img2: "https://www.abajournal.com/magazine/article/flag_burning_law_scotus_1984",
    libertyRank: 75,
    historicContext: "Many people were using flag desecration as a form of protest, and it was an effective way of drawing attention to an issue, but at this time 48/50 states had laws prohibiting it.",
    movement: "Other",
  },
  { 
    id: 16, 
    name: "Obergefell v. Hodges", 
    year: 2015, 
    description: "Legalized same-sex marriage nationwide, ruling that the denial of marriage licenses to same-sex couples violates the the Fourteenth Amendment.",
    issue: "Does the Fourteenth Amendment require states to grant and recognize same-sex marriages?",
    ruling: "5-4",
    longDescription: "This ruling established that the right to marry is guaranteed to same-sex couples under the Equal Protection clause of the Fourteenth Amendment. The decision was a historic victory for the LGBTQ+ rights movement, and It marked a large positive change in liberty for same-sex couples, who could now legally marry, which had been denied to them for too long.",
    charDesc1: "James Obergefell is a gay civil rights activist who sued the state of Ohio for its laws prohibiting same-sex marriage. He won the case in Ohio, but the state appealed to the Supreme Court.",
    charDesc2: "Richard Hodges is the director of the Ohio Department of Health, and he served as the defendant in the case.",
    img1: "https://en.wikipedia.org/wiki/Jim_Obergefell",
    img2: "https://nhd.org/en/team/richard-hodges/",
    libertyRank: 100,
    historicContext: "With many movements like the Women’s Rights and Black Freedom Struggle achieving major victories, the LGBTQ+ movement began to take hold in the 21st century, and continues in the modern day.",
    movement: "LGBTQ+ Rights",
  },
];
export default function Home({params}) {
  const caseId = params.caseId;
  const specificCase = supremeCourtCases.find(caseItem => caseItem.id.toString() === caseId);
  let caseName = specificCase.name;
  let parts = caseName.split(" v. ");
  let plaintiff = parts[0];
  let defendant = parts[1];
  let plaintiffLink = specificCase.img1;
  let defendantLink = specificCase.img2;

  let plaintiffRuling = parseInt(specificCase.ruling.charAt(0), 10);
  let defendantRuling = parseInt(specificCase.ruling.charAt(2), 10);

  let plaintiffEmoji = plaintiffRuling > defendantRuling ? "👑" : "🙅";
  let defendantEmoji = defendantRuling > plaintiffRuling ? "👑" : "🙅";
  return (
    <div id="main-page">

      <div id="top-bar" className="flex justify-between items-center mb-4">
          <div id="home-icon">
            <Link href="/" passHref>
              <Image src="/images/home-icon.png" alt="Home" width={25} height={25} />
            </Link>
          </div>
         <div id="title-text">Supreme Court Cases</div>
          <div id="info-icon">
            <Link href="/info" passHref>
                <Image src="/images/info-icon.png" alt="Info" width={25} height={25} />
            </Link>
          </div>
        </div>


      <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>

        <div id="title">
          Issue: {specificCase.issue}
        </div>


        <div className="text-box row">
          <div id="position-box">
            <div id="title-big">
              {specificCase.ruling.charAt(0)}
            </div>
            <div id="title">
              {plaintiff} {plaintiffEmoji}
            </div>
            <div id="center">
              <a href={plaintiffLink} target="_blank" rel="noopener noreferrer">
                <Image src={`/images/${plaintiff}.png`} alt={plaintiff} width={200} height={200} />
              </a>
            </div>
            <div id="center">
              {specificCase.charDesc1}
            </div>
          </div>

          <div style={{width:'30%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} id="title">
            V.
          </div>

          <div id="position-box">
            <div id="title-big">
              {specificCase.ruling.charAt(2)}
            </div>
            <div id="title">
              {defendant} {defendantEmoji}
            </div>
            <div id="center">
              <a href={defendantLink} target="_blank" rel="noopener noreferrer">
                <Image src={`/images/${defendant}.png`} alt={defendant} width={200} height={200} />
              </a>
            </div>
            <div id="center">
              {specificCase.charDesc2}
            </div> 
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <div className="text-box column">
            <div id="title">
              Historical Context {" ("}{specificCase.year}{")"}
            </div>
            <div>
              {specificCase.historicContext}
            </div>
          </div>
          <div className="text-box column">
            <div id="title">
              Outcome
            </div>
            <div>
              {specificCase.longDescription}
            </div>
          </div>
        </div>
        
        <div className="text-box">
          <div id="title">
            Liberty Ranking:
          </div>
          <div style = {{width:"80%"}}>
            <div id="emoji-box">
              <div>
                ⛓️
              </div>
              <div>
                🦅
              </div>
            </div>
            <Slider defaultValue={specificCase.libertyRank} disabled={false} />
          </div>
        </div>

      </div>
    </div>
  );
}
