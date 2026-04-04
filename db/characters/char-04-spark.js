/**
 * Character 04: Spark — Kenji Nakamura
 * From eager rookie to confident leader who earns respect on his own terms.
 */

const template = {
  id: 'spark',
  name: 'Kenji Nakamura',
  callsign: 'Spark',
  nationality: 'Japanese',
  personality: ['optimistic', 'analytical', 'emotional', 'brave'],
  motivation: 'Prove he belongs among legends',
  background: 'Twenty-two years old, youngest by five years, arrived with a backpack of tools and a patent on a drone navigation system that caught UNOPCOM\'s attention. Built his first autonomous vehicle at fourteen from salvaged parts in a Osaka robotics club. His father told him he\'d amount to nothing. His sensei told him every great fire starts with a single spark. He\'s been trying to figure out who was right ever since.',
  portrait_sprite: 'xcom0',
};

const chapters = [
  // ── SURFACE (1-10) ──────────────────────────────────────────────────

  {
    chapter_num: 1,
    tier: 'surface',
    title: 'The Youngest',
    content: `What Kenji Nakamura carries:

A backpack, not a duffel — he is twenty-two years old, the youngest here by five years, and this is still how he moves through the world. Inside: six screwdrivers. Four hand tools. Two multi-meters. A roll of copper wire. Spare batteries labeled in precise handwriting. A notebook where he writes equations in pencil and crosses them out. A photograph of a robotics club in Osaka — six teenagers, one blurry trophy. An UNOPCOM acceptance letter folded and unfolded enough times it's beginning to separate at the creases.

The real list:

He carries his father's words: "Nothing you do will amount to anything." He carries his sensei's counter-offer: "Every great fire starts with a single spark." He has been living in the gap between those two sentences for his entire life, which is not a very long life yet, which is part of the problem. He carries three failed patent applications and one successful one, and the knowledge that the successful one is the only reason he is standing here, and the fear that once he uses it up there will be nothing left to justify the space he takes. He carries the copper wire that will, at a moment he doesn't know about yet, save eight people's lives. He doesn't know that yet. He just knows it's copper wire, four meters, 24-gauge.

He steps off the transport. He extends his hand.

"Kenji Nakamura." His voice doesn't shake. That's the victory he'll remember from this day, later: his voice didn't shake.

The veterans look at him the way you look at something and calculate whether it's worth carrying. He can feel the math happening. He tells himself: you earned this. You belong here.

He almost believes it. That gap — between almost and fully — is where the story lives. The almost is not a failure. The almost is a question he'll spend the next year answering.

The copper wire is in his backpack. He doesn't know yet what it will do.`,
    unlock_type: 'missions',
    unlock_value: { min: 0 },
  },
  {
    chapter_num: 2,
    tier: 'surface',
    title: 'The Drone Kid',
    content: `They called him that before they called him Spark. The drone kid. The boy genius from Osaka who built his first UAV at fourteen from scavenged parts and sheer stubbornness.

He corrected them — "It was actually a quadcopter with a modified —" — but they'd already moved on. The technical details didn't matter to people who measured competence in trigger discipline and mission count.

So he stopped explaining and started showing. Rigged a surveillance drone from spare parts in the motor pool. Had it operational in three hours. Storm watched from a distance, arms crossed, and nodded once.

One nod from Storm was worth a hundred words from anyone else. Spark held onto it like a trophy.`,
    unlock_type: 'missions',
    unlock_value: { min: 1 },
  },
  {
    chapter_num: 3,
    tier: 'surface',
    title: 'Ghost',
    content: `He didn't mean to follow Ghost around. It just happened. Ghost moved through the base like smoke — you'd look up and he was there, look again and he was gone. It was mesmerizing.

"You're staring," Ghost said one day, materializing beside him in the mess hall.

Spark nearly dropped his tray. "I — sorry. I was just — you move really quietly."

"Habit."

"Could you teach me?"

Ghost looked at him for a long moment. Not unkindly, but with the appraising stare of someone deciding whether an investment was worth the time.

"Tuesday. 0500. The north corridor."

It was the beginning of something Spark didn't have a name for yet. Later, he'd call it the most important education of his life.`,
    unlock_type: 'missions',
    unlock_value: { min: 2 },
  },
  {
    chapter_num: 4,
    tier: 'surface',
    title: 'First Mission',
    content: `His hands shook on the rifle. He'd trained for this — thousands of hours in simulation, hundreds on the range — but simulation doesn't prepare you for the sound. The concussion of real ordnance. The way the ground trembles. The smell.

He made it through. No casualties, objectives complete. His contribution was minimal — a drone providing overwatch, a sensor array that flagged two hidden positions — but it was real. He'd done real work in a real fight.

On the transport back, Titan clapped him on the shoulder. The big man's hand nearly knocked him off his seat.

"Good work, kid."

"Thanks. I — thank you."

He went to his bunk and stared at the ceiling for three hours, replaying every second, cataloguing every mistake, calculating how to be better. Sleep wasn't an option. The adrenaline was still singing in his blood like electricity.

Hence the callsign.`,
    unlock_type: 'missions',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 5,
    tier: 'surface',
    title: 'Razor',
    content: `The rivalry started over a repair job. Razor had a jammed firing mechanism on his sidearm. Spark offered to fix it.

"I can handle my own gear," Razor said.

"The spring tension is off by twelve percent. I can hear it when you rack the slide."

Razor stared at him. "You can hear spring tension."

"I have good ears."

"You have a death wish is what you have."

But he handed over the sidearm. Spark fixed it in four minutes. Razor tested it, said nothing, and walked away. The next day, he left a broken scope on Spark's workbench with a note: "Since you're so clever."

It became a thing. Razor would leave broken equipment. Spark would fix it. Neither of them acknowledged the arrangement. But the fixes got harder, and Spark suspected Razor was breaking things on purpose to test him.

He didn't mind. Competition was a language he spoke fluently.`,
    unlock_type: 'missions',
    unlock_value: { min: 4 },
  },
  {
    chapter_num: 6,
    tier: 'surface',
    title: 'The Workshop',
    content: `He claimed a corner of the maintenance bay and turned it into a workshop. Soldering iron, oscilloscope, a laptop running software he'd written himself. The other soldiers walked past and shook their heads — too much gear, too little floor space, cables everywhere like a spider's web.

But when the base's communications array went down at 2 AM, guess who fixed it. When the perimeter sensors started throwing false alarms, guess who recalibrated them. When Storm needed a tracking device small enough to fit inside a button, guess who built it overnight.

"You're useful," Viper told him, which from her was practically a love letter.

"I prefer 'indispensable.'"

"Don't push it, chico."

He grinned. The workshop was chaos, but it was his chaos, and every solved problem was a brick in the wall he was building between himself and irrelevance.`,
    unlock_type: 'streak',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 7,
    tier: 'surface',
    title: 'The Simulation Scores',
    content: `He posted the highest simulation scores in UNOPCOM history. Technical aptitude: 98th percentile. Problem-solving under pressure: 97th. Combat performance: 61st.

That 61st ate at him. He knew why — his body hadn't caught up with his brain. He could calculate trajectories faster than anyone on the squad, but his reaction time was average and his close-quarters skills were mediocre.

"You're thinking too much," Ghost told him during their morning sessions. "Combat isn't a math problem."

"Everything is a math problem."

"Then you're using the wrong equation."

He didn't understand. Not yet. Ghost's lessons were like that — seeds planted in soil that wasn't ready. They'd germinate later, always at the worst possible moment, always exactly when he needed them.`,
    unlock_type: 'rank',
    unlock_value: { min: 1 },
  },
  {
    chapter_num: 8,
    tier: 'surface',
    title: 'Storm\'s Shadow',
    content: `Storm started assigning himself to the same missions as Spark. Not obviously — the big man was subtle about it — but Spark noticed. He was analytical. Patterns were his language.

"You're watching me," Spark said after the third consecutive joint deployment.

"Watching the perimeter."

"You're always between me and the threat vector."

Storm didn't deny it. "You're the youngest. You're valuable. Valuable assets get protected."

"I'm not an asset. I'm a soldier."

"You can be both."

He wanted to argue, to assert his independence, to prove he didn't need a guardian. But the truth was that Storm's presence made him braver. Knowing someone had his back — literally, physically, that enormous presence between him and danger — let him focus. Let him think.

And thinking was what he did best.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'storm', min_missions: 5 },
  },
  {
    chapter_num: 9,
    tier: 'surface',
    title: 'The Letter From Home',
    content: `His mother wrote every week. Neat characters on thin paper, always ending with the same phrase: "Be safe. Be kind. Come home."

He wrote back less often. Not because he didn't care, but because he didn't know how to translate his life into words his mother would understand. How do you describe a firefight to a woman who tends a garden in Osaka? How do you explain that your best friend is a man who communicates in silences?

His father never wrote. His father had said everything he needed to say the day Kenji left: "You'll fail. You always do."

Spark kept the letters from his mother in a box under his bunk. He kept his father's words in a different box — the one inside his chest that opened at 3 AM when the base was quiet and doubt was loud.`,
    unlock_type: 'time',
    unlock_value: { min_days: 7 },
  },
  {
    chapter_num: 10,
    tier: 'surface',
    title: 'Ignition',
    content: `The mission should have been routine. Perimeter sweep, sensor placement, extract. But the ground team walked into an ambush, and the comm array went down, and suddenly ten soldiers were cut off with no way to call for support.

Spark had thirty seconds and a toolkit. He jury-rigged a signal booster from a damaged radio, a drone battery, and a piece of copper wire stripped from a wall outlet. The signal reached base. The extraction team launched.

Eight of ten made it home.

He didn't celebrate. Two didn't make it. Two soldiers with names and faces and letters from home that would stop coming. He sat in his workshop and stared at the copper wire and thought about the thirty seconds — could he have been faster? Could he have found a stronger signal? Could he have saved all ten?

Titan found him there at midnight. Sat down. Put a hand on his shoulder.

"You saved eight people today."

"I lost two."

"No. The enemy lost you two. You saved eight. Don't ever confuse those numbers."

It was the first lesson that stuck. Not from Ghost — Ghost's lessons were ongoing. But from Titan, in that moment, with that hand on his shoulder: the weight of loss is not the weight of failure.`,
    unlock_type: 'missions',
    unlock_value: { min: 10 },
    is_achievement: true,
    achievement_name: 'First Spark',
    achievement_desc: 'Spark proves his worth under fire — brilliance measured in lives saved.',
  },

  // ── ROOTS (11-20) ──────────────────────────────────────────────────

  {
    chapter_num: 11,
    tier: 'roots',
    title: 'Osaka Nights',
    content: `He told Ghost about home. The apartment in Higashiyodogawa. The workshop in the closet, barely big enough for a soldering station and a chair. The sound of trains passing at all hours, vibrations he could feel through the floor.

"I built my first drone in that closet," he said. "Fourteen years old. Parts from the electronics district. A motor from a broken washing machine."

"Did it fly?"

"For about six seconds. Then it hit the ceiling and knocked over my father's tea."

Ghost almost smiled. "What did your father say?"

"He said I was wasting my time. That machines were for workers, not for dreamers."

"And what did you do?"

"Built a better one. One that didn't hit ceilings."

Ghost nodded. That nod meant: good. Keep building.`,
    unlock_type: 'missions',
    unlock_value: { min: 12 },
  },
  {
    chapter_num: 12,
    tier: 'roots',
    title: 'The 61st Percentile',
    content: `He trained like a man possessed. Before dawn with Ghost. Afternoons on the range. Evenings in the gym where Titan showed him how to use leverage instead of strength.

"You'll never be the biggest," Titan said, spotting him on the bench press. "But you can be the smartest strong person in the room."

"That's a very specific category."

"It's the one that wins."

He watched combat footage. Analyzed movement patterns. Built a statistical model of engagement outcomes based on position, weapon type, and reaction time. Then he trained his body to execute what his mind predicted.

The 61st percentile became 72nd. Then 78th. Not the best — never the best with a rifle — but good enough that no one called him a liability anymore.

Good enough wasn't good enough. But it was a start.`,
    unlock_type: 'rank',
    unlock_value: { min: 2 },
  },
  {
    chapter_num: 13,
    tier: 'roots',
    title: 'Innovation Under Fire',
    content: `He started modifying squad equipment without being asked. A scope adjustment here, a grip modification there. Small changes that added up — Razor's accuracy improved by 8%. Storm's reload time dropped by half a second. Raven's tactical overlay gained a predictive layer that she grudgingly admitted was useful.

"Did you change something on my rifle?" Razor asked after a particularly good day on the range.

"Minor barrel harmonics adjustment."

"My barrel harmonics were fine."

"They were. Now they're better."

Razor glared at him. Then smiled — a rare, genuine smile that Spark filed away as evidence that their rivalry was more than just friction. It was iron sharpening iron.

"Don't touch my sidearm," Razor said.

"Already did. Last Tuesday."

The glare came back. The smile stayed underneath it.`,
    unlock_type: 'missions',
    unlock_value: { min: 15 },
  },
  {
    chapter_num: 14,
    tier: 'roots',
    title: 'Ghost Lessons',
    content: `The lessons with Ghost were unlike anything formal training had offered. No manuals, no scores, no metrics. Just movement and silence and the slow cultivation of awareness.

"Close your eyes," Ghost said.

"In a combat zone?"

"Close them."

He closed them. Listened. The hum of the air filtration. Footsteps in the corridor — two people, different gaits. A door closing. The almost imperceptible sound of Ghost moving.

"Where am I?" Ghost asked, from somewhere that wasn't where he'd been.

"Three meters left. Behind the pillar."

"Good. Now tell me why I moved there."

He thought. "Sight lines. If I opened my eyes, the pillar blocks my view of where you were."

"Deeper."

He thought harder. "You moved when the door closed. The sound covered your footsteps."

Ghost stepped into view. "Your brain is a weapon, Spark. The rifle is just the delivery system."

It was the first time Ghost had called him by his callsign instead of his name. It felt like graduation.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ghost', min_missions: 10 },
  },
  {
    chapter_num: 15,
    tier: 'roots',
    title: 'The Fear',
    content: `He was afraid. Not of combat — he'd acclimated to that, the way you acclimate to cold water. But of inadequacy. Of being the weak link. Of looking up one day and seeing pity in the eyes of the people he respected.

He hid it well. The optimism was genuine but it was also strategic — no one suspects the smiling guy of crumbling inside. He volunteered for extra shifts, took on projects no one asked for, pushed himself past exhaustion and called it dedication.

Blaze noticed. "You know you're allowed to sleep, right?"

"I'm fine."

"You're running on caffeine and spite. I've seen the signs. I invented the signs."

"I just want to —"

"Be perfect? Can't be done. Trust me."

She bought him dinner and told him stories about her own early missions — the mistakes, the panic, the time she accidentally called in an airstrike on her own position. By the end he was laughing, and the fear was still there but smaller, compressed, manageable.`,
    unlock_type: 'time',
    unlock_value: { min_days: 10 },
  },
  {
    chapter_num: 16,
    tier: 'roots',
    title: 'Titan\'s Admiration',
    content: `Titan was not a man of many words. He communicated in actions — a nod, a shoulder clasp, a quiet presence during difficult moments. So when he spoke, people listened.

"You remind me of someone," Titan said during a night watch. Just the two of them, stars overhead, the perimeter lights sweeping.

"Who?"

"Me. Twenty years ago. Before I learned that strength isn't the same as size."

Spark looked at the enormous man beside him and couldn't imagine a version of Titan that felt small.

"I was the young one too," Titan continued. "Eager. Terrified. Convinced that if I worked hard enough, nobody would notice the fear."

"Did they notice?"

"Everyone notices, Spark. The good ones just don't hold it against you."

He sat with that for a long time. The idea that fear wasn't a flaw but a feature — something the squad saw and accepted and worked around. It was the most liberating thing anyone had ever told him.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'titan', min_missions: 8 },
  },
  {
    chapter_num: 17,
    tier: 'roots',
    title: 'The Prototype',
    content: `He built something new. Not a modification — an invention. A portable EMP device small enough to fit in a belt pouch, powerful enough to knock out electronics in a ten-meter radius.

He presented it at a briefing. Raven examined the schematics with her usual precision. Ironside asked about field reliability. Storm wanted to know the weight.

"Two hundred grams," Spark said. "Rechargeable. Three uses per charge."

"Side effects?" Ironside asked.

"It'll fry anything electronic in range. Including our own comms."

"So it's a last resort."

"Last resorts are better than no resort."

They approved the field test. It worked. Perfectly. Three missions later, it saved a squad pinned down by automated defenses.

Razor left a note on his workbench: "Not bad, kid." No broken equipment this time. Just the note. Spark kept it.`,
    unlock_type: 'missions',
    unlock_value: { min: 18 },
  },
  {
    chapter_num: 18,
    tier: 'roots',
    title: 'The Video Call',
    content: `His mother's face on the screen was older than he remembered. When had that happened? When had the lines around her eyes deepened? When had her hair gone grey at the temples?

"You look thin," she said.

"I'm eating fine, Okasan."

"You're lying. You always touch your ear when you lie."

He moved his hand away from his ear. She laughed. He laughed. And for a moment the distance collapsed and he was home, sitting at the kitchen table while she made udon and the trains rumbled past.

"Are you happy?" she asked.

"I'm... becoming something. I don't know what yet."

"That's okay. Becoming takes time. Your father —"

"I don't want to talk about him."

She nodded. Didn't push. Mothers know which doors to leave closed.

"Be safe," she said at the end. "Be kind. Come home."

The same words. Every time. A prayer disguised as advice.`,
    unlock_type: 'streak',
    unlock_value: { min: 5 },
  },
  {
    chapter_num: 19,
    tier: 'roots',
    title: 'Earning It',
    content: `A joint operation with three squads. Complex objective, multiple insertion points. Spark was assigned to the tech team — support role, behind the line.

He requested frontline deployment.

Ironside denied it. Ghost overruled him, quietly, in a conversation Spark wasn't supposed to overhear.

"He's ready," Ghost said.

"He's twenty-two."

"Age is a number. He's ready."

He went in with the first wave. Ran the drone, yes, but also held a position when the line broke. Fired his weapon not at a simulation but at someone trying to kill his squad. His hands didn't shake. His mind was clear. The math worked.

Afterward, Ghost found him. Said nothing. Just extended his hand. Spark shook it, and felt something shift — the balance between who he was and who he was becoming, tipping forward.`,
    unlock_type: 'missions',
    unlock_value: { min: 20 },
  },
  {
    chapter_num: 20,
    tier: 'roots',
    title: 'The Callsign',
    content: `"Why Spark?" Blaze asked him once.

"Because of the signal booster. My first mission — the copper wire, the improvised transmitter."

"That's the official version. What's the real one?"

He was quiet for a moment. "In Osaka, my sensei at the robotics club used to say that every great fire starts with a single spark. Not the biggest flame, not the hottest. Just the first. The one that starts everything."

"And you want to be the first?"

"I want to be the one that starts something. Something that matters. Something that lasts."

Blaze smiled. "You already are, kid. You just can't see it yet."

He wanted to believe her. He was getting closer every day. The gap between ambition and ability was narrowing, and somewhere in that narrowing gap, the boy from Osaka was becoming the soldier UNOPCOM needed.

Not the strongest. Not the deadliest. But the spark.`,
    unlock_type: 'rank',
    unlock_value: { min: 3 },
    is_achievement: true,
    achievement_name: 'First Flame',
    achievement_desc: 'Spark earns his place — not through strength, but through brilliance and heart.',
  },

  // ── CRACKS (21-30) ─────────────────────────────────────────────────

  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'The Failure',
    content: `It was his fault. He'd miscalculated the charge on the EMP, overloaded the capacitor, and when they needed it most — hostiles bearing down, automated turrets pinning the squad — the device fizzled and died in his hand.

Raven's backup plan saved them. Cold, efficient, textbook. The kind of plan that didn't rely on untested technology built by a twenty-two-year-old in a maintenance closet.

Nobody blamed him. That was worse. He wanted someone to yell, to point, to say this is your fault. Instead they debriefed, noted the equipment failure, and moved on.

He didn't move on.

He sat in his workshop and disassembled the EMP, component by component, in the specific order of failure: housing, capacitor bank, coupling ring, solder joint. The solder joint was the problem — a connection he'd rushed, that had looked solid under inspection but wasn't. Under the right conditions, under pressure, it opened.

He held the joint under the magnifying glass for a long time.

Here is what he was thinking about: his father. He was thinking about his father's voice the night he said he was going to build autonomous systems for a living — the way his father said "closet" because it was accurate. The workshop was a closet. The drone was built in a closet. The joint that failed was soldered in a closet.

He rebuilt the EMP. He rebuilt the joint correctly. The device worked on the next test, and the one after that, and every mission after that.

He did not rebuild himself so easily or so cleanly. He's still working on it. The joint holds. He checks it often.`,
    unlock_type: 'missions',
    unlock_value: { min: 25 },
  },
  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'Ghost\'s Absence',
    content: `Ghost went dark. A solo mission — the kind he never talked about, the kind that left gaps in the roster and silence where conversation should be.

Spark didn't realize how much he depended on Ghost until the man wasn't there. The morning lessons stopped. The quiet presence in the mess hall was absent. The person who saw him — really saw him, past the enthusiasm and the fear — was gone.

Three days. Then five. Then a week.

"He'll come back," Storm said.

"What if he doesn't?"

Storm looked at him with those steady eyes. "Then you'll carry what he taught you. That's how it works."

Spark hated that answer. Not because it was wrong, but because it prepared him for something he wasn't ready to face — the possibility that the people who shape you don't always stay.

Ghost came back on day nine. Thinner. Quieter, which shouldn't have been possible. He resumed the morning lessons without explanation.

Spark didn't ask. He'd learned that much.`,
    unlock_type: 'time',
    unlock_value: { min_days: 14 },
  },
  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'The Argument with Razor',
    content: `It was stupid. A disagreement about loadout configuration that escalated into something neither of them intended.

"You think because you're smart, you're right," Razor said. "You're not. You're just fast."

"And you think because you've been here longer, your way is the only way."

"My way keeps people alive."

"So does mine!"

They were in each other's faces now, and the workshop felt very small. Spark could feel his heart hammering, the emotion rising — the thing he could never fully control, the part of him that burned too hot.

"You want to know the difference between us?" Razor said, quieter now. "I don't need anyone to tell me I'm good enough."

It landed like a fist. Because it was true. Spark searched for validation the way other people searched for oxygen — constantly, desperately, unconsciously.

He walked away. Spent an hour on the roof, staring at nothing. Then went back, found Razor, and said: "You're right. I'm working on it."

Razor nodded. "We're all working on something, kid."`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'razor', min_missions: 15 },
  },
  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'The Nightmare',
    content: `He dreamed about the two he'd lost. His first mission. The signal booster. The thirty seconds.

In the dream, the seconds stretched. He could see the copper wire, feel it between his fingers, but his hands wouldn't move. The signal wouldn't send. And the two — he could see their faces now, faces he'd never known in life — stood in front of him and asked why.

Why wasn't he faster? Why wasn't he better? Why wasn't he enough?

He woke up gasping. The barracks were dark. Someone in the next bunk shifted.

He went to the workshop. Built something. It didn't matter what — a circuit, a sensor, a thing with wires and purpose. The act of creation was the antidote to the dream. If his hands were building, they weren't failing.

By dawn he had a new proximity alarm that could detect movement through walls. He installed it on the perimeter that morning.

"When did you build this?" Ironside asked.

"Couldn't sleep."

Ironside studied him. "Good work, Spark. Get some rest."

He didn't. But the nightmares didn't come back. Not that night.`,
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_kia' },
  },
  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'Viper\'s Lesson',
    content: `Viper took him to the range and made him shoot wrong. Off-balance. Moving. From positions no manual would recommend.

"Stop calculating," she said.

"I'm not —"

"You are. I can see the numbers behind your eyes. Turn them off."

"I don't know how."

"Yes you do. You did it when you built that signal booster. You didn't calculate — you improvised. You felt the solution."

He wanted to argue that engineering was different from combat, that building and destroying used different parts of the brain. But she was right. The booster — the thing that saved eight people — hadn't been calculated. It had been felt. Intuited. The knowledge was in his hands before his brain caught up.

"Again," Viper said. "And this time, let your gut aim."

His grouping was terrible. Then less terrible. Then, for three shots in a row, perfect.

"There," Viper said. "That's you. Not the math. You."`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'viper', min_missions: 12 },
  },
  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'The Love Letter',
    content: `Not romantic love. Filial love. The complicated, painful, necessary kind.

He wrote to his father. First time in two years.

"Otosan — I know you think I'm wasting my life. Maybe I am. But I saved eight people with a piece of copper wire and thirty seconds, and I built a device that protects soldiers in the field, and I'm learning to be someone I'm proud of. You told me I'd amount to nothing. I'm writing to tell you that you were wrong. Not to hurt you, but because someone has to say it, and I've been waiting too long to be that someone."

He didn't send it. Kept it in the box with his mother's letters. The act of writing was enough — the words existed now, solid and real, proof that the voice in his chest had an answer even if the man in Osaka would never hear it.`,
    unlock_type: 'time',
    unlock_value: { min_days: 18 },
  },
  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'The Mentor\'s Weight',
    content: `Ghost told him something he wasn't ready to hear.

"I won't always be here."

"Don't say that."

"I'm not being dramatic. I'm being honest. This work — what I do — has a shelf life. And when it's over, someone needs to carry the things I've learned."

"So you're training me to replace you?"

"I'm training you to surpass me."

Spark stared at him. Ghost — mythic, unknowable, impossibly skilled Ghost — was telling him that he, Kenji Nakamura, the kid from Osaka with the shaking hands, was being prepared to carry a legacy.

"I'm not ready," he said.

"No one ever is. That's why we start early."

The lessons changed after that. Harder. Longer. Ghost pushed him in ways that felt personal — not cruel, but intimate, the way a sculptor strikes marble, each blow intentional, each removal revealing something underneath.`,
    unlock_type: 'missions',
    unlock_value: { min: 30 },
  },
  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'Breaking Point',
    content: `Three missions in a week. Two losses. A failed prototype that exploded during testing and sent him to the medevac with burns on his forearms — not bad burns, the medics said, which was different from no burns. And then a message from his mother: "Your father is in the hospital. He asks for you."

He wants to tell you which thing was the one that broke him. He has gone over it many times. The losses, probably. The losses are the weight that compounds. But he doesn't know for certain, and the not knowing is part of what he carries.

He sat on the floor of the workshop, surrounded by broken things, and for the first time since arriving at UNOPCOM, he cried. Not quietly. Not with any dignity. The kind of crying that surprises you with its own urgency.

Storm found him. Didn't speak. Just sat on the floor next to him, this enormous man folding himself into the cramped space between workbenches, and waited. Storms don't explain themselves. They just arrive and stay until they pass.

"I can't do this," Spark said.

"You're already doing it."

"I'm falling apart."

"Falling apart is part of the process. The question is how you reassemble."

He didn't reassemble that day, or the next. On the third day he picked up a soldering iron. His hands were not entirely steady. The thing he built worked on the second try.

He remembers it as the first try. Memory edits. Memory protects. What doesn't vary: Storm sat on the floor. The workshop smelled like solder and his own embarrassment. He cried until he stopped. That part is exact. He won't let the memory touch it.`,
    unlock_type: 'missions',
    unlock_value: { min: 35 },
  },
  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'The Squad Sees Him',
    content: `It wasn't a single moment. It was cumulative — a dozen missions, a hundred repairs, a thousand small acts of competence that built into something the squad couldn't ignore.

Raven started consulting him on tactical tech. Ironside included him in strategic briefings. Razor stopped calling him "kid" and started calling him "Spark" — the callsign, spoken with weight instead of condescension.

And Titan — the man who'd first clapped him on the shoulder and said "good work" — Titan started deferring to him in the field. Not on combat decisions, but on the technical ones. The ones that mattered more and more as the war evolved.

"You've changed," Blaze told him over dinner.

"How?"

"You walk different. Like you know where you're going."

He did. For the first time since stepping off that transport with a backpack full of tools and a heart full of terror, Kenji Nakamura knew exactly where he was going.

Forward.`,
    unlock_type: 'rank',
    unlock_value: { min: 5 },
  },
  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'The Architect',
    content: `He designed a new communications network for the entire base. Not a modification — a ground-up rebuild that tripled range, halved latency, and included an encryption layer that would take a supercomputer years to crack.

The proposal was fifty pages. He presented it in ten minutes.

"How long to implement?" Ironside asked.

"Two weeks. I need Razor for the antenna arrays and Raven for the tactical integration."

"And if I say no?"

"Then we keep using a system that's three generations behind the enemy's, and eventually they exploit the gap."

Ironside looked at Ghost. Ghost nodded. Raven nodded. Even Razor nodded, though he made sure to look annoyed about it.

"Approved," Ironside said.

Two weeks later, the system was live. It worked. It worked beautifully. And when the first field test came back flawless, Spark didn't celebrate. He just opened a new file and started designing the next improvement.

The rookie was gone. In his place was an architect — someone who didn't just fix what was broken but built what was needed. The squad's engineer. The squad's spark.`,
    unlock_type: 'missions',
    unlock_value: { min: 40 },
    is_achievement: true,
    achievement_name: 'The Architect',
    achievement_desc: 'Spark moves from fixing broken things to building the future.',
  },

  // ── SECRETS (31-40) ────────────────────────────────────────────────

  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'The Rejection Letter',
    content: `He'd kept it. Folded into a square small enough to fit in his wallet, creased so many times the paper was soft as cloth. The rejection letter from the Japan Self-Defense Forces. Technical Specialty Division.

"Candidate does not meet the psychological requirements for field deployment. Recommend reassignment to civilian research."

Psychological requirements. A polite way of saying he was too emotional. Too reactive. Too human for a military that valued precision over passion.

He showed it to Ghost. Not because Ghost asked, but because the truth had been sitting in his wallet for three years and it was time to let someone else hold it.

Ghost read it. Folded it. Handed it back.

"Their loss," Ghost said.

"It was the worst day of my life."

"I know. And it led you here."

The paradox wasn't lost on him. The rejection that destroyed him was the door that opened UNOPCOM. The worst day was also the first day of everything that mattered.`,
    unlock_type: 'missions',
    unlock_value: { min: 45 },
  },
  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'His Father\'s Voice',
    content: `The hospital in Osaka. A video call through three encrypted relays. His father on the screen, smaller than he remembered — the man who had filled every room with disapproval now barely filling a hospital bed.

"Kenji."

"Otosan."

Silence. The kind that spans years and continents and every word unsaid between two people who are both waiting for the other to acknowledge the weight first.

"Your mother says you're doing well."

"I am."

"She says you save people."

"I try."

His father looked out the window. The Osaka skyline. The city where Kenji was supposed to have become an engineer at a respectable firm, married a respectable woman, lived a life his father could describe to other fathers without qualification. His father had planned that life in some detail. He never told Kenji about the plan, which is its own kind of loss.

"I was wrong," his father said. Barely audible. The words cost him something. You could hear the cost.

"I know."

"I was afraid. For you. That the world would —"

"I know, Otosan."

They didn't hug. Couldn't, through a screen. They nodded at each other through two encrypted relays and four thousand kilometers. Then the connection dropped, as connections do.

He sat in the communications room for a while after. He's not certain what he felt. Not relief, exactly. Not closure. Something more like: the thing that had been between them had a name now, and naming a thing changes how much room it takes up. The box didn't close. It got a little smaller.

He carries it differently now. That's not the same as not carrying it.`,
    unlock_type: 'time',
    unlock_value: { min_days: 25 },
  },
  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'UNOPCOM Was Last',
    content: `He told Storm first, because Storm had earned the truth through a hundred missions of standing between him and harm.

"UNOPCOM wasn't my first choice," Spark said. "It was my last. I applied to seven military programs. Four civilian defense contractors. Two research labs. All rejected."

"All of them?"

"The JSDF said I was too emotional. MIT said I was underqualified. Lockheed said I was overqualified for the positions I could get clearance for. Everyone had a reason."

"And UNOPCOM?"

"UNOPCOM said yes. No qualifications, no explanations. Just 'report to base.'"

Storm was quiet for a moment. "Do you know why?"

"Because no one else would take me?"

"Because we needed exactly what you are. Not what you could become — what you already were. A kid who builds things in closets and doesn't know the meaning of impossible."

Spark looked at his hands. The same hands that built the first drone. The same hands that wired the signal booster. The same hands his father called useless.

"Thank you," he said. "For standing between me and the bullets while I figured that out."`,
    unlock_type: 'missions',
    unlock_value: { min: 50 },
  },
  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'The Imposter',
    content: `Imposter syndrome. He'd read about it, analyzed it, understood the neuroscience. Knowing what it was didn't make it stop.

Every achievement came with a whisper: luck. Every compliment carried an asterisk: they're being kind. Every mission success was undercut by the voice that said: next time you'll fail, and they'll see what you really are.

He told Blaze, because Blaze had a way of making terrifying things sound manageable.

"Everyone feels that," she said.

"Not Ghost. Not Ironside."

"Especially Ghost. Especially Ironside. You think confidence means certainty? It means acting despite the doubt. Every single time."

"How do you know?"

"Because I feel it too. Every day. The difference is I've had more practice at ignoring it."

She poured him a drink. "You're not an imposter, Spark. Imposters don't build things that save people's lives. Imposters don't cry over the ones they lose. You're the most real person on this base."

He didn't believe her. Not completely. But he kept the words, the way he kept his mother's letters — folded carefully, stored close, taken out when the dark got too loud.`,
    unlock_type: 'chance',
    unlock_value: { probability: 0.15 },
  },
  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'Ghost\'s Gift',
    content: `Ghost gave him a knife. Not a weapon — a tool. A folding utility blade with a carbon-fiber handle, worn smooth from years of use.

"This was mine," Ghost said. "From before."

Before what, Spark didn't ask. Ghost's "before" was a country no one was allowed to visit.

"I've used it to build things, fix things, and survive things. Now it's yours."

"I can't take this."

"You can. You will. Consider it a graduation present."

"I didn't know I was graduating."

"You graduated a long time ago. I just wanted to make sure you knew."

Spark held the knife. Felt its weight. Understood that this was more than a tool — it was a transfer. Ghost was giving him something that carried history, trust, and the implicit message: you are ready for what comes next.

He carried the knife every day after that. Used it to build. Used it to fix. Hoped he'd never have to use it to survive.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ghost', min_missions: 25 },
  },
  {
    chapter_num: 36,
    tier: 'secrets',
    title: 'The Almost',
    content: `A mission where everything aligned and nothing worked. His drone was jammed. The comms network — his network, his architecture — was spoofed by an enemy system he hadn't anticipated. For eleven minutes, the squad was blind and deaf.

Eleven minutes in combat is an eternity.

They survived because of training, not technology. Because Ghost moved like water and Razor shot like lightning and Storm stood like a wall. Not because of anything Spark built.

Afterward, he went to Ironside. "I need to redesign the network. The countermeasures —"

"The countermeasures were adequate. The enemy adapted. That's what enemies do."

"If I'd anticipated —"

"You can't anticipate everything. No one can."

"Ghost can."

Ironside looked at him. Really looked. "Ghost has twenty years on you and scars you can't see. Don't measure yourself against ghosts, Spark. Measure yourself against yesterday."

It was the kindest thing Ironside had ever said to him. He filed it next to Titan's lesson and Storm's patience and Ghost's knife — the collection of moments that were slowly replacing his father's words.`,
    unlock_type: 'missions',
    unlock_value: { min: 55 },
  },
  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'The Quiet One',
    content: `He noticed he was talking less. Not out of sadness — out of sufficiency. The need to fill silence, to prove himself through words, to perform competence instead of simply being competent — it was fading.

He'd watch Ghost and understand. The silence wasn't emptiness. It was fullness. So much happening inside that words were redundant.

"You're changing," Viper observed. "Less noise."

"Less need for it."

"Careful. That's how Ghost started, and look where it got him."

"Where?"

"Respected. Trusted. Slightly terrifying."

"I'll take two out of three."

"Which two?"

He just smiled. And the smile — calm, self-assured, quiet — was nothing like the eager grin of the boy who'd stepped off the transport. It was deeper. Earned. The smile of someone who'd found his own frequency and stopped broadcasting on everyone else's.`,
    unlock_type: 'missions',
    unlock_value: { min: 60 },
  },
  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'What He Builds Now',
    content: `The workshop had evolved. Not bigger — still the same cramped corner of the maintenance bay — but the work had changed. He wasn't fixing broken things anymore. He was inventing new ones.

A medical scanner that could diagnose injuries in the field. A signal array that turned any structure into a communications hub. A drone swarm protocol that let a single operator control twelve units simultaneously.

Each invention was a conversation with the future — a way of saying "I was here, and I made something that mattered."

Razor came by one evening. Stood in the doorway, looking at the organized chaos.

"Remember when I left you that broken scope?" Razor said.

"I remember."

"I was testing you."

"I know."

"You passed."

"I know that too."

Razor shook his head. "Arrogant little —"

"I prefer 'confident.'"

"There it is."

They both smiled. The rivalry had softened into something warmer — not friendship exactly, but the mutual respect of two people who'd sharpened each other into better versions of themselves.`,
    unlock_type: 'streak',
    unlock_value: { min: 8 },
  },
  {
    chapter_num: 39,
    tier: 'secrets',
    title: 'The Letter He Sends',
    content: `He finally wrote to his father. Not the angry letter from the box — a new one. Shorter. Kinder.

"Otosan — I forgive you. Not because what you said was okay, but because holding onto it is heavier than the things I carry in the field. I am a soldier, an engineer, and a person who saves lives. I became these things not because of your words or despite them, but alongside them. You are part of my story, even the hard parts. Especially the hard parts.

Your son, Kenji."

He sent it. Didn't wait for a response. The act of sending was the point — the release of a weight he'd been carrying since he was fourteen, crouched in a closet, building a drone from scraps while his father's voice echoed through the walls.

A response came three days later. Two words: "I know."

It was enough.`,
    unlock_type: 'time',
    unlock_value: { min_days: 30 },
  },
  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'Spark\'s Core',
    content: `Ghost asked him a question on the anniversary of his first year at UNOPCOM. They were on the roof — Spark had adopted Viper's spot, and Viper had graciously allowed it, which meant she only complained twice.

"Why do you fight, Spark?"

He thought about it. Really thought. Not the rehearsed answer — "to prove myself" — or the noble one — "to protect people" — but the real one. The one underneath.

"Because building things is how I love," he said. "Every drone, every sensor, every circuit — it's a promise. A promise that I'll give everything I have to bring everyone home. And I fight because sometimes the thing I need to build is a moment. A thirty-second moment with copper wire and terror and the absolute certainty that I will not let them die."

Ghost was silent for a long time.

"That's a good answer," he said finally.

"Is it the right one?"

"There is no right answer. But that one will carry you."

The stars were bright. The base hummed beneath them. And Spark — Kenji Nakamura, twenty-three years old, rejected by everyone until the one place that mattered — sat in the silence and felt, for the first time, like he was exactly where he was supposed to be.`,
    unlock_type: 'missions',
    unlock_value: { min: 65 },
    is_achievement: true,
    achievement_name: 'Spark\'s Core',
    achievement_desc: 'Kenji finds his answer — building is how he loves, fighting is how he keeps his promises.',
  },

  // ── LEGACY (41-50) ─────────────────────────────────────────────────

  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'The Teacher',
    content: `New recruits. Three of them, barely older than he'd been. They looked at him the way he'd once looked at Ghost — like he was someone who knew things they needed to learn.

He started a training program. Not official — Ironside raised an eyebrow but didn't stop him. Early mornings in the workshop. Basic electronics, field repair, improvisation under pressure.

"The most important tool you have," he told them, holding up Ghost's knife, "isn't in any kit. It's your ability to see a problem and imagine a solution that doesn't exist yet."

"Is that from a manual?" one of them asked.

"It's from experience. Which is the only manual that matters."

He caught himself sounding like Ghost and smiled. The lineage was unbroken — knowledge passed from silence to silence, master to student, spark to flame.`,
    unlock_type: 'missions',
    unlock_value: { min: 70 },
  },
  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'The Network',
    content: `His communications network saved the base. Full assault, every external system compromised, and the only thing standing between UNOPCOM and darkness was the architecture he'd built two years ago.

It held. Every relay, every encryption layer, every redundancy he'd obsessively engineered — it all held. The squad coordinated through the chaos, repelled the assault, and when it was over, the network was still running. Clean. Strong.

Ironside found him in the comm room, monitoring the feeds.

"Your system just saved this base."

"Our system. Razor built the antennas. Raven designed the tactical layer."

"Your architecture."

Spark looked at the blinking lights, the data flowing through pathways he'd imagined and built and tested. His cathedral of wire and signal.

"Yeah," he said quietly. "My architecture."

It wasn't arrogance. It was acknowledgment. Finally allowing himself to claim the thing he'd built without qualifying it, without deflecting, without the asterisk.`,
    unlock_type: 'event',
    unlock_value: { event_type: 'territory_defended' },
  },
  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'If Ghost Falls',
    content: `He prepared for it. Not morbidly — practically. The way Ghost himself would have wanted.

A file on his laptop, encrypted with the knife's serial number as the key. Everything Ghost had taught him, organized and annotated. The morning lessons. The movement techniques. The philosophy of silence.

"You're writing my obituary," Ghost said, appearing behind him as always.

Spark didn't jump anymore. "I'm writing your legacy."

"That's the same thing."

"No. An obituary is what you were. A legacy is what you leave behind."

Ghost read the file. All of it. Took twenty minutes. Then closed the laptop and looked at Spark with an expression the young man had never seen before.

"Add one more thing," Ghost said.

"What?"

"That I was proud of my student."

It was the first time Ghost had called him that directly. Student. Not soldier, not kid, not Spark. Student. The word that contained everything between them — every lesson, every silence, every morning in the north corridor.`,
    unlock_type: 'missions',
    unlock_value: { min: 75 },
  },
  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'Razor\'s Respect',
    content: `The rivalry ended not with a bang but with a handshake. After a mission where Spark's drone swarm and Razor's marksmanship combined to execute a maneuver so precise it would be studied in briefings for years.

"We're good together," Razor said. Not grudgingly. Simply.

"We always were. You were just too stubborn to admit it."

"Look who's talking."

They shook hands. Two years of competition, frustration, broken equipment, and mutual provocation — all of it leading to this moment where two people who'd made each other better acknowledged it out loud.

"I still don't like you touching my gear," Razor said.

"I still do it."

"I know. It always works better after."

"Was that a compliment?"

"Don't push it."

Spark pushed it. He always would. That was the nature of a spark — it pushed against darkness, against cold, against the comfortable stillness that said "good enough." Nothing was ever good enough. Not in a world that needed light.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'razor', min_missions: 30 },
  },
  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'The Innovation',
    content: `He built something that changed the war. Not a weapon — a shield. A portable field generator that created an electromagnetic barrier capable of deflecting projectile guidance systems. Forty-meter radius. Twelve-hour battery life. Weight: six kilograms.

The first field deployment was perfect. Zero casualties in a mission that should have cost them three.

"How?" Ironside asked, looking at the specs like they were written in a language he didn't speak.

"Phase-shifted electromagnetic resonance. The principle is simple — the engineering was the hard part."

"How long have you been working on this?"

"Since the night I couldn't sleep. The first one."

He'd been building toward this since the closet in Osaka. Every drone, every repair, every failed prototype — they were all steps. The boy who knocked over his father's tea with a six-second flight had become the man who built shields out of light.`,
    unlock_type: 'missions',
    unlock_value: { min: 85 },
  },
  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'The Quiet',
    content: `He sat in his workshop at midnight. Not building. Not designing. Just sitting. The soldering iron was cold. The laptop was closed. Ghost's knife rested on the bench, catching light.

This was new — the ability to be still. To exist in a moment without calculating the next one. To let the silence be companionable instead of threatening.

Storm passed by, saw him, and paused.

"You okay?"

"Yeah. Just... here."

"Good. Being here is underrated."

Storm moved on. And Spark sat in the quiet and realized that the desperate need to prove himself — the engine that had driven him since Osaka, since the rejection letter, since his father's words — had gone quiet. Not gone. Never gone. But quiet enough that he could hear the other things. The pride. The belonging. The peace.

He picked up the knife. Opened it. Closed it. Felt the weight of everything Ghost had given him.

Then he went to sleep. And slept well.`,
    unlock_type: 'streak',
    unlock_value: { min: 12 },
  },
  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'Mother\'s Visit',
    content: `She came to the base. Ironside arranged it — the first civilian visit in UNOPCOM history. "Exceptional circumstances," he said, which meant he'd decided the rules could bend for a mother who hadn't held her son in three years.

She was smaller than his squadmates. Shorter than Viper, thinner than Blaze. But she walked through the base like she owned it, and every soldier she passed straightened up instinctively.

"This is where you work?" she said, standing in his workshop.

"This is where I build things."

She picked up a sensor he'd been calibrating. Turned it over in her hands with the same careful curiosity he'd inherited.

"You have your grandfather's hands," she said.

"You always say that."

"Because it's always true."

She met the squad. Bowed to Ghost. Hugged Storm, who went rigid with surprise and then melted. Told Viper her Spanish was beautiful. Made Titan blush by calling him "a gentle giant."

Before she left, she held Spark's face in her hands. "Be safe. Be kind. You're already home."

He understood then. Home wasn't a place. It was this. The workshop, the squad, the work, the purpose. It was everywhere he built something that mattered.`,
    unlock_type: 'missions',
    unlock_value: { min: 90 },
  },
  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'The Successor',
    content: `One of his trainees — a nineteen-year-old from Seoul with the same wild-eyed look Spark had worn on day one — built a device that Spark hadn't imagined. A resonance amplifier that tripled the range of the field shield.

"Where did you learn this?" Spark asked, turning the device over.

"From you. The phase-shift principle. I just... extended it."

The student had surpassed the teacher. Not replaced — extended. The way Spark had extended Ghost's lessons, the way each generation of builders adds a floor to the cathedral.

He felt something he didn't expect: joy. Pure, uncomplicated joy. Not the kind that comes from personal achievement, but the deeper kind — the joy of having given someone else the tools to exceed you.

"This is brilliant," Spark said.

"Really?"

"Really. And you need to redesign the power coupling — it'll overheat in the field. But the principle is brilliant."

The trainee's face lit up. The same light Spark had felt when Ghost first called him by his callsign. The flame was passing.`,
    unlock_type: 'rank',
    unlock_value: { min: 8 },
  },
  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'Kenji',
    content: `Ghost found him in the north corridor. Their corridor. The place where it started.

"One more lesson," Ghost said.

"I thought I graduated."

"This is postgraduate."

They stood in the dark. Spark closed his eyes, as he had a thousand times before. Listened. The air filtration. Footsteps. A door.

"Where am I?" Ghost asked.

Spark didn't answer. Instead, he moved. Silently, precisely, to a position three meters to Ghost's left. The position Ghost would have chosen.

Ghost laughed. A real, full laugh — the rarest sound on the base.

"Where did you learn that?" Ghost asked.

"From you."

"No. That was yours. That was entirely yours."

They stood in the dark — the ghost and the spark, the silence and the light — and Spark understood that the lesson had never been about learning to be Ghost. It had been about learning to be himself, in Ghost's language, with Ghost's depth, but with his own frequency. His own light.

"Thank you," Spark said. "For everything."

"Don't thank me. Build something."

He would. He always would.`,
    unlock_type: 'missions',
    unlock_value: { min: 95 },
  },
  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'The First Spark',
    content: `He's in the workshop when the anniversary hits. Not writing anything down — just building. The new sensor array for the north perimeter, six hours of careful work, his hands moving through the familiar geometry of it while his mind goes somewhere else.

He thinks about the copper wire. Four meters, 24-gauge, stripped from a wall outlet, jury-rigged to a drone battery and a broken radio in thirty seconds while ten people were dying in a field. He still has a piece of it — a six-centimeter length, coiled in the drawer under the workbench, kept not as a talisman but as a question mark. Could he do it again? Could he do it faster? Is there something better he could have built?

He thinks about his father: nothing you do will amount to anything. He thinks about his sensei: every great fire starts with a single spark. He has spent a year running the experiment to find out which one was right. The data is in. The answer isn't one or the other. The answer is: both, and neither, and it was never really about either of them. It was about the thirty seconds. The copper wire. The eight people who came home.

He has been the youngest here for over a year. He has been terrified the whole time.

Everyone noticed. They just didn't hold it against him.

That's the part that took the longest to understand — not the skills, not the missions, not the work. The being allowed to be afraid and keep going anyway. The table of people who made room. The hands that built things and were still shaking sometimes and built things anyway.

He finishes the sensor array. Runs the diagnostics. Everything green.

He puts the copper wire back in the drawer.

He is twenty-three years old. He is exactly where he belongs. He is still terrified.

That is not a contradiction. That is what courage looks like when you've been here long enough to see it clearly.`,
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: 'The First Spark',
    achievement_desc: 'Kenji Nakamura completes his story — from rejected rookie to the light that starts the fire.',
  },
];

const reactions = [
  {
    event_type: 'mission_complete',
    text: 'Systems held. Squad held. That\'s what I build for — moments where everything works because someone cared enough to get it right.',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: 'I keep thinking — was there something I could have built? Something that would have changed those thirty seconds? I\'ll never stop asking.',
    priority: 2,
  },
  {
    event_type: 'territory_lost',
    text: 'We lost ground. I\'m already redesigning the defensive grid. We won\'t lose the same ground twice.',
    priority: 1,
  },
  {
    event_type: 'territory_defended',
    text: 'The network held. The shields held. The people held. That\'s three for three.',
    priority: 1,
  },
  {
    event_type: 'streak_milestone',
    text: 'Consistency. That\'s not luck — that\'s discipline. That\'s every morning session, every late-night repair, every small thing done right.',
    priority: 1,
  },
  {
    event_type: 'rank_up',
    text: 'A higher rank means more responsibility. More responsibility means more people counting on what I build. I\'m ready.',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    condition: { involves_template: 'ghost' },
    text: 'Ghost... I have the file. I have the knife. I have everything you taught me. But I\'d trade all of it for one more morning in the north corridor.',
    priority: 10,
  },
  {
    event_type: 'soldier_kia',
    condition: { involves_template: 'storm' },
    text: 'Storm always stood between me and the bullets. Every time. Who stands there now? I guess... I do.',
    priority: 10,
  },
];

const relationships = [
  {
    char_a: 'spark',
    char_b: 'razor',
    rel_type: 'rivals',
    description: 'Competitive friction that sharpens both. Razor pushes Spark\'s limits; Spark challenges Razor\'s assumptions.',
  },
  {
    char_a: 'spark',
    char_b: 'titan',
    rel_type: 'bond',
    description: 'Titan admires Spark\'s courage and sees his younger self in the eager engineer. A source of quiet encouragement.',
  },
  {
    char_a: 'spark',
    char_b: 'viper',
    rel_type: 'bond',
    description: 'Viper teaches Spark to trust his instincts over his calculations. An unlikely teacher-student dynamic wrapped in sarcasm.',
  },
  {
    char_a: 'spark',
    char_b: 'ironside',
    rel_type: 'bond',
    description: 'Ironside recognizes Spark\'s growing maturity and gives him increasing responsibility. Professional respect that deepens over time.',
  },
  {
    char_a: 'spark',
    char_b: 'raven',
    rel_type: 'bond',
    description: 'Raven reads people. Spark is not hard to read — the enthusiasm is loud, the fear is louder. She never mentions the fear. She just makes sure he\'s pointed at something he can actually handle.',
  },
  {
    char_a: 'spark',
    char_b: 'frost',
    rel_type: 'bond',
    description: 'Frost has patched Spark up enough times to know exactly how he gets hurt. He stopped being surprised. He never stopped stocking the right bandages.',
  },
  {
    char_a: 'spark',
    char_b: 'blaze',
    rel_type: 'bond',
    description: 'Two people who are loud in different frequencies — Spark\'s excitement is electric, Blaze\'s is combustible. Together they tend to break things. Neither considers this a problem.',
  },
];

module.exports = { template, chapters, reactions, relationships };
