/**
 * Character 02: Ironside — Erik Hansen
 * Ex-Norwegian Army commander. Carries the weight of a friendly fire incident that killed three soldiers.
 */

const template = {
  id: 'ironside',
  name: 'Erik Hansen',
  callsign: 'Ironside',
  nationality: 'Norwegian',
  personality: ['brave', 'protective', 'disciplined', 'haunted'],
  motivation: 'Redemption for a mistake that cost lives',
  background: 'Former Norwegian Army commander who left the service after a friendly fire incident killed three of his own soldiers. The most experienced combat leader on the UNOPCOM roster. Carries the weight visibly — in his posture, in the way he checks and rechecks every plan, in the lines around his eyes that have nothing to do with age.',
  portrait_sprite: 'xcom1',
};

// ── Chapters ──────────────────────────────────────────────────────────

const chapters = [
  // ── TIER: SURFACE (1-10) ──────────────────────────────────────────

  {
    chapter_num: 1,
    tier: 'surface',
    title: 'The Handshake',
    unlock_type: 'missions',
    unlock_value: { min: 0 },
    content: `What Erik Hansen carries:

A military-grade duffel, packed to regulation. Inside: uniforms, folded along factory lines. A field notebook — pocket-sized, pencil clipped to the cover. Protein bars in a grid. A framed photograph kept flat against the side so it doesn't bend. The notebook's inside cover holds three names, written in pencil, pressed hard enough that the impressions go three pages deep. The names are Anders. Jonas. Henrik.

The real list:

He carries a valley in Norway, above the 60th parallel, on a night in November when his thermal unit produced a four percent error rate in low-visibility conditions. He carries eleven seconds — not the duration of the incident but the duration of his hesitation before the order. He carries the specific sound of Anders calling for a correction and getting silence, because Erik Hansen's hand was moving toward the radio too slowly, deciding too carefully in conditions that punished deliberation. He carries the board of inquiry's verdict, which cleared him. He carries that verdict the way you carry something you weren't asked to pick up but picked up anyway. He carries the two years between leaving the Norwegian Army and arriving here — the gap in his file that nobody explains, the sentence he gave himself.

He arrives like a man reporting for that sentence. Shoulders square. Jaw set. He shakes the intake officer's hand with exactly the right pressure.

He is in the briefing room twenty minutes later asking for operational maps.

"He hasn't eaten yet," the intake officer tells the XO. The XO, who has read the classified file, says: "He won't for a while. Let him work."

The notebook goes in his breast pocket. Over his heart.

He has not earned the right to feel better about this. He is very clear about that. But he has earned the right to be here, where the work is, where the math might eventually come out different.

The names press through three pages deep. He can feel them when he reaches for the notebook.

He reaches for it often.`,
  },

  {
    chapter_num: 2,
    tier: 'surface',
    title: 'The Checklist',
    unlock_type: 'missions',
    unlock_value: { min: 1 },
    content: `Ironside checks everything twice. Weapon — twice. Kit — twice. Squad positions — twice. Comms — twice. It slows the pre-mission routine by seven minutes, which annoys exactly everyone until the third mission, when his second check of the comms reveals a frequency overlap that would have put them on an open channel.

After that, nobody complains about the seven minutes.

"It's not paranoia," he tells Viper, who has made a comment about obsessive behavior. "Paranoia is imagining threats. I'm identifying them."

"Same thing with a different hat."

"The hat keeps people alive."

Viper walks away. Ironside runs through the checklist a third time, because Viper's interruption means he lost count.`,
  },

  {
    chapter_num: 3,
    tier: 'surface',
    title: 'The Voice',
    unlock_type: 'missions',
    unlock_value: { min: 2 },
    content: `He has a commander's voice. Not loud — Ironside rarely raises his volume above conversational. But there's a quality to it, a gravitational pull, that makes people stop and orient toward him like compass needles. It's the voice of someone who has given orders that mattered, and everyone who hears it knows this instinctively.

In the field, the voice drops even lower. Calm, measured, each word chosen like ammunition — nothing wasted, nothing ambiguous. "Two contacts, north corridor. Frost, cover left. Ghost, overwatch. Move on my mark."

Frost says it's like being directed by a surgeon. Every instruction lands exactly where it needs to.

Raven hears it too, and something flickers across her face — recognition, memory, the echo of a voice she heard years ago in a different theater. She files it away and says nothing. Not yet.`,
  },

  {
    chapter_num: 4,
    tier: 'surface',
    title: 'Morning Iron',
    unlock_type: 'time',
    unlock_value: { min_days: 3 },
    content: `Ironside works out at 0530 every morning. Free weights, pull-ups, a punishing core routine he does on the floor of the gym with the focus of a man performing surgery. No music, no company, no mirror-checking.

He is forty-three years old and built like something designed to survive impact. Broad shoulders, thick forearms, hands that look like they were made to grip things and not let go. There's a scar across his left shoulder blade — surgical, deliberate, from where shrapnel was removed.

The workout lasts exactly one hour. He showers, dresses, and is in the mess hall by 0700 with a plate of eggs and black coffee. He eats alone most mornings, reading whatever tactical material has come in overnight, marking sections with a pencil.

Titan joins him occasionally. They eat in the way of old soldiers — efficiently, without ceremony, trading observations about the base, the weather, the operational tempo. Two men who have both seen enough to fill their silences with something heavier than small talk.`,
  },

  {
    chapter_num: 5,
    tier: 'surface',
    title: 'The Plan',
    unlock_type: 'missions',
    unlock_value: { min: 4 },
    content: `Every mission, Ironside draws the plan by hand. Not a rough sketch — a full tactical overlay, complete with approach vectors, fallback positions, rally points, and contingency routes. He draws them on actual paper with a ruler and colored pencils, like a man who doesn't trust screens to keep working when the power goes out.

"Because they don't," he says when Spark teases him about it. "I've been in situations where every electronic aid failed. Paper doesn't need a battery."

The plans are thorough to the point of obsession. Three contingencies for every phase. Withdrawal routes for every position. Medical evacuation mapped before anyone has been hurt.

"What about the plan for when the plan goes wrong?" Viper asks, half-joking.

"That's contingency four," Ironside says, without looking up. "Page two."

He isn't joking.`,
  },

  {
    chapter_num: 6,
    tier: 'surface',
    title: 'Frost\'s Debt',
    unlock_type: 'missions',
    unlock_value: { min: 6 },
    content: `The story circulates within the first month. Before UNOPCOM, during the early incursion chaos in northern Europe, Ironside pulled a wounded man out of a collapsed building in Tromsø. Carried him eight hundred meters through rubble while covering fire chewed up the street around them. The wounded man was Frost.

Frost doesn't talk about it much. When pressed, he says: "Hansen carried me. I lived. End of story."

Ironside talks about it even less. When Frost thanks him — once, privately, in the armory — Ironside just nods and says, "You were there. I was there. That's how it works."

But he is visibly, unmistakably protective of Frost in the field. Assigns him positions with cover. Checks his kit personally. It's not favoritism — it's the opposite. It's the behavior of a man who has failed to protect people before and will not fail again if his body and his will have anything to say about it.`,
  },

  {
    chapter_num: 7,
    tier: 'surface',
    title: 'War Stories',
    unlock_type: 'missions',
    unlock_value: { min: 7 },
    content: `Titan and Ironside over coffee at 2200, the base quiet around them. They trade stories the way old hands do — not bragging, not competing, but assembling a shared language of experience.

"Helmand, 2012," Titan says. "Sandstorm hit during extraction. Couldn't see the helo. Pilot brought it in by instrument in forty-knot winds."

"Northern Mali, 2014," Ironside counters. "Norwegian contingent, UN mission. Convoy ambush. We lost the lead vehicle and had to fight through with four operational guns and a translator who turned out to be a better shot than half my squad."

They laugh — the dark, short laugh of men who know these stories end in ways that aren't funny at all.

"The translator make it?" Titan asks.

"He did." A pause. "Most of them did."

The "most" hangs in the air. Titan doesn't push. There are stories you trade and stories you carry, and the weight of the untold ones is a language they both speak fluently.`,
  },

  {
    chapter_num: 8,
    tier: 'surface',
    title: 'Authority Issues',
    unlock_type: 'missions',
    unlock_value: { min: 8 },
    content: `The first real clash with Viper happens during a planning session. Ironside has laid out a three-phase approach to a contested sector. Viper disagrees — publicly, loudly, with the particular energy of someone who treats authority as a personal challenge.

"Your flanking route adds forty minutes. We go direct, we save time, we save ammo."

"We also funnel into a kill zone with no fallback."

"I've run harder routes than that."

"Alone, maybe. I'm not planning for one person. I'm planning for the squad."

The room goes quiet. Ironside's voice hasn't changed — still low, still measured — but there's a steel in it that wasn't there before. The steel of a man who has seen what happens when plans fail and people improvise under fire.

Viper holds his gaze for a long moment, then sits back. Not convinced — Viper is never convinced — but smart enough to recognize the immovable when he sees it.

"Your call, Commander."

"It's always my call," Ironside says. "That's what 'commander' means."`,
  },

  {
    chapter_num: 9,
    tier: 'surface',
    title: 'The Pencil Marks',
    unlock_type: 'streak',
    unlock_value: { min: 5 },
    content: `Ironside keeps a small notebook. Not a journal — he'd deny that. A "tactical log." In it, in small, precise pencil marks, he records: date, mission, squad composition, outcome, lessons learned.

But between the tactical entries, there are other notes. Smaller. Almost hidden in the margins.

"Frost — steady today. Shoulder holding up."
"Ghost flinched at the doorway — third time. Monitor."
"Spark improving. Good instincts. Needs to slow down."
"Viper — effective under pressure. Still reckless. Have to watch."

He is tracking them. Not as assets, not as numbers on a roster. As people. People whose lives are in his hands every time they walk through a door into the unknown.

The notebook lives in his breast pocket, over his heart. It's a coincidence of pocket placement, nothing more. He'd say that if anyone asked. Nobody asks, because nobody knows about the notebook except Raven, who sees everything and says nothing.`,
  },

  {
    chapter_num: 10,
    tier: 'surface',
    title: 'The Commander\'s Weight',
    unlock_type: 'missions',
    unlock_value: { min: 10 },
    is_achievement: true,
    achievement_name: 'Iron Discipline',
    achievement_desc: 'Completed Ironside\'s Surface tier — you\'ve seen the commander, not yet the man beneath.',
    content: `Ten missions in, and Ironside has not lost a single operative. Zero KIA. Zero critical injuries. The streak is a statistical anomaly, and he knows it — luck, not skill, is the primary determinant in combat survival, and luck is not a resource you can stockpile.

He stands in the briefing room after the tenth debrief, alone, staring at the mission board. Ten green pins. No red. Not one.

His hands are steady. His breathing is even. To anyone watching, he would look like a man satisfied with a job well done.

But inside the notebook, in the smallest pencil marks he's ever made, he has written: "Ten missions. All returned. It won't last. It never does. Make the next one count like it's the last — because for someone, it will be."

He closes the notebook. Puts it back in his pocket. Goes to the gym at 0530. Does the core routine. Showers. Eggs and black coffee. Reads the overnight material.

The weight is invisible. He carries it the way he carries everything: squared shoulders, set jaw, not a single wasted movement.`,
  },

  // ── TIER: ROOTS (11-20) ───────────────────────────────────────────

  {
    chapter_num: 11,
    tier: 'roots',
    title: 'Bergen',
    unlock_type: 'missions',
    unlock_value: { min: 12 },
    content: `Erik Hansen grew up in Bergen, on Norway's west coast, where it rains two hundred and thirty days a year and the mountains meet the fjords in a landscape so dramatic it looks manufactured. His father was a fisherman. His mother taught primary school. He had two older sisters who both went into medicine and never understood why their little brother wanted to carry a rifle.

"Because someone has to," he told them at seventeen, signing his enlistment papers at the kitchen table while his mother made coffee and tried not to cry. His father signed the parental consent without a word. Later, on the dock, while Erik loaded his bag onto the bus, his father gripped his shoulder and said: "Come back the same person."

He didn't. Nobody does. But he came back, and for a long time, that was enough.

Bergen is still there. The rain still falls. His mother still teaches. His sisters still practice medicine. Erik hasn't been home in four years. He sends money. He calls on birthdays. He does not visit, because visiting means answering questions about the gap in his service record, and the answers live in a place he cannot take his family.`,
  },

  {
    chapter_num: 12,
    tier: 'roots',
    title: 'The Academy',
    unlock_type: 'missions',
    unlock_value: { min: 14 },
    content: `He was not the best student at the Norwegian Military Academy. He was the most relentless. Instructors noted his tendency to stay after hours, running scenarios until the lights were turned off, then running them in his head in the dark. He graduated fourth in his class. The three above him were brilliant. Hansen was thorough.

"Brilliance is a peacetime luxury," his tactics instructor told him. "Thoroughness wins wars."

He took it as scripture. Built his entire career on the idea that preparation, not talent, was the variable he could control. Every mission planned twice. Every contingency mapped. Every risk assessed and reassessed until the margins for error were as thin as he could make them.

It worked. For fourteen years, it worked. His unit had one of the lowest casualty rates in the Norwegian Army. His after-action reports were used as training material. He was promoted ahead of peers, offered positions in staff planning, intelligence, even diplomatic security.

He turned them all down. He wanted to lead soldiers. To be the one standing between the plan and the chaos. The one responsible.

"Responsibility is the point," he told his commander when declining a desk job. "Without it, I'm just a tourist."`,
  },

  {
    chapter_num: 13,
    tier: 'roots',
    title: 'The Unit',
    unlock_type: 'time',
    unlock_value: { min_days: 16 },
    content: `His last unit was special operations — Forsvarets Spesialkommando, name classified, work worse than the name. Twelve operators. Hand-picked. He knew all of them. Their names and families and the particular fears that people carry into combat alongside their weapons.

Sergeant Lena Bjørk — Raven, she went by in the field, before she was Raven here. Second-in-command. Sharp as a blade, twice as reliable, the best intelligence mind he'd served with. They disagreed loudly and in private, and in the field they moved like a single organism. She is here now. She knows what happened. She has never told him that she knows.

Corporal Anders Nilsen. Twenty-four. From Stavanger, where his wife and two-year-old daughter lived in a house that got a lot of rain. The daughter's name was Maja. Anders talked about her constantly — in briefings, at meals, on watch. Maja said her first word. Maja pulled herself up on the coffee table. Maja drew something on the wall and it looked like a boat. Ironside heard more about Maja than he heard about anything except the mission.

Private Jonas Vang. Twenty-two. The medic. Quiet, precise, with the specific stillness of someone who has learned to be calm because other people need him to be. The kind of calm that makes you believe things will be fine even when they very clearly aren't going to be.

Private Henrik Bjørk. Twenty-three. Raven's brother. The youngest. He had the idealism of someone who still believed that what they were doing mattered.

It did matter. He did matter. They all did.

Until the night in the valley. After which they mattered only in the past tense, which is not a place where people can be reached.`,
  },

  {
    chapter_num: 14,
    tier: 'roots',
    title: 'Before the Valley',
    unlock_type: 'missions',
    unlock_value: { min: 17 },
    content: `The mission briefing was straightforward. A suspected alien forward observation post in a valley in Nordland. Satellite imagery showed structures. Signal intelligence confirmed activity. The objective was simple: approach, assess, report. Engage only if necessary.

Ironside planned it like he planned everything — three approaches, four contingencies, medical evacuation pre-staged. He briefed the unit at 1400 hours. They would insert at 2200, under cover of the November darkness that, at that latitude, lasted nearly twenty hours.

Henrik Bjørk — Raven's brother — asked a question during the brief. "Sir, what if the structures aren't alien? What if it's refugees?"

It was a good question. The valley was on a refugee route from the northern evacuations. Hansen noted it, added a visual identification step to the engagement protocol, and moved on.

He thinks about that question every day. The one thing he didn't plan for wasn't in the valley. It was in himself.`,
  },

  {
    chapter_num: 15,
    tier: 'roots',
    title: 'The Valley',
    unlock_type: 'missions',
    unlock_value: { min: 19 },
    content: `You have to understand something about the dark in northern Norway in November. It is not the dark of a room with the lights off. It is a total dark, a consuming dark, the kind of dark that has weight and temperature and its own specific silence. Minus fourteen. The kind of cold that makes the air feel thick.

The unit moved through the valley in two elements. Hansen led the assault group. Raven ran overwatch from the eastern ridge. The structures were there. The signal activity was there. Everything matched the intelligence. He would keep telling himself that. It wouldn't stop being true. It also wouldn't help.

The contact came through comms: "Contact, north structure. Multiple hostiles. Moving to engage."

Twelve years of preparation compressed into a decision point. The thermals showed wrong — alien signatures read differently on FLIR, everyone knew that. But the movement was aggressive. His lead element was exposed. The window was closing. Step eight of twelve said: assess. Step seven said: visual identification before engagement. He was at step seven.

He skipped to step twelve.

"Weapons free," he said. "Engage north structure."

The fire lasted eleven seconds. The unit was efficient. They always were.

When it stopped, someone clicked on a flashlight — maybe Anders, it would have been like Anders to have the light — and then the shape of the room was wrong. The shapes on the floor were wrong. The thermal signatures had been wrong because these were not aliens.

He stood there with the torch beam on the floor for a long time. He doesn't know how long.

Three of his own. Henrik. Jonas. Anders. Separated during approach. Entered from the north side. Appeared as contacts because they were, technically, contacts.

Eleven seconds. Three lives. One call.

He has replayed it so many times he's no longer certain his memory is accurate. The mind edits. The mind protects itself. Maybe the timeline was slightly different. Maybe the window was longer than he remembers. Maybe he hesitated more than he thinks, or less.

What he knows for certain: he skipped step seven. He made the call. Three men died.

The rest is revision.`,
  },

  {
    chapter_num: 16,
    tier: 'roots',
    title: 'Aftermath',
    unlock_type: 'rank',
    unlock_value: { min: 2 },
    content: `The investigation cleared him. Technically. "Fog of war," the board concluded. Misidentification under extreme conditions. Equipment failure — the IFF transponders had malfunctioned in the cold. No criminal liability. No disciplinary action. The file was classified and filed with the efficient cruelty of bureaucracy dealing with inconvenient deaths.

Three families received letters. Hansen wrote each one personally, sitting at his desk in Bergen for nine hours until the words were right, knowing no words would ever be right.

To Anders's wife, he wrote about her husband's skill, his devotion, his constant talk of their daughter. To Jonas's parents, he wrote about their son's calm, his medical skill, the lives he'd saved. To Raven — to Lena Bjørk — he said nothing. He couldn't find words for a woman whose brother he'd killed.

He resigned his commission the next day. The army tried to keep him — counseling, leave, a transfer to training command. He refused everything. A man who kills his own soldiers has no business leading them.

He walked out of headquarters in Bergen and disappeared for two years.`,
  },

  {
    chapter_num: 17,
    tier: 'roots',
    title: 'The Two Years',
    unlock_type: 'missions',
    unlock_value: { min: 23 },
    content: `He went north. Past Tromsø, past the last road, into the Finnmark Plateau where the wind comes from Russia and the landscape is so empty it makes you feel like the last person on earth. He lived in a cabin that belonged to no one — or to everyone, in the Norwegian tradition of open shelters.

He chopped wood. He fished. He walked for hours across terrain that wanted to kill him and found the honesty of it refreshing. The cold didn't lie. The wind didn't make excuses. The dark was total and unambiguous.

He didn't drink. He didn't self-destruct. He simply... stopped. Stopped leading, stopped planning, stopped being the man who made the call. He was a body in a landscape, nothing more.

The nightmares came every night. The same eleven seconds, the same flash of the torch, the same shapes on the floor. He didn't fight them. He let them come, let them play, let them leave. They were accurate. Why would he argue with accuracy?

Raven found him there, eighteen months in. He doesn't know how. She always was the better intelligence officer.`,
  },

  {
    chapter_num: 18,
    tier: 'roots',
    title: 'Raven at the Door',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'raven', min_missions: 5 },
    content: `She stood in the doorway of the cabin, snow in her hair, a look on her face that he couldn't read. That scared him — he'd always been able to read Raven.

"You look terrible," she said.

"I live in a cabin in Finnmark. What did you expect?"

She came inside without being invited, sat at the table, and put a folder down. UNOPCOM. A new organization. International. Fighting the alien threat with unconventional methods. They needed experienced commanders. She was already signed on.

"No," he said.

"I didn't ask a question."

"The answer is still no."

She opened the folder. He didn't look at it. She waited — Raven was always better at waiting — and eventually he asked the question that had been sitting in the cabin with him for eighteen months.

"How can you stand to be in the same room as me?"

She looked at him with those sharp, steady eyes. "Because I know what happened, Erik. All of it. And I'm still here."

He enlisted the next week.`,
  },

  {
    chapter_num: 19,
    tier: 'roots',
    title: 'The Scar',
    unlock_type: 'missions',
    unlock_value: { min: 26 },
    content: `The scar on his left shoulder blade is from the valley. Not from the engagement — from afterward. When they realized what had happened, when the lights came on and the floor was wrong, Hansen moved toward the bodies. Anders first. Then Jonas. Then Henrik.

He doesn't remember the explosion. The structures were rigged — the actual alien presence, a secondary device, detonated ninety seconds after the engagement. Two more of his unit were wounded. Hansen took shrapnel across his back and kept moving, pulling people out of the collapse, working on autopilot while his body bled and his mind refused to process what was on the floor.

He doesn't show the scar. It's in a place that's naturally hidden. But Frost has seen it — the medical records, the surgical notes. Frost understands, in the way of someone who has his own collection of scars, that the ones on the body are often the easiest to treat.

"Does it still hurt?" Frost asks once, nodding toward his shoulder.

"Only when it rains."

It rains two hundred and thirty days a year in Bergen. Ironside hasn't been home in four years. The math is not coincidental.`,
  },

  {
    chapter_num: 20,
    tier: 'roots',
    title: 'Why He Fights',
    unlock_type: 'missions',
    unlock_value: { min: 30 },
    is_achievement: true,
    achievement_name: 'The Valley',
    achievement_desc: 'Completed Ironside\'s Roots tier — you know what happened in Nordland.',
    content: `People assume Ironside fights for redemption. He lets them assume it because the truth is more complicated and less noble.

He fights because he doesn't know what else to do. The skills he has — leadership, tactics, the ability to remain calm when the world is ending — are useless in peacetime. He is a tool designed for a specific purpose, and when the aliens arrived, the purpose returned.

But there's more. He fights because every mission is a chance to do it right. Not to undo the valley — that's impossible, and he's pragmatic enough to know it. But to prove that the valley was an aberration. That the fourteen years of competent leadership before it were the real Erik Hansen, and the eleven seconds in the dark were a malfunction.

He tells Titan this over late-night coffee, the only person he trusts with the raw machinery of his motivation. Titan listens, nods, and says: "You don't have to prove anything to me."

"I'm not proving it to you. I'm proving it to three dead soldiers."

Titan looks at him for a long time. "They're dead, Erik. The only person keeping score is you."

Ironside drains his coffee. "Then the score needs to be right."`,
  },

  // ── TIER: CRACKS (21-30) ──────────────────────────────────────────

  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'The Hesitation',
    unlock_type: 'missions',
    unlock_value: { min: 28 },
    content: `It happens during a breach. The squad is stacked on a doorway. Ironside is first in line. Ghost is on overwatch, calling the count. "Three contacts. Thermal reads alien. Go."

Ironside's hand is on the handle. His body knows the motion — he's done it a thousand times. But for one heartbeat, his fingers don't move. The door is a door in a valley in Nordland. The thermal reads are thermals that were wrong before. The contacts might not be contacts.

One heartbeat. Then he moves, and the breach is clean, and the contacts are alien, and everyone survives.

Ghost sees the hesitation from her overwatch position. She doesn't mention it. But she starts placing herself closer to Ironside's entry points — not hovering, just present. Close enough to cover the gap if a heartbeat becomes two.

Neither of them names what happened. They don't have to. They are both people who carry a moment that changed everything, and they recognize the weight in each other's hands.`,
  },

  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'The Double Standard',
    unlock_type: 'missions',
    unlock_value: { min: 31 },
    content: `Ironside holds everyone to a standard that is rigorous but fair. He holds himself to a standard that is punishing.

A missed check, a sloppy approach, a moment of inattention — from anyone else, it earns a correction. From Ironside, it earns a four-hour solo review of the mission, dissecting every decision down to the nerve impulse.

Raven confronts him about it. "You're going to burn out."

"I don't burn out."

"Everyone burns out, Erik. You're not special."

"I'm not trying to be special. I'm trying to be exact."

"There's a difference between exact and obsessed."

He looks at her. "Is there? In our line of work?"

Raven doesn't answer, because the honest answer is complicated. In combat, the line between thoroughness and obsession is drawn by survivors, and they don't always agree on where it falls.`,
  },

  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'The Roster',
    unlock_type: 'chance',
    unlock_value: { probability: 0.15 },
    content: `In the back of his notebook, past the tactical logs and the personnel notes, there is a page that Ironside has never shown anyone. Three names. Anders Nilsen. Jonas Vang. Henrik Bjørk.

Below each name, a date. Below each date, a single word: "Mine."

He adds to the page over time. Not names — he has not lost anyone at UNOPCOM, and he intends to keep it that way. But notes. Updates. As if reporting to them.

"Anders — your daughter turned five. I checked. She looks like you."
"Jonas — the new medic is good. Not as calm as you. Nobody is."
"Henrik — Raven is here. She's running intel. She's brilliant. You'd be proud."

It is not healthy. He knows this. A therapist would call it unresolved grief, complicated mourning, an inability to let go. Ironside calls it accountability. The dead deserve to know how the story continues without them.`,
  },

  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'Viper\'s Challenge',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'viper', min_missions: 8 },
    content: `The conflict with Viper escalates after a mission where Ironside overrides Viper's tactical suggestion mid-operation. The suggestion was sound — Viper has good instincts, Ironside will admit that privately. But the override was necessary because the situation changed, and changed situations require command decisions, not committee votes.

Viper corners him in the corridor afterward. "You don't trust me."

"I trust your skills. I don't trust your impulse control."

"That's not trust. That's management."

"Yes. It is. Because that's my job."

Viper steps closer. He's taller than Ironside, younger, faster. "One day, Commander, your precious control is going to cost someone their life."

The silence that follows is heavy enough to crack concrete. Ironside's face doesn't change, but something behind his eyes shifts — a door opening onto a room that's always dark.

"It already has," he says. And walks away.

Viper stands in the corridor for a long time, realizing he's just stepped on a landmine he didn't know was there.`,
  },

  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'The Night Watch',
    unlock_type: 'missions',
    unlock_value: { min: 36 },
    content: `Ironside doesn't sleep well. This is known but not discussed, the way you don't discuss the weather with someone who lives in a flood zone.

He takes extra watch shifts. Volunteers for the 0200-0500 slot that nobody wants. Sits in the watchtower with binoculars and the notebook and the cold Norwegian discipline that keeps his body functional on four hours of broken sleep.

Frost finds him there one night, wide-eyed and rigid, gripping the binocular strap like a lifeline. "Bad one?"

"Routine surveillance."

"I meant the dream."

Ironside's jaw works. "I don't dream."

Frost sits down beside him, pulls out a flask — not alcohol, hot coffee, because Frost is practical. They share it in silence while the stars wheel overhead and the base sleeps and Ironside's hands slowly stop shaking.

"The valley?" Frost asks eventually.

"Always the valley."

Frost nods. Pours more coffee. Stays until the shift ends.`,
  },

  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'Protective to a Fault',
    unlock_type: 'time',
    unlock_value: { min_days: 35 },
    content: `Spark almost dies.

A routine patrol turns hot, and Spark is caught in the open — bad positioning, a moment's lapse, the kind of mistake that kills people in combat with absolute indifference to their potential or their age.

Ironside covers her. Physically — puts his body between her and the fire, drags her behind a wall, takes a round in the vest that cracks two ribs. He doesn't notice until afterward, when the adrenaline fades and the pain arrives like a letter that's been lost in the mail.

"You could have died," Spark says in the medical bay, eyes wide, voice shaking.

"That's the job."

"It's not — you can't just throw yourself —"

"I can." His voice is flat. "I'm the commander. The commander's job is to bring everyone home. Everyone."

Spark looks at him and sees something she hasn't seen before: not bravery, but compulsion. The desperate, grinding need of a man who has already failed to bring people home and will break his own body to avoid failing again.

She doesn't know about the valley yet. But she's starting to see the shape of it.`,
  },

  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'Ghost Sees Through',
    unlock_type: 'missions',
    unlock_value: { min: 38 },
    content: `Ghost approaches him after a debrief where he spent forty minutes dissecting a successful mission as if it were a failure. Every decision examined, every timing questioned, every alternative explored. The squad left exhausted. Ironside left alone.

"You're punishing them for surviving," Ghost says from the doorway.

"I'm training them to survive better."

"No. You're training yourself to believe that if you plan hard enough, control hard enough, nobody dies. That's not training. That's magical thinking in a tactical uniform."

He stares at her. Ghost stares back. Two haunted people, recognizing each other's architecture.

"You would know about magical thinking," he says. Not cruel — honest. The way two people who share a disease compare symptoms.

"I would," she says. "Which is why I can see it in you."

The silence between them is not comfortable, but it is real. And real is something Ironside hasn't had enough of.`,
  },

  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'The Weight Room',
    unlock_type: 'missions',
    unlock_value: { min: 42 },
    content: `The workout changes. For months, it's been the same routine — weights, core, pull-ups, controlled, measured, mechanical. But Ironside starts adding time. An extra set. Another plate. More reps until his arms shake and his vision blurs.

Titan notices. Of course Titan notices — the man has eyes built for seeing through walls.

"You're not training anymore. You're hurting yourself."

"I'm building capacity."

"You're building scar tissue. Sit down."

Ironside doesn't sit. But he puts the weight down, and his hands are trembling, and the tremble isn't from exertion.

"When does it stop?" he asks. It's the most naked thing he's ever said.

"It doesn't," Titan says. "But the weight changes shape. You learn where to carry it."

"What if I can't?"

Titan picks up a towel, tosses it to Ironside. "You already are. You just don't recognize it because you're too busy looking at the ground."

Ironside catches the towel. His hands steady. Not completely — but enough.`,
  },

  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'The Wrong Call',
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_kia' },
    content: `When they lose someone — and eventually, inevitably, they do — Ironside disappears for six hours. Nobody can find him. Not Ghost, not Raven, not Titan. He is simply gone, a void in the base where a man used to be.

He's in the watchtower. The one with the best view of the surrounding terrain, where you can see threats coming from kilometers away. He sits with his notebook open to the roster page and adds a new entry. Not a name from UNOPCOM — not yet, please not yet — but a notation.

"Failed."

One word. Then he closes the book and sits in the cold and lets the valley come. The flash. The torch. The shapes on the floor. And now this — a new floor, a new shape, a new person who trusted his plan and followed his lead and did not come home.

He returns at dawn. His face is stone. He briefs the next mission with perfect clarity, perfect control, perfect thoroughness. Three contingencies for every phase.

Nobody asks where he went. They know. There are places inside a commander that aren't on any map, and you don't follow someone there without an invitation.`,
  },

  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'The Cracking Point',
    unlock_type: 'missions',
    unlock_value: { min: 48 },
    is_achievement: true,
    achievement_name: 'Iron and Rust',
    achievement_desc: 'Completed Ironside\'s Cracks tier — the armor is starting to show its age.',
    content: `He finds himself in the briefing room at 0300, drawing a plan for a mission that hasn't been assigned. A contingency for a contingency for a scenario he's invented. The map is covered in colored pencil marks so dense it looks like abstract art.

Raven finds him there. She stands in the doorway and watches him work for five minutes before he notices her.

"Erik."

"I'm planning."

"You're spiraling."

He puts the pencil down. Looks at his hands. They're smudged with graphite and his fingers are cramping and he can't remember when he started.

"I can't—" He stops. Starts again. "I can't stop seeing it. Every doorway is that doorway. Every thermal contact is a misidentification waiting to happen. Every plan I draw has a hole in it that I can't find until someone walks through it and doesn't come back."

Raven crosses the room. She takes the pencil from his hand. Sets it on the table. Picks up the map and folds it, carefully, precisely.

"Three of them died, Erik. Three. Not everyone. Not the unit. Three. And you have been carrying them like they were the whole world."

"They were."

"They were three people. And you were one. And one person cannot carry the whole world, no matter how many maps he draws."

He sits down. Raven sits across from him. The briefing room is quiet and the colored pencils are scattered and for the first time in years, Erik Hansen does not have a plan.

It terrifies him. It also, in a way he can't name, feels like the beginning of something.`,
  },

  // ── TIER: SECRETS (31-40) ─────────────────────────────────────────

  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'The Real Story',
    unlock_type: 'missions',
    unlock_value: { min: 50 },
    content: `Here is the true story. I want to be clear that this is the true story, not the one in the file.

The investigation report says "fog of war." Equipment failure. Misidentification under extreme conditions. No criminal liability. No fault.

That report is accurate in the way that maps are accurate — it describes the terrain without being the terrain.

The IFF transponders malfunctioned. That's true. The thermal signatures were ambiguous. Also true. The conditions were extreme. The window was narrow. All of that is true.

What's also true: the engagement order came before step seven. Visual identification before weapons free. One step in a twelve-step protocol Ironside wrote himself. Henrik had asked about refugees in the briefing. Ironside had added the step specifically because of that question. And in the dark, with his lead element exposed and contacts moving aggressively, he reached step seven and kept going.

Not because he forgot it was there.

Because the tactical clock was running and his training said: act. The math said his people in the open were at greater risk than the contacts in the structure. He made the call.

The math was wrong. The contacts were his people.

He has told this story to himself so many times that there are versions of it now — versions where the window was shorter than he remembers, where the movement was more aggressive, where even waiting for step seven would not have changed the outcome. He doesn't know which version is true. The mind edits. The mind protects.

What doesn't vary across any version: he skipped the step. He gave the order. Three men died.

That part is exact. He won't let the mind touch it.`,
  },

  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'The Step He Skipped',
    unlock_type: 'missions',
    unlock_value: { min: 53 },
    content: `Step seven of twelve: "Visual identification of targets before engagement. Confirm hostile via NVG or illumination."

He wrote it. It's in his own handwriting, in the mission plan that's still filed somewhere in Norwegian Army archives. Step seven. Visual ID. Confirm hostile.

He skipped it because confirming takes time, and time in a firefight is measured in lives, and his calculus — his perfect, thorough, obsessively prepared calculus — said that the delay would cost more lives than the action.

This is what separates the valley from a simple tragedy. It wasn't chaos. It wasn't confusion. It was a deliberate choice made by a competent commander who weighed the risks and chose wrong. Not accidentally. Not blindly. With full awareness that he was trading certainty for speed.

He chose to fire knowing the risk.

The investigation never found this because Hansen never told them. He could have. It would have changed the findings. It might have led to a court martial. Instead, he said the words the board wanted to hear — fog of war, equipment failure, impossible conditions — and let them close the file.

The file is closed. The valley is not.`,
  },

  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'What Raven Knows',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'raven', min_missions: 15 },
    content: `Raven knows. She has always known.

She was on the ridge, running overwatch. She heard the comms. She heard the engagement order come before step seven. She tracked the timeline in her head — because that's what intelligence officers do, they track timelines — and she knew, in real time, that the protocol was incomplete when the order came.

She said nothing during the investigation. Not to protect Hansen — though that was part of it. She said nothing because she understood the decision. She'd been tracking the same tactical picture from the ridge. She'd seen the exposure of the lead element. She'd calculated the same risk.

She might have made the same call.

That's the thing that sits between them — not the death of her brother, but the knowledge that in his position, she cannot say with certainty that she would have waited for step seven. And that uncertainty is more terrifying than grief, because grief is clean and certainty is not.

She came to the cabin in Finnmark to recruit him, yes. But also to look him in the eye and determine whether he knew what he'd done. He did. She saw it immediately.

She's never told him that she knows. Some truths are better carried in parallel than shared.`,
  },

  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'The Letters He Wrote',
    unlock_type: 'time',
    unlock_value: { min_days: 50 },
    content: `He wrote three letters. One to Anders's wife in Stavanger. One to Jonas's parents in Bergen. One to Raven — to Lena Bjørk — whose brother he killed.

He sat at his desk for nine hours. The letters are honest about many things — about Anders's skill, Jonas's calm, Henrik's belief in the mission. All of that is true. He wrote it carefully because these people deserved to have the true things said carefully.

What he didn't write: I could have waited three seconds. I chose speed. The math said my people in the open were at greater risk. The math was wrong.

Three seconds. He has timed it in the Finnmark dark, over and over. NVG up. Confirm visual. NVG down. Three seconds for step seven.

He gave the order 2.8 seconds before the IFF transponders would have refreshed. The technical report is in the classified annex. He found it before he drove north. He requested it under his former clearance as one final act of self-punishment: make me see the exact number.

2.8 seconds. He carries it the way you carry a stone that has been in your pocket a long time — smooth from handling, heavier than physics should allow, shaped exactly to the hollow of your palm so that you can always find it without looking.

The letters don't say this. The letters say "tragic accident" and "no one could have predicted" and "he died serving something that mattered."

That last part is true. He is not sure the others are.

The stone stays in his pocket. The letters go in the mail. He sits at the empty desk and starts to understand that there are some things you carry until you put them down, and some things you carry until you die, and the only difference between them is whether you ever find someone to help you tell the truth out loud.

He hasn't found that yet.

He will. It will take a while.`,
  },

  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'Telling Frost',
    unlock_type: 'missions',
    unlock_value: { min: 58 },
    content: `He tells Frost first. Not because Frost is the closest — that's Titan, or Raven. He tells Frost because Frost is the one he saved in Tromsø, and there's a symmetry in it that feels necessary. A man who saved a life telling the life he saved about the lives he took.

They're in the watchtower. Frost's flask of coffee between them. Ironside speaks for twenty minutes without stopping, which is longer than Frost has ever heard him speak about anything.

When he finishes, Frost is quiet for a long time.

"You skipped step seven."

"Yes."

"You knew you were skipping it."

"Yes."

"And you've been carrying that for — how long?"

"Since the flash. Since the torch. Since I saw Henrik's face and knew."

Frost pours coffee. Hands it over. "You know what I think?"

"I know what you'll say. That I made a judgment call. That anyone could have—"

"No. I think you made the wrong call. I think you know it. And I think the fact that you know it is the reason I trust you more now than I did five minutes ago."

Ironside looks at him. "That doesn't make sense."

"The hell it doesn't. I trust the man who knows his mistakes. I don't trust the one who pretends he never made them."`,
  },

  {
    chapter_num: 36,
    tier: 'secrets',
    title: 'Anders\'s Daughter',
    unlock_type: 'missions',
    unlock_value: { min: 62 },
    content: `He keeps track of her. Discreetly, through channels that don't lead back to him. Anders's daughter, Maja, now seven. She lives with her mother in Stavanger. She started school last year. She likes drawing — someone posts a picture on a memorial page for her father, Maja holding up a painting of a boat on a fjord.

Ironside looks at the picture on his phone in the dark of his bunk and feels the weight shift. Not lighten — shift. Because the daughter exists, and she is growing, and she draws boats, and her father talked about her constantly and loved her absolutely and is dead because of a decision made in 2.8 seconds.

He doesn't have the right to feel anything about her. He knows this. Grief belongs to the family. Guilt is his own currency, and he spends it elsewhere.

But he looks at the picture. And he thinks: she has his eyes.

He sends money anonymously. Has been sending it since he left the service. It's not atonement — money can't buy that. It's the only act of care he can perform without revealing the truth.

The drawing of the boat goes into the back of the notebook, next to the roster page.`,
  },

  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'Ghost and Ironside',
    unlock_type: 'streak',
    unlock_value: { min: 10 },
    content: `They sit on a rooftop during a long stakeout, and the conversation finds its way to the dark place where both of them live.

"You chose the mission over your family," Ironside says. Not an accusation. A recognition.

"And you chose speed over certainty," Ghost says.

"Yes."

"Do you think we're the same?"

He considers it. "No. You made the right call that cost you everything. I made the wrong call that cost three people everything."

"There's no right call when people die, Erik."

"There's less wrong and more wrong. I was more wrong."

Ghost looks at him in the dark. "And you've been trying to be less wrong ever since."

"Every mission. Every plan. Every check I run twice."

"Does it work?"

"Ask me when I've brought everyone home."

She doesn't point out that "everyone" is an impossible standard. She carries her own impossible standards. They sit in the dark, two people who made choices that broke them, and the silence between them is the most honest conversation either has had in years.`,
  },

  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'The Confession',
    unlock_type: 'missions',
    unlock_value: { min: 68 },
    content: `He tells the squad. All of them. In the briefing room, standing at the map table where he's drawn a hundred plans, under the lights that make everyone look older than they are.

He tells them about the valley. Not the official version — the real one. Step seven. The 2.8 seconds. The choice he made and the lives it cost.

The room is very quiet.

Viper speaks first. "Why now?"

"Because I've been leading you under false pretenses. You trust me because you think the valley was an accident. It wasn't. It was a decision. And you deserve to know that the man making your tactical calls is the same man who skipped a step and killed three of his own soldiers."

Spark looks stricken. Frost looks steady — he already knew. Titan's face is unreadable. Ghost watches from the back of the room with dark, still eyes that see everything.

Raven doesn't move. Doesn't react. She already knows.

"So now you know," Ironside says. "If anyone wants a different commander, I'll understand."

Nobody moves. The silence stretches. Then Titan stands, picks up his coffee mug, and says: "Same time tomorrow for the brief?"

One by one, they nod. Even Viper.

Ironside opens his mouth. Closes it. Nods.

Same time tomorrow.`,
  },

  {
    chapter_num: 39,
    tier: 'secrets',
    title: '2.8 Seconds',
    unlock_type: 'missions',
    unlock_value: { min: 72 },
    content: `After the briefing room confession, something changes. Not in how the squad treats him — they are soldiers, and soldiers understand the weight of command decisions in ways that civilians never will. What changes is inside.

The double-checking continues. The thoroughness remains. But the desperation drains out of it, slowly, like water from a cracked vessel. He still plans three contingencies. He still runs the checklist twice. But the third time — the compulsive, punishing third pass — stops.

He sleeps five hours instead of four. The nightmares don't stop, but they become less vivid, as if the telling has reduced their resolution.

Ghost finds him on the morning run — she's adjusted her route, and for one stretch, their paths overlap. They run in parallel for two kilometers without speaking.

"Lighter?" she asks as they split off.

He considers lying. Decides against it. "A little."

"Good." She nods and turns toward the perimeter. "That's how it starts."`,
  },

  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'The Roster Updated',
    unlock_type: 'missions',
    unlock_value: { min: 75 },
    is_achievement: true,
    achievement_name: '2.8 Seconds',
    achievement_desc: 'Completed Ironside\'s Secrets tier — you know the truth about the valley.',
    content: `He opens the notebook to the roster page. Anders. Jonas. Henrik. Three names. Three dates. Three times the word "Mine."

For the first time, he adds to it. Not a status update, not a note to the dead. A line underneath, in the same small pencil marks:

"I skipped step seven. I knew the risk. I chose wrong. I told them. They stayed."

Then, below that:

"I am trying to be the commander you deserved."

He closes the notebook. It doesn't feel like enough — it will never feel like enough. But it feels like the truth, set down in pencil where someone might someday find it and understand.

He puts the notebook in his breast pocket. Over his heart. Coincidence of pocket placement.

He goes to the briefing room. Draws the plan for tomorrow's mission. Two contingencies this time, not three. Still thorough. Still exact. But the third contingency — the impossible, paranoid, 0300-spiral contingency — stays in his head where it belongs.

Progress is a small word for a large change. He'll take it.`,
  },

  // ── TIER: LEGACY (41-50) ──────────────────────────────────────────

  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'Leading Differently',
    unlock_type: 'missions',
    unlock_value: { min: 73 },
    content: `The squad notices it before Ironside does. He laughs in the mess hall — a real laugh, not the dark half-chuckle he trades with Titan. He allows Spark to adjust a mission plan, incorporating her signal intelligence in real time instead of insisting on the pre-drawn version. He tells Viper "good call" after a skirmish and means it.

"Who are you and what have you done with Ironside?" Viper asks, but there's no edge to it. They have arrived, through conflict and confession, at something approaching mutual respect.

Raven watches from across the mess and feels something she hasn't felt in years: the old Erik. Not the one from before the valley — that man was a tighter wound spring, always on the verge of the precision that would eventually break. This is someone new. Someone who has passed through the worst thing he could imagine, told the truth about it, and found that the world did not end.

Not redeemed. Redemption is for stories. But changed. Changed in the way that metal changes when you heat it and let it cool: same material, different structure. Stronger where it was brittle.`,
  },

  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'The Mentoring',
    unlock_type: 'rank',
    unlock_value: { min: 5 },
    content: `He starts teaching. Not formally — UNOPCOM doesn't have a classroom schedule — but in the field, in the briefing room, in the moments between action where learning lives.

He teaches Frost how to read a battlespace the way a commander does — not just threats and targets, but time, terrain, and the intangible factor of morale. He teaches Spark how to present intelligence in a format that saves lives, not just fills reports. He even teaches Viper, grudgingly, how to channel aggression into tactical advantage instead of reckless exposure.

"Why are you doing this?" Spark asks.

"Because one day I won't be here, and someone needs to make the calls."

"That's morbid."

"That's planning." He pauses. "Also — because they taught me. Anders was the best weapons instructor I ever had. Jonas could teach field medicine to a rock. Henrik—" He stops. "Henrik made everyone around him want to be better. I can't give that back to them. But I can pass it on."

It is the closest Erik Hansen has ever come to saying the word "legacy" without flinching.`,
  },

  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'Raven\'s Silence',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'raven', min_missions: 25 },
    content: `They've been circling it for years. The thing between them — not the valley itself, but the knowledge of the valley, the shared understanding that has never been spoken aloud.

They're in the comms room after a late briefing. Everyone else has gone. Raven is packing up her notes. Ironside is standing at the map, not really seeing it.

"You've known," he says. Not a question.

Raven stops packing. "Yes."

"Since when?"

"Since the ridge. I heard the comms, Erik. I tracked the timeline."

The room tilts slightly. Or maybe that's just the ground shifting under a truth that has been deferred for too long.

"Why didn't you say anything? At the investigation. At the cabin. At any point in the last—"

"Because I would have made the same call." Her voice is steady. Her eyes are not. "I was on that ridge, watching the same picture, running the same math. And when your order came, my first thought wasn't 'too soon.' It was 'yes.'"

He stares at her.

"I didn't tell you because I wasn't sure you could carry both — your guilt and my complicity. You were already breaking under one."

"And now?"

"Now you're not breaking anymore. So: I knew. I agreed. And Henrik died because both of us chose the same wrong thing."

The silence that follows is enormous. Two people, standing in the wreckage of a shared decision, finally looking at it from the same side.`,
  },

  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'The Call Home',
    unlock_type: 'time',
    unlock_value: { min_days: 70 },
    content: `He calls Bergen. It's evening there — he can hear the rain through the phone. His mother answers on the second ring, the way she always does, as if she's been waiting by the phone since he left.

"Erik? Is that — Erik?"

"Hei, Mamma."

She cries. He lets her. His sisters get on the line, one after the other, trading the phone like a relay baton, asking questions he mostly can't answer. Where are you? Are you safe? When are you coming home?

"I don't know," he says to the last one. "But I wanted you to hear my voice."

"We always want to hear your voice, Erik."

He talks to his father last. The old fisherman, retired now, hands still calloused from decades of nets and lines. They don't say much — Hansen men have never been verbose. But his father says, "Are you doing good work?"

"I'm trying."

"Then keep trying. That's all there is."

He hangs up. Sits in the comms room for a long time. The rain in Bergen falls two hundred and thirty days a year, and for the first time in four years, it sounds like home instead of a wound.`,
  },

  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'Step Seven',
    unlock_type: 'missions',
    unlock_value: { min: 82 },
    content: `He rewrites the engagement protocol. Not just for UNOPCOM — for himself. A new version, incorporating everything the valley taught him. Step seven is no longer just "visual identification." It is a full decision gate: visual ID, IFF confirmation, verbal challenge where possible. Three checks where there was one.

He presents it to the squad not as doctrine but as a proposal. "This is what I should have done. This is what we'll do from now on. I'm asking for your input, not your obedience."

Ghost adds a signal intelligence overlay. Raven integrates comms protocols. Frost contributes medical positioning. Spark designs the verification matrix. Even Viper, who normally treats protocols like suggestions, offers a refinement to the challenge sequence that Ironside admits is better than his own.

The final document is eight pages long. It is not perfect — no protocol is. But it is the product of a team building something together, and that is worth more than any plan drawn by one man at 0300 in an empty room.

He files it as "UNOPCOM Engagement Protocol v2." In the margin, in small pencil marks, he writes: "For Anders, Jonas, and Henrik. Step seven."`,
  },

  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'Forgiving the Commander',
    unlock_type: 'streak',
    unlock_value: { min: 21 },
    content: `Titan says it plainly, the way Titan says everything. "You need to forgive yourself."

"I don't have the right."

"Rights are for lawyers. This is about function. You are less effective carrying guilt than you would be carrying experience. And your squad needs you effective."

"That's cold."

"It's practical. You want warm? Fine: you are a good man who made a bad call in an impossible situation and has spent years making sure it never happens again. At some point, that has to be enough. Not because you deserve it — because the people who depend on you deserve a commander who isn't fighting himself and the enemy at the same time."

Ironside sits with this. Not for minutes — for days. He carries Titan's words like he carries the 2.8 seconds, turning them over, testing their weight.

He doesn't arrive at forgiveness. He arrives at something closer to acceptance: this happened. It was my fault. I have done what I can. The dead do not need my suffering. The living need my clarity.

It is not absolution. But it is a place to stand.`,
  },

  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'The New Notebook',
    unlock_type: 'missions',
    unlock_value: { min: 90 },
    content: `The old notebook is full. Every page covered in tactical logs, personnel notes, the roster in the back, Anders's daughter's boat drawing, the confession in small pencil marks.

He buys a new one. Same size, same style. Transfers the tactical information, the personnel notes, the ongoing logs. But the roster page — the three names, the dates, the word "Mine" — stays in the old book.

He doesn't throw the old book away. He puts it in his footlocker, alongside the colored pencils and the ruler and the other tools of a man who builds plans on paper because he doesn't trust the electricity to stay on.

The new notebook starts clean. No ghosts in the margins. No 0300 contingencies. Just the work: missions planned, people tracked, the ongoing business of keeping a squad alive in a war that isn't ending.

On the first page, in his clear, square handwriting, he writes: "UNOPCOM Tactical Log — E. Hansen." Then, underneath, in smaller letters: "The valley is behind me. The work is ahead."

He puts the notebook in his breast pocket. Picks up a pencil. Starts planning.`,
  },

  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'Viper\'s Respect',
    unlock_type: 'missions',
    unlock_value: { min: 94 },
    content: `Viper comes to him after a mission where Ironside trusted Viper's instinct over his own plan. A judgment call, made in the field, based on what Viper was seeing and Ironside was not.

It worked. Barely, messily, but it worked.

"You let me run," Viper says. Not a question.

"You were right."

"But you didn't know that."

"No. I trusted your read."

Viper is quiet — which, for Viper, is the equivalent of a parade-ground salute. "That's... different."

"It is."

"What changed?"

Ironside considers the question. "I stopped believing I was the only one who could see the whole picture. Turns out, the picture is bigger than one set of eyes."

Viper nods. Extends his hand. It's the first time he's offered Ironside a handshake instead of a challenge.

Ironside takes it. Exactly the right amount of pressure. The handshake of a man who has learned that control is not the same as competence, and trust is not the same as surrender.`,
  },

  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'Henrik\'s Sister',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'raven', min_missions: 30 },
    content: `They're on the roof of the main building, watching the sunset. It's become a thing — not regular, not scheduled, but recurring. Two old soldiers sharing the view and whatever needs to be said.

"I need to tell you something," Raven says.

"You've told me a lot of things."

"This is different." She faces him. "I forgave you years ago. Before the cabin. Before UNOPCOM. Before you even left Bergen."

He doesn't speak.

"Henrik looked up to you more than anyone. He talked about you constantly — 'the Commander this, the Commander that.' He followed your orders because he believed in you completely. And when the order came, he would have followed it too."

"That's not comforting."

"It's not meant to be. It's meant to be true." She pauses. "He would not have wanted you to spend years in a cabin in Finnmark torturing yourself. He would have wanted you to keep leading. To be the commander he believed in."

"I wasn't that commander. I skipped the step."

"You were human. That's all. And Henrik knew that. He knew you weren't perfect. He followed you anyway." Her voice catches, just slightly. "I followed you anyway."

Erik Hansen, who has not cried since the floor of a building in a valley in Nordland, feels something behind his eyes that he can't control.

"I'm sorry, Lena."

"I know. I've always known." She puts her hand on his arm. "Now stop. Please. For both of us."`,
  },

  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'The Commander',
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: 'Iron Reforged',
    achievement_desc: 'Completed Ironside\'s full story — Erik Hansen learned that mistakes don\'t define a man.',
    content: `Morning. The gym at 0530. The weight goes up, comes down, goes up. One hour, exactly. Shower. Mess hall. Eggs. Black coffee. The overnight material, marked with a pencil.

The routine is the same. The man inside it is not.

Ironside sits at the table where he's always sat. Titan across from him, coffee in hand. Frost two seats down, quiet and steady. Ghost at the far end with her boricha, not looking up but present. Spark asking questions. Viper leaning back, arms crossed, half-smiling at something.

Raven slides into the seat next to him. Sets down a folder. "Mission brief at 0800."

"How many contingencies?" Spark asks, grinning.

"Two," Ironside says. "And a good team."

He opens the notebook. New one, clean pages, no ghosts. He writes the date, the mission parameters, the squad composition. His pencil moves with the same precision it always has, but the pressure is lighter now. The marks don't dig into the paper the way they used to.

In the breast pocket of his jacket, the old notebook rests. Anders. Jonas. Henrik. Three names that he will carry until the day he dies — not as punishment, but as a compass. They point him toward the version of himself that does better, plans better, trusts better.

He looks up from the notebook at the faces around the table — this improbable collection of broken, brilliant, stubborn people who followed him into the dark and chose to stay.

"All right," he says. "Let's go to work."

The morning light catches the mess hall windows. The coffee steams. Somewhere in Bergen, it is raining. Erik Hansen picks up his pencil and draws the plan.

I want to be honest with you: the valley doesn't go away. This isn't that kind of story. The pencil marks are lighter, but the names in the old notebook are still pressed three pages deep, and some nights the dreams still come, and the board of inquiry's verdict still sits in his chest like a stone he swallowed. He has not earned the right to feel better about what happened.

What he has earned is this: the table, the people, the work. The chance to make the next plan with more care than the last. The specific mercy of being allowed to try again when you know exactly what trying cost.

That's not resolution. It's just a morning. But a morning like this one — with eggs and black coffee and the pencil moving steadily across a new page — turns out to be the thing worth fighting for.

He always knew that.

He forgot it for a while.

He's been remembering, mission by mission, ever since.`,
  },
];

// ── Reactions ─────────────────────────────────────────────────────────

const reactions = [
  {
    event_type: 'mission_complete',
    text: 'Ironside runs through the debrief checklist one more time, nods once, and closes his notebook. "Good work. Same standard tomorrow."',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: 'Ironside\'s hand goes to his breast pocket — the notebook. His jaw sets like a door locking. He says nothing for a long time. Then: "We debrief in one hour. I want to know what we missed."',
    priority: 2,
  },
  {
    event_type: 'territory_lost',
    text: '"We hold what we can. We take back what we can\'t." Ironside is already at the map table, pencil in hand, drawing contingencies.',
    priority: 1,
  },
  {
    event_type: 'territory_defended',
    text: 'Ironside surveys the defensive positions with a critical eye, but the corner of his mouth lifts. "The plan held. That means the team held. Well done."',
    priority: 1,
  },
  {
    event_type: 'streak_milestone',
    text: '"Consistency is the only discipline that matters. Keep showing up." Ironside raises his coffee mug in a rare gesture of acknowledgment.',
    priority: 1,
  },
  {
    event_type: 'rank_up',
    text: '"Rank means responsibility. More people relying on your judgment. Don\'t let the weight surprise you — it only gets heavier." A pause. "But you can carry it."',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: 'Ironside is seen in the watchtower at 0300, notebook open, pencil moving in small, precise marks. He doesn\'t come down until dawn.',
    priority: 0,
  },
  {
    event_type: 'mission_complete',
    text: '"Everyone came home." Ironside says it to himself, quiet enough that only those nearby catch it. He makes a small mark in his notebook and moves on.',
    priority: 0,
  },
];

// ── Relationships ─────────────────────────────────────────────────────

const relationships = [
  {
    char_a: 'ironside',
    char_b: 'frost',
    rel_type: 'bond',
    description: 'Ironside pulled Frost from a collapsed building in Tromsø. The debt is unspoken but shapes everything — Ironside is fiercely protective of Frost, and Frost trusts Ironside with a certainty that borders on faith.',
  },
  {
    char_a: 'ironside',
    char_b: 'viper',
    rel_type: 'rivals',
    description: 'Authority versus independence. Viper challenges Ironside\'s control at every turn, and Ironside sees in Viper the kind of recklessness that gets people killed. Over time, friction becomes grudging respect.',
  },
  {
    char_a: 'ironside',
    char_b: 'titan',
    rel_type: 'old_friends',
    description: 'Two veteran soldiers who trade war stories over late-night coffee. Titan is the only person who can tell Ironside hard truths without triggering his defenses.',
  },
  {
    char_a: 'ironside',
    char_b: 'razor',
    rel_type: 'bond',
    description: 'Razor is the one soldier whose methods Ironside never has to question. Her precision is a form of discipline he respects without reservation — and she knows it, even if neither ever says so.',
  },
  {
    char_a: 'ironside',
    char_b: 'storm',
    rel_type: 'bond',
    description: 'Two commanders who have ordered people into danger and lived with the arithmetic. When the base goes quiet after a hard mission, they are often found in the same room, not talking — just being the same kind of tired.',
  },
];

module.exports = { template, chapters, reactions, relationships };
