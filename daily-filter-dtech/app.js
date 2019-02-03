var dTech = angular.module("dTech", ["ngRoute", "ngAnimate"]);

dTech.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		}) 
		.when("/post", {
			templateUrl: "partials/post-list.html",
			controller: "PostListCtrl"
		})
	.otherwise({
		redirectTo: "/books"
	});
});

dTech.factory("postService", function() {
	var post = [];
	 

	console.log(post)
	return {
		getPost: function() {
			return post;
		},
		addToPost: function(book) {
			post.push(book);
			console.log(book)
		},
		add: function(book) {
			console.log("Thanks for reading: " + book.title);
		}
	} 
});

dTech.factory("bookService", function() {
	var books = 
 
		[
			{
				"id": "18",
				"did": "09-21-18",
				"date": "September 21, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Musing Blockchain",
				"title": "On the Other Side of the Coin: Part IV<br />Democratized Markets",
				"post": " \n\n  <p class=\"quote\"> The move upwards, which occurred over several hours, came as news broke that U.S. regulators had again postponed their decision on the VanEck/ SolidX Bitcoin exchange-traded fund (ETF), but had not rejected it outright.\n<br /><br />\n  At press time, BTC/USD was trading around $6,707 an increase of about 5 percent on the day, taking prices back to the range they hovered in during mid-August. In altcoin markets, Ethereum’s (ETH) reversal of fortunes continued after weeks of beating Bitcoin on losses. Prices at press time for ETH/USD hit $225, also a first since September 7, having fallen as low as $171 in the meantime.<sup>1</sup>\n  </p>\n  ",
				"blogcite": "\n  <p class=\"cite\">1. <a href=\"https://cointelegraph.com/news/cryptocurrency-markets-continue-resurgence-as-ripple-claims-68-percent-weekly-gains\">https://cointelegraph.com/news/cryptocurrency-markets-continue-resurgence-as-ripple-claims-68-percent-weekly-gains</a></p>\n  "
			},
			{
				"id": "17",
				"did": "09-20-18",
				"date": "September 20, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Musing Blockchain",
				"title": "On the Other Side of the Coin: Part III<br />The Long, Resurgent Road Forward",
				"post": " \n\n  <p class=\"quote\"> The move upwards, which occurred over several hours, came as news broke that U.S. regulators had again postponed their decision on the VanEck/ SolidX Bitcoin exchange-traded fund (ETF), but had not rejected it outright.\n<br /><br />\n  At press time, BTC/USD was trading around $6,707 an increase of about 5 percent on the day, taking prices back to the range they hovered in during mid-August. In altcoin markets, Ethereum’s (ETH) reversal of fortunes continued after weeks of beating Bitcoin on losses. Prices at press time for ETH/USD hit $225, also a first since September 7, having fallen as low as $171 in the meantime.<sup>1</sup>\n  </p>\n  ",
				"blogcite": "\n  <p class=\"cite\">1. <a href=\"https://cointelegraph.com/news/cryptocurrency-markets-continue-resurgence-as-ripple-claims-68-percent-weekly-gains\">https://cointelegraph.com/news/cryptocurrency-markets-continue-resurgence-as-ripple-claims-68-percent-weekly-gains</a></p>\n  "
			},
			{
				"id": "16",
				"did": "09-19-18",
				"date": "September 19, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Musing Blockchain",
				"title": "On the Other Side of the Coin: Part II<br />Altering Crypto-Market States from Technology Advancements Help Determine the Wide Crypto-Currency Variances between Ripple Coin, Bitcoin, and Ethereum",
				"post": "<p class=\"firstparagraph\">Altering Market States and technology-advancement forces among crypto-currencies\n  <p class=\"quote\"> According to a local report, as a result of a security breach on September 14, hackers managed to steal 4.5 billion yen from users' hot wallets, as well as 2.2 billion yen from the assets of the company, with total losses amounting to 6.7 billion yen or around $59.7 million.\n<br />\n  Tech Bureau Inc, which operated Zaif, stated in press release that the exchange detected a server error on September 17, after which Zaif suspended deposits and withdrawals. On September 18, the exchange realized that the error was a hack, and reported the incident to the Japanese financial regulator, the Financial Services Agency (FSA). Hackers stole 5,966 bitcoins (BTC) in addition to some Bitcoin Cash (BCH) and MonaCoin (MONA).<sup>1</sup>\n  </p>\n  ",
				"blogcite": "\n  <p class=\"cite\">1. <a href=\"https://cointelegraph.com/news/japanese-cryptocurrency-exchange-hacked-59-million-in-losses-reported\">https://cointelegraph.com/news/japanese-cryptocurrency-exchange-hacked-59-million-in-losses-reported</a></p>\n  "
			},
			{
				"id": "15",
				"did": "09-18-18",
				"date": "September 18, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Musing Blockchain",
				"title": "On the Other Side of the Coin: Part I<br />SEC Concerns About the Top Three Crypto-Currencies",
				"post": "\n  <p class=\"quote\"> The recent report examines the practices of ten crypto trading platforms based in the U.S. and abroad, as well data collected by the Attorney General’s office about the state of digital currency markets as a whole.<br /><br />\n\n  The study found that the absence of accepted methods for auditing virtual assets results in the lack of a consistent and transparent approach to independently auditing digital currency traded on exchanges. This puts customers’ funds held on their exchange accounts at risk of attacks from hackers or theft. The report subsequently questions the issue of public protection and the sufficiency of the commercial insurance to cover possible losses.<br /><br />\n  \n  The report further outlines abusive trading practices, emphasizing that the majority of crypto trading platforms deploy automated traders, offering them special conditions, which leaves retail customers at a disadvantage. It also states that digital currency exchanges involve numerous, overlapping lines of business that represent serious conflicts of interest. The report explains:\n  <br /><br />\n  “Automated trading activities could also allow a single trader or group of traders to command multiple accounts simultaneously to obscure coordinated trading, in order to manipulate prices.”<sup>1</sup>\n  </p>\n  ",
				"blogcite": "\n  <p class=\"cite\">1. <a href=\"https://cointelegraph.com/news/new-york-attorney-general-report-says-crypto-exchanges-are-at-risk-of-manipulation\"> https://cointelegraph.com/news/new-york-attorney-general-report-says-crypto-exchanges-are-at-risk-of-manipulation</a></p>\n  "
			},
			{
				"id": "14",
				"did": "09-17-18",
				"date": "September 17, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Sociology Tomorrow!",
				"title": "Den Haague Security",
				"post": "\n  <p class=\"quote\"> As an international data hub and digital entry point to Europe, the Netherlands plays an important role when it comes to tackling these threats and optimally guaranteeing the cybersecurity of our critical infrastructure.\n\n  Saskia Bruines, Deputy Mayor for Education, Knowledge Economy and International Affairs in the Municipality of The Hague:<br /><br />\n  \n  \"Technological developments are continuing apace and the current shortage of talent will increase if we fail to take action as a society. For that reason, public authorities, educational institutions and businesses need to join forces to train, attract and retain more talent. That is why it is important to teach children digital skills from an early age. From primary school to university, educating cybertalent has to be high on the agenda. We want everyone to participate so we can all work together to create a safe society.\"<sup>1</sup>\n  </p>\n  ",
				"blogcite": "\n  <p class=\"cite\">1. <a href=\"https://www.benzinga.com/pressreleases/18/09/r12366605/cyber-security-week-together-we-secure-the-future-2-5-october-2018-the\">https://www.benzinga.com/pressreleases/18/09/r12366605/cyber-security-week-together-we-secure-the-future-2-5-october-2018-the</a></p>\n  "
			},
			{
				"id": "13",
				"did": "09-15-18",
				"date": "September 15-16, 2018<br />Weekend",
				"author": "by Thomas Maestas",
				"cat3": "Sociology Tomorrow!",
				"title": "The End of Traffic Jams, Part II: <br />A Car-Free Paris",
				"post": "\n \n  <p class=\"firstparagraph\">Paris, as a City foremost, has led global discussion and awareness on climate-change related action. Paris' smog-dispelling culture presents itself as <i>The City at the center of action</i> with respect to global, macro-level problems. Why the city? It only makes sense that collective action and mobilization requires the correct ratio of community leaders and actors to engage enough social momentum to overcome apathy. </p>\n  <p class=\"quote\">This year, the ban on motorized traffic will apply to the whole of Paris, except for the Bois (woods) and the périphérique (inner ring road). \n  The Parisians themselves will not be able to drive their own vehicle, including electric vehicles, 'clean' energy vehicles, and Autolib vehicles.<br /><br />\n  \n  The following vehicles will be allowed to circulate, at a maximum of 30 km/h: non-motorized vehicles, emergency vehicles, vehicles for disabled people, taxis, public transport, BigBus and Open Tour, and VTC (the latter (private hire taxis) were not allowed to circulate last year). There are also numerous alternative modes of transport - bicycle, horse & carriage, cyclopolitain (pedicabs) … <sup>1</sup>\n  </p>\n    <p>On a national-level, action is highly effective but practically impossible, while the community-level can hardly muster the type of leverage to influence other communities. <i> The city, often composed of multiple millions and spanning larger geographies, resembles the powerful cities that governed nation-states from the middle ages forward.</i> Examples include 16th century Florence, 17th century Istanbul, 18th century Paris, and 19th century London--not to mention the first global city-state power, Rome. In terms of collection action, this historical nuance of the city takes a new role:    \n  </p>\n  <p class=\"quote\">Last week at the Global Climate Action Summit, many of the best minds the human species can muster gathered to right the course.\n\n  These people included but were not limited to: environmentalists, mayors from around the world, human rights activists, technologists, academics, business leaders, labor leaders, and former secretaries of state. The kinds of folks with noble pursuits. This was climate change activism without borders. If the Paris Agreement, drafted in 2015, was about governments coming together to fight, last week’s event showed that the most ambitious climate action isn’t happening on the national scale—it’s cities and states that are leading the way.<sup>2</sup></p>\n  <p>Granted, the city is the center of climate-change peril and so it is only natural they are the first to act, and are the defacto center of action ... and hope.</p>\n",
				"blogcite": "\n\n  <p class=\"cite\">1<a href=\"https://en.convention.parisinfo.com/travel-trade/car-free-day-paris\">\n  https://en.convention.parisinfo.com/travel-trade/car-free-day-paris</a></p>\n    <p class=\"cite\">2<a href=\"https://www.wired.com/story/at-the-edge-of-the-world-facing-the-end-of-the-world/\">\n    https://www.wired.com/story/at-the-edge-of-the-world-facing-the-end-of-the-world/</a></p>\n  "
			},
			{
				"id": "12",
				"did": "09-14-18",
				"date": "September 14, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Web Dev Affairs",
				"title": "The End of Traffic Jams, Part I: <br />A Green Los Angeles",
				"post": "<p class=\"firstparagraph\">Los Angeles' technological centality has always been overshadowed by Silicon Valley and Seattle; however, Santa Monica's trendy tech hub has begun to make a name for itself with respect to one <strong>hugely important sector: climate-change related technology</strong>.     <p class=\"quote\"> This week, Los Angeles mayor Eric Garcetti joined other leaders, along with activists and business leaders, at the Global Climate Action Summit in San Francisco. The mission? Stop climate change before it destroys the planet, and our species along with it.\n  <br /><br />\n    But the city is in the midst of a metamorphosis. With fewer, yet stronger storms on the horizon, it’s begun an ambitious plan to cut its reliance on imported water in half by 2025. And it’s emerging as a leader in the frantic international quest to curb emissions—in 2016 alone, it slashed emissions by 11 percent, the equivalent of taking more than 700,000 cars off the road.\n    <br /><br />\n    We generated 30,000 new green jobs since I've been mayor, so in five years. To put that in perspective, there's 50,000 coal jobs left in America. So this town that’s just 1 percent, roughly, of the US population has created the equivalent of 60 percent of the remaining coal jobs left in America. Appalachia should be doing that, areas that have been hard hit by a recession and not recovered. These are generally good middle class jobs too, not just minimum wage.<sup>1</sup>\n    </p>\n    <p>The expanse of L.A.'s reach, now touching San Diego, makes climate-friendly commuting a top issue: The two are agglomerating into one city after all, neatly and merely divided by Camp Pendleton. Now, about that ever-elusive high-speed rail system connecting the two ... ",
				"blogcite": "\n  <p class=\"cite\">1. <a href=\"https://www.wired.com/story/how-los-angeles-is-helping-lead-the-fight-against-climate-change/\">https://www.wired.com/story/how-los-angeles-is-helping-lead-the-fight-against-climate-change/</a></p>\n   "
			},
			{
				"id": "11",
				"did": "09-13-18",
				"date": "September 13, 2018",
				"author": " ",
				"cat3": " ",
				"title": " ",
				"post": " <p class=\"firstparagraph\">World Economic Forum, most notable for its annual convocation of world leaders, works around the clock, with no shortage of resources for socio-economic research:\n  </p> <p class=\"quote\"> As technological breakthroughs rapidly shift the frontier between the work tasks performed by humans and those performed by machines and algorithms, global labour markets are likely to undergo major transformations. These transformations, if managed wisely, could lead to a new age of good work, good jobs and improved quality of life for all, but if managed poorly, pose the risk of widening skills gaps, greater inequality and broader polarization. In many ways, the time to shape the future of work is now. The Future of Jobs report provides tools which can support responses to the critical questions confronting businesses, governments and workers in the horizon up to 2022.<sup>1</sup>\n  </p>\n  <p>One clear take-away from the report features the urgent short-term need to responsibily fill vast holes in the labor market:</p>\n  <p class=\"quote\">Machines Will Do More Tasks Than Humans by 2025 but Robot Revolution Will Still Create 58 Million Net New Jobs in Next Five Years:<br /><br />\n  <ul><li>\n  Latest research from the World Economic Forum forecasts that by 2025, machines will perform more current work tasks than humans, compared to 71% being performed by humans today.</li>\n  <li>\n  The rapid evolution of machines and algorithms in the workplace could create 133 million new roles in place of 75 million that will be displaced between now and 2022</li><li>\n  Urgent challenges include providing reskilling opportunities, enabling remote work and building safety nets to protect at-risk workers and communities\n  </li>\n  </ul>\n  </p>\n  <p><strong>... to which I say, <i>H.R. Managers of the World: Unite!</i></strong></p>\n  ",
				"blogcite": " \n  <p class=\"cite\">1. <a href=\"http://reports.weforum.org/future-of-jobs-2018/\">http://reports.weforum.org/future-of-jobs-2018/</a></p>\n  \n  <p class=\"cite\">PDF Download<br /><a href=\"http://www3.weforum.org/docs/WEF_Future_of_Jobs_2018.pdf\">http://www3.weforum.org/docs/WEF_Future_of_Jobs_2018.pdf</a></p>\n  "
			},
			{
				"id": "10",
				"did": "09-12-18",
				"date": "September 12, 2018",
				"author": "by Thomas Maestas",
				"cat3": "A.I.Now.",
				"title": "Apple's New A12 Chip with A.I. Neural Engine:<br /> Ooh L&aacute; L&aacute;!",
				"post": "<p class=\"firstparagraph\">\n  Invisible upgrades are the true talking points of new mobile device  releases as they hint big things under the hood... Last year's iPhone X may have been alot of hardware show (with the X/8/8plus providing the first A.I.-dedicated chip), but 2018 augurs big things ahead and bigger muscle:\n  <p class=\"quote\">\n  On Wednesday Apple announced that the neural engine is now significantly more powerful. Last year’s debut model could crank through 600 billion operations per second. The new version can work almost 10 times faster, reaching 5 trillion operations per second. Some of that speedup may come from using smaller transistors inside the A12, with features as small as 7 nanometers.<sup>1</sup>\n  </p>\n  <p>So, just as Apple tends to future-proof its technology, this year's release does not disappoint the constellation of iOS developers that can take advantage of the tech, with  better battery efficiency ...</p>\n  <p class=\"quote\">App developers can play with the power of Apple’s new neural engine through Core ML, a framework the company offers to help programmers deploy machine learning on Apple devices. The company says that this allows developers to run machine learning code nine times faster than on the iPhone X, while using a tenth of the energy.<sup>1</sup>\n  </p>\n  <p>Thanks to Apple's commitment to A.I., the iPhone Xs,   Xs Max, and   Xr offer all the joys of smart video/camera, processing, augmented reality, --<i>and with battery <strong>savings?</strong>   Ooh L&aacute; L&aacute;!</i>\n\n  ",
				"blogcite": "\n  <p class=\"cite\">1. <a href=\"https://www.wired.com/story/apples-latest-iphones-packed-with-ai-smarts\">https://www.wired.com/story/apples-latest-iphones-packed-with-ai-smarts</a></p>\n  "
			},
			{
				"id": "9",
				"did": "09-11-18",
				"date": "September 11, 2018",
				"author": "Thomas Maestas",
				"cat3": " ",
				"title": " ",
				"post": "\n  <p class=\"quote\"> \n  </p>\n  ",
				"blogcite": "\n  <p class=\"cite\"><a href=\" \"> </a></p>\n  "
			},
			{
				"id": "8",
				"did": "09-10-18",
				"date": "September 10, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Sociology Tomorrow!",
				"title": "Where Did All the Crypto-Cash Go? Part II:<br />Expectations of Speculation",
				"post": "\n  <p class=\"firstparagraph\">Vitalik Buterin, architect of Ethereum crypto-contract/currency, presented at the recent TechCrunch Disrupt! conference with no shortage of opinions on the direction of blockchain and crypto-currency/contract investments... This, after the Ethereum (WEI) declines nearly ten-fold along with Bitcoin's 70% drop<sup>1</sup>, along with other major crypto-currencies. </p>\n  <p>The story is less dramatic and mysterious than it is simply the natural course of market novelties' <i>transition from Early Adapters to General Acceptance</i>: The underlying value transitions from increasing public awareness to mainstream acceptance, which requires new, ensuing <i>expectations that differ from the previous period</i>. The substance of perceived value dictates actual value. Buterin opines to Bloomberg News...\n    <p class=\"quote\"> \n     The blockchain space is getting to the point where there’s a ceiling in sight. If you talk to the average educated person at this point, they probably have heard of blockchain at least once. There isn’t an opportunity for yet another 1,000-times growth in anything in the space anymore ... Growth in Bitcoin and other cryptocurrencies in the blockchain community through its first six or seven years was dependent on marketing and trying to get wider adoption. <br /><br /> \nThat strategy is getting close to hitting a dead end.  The next step will be getting people who are already interested in cryptocurrencies to be involved in a more in-depth way. \"Go from just people being interested to real applications of real economic activity\" [Buterin] said.  <sup>2</sup></p> \n    <img src=\"dist/img/diffusion.jpg\" class=\"zoom\" />\n    <p>So, the old expectations generated a very low bar to prove actual utility, whereas present-day collective knowledge demands clearer practical proof; inherently the bar is raised. And now, by technical sweat of the brow, crypto-based fintech now faces the realities of what will be needed for wide-spread use: technical solutions to scalability problems, security issues, and of course speed, availability and consistency of data transfer. Yet, now more importantly, ease-of-mainstream-use. </p>\n    <p>For example, Ethereum contract writers must learn a new language, Solidity; and Ethereum currency holders must grapple with browser-to-ledger interfaces like MetaMask, which are far from intuitive for even the most enthusiastic of early adopters!  </p>\n    <p> This concept is laid bare in sociological terms, citing Rogers and Shumacher's 1971 article from my Feb. 15 post: the general sociological Early Adopter theory--based on Everett M. Rogers' Diffusion of Innovations theory, describing the timeline of the Innovation Adoption Lifecycle as fairly ordinary, or better stated, fairly historical--again repeating itself.<sup>3</sup> </p>\n    ",
				"blogcite": " \n    \n    <p class=\"cite\">1. <a href=\"https://markets.businessinsider.com/currencies/btc-usd\"   target=\"_blank\">https://markets.businessinsider.com/currencies/btc-usd\n    </a>\n    </p> \n    <p class=\"cite\">2. <a href=\"https://www.bloomberg.com/news/articles/2018-09-08/crypto-growth-nears-ceiling-ethereum-co-founder-buterin-says?utm_campaign=socialflow-organic&utm_medium=social&cmpid=socialflow-twitter-business&utm_content=business&utm_source=twitter\"   target=\"_blank\">https://www.bloomberg.com/news/articles/2018-09-08/crypto-growth-nears-ceiling-ethereum-co-founder-buterin-says\n    </a>\n    </p>  <p class=\"cite\">3. <a href=\"https://eric.ed.gov/?id=ED065999\"   target=\"_blank\">Rogers, E. M., & Shoemaker, F. F. (1971). Communication of Innovations; A Cross-Cultural Approach.\n    </a>\n    </p> \n     "
			},
			{
				"id": "7",
				"did": "09-08-18",
				"date": "September 8-9, 2018<br />Weekend",
				"author": "by Thomas Maestas",
				"cat3": "Musing Blockchain",
				"title": "Where Did All the Crypto-Cash Go? Part I:<br />Why the Long Crash ...",
				"post": "<p class=\"firstparagraph\">Crypto-Millionaires one day, Crypto-Middle-class the next.  Crypto-currencies in all forms have sustained a 9-month decline, which most could not have anticipated.  Take for instance, December 2017's $1500 Ether value to recent values of $185<sup>1</sup>, and Bitcoin's November 2017 valuation of just under $20,000 on the CoinDesk Bitcoin Price Index (BPI) down to this week's $6,400.  </p>\n     \n     <img src=\"dist/img/cryptocurrency.jpg\" class=\"zoom\" />\n     <p>The theories are multi-fold:</p>\n     <p class=\"quote\">Some have posited that blockchain and cryptocurrency projects might be converting their ether reserves into fiat currencies to meet financial obligations. At face value, this appears plausible, as startups incur many expenses during their growth phase. If a collection of companies liquidated the cryptocurrencies—mostly ether—that they raised in ICOs at the same time, they could exert downward pressure on prices.<sup>2</sup></p>\n       <p>Others blame investment psychology ... </p> \n       <p class=\"quote\">It’s possible that the price decline reflects a negative feedback loop, a combination of economics and psychology. As crypto investors sell their holdings, they see that prices are falling. This could spook them into selling even more. This is somewhat like a bank run, except investors lose faith in the value of cryptocurrencies rather than the viability of a financial institution.<sup>2</sup>\n       </p>\n       <p>Others still, they blame ease-of-use and accesibility ... </p>\n       <p class=\"quote\">Cryptocurrency investors (and especially ethereum backers) may be disappointed (paywall) by the low usage of decentralized applications (dapps) like IDEX, Bancor, and CryptoKitties. These apps run on crypto tokens, and thus generate demand for the assets.\n<br /><br />\n       But when investors visit a cryptocurrency exchange, they aren’t presented with information about the daily active users on various dapps. They’re generally only presented with the price of an asset and a chart of its history.<sup>2</sup>\n       </p>\n       <p>However one distributes the blame, psychological and economic explanations only fail where sociological explanations offer coherent explanations ... Look no further than my September 10th post ...\n       </p>\n       ",
				"blogcite": "\n    \n     <p class=\"cite\">1. <a href=\"https://markets.businessinsider.com/currencies/btc-usd\"   target=\"_blank\">https://markets.businessinsider.com/currencies/btc-usd\n     </a>\n     </p> \n     <p class=\"cite\">2. <a href=\"https://qz.com/1355945/why-have-cryptocurrencies-like-bitcoin-and-ethereum-fallen-so-much/\"   target=\"_blank\">https://qz.com/1355945/why-have-cryptocurrencies-like-bitcoin-and-ethereum-fallen-so-much/\n     </a>\n     </p>   <p class=\"cite\">2. <a href=\"https://qz.com/1349207/wall-streets-interest-in-bitcoin-like-ices-bakkt-isnt-boosting-crypto-prices/\"   target=\"_blank\">https://qz.com/1349207/wall-streets-interest-in-bitcoin-like-ices-bakkt-isnt-boosting-crypto-prices/\n     </a>\n     </p> https://qz.com/1349207/wall-streets-interest-in-bitcoin-like-ices-bakkt-isnt-boosting-crypto-prices/\n        "
			},
			{
				"id": "6",
				"did": "09-07-18",
				"date": "September 7, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Quantum Data",
				"title": "Reports from TechCrunch Disrupt! Part III<br />Quanta",
				"post": "\n     <p class=\"firstparagraph\">Quantum solutions to computing needs become clearer, and specific uses for research come to light. First and foremost, quantum mechanics offer a realm of solutions that has ever eluded modern science: problem-solving algorithms that face orders of complexity of 40 to 50 orders of magnitude, i.e. Complexity<sup>50</sup> is just a tad too complex for the fast, but straight-line dumb A.I.-based solutions, which are inherent to classificatory machine-learning schema. Blockchain and Directed Acyclic Graphs are less helpful, but find their utility in the unescapably fast ability to <i>share data where data is needed</i><br /><br /></p>\n     Manipulations of the quantum realm are not at all intuitive to concepts we learn from the classical world. Less intuitive are the constraints of the data analysis. For example, the quantum metaphor of flipping two coins simultaneously means knowing the \"state\" of one coin if you know the other coin's state. The one lands on heads, and because it shares an entangled state with the other, <i>you are guaranteed to know the outcome of the second coin</i>. </p>\n     <img src=\"dist/img/quantumScience.jpg\"  class=\"zoom\" />\n     <p>Image credit: TechCrunch Disrupt! Day 3</p>\n     <p>Superconducting devices offer powerful tooling, yet <i>the catch is that the time you have to run calculations is approximately 50 micro-seconds</i>, i.e. the <strong>coherence time of entangled, superposed state</strong>. (a marked improvement from 1990's hardware that yielded coherence time of 1 nano-second). Not exactly enough time to run a long program, especially if you consider just one small algorithm is a series of logical gates that depend sequentially on other logical gates..., let alone an actual program. So then what's the use? The specific uses in academic research are without limit for those problems that present specific, exponential complexity--many cases in biotech, chemistry, and so on. Quantum computing offers a 'burst' of calculations, and nothing more, at least for now. </p>\n     <img src=\"dist/img/quant-python.jpg\" class=\"zoom\" />\n     <img src=\"dist/img/quant-python2.jpg\" class=\"zoom\" />\n     <p>This short python-language program demonstrates quantum manipulation to machine-learning classification distinguishing a dog from a cat</p>\n     <p>Image credit: TechCrunch Disrupt! Day 3</p>\n     \n     <p>Not to be underestimated, quantum calculations operate best when modeling the laws of nature--because nature obeys quantum mechanical rules, beginning with chemistry. After all, quantum analysis simulated the largest molecule last year--and that's no small matter!  </p>\n       ",
				"blogcite": " \n       <p class=\"cite\">  TechCrunch Disrupt! Day 3 \n       </p>\n        "
			},
			{
				"id": "5",
				"did": "09-06-18",
				"date": "September 6, 2018",
				"author": "by Thomas Maestas",
				"cat3": "A.I.Now",
				"title": "Reports from TechCrunch Disrupt! Part II<br />Artificial Intelligence",
				"post": "\n  <p class=\"firstparagraph\">Machine learning's hey-day not only blossoms, but overtakes many areas of computing solutions if anything else but for the sheer ease of unloading mundane computing tasks. But the most widespread problem is that of non-A.I., non-machine-learning that masquerade as A.I., but are only complex looping algorithms. Much ado about nothing has been the death-knell for more than a few of the Startup Battlefield's contenders. <i>Disrupt's merciless premises abruptly dash dreams, but I guess that's what a public and publicized forum for Peer Review is all about!</i><br /> <br />... to be continued. </p> \n    ",
				"blogcite": " \n    <p class=\"cite\">   TechCrunch Disrupt! Day 3 \n    </p>\n     "
			},
			{
				"id": "4",
				"did": "09-05-18",
				"date": "September 5, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Musing Blockchain",
				"title": "Reports from TechCrunch Disrupt! Part I<br />Blockchain",
				"post": "<p class=\"firstparagraph\"><br /> <br />  </p>\n  <p class=\"quote\"> <sup>1</sup></p>\n  <p> </p> ",
				"blogcite": "\n  <p class=\"cite\">  <a href=\"\"   target=\"_blank\">\n  </a>\n  </p>\n     "
			},
			{
				"id": "3",
				"did": "09-04-18",
				"date": "September 4, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Sociology Tomorrow!",
				"title": "The Cumbersome, Multipurpose and Sometimes Unsecure URL ...<br />Is There a Better way?",
				"post": "<p class=\"firstparagraph\">Browser URLs are the constant of the web's evolutions over the years. After all, they are the solid, predictable workhorse for transporting web surfers' requests and web servers' responses. But could there be improvements even with this, beyond the HTTPS' security upgrade? Wired reports: </p>\n  <p class=\"quote\">Chrome looks ahead to its next 10 years, the team is mulling its most controversial initiative yet: fundamentally rethinking URLs across the web.\n<br /><br />\n  Uniform Resource Locators are the familiar web addresses you use every day. They are listed in the web's DNS address book and direct browsers to the right Internet Protocol addresses that identify and differentiate web servers. <br /><br />\n  As web functionality has expanded, URLs have increasingly become unintelligible strings of gibberish combining components from third-parties or being masked by link shorteners and redirect schemes. And on mobile devices there isn't room to display much of a URL at all.  The resulting opacity has been a boon for cyber criminals who build malicious sites to exploit the confusion.\n  <br /><br />\n  The focus right now, they say, is on identifying all the ways people use URLs to try to find an alternative that will enhance security and identity integrity on the web while also adding convenience for everyday tasks like sharing links on mobile devices.<sup>1</sup></p>\n  <p>Bring it on, Google, and save us from the increasing flood of &;@# ampersands &% and excessive #_&% URL parameters that grow longer and longer ... and longer ... but how?</p> ",
				"blogcite": "\n  <p class=\"cite\">1 <a href=\"https://www.wired.com/story/google-wants-to-kill-the-url/\"   target=\"_blank\">https://www.wired.com/story/google-wants-to-kill-the-url/\n  </a>\n  </p>\n  "
			},
			{
				"id": "2",
				"did": "09-03-18",
				"date": "September 3, 2018",
				"author": "by Thomas Maestas",
				"cat3": "Web Dev Affairs",
				"title": "",
				"post": "<p class=\"firstparagraph\"> </p>\n  <p class=\"quote\"> <sup>1</sup></p>\n  <p> </p>",
				"blogcite": "\n  <p class=\"cite\"> <a href=\"\"   target=\"_blank\">\n  </a>\n  </p>\n  "
			},
			{
				"id": "1",
				"did": "09-01-18",
				"date": "September 1-2, 2018<br />Weekend",
				"author": "by Thomas Maestas",
				"cat3": "Web Dev Affairs",
				"title": "Mistaken identities",
				"post": "<p class=\"firstparagraph\"> </p>\n  <p class=\"quote\"> <sup> </sup></p>\n  <p> </p>\n    ",
				"blogcite": "\n  <p class=\"cite\">  <a href=\"\"   target=\"_blank\">\n  </a>\n  </p>\n    "
			}
		];
	
	return {
		getBooks: function() {
			console.log("getBooks");
			return books;
		},
		addToPost: function(book) {
			console.log("addToPost added: " + book);
		}
	}
});
   
dTech.controller('TodoListController', function() {
	var todoList = this;
	todoList.todos = [
		{text:'Post One', done:true},
		{text:'Post Two', done:false}];

	todoList.addTodo = function() {
		todoList.todos.push({text:todoList.todoText, done:false});
		todoList.todoText = '';
	};

	todoList.remaining = function() {
		var count = 0;
		angular.forEach(todoList.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	todoList.archive = function() {
		var oldTodos = todoList.todos;
		todoList.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) todoList.todos.push(todo);
		});
	};
});

dTech.controller("PostListCtrl", function($scope, postService) {
	$scope.post = postService.getPost();
	
	$scope.add = function(book) {
		//console.log("book: ", book);
		postService.add(book);
	}
});

dTech.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "Daily Tech Post";
	$scope.appDetails.tagline = "Tech News Overview";
	
	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
});

dTech.controller("BookListCtrl", function($scope, bookService, postService) {
	$scope.books = bookService.getBooks();
	
	$scope.addToPost = function(book) {
		postService.addToPost(book);
	}
});