---
blogtitle: Moving money internationally
path: moving-money-internationally
date: 2022-03-12T11:37:13.593Z
author: Patrick McKenzie - Stripe (Bits About Money)
blogpage: true
thumbnail: wholesale.png
---
**Patrick McKenzie (Stripe)**\
**[Bits About Money](https://bam.kalzumeus.com/archive/moving-money-internationally/)**

 

I had hoped to write about wire transfers for a while, since they’re fascinating and poorly understood. The sanctioning of Russia in the wake of the invasion of Ukraine has made some of the mechanics extremely topical. We'll return to the infrastructural bits again, but many people find themselves urgently wanting to understand what SWIFT does and does not do, and hopefully this will help.

This situation is evolving very rapidly and this column will not. Please check the WSJ or Financial Times for updates on the fluid bits. Hopefully this essay helps contextualize what is reported.

I will repeat my usual disclaimer here: I work for the Internet at Stripe. These are my own opinions.

We ~~begin with SWIFT~~ begin with a brief diversion into how money moves. Or, more to the point, how it doesn’t.

## Correspondent banking

As we’ve covered previously about [bank transfers](https://bam.kalzumeus.com/archive/bank-transfers-as-a-payment-method/), “moving money” is a misnomer, a simplification which covers a complex coordinated series of offsetting agreements about debts. When you move money domestically, your bank and the recipient’s bank use some intermediary system to coordinate a series of agreements which result in your bank agreeing it owes you less than it did prior and the recipient’s bank agreeing that it owes the recipient more than it did previously.

This same principle is at play in moving money internationally, with one interesting difference: banks largely cannot hold money extraterritorially *directly*, for most useful values of “directly.” Instead, they rely on a correspondent banking relationship.

Banks can have accounts at other banks, and extremely frequently do. A major reason to do this internationally is to facilitate payments in other currencies and other jurisdictions.

An example which shows the general pattern (with one tiny fib to save a few paragraphs of irrelevant detail): once upon a time, shortly before the global financial crisis, a young American banking at a small institution in Gifu Prefecture, Japan needed to send in his student loan payment to the servicer working for the U.S. government. The U.S. government, somewhat predictably, strongly prefers dollars over yen, and (perhaps less predictably) has incredible difficulty taking payments internationally.

That small institution, which will remain nameless since I still bank with them, holds some dollars on its books (a few hundred million dollars worth) but does not “physically” control more than the tiniest fraction of them. (That tiny fraction is paper dollars which, if you are a Gifuite anticipating a vacation to e.g. Hawaii, you can purchase at your local branch office in small quantities for a fairly hefty spread.) The vast majority of its dollars are owed to it by Mitsubishi UFJ Bank, the largest bank in Japan.

MUFJ is the largest supplier of yen/dollar liquidity in Japan, but it does not have direct access to the U.S. banking system. (In something of an oddity, it does today control a [U.S. subsidiary](https://www.unionbank.com/) which has full access, but that was not available back in the day.) Instead, it holds accounts at a variety of U.S. banks.

The one which acted as the intermediary bank on the wire (Wachovia) is no longer with us. MUFJ had an account with Wachovia, which is to say that the dollars MUFJ owned were *owed to it* by that bank. Neither MUFJ nor my own bank had custody of the dollars they were going to move on my behalf.

MUFJ’s intermediary had full access to the U.S. financial system, including to FedWire, which does domestic wire transfers.

When my local bank executed the wire, it passed an instruction to MUFJ, which passed an instruction to Wachovia, which effected a funds transfer through FedWire, which goes through the Federal Reserve, causing Bank of America to be owed slightly more money by the Fed, which it swiftly agreed that it owed me most of (after deducting a fee). And thus an offsetting series of rapid agreements about changes in amounts owed between bilateral counterparties results in me having less yen and the U.S. federal government having more dollars, plus each at least five entities earning a fee.

In broad strokes, this is how correspondent banking has always worked. Note the absence of an explicit technological substrate here: it could be conducted over TCP/IP, by a telegraph, or with a letter carried between countries on horse. And, indeed, all of those have been extensively used in correspondent banking over the centuries.

Now we’ll return to the present, and to SWIFT.

## SWIFT: The world’s most expensive encrypted messaging service

[SWIFT](https://www.swift.com/) is a company and often, like Kleenex, used to refer metonymically to their best-known product, which is an extremely specialized low volume encrypted messaging platform properly called FIN.

(There is a bit of geek humor in there, because “5 billion messages a year” sounds like a lot but is inconsequential scale in modern computing. I’ll note that is 160 transactions per second in case anyone wants to compare that to alternative ways to send very low volumes of messages about money movement.)

SWIFT is almost synonymous with international wires because it is the primary way that banks and their correspondents choose to interoperate with respect to wires. Specifically, they send a [MT 103 message](https://en.wikipedia.org/wiki/MT103), which is a bit longer than a tweet, and then each bank operates their internal books and other banking systems to make the request encoded in the message a reality (or fail gracefully).

Very little about this choice is about the technology, per se. The exact specifics of what fields a MT 103 allows you to send are interesting to professionals but are not why SWIFT is important. SWIFT is a multi-layered network effects business.

Being on the platform means you have many more counterparties you can easily reach. Your regulator and auditors are likely far more comfortable with it than they would be with your second most plausible solution. The new head of AML Compliance you’re thinking of hiring certainly has a lot of experience with the operational oddities of SWIFT messages. The advantages continue and compound upon each other, making each marginal financial institution more likely to join SWIFT, and SWIFT more valuable for each institution on it.

Importantly: SWIFT is not actually co-extensive with international money movement. In the first place, it *doesn't actually do anything directly to money*. Money doesn't travel over SWIFT any more than it travels over napkins, though each could potentially contain an *instruction* about money that a bank might choose to implement.

SWIFT does not even monopolize the thing that everyone assumes it monopolizes. There is a document in a binder in Tokyo which describes “How to move money to the U.S. if SWIFT is down” and it does not say “Pause the Japanese economy until SWIFT gets their #%()#% together.” MUFJ knows the phone numbers for the U.S. banks holding billions of dollars *of their money* and can transact with them in any of the ways that you’d expect a bank to make available to a customer with billions of dollars deposited.

SWIFT is in the news in early March 2022 principally because it has been deputized to fulfill some policy aims of the European Union. As of this writing, they’ve [cut a subset of Russian banks from the network](https://www.wsj.com/livecoverage/russia-ukraine-latest-news-2022-03-01/card/west-orders-seven-russian-banks-off-swift-but-leaves-others-on-OMv9TCsZMQqlze9dQQRm).

The intent of this policy has been described variously in various places. In my personal opinion, I think the best articulation of the strategy is “We are attempting to convey enormous displeasure while sanctioning some banks which are believed to be close to politically exposed Russians, while not making it impossible for Russian firms generally to transact internationally nor sparking a humanitarian crisis either inside or outside of Russia.”

A subtle but important note: SWIFT does not substantially control who is allowed to send wires. In the above example, each of the three banks involved has independent authority to accept or reject my business, and each of them has independent responsibility from their regulators to enforce the laws of their jurisdiction. (SWIFT has some products which assist with complying with those laws, but doesn’t independently make rules or develop lists of people to exclude from the system.)

## Banks and other financial entities are policy arms

A [recurring](https://bam.kalzumeus.com/archive/community-banking-and-fintech/) [theme](https://bam.kalzumeus.com/archive/mortgages-are-a-manufactured-product/) for this column is that banks are expected, in return for guaranteed monopolization of some lucrative franchises, to act as policy arms for the governments they are subject to.

SWIFT is, theoretically, a Belgian cooperative. The Federal Reserve is also, theoretically, a joint-stock company owned by member banks and not at all part of the United States government. These are… consensual fictions.

SWIFT also [publishes](https://www.swift.com/about-us/organisation-governance/swift-governance) the following consensual fiction, of which the last four words are of particular note:

> SWIFT's Board composition is designed to reflect usage of SWIFT messaging services, ensure SWIFT’s global relevance, support its international reach and *uphold its strict neutrality*.

I have no great expertise in power politics. Reading much commentary on international financial sanctions causes me to believe that some putatively serious people chose to take the consensual fictions literally despite them being shelved next to Harry Potter (and being approximately as accurate regarding how banking is conducted).

Of course SWIFT is a policy arm. Of course it answers to the EU. Of course it can be directed against disfavored individuals and organizations, including governments, including in an indiscriminate manner. Of course this has happened before. Of course all parties knew this could happen again. Of course this is only part of the response.

## Conveying “Commander’s Intent”

There is an interesting intellectual framework in the U.S. military called “commander’s intent”, which balances the world’s paradigmatic example of an institution which follows orders from above with the complexity of ground state that is not possibly knowable to the person writing the orders. Commander’s intent is designed to inform subordinates of *what you actually desire*, so that they can intelligently embellish upon what you order them to do.

Many commentators confuse the actual effects of severing particular banks from SWIFT with what they perceive as the policy goal motivating it. More important than either is, in my opinion, what it communicates about commander’s intent to the policy arms who are responsible for enforcing it.

Specifically, it communicates that Something Has Changed and that Russian institutional money, specifically “oligarch” money, is now tainted, and not in the benignly ignored fashion it has been for most of the last few decades.

Read: “We will with absolute certainty hand out billions of dollars of fines stochastically over the next ten years. You can minimize how many hit your institution by successfully intuiting who is on the Bad Risks list. We will be sharply less tolerant of ‘Cyprus is an EU country and so banked customers in it are per se low risk’, ‘lots of people buy real estate in London and we couldn’t possibly inquire about all of them’, and things which we have previously turned a blind eye to, and we will probably lie about having turned a blind eye to that, and you will, too, if you know what is good for you.”

I have some deep misgivings about policymaking through “try things and [see what we fine](https://www.bloomberg.com/opinion/articles/2022-02-15/you-get-the-crypto-rules-you-pay-for)”, but be that as it may, it is absolutely pervasive in regulation of the financial industry, particularly with regards to anti-moneylaundering (AML). Much of the activity which will be sanctioned will be sanctioned under AML regimes, because they’re on the books, have existing and relatively capable agents charged with enforcing them daily, are enforced against all human activity which touches money, and can create a “[process crime](https://en.wikipedia.org/wiki/Process_crime)” out of almost any underlying predicate (including ones which might be difficult to criminalize directly).

One reason why SWIFT is currently in the news, and routine updates to your friendly local bank’s AML compliance division from their regulator are not, is simply that SWIFT is, as a nearly pervasive infrastructure layer, one-stop-shopping from the perspective of political actors. But your friendly neighborhood compliance officer is *assumed to be reading this news carefully*.

## Tiniest bit of personal opinion

I am in favor of discouraging offensive wars, but know the financial system to be a very blunt instrument for expressing society’s preferences. In particular, while the global financial system and the governments giving them instructions have not actually banned the usage of oligarchs’ wealth prior to now, they have already given many ordinary Russians (and *ordinary Ukranians*!) severe difficulties doing things we expect to be utterly routine for law-abiding members of society.

Without divulging any professional confidences, in the wake of the 2014 invasion of the Crimean Peninsula many U.S. banks decided to stop serving customers with Ukrainian passports. No one explicitly made the decision “Your nation got invaded, so you should have less access to financial systems *half a world away*. This is a natural and just outcome in a democratic society.”

It flowed indirectly through “The Crimea now poses a heightened risk of money laundering”, “We lack the ability to discriminate between the Crimea and the rest of Ukraine”, “We care a lot more about not facilitating money laundering than we do about our infinitesimal Ukraine business so Ukraine is going on the High Risk Country list”, “Sorry, you have citizenship from the High Risk Country list, accordingly I’m not allowed to open this account for you. This is a commercial decision of the bank and will not be reversed.”

Maddeningly, *no one—*not the regulators, not Compliance, not the front-line employee delivering the decision*—*believes they are accountable for this result! Which happened! Tens! Of! Thousands! Of! Times!

Adverse actions against innocent individuals will certainly increase as a result of the current conflict. Indeed, some intemperate commentators are calling for harming individual Russians as a policy goal in and of itself.

The logic of collective responsibility for the actions of a despot is justly disfavored. I urgently hope that civil society chooses narrowly drawn regimes to express its preferences, and that it prefers legible and democratically accountable lawmaking over kicking the decisions to Compliance and taking no responsibility for what Compliance comes back with.