/**
 * Character 06: Frost — Alexei Petrov
 * Former field medic. Gentle hands, tired eyes. Carries a notebook of names he couldn't save.
 */

const template = {
  id: 'frost',
  name: 'Alexei Petrov',
  callsign: 'Frost',
  nationality: 'Russian',
  personality: ['compassionate', 'quiet', 'haunted', 'hopeful'],
  motivation: "Save who he can — because he couldn't save them all",
  background: 'Former field medic who served in hospital tents across three conflict zones. Gentle hands, tired eyes. Carries a pocket notebook where he writes the names of everyone he\'s lost. The newest names are in alien script. Arrived at UNOPCOM with a medkit older than most of the recruits and the kind of patience that only comes from watching people die slowly.',
  portrait_sprite: 'xcom2',
};

// ── Chapters ──────────────────────────────────────────────────────────

const chapters = [
  // ── TIER: SURFACE (1-10) ──────────────────────────────────────────

  {
    chapter_num: 1,
    tier: 'surface',
    title: 'The Medkit',
    unlock_type: 'missions',
    unlock_value: { min: 0 },
    content: `What Alexei Petrov carries:

Two bags. A standard-issue duffel. And a medkit so worn that the canvas has gone soft as cloth, the zippers replaced twice, the Red Cross patch faded from red to a color that doesn't have a name. He shifts the medkit to his other shoulder when the intake officer reaches for it. Not aggressively. Just the way a parent moves a child away from a stranger.

"That stays with me."

Inside the medkit: gauze, four varieties. Clamps. An IV kit. Morphine, documented and counted. Two antibiotics. A tourniquet with a replacement strap sewn on seven times. In the side pocket — a small wooden rabbit, worn smooth on one side where a child's thumb used to rest.

The real list:

He carries Aleppo, 2014. He carries Grozny. He carries a field in Donbas and a hospital tent in Mosul. He carries a pocket notebook with names in four scripts — Cyrillic, English, Arabic, and, in the newest pages, a fifth script that belongs to no Earth language, which he started using because the beings it names deserve something the old alphabets didn't have room for. He carries a seven-year-old girl from Aleppo who waited four hours on the floor of a hospital tent and whose first question afterward was: "Are the others okay?" He carries the specific weight of triage — the arithmetic of mass casualty events that forces you to calculate which life to try to save, and the knowledge that the math is correct and that being correct is not the same as being right. He carries Tromsø. He carries being carried out of Tromsø by a man who went back when the building was collapsing.

He finds the infirmary before he finds his bunk. Inventories the supplies. Makes a list. Reorganizes the trauma shelf.

By the time anyone thinks to show him where he sleeps, the light in the infirmary is on.

He'll leave it on. He always does.

This is the one thing he has decided, out of all the things he can and cannot control: the light stays on. Someone has to be awake. Someone has to be ready.

He has made himself into that person. The cost of that is something he's still calculating.`,
  },

  {
    chapter_num: 2,
    tier: 'surface',
    title: 'Quiet Hands',
    unlock_type: 'missions',
    unlock_value: { min: 1 },
    content: `The first time anyone sees Frost work, it's on a training exercise gone wrong. A recruit catches shrapnel from a malfunctioning flash-bang — nothing lethal, but enough blood to make the room freeze.

Frost doesn't freeze. He's moving before the sound finishes echoing, hands already pulling gauze from the kit on his hip. His voice drops to something just above a whisper: calm, specific, unhurried.

"Look at me. Keep looking at me. You're fine. Breathe in — good. This is going to sting."

His hands don't shake. They move with a gentleness that seems impossible for someone in a combat zone — precise, deliberate, as if the only thing that exists is the wound and the person attached to it.

Ironside watches from the doorway. He's seen medics before — good ones, fast ones, competent ones. Frost is something else. Frost makes you believe you're safe even when you're bleeding.`,
  },

  {
    chapter_num: 3,
    tier: 'surface',
    title: 'The Notebook',
    unlock_type: 'missions',
    unlock_value: { min: 2 },
    content: `He writes in it every evening. A pocket-sized notebook, leather cover cracked with age, pages filled with names in small, careful handwriting. Some in Cyrillic, some in English, some in Arabic. The newest entries — the ones from after the incursion — are in symbols no one recognizes.

Ghost sees him writing once, in the mess hall, after a mission where everyone came home. She recognizes the ritual for what it is: not a diary but a ledger. A record of debts.

"You're adding names," she says. Not a question.

"Always." He doesn't look up. "The ones I lost. So I don't forget."

Ghost sits down across from him. She doesn't ask to see the notebook. She doesn't offer comfort. She just sits, quietly, while he writes — because she keeps her own kind of ledger, and silence between archivists is its own language.`,
  },

  {
    chapter_num: 4,
    tier: 'surface',
    title: 'The Rounds',
    unlock_type: 'time',
    unlock_value: { min_days: 3 },
    content: `Frost makes rounds. Not official ones — nobody assigned him a schedule — but every evening, between dinner and lights-out, he walks the barracks. Checking in. Not with a clipboard or a questionnaire. Just passing through, pausing at doorways, asking how someone's shoulder is doing, whether that cough cleared up, if the headaches stopped.

Most people don't notice the pattern. Spark does — she notices everything systematic. "You're screening us," she says, half-amused, half-impressed.

"I'm saying hello."

"You're checking for signs of strain, sleep deprivation, and injury concealment. You did it three times this week."

He looks at her with those tired eyes. "Can't it be both?"

It can. It is. The rounds continue. People start leaving their doors open in the evenings without quite knowing why.`,
  },

  {
    chapter_num: 5,
    tier: 'surface',
    title: 'Tromsø',
    unlock_type: 'missions',
    unlock_value: { min: 4 },
    content: `The story comes out in pieces, never from Frost himself. Others tell it — base personnel who were there, supply runners who saw the footage.

Tromsø, during the early incursion. A building collapsed on a forward aid station. Frost was inside — pinned under a beam, both legs trapped, still conscious. For forty minutes he talked a wounded soldier through a self-applied tourniquet while he couldn't move his own hands. The soldier lived.

Then Ironside came. Pulled him out. Carried him eight hundred meters through rubble and covering fire. Frost spent six weeks in recovery and was back on duty before the casts were fully off.

He doesn't talk about it. When someone brings up Tromsø, he redirects: "Hansen carried me. That's the story." As if his own forty minutes of calm instruction, pinned and bleeding, were a footnote.

Ironside doesn't correct the record either. But he checks Frost's kit personally before every mission. Every single one.`,
  },

  {
    chapter_num: 6,
    tier: 'surface',
    title: 'The Reckless One',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 3 },
    content: `Blaze comes back from a solo recon with a gash across his forearm that he's wrapped in a torn sleeve and electrical tape. "It's nothing," he says, grinning, already halfway to the showers.

Frost intercepts him in the corridor. Doesn't raise his voice. Doesn't lecture. Just stands in the way — quietly, immovably — and says, "Sit down."

"It's a scratch, Doc."

"Sit. Down."

Blaze sits. Frost unwraps the improvised bandage and finds a laceration that needed stitches twenty minutes ago. He cleans it, closes it, wraps it properly. His hands are gentle. His eyes are not.

"Next time, you come to me first. Before the tape. Before the shower. Before the story about how it's nothing." A pause. "Infections don't care about your pain tolerance."

Blaze opens his mouth for a joke. Something in Frost's expression closes it. He nods.

Frost adds a note to his personal records: Blaze — monitor. And underlines it twice.`,
  },

  {
    chapter_num: 7,
    tier: 'surface',
    title: 'Tea and Silence',
    unlock_type: 'time',
    unlock_value: { min_days: 6 },
    content: `Ghost brews her barley tea at 2100. Frost appears one evening with a tin of his own — black Russian tea, loose leaf, strong enough to stand a spoon in. He doesn't ask to join. He just fills the kettle after she's done, brews his own cup, and sits at the other end of the table.

They don't speak. For three nights running, they share the common area in complete silence, each with their own tea, their own thoughts, their own ghosts.

On the fourth night, Ghost sets a second mug on the table — empty, next to the kettle. An invitation. Frost fills it. They drink in parallel.

It becomes a thing. Not every night, but often enough. Two people who carry too many names sitting in the quiet, letting the steam rise, saying nothing because nothing needs to be said.

Titan joins sometimes. The table gets a little more crowded. The silence gets a little warmer.`,
  },

  {
    chapter_num: 8,
    tier: 'surface',
    title: 'Field Triage',
    unlock_type: 'missions',
    unlock_value: { min: 8 },
    content: `The mission goes sideways at the extraction point. Two wounded, one critical. Frost is on the critical case in seconds — hands moving, voice steady, the calm center of a situation that has everyone else shouting.

"Raven, hold pressure here. Don't let go. Ghost, I need light — there, yes. Ironside, the evac is three minutes out. I need those three minutes."

He gets them. The soldier lives. The other wounded gets patched in the back of the transport, Frost working with one hand while the vehicle lurches over broken road.

Afterward, in the infirmary, his hands shake. Just for a moment, when no one is looking. He presses them flat against the table until they stop, then washes the blood off with surgical precision.

Spark finds him an hour later, still in the infirmary, restocking the trauma kit. "You should sleep," she says.

"After this."

"Frost."

"After this." His voice is gentle. Final. He restocks the kit. Then he restocks it again, because the first time he miscounted the sutures, and he can't afford to miscount.`,
  },

  {
    chapter_num: 9,
    tier: 'surface',
    title: 'The Alien Names',
    unlock_type: 'missions',
    unlock_value: { min: 9 },
    content: `Spark asks about the symbols in his notebook — the ones that aren't Cyrillic or Arabic or English.

"They're names," Frost says. "Alien casualties. From the field hospitals during the first wave."

"You treated aliens?"

"I treated wounded. Some of them weren't human." He turns a page. "This one died on my table. Hemorrhagic shock — their circulatory system is different, but shock is shock. I didn't know the anatomy well enough. I tried anyway."

"Why write their names?"

"Because someone should remember they existed. They were dying, and they were afraid, and some of them reached for my hand the same way a person does." He closes the notebook. "I don't know if these are their real names. I wrote down the sounds they made. It was all I had."

Spark doesn't say anything for a while. Then: "You're a strange kind of soldier, Frost."

"I'm not a soldier. I'm a medic. The uniform is incidental."`,
  },

  {
    chapter_num: 10,
    tier: 'surface',
    title: 'The Anchor',
    unlock_type: 'missions',
    unlock_value: { min: 10 },
    is_achievement: true,
    achievement_name: 'Gentle Hands',
    achievement_desc: "Completed Frost's Surface tier — you've met the medic who carries too many names.",
    content: `After a brutal week — three missions in four days, casualties on two of them — the squad is fraying. Tempers short, sleep scarce, the weight of the war pressing down on everyone like a physical thing.

Frost moves through it the way he always does: quietly, steadily, with his medkit and his tired eyes. He stitches Viper's hand without comment. Checks Ironside's blood pressure without being asked. Leaves a packet of painkillers on Blaze's bunk with a note that says "Take two. Sleep eight." Brews tea with Ghost at 2100. Sits with Storm on the roof for twenty minutes, saying nothing, just being present.

He doesn't sleep. He should — he knows the signs, can diagnose exhaustion in others from across a room. But there are rounds to make, kits to restock, the notebook to update.

Raven finds him at 0300 in the infirmary, sitting on the floor with his back against the supply cabinet, eyes closed, the medkit in his lap like a child holding a blanket.

"Frost. Bed. Now."

He opens his eyes. They're red-rimmed, glassy, older than his face. "After—"

"Now. That's not a request."

He goes. Sleeps for eleven hours straight. When he wakes up, someone has restocked the trauma kit for him. He never finds out who.

The squad doesn't talk about what Frost does for them. They don't have to. He is the reason they keep going, and they know it the way you know the ground is under your feet — not because you think about it, but because it's always there.`,
  },

  // ── TIER: ROOTS (11-20) ──────────────────────────────────────────

  {
    chapter_num: 11,
    tier: 'roots',
    title: 'Three Zones',
    unlock_type: 'missions',
    unlock_value: { min: 12 },
    content: `The first was Chechnya. He was twenty-three, fresh out of military medical training, hands still soft. A field hospital in a school gymnasium, the blackboard still covered in math equations behind the triage station. He learned to operate by flashlight. He learned to prioritize — this one lives, this one waits, this one is beyond help. The math on the blackboard was simpler.

The second was Syria. Medecins Sans Frontieres, after he left the Russian military. A tent city outside Aleppo, the sound of artillery so constant it became white noise. He stopped flinching after the first week. He stopped sleeping after the second.

The third was South Sudan. Famine and conflict, a combination that produces wounds you can't stitch — the slow violence of starvation, the hollowed faces of children who will not survive the month. He stayed nine months. Lost fourteen kilograms. Started the notebook.

Three zones. Three languages of suffering. And then the aliens came, and he learned a fourth.`,
  },

  {
    chapter_num: 12,
    tier: 'roots',
    title: 'Why He Left',
    unlock_type: 'time',
    unlock_value: { min_days: 12 },
    content: `He left the Russian military because of a patient. A prisoner, technically — enemy combatant, zip-tied to a cot, shrapnel in his abdomen. Frost's commanding officer told him to triage the prisoner last. Behind the soldiers. Behind the civilians. Last.

"He'll die if I wait."

"Then he dies."

Frost operated anyway. At 0200, when the CO was asleep, with a nurse holding a penlight and his own hands doing work they'd never done unsupervised. The prisoner survived. Frost was transferred within the week — not disciplined, not officially, but moved to a supply depot where his surgical skills could rust in peace.

He resigned three months later. The discharge papers say "voluntary separation." What they mean is: he chose the patient over the order, and the system chose the order over him.

He's never regretted it. Not once. The prisoner's name is in the notebook. Not under the lost — under a different list, one he started later. The saved.`,
  },

  {
    chapter_num: 13,
    tier: 'roots',
    title: 'What Ironside Sees',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ironside', min_missions: 8 },
    content: `Ironside watches Frost the way a commander watches his most critical asset — not with suspicion, but with the careful attention of someone who knows what they can't afford to lose.

"You don't take care of yourself," Ironside says one evening, over the tactical maps. Not an observation — a concern.

"I'm fine."

"You've lost weight. You're sleeping four hours. You skipped breakfast twice this week."

"You're tracking my breakfast?"

"I'm tracking my medic. There's a difference." Ironside sets down his pencil. "In Tromsø, I carried you because you couldn't walk. If you run yourself into the ground, I can't carry you metaphorically. So eat breakfast. Sleep six hours. That's not a request."

Frost looks at him — really looks, past the command voice and the square jaw and the posture of authority — and sees what's underneath. Not an order. A debt. Ironside carried him out of Tromsø, and now he can't stop checking that Frost is still standing.

"I'll eat breakfast," Frost says.

"And the sleep?"

"I'll try."

It's the best Ironside is going to get. They both know it.`,
  },

  {
    chapter_num: 14,
    tier: 'roots',
    title: 'The Sound',
    unlock_type: 'missions',
    unlock_value: { min: 16 },
    content: `There's a sound that Frost hears in his sleep. Not the explosions, not the gunfire — those he's habituated to, filed under noise. It's the sound of someone breathing through a chest wound. Wet. Labored. Sucking. The sound a lung makes when it's compromised and the clock is running and the answer is in the kit if your hands can find it fast enough.

He hears it in dreams. He hears it in the white noise of the ventilation system at 0300. Sometimes in the mess hall someone laughs in a particular register — sharp, surprised — and Frost's hands move toward his kit before his conscious mind catches up. He has stopped apologizing for this. It's faster than thought and slower than necessary and he has learned to let it be what it is.

Storm notices. They're on the roof — their place, though neither would name it that way — and Frost's hand twitches at a sound from below. A generator cycling on. Nothing more.

"What do you hear?" Storm asks.

"Nothing. Just—" Frost stops. Looks at his hands. "Old sounds. From the tents."

Storm nods. He knows about old sounds. He carries the crackle of fire. The groan of a load-bearing beam going. The sound a building makes right before it decides to stop being a building. Two men who know their own sounds.

Neither of them says it gets better. Storm would know that was a lie, and Frost would know Storm knew. What they both know is this: you sit with it. You let it be in the room with you and you don't pretend it isn't there and eventually the night passes and the generator cycles off and the stars are exactly where they were.

It doesn't get better. It gets survivable. There is a difference.`,
  },

  {
    chapter_num: 15,
    tier: 'roots',
    title: 'Teaching Spark',
    unlock_type: 'missions',
    unlock_value: { min: 18 },
    content: `Spark wants to learn field medicine. Not the basics — everyone gets those — but the real thing. Triage. Trauma response. The decisions that happen in the first ninety seconds when someone is bleeding and the medic isn't there yet.

Frost teaches her in the infirmary after hours. Patient, thorough, starting with anatomy and working up to application. His teaching style is the opposite of a lecture — he puts tools in her hands and guides them, letting muscle memory build before theory.

"Why are you teaching me this?" she asks. "You're always there."

"I won't always be." He says it simply, without drama. "And if I'm the one bleeding, someone needs to know what to do."

Spark processes this. "That's... practical."

"That's medicine. You plan for the worst because the worst doesn't wait for you to be ready."

She learns quickly. She has good hands — steady, precise, the kind of hands that handle circuits and sutures with equal facility. Frost watches her practice a tourniquet and feels something he hasn't felt in a while: hope that his skills will outlive him.`,
  },

  {
    chapter_num: 16,
    tier: 'roots',
    title: 'Viper Opens',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'viper', min_missions: 8 },
    content: `Viper doesn't do vulnerability. It's not in his operational vocabulary. So when he shows up at the infirmary at 0200 with a dislocated finger he's been hiding for two days, Frost understands the significance.

"Didn't want to make a thing of it," Viper says.

Frost takes his hand. Examines the finger. It's swollen, purple, clearly agonizing. "You've been using this hand in the field. For two days."

"It's a finger."

"It's a digit you need for trigger discipline, grip strength, and not dying." He sets the joint with a quick, practiced motion that makes Viper hiss through his teeth. "Ice. Splint. Three days off the range."

"Two."

"Three." Frost wraps the splint. "And next time, come to me immediately. Not because it matters medically — because hiding injuries from your medic means I can't do my job. And my job is keeping you alive."

Viper looks at him. Something shifts behind the bravado — a flicker of the person underneath the callsign. "Yeah. Okay."

He comes back the next night. Not for the finger — that's healing fine. Just to sit in the infirmary for ten minutes, drinking the terrible coffee from the machine, not saying much. Frost doesn't comment on it. He just pours a second cup.`,
  },

  {
    chapter_num: 17,
    tier: 'roots',
    title: 'Letters He Doesn\'t Send',
    unlock_type: 'time',
    unlock_value: { min_days: 18 },
    content: `In the back of the notebook, behind the names, Frost writes letters. Short ones, in Russian, addressed to people who will never read them.

To his mother in Volgograd, who thinks he's working for an aid organization. To a nurse named Katya who held the penlight in Chechnya and kissed him once outside the gymnasium and never wrote back. To a boy in Aleppo whose name he never learned, who died holding a stuffed rabbit while Frost's hands were occupied with someone else.

He doesn't send them because they aren't for the recipients. They're for him. A way of talking to the past without expecting it to answer.

Ghost finds him writing one night — not reading over his shoulder, just observing from across the room. She recognizes the posture: someone performing an act of private grief with the discipline of routine.

She sets a cup of tea beside his elbow without a word. Frost wraps his hand around it. Keeps writing.

The tea goes cold. He drinks it anyway.`,
  },

  {
    chapter_num: 18,
    tier: 'roots',
    title: 'The Other List',
    unlock_type: 'streak',
    unlock_value: { min: 5 },
    content: `The notebook has two sections. The first is longer — the names of the lost, filling page after page in three alphabets and one alien script. But in the back, starting from the other direction, is a second list.

The saved.

It's shorter. The handwriting is the same, but the pressure is different — lighter, as if the pen were afraid to press too hard. The prisoner from Chechnya. A girl in Aleppo. Four soldiers in South Sudan. The recruit from the flash-bang. Ironside — Tromsø.

He adds to it after each mission. Not every name, just the ones where it was close. Where his hands were the difference between the notebook's front and its back.

Blaze catches him at it once. "What's that?"

"A list."

"Of what?"

Frost considers how to explain the arithmetic of a medic's life — the constant subtraction of the lost, the desperate addition of the saved. "Reasons to keep going," he says finally.

Blaze doesn't ask anything else. But the next morning, he shows up for breakfast on time, and Frost adds nothing to either list, which is the best kind of day.`,
  },

  {
    chapter_num: 19,
    tier: 'roots',
    title: 'Storm\'s Roof',
    unlock_type: 'missions',
    unlock_value: { min: 22 },
    content: `The roof becomes theirs — Frost and Storm, two quiet men sharing a view of the perimeter and whatever sits between silence and conversation.

Storm doesn't talk about the fire. Frost doesn't talk about the tents. They talk about everything else: the weather, the missions, the particular way Blaze eats pizza that suggests a profound lack of self-preservation instinct.

But underneath the small talk, something heavier circulates. The understanding that they both carry notebooks — literal and metaphorical — full of names that didn't have to be there. That they both lie awake listening to sounds that aren't real. That the distance between a good day and a bad one is measured in the number of times your hands shake before you can stop them.

"Do you think it gets better?" Storm asks one night.

Frost is quiet for a long time. "No," he says. "But you get better at carrying it."

Storm nods. They watch the perimeter lights track across the dark. Two men who can't save everyone, sitting with the weight of knowing it.`,
  },

  {
    chapter_num: 20,
    tier: 'roots',
    title: 'The Infirmary Light',
    unlock_type: 'missions',
    unlock_value: { min: 25 },
    is_achievement: true,
    achievement_name: 'Field Hospital',
    achievement_desc: "Completed Frost's Roots tier — the medic's past has come into focus.",
    content: `The infirmary light is always on. It's the first thing new arrivals notice and the last thing wounded soldiers see before the sedative takes hold — a warm, steady glow that means someone is awake, someone is ready, someone will come when you call.

Frost keeps it on. Not by policy — by choice. He sleeps in the infirmary more nights than his bunk, curled on the examination table or sitting upright in the chair with the medkit across his knees, drifting in and out of a half-sleep that lets him respond to the door in seconds.

"You're going to burn out," Raven tells him. She's brought him food — actual food, not the protein bars he subsists on during long shifts. "You can't be the only medic on the roster who never rests."

"I rest."

"You hibernate between emergencies. That's not the same thing."

He eats the food. It's good — better than the mess hall, which means Raven made it herself, which means she's more worried than she's letting on.

"The light stays on," he says.

"I'm not asking you to turn it off. I'm asking you to let someone else watch it sometimes."

He doesn't answer. But the next week, he starts training a second medic — a junior recruit with steady hands and a willingness to learn. The light stays on. Frost sleeps in his bunk one night out of three.

It's not enough. But it's a start.`,
  },

  // ── TIER: CRACKS (21-30) ──────────────────────────────────────────

  {
    chapter_num: 21,
    tier: 'cracks',
    title: 'Shaking',
    unlock_type: 'missions',
    unlock_value: { min: 28 },
    content: `The hands start shaking. Not during procedures — never during procedures, the training holds, the muscle memory locks in. But after. In the infirmary, alone, when the adrenaline drains and the quiet rushes in to fill the space.

He holds them up in front of his face. Studies them. These hands have closed wounds in three countries. These hands have felt the difference between a pulse and its absence ten thousand times. These hands held a dying alien and didn't let go.

Now they tremble like leaves.

He presses them flat on the table. Waits. They still. He washes them. They start again. He makes fists. Opens them. Closes them.

Ghost appears in the doorway. She looks at his hands, then at his face, and says nothing. She sits down across from him and places her own hands flat on the table — steady, controlled, a demonstration of presence.

They sit like that for ten minutes. Frost's hands stop shaking. Not because of any technique, but because someone saw and didn't look away.`,
  },

  {
    chapter_num: 22,
    tier: 'cracks',
    title: 'The One He Missed',
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_wounded' },
    content: `A soldier comes in with a wound Frost should have caught during the pre-mission check. A stress fracture, masked by adrenaline and bravado, that gave way under load during extraction. Not fatal — but it could have been. If the fracture had shifted two centimeters, the bone would have severed the artery.

Two centimeters. Frost measures the distance on the X-ray with his thumb and forefinger. The gap between alive and dead is the width of a finger.

He sits in the infirmary long after the patient is stable and rewrites his screening protocol from scratch. Adds three new checkpoints. Makes the physical assessment longer by four minutes.

Ironside finds him. "It wasn't your fault."

"I'm the medic. Everything that happens to their bodies is my fault."

"That's not sustainable."

"No," Frost agrees. "But it's the job."

He doesn't sleep that night. The notebook gains no new names — the soldier lived — but Frost adds the date to a margin, circled, a reminder. Two centimeters. Never again.`,
  },

  {
    chapter_num: 23,
    tier: 'cracks',
    title: 'Blaze in the Infirmary',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 10 },
    content: `Blaze comes in bad. Not the usual scrapes and bravado — real bad. Burns across his torso from an incendiary device, the kind of wound that makes seasoned medics flinch. Frost doesn't flinch. He works for an hour and forty minutes, hands steady, voice low, narrating each step to the semiconscious patient because that's what you do — you keep them with you, you give them something to hold onto besides the pain.

"Stay with me, Dmitri. I know — I know. This part is the worst. Almost done. Stay with me."

Blaze mumbles something. A joke, probably. Even half-conscious, even burning, he reaches for humor the way Frost reaches for gauze.

When it's done — cleaned, dressed, stabilized — Frost sits beside the cot and doesn't move. For three hours. His shift ended two hours ago. He doesn't move.

Storm comes to relieve him. "He's stable. Go sleep."

"In a minute."

"Frost."

"In a minute." His hand is resting near Blaze's wrist. Not holding it — just near. Close enough to feel the pulse without touching. Counting. Making sure.

He can't lose the reckless one. He can't add that name to the front of the notebook. He refuses.`,
  },

  {
    chapter_num: 24,
    tier: 'cracks',
    title: 'What He Doesn\'t Say',
    unlock_type: 'missions',
    unlock_value: { min: 32 },
    content: `There are things Frost doesn't tell the squad. That he hasn't had a full night's sleep since South Sudan. That the sound of breathing through a chest wound follows him through the corridors like a second heartbeat. That sometimes, in the mess hall, surrounded by living people, he sees the dead ones overlaid — transparent, accusing, patient.

He doesn't tell them because telling would make him a patient, and patients don't hold the kit. A medic who admits he's breaking is a medic who gets pulled from duty, and if he's pulled from duty, who restocks the trauma shelf at 0200? Who keeps the infirmary light on?

Raven suspects. She's intelligence — she suspects everything. But she doesn't press, because she can see the math Frost is doing: my wellbeing versus their survival. And the answer, for Frost, is always the same.

He adds another name to the notebook. Front section. Someone from a mission two weeks ago, a civilian he couldn't reach in time. He writes the name carefully, in English, and closes the book.

The back section grows too. But slower. Always slower.`,
  },

  {
    chapter_num: 25,
    tier: 'cracks',
    title: 'Aleppo',
    unlock_type: 'missions',
    unlock_value: { min: 35 },
    content: `He talks about Aleppo once. Just once, to Storm, on the roof, during a night when the shelling in the distance sounds close enough to be familiar.

"There was a girl. Seven, maybe eight. Both legs crushed — blast injury, she'd been near a wall when it came down. The tent was full. Every cot, every surface, every hand occupied. There were six critical patients and I was one medic."

Storm listens. Doesn't move. This is what Storm does: he stays.

"I triaged her as stable-critical. Not my worst case. She could wait. So I put her on the floor — on a blanket, not nothing, but the floor — and I told her to wait. She spoke Arabic. I don't know if she understood. She was seven."

The shelling continues in the distance. It sounds familiar because it is. That specific interval, that specific register.

"For four hours, while I worked, she watched. I could see her from every position in that tent. She didn't cry. She just watched me — not with accusation, nothing like that. Just watching. Like she understood that the situation was what it was and she had chosen to trust that it would resolve."

He stops. Starts again.

"When I finally got to her — four hours later, her legs had been crushed for four hours — she asked me, in Arabic: 'Are the others okay?'"

Frost's voice doesn't fracture. He has told this story to himself too many times for it to fracture anymore. That is not the same as being okay with it.

"She lived. I saved her legs. Both of them. She walked out of that tent." He looks at his hands. "Four hours on the floor. She was seven. Her first question was about the others."

Storm puts a hand on his shoulder. Frost lets it stay.

He has never stopped hearing it, that question, in the specific register of a seven-year-old who has been waiting four hours and still considers herself not the most important person in the room. He carries it the way you carry a thing that is both wound and instruction.

He has been trying to be worthy of it ever since.`,
  },

  {
    chapter_num: 26,
    tier: 'cracks',
    title: 'The Argument',
    unlock_type: 'missions',
    unlock_value: { min: 38 },
    content: `Frost and Ironside argue for the first time. In the briefing room, behind closed doors, voices raised enough that Raven pauses in the corridor.

"You're sending them into a structure with no medical support for the first breach."

"The medic position is at the extraction point. That's where you're most needed."

"The medic position is wherever people are bleeding, Erik. And people bleed at the breach, not the extract."

"The plan is set. You're at extraction."

Frost's voice drops — not softer, but colder. The quiet voice of a man who has watched too many people die from delays. "If someone goes down in that structure and I'm a hundred meters away, the survival window is four minutes. I can reach extraction in six. That's two minutes too many."

Ironside stares at him. The commander instinct wars with the memory of Tromsø — carrying Frost's broken body, the weight of it, the promise.

"Modified plan," Ironside says finally. "You're at the breach. Spark covers extraction with the secondary kit."

"Thank you."

"Don't thank me. Just don't get killed in there."

Frost nods. Picks up his kit. The argument is over, but something has shifted — the acknowledgment that care and strategy aren't always the same thing, and that the man closest to death should have the loudest voice in the room.`,
  },

  {
    chapter_num: 27,
    tier: 'cracks',
    title: 'Names in Alien Script',
    unlock_type: 'missions',
    unlock_value: { min: 40 },
    content: `The alien casualties increase. Not just combatants — civilians, refugees, beings caught between their own kind's war machines and humanity's fear. Frost treats them when he can. When the base allows it, which is rarely. When the opportunity arises in the field, which is always chaos.

He learns their anatomy from necessity. Two hearts. Copper-based blood. A nervous system that runs hotter than a human's. The pain responses are different — they don't scream, they vibrate, a subsonic hum that Frost feels in his fillings.

He writes their names in the notebook. The sounds they make when he asks, transcribed phonetically, his best approximation of syllables that human vocal cords can't produce.

"You're going to run out of pages," Ghost says. She's watching him write after a field operation where he treated three aliens behind a collapsed wall while the squad held the perimeter.

"Then I'll get another notebook."

"That's not what I meant."

He knows what she meant. The weight of the names. The impossibility of carrying them all. He keeps writing anyway. Because the alternative — to stop counting, to let the dead become numbers instead of names — is a kind of death he isn't willing to die.`,
  },

  {
    chapter_num: 28,
    tier: 'cracks',
    title: 'Breaking Point',
    unlock_type: 'event',
    unlock_value: { event_type: 'soldier_kia' },
    content: `They lose someone. Frost is there — hands in the wound, voice steady, doing everything right, everything by the book, everything his training and his talent and his three conflict zones prepared him for.

It isn't enough.

The moment between alive and dead is not dramatic. There's no final word, no meaningful look, no Hollywood gasp. Just a pulse that was there and then isn't. A body that was a person and then is weight. Frost keeps working for ninety seconds after the death because stopping is admitting and admitting is breaking and he cannot break right now, not with people watching, not with the squad depending on him.

He stops. Sits back. Says "Time of death" and the numbers, and his voice doesn't crack because it isn't allowed to.

Later — much later, in the infirmary, alone, with the light on and the door closed — he opens the notebook. Writes the name. Puts down the pen.

Picks up his hands. They're shaking again. He can't make them stop. He doesn't try. He just sits in the warm light of the infirmary and lets them shake, and for the first time since Aleppo, he cries.

Not for long. Not loudly. But completely.`,
  },

  {
    chapter_num: 29,
    tier: 'cracks',
    title: 'Frost\'s Diagnosis',
    unlock_type: 'missions',
    unlock_value: { min: 45 },
    content: `He knows the diagnosis. He's a doctor — he can read his own symptoms the way he reads anyone else's. Compassion fatigue. Vicarious trauma. The clinical terms are tidy, academic, and completely inadequate for the experience of carrying a notebook full of dead people's names while pretending your hands don't shake.

He should report it. Protocol says report it. Ethics says report it. The medic who diagnosed a hundred cases of PTSD in others can diagnose it in himself and should, by every professional standard, step back.

He doesn't step back. Because the infirmary light stays on because he keeps it on. Because Blaze will hurt himself again and someone needs to be ready. Because Ironside checks his kit personally and would notice if it wasn't there. Because the notebook still has blank pages in the back, and the saved list is growing, and as long as it's growing he can justify the cost.

"You need help," he writes in the margin of a letter he won't send. "You need help. You need help."

He closes the notebook. Opens the medkit. Checks the sutures. The gauze. The morphine.

The light stays on.`,
  },

  {
    chapter_num: 30,
    tier: 'cracks',
    title: 'The Weight',
    unlock_type: 'missions',
    unlock_value: { min: 48 },
    is_achievement: true,
    achievement_name: 'Compassion Fatigue',
    achievement_desc: "Completed Frost's Cracks tier — the healer is carrying more than anyone should.",
    content: `Ironside finds him on the floor of the infirmary again. Not sleeping this time — just sitting, back against the cabinet, medkit in his lap, staring at the opposite wall with an expression that Ironside has seen before. In mirrors. In the eyes of soldiers who have given everything and been asked for more.

"Alexei."

First name. That gets Frost's attention. Nobody uses his first name.

"When's the last time someone took care of you?"

"I don't—"

"Not the medic. Not Frost. You. Alexei. When's the last time someone looked after you?"

The question lands like a diagnosis. Frost opens his mouth, and what comes out isn't an answer but a sound — small, surprised, as if the question itself has found a wound he didn't know was there.

Ironside sits down beside him. On the floor, back against the cabinet, shoulder to shoulder. The commander of UNOPCOM, sitting on a cold floor next to his medic, because that's where his medic is and he's not leaving.

"I can't stop," Frost says. "If I stop, someone—"

"If you break, everyone suffers. Including the people you're trying to save."

"I know. I know the math."

"Then do the math, Alexei. Take care of the medic so the medic can take care of us."

Frost leans his head back against the cabinet. Closes his eyes. His hands rest on the medkit, still and steady for the first time in weeks.

"I don't know how to be the patient," he says.

"I know," Ironside says. "We'll figure it out."

They sit on the floor until dawn. The infirmary light stays on.`,
  },

  // ── TIER: SECRETS (31-40) ─────────────────────────────────────────

  {
    chapter_num: 31,
    tier: 'secrets',
    title: 'The Triage',
    unlock_type: 'missions',
    unlock_value: { min: 50 },
    content: `His last deployment before UNOPCOM. A border crossing overwhelmed by the incursion. Casualties pouring in faster than the tent could hold them. Three critical patients, one medic, one table.

Two adults — a man and a woman, married, both with survivable wounds if treated within the hour. And a child. A girl, maybe four years old, with internal injuries that would require surgery he wasn't equipped to perform. A hospital could save her. He was not a hospital.

He did the math. Two survivable cases against one that required resources he didn't have. The triage protocol — the same protocol he'd followed in Chechnya, in Syria, in South Sudan — said: treat the survivable first. Maximize lives saved. The math is the math.

He saved the two adults. They lived. They walked out of the tent the next morning.

The girl died at 0347. Alone, on a cot in the corner, while Frost's hands were inside someone else's chest cavity. He heard the monitor flatline and couldn't turn around.

He has never spoken about it. Not to the debrief officer. Not to his colleagues. Not to the notebook — because her name is not in the notebook. She is the only name missing.

He doesn't know her name.`,
  },

  {
    chapter_num: 32,
    tier: 'secrets',
    title: 'The Empty Page',
    unlock_type: 'time',
    unlock_value: { min_days: 40 },
    content: `There is a page in the notebook that is blank. Between the last name from the border crossing and the first alien casualty, a single empty page. No one has ever asked about it. Frost has never explained it.

The page is for the girl. The four-year-old whose name he doesn't know. He left it blank because writing "unknown" felt like a second abandonment — as if not knowing her name was itself a failure, and recording that failure would make it permanent.

He has tried to find her name. Through aid organization records, hospital logs, refugee lists. The border crossing was chaos — records are incomplete, identities scrambled, the dead documented with the bureaucratic indifference of a system overwhelmed.

She remains unnamed. The page remains blank. And every time Frost opens the notebook, he passes over it — a white space in a sea of ink, louder than any name he's ever written.

Ghost notices the page. She notices everything. She doesn't ask about it. She knows what empty pages mean.`,
  },

  {
    chapter_num: 33,
    tier: 'secrets',
    title: 'The Math',
    unlock_type: 'missions',
    unlock_value: { min: 54 },
    content: `Two is greater than one. That's the math. Every triage manual, every ethics course, every field hospital protocol says the same thing: when resources are limited, you save the most lives possible. You don't waste a table on a case you can't win when there are cases you can.

Frost knows this. He taught this. In three conflict zones, he made variations of this decision dozens of times — prioritizing, sorting, the terrible algebra of who lives and who waits.

But at 0347, when the monitor flatlined and he couldn't turn around, the math stopped working. Because the girl on the cot was four years old and she died alone and the math doesn't account for that. The math doesn't account for the stuffed rabbit she was holding when they brought her in. The math doesn't account for the way she looked at him — not accusingly, not angrily, just looked, with the perfect trust of a child who believes that the doctor will fix it.

He didn't fix it. He chose not to fix it. He chose two over one, and the one was four years old, and the math was correct, and the math was monstrous.

He carries both truths. He made the right call. He will never forgive himself for it.`,
  },

  {
    chapter_num: 34,
    tier: 'secrets',
    title: 'Telling Storm',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'storm', min_missions: 15 },
    content: `The roof. Late. The kind of dark that swallows confession.

Frost tells Storm. Not all of it — just the shape. A child. A triage decision. A flatline he couldn't turn around for.

Storm listens the way Storm always listens — completely, without interruption, with the stillness of a man who knows what it costs to say things out loud.

When Frost finishes, the silence stretches. Then Storm says: "How old?"

"Four. Maybe."

"Maybe?"

"I don't know her name. I don't know her exact age. I don't know anything about her except that she died on my watch because I chose someone else."

Storm nods slowly. "I know a man who couldn't go back into a burning building. And a child died because of that, too." A pause. "We're not the same. But we're in the same neighborhood."

Frost looks at him. "Does it get quieter?"

"The fire doesn't. But the rest of it — the noise in your head — that depends on what you do with it."

"What did you do?"

"Started counting the ones I saved. Not to balance the books — you can't balance books like these. But to prove that the failure wasn't the whole story."

Frost opens the notebook. Shows Storm the back section. The saved list.

Storm reads it. Nods. "It's longer than you think," he says.

"It's never long enough."

"No. But it's growing. That counts."`,
  },

  {
    chapter_num: 35,
    tier: 'secrets',
    title: 'The Rabbit',
    unlock_type: 'missions',
    unlock_value: { min: 58 },
    content: `He dreams about the rabbit. Not the girl — the stuffed rabbit she was holding. Grey, with one ear bent, the kind of toy that has been loved past its original shape into something softer. He took it from her hand after. Put it on the supply shelf because he didn't know what else to do with it. He doesn't know what happened to it after that.

The rabbit appears in his dreams as a fixed point, immovable while everything else shifts. The tent changes, the patients change, the war changes. The rabbit stays on the shelf, one ear bent, watching him work.

He tells no one about the dreams. They are his — the last private thing he has, the place where guilt takes a shape he can hold and examine.

Spark finds him drawing one morning. Not writing — drawing. A small sketch in the margin of the notebook. A rabbit with one bent ear.

"Cute," she says. "Didn't know you drew."

"I don't," he says, and closes the book.`,
  },

  {
    chapter_num: 36,
    tier: 'secrets',
    title: 'Ironside Understands',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ironside', min_missions: 20 },
    content: `Ironside comes to the infirmary. Sits in the chair. Says: "I need to tell you something, and then you need to tell me something."

He tells Frost about the valley. About step seven, the 2.8 seconds, the choice he made. Frost already knows — Ironside told him in the watchtower — but this time is different. This time, Ironside tells it as context.

"I skipped a step and killed three soldiers. That's my triage. I chose speed over certainty, and the cost was three lives." He looks at Frost. "Now tell me yours."

Frost tells him. All of it. The border crossing. The math. The girl. The flatline at 0347. The blank page.

Ironside listens. When it's over, he says: "The protocol said two over one."

"Yes."

"You followed the protocol."

"Yes."

"And you've been punishing yourself for following the protocol that exists specifically to make that decision bearable."

Frost's jaw tightens. "It wasn't bearable."

"No. It wasn't." Ironside leans forward. "But you didn't fail, Alexei. You did the thing that triage requires — you chose who lived. The failure would have been freezing. The failure would have been trying to save everyone and losing all three."

"You sound like a textbook."

"I sound like a man who skipped step seven. I know what it looks like to carry a decision that was wrong. Yours wasn't wrong. It was impossible. And you made it anyway, and two people walked out of your tent alive."

Frost says nothing. But something in his posture shifts — not relief, not absolution, but the microscopic realignment that happens when a weight is shared.`,
  },

  {
    chapter_num: 37,
    tier: 'secrets',
    title: 'The Ghost Beside Him',
    unlock_type: 'streak',
    unlock_value: { min: 12 },
    content: `Ghost knows. She has known for weeks — not the details, but the shape of it. She reads people the way she reads intercepted transmissions: patterns, gaps, the things that aren't said.

She comes to the infirmary. Sits on the examination table. Says nothing for five minutes.

"You lost a child," she says.

Frost goes still.

"You don't have to tell me. But I want you to know that I see it. The way you watch the young ones — Spark, Blaze. The way your hands tighten when a call comes in and there's a civilian report. The way you keep that one page blank."

"You saw the page."

"I saw you skip it. Every time you open the notebook, you skip one page. That's not a gap — it's a grave."

Frost sits down. The infirmary is quiet. The light is on.

"I couldn't save her."

"No."

"I chose two others."

"Yes."

"The math was right."

"The math was right." Ghost's voice is steady, certain, the voice of someone who has made her own impossible calculations. "The math was right, and the cost was unbearable, and both of those things are true at the same time."

Frost looks at her. "How do you carry both?"

"The same way you do. One day at a time. One name at a time."

She reaches across and places her hand over his — lightly, briefly, the contact of someone who understands that touch can be medicine too.

Then she leaves. The infirmary light stays on. Frost opens the notebook to the blank page and sits with it, not writing, just sitting. Keeping vigil for a name he'll never know.`,
  },

  {
    chapter_num: 38,
    tier: 'secrets',
    title: 'The Four-Year-Old\'s Face',
    unlock_type: 'missions',
    unlock_value: { min: 64 },
    content: `He can't remember her face. This is the thing that terrifies him more than the decision itself — that the girl whose death he carries has become an abstraction. Brown hair, maybe. Dark eyes, probably. Small hands wrapped around a grey rabbit. But the face — the specific, particular, unrepeatable face of a four-year-old human being — is gone.

He tries to reconstruct it. In the quiet hours, between rounds, he closes his eyes and reaches for the memory. But memory is not a photograph. It degrades. It rewrites itself. The girl in his mind is a composite now — part Aleppo, part South Sudan, part every child he's ever treated, their features blurring into a single representative face that belongs to no one.

He is horrified by this. The notebook exists precisely to prevent the dead from becoming abstractions. And yet the one death that matters most — the one he carries in an empty page — has lost its face.

He draws the rabbit again. In the margin. The bent ear. The soft grey body. He can remember the rabbit perfectly. Every detail. The toy is more real to him than the child who held it.

This is the cruelty of memory, and he adds it to the weight he carries: the girl is gone twice now. Once from the world, and once from his mind.`,
  },

  {
    chapter_num: 39,
    tier: 'secrets',
    title: 'The Name',
    unlock_type: 'missions',
    unlock_value: { min: 70 },
    content: `Spark finds it. Not because she was looking — because she's Spark, and data is her element, and she noticed Frost searching aid organization databases during off-hours and decided to help without being asked.

She comes to the infirmary with a printout. One page. A refugee registration from the border crossing, recovered from a backup server that was offline for months.

"Lina," Spark says. "Her name was Lina Koval. She was four years and three months old."

Frost takes the printout. His hands are steady — perfectly steady, the way they always are when it matters most.

Lina Koval. Four years, three months. Brown hair. Brown eyes. Registered with her grandmother, who died en route. No other family located.

He reads it three times. Then he picks up his pen, opens the notebook to the blank page, and writes:

Lina Koval, 4.

He stares at the name for a long time. The page is no longer blank. The grave has a headstone.

"Thank you," he says to Spark. His voice is level. His eyes are not.

Spark nods. Leaves quietly. She understands — as much as anyone can — that some gifts are too heavy for ceremony.`,
  },

  {
    chapter_num: 40,
    tier: 'secrets',
    title: 'The Vigil',
    unlock_type: 'missions',
    unlock_value: { min: 74 },
    is_achievement: true,
    achievement_name: 'Lina Koval',
    achievement_desc: "Completed Frost's Secrets tier — the empty page has a name.",
    content: `He stays up all night. Not in the infirmary — on the roof, Storm's roof, alone. The notebook open in his lap to the page that now reads: Lina Koval, 4.

He talks to her. Quietly, in Russian, the way he talks to patients — the steady, gentle narration that keeps people present. He tells her about UNOPCOM. About the squad. About the saved list growing in the back of the notebook. He tells her about Ironside, who carried him out of Tromsø. About Ghost, who understands empty pages. About Storm, who sits on this roof and watches the dark. About Blaze, who is reckless and alive and young and alive and he said alive twice because it matters.

"I chose two people over you," he says. "The math said two is greater than one. The math was right. You deserved better than math."

The stars don't answer. The perimeter lights sweep the dark. Somewhere below, the infirmary light is on — the junior medic is watching it tonight.

"I will carry your name. I will carry it carefully. And I will keep adding to the other list — the saved — because that is the only answer I have to the question of whether the math was worth it."

He closes the notebook. Puts it in his breast pocket. Goes downstairs to the infirmary and checks the supplies and brews a cup of tea and sits in the warm light, and the weight is still there — all of it, every name, every face he can and can't remember — but it has shifted.

Not lighter. Shared. With the living. With the dead. With a four-year-old girl who finally has her name back.`,
  },

  // ── TIER: LEGACY (41-50) ──────────────────────────────────────────

  {
    chapter_num: 41,
    tier: 'legacy',
    title: 'Learning to Rest',
    unlock_type: 'missions',
    unlock_value: { min: 72 },
    content: `He sleeps in his bunk three nights a week now. Not easily — the habit of sleeping in the infirmary is years deep — but deliberately. Ironside's order, Raven's insistence, his own reluctant acknowledgment that a medic running on four hours of sleep is a liability, not an asset.

He eats breakfast. He runs with Ghost in the mornings, matching her pace along the perimeter, their footfalls a quiet rhythm against the gravel. He brews tea at 2100 and sits with whoever shows up.

The hands still shake sometimes. After bad missions, after losses, in the quiet hours when the infirmary is empty and the ghosts are loud. But he's learned to sit with the shaking instead of fighting it. To let it pass. To trust that steady will return.

"You look better," Blaze says one morning, with the bluntness of someone who has never learned tact.

"I look like a man who slept six hours."

"Same thing."

Frost almost smiles. Almost.`,
  },

  {
    chapter_num: 42,
    tier: 'legacy',
    title: 'The Second Notebook',
    unlock_type: 'rank',
    unlock_value: { min: 6 },
    content: `The notebook fills up. Every page covered — the lost, the saved, the letters, the margins full of dates and reminders and a small drawing of a rabbit with one bent ear.

He buys a second one. Same size, different color. He transfers the active information — current squad health, medication schedules, the screening protocols. But the names stay in the first book. All of them.

In the new notebook, he starts a different section. Not the lost and the saved. Something else: the taught.

Spark, who can now apply a tourniquet in under thirty seconds. The junior medic, who ran the infirmary alone for the first time last week. Blaze, who finally — finally — comes to the infirmary before the electrical tape. Raven, who can stabilize a chest wound well enough to buy time.

The list is short. But it's a different kind of list. Not people he kept alive — people he gave the ability to keep others alive. The mathematics of multiplication: his hands, multiplied.

He puts the old notebook in his footlocker. Picks up the new one. Continues.`,
  },

  {
    chapter_num: 43,
    tier: 'legacy',
    title: 'Viper\'s Trust',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'viper', min_missions: 20 },
    content: `Viper comes to the infirmary. Not at 0200, not hiding, not with an injury he's been sitting on for days. At a reasonable hour, walking through the front door, saying: "My back's been tight. Can you look at it?"

Frost looks at him. This is new. This is Viper asking for help before the help becomes an emergency. This is trust.

He checks the back. Muscle strain, nothing serious, the kind of thing that happens when you're carrying heavy loads in combat and refusing to acknowledge that your body has limits. He works on it — careful pressure, a stretching protocol, instructions that Viper will probably half-follow.

"Three days, light duty," Frost says.

"Two."

"Three." A pause. Then, softly: "You came in early this time."

Viper shrugs. "Figured I'd try it your way. Before the tape and the shower and the story about how it's nothing."

Frost nods. Doesn't smile — Viper would recoil from anything that looked like approval. But something in his chest eases, the way it eases every time someone chooses the infirmary over the bravado.

"Same time tomorrow for the follow-up," he says.

Viper nods. Leaves. Comes back the next day, and the day after. Trust, it turns out, is a muscle too. It gets stronger with use.`,
  },

  {
    chapter_num: 44,
    tier: 'legacy',
    title: 'Ghost\'s Gift',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'ghost', min_missions: 20 },
    content: `Ghost gives him something. A small object, wrapped in cloth, placed on his desk in the infirmary without ceremony or explanation.

He unwraps it. A figurine — hand-carved, wooden, simple. A rabbit with one bent ear.

He looks at it for a long time. Picks it up. Turns it over. The wood is smooth, recently carved, the kind of careful work that takes hours and patience and hands that are steady enough to operate a rifle at three hundred meters.

Ghost is gone by the time he looks up. She doesn't do conversations about gifts. The object speaks for itself: I saw. I understood. Here is something to hold that isn't grief.

He puts the rabbit on the shelf above the infirmary desk. Next to the medkit, next to the notebooks, next to the tools of his trade. A small wooden rabbit with one bent ear, watching over the warm room where the light stays on.

He doesn't cry. But he sits with the rabbit for a long time, holding it the way a child might, turning it over in his gentle hands, and the weight in his chest shifts into something that might — in the right light, from the right angle — be called peace.`,
  },

  {
    chapter_num: 45,
    tier: 'legacy',
    title: 'Teaching the Math',
    unlock_type: 'missions',
    unlock_value: { min: 80 },
    content: `He teaches triage to the squad. Not just the mechanics — the ethics. The terrible math that every field medic carries and no manual prepares you for.

"Two is greater than one," he says, standing at the whiteboard in the briefing room, the medkit at his feet like it always is. "That's the protocol. Maximize lives saved. It's simple. It's correct. And it will break your heart."

The room is quiet.

"You will make decisions that save lives and cost lives in the same breath. You will choose who gets the table and who gets the cot in the corner. And afterward, you will do the math again and again and it will always come out the same, and it will never feel right."

He pauses. Looks at the faces. Ironside, who knows about impossible decisions. Storm, who knows about impossible losses. Ghost, who knows about impossible choices.

"But you make the call anyway. Because not making it costs more. Hesitation kills more people than the wrong choice." He picks up the medkit. "And then you write the names. All of them. The saved and the lost. Because they deserve to be remembered, and you deserve to remember."

Spark raises her hand. "What if you can't live with the math?"

Frost considers this. "Then you find someone who will sit with you while you learn how. That's what this team is for."`,
  },

  {
    chapter_num: 46,
    tier: 'legacy',
    title: 'The Anchor',
    unlock_type: 'streak',
    unlock_value: { min: 18 },
    content: `Raven calls him the anchor. Not to his face — she says it to Ironside in the briefing room, thinking Frost has left. He hasn't. He's in the corridor, restocking the hallway medical station, and he hears it.

"He's the anchor, Erik. Not you, not me. Frost. Every person on this team calibrates their sense of safety by whether the medic is present and functional. When he's steady, they're steady. When he's shaking, they know something is wrong."

"He knows that."

"Does he? Because he still acts like he's replaceable. Like anyone could keep the light on."

Frost stands in the corridor with a box of bandages and hears himself described in terms he has never used. Anchor. Irreplaceable. The person who makes everyone else feel safe.

He puts the bandages away. Goes back to the infirmary. Sits in the chair. Looks at the room — the organized shelves, the clean instruments, the wooden rabbit on the shelf, the light that is always on.

Not a burden. A purpose. The same work he's always done, seen from a different angle. Not "I can't stop because someone will die" but "I keep going because someone will live."

The distinction is everything.`,
  },

  {
    chapter_num: 47,
    tier: 'legacy',
    title: 'The Saved List',
    unlock_type: 'missions',
    unlock_value: { min: 88 },
    content: `He counts them. In the quiet of the infirmary, late at night, he goes through both notebooks and counts every name in the saved section.

The number surprises him. Not because it's large — though it is — but because he's never counted before. He's always known the lost number. He could recite it from memory. But the saved were always "fewer," always "not enough," always the smaller side of an unbalanced equation.

They're not smaller. Not anymore.

The saved list is longer than the lost.

He sits with this. Turns it over, tests it for truth, checks the math twice the way Ironside checks everything twice. The numbers hold. More names in the back than the front. More lives preserved than lost.

It doesn't cancel anything. Lina Koval is still on her page. The names from Chechnya and Aleppo and South Sudan are still in their ink. The lost remain lost.

But the living outnumber the dead in his notebook, and that is a fact he has earned with his hands, and for the first time, the weight feels less like punishment and more like evidence. Evidence that the math — the terrible, heartbreaking, necessary math — was worth following.`,
  },

  {
    chapter_num: 48,
    tier: 'legacy',
    title: 'Blaze Returns',
    unlock_type: 'relationship',
    unlock_value: { with_template: 'blaze', min_missions: 25 },
    content: `Blaze comes to the infirmary. Not hurt — just there. Sits on the cot, swinging his legs, eating an apple.

"What are you doing?" Frost asks.

"Visiting."

"I'm not a tourist attraction."

"No, you're the guy who sat beside me for three hours when I was burned and thought I was going to die. You're the guy who said 'stay with me' and meant it. You're the guy who keeps the light on." Blaze takes a bite of the apple. "So I'm visiting."

Frost looks at him. The burns have healed — scars remain, pale lines across his torso that he wears without complaint. He's still reckless. He still reaches for the joke before the bandage. But he comes to the infirmary now. Before the tape, before the shower.

"Brought you something," Blaze says. Tosses a protein bar onto the desk. "Noticed you skip lunch when it's busy."

"I don't skip—"

"You skip lunch. Spark counts." He grins. "We all watch you, Frost. You think you're the only one who makes rounds?"

Frost picks up the protein bar. Turns it over. Looks at Blaze — reckless, alive, scarred, grinning, alive — and the back of the notebook gains another kind of entry. Not a name. Just a feeling. The feeling of being cared for in return.

"Thank you," he says. And means it more than Blaze will ever know.`,
  },

  {
    chapter_num: 49,
    tier: 'legacy',
    title: 'Lina\'s Page',
    unlock_type: 'missions',
    unlock_value: { min: 95 },
    content: `He opens the old notebook one last time. Turns to Lina's page. The name is there — Lina Koval, 4 — in his careful handwriting, alone on the paper that was blank for so long.

He adds to it. Not much. Just a few lines, in Russian, in the small script he uses for the letters he doesn't send:

"You deserved more than math. You deserved a hospital and a surgeon and a hundred medics with a hundred tables. You deserved time. I didn't have it. I'm sorry. I will always be sorry.

But I want you to know that the two people I saved that night — they lived. They had time. And I have used every day since to earn the time you didn't get."

He draws the rabbit one more time. Small, in the corner. One bent ear. Then he closes the notebook and puts it away.

The wooden rabbit on the shelf watches the infirmary with its carved eyes. The light is on. The light is always on.

On the desk, the new notebook is open. The saved list has a new entry from today's mission. Frost picks up the pen. Writes the name. Keeps writing.`,
  },

  {
    chapter_num: 50,
    tier: 'legacy',
    title: 'The Light Stays On',
    unlock_type: 'missions',
    unlock_value: { min: 100 },
    is_achievement: true,
    achievement_name: 'The Medic',
    achievement_desc: "Completed Frost's full story — Alexei Petrov learned that the saved list can be longer than the lost.",
    content: `Morning. The infirmary. The light is on — it's always on — and Frost is there, medkit open, restocking gauze with the precise, unhurried movements of hands that have done this ten thousand times.

The squad filters through. Not because they're hurt — because the infirmary has become what Frost has always been: the place you go when you need to know that someone is watching, someone is ready, someone will come when you call.

Ghost sits by the window with her tea, reading a file. Ironside stops in the doorway, checks that Frost is there — a habit, years old, born in Tromsø — and nods. Blaze drops off a protein bar and steals a bandage for a scraped knuckle he could have handled himself. Viper appears, gets his back checked, leaves without the usual argument about light duty. Storm passes by and catches Frost's eye through the window, a nod from the corridor, their private language of shared weight.

The wooden rabbit sits on the shelf. The old notebook rests in the footlocker. The new one is on the desk, open, the saved list growing.

Frost finishes restocking. Washes his hands. Sits in the chair and looks at his infirmary — the organized shelves, the clean instruments, the warm light, the evidence of a life spent choosing to care in a world that makes caring dangerous.

His hands are steady.

They won't always be. There will be more names, more losses, more nights when the shaking comes and the ghosts are loud and the math feels monstrous. But the list in the back is longer than the list in the front, and the people who pass through this room are alive because of these hands, and that is not redemption — redemption is too clean a word for what he's earned — but it is enough.

The infirmary light stays on. Frost picks up his medkit, checks the clasps, and waits. Not for the worst. For the next person who needs him.

He'll be ready. He always is.`,
  },
];

// ── Reactions ─────────────────────────────────────────────────────────

const reactions = [
  {
    event_type: 'mission_complete',
    text: 'Frost counts heads as the squad files in. All present. He exhales once — quiet, controlled — and opens the medkit. "Anyone hurt? And I mean actually hurt, not Blaze-hurt."',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: 'Frost sits in the infirmary with the notebook open and writes the name in careful letters. His hands don\'t shake — not yet. That comes later, when the light is on and no one is watching.',
    priority: 2,
  },
  {
    event_type: 'soldier_wounded',
    text: 'Frost is already moving. Medkit open, hands steady, voice low and sure: "Look at me. Keep looking at me. I\'ve got you."',
    priority: 2,
  },
  {
    event_type: 'territory_lost',
    text: 'Frost restocks the trauma kits without being asked. Doubles the field supplies. Checks the infirmary light. When territory shrinks, the casualties grow. He\'ll be ready.',
    priority: 1,
  },
  {
    event_type: 'territory_defended',
    text: 'Frost allows himself a cup of tea. The good stuff — the black Russian loose-leaf he saves for when everyone comes home. He brews it slowly, carefully, like a man who has learned to notice the good days.',
    priority: 1,
  },
  {
    event_type: 'streak_milestone',
    text: '"Consistency means fewer names in the front of the notebook." Frost says it quietly, almost to himself. Then he checks the saved list. It grew again.',
    priority: 1,
  },
  {
    event_type: 'rank_up',
    text: 'Frost nods at the promotion notice and goes back to restocking. Rank changes the insignia, not the work. The work is the same — keep them alive, keep the light on.',
    priority: 1,
  },
  {
    event_type: 'soldier_kia',
    text: 'The infirmary light stays on all night. Frost doesn\'t sleep. In the morning, the trauma kits are restocked, the supplies recounted, the notebook updated. He makes his rounds. He always makes his rounds.',
    priority: 0,
  },
];

// ── Relationships ─────────────────────────────────────────────────────

const relationships = [
  {
    char_a: 'frost',
    char_b: 'blaze',
    rel_type: 'bond',
    description: 'Frost worries about Blaze the way a medic worries about his most reckless patient — constantly, specifically, with the quiet certainty that the next injury is already forming. Blaze makes him tired. Blaze also makes him hopeful. Both things are true.',
  },
  {
    char_a: 'frost',
    char_b: 'storm',
    rel_type: 'bond',
    description: 'Rooftop companions. Both carry notebooks of loss, both lie awake with sounds that aren\'t real, both know that "it gets better" is a lie but "you get better at carrying it" is the truth. Their silence is the most honest conversation either has.',
  },
  {
    char_a: 'frost',
    char_b: 'razor',
    rel_type: 'bond',
    description: 'Razor operates where the margin for error is zero. Frost understands that better than anyone — it\'s the same margin he works in. A quiet professional respect, and the unspoken agreement that neither will be the reason the other fails.',
  },
  {
    char_a: 'frost',
    char_b: 'titan',
    rel_type: 'bond',
    description: 'Two people the team leans on without thinking about it. Frost keeps them alive; Titan keeps them standing. They have noticed this about each other and found it quietly comforting.',
  },
];

module.exports = { template, chapters, reactions, relationships };
