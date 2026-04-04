/**
 * Character 05 — Raven (Adaeze Okafor)
 * Former UN peacekeeping officer. Discipline is her armor, duty her compass.
 */

const template = {
  id: 'raven',
  name: 'Adaeze Okafor',
  callsign: 'Raven',
  nationality: 'Nigerian',
  background: 'Three UN peacekeeping tours — South Sudan, DRC, Mali. Decorated officer who traded blue helmets for UNOPCOM black. She has seen the worst humanity can do to itself. The aliens, at least, are an enemy she can fight without a committee vote.',
  personality: ['disciplined', 'analytical', 'compassionate', 'stoic'],
  motivation: 'Duty above all else — because the alternative is chaos',
  portrait_sprite: 'xcom1',
};

const chapters = [
  // ─── SURFACE (1–10) ───────────────────────────────────────────────
  {
    chapter_num: 1,
    tier: 'surface',
    title: 'Blue Helmet, Black Sky',
    content: `What Adaeze Okafor carries:

A classified dossier stamped in three languages — she doesn't open it, she already read the intercepts in Bamako. A pressed blue helmet patch, taken from her uniform the day she traded it for black. A list of names on a piece of paper folded so many times the creases are permanent, soft as cloth from handling. Thirty-seven names. She updates it.

The real list:

She carries Juba. She carries the specific forty-seven minutes during which she was ordered to hold position while things happened that orders should not have been permitted to permit. She carries the ceasefire that collapsed while diplomats argued about the punctuation in a treaty nobody was going to honor anyway. She carries South Sudan, DRC, Mali — three tours, three sets of lessons that the world keeps refusing to learn. She carries Emeka Okafor, her brother, who had a gap-toothed laugh too loud for proper indoor use and a motorcycle he never finished paying for. She carries the file she found three years after the incident — the friendly fire report, the commanding officer's name, the discovery that the thing she has never forgiven is attached to a man who has already sentenced himself to something worse than any verdict she could deliver. She carries the decision to forgive him anyway, in private, without telling him. She has been carrying that decision for three years. It is the heaviest thing on the list.

The intake officer hands her the dossier. She sets it down without opening it.

"You understand this is a one-way assignment."

"I've had those before."

She signs without reading the terms. Terms are for people who expect to negotiate. She stopped negotiating the day she watched a ceasefire collapse over a semicolon while people died underneath the paperwork.

UNOPCOM needs soldiers. She needs a war that makes sense.

She'll settle for a war that doesn't require a committee vote to fight.`,
    unlock_type: 'missions',
    unlock_value: { min: 0 },
  },
  {
    chapter_num: 2,
    tier: 'surface',
    title: 'Standing Orders',
    content: `She unpacked her kit in exactly eleven minutes. Everything folded to regulation, corners sharp enough to cut. The soldier in the next bunk — callsign Blaze — watched with open amusement.

"You iron your socks?"

"I maintain my equipment."

"Those are socks."

Adaeze placed the last pair in the drawer and closed it with a precise click. She had learned long ago that discipline in small things was the only reliable defense against chaos in large ones. Three tours had taught her that. The bodies in Malakal had taught her that.

She did not explain this to Blaze. Some lessons you cannot share. You can only hope the people around you survive long enough to learn them on their own.`,
    unlock_type: 'missions',
    unlock_value: { min: 1 },
  },
  {
    chapter_num: 3,
    tier: 'surface',
    title: 'Tactical Assessment',
    content: `She spent her first free evening studying the squad roster. Not the official files — those were sanitized for consumption. She watched how they moved through the mess hall. Who sat with whom. Who ate alone.

Ghost drifted through like smoke, acknowledging no one, noticed by everyone. There was a professional in that silence, the kind of operative who had killed in rooms where the bodies wouldn't be found for weeks. Adaeze respected competence. She filed Ghost under "asset — handle with care."

Ironside sat in the corner, broad-shouldered and still, eating mechanically. There was something in the set of his jaw she recognized from her own mirror. The look of a person carrying weight they hadn't put down in years.

She knew that look intimately. She wore it every day.`,
    unlock_type: 'missions',
    unlock_value: { min: 2 },
  },
  {
    chapter_num: 4,
    tier: 'surface',
    title: 'First Contact Protocol',
    content: `Her first alien firefight lasted nine minutes. She counted. Counting was a habit from peacekeeping — if you could count, you were still alive, and if you were still alive, you were still thinking, and if you were still thinking, you could act.

The plasma rounds moved differently from bullets. Slower to the eye but hotter, angrier. She adjusted her squad's positioning twice during the engagement, reading the alien movement patterns like she'd read militia formations in Goma.

"Raven, fall back to secondary." The voice on comms was clipped, urgent.

"Negative. Their suppression pattern has a three-second gap on the left flank. Spark, move on my mark." She watched. Counted. "Mark."

Spark moved. The flank collapsed. Nine minutes.

Afterward, she field-stripped her rifle and said nothing about the way her hands shook.`,
    unlock_type: 'missions',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 5,
    tier: 'surface',
    title: 'Old Soldiers',
    content: `She found Ironside in the armory at 0200, cleaning weapons that were already clean. She recognized the ritual. Busy hands keep the mind from wandering to places it shouldn't go.

"Can't sleep?" she asked, though she knew the answer.

"Can you?"

She pulled a chair to the workbench and picked up a disassembled sidearm. They worked in silence for an hour, two soldiers performing maintenance on guns and on themselves. The quiet between them was the particular quiet of shared deployment — not friendship, exactly, but something deeper. The understanding that you had both stood in the same terrible places and survived.

"It's different here," Ironside said eventually. "The enemy's clear."

"Yes." She slotted the barrel home with a satisfying click. "That's why I came."

She did not say: I came because of you, too. Because I owe you a debt you don't know about. Because the universe is not so large that I could ignore the coincidence of your name on this roster.`,
    unlock_type: 'missions',
    unlock_value: { min: 4 },
  },
  {
    chapter_num: 6,
    tier: 'surface',
    title: 'Rules of Engagement',
    content: `Viper wanted to improvise. Raven wanted to plan. The briefing room became a cold front.

"If we lock in a rigid approach and the terrain doesn't match the intel, we're dead." Viper leaned back, arms crossed, radiating the particular confidence of someone who had survived by instinct alone.

"If we go in without structure, we're gambling. I don't gamble with lives."

"You sound like every officer I've ever ignored."

The room went still. Raven held Viper's gaze for a long, measured moment. In Juba, a militia commander had said something similar to her, right before his undisciplined fighters walked into an ambush that killed thirty of them.

"Then you've been lucky," Raven said quietly. "Luck runs out. Plans adapt."

She presented the operation in three phases with contingencies for each. Viper said nothing more, but the set of her shoulders said everything. This tension would not resolve quickly. Perhaps it shouldn't. Friction, properly channeled, kept edges sharp.`,
    unlock_type: 'missions',
    unlock_value: { min: 6 },
  },
  {
    chapter_num: 7,
    tier: 'surface',
    title: 'The Weight of Rank',
    content: `Command offered her a squad lead position. She accepted with a nod and no ceremony. Ceremony was for peacetime.

That night she sat on her bunk and wrote the names of every soldier under her command on a piece of paper. She folded it and placed it in her breast pocket, where it would stay until the names changed — through death, transfer, or reassignment. She had done this in every posting since Malakal.

The paper was a promise. Not to keep them alive — she had learned the hard way that such promises were lies. The promise was simpler: to remember. To carry the weight of their names so that if the worst came, they would not become statistics. They would remain people, with callsigns and habits and the particular way Blaze laughed too loud and Frost's hands were always cold and Ghost never entered a room without mapping the exits.

She folded the paper carefully. The creases were sharp.`,
    unlock_type: 'rank',
    unlock_value: { min: 2 },
  },
  {
    chapter_num: 8,
    tier: 'surface',
    title: 'Measure Twice',
    content: `She ran the combat drill four times before the squad got it right. Blaze complained. Spark suggested optimizations. Frost said nothing but executed flawlessly each repetition.

"Again," Raven said.

"We nailed it last time," Blaze protested.

"You nailed it once. I need you to nail it when you're tired, when you're scared, when the air smells like ozone and someone next to you is screaming. Muscle memory doesn't care about your feelings. Again."

They ran it again. And again. On the sixth repetition, the movements were automatic — smooth, interlocking, each soldier covering the next without conscious thought. That was the point. Consciousness was a luxury in combat. Training bought you the seconds that thinking stole.

Blaze didn't complain on the seventh run. Progress.`,
    unlock_type: 'missions',
    unlock_value: { min: 7 },
  },
  {
    chapter_num: 9,
    tier: 'surface',
    title: 'Letters Home',
    content: `She wrote to her mother every Sunday. The letters said nothing about aliens or plasma burns or the sound a soldier makes when a stun lance catches them across the ribs. She wrote about the food (adequate), the weather (irrelevant), the people (capable). She asked about her father's garden and her niece's schoolwork and whether the generator was holding up through harmattan season.

Her mother wrote back with news from Lagos. Fuel prices. Traffic. Church gossip. A world that continued turning while Adaeze stood between it and the dark.

She kept every letter in a metal box under her bunk. The box had survived three deployments. It would survive this one, or it wouldn't matter.

In the margins of her mother's latest letter, in handwriting so small it was nearly invisible, her mother had written: "Come home whole, Adaeze. Your brother cannot lose you too."

She folded the letter and did not cry. Discipline in small things.`,
    unlock_type: 'time',
    unlock_value: { min_days: 7 },
  },
  {
    chapter_num: 10,
    tier: 'surface',
    title: 'First Blood, Last Rites',
    content: `The first soldier she lost under UNOPCOM command died on a Tuesday. She noted the day because details were armor against despair.

The plasma bolt caught Rodriguez mid-stride, and there was a half-second where the physics of it didn't make sense — a body in motion that simply stopped being a body. She called the retreat with a voice so steady it frightened her. Steady voices in chaos meant the screaming was happening somewhere deeper, somewhere she'd deal with later.

She dealt with it at 0300 in the shower block, water hot enough to redden skin, forehead pressed against cold tile. She allowed herself exactly five minutes. Then she dried off, dressed, and updated the tactical assessment to account for the gap in the formation.

In the morning she addressed the squad. "Rodriguez died because the enemy adapted faster than our intel predicted. We will adapt faster. We will honor them by being better. Questions?"

No questions.

She added Rodriguez to the list in her breast pocket. The paper was getting crowded.`,
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_kia' },
    is_achievement: true,
    achievement_name: 'Duty Unbowed',
    achievement_desc: 'Raven lost a soldier and held the line — because that is what officers do.',
  },

  // ─── ROOTS (11–20) ────────────────────────────────────────────────
  {
    chapter_num: 11,
    tier: 'roots',
    title: 'Juba, 2019',
    content: `She didn't talk about South Sudan. No one who'd been there did, not really. You could describe the geography, the politics, the mandate — Security Council Resolution 2459, Chapter VII authorization, protection of civilians. You could recite the acronyms: UNMISS, SOFA, ROE. None of it touched the truth.

The truth was a camp with forty thousand displaced people pressing against a perimeter held by six hundred peacekeepers with rules of engagement written by lawyers in New York. The truth was the sound of gunfire at 3 AM and not knowing if it was coming for you or for the people you were supposed to protect.

She had been twenty-six. Young enough to believe in the mission. Old enough to know that belief and outcome were different things.

In UNOPCOM, the rules were simpler. Identify the threat. Eliminate the threat. Protect the people. No committees. No resolutions. No semicolons.

She had never been more grateful for clarity.`,
    unlock_type: 'missions',
    unlock_value: { min: 10 },
  },
  {
    chapter_num: 12,
    tier: 'roots',
    title: 'The DRC Rotation',
    content: `Her second deployment had been worse. You have to understand something about the eastern Congo in 2021: it was not a war. It was a permanent condition. The M23 in the hills, ADF deeper in the forest, twelve other armed groups with shifting allegiances and overlapping grievances, and underneath all of them a civilian population that had been dying for so long that the international community had stopped being surprised by it.

She commanded a patrol base near Beni. Every morning she sent soldiers out knowing some might not return. Every evening she reviewed reports written in the dry language of military bureaucracy — "contact with hostile elements," "civilian casualties assessed," "area secured pending reinforcement" — language designed to describe war without touching it.

One night, a militia attacked a village three kilometers from her position. She could hear it from the base. She requested permission to intervene. Permission was denied. The village fell outside her area of responsibility.

She listened to the gunfire for forty-seven minutes.

Forty-seven minutes. She counted. She has replayed it many times since and she is no longer certain the number is exactly right — the mind edits, the mind protects. What doesn't vary: she was there. She could hear it. She had soldiers, equipment, training, the ability to stop it, and a piece of paper that said it wasn't her problem. She listened to the gunfire.

The village had three hundred people in it. She was never given the casualty count.

She still carries those forty-seven minutes. Not as regret — regret implies she had a choice the paper hadn't already made. As weight. The specific weight of knowing that the rules are necessary and not sufficient and sometimes not enough and you will carry that arithmetic for the rest of your life and never find the bottom of it.

At UNOPCOM the rules are different. Identify the threat. Eliminate the threat. Protect the people. No committees. No resolutions. No semicolons between her and the village.

She has never been more grateful for anything. She is also not sure it balances the arithmetic. She doesn't think it's supposed to.`,
    unlock_type: 'missions',
    unlock_value: { min: 12 },
  },
  {
    chapter_num: 13,
    tier: 'roots',
    title: 'Ghost Protocol',
    content: `She and Ghost were paired for a reconnaissance mission. Two operators, minimal gear, twelve hours in hostile territory. Ghost moved through the landscape like water through cracks — silent, inevitable, finding every gap.

Raven moved differently. Precise. Methodical. Every step placed with intention, every angle checked, every line of retreat cataloged. Where Ghost was intuition, she was calculation.

They didn't speak for the first four hours. They didn't need to.

At the midpoint, sheltering in a collapsed structure while an alien patrol swept past, Ghost said: "You count things."

"I count everything."

"I know. You counted the patrol interval. Seventeen seconds."

"Sixteen point eight."

Something that might have been a smile crossed Ghost's face. It was there and gone like a rifle flash.

"Good," Ghost said. And that was the highest praise Raven had ever received from anyone in UNOPCOM.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ghost', min_missions: 8 },
  },
  {
    chapter_num: 14,
    tier: 'roots',
    title: 'Mentorship',
    content: `She started running tactical seminars. Unofficial, after hours, in the briefing room with the lights dimmed and a holographic map of whatever terrain they'd be operating in next. Attendance was voluntary. Within two weeks, every active soldier attended.

She taught the way she'd been taught at the Nigerian Defence Academy — through scenario, through failure, through repetition until the right decision became reflexive. She ran ambush drills where every option was wrong and the point was learning to choose the least wrong one quickly.

Razor picked up tactical movement fastest. Storm had an instinct for terrain that surprised her. Titan understood fire and maneuver on a level that suggested formal training he never mentioned.

She didn't praise. She corrected, adjusted, refined. Praise was cheap. Competence was the only currency that bought survival.

After the third session, Frost stayed behind. "You're good at this," he said quietly. "Teaching."

"I'm adequate. The squad is good at learning."

"That's the same thing, Raven."

She considered this. Perhaps it was.`,
    unlock_type: 'missions',
    unlock_value: { min: 14 },
  },
  {
    chapter_num: 15,
    tier: 'roots',
    title: 'The Ironside Question',
    content: `She watched Ironside more carefully than anyone on the squad knew. Not because she doubted his capability — he was, by any measure, one of the most effective soldiers she'd ever served alongside. She watched because she understood what lived behind his eyes.

Guilt has a posture. A particular way of holding the shoulders, slightly forward, as if bracing for a blow that already landed years ago. She'd seen it in peacekeepers who'd failed to prevent massacres. In medics who'd lost patients. In officers who'd given orders that ended in flag-draped coffins.

Ironside carried his guilt like a rucksack he'd forgotten how to take off. She could have told him. Could have said: I see it. I know what you did. She could have gone further — could have told him the thing that would either free him or destroy him.

She did not. Not yet. Perhaps not ever. Some truths were weapons, and Adaeze Okafor did not deploy weapons without a tactical objective.

For now, she watched. And she protected him in the only way she knew how: by being the officer who ensured the mission went right, so that he would not add more names to whatever list he carried.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ironside', min_missions: 10 },
  },
  {
    chapter_num: 16,
    tier: 'roots',
    title: 'Field Medicine',
    content: `She took a plasma graze across the shoulder during a night operation. It burned through her armor plating and scorched the skin beneath — not deep enough for medevac, deep enough to remember.

Frost treated her in the field, his hands moving with the particular gentleness of someone who understood that healing was not just physical. He cleaned the wound, applied the burn gel, wrapped the dressing with precise, even pressure.

"You should rest the arm for forty-eight hours."

"Noted." She would not rest the arm for forty-eight hours.

"Raven." He looked at her with those tired, serious eyes. "The wound heals faster if you let it."

"I am aware of how wounds heal, Frost."

"All kinds of wounds?"

The question hung in the air between them. She met his gaze and saw no judgment there — only the quiet recognition of one person who carried too much looking at another who did the same.

"Noted," she said again, softer this time.`,
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_wounded' },
  },
  {
    chapter_num: 17,
    tier: 'roots',
    title: 'Chain of Command',
    content: `A mission went sideways. Bad intel, wrong terrain, alien forces three times the expected strength. Standard protocol called for withdrawal. Viper wanted to push.

"We break through or we die trying," Viper said on comms, already moving.

"We withdraw, regroup, and hit them when we have the advantage," Raven countered. "That's not cowardice. That's arithmetic."

"Your arithmetic gets people killed by hesitation."

"Your courage gets people killed by stupidity."

The silence on comms was absolute. Every soldier in the squad held their breath, waiting to see which voice would prevail. In the end, it was Raven's — not because she outranked Viper, but because she'd already called in the extraction corridor and the clock was running.

They withdrew. They regrouped. They hit the target twelve hours later with proper support and took it clean.

Viper didn't speak to her for three days. On the fourth day, she dropped a tactical suggestion on Raven's desk — handwritten, detailed, grudgingly respectful. It was a good suggestion. Raven incorporated it into the next operation.

The tension between them bent. It did not break.`,
    unlock_type: 'missions',
    unlock_value: { min: 16 },
  },
  {
    chapter_num: 18,
    tier: 'roots',
    title: 'Sunday Rituals',
    content: `Every Sunday, without exception, Raven observed three rituals. She wrote to her mother. She cleaned her weapon. She read one chapter from a battered paperback copy of Chinua Achebe's "Things Fall Apart" — the same book, the same chapters, in rotation, year after year.

Spark found her reading once and asked why she didn't switch to something new.

"Because the words don't change, but I do. Every time I read it, I'm a different person reading the same story. The distance between the text and my understanding of it — that's where growth lives."

Spark considered this with the focused intensity Spark brought to everything. "That's either very profound or very stubborn."

"In my experience, those are the same thing."

Spark laughed — a bright, quick sound that cut through the perpetual hum of the base's ventilation. Raven almost smiled. Almost. She turned the page and continued reading about a man who held his world together through strength and watched it fall apart anyway.

She understood Okonkwo better with each passing year.`,
    unlock_type: 'time',
    unlock_value: { min_days: 21 },
  },
  {
    chapter_num: 19,
    tier: 'roots',
    title: 'Night Watch',
    content: `She volunteered for night watch more than anyone. Command assumed it was dedication. It was, partly. It was also that the small hours were when the base was quietest, and quiet was when the discipline she maintained during the day relaxed its grip just enough for her to feel the things she kept locked away.

Standing on the observation deck at 0300, watching the sky for shapes that shouldn't be there, she allowed herself to think about Emeka. Her brother. Three years older, twice as stubborn, with their father's laugh and their mother's impatience. He'd gone into the military before her — had been the reason she'd followed, if she was honest.

She thought about him every night. Not the death — she'd made peace with that, or something shaped like peace. She thought about the living version. The way he'd argue with their mother about jollof rice. The scar on his left hand from a childhood accident with a machete. The letters he'd written her from training that were half advice, half terrible jokes.

She stood watch and she remembered and she counted the stars, because counting was what Adaeze Okafor did when the world became too heavy to hold without a system.`,
    unlock_type: 'streak',
    unlock_value: { min: 5 },
  },
  {
    chapter_num: 20,
    tier: 'roots',
    title: 'A Soldier\'s Foundation',
    content: `Thirty missions. She marked each one with a small notation in the margin of her operational journal — date, location, outcome, casualties. The journal was filling up. The margins were getting crowded.

She reviewed the entries sometimes, looking for patterns. Not tactical patterns — those she analyzed in real time. Personal patterns. The moments she'd hesitated. The calls she'd made that might have gone differently. The soldiers she'd saved by being right and the ones she hadn't saved despite being right.

The journal was an honest document. She did not flatter herself in its pages. She noted every error with the same clinical precision she noted every success. The goal was not comfort. The goal was competence.

She was becoming a better officer. She could see it in the data. Fewer casualties per engagement. Faster response times. Better integration of squad capabilities. The numbers told a story of improvement.

But numbers were cold things, and at night, standing watch, she did not think about numbers. She thought about names. The paper in her breast pocket was soft from handling, the creases deep and permanent. She unfolded it sometimes and read the names aloud, very quietly, like a prayer.

This was her foundation: duty, discipline, and the private devotion of remembering every person she had failed to keep alive.`,
    unlock_type: 'missions',
    unlock_value: { min: 20 },
    is_achievement: true,
    achievement_name: 'The Officer\'s Journal',
    achievement_desc: 'Raven\'s operational record tells two stories — one in data, one in names.',
  },

  // ─── CRACKS (21–30) ───────────────────────────────────────────────
  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'Hairline Fracture',
    content: `The cracks appeared after a mission that should have been routine. Sweep and clear, low threat assessment, standard formation. Except the threat assessment was wrong, and the standard formation walked into a kill zone, and Raven's voice on comms was the only thing that kept it from becoming a massacre.

She saved them. Every single one. Her planning, her contingencies, her drilled responses — all of it worked. Zero casualties.

And afterward, in the quiet of her quarters, she broke a glass. Just picked it up and threw it at the wall. The sound it made was small and sharp and completely insufficient for the rage she felt. Rage at the bad intel. Rage at the system that produced it. Rage at herself for trusting it.

She cleaned up the glass immediately. Swept every shard. Disposed of the evidence. Discipline in small things.

But the crack was there now — a hairline fracture in the armor she'd worn for a decade. The armor still held. She wasn't sure for how long.`,
    unlock_type: 'missions',
    unlock_value: { min: 25 },
  },
  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'The Cost of Counting',
    content: `She'd counted four hundred and twelve things that day. Patrol intervals, ammunition rounds, steps between cover positions, seconds of silence between plasma volleys, heartbeats during the extraction. Four hundred and twelve discrete measurements of a universe she was trying to hold together through quantification.

Frost noticed. Of course Frost noticed — the medic saw everything, the way combat medics always did, because their survival depended on reading people faster than people could hide.

"How many times did you blink in the last minute?" he asked, sitting beside her in the mess hall.

"Fourteen. Average is fifteen to twenty. I'm tired."

"You counted your blinks."

"I count everything, Frost. You know this."

"I know. I'm asking if you know why."

She set down her fork. The mess hall noise swelled around them — Blaze laughing at something, Storm arguing with Titan about something inconsequential. Normal sounds. Living sounds.

"Because if I stop counting, I have to feel. And if I feel everything I've stored up, I will not be able to function. And if I cannot function, people die."

Frost nodded slowly. "That's the most honest thing you've ever said to me."

"Don't get used to it."`,
    unlock_type: 'missions',
    unlock_value: { min: 28 },
  },
  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'The Viper Accord',
    content: `They'd been fighting — tactically, philosophically, temperamentally — for months. Then Viper saved her life.

It was unglamorous. A collapsing structure, a missed step, a hand reaching through dust and debris to haul her clear. Viper's grip was iron. Her eyes were wild. "Move, Raven. Now."

They ran. Behind them, the structure folded like a paper box under an alien bombardment.

In the aftermath, covered in dust, breathing hard, Raven looked at Viper and saw something she hadn't allowed herself to see before: not rebellion, but a different kind of discipline. Viper's instincts were trained by survival, not by academies. Different school, same education.

"Thank you," Raven said. The words cost her nothing. They should have come sooner.

Viper shrugged. "You'd have done the same."

"Yes. But you did it first."

Something shifted between them. Not friendship — they would never be friends in any conventional sense. But the tension bent into something more productive. Mutual respect, built on the grudging recognition that each was exactly what the other was not, and the squad needed both.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'viper', min_missions: 15 },
  },
  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'The Mali Letter',
    content: `A letter arrived from a former colleague — Major Diallo, who'd served with her in Kidal. He was leaving the peacekeeping corps. "There is no peace to keep," he wrote. "Only the illusion of order maintained by people too tired to admit the truth."

She read the letter three times. Each reading made her colder. Diallo had been the best officer she'd known — rigorous, principled, incorruptible. If the system had broken him, the system was broken.

She wrote back. Her letter was short: "Come here. The enemy is real and the mission is clear. Bring your gear."

She never sent it. Diallo had a family. Two daughters. You don't invite a father into a war he doesn't need to fight.

Instead she folded his letter and placed it in the metal box under her bunk, next to her mother's letters, next to the operational journals, next to the photograph of Emeka she never looked at but could not throw away.

The box was getting heavy. Everything was getting heavy.`,
    unlock_type: 'time',
    unlock_value: { min_days: 30 },
  },
  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'Breaking Point Adjacent',
    content: `A territory fell. Not her sector — she wasn't on that rotation. But she'd written the defensive plan that was supposed to hold it. She'd war-gamed it. Run the scenarios. Accounted for every variable she could identify.

She hadn't accounted for the variable that mattered. Alien forces adapted mid-assault, using a tactic no one had documented. Her plan was sound against every known threat. It failed against the unknown one.

In her quarters, she went through the plan line by line. Found the gap. A single assumption, buried in paragraph four of section three, that alien reinforcement timing would follow established patterns. It hadn't. Seven words. Seven wrong words that cost them a territory.

She did not break a glass this time. She sat very still for a very long time, hands flat on the desk, and practiced the discipline of accepting failure without being destroyed by it.

It took four hours.

By morning she had rewritten the defensive doctrine to eliminate the assumption. The new version was better. Failure was educational. That was the only mercy it offered.`,
    unlock_type: 'event',
    unlock_value: { event_type: 'territory_lost' },
  },
  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'Emeka\'s Birthday',
    content: `November seventh. She told no one. She performed her duties with her usual precision — morning briefing, afternoon drill, evening intelligence summary — and nothing in her bearing suggested anything was different. The squad was observant. They did not observe this.

At 2300, alone on the observation deck, she permitted herself to remember.

Emeka would have been thirty-nine. He would have been insufferable about it — he'd always been vain about his age in the specific way of eldest children who measure their worth by the distance they've traveled. He would have demanded a party. Jollof rice — their mother's recipe, not the version Emeka called "acceptable-but-not-quite." Their father saying grace too long while Emeka kicked her under the table. Their mother's voice cutting across the table — "Emeka, stop that" — without looking up from the serving spoon.

None of that happened. None of it would ever happen. Emeka died on a Tuesday in a place that doesn't matter, killed by a mistake made by a man who didn't know his name. The man knows his name now. He has known it for years. He says it in the dark, she thinks, to punish himself. She has forgiven him in private and not told him. She is still deciding whether to.

She stood on the observation deck. The stars were there. She is a tactician; she does not assign meaning to stars. But Emeka used to say that the night sky was proof that beauty doesn't require a reason, and Emeka is gone, and she still looks up.

"Happy birthday, brother," she said. Not a whisper. Full voice, measured, steady. He had hated when she was quiet about things.

The stars said nothing. She hadn't expected them to. She counted them anyway — thirty-seven, before she stopped. One for each name on the paper in her pocket.`,
    unlock_type: 'time',
    unlock_value: { min_days: 40 },
  },
  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'The Ironside Confession',
    content: `He told her over coffee. Not all of it — Ironside never told anyone all of it — but enough. The friendly fire incident. The soldiers killed. His certainty that the error was his, regardless of what the investigation concluded.

She held her coffee mug with both hands and listened with the stillness of someone hearing a story they already knew. Because she did know. She had known for years, long before UNOPCOM, long before this conversation.

"Three men," he said. "Three men who trusted me."

She could have told him then. Could have said: One of those men was my brother. She could have watched his face collapse, watched the guilt that already consumed him devour what remained. She could have been honest.

Instead she said: "You carry it well."

"I don't carry it at all. It carries me."

"Then let the squad share the weight. You don't have to hold it alone."

He looked at her with something raw in his expression — gratitude, or its ghost. She held his gaze and kept her face still, because Adaeze Okafor's discipline could hold anything.

Anything except this. But she held it anyway.`,
    unlock_type: 'missions',
    unlock_value: { min: 35 },
  },
  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'Storm\'s Question',
    content: `Storm asked her, bluntly as Storm asked everything: "Do you ever let people in, or is the protocol thing all the way down?"

"The protocol is not a wall. It's a load-bearing structure."

"That's the most Raven answer possible."

She considered whether to say more. Storm was perceptive in an unpolished way — no tact, but genuine curiosity. There was value in that. Too many people wrapped their questions in courtesy until the question itself disappeared.

"I had a brother," she said. It was the first time she'd mentioned Emeka to anyone on base. "Military. Killed in action. After that, I decided that the best way to honor the people I love is to be someone they could rely on. Protocol is how I do that."

Storm was quiet for a long time. Then: "I'm sorry about your brother."

"So am I."

"Does it get easier?"

"No. You get stronger. It's not the same thing, but it's what's available."

Storm nodded, and for once, asked nothing more. The silence was respectful. Raven appreciated it more than Storm would ever know.`,
    unlock_type: 'streak',
    unlock_value: { min: 10 },
  },
  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'Operational Fatigue',
    content: `She miscounted. A patrol interval — sixteen seconds, she'd said. It was eighteen. Two seconds. Irrelevant in most contexts. In combat, two seconds was the difference between cover and exposure, between life and a name on a wall.

No one noticed. The mission succeeded. The two-second error vanished into the noise of victory.

She noticed. She went back to her quarters and reviewed every count she'd made in the last week, checking each against the operational data. All correct except that one. One error in hundreds of measurements.

Statistically insignificant. Personally devastating.

She was tired. Not the physical exhaustion of long operations — she could manage that. The tiredness was deeper, structural, the fatigue of maintaining a system of perfect discipline against the entropy of war. The armor was heavy. The cracks were spreading. The system still worked, but the margin was narrowing.

She ran the combat drill seven times the next morning. The squad groaned. She did not explain. Some maintenance was invisible.`,
    unlock_type: 'missions',
    unlock_value: { min: 40 },
  },
  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'The Armor Holds',
    content: `A bad night. The kind where the discipline buckled and the things she kept behind it pressed against the walls like water against a dam. Juba. Goma. Kidal. Emeka's laugh. Ironside's confession. The forty-seven minutes of gunfire she'd been forbidden to stop.

She sat on the floor of her quarters in the dark and breathed. In for four counts. Hold for four. Out for four. Hold for four. Box breathing — the technique was older than she was, reliable as gravity. The parasympathetic nervous system didn't care about grief. It responded to rhythm, to pattern, to the mechanical act of breathing with intention.

Four. Four. Four. Four.

By 0200, the worst had passed. By 0300, she was reviewing tomorrow's mission brief. By 0400, she was on the observation deck, counting stars, steady as a compass needle.

The armor held. It always held. That was the point of armor — not to prevent damage, but to keep you standing while damaged. She was standing. She would continue to stand.

For the squad. For Emeka. For the names on the paper in her pocket.

For everyone who needed someone strong enough to hold the line while the world tried to fall apart.`,
    unlock_type: 'missions',
    unlock_value: { min: 45 },
    is_achievement: true,
    achievement_name: 'Unbroken Protocol',
    achievement_desc: 'The cracks spread but the armor holds. Raven endures.',
  },

  // ─── SECRETS (31–40) ──────────────────────────────────────────────
  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'The Name She Carries',
    content: `Emeka Okafor. Lance Corporal. Nigerian Army, 72nd Special Forces Battalion. Killed in action during a joint training exercise with allied forces. The official report cited a communications failure leading to a friendly fire incident. Three soldiers dead. One of them her brother.

She had read the report seventeen times. She had memorized the name of every officer involved, every soldier in both units, every entry in the radio log. She knew the exact time of the incident — 14:37 local — and the exact bearing of the fire that killed her brother — 247 degrees magnetic.

She also knew the name of the allied officer who gave the order. She had known before UNOPCOM. Before the roster. Before she'd seen his callsign and felt the floor shift beneath her.

Ironside.

She had not come to UNOPCOM for revenge. Revenge was chaos, and chaos killed more people than malice ever did. She had come because when she saw his name on the recruitment list, she understood that the universe was asking her a question she had spent years avoiding: What do you do with someone who killed the person you loved most and has been punishing himself for it ever since?

She chose to serve beside him. She chose to protect him. She chose forgiveness, not as an act of grace but as an act of discipline — the hardest discipline she had ever practiced.`,
    unlock_type: 'missions',
    unlock_value: { min: 48 },
  },
  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'The Investigation',
    content: `After Emeka's death, she had gone through the investigation quietly. Not the official one — that concluded in six weeks with a finding of "procedural error, no individual culpability." She conducted her own.

She obtained the radio logs through a friend in signals intelligence. She mapped the timeline minute by minute. She interviewed two survivors — informally, over drinks, the way intelligence officers gather information when formal channels are closed.

The picture that emerged was not one of incompetence. It was worse. It was a cascade of small, reasonable decisions that combined into a lethal outcome. The kind of failure that could happen to any unit, any officer, on any day when the variables aligned just wrong.

Ironside had been in command. The call had been his. But the intelligence was bad, and the coordinates were off, and the radio frequency was jammed at the critical moment. He made the best decision available with the information he had. It was the wrong decision. Three men died.

She spent three months hating him. Then she spent a year understanding him. Then she spent the rest of the time forgiving him, which was harder than either.`,
    unlock_type: 'missions',
    unlock_value: { min: 50 },
  },
  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'Why She Stays Silent',
    content: `Frost asked her once — gently, the way Frost asked everything — whether she'd lost anyone close to her in military service. She said yes. He did not ask who. He was wise enough to leave the door open without walking through it.

She had considered telling Ironside. Played the conversation in her head a hundred times, testing every variation. In every version, his face collapsed. In every version, the guilt that already bent him doubled its weight. In every version, something broke that could not be repaired.

She was protecting him. She knew that, and she knew the word for it was paternalism, and she knew that some would call it dishonest. Perhaps it was. But honesty that destroyed a person was not virtue — it was cruelty wearing virtue's mask.

Ironside was effective. He was reliable. He was, despite his guilt, one of the best soldiers she had ever served with. If she told him the truth, she would not lose an ally. She would lose a man. The guilt would consume what remained.

So she stayed silent. She stood beside him in firefights and briefings and late-night armory sessions, and she carried the secret like she carried everything else: with discipline, with precision, and with a cost she never let anyone see.`,
    unlock_type: 'missions',
    unlock_value: { min: 53 },
  },
  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'The Photograph',
    content: `In the metal box under her bunk, beneath the letters and the journals, there was a photograph. Emeka in uniform, grinning, the day he completed special forces selection. He looked like their father — same broad forehead, same gap-toothed smile. She looked like their mother. People always said they didn't look like siblings. They'd looked like siblings to anyone who paid attention.

She took the photograph out on the anniversary. Not his birthday — she observed that on the deck, under stars. The anniversary of his death. On that day, she sat on her bunk with the photograph in her hands and she allowed herself to be his sister instead of an officer.

"I'm serving with the man who killed you," she told the photograph. "He's a good man. He made a mistake. You would have understood that. You made mistakes too — remember that time in Lagos with the motorcycle? Mama was furious."

She smiled. It was a small, private smile that no one in UNOPCOM had ever seen.

"I forgave him, Emeka. I forgave him years ago. But I haven't told him. I don't know if I will. You'd probably say I should. You always said secrets were lazy — that they let you avoid the harder conversation."

She placed the photograph back in the box. Closed the lid. Returned to being Raven.`,
    unlock_type: 'time',
    unlock_value: { min_days: 50 },
  },
  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'The Notebook Entry',
    content: `She kept a separate journal — not the operational one. A private record, written in Igbo, that no one else on base could read. In it she wrote the things that the operational journal couldn't hold.

The entry from the night after Ironside's confession read:

"He told me today. Not everything, but enough. He said three men. He doesn't know their names — the investigation redacted them. I could tell him. I could say: their names were Emeka Okafor, David Mensah, and Joseph Abiodun. I knew one of them. I loved one of them.

I didn't. I sat and I drank my coffee and I told him to let the squad share his weight. What weight? His weight is my weight is Emeka's weight is the weight of a mistake that happened on a Tuesday at 14:37 and will echo forever.

I am not angry. I was. I am not. What I am is tired of carrying this alone. But who would I tell? Ghost would understand silence but not the choice to maintain it. Frost would understand the compassion but not the cost. Viper would call it weakness. Blaze would not know what to do with it.

So I carry it. The armor holds. It always holds."`,
    unlock_type: 'streak',
    unlock_value: { min: 14 },
  },
  {
    chapter_num: 36,
    tier: 'secrets',
    title: 'Close Call',
    content: `Ironside nearly died. A mission gone wrong — ambush, heavy fire, retreat cut off. She heard his voice on comms, strained, calling coordinates that meant he was pinned and alone.

She overrode protocol. Redirected the extraction to his position. Exposed the squad to additional risk. Made the call a textbook would condemn and a human being would make without hesitation.

They pulled him out. He was bleeding but alive. In the medevac, he looked at her with confusion. "You broke the extraction plan."

"The extraction plan was wrong."

"It was your plan."

"Then I corrected my error."

She walked away before he could see her hands shaking. In the privacy of the equipment room, she pressed her palms flat against the wall and breathed. Four. Four. Four. Four.

She had almost lost Ironside. The man who killed her brother. The man she had forgiven. The man she protected because forgiveness without action was just a pleasant feeling, and Adaeze Okafor did not deal in pleasant feelings. She dealt in duty.

Her duty, self-assigned and absolute, was to ensure that Ironside survived. Not as penance. Not as redemption. As the logical conclusion of a forgiveness she had chosen to make real.`,
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_wounded' },
  },
  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'Frost Sees',
    content: `She should have known the medic would notice. Frost read people the way she read terrain — methodically, deeply, missing nothing.

"You watch him differently," Frost said one evening. They were alone in the med bay. She'd come for a routine check. He'd closed the door.

"I watch everyone."

"Not like that. Everyone else you assess. Ironside you... guard."

She said nothing. Frost waited. He was very good at waiting — better than she was, which irritated her.

"There is a history," she said carefully. "It is not mine to share."

"It's not his either. Is it?"

She looked at Frost and saw that he knew. Not the specifics — he couldn't know those. But the shape of the secret. The particular weight of a person carrying someone else's burden without permission.

"You should tell him," Frost said quietly.

"It would destroy him."

"Or it would free him. You can't know which."

"I can estimate. And the estimate says the risk is unacceptable."

Frost held her gaze a moment longer, then nodded. He returned to his instruments. The conversation was over, but the knowledge was not. Someone else now carried a corner of her weight. She was surprised to find it lighter.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 25 },
  },
  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'Ghost\'s Observation',
    content: `Ghost didn't ask. Ghost stated.

They were on a rooftop, providing overwatch, waiting for a target to move. Hours of silence. Comfortable silence, the kind that only existed between professionals who didn't need to fill space with noise.

"You know something about Ironside that he doesn't know about himself."

It wasn't a question. Raven didn't pretend it was.

"Yes."

"It won't stay hidden forever."

"Nothing does."

"What happens when it surfaces?"

She scanned the horizon through her scope. The crosshairs drifted across empty streets, abandoned vehicles, the alien architecture that had colonized the city block. Everything was still.

"When it surfaces, I will be there. I will manage the situation. It's what I do."

"You can't manage a human being, Raven."

"I'm not managing him. I'm managing the information."

Ghost said nothing more. The silence resumed, but it was different now — heavier, aware. Two people sitting with a truth and the understanding that truths, like enemies, eventually stopped hiding.

The target never appeared. They withdrew at dawn. She and Ghost never spoke about it again.`,
    unlock_type: 'missions',
    unlock_value: { min: 60 },
  },
  {
    chapter_num: 39,
    tier: 'secrets',
    title: 'Mother\'s Intuition',
    content: `Her mother's letter arrived on a Wednesday. Between the usual news — fuel prices, church gossip, the neighbor's new baby — there was a paragraph that stopped Raven's breath.

"Your father found Emeka's service records while cleaning the study. Among them was a letter from a British officer expressing condolence. The name was familiar — I think it is someone you once mentioned. Hagen? No. Ironside? I am old and my memory is poor. But I remember the way you said his name. Like a word you had practiced many times before speaking."

Her mother was neither old nor poor of memory. She was a former secondary school headmistress who could detect a lie at thirty meters and extract a confession over groundnut soup. She knew. She didn't know the details, but she knew the shape of the thing her daughter carried.

Raven wrote back: "You remember correctly. He is here. He is a good soldier. I am at peace."

Her mother's reply was three words: "Are you sure?"

She folded the letter. She was not sure. She had never been sure. But certainty was a luxury, and Adaeze Okafor dealt in duty, not luxury.`,
    unlock_type: 'time',
    unlock_value: { min_days: 60 },
  },
  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'The Weight of Mercy',
    content: `She dreamed about Emeka. Not the death — she never dreamed about the death. She dreamed about a Sunday at their parents' house, all of them around the table, their father saying grace, Emeka kicking her under the table because grace was too long and the jollof rice was getting cold.

She woke up smiling. The smile lasted four seconds before reality reassembled itself around her like armor clicking into place.

She lay in the dark and took inventory. The secret was intact. Ironside was alive and fighting. Frost knew the shape of it. Ghost knew the fact of it. Her mother suspected the whole of it. The circle was widening, slowly, the way all circles did.

She could not maintain this forever. She knew that. Secrets were entropic — they decayed toward revelation the way all things decayed toward equilibrium. One day, Ironside would learn that Emeka Okafor was her brother. One day, the forgiveness she had practiced in private would need to be spoken aloud.

But not today. Today there were missions to plan and soldiers to train and aliens to fight. Today the armor held and the duty was clear and the paper in her breast pocket had exactly the right number of names on it.

The weight of mercy was heavier than the weight of anger. She had chosen it anyway. She chose it every morning. She would continue to choose it until choosing was no longer necessary.`,
    unlock_type: 'missions',
    unlock_value: { min: 65 },
    is_achievement: true,
    achievement_name: 'The Silent Forgiveness',
    achievement_desc: 'Raven carries the heaviest secret on the squad — and chose mercy over justice.',
  },

  // ─── LEGACY (41–50) ───────────────────────────────────────────────
  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'Leading from the Heart',
    content: `Something changed after the sixtieth mission. Not dramatically — Raven didn't do dramatic. But the squad noticed. Small things. She said "well done" after a clean operation. She asked Blaze about a minor injury with concern that went beyond tactical assessment. She laughed at one of Spark's jokes — briefly, quietly, but unmistakably.

The protocol remained. The discipline held. But there was something warmer underneath it now, as if the armor had been reforged with a different alloy — one that allowed light through without sacrificing strength.

Frost noticed first, because Frost noticed everything. "You're different," he said.

"I'm the same."

"You're the same person doing things differently. That's the definition of growth."

She considered arguing. She considered deflecting. Instead she said: "I spent ten years hiding behind procedure because feeling things was dangerous. It's still dangerous. But hiding is worse. Hiding means the people I lead don't know I care about them. And they should know."

Frost smiled. It was the first unguarded expression she'd seen from him in weeks. "Yes," he said simply. "They should."`,
    unlock_type: 'missions',
    unlock_value: { min: 70 },
  },
  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'The New Doctrine',
    content: `She rewrote the tactical manual. Not the procedures — those were sound. She rewrote the philosophy. The old version began: "The objective of tactical planning is the efficient application of force to achieve mission success with minimal resource expenditure."

The new version began: "The objective of tactical planning is to bring everyone home."

It was sentimental. It was unmilitary. It was, she knew, the thing she had always believed but never permitted herself to say. Efficiency was the language of the system. Bringing people home was the language of a person.

She distributed the revised manual without comment. Viper read it and said nothing, which from Viper was the highest form of approval. Razor flagged three tactical improvements that the new framing suggested. Titan absorbed it silently and implemented it immediately.

Ironside found her afterward. "This is different from the last version."

"The last version was written by someone who was afraid to be honest. This one isn't."

He read the first line again. Nodded slowly. "It's better."

"Yes," she said. "It is."`,
    unlock_type: 'rank',
    unlock_value: { min: 6 },
  },
  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'The Conversation She Practices',
    content: `Every night for a week, she rehearsed it. Sitting on her bunk, speaking to the empty room, finding the words.

"Ironside. There's something I need to tell you. One of the three soldiers who died in your incident — his name was Emeka Okafor. He was my brother."

She tried it with different tones. Clinical. Gentle. Direct. Each version felt inadequate. Each version reduced the most important conversation of her life to a sequence of words that could not contain it.

She tried adding context. "I forgave you years ago. Before UNOPCOM. Before I ever saw your face. I forgave you because I investigated what happened and I know it wasn't negligence — it was the kind of failure that the universe manufactures when it wants to test whether we can survive what we've done."

Better. But still not enough.

She tried adding the truth. "I came here because of you. Not for revenge. Because I couldn't let you carry this alone without at least standing next to you, even if you didn't know why."

The empty room offered no feedback. She would continue practicing. The conversation would come when it was ready, or when circumstances forced it. Either way, she would be prepared.

Discipline in all things. Even this.`,
    unlock_type: 'missions',
    unlock_value: { min: 75 },
  },
  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'A Letter Never Sent',
    content: `She found it while reorganizing the metal box. A letter, written years ago, addressed to "The Officer Commanding, Joint Exercise Twelve." She had written it three months after Emeka's death, in a hotel room in Abuja, drunk on Star beer and grief.

The letter was furious. It accused. It demanded. It called for court-martial and dishonor and a punishment commensurate with the crime of killing her brother through incompetence. It was four pages of rage, written in handwriting that deteriorated from sharp to ragged as the pages progressed.

She had never sent it. Not because she'd forgiven him — forgiveness came later. Because even in her worst moment, some part of her knew that rage sent through official channels would become bureaucratic, would be processed and filed and reduced to a case number. Her brother deserved more than a case number.

She read the letter once, from beginning to end. Then she burned it. Not ceremonially — practically. A match, a metal bin, good ventilation. The paper curled and blackened and was gone.

She felt lighter. Not much. Enough.

Some things you carry until you're ready to set them down. The letter had done its work years ago, absorbing the rage so she didn't have to carry it raw. Now it was ash, and she was free of one more piece of the weight.`,
    unlock_type: 'time',
    unlock_value: { min_days: 70 },
  },
  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'Blaze Learns',
    content: `Blaze came to her after a bad mission. Not physically bad — no casualties. Emotionally bad. The kind of operation where everything went right but it still felt wrong, where the victory tasted like metal.

"How do you do it?" Blaze asked. "Stay steady. Stay... you."

Raven poured two cups of coffee. Handed one to Blaze. Sat down.

"I don't stay steady. I practice being steady until the practice becomes indistinguishable from the real thing. And then, eventually, it becomes the real thing. Discipline is a muscle. You train it like any other."

"That sounds exhausting."

"It is. But the alternative is worse. The alternative is reacting to everything. Feeling everything at full volume. You burn out, or you burn others. I've seen both."

Blaze drank the coffee. Raven watched, and for the first time allowed Blaze to see something behind the officer's mask — not weakness, but warmth. The warmth of someone who cared enough to sit in a room and drink bad coffee and offer the only thing she had: the truth of her own experience.

"You'll find your way," Raven said. "It won't look like mine. It shouldn't. But you'll find it."

Blaze nodded. It was the most still she'd ever seen Blaze sit.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 30 },
  },
  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'The Paper in Her Pocket',
    content: `She unfolded the paper. The names were so familiar now they felt like part of her own — written in her hand, carried against her heart, read aloud on the observation deck at 0300 when the world was quiet enough to listen.

She added a new section. Below the names of the dead, she wrote a heading she had never used before: "Still Standing."

Under it, she wrote the callsigns. Ghost. Ironside. Viper. Spark. Blaze. Frost. Razor. Storm. Titan. Every soldier currently on the roster who had survived under her watch.

The paper was a record of loss. It had always been a record of loss. But loss was only half the ledger. The other half was the people who were still here because the planning was sound and the training was good and the officer in charge gave a damn.

She folded the paper and returned it to her pocket. It was lighter now, somehow. Not because there were fewer names of the dead, but because the names of the living balanced them.

Some accountings could only be done in the heart. Hers was, for the first time, close to balanced.`,
    unlock_type: 'missions',
    unlock_value: { min: 80 },
  },
  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'Ironside\'s Question',
    content: `"Why did you join UNOPCOM?"

They were on the observation deck. Late. Stars. The usual.

"The same reason as everyone. The aliens."

"That's the official answer. What's the real one?"

She looked at the sky. Counted three stars. Stopped counting.

"I joined because I was tired of wars where the sides were indistinguishable. Where the people you were protecting were also the people who were killing. Where the mission changed every time a politician needed a headline. I wanted clarity."

"Did you find it?"

"Mostly. The enemy is clear. The mission is clear. The people are..." She looked at him. "The people are complicated. But they're worth the complication."

He nodded. Silence. Then, carefully: "Sometimes I think you understand me better than anyone here. Like you know something about me I don't know about myself."

Her heart rate increased by twelve beats per minute. She counted.

"I know you're a good soldier," she said. "And a better person than you believe. That's enough for now."

"For now?"

"For now."

The stars continued not answering. But the silence between two soldiers held more truth than most conversations she'd ever had.`,
    unlock_type: 'missions',
    unlock_value: { min: 85 },
  },
  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'The Decision',
    content: `She made the decision on a Tuesday. It felt appropriate. Emeka had died on a Tuesday. She had enlisted on a Tuesday. She had signed her UNOPCOM contract on a Tuesday. Tuesdays were the days her life changed direction.

She would tell him. Not today. Not tomorrow. But before the end of whatever this war turned out to be. She would tell Ironside that Emeka was her brother, that she had forgiven him, that her forgiveness was not conditional on his reaction or his gratitude or his understanding. It was simply real, and it deserved to be spoken aloud.

She wrote it in the Igbo journal. The entry was short:

"I have decided. The conversation will happen. I will practice until the words are right. I will choose the moment. I will not flinch from whatever follows. Emeka would want him to know. Emeka would want the weight shared. My brother was generous that way — too generous for a soldier, which is what made him a good one.

I owe Ironside the truth. Not because he deserves it — he does — but because carrying it alone has been its own kind of dishonesty. And I am tired of being dishonest with the people I trust."

She closed the journal. The decision was made. The rest was timing.`,
    unlock_type: 'missions',
    unlock_value: { min: 90 },
  },
  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'Emeka\'s Sister',
    content: `She had practiced the words a hundred times. She used none of them.

"Ironside. Sit down. I need to tell you something."

He sat. He had the look of a soldier who knew conversations beginning this way rarely ended well. He was right.

"The friendly fire incident. The three soldiers. One of them was named Emeka Okafor."

The silence was complete. She could hear him breathing.

"He was my brother."

She has gone over this conversation many times since. She is not certain she remembers it accurately — the mind edits, the mind protects. What she knows for certain: she said his name. Emeka Okafor. Out loud, in front of another person, for the first time since she'd joined UNOPCOM. It was not a smaller thing than she'd expected. It was exactly the size of it.

Ironside asked: "How long have you known?"

"Since before I met you. I investigated the incident. I read every report, the official one and the ones that fed into it. I know it wasn't negligence. I know you've been carrying it."

"Why didn't you—"

"Because you would have destroyed yourself. And Emeka—" Her voice caught. She let it catch. She had decided she was going to let it catch, if it did. "Emeka would not have wanted that. He didn't think about people that way. He would have said: the man made a mistake and he knows it, and you don't need to add yourself to his weight."

What happened after: he wept. She did not. She sat beside him and kept her hand on his shoulder and didn't tell him it was okay, because it wasn't, because Emeka is dead and nothing will make that okay, and Ironside has always needed someone to tell him the truth rather than the comfort.

After a long time he asked: "Does this change things? Between us?"

"No," she said. "I decided that a long time ago. I'm telling you now because I'm tired of carrying it alone."

This is not the end of the story. Emeka is still dead. The weight doesn't redistribute when you speak it — it just stops being a secret. There is a difference between those two things and she knew it before she sat down, and she sat down anyway. That is what courage looks like when you are Adaeze Okafor. Not the absence of the weight. Just the decision to stop carrying it in the dark.`,
    unlock_type: 'missions',
    unlock_value: { min: 95 },
  },
  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'Duty, Redefined',
    content: `The morning after, she stood on the observation deck and counted the stars one last time. Not because she needed to. Because she wanted to.

The conversation with Ironside had not destroyed him. It had not destroyed her. They had sat together for three hours — talking, sometimes crying, sometimes silent. She told him about Emeka. About the motorcycle in Lagos, the gap-toothed smile, the letters from training. She gave Ironside the gift of knowing the man he'd lost, not just the name he carried.

And Ironside had given her something in return: the weight, shared. For the first time in years, she didn't carry it alone.

She unfolded the paper from her pocket. Below the names of the dead and the names of the living, she added a third heading: "Forgiven."

Under it, she wrote one name: Ironside.

Then, after a moment, she wrote another: Raven.

Because forgiveness was not only for the people who made mistakes. It was for the people who had been too disciplined to forgive themselves for being human. She had carried the armor so long she'd forgotten it was optional. It was not optional in combat. But here, on the observation deck, under stars she could count but chose not to, it was.

Adaeze Okafor folded the paper. The creases were soft now, worn smooth by years of handling. She placed it in her pocket and went to brief the squad.

There was a war to win. There were people to bring home. And for the first time, the officer who led them did so not from behind protocol, but from the steady, certain center of a heart that had learned — finally, painfully, beautifully — to lead.`,
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: 'Heart of the Raven',
    achievement_desc: 'Adaeze Okafor told the truth, set down the weight, and became the leader she was always meant to be.',
  },
];

const reactions = [
  {
    event_type: 'mission_complete',
    text: 'Objectives met. Debrief in thirty. Good work — now let\'s be better next time.',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: 'I will add their name to the list. They will not be forgotten. They will not become a statistic.',
    priority: 2,
  },
  {
    event_type: 'territory_lost',
    text: 'I\'ve reviewed the defensive plan. The gap has been identified. It will not happen again.',
    priority: 1,
  },
  {
    event_type: 'territory_defended',
    text: 'The line held because the preparation was sound. Acknowledge the work, then prepare for the next one.',
    priority: 1,
  },
  {
    event_type: 'streak_milestone',
    text: 'Consistency is not glamorous. It is, however, the only thing that wins wars. Well done.',
    priority: 1,
  },
  {
    event_type: 'rank_up',
    text: 'Rank is responsibility, not reward. Carry it accordingly.',
    priority: 1,
  },
  {
    event_type: 'soldier_wounded',
    text: 'Get them to medical. Then get me the after-action report. We learn from this or it was for nothing.',
    priority: 1,
  },
];

const relationships = [
  {
    char_a: 'raven',
    char_b: 'ironside',
    rel_type: 'secret_connection',
    description: 'Raven\'s brother was killed in Ironside\'s friendly fire incident. She has forgiven him. He does not know.',
  },
  {
    char_a: 'raven',
    char_b: 'frost',
    rel_type: 'bond',
    description: 'The medic and the officer — both carry more than they show. Frost is the closest thing Raven has to a confidant.',
  },
  {
    char_a: 'raven',
    char_b: 'blaze',
    rel_type: 'bond',
    description: 'Raven has watched Blaze long enough to see the self-destruction behind the performance. Doesn\'t say anything. Stays close enough to catch.',
  },
  {
    char_a: 'raven',
    char_b: 'storm',
    rel_type: 'bond',
    description: 'Two people who have made hard calls and live with them. A mutual recognition that needs no words — both understand the cost of command.',
  },
  {
    char_a: 'raven',
    char_b: 'titan',
    rel_type: 'bond',
    description: 'Titan\'s steadiness anchors Raven when the mission weight gets too heavy. She won\'t admit it. He doesn\'t need her to.',
  },
];

module.exports = { template, chapters, reactions, relationships };
