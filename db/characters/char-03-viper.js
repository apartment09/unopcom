/**
 * Character 03: Viper — Sofia Torres
 * From mercenary survivor to someone who finds a reason to stop running.
 */

const template = {
  id: 'viper',
  name: 'Sofia Torres',
  callsign: 'Viper',
  nationality: 'Colombian',
  personality: ['cynical', 'reckless', 'loyal', 'humorous'],
  motivation: 'Running from a past she can\'t outrun',
  background: 'Former deep-cover operative embedded in a Colombian cartel — an assignment that went wrong in ways she hasn\'t fully named. Has been running under a false identity for six years. Arrived at UNOPCOM with a fake passport, real scars on her knuckles, and the instinct to trust no one. Her name is not Sofia Torres. She\'ll tell you when she\'s ready.',
  portrait_sprite: 'xcom2',
};

const chapters = [
  // ── SURFACE (1-10) ──────────────────────────────────────────────────

  {
    chapter_num: 1,
    tier: 'surface',
    title: 'The Woman Who Walked In',
    content: `What she carries:

A duffel bag. A fake passport, third revision. A backup knife sewn into the jacket lining. The kind of smile that dares you to ask questions and trusts you won't ask the right one.

Under the false bottom of the bag: a photograph of a woman with her eyes. A silver ring too small to fit any of her fingers — her grandmother's, kept not for comfort but because she made a promise, and she keeps her promises even when she's broken everything else. A SIM card holding one voicemail. She's listened to it twice: once in the back of a cargo truck leaving Medellín, rain on the roof. Once on her first night here, when the silence felt louder than the city she'd left.

"Come home," the voice says. "Whatever you've done, come home."

The real list:

She carries Medellín, and a yellow door in Medellín, and what happened behind that door, and six years of running the door down to something that only shows up at 3am and in her hands when they won't stop moving. She carries the names of people who might be dead because of a choice she made about what was worth protecting and what she had to let go. She carries the voicemail the way you carry a wound that's healed wrong — not bleeding, but shaped by the injury forever. She carries the knowledge that going home leads the wolves through the door, and she is the only thing standing between them and it.

She slides the fake passport across the intake desk.

"Sofia Torres," she says. "I hear you pay well."

That's the first lie. The truth is longer and she'll tell it when she trusts you. Maybe. She hasn't fully decided.

She clears every corner of the room before she sits. Old habit. The kind you develop when the past has teeth and you've learned to keep it in your peripheral vision.

The accent shifts depending on who's asking. In Spanish she sounds like herself. In English she sounds like nowhere. In French she sounds like someone who has been running for a very long time.

She's very good at this.

That is not a compliment. It is a diagnosis.`,
    unlock_type: 'missions',
    unlock_value: { min: 0 },
  },
  {
    chapter_num: 2,
    tier: 'surface',
    title: 'First Impressions',
    content: `She made enemies before lunch. Told Ironside his briefing was "cute." Asked Raven if the rulebook came with a bedtime story. Picked a fight over rations with someone twice her size and won it with words alone.

But Blaze — Blaze she liked immediately. There was something about the way that woman moved through chaos like it owed her money. Viper recognized a kindred spirit. The kind of person who laughed when the building was on fire because what else was there to do.

"You and me," Blaze said over drinks that first night, "we're going to be trouble."

"Mija, trouble is all I know."`,
    unlock_type: 'missions',
    unlock_value: { min: 1 },
  },
  {
    chapter_num: 3,
    tier: 'surface',
    title: 'The Paycheck',
    content: `She told anyone who asked — and plenty who didn't — that she was in it for the money. Mercenary work, private security, a few things she didn't name. UNOPCOM was just the latest gig.

The pay was average. The food was worse. But they gave her a bunk and didn't ask about Medellín, and that was worth more than any salary.

At night, she checked the locks twice. Old habit. The kind you develop when the people looking for you don't knock.`,
    unlock_type: 'missions',
    unlock_value: { min: 2 },
  },
  {
    chapter_num: 4,
    tier: 'surface',
    title: 'Gallows Humor',
    content: `The squad was pinned down behind a burning truck. Three hostiles closing from the east. Comms were static.

"Well," Viper said, checking her magazine, "at least the fire's keeping us warm."

Ghost — silent, serious Ghost — actually laughed. Just once, barely a sound, but she caught it. And for a moment the fear that lived in her chest quieted down, because if she could make the ghost laugh, maybe things weren't so bad.

She popped up, dropped two targets, and slid back into cover. "See? Warm and productive."`,
    unlock_type: 'missions',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 5,
    tier: 'surface',
    title: 'Authority Issues',
    content: `Ironside pulled her aside after the debrief. Closed the door. Used the voice that made rookies flinch.

"You deviated from the plan, Torres."

"Your plan had us walking into a killbox."

"My plan accounted for —"

"Your plan was wrong. I fixed it. You're welcome."

She watched his jaw tighten, the controlled anger of a man who wasn't used to being challenged. She'd seen that look before — on men who thought rank made them right. It never did.

She left before he could respond. It was better that way. For both of them.`,
    unlock_type: 'missions',
    unlock_value: { min: 4 },
  },
  {
    chapter_num: 6,
    tier: 'surface',
    title: 'Night Terrors',
    content: `Blaze found her on the roof at 3 AM, smoking a cigarette she claimed she'd quit.

"Bad dream?"

"No dreams. That's worse."

They sat in silence for a while, watching the perimeter lights sweep the compound. Blaze didn't push. That was the thing about her — she understood that sometimes company was enough. No questions, no advice, just the quiet agreement that neither of them was okay, and that was fine.

"You ever think about going back?" Blaze asked eventually.

Viper exhaled smoke into the dark. "There's nothing to go back to."

It wasn't entirely true. There were people. Graves. A city that smelled like rain and gunpowder. But she'd burned that bridge with gasoline and a prayer, and bridges like that don't rebuild.`,
    unlock_type: 'missions',
    unlock_value: { min: 6 },
  },
  {
    chapter_num: 7,
    tier: 'surface',
    title: 'The Bet',
    content: `It started as a joke. Viper bet Blaze she could outshoot Razor on the range. Blaze bet she couldn't do it blindfolded. Razor heard and turned it into a formal challenge with witnesses.

She lost. By two points. Razor was insufferable about it for a week.

But the squad gathered to watch, and for a few hours nobody talked about the war or the odds or the friends they'd buried. They just laughed and heckled and acted like people instead of soldiers.

Viper paid Blaze the twenty she owed. Worth every cent.`,
    unlock_type: 'streak',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 8,
    tier: 'surface',
    title: 'Raven\'s Shadow',
    content: `Raven cornered her after a mission where Viper had gone off-script again. Not dangerously — she'd just taken a faster route that the tactical overlay didn't show.

"You could have been killed."

"But I wasn't."

"That's not the point, Torres."

"That's exactly the point."

Raven stared at her with those measuring eyes, cataloguing, assessing. Viper hated it. It felt like being read. Like Raven could see through the jokes and the bravado to the thing underneath — the thing that flinched.

"Follow the plan next time," Raven said. Quiet. Final.

Viper almost did. Almost.`,
    unlock_type: 'missions',
    unlock_value: { min: 7 },
  },
  {
    chapter_num: 9,
    tier: 'surface',
    title: 'Running Tab',
    content: `She kept a mental list. People she owed. People who owed her. People she'd failed. The last category was the longest, and it grew in the dark hours when the base was sleeping and her mind was not.

Medellín. The apartment with the yellow door. The sound of a phone ringing at 2 AM. The voice that said, "They know."

She'd run then. Grabbed a bag. Left everything. Left everyone.

UNOPCOM was supposed to be a waypoint, not a destination. But waypoints have a way of becoming homes when you're not paying attention, and Viper was starting to worry she was getting comfortable.

Comfort was dangerous. Comfort meant roots. And roots meant someone could pull you up.`,
    unlock_type: 'time',
    unlock_value: { min_days: 5 },
  },
  {
    chapter_num: 10,
    tier: 'surface',
    title: 'Snake in the Grass',
    content: `The first real test came during a nighttime extraction. Everything went sideways — bad intel, double the expected resistance, and Storm took a hit that dropped him.

Viper could have run. The exit was clear, and no one would have blamed her. Mercenaries don't die for strangers. That was the rule. The first rule. The only rule.

She went back. Dragged Storm fifty meters to the evac point while Blaze laid down covering fire. Got a bullet graze across the shoulder for her trouble and a look from Storm that she'd remember for a long time — not gratitude, but something deeper. Recognition.

"You came back," he said on the chopper.

"Don't make it a thing," she said, pressing a bandage to her shoulder.

But it was a thing. And they both knew it.`,
    unlock_type: 'missions',
    unlock_value: { min: 10 },
    is_achievement: true,
    achievement_name: 'Fangs Out',
    achievement_desc: 'Viper reveals she\'s more than a mercenary — she\'s someone who comes back.',
  },

  // ── ROOTS (11-20) ──────────────────────────────────────────────────

  {
    chapter_num: 11,
    tier: 'roots',
    title: 'Medellín, Once',
    content: `She told Blaze about the city. Not the truth — not yet — but the shape of it. The hills. The heat. The way the light hit the valley in the morning and made everything look like a painting someone forgot to finish.

"I grew up fast there," she said. "You had to."

"What was your family like?"

"Loud. Big. Catholic. My abuela could guilt-trip a saint."

She laughed, and it was almost real. The memories were warm when she kept them at the surface. It was the ones underneath — the ones with blood on them — that she couldn't touch yet.`,
    unlock_type: 'missions',
    unlock_value: { min: 12 },
  },
  {
    chapter_num: 12,
    tier: 'roots',
    title: 'The Underground',
    content: `The first door opened like this: she was seventeen years old, her mother was three months dead, the landlord had given her sixty days, and a man named Rodrigo offered her a job. She said yes.

She wants to tell you she considered other options. She wants to tell you she weighed the alternatives, made a moral calculation, chose the least bad path available. This may even be true. The memory of it is a room where the furniture has been moved so many times she can no longer say where it originally stood.

Here is what she carried into that life: good hands. A quick mind. The ability to read a room before she spoke in it. Her mother's ring on a chain under her shirt. A willingness to do things she would not think about after.

Here is what she carried out: seventeen scars she can name and three she can't. The face of a man named Carlos who died because she was twenty feet away and said nothing. The smell of a specific kind of diesel exhaust she cannot encounter without bracing. The yellow door, which had nothing to do with the cartel, which was only her mother's door, her childhood door — but which became in her mind the door of all of it. The entrance and the exit and the thing that stands there still.

The cartel called it an opportunity. She called it the only door that was open.

She was wrong, probably. Other doors existed. She was seventeen and her mother was dead and the landlord had given her sixty days. You can say she was wrong about the doors and also understand why she couldn't see them. Both things are true. She has spent years trying to hold both things at once.

The door swung open. She walked through. It was not the last time. That's what she carries: the not-last-time of it. The way the door kept opening, kept finding her on the wrong side of itself, kept requiring her to walk through again.

Fourteen years. The door is yellow. She can close her eyes and feel the paint flaking under her palm.

She is still trying to close it.`,
    unlock_type: 'rank',
    unlock_value: { min: 2 },
  },
  {
    chapter_num: 13,
    tier: 'roots',
    title: 'Frost',
    content: `She didn't expect to like Frost. Too quiet. Too composed. The kind of person who made you feel like you were being loud just by existing.

But Frost brought her tea one morning — real tea, not the powdered garbage from the mess hall — and sat down without saying anything. They drank in silence. Frost left. That was it.

The next morning, there was tea again.

It took Viper a week to understand that this was Frost's version of friendship. No questions, no demands, just small consistent kindnesses that asked nothing in return. It was the most terrifying thing anyone had done to her in years.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 8 },
  },
  {
    chapter_num: 14,
    tier: 'roots',
    title: 'Scar Inventory',
    content: `She had seventeen scars she could name. The bullet graze from the Storm extraction. The knife wound from a bar in Cartagena. The burn on her wrist from a cigarette she didn't light herself.

Each one was a story. Each story was a person. Each person was a door she'd walked through and couldn't walk back.

The medic asked about them during her physical. Clinical, professional.

"Active life," Viper said.

The medic looked at her for a long moment. Then wrote something in the file and moved on. Viper appreciated that. Some questions are better left unasked.`,
    unlock_type: 'missions',
    unlock_value: { min: 14 },
  },
  {
    chapter_num: 15,
    tier: 'roots',
    title: 'The Spanish She Speaks',
    content: `She slipped into Spanish when she was tired or angry or afraid. The squad learned to read her mood by her language — English meant she was performing; Spanish meant she was real.

Blaze picked up a few phrases. Storm started answering in broken Portuguese, which was wrong but sweet. Even Ironside nodded when she cursed in Colombian slang, which meant he either understood or had given up trying to control her vocabulary.

"Hijueputa," she muttered during one particularly bad briefing.

"Noted," Ironside said.

She almost respected him for that.`,
    unlock_type: 'streak',
    unlock_value: { min: 5 },
  },
  {
    chapter_num: 16,
    tier: 'roots',
    title: 'Debts',
    content: `The message arrived on an encrypted channel she thought she'd closed. Three words in Spanish: "We remember you."

She deleted it. Changed her encryption keys. Checked the perimeter twice. Didn't sleep for two days.

Blaze noticed. Of course Blaze noticed.

"You look like hell."

"Just insomnia."

"Bull. What happened?"

"Nothing I can't handle."

She couldn't handle it. Not alone. But alone was all she'd ever had, and admitting otherwise felt like surrender. Viper didn't surrender. Viper ran. Viper joked. Viper survived.

The question was whether surviving was enough anymore.`,
    unlock_type: 'missions',
    unlock_value: { min: 16 },
  },
  {
    chapter_num: 17,
    tier: 'roots',
    title: 'Teaching Spark',
    content: `The kid was green. So green it hurt to watch. He had all the technical brilliance in the world and none of the instinct that kept you alive when the technical stuff failed.

"Stop thinking," she told him on the range. "Your brain is fast but your gut is faster. Trust it."

"That's not very scientific."

"Science doesn't dodge bullets, chico."

She drilled him for an hour. Made him shoot from weird angles, from behind cover, off-balance. He complained the entire time but his grouping tightened by the end.

She didn't tell him he was improving. Compliments made people complacent. But she came back the next day, and the day after that, and Spark was smart enough to understand what that meant.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 10 },
  },
  {
    chapter_num: 18,
    tier: 'roots',
    title: 'The Mask',
    content: `Everyone on the squad wore a mask. Ironside's was duty. Ghost's was silence. Raven's was precision. Blaze's was chaos.

Viper's was humor. The jokes, the sarcasm, the relentless deflection — it was armor, and she'd been wearing it so long she'd forgotten what her face looked like underneath.

Sometimes, late at night, she caught her reflection and didn't recognize the woman staring back. Too thin. Too tired. Eyes that had seen too much and laughed at all of it because the alternative was screaming.

"Who are you?" she asked the mirror once.

The mirror didn't answer. Mirrors never do.`,
    unlock_type: 'time',
    unlock_value: { min_days: 14 },
  },
  {
    chapter_num: 19,
    tier: 'roots',
    title: 'Loyalty, Tested',
    content: `A mission went bad. Ambush in a narrow corridor, and Raven took point despite Viper shouting that the angle was wrong. Raven was hit. Not critically, but enough to slow them down.

Viper should have said "I told you so." That was her style — the quip, the dig, the I-was-right-and-you-know-it. Instead she wordlessly took Raven's rifle, covered the retreat, and didn't mention it again.

Raven found her afterward. "Thank you."

"Don't mention it."

"I mean it."

"So do I. Don't mention it."

Something shifted between them. Not friendship — not yet — but the grudging acknowledgment that competence deserves respect, even when it comes wrapped in attitude.`,
    unlock_type: 'missions',
    unlock_value: { min: 19 },
  },
  {
    chapter_num: 20,
    tier: 'roots',
    title: 'What She Carries',
    content: `In the bottom of her duffel bag, beneath the false bottom, she kept three things: a photograph of a woman with Sofia's eyes, a silver ring too small to wear, and a SIM card that held one voicemail she'd never deleted.

She'd listened to the voicemail twice. Once on the night she left Medellín, crouched in the back of a cargo truck with rain hammering the roof. Once on her first night at UNOPCOM, when the silence of the barracks felt louder than any gunfight.

"Come home," the voice said. "Whatever you've done, come home."

She couldn't. That was the cruelest part. Not that she didn't want to — God, she wanted to — but that going home meant leading the wolves to the one door she was trying to protect.

So she carried the voicemail like a wound. And she ran.`,
    unlock_type: 'missions',
    unlock_value: { min: 20 },
    is_achievement: true,
    achievement_name: 'What Lies Beneath',
    achievement_desc: 'Viper\'s armor cracks — there\'s someone she left behind.',
  },

  // ── CRACKS (21-30) ─────────────────────────────────────────────────

  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'The Name Game',
    content: `"Sofia Torres" was the fourth name she'd used. The first was the one her mother gave her — the one on the voicemail. The second was the one the cartel gave her. The third she chose herself during the first run, the one she used to cross two borders and disappear.

"Sofia" felt closest to real. She'd picked it because it meant wisdom, and she figured she could use some. "Torres" because it was common enough to be invisible.

She'd been invisible for three years before UNOPCOM. Waitress in Panama City. Bartender in Bogota — different Bogota, the one in New Jersey. Construction crew in Lisbon. Always moving. Always looking over her shoulder.

The running was exhausting. But stopping was worse.`,
    unlock_type: 'missions',
    unlock_value: { min: 25 },
  },
  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'The Nightmare Shared',
    content: `The dream is always the same and never exactly the same.

The yellow door. Always the yellow door. Paint cracking at the corners, brass knocker gone green from the humidity. She is standing in front of it. She is always standing in front of it. The phone is ringing inside — her mother's phone, the one that rang for three days after, because no one had thought to call the service and cancel. She knows in the dream that if she opens the door the phone will still be ringing and no one will be there.

She opens the door anyway.

Then: boots on stairs. Not upstairs — behind her, on the landing below. The specific cadence of someone who knows how to move without making noise and is not bothering. That sound has a name. Several names. She has been trying to forget them.

She woke up at 0214.

Frost was on the opposite bunk. Bunk reassignment, three days ago. Frost was already awake — she has a medic's relationship with the dark hours. She didn't say anything. She didn't cross the space between the bunks. She sat up and waited, the way you wait when you know what a person needs is for the room not to close in.

"There are people who want me dead," Viper said. The words came out before she could assess them. A thing that happens when you haven't slept.

Frost nodded. "There are people here who want you alive." A pause. "That's more than most people have."

It was not an argument. Not a solution. Not an attempt to address the specific people with the specific boots on the specific stairs. It was only a fact, stated the way Frost treated wounds: without drama, without looking away.

Viper held onto it.

She would not call it a turning point. She would not call it the night things got better. What she would say is this: there is a difference between being alone and being in the dark, and she learned it on a Tuesday at 0214, in a room where someone sat on the opposite bunk and waited, and did not touch her, and did not leave.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 15 },
  },
  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'The Hit List',
    content: `She found the file by accident. An intelligence report on cartel operations in South America. The appendix listed known associates, targets of interest, people who'd disappeared.

Her second name was on that list. The cartel name. Marked "DESAPARECIDA" — disappeared. Not dead. They were still looking.

She closed the file and burned the printout. Washed the ashes down the drain. Stood in the bathroom staring at her hands until the shaking stopped.

UNOPCOM's reach was long, but the cartel's was longer. And patient. The kind of patient that waited years to collect on a debt.`,
    unlock_type: 'missions',
    unlock_value: { min: 28 },
  },
  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'The Fight',
    content: `It was bound to happen. She and Ironside finally had it out — a screaming match in the corridor after a mission where she'd ignored direct orders to save a civilian.

"You put the entire squad at risk!"

"I put MYSELF at risk! The squad was clear!"

"That's not YOUR call!"

"Someone has to make it when the call from above is WRONG!"

Titan stepped between them. Literally. Put a hand on each of their chests and pushed them apart like children.

"Walk it off," Titan said. "Both of you."

They walked in opposite directions. Viper went to the roof. The cigarettes were back.

She hated that Ironside reminded her of someone. The authority, the certainty, the unshakable belief that structure kept people safe. She'd known men like that in Medellín. Some of them had been right. Some of them had been dead.`,
    unlock_type: 'rank',
    unlock_value: { min: 4 },
  },
  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'The Question',
    content: `Blaze asked her outright one night. No preamble, no buildup. That was Blaze's way.

"What are you running from?"

The silence lasted long enough for the cigarette to burn down to the filter. Viper lit another one.

"If I told you, you'd have to run too."

"Maybe I'm already running."

They looked at each other, and for a moment the masks slipped — just enough to see the exhaustion underneath, the weight of whatever they were both carrying.

"Cartel," Viper said. One word.

Blaze nodded slowly. "Okay."

"That's it? Okay?"

"What else would I say? We're soldiers. We've all got blood behind us."

It wasn't absolution. But it was acceptance, and Viper hadn't had that in a long time.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 15 },
  },
  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'The Close Call',
    content: `A message intercepted by UNOPCOM intelligence mentioned a Colombian woman matching her description. Not by name — by the scar on her left shoulder blade, the one shaped like a crescent moon.

Someone was paying informants. Someone was closing in.

She went to Ghost. Not because they were close, but because Ghost understood disappearing. Ghost understood the calculus of being hunted.

"How long have they been looking?" Ghost asked.

"Five years. Maybe six."

"That's persistent."

"I took something from them. Something they can't replace."

Ghost studied her. "You need an exit plan."

"I need to stop running."

"Those are the same thing, if you do it right."

She didn't understand what Ghost meant. Not yet.`,
    unlock_type: 'missions',
    unlock_value: { min: 32 },
  },
  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'Storm\'s Debt',
    content: `Storm never forgot the extraction. It had been months, but he still looked at her different — like she was real in a way the others weren't. Like she'd proved something he'd been afraid to test.

"You didn't have to come back for me," he said over dinner, apropos of nothing.

"If you thank me one more time, I swear —"

"I'm not thanking you. I'm telling you I know what it cost."

She stopped chewing. Because he was right. It had cost her something. Going back, choosing not to run — it had broken something inside the survival mechanism that had kept her alive for years. The machine that said "you first, always you first."

"It didn't cost me anything," she lied.

Storm smiled like he knew. He probably did.`,
    unlock_type: 'missions',
    unlock_value: { min: 35 },
  },
  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'Letter Never Sent',
    content: `She wrote it on a scrap of paper. No address, no stamp, no intention of sending it. Just words that needed to exist somewhere outside her head.

"Mamá — I'm alive. I'm sorry. I can't explain. I think about the yellow door every night. I think about your voice. I'm trying to be someone you'd recognize. I don't know if I am yet.

I did something that matters here. I saved someone. Not for money, not because I had to, but because I wanted to. You would have liked that.

I can't come home. Not yet. Maybe not ever. But I want you to know that wherever I am, the prayers you taught me still work. Even for someone like me."

She folded the letter and put it with the photograph. Didn't cry. Couldn't afford to.`,
    unlock_type: 'time',
    unlock_value: { min_days: 21 },
  },
  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'Ironside, Revisited',
    content: `He came to her with a mission brief. Just the two of them in the planning room.

"I need your eyes on this," he said, spreading the map. "The approach from the south — you see something I don't."

She stared at him. "You're asking my opinion?"

"I'm asking for your expertise. There's a difference."

It was the closest thing to an apology she'd ever get from Ironside, and she respected that. He hadn't softened — he'd adjusted. Recognized that her recklessness wasn't stupidity but a different kind of intelligence, the kind born in streets where textbook tactics got you killed.

"The south approach is a trap," she said, tracing the map. "Go east. Through the drainage system."

"That's not in any manual."

"The best routes never are."

He nodded. Used her route. It worked. Neither of them mentioned it again, but the dynamic shifted — from opposition to something approaching mutual respect.`,
    unlock_type: 'rank',
    unlock_value: { min: 5 },
  },
  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'The Walls Come Down',
    content: `It happened during a routine supply run that turned into a firefight. Blaze went down — not dead, but hit badly enough that Viper's world narrowed to a single point of light surrounded by darkness.

She carried Blaze two hundred meters under fire. Took three rounds in the vest. Screamed in Spanish the entire time — not curses, not prayers, but a name. Blaze's real name. The one she'd told Viper in confidence on the roof that night.

In the medevac, holding Blaze's hand, the humor was gone. The mask was gone. There was just a woman who had finally found something she was more afraid of losing than her own life.

"Don't you dare," Viper whispered. "Don't you dare leave me here alone."

Blaze survived. But Viper — the Viper who didn't care, the Viper who was just here for the paycheck, the Viper who could walk away from anything — that Viper didn't.`,
    unlock_type: 'missions',
    unlock_value: { min: 40 },
    is_achievement: true,
    achievement_name: 'No More Running',
    achievement_desc: 'Viper stops pretending she doesn\'t care.',
  },

  // ── SECRETS (31-40) ────────────────────────────────────────────────

  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'Operative',
    content: `The truth, when it came, came quietly. Not in a firefight or a dramatic reveal, but in a conversation with Ghost at 4 AM, when the defenses were lowest and the silence felt safe enough to hold a confession.

"I didn't just work for the cartel," she said. "I worked against them."

Ghost waited.

"I was placed. Recruited out of the academy — the real academy, the one that doesn't exist in any database. Fourteen months deep cover. Built a case that would have brought down the entire Medellín operation."

"Would have?"

"The extraction went wrong. My handler was compromised. I had to burn everything — the case, my identity, my cover life. Took the evidence and ran."

She lit a cigarette with hands that didn't shake. They'd learned to be still.

"Sofia Torres isn't my name."

"I know," Ghost said.

She looked at him sharply. "How?"

"Because you flinch every time someone says it."`,
    unlock_type: 'missions',
    unlock_value: { min: 45 },
  },
  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'Agent Without a Country',
    content: `The agency that sent her had disavowed her. Standard protocol for burned operatives — deny everything, destroy the records, let the asset disappear. She was nobody's agent. Nobody's soldier. Nobody's daughter.

She'd been twenty-three when they recruited her. Smart, angry, fluent in the language of the streets. A perfect candidate for the worst job in the world.

"They said it would be two years," she told Frost, because Frost had earned the truth. "Two years and I'd come home a hero. Get a medal, a pension, a life."

"What happened?"

"The two years became three. Then four. Then the handler stopped calling. Then the extraction was a bullet instead of a helicopter."

Frost was quiet for a long time. "You survived."

"Surviving isn't the same as living. I'm just starting to learn the difference."`,
    unlock_type: 'rank',
    unlock_value: { min: 6 },
  },
  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'The Evidence',
    content: `The evidence she'd taken — the thing the cartel couldn't replace — was a ledger. Not a physical book but a digital archive encrypted on the SIM card she kept in her duffel bag. Names, dates, amounts, routes. Enough to dismantle an empire.

She'd been carrying it for six years like a grenade with the pin pulled. Couldn't give it to anyone because there was no one left to trust. Couldn't destroy it because those names represented thousands of lives lost to the trade.

"Why not give it to UNOPCOM?" Blaze asked when she finally told her.

"Because UNOPCOM isn't in the drug-war business."

"No. But we're in the justice business."

Viper looked at her. "Since when?"

"Since you decided to stay."`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 25 },
  },
  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'The Real Name',
    content: `She told Blaze first. Then Frost. Then, after a mission where they almost didn't come back, she told the squad.

Her real name was Valentina. Valentina Reyes. Born in Medellín, daughter of a schoolteacher and a carpenter. The woman in the photograph was her mother. The ring belonged to her grandmother.

"Valentina," Blaze said, testing it. "It suits you better."

"Don't start calling me that."

"Why not?"

"Because Viper keeps me alive. Valentina is the woman who gets people killed."

But it was out there now. The real name, floating in the space between them like something fragile and newly born. She couldn't take it back, and for the first time, she didn't want to.`,
    unlock_type: 'missions',
    unlock_value: { min: 50 },
  },
  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'The Handler',
    content: `An encoded message appeared on a frequency she thought was dead. A frequency only one person in the world knew.

"Valentina. I'm alive. I never stopped looking."

Her handler. The one she thought was dead. The one whose compromise had burned the entire operation.

She stared at the message for an hour. It could be a trap — the cartel had gotten creative before. But the encryption was right. The cadence was right. The use of her real name was right.

She didn't respond. Not yet. Trust was a luxury she'd stopped affording years ago.

But she didn't delete it either.`,
    unlock_type: 'chance',
    unlock_value: { probability: 0.15 },
  },
  {
    chapter_num: 36,
    tier: 'secrets',
    title: 'What Ironside Knows',
    content: `He called her into his office. Closed the door. Put a file on the desk — a thin one, with a red classification stripe.

"I know who you are," he said.

Her hand moved to her sidearm. Instinct. Ironside noticed but didn't react.

"I've known since month two. Your fingerprints flagged in a system I shouldn't have access to."

"And you didn't turn me in?"

"Turn in what? A woman who doesn't exist? An agent from a program that was never acknowledged?" He closed the file. "You're UNOPCOM now. That's all that matters to me."

She stared at him. The authority figure she'd resented. The by-the-book commander she'd mocked. He'd known her secret for months and done nothing but let her fight.

"Thank you," she said. It was the first time she'd meant it when talking to him.`,
    unlock_type: 'missions',
    unlock_value: { min: 55 },
  },
  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'The Call Home',
    content: `She borrowed a clean phone. Dialed a number she'd memorized six years ago. Let it ring three times, then hung up.

Called again. Let it ring twice, then hung up.

Called a third time. This was the signal — the one she'd arranged with her mother before the first deployment, the pattern that said "I'm alive, don't trace this."

The phone rang four times. Five. Six.

"Aló?"

The voice was older. Tired. But unmistakable.

Viper — Valentina — opened her mouth and nothing came out. Six years of silence pressing against her throat like concrete.

"Valentina? Mija, is that you?"

"Mamá," she whispered. "I'm here."

The conversation lasted ninety seconds. She couldn't risk more. But ninety seconds was enough to hear her mother say "Te amo" and to say it back, and for one minute and thirty seconds the world was not at war and she was not running and the yellow door was open.`,
    unlock_type: 'time',
    unlock_value: { min_days: 35 },
  },
  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'Ghost\'s Warning',
    content: `Ghost found her cleaning her weapon at midnight. Sat down. Waited.

"The handler's message," Ghost said. "You're thinking about responding."

"How do you —"

"I pay attention."

"It might be real."

"It might be a death sentence."

She knew that. Of course she knew that. But the possibility of an ally — a real ally, from the old life, someone who knew the truth — was intoxicating. Like water in a desert.

"If it's real," Ghost said, "you might finally be able to stop running."

"And if it's not?"

Ghost looked at her with those unreadable eyes. "Then you'll have a squad behind you. That's new."

He was right. It was new. And it changed the math entirely.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ghost', min_missions: 20 },
  },
  {
    chapter_num: 39,
    tier: 'secrets',
    title: 'The Reckoning',
    content: `She responded to the handler. Set a dead drop. Waited three days in a state of controlled terror that she masked with jokes so aggressive even Blaze told her to tone it down.

The response came. A package at the drop site. Inside: a new identity, completely clean. Diplomatic passport. Bank account. A plane ticket to anywhere.

Her way out. The thing she'd wanted for six years. A new name, a new life, a clean slate.

She held the passport. Felt its weight. Imagined the airport, the departure lounge, the moment the wheels left the ground and Medellín and the cartel and UNOPCOM became something behind her.

Then she thought about Blaze. And Frost. And Storm. And even Ironside.

She burned the passport. Kept the identity documents — they might be useful. But the plane ticket she watched curl and blacken in the flames.

She wasn't running anymore.`,
    unlock_type: 'missions',
    unlock_value: { min: 60 },
  },
  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'Valentina',
    content: `She stood in front of the squad. All of them. Full roster. Ironside had given her the floor, which was its own kind of miracle.

"My name is Valentina Reyes. I was a deep-cover operative for an agency that no longer claims me, embedded in a cartel that wants me dead. I have evidence that could bring them down. I've been running for six years, and I'm done."

Silence. Then Blaze: "About damn time."

Razor raised an eyebrow. Titan nodded slowly. Raven's expression was unreadable but she didn't leave, which was enough.

"If they come for me," Valentina continued, "they come here. I won't let that happen without warning you."

"Let them come," Storm said. Just like that. No hesitation.

She looked at these people — these impossible, broken, stubborn people — and felt something she hadn't felt since the yellow door. Belonging. Not the kind you're born into but the kind you build, brick by brick, mission by mission, secret by secret.

Her name was Valentina Reyes. She was UNOPCOM. And she was staying.`,
    unlock_type: 'missions',
    unlock_value: { min: 65 },
    is_achievement: true,
    achievement_name: 'True Name',
    achievement_desc: 'Viper reveals who she really is — and chooses to stay.',
  },

  // ── LEGACY (41-50) ─────────────────────────────────────────────────

  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'The Ledger',
    content: `She gave Ironside the SIM card. Six years of evidence, the weight of thousands of lives, passed across a desk in a moment that should have felt bigger than it was.

"I don't know what UNOPCOM can do with this," she said. "But it shouldn't die with me."

Ironside held the card like it was fragile. "I know people. The right people."

"I used to think I knew the right people too."

"The difference," Ironside said, "is that you're not alone this time."

She left his office feeling lighter than she had in years. The grenade she'd been carrying — the one with the pin pulled — was finally in someone else's hands. Not gone. Not safe. But shared. And shared weight is bearable weight.`,
    unlock_type: 'missions',
    unlock_value: { min: 70 },
  },
  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'Blaze and Viper',
    content: `They sat on the roof one last time — not because anything was ending, but because some traditions deserve a moment of acknowledgment.

"Remember the first night?" Blaze said.

"You told me we'd be trouble."

"Was I wrong?"

"Not even a little."

They'd been through more together than either of them could have predicted. Firefights and nightmares and secrets heavy enough to break lesser friendships. But they hadn't broken. They'd bent — God, they'd bent — but the thing between them was made of something that didn't snap.

"If I'd run," Viper said, "that night with the passport —"

"You wouldn't have."

"How do you know?"

"Because I know you. The real you. And she doesn't run from the people she loves."

Viper didn't argue. For once in her life, she didn't have a joke to deflect with. She just let the truth sit there, warm and uncomfortable and exactly right.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 35 },
  },
  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'The Cartel\'s Answer',
    content: `They came. Not in force — the cartel was smarter than that — but with a message delivered to UNOPCOM through channels that shouldn't have been accessible. A photograph of the yellow door. Her mother's house.

The implication was clear. Come back or we visit.

She expected to feel fear. Instead she felt rage — clean, cold, clarifying. The kind that doesn't cloud judgment but sharpens it.

"We handle this," Ironside said at the emergency briefing. Not a question. A statement.

"This isn't your fight."

"The hell it isn't. You're UNOPCOM."

The squad mobilized. Not because they were ordered to — because they chose to. Every single one. Raven planned the operation. Ghost handled the intelligence. Blaze volunteered for point.

Valentina Reyes had spent six years protecting her mother by staying away. Now she had a better option: a squad of impossible people who didn't know the meaning of "not my problem."`,
    unlock_type: 'event',
    unlock_value: { event_type: 'territory_defended' },
  },
  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'Extraction',
    content: `The operation to secure her mother was surgical. Ghost's intelligence. Raven's planning. Storm and Titan on overwatch. Blaze and Viper on the ground.

She knocked on the yellow door for the first time in six years. The woman who opened it was smaller than she remembered, greyer, with new lines around her eyes and a rosary clutched in her left hand.

"Mija."

"Mamá. We have to go."

Her mother didn't argue. Didn't ask questions. Just grabbed a bag she'd clearly had packed for years — because mothers know, they always know — and walked out the door.

On the helicopter, her mother held her hand and said nothing, and Viper cried for the first time since she was seventeen. Ugly, messy, graceless crying — the kind she'd forbidden herself for years because tears were weakness and weakness was death.

But she wasn't weak. She was just finally, terribly, beautifully human.`,
    unlock_type: 'missions',
    unlock_value: { min: 80 },
  },
  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'Safe House',
    content: `UNOPCOM set up a safe house. Clean identity for her mother. Protection detail. The works.

"This is too much," Valentina said to Ironside.

"This is what we do."

"You fight aliens and defend territories. You don't relocate mothers."

Ironside almost smiled. Almost. "We protect our own. Your mother is our own now."

She visited when she could. Brought groceries. Sat in the kitchen while her mother cooked and talked — about the neighborhood, the weather, the telenovelas she was watching. Normal things. Sacred things.

"You seem different," her mother said, setting down a plate of arepas.

"I found my people, Mamá."

"I can tell. You laugh like you mean it now."

She did. For the first time in years, the laughter wasn't armor. It was just laughter.`,
    unlock_type: 'streak',
    unlock_value: { min: 10 },
  },
  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'Teaching the Trade',
    content: `New recruits arrived. Green and terrified and trying not to show it — the same way she'd once been, except she'd hidden it better.

She taught them what she knew. Not the tactical stuff — Raven handled that — but the survival stuff. How to read a room. How to trust your gut. How to keep going when every instinct screamed retreat.

"The most dangerous thing in combat isn't the enemy," she told them. "It's the voice in your head that says you can't."

Spark sat in on the sessions. Not because he needed to — he'd long since outgrown her teachings — but because he remembered what it was like to have someone believe in him before he believed in himself.

"You're good at this," Spark told her after.

"Don't let it go to your head."

"Too late. Already there."

She smiled. The kid had learned her humor. God help them all.`,
    unlock_type: 'missions',
    unlock_value: { min: 85 },
  },
  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'The Testimony',
    content: `The ledger worked. Ironside's contacts — the right ones, the ones that mattered — built a case. International task force. Multiple agencies. The kind of coordinated action that Valentina's original mission was supposed to enable.

She testified via secure link. Face obscured, voice altered, but the words were hers. Every name, every date, every route she'd memorized during those fourteen months inside the cartel.

It took four hours. When it was done, she sat in the dark comm room and breathed.

Blaze brought her coffee. Black, no sugar. The way she'd learned to take it in Medellín because milk was expensive and sugar attracted ants.

"How do you feel?" Blaze asked.

"Like I just put down a bag I've been carrying for a decade."

"Heavy?"

"You have no idea."`,
    unlock_type: 'missions',
    unlock_value: { min: 90 },
  },
  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'Frost\'s Gift',
    content: `Frost gave her a small box wrapped in plain paper. Inside was a mug — ceramic, handmade, with a snake coiled around the handle and the word "Valentina" painted on the side in careful letters.

"For the morning tea," Frost said.

Viper turned the mug over in her hands. It was imperfect — slightly lopsided, the paint a little uneven. Which meant Frost had made it herself.

"You made this?"

"I have a kiln. It's a hobby."

"You have a kiln. Of course you have a kiln."

She used the mug every morning after that. Sometimes she traced the name with her thumb — Valentina — and marveled at how a word could feel like permission. Permission to exist. Permission to stay. Permission to stop being a ghost haunting her own life.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 30 },
  },
  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'The Yellow Door',
    content: `I want to tell you it closed. The door. I want to tell you she flew to Medellín and stood in front of the yellow door and felt something resolve — some internal mechanism clicking into place, the case closing. That's the story she would tell at the base, if she told the story.

Here is what actually happened.

The cartel fell. Enough of it. Enough names prosecuted, enough routes seized, enough assets frozen that what remained was noise rather than signal. She flew to Medellín in March. She walked through the streets with her real face on. She found the yellow door on a Tuesday afternoon when the light was coming in flat and the neighborhood smelled like diesel and mango and something frying.

The door was still yellow. Faded, peeling, paint cracking at the corners exactly as she remembered. The brass knocker was gone green, same as in the dream. She stood in front of it for a long time.

She didn't touch it. She'd told herself she would touch it. She'd told herself this was the thing she needed to do — feel the paint, something. She stood there and she did not touch the door.

The girl who left through it at seventeen, angry and scared and alone: she didn't disappear. That's the part no one tells you. The girl is still there. She's inside you, standing in the hallway, three months without her mother, sixty days on the clock. You don't become a woman who has moved past it. You become a woman who carries the girl.

A man walked by. A dog. A woman with groceries. The city did not acknowledge her presence or her history. It just kept being Medellín.

She turned and walked back to the airport. She flew back to UNOPCOM. She went to the mess hall and found Blaze eating something improbable at 2200 and she sat across from him and didn't say anything and he didn't ask.

The yellow door is still yellow. She has not been back.

This is not a failure. She wants you to understand that. It is just — the door doesn't close that way. There is no ceremony that closes it. You carry the door. The door carries you. Eventually you learn to travel together.`,
    unlock_type: 'missions',
    unlock_value: { min: 95 },
  },
  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'Viper\'s Venom',
    content: `They asked her to write her story for the UNOPCOM archive. Official record. For posterity.

She laughed. Then she wrote it.

Here is what she wrote, and here is what she didn't write, and here is the space between them where the truth lives:

She wrote: "My name is Valentina Reyes." She didn't write: I practiced saying that name in the mirror for three days before I could say it to another person without flinching.

She wrote: "I came to UNOPCOM because I was out of places to run." She didn't write: The voicemail is still on the SIM card. I've listened to it seven times now. I stopped counting somewhere around the fourth mission, and now I listen because I want to, not because I need the punishment.

She wrote: "I stayed because I found something I didn't know I was looking for." She didn't write: Blaze. Frost. Storm, who said let them come and meant it. Ghost, who understands disappearing. A table of people eating breakfast who looked up when I walked in and made room. I didn't know a table could feel like a door swinging open.

She wrote: "I don't know what happens next." This part is fully true. The cartel is still out there. The people at the yellow door may or may not know where to find her. Some nights she still checks the locks.

She signed it Valentina. At the bottom, smaller: Viper. Because the name that kept you running is also the name that kept you alive, and you don't throw away a thing that kept you alive just because you're done running.

She is done running.

She checks the locks sometimes. That's not running. That's just remembering that you survived by being careful, and careful has kept her here, at this table, with these people, alive enough to write it down.

That is the whole story. And also the beginning of the next one.`,
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: 'Viper\'s Venom',
    achievement_desc: 'Valentina Reyes completes her story — from fugitive to fighter to family.',
  },
];

const reactions = [
  {
    event_type: 'mission_complete',
    text: 'Another day, another paycheck. Kidding — I stopped counting the money three wars ago.',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: 'Don\'t tell me it gets easier. It doesn\'t. It just gets quieter.',
    priority: 2,
  },
  {
    event_type: 'territory_lost',
    text: 'We lost ground. I know what that feels like — I\'ve been losing ground my whole life. Time to take it back.',
    priority: 1,
  },
  {
    event_type: 'territory_defended',
    text: 'Held the line. Funny how "standing your ground" used to terrify me. Now it\'s the only thing that makes sense.',
    priority: 1,
  },
  {
    event_type: 'streak_milestone',
    text: 'Look at us, actually being consistent. My therapist would be proud. If I had a therapist.',
    priority: 1,
  },
  {
    event_type: 'rank_up',
    text: 'A promotion? Great. More responsibility. Exactly what a fugitive needs.',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    condition: { involves_template: 'blaze' },
    text: 'No. No, no, no. Not her. Not Blaze. She was... she was the reason I stayed. She was the reason any of this meant anything.',
    priority: 10,
  },
  {
    event_type: 'soldier_kia',
    condition: { involves_template: 'frost' },
    text: 'Frost brought me tea every morning. Every single morning. Who\'s going to... I can\'t finish that sentence.',
    priority: 10,
  },
];

const relationships = [
  {
    char_a: 'viper',
    char_b: 'blaze',
    rel_type: 'old_friends',
    description: 'Kindred chaos — instant connection from day one. Blaze is the only person Viper trusts without reservation.',
  },
  {
    char_a: 'viper',
    char_b: 'raven',
    rel_type: 'tension',
    description: 'Raven is too by-the-book for Viper\'s taste. They clash on method but grudgingly respect each other\'s competence.',
  },
  {
    char_a: 'viper',
    char_b: 'frost',
    rel_type: 'bond',
    description: 'Frost\'s quiet kindness breaks through Viper\'s defenses. A slow-building trust that becomes one of Viper\'s most important connections.',
  },
  {
    char_a: 'viper',
    char_b: 'storm',
    rel_type: 'bond',
    description: 'Storm never forgot that Viper came back for him. A debt that became loyalty that became family.',
  },
  {
    char_a: 'viper',
    char_b: 'ghost',
    rel_type: 'bond',
    description: 'Ghost understands disappearing. Viper goes to him when the running instinct flares. They speak the same language of survival.',
  },
  {
    char_a: 'viper',
    char_b: 'razor',
    rel_type: 'tension',
    description: 'Razor runs on precision; Viper runs on instinct. She thinks his improvisation is sloppy. He thinks her rigidity is a liability waiting to happen. They are both right, and they both hate it.',
  },
];

module.exports = { template, chapters, reactions, relationships };
