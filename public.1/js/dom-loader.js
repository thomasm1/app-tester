var secretButton = document.querySelector('#secret-button'); // ME
var secretParagraph = document.querySelector('#secret-paragraph');

var secretButtonMP = document.querySelector('#secret-buttonMP'); // MY PHILOSOPHY (dailytech mission)
var secretParagraphMP = document.querySelector('#secret-paragraphMP');

var secretButtonMPB = document.querySelector('#secret-buttonMPB'); // MY PHILOSOPHY BLOG
var secretParagraphMPB = document.querySelector('#secret-paragraphMPB');
///////////////////////////////// 
var showSecret = false; 
var showSecretMP = false; 
var showSecretMPB = false;
/////////////////////////////// 
secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

secretButtonMP.addEventListener('click', toggleSecretStateMP);
updateSecretParagraphMP();

secretButtonMPB.addEventListener('click', toggleSecretStateMPB); 
updateSecretParagraphMPB();  
/////////////////////////////// 
function toggleSecretState() { 
    showSecret = !showSecret; 
    updateSecretParagraph(); 
    updateSecretButton()  
}  
function toggleSecretStateMP() { 
    showSecretMP = !showSecretMP; 
    updateSecretParagraphMP(); 
    updateSecretButtonMP() 
}0
  
function toggleSecretStateMPB() { 
    showSecretMPB = !showSecretMPB; 
    updateSecretParagraphMPB(); 
    updateSecretButtonMPB() 
} 
/////////////////////////////// 
function updateSecretButton() { 
    if (showSecret) { 
        secretButton.textContent = 'About Thomas'; // GOES BACK TO DEFAULT
    } else { 
        secretButton.textContent = ' Thomas M. Maestas'; // TOGGLE OPEN
    } 
}

function updateSecretButtonMP() { 
    if (showSecretMP) { 
        secretButtonMP.innerHTML = 'DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; MISSION &nbsp; STATEMENT'; // GOES BACK TO DEFAULT
        secretButtonMP.style.fontFamily = 'Monoton'; 
    } else { 
        secretButtonMP.innerHTML = 'DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; MISSION  &nbsp; STATEMENT '; 
        secretButtonMP.style.fontFamily = 'Monoton'; 
    } 
}
  
function updateSecretButtonMPB() { 
    if (showSecretMPB) { 
        secretButtonMPB.innerHTML = 'DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; BLOG &nbsp;&nbsp;  ARCHIVES'; // GOES BACK TO DEFAULT
        secretButtonMP.style.fontFamily = 'Monoton'; 
    } else { 
        secretButtonMPB.innerHTML = 'OUR  &nbsp;&nbsp;  DAILY &nbsp;&nbsp;  TECH &nbsp;&nbsp; FEBRUARY ';
        secretButtonMP.style.fontFamily = 'Monoton';  
    } 
}  
/////////////////////////////// 
function updateSecretParagraph() { 
    if (showSecret) { 
        secretParagraph.style.display = 'block'; 
        secretParagraph.style.fontFamily = 'Roboto'; 
        secretParagraph.style.backgroundColor = 'steelblue'; 
        secretParagraph.style.color = 'aliceblue'; 
        secretParagraph.style.textAlign = 'left'; 
        secretParagraph.innerHTML = `<div   ><h5 style="text-align:center">Hello, I'm Thomas, Thank you for  visiting my tech blog.</h5>
        <p class="firstparagraph">   Technology shapes much of my life, and in many respects it frames my future plans! <br />
        Technology is integral to my professional, academic, and enterprising endeavors, 
        and I hope to share helpful knowledge from what I've learned along the journey. Besides, 
        I love to chime in about so many topics of the Age... hope you enjoy!

       </p><p  class="firstparagraph"
        My consulting services focus on latest technology with a Master's level data analysis methodology.   My data analysis experience has focused on education evaluation in K-12 and higher education. Now, I handle nearly all domains of data analysis. I focus on web-app design and development, specializing in data visualization with JavaScript and Python programming language.<br /><br /> 
                   
   </p>
   <ul class="list-unstyled list-spaced left">
                                     <li> Thomas Provides Contractual Services and Consulting for Big &amp; Small Data and Web solutions since 2016 </span>

                                            <a href="http://www.thomasmaestas.net/profile/index.html"> <span> T M M</span></a>
                                         
                                                 <li>Masters Sociology and Bachelors French History <a href="http://www.unm.edu" target="_blank"> <span>University of New Mexico, Albuquerque</span></a>
                                  
                                
                                  
                                               <li> Social Media
                                                <span><a href="https://www.quora.com" target="_blank">Quora,</a><a href="https://www.historum.com" target="_blank"> Historium, </a><a href="https://www.instagram.com" target="_blank">Instagram, </a><a href="https://www.facebook.com" target="_blank">Facebook, </a><a href="https://www.meetup.com" target="_blank">Meet-Up, </a> Hiking Group, and Alliance Francaise</span>
                             
                                                
                                              <li>Lived in
<a href="https://www.parisinfo.com/" target="_blank">Paris, France</a> and
<a href="http://www.ny.gov/" target="_blank">New York</a> and <a href="https://www.visittheusa.com/state/texas" target="_blank">Texas.
</a>

                                                    </li>
  
                            </ul>
</div>


`;

    } else {

        secretParagraph.style.display = 'none';

    }

}

////////

function updateSecretParagraphMP() {

    if (showSecretMP) {

        secretParagraphMP.style.display = 'block';

        secretParagraphMP.style.fontFamily = 'Roboto';
        secretParagraphMP.style.background = 'RGBA(1,2,2,.2)';
 
        secretParagraphMP.style.textAlign = 'left';
        secretParagraphMP.style.padding = '10px';
        secretParagraphMP.style.color = 'white'; 
        secretParagraphMP.innerHTML = `  
<h4 class="center">Central Tenets of TMM Philosophy  
</h4> 
<h4 class="center">&amp; Our Daily Tech Blog Mission</h4>

<p class="dailytitle" >by Thomas Maestas, MA</p> 
 
 <p class="firstparagraph">Dialectical Materialism<br />I construct my philosophical guidance from a post-Hegelian, Historical-Materialist Philosophy that sees improvement by each iteration of problem-solving. My personal philosophy holds that right actions and true knowledge begin with a final, teleological goal in sight, i.e., the <i>improvement of the Human condition</i>. <br />Post-Hegelian Logic determines a set, then compares the practical <i>thesis</i> of present empirical, perceived conditions against the ideal <i>antithesis</i> toward higher ethical, rational solutions, in order to achieve an improved synthesis, to again be repeated as a new thesis.</p>
<p class="firstparagraph">Sharing<br />    
Given that assumptions about population growth and climate change are true (I believe both are true), then global population well-being is threatened earlier than expected. Therefore, my antithesis holds that  smart, effective <i>Sharing of Burden</i>, Sharing of Power, and <i>Sharing of Resources</i> is critical to meeting the imminent challenges of the two said assumptions.  
</p>
<p class="firstparagraph">Diversity and Equality<br />
American workforce culture too often abides by the ethos of "work harder, not smarter." Americans' <i>work hours</i> are over 150% more than any other nation, yet holding population-scale, GDP, and other factors constant, American workforce is less efficient even with more work hours. (Consider our American Healthcare system, which remains the most expensive, yet least efficient (in percentile GDP  compared to other nations). 
</p>
<p>My dialectical antithesis towards a solution is better workforce integration along gender, racial, and socio-economic lines. Holding other variables constant, a more heterogeneous workforce is a more agile, creative, and efficiently team-oriented workforce--in short, a smarter workforce.
</p>
<p class="quote">1. Quantitative Measure. <br />I argue my antithesis by comparing the gender, racial, and socio-economic heterogeneity of American, British, French, and Japanese workforce, as measured by N=600 sampling method of companies of 50 or few employees, 51-200, and 200+ employees. My conclusion focuses on gender-specific solutions, especially in programming-related fields.</p>
<p class="quote">2. Qualitative Measure. <br />Using <i>Intersectionality Theory</i><sup>2</sup>, I qualitatively argue my antithesis beginning with female inclusion into programming-related fields, which now many still call a "Boys' Club" within the computer-programming sector.  16 interviews to explore the effects of continual, disproportionately male-dominated,  programming-related fields. </p> 

`;

    } else {

        secretParagraphMP.style.display = 'none';

    }

}



function updateSecretParagraphMPB() {

    if (showSecretMPB) {
 
        secretParagraphMPB.style.display = 'block';
        secretParagraphMPB.style.fontFamily = 'Roboto';  
        secretParagraphMPB.style.opacity = '1';
        secretParagraphMPB.style.color = 'darkslategray';
        secretParagraphMPB.innerHTML = ` 
 
                <hr />
             
                <button id="afebtop">
                  <a href="#afebend">PAGE END</a>
                </button>        <hr />
                <h4>POSTS FEBRUARY 2018</h4>   <hr />
                <div id="18-02-10">



                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Musing Blockchain</h5>



                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 10, 2018</h6>
                  <h6>First Blog Post!</h6>






                  <h6 class="chapternumber dailytitle">Why are Sociologists now the Key Players in Data Analysis within the Domain of Blockchain Technologies?</h6>















                  <p class="firstparagraph">First, let me describe that blockchain technologies, i.e. Government contracts, Business contracts, Bitcoin
                    and other cryptocurrencies, all rely on network graph theory, both on the low-level programming technology
                    (peer-to-peer global ip networks) across the spectrum to high-level interfaces for institutional, corporate,
                    individual needs and uses. These blockchain "network" analyses depend on highly variable--and simultaneous--network
                    changes, node changes, and link changes; and, the latter three may arbitrarily change interdependantly
                    or not. </p>



                  <p>Therefore, blockchain technologies must first accomodate complex node variables for contracts (relationships)
                    that include arbitrarily hierarchical mappings and conditional data structures. Secondly, blockchain
                    tech must face analytical challenges that arise from informal practices
                    <sup>1</sup>, by which the organizational nodes (employees) choose to deviate from the employee role's protocol
                    for the sake of efficiency, convenience, company culture, and multiple other levels of human factors.</p>















                  <p> Sociologists Meyer &amp; Rowan's (1977)
                    <i>New Institutionalism</i> explains how employees change practices and decouple
                    <i>actual</i> organizational structure from recorded rules, as a function of organizational size, time,
                    convenience, etc. These continually new, unknown constraints on data must be intimately understood, non-algorithm
                    human understanding
                    <i>by at least one side </i>of the exchange. How do we recognize unwritten, soft rules and behaviors of
                    a bank, a person, or a company's internal bot? </p>



                  <p>The hard sciences domain of Software Engineering, Computer Science, and Mathematics have brilliantly brought
                    the world the blockchain tool, for which the Hard Sciences can only contribute little on how to interface
                    with social needs. Ask yourself, how well do 1,000 top blockchain-related programmers understand the
                    multi-dimensional layers of hierarchical social, corporate, and governmental relationship networks? Well
                    enough to differentiate qualitative meaning in the smart-contract? Fearfully, no.















                  </p>







                  <p>In the past, the layers of abstraction from raw technological tool to societal use was refined, improved,
                    integrated through multiple layers of "middlemen", such as lawyers, corporate lawyers, government institutions,
                    non-governmental, non-profit and for-profit actors. Blockchain technology, by its very nature, erases
                    the middlemen. Suddenly, one programmer, for example, is writing the same healthcare insurance crypto-contract,
                    that last month an entire team of hospital employees spent a month writing; then overseeing and managing
                    different facets of this same thing. </p>



                  <p>However, the crypto-contract, once deployed to the blockchain, auto-manages the rest, forever or for the
                    life of the contract. Therefore, rather than redoing the trials and errors of 200 years' Sociology Network
                    Analysts' research and analytical development. Therefore, medical and other social fields cannot and
                    should not turn to the Hard Sciences for solutions. These Med researchers and developers are already
                    at home, safe within the academic domain of the Raw Sciences of Medical Sociology, Public Health, and
                    so on. The next ten years of blockchain technology can either be defined by unwitting, piecemeal advances,
                    accompanied by frequent, non-improving distastrous crises. Or, the next ten years can follow Sociology's
                    Scientific Method toward a mildly turbulent, but stable and beautiful future. </p>







                  <p>















                    Examples aside, the primacy of the Sociology academic field in the early 21st century quickly becomes apparent on review
                    of the Sociologists' specialization in network theories imbued with symmetrical and asymmetrical relationships,
                    within social networks that change arbitrarily the direction, conditions, and values of those same relationships.
                    We Sociologists deal with real-time, logical and hierarchical network mappings that appear arbitrary,
                    yet are characterized by fixed patterns. </p>



                  <p>No other academic field than sociology has advanced into the details, and endless network rabbit-holes
                    that characterize societal behavior. Not until this second millenial decade could the marriage of Large
                    Number Statistical Theory become consumated with the brilliance of early 1900's Sociological French Network
                    Theories, like Maurice Halbswach's work on the clearly defined network patterns of a society's Collective
                    Memory.
                  </p>







                  <p>







                    No other academic field has collected and refined knowledge on network arbitrariness, such that Economic's "irrational behaviors"
                    and Mathematical "complexity models" do not
                    <i>touch to the bone</i> the meaning, the intersectionality of network analysis, which must incorporate
                    simultaneous node changes (person gets job /or/ does not get job), network changes (All get jobs /or/
                    only 3 of 15 network groups get jobs), and most importantly the
                    <i>relationship</i> changes (all jobs always useful /or/ half of job groups no longer useful) across time
                    and fixed. </p>







                  <p>Fine. So, why is Sociology's network theory so valuable beyond just the network insights gleaned from 19th
                    and 20th centuries' network problems? Follow: European sociology came of age in the analog social era,
                    while </strong> North American Sociology only recently come of age (Quebec in the 1960's [post-1968],
                    U.S. in the 1990's[post-1999], in the digital social era. Therefore, the problem-solving patterns of
                    past sociology are inherently small-data and more qualitative analysis, and thus only Sociology incorporates
                    "human-ness" into the billion rows and columns of quantitative--numbers-only--analysis.</p>







                  <p>For example, Oxford-developed S.I.E.N.A. Software accomplishes this task. SIENA--named for Simulation Investigation
                    for Empirical Network Analysis--software calculates the real-time values, direction, and conditions of
                    each relationship (link) in a network, simultaneously as each node, network, or alter-link changes or
                    is changed; with this, it is possible to isolate directional, conditional
                    <i>influence change</i> in real-time. Real-time sounds impossible, however, the SIENA documentation
                    <sup id="9one">2</sup> describes its program algorithm to the statistical analysis of network data, with the focus on
                    social networks. </p>







                  <p>An easy example to grasp this is the concept of whether a person
                    <i>self-selects</i>(e.g., due to subconscious leanings) into a group and thus matches to fruition the group's
                    behavior with little group influence? Or does this same person join a group and emulates the group's
                    behavior, by the group's influence over time. Sociological network analysis, using Snjder's SIENA software,
                    achieves the impossible with the closed, directed graph networks that characterize blockchain technology.
                    The network graph can be here understood as entire (complete) networks (i.e, the blockchain in its entirety
                    without hard forks), not as personal (egocentered) networks: Using this SIENA model allows for the necessary
                    assumptions that a set of nodes (social actors) is given, and all ties (links) between these nodes are
                    known - except perhaps for a moderate amount of missing data</p>







                  <p>If, and only if, this level of analysis may be achieved, the blockchain development may follow a linear,
                    directed path of maturity with social and world needs. Until that time, that Sociology Network Theorists
                    are called upon, blockchain developers will continue to bat their arms in the dark, stumbling over again
                    the same bugs. Sadly, this semi-opaque future implicates the same fate as those that attempt to use blockchain
                    for their currency, contract, and other societal needs--in this case, the blind will indeed lead the
                    blind. </p>







                  <p class="footnotes">
                    <a href="http://www.journals.uchicago.edu/doi/abs/10.1086/226550" target="_blank" id="9one">1. http://www.journals.uchicago.edu/doi/abs/10.1086/226550</a>
                    <br />







                    <a href="https://www.stats.ox.ac.uk/~snijders/siena/" target="_blank" id="9one">2. https://www.stats.ox.ac.uk/~snijders/siena/</a>







                  </p>







                </div>















                <div id="18-02-11">







                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Web Dev Affairs</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 11, 2018</h6>







                  <h6 class="chapternumber dailytitle">How Can We Best Modularize our App Designs in Order to Achieve the Much Vaunted "Separation of Concerns"?</h6>















                  <p class="firstparagraph">There was once a time for App Developers that our habits followed our inner-philosophers--as an Esteemed
                    Order of Coders--we held ourselves in the highest regard to separate form from function, and style from
                    structural design. Hence, in the early 2000's, a tri-partite, sensible world guided every web coder to
                    abide by The scaffolding of HTML, functionality of JavaScript, and styling of CSS. A decade later, we
                    must throw out this antiquated division of labor within web coding. </p>
                  <p>Library modularization, (think JQuery, JSX, Bootstrap, etc.) within Javascript ES16 reveals that modules
                    and components Must hold together CSS/HTML/JS, part by part. So, if a decade ago three teams handled
                    html, js, css, it is now requisite to divide up 3 teams to 3 components (a team for the carousel widget,
                    a team for the navigation widgets, and
                    <i> each</i> of these component teams
                    <strong>must</strong> be maintained together, not separately, the module's required html, js, css. </p>
                  <p>







                    This means that the new Division of Labour can no longer follow past patterns from 5 years ago. Otherwise, any and all coding
                    will necessarily begin to 'reinvent the wheel.' This is because any module, any library you go to, will
                    <i>already</i> have its HTML pre-configured, JS pre-configured, CSS pre-configured. Thus, attempts to extricate
                    new css from one module to another (or worse yet, sharing css of modules), will only invite eventual
                    misery, almost instantly setting booby traps for the next coders upon arrival.</p>



                  <p>So, where is the creativity? Where is the originality then? It is not gone. It has evolved to a higher
                    level of abstraction, leaving to automation the boring stuff. So, if Vanilla JS is considered malpractice
                    in the modern world, and if ad-hoc JQuery is mocked and scoffed at by React coders, then where is creativity?
                    If yesterday's craft was the hoisting of 15 javascript functions on each page, the New Art of modular
                    coding is akin to a game of Tetris. Part by part, module by module, the modern coder open-source window-browses
                    and window-shops; goes home, and cuts and pastes, and folds and clips, then assembles and hangs to dry.
                    Do Python programmers rewrite each particular module definition? That's absurd. Equally absurd is the
                    javascript programmer that rewrites from scratch their modules. </p>



                  <p>The esteemed Order of JavaScript Coders must wake up, and regain its work-load balance in this new age--an
                    age that each year since 2014, the JavaScript language is rewritten, each year now, in both syntactic
                    sugar and also fundamental structure--especially the importing and exporting of modules. Therefore, philosophical
                    Honor behooves each of us to a higher complexity, and a new commitment to, the "Separation of Concerns."
                    We can allow ourselves a break, thankful for Progress, a progress by which we must
                    <i>Stand on the Shoulders of Giants</i>, and Code-Create! </p>







                </div>















                <div id="18-02-12">
                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Web Dev Affairs</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 12, 2018</h6>







                  <h6 class="chapternumber dailytitle">Mark Zuckerberg's Innocence</h6>















                  <p class="firstparagraph">Facebook Scandals
                    <sup>1</sup> of recent months have demoralized the leadership for a role of misinformation in the Tech Age,
                    however I charge Mark Zuckerberg's innocence
                    <i>not</i> because all of us, as a society, were equally warned. Rather, arbitrary mathematical forces created
                    abnormal, never-before-seen network structural density and symmetry patterns. Technological shifts were
                    so efficient at multiplying and exacerbating misinformation because a curious sociological network phenomenon
                    rendered parts of our daily social learning and acculturating process to network forces out of our own
                    control.
                  </p>







                  <p>A January 2016 American Sociology Association Newsletter Editorial
                    <sup> 2</sup> from Sally T. Hillsman, in which she explained how the social mechanisms of our own misinformation
                    were not entirely within our own control to resist. In fact, the arbitrary (often random) social structural
                    changes from higher social-media hours, create an arbitrary social network structure whose links (in
                    their content and influence) begin to dominate over nodes (each of us). In other words, the sway of trends
                    and opinionated critical thought becomes dominated by the relationships, e.g., the "likes" and "shares",
                    leading to a statistically natural propensity toward homogeneity--a.k.a. group-think. The mechanism is
                    akin to peacefully swimming close and parallel to the coastline, and (due to random coastal floor structure),
                    a rip-tide suddenly ships you far out to sea--a fatal and tragic fate rendering experienced swimmers
                    out of their own control. Same principle with an arbitrary
                    <i>underlying and unseen</i> network structure.</p>
                  <p>Our social network structures always are prone to continual shift, and so the usual "interruptions" that
                    previously stopped this inward shift soon began to disappear. Hillsman explains: </p>







                  <p class="quote">Lies, half-truths, and misinformation spread so rapidly across the public through digital communication
                    that the timespan for thoughtful, effective correction or rebuttal is infinitesimal. Because of confirmation
                    Bias, misinformation and outright lies quickly strengthen preconceived truths or pre-held beliefs that
                    are already hard to change. </p>

                  <p>Therefore, even though we all have been pointedly warned,
                    <i> none of us</i> without advanced sociological analysis skills could understand that a curious network
                    phenomonenon--ultimately driven by some arbitrary mathematical calculation involving size, density, symmetry,
                    conditional influences, and the strength of ties outweighing network nodes. For the reasons of these
                    factors, our social inclinations were
                    <i>out of our control</i> -- no, but really, this time they were! </p>

                  <p>And so, we can learn from Sociology what steps to take in order to counteract random, but risky, network
                    phenomena -- because nobody likes to go for a swim at the beach, and unwittingly get shipped out to sea!







                  </p>







                  <p class="footnotes">







                    1. Wired Magazine
                    <i>Inside the Two Years that Shook Facebook--and the World</i> (February, 2018)
                    <a href="https://www.wired.com/story/inside-facebook-mark-zuckerberg-2-years-of-hell" target="_blank"> Wired Magazine, </a>







                    <br />







                    <br /> 2. ASA
                    <i>Footnotes</i>. (January, 2016)
                    <a href="http://www.asanet.org/footnotes/jan16/index.html" target="_blank">
                      www.asanet.org/footnotes/jan16/</a>















                  </p>











                </div>















                <div id="18-02-13">
                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Sociology Tomorrow!</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 13, 2018</h6>







                  <h6 class="chapternumber dailytitle">The Modern Doctors' Updated Preparation for the Oath
                    <sup>1</sup> of Hippocrates:
                    <br />On the 2015 Social Sciences Modification to the AAMC Medical College Admissions Test (MCAT)</h6>















                  <p class="firstparagraph">Other than college pre-med students, few know the MCAT exam--the gatekeeper of U.S. &amp; Canadian Medical
                    Schools--underwent a major modification in 2015.
                    <sup>2</sup> Much deeper than Biological and Technological updates, major sections were added and/or expanded
                    including the Social, Pyschological and Biological foundations of
                    <i>behavior</i>. Named the
                    <i>Health Systems Science</i>
                    <sup>3</sup>, the American Medical Association's modern, holistic approach articulates outcomes-based measures
                    for healthy living and disease prevention efforts. You could say the AMA is indeed,
                    <i>woke</i>. </p>
                  <p>But really, what's the difference and why would we care? And, who doesn't know that an apple-a-day keeps
                    the doctor away? Dr. Jeffrey Borkan, MD, PHD of Brown University's Warren Alpert Medical School, explains
                    the evident role of all those unnoticed social interactions involved in obtaining and consuming that
                    apple. Further, the spatial and economic
                    <i>availability</i> of that apple also plays a role in keeping the doctor away. Borkan explains:







                  </p>
                  <p class="quote">It's time for us to take a leap forward in educating physicians for the health care delivery models of
                    the future—those that aim to improve not just the health of the individual patient and their family,
                    but also the community and the population.
                    <sup>4</sup>







                  </p>
                  <p>What, then, specifically, are the mechanisms that a community network's aggregated health may be inextricably
                    tied up with
                    <i>our own</i> individual health? In short, they are the sharing of health-promoting resources, timely assistance,
                    health-promoting information channels -- all this, among the countless perks of a healthy social circle!















                  </p>







                  <p class="citations">















                    1.
                    <a target="_blank" href="http://www.greekmedicine.net/whos_who/The_Hippocratic_Oath.html">The Oath of Hippocrates</a>
                    <br /> 2.
                    <a target="_blank" href="https://students-residents.aamc.org/applying-medical-school/article/changing-mcat-exam/">The 2015 AAMA Changes to the Medical College Admissions Test</a>
                    <br /> 3.
                    <a target="_blank" href="https://www.ama-assn.org/education/teaching-new-content-health-systems-science">American Medical Association's
                      <i>Teaching New Content Health Systems Science</i>
                    </a>
                    <br /> 4.
                    <a target="_blank" href="https://www.ama-assn.org/education/teaching-new-content-health-systems-science">ibid.</a>
                    <br />







                  </p>















                </div>















                <div id="18-02-14">



                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">
                    <s>Web Dev Affairs</s> Sociology Tomorrow!</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 14, 2018</h6>
                  <p style="color:green;">
                    <i>Due to the Tragic Events in Florida, Tech to the Rescue blog Rescheduled to February 16th ...]</i>
                  </p>







                  <h6 class="chapternumber dailytitle">
                    <s>Tech to the Rescue: Secondary health effects of the Fitbit toward health-information sharing channels
                      within a community.</s>
                  </h6>















                  <p class="firstparagraph" style="color:green;">
                    <s>Given that a community network's aggregated health is inextricably, and symmetrically, tied up with
                      <i>our own</i> individual health, app-developers may design activity- and communication-based apps more
                      responsibly, and in touch with modern healthcare recommendations. After all, if the Saintly Mark Zuckerberg's
                      communication- and activity-based app inadvertantly led to novel, and deeply consequential, effects,
                      then ...
                      <br />
                  </p>







                  </s>
                  <span class="alert">* Given the Tragic Events in the School Shooting in Florida, I felt a topic of more gravity was in order
                    ... :(







                  </span>







                  <h6 class="chapternumber">







                    Feb 14, 2018</h6>







                  <h6 class="chapternumber dailytitle">A New Kernel, and the Manifestation of a Two-Hundred Year Problem named
                    <i>Anomie</i>
                  </h6>















                  <p class="firstparagraph">Given the tragic events at a Florida school over Valentine's Day, 2018, who can write about Fitbits? So,
                    thoughts and sympathy for those students today that endured this horror. 19 years after the first-of-its-kind
                    school shooting, we as an American society have not become 'numb' to these events. It hurts as much as
                    it did in 1999.</p>
                  <p> Darn that innocuous Spring day in 1999, when we heard the most absurd news-- students attacked their own
                    colleagues at Colombine? In my blog post from January 10, I wrote that American Sociology, along with
                    Qu&eacute;bec, came of age much later than European Sociology. The past 50 years' social changes and
                    new problems are generally atrributed for the increasing demand for sociological expertise after 1999,
                    after a singular, senseless tragedy of a school shooting--this event, like a small kernel of societal
                    desperation for a solution--led to a flurry of self-professed sociologists &agrave; la Michael Moore's
                    Colombine, and other social-responsibility themed social consciousness. So far, only mutually incompatible
                    solutions. The problem, however, is not new, only the manifestation of it.</p>
                  <p>Suicide rates in 19th century France, disproportionately high, also served as a symptomatic manifestation
                    of the same problem, called
                    <i>Anomie.</i>
                    <sup>1</sup> The term,
                    <i>Anomie</i>, coined by Emile Durkheim in the late 1800's, captured the sense of instability, cultural
                    and moral relativism that undermined a shared sense of meaning. Suicides, week-after-week, month-after-month?
                    In 1897 France, noone had ever seen it before--at such rates--and people wanted answers. Alas, a kernel
                    of social desperation leading to inquiry.</p>
                  <p>







                    People wanted to know why so many in the population responded negatively to the rapid changes, urbanization (Dreadful factory
                    conditions &agrave; la
                    <i>Taylorism's</i> calculated efficiency) new technologies, i.e. electricity, railroads, steam engines;
                    these created an arbitrarily new world, very suddenly. Suddenly, like trying for the first time a roller-coaster,
                    when all you've ever known has been the carousel. So, we see technology's role for well or for ill, our
                    job is to understand how to dial-in the tech specs necessary to keep society smiling on this roller coaster
                    through another, yet not altogether new, technological thrill-ride.















                  </p>







                  <p>







                    1.
                    <a href="https://www.researchgate.net/publication/228173911_The_Sociology_of_Suicide" target="_blank">1897, Suicide, &Eacute;mile Durkheim.</a>







                  </p>























                </div>



















                <div id="18-02-15">







                  <h5 class="title dailytech">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 15, 2018</h6>







                  <h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card</h6>



                  <h6>



                    <small class="jargon">Tech blockchain jargon alert ahead, with all effort made for clarity! I treat a broad overview of the
                      existing trajectory of blockchain-related micro-economic advancements. I make a technical &amp; contextualizing
                      <abbr title="this link just goes down 5 paragraphs to Feb. 17th">
                        <a href="#18-02-17"> three-part blog series in my Feb. 17-20 posts</a> on the micro-economic horizon of blockchain technologies.</abbr>
                    </small>



                  </h6>



                  <p class="firstparagraph">Has anyone else been underwhelmed by the lack of Bitcoin's daily
                    <i>presence</i>, despite its everpresence at the dinner tables and caf&eacute;s across America. Sure, it's
                    more of a "metropolitan" phenomenon; and sure, it's become an accepted global platform--along with myriad
                    other crypto-currencies, but it's exchange-worthiness remains shrowded, and misunderstood by many. Cryptocurrencies
                    are useful as a vehicle for investment, and yes, there are Bitcoin millionaires due to the currency's
                    rise to fame with last year's increase in value (from $1,000 to ~$20,000) etc., etc. But, so far its
                    contributions, uses, fame are one-sidedly
                    <i>macro-</i>economic. A recent CNET article
                    <sup>1</sup>, among others, documents miniscule (and not improving) percentage of
                    <i>actual</i> use at the "cash-registers" of society.</p>







                  <p>Is there something wrong with such little micro-economic usage? Not at all! According to general sociological
                    <i>Early Adopter</i> theory--based on Everett M. Roger's Diffusion of Innovations
                    <sup>2</sup>--the timeline of the Innovation Adoption Lifecycle is fairly ordinary. That is, the Roger's bell
                    curve ranges from the beginning innovators, to early adopters, early majority, and late majority. However,
                    the blockchain articles always miss the point. Currencies are more of a distraction compared to the genuine
                    usefulness for the every-person, in every-day affairs, on a given day--i.e., micro-economic use.</p>







                  <p>The true value, the kind that makes our lives easier on any given day, and for the every-person, is
                    <i>not</i> the currency, it is the contract, that allows for individualized, targeted sharing of specific
                    information--whether financial, governmental, or any other centralized database. An example is in order
                    before I continue, since we can all relate to the risk of using a credit or debit card, the risk most
                    notably concerning Target store credit card hacks a couple years ago. </p>
                  <p>Suppose a person shops at 3 different retailers, using a different credit card for each. For these 3 transactions,
                    this person had only needed to provide two discrete pieces of information about themselves for each transaction:
                    they prove they have the $27, $200, and $5; and they prove a third party(i.e.,CC or bank)will make that
                    $27, $200, or $5 available, if their client agrees. Instead, for each transaction, they open their
                    <i>entire</i> financial information, and can only hope that law-enforcement will prevent cyber-theft; and
                    if the store's databases are hacked, then tough-luck! </p>
                  <p>Crypto-contracts provide the technology for this individualized, risk-free transaction, rather than for
                    each transaction, providing the generalized information for individual transaction. Highly inefficient!
                    Nobody thinks to walk around with their life-savings in cash, then at the 7-11 store, to open their wad
                    of cash and peel out a bill. The credit card system, blessed as it is, did not previously have technology
                    to avoid this very thing. So, financial institutions have had to rely on the many layers of security,
                    passwords, pins, mothers' maiden names, etc. Then, based on the mathematics behind prime numbers, they
                    hope to keep your money safe in one, centralized spot--with a bright red target on it. </p>
                  <p>Now, the crypto-contract provides this decidedly *micro-economic* experience for the everyday person. And
                    that, my friends, has nothing to do with crypto-currencies. There is no micro-economic value in crypto-currency,
                    instead the crypto-
                    <i>contract</i> is the true, unsung hero, and a hero we will all get to know. [personal opinion - this hero's
                    name is the Ethereum Virtual Machine]. In any case, Crypto-contracts provide this ability to provide
                    pinpointed,
                    <i>specific, targeted information</i> as citizens, too. When we provide our drivers license number, for
                    the sake of renting that car, we provide every aspect of information of ourselves to Hertz. They don't
                    need this. They need to know only and exclusively driving-record related details--not the entire governmental
                    database of information about you!















                  </p>







                  <p>1.
                    <a href="https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/" target="_blank">https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/</a>



                  </p>



                  <p>







                    2.
                    <a href="https://eric.ed.gov/?id=ED065999" target="_blank">Rogers, E. M., & Shoemaker, F. F. (1971). Communication of Innovations; A Cross-Cultural Approach.</a>







                    <br />















                  </p>



                </div>















                <div id="18-02-16">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Web Dev Affairs</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 16, 2018</h6>







                  <h6 class="chapternumber dailytitle"> Tech on the Regret: Unintended, secondary effects of communication- and activity-based app-designs </h6>



























                  <p class="firstparagraph">Given that our app-use is inextricably tied up with our own behavior, activity/communication-based app
                    developers have in the past year accepted (mostly in word) a renewed responsibility. More like resposibility
                    for a multi-faceted power of influence granted to an industry, suddenly, disproportionately great, and
                    <i>semi-arbitrarily related</i> to the designer's intent (and control!). After all, if the Saintly Mark
                    Zuckerberg's activity/communication-based app inadvertantly led to novel, and deeply consequential, effects,
                    then anyone could. </p>
                  <p>After all, who could guess
                    <i>how</i> these app-design effects would affect the users, years later. Who do we think programmers are,
                    sociologists? More specifically, who could know
                    <i>which</i> mundane coding practices, arbitrary app-design--like sharing permissions/features? Sure, everyone
                    deep down knew their company practices yield unfathomable power of influence over the daily habits of
                    cell-users, a.k.a. everyone. The easy part is knowing; the hard part is learning how and why certain
                    app-features lead to behavioral risks.</p>
                  <p>There could be no better example than the Alcoholic faced with an intervention by a loving family longing
                    for change. The alcoholic could be forgiven for past misdeeds, but without actual
                    <i>Acknowledgement</i> of a crisis in direction, which necessitates professional help from social scientists.
                    Therefore, the recent
                    <i>acknowledgments</i> signify something deeper--they signify a humility that app-designers are not sociologists,
                    generally speaking. So, that means hiring sociologists, psychologists, anthropologists for every N
                    <small>th</small> app-coder and software engineer. History can't be rewritten, but it can be interpreted and
                    learned from. The acknowledgment is itself a victory if it induces learning from the raw, social sciences,
                    whose expertise
                    <i>can</i> predict how or why certain "life"-features, practices, and policies often unfold with undue and
                    unintended social consequences. </p>















                  <p>Water under the bridge, but going forward, it is one thing to claim a "renewed sense of remorse", another
                    to acknowledge, learn and change. Like last November
                    <sup>1</sup> when Facebook co-founder Sean Parker confessed certain designs like "social-validation feedback
                    loop" and other app-design intentions, while ignoring potential secondary effects on society. So, the
                    <i>Acknowledgment</i> is the big win here--not so much the remorse!







                  </p>







                  <p>1.
                    <a href="https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/" target="_blank">https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/</a>
                  </p>



                </div>















                <div id="18-02-17">
                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">



                    Feb 17-18, 2018
                    <br /> Weekend



                  </h6>







                  <h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part II:
                    <br />
                    <br />Seven Nuts &amp; Bolts Features of the New Blockchain Micro-Economy
                    <br />



                    <small class="jargon">Tech jargon alert ahead, with all effort made for clarity! Here, I provide a technical &amp; contextualizing
                      addition to my
                      <abbr title="this link just goes up 7 paragraphs to Feb. 15th">
                        <a href="#18-02-15"> February 15th blog post</a>
                      </abbr> on the micro-economic horizon of blockchain technologies. </small>
                  </h6>



                  <p class="firstparagraph">7 Ethereum-based technological features offer us a new world -- a decentralized new world, not dependent
                    on the centralized servers of Instagram, Comcast, T-Mobile, Amazon, etc. With that statement ends general
                    consensus among blockchain experts, pundits, and authors. However, if the current logistical obstacles
                    provide controversy and competing algorithms over sustainability, security, and scalability, then they
                    reveal much more about the general pathway of social uses (and potential effects) than they hide. In
                    my February 15th
                    <a href="#18-02-15">blog</a>, I touched on a few features of micro-economic uses so as to distinguish the more certain aspects
                    of the crypto-contract horizon.</p>



                  <p>
                    <strong>Prologue</strong>



                  </p>



                  <p>So, what are some core features of block-chain technology that affect the quality of our lives, and the
                    <i>productivity</i> of our work as a society of academics, public-sector and private-sector professionals?
                    First, a little background and context before I outline seven blockchain functionalities. The Ethereum
                    blockchain helps distinguish itself--and its blockchain-native language Solidity--from earlier tech,
                    like Bitcoin and other Proof of Work-based blockchains. Ethereum blockchain offers a syntax and programming
                    features, e.g. "looping", "recursion", with the full power of a
                    <i>Turing Complete</i> language--that is, given enough resources, the language can solve any programmable
                    problem. </p>







                  <p>More background and a clarifying metaphor are in order: The Bitcoin blockchain transaction resembles the
                    accounting system of a foos-ball table point rack with a basic calculator glued to the side. In contradistinction,
                    An Ethereum blockchain transaction would resemble a network of computers,
                    <i>which is itself,</i> a computer--hence, the name Ethereum Virtual Machine. This allows for Quickbooks
                    to calculate into a PDF to be sent via an email contract-signing program. Much more useful!</p>







                  <p>Therefore, Ethereum's Blockchain is more than a networked, chained list of blocks, like Bitcoin. The Ethereum
                    blockchain is actually a "Virtual Machine", like a a big networked "home computer". The native language
                    of the blockchain, Solidity, allows for an
                    <i>application binary interface</i>, ABI. So, for example, I can type up an Ethereum contract on my home
                    computer, then directly access by command line the blockchain itself. In layman's terms, the manner that
                    modern-day app, for example Instagram, is a centralized API (Application Programming Interface) that
                    allows one programming system to interact with another, such as Instragram offers a "sharing API" that
                    connects to hardware contacts, thus facitilating communicating with third-party aplications, like sharing
                    your instagram picture to your Facebook account, via your T-Mobile phone's contacts list. This API relationship
                    broadly describes the modern world we live in, wherein a Chryser driving system exchanges API information
                    with your T-Mobile Bluetooth network system, which exchanges API information with your own contact list,
                    and so on, and our lives are made easier. </p>







                  <p>So, are we out of the woods? Has Ethereum solved the blockchain question? Yes, if it were the 1920 pre-relativity
                    days; However, with the advent of quantum computing, potential security vulnerabilities immediately arise.
                    The reason being that digital math uses binary "on/off" calculations, while quantum math implicates a
                    tertiary,
                    <i>qubit</i> "simultaneous states". Therefore, we have now entered the 3rd generation of blockchain technology,
                    both programmable, but also quantum-proof due to mathematical graph features. For example, IOTA's blockchain
                    design utilizes a
                    <i>Winternitz One-Time Signature</i>, by which one's transaction is entered into with a private-key, and
                    the blockchain moreso resembles a "Tangle" of a directed graph, which allows for computational "states".
                    IOTA recently garnered criticism in January 2018 due to an unfortunate crypto-hack, that exposed an apparent
                    vulnerability. In truth, this was a case of user-error because users were
                    <i>re-using</i> their one-time keys, which significantly decreases security to the point that a home computer
                    could crack the code! I choose to not digress further, and quantum computing is not quite advanced enough
                    now to cause damage, but in the future could potentially split the blockchain in two, or other quantum
                    possibilities.



                  </p>



                  </p>



                  <p>In sum, the technical obstacles change each month, however one must not lose sight of the forest for the
                    trees. Social useablity, potential scope and of course unintended consequences have all finally begun
                    to emerge, at least in form, with little difference between the 2nd generation blockchain or the 3rd
                    generation Patrician directed graph blockchain. The underlying principle of the blockchain's micro-economic
                    utiliity through crypto-
                    <i>contracts</i> is the same, as opposed to plain crypto-currency. you know the usual bartering solutions
                    for Supply &amp; Demand leading to Economics Game Theory, etc. This is where we must take our leave of
                    the Hard Sciences of Mathematics, and enter the realm of Sociology, Psychology, Anthropology and Economics.



                  </p>



                  <p>



                  </p>



                </div>







                <div id="18-02-19">
                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">



                    Feb 19, 20189</h6>







                  <h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part III:
                    <br />
                    <br />Seven Features of the New Blockchain Micro-Economy
                    <br />



                    <small class="jargon">Tech jargon alert ahead, with all effort made for clarity! The first 3 of 7 new possibilities thanks
                      to the programmable blockchain.</small>
                  </h6>



                  <p class="firstparagraph">



                    The guiding light through the centuries of scientific paradigms, in the Kuhnian sense
                    <sup id="19-1">1</sup>, have derived from deductive ideas from above - whether priestly or royal decree. Then, the primacy
                    of the
                    <i>Scientific Method</i> from the Renaissance forward--punctuated first by Copernican Heliocentrism, then
                    other Paradigm Shifts--has directed rational and ethical norms in each respective period, e.g. Enlightenment
                    authors of 17th, 18th century. Fast forward to the modern period, wherein the current era's emerging
                    paradigm holds Sharing as a collective-priority and responsibility, then an amazing philosophical moment.
                    <i>Historical Materialism</i>
                    <sup>2</sup> prescribes what is directly here a novel Paradigm Shift by which authority is not derived from
                    governmental, financial sources, but rather the
                    <i>shared</i>societal consensus about cryptographic, mathematical proofs as true authority. Further, the
                    revolutionary shift also innately provides tools for implemention through decentralized, programmable
                    data-sharing. Cryptography has in a sense become a
                    <i>de jure</i> middle-person for identification and verification of property. </p>







                  <p>



                    <strong>I. Protecting rights through immutable records</strong>
                    <br />Inalieable Rights can now be identified and verified by the cryptographic authority of a mathematical
                    proof, rather than exclusively through governmental or financial institutions from above. The modern
                    period also has held this decentralized, individual authority as the
                    <i>a priori</i> starting points for philosophical proofs. Premises about truth begin with the conditions
                    of humankind, not idealogies. In fact, it was the
                    <i>Young Hegelians</i> of early 19th century Vienna &amp; Berlin, who ushered in the Modern Era of Western
                    Philosophy, by laying out Truth as inverted, beginning from the empirical "ground" upward. This "upside-down
                    tree" defines philosophical modernity. Jean-Paul Sartre wrote that the whole of
                    <i>Existentialism</i> and 20th century philsophy is a mere subset, and never escapes Continental Materialism,
                    as argued in Sartre's
                    <i>Search for a Method</i>.
                    <sup>3</sup>
                  </p>



                  <p>All of the Sciences, prodded by this Truth of Empiricism, followed suit through all the tech innovations
                    since Hegel. I'm so surprised by this, because for me, the role of cryptography is shocking on two levels.
                    First, cryptography resemblees philosophy rather than the Empiricism that I had envisioned would govern
                    social rule (Some once thought nuclear sciences held this role--no longer! Mathematics takes the crown.
                    Secondly, I'm still dumbfounded that a Paradigm Shift
                    <i>first</i> offers the tools to fulfill itself? Staggering to consider the arbitrary changes ahead for
                    a society that is provided the tools of social structural change first, but how quite convenient!



                  </p>







                  <p>
                    <strong>II. Bureaucratic Atomization in a True Sharing Economy</strong>
                  </p>



                  <p>It is satisfyingly reassuring to see the good-natured, altruistic efforts among the thousands, upon thousands
                    of open-source volunteers, and blockchain innovators, like Vitalik Buterin author of Ethereum Virtual
                    Machine, whose aims and efforts make staggering progress each quarter. The potential for removing the
                    "middle-person" from the day-to-day, micro-economic "cost of living". This goes for for the exchanging
                    of titles, legal documents, etc. </p>
                  <p>Sharing of Resources is, in my personal opinion, critical to global future--both out of increasing necessity
                    in allocating increasingly limited resources; an arbitrary rearrangement of
                    <i>Social Structure</i> and distribution of its resources. While the exponential population growth looms
                    on the near horizon, a clear, pre-existing solution begins with a focus on
                    <i>smart</i>, effective sharing of resources. The driving principle of sustainability is made convenient
                    by means of blockchain technology, extending for example to local economies, cooperatives, ride-sharing,
                    etc. </p>



                  <p>
                    <strong>III. Removing Double-Dipping from International Remittances </strong>



                  </p>



                  <p>
                    <i>"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take
                      away."



                    </i>



                    <br /> --Antoine de Saint-Exup&eacute;ry, 1939</p>



                  <p>







                    Taxes and tariffs are difficult enough, the double-dipping of the current international remittance system, &aacute; la Western
                    Union, does not reflect the global, sharing Economy of 2018. The existing remittance system (not speaking
                    to
                    <i>centralized</i>, middle-man alternatives like PayPay, etc.)--supposing if I wire $2 Loonie to a Canadian
                    friend's Canadian Bank--requires payments executed through two separate bank transactions in two national
                    payments systems, thus the sending country and receiving country each take a cut. Like everything else--c'est
                    la vie. Or is it? The beauty of Ethereum is that it "talks" well with others and across borders, while
                    Bitcoin remains of little use for micro-transactions that involve semi-basic calculations. The reason
                    being that Bitcoin blockchain language, Script, cannot support loops (while statements, etc.) </p>
                  <p>Currently, both EOS and Ethereum blockchains appear poised for the most financial-friendly blockchain tech.
                  </p>







                  <p>



                    <a href="https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers"
                      target="_blank">1. https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers</a>



                  </p>



                  <p>



                    2.
                    <a href="https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/" target="_blank">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>



                  </p>



                  <p>



                    3.
                    <a href="http://www.bard.edu/library/arendt/pdfs/Sartre-Search.pdf" target="_blank">
                      <i> Search for a Method</i>, Jean-Paul Sartre, 1957</a>.
                    <br />
                    <small>Sartre would later be awarded the Nobel Prize in 1964, but declined it.</small>
                  </p>



                  <p>



                    <a href="https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf" target="_blank">4. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>



                  </p>







                  <p>



                    <a href="https://hbr.org/2017/01/the-truth-about-blockchain" target="_blank">5. Harvard Business Review,
                      <i>The Truth about Blockchain, Feb. 2017. (This is an older article, but very clear &amp; insightful)</i>
                    </a>



                  </p>



                </div>







                <div id="18-02-20">
                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech"></h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">



                    Feb 20, 2019</h6>







                  <h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part IV:
                    <br />
                    <br />Seven Features of the New Blockchain Micro-Economy
                    <br />



                    <small class="jargon">Tech jargon alert ahead, with all effort made for clarity! The 4th through 7th outlined Features of the
                      New Blockchain Micro-Economy</small>
                  </h6>
                  <br />



                  <p class="firstparagraph">I feel that data is one of the more underestimated new commodities of the age. Most visualize data as rows
                    and columns, and at most only non-conditional dynamic data. Data are not so mute! Data, in most object-oriented
                    languages at least, represents
                    <i>functions</i>, conditions, and predicted values. And so, our own behavior, coupled with our networks'
                    behavior, coupled with predictive analytics--this represents a wealth of information beyond our attributed
                    or inherited traits. The programming is
                    <i>in</i> the data, however, citizens have become less and less involved, ceding app by centralized app
                    our own information and ensuring profit to 3rd party marketers. The centralized nature of the internet
                    allows for this, while the new landscape of
                    <i>decentralized applications</i> (DAPP) completely upends this structure of the status quo.



                  </p>







                  <p>
                    <strong>IV. Enabling citizens to own &amp; monetize their data (&amp; protect privacy)</strong>
                    <br /> Ethereum offers a decentralized solution to "owning" one's own data, as data can be decentralized and
                    returned to the individual's control, and
                    <i>profit</i>. As sure as the 19th century's "labor-hour" became commodified to a calculable asset, i.e.
                    property, which
                    <i>another</i> party controls and makes profit; And as sure as the 20th century's data analytics became
                    commodified into calculable assets for another party to take control and make profit; then only now in
                    this 21st century does technology offer a new, more egalitarian path.



                  </p>







                  <p>
                    <strong>V. Ensuring compensation for the Creators of Value
                      <br />
                    </strong>



                    So, how would decentralized innovations of blockchain
                    <i>distributed ledger</i> technology compensate those whose actions, behavior, opinions, friend-networks,
                    artwork, music, videos and other contributions profit the creator?



                  </p>



                  <p>
                    <strong>VI. The Halcyon Age of Transaction-Chain Enterprise</strong>
                  </p>



                  <p class="quote">



                    According to Greek Mythology, the days of eery, noticeable lack of storms have never been interpreted as a period of grace.
                    Moreso,
                    <i>Halcyon</i> tranquility only means a temporary moratorium on the winds and waves, imposed by Aeolus,
                    God of Wind, to protect the nesting eggs of Alcyone, his daughter. </p>



                  <p> If blockchain tech changes how we do research, analysis, and forecasting, as much as it changes international,
                    and cross-industry transactions, then are we faced with a similar dilemma as the "novelty", and double-dealing,
                    of multi-nationals of the 1990s? No, because blockchain renders organizations, even those with a spotty
                    past, into transparent, democratic, efficient, secure and easily scrutinized.



                  </p>



                  <p>



                    After all, without transparent proof, how else would I know my bananas are the "pura vida" Costa Rique&ntilde; ones? More
                    importantly, what was the carbon footprint of that banana's journey from its native soil to my breakfast
                    table? New blockchain companies like
                    <a href="https://www.provenance.org/">Provenance.org</a>,
                    <a href="http://www.skuchain.com/" target="_blank">skuchain</a>,
                    <a href="http://www.blockverify.io/">http://www.blockverify.io/</a> are a few noticeable game-changers. So, for bananas not backed by mathematical
                    proofs, I really have to ask myself, is it
                    <i>really</i> an authentic Fair Trade banana? </p>







                  <p>Transactions are hardly valuable in the products themselves, if removed from the value of the
                    <i>transaction per se</i>. International supply chain transactions, by virtue of a recently possible decentralized,
                    permanent record and monitoring, have begun to make inroads in agriculture, petroleum, pharmaceuticals,
                    food-supply and other multi-stage industries. </p>







                  <p>If corporate and governmental transactions are to be made public--many bearing enterprise or State secrets,
                    then will forecasting also go the way of birds? Possibly. Online platforms like Augur
                    <sup id="20-8">8</sup>are creating global, decentralized prediction markets, in domains like sports betting, financial
                    markets speculation and so forth. Armed with vast, transparent knowledge, the everyday person can now
                    access the whims and power of Aeolus, and forecasting the winds of Fortune.</p>







                  <p>



                    <strong>VII. Reinventing Government &amp; Democracy</strong>
                    <br /> ...to be completed...


                  </p>



                  <p>1.
                    <a href="https://www.provenance.org/" target="_blank">



                      https://www.provenance.org/



                    </a>
                  </p>




                  <p>2.
                    <a href="http://www.skuchain.com/" target="_blank">



                      http://www.skuchain.com/



                    </a>
                  </p>




                  <p>3.
                    <a href="http://www.blockverify.io/" target="_blank">



                      http://www.blockverify.io/



                    </a>
                  </p>





                </div>



                <div id="18-02-21">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Data Analysis Musing</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 21, 2018</h6>







                  <h6 class="chapternumber dailytitle">Facebook-Friendly Third-Generation Data Structures</h6>







                  <p class="firstparagraph">Today, I'm going to write about data structures, and challenges that face Vitalik Buterin and other blockchain
                    architects. ' Now, why in the
                    <i>world</i> would I or anyone else care about ooh, merge sorts, bubble sorts, classificatory trees, and
                    the advent of a third form of data structure? </p>



                  <p>Today, we live in an ever more relational world. With all our technology, we just can't wait to hear the
                    latest gossip about sister Becky's Boyfriend's Brother's Friend that
                    <i>also</i> got to meet Shakira. Gossip to one person is a valuable asset to the data analyst. Because,
                    how else could an algorithm draw simultaneous conclusions about two friends that "liked" the same Samsung
                    VR, and that they are both located near Best Buy. Thanks to classificatorial wisdom of AI &amp; plain
                    machine-learning? </p>



                  <p>These relational queries are simply too difficult for relational, row & column SQL data structures. In
                    fact, many queries are impossible, due to unprescient database schema architectures. Next, with the need
                    to "objectify" data into non-relational objects, rather than an antiquated, rigid row-and-column design.
                    Thus, the second major type of data structure is more flexible and adept in finding these relational
                    queries that are ever more in vogue. However, the crystal-like, pristine non-relational, No-SQL designs
                    quickly turn to spaghetti, and are poor for scalability. Between a rock and a hard place, a third data
                    structure has emerged in recent years.</p>
                  <p>



                    Graph Data Structures
                    <sup>2</sup> allow data queries that had otherwise been impossible to capture in an entity relationship diagram.
                    The ideal example to clarify is the manner that the Swiss banks' accounts were discovered to be hiding
                    vast amounts of hidden taxes, etc. The cover-up was so well-constructed that not until new, graph database
                    queries discovered patterns of money flow
                    <sup>1</sup>:



                  </p>



                  <p class="quote">



                    The data was then turned into a graph format to detect then fine-tune the connections between the nodes. The Swiss Leak held
                    around 60,000 files that contained information about over 100,000 clients in 203 countries, which means
                    that the resulting graph database had more than 275,000 nodes with 400,000 relationships among them.
                  </p>



                  <p class="quote">



                    By being able to easily visualise the networks around clients and accounts, the reporters found many more connections than
                    they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators
                    across the globe.







                  </p>



                  <p>And you thought that plagiarism-detecting software was impressive for complexity! The beauty of this newly
                    available software (even Microsoft jumped on board in recent years) means that sociologists, economists
                    can begin to make better headway in the way that our many interactions become more complex with more
                    data. Remember, in the past ten minutes, more data information was just produced than most of human history!
                    Thus, new and upcoming needs in domains like content management &amp; access control, geo-routing (public
                    transportation), gene sequencing, bio-informatics, and so on. So, as technology takes us forward, and
                    we make our considerations, let's stick by the golden rules of parallel processing, scalability, and,
                    now, graph-network mindedness for the new data structures, and schema, of the Era!



                  </p>



                  <p>1.
                    <a href="https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/" target="_blank">



                      https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/



                    </a>
                  </p>



                  <p>



                    2.
                    <a href="https://neo4j.com/blog/analyzing-panama-papers-neo4j/">By being able to easily visualise the networks around clients and accounts, the reporters found many
                      more connections than they had before, which lead to the Swiss Leaks revelations soon being shared
                      with the public and regulators across the globe.







                    </a>
                    <br />Other major vendors in graph data structures based on Neo4j: OrientDB, ArangoDB, Titan, mongoDB, Complexible
                    Stardog, and Franz AllegroGraph.







                  </p>



                </div>







                <div id="18-02-21">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 22, 2018</h6>







                  <h6 class="chapternumber dailytitle">Languages</h6>







                  <p class="firstparagraph">While I've had blockchain-related topics on the mind lately, it seems I can't escape it as I broach new
                    fields--blockchain is everywhere! Well, I had begun my blog with intentions about the accelerated speed
                    of language and syntax formation, and the curious phenomenon I'd call, for lack of a better word or or
                    my own reading, "declarative-syntax-merging". This involves the curious, and largely unknown, growth
                    of JavaScript scripting language into almost every domain of web apps, data analysis, and even the bounds
                    of
                    <i>Logic</i> itself. Though I won't submit my readers to a history of a language, suffice it to say that,
                    "If a certain algorithm, device, or object is programmable, then it will eventually be programmed in
                    JavaScript."



                  </p>



                  <p>Without getting into technicals, I'll instead use a perfect metaphor--the manner by which English merged
                    with French, beginning with the conquests of William of Normandy, around 1096 onward. Almost a thousand
                    years later, we can see how English grammar inherited it's Anglo-Saxon Linguistic roots, along with the
                    core vocabulary; Then, as English vocabulary moves past the first few thousand core words, e.g. "milk"
                    or "house" from "melche" or "haus", then more than 70% of English Vocabulary is directly inherited from
                    French, e.g. "lactose" or "mansion" from "lait" or "maison".</p>



                  <p>Similarly, the language of the web and original browsers, JavaScript, has similarly morphed into a new
                    language called Solidity, but in only a micro-fraction of English's time. The usual FOMO logic propels
                    coding language use, for example FOMO induced Microsoft's flagship Text Editor, Visual Code, to adopt
                    it years ago.
                    <sup id="22-1">1</sup> The language of Ethereum Blockchain is Solidity, which like the above example, has two parents,
                    one non-legitimate. It is in all respects totally JavaScript, yet with object-oriented elements of C++.
                    For the layperson, let's just say Solidity resembles a "Liger", in it is at it's core JavaScript, yet
                    with increasing sophistication based on C++ logic, its head and torso has begun to resemble the powerful
                    machine-code of C++ ever more. And it is a beautiful, but curious phenomonenon.



                  </p>







                  <p>
                    <a href="http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171">http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171</a>



                  </p>







                </div>











                <div id="18-02-23">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Sociology Tomorrow!</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 23, 2018</h6>







                  <h6 class="chapternumber dailytitle">1.4 Million Reasons for more Women in Tech</h6>

                  <a href="#18-03-08" rel="stylesheet">
                    Blog addressed again March 8, 2018
                  </a>





                  <p class="firstparagraph">1.4 million
                    <i>new</i> jobs by 2020; End over end, year after year, the computer programming industry continues to add
                    another 20% more jobs each year, for the next five years. This is the only field that demand outstrips
                    the supply--and increasingly short supply. So much so, the US Department of Labor forecasts U.S. citizens
                    will be able to fill 39% of those positions; there are not enough Immigration visas (especially in the
                    Trumpian era of isolationism) to make up the rest. </p>



                  <p>



                  </p>



                  <p>So, how is it that only 14% of females in the entire field of cybersecurity? Silicon Valley is, at its
                    best, obscenely one-sided. At Google, only 17% of the company's tech jobs are filled by women. Facebook
                    women staff only 15% of tech jobs, and Twitter? 10% female. The figures on women in computer science
                    across the nation, across the entire industry are not improving, but
                    <i>declining</i>?
                    <sup>1</sup>



                  </p>



                  <p>Of course, we've heard these statistics from any given headline, and in the halls across the university
                    landscape, starting with Women in STEM (Science, Tech, Engineering, Mathematics) programs.
                    <sup>3</sup> Yet, why, with so much money, so many programs, so many non-governmental, non-profit effort?



                  </p>



                  <p>I argue that tech
                    <i>climate
                      <sup id="24-3"></sup>
                    </i> is directly to blame. Who then? Not a person, but principles are to blame. Culture--often defined as
                    shared beliefs, norms, language and behaviors--can hardly be changed, but it can be understood.



                    <br />There is a book, called "Program or be Programmed
                    <sup id="24-4">4</sup>
                  </p>, by which the author explains social consequences of a dichotomized society--between those that manipulate
                  the environment around them, whether automating tasks at work, or simply fixing a simple software bug,
                  by adding a comma. This literacy of the Current Era is akin to the 26-letter alphabet of written sentences
                  and paragraphs, and--not to be taken for granted--is the exclusive form of communication, outside of a
                  100-foot perimeter, up until 150 years ago. Knowledge is not power, the communication of knowledge is power.</p>



                  <p>I argue that today, the power is to program one application programming interface (API) to talk to another
                    API. In other words, the ability to directly communicate with software at the command-line is not now
                    a requisite skill, but promotions would not escape this necessity! So, now reverting back to the subject
                    of women in tech, American leadership is in deep peril without more female insight. I will finish by
                    citing that Ares, the violent, untamed Greek
                    <i>god of war</i>, cannot always drive the Capitalist engine; because She, Athena, the
                    <i>goddess of intelligence</i> represents true strategy!



                    <p>



                      1.
                      <a href="https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html" target="_blank">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>
                    </p>



                    <p>



                      2.
                      <a href="https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages" target="_blank">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>
                    </p>



                    <p>



                      3.
                      <a href="https://www.aauw.org/research/why-so-few/" target="_blank">https://www.aauw.org/research/why-so-few/</a>



                    </p>



                </div>



                <div id="18-02-24">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Web Dev Affairs</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 24-25, 2018
                    <br /> Weekend



                  </h6>







                  <h6 class="chapternumber dailytitle">Joys of Automation</h6>







                  <p class="firstparagraph">







                    While coding up a better shell for this website, I thought it's remarkable how our lives get easier and easier with each
                    passing year of tech. Using JavaScript--the primordial web-coding language--I marvel at the convenience
                    of delegating mundande coding stuff to taskrunners, like
                    <i>Gulp</i>--a programmable package manager that "bundles" up the libraries to be used in the app. It is
                    truly a joy! </p>



                  <p>I write four styling
                    <i>functions</i>, with about 16
                    <i>variables</i> and voil&agrave;! I finish in 3 hours what would have taken me 15 hours, then another 5
                    hours a month for upkeep. Instead, now, it's as though I wind up the clock, and need only periodically
                    check, and perhaps update a variable or two ... Technology. I'm gushing for joy.</p>



                  <p> This was mere JavaScript--with a truly
                    <i>Turing Complete</i>--pan-algorithm status--languages, the possibilities are 100-fold with Python language
                    library collection; this library collection includes NASA modules, mathematical proofs, and limitless
                    uses from web-scraping for unstructured data to an excellent data visualization collection. Sometimes
                    I feel like I'm in the Library of Congress, and better yet because, PIP, the Python package manager acts
                    and automates like a cyborg librarian, for lack of better imagery. </p>



                  <p>I just have so much joy watching a project come to life, and it's even a greater delight if this project
                    comes to life and stays alive, through the joys of automation!



                  </p>



                  </p>



                </div>



                <div id="18-02-26">



                  <h5 class="title dailytech">OUR DAILY TECH</h5>



                  <h5 class="subdailytech">Musing Blockchain</h5>







                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    Feb 26, 2018



                  </h6>







                  <h6 class="chapternumber dailytitle">Cryptocurrency's Cumbersome Carbon Footprint </h6>







                  <p class="firstparagraph">







                    I must confess that on the very day that Our Daily Tech Blog gets an under-the-head make-over for security's sake, I wrote
                    the new formatting file right over today's post. Amazing, and the two occurred nearly simultaneously
                    as I worked on them, their paths crossed and poof, gone! Same platform, and I paid the price! Whether
                    I change my ways is yet to be seen, but I shall continue with my original theme for the day, namely,
                    Sustainability, a.k.a. Carbon Footprint.</p>

                  <p class="quote">Power consumption is one of the major costs of bitcoin mining, as dedicated machines crunch the algorithms
                    that build a record of every single bitcoin transaction and are rewarded with tiny fractions of a bitcoin
                    for their efforts.
                    <sup id="explain">1</sup>

                  </p>

                  <p> Today I have a mild Critique and Praise for the blockchain sustainability problem caused by sky-high electricity
                    bills! Computer algorithms do waste electricity, not like your Widescreen. More electricity is gobbled
                    up by small and large mining operations in nearly every country than small nations!
                    <sup id="electricity">1</sup>. Ethereum, Bitcoin and a handful of other "Proof-of-Work" designs require electricity because
                    the investment in equipment itself is investment, but more importantly, two-way incentivation for mining
                    drives the system, and the scarcity demand through difficulty computations. </p>



                  <p>So, is the electricity consumption really
                    <i>correlated</i> with the value, scarcity, of the currency? Yes. Digiconomist--a cryptocurrency analysis
                    site
                    <sup id="digiconomist">3</sup> estimates
                    <i>each</i>Ethereum transaction represents a 45 Kilowatt-hour of electricity's mining. (A visa credit card
                    transaction is 0.00651 kWh. The entire Ethereum global blockchain could be "using as much as 4.2 Terawatt-hours
                    (tWh), or slightly more than the country of Cyprus
                    <sup id="cyprus">1</sup>." So, electricity comparisons are telling, but how does this relate to its environment impact,
                    sustainability itself?</p>

                  <p>Carbon Footprint, our energy consumption index, can be compared to another element of scarcity, which dictates
                    fluctuations in value: Gold. According to
                    <i>Digiconomist</i>, an average household's Carbon Footprint is about 10 tons of CO2 per year. The article
                    does the math for us very succinctly: </p>

                  <p class="quote">On top of this, we can find that the process of mining Bitcoin isn’t just more energy-intensive, but also
                    has a bigger environmental impact. To reach that conclusion, we first need to estimate the carbon footprint
                    for both. For Bitcoin we can, again, get this number from the Bitcoin Energy Consumption Index. For gold,
                    we assume a carbon footprint of 20 tons of CO2e per every kilogram of gold mined
                    <sup id="digiconomist2">3</sup>.

                  </p>

                  <p>The article continues to clarify that 33,000 kilograms of CO2 per unit mines (comparatively, one Bitcoin's
                    worth of Gold is 4,000 kilograms of CO2). At the end of the day, the electricity costs--if not sustainable
                    long-term--could spell trouble. Hence, the three S's, mentioned last, sustainability is perhaps a larger
                    issue than blockchain Security and Scalability challenges. Again, this is a problem that the third largest
                    cryptocurrency does not have:
                    <i>Ripple</i>, which does not bear a carbon footprint
                    <sup id="ripple">4</sup>.

                  </p>

                  <p></p>

                  <p>

                    0.
                    <a href="https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/" target="_blank">https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/</a>
                    <br />For those new to cryptocurrencies, this is a fairly succinct article to cryptocurrencies, and their underlying
                    structure.

                  </p>
                  <p>



                    1.
                    <a href="https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin" target="_blank">https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin</a>

                  </p>
                  <p>

                    2.
                    <a href="http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use" target="_blank">http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use</a>

                  </p>
                  <p>

                    3.
                    <a href="https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining" target="_blank">https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining</a>

                  </p>
                  <p>

                    4.
                    <a href="https://ripple.com/xrp/" target="_blank">https://ripple.com/xrp/</a>

                  </p>
                  <p>

                </div>

                <div id="18-02-27">

                  <h5 class="title dailytech">OUR DAILY TECH</h5>

                  <h5 class="subdailytech">Web Dev Affairs</h5>



                  <p class="author">by Thomas Maestas, MA</p>



                  <h6 class="chapternumber">



                    Feb 27, 2018</h6>



                  <h6 class="chapternumber dailytitle">After Yesterday's Scathing Post, A Look at my own Carbon Footprint </h6>



                  <p class="firstparagraph">In my reflections about environment sustainability issues, I confess I'm sort of a hypocrite ... The whole
                    matter that caused my own introspection begins with my usual daily vexation: Tangles of wires!
                    <br /> &nbsp; ... I've been having electricity issues, here as of late ...</p>

                  <p>

                    On one side, my tiny Yoga Ultrabook usually likes to charge just fine with my phone charger--if I'm stuck without my charger.
                    And due to an untimely end to the charger, I needed a replacement. So, singular errand of the day was
                    a trip to Best Buy to peruse for a 45-Watt USB-C charger ( the new oval charging port on Samsung 8's,
                    LG G6's and newer Apple products).
                    <p>Meanwhile, my credit-card sized Raspberry Pi computer runs on an old-school USB charger--a whole Linux
                      Server Tower on a cell-phone charger. Then, we have my trusty Dell (actual) Tower with 16 Gigs of RAM,
                      2-terabytes, etc. that also seems to need an extra fan to stay cool--probably the sustainability of
                      100 Raspberry computers. My entire carbon footprint changes more with the electrical products that
                      I use, than my vehicle! Well, I also confess my Jeep Cherokee can't even boast 20 miles per hour ...
                      oops, conscience pangs, ouch ... Well, hypocritical, slightly, but found not guilty since I'm a bike-commuter
                      for life!</p>

                    <p>

                    </p>

                </div>
                <div id="18-02-28">

                  <h5 class="title dailytech">OUR DAILY TECH</h5>

                  <h5 class="subdailytech">Musing Blockchain</h5>



                  <p class="author">by Thomas Maestas, MA</p>



                  <h6 class="chapternumber">



                    Feb 28, 2018</h6>



                  <h6 class="chapternumber dailytitle">One Last Word about Bitcoin's Carbon Footprint </h6>



                  <p class="firstparagraph">Environmental Sustainability, again, and a higher-level view of the dilemmea...I couldn't resist:
                    <br /> Bitcoin's Initial Coin Offering was 2011 or so, then Ethereum, with Ether for currency was 2015; These
                    two, ever so prescient designs, also have their Achilles Heal. These two are
                    <strong>"Proof of Work" currency algorithsms</strong>. This means that the "Demand" side of supply-and-demand,
                    derives from
                    <i>difficulty levels</i> of crypto-blocks to mine. So, miners are incentivized to spend $1500 on a semi-mediocre-good
                    mining rig (which is basically 20 NVIDIA Graphics Cards tied together to stack of two-by-fours with lots
                    of fans ... erhem, sustainability?...</p>
                  <p>And for each block that is "solved", hence the block being validated, and somebody's cryptocurrency purchase/transaction
                    is resolved! (takes about 12 minutes for the whole global blockchain to cycle, and Ethereum is less than
                    a minute). So, the whole cycle continues, churning through coal- and carbon-stained hands of the electricity
                    fed to these crypto-mining rigs
                    <sup>1</sup>. For many it's a hobby, like the British Hobbyists' love for ham- and short-wave radio setups,
                    yet this profitable, yet particular hobby resembles the 1870's coal factory smoke stacks in South London!
                  </p>

                  <p>
                    Let's face it, if Ethereum is able to successfully hard-fork to a Proof-of-Stake system soon--and Vitalik Buterin and his
                    crew assure us it is coming
                    <sup>2</sup>--then great--problem solved, everything eventually converts to Ethereum. If
                    <i>not</i>they face an existential threat. Because, in a more enlightened ten years from now, those mining
                    depots
                    <i>would</i> look like unfettered factory smoke-stacks. Proof-of-Stack, whose currency value is not set
                    to difficult of algorithm puzzle (hence,
                    <i>proof-of-work</i>, but rather to ownership of "voting pools", which is a
                    <i>
                      <strong>Consensus-Based Blockchain algorithm</strong>
                    </i> [Complex subject best reserved for a rainy day, or better yet, no day! I may revisit this alternative
                    in a funner way, here's a glimpse from Vitalk's @VitalikButerin tweet yesterday:</p>
                  <p class="quote">Question for mathematicians: is there a assumed-to-be-normal number (ie. digits are random, like pi or
                    e) where you can calculate the nth digit in log(n) (or even polylog(n)) time? If so, then H(x) = digits[x
                    ... x+100] seems like it would be a cool cryptographic hash algo.</p>
                  <p>Now, I am by no means a detective, but by the sound of those tweets, the Proof-of-Work algorithm seems
                    to still be of utmost importance ... </p>
                  <p>
                    1.
                    <a href="https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/" target="_blank">https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/</a>
                    and also,
                    <a href="https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch" target="_blank">https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch</a>
                  </p>
                </div>


     
    <button id="afebend" >
    <a href="#afebtop">PAGE TOP</a>
  </button>     
   <p> &copy; 2018 All Rights Reserved. &nbsp; |

  <a style="color:yellow;text-decoration:none;" href="http://www.thomasmaestas.net">thomasmaestas.net &nbsp; |</a>
  <a style="color:yellow;text-decoration:none;" href="mailto:thomas@ourdailytech.com"> thomas@ourdailytech.com &nbsp; |</a>


  <a title="Contact Information: thomasmaestas.net" href="http://www.thomasmaestas.net/profile.html#contactme"> Contact Information</a>
</p>  
`;

    } else {

        secretParagraphMPB.style.display = 'none';

    }

}