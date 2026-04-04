/**
 * Character 09: Storm — Jean Dubois
 * Former Montreal firefighter. Built like a wall. Speaks only when it matters.
 */

const template = {
  id: 'storm',
  name: 'Jean Dubois',
  callsign: 'Storm',
  nationality: 'French-Canadian',
  personality: ['stoic', 'protective', 'quiet', 'brave'],
  motivation: "Protect the people who can't protect themselves",
  background: 'Former Montreal Fire Department, Caserne 27, twelve years. Carried people out of seventeen burning structures. Left under circumstances that appear as a single disciplinary note in the official record and considerably more weight in the unofficial one. Built like a wall. Speaks like someone who has learned that words are expensive and silence is accurate.',
  portrait_sprite: 'xcom0',
};

// ── 50 Chapters ────────────────────────────────────────────────────

const chapters = [
  // ── SURFACE (1-10) ───────────────────────────────────────────────
  {
    chapter_num: 1,
    tier: 'surface',
    title: 'The Wall',
    content: `What Jean Dubois carries:

A bag, set down without ceremony. Inside: clothes, toiletries, a wallet. In the wallet: a photograph of Caserne 27, the Montreal firehouse where he worked for twelve years. A patch taken from his turnout gear the day he left. Folded behind the photograph, a name he doesn't look at often. He carries it anyway.

The real list:

He carries the physical weight of seventeen people, which is the number of people he has carried out of burning structures, one by one, sometimes at a run, through rooms that were trying to kill him. He carries that weight in his knees, his lower back, the places on his forearms where the heat got close enough to leave marks. He carries twelve years of Caserne 27 and the specific people of Caserne 27 and what happened to some of them on a call that went wrong. He carries a name — the name in his wallet — which belongs to a man who was supposed to be in a different building on a specific night, and wasn't, and is dead, and whose death Jean Dubois knows more about than he has told anyone. He carries three years of carrying that alone, which is the specific weight of a secret too heavy for one person and too dangerous to set down. He carries the discipline of not flinching. Walls don't flinch. He has made himself into a wall.

He sets the bag down. Claims a bunk near the door. Unpacks with the method of someone who has done this in worse conditions, in the dark, with smoke in his lungs.

Ironside reads the file: twelve years, three commendations, one disciplinary note — refused to leave a collapsing structure when ordered to evacuate.

"He'll do," Ironside says. He closes the folder.

Nobody calls him Jean. By the end of the first week they call him Storm. Not because he's loud. Because when he moves, you feel it before it arrives.

That's not a metaphor. That's just what it is.`,
    unlock_type: 'missions',
    unlock_value: { min: 0 },
  },
  {
    chapter_num: 2,
    tier: 'surface',
    title: 'Morning Ritual',
    content: `Storm is always the first one awake. 0430, every day. He runs the perimeter — not for fitness, but to check the fences, the sight lines, the shadows where something could hide. Old habit from the firehouse: walk the building before the shift starts.

Spark catches him once, coming back from a late coding session. "You know we have sensors for that, right?" Storm looks at her, nods once, and keeps walking. The sensors don't have instincts.`,
    unlock_type: 'missions',
    unlock_value: { min: 1 },
  },
  {
    chapter_num: 3,
    tier: 'surface',
    title: 'Weight Room',
    content: `He doesn't lift to impress. He lifts because his job is to carry people out of burning things, and the things keep getting heavier.

Titan finds him in the weight room at 0500, three plates deep on the bench press. No spotter. Titan doesn't say anything — just stands behind the bar, hands ready. Storm finishes his set, racks it, and nods. They do this every morning after that. No words needed.`,
    unlock_type: 'missions',
    unlock_value: { min: 2 },
  },
  {
    chapter_num: 4,
    tier: 'surface',
    title: 'Ration Table',
    content: `Storm eats alone. Not out of hostility — he just doesn't know how to do the table talk thing. Blaze slides in across from him one evening, already three jokes deep into a story about Ghost and a vending machine. Storm listens. Doesn't laugh, but his eyes track the story.

When Blaze finishes, Storm pushes his extra bread roll across the table. That's it. That's the conversation.

Blaze tells Viper later: "I think Storm just adopted me."`,
    unlock_type: 'missions',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 5,
    tier: 'surface',
    title: 'First Contact',
    content: `His first mission with the squad. The team stacks on a breached door. Storm doesn't wait for the signal — he reads the room in a heartbeat, steps through first, puts himself between the unknown and his squad. Same instinct as walking into a burning hallway: you go first so nobody else has to.

Raven watches from overwatch. "He didn't even flinch."

Ghost, over comms: "He's not trying to be brave. He just doesn't know how to stand behind someone."`,
    unlock_type: 'missions',
    unlock_value: { min: 4 },
  },
  {
    chapter_num: 6,
    tier: 'surface',
    title: 'Smoke',
    content: `The team clears a structure that's been hit with incendiary rounds. The air is thick, black, chemical. Everyone pulls back. Storm goes in.

He emerges four minutes later carrying an unconscious civilian over one shoulder. Sets the man down gently, checks his pulse, waves the medic over. Then turns around and goes back in for the second one.

Razor grabs his arm. "The ceiling's coming down."

Storm looks at him. Removes the hand. Goes back in.

He gets the second one out eleven seconds before the roof caves.`,
    unlock_type: 'missions',
    unlock_value: { min: 6 },
  },
  {
    chapter_num: 7,
    tier: 'surface',
    title: 'Words',
    content: `Three weeks in and Storm has spoken maybe two hundred words total. Frost notices because she's quiet too — but her silence is watchful, analytical. His silence is load-bearing. It holds something up.

She sits next to him on the cargo crate outside the barracks one evening. Neither says anything for twenty minutes. Then Storm says, "Good night." And leaves.

Frost stays on the crate, looking at the stars. She understands exactly what just happened.`,
    unlock_type: 'time',
    unlock_value: { min_days: 5 },
  },
  {
    chapter_num: 8,
    tier: 'surface',
    title: 'Shield Wall',
    content: `During a defensive operation, Storm positions himself at the most exposed point without being asked. Ironside tries to rotate him out. Storm doesn't move. Ironside tries again. Storm looks at him and says, "I'm fine here."

Three words. Ironside lets it go. Because the way Storm says it — flat, certain, immovable — you know he's already calculated the risk. He's not being reckless. He's being precise about where his body needs to be.`,
    unlock_type: 'missions',
    unlock_value: { min: 7 },
  },
  {
    chapter_num: 9,
    tier: 'surface',
    title: 'The Hands',
    content: `Spark notices Storm's hands. They're mapped with old burn scars — fingers, palms, the backs of his wrists. Not the dramatic kind. The everyday kind. The kind you get from a decade of pulling people out of things that are on fire.

She doesn't ask about them. But she starts designing a new grip material for his weapon stock. "Better heat dissipation," she says when she hands it over. Storm looks at the modification, then at Spark, and puts it on his rifle without a word.`,
    unlock_type: 'streak',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 10,
    tier: 'surface',
    title: 'Standing Post',
    content: `A night mission goes sideways. Extraction is delayed. The squad hunkers down in a bombed-out building, wounded and low on ammo. Someone has to hold the doorway for six hours until evac arrives.

Storm stands up. Nobody argues. Nobody volunteers to relieve him.

Six hours later, when the helicopter touches down, Titan puts a hand on Storm's shoulder. "Come on, big man. Ride's here." Storm blinks, rolls his neck, and walks to the bird. He hasn't moved from that doorway since midnight.

Titan tells the debrief: "That man is a wall. And walls don't fall."`,
    unlock_type: 'missions',
    unlock_value: { min: 10 },
    is_achievement: true,
    achievement_name: "The Wall Stands",
    achievement_desc: "Unlocked Storm's complete Surface story — the immovable protector reveals himself.",
  },

  // ── ROOTS (11-20) ───────────────────────────────────────────────
  {
    chapter_num: 11,
    tier: 'roots',
    title: 'Caserne 27',
    content: `Late at night, Storm sits in the common room cleaning his gear. Viper passes through, notices a patch stitched inside his vest. It reads "Caserne 27" — a Montreal fire station designation.

"Souvenir?" Viper asks.

Storm runs his thumb over the patch. "Home," he says. Then he goes back to cleaning, and Viper knows better than to push.`,
    unlock_type: 'missions',
    unlock_value: { min: 12 },
  },
  {
    chapter_num: 12,
    tier: 'roots',
    title: 'The Warehouse',
    content: `He doesn't talk about it. But there is a pause — a single second, every time the squad enters a structure — where Storm stops at the threshold and his eyes sweep the ceiling. The support beams. The way the smoke moves if there is smoke, the way the air moves if there isn't. He's reading the building. Everyone thinks he's reading the mission.

He's reading the warehouse.

You have to understand something about what a building tells you, if you've spent twelve years learning to listen. The ceiling height, the load-bearing lines, the specific sound of stressed concrete versus stressed timber. Storm had been inside a thousand structures before the warehouse. He'd read them all correctly.

Four people inside. The pattern was standard. Two teams of two, top-to-bottom sweep. Marc took the second floor with Yves. Storm took the ground floor with Delphine. The timeline was good. The timeline was always good.

He got Delphine out at seven minutes. He got Yves out at nine. He went back for Marc.

The second floor came down at nine minutes forty seconds. He was at the base of the stairs.

He tells it this way when he tells it at all: "Four people inside. Got three out." That's the arithmetic. Clean, complete, a fact. What the arithmetic doesn't carry: the specific weight of a building in the moment it decides to stop being a building. The sound of it. The nine minutes and forty seconds.

He walked into UNOPCOM's recruitment office the following month. He'd been looking for a building worth walking into again. He's still looking. That's not a problem. That's what gets him up at 0430.`,
    unlock_type: 'missions',
    unlock_value: { min: 14 },
  },
  {
    chapter_num: 13,
    tier: 'roots',
    title: 'Two Silences',
    content: `Frost finds him on the roof one night, staring at nothing. She recognizes the look — she's worn it herself. The look of someone replaying a moment they can't change.

She sits down three feet away. The distance matters. Close enough to be present. Far enough to not intrude.

They stay there for an hour. When Storm finally stands, he says: "You lost someone too."

It's not a question.

Frost nods. Storm nods back. They go inside. Something shifts between them — not friendship exactly, but recognition. Two people carrying the same weight.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 8 },
  },
  {
    chapter_num: 14,
    tier: 'roots',
    title: 'Training Day',
    content: `Storm volunteers to run close-quarters combat drills. He doesn't teach technique — he teaches positioning. Where to stand so your body covers someone else. How to make yourself the largest target in the room so the threat focuses on you instead of the people behind you.

Razor watches the session and pulls Ironside aside. "He's not teaching them to fight. He's teaching them to shield."

Ironside nods. "That's what he knows."`,
    unlock_type: 'rank',
    unlock_value: { min: 3 },
  },
  {
    chapter_num: 15,
    tier: 'roots',
    title: 'Heavy Loads',
    content: `Blaze is hit during a mission. Not bad — shrapnel in the thigh — but he can't walk. Storm crosses thirty meters of open ground, picks Blaze up like a child, and carries him to cover. No hesitation. No call for suppressing fire. Just movement.

Blaze, through gritted teeth: "You're insane, you know that?"

Storm sets him down, checks the wound, and starts applying pressure. "Hold still."

Later, Blaze tells the squad: "He carried me like I weighed nothing. I weigh ninety kilos." Titan laughs. "To Storm, you're a grocery bag."`,
    unlock_type: 'missions',
    unlock_value: { min: 16 },
  },
  {
    chapter_num: 16,
    tier: 'roots',
    title: 'French Lullaby',
    content: `Ghost is on watch when he hears it — a low humming from Storm's bunk. A melody. Quiet, almost inaudible. A French lullaby.

Ghost doesn't mention it. But the next morning, he catches Storm's eye and says, "My mother used to hum that one."

Storm stares at him for a long moment. "Your mother was Quebecoise?"

"No," Ghost says. "But melodies don't care about borders."

It's the longest conversation anyone has seen Storm have.`,
    unlock_type: 'time',
    unlock_value: { min_days: 14 },
  },
  {
    chapter_num: 17,
    tier: 'roots',
    title: 'The Count',
    content: `Storm keeps a small notebook in his vest pocket. Raven sees him writing in it after every mission — always just a number. She asks what it is.

"People," Storm says.

Raven waits, but that's all she gets. She tells Frost about it later. Frost understands immediately: it's a count. The people he's carried out. The people he's saved. He keeps the number because numbers don't lie, and the number is the only thing that makes the other number — the one he didn't save — bearable.`,
    unlock_type: 'missions',
    unlock_value: { min: 18 },
  },
  {
    chapter_num: 18,
    tier: 'roots',
    title: 'Standing Order',
    content: `Spark redesigns the squad's emergency evacuation protocol. She comes to Storm with the draft. "I want you to review this."

He reads it in silence. Marks three changes in pencil — all of them about casualty extraction. Where to position the strongest carrier. Optimal routes for someone moving with a body over their shoulders. Weight distribution.

Spark looks at the edits. "You've thought about this a lot."

"Every day," Storm says. He hands the paper back and walks away.`,
    unlock_type: 'streak',
    unlock_value: { min: 5 },
  },
  {
    chapter_num: 19,
    tier: 'roots',
    title: 'Night Terrors',
    content: `Titan wakes to the sound of Storm's bunk creaking. Not thrashing — Storm doesn't thrash. He just sits up, rigid, staring at the wall. Breathing controlled. Hands flat on his knees. Managing it.

Titan gets up without a word, fills two cups of water, and sits on the footlocker across from him. They drink in silence.

"Same dream?" Titan asks.

"Same building," Storm says.

Titan nods. "The buildings don't go away. But you learn to build new ones."

Storm looks at him — really looks — and for a moment the mask cracks. Just a fraction. Then it's back.`,
    unlock_type: 'missions',
    unlock_value: { min: 20 },
  },
  {
    chapter_num: 20,
    tier: 'roots',
    title: 'Load-Bearing',
    content: `During a brutal mission, the squad gets pinned in a collapsed corridor. Rubble blocks the exit. Everyone looks for another way out. Storm walks up to the debris, braces his shoulders against the largest slab, and pushes.

It takes four minutes. Nobody helps because there's no room — it's just him against the concrete. When the gap opens wide enough for single file, he holds it and waves the squad through one by one.

Ironside goes last. He looks at Storm, shoulders shaking with the effort, and says: "You're the most stubborn man I've ever served with."

Storm, through clenched teeth: "Go."

He holds the slab for eleven more seconds after the last person passes, then rolls through the gap as it comes down behind him. Dust everywhere. Silence. Then Titan's voice: "Still with us, big man?"

Storm coughs. Stands. Nods.

The squad doesn't cheer. They don't need to. Everyone saw it.`,
    unlock_type: 'missions',
    unlock_value: { min: 22 },
    is_achievement: true,
    achievement_name: "Load-Bearing Wall",
    achievement_desc: "Unlocked Storm's complete Roots story — beneath the silence, a man shaped by fire.",
  },

  // ── CRACKS (21-30) ──────────────────────────────────────────────
  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'Fissure',
    content: `A mission goes wrong. A civilian dies — caught in crossfire, wrong place, wrong second. It wasn't Storm's fault. It wasn't anyone's fault. But Storm carries the body to the extraction point himself.

He doesn't put it down when the medic says it's too late. He doesn't put it down when Ironside tells him to. He carries it all the way to the helicopter and sets it on the floor gently, like it matters. Because it does.

That night, he adds a number to his notebook. Not the one that goes up.`,
    unlock_type: 'missions',
    unlock_value: { min: 25 },
  },
  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'Breaking Point',
    content: `For the first time, Storm refuses a mission briefing. Not the mission — the briefing. He stands outside the door, listening through the wall, then goes to gear up.

Raven confronts him. "You missed the brief."

"I heard it."

"That's not the point."

Storm looks at her. Something in his expression — not anger. Exhaustion. "I know the point. I'll be at the door first. I always am."

He is. And Raven lets it go because he's right.`,
    unlock_type: 'rank',
    unlock_value: { min: 5 },
  },
  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'The Crack in the Wall',
    content: `Blaze gets hurt again. Worse this time. Storm gets him out — of course he does — but in the medevac bird, something breaks. His hands are shaking. Not from exertion. From something older.

Blaze, half-conscious, grabs Storm's wrist. "Hey. Hey, big guy. I'm here. I'm okay."

Storm looks at his hands. Closes them into fists. Opens them. The shaking stops. "You need to be more careful," he says, and his voice is rough.

Blaze grins through the pain. "Where's the fun in that?"

Storm doesn't answer. But he doesn't let go of Blaze's arm until the medics take over.`,
    unlock_type: 'event',
    unlock_value: { event_type: 'mission_complete' },
  },
  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'Ghost Story',
    content: `Ghost tells Storm about a night operation years ago. People he couldn't save. Not because he wasn't strong enough — because he was ordered not to.

Storm listens without interrupting. When Ghost finishes, Storm says the most words he's said in a single sentence since arriving: "Orders that leave people behind aren't orders. They're choices someone else made with your hands."

Ghost is quiet for a long time. Then: "That's the smartest thing anyone's said to me in a decade."`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ghost', min_missions: 12 },
  },
  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'Vigil',
    content: `When a soldier falls — any soldier, any team — Storm stands outside the medical bay until he gets word. Good or bad. He doesn't pace. He doesn't sit. He stands. Like a sentry. Like standing there hard enough might hold the door against death.

Frost finds him there at 0300 one night. She brings a chair. He doesn't sit in it. She sits in it instead, and they wait together.

"You can't guard every door, Jean."

He doesn't answer. But he hears her.`,
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_kia' },
  },
  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'Weight',
    content: `Titan catches Storm overtraining again. 0400, alone, deadlifting more than his body weight. But this time, Titan sees it for what it is — not discipline. Penance.

"You can't outwork grief, son."

Storm racks the bar. Sits on the bench. Doesn't look up. "I know."

"Then why?"

"Because if I stop moving, I have to think. And when I think, I'm back in that warehouse."

Titan sits next to him. "Tell me about the warehouse."

Storm doesn't. Not yet. But he stops lifting for the night.`,
    unlock_type: 'missions',
    unlock_value: { min: 30 },
  },
  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'Protective Instinct',
    content: `Spark takes a risk during a field operation — leaves cover to retrieve a piece of alien tech. Storm sees it happen and crosses the distance before anyone else registers the danger. He puts himself between Spark and the line of fire without thinking.

After, he's furious. Not loud — Storm's anger is glacial. He corners Spark in the armory. "Don't do that again."

"It was important tech—"

"You're more important than tech."

Spark blinks. Storm walks away. She stands in the armory for five minutes, trying to process the fact that the quietest man on the squad just told her she matters more than the mission.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'spark', min_missions: 10 },
  },
  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'The Wallet',
    content: `His wallet falls open in the barracks. Viper picks it up before Storm can grab it. She sees two things: a photo of a man in a firefighter's uniform — smiling, young, alive — and a folded slip of paper behind it.

She hands the wallet back without looking at the paper. Storm takes it. Their eyes meet.

"Everyone carries something," Viper says.

Storm's jaw tightens. He puts the wallet away. The paper stays folded. The name stays hidden.`,
    unlock_type: 'time',
    unlock_value: { min_days: 25 },
  },
  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'Fire Watch',
    content: `An alien incendiary weapon sets a building ablaze during a mission. The squad pulls back. Storm doesn't.

He's inside for eight minutes. Razor tracks him on thermal — moving through the fire like he belongs there. He emerges with two civilians, one under each arm. His gear is smoking. His face is calm.

Razor: "You walked through fire."

Storm sets the civilians down. Checks their pulses. Both alive. He looks at Razor and shrugs. "I've done it before."

It's not bravado. It's biography.`,
    unlock_type: 'missions',
    unlock_value: { min: 35 },
  },
  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'Cracks in the Foundation',
    content: `A mission ends with everyone safe. No casualties, no wounded. The squad celebrates. Storm sits apart, watching them. Titan brings him a drink.

"Good day, Jean. Take the win."

"I don't trust good days," Storm says. "Good days make you forget what bad ones feel like. And you have to remember, because the bad ones come back."

Titan looks at him for a long time. "You're right. They do. But the good days are what you fight through the bad ones for."

Storm takes the drink. Doesn't toast. But he stays at the table.

Later, Frost catches his eye across the room. She raises her glass, barely. He nods. Barely. It's enough.`,
    unlock_type: 'missions',
    unlock_value: { min: 38 },
    is_achievement: true,
    achievement_name: "Controlled Burn",
    achievement_desc: "Unlocked Storm's complete Cracks story — the wall shows its fractures.",
  },

  // ── SECRETS (31-40) ─────────────────────────────────────────────
  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'Arson',
    content: `It wasn't an accident.

The warehouse fire that killed Marc — the fire that was filed under "accidental, faulty electrical system, no further investigation required" — was not that. Storm knows because he went back to the ruins three days after the funeral, the day everyone else was still at the reception, and he walked through what was left and he read it the way he'd learned to read buildings: from the ground up, from the accelerant pattern in, from the ignition point out.

He found the pattern in forty minutes. It took investigators three days to file the accidental report. He has never decided what to do with that discrepancy.

He found the ignition point: northwest corner, behind a support column, the kind of location a person chooses rather than a short circuit. He found the footage on a maintenance camera that fed to a server the investigators didn't know to request. A man walking away from the northwest corner of the building twelve minutes before the first alarm. Storm enhanced the frame, printed it, folded it, put it behind his photo of Marc.

The man's name is Luc Brossard. He runs a real estate development company in Montreal. The warehouse was blocking a condo project worth ninety million dollars. One building permit, one warehouse, one fire. Thirty-two lives — his partner Marc among them — worth less than a zoning decision.

He has been carrying this for three years. He hasn't gone to the police. He has thought about going to the police approximately every day for three years. He has thought about other things too. He is not proud of all of them. He has decided he needs to understand what kind of man he is before he decides what to do with what he knows.

He hasn't finished deciding yet.`,
    unlock_type: 'missions',
    unlock_value: { min: 45 },
  },
  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'The Name',
    content: `The paper in his wallet. Frost asked about it once, indirectly. Storm deflected. But tonight, alone in the comms room at 0200, he unfolds it and stares at the name.

Luc Brossard.

He's looked the man up. Brossard is still in Montreal. Still building condos. Still attending charity galas with a glass of champagne and a clean conscience. Marc's family got a settlement. The fire was ruled accidental. Case closed.

Storm folds the paper. Puts it back. His hands are steady.

The question isn't whether Brossard is guilty. The question is what Storm plans to do about it when this war is over.`,
    unlock_type: 'missions',
    unlock_value: { min: 48 },
  },
  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'Confession (Part 1)',
    content: `He tells Frost. Not all of it — just the shape of it.

"The fire wasn't an accident."

Frost doesn't react the way most people would. No gasp, no questions. She waits.

"I know who did it. I've known for three years."

"What are you going to do?"

Storm stares at the wall. "I don't know."

"Yes, you do," Frost says quietly. "You just haven't decided which version of the answer you can live with."

He looks at her. In the low light, her expression mirrors his — someone who understands that knowing the truth and acting on it are two different kinds of weight.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'frost', min_missions: 20 },
  },
  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'The Builder',
    content: `Storm looks up Brossard's company on a borrowed laptop. Seven new developments since the fire. A profile in a business magazine: "The Man Rebuilding Montreal's Waterfront." Smiling photo. Good teeth.

Storm closes the laptop carefully. Sets it down. Walks to the weight room.

He deadlifts until his hands bleed. Titan finds him two hours later, still going. Bar wet with sweat and blood.

"Jean."

Storm racks the bar. Looks at his palms. The old burn scars are split open.

"Some things can't be lifted away," Titan says.

"I know," Storm says. "But I keep trying."`,
    unlock_type: 'missions',
    unlock_value: { min: 52 },
  },
  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'Justice and Vengeance',
    content: `Ghost finds Storm reading a law textbook in the common room. Not military law. Criminal law. Arson statutes. Burden of proof. Statute of limitations.

Ghost sits down. "Research project?"

Storm turns a page. "Something like that."

Ghost studies him. "There's a line between justice and vengeance. Both of them feel the same when you're standing on the wrong side."

"Which side are you on?" Storm asks.

Ghost considers this. "I used to know. Now I'm just trying to stay in the middle."

Storm marks his page and closes the book. That's the most honest answer anyone's given him.`,
    unlock_type: 'time',
    unlock_value: { min_days: 40 },
  },
  {
    chapter_num: 36,
    tier: 'secrets',
    title: "Marc's Birthday",
    content: `March 14th. Storm disappears for three hours. Nobody can find him. Raven checks the perimeter cameras — he's on the roof, sitting against the ventilation unit, holding a photo.

Raven doesn't go up. She tells the squad he's doing a security check.

When Storm comes back down, his eyes are dry. They're always dry. He doesn't cry — not because he can't, but because the grief went past crying a long time ago. It calcified into something harder. Something he carries in his chest like a stone.

He goes to the weight room. Titan is already there. Waiting.`,
    unlock_type: 'chance',
    unlock_value: { probability: 0.15 },
  },
  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'What Kind of Man',
    content: `Blaze does something reckless on a mission — charges into a collapsing structure to save a wounded alien defector. Storm drags him out. Both of them.

After, Storm sits Blaze down. "You're going to get yourself killed."

"Look who's talking."

Storm pauses. He sees it — the mirror. Blaze, running into fires. Blaze, who doesn't care if he burns. Storm recognizes the pattern because he invented it.

"It's different," Storm says, but his voice is uncertain.

"Is it?" Blaze asks.

Storm walks away. But that night, for the first time, he skips the 0400 perimeter check. He lies in his bunk and thinks about what kind of man runs into fires. And whether the reason matters.`,
    unlock_type: 'missions',
    unlock_value: { min: 58 },
  },
  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'The Letter',
    content: `Storm writes a letter. Not to Brossard — to Marc's sister, Elise. He's never told her what he knows. He's been protecting her from it, the same way he protects everyone from everything: by putting himself between the truth and the people it would hurt.

He writes three drafts. The first is clinical. The second is angry. The third is honest.

He doesn't send any of them. But he keeps the third one in his vest pocket, next to the patch from Caserne 27.`,
    unlock_type: 'streak',
    unlock_value: { min: 8 },
  },
  {
    chapter_num: 39,
    tier: 'secrets',
    title: 'The Decision',
    content: `Frost asks him directly. "Have you decided?"

They're on the roof again. Their place, though neither would call it that.

"I'm going to send the evidence to the police," Storm says. "The footage. The accelerant report. Everything. When the war is over."

"Not before?"

"If I do it now and something happens to me, there's no one to follow through. If I wait, I can testify."

Frost considers this. "That's not vengeance."

"No," Storm says. "It's the harder thing."

He unfolds the paper from his wallet. Looks at the name one more time. Folds it back up.

"Marc deserves justice. Not my anger. Justice."`,
    unlock_type: 'missions',
    unlock_value: { min: 62 },
  },
  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'Weight Redistributed',
    content: `He tells Titan. All of it — the arson, the name, the evidence, the decision.

Titan listens the way Titan always listens: completely, without interruption, with the gravity of a man who knows what secrets cost.

When Storm finishes, Titan is quiet for a long time. Then: "Three years you've carried that alone."

"Someone had to."

"No, Jean. That's the thing. Someone didn't have to. You chose to. And now you're choosing to put it down the right way." He puts a hand on Storm's shoulder. "Marc would be proud of you."

Storm's jaw works. He nods. Doesn't speak. But something in his posture shifts — the load redistributes. Not gone. But shared.`,
    unlock_type: 'missions',
    unlock_value: { min: 66 },
    is_achievement: true,
    achievement_name: "Name in the Wallet",
    achievement_desc: "Unlocked Storm's complete Secrets story — the truth behind the warehouse fire.",
  },

  // ── LEGACY (41-50) ──────────────────────────────────────────────
  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'New Fire',
    content: `Storm starts teaching fire rescue to the squad. Not combat — actual search-and-rescue. How to move through smoke. How to carry dead weight. How to find a pulse in the dark.

He's patient in a way no one expected. Gentle with corrections. Precise with demonstrations. This is the man before the warehouse. The man who loved his job.

Spark records the sessions for the training database. She watches the footage later and sees something she's never seen on Storm's face before.

He's smiling.`,
    unlock_type: 'missions',
    unlock_value: { min: 70 },
  },
  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'Speaking Up',
    content: `For the first time, Storm speaks at a full squad briefing. Not a comment. A speech. Two minutes, sixty seconds longer than his previous record.

He talks about defensive positioning. About protecting extraction routes. About making sure every plan has a way to bring everyone home.

When he finishes, the room is silent. Not awkward silent — respectful silent. Ironside nods. "Noted. All of it."

Titan, from the back, grins: "Careful, Storm. That's almost a personality."

Storm's mouth twitches. Almost.`,
    unlock_type: 'rank',
    unlock_value: { min: 7 },
  },
  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'Letting Go',
    content: `Storm removes the slip of paper from his wallet. He doesn't throw it away — he puts it in an envelope with the evidence, the footage screenshots, and a written testimony. He seals it. Addresses it to the Montreal Police Service, Major Crimes Unit.

He puts the envelope in his footlocker. When the war ends, it goes in the mail.

His wallet is lighter. Not by much. But he notices.`,
    unlock_type: 'missions',
    unlock_value: { min: 74 },
  },
  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'Permission',
    content: `He visits the memorial wall where fallen soldiers' names are recorded. He stands in front of it for a long time. Then he does something nobody has seen him do.

He talks to Marc.

It's quiet — barely a whisper. But Frost, passing by, catches the rhythm of it. French. Gentle. The cadence of someone asking for permission.

Permission to move forward. Permission to protect new people. Permission to be more than the man who couldn't go back.

Frost keeps walking. Some prayers aren't meant to be overheard.`,
    unlock_type: 'time',
    unlock_value: { min_days: 50 },
  },
  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'The Door',
    content: `A structure fire on a mission — alien weapons, burning chemicals, civilians trapped inside. The team prepares a plan. Storm listens, then looks at the building.

He goes in. Same as always. But this time is different. This time he's not running from the warehouse. He's running toward the people inside.

He gets them all out. Four people. Same number as the warehouse. When he sets the last one down, his hands are steady. No shaking. No flashback.

Razor: "Storm, you good?"

Storm looks at the burning building. Watches it collapse. Nods.

"Yeah," he says. "I'm good."

And for the first time in three years, it's true.`,
    unlock_type: 'missions',
    unlock_value: { min: 78 },
  },
  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'Four for Four',
    content: `Frost finds him in the common room that night. He's writing in his notebook. She glances at the page. The number is higher than before — and next to it, circled, a new entry: "4/4."

He got four out of four. The debt isn't paid — debts like that never are. But the scales moved.

"Feels different," Storm says, without being asked.

"Different how?"

He closes the notebook. "Lighter."`,
    unlock_type: 'event',
    unlock_value: { event_type: 'mission_complete' },
  },
  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'Brother',
    content: `Storm tells Blaze the truth — not about the arson, but about why he watches Blaze so closely. "You remind me of someone. Someone who ran into things without thinking about whether he'd come out."

"Your partner?"

"Marc. Yeah."

Blaze is quiet — genuinely quiet, maybe for the first time. "What happened to him?"

"He didn't come out."

Blaze looks at his hands. "I'll be more careful."

Storm shakes his head. "Don't be careful for me. Be careful for you. You're worth coming out for."

Blaze doesn't have a joke for that. He just nods. And the next mission, he's a little more careful.`,
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 25 },
  },
  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'Foundation',
    content: `Titan asks Storm what he'll do when the war ends. Storm thinks about it longer than usual.

"Go back to Montreal. Maybe start a training program for firefighters. The things we've learned here — moving through hostile structures, extracting under fire — it translates."

"You'd be a good teacher."

"I wasn't always." Storm pauses. "I'm learning."

Titan smiles. "We all are, Jean. Every single day."

For the first time, Storm talks about the future like he expects to have one.`,
    unlock_type: 'missions',
    unlock_value: { min: 85 },
  },
  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'The Patch',
    content: `Storm removes the Caserne 27 patch from his vest. He doesn't throw it away — he frames it, small and simple, and puts it on the shelf above his bunk. Next to it, he puts Marc's photo.

Not hidden in a wallet anymore. Out in the open. Where people can see it. Where people can ask.

Spark asks. Storm tells her. All of it — the station, the fire, Marc, the years of silence. Spark listens with wide eyes, and when he finishes, she says: "Can I add his name to the memorial database?"

Storm nods. "He'd like that."

Marc Pelletier gets added to the UNOPCOM memorial database that evening. Not as a soldier. As a firefighter. As someone who ran in when everyone else ran out.

Like Storm. Like the man Storm is becoming again.`,
    unlock_type: 'missions',
    unlock_value: { min: 92 },
  },
  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'Still Standing',
    content: `The final mission of the campaign. The squad moves through a structure that could come down at any moment. Familiar ground for Storm.

He takes point. Always. But this time, when they reach the exit, he steps aside and lets the squad go first. One by one, they pass him. Ghost. Ironside. Viper. Spark. Raven. Frost. Blaze. Razor. Titan.

Each one gets a nod. Each one nods back.

Storm goes last. He walks out of the building, and he doesn't look back.

Later, Frost finds a note tucked into her kit. Storm's handwriting — block letters, precise.

"You asked me once what I was going to do. Here's my answer: I'm going to build things. Not walls. Not shields. Things that help people walk through their own fires."

"Thank you for sitting on the roof with me."

"— J."

The building collapses behind him. Storm keeps walking.

The wall didn't fall. It just learned to be a door.`,
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: "Through the Fire",
    achievement_desc: "Completed Storm's full story — from guilt-driven protector to a man at peace with the flames.",
  },
];

// ── Reactions ──────────────────────────────────────────────────────

const reactions = [
  {
    event_type: 'mission_complete',
    text: '{soldier} checks the squad, counting heads. Everyone\'s here. He nods once and starts cleaning his weapon.',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: '{soldier} stands at the memorial wall for an hour. Doesn\'t speak. Doesn\'t move. Then he adds a line to his notebook and walks away.',
    priority: 2,
  },
  {
    event_type: 'territory_lost',
    text: '{soldier} tightens the straps on his gear, checks the exits, and moves to the most exposed position on the perimeter. If they come, they go through him.',
    priority: 1,
  },
  {
    event_type: 'territory_defended',
    text: '{soldier} scans the horizon one more time before standing down. Old habit. Fires don\'t always stay out.',
    priority: 1,
  },
  {
    event_type: 'streak_milestone',
    text: '{soldier} is in the weight room at 0400. Same as yesterday. Same as tomorrow. The routine is the point.',
    priority: 1,
  },
  {
    event_type: 'rank_up',
    text: '{soldier} accepts the promotion with a nod. No speech. The squad knows. That\'s enough.',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    condition: { involves_template: 'frost' },
    text: '{soldier} stands on the roof alone that night. No one goes up. He stays until dawn, then comes down and puts on his gear. There is nothing behind his eyes except purpose.',
    priority: 5,
  },
  {
    event_type: 'soldier_kia',
    condition: { involves_template: 'blaze' },
    text: '{soldier} sits in the weight room, hands on his knees, staring at nothing. The bar stays on the rack. For the first time, he doesn\'t lift.',
    priority: 5,
  },
];

// ── Relationships ──────────────────────────────────────────────────

const relationships = [
  {
    char_a: 'storm',
    char_b: 'spark',
    rel_type: 'mentor_protege',
    description: 'Storm watches over Spark with a protective instinct he can\'t turn off. She\'s the one who keeps running into things that could hurt her. He\'s the one who makes sure she comes out.',
  },
  {
    char_a: 'storm',
    char_b: 'titan',
    rel_type: 'bond',
    description: 'Equals. Titan is the only person Storm doesn\'t feel the need to protect. They spot each other in the weight room. No words required.',
  },
];

module.exports = { template, chapters, reactions, relationships };
