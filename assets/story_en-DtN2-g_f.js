var e={inkVersion:21,root:[[`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,{"->":`ch00`},[`done`,{"#f":5,"#n":`g-0`}],null],`done`,{add_alert:[{"temp=":`n`},`ev`,{"VAR?":`alert`},{"VAR?":`n`},{"f()":`alert_gain`},`+`,`/ev`,{"VAR=":`alert`,re:!0},`
`,`ev`,{"VAR?":`alert`},100,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,100,`/ev`,{"VAR=":`alert`,re:!0},{"->":`.^.^.^.15`},null]}],`nop`,`
`,`ev`,{"VAR?":`alert`},0,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,0,`/ev`,{"VAR=":`alert`,re:!0},{"->":`.^.^.^.23`},null]}],`nop`,`
`,{"#f":1}],alert_gain:[{"temp=":`n`},`ev`,{"VAR?":`n`},0,`>`,{"VAR?":`difficulty`},0,`==`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},70,`*`,50,`+`,100,`/`,`/ev`,`~ret`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`ev`,{"VAR?":`n`},0,`>`,{"VAR?":`difficulty`},1,`==`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},88,`*`,50,`+`,100,`/`,`/ev`,`~ret`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,`ev`,{"VAR?":`n`},0,`>`,{"VAR?":`difficulty`},2,`==`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},89,`*`,50,`+`,100,`/`,`/ev`,`~ret`,{"->":`.^.^.^.35`},null]}],`nop`,`
`,`ev`,{"VAR?":`n`},`/ev`,`~ret`,{"#f":1}],alert_level:[[`ev`,{"VAR?":`alert`},90,`>=`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,3,`/ev`,`~ret`,{"->":`.^.^.^.4`},null]}],[`ev`,{"VAR?":`alert`},60,`>=`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,2,`/ev`,`~ret`,{"->":`.^.^.^.4`},null]}],[`ev`,{"VAR?":`alert`},30,`>=`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,`/ev`,`~ret`,{"->":`.^.^.^.4`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,0,`/ev`,`~ret`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"#f":1}],is_low_tide:[`ev`,{"VAR?":`timeslot`},0,`==`,{"VAR?":`timeslot`},2,`==`,`||`,`/ev`,`~ret`,{"#f":1}],add_trust:[{"temp=":`n`},{"temp=":`t`},`ev`,{"VAR?":`t`},{"VAR?":`n`},`+`,`/ev`,{"temp=":`t`,re:!0},`ev`,{"VAR?":`t`},3,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,3,`/ev`,{"temp=":`t`,re:!0},{"->":`.^.^.^.14`},null]}],`nop`,`
`,`ev`,{"VAR?":`t`},-3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,-3,`/ev`,{"temp=":`t`,re:!0},{"->":`.^.^.^.22`},null]}],`nop`,`
`,{"#f":1}],get_clue:[{"temp=":`c`},`ev`,{"VAR?":`Clues`},{"VAR?":`c`},`+`,{"VAR=":`Clues`,re:!0},`/ev`,{"#f":1}],has_clue:[{"temp=":`c`},`ev`,{"VAR?":`Clues`},{"VAR?":`c`},`?`,`/ev`,`~ret`,{"#f":1}],get_memory:[{"temp=":`m`},`ev`,{"VAR?":`Memories`},{"VAR?":`m`},`+`,{"VAR=":`Memories`,re:!0},`/ev`,{"#f":1}],get_story_tape:[{"temp=":`t`},`ev`,{"VAR?":`StoryTapes`},{"VAR?":`t`},`+`,{"VAR=":`StoryTapes`,re:!0},`/ev`,{"#f":1}],get_item:[{"temp=":`i`},`ev`,{"VAR?":`Items`},{"VAR?":`i`},`+`,{"VAR=":`Items`,re:!0},`/ev`,{"#f":1}],has_item:[{"temp=":`i`},`ev`,{"VAR?":`Items`},{"VAR?":`i`},`?`,`/ev`,`~ret`,{"#f":1}],drop_item:[{"temp=":`i`},`ev`,{"VAR?":`Items`},{"VAR?":`i`},`-`,{"VAR=":`Items`,re:!0},`/ev`,{"#f":1}],spend_ap:[{"temp=":`n`},`ev`,{"VAR?":`ap`},{"VAR?":`n`},`-`,`/ev`,{"VAR=":`ap`,re:!0},`ev`,{"VAR?":`ap`},0,`<=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.13`},null]}],`nop`,`
`,{"#f":1}],advance_timeslot:[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`timeslot`},1,`+`,`/ev`,{"VAR=":`timeslot`,re:!0},`ev`,{"f()":`slot_ap`},`/ev`,{"VAR=":`ap`,re:!0},`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,0,`/ev`,{"VAR=":`ap`,re:!0},`ev`,!0,`/ev`,{"VAR=":`day_over`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"#f":1}],end_day:[`ev`,0,`/ev`,{"VAR=":`ap`,re:!0},`ev`,!0,`/ev`,{"VAR=":`day_over`,re:!0},{"#f":1}],start_day:[{"temp=":`d`},`ev`,{"VAR?":`d`},`/ev`,{"VAR=":`day`,re:!0},`ev`,0,`/ev`,{"VAR=":`timeslot`,re:!0},`ev`,{"f()":`slot_ap`},`/ev`,{"VAR=":`ap`,re:!0},`
`,`ev`,!1,`/ev`,{"VAR=":`day_over`,re:!0},{"#f":1}],slot_ap:[`ev`,3,`/ev`,{"temp=":`n`},`ev`,{"VAR?":`assist_ap`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},1,`+`,`/ev`,{"temp=":`n`,re:!0},{"->":`.^.^.^.8`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},{"f()":`day_ap_bonus`},`+`,`/ev`,{"temp=":`n`,re:!0},`
`,{"->":`.^.^.^.16`},null]}],`nop`,`
`,`ev`,{"VAR?":`n`},1,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,`/ev`,{"temp=":`n`,re:!0},{"->":`.^.^.^.24`},null]}],`nop`,`
`,`ev`,{"VAR?":`hint_debt`},0,`>`,{"VAR?":`timeslot`},1,`>=`,`&&`,{"VAR?":`n`},1,`>`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`hint_debt`},{"VAR?":`n`},1,`-`,`MIN`,`/ev`,{"temp=":`pay`},`
`,`ev`,{"VAR?":`n`},{"VAR?":`pay`},`-`,`/ev`,{"temp=":`n`,re:!0},`ev`,{"VAR?":`hint_debt`},{"VAR?":`pay`},`-`,`/ev`,{"VAR=":`hint_debt`,re:!0},{"->":`.^.^.^.40`},null]}],`nop`,`
`,`ev`,{"VAR?":`n`},`/ev`,`~ret`,{"#f":1}],day_ap_bonus:[[`ev`,{"VAR?":`difficulty`},0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,`/ev`,`~ret`,{"->":`.^.^.^.2`},null]}],[`ev`,{"VAR?":`difficulty`},2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,-1,`/ev`,`~ret`,{"->":`.^.^.^.2`},null]}],`nop`,`
`,`ev`,0,`/ev`,`~ret`,{"#f":1}],help:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,-5,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`helped`},1,`+`,`/ev`,{"VAR=":`helped`,re:!0},{"#f":1}],use_radio_at:[{"temp=":`where`},[`ev`,{"VAR?":`where`},`str`,`^minbak`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^I switched on the radio on the porch shelf. `,`#`,`^radio`,`/#`,`
`,{"->":`.^.^.^.8`},null]}],[`ev`,{"VAR?":`where`},`str`,`^ferry`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^I switched on the radio on the net shed shelf. Static rose from its greasy speaker. `,`#`,`^radio`,`/#`,`
`,{"->":`.^.^.^.8`},null]}],[`ev`,{"VAR?":`where`},`str`,`^alley`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^I switched on the radio on the store’s bench. It crackled. `,`#`,`^radio`,`/#`,`
`,{"->":`.^.^.^.8`},null]}],[`ev`,{"VAR?":`where`},`str`,`^office`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^I switched on the radio receiver on the desk. The speaker gave a single pop. `,`#`,`^radio`,`/#`,`
`,{"->":`.^.^.^.8`},null]}],[`ev`,{"VAR?":`where`},`str`,`^studio`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^I powered up the receiver by the console. The level meter needle twitched and rose. `,`#`,`^radio`,`/#`,`
`,{"->":`.^.^.^.8`},null]}],[`ev`,{"VAR?":`where`},`str`,`^lighthouse`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^I powered up the receiver inside the lighthouse. Static came in mixed with the wind. `,`#`,`^radio`,`/#`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^There was no radio to switch on.`,`
`,`ev`,`void`,`/ev`,`->->`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I switched it off.`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],use_radio:[`^I switched on the radio. Static came up first. `,`#`,`^radio`,`/#`,`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I switched it off.`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],pay_hint:[`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},[`ev`,{"VAR?":`difficulty`},0,`!=`,{"VAR?":`ap`},0,`>`,`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.9`},null]}],[`ev`,{"VAR?":`difficulty`},2,`==`,{"VAR?":`ap`},0,`<=`,`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`last_resort`},1,`+`,`/ev`,{"VAR=":`last_resort`,re:!0},`ev`,2,{"f()":`late_alert`},`pop`,`/ev`,`
`,`ev`,!0,`/ev`,`~ret`,{"->":`.^.^.^.9`},null]}],[`ev`,{"VAR?":`difficulty`},1,`==`,{"VAR?":`ap`},0,`<=`,`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`hint_debt`},3,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,3,{"f()":`late_alert`},`pop`,`/ev`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,1,{"f()":`add_hint_debt`},`pop`,`/ev`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`.^.^.^.9`},null]}],`nop`,`
`,`ev`,!1,`/ev`,`~ret`,{"#f":1}],add_hint_debt:[{"temp=":`n`},`ev`,{"VAR?":`hint_debt`},{"VAR?":`n`},`+`,`/ev`,{"VAR=":`hint_debt`,re:!0},`ev`,{"VAR?":`hint_debt`},3,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,3,`/ev`,{"VAR=":`hint_debt`,re:!0},{"->":`.^.^.^.13`},null]}],`nop`,`
`,{"#f":1}],settle_hint_debt:[`ev`,0,`/ev`,{"VAR=":`hint_debt`,re:!0},{"#f":1}],late_alert:[{"temp=":`n`},`ev`,{"VAR?":`day`},7,`>=`,{"VAR?":`timeslot`},3,`>=`,`&&`,{"VAR?":`n`},0,`>`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,89,{"VAR?":`alert`},`-`,`/ev`,{"temp=":`room`},`ev`,{"VAR?":`room`},0,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,0,`/ev`,{"temp=":`room`,re:!0},{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,{"VAR?":`n`},{"VAR?":`room`},`MIN`,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`.^.^.^.16`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`n`},{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`.^.^.^.16`},null]}],`nop`,`
`,{"#f":1}],alert_gate:[{"temp=":`judged`},`ev`,{"VAR?":`alert`},90,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,`void`,`/ev`,`->->`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`judged`,var:!0},{"#f":1}],alert_arrest:[`ev`,{"VAR?":`alert`},90,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,`void`,`/ev`,`->->`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,[`ev`,{"VAR?":`day`},1,`<=`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Boots sounded in the dark, ahead and behind. Several pairs.`,`
`,`^Several flashlight beams converged on my face.`,`
`,{"->":`.^.^.^.14`},null]}],[`ev`,{"VAR?":`day`},2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Boots echoed down the hallway, more than one pair.`,`
`,`^Several flashlight beams filled the doorway.`,`
`,{"->":`.^.^.^.14`},null]}],[`ev`,{"VAR?":`day`},5,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Footsteps from the front door, shoes still on. Several sets.`,`
`,`^Several flashlight beams climbed onto the porch.`,`
`,{"->":`.^.^.^.14`},null]}],[`ev`,{"VAR?":`day`},6,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Boots sounded behind the officer. Several pairs.`,`
`,`^The officer didn’t step aside. Flashlight beams came past his shoulder and filled the room.`,`
`,{"->":`.^.^.^.14`},null]}],[`ev`,{"VAR?":`day`},7,`>=`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Boots sounded at the front door. Several pairs. `,`#`,`^time:night `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^Several flashlight beams filled the kitchen.`,`
`,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`
`,`^Boots sounded from the front door. Several pairs.`,`
`,`^The door opened. Several flashlight beams came in.`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],evidence_count:[`ev`,0,`/ev`,{"temp=":`n`},`ev`,{"VAR?":`ev_master_tape`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},1,`+`,`/ev`,{"temp=":`n`,re:!0},{"->":`.^.^.^.8`},null]}],`nop`,`
`,`ev`,{"VAR?":`ev_park_testimony`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},1,`+`,`/ev`,{"temp=":`n`,re:!0},{"->":`.^.^.^.14`},null]}],`nop`,`
`,`ev`,{"VAR?":`ev_daeseung_docs`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},1,`+`,`/ev`,{"temp=":`n`,re:!0},{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"VAR?":`ev_remains`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},1,`+`,`/ev`,{"temp=":`n`,re:!0},{"->":`.^.^.^.26`},null]}],`nop`,`
`,`ev`,{"VAR?":`ded_culprit`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`n`},1,`+`,`/ev`,{"temp=":`n`,re:!0},{"->":`.^.^.^.32`},null]}],`nop`,`
`,`ev`,{"VAR?":`n`},`/ev`,`~ret`,{"#f":1}],proof_strong:[`ev`,{"VAR?":`Proofs`},`LIST_COUNT`,4,`>=`,{"VAR?":`Proofs`},{"VAR?":`P5`},`?`,`&&`,`/ev`,`~ret`,`
`,{"#f":1}],proof_weak:[`ev`,{"VAR?":`Proofs`},`LIST_COUNT`,1,`<=`,`/ev`,`~ret`,`
`,{"#f":1}],proof_all:[`ev`,{"VAR?":`Proofs`},`LIST_COUNT`,5,`>=`,{"VAR?":`Proofs`},{"VAR?":`P5`},`?`,`&&`,`/ev`,`~ret`,`
`,{"#f":1}],broadcast_ok:[`ev`,{"f()":`evidence_count`},4,`>=`,{"f()":`evidence_count`},3,`>=`,{"f()":`proof_strong`},`&&`,`||`,{"VAR?":`trust_jaehee`},1,`>=`,`&&`,{"f()":`proof_weak`},`!`,`&&`,`/ev`,`~ret`,`
`,{"#f":1}],collection_one:[`ev`,{"VAR?":`StoryTapes`},`LIST_COUNT`,11,`==`,{"VAR?":`Memories`},`LIST_COUNT`,12,`==`,`||`,`/ev`,`~ret`,`
`,{"#f":1}],collection_full:[`ev`,{"VAR?":`StoryTapes`},`LIST_COUNT`,11,`==`,{"VAR?":`Memories`},`LIST_COUNT`,12,`==`,`&&`,`/ev`,`~ret`,`
`,{"#f":1}],final_clean:[`ev`,{"VAR?":`final_first_try`},{"VAR?":`Boards`},{"VAR?":`FINAL`},`?`,`&&`,`/ev`,`~ret`,{"#f":1}],deep_need:[`ev`,7,`/ev`,`~ret`,{"#f":1}],deep_enough:[`ev`,{"VAR?":`Deep`},`LIST_COUNT`,{"f()":`deep_need`},`>=`,`/ev`,`~ret`,`
`,{"#f":1}],unfinished_ok:[`ev`,{"f()":`broadcast_ok`},{"f()":`proof_all`},`&&`,{"f()":`final_clean`},`&&`,{"f()":`deep_enough`},`&&`,{"VAR?":`trust_jaehee`},2,`>=`,`&&`,`/ev`,`~ret`,`
`,{"#f":1}],ending_id:[[`ev`,{"VAR?":`alert`},90,`>=`,{"VAR?":`chase_mistakes`},2,`>=`,`||`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,`str`,`^END_TWELFTH`,`/str`,`/ev`,`~ret`,{"->":`.^.^.^.7`},null]}],[`ev`,{"VAR?":`deal_accepted`},{"VAR?":`final_choice`},`str`,`^destroy`,`/str`,`==`,`&&`,{"VAR?":`final_choice`},`str`,`^timeout`,`/str`,`==`,`||`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,`str`,`^END_SILENCE`,`/str`,`/ev`,`~ret`,{"->":`.^.^.^.7`},null]}],[`ev`,{"VAR?":`trust_dohyun`},2,`>=`,{"VAR?":`ded_culprit`},`&&`,{"VAR?":`ev_remains`},{"f()":`proof_strong`},`||`,`&&`,{"VAR?":`final_choice`},`str`,`^police`,`/str`,`==`,`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,`str`,`^END_RECORD`,`/str`,`/ev`,`~ret`,{"->":`.^.^.^.7`},null]}],[`ev`,{"VAR?":`trust_taeo`},3,`>=`,{"VAR?":`ded_culprit`},`&&`,{"VAR?":`final_choice`},`str`,`^confess`,`/str`,`==`,`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,`str`,`^END_HAEMU`,`/str`,`/ev`,`~ret`,{"->":`.^.^.^.7`},null]}],[`ev`,{"VAR?":`final_choice`},`str`,`^broadcast`,`/str`,`==`,{"f()":`unfinished_ok`},`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,`str`,`^END_UNFINISHED`,`/str`,`/ev`,`~ret`,{"->":`.^.^.^.7`},null]}],[`ev`,{"VAR?":`final_choice`},`str`,`^broadcast`,`/str`,`==`,{"f()":`broadcast_ok`},`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`ev`,`str`,`^END_BROADCAST`,`/str`,`/ev`,`~ret`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,`str`,`^END_FALLBACK`,`/str`,`/ev`,`~ret`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"#f":1}],_test_fill_collections:[`ev`,{"VAR?":`StoryTapes`},`LIST_ALL`,`/ev`,{"VAR=":`StoryTapes`,re:!0},`
`,`ev`,{"VAR?":`Memories`},`LIST_ALL`,`/ev`,{"VAR=":`Memories`,re:!0},`
`,`ev`,{"VAR?":`Deep`},`LIST_ALL`,`/ev`,{"VAR=":`Deep`,re:!0},`
`,{"#f":1}],_test_deep:[{"temp=":`n`},`ev`,{"VAR?":`Deep`},`LIST_ALL`,1,{"VAR?":`n`},`range`,`/ev`,{"VAR=":`Deep`,re:!0},`
`,{"#f":1}],_test_proofs:[{"temp=":`n`},`ev`,{"VAR?":`Proofs`},`LIST_ALL`,1,{"VAR?":`n`},`range`,`/ev`,{"VAR=":`Proofs`,re:!0},`
`,{"#f":1}],_test_collection:[{"temp=":`which`},`ev`,{"VAR?":`which`},1,`==`,{"VAR?":`which`},3,`==`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`StoryTapes`},`LIST_ALL`,`/ev`,{"VAR=":`StoryTapes`,re:!0},`
`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`ev`,{"VAR?":`which`},2,`==`,{"VAR?":`which`},3,`==`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`Memories`},`LIST_ALL`,`/ev`,{"VAR=":`Memories`,re:!0},`
`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,{"#f":1}],_test_final_board:[`ev`,{"VAR?":`Boards`},{"VAR?":`FINAL`},`+`,{"VAR=":`Boards`,re:!0},`/ev`,{"#f":1}],ch00:[`#`,`^chapter:P`,`/#`,`#`,`^label:Side 0 · Arrival`,`/#`,`#`,`^time:evening`,`/#`,`#`,`^loc:ferry`,`/#`,`#`,`^amb:amb_boat`,`/#`,`^The boat had stopped, but not at the island. `,`#`,`^fx:fog`,`/#`,`
`,`^The fog stood in the way.`,`
`,`^The deckhand cut the engine, one cylinder dead by the sound of it. With it off, the noise of the water came up. `,`#`,`^fx:pause(1) `,`/#`,`#`,`^amb:amb_fog`,`/#`,`
`,`^And from up at the bow, radio static. `,`#`,`^fx:static(0.2) `,`/#`,`#`,`^signal:motif3`,`/#`,`
`,`^“That’s FM hiss. Is there a transmitter still running out here?”`,`
`,`^“No station on Muwol. Shut down twenty-three years ago,” the deckhand said.`,`
`,`^The commission envelope on my knees had gone damp at the corners. Worst humidity you could keep tape in.`,`
`,`ev`,{"VAR?":`I_LETTER`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^I put the envelope in the bag at my feet, next to my restoration kit.`,`
`,`ev`,{"VAR?":`I_RESTORE_KIT`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`.^.boat`},{boat:[[`ev`,`str`,`^Listen: static`,`/str`,{"CNT?":`ch00.boat_listen`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: commission letter`,`/str`,{"CNT?":`ch00.boat_letter`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: deckhand`,`/str`,{"CNT?":`ch00.boat_sailor`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: ferry pier`,`/str`,{"CNT?":`ch00.boat_listen`},{"CNT?":`ch00.boat_letter`},`&&`,{"CNT?":`ch00.boat_sailor`},`&&`,`/ev`,{"*":`.^.c-3`,flg:5},{"c-0":[`^ `,{"->":`ch00.boat_listen`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch00.boat_letter`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch00.boat_sailor`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch00.arrive`},`
`,{"#f":5}]}],{"#f":1}],boat_listen:[`^The static was leaking from an old radio in the wheelhouse.`,`
`,`^The deckhand turned the volume down and tipped his chin at the headphone jack. I plugged in and took the dial. `,`#`,`^radio:mini`,`/#`,`
`,`^The static thinned around 88 and nowhere else. A whistle threaded through it. The boat rocked, but that spot held.`,`
`,`^Not one voice broke through. Probably a mainland station leaking across on the fog. I let the headphones drop to my neck.`,`
`,`^Fog wet my face. Past the rail, everything was white.`,`
`,`ev`,{"VAR?":`M01`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^Someone’s back is warm. We sway across a white sea. `,`#`,`^memory:M01 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,{"->":`ch00.boat`},{"#f":1}],boat_letter:[`^A commission letter for the county’s records digitization project. Contract term: 7 days. Scope: every Haemu FM tape.`,`
`,`^The records list began with 「The Midnight Lighthouse, host Jaehui Yoon, 1998–2003」.`,`
`,`^A referral was tucked in at the back. The referrer’s space was blank.`,`
`,`^The trade had plenty of restorers, plenty of them cheaper. No line in the letter said why they’d picked me. `,`#`,`^plant:F02`,`/#`,`
`,`ev`,{"VAR?":`C00_002`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch00.boat`},{"#f":1}],boat_sailor:[`^“Here for work?” The deckhand took out a cigarette, then put it back.`,`
`,`^“Yes. Tapes. They stretch less than people’s stories.”`,`
`,`^“The haemi’s coming in. This is as far as we go today. Can’t promise tomorrow’s boat either.”`,`
`,`^It meant the fog was thickening. I couldn’t have said where I’d learned the word. `,`#`,`^plant:F01`,`/#`,`
`,{"->":`ch00.boat`},{"#f":1}],arrive:[`^The engine caught again. The boat inched into the fog.`,`
`,`^The horn sounded one long note and cut off. `,`#`,`^time:night `,`/#`,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea `,`/#`,`#`,`^sfx:sfx_ferry_horn`,`/#`,`
`,`^The slap of water on the breakwater grew closer. One flashlight showed on the pier.`,`
`,`^“You’re the restorer, right? Came all this way.”`,`
`,`^A big man lowered the flashlight and said he was the village head. He kept his left hand in his pocket.`,`
`,`^I held out my right hand and tugged my left sleeve down. His eyes caught on the cuff for a second.`,`
`,`^“Your wrist, what happened? Hurt yourself?”`,`
`,`^“Cut it on glass when I was a kid. That one doesn’t restore.” `,`#`,`^plant:F04`,`/#`,`
`,`^“We’re all family here. Anything you need, you come to me.”`,`
`,`^A sheet of paper was stuck wet to the notice board. A notice. Beside it, the ferry timetable.`,`
`,{"->":`ch00.pier`},{"#f":1}],pier:[[`ev`,`str`,`^Examine: notice`,`/str`,{"CNT?":`ch00.pier_notice`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: timetable`,`/str`,{"CNT?":`ch00.pier_schedule`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: village head`,`/str`,{"CNT?":`ch00.pier_talk`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,{"CNT?":`ch00.pier_notice`},`/ev`,{"*":`.^.c-3`,flg:5},{"c-0":[`^ `,{"->":`ch00.pier_notice`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch00.pier_schedule`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch00.pier_talk`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch00.minbak`},`
`,{"#f":5}]}],{"#f":1}],pier_notice:[`ev`,{"VAR?":`I_FLASHLIGHT`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^I took the flashlight from my bag and shone it on the paper. 「Haemu FM site: demolition notice. Demolition: D-7.」 `,`#`,`^sfx:sfx_flashlight`,`/#`,`
`,`^The ink of the county seal had run. The date was a week away.`,`
`,`ev`,{"VAR?":`C00_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^It was the day my contract ended. Save the tapes, knock down the house. That was county scheduling.`,`
`,`^Small print beneath it. 「Building teardown: 7 a.m., the day after demolition.」`,`
`,{"->":`ch00.pier`},{"#f":1}],pier_schedule:[`^Two boats a day, 7:30 a.m. and 4:30 p.m.`,`
`,`^Handwritten beneath it: 「No sailings in fog. Call for details.」 The number had been rubbed out.`,`
`,`^Next to it, another laminated slip read 「Fishing co-op dawn bulletin 1▒▒.4 — tide times」.`,`
`,`^The two middle digits had faded in the sea wind.`,`
`,{"->":`ch00.pier`},{"#f":1}],pier_talk:[[`^“I’ll show you the station tomorrow, in daylight. No lights out there at night.”`,`
`,`^He shone his flashlight up the road to the village. The beam gave out three paces into the fog.`,`
`,`^Before coming I’d searched the island’s name. It turned up two things, a resort deal and one line on a 2003 disappearance.`,`
`,`ev`,`str`,`^“Heard about the resort. The island’s going to change.” `,`#`,`^risk:trust_taeo+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“People disappeared in 2003, I hear.” `,`#`,`^risk:alert+3 `,`/#`,`#`,`^risk:trust_taeo-1`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^“I’m here to do the job and go.”`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch00.pier_resort`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch00.pier_missing`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch00.pier_done`},`
`,{"#f":5}]}],{"#f":1}],pier_resort:[`^“Yeah, yeah. An observation deck goes in where the station is. Brings the island back to life.”`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch00.pier`},{"#f":1}],pier_missing:[`^The flashlight beam came up onto my face.`,`
`,`^“That’s in the past. We buried it for the island.”`,`
`,`^He turned the beam back to the road. “Guesthouse is that way. The Sea House.”`,`
`,`ev`,3,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch00.pier`},{"#f":1}],pier_done:[`^“Right. That’s best. Guesthouse is that way. The Sea House. Grandma there knows you’re coming.” He nodded.`,`
`,{"->":`ch00.pier`},{"#f":1}],minbak:[`^The hum of a boiler rose from under the floor. From the kitchen, chopping. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^A short old woman came out holding a cloth bundle. Rubber boots stood neatly by the door.`,`
`,`^“Room’s in the back. Here’s the key.”`,`
`,`^Inside the cloth was a meal. Still warm.`,`
`,`^An old calendar hung on the wall. The paper looked yellow under the fluorescent light.`,`
`,`^I put the key in my jacket pocket and set the bag down in the corner. This would be my room for the week.`,`
`,`ev`,{"VAR?":`I_KEY_ROOM`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch00.room`},{"#f":1}],room:[[`ev`,`str`,`^Examine: calendar`,`/str`,{"CNT?":`ch00.room_calendar`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: meal `,`#`,`^risk:trust_sunrye+1`,`/#`,`/str`,{"CNT?":`ch00.room_eat`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: landlady`,`/str`,{"CNT?":`ch00.room_ask`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,{"VAR?":`I_FLASHLIGHT`},{"f()":`has_item`},`/ev`,{"*":`.^.c-3`,flg:5},{"c-0":[`^ `,{"->":`ch00.room_calendar`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch00.room_eat`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch00.room_ask`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch00.leave_night`},`
`,{"#f":5}]}],{"#f":1}],room_calendar:[`^「Celebrating the launch of Haemu FM. 1998」. Below a photo of the lighthouse, the frequency in large print. 88.3.`,`
`,`^The calendar was stuck on March 1998. Not one page had been turned.`,`
`,`ev`,{"VAR?":`C00_005`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch00.room`},{"#f":1}],room_eat:[`^I untied the cloth. Rice and soybean paste soup, with a small dish of kimchi. The soup was salty.`,`
`,`^My spoon rang loud in the room. The chopping in the kitchen ran steadier than most decks I’d serviced.`,`
`,`ev`,{"^var":`trust_sunrye`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch00.room`},{"#f":1}],room_ask:[`^“About the station building. Twenty-three years empty, the roof must leak by now.”`,`
`,`^“Don’t you ask. Just eat.”`,`
`,`^The landlady jerked her chin toward the room. That meant the food was getting cold.`,`
`,{"->":`ch00.room`},{"#f":1}],leave_night:[`^“I’m going to look at the station tonight. I check for damp by nose first.”`,`
`,`^The landlady came out of the kitchen with the knife still in her hand. `,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`^“Don’t you go at night. There’s… no lights out there.”`,`
`,`^“I have a flashlight. And ears.”`,`
`,`^The landlady brought the boots in from the doorstep.`,`
`,{"->":`ch00.studio`},{"#f":1}],studio:[`^The whir of something turning, beyond the door. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio -hum`,`/#`,`
`,`^The studio door wasn’t locked. The sound reached me before the smell of dust did.`,`
`,`^The deck was running. The reels wound with a steady, slow whir. `,`#`,`^fx:slow`,`/#`,`
`,`^New wiring was taped along the doorframe. 「Temporary power: demolition work」. Probably the crew had tested the line and left things running.`,`
`,`^When I flipped the wall switch, the fluorescents stuttered on and a hum settled along the ceiling. That ballast wouldn’t last. `,`#`,`^sfx:sfx_switch `,`/#`,`#`,`^amb:amb_studio +hum`,`/#`,`
`,`^One wall was all archive shelves. The chair in front of the deck was empty.`,`
`,{"->":`ch00.console`},{"#f":1}],console:[[`ev`,`str`,`^Examine: archive`,`/str`,{"CNT?":`ch00.st_shelf`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: deck`,`/str`,{"CNT?":`ch00.st_deck`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: stop button`,`/str`,{"CNT?":`ch00.st_deck`},{"CNT?":`ch00.st_stop`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,{"CNT?":`ch00.st_deck`},`/ev`,{"*":`.^.c-3`,flg:5},{"c-0":[`^ `,{"->":`ch00.st_shelf`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch00.st_deck`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch00.st_stop`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch00.cliff`},`
`,{"#f":5}]}],{"#f":1}],st_shelf:[`^Every section was packed with tapes. The handwritten labels ran from 1998 to 2003.`,`
`,`^Forty-odd to a section, ten sections: four hundred, even on a rough count. In a week. Whoever wrote the commission thought restoring meant copying.`,`
`,`^The smell of mold came off on my fingertips. In the last section, the labels stopped at 「2003.11」.`,`
`,`ev`,{"VAR?":`C00_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch00.console`},{"#f":1}],st_deck:[`^The reels were turning. About half the tape had wound through. The heads had no dust on them.`,`
`,`^But the deck’s power cord was out of the socket. I opened the battery compartment. The batteries were new. A scrap of plastic wrap was still stuck to them. `,`#`,`^plant:F03`,`/#`,`
`,`ev`,{"VAR?":`C00_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch00.console`},{"#f":1}],st_stop:[`^I pressed stop. The reels halted. The fluorescents got loud all at once. `,`#`,`^sfx:sfx_tape_stop `,`/#`,`#`,`^amb:amb_studio -reel`,`/#`,`
`,`^The tape I took out had no label, just blank paper on both sides.`,`
`,`^My hand went to play and stopped. Who knew how many passes that tape had taken. You don’t run it again uncleaned.`,`
`,`^The kit bag was back in my room. I stood the tape in the archive’s bottom section. It could wait for morning.`,`
`,{"->":`ch00.console`},{"#f":1}],cliff:[`^I switched off the flashlight. Before shutting the door, I looked back.`,`
`,`ev`,{"CNT?":`ch00.st_stop`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The stopped reels gleamed under the fluorescent light.`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`^The steady, slow whir followed me past the door and into the hall.`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`#`,`^cliff:reel`,`/#`,`ev`,{"CNT?":`ch00.st_stop`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^When I opened the door, the reels were turning.`,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`^The reels were turning.`,{"->":`.^.^.^.17`},null]}],`nop`,`^ The chair was empty.`,`
`,{"->":`ch01`},{"#f":1}],"#f":1}],ch01:[`#`,`^chapter:1`,`/#`,`#`,`^label:TAPE 01 · 23:40`,`/#`,`ev`,1,{"f()":`start_day`},`pop`,`/ev`,`
`,`^Chopping in the kitchen, the same speed as last night. `,`#`,`^time:morning `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^The sea fog hadn’t lifted by morning, and past the paper window everything was white.`,`
`,{"->":`.^.morning`},{morning:[[`ev`,`str`,`^Listen: last broadcast`,`/str`,`/ev`,{"*":`.^.c-0`,flg:20},`ev`,`str`,`^Go: kitchen`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch01.recap`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.kitchen`},`
`,{"#f":5}]}],{"#f":1}],recap:[`^The boat had stopped, but not at the island. The fog stood in the way. `,`#`,`^sfx:sfx_rewind`,`/#`,`
`,`^The notice on the pier board. Demolition: D-7.`,`
`,`^The studio door wasn’t locked. The deck was running.`,`
`,`ev`,{"CNT?":`ch00.st_stop`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^I pressed stop and the reels went still.`,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`^The reels were turning.`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,{"->":`ch01.morning`},{"#f":1}],kitchen:[`^The landlady brought out a tray. Beside the rice and soup sat a glass mug of barley tea.`,`
`,`^The handle was broken. Old water stains clung to the inside of the glass.`,`
`,`^“Lock your door at night.” She pushed the soup bowl at me. “It’s getting cold.”`,`
`,{"->":`ch01.table`},{"#f":1}],table:[[`ev`,`str`,`^Use: barley tea `,`#`,`^risk:trust_sunrye+1`,`/#`,`/str`,{"CNT?":`ch01.tea`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: meal `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch01.meal`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: landlady`,`/str`,{"CNT?":`ch01.ask_today`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch01.tea`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.meal`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.ask_today`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch01.studio_first`},`
`,{"#f":5}]}],{"#f":1}],tea:[`^I picked up the mug. Lukewarm. The smell of roasted barley rose in place of steam.`,`
`,`^“You always liked this.” `,`#`,`^plant:F07`,`/#`,`
`,`^The chopping stopped dead. One beat. `,`#`,`^fx:pause(1) `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`^“…Guests all like it. Barley tea.” The chopping started up again. `,`#`,`^amb:amb_minbak +dosa`,`/#`,`
`,`ev`,{"VAR?":`C01_011`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_sunrye`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^A sip left a burnt taste on my tongue.`,`
`,`ev`,{"VAR?":`M03`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^A kitchen under a low roof. The same mug. A different hand holds it. `,`#`,`^memory:M03 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,{"->":`ch01.table`},{"#f":1}],meal:[`ev`,{"CNT?":`ch00.room_eat`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The soup was less salty than yesterday.`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`^The soup wasn’t salty.`,{"->":`.^.^.^.5`},null]}],`nop`,`^ The rice was hot.`,`
`,`^When I set down my spoon, the landlady silently cleared the empty bowls.`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,{"->":`ch01.table`},{"#f":1}],ask_today:[`ev`,{"CNT?":`ch00.st_shelf`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^“Last night I saw the archive stops at November 2003. I’ll start there. Least handled.”`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`^“The station’s tapes. I’ll start with 2003. Least handled.”`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^“Finish eating before you go.”`,`
`,`^The boots were out by the door again.`,`
`,{"->":`ch01.table`},{"#f":1}],studio_first:[`^The fluorescents hummed. The ballast had made it through the night. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,`^I set the kit bag by the console. No bare hands today.`,`
`,`ev`,{"CNT?":`ch00.st_stop`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ No new dust on the stopped deck. The unlabeled tape stood where I’d left it, in the bottom section.`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`^The deck had wound to the end and stopped. I took the unlabeled tape out and stood it in the bottom section.`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`ev`,{"VAR?":`C00_004`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The archive still held four hundred or so. It hadn’t shrunk for me overnight.`,{"->":`.^.^.^.23`},null]}],[{"->":`.^.b`},{b:[`^The archive took up a whole wall. Labels ran from 1998 to 2003.`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,`^Two decks sat on the console, one for playback and one a small logger.`,`
`,`^In the middle of the console, the On Air lamp was off.`,`
`,`^The drawer under the console would hold the broadcast log. In the drawer below it was a postcard box. One ceiling tile was a different color.`,`
`,{"->":`ch01.studio`},{"#f":1}],studio:[[`ev`,`str`,`^Examine: archive`,`/str`,{"CNT?":`ch01.shelf`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: restoration kit `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch01.shelf`},{"VAR?":`I_RESTORE_KIT`},{"f()":`has_item`},`&&`,{"CNT?":`ch01.restore`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Listen: TAPE 01`,`/str`,{"CNT?":`ch01.restore`},`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: lamp`,`/str`,{"CNT?":`ch01.lamp`},`!`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Examine: logger`,`/str`,{"CNT?":`ch01.logger`},`!`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Examine: broadcast log `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch01.logbook`},`!`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Examine: schedule column`,`/str`,{"CNT?":`ch01.logbook`},{"CNT?":`ch01.schedule_col`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Examine: postcard box`,`/str`,{"CNT?":`ch01.postcards`},`!`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Use: keep the postcard `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch01.postcards`},{"CNT?":`ch01.take_postcard`},`!`,`&&`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Examine: ceiling `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch01.ceiling`},`!`,`/ev`,{"*":`.^.c-9`,flg:5},`ev`,`str`,`^Listen: unlabeled tape`,`/str`,{"CNT?":`ch01.wave_tape`},`!`,`/ev`,{"*":`.^.c-10`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-11`,flg:4},{"c-0":[`^ `,{"->":`ch01.shelf`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.restore`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.tape`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch01.lamp`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch01.logger`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch01.logbook`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch01.schedule_col`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch01.postcards`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch01.take_postcard`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch01.ceiling`},`
`,{"#f":5}],"c-10":[`^ `,{"->":`ch01.wave_tape`},`
`,{"#f":5}],"c-11":[`^ `,{"->":`ch01.hub`},`
`,{"#f":5}]}],{"#f":1}],shelf:[`^The sections were sorted by year. I ran a fingertip down the labels.`,`
`,`^The 2003 section. November. 「The Midnight Lighthouse 03.11.14 LOG」.`,`
`,`^I took it out. Mold had bloomed inside the case, and the tape was stretched.`,`
`,`^Played like this, the heads would eat the stretched section. Twenty-three years survived, dead in a minute.`,`
`,{"->":`ch01.studio`},{"#f":1}],restore:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I opened the case and unwound the reels. The mold came off with cotton swabs and alcohol.`,`
`,`^I wound the slack section through by hand. The alcohol on my fingertips dried cold.`,`
`,`^An hour. The tape sat evenly on the reel. A flick of a fingernail drew a low note. It would live.`,`
`,`ev`,{"VAR?":`I_TAPE01`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch01.studio`},{"#f":1}],tape:[`ev`,{"CNT?":`.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I rewound the tape to the start with a brief whir. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE01`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^I slid the tape in and the door clicked shut. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,`^TAPE 01 went on the deck. I put on the headphones. `,`#`,`^tape:TAPE01`,`/#`,`
`,`^At 23:00, a low, clear voice opened 「The Midnight Lighthouse」. Jaehui Yoon, the host named in the commission letter. Clean breaths.`,`
`,`^The generator droned under the whole broadcast. `,`#`,`^fx:static(0.3)`,`/#`,`
`,`^At 23:05, something like a tiny cough passed once in the background, nearly buried in the noise. `,`#`,`^plant:F05`,`/#`,`
`,`^Partway through came a long stretch of noise, too evenly erased for mold damage.`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch01.deck`},{"#f":1}],deck:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch01.tape`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.deck_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.deck_clean`},`
`,{"#f":5}]}],{"#f":1}],deck_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^I wet a swab with alcohol and cleaned the heads. Brown dust came off. `,`#`,`^tape:TAPE01`,`/#`,`
`,{"->":`ch01.deck`},{"#f":1}],seg_man:[{"->":`ch01.deck`},{"#f":1}],seg_cut:[{"->":`ch01.deck`},{"#f":1}],deck_done:[`^I played the two marked spots back to back. A door opening. A low voice.`,`
`,`^“It’s time.” Not Jaehui Yoon’s voice. Then nineteen seconds.`,`
`,`^The generator noise vanished all at once. 23:40:03. `,`#`,`^t3:gen_cut `,`/#`,`#`,`^sfx:sfx_generator_cut `,`/#`,`#`,`^silence:1.8`,`/#`,`
`,`^No fade, no tail. A clean cut. After that, silence. `,`#`,`^hush`,`/#`,`
`,{"->":`ch01.deck_stop`},{"#f":1}],deck_stop:[`ev`,{"VAR?":`C01_001`},{"f()":`has_clue`},{"VAR?":`C01_002`},{"f()":`has_clue`},`&&`,{"CNT?":`ch01.deck_done`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch01.deck_done`},{"->":`.^.^.^.11`},null]}],`nop`,`
`,`ev`,{"VAR?":`difficulty`},2,`<`,{"VAR?":`C01_001`},{"f()":`has_clue`},{"VAR?":`C01_002`},{"f()":`has_clue`},`&&`,`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The low hum of the generator stayed in my ears.`,`
`,{"->":`.^.^.^.26`},null]}],`nop`,`
`,`^I stopped the deck. When I took off the headphones, the fluorescent hum came back. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,`^The window had brightened. The morning was over. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.39`},null]}],`nop`,`
`,{"->":`ch01.studio`},{"#f":1}],lamp:[`^I tapped the On Air lamp with a finger. The glass was cloudy, but the filament inside was intact.`,`
`,`ev`,{"VAR?":`M02`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^“When the light comes on, you have to be quiet.” Someone’s finger touches my lips. A yellow light on the desk with all the lights. `,`#`,`^memory:M02 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,{"->":`ch01.studio`},{"#f":1}],logger:[`^The logger was a small deck bolted beside the console, a machine that recorded every broadcast on its own.`,`
`,`^A sticker on its side read 「Records 30 min on internal battery during outages」.`,`
`,`^I pressed the sticker’s curling corner back down. `,`#`,`^allow-amb`,`/#`,`
`,`ev`,{"VAR?":`C01_008`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch01.studio`},{"#f":1}],logbook:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^The broadcast log from the console drawer was damp. The pages had stuck together.`,`
`,`^I peeled them apart one by one with a knife tip. November 14, 2003.`,`
`,`^23:00, 「The Midnight Lighthouse」. The 23:40 slot was empty.`,`
`,`^No “transmission fault.” No duty signature either.`,`
`,`^I turned back a month. October 3: power outage. October 19: generator check. November 2: low transmitter output.`,`
`,`^Every fault had been logged, without fail. That one day had nothing.`,`
`,`ev`,{"VAR?":`C01_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch01.studio`},{"#f":1}],schedule_col:[`^In the schedule column, other days listed song titles one after another.`,`
`,`^The November 14 box held one line: 「No music · Special」.`,`
`,`ev`,{"VAR?":`C01_007`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch01.studio`},{"#f":1}],postcards:[`^The postcard box in the lower drawer was marked 「Listener Stories」. The rubber band had rotted and snapped.`,`
`,`^The top card of the November bundle read 「Please listen on the night of November 14. Under the lighthouse.」`,`
`,`^The sender’s line was blank. No stamp, no postmark.`,`
`,`ev`,{"VAR?":`C01_013`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch01.studio`},{"#f":1}],take_postcard:[`^No records tag on the postcard. Outside the contract, so not theft. Probably. It went in the bag’s inner pocket.`,`
`,`ev`,{"VAR?":`I_POSTCARD`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^A demolition truck rumbled past outside the window.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch01.studio`},{"#f":1}],ceiling:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I lifted the ladder off the wall and set it under the odd tile.`,`
`,`^I pushed the tile up and dust poured down. On top of it lay a tape, wrapped in plastic.`,`
`,`^The label read 「First broadcast 1998.03.01」. A thin film of dust lay on the plastic.`,`
`,`ev`,{"VAR?":`ST_jaehee`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`ch01.studio`},{"#f":1}],wave_tape:[`^I took the unlabeled tape from the archive’s bottom section.`,`
`,`^On the playback deck, waves rolled in and drew back, over and over.`,`
`,`^At 1:12, the rhythm of the waves slipped once. `,`#`,`^plant:F06`,`/#`,`
`,`^After that, waves again. Probably stock sound for the show. The splice was clumsy. I took the tape out and put it in my bag.`,`
`,`ev`,{"VAR?":`C01_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`I_TAPE_WAVE`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch01.studio`},{"#f":1}],hub:[`ev`,{"VAR?":`day_over`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch01.night_end`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Out on the road, the sea sounded from every direction. The sun had climbed above the fog. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Out on the road, the sea sounded quieter. The sun was sinking into the fog. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The wind had the road to itself. The streetlights made round glows in the fog. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,{"->":`ch01.hub_choices`},{"#f":1}],hub_choices:[[`ev`,`str`,`^Go: Haemu FM studio`,`/str`,{"CNT?":`ch01.solved`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,{"CNT?":`ch01.solved`},`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village lanes`,`/str`,{"VAR?":`timeslot`},3,`<`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`==`,{"f()":`alert_level`},1,`<`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`==`,{"f()":`alert_level`},1,`>=`,`&&`,{"CNT?":`ch01.office_locked`},`!`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: ferry pier`,`/str`,`/ev`,{"*":`.^.c-5`,flg:4},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,`/ev`,{"*":`.^.c-6`,flg:4},`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch01.solved`},`!`,{"VAR?":`C01_001`},{"f()":`has_clue`},{"VAR?":`C01_002`},{"f()":`has_clue`},`+`,{"VAR?":`C01_003`},{"f()":`has_clue`},`+`,{"VAR?":`C01_006`},{"f()":`has_clue`},`+`,3,`>=`,`&&`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Use: end the day`,`/str`,{"CNT?":`ch01.solved`},`!`,{"VAR?":`timeslot`},3,`==`,`&&`,`/ev`,{"*":`.^.c-8`,flg:5},{"c-0":[`^ `,{"->":`ch01.studio_back`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.night`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.alley`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch01.office`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch01.office_locked`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch01.ferry`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch01.minbak_day`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch01.deduce`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch01.end_night`},`
`,{"#f":5}]}],{"#f":1}],end_night:[`^I stood under a streetlight. The wind swept the lane and moved on.`,`
`,`ev`,{"f()":`end_day`},`pop`,`/ev`,`
`,{"->":`ch01.night_end`},{"#f":1}],night_end:[[`ev`,{"CNT?":`ch01.solved`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch01.night`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`^A dog barked in the distance and stopped. One by one, the windows went dark. `,`#`,`^time:night`,`/#`,`
`,`^My legs were heavy from a day of walking. At this hour, the studio was the one door left open.`,`
`,`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Examine: notebook`,`/str`,{"VAR?":`C01_001`},{"f()":`has_clue`},{"VAR?":`C01_002`},{"f()":`has_clue`},`+`,{"VAR?":`C01_003`},{"f()":`has_clue`},`+`,{"VAR?":`C01_006`},{"f()":`has_clue`},`+`,3,`>=`,`/ev`,{"*":`.^.c-1`,flg:5},{"c-0":[`^ `,{"->":`ch01.studio_back`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.deduce`},`
`,{"#f":5}]}],{"#f":1}],office_locked:[`^A fan whirred inside, but the office door was locked. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`^No one answered my knock. The blinds were down. This wasn’t an island that ran fans for empty rooms.`,`
`,{"->":`ch01.hub`},{"#f":1}],studio_back:[`^The fluorescent hum met me at the door. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,{"->":`ch01.studio`},{"#f":1}],minbak_day:[[`^The wall clock ticked in the empty house. The landlady was out in the field. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ A radio sat on the porch shelf, the number on preset 3 worn down to 「10▒.9」. `,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`ev`,`str`,`^Use: radio `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},2,`>=`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Listen: first broadcast`,`/str`,{"VAR?":`timeslot`},2,`>=`,{"VAR?":`StoryTapes`},{"VAR?":`ST_jaehee`},`?`,`&&`,{"CNT?":`ch01.first_air`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,`ev`,`str`,`^minbak`,`/str`,`/ev`,{"->t->":`use_radio_at`},{"->":`.^.^.^`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.first_air`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.hub`},`
`,{"#f":5}]}],{"#f":1}],first_air:[[`^I took the portable deck out of the kit bag, sat at the edge of the porch, and loaded the tape. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,`^A tapped microphone thumped through the small speaker. A thin hiss of new tape lay underneath.`,`
`,`^“Can you hear me? If you can, please open your window for a moment.”`,`
`,`^A gate bolt slid back. Boots crossed the yard.`,`
`,`^The landlady went into the kitchen with a cloth bundle in her hand and didn’t look toward the porch.`,`
`,`^“This is Haemu FM, eighty-eight point three.”`,`
`,`^A window slid open in the kitchen, and sea air came all the way out to the porch.`,`
`,`^The landlady stood at the half-open kitchen window with one hand on the frame.`,`
`,`ev`,`str`,`^Listen: rest of the tape `,`#`,`^risk:trust_sunrye+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch01.first_air_end`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.first_air_stop`},`
`,{"#f":5}]}],{"#f":1}],first_air_end:[`ev`,{"^var":`trust_sunrye`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^I let the deck run. The voice went through boat times, then the sick, then those who’d come home.`,`
`,`^“Radio is the island’s ears. No island closes its ears.”`,`
`,`^The cutting board stayed silent the whole time. The landlady’s back was bent toward the window. `,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`^The tape ended with a ship’s horn far off and laughter rising over it.`,`
`,`^The reels wound to the end and stopped. `,`#`,`^sfx:sfx_tape_end`,`/#`,`
`,`^She closed the window. It took a long time to slide all the way shut.`,`
`,`^“Whole island had its windows open that day. In March. Didn’t even feel the cold.”`,`
`,`^“Clean breathing. That’s the host from the commission letter, isn’t it? Jaehui Yoon.”`,`
`,`^“That’s a dead person’s voice.” The landlady stopped untying the bundle and wiped her fingers on her apron.`,`
`,`^“Put that away and eat.” The chopping began. `,`#`,`^amb:amb_minbak +dosa`,`/#`,`
`,{"->":`ch01.first_air_after`},{"#f":1}],first_air_stop:[`^I pressed stop with my thumb, and the reels clunked to a halt. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`^The landlady closed the window. It caught once halfway, then shut.`,`
`,`^“Don’t you play things like that. Soup’s on.”`,`
`,`^A knot came loose in the cloth. Then the chopping started again. `,`#`,`^amb:amb_minbak +dosa`,`/#`,`
`,{"->":`ch01.first_air_after`},{"#f":1}],first_air_after:[[`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},{"c-0":[`^ `,{"->":`ch01.hub`},`
`,{"#f":5}]}],{"#f":1}],alley:[`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^TV noise leaked from one of the houses. Under the slate eaves, laundry lifted in the wind. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The TVs dropped their volume as I went by. Curtain rings slid behind me. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A dog barked, then cut off. Boots sounded behind me. Each time I turned, the lane was empty. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village `,`/#`,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Wherever I headed, a door shut first. Someone stood at every window. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`^The general store stood at the end of the lane. Its sliding door was half open.`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Eating all right?” the storekeeper asked from the bench, without getting up.`,`
`,{"->":`.^.^.^.26`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Sugar went up today. Ramen’s the same.” The storekeeper said it unasked and turned up the radio.`,`
`,{"->":`.^.^.^.26`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The storekeeper shut the store door without a word and turned his back to the glass.`,`
`,{"->":`.^.^.^.26`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The store was empty. A teacup had gone cold on the bench.`,`
`,{"->":`.^.^.^.26`},null]}],`nop`,`
`,`^Boxes were stacked in the shed behind the store. The one in front was marked 「Ledgers」.`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],alley_hub:[[`ev`,`str`,`^Talk: storekeeper — ask indirectly `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch01.rumor`},`!`,{"CNT?":`ch01.rumor_soft`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: storekeeper — ask directly `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch01.rumor`},`!`,{"CNT?":`ch01.rumor_soft`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^“It’s about the day people went missing in 2003.” `,`#`,`^risk:alert+5`,`/#`,`/str`,{"CNT?":`ch01.rumor`},{"CNT?":`ch01.rumor_soft`},`||`,{"CNT?":`ch01.pry`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Talk: storekeeper — the fuel`,`/str`,{"CNT?":`ch01.rumor`},{"CNT?":`ch01.rumor_soft`},`||`,{"CNT?":`ch01.ledger`},`&&`,{"CNT?":`ch01.fuel`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Examine: ledgers`,`/str`,{"CNT?":`ch01.ledger`},`!`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Use: carry loads `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch01.carry`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Talk: old women on the bench`,`/str`,{"f()":`alert_level`},2,`<`,{"CNT?":`ch01.pyeongsang`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-7`,flg:4},{"c-0":[`^ `,{"->":`ch01.rumor_soft`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.rumor`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.pry`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch01.fuel`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch01.ledger`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch01.carry`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch01.pyeongsang`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch01.hub`},`
`,{"#f":5}]}],{"#f":1}],pyeongsang:[`^Garlic skins rustled at the foot of a wall. Three old women sat around a wooden platform bench.`,`
`,`^When they saw me, the talk stopped dead, but their hands kept moving. `,`#`,`^allow-amb`,`/#`,`
`,`^“You the girl from the station?” asked the one in the middle, eyes still on her garlic.`,`
`,`^“Yes. I’m here to wipe the mold off the tapes.”`,`
`,`^“Listened to that show every night,” said the one on the left. “By eleven, the whole island went quiet.”`,`
`,`^“When it ended, we turned off the lights and slept. Left only the lighthouse on.”`,`
`,`^The one on the right rapped the left one’s knee with her knuckles. The talk broke off there.`,`
`,`^A short hum slipped from the one in the middle. One long note, two short.`,`
`,`^“What’s that tune? Just three notes.”`,`
`,`^“What tune.” She kept her eyes on the garlic. The humming didn’t come back.`,`
`,`ev`,{"VAR?":`StoryTapes`},{"VAR?":`ST_jaehee`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Day that one first went on air, we got told to open our windows. So we all did,” the one on the left muttered into the garlic.`,`
`,{"->":`.^.^.^.30`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Yoon from the station always kept precious things up high,” the one on the left muttered into the garlic. “Out of reach.”`,`
`,{"->":`.^.^.^.30`},null]}],`nop`,`
`,`^“You’re staying at the Sea House?” The one in the middle held out a handful of garlic in a bag. “Give these to Grandma there.”`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],rumor_soft:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_indirect`},1,`+`,`/ev`,{"VAR=":`asked_indirect`,re:!0},`^I sat on the bench. The storekeeper stirred instant coffee into a paper cup, with lots of sugar.`,`
`,`^“Sweet coffee. You must’ve been able to hear the station’s generator from here, back then.”`,`
`,`^“Over there? They took a boat out into the storm, they say. Everybody knows that one.”`,`
`,`ev`,{"VAR?":`C01_010`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“More sugar? It’s last year’s, doesn’t dissolve right. Still sweet, though.” He held up the tin.`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],rumor:[`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_direct`},1,`+`,`/ev`,{"VAR=":`asked_direct`,re:!0},`^I stayed standing by the bench and asked. The storekeeper set down the paper cup.`,`
`,`^“The tapes stop at 2003. What happened to the station people?”`,`
`,`^“Those people? They took a boat out into the storm, they say.”`,`
`,`^He lifted his chin toward the sea. “Eleven of them, they say. Just the boat came back. Some of them left tabs here, too.”`,`
`,`ev`,{"VAR?":`C01_010`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“Did you sell to the station too? On an island, supplies must’ve been the hard part.”`,`
`,`^He pointed at the boxes by the shed. “Fuel, cigarettes, all went out from here. Old ledgers are in there. So moldy the mice won’t touch them.”`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],fuel:[[`^“I had a look at the ledger in your shed. Why did the broadcast cut out that night?”`,`
`,`^“What for, that moldy old stuff.” The storekeeper shut the sugar tin. “The station got its fuel from this store.” `,`#`,`^confront:C1_FUEL`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch01.fuel_win`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.fuel_lost`},`
`,{"#f":5}]}],{"#f":1}],fuel_win:[[`^“Look at that handwriting. My eyes were good back then. Now I need reading glasses. I sell those too.”`,`
`,`^“Twenty liters, that day. I carried them over myself. Heavy, too.”`,`
`,`^“Batteries too. Yoon bought them. No margin in those.” The storekeeper tipped the cold coffee out under the bench.`,`
`,`ev`,`str`,`^“This stays between us.”`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“I should ask the village head about this.” `,`#`,`^risk:alert+10 `,`/#`,`#`,`^risk:trust_taeo-1`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch01.fuel_keep`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.fuel_tell`},`
`,{"#f":5}]}],{"#f":1}],fuel_keep:[`^The storekeeper made a fresh cup and held it out. “I wrote that ledger myself. That part’s right.”`,`
`,`^“Those station machines ran on batteries another half hour when the power went.” He got up from the bench.`,`
`,`ev`,{"VAR?":`C01_008`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],fuel_tell:[`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^The storekeeper sighed and picked up the store telephone. The village head answered fast.`,`
`,`^His voice leaked from the receiver, loud and easygoing.`,`
`,`^“Heard the generator ran out of fuel. Old machine, happened a lot.”`,`
`,`^“The ledger says so? Well, delivered doesn’t mean it all went in.”`,`
`,`ev`,{"VAR?":`C01_009`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^The storekeeper set the receiver down, eyes on the shed.`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],fuel_lost:[`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^“I told you what I heard. That’s all I’ve got.”`,`
`,`^The storekeeper wouldn’t look toward the shed. “Ramen came in. Buy five, get one free.”`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],pry:[`^“Does anyone know who went to the station that night? Hearsay’s fine. I’ll clean off the noise.”`,`
`,`^The storekeeper took the paper cup away with half the coffee still in it.`,`
`,`^“That was the Elder’s business. Enough of that talk here.”`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],ledger:[`^The shed door wasn’t locked. The boxes smelled of paper and of mold, milder than the tape kind.`,`
`,`^The 2003 ledger. November. I ran a finger down the lines.`,`
`,`^「11.14 To station: diesel 20L, delivered. Yoon」.`,`
`,`^A daytime delivery. The received-by column held one word: “Yoon.”`,`
`,`ev`,{"VAR?":`C01_006`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],carry:[`^I carried two sacks of rice inside and came away with dust on my shoulders.`,`
`,`^The storekeeper held out a little bottle of yogurt drink. “Strong back. That one’s on me. Don’t check the date.”`,`
`,`^“Tape boxes weigh more.”`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,{"->":`ch01.alley_hub`},{"#f":1}],office:[`^A fan creaked, turning its head. The village head’s laugh came in over it. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`^“There you are, there you are. Sit. Coffee?”`,`
`,`^A long roll of paper was spread across the desk, a rendering with a white building on the seaward side.`,`
`,{"->":`ch01.office_hub`},{"#f":1}],office_hub:[[`ev`,`str`,`^Talk: village head — ask indirectly `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch01.blueprint`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: rendering`,`/str`,{"CNT?":`ch01.blueprint`},{"CNT?":`ch01.bp_name`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: village head — ask directly `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch01.thatnight`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^“Fuel? The ledger says twenty liters went in that day.” `,`#`,`^risk:alert+5 `,`/#`,`#`,`^risk:trust_taeo-1`,`/#`,`/str`,{"CNT?":`ch01.thatnight`},{"VAR?":`C01_006`},{"f()":`has_clue`},`&&`,{"CNT?":`ch01.rebut`},`!`,`&&`,{"CNT?":`ch01.fuel_tell`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-4`,flg:4},{"c-0":[`^ `,{"->":`ch01.blueprint`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.bp_name`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.thatnight`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch01.rebut`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch01.hub`},`
`,{"#f":5}]}],{"#f":1}],blueprint:[[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_indirect`},1,`+`,`/ev`,{"VAR=":`asked_indirect`,re:!0},`^The village head laid a palm on the rendering.`,`
`,`^“Look, this is where the station is. Observation deck goes here. A walking trail out to the lighthouse.”`,`
`,`^“Daeseung Resort. The Elder set the whole thing up. Brings the island back to life.”`,`
`,`ev`,`str`,`^“Good spot for an observation deck.” `,`#`,`^risk:trust_taeo+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Can’t you just leave the station be?”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch01.bp_agree`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.bp_keep`},`
`,{"#f":5}]}],{"#f":1}],bp_agree:[`^“Right? You’ve got an eye, Ms. Han.”`,`
`,`^He laughed out loud. The fan lifted a corner of the rendering.`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch01.office_hub`},{"#f":1}],bp_keep:[`^“That building’s sat empty twenty-three years. Long enough, right?”`,`
`,`^He came around the desk and clapped my shoulder. The smile got bigger.`,`
`,{"->":`ch01.office_hub`},{"#f":1}],bp_name:[`^A corner of the rendering had small print beside a stamp.`,`
`,`^「Design: Min-u Jang · Daeseung Resort rendering」. No other name appeared on it. `,`#`,`^plant:F20`,`/#`,`
`,`ev`,{"VAR?":`C01_005`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch01.office_hub`},{"#f":1}],thatnight:[`^“The November 14 broadcast. The records stop there. Why did it cut out?”`,`
`,`^The fan swung all the way around and back.`,`
`,`^“Heard the generator ran out of fuel. Old machine, happened a lot.”`,`
`,`^“Family doesn’t dig up the past. Right?”`,`
`,`ev`,{"VAR?":`C01_009`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_direct`},1,`+`,`/ev`,{"VAR=":`asked_direct`,re:!0},{"->":`ch01.office_hub`},{"#f":1}],rebut:[`^“Fuel? The general store’s ledger says twenty liters went in that day.”`,`
`,`^The village head’s laugh came a beat late. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“The ledger says so? Well, delivered doesn’t mean it all went in.”`,`
`,`^He dragged his chair in close. “You just mind the tapes, Ms. Han. Yeah?”`,`
`,`^“Funny. Tapes are full of people.”`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch01.office_hub`},{"#f":1}],ferry:[`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Waves slapped under the breakwater in a steady rhythm. A few gulls dozed on the pilings. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A net needle clicked between the waves. The mender’s eyes met mine, then dropped back to the net. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Boots scuffed over by the shed. When I came closer, the shade was empty. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Waves struck the pilings. Three people stood on a pier with no boat. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^The demolition crew’s schedule had gone up beside the notice.`,`
`,{"->":`ch01.ferry_hub`},{"#f":1}],ferry_hub:[[`ev`,`str`,`^Examine: removal schedule`,`/str`,{"CNT?":`ch01.export_board`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: timetable`,`/str`,{"CNT?":`ch01.ferry_time`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: ticket clerk`,`/str`,{"VAR?":`timeslot`},3,`<`,{"CNT?":`ch01.booth`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch01.export_board`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.ferry_time`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.booth`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch01.hub`},`
`,{"#f":5}]}],{"#f":1}],booth:[[`^Stamping thudded inside the ticket window. Thunk. Thunk. Evenly spaced.`,`
`,`^Behind the glass, the ticket clerk was stamping a ledger, not tickets. A date stamp.`,`
`,`^“Mainland. Seven-thirty, four-thirty.” The clerk’s eyes never left the ledger.`,`
`,`^“Not a ticket. Nice steady stamp you’ve got. Do you write names in the ledger too?”`,`
`,`^“Date stamp only.” There was no name column.`,`
`,`^On the shelf behind the clerk, the same ledgers stood by year. The spines had yellowed.`,`
`,`ev`,`str`,`^“Could I see the November 2003 ledger?”`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“I’ll buy a ticket another time.”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch01.booth_2003`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.ferry_hub`},`
`,{"#f":5}]}],{"#f":1}],booth_2003:[`^The clerk swiveled toward the shelf. “Tickets. Seven-thirty, four-thirty…” `,`#`,`^allow-amb`,`/#`,`
`,`^A ledger came off the shelf and slid out through the gap under the glass.`,`
`,`^“No charge to look. Tear it, you pay…” The paper had buckled from the salt air.`,`
`,`^I turned to November. Each day had one stamp and one number. Tickets sold that day.`,`
`,`^The 15th: 「Canceled」. The 16th: 「0」. After that, the numbers crept up again.`,`
`,`^Before the ledger was pulled back, the 29th caught my eye. 「2」, and beside it in small writing, 「Child 1」.`,`
`,`^No other day that month had a child’s ticket.`,`
`,`^The clerk pulled the ledger back. “Round trip, a thousand won off…” I hadn’t asked.`,`
`,`ev`,{"VAR?":`C01_014`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch01.ferry_hub`},{"#f":1}],export_board:[`^Items on the 「Removal Schedule」 were listed by date.`,`
`,`^15th, morning: postcards and mail. 15th, evening: archive shelf C. 16th, morning: recording equipment.`,`
`,`^17th, night: transmitter room racks. 19th: entire archive. 20th: studio. 21st: building demolition.`,`
`,`^The bottom line read 「Items will be removed at the times listed. Remove personal belongings in advance.」 The trucks had a firmer schedule than I did.`,`
`,`ev`,{"VAR?":`C01_012`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch01.ferry_hub`},{"#f":1}],ferry_time:[`ev`,{"CNT?":`ch00.pier_schedule`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The timetable was the same as yesterday.`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`^The boat timetable hung beside the notice board.`,{"->":`.^.^.^.5`},null]}],`nop`,`^ Two boats a day.`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The afternoon boat was the last. It would sail if the fog lifted, the sign said. `,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`^ The 4:30 p.m. boat had already gone. Next one, tomorrow morning. If the fog lifted. `,{"->":`.^.^.^.15`},null]}],`nop`,`
`,{"->":`ch01.ferry_hub`},{"#f":1}],deduce:[[`^I opened the notebook and laid out the cards. The wind lifted the corner of a page. `,`#`,`^deduce:CH01`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch01.solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.deduce_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.hub`},`
`,{"#f":5}]}],{"#f":1}],deduce_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I shuffled the cards a few times. When I looked up, one window in the lane was still lit.`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^One more set of tooth marks went into the pen cap.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,`^I turned the cards over again. My eyes went from the deck to the log and back.`,`
`,{"->":`ch01.deduce`},{"#f":1}],hint:[{"->":`ch01.deduce`},{"#f":1}],solved:[`^Next to the log’s empty 23:40 box, I copied down the counter reading. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`^“It’s time.” Nineteen seconds later, someone cut the power. `,`#`,`^fx:reveal(conclusion)`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.16`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.24`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I closed the notebook. The rooftops in the lane had gone red. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.33`},null]}],[{"->":`.^.b`},{b:[`
`,`^I closed the notebook. The streetlights were on. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.33`},null]}],`nop`,`
`,`^The restored TAPE 01 was still in my hand. One slot in the archive’s 2003 section sat empty.`,`
`,{"->":`ch01.hub`},{"#f":1}],night:[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`^A fluorescent hum came from the end of the hallway. I had switched those lights off during the day. `,`#`,`^time:night `,`/#`,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio +hum -reel `,`/#`,`#`,`^sfx:sfx_drip`,`/#`,`
`,`^The door wasn’t locked. Wet prints marked the floor in front of it, boot prints heading inside.`,`
`,`^The studio was empty.`,`
`,{"->":`ch01.night_hub`},{"#f":1}],night_hub:[[`ev`,`str`,`^Examine: footprints`,`/str`,{"CNT?":`ch01.footprints`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: village lanes `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch01.night_alley`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: last section`,`/str`,{"CNT?":`ch01.last_shelf`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: back door`,`/str`,{"CNT?":`ch01.footprints`},{"CNT?":`ch01.back_door`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,{"CNT?":`ch01.last_shelf`},`/ev`,{"*":`.^.c-4`,flg:5},{"c-0":[`^ `,{"->":`ch01.footprints`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch01.night_alley`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch01.last_shelf`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch01.back_door`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch01.cliff`},`
`,{"#f":5}]}],{"#f":1}],back_door:[`^The back door’s hinges groaned low. The slope began right at the threshold, and sea wind came up it into my face. `,`#`,`^sfx:sfx_door_wood`,`/#`,`
`,`^Two small boot prints were left on the concrete steps. From the third on, the damp had blurred them.`,`
`,`^I stood there a long time. From below the fog came a scrape of metal. A gate being bolted.`,`
`,`ev`,{"CNT?":`ch01.first_air`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ A scrape of metal I’d heard somewhere before. `,{"->":`.^.^.^.13`},null]}],`nop`,`
`,`^The back door had no bolt. I shut it and set a chair against it. That chair would fall loud.`,`
`,{"->":`ch01.night_hub`},{"#f":1}],footprints:[`^I held the flashlight close to the floor. Rubber boots. The feet weren’t big.`,`
`,`^The prints ended in front of the console, where a rubber mat started.`,`
`,`^The mat ran past the archive to the back door. No handprints in the dust on the console.`,`
`,`^There was no telling whose they were. But they were still wet.`,`
`,{"->":`ch01.night_hub`},{"#f":1}],night_alley:[`^I went outside. On the way to the lanes the wind pushed at my back.`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The store was shut. The windows were dark. A dog barked.`,`
`,{"->":`.^.^.^.9`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The store was shut. One window lit up, then went dark again.`,`
`,{"->":`.^.^.^.9`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The store was shut. Boots sounded behind me. When I turned, the steps stopped. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.9`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The store was shut. A cigarette glowed at each end of the lane.`,`
`,{"->":`.^.^.^.9`},null]}],`nop`,`
`,`^There was nothing to see in the lanes at night, so I went back to the studio.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch01.night_hub`},{"#f":1}],last_shelf:[`^I put the restored TAPE 01 back in the 2003 section.`,`
`,`ev`,{"VAR?":`I_TAPE01`},{"f()":`drop_item`},`pop`,`/ev`,`
`,`^In the last section, as I sorted by year, one label caught my eye.`,`
`,`^The handwriting was different. Every other label fell between 1998 and 2003.`,`
`,`^The label read 「2019.11.14」. `,`#`,`^fx:pause(2)`,`/#`,`
`,`^I pulled the tape. The case had no dust on it. It went into my bag.`,`
`,`ev`,{"VAR?":`I_TAPE_2019`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch01.night_hub`},{"#f":1}],cliff:[`^I switched off the light. The fluorescent hum died. The waves came up. `,`#`,`^amb:amb_sea `,`/#`,`#`,`^allow-amb`,`/#`,`
`,`^The tape in my bag bumped my back with every step.`,`
`,{"->t->":`alert_arrest`},`#`,`^cliff:date`,`/#`,`^November 14, 2019. Sixteen years after the station shut down.`,`
`,`ev`,{"^->":`endings`},`/ev`,{"->t->":`alert_gate`},{"->":`ch02`},{"#f":1}],"#f":1}],ch02:[`#`,`^chapter:2`,`/#`,`#`,`^label:TAPE 02 · Fog Warning`,`/#`,`ev`,2,{"f()":`start_day`},`pop`,`/ev`,`
`,`^Beyond the paper window, a power tiller puttered off toward the mudflats. `,`#`,`^time:morning `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^The tape lay by my pillow. 「2019.11.14」. Tapes don’t move by themselves. I checked anyway, first thing.`,`
`,{"->":`.^.morning`},{morning:[[`ev`,`str`,`^Listen: last broadcast`,`/str`,`/ev`,{"*":`.^.c-0`,flg:20},`ev`,`str`,`^Go: kitchen`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch02.recap`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.kitchen`},`
`,{"#f":5}]}],{"#f":1}],recap:[`^23:39:44. “It’s time.” Then the generator noise cut off all at once. `,`#`,`^sfx:sfx_rewind`,`/#`,`
`,`^The log’s 23:40 slot was empty. Every other fault had been logged, without fail.`,`
`,`ev`,{"CNT?":`ch01.fuel_tell`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The village head’s voice over the store phone. The ledger story had reached his ears.`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch01.fuel_keep`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The general store bench. The fuel talk had stopped there.`,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`^The archive’s last section. Different handwriting. 「2019.11.14」.`,`
`,{"->":`ch02.morning`},{"#f":1}],kitchen:[`^A pot lid clanked in the kitchen, and the landlady came out with a tray.`,`
`,`^“Tide’s going way out today. Morning and evening.” She tipped her chin toward the window.`,`
`,`^She saw the tape in my hand. The tray came down hard.`,`
`,`^“Where’d you get a thing like that?” She didn’t wait to hear. “Soup’s getting cold. Sit.”`,`
`,{"->":`ch02.table`},{"#f":1}],table:[[`ev`,`str`,`^Use: meal `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch02.meal`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: landlady`,`/str`,{"CNT?":`ch02.ask_tide`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch02.meal`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.ask_tide`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.studio_first`},`
`,{"#f":5}]}],{"#f":1}],meal:[`^The soup had oysters in it. The rice was hot.`,`
`,`^On her way past, the landlady added one more spoonful.`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,{"->":`ch02.table`},{"#f":1}],ask_tide:[`^“When the tide’s out, how far can I get? I didn’t bring boots.”`,`
`,`^“To the old wharf. Where the rotten boat is.”`,`
`,`^“Midday, the water comes in. Goes out again come evening. That place ruins your shoes.”`,`
`,`^“Want the tide times, listen to the dawn bulletin. Fishing co-op runs it.”`,`
`,`^The boots out by the door had mud from the flats dried on their soles.`,`
`,{"->":`ch02.table`},{"#f":1}],studio_first:[`^The deck door clicked shut. I had just pushed in the tape from my bedside. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio `,`/#`,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,`^A square in the dust of the lower drawer marked where the postcard box had stood. The first day of removal.`,`
`,`ev`,{"VAR?":`C01_012`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Right on schedule. Postcards on the morning of the 15th, archive shelf C that evening.`,{"->":`.^.^.^.18`},null]}],`nop`,`
`,`^An old receiver sat thick with dust in the corner by the console. Its dial sat near 88. Power that up and the fuse would probably blow first.`,`
`,`^The tape in the deck. 「2019.11.14」. I rested a finger on the play button.`,`
`,{"->":`ch02.studio`},{"#f":1}],studio:[[`ev`,`str`,`^Listen: 2019 tape`,`/str`,{"CNT?":`ch02.yoon`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: archive`,`/str`,{"CNT?":`ch02.shelf`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Listen: TAPE 02`,`/str`,{"CNT?":`ch02.shelf`},{"CNT?":`ch02.tape02`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch02.yoon`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.shelf`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.tape02`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch02.hub`},`
`,{"#f":5}]}],{"#f":1}],yoon:[`ev`,{"CNT?":`.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I pressed rewind. The reels whirred backward. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:YOON_2019`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^I pressed play, and a few bars of an old theme came out. `,`#`,`^tape:YOON_2019 `,`/#`,`#`,`^signal:tape`,`/#`,`
`,`^It was Jaehui Yoon’s voice, lower and slower than yesterday’s.`,`
`,`^“Today is November 14, 2019.” Sixteen years after the station closed. The format was still 「The Midnight Lighthouse」.`,`
`,`^The broadcast called out the name Malsun Seo, a woman who had lost her husband to the seawall work, it said. The show was a send-off for her.`,`
`,`^Somewhere on this island, it said, was a tape of her calling her husband’s name twelve times.`,`
`,`^“Even with no one listening, the broadcast is not over.”`,`
`,`^Static popped at a splice. A razor edit, and not a bad one. The tape ran a few more seconds and ended. `,`#`,`^fx:static(0.4)`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch02.deck_yoon`},{"#f":1}],deck_yoon:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch02.yoon`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.yoon_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.yoon_clean`},`
`,{"#f":5}]}],{"#f":1}],yoon_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^I rubbed the heads with a swab. Its tip yellowed fast. `,`#`,`^tape:YOON_2019`,`/#`,`
`,{"->":`ch02.deck_yoon`},{"#f":1}],yoon_stop:[`ev`,{"CNT?":`ch02.yoon_child`},{"CNT?":`ch02.yoon_notes`},`||`,`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`C02_013`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch02.yoon_child`},{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,{"->":`ch02.yoon_notes`},{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^The reels stopped. I took out the 2019 tape and tucked it inside my jacket. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,{"->":`ch02.studio`},{"#f":1}],yoon_child:[`^I listened again to what followed the marked splice. A child’s voice. “Tonight’s Story is… about my mom.”`,`
`,`^There was no telling whose voice it was. The child said two sentences, then coughed.`,`
`,{"->":`ch02.yoon_stop`},{"#f":1}],yoon_notes:[`^What came after the splice stayed in my ears. A child’s voice. “Tonight’s Story is… about my mom.”`,`
`,`^There was no telling whose voice it was. The child said two sentences, then coughed.`,`
`,`^23:01:43. I copied the counter reading into my notepad.`,`
`,`ev`,{"VAR?":`C02_013`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch02.yoon_stop`},{"#f":1}],shelf:[`^The 2003 section, right next to the slot where I’d put TAPE 01 back yesterday.`,`
`,`^One more label sat there. 「Fog Warning 03.11.14 22:00」. Same day, an hour earlier.`,`
`,`^A logger tape, in a clean case with no mold on it. In this island’s damp, mold should have set in within three months.`,`
`,`ev`,{"VAR?":`I_TAPE02`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^I took the case out and put it in my bag.`,`
`,{"->":`ch02.studio`},{"#f":1}],tape02:[`ev`,{"CNT?":`.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I pressed rewind. The reels whirred backward. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE02`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^I loaded the logger tape into the playback deck and closed the door. `,`#`,`^sfx:sfx_tape_in `,`/#`,`#`,`^tape:TAPE02`,`/#`,`
`,`^The time signal, ten at night. Jaehui Yoon’s voice read the fog warning.`,`
`,`^It ended by saying where to call in an emergency, and then the theme played.`,`
`,`^22:31. The click of a mic switching on. A door opening. Footsteps, several sets.`,`
`,`^“The mic’s on.” After those quiet words, the tape went silent. `,`#`,`^allow-amb`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch02.deck02`},{"#f":1}],deck02:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch02.tape02`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.tape02_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.tape02_clean`},`
`,{"#f":5}]}],{"#f":1}],tape02_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^The tip of the swab I rubbed over the heads went yellow fast. `,`#`,`^tape:TAPE02`,`/#`,`
`,{"->":`ch02.deck02`},{"#f":1}],tape02_stop:[`ev`,{"CNT?":`ch02.tape02_weather`},{"CNT?":`ch02.tape02_notes`},`||`,`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`C02_007`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch02.tape02_weather`},{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,{"->":`ch02.tape02_notes`},{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^I pressed stop. The reels went another half turn and halted. I let the headphones drop around my neck. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,{"->":`ch02.studio`},{"#f":1}],tape02_weather:[`^I played the two marked lines back to back. “The wind is northwest at two meters per second, and waves are around half a meter.”`,`
`,{"->":`ch02.tape02_stop`},{"#f":1}],tape02_notes:[`^I went back over the weather report. “The wind is northwest at two meters per second, and waves are around half a meter.”`,`
`,`^Fog warning. Fishing boats told to stay in. Tomorrow’s first ferry canceled. Light wind, it said, and thick fog.`,`
`,`^22:00:15. I copied the wind-speed line into my notepad.`,`
`,`ev`,{"VAR?":`C02_007`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch02.tape02_stop`},{"#f":1}],hub:[`ev`,{"VAR?":`day_over`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch02.night_end`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Out on the road, water trickled off the mudflats. Gulls walked on the bared mud. `,`#`,`^time:morning`,`/#`,`
`,{"->":`.^.^.^.13`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The sea sounded much closer. The tide was coming in. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.13`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The trickle of draining water came back. Beyond the bared flats, the sun sank and turned the fog red. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.13`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Water slapped against the lip of the breakwater. Over the high water, the streetlights blurred round in the fog. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.13`},null]}],`nop`,`
`,{"->":`ch02.mid_gate`},{"#f":1}],mid_gate:[`ev`,{"CNT?":`ch02.solved`},`!`,{"CNT?":`ch02.mid_board`},`!`,`&&`,{"VAR?":`C02_002`},{"f()":`has_clue`},{"VAR?":`C02_003`},{"f()":`has_clue`},`&&`,{"VAR?":`C02_002`},{"f()":`has_clue`},{"VAR?":`C02_003`},{"f()":`has_clue`},`+`,{"VAR?":`C02_006`},{"f()":`has_clue`},`+`,{"VAR?":`C02_007`},{"f()":`has_clue`},`+`,3,`>=`,`||`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch02.mid_board`},{"->":`.^.^.^.28`},null]}],`nop`,`
`,{"->":`ch02.hub_choices`},{"#f":1}],hub_choices:[[`ev`,`str`,`^Go: Haemu FM studio`,`/str`,{"CNT?":`ch02.solved`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,{"CNT?":`ch02.solved`},`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village lanes`,`/str`,{"VAR?":`timeslot`},3,`<`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village lanes `,`#`,`^risk:alert+10`,`/#`,`/str`,{"VAR?":`timeslot`},3,`==`,{"CNT?":`ch02.night_alley`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`<=`,{"f()":`alert_level`},1,`<`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`<=`,{"f()":`alert_level`},1,`>=`,`&&`,{"CNT?":`ch02.office_locked`},`!`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: police box`,`/str`,{"VAR?":`timeslot`},1,`<=`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Go: old wharf`,`/str`,{"f()":`is_low_tide`},`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Go: old wharf`,`/str`,{"f()":`is_low_tide`},`!`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Go: ferry pier`,`/str`,`/ev`,{"*":`.^.c-9`,flg:4},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,`/ev`,{"*":`.^.c-10`,flg:4},`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch02.solved`},`!`,{"VAR?":`C02_002`},{"f()":`has_clue`},{"VAR?":`C02_003`},{"f()":`has_clue`},`+`,{"VAR?":`C02_006`},{"f()":`has_clue`},`+`,{"VAR?":`C02_007`},{"f()":`has_clue`},`+`,3,`>=`,`&&`,`/ev`,{"*":`.^.c-11`,flg:5},`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch02.solved`},`!`,{"VAR?":`timeslot`},3,`==`,`&&`,{"VAR?":`C02_002`},{"f()":`has_clue`},{"VAR?":`C02_003`},{"f()":`has_clue`},`+`,{"VAR?":`C02_006`},{"f()":`has_clue`},`+`,{"VAR?":`C02_007`},{"f()":`has_clue`},`+`,2,`==`,`&&`,`/ev`,{"*":`.^.c-12`,flg:5},`ev`,`str`,`^Use: end the day`,`/str`,{"CNT?":`ch02.solved`},`!`,{"VAR?":`timeslot`},3,`==`,`&&`,`/ev`,{"*":`.^.c-13`,flg:5},`ev`,`str`,`^Examine: notebook — weather records`,`/str`,{"CNT?":`ch02.solved`},`!`,{"CNT?":`ch02.mid_board`},`&&`,{"CNT?":`ch02.mid_solved`},`!`,`&&`,`/ev`,{"*":`.^.c-14`,flg:5},{"c-0":[`^ `,{"->":`ch02.studio_back`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.night`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.alley`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch02.night_alley`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch02.office`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch02.office_locked`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch02.police`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch02.wreck`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch02.wreck_flooded`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch02.ferry`},`
`,{"#f":5}],"c-10":[`^ `,{"->":`ch02.minbak_day`},`
`,{"#f":5}],"c-11":[`^ `,{"->":`ch02.deduce`},`
`,{"#f":5}],"c-12":[`^ `,{"->":`ch02.deduce`},`
`,{"#f":5}],"c-13":[`^ `,{"->":`ch02.end_night`},`
`,{"#f":5}],"c-14":[`^ `,{"->":`ch02.mid_board`},`
`,{"#f":5}]}],{"#f":1}],end_night:[`^Water washed in along the breakwater. There was nowhere left to walk.`,`
`,`ev`,{"f()":`end_day`},`pop`,`/ev`,`
`,{"->":`ch02.night_end`},{"#f":1}],night_end:[[`ev`,{"CNT?":`ch02.solved`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch02.night`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`^Water slapped and slapped at the lip of the breakwater. House after house went dark. `,`#`,`^time:night`,`/#`,`
`,`^My shoes were damp inside. At this hour, the studio and the pier were all that was open.`,`
`,`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Go: ferry pier`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Examine: notebook`,`/str`,{"VAR?":`C02_002`},{"f()":`has_clue`},{"VAR?":`C02_003`},{"f()":`has_clue`},`+`,{"VAR?":`C02_006`},{"f()":`has_clue`},`+`,{"VAR?":`C02_007`},{"f()":`has_clue`},`+`,2,`>=`,`/ev`,{"*":`.^.c-2`,flg:5},{"c-0":[`^ `,{"->":`ch02.studio_back`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.ferry`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.deduce`},`
`,{"#f":5}]}],{"#f":1}],office_locked:[`^Beyond the door, a telephone rang, then stopped. The knob wouldn’t turn. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`^Cigarette smoke seeped through a gap in the blinds, but no one answered my knock.`,`
`,{"->":`ch02.hub`},{"#f":1}],studio_back:[`^When I opened the door, the papers on the console slid with a whisper in the draft. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,{"VAR?":`C01_012`},{"f()":`has_clue`},`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Archive shelf C was empty. The evening removal, as scheduled. `,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch02.yoon`},{"CNT?":`ch02.tape02`},`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ No more tapes to hear in this room today. The receiver in the corner could wait for tonight, once the work was done. `,{"->":`.^.^.^.25`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch02.yoon`},{"CNT?":`ch02.tape02`},`&&`,{"VAR?":`C02_002`},{"f()":`has_clue`},{"VAR?":`C02_003`},{"f()":`has_clue`},`+`,{"VAR?":`C02_006`},{"f()":`has_clue`},`+`,{"VAR?":`C02_007`},{"f()":`has_clue`},`+`,3,`>=`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The tapes were done. The notebook was what I’d let slide. I’d open it out on the road. `,{"->":`.^.^.^.47`},null]}],`nop`,`
`,{"->":`ch02.studio`},{"#f":1}],minbak_day:[[`^In the empty house, the second hand ticked loud. The landlady was out. The kitchen light was off. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`ev`,{"CNT?":`ch02.yoon`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I put the 2019 tape in the bag’s inside pocket and zipped it shut. `,{"->":`.^.^.^.13`},null]}],[{"->":`.^.b`},{b:[`^ I unzipped the bag and counted the gear. `,{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},{"c-0":[`^ `,{"->":`ch02.hub`},`
`,{"#f":5}]}],{"#f":1}],wreck:[`ev`,{"VAR?":`timeslot`},2,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Water drained off the whole mudflat. Sea fog lay low over the mud. `,`#`,`^loc:wreck `,`/#`,`#`,`^amb:amb_sea `,`/#`,`#`,`^fx:fog`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^All around came the scuttle of crabs ducking into their holes. Water dripped somewhere. `,`#`,`^loc:wreck `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^A sign at the entrance read 「No Entry · Muwol Island Village Office」. One side of the wire fence gaped open.`,`
`,`^When I squeezed through the gap, my jacket snagged on the wire, then came free.`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^A boat lay half sunk in the mud, white letters still on its bow. 「Full Moon」.`,`
`,`^The hull lay on its side. A rope hung from the bow, and the engine room hatch stood open.`,`
`,{"->":`.^.^.^.16`},null]}],[{"->":`.^.b`},{b:[`
`,`^I slipped back through the gap in the fence. The Full Moon lay on its side as before.`,`
`,{"->":`.^.^.^.16`},null]}],`nop`,`
`,{"->":`ch02.wreck_hub`},{"#f":1}],wreck_hub:[[`ev`,`str`,`^Examine: rope`,`/str`,{"CNT?":`ch02.rope`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: engine room `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch02.engine`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch02.rope`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.engine`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.hub`},`
`,{"#f":5}]}],{"#f":1}],rope:[`^I pulled on the mooring line at the bow, thick nylon rope heavy with mud.`,`
`,`^I laid the end on my palm and ran a thumb over it. No knot marks. No frayed strands.`,`
`,`^The cut face was flat and even. A knife had gone through it in one stroke. `,`#`,`^plant:F09`,`/#`,`
`,`ev`,{"VAR?":`C02_002`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^About a fathom of line was left. The other half wasn’t here.`,`
`,{"->":`ch02.wreck_hub`},{"#f":1}],engine:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I climbed down through the hatch, and rusted steel plate rang underfoot. The place still smelled of oil.`,`
`,`^The key sat in the ignition, stuck fast at OFF when I tried it by hand.`,`
`,`^The fuel cock was closed. Mud had hardened on its lever.`,`
`,`ev`,{"VAR?":`C02_010`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^In the toolbox in the corner, under the wrenches, lay a tape wrapped in plastic.`,`
`,`^The label read 「Father’s birthday」. The plastic was wrapped many times over. The innermost layer alone was dry.`,`
`,`ev`,{"VAR?":`ST_youngho`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`ch02.wreck_hub`},{"#f":1}],wreck_flooded:[`^I went as far as the old wharf. Water slapped beneath the wire fence. `,`#`,`^loc:wreck `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^No mudflats. Water rippled where the boat should be. The tip of the bow barely showed above it.`,`
`,`ev`,{"VAR?":`timeslot`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The water wouldn’t go out until evening. `,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`^ The water wouldn’t go out until morning. `,{"->":`.^.^.^.17`},null]}],`nop`,`
`,{"->":`ch02.hub`},{"#f":1}],ferry:[`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Mooring lines creaked on their posts. A smell of rubber leaked through the gap in the net shed’s door. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Between the gulls’ cries, someone was mending nets. A fisherman looked at me, then at the sky. “No wind today.” `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Whoever was shaking out nets by the shed went inside when I arrived. The door closed. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Moored boats knocked against each other. Two people at the end of the pier stood watching me. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`==`,{"VAR?":`timeslot`},0,`==`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ A laminated slip on the notice board caught my eye. 「Fishing co-op dawn bulletin 1▒▒.4」. The middle had faded. `,{"->":`.^.^.^.19`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`<`,{"CNT?":`ch02.escort`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^A stooped old man sat at the end of the breakwater, radio pressed tight to his ear.`,`
`,{"->":`.^.^.^.31`},null]}],[{"->":`.^.b`},{b:[`
`,`^The end of the breakwater was empty. A single streetlight floated on the water.`,`
`,{"->":`.^.^.^.31`},null]}],`nop`,`
`,{"->":`ch02.ferry_hub`},{"#f":1}],ferry_hub:[[`ev`,`str`,`^Examine: net shed`,`/str`,{"CNT?":`ch02.shed`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: sailing register`,`/str`,{"CNT?":`ch02.shed`},{"CNT?":`ch02.logbook`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: Old Park `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},3,`<`,{"CNT?":`ch02.escort`},`!`,`&&`,{"CNT?":`ch02.park_talk`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: radio`,`/str`,{"CNT?":`ch02.park_talk`},{"CNT?":`ch02.escort`},`!`,`&&`,{"VAR?":`timeslot`},3,`<`,`&&`,{"CNT?":`ch02.park_radio`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Use: radio `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch02.shed`},`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Talk: officer`,`/str`,{"VAR?":`timeslot`},3,`==`,{"CNT?":`ch02.police`},`&&`,{"CNT?":`ch02.patrol`},`!`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Listen: Father’s birthday — outside the net shed`,`/str`,{"VAR?":`timeslot`},3,`<`,{"VAR?":`StoryTapes`},{"VAR?":`ST_youngho`},`?`,`&&`,{"CNT?":`ch02.birthday`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-7`,flg:4},{"c-0":[`^ `,{"->":`ch02.shed`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.logbook`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.park_talk`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch02.park_radio`},`
`,{"#f":5}],"c-4":[`^ `,`ev`,`str`,`^ferry`,`/str`,`/ev`,{"->t->":`use_radio_at`},{"->":`.^.^.^`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch02.patrol`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch02.birthday`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch02.hub`},`
`,{"#f":5}]}],{"#f":1}],birthday:[[`^Outside the net shed, a netting needle swished in and out. An old fisherman was mending a net.`,`
`,`^I set the deck on the shed’s doorsill and pressed play. He didn’t even look up. `,`#`,`^sfx:sfx_deck_play`,`/#`,`
`,`^Dishes clinking. Several people sang a birthday song. Clapping broke out.`,`
`,`^The needle didn’t stop. In the last bars of the song, his lips moved along.`,`
`,`^“Dad’s fifty-two. Next year I’ll buy another boat and go bigger.” A young voice on the tape.`,`
`,`^“Yeongho, that one. Wanted more boats before anything. Gave Sangcheol plenty of grief.”`,`
`,`^“But you still have to read the tides for me, Dad,” the tape said. The fisherman nodded.`,`
`,`^“Sangcheol could smell the wind and tell you the tide. When he was gone, I took it over.”`,`
`,`^“The co-op’s dawn bulletin. I’m the one who sits at that mic.”`,`
`,`^Glasses clinked and laughter rose as the tape ran out. That was when the needle stopped, stuck in a mesh.`,`
`,`^“A week after that birthday meal, the dike gave way.”`,`
`,`ev`,{"VAR?":`C02_016`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,`str`,`^“Who worked on the dike?”`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“And Yeongho?”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch02.birthday_dam`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.birthday_son`},`
`,{"#f":5}]}],{"#f":1}],birthday_dam:[`^“Half the men on the island did. Daeseung’s day pay didn’t wait on the weather. It beat fishing.”`,`
`,`^“Then the compensation came. Houses that took it don’t talk about the dike.”`,`
`,`^“Did Sangcheol’s family take it too?”`,`
`,`^“They did. Yeongho never opened that envelope, they say.” The fisherman pulled the net closer.`,`
`,`^“Where is Yeongho now?”`,`
`,{"->":`ch02.birthday_son`},{"#f":1}],birthday_son:[`^“After that, Yeongho went quiet. He was one of the eleven who went out, they say.”`,`
`,`^The fisherman left the needle in the mesh and got up. “Time to check the tides.” He went into the shed.`,`
`,{"->":`ch02.ferry_hub`},{"#f":1}],patrol:[[`^A ballpoint scratched under a streetlight. The officer stood there, notebook propped in one hand.`,`
`,`^“Night patrol,” he said before I could speak.`,`
`,`ev`,{"CNT?":`ch02.cabinet`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “The cabinet matter has been recorded. Tonight is a separate matter.” `,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^Every line of the notebook held a time and a number. 「21:00 NW 2」. 「22:00 NW 2」.`,`
`,`^“You write down the wind too? You’re a human logger.”`,`
`,`^“The duty log has a weather column. Not one day has been missed since I was posted here.”`,`
`,`^He took off his glasses and wiped away the fog on them. “Admittedly, no one ever reads that column.”`,`
`,`ev`,`str`,`^“It was two meters that night in 2003, too.” `,`#`,`^risk:trust_dohyun+1`,`/#`,`/str`,{"VAR?":`C02_003`},{"f()":`has_clue`},{"VAR?":`C02_007`},{"f()":`has_clue`},`||`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^“Have a good night.”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch02.patrol_same`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.patrol_bye`},`
`,{"#f":5}]}],{"#f":1}],patrol_same:[`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^“Same as tonight’s line. Same fog warning.”`,`
`,`^He looked down at the line he had just written.`,`
`,`^“On a night like this, fishermen do not put boats out. That is what I was taught.”`,`
`,`^Below tonight’s line he wrote one more. The hand that wrote the date took its time.`,`
`,`^「2003.11.14 — NW 2」. He underlined it with one straight stroke of the pen.`,`
`,{"->":`ch02.ferry_hub`},{"#f":1}],patrol_bye:[`^The officer nodded. The click of his shoes faded away along the breakwater. `,`#`,`^sfx:sfx_steps_recede`,`/#`,`
`,{"->":`ch02.ferry_hub`},{"#f":1}],shed:[`^The shed door was only latched. When I opened it, the smell of rubber hit me in the face.`,`
`,`^Dozens of pairs of rubber boots hung upside down on the wall above a pile of nets.`,`
`,`^On a shelf sat a grease-stained radio with a marker line drawn across 102 on its dial.`,`
`,`ev`,{"VAR?":`M04`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^The boots are loose. They come up to my knees. Mud grabs my ankles. My face hits the muck. Someone laughs and lifts me under the arms. `,`#`,`^memory:M04 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,`^Ledgers stood on the inner shelf. 「Sailing Register」, the spines marked by year.`,`
`,{"->":`ch02.ferry_hub`},{"#f":1}],logbook:[`^I took out the 2003 register, its paper damp with salt, and turned to November.`,`
`,`^「11.14 Fog warning in effect. All fishing boats barred from sailing.」 One line below that.`,`
`,`^「Full Moon moored, confirmed 18:10」. No stamp, but the writing was the same hand as every other day.`,`
`,`ev`,{"VAR?":`C02_006`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^The next day’s entry read 「11.15 Full Moon absent. Search.」 After that, the Full Moon was never written down again.`,`
`,{"->":`ch02.ferry_hub`},{"#f":1}],park_talk:[[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^The old man didn’t turn around at my footsteps on the breakwater. The radio stayed pressed to his ear.`,`
`,`^“There’s people under the water,” he said, eyes on the sea. “Under the water… You heard it too?” `,`#`,`^plant:F11`,`/#`,`
`,`ev`,{"VAR?":`C02_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,`str`,`^Listen: Old Park’s words `,`#`,`^risk:trust_park+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Sir, about that radio.” `,`#`,`^risk:trust_park-1`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch02.park_listen`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.park_cut`},`
`,{"#f":5}]}],{"#f":1}],park_listen:[`^I stood beside him without a word. Below the breakwater, waves slapped, then slapped again.`,`
`,`^“There’s people under the water. Under the water.” The same words went around three times.`,`
`,`^Then he turned his head. His eyes were clear.`,`
`,`^“Play it at night. Eight eight three.” He looked back at the sea.`,`
`,`ev`,{"^var":`trust_park`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch02.ferry_hub`},{"#f":1}],park_cut:[`^When I cut him off, he closed his mouth and pressed the radio harder to his ear.`,`
`,`^“Radio? Who’s talking about a radio?” he asked back. “You heard it too?”`,`
`,`^“Play it at night. Eight eight three.” After that, whatever I said, the same words came back.`,`
`,`ev`,{"^var":`trust_park`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch02.ferry_hub`},{"#f":1}],park_radio:[`^Up close, the old man’s radio was a worn portable. Its dial sat near 88.`,`
`,`^I put my ear to the speaker. No sound. Not even static. Maybe just a dead speaker. `,`#`,`^allow-amb`,`/#`,`
`,`^Even so, he kept it at his ear.`,`
`,`ev`,{"VAR?":`C02_014`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch02.ferry_hub`},{"#f":1}],alley:[`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,`^A rooster crowed at the mouth of the lane. Above the fog, the sky had gone bright white. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Bundles of bottled water thumped down at the mouth of the lane. Nets hung from every clothesline. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The radio next door clicked off at my footsteps. A curtain closed across one window. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Boots followed, in step with mine. The nets on the clotheslines had all been taken in. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village `,`/#`,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^An empty clothesline whistled in the wind. Someone stood at every window, and no door opened. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Beside every nameplate hung a small sign. 「Built 2004」. Nearly every house in the lane had one.`,`
`,`^The sliding door of the general store at the end of the lane stood open a crack. Crocks lined the yard of the empty house across the way.`,`
`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Tide’s going out far today. Days like this, everyone’s on the mudflats and the store sits idle.” The storekeeper sat fanning on the bench.`,`
`,{"->":`.^.^.^.32`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Canned mackerel came in. No need to buy.” The storekeeper turned the chair toward the radio.`,`
`,{"->":`.^.^.^.32`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The sliding door closed without a sound. Behind the glass, the storekeeper kept turning ledger pages.`,`
`,{"->":`.^.^.^.32`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The store was empty. A hand fan lay on the bench.`,`
`,{"->":`.^.^.^.32`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch02.park_talk`},{"CNT?":`ch02.escort`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Old Park stood at the foot of the empty house’s wall, the radio held to his ear. His legs were shaking. `,{"->":`.^.^.^.41`},null]}],`nop`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],alley_hub:[[`ev`,`str`,`^Examine: plaque`,`/str`,{"CNT?":`ch02.plaque`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: storekeeper — ask indirectly `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch02.owner_talk`},`!`,{"CNT?":`ch02.owner_direct`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: storekeeper — ask directly `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch02.owner_talk`},`!`,{"CNT?":`ch02.owner_direct`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^“It’s about the day eleven people vanished. That boat.” `,`#`,`^risk:alert+5`,`/#`,`/str`,{"CNT?":`ch02.owner_talk`},{"CNT?":`ch02.owner_pry`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Examine: crocks `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch02.jars`},`!`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Use: carry loads `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch02.carry`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Use: walk Old Park home `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5 `,`/#`,`#`,`^risk:trust_park+1`,`/#`,`/str`,{"CNT?":`ch02.park_talk`},{"CNT?":`ch02.escort`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Listen: tape from the crock`,`/str`,{"VAR?":`StoryTapes`},{"VAR?":`ST_malsun`},`?`,{"CNT?":`ch02.twelve`},`!`,`&&`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Listen: utility pole speaker`,`/str`,{"VAR?":`timeslot`},2,`==`,{"CNT?":`ch02.amp`},`!`,`&&`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-9`,flg:4},{"c-0":[`^ `,{"->":`ch02.plaque`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.owner_talk`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.owner_direct`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch02.owner_pry`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch02.jars`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch02.carry`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch02.escort`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch02.twelve`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch02.amp`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch02.hub`},`
`,{"#f":5}]}],{"#f":1}],amp:[`^The speaker atop the utility pole crackled. A dog in the lane barked ahead of it, then stopped. `,`#`,`^sfx:sfx_static_burst`,`/#`,`
`,`^“Testing, testing. This is the village office.” The village head’s voice, flattened. A horn like that cut everything above three kilohertz.`,`
`,`^“Fog warning. No boats out tonight, yeah? Wind’s light. Fog’s thick.”`,`
`,`^“Stay off the shore at night. That’s all.” The speaker cut off with a thunk. `,`#`,`^sfx:sfx_switch`,`/#`,`
`,`ev`,{"f()":`alert_level`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The storekeeper on the bench looked up at the speaker.`,`
`,`^“Back then, Yoon read it again on the radio.”`,`
`,`^“Wind speed and all.” The storekeeper got up and gathered the cups. “Batteries sold well back then. Everyone lived with a radio on.”`,`
`,{"->":`.^.^.^.21`},null]}],[{"->":`.^.b`},{b:[`
`,`^Beyond the store’s sliding door, a radio switch clicked off. The dog barked once more.`,`
`,{"->":`.^.^.^.21`},null]}],`nop`,`
`,`ev`,{"VAR?":`C02_017`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],twelve:[`^I set the portable deck on the empty house’s porch and clicked play. `,`#`,`^sfx:sfx_deck_play`,`/#`,`
`,`^Behind the sound of the wind, a woman’s voice called a name. “Deoksu Lim.”`,`
`,`ev`,{"CNT?":`ch02.park_talk`},{"CNT?":`ch02.escort`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch02.twelve_park`},{"->":`.^.^.^.14`},null]}],`nop`,`
`,{"->":`ch02.twelve_alone`},{"#f":1}],twelve_park:[`^Old Park, at the foot of the wall, turned his head, and the radio came down from his ear to his chest.`,`
`,`^At that first name, one of his fingers folded down. At the second, another.`,`
`,`^“Deoksu Lim. Have you eaten?” The old man’s lips moved with the tape.`,`
`,`^When all five fingers were folded, the other hand took over.`,`
`,`^“Call twelve times and he comes, they said.” That was the woman on the tape. The old man nodded.`,`
`,`^The last three came out in one breath, and he called those aloud along with her.`,`
`,`^The tape ended. All ten fingers were folded. Two short.`,`
`,`^“Deoksu.” The old man spoke half a beat behind the tape. “Deoksu is under the water.”`,`
`,`^“Where under the water?”`,`
`,`^He didn’t look at the sea. He looked inland, toward a gray dike caught in the fog.`,`
`,`^The radio went back up to his ear. Click.`,`
`,`ev`,{"VAR?":`C02_015`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],twelve_alone:[`^Around the second name, a window across the lane shut.`,`
`,`^“Deoksu Lim. Cold down there, isn’t it?”`,`
`,`^The name was called twelve times. No house answered.`,`
`,`^The tape ended.`,`
`,`^A low voice came from beyond the wall. No face showed.`,`
`,`^“The whole island knows Deoksu’s name. Stop playing that.”`,`
`,`^Footsteps faded away along the wall. `,`#`,`^sfx:sfx_steps_recede`,`/#`,`
`,`ev`,{"VAR?":`C02_015`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],plaque:[`^On a shelf at the back of the store, a wooden plaque stood propped on a box of instant noodles.`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I read it through the glass door. `,{"->":`.^.^.^.9`},null]}],[{"->":`.^.b`},{b:[`^ I wiped the dust off with a fingertip. `,{"->":`.^.^.^.9`},null]}],`nop`,`
`,`^「Haemu Society — In appreciation of the village rebuilding, 2004」. Dated December 2004. `,`#`,`^plant:F12`,`/#`,`
`,`ev`,{"VAR?":`C02_005`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],owner_talk:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_indirect`},1,`+`,`/ev`,{"VAR=":`asked_indirect`,re:!0},`^I sat on the bench. The storekeeper poured coffee into two paper cups. `,`ev`,{"CNT?":`ch01.rumor_soft`},{"CNT?":`ch01.fuel_keep`},`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^Lots of sugar again.`,{"->":`.^.^.^.20`},null]}],[{"->":`.^.b`},{b:[`^Lots of sugar.`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`^“There’s a boat buried at the old wharf. The Full Moon. Leave it much longer and even I can’t save it.”`,`
`,`^“The Full Moon? It was tied up at the pier until that evening. Saw it myself.”`,`
`,`^He nodded toward the sea. “By night it was gone.”`,`
`,`ev`,{"VAR?":`C02_012`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“Swept off in the storm, they say. More boats back then. Business was better.”`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],owner_direct:[`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_direct`},1,`+`,`/ev`,{"VAR=":`asked_direct`,re:!0},`^I stayed on my feet. “The Full Moon. How did it get out that night?”`,`
`,`^The storekeeper got up and wiped down the bench. It was already clean.`,`
`,`^“It was tied up at the pier until that evening. Saw it myself. By night it was gone.”`,`
`,`ev`,{"VAR?":`C02_012`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“Swept off in the storm, they say. That’s how the Elder settled it.”`,`
`,`^“Bottled water comes in today. I’m busy. Who’s going to haul all that?”`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],owner_pry:[`^“How did a boat that was tied up get out?”`,`
`,`^The storekeeper picked up a can of mackerel and set it in front of me.`,`
`,`^“That was the Elder’s business. Don’t bring it up outside the store, either. Cans keep a long time, too.” The sliding door half closed.`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],jars:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I went into the yard of the empty house, where the porch had caved in. Six crocks stood in a row along the wall.`,`
`,`^I opened the lids one by one. Rainwater, rainwater, an empty crock. The fourth lid was heavy.`,`
`,`^Inside lay a tape wrapped in plastic, with no label. Pencil writing inside the lid read 「Twelve times」.`,`
`,`ev`,{"VAR?":`ST_malsun`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],carry:[`^I moved three bundles of bottled water over by the bench. My wrists ached.`,`
`,`^The storekeeper cleared a spot on the bench. `,`ev`,{"CNT?":`ch01.carry`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^“You hauled for me yesterday too. Sit a while. Coffee’s going cold.”`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`^“Sit a while. Coffee’s going cold.”`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],escort:[`^I took his arm. It weighed almost nothing. He didn’t shake me off.`,`
`,`^The house at the top of the lane had no nameplate. I sat him on the porch. He set the radio on his knees.`,`
`,`^“Under the water.” He closed his eyes.`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_park`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch02.alley_hub`},{"#f":1}],office:[`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,`^Beyond the fog, the sun was a pale smudge. The morning was gone. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The whir of a fan. Over it, the rustle of turning pages. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`ev`,{"CNT?":`ch02.contra_who`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^“Back again. Leave the papers behind this time?” The village head laughed first.`,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`^“There you are. Sit.” The village head was smiling.`,{"->":`.^.^.^.14`},null]}],`nop`,`^ `,`ev`,{"CNT?":`ch01.office`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The rendering was spread out wider than yesterday.`,{"->":`.^.^.^.21`},null]}],[{"->":`.^.b`},{b:[`^A rendering was spread wide across the desk.`,{"->":`.^.^.^.21`},null]}],`nop`,`
`,`^To flatten a corner, he took his left hand from his pocket.`,`
`,`^A long, straight scar ran across the palm, healed rough. `,`#`,`^plant:F08`,`/#`,`
`,`ev`,{"VAR?":`C02_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^The left hand pinned the rendering, then went straight back into the pocket.`,`
`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`
`,`^The fan rattled as it turned. `,`ev`,{"CNT?":`ch02.contra_who`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The truck was back outside the office.`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`^The village head hadn’t left his chair.`,{"->":`.^.^.^.7`},null]}],`nop`,`^ `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`ev`,{"CNT?":`ch02.mid_solved`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Back again. The office more fun than the tapes?” The village head laughed and shut a drawer. `,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch02.mid_solved`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “My paperwork’s growing.” “Is it? Write it all down. Once the resort comes in, it all gets cleaned up.” `,{"->":`.^.^.^.26`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch02.mid_solved`},{"CNT?":`ch02.wreck`},`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Your jacket’s snagged. That wharf fence bites.” The village head tipped his chin at my sleeve. “You saw the sign, right?” `,{"->":`.^.^.^.34`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch02.mid_solved`},`!`,{"CNT?":`ch02.scar`},`&&`,{"CNT?":`ch02.bp_talk`},`&&`,{"CNT?":`ch02.storm`},`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Anything else? If not, I’ve got calls to make.” He picked up the phone. `,{"->":`.^.^.^.47`},null]}],`nop`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,{"->":`ch02.office_hub`},{"#f":1}],office_hub:[[`ev`,`str`,`^“What happened to your hand?”`,`/str`,{"CNT?":`ch02.scar`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: village head — ask indirectly `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch02.bp_talk`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: village head — ask directly `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch02.storm`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^“There was an old man on the breakwater with a radio.”`,`/str`,{"CNT?":`ch02.park_talk`},{"CNT?":`ch02.park_ask`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-4`,flg:4},{"c-0":[`^ `,{"->":`ch02.scar`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.bp_talk`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.storm`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch02.park_ask`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch02.hub`},`
`,{"#f":5}]}],{"#f":1}],scar:[`^The village head pulled his left hand from his pocket and waved it. He was smiling.`,`
`,`^“Caught it on a net, way back. Every fisherman’s hand looks like this.”`,`
`,`^The scar cut straight across the middle of the palm. Neat editing, for a net.`,`
`,{"->":`ch02.office_hub`},{"#f":1}],bp_talk:[[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_indirect`},1,`+`,`/ev`,{"VAR=":`asked_indirect`,re:!0},`^The village head’s right hand moved over the rendering, and a walking trail ran from the pier to the lighthouse.`,`
`,`^“The old wharf goes in here too. Clear out the rotten boat, lay down a deck.”`,`
`,`ev`,`str`,`^“The rendering looks good.” `,`#`,`^risk:trust_taeo+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Why is the boat at the old wharf still there?”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch02.bp_agree`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.bp_wreck`},`
`,{"#f":5}]}],{"#f":1}],bp_agree:[`^“Right? The county said so too.”`,`
`,`^He slapped his knee and laughed. The rendering jumped on the desk.`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch02.office_hub`},{"#f":1}],bp_wreck:[`^“Who’s going to drag that out of the mud? Even hauling it off costs money.”`,`
`,`^He rubbed the old wharf on the rendering with his palm. “Once the resort comes in, it all gets cleaned up.”`,`
`,{"->":`ch02.office_hub`},{"#f":1}],storm:[`ev`,{"CNT?":`ch02.contra_who`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^“Still sticking with the storm?”`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`^“The night of November 14, 2003. What was the weather like? I can’t hear any wind in the noise.”`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^The string tied to the fan fluttered.`,`
`,`^“That was some storm. Enough to blow a boat away.” He pointed out the window.`,`
`,`^“And they put a boat out on a night like that… A shame, every one of them.”`,`
`,`ev`,{"CNT?":`ch02.contra_who`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ He had seen those numbers, and the story hadn’t changed. `,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`ev`,{"VAR?":`C02_008`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_direct`},1,`+`,`/ev`,{"VAR=":`asked_direct`,re:!0},{"->":`ch02.office_hub`},{"#f":1}],park_ask:[`^“He said there were people under the water.”`,`
`,`^“Old Park? He’s got dementia. Can’t take him at his word.” The village head waved a hand.`,`
`,`^“Used to keep the lighthouse, but these days he mixes up his own son’s name. No use asking him anything, Ms. Han.”`,`
`,{"->":`ch02.office_hub`},{"#f":1}],police:[`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,`^Outside the police box, the rope slapped against the steel flagpole. The flag flapped in the fog. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^An old fluorescent starter clicked. The scratch of a ballpoint went on. `,`#`,`^loc:police `,`/#`,`#`,`^amb:amb_police`,`/#`,`
`,`^A young officer in a new uniform was writing in a notebook. He pushed his glasses back up.`,`
`,`^The name tag on his chest read 「Dohyeon Lee」.`,`
`,`^“What is this regarding?” The pen didn’t stop.`,`
`,`^“The missing-persons case from November 2003. Can I see the records? My tapes have the date but not the story.”`,`
`,`^“Closed cases require a public records request.” He took a form from a file tray.`,`
`,`ev`,{"VAR?":`C02_011`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“If procedure is followed, everything comes out. That is what I was taught.”`,`
`,`^Behind the desk stood a steel cabinet with the key in the lock.`,`
`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`
`,`^The fluorescent starter clicked. The officer kept writing without looking up. `,`#`,`^loc:police `,`/#`,`#`,`^amb:amb_police`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,{"->":`ch02.police_hub`},{"#f":1}],police_hub:[[`ev`,`str`,`^Use: request form `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:trust_dohyun+1`,`/#`,`/str`,{"CNT?":`ch02.apply`},`!`,{"CNT?":`ch02.cabinet`},`!`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: cabinet `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert+15`,`/#`,`/str`,{"CNT?":`ch02.apply`},`!`,{"CNT?":`ch02.cabinet`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: weather log`,`/str`,{"CNT?":`ch02.apply`},{"CNT?":`ch02.cabinet`},`||`,{"CNT?":`ch02.weather`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch02.apply`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.cabinet`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.weather`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch02.hub`},`
`,{"#f":5}]}],{"#f":1}],apply:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I filled out the form: name, purpose, even the scope of access. The officer checked it box by box.`,`
`,`^“For restoration purposes, a summary copy can be provided.” He opened the cabinet.`,`
`,`^A file went down on the desk. 「2003 Muwol Island Missing Fishing Boat — Closed」.`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch02.docs`},{"#f":1}],cabinet:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^The two-way radio squawked. The officer closed the notebook and stepped out. “Please wait a moment.”`,`
`,`^When the door shut, I turned the key in the cabinet.`,`
`,`^I pulled out the file. 「2003 Muwol Island Missing Fishing Boat — Closed」. Dust came off on my fingertips.`,`
`,`ev`,15,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch02.docs`},{"#f":1}],docs:[`^A one-page summary. 「11.14, night: lost in a storm. Found: fishing boat wreckage (old wharf). No bodies.」`,`
`,`^「11 declared missing. Closed.」 The summary ended there.`,`
`,`ev`,{"VAR?":`C02_009`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^Tucked at the back of the file was another thin binder. 「Muwol Island Weather Log 2003」.`,`
`,{"->":`ch02.police_hub`},{"#f":1}],weather:[`ev`,{"CNT?":`ch02.cabinet`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I took out the log and followed the lines for November 14 with a finger.`,`
`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`
`,`^“There’s a weather log at the back. Appendices are my favorite part.”`,`
`,`^“Weather data is not restricted.” The officer turned the file around. November 14.`,`
`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^「18:00 fog warning in effect. 21:00 wind 2 m/s. 24:00 wind 2 m/s. Waves 0.5 m.」 `,`#`,`^plant:F10`,`/#`,`
`,`ev`,{"VAR?":`C02_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"CNT?":`ch02.cabinet`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The door opened. The officer stood in the doorway, eyes going from the cabinet to my hands.`,`
`,`^“…That is outside the scope of access.” He took out the notebook and wrote down the time.`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`.^.^.^.23`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Readings were taken twice, at 21:00 and 24:00. There is no 22:00 value.” Nobody had mentioned 22:00.`,`
`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,{"->":`ch02.police_hub`},{"#f":1}],deduce:[`^I opened the notebook. The cards were damp with salt.`,`
`,`ev`,{"CNT?":`ch02.present_dohyun`},`!`,{"CNT?":`ch02.present_taeo`},`!`,`&&`,{"CNT?":`ch02.contra_lost`},`!`,`&&`,{"VAR?":`C02_008`},{"f()":`has_clue`},{"VAR?":`C01_010`},{"f()":`has_clue`},`||`,`&&`,{"VAR?":`C02_003`},{"f()":`has_clue`},{"VAR?":`C02_007`},{"f()":`has_clue`},`||`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch02.contra`},{"->":`.^.^.^.25`},null]}],`nop`,`
`,{"->":`ch02.deduce_q`},{"#f":1}],contra:[[`ev`,{"CNT?":`ch02.mid_solved`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^Time to take the papers to the village office.`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`^I decided to start with the village office.`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^A fan rattled behind the village office door. I knocked. I kept knocking until it opened. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^“You’ll break my door down at this hour. Sit.” The village head was smiling.`,{"->":`.^.^.^.22`},null]}],[{"->":`.^.b`},{b:[`^“There you are. Sit.” The village head was smiling.`,{"->":`.^.^.^.22`},null]}],`nop`,`
`,`^I laid the cards side by side on the desk, next to the rendering. `,`ev`,{"VAR?":`C02_008`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^“Tell me about that storm again. I’m not recording.”`,{"->":`.^.^.^.31`},null]}],[{"->":`.^.b`},{b:[`^“Tell me about the weather that night. The island has a story going around.”`,{"->":`.^.^.^.31`},null]}],`nop`,`^ `,`#`,`^confront:C2_STORM`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch02.contra_who`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.contra_lost`},`
`,{"#f":5}]}],{"#f":1}],contra_hint:[{"->":`ch02.contra`},{"#f":1}],contra_rec:[{"->":`ch02.contra`},{"#f":1}],contra_who:[[`^His laugh got there first. He came around the desk and slapped my shoulder.`,`
`,`^“Our technician’s thorough. We hired you to fix tapes, and you’re fixing the weather.”`,`
`,`^“At two meters, the guesthouse laundry stays on the line.” His hand stayed on my shoulder.`,`
`,`^“Earlier you said it was tied up till evening. Now it went out that afternoon?”`,`
`,`^He went on smiling and hit the fan’s switch. The blades slowed. The papers on the desk settled.`,`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^“That’s it for tonight.”`,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`^“Think I’ll close early today.”`,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`^He picked up his keys and went out first. Soon a truck engine started.`,`
`,`^I went out to the road with the two cards stacked in my hand. The truck hadn’t left. Someone was coming up the road.`,`
`,`ev`,`str`,`^Talk: officer `,`#`,`^risk:trust_dohyun+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Talk: village head `,`#`,`^risk:alert+10 `,`/#`,`#`,`^risk:trust_taeo-1`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch02.present_dohyun`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.present_taeo`},`
`,{"#f":5}]}],{"#f":1}],contra_lost:[`^I pushed a card across the desk.`,`
`,`ev`,{"VAR?":`C02_008`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^“You said it was a storm. But if you look at this—”`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`^“People say it was a storm that night. But if you look at this—”`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^He glanced at it and dragged his chair in close.`,`
`,`^“Ms. Han, what do you plan to do with that? I was the one here that night.”`,`
`,`^He flicked the card back to me with a finger. I shut the door behind me on my way out.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch02.deduce_q`},{"#f":1}],present_dohyun:[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Hard shoes clicked closer. The officer. On patrol, he said.`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^A flashlight beam came first, then the click of shoes. The officer. Night patrol, he said.`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^“I just asked the village head about the weather that night. His answer changed twice.”`,`
`,`ev`,{"VAR?":`C02_003`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“The log has two meters at 21:00 and at 24:00. The village head seems not to know.”`,`
`,`^“The 24:00 reading is technically 00:00 on the 15th.” A correction no one needed.`,`
`,`ev`,{"CNT?":`ch02.cabinet`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “You saw those numbers outside the scope of access. That is also on record.” `,{"->":`.^.^.^.9`},null]}],`nop`,`
`,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`
`,`^I handed over the headphones. The 22:00 fog warning broadcast. Wind two meters per second, waves half a meter.`,`
`,`^He held one side of the headphones to his ear. “That is the 22:00 broadcast. By the time signal.”`,`
`,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`^“If that is what the records say, then the records are right.”`,`
`,`^He wrote the date and the wind speed in the notebook, then added in the next column: 「Village head — storm」.`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch02.deduce_q`},{"#f":1}],present_taeo:[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^A truck idled beside the office. The village head rolled his window halfway down.`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^Truck headlights cut through the fog. The village head rolled down the window.`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,{"VAR?":`C02_008`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^“You said it was a storm. I’ll be carrying these numbers around.”`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`^“People say it was a storm. I’ll be carrying these numbers around.”`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`ev`,{"VAR?":`C02_003`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I pressed the log card against the window frame with my palm.`,`
`,{"->":`.^.^.^.23`},null]}],[{"->":`.^.b`},{b:[`
`,`^I held out the headphones. He didn’t take them.`,`
`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,`^He rested an arm on the window frame. The corners of his mouth stayed up. `,`#`,`^fx:pause(1)`,`/#`,`
`,`ev`,{"VAR?":`C02_003`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Whatever’s written on paper, I was the one here that night.”`,`
`,`^I slid the log card back into the notebook.`,`
`,{"->":`.^.^.^.36`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Whatever the broadcast said, I was the one here that night.”`,`
`,`^I wound the headphone cord around my hand. “22:00:15. I counted the seconds myself.”`,`
`,{"->":`.^.^.^.36`},null]}],`nop`,`
`,`^“I’m saying this for the island. Your job is the tapes, Ms. Han. Yeah?” The window rolled up.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch02.deduce_q`},{"#f":1}],deduce_q:[[`ev`,{"VAR?":`timeslot`},3,`==`,{"VAR?":`C02_002`},{"f()":`has_clue`},{"VAR?":`C02_003`},{"f()":`has_clue`},`+`,{"VAR?":`C02_006`},{"f()":`has_clue`},`+`,{"VAR?":`C02_007`},{"f()":`has_clue`},`+`,3,`<`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Two cards. I laid them side by side and looked for a long time.`,`
`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^.^`},1,`==`,{"CNT?":`ch02.mid_solved`},{"CNT?":`ch02.contra_who`},`||`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The wind and the time I only had to copy over. The blank was the boat. `,{"->":`.^.^.^.32`},null]}],`nop`,`
`,`^At the top of the page, I wrote one question. How did the Full Moon leave? `,`#`,`^deduce:CH02`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch02.solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.deduce_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.hub`},`
`,{"#f":5}]}],{"#f":1}],deduce_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I held on to the notebook while the night tide came in. Its corners curled in the damp.`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^Two salt-damp cards had stuck together. I pried them apart with a thumbnail.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,`^I moved the rope card next to the log card.`,`
`,{"->":`ch02.deduce_q`},{"#f":1}],hint:[{"->":`ch02.deduce_q`},{"#f":1}],solved:[`^Someone had cut the Full Moon’s mooring line with a knife. `,`#`,`^sfx:sfx_deduce `,`/#`,`#`,`^fx:reveal(conclusion)`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.22`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^By the time I closed the notebook, the sea fog had come down into the lanes. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.31`},null]}],[{"->":`.^.b`},{b:[`
`,`^By the time I closed the notebook, the streetlights were on. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.31`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch02.park_talk`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Eight eight three. I repeated Old Park’s numbers under my breath. `,{"->":`.^.^.^.38`},null]}],[{"->":`.^.b`},{b:[`^ The old receiver in the studio corner came to mind. Its dial had stopped near 88. `,{"->":`.^.^.^.38`},null]}],`nop`,`
`,{"->":`ch02.hub`},{"#f":1}],mid_board:[[`ev`,{"CNT?":`.^.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Water washed in and out along the breakwater. I opened the notebook.`,`
`,`^Every sheet I’d gathered recorded the same night. Paper has no static. That made it harder to trust. I checked them against each other, the way I’d match tapes.`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^I laid out the cards, numbers first. Their wet corners stuck together. `,`#`,`^deduce:CH02_MID`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch02.mid_solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.mid_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.hub_choices`},`
`,{"#f":5}]}],{"#f":1}],mid_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I stood a long time holding the notebook. By then the water had covered one more row of breakwater stones.`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch02.mid_board`},{"#f":1}],mid_solved:[`^The numbers agreed. No boat had any reason to go out that night. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`ev`,{"VAR?":`C02_008`},{"f()":`has_clue`},{"VAR?":`C01_010`},{"f()":`has_clue`},`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ What didn’t agree was what people said. `,{"->":`.^.^.^.13`},null]}],`nop`,`
`,{"->":`ch02.hub_choices`},{"#f":1}],night:[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`^Footsteps echoed in the hallway, mine alone. The fluorescent lights were off. `,`#`,`^time:night `,`/#`,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,`^I switched on the lights. The receiver still sat under its dust, in the corner by the console.`,`
`,{"->":`ch02.night_hub`},{"#f":1}],night_hub:[[`ev`,`str`,`^Use: receiver`,`/str`,{"CNT?":`ch02.radio_on`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: dial`,`/str`,{"CNT?":`ch02.radio_on`},{"CNT?":`ch02.dial`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village lanes `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch02.night_alley`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,{"CNT?":`ch02.dial`},`/ev`,{"*":`.^.c-3`,flg:5},{"c-0":[`^ `,{"->":`ch02.radio_on`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch02.dial`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch02.night_alley`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch02.cliff`},`
`,{"#f":5}]}],{"#f":1}],radio_on:[`^I flipped the switch. The fuse held. Static burst from the speaker. `,`#`,`^sfx:sfx_static_burst`,`/#`,`
`,`^The needle trembled near 88, the same spot as the static on the boat the night I arrived. `,`#`,`^fx:static(0.6)`,`/#`,`
`,`ev`,{"VAR?":`C02_014`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The radio on the breakwater had made no sound. This receiver at least gave static. `,`#`,`^allow-amb`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`^I rested a hand on the dial knob.`,`
`,{"->":`ch02.night_hub`},{"#f":1}],dial:[`^I took hold of the dial and turned it slowly. `,`#`,`^radio:87.9 `,`/#`,`#`,`^t3:first_883`,`/#`,`
`,`^At 88.3 the static cleared, and a voice came up.`,`
`,`ev`,{"VAR?":`C02_013`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The same voice as the 2019 tape I’d heard today. `,{"->":`.^.^.^.16`},null]}],[{"->":`.^.b`},{b:[`^ The same voice I’d heard on TAPE 01 yesterday. `,{"->":`.^.^.^.16`},null]}],`nop`,`
`,`^A recording made twenty-three years ago wouldn’t say “for twenty-three years.”`,`
`,{"->":`ch02.night_hub`},{"#f":1}],night_alley:[`^I went outside. Wind off the breakwater followed me into the lanes.`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A curtain was drawn across the general store’s glass door. Not one window was lit. A dog barked in the distance.`,`
`,{"->":`.^.^.^.9`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A curtain was drawn across the store’s glass door. One window lit up when I passed, then went dark.`,`
`,{"->":`.^.^.^.9`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Boots followed me past the curtained store to the mouth of the lane. When I turned, they stopped. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.9`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^No one stood outside the curtained store. Two at the mouth of the lane, two at the far end. None of them turned a head as I passed.`,`
`,{"->":`.^.^.^.9`},null]}],`nop`,`
`,`^The store was shut. I went back the way I came.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"CNT?":`ch02.solved`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch02.night_hub`},{"->":`.^.^.^.23`},null]}],`nop`,`
`,{"->":`ch02.hub`},{"#f":1}],cliff:[`^I switched off the receiver. Then the lights. `,`#`,`^sfx:sfx_switch `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^Before shutting the door, I looked back once more. The dial had stopped at 88.3.`,`
`,{"->t->":`alert_arrest`},`#`,`^cliff:reception`,`/#`,`^This is Haemu FM, on air for twenty-three years.`,`
`,`ev`,{"^->":`endings`},`/ev`,{"->t->":`alert_gate`},{"->":`ch03`},{"#f":1}],"#f":1}],ch03:[`#`,`^chapter:3`,`/#`,`#`,`^label:TAPE 03 · Power Cut`,`/#`,`ev`,3,{"f()":`start_day`},`pop`,`/ev`,`
`,`^First, the scrape of the gate bolt. Boots crossed the yard toward the kitchen. `,`#`,`^time:morning `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^On air for twenty-three years, the voice on the receiver had said last night.`,`
`,`^Fog had come down into the yard. Beyond the paper window everything was white.`,`
`,{"->":`.^.morning`},{morning:[[`ev`,`str`,`^Listen: last broadcast`,`/str`,`/ev`,{"*":`.^.c-0`,flg:20},`ev`,`str`,`^Go: kitchen`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch03.recap`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.kitchen`},`
`,{"#f":5}]}],{"#f":1}],recap:[`^The studio at night. The receiver’s dial stopped at 88.3. The static cleared. `,`#`,`^sfx:sfx_rewind`,`/#`,`
`,`^“This is Haemu FM, on air for twenty-three years.”`,`
`,`ev`,{"VAR?":`C02_002`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The wreck on the mudflat. The end of its mooring line had been cut with a knife.`,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`ev`,{"VAR?":`C02_003`},{"f()":`has_clue`},{"VAR?":`C02_007`},{"f()":`has_clue`},`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ No storm in the records for that night. Wind, two meters per second.`,{"->":`.^.^.^.22`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch02.present_dohyun`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The officer wrote the date and the wind speed in his notebook.`,{"->":`.^.^.^.28`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch02.present_taeo`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The truck window rolled up.`,{"->":`.^.^.^.34`},null]}],`nop`,`
`,{"->":`ch03.morning`},{"#f":1}],kitchen:[`^The landlady set down the tray without a word. Steam rose from the soup.`,`
`,`^“What’re you going to that tower for?” No one had brought it up. “Just eat.”`,`
`,`^The boots by the door still had wet earth on their soles.`,`
`,{"->":`ch03.table`},{"#f":1}],table:[[`ev`,`str`,`^Use: meal `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5 `,`/#`,`#`,`^risk:trust_sunrye+1`,`/#`,`/str`,{"CNT?":`ch03.meal`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: landlady`,`/str`,{"CNT?":`ch03.ask_tower`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch03.meal`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.ask_tower`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.leave_studio`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch03.leave_hub`},`
`,{"#f":5}]}],{"#f":1}],meal:[`^The soup was hot and full of seaweed.`,`
`,`^The landlady cleared the empty bowls. Her rough hand brushed the back of mine in passing.`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_sunrye`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch03.table`},{"#f":1}],ask_tower:[`^“I’m going to look at the transmitter room. I need to see where the signal died.”`,`
`,`^The landlady pushed a dishcloth toward me. “Wipe the table.”`,`
`,`^“Don’t you go up that tower. When the wind blows, the steel cries. It’ll ruin your ears.”`,`
`,`^“Door’s locked up there anyway.”`,`
`,{"->":`ch03.table`},{"#f":1}],leave_studio:[{"->t->":`ch03.tail`},{"->":`ch03.studio_enter`},{"#f":1}],leave_hub:[{"->t->":`ch03.tail`},{"->":`ch03.hub`},{"#f":1}],tail:[`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Out past the yard, boots sounded behind me. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,`^I looked back. No one at the corner of the lane. The sound had stopped too.`,`
`,`^When I walked on, it followed again. Just one set.`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],studio_enter:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The fluorescent hum bounced off a bare wall, louder now. The spot beside the console where the logger had been was empty. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,`^Four bolt holes and a square free of dust. It had gone out this morning.`,`
`,`^A key box on the wall had hooks lined up behind its glass door. The broadcast log was still in the drawer.`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^My footsteps sounded loud in front of the wall where the logger had been ripped out. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch03.studio`},{"#f":1}],studio:[[`ev`,`str`,`^Examine: key box`,`/str`,{"CNT?":`ch03.keybox`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: broadcast log `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch03.logbook_back`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: archive`,`/str`,{"CNT?":`ch03.shelf2003`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Use: noise reduction unit`,`/str`,{"VAR?":`I_FILTER`},{"f()":`has_item`},{"VAR?":`tool_filter`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Listen: TAPE 01 (filter)`,`/str`,{"VAR?":`I_FILTER`},{"f()":`has_item`},{"VAR?":`tool_filter`},`||`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Use: blank cassette`,`/str`,{"VAR?":`C03_005`},{"f()":`has_clue`},{"CNT?":`ch03.copy`},`!`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: transmitter room`,`/str`,`/ev`,{"*":`.^.c-6`,flg:4},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-7`,flg:4},{"c-0":[`^ `,{"->":`ch03.keybox`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.logbook_back`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.shelf2003`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch03.connect`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch03.tape01`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch03.copy`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch03.tower`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch03.hub`},`
`,{"#f":5}]}],{"#f":1}],keybox:[`^The key box wasn’t locked. Each hook carried a paper tag.`,`
`,`^「Storeroom」「Office」「Transmitter room」. The transmitter room key was the one without rust, shiny from handling.`,`
`,`^I pocketed it, tag and all.`,`
`,`ev`,{"VAR?":`I_KEY_TOWER`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch03.studio`},{"#f":1}],logbook_back:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I took out the broadcast log again and this time paged backward from the back cover.`,`
`,`^The last page. Pencil had pressed grooves into the inside of the cover, over a spot rubbed out with an eraser.`,`
`,`^With the cover tilted to the light, the grooves were legible. 「Emergency ▒▒.7 — lighthouse」. `,`#`,`^plant:F13`,`/#`,`
`,`^The first two digits had blurred under a water stain. No date, no signature.`,`
`,`ev`,{"VAR?":`C03_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.studio`},{"#f":1}],shelf2003:[`^The 「2003.11」 slip on the front of the 2003 section had been torn off, and the glue marks were rough.`,`
`,`^Yet TAPE 01 was in its place. The section marker was all that had been torn away.`,`
`,`ev`,{"CNT?":`ch02.shelf`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The slip had still been there yesterday, when I took out TAPE 02. `,{"->":`.^.^.^.8`},null]}],`nop`,`^Over the glue were scratches left by a fingernail.`,`
`,{"->":`ch03.studio`},{"#f":1}],connect:[{"->t->":`ch03.connect_do`},`ev`,{"VAR?":`difficulty`},2,`<`,{"CNT?":`ch03.tape01`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^TAPE 01’s label showed in the archive’s 2003 section.`,`
`,{"->":`.^.^.^.10`},null]}],`nop`,`
`,{"->":`ch03.studio`},{"#f":1}],connect_do:[`^I set the unit down beside the deck. The connector I’d pulled from the rack fit the back of it.`,`
`,`^I plugged in the cable and switched on the power. A relay inside the unit clicked in.`,`
`,`^The texture of the static changed in the headphones. From coarse sand to fine.`,`
`,`ev`,!0,`/ev`,{"VAR=":`tool_filter`,re:!0},`ev`,`void`,`/ev`,`->->`,{"#f":1}],tape01:[`ev`,{"VAR?":`tool_filter`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch03.connect_do`},{"->":`.^.^.^.5`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I wound the tape back to the start, and the counter returned to 0. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE01`,`/#`,`
`,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`
`,`^I took TAPE 01 from the archive and loaded it. The door closed. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,`^With the filter on, I pressed play, and the generator noise dropped by half. `,`#`,`^tape:TAPE01`,`/#`,`
`,`^Beneath the static, the long damaged stretch surfaced in pieces. Five pieces. Where the tape had stretched, the sound smeared, and I had to find the seams by ear.`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,{"->":`ch03.deck01`},{"#f":1}],deck01:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch03.tape01`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.deck01_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.deck01_clean`},`
`,{"#f":5}]}],{"#f":1}],seg_restore:[{"->":`ch03.deck01`},{"#f":1}],deck01_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^I wiped the heads and rollers with alcohol-soaked cotton. The cotton turned brown.`,`
`,{"->":`ch03.tape01`},{"#f":1}],deck01_stop:[`^I pressed stop and took off the headphones. Dust floated under the fluorescent lights. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`ev`,{"VAR?":`C03_005`},{"f()":`has_clue`},{"CNT?":`ch03.deck01_done`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch03.deck01_done`},{"->":`.^.^.^.13`},null]}],`nop`,`
`,{"->":`ch03.studio`},{"#f":1}],deck01_done:[`^The old man in the restored stretch spoke low and slow.`,`
`,`^I wrote the order of the spliced pieces on a memo slip and tucked it under the glass on the console.`,`
`,{"->":`ch03.studio`},{"#f":1}],copy:[`^A blank cassette came out of the box under the drawer. I connected the playback deck to the kit’s recording deck.`,`
`,`^I copied the whole restored stretch across. 9 minutes 37 seconds. On the label, I wrote only 「R1」.`,`
`,`^The original went back into the archive and the copy into my inside jacket pocket. Probably the safest spot on the island.`,`
`,`ev`,{"VAR?":`I_TAPE_COPY`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch03.studio`},{"#f":1}],tower:[`ev`,{"VAR?":`timeslot`},`/ev`,[`du`,`ev`,3,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The steelwork groaned in the dark. One note each time the wind pushed the tower. `,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower `,`/#`,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The cable at the top of the tower slapped against the steel in the wind. The sun had gone down behind the fog. `,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower `,`/#`,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Each time the wind shifted, the sound in the steelwork moved from the high girders to the low. `,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower `,`/#`,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Wind whistled through steelwork I couldn’t see for the fog. `,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower `,`/#`,`#`,`^time:morning`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^A generator sat under a cover in the yard below the tower.`,`
`,`^Two flights up the steel stairs, a concrete room clung to the frame. The transmitter room.`,`
`,`^A rusted padlock hung on the steel door at the landing.`,`
`,`^Paint on the cement beside the door read 「High Voltage · Authorized Personnel Only」.`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`==`,{"CNT?":`ch03.night_alert`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch03.night_alert`},{"->":`.^.^.^.26`},null]}],`nop`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],night_alert:[`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Boots followed me on the way up. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,`^When I stopped, the boots behind me stopped too. I didn’t look back.`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^No lights at the foot of the tower. The first step of the stairs was lost in fog.`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],tower_hub:[[`ev`,`str`,`^Use: transmitter room key`,`/str`,{"CNT?":`ch03.door_key`},`!`,{"CNT?":`ch03.door_force`},`!`,`&&`,{"VAR?":`I_KEY_TOWER`},{"f()":`has_item`},`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: force the door `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch03.door_key`},`!`,{"CNT?":`ch03.door_force`},`!`,`&&`,{"VAR?":`I_KEY_TOWER`},{"f()":`has_item`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: breaker`,`/str`,{"CNT?":`ch03.door_key`},{"CNT?":`ch03.door_force`},`||`,{"CNT?":`ch03.breaker`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: rack`,`/str`,{"CNT?":`ch03.door_key`},{"CNT?":`ch03.door_force`},`||`,{"CNT?":`ch03.rack`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Use: raise the breaker `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch03.rack`},{"CNT?":`ch03.breaker_up`},`!`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Listen: TAPE 03`,`/str`,{"CNT?":`ch03.breaker_up`},{"CNT?":`ch03.tape03`},`!`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Use: remove the noise reduction unit`,`/str`,{"CNT?":`ch03.breaker_up`},{"CNT?":`ch03.take_unit`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Examine: output log `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch03.door_key`},{"CNT?":`ch03.door_force`},`||`,{"CNT?":`ch03.output_log`},`!`,`&&`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Go: tower stairs `,`#`,`^risk:alert+5`,`/#`,`/str`,{"VAR?":`timeslot`},3,`<`,{"CNT?":`ch03.stairs`},`!`,`&&`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Examine: top of the tower `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},3,`==`,{"CNT?":`ch03.tower_light`},`!`,`&&`,`/ev`,{"*":`.^.c-9`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-10`,flg:4},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-11`,flg:4},{"c-0":[`^ `,{"->":`ch03.door_key`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.door_force`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.breaker`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch03.rack`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch03.breaker_up`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch03.tape03`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch03.take_unit`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch03.output_log`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch03.stairs`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch03.tower_light`},`
`,{"#f":5}],"c-10":[`^ `,{"->":`ch03.studio_enter`},`
`,{"#f":5}],"c-11":[`^ `,{"->":`ch03.hub`},`
`,{"#f":5}]}],{"#f":1}],door_key:[`^The key fit the padlock, but the rust made me work my wrist.`,`
`,`^The steel door swung inward. A damp smell of iron hit my face.`,`
`,`^It was dark inside. Racks filled one wall. On the wall beside them, a breaker box stood open.`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],door_force:[`^The padlock was old. I wedged a pry bar into the gap and leaned my weight on it.`,`
`,`^The shackle snapped and ricocheted off the concrete wall. The noise climbed the tower.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^The steel door opened. Dark inside. Racks filled one wall. A breaker box was fixed to the wall beside them.`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],breaker:[`^The breaker box. The main lever was down. OFF.`,`
`,`^The plate beside the lever had a mark on it: one palm, four fingers smeared from top to bottom.`,`
`,`^The handprint was pressed into the paint. A hand had pushed the lever down.`,`
`,`^The slip of paper under the lever had an 「Inspection」 stamp, an empty date box, and no signature. A log like that would have cost me my job.`,`
`,`ev`,{"VAR?":`C03_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],rack:[`^The rack had five shelves: transmitter, modulator, monitor deck, one empty shelf.`,`
`,`^On the top shelf, the dust had been wiped clean from the one spot where a cassette sat.`,`
`,`^The handwritten label read 「Power Cut · 2004.11.14」.`,`
`,`^I picked up the cassette and put it in my pocket.`,`
`,`ev`,{"VAR?":`I_TAPE03`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^On the bottom shelf sat the 「Noise Reduction Unit」, a drawer-type module with a handle.`,`
`,`^The rack had no power, so the unit’s lamp was off.`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],breaker_up:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I gripped the lever. Cold. I pushed up against heavy resistance until it gave.`,`
`,`^Clunk. `,`#`,`^sfx:sfx_breaker`,`/#`,`
`,`ev`,{"VAR?":`M05`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^Click. Every light on the desk with all the lights goes out at once. Dark. Someone shouts beyond the glass. `,`#`,`^memory:M05 `,`/#`,`#`,`^sfx:sfx_memory `,`/#`,`#`,`^sfx:sfx_generator_off`,`/#`,`
`,`^The rack came to life. A fan began to spin, and the noise reduction unit’s lamp came on green.`,`
`,`^I plugged the headphones into the unit. The hiss sank by about half. The unit still worked.`,`
`,`^Its connector would fit the studio deck.`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],tape03:[`ev`,{"CNT?":`.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I wound the tape back to the start. The counter rolled backward and stopped at 0. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE03`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^I put the cassette in the monitor deck. The door closed. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,`^I put on the headphones. Waves, far off. A voice over them. `,`#`,`^tape:TAPE03`,`/#`,`
`,`^Jaehui Yoon. The same voice as TAPE 01. A little lower.`,`
`,`^“Even with no one listening, the broadcast is not over.” It ended with the clunk of a stop button.`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch03.deck03`},{"#f":1}],deck03:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch03.tape03`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.tape03_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.tape03_clean`},`
`,{"#f":5}]}],{"#f":1}],tape03_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^Each pass of the alcohol-soaked cotton over the heads and rollers came away brown. `,`#`,`^tape:TAPE03`,`/#`,`
`,{"->":`ch03.deck03`},{"#f":1}],tape03_stop:[`ev`,{"CNT?":`ch03.tape03_hands`},{"CNT?":`ch03.tape03_notes`},`||`,`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`C03_006`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch03.tape03_hands`},{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,{"->":`ch03.tape03_notes`},{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^I stopped the tape. When I took off the headphones, the rack’s fan noise came back. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],tape03_hands:[`^I played the two marked lines back to back. “The generator did not stop. The breaker went down.”`,`
`,`^“Four pairs of hands pulled that breaker down. They were young hands.” `,`#`,`^fx:static(0.5) `,`/#`,`#`,`^sfx:sfx_static_burst`,`/#`,`
`,{"->":`ch03.tape03_stop`},{"#f":1}],tape03_notes:[`^I went back over the breaker passage. “Four pairs of hands pulled that breaker down. They were young hands.” `,`#`,`^fx:static(0.5) `,`/#`,`#`,`^sfx:sfx_static_burst`,`/#`,`
`,`^The 1:02 mark. I took the sentence down in my notepad.`,`
`,`ev`,{"VAR?":`C03_006`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.tape03_stop`},{"#f":1}],take_unit:[`^I unscrewed the unit’s drawer and pulled two cables. The lamp went off.`,`
`,`^I lifted the whole drawer out in my arms. Heavy. The rack had one more empty shelf.`,`
`,`ev`,{"VAR?":`I_FILTER`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],output_log:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^A ledger was tied with wire to a hook beside the rack. 「Transmitter Output Log」.`,`
`,`^November 14, 2003. 23:00, output normal. 23:30, normal.`,`
`,`^From 23:40 on, the entries read output 0. In the remarks column, one word: “Inspection.” The signature box was empty.`,`
`,`^Every page after that was blank to the end.`,`
`,`ev`,{"VAR?":`C03_014`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],stairs:[`^The steel stairs rang underfoot. Each step a different note. Badly tuned.`,`
`,`^I climbed twelve more steps above the transmitter room. The railing shook in my hand. Rust lay thick at every joint.`,`
`,`^The fog had come down from above until I couldn’t see three or four steps up. I came back down.`,`
`,`^Someone below was looking up at the tower. They turned away before our eyes could meet.`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],tower_light:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I looked up at the top of the tower. The mount for the aircraft warning light was empty.`,`
`,`^A single light hung there. Small and yellow. It didn’t waver. `,`#`,`^fx:fog`,`/#`,`
`,`^I climbed two steps. The light went out.`,`
`,`^The light had been there. A drop of water fell from the steelwork onto the back of my neck.`,`
`,`ev`,{"VAR?":`C03_013`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.tower_hub`},{"#f":1}],hub:[`ev`,{"VAR?":`day_over`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ `,{"->":`ch03.night_end`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The sea sounded from the road. The sun hung white above the fog. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The sea had gone quieter. The fog had turned red. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The wind shifted, and the sound of the sea moved around behind me. A single streetlight made a round glow in the fog. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch03.solved`},`!`,{"CNT?":`ch03.mid_board`},`!`,`&&`,{"VAR?":`C03_004`},{"f()":`has_clue`},`&&`,{"VAR?":`C03_005`},{"f()":`has_clue`},`&&`,{"VAR?":`C03_006`},{"f()":`has_clue`},`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch03.mid_board`},{"->":`.^.^.^.39`},null]}],`nop`,`
`,{"->":`ch03.hub_choices`},{"#f":1}],hub_choices:[[`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Go: transmitter room`,`/str`,{"CNT?":`ch03.solved`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: transmitter tower`,`/str`,{"CNT?":`ch03.solved`},`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: police box`,`/str`,{"VAR?":`timeslot`},2,`<`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: village lanes`,`/str`,{"VAR?":`timeslot`},3,`<`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`==`,{"f()":`alert_level`},1,`<`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`==`,{"f()":`alert_level`},1,`>=`,`&&`,{"CNT?":`ch03.office_locked`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Go: ferry pier`,`/str`,{"VAR?":`timeslot`},3,`<`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,{"CNT?":`ch03.solved`},`!`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,{"CNT?":`ch03.solved`},`/ev`,{"*":`.^.c-9`,flg:5},`ev`,`str`,`^Listen: studio receiver`,`/str`,{"CNT?":`ch03.solved`},{"VAR?":`timeslot`},3,`==`,`&&`,{"CNT?":`ch03.radio883`},`!`,`&&`,`/ev`,{"*":`.^.c-10`,flg:5},`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch03.solved`},`!`,{"VAR?":`C03_004`},{"f()":`has_clue`},{"VAR?":`C03_005`},{"f()":`has_clue`},`+`,{"VAR?":`C03_006`},{"f()":`has_clue`},`+`,{"VAR?":`C03_007`},{"f()":`has_clue`},`+`,3,`>=`,`&&`,`/ev`,{"*":`.^.c-11`,flg:5},`ev`,`str`,`^Examine: notebook — transmitter room`,`/str`,{"CNT?":`ch03.solved`},`!`,{"CNT?":`ch03.mid_board`},`&&`,{"CNT?":`ch03.mid_solved`},`!`,`&&`,`/ev`,{"*":`.^.c-12`,flg:5},`ev`,`str`,`^Use: end the day`,`/str`,{"CNT?":`ch03.solved`},`!`,{"VAR?":`timeslot`},3,`==`,`&&`,`/ev`,{"*":`.^.c-13`,flg:5},{"c-0":[`^ `,{"->":`ch03.studio_enter`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.tower`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.night_tower`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch03.police`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch03.alley`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch03.office`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch03.office_locked`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch03.ferry`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch03.minbak_day`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch03.night_minbak`},`
`,{"#f":5}],"c-10":[`^ `,{"->":`ch03.night_studio`},`
`,{"#f":5}],"c-11":[`^ `,{"->":`ch03.deduce`},`
`,{"#f":5}],"c-12":[`^ `,{"->":`ch03.mid_board`},`
`,{"#f":5}],"c-13":[`^ `,{"->":`ch03.end_night`},`
`,{"#f":5}]}],{"#f":1}],end_night:[`^The groan of the steelwork drifted down from the tower. I stood where I was.`,`
`,`ev`,{"f()":`end_day`},`pop`,`/ev`,`
`,{"->":`ch03.night_end`},{"#f":1}],night_end:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^A boiler hummed faintly from the guesthouse. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch03.solved`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch03.deduce`},{"->":`.^.^.^.13`},null]}],`nop`,`
`,{"->":`ch03.night_minbak`},{"#f":1}],office_locked:[`^The handle caught with a clunk. Inside, a fan was running. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`^A shadow moved behind the blinds. I tried the handle again.`,`
`,{"->":`ch03.hub`},{"#f":1}],minbak_day:[`^The tick of the wall clock reached all the way to the porch. The landlady was out, and the boots by the door were gone too. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^In my room I checked my bag, zipped it, and pushed it under the blanket.`,`
`,{"->":`ch03.minbak_room`},{"#f":1}],minbak_room:[[`ev`,`str`,`^Use: radio `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},2,`>=`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,`ev`,`str`,`^minbak`,`/str`,`/ev`,{"->t->":`use_radio_at`},{"->":`.^.^.^`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.hub`},`
`,{"#f":5}]}],{"#f":1}],police:[`^The two-way radio crackled with no voices in it. `,`#`,`^loc:police `,`/#`,`#`,`^amb:amb_police`,`/#`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The officer rose from the desk and left the notebook open.`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Today is a little…” He glanced at the door. “There was a complaint. At 9:12. Regarding an outsider.”`,`
`,`^“I cannot give you the copy. Orders from above.” He closed the notebook.`,`
`,{"->":`.^.^.^.10`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"CNT?":`ch02.apply`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “The request you filed yesterday is ready.” `,{"->":`.^.^.^.6`},null]}],[{"->":`.^.b`},{b:[`^ “The 2003 case? Normally that starts with a public records request… But a public copy is available.”`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^A file marked 「Public Copy」 lay on the desk.`,`
`,{"->":`.^.^.^.10`},null]}],`nop`,`
`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`
`,`^The officer looked up and wrote the time in the notebook.`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,{"->":`ch03.police_hub`},{"#f":1}],police_hub:[[`ev`,`str`,`^Talk: officer `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:trust_dohyun+1`,`/#`,`/str`,{"f()":`alert_level`},2,`<`,{"CNT?":`ch03.case_file`},`!`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: officer — case file`,`/str`,{"CNT?":`ch03.case_file`},{"CNT?":`ch03.torn_page`},{"CNT?":`ch03.signature`},`||`,`&&`,{"CNT?":`ch03.record_talk`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: personal details`,`/str`,{"CNT?":`ch03.case_file`},{"CNT?":`ch03.redacted`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: statements`,`/str`,{"CNT?":`ch03.case_file`},{"CNT?":`ch03.statements`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Examine: page numbers`,`/str`,{"CNT?":`ch03.case_file`},{"CNT?":`ch03.torn_page`},`!`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Examine: signature`,`/str`,{"CNT?":`ch03.case_file`},{"CNT?":`ch03.signature`},`!`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^“Is that your father?” `,`#`,`^risk:trust_dohyun-1`,`/#`,`/str`,{"CNT?":`ch03.case_file`},{"CNT?":`ch03.ask_father`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Examine: lost-at-sea ruling`,`/str`,{"CNT?":`ch03.case_file`},{"CNT?":`ch03.conclusion_doc`},`!`,`&&`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^“Could we lay it beside the weather log?”`,`/str`,{"CNT?":`ch03.conclusion_doc`},{"CNT?":`ch03.weather_cross`},`!`,`&&`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Examine: desk drawer `,`#`,`^risk:alert+10 `,`/#`,`#`,`^risk:trust_dohyun-1`,`/#`,`/str`,{"CNT?":`ch03.drawer`},`!`,`/ev`,{"*":`.^.c-9`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-10`,flg:4},{"c-0":[`^ `,{"->":`ch03.case_file`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.record_talk`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.redacted`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch03.statements`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch03.torn_page`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch03.signature`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch03.ask_father`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch03.conclusion_doc`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch03.weather_cross`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch03.drawer`},`
`,{"#f":5}],"c-10":[`^ `,{"->":`ch03.hub`},`
`,{"#f":5}]}],{"#f":1}],case_file:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^“Could I see the records on the 2003 missing-persons case? A copy’s fine. Copies are my trade.”`,`
`,`^“This is the copy cleared for release.” The officer slid the file over. “Under disclosure rules, personal details are redacted.”`,`
`,`^The file still smelled of the copier when I opened it. A fresh copy.`,`
`,`ev`,{"VAR?":`I_CASE_FILE`},{"f()":`get_item`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch03.police_hub`},{"#f":1}],redacted:[`^Every name on the list of the missing was blacked out in marker.`,`
`,`^Eleven lines gave roles and nothing more. Host, radio writer, teacher, nurse, homemaker, woman diver. The rest were fishermen.`,`
`,`^The age and address columns were black with marker too. No filter clears that kind of noise.`,`
`,{"->":`ch03.police_hub`},{"#f":1}],statements:[`^Four statements, headed 「Haemu Society Youth Association · Station Patrol」. The names were blacked out and the ages left.`,`
`,`^22, 21, 23, 20. “Left the youth association hall at 23:30. Patrolled the station perimeter. Nothing to report.”`,`
`,`^All four matched word for word. On tape, I’d have suspected a dub.`,`
`,`^The blank in the broadcast log was 23:40.`,`
`,`ev`,{"VAR?":`C03_007`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.police_hub`},{"#f":1}],torn_page:[`^I followed the page numbers. 14, 15, 17. No 16.`,`
`,`^The bottom margin of page 15 carried the copied edge of a torn sheet.`,`
`,`^The page had already been torn from the original. The officer was looking at the same spot. `,`#`,`^plant:F15`,`/#`,`
`,`^“I did not notice when I made the copy. Yesterday, at 14:20.” I hadn’t asked the time.`,`
`,`ev`,{"VAR?":`C03_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.police_hub`},{"#f":1}],signature:[`^The last page carried the case officer’s signature. 「Sgt. Lee」. The seal was faint.`,`
`,`^I looked at the officer’s name tag. 「Dohyeon Lee」. The same surname.`,`
`,`ev`,{"CNT?":`ch03.ask_father`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^He looked down at my finger on the signature. “Yes. He is my father. His rank at the time was sergeant.” It said so right there.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`ev`,{"VAR?":`C03_010`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.police_hub`},{"#f":1}],ask_father:[`ev`,{"CNT?":`ch03.signature`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Sgt. Lee, right here.” I put a finger on the signature.`,`
`,`^The officer took off his glasses. Wiped the lenses. Put them back on. `,`#`,`^fx:pause(2)`,`/#`,`
`,`^“…He is my father. He was in charge of the initial investigation.” `,`#`,`^fx:slow`,`/#`,`
`,`^“He would have followed procedure. That is what I was taught.”`,`
`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`
`,`^“The officer here in 2003 was your father, wasn’t he?”`,`
`,`^“On what grounds do you say that?”`,`
`,`^“Under disclosure rules, questions about the case officer’s personal details cannot be answered.”`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,{"->":`ch03.police_hub`},{"#f":1}],conclusion_doc:[`^「Lost-at-Sea Ruling」. Finding: fishing boat capsized in a storm, all aboard presumed missing. Dated November 16.`,`
`,`^The next page. 「Report of Fishing Boat Wreckage Found」. Dated November 19.`,`
`,`^Ruling on the 16th, wreckage on the 19th. At first I took it for pages swapped in the copier.`,`
`,`ev`,{"VAR?":`C03_009`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.police_hub`},{"#f":1}],weather_cross:[`^“I only trust two tracks played together.”`,`
`,`ev`,{"VAR?":`C02_003`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The officer took the weather log from yesterday’s file and laid it beside the ruling.`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^The officer took a file from the cabinet. The weather log from its back pages went beside the ruling.`,`
`,`ev`,{"VAR?":`C02_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^The night of November 14. Wind two meters per second. Fog warning. Waves half a meter. `,`#`,`^payoff:F10`,`/#`,`
`,`^The ruling. Capsized in a storm. November 16. Wreckage found. November 19.`,`
`,`^He looked from one sheet to the other and opened the notebook. Not a line got written. `,`#`,`^fx:pause(2)`,`/#`,`
`,`^“…If that is what the records say.” Nothing came after that.`,`
`,{"->":`ch03.police_hub`},{"#f":1}],record_talk:[[`^I closed the file and looked at the officer. “Is this the whole record? Copies always have a gap somewhere.”`,`
`,`^“Yes,” the officer said at once. “Closed cases require a public records request. That is the procedure.” `,`#`,`^confront:C3_RECORD`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch03.record_win`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.record_lose`},`
`,{"#f":5}]}],{"#f":1}],record_win:[`^The officer opened the file again and read the page numbers aloud. 14, 15, 17.`,`
`,`^“I cannot say it is complete. I will make a note of it.”`,`
`,`^A line went into the notebook.`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch03.police_hub`},{"#f":1}],record_lose:[`^“The public copy matches the original exactly.” The officer pushed the file to the edge of the desk.`,`
`,`^After that, only regulation clauses came back.`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch03.police_hub`},{"#f":1}],drawer:[`^The desk phone rang. The officer turned away and picked up the receiver.`,`
`,`^I pulled the desk drawer. It slid out without a sound.`,`
`,`^The original file, 「2003 Missing · Closed」. A page from the middle had been torn out. Not the copier’s doing.`,`
`,`^The receiver went down. He was looking at the drawer.`,`
`,`^“That is not available for viewing. I will record the time you opened it.”`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch03.police_hub`},{"#f":1}],office:[`^The creak of a fan turning its head. Over it, the village head’s laugh. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“There you are. Sit.” The village head got the first word in.`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`^A frame on the wall read 「Haemu Society Youth Association 2003」. A steel safe stood beside the desk, a palm’s width from the wall.`,`
`,`ev`,{"CNT?":`ch03.safe_push`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Plastic caught the light deep in the gap.`,`
`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`>`,{"CNT?":`ch03.safe`},`&&`,{"CNT?":`ch03.safe_push`},`!`,`&&`,{"VAR?":`difficulty`},2,`<`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The gap my hand couldn’t get into before. Scrape marks showed under the safe.`,`
`,{"->":`.^.^.^.40`},null]}],`nop`,`
`,{"->":`ch03.office_hub`},{"#f":1}],office_hub:[[`ev`,`str`,`^Use: push the safe `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch03.safe_push`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: roster `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch03.roster`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: safe`,`/str`,{"CNT?":`ch03.safe`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Talk: village head — ask indirectly `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:trust_taeo+1`,`/#`,`/str`,{"CNT?":`ch03.ask_resort`},`!`,{"CNT?":`ch03.ask_youth`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Talk: village head — ask directly `,`#`,`^risk:alert+10 `,`/#`,`#`,`^risk:trust_taeo-1`,`/#`,`/str`,{"CNT?":`ch03.ask_resort`},`!`,{"CNT?":`ch03.ask_youth`},`!`,`&&`,{"VAR?":`C03_007`},{"f()":`has_clue`},`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-5`,flg:4},{"c-0":[`^ `,{"->":`ch03.safe_push`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.roster`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.safe`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch03.ask_resort`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch03.ask_youth`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch03.hub`},`
`,{"#f":5}]}],{"#f":1}],roster:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^The roster in the frame. 「Haemu Society Youth Association · 2003」. Head: Tae-o Kang. Three members.`,`
`,`^Handprints overlapped on the glass over the members’ names.`,`
`,`^The village head sat with his back to that frame. I lifted it a little and looked at the back board.`,`
`,`^One line in ballpoint. 「Radio 95.5」.`,`
`,`ev`,{"VAR?":`C03_008`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.office_hub`},{"#f":1}],safe:[`^The dial on the steel safe wouldn’t turn. Rust had locked it in place.`,`
`,`ev`,{"CNT?":`ch03.safe_push`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The safe stood as far from the wall as my shoulder had pushed it. The gap was empty.`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^The gap between safe and wall was one palm wide. The plastic lay deep inside.`,`
`,`^I reached in. My wrist caught before I could get to the plastic.`,`
`,`^The safe wasn’t fixed to the wall. Scrape marks on the floor traced an arc beneath it.`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch03.office_hub`},{"#f":1}],safe_push:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^“Mind if I push this? Something fell behind it. Poor storage conditions.” The village head laughed and waved a hand.`,`
`,`^I pushed with my shoulder. A scrape across the floor. His laugh broke off, and he looked down at the mark on the floor. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^I pulled a plastic bag from the gap. One cassette, labeled 「Ledger」.`,`
`,`^I slipped it inside my jacket before he looked up. “Just a dust bunny. Occupational habit.”`,`
`,`ev`,{"VAR?":`ST_gitaek`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`ch03.office_hub`},{"#f":1}],ask_resort:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_indirect`},1,`+`,`/ev`,{"VAR=":`asked_indirect`,re:!0},`^“When does construction on the resort start? My deadline hangs on it.”`,`
`,`^“Spring. We clear the station site first.” The village head tipped his chin toward the rendering.`,`
`,`^“Back in the day, the youth association boys were in and out of there. On patrol, they said.”`,`
`,`^“When your work’s done, I’ll invite you to the observation deck opening, Ms. Han. I mean it.”`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch03.office_hub`},{"#f":1}],ask_youth:[[`ev`,{"VAR?":`asked_direct`},1,`+`,`/ev`,{"VAR=":`asked_direct`,re:!0},`^“The youth association, back in 2003. The station patrol on November 14. The statements say nothing to report. My tapes disagree.”`,`
`,`^The office filled with the village head’s laugh. The pen he set down was lost in it.`,`
`,[`ev`,{"CNT?":`ch03.police`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“Went to the police box, I hear? Officer Lee shows you all sorts, huh.”`,`
`,{"->":`.^.^.^.14`},null]}],[`ev`,{"CNT?":`ch03.tower`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“Went up to the transmitter room, I hear? It’s dangerous up there. The steel’s rotting.”`,`
`,{"->":`.^.^.^.14`},null]}],[`ev`,{"CNT?":`ch03.studio_enter`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“At the station first thing in the morning, I hear? Hard worker.”`,`
`,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Somebody said they saw you on the road this morning.”`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`^I hadn’t told the village head where I’d been today.`,`
`,`ev`,{"VAR?":`C03_011`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^He pulled his chair in. “In fog season the youth association walked the village patrol.” `,`#`,`^confront:C3_PATROL`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch03.patrol_win`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.patrol_lose`},`
`,{"#f":5}]}],{"#f":1}],patrol_win:[`^I read out the departure time from the four statements. 23:30. The station perimeter.`,`
`,`^“A generator out of fuel doesn’t stop like that. It stumbles first. It doesn’t cut off all at once.”`,`
`,`^The village head leaned across the desk. The smile came close.`,`
`,`^“Seojin, the boys did a patrol. That’s all you need to know.”`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch03.office_hub`},{"#f":1}],patrol_lose:[`^“It was done for the island. Let’s leave it there.”`,`
`,`^The village head pushed his chair back.`,`
`,`ev`,15,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch03.office_hub`},{"#f":1}],ferry:[`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Waves slapped at the pilings in fits and starts, at no steady interval. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Between the waves, a chair scraped. Two net menders got up and went around behind the shed. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The shed door rattled in the wind. Two people stood in the shade of the shed. When I came closer, there was one. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The scrape of rope on the pilings was the loudest thing there. People lined the pier all the way to the end. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^The net shed door stood open. The smell of rubber came out past the doorway.`,`
`,`^Old Park sat in front of the shed, radio to his ear. The dial light was off.`,`
`,{"->":`ch03.ferry_hub`},{"#f":1}],ferry_hub:[[`ev`,`str`,`^Talk: Old Park `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch03.park_talk`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: net pile `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch03.nets`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch03.park_talk`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.nets`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.hub`},`
`,{"#f":5}]}],{"#f":1}],park_talk:[[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I sat down beside Old Park. The radio was off. He held it to his ear anyway.`,`
`,`^“There’s people under the water,” he said. “Under the water… You heard it too?”`,`
`,`ev`,`str`,`^Hear him out `,`#`,`^risk:trust_park+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Cut him off`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch03.park_listen`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.park_cut`},`
`,{"#f":5}]}],{"#f":1}],park_listen:[`^I nodded. He said the same words three more times. Waves came in between them.`,`
`,`^The fourth time, the words changed.`,`
`,`^“A breaker won’t come down from above. A hand brings it down.” `,`#`,`^fx:pause(1)`,`/#`,`
`,`^He moved the radio to his other ear. After that, he talked only of tides and waves.`,`
`,`ev`,{"^var":`trust_park`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch03.ferry_hub`},{"#f":1}],park_cut:[`^“Sir, it’s about the transmitter room. In 2003.”`,`
`,`^“Two thousand three? Ask Sangcheol about that.” He shifted his grip on the radio. “There’s people under the water.”`,`
`,`^However long I waited, the words stayed the same. I got up.`,`
`,{"->":`ch03.ferry_hub`},{"#f":1}],nets:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^Inside the shed, the smell of rubber was overpowering. Piles of net reached the walls.`,`
`,`^Under the bottom pile, two layers of black plastic were pressed into a gap in the floor.`,`
`,`^One cassette. No label. Inside the case, in ballpoint: “Dongcheol.”`,`
`,`ev`,{"VAR?":`ST_dongcheol`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`ch03.ferry_hub`},{"#f":1}],alley:[`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Wet laundry slapped behind a wall. I hadn’t expected anyone to hang washing in this fog. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^TV noise dropped house by house ahead of me. Behind me it came back up. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The house in front, the house beside. Doors shut one after another. Boots kept one corner behind me. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village `,`/#`,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Door latches clacked from house to house. I was the only one left in the lane. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^The general store’s sliding door stood half open.`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Back again. The yogurt drinks expire today. Two for you, or three?” The storekeeper sat fanning on the bench.`,`
`,{"->":`.^.^.^.18`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Out of cigarettes. All that’s left is the village office’s share.” The storekeeper said it all to a spot past my shoulder.`,`
`,{"->":`.^.^.^.18`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Delivery didn’t come, so I’m shutting up shop. Come by tomorrow, I’ll save you a yogurt drink.” The storekeeper smiled and shut the door. A latch clicked into place.`,`
`,{"->":`.^.^.^.18`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The storekeeper was nowhere to be seen. A fly sat on a teacup on the bench.`,`
`,{"->":`.^.^.^.18`},null]}],`nop`,`
`,{"->":`ch03.alley_hub`},{"#f":1}],alley_hub:[[`ev`,`str`,`^Talk: storekeeper `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch03.rumor_park`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: carry loads `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch03.carry`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch03.rumor_park`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.carry`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.hub`},`
`,{"#f":5}]}],{"#f":1}],rumor_park:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I sat on the bench. Without asking, the storekeeper handed me coffee with three spoons of sugar.`,`
`,`^“What’s over by the transmitter tower? That steel sounds badly grounded.”`,`
`,`^“The tower? Old Park goes there every night in fog season, with that radio.” The storekeeper nodded toward the tower.`,`
`,`^“Ask him and all you get is ‘there’s people under the water.’ Your coffee’s getting cold. He takes five spoons of sugar, that one.”`,`
`,`ev`,{"VAR?":`C03_012`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch03.alley_hub`},{"#f":1}],carry:[`ev`,{"f()":`help`},`pop`,`/ev`,`
`,`^I carried six bundles of bottled water to the shed. Until I was done, the storekeeper just turned the pages of his ledger on the bench.`,`
`,`^He held out a yogurt drink. “Come again. Buy something next time.”`,`
`,{"->":`ch03.alley_hub`},{"#f":1}],deduce:[[`^I opened the notebook and lined up the cards corner by corner. `,`#`,`^deduce:CH03`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch03.solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.deduce_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.hub`},`
`,{"#f":5}]}],{"#f":1}],deduce_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The steelwork on the tower rose and fell with the wind. My ears tired of it first.`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^The pencil lead snapped and left a black dot in the box.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch03.deduce`},{"#f":1}],hint:[{"->":`ch03.deduce`},{"#f":1}],mid_board:[[`ev`,{"CNT?":`.^.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I stood with my back to a stone wall by the road and opened the notebook.`,`
`,`^Two tapes and a handprint on a plate. I held the three cards stacked on my palm.`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^I laid the cards out in a row. Wind passed over the stone wall. `,`#`,`^deduce:CH03_MID`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch03.mid_solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.mid_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.hub_choices`},`
`,{"#f":5}]}],{"#f":1}],mid_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Damp from the moss on the stone wall soaked through the back of my jacket.`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch03.mid_board`},{"#f":1}],mid_solved:[`^The old man’s testimony cut off before it ended. The plate held the print of a palm. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`^The “Inspection” slip had no date and no name.`,`
`,{"->":`ch03.hub_choices`},{"#f":1}],solved:[`^I circled the departure time on each of the four statements. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`^Left at 23:30, broadcast cut at 23:40. From the youth hall to the station was a ten-minute walk. `,`#`,`^fx:reveal(conclusion)`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.16`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.24`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^When I looked up, the fog was red. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.33`},null]}],[{"->":`.^.b`},{b:[`
`,`^When I looked up, the fog was black. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.33`},null]}],`nop`,`
`,`ev`,{"VAR?":`I_TAPE_COPY`},{"f()":`has_item`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I zipped the inside pocket with the copy in it all the way shut. `,{"->":`.^.^.^.41`},null]}],[{"->":`.^.b`},{b:[`^ I put the notebook in my inside jacket pocket.`,{"->":`.^.^.^.41`},null]}],`nop`,`
`,{"->":`ch03.hub`},{"#f":1}],night_tower:[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,{"->":`ch03.tower`},{"#f":1}],night_studio:[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^Pushed by the wind, the door creaked shut behind me. I left the fluorescent lights off. The fog in the window showed pale in the dark. `,`#`,`^time:night `,`/#`,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_fog`,`/#`,`
`,{"->":`ch03.radio883`},{"#f":1}],radio883:[[`^I switched on the receiver. The needle sat where it had last night. The static cleared. `,`#`,`^radio `,`/#`,`#`,`^fx:static(0.4)`,`/#`,`
`,`^The same voice as last night. The same words. I listened for an edit point. I couldn’t find one.`,`
`,`^“Even with no one listening, the broadcast is not over.”`,`
`,`^The receiver clicked off.`,`
`,`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},{"c-0":[`^ `,{"->":`ch03.hub`},`
`,{"#f":5}]}],{"#f":1}],night_minbak:[[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^The boiler droned inside the wall. The wall clock laid its beat over it. `,`#`,`^time:night `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^The kitchen was dark. No light under the landlady’s door.`,`
`,`^I went into my room without turning on the light. `,`ev`,{"VAR?":`I_TAPE_COPY`},{"f()":`has_item`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I left the copy by my pillow, still in the jacket. `,{"->":`.^.^.^.28`},null]}],[{"->":`.^.b`},{b:[`^ The bag was still under the blanket.`,{"->":`.^.^.^.28`},null]}],`nop`,`
`,`^Under the blanket. Boiler. Wall clock. Waves. `,`#`,`^tier:2`,`/#`,`
`,`^Then the hallway. `,`#`,`^fx:pause(2) `,`/#`,`#`,`^amb:amb_minbak -dosa -boiler`,`/#`,`
`,`^Boots. `,`#`,`^sfx:sfx_steps_1`,`/#`,`
`,`^One step. A stop. Another step.`,`
`,`^Right outside my door.`,`
`,`ev`,`str`,`^Hide under the blanket `,`#`,`^timed:8`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Stand behind the door`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Go out the window `,`#`,`^risk:alert+5`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(out of time) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch03.hide_blanket`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch03.hide_door`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch03.window`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch03.hide_blanket`},`
`,{"#f":5}]}],{"#f":1}],hide_blanket:[`^I held my breath.`,`
`,`^Under the blanket. Darkness.`,`
`,`^I counted the footsteps.`,`
`,`^One. One. One.`,`
`,`^One set of feet.`,`
`,`^The door opened. Closed.`,`
`,`^The footsteps went away. `,`#`,`^sfx:sfx_steps_recede`,`/#`,`
`,{"->":`ch03.after_theft`},{"#f":1}],hide_door:[`^I pressed myself behind the door.`,`
`,`^I held my breath.`,`
`,`^The door opened.`,`
`,`^A shadow through the gap.`,`
`,`^Low. Below my shoulder.`,`
`,`ev`,{"VAR?":`C03_015`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^A hand felt around by my pillow.`,`
`,`^The door closed.`,`
`,`^The footsteps went away. `,`#`,`^sfx:sfx_steps_recede`,`/#`,`
`,{"->":`ch03.after_theft`},{"#f":1}],window:[`^I pushed the window open.`,`
`,`^I jumped down into the yard.`,`
`,`^Bare feet. Cold dirt.`,`
`,`^I pressed against the wall.`,`
`,`^A door opening and closing.`,`
`,`^Toward the lane.`,`
`,`^A small silhouette ran into the lane. A flashlight swung in its hand.`,`
`,`^There was another light at the end of the lane.`,`
`,`^A light that didn’t move.`,`
`,`^The small light veered off halfway down the lane.`,`
`,`^Toward the shore.`,`
`,`^The light at the end of the lane stayed put a long time.`,`
`,`^Then it went up toward the top of the village.`,`
`,`^The two lights never came closer together.`,`
`,`^I didn’t follow.`,`
`,`^Over the window frame and back inside.`,`
`,`ev`,{"VAR?":`C03_016`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch03.after_theft`},{"#f":1}],after_theft:[`^I turned on the light in my room.`,`
`,`ev`,{"VAR?":`I_TAPE_COPY`},{"f()":`has_item`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^My jacket was turned inside out. The inside pocket was empty. The copy was gone.`,`
`,`ev`,{"VAR?":`I_TAPE_COPY`},{"f()":`drop_item`},`pop`,`/ev`,`
`,`^The original was in the studio archive. So was the order memo.`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^The bag had been dragged out from under the blanket. Its zipper was wide open. Nothing was missing.`,`
`,`^My clothes were jumbled on the blanket.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^Dirt on the threshold. Boot prints. An adult’s feet, but small.`,`
`,`^I opened the door and looked down the hallway. A note was stuck to the outside of the door.`,`
`,`^Ballpoint, pressed hard. Big, thick strokes.`,`
`,`^「OUTSIDER — TAKE THE BOAT AND GET OUT.」`,`
`,`^Small footprints, big writing. They didn’t look like one person’s. `,`#`,`^plant:F14`,`/#`,`
`,`ev`,{"VAR?":`C03_002`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`I_NOTE_WARNING`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^I put the note in my inside jacket pocket.`,`ev`,{"CNT?":`ch03.copy`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ It fit right into the empty space.`,{"->":`.^.^.^.40`},null]}],`nop`,`
`,{"->":`ch03.cliff`},{"#f":1}],cliff:[`^When I turned off the light, the boiler grew louder. The window frame rattled in the wind. `,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`^In the dark, I touched the note in my inside pocket again.`,`
`,{"->t->":`alert_arrest`},`#`,`^cliff:note`,`/#`,`^OUTSIDER — TAKE THE BOAT AND GET OUT.`,`
`,`ev`,{"^->":`endings`},`/ev`,{"->t->":`alert_gate`},{"->":`ch04`},{"#f":1}],"#f":1}],ch04:[`#`,`^chapter:4`,`/#`,`#`,`^label:TAPE 04 · Tonight’s Story`,`/#`,`ev`,4,{"f()":`start_day`},`pop`,`/ev`,`
`,`^No chopping from the kitchen. The second hand of the wall clock ticked on alone. `,`#`,`^time:morning `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`^A thumbtack hole was left in the outside of my door. Last night’s note was in my jacket pocket.`,`
`,{"->":`.^.morning`},{morning:[[`ev`,`str`,`^Listen: last broadcast`,`/str`,`/ev`,{"*":`.^.c-0`,flg:20},`ev`,`str`,`^Go: kitchen`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch04.recap`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.kitchen`},`
`,{"#f":5}]}],{"#f":1}],recap:[`^Boots in the hallway. One step at a time, up to the door. `,`#`,`^sfx:sfx_rewind`,`/#`,`
`,`ev`,{"VAR?":`C03_015`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ A shadow in the gap under the door, no taller than my shoulder.`,{"->":`.^.^.^.10`},null]}],`nop`,`
`,`ev`,{"VAR?":`C03_016`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ A single light standing at the end of the lane. It vanished in a different direction from the small one.`,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`ev`,{"VAR?":`C03_015`},{"f()":`has_clue`},`!`,{"VAR?":`C03_016`},{"f()":`has_clue`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Under the blanket, I counted the footsteps. One set.`,{"->":`.^.^.^.29`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch03.copy`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^Back in my room, the copy was gone.`,{"->":`.^.^.^.36`},null]}],[{"->":`.^.b`},{b:[`^Back in my room, my bag had been gone through.`,{"->":`.^.^.^.36`},null]}],`nop`,`^ Small boot prints on the threshold.`,`
`,`^A note pinned to the door. OUTSIDER — TAKE THE BOAT AND GET OUT.`,`
`,`^The footprints were small. The writing was big.`,`
`,`ev`,{"CNT?":`ch03.patrol_win`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Faced with the departure time on the four statements, the village head stopped smiling.`,{"->":`.^.^.^.47`},null]}],`nop`,`
`,{"->":`ch04.morning`},{"#f":1}],kitchen:[[`^In the kitchen, the landlady kept her back to me and went on stirring the pot.`,`
`,`^No tray yet. Before our eyes could meet, she turned her head toward the window.`,`
`,`^“The haemi’s coming in today.”`,`
`,`^“Then the boat won’t sail.”`,`
`,`^She lifted the ladle and tasted. Then, with no salt added, she tasted again. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“…You know that word. Mainland folks don’t use it.” `,`#`,`^payoff:F01`,`/#`,`
`,`ev`,{"VAR?":`C04_008`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^She looked my way, and for the first time today our eyes met.`,`
`,`ev`,`str`,`^“I heard it on the boat. The deckhand said it.” `,`#`,`^risk:trust_sunrye+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“…Is that right?”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch04.haemi_laugh`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.haemi_silent`},`
`,{"#f":5}]}],{"#f":1}],haemi_laugh:[`^“…On the boat.” She gave a little snort.`,`
`,`^“On the boat, then. That’ll do.” The lid went back on the pot.`,`
`,`ev`,{"^var":`trust_sunrye`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch04.table`},{"#f":1}],haemi_silent:[`^She looked away first. The lid went back on the pot.`,`
`,{"->":`ch04.table`},{"#f":1}],table:[[`ev`,`str`,`^Talk: ask for a meal `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch04.meal`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch04.meal`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.gate`},`
`,{"#f":5}]}],{"#f":1}],meal:[`^“Could I get a meal? I’m going to seize up before the deck does.”`,`
`,`^The landlady set out the tray, rice and soup with a small bowl of kimchi. No barley tea.`,`
`,`^The soup was salty.`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,{"->":`ch04.table`},{"#f":1}],gate:[[`^I was putting on my shoes when hard heels came clicking across the yard.`,`
`,`^“Came to tell you the boat time. First boat tomorrow morning.” The village head was leaning on the gate.`,`
`,`^“It sails if the fog clears, they say. And your things, Ms. Han, that’s just the one bag, right?” He was the first to laugh at his own joke.`,`
`,`ev`,`str`,`^Use: push the note at him `,`#`,`^risk:alert+10 `,`/#`,`#`,`^risk:trust_taeo-1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Thanks for letting me know.”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch04.note_push`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.note_keep`},`
`,{"#f":5}]}],{"#f":1}],note_push:[`^I pushed last night’s note at him. “Do you know who wrote this? Whoever it was didn’t spare the marker.”`,`
`,`^He slapped my shoulder without a glance at the note, and his laugh carried across the yard.`,`
`,`^“Kids messing around, that’s all. Island kids get bored, you know? Don’t let it get to you.”`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch04.gate_out`},{"#f":1}],note_keep:[`^“Yeah. One bag, that’s right.”`,`
`,`^He turned away first, and the hard heels faded down the lane.`,`
`,{"->":`ch04.gate_out`},{"#f":1}],gate_out:[{"->":`ch04.studio_first`},{"#f":1}],studio_first:[`^The metal scrape of the turning knob carried to the end of the empty hallway. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,`^The deck sat on the console. `,`ev`,{"VAR?":`tool_filter`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The noise reduction unit was hooked up as I’d left it yesterday.`,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`^The dust lay just as it had yesterday.`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`ev`,{"VAR?":`I_FILTER`},{"f()":`has_item`},{"VAR?":`tool_filter`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The noise reduction unit still wasn’t hooked up to the deck.`,`
`,{"->":`.^.^.^.24`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch03.copy`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The copy was gone, but the original was in the archive.`,{"->":`.^.^.^.31`},null]}],[{"->":`.^.b`},{b:[`^The TAPE 01 original was in the archive, untouched.`,{"->":`.^.^.^.31`},null]}],`nop`,`
`,`^I opened the archive’s 2003 section and found the labels on the November batch torn off overnight.`,`
`,{"->":`ch04.studio`},{"#f":1}],studio:[[`ev`,`str`,`^Use: restoration kit `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch04.recopy`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: noise reduction unit`,`/str`,{"VAR?":`I_FILTER`},{"f()":`has_item`},{"VAR?":`tool_filter`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Listen: TAPE 01 (filter)`,`/str`,{"VAR?":`tool_filter`},{"VAR?":`I_FILTER`},{"f()":`has_item`},`||`,{"CNT?":`ch04.deck01_done`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: archive`,`/str`,{"CNT?":`ch04.shelf`},`!`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Listen: TAPE 04 `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch04.shelf`},{"CNT?":`ch04.tape4`},`!`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Examine: broadcast log `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch04.logbook`},`!`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Examine: index cards`,`/str`,{"CNT?":`ch04.logbook`},{"CNT?":`ch04.index_card`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Examine: story shelf`,`/str`,{"CNT?":`ch04.story_shelf`},`!`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-8`,flg:4},{"c-0":[`^ `,{"->":`ch04.recopy`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.connect4`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.cough`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch04.shelf`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch04.tape4`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch04.logbook`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch04.index_card`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch04.story_shelf`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch04.hub`},`
`,{"#f":5}]}],{"#f":1}],clock:[`ev`,{"VAR?":`timeslot`},`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The fog outside the window had turned a midday white. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The fog outside the window had gone red. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,3,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Streetlight blurred in the fog outside the window. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`pop`,`nop`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],recopy:[`ev`,{"VAR?":`timeslot`},`/ev`,{"temp=":`before`},`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I copied the original onto a fresh cassette. Both reels turned at the same speed.`,`
`,`^I climbed the ladder and slid the copy in above a ceiling tile. This time, it wasn’t going back to my room.`,`
`,`ev`,{"VAR?":`timeslot`},{"VAR?":`before`},`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch04.clock`},{"->":`.^.^.^.20`},null]}],`nop`,`
`,{"->":`ch04.studio`},{"#f":1}],connect4:[`^I set the unit beside the deck and ran the cable into the jack on the back.`,`
`,`^A relay clicked inside the unit. The grain of the hiss in the headphones smoothed out.`,`
`,`ev`,!0,`/ev`,{"VAR=":`tool_filter`,re:!0},{"->":`ch04.studio`},{"#f":1}],cough:[`ev`,{"VAR?":`tool_filter`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch04.connect4_inline`},{"->":`.^.^.^.5`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^When I flipped up the filter switch, the unit’s little fan began to turn.`,`
`,`^TAPE 01 went back on. Faint sounds lay under the hiss. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE01`,`/#`,`
`,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`
`,`^I rewound the reels to the start. The whir didn’t last long. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE01`,`/#`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,{"->":`ch04.deck01`},{"#f":1}],connect4_inline:[`^I set the unit beside the deck and ran the cable into the jack on the back.`,`
`,`^A relay clicked inside the unit.`,`
`,`ev`,!0,`/ev`,{"VAR=":`tool_filter`,re:!0},`ev`,`void`,`/ev`,`->->`,{"#f":1}],deck01:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch04.cough`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.deck01_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.deck01_clean`},`
`,{"#f":5}]}],{"#f":1}],deck01_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^Two cotton swabs went in the trash before the heads came clean.`,`
`,{"->":`ch04.cough`},{"#f":1}],deck01_stop:[`^I stopped the reels. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`ev`,{"VAR?":`C04_006`},{"f()":`has_clue`},{"CNT?":`ch04.deck01_done`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch04.deck01_done`},{"->":`.^.^.^.13`},null]}],`nop`,`
`,`^I took off the headphones. My ears stayed muffled for a while.`,`
`,{"->":`ch04.studio`},{"#f":1}],deck01_done:[`^The cough in the headphones lingered in my ears. Once. A cough held back until it burst. `,`#`,`^payoff:F05`,`/#`,`
`,`ev`,{"VAR?":`C04_006`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`M08`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^Behind the glass. My throat tickles. I cover my mouth. Past the desk with all the lights, someone looks back. The cough bursts out. `,`#`,`^memory:M08 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,`^I took off the headphones. Beyond the glass, in the booth, stood a single chair.`,`
`,`^A low backrest. Not a chair for an adult.`,`
`,{"->":`ch04.studio`},{"#f":1}],shelf:[`^I pulled out the November batch and found glue marks on every case. Whoever did this had never taken off a label before.`,`
`,`^The last one in the batch still had its label. 「Tonight’s Story · 2003.11.14」.`,`
`,`^It was a cassette dubbed separately on the recording deck. The mold on the logger tapes had missed it.`,`
`,{"->":`ch04.studio`},{"#f":1}],tape4:[`ev`,{"VAR?":`timeslot`},`/ev`,{"temp=":`before`},`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I put in TAPE 04 and pushed the cassette door shut. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,`^Play. Headphones on. `,`#`,`^tape:TAPE04`,`/#`,`
`,`^Jaehui Yoon’s voice. “Tonight’s Story will be read by a special guest.”`,`
`,`^A child’s voice. Small, every word pronounced with care. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“Tonight’s Story is… about my mom. Mom writes at night. So she doesn’t sleep at night.”`,`
`,`ev`,{"VAR?":`C02_013`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The two sentences tacked onto the end of the 2019 tape were here, and this was the original. The sound quality gave it away.`,{"->":`.^.^.^.35`},null]}],[{"->":`.^.b`},{b:[`^I had heard this voice before, though I couldn’t place where.`,{"->":`.^.^.^.35`},null]}],`nop`,`^ `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“Mom writes at the radio station.” The child called the console “the desk with all the lights.”`,`
`,`^“You read that so well. Can you say your name? Slowly.”`,`
`,`^The child on the tape said, “My name is—”`,`
`,`^My mouth moved first. `,`#`,`^fx:slow`,`/#`,`
`,`^Seojin Han. `,`#`,`^fx:overlap `,`/#`,`#`,`^tier:2`,`/#`,`
`,`^Inside the headphones, the child coughed.`,`
`,`ev`,{"VAR?":`timeslot`},{"VAR?":`before`},`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch04.clock`},{"->":`.^.^.^.68`},null]}],`nop`,`
`,{"->":`ch04.deck04`},{"#f":1}],deck04:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch04.tape4_again`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.tape4_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.tape4_clean`},`
`,{"#f":5}]}],{"#f":1}],tape4_again:[`^I rewound the reels to the start. The whir didn’t last long. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE04`,`/#`,`
`,{"->":`ch04.deck04`},{"#f":1}],tape4_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^The swab came away black. The heads had their shine back. `,`#`,`^tape:TAPE04`,`/#`,`
`,{"->":`ch04.deck04`},{"#f":1}],tape4_stop:[`^The stop button clunked down. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`ev`,{"VAR?":`C04_003`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The two marked lines were saved in my notes. I underlined in pen the part where the child gave their name.`,`
`,{"->":`.^.^.^.11`},null]}],[{"->":`.^.b`},{b:[`
`,{"->t->":`ch04.tape4_notes`},{"->":`.^.^.^.11`},null]}],`nop`,`
`,`^I put a county project tag on the case to keep it off the removal list. It went into my inside jacket pocket.`,`
`,`ev`,{"VAR?":`I_TAPE04`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch04.studio`},{"#f":1}],tape4_notes:[`ev`,{"VAR?":`C04_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^22:49:11. I wrote the number in my notepad and circled it.`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],logbook:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I took the broadcast log from the console drawer and opened it again to November 14, 2003.`,`
`,`^A penciled note beside the schedule column read 「Reading — a nine-year-old guest, the writer’s daughter」.`,`
`,`ev`,{"VAR?":`C04_009`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch04.studio`},{"#f":1}],index_card:[`^A bundle of index cards was tucked inside the log’s cover. Its rubber band had gone brittle.`,`
`,`^Jaehui Yoon had made a word index, one card for every tape. Each word had a date and time beside it.`,`
`,`^Better than mine.`,`
`,`ev`,!0,`/ev`,{"VAR=":`tool_search`,re:!0},{"->":`ch04.studio`},{"#f":1}],story_shelf:[`^The “Stories” shelf stood next to the archive. Listener postcards sat on it, bundled by year in rubber bands.`,`
`,`^In the 2003 bundle, one postcard had “the Sea House” in the sender line.`,`
`,`^「A child who comes to our house loves barley tea. Please read this on the air.」`,`
`,`^Dated October 2003. The back was blank.`,`
`,`ev`,{"VAR?":`C04_013`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch04.studio`},{"#f":1}],hub:[`ev`,{"VAR?":`day_over`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ `,{"->":`ch04.night_end`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Out on the road, the waves sounded low, pressed down by the fog. No sun in sight. The haemi was in. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The waves had drawn farther off. The sun sank red into the fog. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The drip of water from the eaves. The streetlights blurred in the fog. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,{"VAR?":`difficulty`},2,`<`,`&&`,{"VAR?":`tool_filter`},{"VAR?":`I_FILTER`},{"f()":`has_item`},`||`,`&&`,{"CNT?":`ch04.deck01_done`},`!`,`&&`,{"CNT?":`ch04.remind_filter`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch04.remind_filter`},{"->":`.^.^.^.43`},null]}],`nop`,`
`,{"->":`ch04.mid_gate`},{"#f":1}],mid_gate:[`ev`,{"CNT?":`ch04.solved`},`!`,{"CNT?":`ch04.mid_board`},`!`,`&&`,{"VAR?":`C04_003`},{"f()":`has_clue`},{"VAR?":`C04_006`},{"f()":`has_clue`},{"VAR?":`C01_001`},{"f()":`has_clue`},`||`,`&&`,{"VAR?":`C04_006`},{"f()":`has_clue`},{"VAR?":`C01_001`},{"f()":`has_clue`},`&&`,`||`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch04.mid_board`},{"->":`.^.^.^.23`},null]}],`nop`,`
`,{"->":`ch04.hub_choices`},{"#f":1}],remind_filter:[`^Breathing in the fog tickled my throat. I held back a cough until it burst out.`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],hub_choices:[[`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Go: closed branch school`,`/str`,{"CNT?":`ch04.school`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: closed branch school`,`/str`,{"CNT?":`ch04.school`},`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: closed health clinic`,`/str`,{"CNT?":`ch04.clinic`},`!`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: closed health clinic`,`/str`,{"CNT?":`ch04.clinic`},`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village lanes`,`/str`,{"VAR?":`timeslot`},3,`<`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`==`,{"f()":`alert_level`},1,`<`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`==`,{"f()":`alert_level`},1,`>=`,`&&`,{"CNT?":`ch04.office_locked`},`!`,`&&`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,{"CNT?":`ch04.solved`},{"CNT?":`ch04.lie_broken`},`&&`,`!`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,{"CNT?":`ch04.solved`},{"CNT?":`ch04.lie_broken`},`&&`,`/ev`,{"*":`.^.c-9`,flg:5},`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch04.solved`},`!`,{"VAR?":`C04_003`},{"f()":`has_clue`},{"VAR?":`C04_004`},{"f()":`has_clue`},`+`,{"VAR?":`C04_005`},{"f()":`has_clue`},`+`,{"VAR?":`C04_006`},{"f()":`has_clue`},`+`,3,`>=`,`&&`,`/ev`,{"*":`.^.c-10`,flg:5},`ev`,`str`,`^Use: end the day`,`/str`,{"CNT?":`ch04.solved`},`!`,{"VAR?":`timeslot`},3,`==`,`&&`,`/ev`,{"*":`.^.c-11`,flg:5},`ev`,`str`,`^Examine: notebook — that night’s story`,`/str`,{"CNT?":`ch04.solved`},`!`,{"CNT?":`ch04.mid_board`},`&&`,{"CNT?":`ch04.mid_solved`},`!`,`&&`,`/ev`,{"*":`.^.c-12`,flg:5},{"c-0":[`^ `,{"->":`ch04.studio_back`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.school`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.school_back`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch04.clinic`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch04.clinic_back`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch04.alley`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch04.office`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch04.office_locked`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch04.minbak_day`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch04.night`},`
`,{"#f":5}],"c-10":[`^ `,{"->":`ch04.deduce`},`
`,{"#f":5}],"c-11":[`^ `,{"->":`ch04.end_night`},`
`,{"#f":5}],"c-12":[`^ `,{"->":`ch04.mid_board`},`
`,{"#f":5}]}],{"#f":1}],end_night:[`^I stood under a streetlight half buried in fog. Beyond it, waves broke low.`,`
`,`ev`,{"f()":`end_day`},`pop`,`/ev`,`
`,{"->":`ch04.night_end`},{"#f":1}],night_end:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Somewhere in the fog, a dog barked and went quiet. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch04.solved`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch04.deduce`},{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch04.lie_broken`},`!`,{"CNT?":`ch04.night_call`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch04.night_call`},{"->":`.^.^.^.23`},null]}],`nop`,`
`,{"->":`ch04.night`},{"#f":1}],night_call:[`^On the porch, the wall clock ticked. I dragged the phone cord toward my room. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,{"->":`ch04.call`},{"#f":1}],studio_back:[`^The fluorescent starter clicked a couple of times, then settled. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,{"->":`ch04.studio`},{"#f":1}],office_locked:[`^The whir of a fan came from behind the locked office door. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`^I knocked. The fan answered.`,`
`,{"->":`ch04.hub`},{"#f":1}],school:[`^Windowpanes rattled along the empty hallway. The wind shook the frames from one end to the other. `,`#`,`^loc:school `,`/#`,`#`,`^amb:amb_school`,`/#`,`
`,`^Every classroom door stood open, the desks all gone, but the staff room was locked.`,`
`,`^Somewhere behind the building, a door rattled in the wind.`,`
`,{"->":`ch04.school_hub`},{"#f":1}],school_back:[`^The hallway windows rattled again. My footsteps rang to the far end. `,`#`,`^loc:school `,`/#`,`#`,`^amb:amb_school`,`/#`,`
`,{"->":`ch04.school_hub`},{"#f":1}],school_hub:[[`ev`,`str`,`^Examine: back door`,`/str`,{"CNT?":`ch04.in_office`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: break a window `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch04.in_office`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: roll book `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch04.in_office`},{"CNT?":`ch04.register`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: field trip photo`,`/str`,{"CNT?":`ch04.in_office`},{"CNT?":`ch04.photo`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Examine: hairpin `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch04.photo`},{"CNT?":`ch04.hairpin`},`!`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Examine: nameplate`,`/str`,{"CNT?":`ch04.in_office`},{"CNT?":`ch04.nameplate`},`!`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-6`,flg:4},{"c-0":[`^ `,{"->":`ch04.back_door`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.break_window`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.register`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch04.photo`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch04.hairpin`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch04.nameplate`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch04.hub`},`
`,{"#f":5}]}],{"#f":1}],back_door:[`^Around back, the rattling door turned out to be the staff room’s back door.`,`
`,`^The latch had rusted off. One push swung the door open.`,`
`,{"->":`ch04.in_office`},{"#f":1}],break_window:[`^I hit the hallway window with my elbow. The glass showered inward. `,`#`,`^sfx:sfx_glass`,`/#`,`
`,`^The crash ran down the empty hallway and came back. I climbed in over the frame.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch04.in_office`},{"#f":1}],in_office:[`^The staff room still smelled of chalk. It had three desks, a cabinet, and a framed photo on the wall.`,`
`,`^On the bottom shelf of the open cabinet, roll books stood bundled by year.`,`
`,{"->":`ch04.school_hub`},{"#f":1}],register:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^2003. Third grade. When I turned the cover, a cassette slipped from between the pages and dropped.`,`
`,`^The label read 「Third-grade diary」. I picked it up. No dust.`,`
`,`ev`,{"VAR?":`ST_minwoo`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,`^Seven names on the list. My fingernail traced down them, one line at a time. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^Seojin Han. `,`#`,`^fx:reveal(name_self)`,`/#`,`
`,`^Guardian: Migyeong Han. `,`#`,`^fx:pause(2)`,`/#`,`
`,`^I took a picture of the page. My hand shook, so I took a second.`,`
`,`ev`,{"VAR?":`C04_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`M06`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^“Today’s your day to read the story, right, Seojin?” The smell of chalk. A big hand rests briefly on my head. `,`#`,`^memory:M06 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,{"->":`ch04.school_hub`},{"#f":1}],photo:[`^The framed photo on the wall was labeled 「2003 Fall Field Trip」. Dust had settled on the glass.`,`
`,`^Three adults stood behind the children. The woman at the far left held the hand of a girl about nine.`,`
`,`^The woman had a hairpin in her hair, a small butterfly. `,`#`,`^plant:F16`,`/#`,`
`,`ev`,{"VAR?":`C04_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch04.school_hub`},{"#f":1}],hairpin:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I took the frame down and wiped the glass with my sleeve before leaning close.`,`
`,`^One of the butterfly’s wings was slightly bent.`,`
`,`ev`,{"VAR?":`M07`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^A hand tugs my hair. The elastic goes around twice. Click. One side of my head is a little heavier. `,`#`,`^memory:M07 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,{"->":`ch04.school_hub`},{"#f":1}],nameplate:[`^The nameplate on the middle desk read 「Teacher: Min-u Jang」.`,`
`,`ev`,{"VAR?":`C01_005`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The name from the corner of the rendering.`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`^The letters had faded to a blur.`,{"->":`.^.^.^.8`},null]}],`nop`,`^ I pushed the dust off the nameplate’s edge with a fingertip.`,`
`,`ev`,{"VAR?":`C04_010`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch04.school_hub`},{"#f":1}],clinic:[`^No hum from a refrigerator. With the door open, my ears went muffled. `,`#`,`^loc:clinic `,`/#`,`#`,`^amb:amb_clinic `,`/#`,`#`,`^allow-amb`,`/#`,`
`,`^A faint smell of disinfectant lingered. Registers were stacked on the desk by the window.`,`
`,`^A medicine refrigerator stood against the back wall. Its unplugged cord lay neatly coiled at its feet. Someone who meant to come back, probably.`,`
`,{"->":`ch04.clinic_hub`},{"#f":1}],clinic_back:[`^The door shut, and everything went muffled again. `,`#`,`^loc:clinic `,`/#`,`#`,`^amb:amb_clinic `,`/#`,`#`,`^allow-amb`,`/#`,`
`,{"->":`ch04.clinic_hub`},{"#f":1}],clinic_hub:[[`ev`,`str`,`^Examine: clinic register`,`/str`,{"CNT?":`ch04.record`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: casualty register `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch04.ledger96`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: medicine refrigerator`,`/str`,{"CNT?":`ch04.fridge`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Use: force the drawer `,`#`,`^risk:alert+5`,`/#`,`/str`,{"CNT?":`ch04.fridge`},{"CNT?":`ch04.force_drawer`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-4`,flg:4},{"c-0":[`^ `,{"->":`ch04.record`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.ledger96`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.fridge`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch04.force_drawer`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch04.hub`},`
`,{"#f":5}]}],{"#f":1}],record:[`^The 2003 register. November. The 13th.`,`
`,`^「Seojin Han, 9. Cough. Guardian: Migyeong Han (Haemu FM)」. Underneath, a prescription for three days of syrup.`,`
`,`ev`,{"CNT?":`ch04.register`},`!`,{"CNT?":`ch04.tape4`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^My finger found the name. It was my name. `,`#`,`^fx:pause(1)`,`/#`,`
`,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`^I took a picture of the page.`,`
`,`ev`,{"VAR?":`C04_005`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch04.clinic_hub`},{"#f":1}],ledger96:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^A thick ledger sat on the desk’s lower shelf. 「1996 Casualty Register」.`,`
`,`^The night of March 12. Three people brought in. Three names, all dead.`,`
`,`^Pencil in the margin. 「7 on site — 4 never recovered」.`,`
`,`ev`,{"VAR?":`C04_011`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch04.clinic_hub`},{"#f":1}],fridge:[`^The medicine refrigerator opened on empty shelves. A single drawer sat down at the bottom.`,`
`,`^I pulled the handle. Rust, I assumed. A second pull, and it jerked and caught in place. Rust doesn’t catch like that.`,`
`,{"->":`ch04.clinic_hub`},{"#f":1}],force_drawer:[`^I braced a foot by the drawer and pulled. Scraping metal rang through the empty clinic.`,`
`,`^The drawer came out with a cassette inside, wrapped in plastic. The label read 「Clinic records 1996.3」.`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`ST_euna`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`ch04.clinic_hub`},{"#f":1}],alley:[`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A stick thudded on bedding in someone’s yard. Today the clotheslines were empty. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Clothespins clicked on the line. Somewhere, a gate was bolted from the inside. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Barking followed me across two lanes. Boots, ten steps behind. When I stopped, they stopped. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village `,`/#`,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Down the lane, bolts slid shut one after another. Shadows showed through the gaps in closed doors. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“You getting your meals? Look at your face.” The storekeeper clicked his tongue from the bench. “Sea House cooking and you still look like that? Something’s wrong with you.”`,`
`,{"->":`.^.^.^.16`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“No ramen today. None yesterday, either. I’ve got noodles, though. Noodles are better.” The storekeeper sat down on a box of ramen.`,`
`,{"->":`.^.^.^.16`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The storekeeper switched off the store lights without a word. Then the sliding door shut.`,`
`,{"->":`.^.^.^.16`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The bench cushion was propped against the wall. Nobody stirred inside the store.`,`
`,{"->":`.^.^.^.16`},null]}],`nop`,`
`,{"->":`ch04.alley_hub`},{"#f":1}],alley_hub:[[`ev`,`str`,`^Talk: storekeeper `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch04.ask_child`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: carry loads `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch04.carry`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch04.ask_child`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.carry`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.hub`},`
`,{"#f":5}]}],{"#f":1}],ask_child:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^“A nine-year-old girl who went to the branch school in 2003. Do you know her?”`,`
`,`ev`,{"f()":`alert_level`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“That family’s child lived… No. I don’t know. More coffee?” He held out a bag of sugar I hadn’t asked for.`,`
`,`^“This is last year’s sugar. Still sweet. You know what it costs off the boat now? You won’t find this price.”`,`
`,`^“I don’t need sugar. I asked about a nine-year-old.”`,`
`,`^“There’s creamer, too.”`,`
`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`
`,`^“How would I know? I just run the store. Looking for anything?” He turned toward the radio.`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,{"->":`ch04.alley_hub`},{"#f":1}],carry:[`ev`,{"f()":`help`},`pop`,`/ev`,`
`,`^I carried the rice sacks and fuel cans to the shed. My palms smelled of fuel.`,`
`,`^The storekeeper brought me a cup of water. A speech about fuel prices came with it.`,`
`,{"->":`ch04.alley_hub`},{"#f":1}],office:[`^The clack of a receiver going down. The village head had just finished a call. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`^“You again. Sit. I told you the boat time this morning.”`,`
`,{"->":`ch04.office_hub`},{"#f":1}],office_hub:[[`ev`,`str`,`^Talk: village head — ask indirectly `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch04.ask_school`},`!`,{"CNT?":`ch04.ask_school_soft`},`!`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: village head — ask directly `,`#`,`^risk:alert+10 `,`/#`,`#`,`^risk:trust_taeo-1`,`/#`,`/str`,{"CNT?":`ch04.ask_school`},`!`,{"CNT?":`ch04.ask_school_soft`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch04.ask_school_soft`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.ask_school`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.hub`},`
`,{"#f":5}]}],{"#f":1}],ask_school_soft:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_indirect`},1,`+`,`/ev`,{"VAR=":`asked_indirect`,re:!0},`^“How long has the school building been empty? You can hear its window frames from here.”`,`
`,`^“Since the kids all moved to the mainland.” He turned his face toward the fan.`,`
`,`^“Once the resort comes, that building comes down too. You know the boat time, yeah? First boat.”`,`
`,`^“Did you put that part on a loop?” He only laughed.`,`
`,{"->":`ch04.office_hub`},{"#f":1}],ask_school:[`ev`,{"VAR?":`asked_direct`},1,`+`,`/ev`,{"VAR=":`asked_direct`,re:!0},`^“I’d like to ask about a child at the branch school in 2003.”`,`
`,`^He dragged his chair over and sat with his knees touching mine. His laugh was louder than the fan. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“The school? Kids back then all went to the mainland.”`,`
`,`^“Dig up old things and the island gets hurt. We’re family here. What’s covered stays covered, right?”`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch04.office_hub`},{"#f":1}],minbak_day:[`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The clothesline in the yard thrummed in the wind. The kitchen was empty. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^Water boiling in the kitchen. The landlady stood at the pot and didn’t turn around. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch04.minbak_hub`},{"#f":1}],minbak_hub:[[`ev`,`str`,`^Talk: aunt `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch04.lie_broken`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: landlady`,`/str`,{"VAR?":`timeslot`},2,`>=`,{"CNT?":`ch04.sunrye_talk`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: meal `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"VAR?":`timeslot`},2,`==`,{"CNT?":`ch04.meal_evening`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Use: radio `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},2,`>=`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: room`,`/str`,{"CNT?":`ch04.solved`},{"CNT?":`ch04.lie_broken`},`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-5`,flg:4},{"c-0":[`^ `,{"->":`ch04.call`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.sunrye_talk`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.meal_evening`},`
`,{"#f":5}],"c-3":[`^ `,`ev`,`str`,`^minbak`,`/str`,`/ev`,{"->t->":`use_radio_at`},{"->":`.^.^.^`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch04.night`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch04.hub`},`
`,{"#f":5}]}],{"#f":1}],call:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"CNT?":`.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I called again. The TV reached me before the first ring ended. `,`#`,`^sfx:sfx_phone_ring `,`/#`,`#`,`^amb:amb_phone_tv`,`/#`,`
`,`^“What now. My drama’s on.”`,`
`,{"->":`.^.^.^.13`},null]}],[{"->":`.^.b`},{b:[`
`,`^I went into my room and shut the door. I dialed my aunt. It rang a long time. `,`#`,`^sfx:sfx_phone_ring `,`/#`,`#`,`^amb:amb_phone_tv`,`/#`,`
`,`^The TV came through the receiver first. A drama. Laughter.`,`
`,`^“It’s windy there, isn’t it? Don’t catch a chill.”`,`
`,`^“Auntie. I need to talk about Mom.”`,`
`,`^The TV got a little louder. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“What happened to your mom was an accident. I mean… it was just an accident.”`,`
`,{"->":`.^.^.^.13`},null]}],`nop`,`
`,{"->":`ch04.present`},{"#f":1}],meal_evening:[`^The tray came out before I could ask. Steam rose from the rice.`,`
`,`^The soup was bland. An apology, or the landlady had run out of salt. She didn’t sit down by the tray.`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,{"->":`ch04.minbak_hub`},{"#f":1}],present:[[`ev`,{"VAR?":`C04_004`},{"f()":`has_clue`},{"VAR?":`C04_005`},{"f()":`has_clue`},`||`,`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch04.aunt_lose`},{"->":`.^.^.^.9`},null]}],`nop`,`
`,`^My aunt chose her words. The TV dropped a notch. `,`#`,`^confront:C4_AUNT`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch04.aunt_win`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.aunt_lose`},`
`,{"#f":5}]}],{"#f":1}],aunt_win:[`^“It’s a record from 2003. Seojin Han. Guardian, Migyeong Han.”`,`
`,{"->":`ch04.lie_broken`},{"#f":1}],aunt_lose:[`^“My soup’s boiling over. I’ll let you go.” The line clicked off. `,`#`,`^amb:amb_minbak`,`/#`,`
`,`^I put down the receiver. My aunt hadn’t given a date or a place. I had none to give either.`,`
`,{"->":`ch04.minbak_hub`},{"#f":1}],wrong_tape:[{"->":`ch04.present`},{"#f":1}],wrong_photo:[{"->":`ch04.present`},{"#f":1}],after_wrong:[{"->":`ch04.present`},{"#f":1}],hint_call:[{"->":`ch04.minbak_hub`},{"#f":1}],hangup:[`^“…Fine. Come home as soon as the boat runs.” The line clicked off.`,`
`,{"->":`ch04.minbak_hub`},{"#f":1}],right_roll:[`^“The branch school roll book. Third grade, 2003. Seojin Han. The guardian line says Migyeong Han.”`,`
`,{"->":`ch04.lie_broken`},{"#f":1}],right_clinic:[`^“The clinic register. November 13, 2003. Seojin Han, age nine. Guardian Migyeong Han, Haemu FM.”`,`
`,{"->":`ch04.lie_broken`},{"#f":1}],lie_broken:[`^The people on the TV laughed on their own. `,`#`,`^fx:pause(2)`,`/#`,`
`,`^"……"`,`
`,`^Breathing. Then the TV went off. Even the click of the remote being set down came through. `,`#`,`^amb:none `,`/#`,`#`,`^silence:1.0`,`/#`,`
`,`^“…On the adoption papers, I’m your mother.” `,`#`,`^fx:slow`,`/#`,`
`,`^“You could pull every record and it wouldn’t show. …Not that you ever had a reason to pull them.”`,`
`,`ev`,{"VAR?":`C04_007`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“Don’t stay there. That money—” `,`#`,`^plant:F17`,`/#`,`
`,`^She broke off there. At the other end, the TV came back on. `,`#`,`^amb:amb_phone_tv`,`/#`,`
`,`ev`,{"VAR?":`C04_002`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“I’ll let you go. Come home as soon as the boat runs.”`,`
`,`^The line clicked off. The ticking of the wall clock came back. `,`#`,`^amb:amb_minbak -dosa -boiler`,`/#`,`
`,`^That November, Mom died in a car accident on the mainland. `,`#`,`^fx:erase `,`/#`,`#`,`^sfx:sfx_scrub`,`/#`,`
`,`^That November, Mom was on this island.`,`
`,`ev`,{"CNT?":`ch04.solved`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch04.night`},{"->":`.^.^.^.65`},null]}],`nop`,`
`,{"->":`ch04.minbak_hub`},{"#f":1}],sunrye_talk:[[`^Her back still to me, the landlady turned the flame down until the pot’s bubbling sank.`,`
`,`^“Ma’am. I’ve been here before, haven’t I?”`,`
`,`^Without turning, she held out the ladle. “Taste that.”`,`
`,`^She kept her eyes on the sink. “Don’t go near the sea when the haemi’s in.” `,`#`,`^confront:C4_SUNRYE`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch04.sunrye_win`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.sunrye_lose`},`
`,{"#f":5}]}],{"#f":1}],sunrye_win:[`^She turned off the flame before the soup had finished boiling.`,`
`,`^“…Just eat.” Her voice was low. She took a spoon and chopsticks from the cupboard and set them out.`,`
`,`ev`,{"^var":`trust_sunrye`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch04.minbak_hub`},{"#f":1}],sunrye_lose:[`^“Never seen your face before.” She said it once more.`,`
`,`^The flame came back up. Her back stayed turned.`,`
`,`ev`,{"^var":`trust_sunrye`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch04.minbak_hub`},{"#f":1}],deduce:[[`^I opened the notebook and kept the cards close, out of the damp. `,`#`,`^deduce:CH04`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch04.solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.deduce_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.hub`},`
`,{"#f":5}]}],{"#f":1}],deduce_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The pages went damp in the night fog. The notebook stayed open.`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^The pages went damp in the fog. The notebook stayed open. The ink on the cards began to blur.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch04.deduce`},{"#f":1}],hint:[{"->":`ch04.deduce`},{"#f":1}],solved:[`^The name in the roll book and the name on the tape were the same. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`ev`,!0,`/ev`,{"VAR=":`ded_child_seojin`,re:!0},`^The child on the tape was me, at nine. That night, I was on this island. `,`#`,`^fx:pause(2)`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.28`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^In the fog, the sun went red one last time. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.37`},null]}],[{"->":`.^.b`},{b:[`
`,`^Water dripped from the eaves. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.37`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch04.lie_broken`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^At the top of the notebook, I wrote it down. That November, Mom was on this island.`,{"->":`.^.^.^.44`},null]}],[{"->":`.^.b`},{b:[`^My aunt’s story still stopped at the car accident.`,{"->":`.^.^.^.44`},null]}],`nop`,`
`,{"->":`ch04.hub`},{"#f":1}],mid_board:[[`ev`,{"CNT?":`.^.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The drip of water from the eaves. I opened the notebook.`,`
`,`^That night’s tape cards went side by side on my knees.`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^I lined the cards up by time. The counter numbers ran in a single row. `,`#`,`^deduce:CH04_MID`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch04.mid_solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.mid_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch04.hub_choices`},`
`,{"#f":5}]}],{"#f":1}],mid_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I held the notebook open until the fog crept in under the eaves.`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch04.mid_board`},{"#f":1}],mid_solved:[`^TAPE 04’s 22:49 went ahead of TAPE 01’s 23:40. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`^The child’s story never went out over the air that night. The broadcast was cut first.`,`
`,{"->":`ch04.hub_choices`},{"#f":1}],night:[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.22`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},3,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch04.night_slip`},{"->":`.^.^.^.30`},null]}],`nop`,`
`,`^The boiler kicked on. Between the ticks of the wall clock, a knock at the door. Three times, evenly. `,`#`,`^time:night `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^It was the officer, in a raincoat over his uniform. Damp had beaded on his glasses.`,`
`,`^“By regulation, I am not supposed to give you this. …I know. I brought it knowing that.”`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^He glanced out the window, then did it again.`,`
`,{"->":`.^.^.^.53`},null]}],`nop`,`
`,`^He sat down on the floor. His notebook lay open on the low table. The envelope was still inside his raincoat.`,`
`,{"->":`ch04.night_hub`},{"#f":1}],night_hub:[[`ev`,`str`,`^Examine: officer’s notebook`,`/str`,{"CNT?":`ch04.notebook`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: envelope`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch04.notebook`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.envelope`},`
`,{"#f":5}]}],{"#f":1}],notebook:[[`^Today’s date headed the open page. Below it ran line after line of times and places.`,`
`,`^Morning, the guesthouse. From the next line on, every place I’d been today, in order.`,`
`,`ev`,{"VAR?":`C04_012`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,`str`,`^“Is this everywhere I’ve been today?” `,`#`,`^risk:trust_dohyun+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“You’ve logged my movements down to the minute.” `,`#`,`^risk:trust_dohyun-1`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch04.nb_calm`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch04.nb_angry`},`
`,{"#f":5}]}],{"#f":1}],nb_calm:[`^He checked his watch. “Writing everything down is a habit of mine. You are not the only one, ma’am. Like now. 10:41 p.m.”`,`
`,`^“Is there a backup of that?”`,`
`,`^“There is not.”`,`
`,`^“Make a copy. The damp here eats everything.” He wrote that down too.`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch04.night_hub`},{"#f":1}],nb_angry:[`^He fiddled with the arm of his glasses. “I was not following you. Writing things down is just a habit. I write down my own lunch, too.”`,`
`,`^After that, the notebook stayed shut.`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch04.night_hub`},{"#f":1}],envelope:[`^“I tried following procedure. It did not work.”`,`
`,`^He took an envelope from inside his raincoat. A single sheet of paper.`,`
`,`^“You would never get this through a public records request. The decision is mine.”`,`
`,{"->":`ch04.list_read`},{"#f":1}],night_slip:[`^The boiler kicked on. Paper scraped under the door. `,`#`,`^time:night `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^An envelope slid in through the gap. Out in the hallway, hard heels clicked away fast.`,`
`,`^Inside, a single sheet and a memo. 「This is outside regulations.」`,`
`,{"->":`ch04.list_read`},{"#f":1}],list_read:[`^The 2003 case file. A copy of the missing persons list. Nothing blacked out. `,`#`,`^fx:pause(1)`,`/#`,`
`,`ev`,{"VAR?":`I_LIST_MISSING`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^The wall clock struck eleven. Radio static seeped through the wall from the landlady’s room.`,`
`,`^“This is Haemu FM, on air for twenty-three years. The haemi was in over the island today.”`,`
`,`^Through the wall, the voice called out a single name.`,`
`,`ev`,{"CNT?":`ch04.envelope`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The officer raised his head and looked at the wall. `,{"->":`.^.^.^.21`},null]}],`nop`,`
`,`^I ran a finger down the list from the top. Jaehui Yoon. Yeongho Kim. Malsun Seo. Dongcheol Choi. Gitaek Moon. Gisu Moon. Sanggil Bae. Yeonja Hong. Min-u Jang. `,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`^Past the ninth line, my finger stopped. `,`#`,`^amb:amb_minbak -dosa -boiler`,`/#`,`
`,{"->":`ch04.cliff`},{"#f":1}],cliff:[{"->t->":`alert_arrest`},`^The tenth line of the missing persons list. `,`#`,`^amb:none `,`/#`,`#`,`^silence:1.0`,`/#`,`
`,`^The name that had come through the wall.`,`
`,`#`,`^cliff:name_mikyung `,`/#`,`#`,`^t3:name_mikyung`,`/#`,`^Migyeong Han.`,`
`,`ev`,!0,`/ev`,{"VAR=":`ded_mother_mikyung`,re:!0},`ev`,{"^->":`endings`},`/ev`,{"->t->":`alert_gate`},{"->":`ch05`},{"#f":1}],"#f":1}],ch05:[`#`,`^chapter:5`,`/#`,`#`,`^label:TAPE 05 · The Keeper’s Light`,`/#`,`ev`,5,{"f()":`start_day`},`pop`,`/ev`,`
`,`^Wind beat against the window frame and rattled the glass inside it. `,`#`,`^time:morning `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`^Still dark. The hands of the wall clock stood just past five.`,`
`,{"->":`.^.dawn`},{dawn:[[`ev`,`str`,`^Listen: last broadcast`,`/str`,`/ev`,{"*":`.^.c-0`,flg:20},`ev`,`str`,`^Examine: window`,`/str`,`/ev`,{"*":`.^.c-1`,flg:20},{"c-0":[`^ `,{"->":`ch05.recap`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.window`},`
`,{"#f":5}]}],{"#f":1}],recap:[`^This time nothing was blacked out on the copy of the list the officer had left. `,`#`,`^sfx:sfx_rewind`,`/#`,`
`,`^When the radio beyond the wall called out a name, my finger stopped on the tenth line.`,`
`,`^The missing persons list. Migyeong Han.`,`
`,`ev`,{"CNT?":`ch04.sunrye_win`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ From the cupboard, the landlady set out a spoon and chopsticks.`,{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch04.sunrye_lose`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The landlady kept her back to me.`,{"->":`.^.^.^.19`},null]}],`nop`,`
`,{"->":`ch05.dawn`},{"#f":1}],window:[`^When I opened the window, fog from the sea came right into the room.`,`
`,`^A single light floated in the fog. The lighthouse. `,`#`,`^fx:beacon`,`/#`,`
`,`^The light didn’t turn. It blinked. One long light. Two short.`,`
`,`^Dark for three breaths, then again. One long light. Two short.`,`
`,`ev`,{"VAR?":`C05_011`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^Chopping started up in the kitchen. `,`#`,`^amb:amb_minbak +dosa`,`/#`,`
`,{"->":`ch05.morning`},{"#f":1}],morning:[[`ev`,`str`,`^Talk: landlady`,`/str`,{"CNT?":`ch05.light_talk`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: meal `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch05.meal`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: telephone`,`/str`,{"CNT?":`ch05.gun_call`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: Old Park’s house`,`/str`,{"CNT?":`ch05.gun_call`},`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,{"CNT?":`ch05.gun_call`},`/ev`,{"*":`.^.c-4`,flg:5},{"c-0":[`^ `,{"->":`ch05.light_talk`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.meal`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.gun_call`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.park_house`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch05.hub`},`
`,{"#f":5}]}],{"#f":1}],light_talk:[`^“The lighthouse was blinking. At dawn. Not the rhythm of a broken timer, either.”`,`
`,`^The chopping didn’t miss a beat.`,`
`,`^“Lighthouse turns on its own. Doesn’t blink like that.”`,`
`,`^“Then what—”`,`
`,`^“Fog makes it look that way. Soup’s getting cold.” The landlady didn’t turn around.`,`
`,{"->":`ch05.morning`},{"#f":1}],meal:[`^Rice and soup came on the tray. No barley tea.`,`
`,`^The first spoonful of soup burned the roof of my mouth.`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,{"->":`ch05.morning`},{"#f":1}],gun_call:[`^From the porch telephone I dialed my contact at the county office. They picked up just as I was about to give up.`,`
`,`^“Calling with a progress report. The restoration’s on schedule. As long as the tapes cooperate.”`,`
`,`ev`,{"VAR?":`C04_011`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “There was a 1996 casualty register at the clinic. Where did the original go?” `,{"->":`.^.^.^.10`},null]}],[{"->":`.^.b`},{b:[`^ “Where did the closed clinic’s original records get transferred? I need to check something against them.”`,{"->":`.^.^.^.10`},null]}],`nop`,`
`,`^“I will check with the hospital that received them. Please leave your contact information.”`,`
`,`^I gave the guesthouse number and put the receiver back.`,`
`,{"->":`ch05.morning`},{"#f":1}],park_house:[`^The click of a radio dial came from inside. The old man sat with a radio to his ear. `,`#`,`^loc:park_house `,`/#`,`#`,`^amb:amb_room`,`/#`,`
`,`^The radio was switched off, so no light showed on the dial.`,`
`,`^A wardrobe took up one whole wall. Its door was padlocked.`,`
`,{"->":`ch05.park_hub`},{"#f":1}],park_hub:[[`ev`,{"VAR?":`timeslot`},0,`>`,{"CNT?":`ch05.park_late`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.park_late`},{"->":`.^.^.^.9`},null]}],`nop`,`
`,`ev`,`str`,`^Talk: Old Park `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch05.park_key`},`!`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Listen: radio stories `,`#`,`^risk:trust_park+1`,`/#`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch05.park_key`},`&&`,{"CNT?":`ch05.park_radio`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: radio dial `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch05.park_dial`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^“Jaehui Yoon?”`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch05.park_key`},`&&`,{"CNT?":`ch05.park_who`},2,`<`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Examine: wardrobe`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch05.park_wardrobe`},`!`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-5`,flg:4},{"c-0":[`^ `,{"->":`ch05.park_key`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.park_radio`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.park_dial`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.park_who`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch05.park_wardrobe`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch05.hub`},`
`,{"#f":5}]}],{"#f":1}],park_late:[`^The sun had reached in across the porch. The old man sat with his eyes closed.`,`
`,{"->":`ch05.park_hub`},{"#f":1}],park_key:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^“I’d like to get into the keeper’s cottage. You have the key, I hear.”`,`
`,`^He took the radio from his ear and gripped it against his chest.`,`
`,`^“The lighthouse key? There’s two. Gave one to Jaehui.”`,`
`,`^He took a brass key from a box atop the wardrobe and held it out. It was heavier than it looked.`,`
`,`^“The light, now. One long, two short. That means ‘I’m here.’”`,`
`,`ev`,{"VAR?":`C05_005`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`I_KEY_LIGHTHOUSE`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^“Got to give it back. It’s the lighthouse’s. Got to give it back.”`,`
`,{"->":`ch05.park_hub`},{"#f":1}],park_radio:[`^“That radio’s switched off. What’s on it?”`,`
`,`^“The lighthouse show, what else. 「The Midnight Lighthouse」. Eleven at night.”`,`
`,`^He talked on after that. From the steps for lighting the lamp he crossed to the foghorn, then to ship horns.`,`
`,`^The same sentence came around three times, a little different each time. A tape can’t do that. I listened to the end.`,`
`,`^“…Been a while since anybody listened.”`,`
`,`ev`,{"^var":`trust_park`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch05.park_hub`},{"#f":1}],park_dial:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^“Mind if I look?” He lowered the radio onto his knee.`,`
`,`^A scrap of brittle adhesive bandage was stuck over the dial markings.`,`
`,`^The edge of the bandage pointed to 91. The fingernail marks were deep there and nowhere else.`,`
`,`ev`,{"VAR?":`C05_013`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“Set it there and you get the lighthouse sound. Whose child are you, now?”`,`
`,{"->":`ch05.park_hub`},{"#f":1}],park_who:[`ev`,{"CNT?":`.^`},`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Jaehui? Jaehui Yoon, who did the radio show? Who’s Jaehui to you?”`,`
`,`^“Jaehui is Jaehui.” The old man put the radio back to his ear.`,`
`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^“Where’s Jaehui Yoon now?”`,`
`,`^The old man’s head dropped. The hand holding the radio shook.`,`
`,`^“There’s people under the water. Under the water… You heard it too?”`,`
`,`ev`,{"^var":`trust_park`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,{"->":`ch05.park_hub`},{"#f":1}],park_wardrobe:[`^I pulled at the wardrobe door. The padlock let it give a finger’s width and no more.`,`
`,`^The smell of mothballs and old paper seeped out together through the crack.`,`
`,`^He didn’t look that way.`,`
`,{"->":`ch05.park_hub`},{"#f":1}],hub:[`ev`,{"VAR?":`day_over`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ `,{"->":`ch05.night_end`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The sound of the waves came from beyond the fog. The white wall of the lighthouse rose clear of it. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The wind rushed off toward the lighthouse. The fog went yellow in the evening light. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The waves came with me down the night road. The sky over the lighthouse brightened and darkened by turns. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,{"->":`ch05.mid_gate`},{"#f":1}],mid_gate:[`ev`,{"VAR?":`C05_003`},{"f()":`has_clue`},{"VAR?":`C05_004`},{"f()":`has_clue`},`+`,{"VAR?":`C05_006`},{"f()":`has_clue`},`+`,`/ev`,{"temp=":`req`},`
`,`ev`,{"CNT?":`ch05.solved`},`!`,{"CNT?":`ch05.mid_board`},`!`,`&&`,{"VAR?":`req`},2,`>=`,`&&`,{"VAR?":`C05_003`},{"f()":`has_clue`},{"VAR?":`C03_006`},{"f()":`has_clue`},`||`,`&&`,{"VAR?":`C05_004`},{"f()":`has_clue`},{"VAR?":`C04_003`},{"f()":`has_clue`},`||`,`&&`,{"VAR?":`C05_006`},{"f()":`has_clue`},{"VAR?":`C04_004`},{"f()":`has_clue`},{"VAR?":`C00_001`},{"f()":`has_clue`},`&&`,`||`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.mid_board`},{"->":`.^.^.^.45`},null]}],`nop`,`
`,{"->":`ch05.hub_choices`},{"#f":1}],hub_choices:[[`ev`,`str`,`^Go: lighthouse`,`/str`,{"CNT?":`ch05.solved`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: lighthouse `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch05.solved`},`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,{"VAR?":`timeslot`},3,`<`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village lanes`,`/str`,{"VAR?":`timeslot`},3,`<`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`==`,{"f()":`alert_level`},1,`<`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`==`,{"f()":`alert_level`},1,`>=`,`&&`,{"CNT?":`ch05.office_locked`},`!`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,`/ev`,{"*":`.^.c-6`,flg:4},`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch05.solved`},`!`,{"VAR?":`C05_003`},{"f()":`has_clue`},{"VAR?":`C05_004`},{"f()":`has_clue`},`+`,{"VAR?":`C05_006`},{"f()":`has_clue`},`+`,2,`>=`,`&&`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Use: end the day`,`/str`,{"CNT?":`ch05.solved`},`!`,{"VAR?":`timeslot`},3,`==`,`&&`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Examine: notebook — what was left behind`,`/str`,{"CNT?":`ch05.solved`},`!`,{"CNT?":`ch05.mid_board`},`&&`,{"CNT?":`ch05.mid_solved`},`!`,`&&`,`/ev`,{"*":`.^.c-9`,flg:5},{"c-0":[`^ `,{"->":`ch05.lighthouse_day`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.night`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.studio`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.alley`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch05.office`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch05.office_locked`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch05.minbak_back`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch05.deduce`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch05.end_night`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch05.mid_board`},`
`,{"#f":5}]}],{"#f":1}],end_night:[`^Wind went through the lanes. I looked up toward the lighthouse.`,`
`,`ev`,{"f()":`end_day`},`pop`,`/ev`,`
`,{"->":`ch05.night_end`},{"#f":1}],night_end:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The sky over the lighthouse brightened and darkened by turns. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch05.solved`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.deduce`},{"->":`.^.^.^.13`},null]}],`nop`,`
`,{"->":`ch05.night`},{"#f":1}],office_locked:[`^The whir of a fan turning its head came from behind the locked door. The handle wouldn’t budge. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,{"->":`ch05.hub`},{"#f":1}],lighthouse_day:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Inside the lighthouse, the waves boomed off the walls, louder in here than outside. `,`#`,`^loc:lighthouse `,`/#`,`#`,`^amb:amb_lighthouse`,`/#`,`
`,`^Under the iron stairs that spiraled upward, a dark gap opened.`,`
`,`^The keeper’s cottage clung to the lighthouse’s side, and its door had a padlock too.`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^The boom of the waves reached me even at the door. `,`#`,`^loc:lighthouse `,`/#`,`#`,`^amb:amb_lighthouse`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch05.lh_hub`},{"#f":1}],lh_hub:[[`ev`,`str`,`^Use: key`,`/str`,{"CNT?":`ch05.lh_open`},`!`,{"VAR?":`I_KEY_LIGHTHOUSE`},{"f()":`has_item`},`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: break the padlock `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch05.lh_open`},`!`,{"VAR?":`I_KEY_LIGHTHOUSE`},{"f()":`has_item`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: cottage back room `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch05.lh_open`},{"CNT?":`ch05.room`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: cottage back room`,`/str`,{"CNT?":`ch05.room`},`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Examine: under the stairs`,`/str`,{"CNT?":`ch05.lh_stairs`},`!`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: top of the lighthouse`,`/str`,{"CNT?":`ch05.lh_top`},`!`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Listen: Brothers tape — under the stairs`,`/str`,{"VAR?":`StoryTapes`},{"VAR?":`ST_gisu`},`?`,{"CNT?":`ch05.gisu_stop`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-7`,flg:4},{"c-0":[`^ `,{"->":`ch05.lh_open`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.lh_open`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.room`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.room`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch05.lh_stairs`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch05.lh_top`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch05.gisu_play`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch05.hub`},`
`,{"#f":5}]}],{"#f":1}],lh_open:[`ev`,{"VAR?":`I_KEY_LIGHTHOUSE`},{"f()":`has_item`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The brass key fit the padlock. Two turns. The shackle dropped free.`,`
`,`^The inside of the lock had been oiled. It got a lot of use.`,`
`,{"->":`.^.^.^.6`},null]}],[{"->":`.^.b`},{b:[`
`,`^I took a rock to the padlock. The hasp bent and dropped away. `,`#`,`^fx:shake `,`/#`,`#`,`^sfx:sfx_impact`,`/#`,`
`,`^The clang rang on inside the lighthouse. Gulls took off all at once.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^The door opened on the mixed smell of oil and dried fish.`,`
`,{"->":`ch05.lh_hub`},{"#f":1}],room:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^A small fan built into a machine whirred low.`,`
`,`^The fisherman’s jacket on the wall had fold creases running straight across the shoulders.`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^A machine sat on the desk. The wall had writing on it. In a corner of the floor lay a wrapping cloth and a box.`,`
`,{"->":`.^.^.^.18`},null]}],[{"->":`.^.b`},{b:[`
`,`^A machine sat on the desk. The wall had writing on it.`,`
`,{"->":`.^.^.^.18`},null]}],`nop`,`
`,`^No one was there. The bedding was folded, and cold to the touch.`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^The fan was still whirring in the empty room.`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,{"CNT?":`ch05.room_moved`},`!`,`&&`,{"CNT?":`ch05.batteries`},{"CNT?":`ch05.bojagi`},`&&`,`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.room_moved`},{"->":`.^.^.^.23`},null]}],`nop`,`
`,{"->":`ch05.room_hub`},{"#f":1}],room_moved:[`ev`,{"CNT?":`ch05.batteries`},{"CNT?":`ch05.bojagi`},`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The corner was empty. Even what I’d left there during the day was gone.`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^Two dust-free squares marked the corner of the floor.`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^No drag marks. Someone had lifted them and carried them off.`,`
`,{"->":`ch05.room_hub`},{"#f":1}],room_hub:[[`ev`,`str`,`^Examine: machine`,`/str`,{"CNT?":`ch05.tx`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: wall `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch05.wall`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: box `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch05.batteries`},`!`,{"CNT?":`ch05.room_moved`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: desk`,`/str`,{"CNT?":`ch05.desk`},`!`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Examine: wrapping cloth `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch05.bojagi`},`!`,{"CNT?":`ch05.room_moved`},`!`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Examine: book under the desk`,`/str`,{"CNT?":`ch05.desk`},{"CNT?":`ch05.yoon_log`},`!`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: outside the cottage`,`/str`,`/ev`,{"*":`.^.c-6`,flg:4},{"c-0":[`^ `,{"->":`ch05.tx`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.wall`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.batteries`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.desk`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch05.bojagi`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch05.yoon_log`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch05.room_exit`},`
`,{"#f":5}]}],{"#f":1}],yoon_log:[`^A notebook, its cover swollen with damp, was wedged between the desk legs.`,`
`,`^The first page read 「2004.3.1」. Dates ran on below it, one per line: weather, boats, a few words added.`,`
`,`^「Sea fog. No boat. No one listening.」 「Clear. First boat sailed. Side dishes came.」`,`
`,`^Here and there a date had a name beside it. The eleven names from the wall came around in turn.`,`
`,`^「2019.11.14 — Malsun Seo. Called a long time.」 That line alone had been gone over twice in pencil.`,`
`,`^The writing got smaller toward the back. Not failing eyes, I guessed. Saving paper. I turned to the last page.`,`
`,`^「9.13 — Sea fog. Boat in late. Left the deck on. Fresh batteries.」 `,`#`,`^payoff:F03`,`/#`,`
`,`^「9.14 — Fluorescent lights left on, I am told. Sunrye is sorry about it.」`,`
`,`^「9.17 — Migyeong. Tomorrow at dawn, I send the light.」`,`
`,`^The line below was blank except for a dent where a pencil tip had pressed and lifted.`,`
`,`ev`,{"VAR?":`C05_016`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch05.room_hub`},{"#f":1}],room_exit:[`^The sound of the waves swelled again. I shut the back-room door behind me.`,`
`,`ev`,{"CNT?":`ch05.night`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.night_hub`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,{"->":`ch05.lh_hub`},{"#f":1}],tx:[`^The machine was the size of a lunchbox. An antenna wire ran out through a gap in the window frame.`,`
`,`^The dial sat on 88.3, taped down so it couldn’t turn.`,`
`,`^A sticker on the side read 「Portable Transmitter · Output 0.5 W」, barely enough to reach one village.`,`
`,`^Next to the machine sat a recording deck, a few blank labels, and a label pen with a dried-out tip.`,`
`,`ev`,{"VAR?":`C05_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch05.room_hub`},{"#f":1}],wall:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^Eleven names ran down the wall in pencil, one under another.`,`
`,`^Jaehui Yoon. Migyeong Han. Yeongho Kim. Malsun Seo. Dongcheol Choi. Gitaek Moon. Gisu Moon. Sanggil Bae. Yeonja Hong. Min-u Jang. Eun-a Jung.`,`
`,`^Migyeong Han alone had an X beside it, thick and gone over many times. `,`#`,`^plant:F18`,`/#`,`
`,`^Beside Malsun Seo was a small date, 「2019.11」. No X.`,`
`,`ev`,{"VAR?":`C05_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch05.room_hub`},{"#f":1}],batteries:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^The box was full of batteries in packs, all one brand.`,`
`,`ev`,{"VAR?":`C00_003`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ One pack had been torn open, a scrap of plastic wrap left on each battery. Someone who never quite finished unwrapping. `,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`^ One pack had been torn open, and the torn plastic was still crisp.`,{"->":`.^.^.^.14`},null]}],`nop`,`^ `,`#`,`^payoff:F03`,`/#`,`
`,`ev`,{"VAR?":`C05_007`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch05.room_hub`},{"#f":1}],desk:[`^A sheet of paper on the desk was headed 「County Records Digitization Project · Referral for the restorer (draft)」.`,`
`,`ev`,{"VAR?":`C00_002`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ It was the draft of the referral tucked behind my commission letter. My name was already in the restorer’s line. `,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`^ My name was in the restorer’s name line. Seojin Han.`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^The handwriting was the broadcast log’s. Even the habit of writing one letter without lifting the pen was the same. `,`#`,`^payoff:F02`,`/#`,`
`,`^Lines had been struck out and rewritten, layer on layer. The corner had worn soft from handling. I’d never reworked my own resume this much.`,`
`,`ev`,{"VAR?":`C05_006`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch05.room_hub`},{"#f":1}],bojagi:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^A flower-print wrapping cloth lay in a corner of the floor. The knot was tight.`,`
`,`^Untied, it held two side-dish containers, one empty and one that smelled of kimchi.`,`
`,`^That first night, the landlady had brought my meal in a flower-print cloth frayed at one corner.`,`
`,`^I wrapped the containers back up and put them in my bag. My knot wasn’t as tight as the one I’d undone.`,`
`,`ev`,{"VAR?":`C05_008`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`I_LUNCHBOX`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch05.room_hub`},{"#f":1}],lh_stairs:[`^In the gap under the stairs my hand found balls of dust and a tape wrapped in plastic.`,`
`,`^The label read 「Brothers 2003.11.10」. Salt had dried on the inside of the plastic.`,`
`,`ev`,{"VAR?":`ST_gisu`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`ch05.lh_hub`},{"#f":1}],gisu_play:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I crouched under the stairs and put the tape in the portable deck. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,`^When I pressed play, the iron stairs rang on the tape too. Two young men’s voices talked over each other. `,`#`,`^tape:ST_gisu`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^I rewound the deck to the start. The stairs rang on the tape again. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:ST_gisu`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch05.deck_gisu`},{"#f":1}],deck_gisu:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch05.gisu_play`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.gisu_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.gisu_clean`},`
`,{"#f":5}]}],{"#f":1}],gisu_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^Salt had built up on the heads, so I ran a cotton swab over them. `,`#`,`^tape:ST_gisu`,`/#`,`
`,{"->":`ch05.deck_gisu`},{"#f":1}],gisu_stop:[`^I stopped the deck. A gust came down the stairs from above. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`ev`,{"VAR?":`C05_017`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The two marked lines were saved in my notes. The word “four,” and the word “eleven.”`,`
`,{"->":`.^.^.^.11`},null]}],[{"->":`.^.b`},{b:[`
`,{"->t->":`ch05.gisu_notes`},{"->":`.^.^.^.11`},null]}],`nop`,`
`,{"->":`ch05.lh_hub`},{"#f":1}],gisu_notes:[`ev`,{"VAR?":`C05_017`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“Four of them are lying out there without even a name.” “Make it eleven.” I copied both lines into my notepad.`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],lh_top:[`^The iron stairs rang underfoot. The higher I climbed, the louder the wind.`,`
`,`^The big lamp in the lantern room stood behind glass with a timer fixed to it. Automatic.`,`
`,`^The ring on the hook outside the railing was empty. No lantern.`,`
`,`^A spot of oil on the floor came off on my fingertip, not quite dry.`,`
`,{"->":`ch05.lh_hub`},{"#f":1}],office:[`^Over the whir of the fan, the village head’s voice came first. “You’re here, you’re here. Ms. Han.” Nothing about sitting down. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office`,`/#`,`
`,`^A new handwritten sheet was up on the wall. 「Demolition notice」.`,`
`,{"->":`ch05.office_hub`},{"#f":1}],office_hub:[[`ev`,`str`,`^Examine: notice `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch05.notice`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: village head — ask indirectly `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch05.office_talk`},`!`,{"CNT?":`ch05.office_lh`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: village head — ask directly `,`#`,`^risk:alert+15 `,`/#`,`#`,`^risk:trust_taeo-1`,`/#`,`/str`,{"CNT?":`ch05.office_talk`},`!`,{"CNT?":`ch05.office_lh`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch05.notice`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.office_talk`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.office_lh`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.hub`},`
`,{"#f":5}]}],{"#f":1}],notice:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^「Demolition notice — the 21st, 7 a.m. No change to boat times. The Haemu Society」.`,`
`,`^The marker had been pressed hard, the strokes thick and big.`,`
`,`^On the warning note pinned to my door, one letter in “boat” was left open at the top. Here too.`,`
`,`ev`,{"VAR?":`C05_009`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`C03_016`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The other light from the theft came back to me, the one at the end of the lane. Whoever wore those small boots didn’t write like this.`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,{"->":`ch05.office_hub`},{"#f":1}],office_talk:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_indirect`},1,`+`,`/ev`,{"VAR=":`asked_indirect`,re:!0},`^“Restoration going all right? You know the boat time, yeah?”`,`
`,`ev`,{"CNT?":`ch05.lh_hub`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Heard you went to the lighthouse? It’s dangerous out there. The stairs are rusted through.”`,`
`,`^I had never brought up the lighthouse in this office.`,`
`,{"->":`.^.^.^.19`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Stay away from the lighthouse. The stairs are rusted through. You get hurt, it’s on me.”`,`
`,{"->":`.^.^.^.19`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Boat’s tomorrow morning, seven-thirty. Write it down.” `,{"->":`.^.^.^.27`},null]}],`nop`,`
`,{"->":`ch05.office_hub`},{"#f":1}],office_lh:[`ev`,{"VAR?":`asked_direct`},1,`+`,`/ev`,{"VAR=":`asked_direct`,re:!0},`ev`,{"CNT?":`ch05.lh_hub`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“I went to the lighthouse. Someone’s been living in the cottage—”`,`
`,{"->":`.^.^.^.11`},null]}],[{"->":`.^.b`},{b:[`
`,`^“I’m going to look at the lighthouse. Someone said there’s a key to the cottage—”`,`
`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`^When the village head switched off the fan, the blades turned a few more times and stopped. `,`#`,`^fx:pause(1) `,`/#`,`#`,`^amb:amb_office -fan`,`/#`,`
`,`^“It’s dangerous out there. The stairs are rusted through. You stick to the tapes, Ms. Han. It’s all for the island, yeah?”`,`
`,`ev`,15,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch05.office_hub`},{"#f":1}],alley:[`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Rooftop antennas whined high in the wind. Every house had doubled the pegs on its laundry. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A yard radio cut off and a window shut. The clotheslines were down to their pegs. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A dog gave one short bark. Boots followed. Two people’s worth. When I turned toward the lighthouse, the sound turned too. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village `,`/#`,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Shutters banged shut one after another. The windows facing the lighthouse went first. No door opened. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Back from the lighthouse? Windy out there, isn’t it.” From the bench, the storekeeper pointed his fan at the sky over the lighthouse. “That light at night. You see it?”`,`
`,{"->":`.^.^.^.16`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Take a candle with you. The nights are long lately. You got matches?” The storekeeper turned to face the window on the lighthouse side.`,`
`,{"->":`.^.^.^.16`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“That’s all for today. The candles are all gone already.” The storekeeper shut the sliding door and started taping newspaper over the glass.`,`
`,{"->":`.^.^.^.16`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^In the empty store, only the radio went on talking.`,`
`,{"->":`.^.^.^.16`},null]}],`nop`,`
`,{"->":`ch05.alley_hub`},{"#f":1}],alley_hub:[[`ev`,`str`,`^Talk: storekeeper`,`/str`,{"CNT?":`ch05.alley_talk`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: carry loads `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch05.carry`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Listen: Brothers tape`,`/str`,{"VAR?":`StoryTapes`},{"VAR?":`ST_gisu`},`?`,{"CNT?":`ch05.brothers`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch05.alley_talk`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.carry`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.brothers`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.hub`},`
`,{"#f":5}]}],{"#f":1}],brothers:[`^I set the deck on the end of the bench and pressed play. The storekeeper kept on about the price of sugar. `,`#`,`^sfx:sfx_deck_play`,`/#`,`
`,`^Over the ringing of iron stairs, two young men argued and kept cutting each other off.`,`
`,`^“So why read it, then? You read that ledger, we have to leave the island.”`,`
`,`^“Turn that off, would you? You play that out front, I lose customers.” The tape kept turning.`,`
`,`^“I’m not selling my boat. I’m not going. You go.”`,`
`,`^Before the older brother could answer, the storekeeper’s finger pressed stop. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`^“Who is that?” He pulled the deck over to his side of the bench. “Gitaek’s kid brother.”`,`
`,`^He came back from the shed with the 2003 credit ledger.`,`
`,`^“Gisu’s tab ran the longest. Noodles, soju, you name it.” He turned the pages.`,`
`,`^On the last page, a red ballpoint line ran through the 「Gisu Moon」 row. Small writing beside it read 「2004.2 paid in full」.`,`
`,`^“February 2004… Was he even on the island then?”`,`
`,`^“I didn’t write down who paid. Money comes in, I put a line through it, done. Don’t go telling the tax office.” He shut the ledger.`,`
`,`ev`,{"VAR?":`C01_014`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ A number from the ticket ledger was in my notepad. November 16: 「0」. `,{"->":`.^.^.^.35`},null]}],`nop`,`
`,`^He turned the radio on full until the old speaker crackled and tore.`,`
`,`ev`,{"VAR?":`C05_014`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch05.alley_hub`},{"#f":1}],alley_talk:[`ev`,{"f()":`alert_level`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“I did. One long, two short.”`,`
`,`^“That’d be Old Park, then. Used to keep the lighthouse. Still has the key, they say.”`,`
`,`^The storekeeper bit open a packet of instant coffee. “Who else would it be. What he owes me, maybe I should take that key instead.”`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^“About the lighthouse light.”`,`
`,`^“The lighthouse is automatic. Everything’s automatic now. The vending machine too. My coffee’s a hundred won cheaper than the machine’s, though.” The storekeeper said it on the way inside.`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch05.alley_hub`},{"#f":1}],carry:[`ev`,{"f()":`help`},`pop`,`/ev`,`
`,`^I pushed two coolers under the bench.`,`
`,`^“Thanks, that’s a help. Ice costs money these days.” The storekeeper wiped wet hands on a pant leg. “Don’t talk about the lighthouse out in the open.”`,`
`,{"->":`ch05.alley_hub`},{"#f":1}],studio:[`^A fluorescent tube buzzed and flickered. A yellow tag on the backup gear beside the console read 「Removal: tonight」. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,`^The archive door had a tag too. 「Everything: tomorrow morning」.`,`
`,`^The broadcast log in the console drawer was untouched. A stamp on its cover read 「Exempt from removal」.`,`
`,{"->":`ch05.studio_hub`},{"#f":1}],studio_hub:[[`ev`,`str`,`^Examine: back of broadcast log`,`/str`,{"CNT?":`ch05.logbook_back`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: removal worker`,`/str`,{"CNT?":`ch05.haul`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch05.logbook_back`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.haul`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.hub`},`
`,{"#f":5}]}],{"#f":1}],haul:[[`^A tape measure zipped back in somewhere in the hallway. A man in a safety vest stopped in front of the archive. `,`#`,`^sfx:sfx_steps`,`/#`,`
`,`^“Oh, you’re the one doing the restoring. All this goes out tomorrow morning.” A mainland accent.`,`
`,`^He measured each archive section and wrote the numbers on his hand in ballpoint.`,`
`,`^“Thing is, it’s kind of weird. They told me to set aside anything labeled November.”`,`
`,`^“And?”`,`
`,`^“There aren’t any labels. Almost every November case has been stripped.” He ran a finger along one section.`,`
`,`^“Who told you to set them aside?”`,`
`,`^He pulled a paper folded small from his vest pocket and opened it.`,`
`,`^「November-label tapes — set aside before removal. Village office」.`,`
`,`^The thick marker strokes had bled through to the back of the paper.`,`
`,`ev`,{"VAR?":`C05_009`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The same marker as the demolition notice on the village office wall. The same thickness, the same hard-pressing hand. `,{"->":`.^.^.^.28`},null]}],`nop`,`
`,`^“No labels, so what can you do. It all goes in one box.”`,`
`,`^“Keep the moldy ones separate. It spreads.”`,`
`,`^“That’s not on the note.” He folded the paper back up.`,`
`,`ev`,{"VAR?":`C05_015`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,`str`,`^“Where do the ones you set aside go?”`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Take it easy.”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch05.haul_where`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.haul_bye`},`
`,{"#f":5}]}],{"#f":1}],haul_where:[`^“The village office storeroom. They’ll handle them separately there, they said.” He shrugged.`,`
`,`^“Handle them?”`,`
`,`^“We just haul it over and we’re done. I’m not from the island either, so…” He looked down at the numbers on his hand.`,`
`,`^“I’m here three days and gone. Don’t ask me stuff like that. I don’t know either.”`,`
`,{"->":`ch05.haul_bye`},{"#f":1}],haul_bye:[`^The tape measure zipped back once more. The safety vest went off down the hallway.`,`
`,{"->":`ch05.studio_hub`},{"#f":1}],logbook_back:[`^I turned to the last page and found small pencil writing. 「Emergency ▒▒.7 — lighthouse」.`,`
`,`^The first two digits had blurred where water got at them.`,`
`,`ev`,{"VAR?":`C05_013`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Old Park’s radio dial had one spot marked with an adhesive bandage, too.`,{"->":`.^.^.^.9`},null]}],`nop`,`
`,`ev`,{"VAR?":`C03_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Just as I’d seen it before. No new erasing either. `,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`^ The same writing as the earlier pages. No date.`,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`^It was the only frequency in the log besides 88.3.`,`
`,{"->":`ch05.studio_hub`},{"#f":1}],minbak_back:[`ev`,{"VAR?":`timeslot`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.minbak_day`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch05.confess`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.confess`},{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch05.confess_core`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The rustle of bedding being laid out came from Grandma Sunrye’s room. The kitchen light was on, but she had already gone in. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[{"->":`.^.b`},{b:[`
`,`^The rustle of bedding being laid out came from the landlady’s room. The kitchen light was on, but she had already gone in. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch05.confess_core`},{"CNT?":`ch03.copy`},`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I sat on the porch and pressed the envelope’s corners flat. Outside, the wind shook the door.`,`
`,{"->":`.^.^.^.29`},null]}],[{"->":`.^.b`},{b:[`
`,`^I sat on the porch. Outside, the wind shook the door.`,`
`,{"->":`.^.^.^.29`},null]}],`nop`,`
`,{"->":`ch05.minbak_hub`},{"#f":1}],minbak_hub:[[`ev`,`str`,`^Use: radio `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},2,`==`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: Grandma Sunrye — Mom`,`/str`,{"CNT?":`ch05.confess_core`},{"CNT?":`ch05.carried`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,`ev`,`str`,`^minbak`,`/str`,`/ev`,{"->t->":`use_radio_at`},{"->":`.^.^.^`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.carried`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.hub`},`
`,{"#f":5}]}],{"#f":1}],carried:[[`^I called from outside her door. “Grandma Sunrye.” The rustle of bedding stopped. `,`#`,`^allow-amb`,`/#`,`
`,`^The door opened, and she came out in her stocking feet to sit on the porch.`,`
`,`^“Tell me about Mom. Just a little.”`,`
`,`^She folded both hands on her knees. It took a long time. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“Migyeong wrote every night. Till every light at the station was out.”`,`
`,`^“And you’d sleep next to her on two chairs pushed together. Listening to your mom read her script.”`,`
`,`^“That dawn… I carried you on my back. Into the fog. Round by the pier.”`,`
`,`^“Thought you were asleep. Then, nearly there, you said it into my back. ‘Where’s Mom?’”`,`
`,`^“…What did you say?”`,`
`,`^“Didn’t say a thing. Just walked.” Her hands closed once on her knees.`,`
`,`ev`,`str`,`^“…Thank you. For carrying me.” `,`#`,`^risk:trust_sunrye+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Say nothing`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch05.carried_thanks`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.carried_silent`},`
`,{"#f":5}]}],{"#f":1}],carried_thanks:[`ev`,{"^var":`trust_sunrye`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^“Don’t you thank me…” She turned her head away. Her voice had cracked.`,`
`,`^“Back from the lighthouse, you sleep. Door stays unlocked.”`,`
`,`^She went into her room. The door didn’t close all the way.`,`
`,{"->":`ch05.minbak_hub`},{"#f":1}],carried_silent:[`^Neither of us spoke.`,`
`,`^She got up and pressed my shoulder. Her palm was heavy.`,`
`,`^“Go on to the lighthouse. Then come back.” Her door closed.`,`
`,{"->":`ch05.minbak_hub`},{"#f":1}],minbak_day:[[`^Water dripped from the tap in the yard. No landlady, no boots. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^Boot prints had dried on the kitchen doorsill. Small feet.`,`
`,`ev`,`str`,`^Use: wait until evening `,`#`,`^risk:ap1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch05.wait_evening`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.hub`},`
`,{"#f":5}]}],{"#f":1}],wait_evening:[`^I sat on the porch. The second hand went around a few hundred times. The paper window turned red. `,`#`,`^time:evening`,`/#`,`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`ch05.confess`},{"#f":1}],confess:[[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Chopping. I opened the door. The radish was already all chopped. `,`#`,`^time:night `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,{"->":`.^.^.^.13`},null]}],[{"->":`.^.b`},{b:[`
`,`^Chopping. I opened the door. The radish was already all chopped. `,`#`,`^time:evening `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,{"VAR?":`I_LUNCHBOX`},{"f()":`has_item`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I set the wrapping cloth down on the kitchen floor. Flower print. The frayed corner. `,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`ev`,{"VAR?":`I_LUNCHBOX`},{"f()":`drop_item`},`pop`,`/ev`,`
`,`^The landlady set down her knife. She studied the cloth a long while, then looked up at me.`,`
`,{"->":`.^.^.^.21`},null]}],[{"->":`.^.b`},{b:[`
`,`^The landlady put down her knife. She didn’t set out a tray. `,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`.^.^.^.21`},null]}],`nop`,`
`,`^“Don’t you ask…” She wiped her hands on her apron. “No. Today, you ask.”`,`
`,`ev`,`str`,`^“Who lives in the keeper’s cottage?”`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Why did you steal it? The copy.”`,`/str`,{"CNT?":`ch03.copy`},`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^“That night, you went through my bag. Didn’t you?”`,`/str`,{"CNT?":`ch03.copy`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},{"c-0":[`^ `,{"->":`ch05.confess_ask`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.confess_press`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.confess_press`},`
`,{"#f":5}]}],{"#f":1}],confess_ask:[`^“Who lives in the keeper’s cottage?”`,`
`,`^When she shut the door out to the crock platform, the wind dropped by half.`,`
`,{"->":`ch05.meal_confront`},{"#f":1}],confess_press:[`ev`,{"CNT?":`ch03.copy`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Why did you steal it? The copy. Those footprints that night were your boots.”`,`
`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`
`,`^“That night, you went through my bag. Didn’t you? The footprints were your boots.”`,`
`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^She wiped the cutting board with a rag. The spot she’d just wiped. `,`#`,`^fx:pause(2)`,`/#`,`
`,`ev`,{"CNT?":`ch03.copy`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Yes. I took it.” `,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`^ “Yes. That was me.” `,{"->":`.^.^.^.17`},null]}],`nop`,`
`,{"->":`ch05.meal_confront`},{"#f":1}],meal_confront:[[`^She turned her head to the window. The one facing the lighthouse.`,`
`,`ev`,{"VAR?":`C05_008`},{"f()":`has_clue`},{"VAR?":`C05_007`},{"f()":`has_clue`},`||`,`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Don’t go out to the lighthouse. Road’s rough.”`,`
`,`^“I didn’t ask about the road.” I had nothing in my hands to show her.`,`
`,{"->":`ch05.meal_lose`},{"->":`.^.^.^.11`},null]}],`nop`,`
`,`^“Don’t go out to the lighthouse. Road’s rough.” `,`#`,`^confront:C5_MEAL`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch05.meal_win`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.meal_lose`},`
`,{"#f":5}]}],{"#f":1}],meal_win:[`^The landlady’s hand gripped her apron string and was slow to let go.`,`
`,`ev`,{"CNT?":`ch04.sunrye_win`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.confess_core`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^“…Go to the lighthouse tonight. We’ll talk after.”`,`
`,`^She dimmed the kitchen light but didn’t turn her back.`,`
`,{"->":`ch05.hub`},{"#f":1}],meal_lose:[`^“Enough of that.” The landlady picked up the knife again. `,`#`,`^amb:amb_minbak +dosa`,`/#`,`
`,`^The chopping came back. No tray was set out.`,`
`,{"->":`ch05.hub`},{"#f":1}],confess_core:[`^“I carried Jaehui’s meals. Twenty-three years.” `,`#`,`^fx:slow`,`/#`,`
`,`^“Put on boots and go out at night, nobody asks. Old woman going to her field, they figure.”`,`
`,`ev`,{"CNT?":`ch03.copy`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^She opened the wardrobe, and from under the folded bedding came a large envelope. The copy.`,`
`,`^“Under the bedding? Damp gets in and that tape’s done.”`,`
`,`^“Took it before those boys could dig through. That note, I didn’t write.” `,`#`,`^payoff:F14`,`/#`,`
`,{"->":`.^.^.^.12`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Going through your bag, that was me too. Wanted to beat those boys to it. What I was after wasn’t in it.”`,`
`,`^“There was a head cleaner in there.”`,`
`,`^“Not that kind of thing. That note, I didn’t write.” `,`#`,`^payoff:F14`,`/#`,`
`,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`^“Big writing, small feet. That did bother me.”`,`
`,`^“When I got there, it was already pinned outside the door. There’s one who walks this hallway like he owns the place.”`,`
`,`ev`,{"VAR?":`C03_016`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“The light at the end of the lane wasn’t mine. I went round by the shore.”`,`
`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,`^“I turned off the studio lights on my second night, and they came back on. `,`ev`,{"CNT?":`ch01.footprints`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The boot prints that ended at the console`,{"->":`.^.^.^.31`},null]}],[{"->":`.^.b`},{b:[`^The boot prints at the door`,{"->":`.^.^.^.31`},null]}],`nop`,`^, too.”`,`
`,`^“Soup’s getting cold.”`,`
`,`^“You haven’t even set a tray.”`,`
`,`^“Me. Jaehui told me to leave the 2019 tape there.” She looked at the spot where a tray would go. “Heard your footsteps and went out the back. No time for the lights.”`,`
`,`^“And the November labels?”`,`
`,`^She took a rubber-banded bundle of labels from the wardrobe and set it by the cutting board. The top one read 「2003.11」.`,`
`,`^“Took them off so the youth association boys couldn’t find the tapes. Jaehui said leave just yours.”`,`
`,`^“You left the glue marks. I took it for the youth association’s work.”`,`
`,`^“Wipe off glue too, and when would I cook?”`,`
`,`ev`,{"VAR?":`C05_015`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “This is what the removal worker was after. With no labels, it all goes in one box.” `,{"->":`.^.^.^.55`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch03.copy`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I took the envelope. Its corners were damp. `,{"->":`.^.^.^.61`},null]}],`nop`,`
`,`ev`,{"VAR?":`C05_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^She brought out a mug of barley tea with a broken handle.`,`
`,`^“You always liked this. Knew it the first day. The way you hold the mug, same as ever.” `,`#`,`^payoff:F07`,`/#`,`
`,`^I picked up the mug. My thumb steered clear of the broken handle on its own.`,`
`,`^“Jaehui wrote the referral, and I mailed it. In spring. We were braiding garlic.” `,`#`,`^payoff:F02`,`/#`,`
`,`^“My commission letter came last month.”`,`
`,`^“Summer, then. It went out on the mainland boat. It got there, didn’t it?”`,`
`,`^“Where is Jaehui now?”`,`
`,`^“Go to the lighthouse at night. If the light blinks like that, it means ‘I’m here.’”`,`
`,`ev`,{"CNT?":`ch05.confess_ask`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,-10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_sunrye`,ci:-1},2,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^The landlady set out a tray at last. The soup had gone cold. I ate all of it.`,`
`,{"->":`.^.^.^.96`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"^var":`trust_sunrye`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^The landlady didn’t set out a tray. The chopping didn’t come back either.`,`
`,{"->":`.^.^.^.96`},null]}],`nop`,`
`,`^“Sunrye. Sunrye Oh. Call me that.”`,`
`,`^Grandma Sunrye turned off the kitchen light. `,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`ch05.hub`},{"#f":1}],deduce:[[`^I opened the notebook. The card corners curled under my fingertips. `,`#`,`^deduce:CH05`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch05.solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.deduce_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.hub`},`
`,{"#f":5}]}],{"#f":1}],deduce_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Over the lighthouse, the sky blinked again and again. I kept fiddling with the corners of the cards.`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^I fiddled with the cards until their corners wore soft.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch05.deduce`},{"#f":1}],hint:[{"->":`ch05.deduce`},{"#f":1}],solved:[`^Jaehui Yoon was alive. The voice on 88.3 had been Jaehui’s. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I closed the notebook. The sky over the lighthouse was going red. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[{"->":`.^.b`},{b:[`
`,`^I closed the notebook. A small light blinked above the lighthouse. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`^On the last page of the notebook, I wrote: lighthouse · night.`,`
`,{"->":`ch05.hub`},{"#f":1}],mid_board:[[`ev`,{"CNT?":`.^.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The wind went through the lanes toward the lighthouse. I opened the notebook.`,`
`,`^I lined up the cards for everything I’d come by on the island.`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^My finger went down the row of cards. `,`#`,`^deduce:CH05_MID`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch05.mid_solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.mid_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.hub_choices`},`
`,{"#f":5}]}],{"#f":1}],mid_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I tried the cards in another order. Cards don’t splice.`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch05.mid_board`},{"#f":1}],mid_solved:[`^Someone had left these behind on purpose. To call me to the island. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,{"->":`ch05.hub_choices`},{"#f":1}],night:[`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^Radio static from inside the lighthouse mixed in with the boom of the waves. `,`#`,`^time:night `,`/#`,`#`,`^loc:lighthouse `,`/#`,`#`,`^amb:amb_lighthouse +radio`,`/#`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Boots on the rocks below. One person. The steps stopped. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.39`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},3,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Three lights stood over by the pier. Facing this way. There was only one way out of the lighthouse.`,`
`,{"->":`.^.^.^.47`},null]}],`nop`,`
`,`^A light blinked at the top of the lighthouse. Far smaller than the big lamp in the lantern room, it was small enough to carry.`,`
`,`^An old radio receiver hung on the wall beside the stairs. Its dial was lit.`,`
`,`^The voice slipped through the static. “The boat times are the same tomorrow.” The static closed over it.`,`
`,{"->":`ch05.night_hub`},{"#f":1}],night_hub:[[`ev`,{"VAR?":`Stations`},{"VAR?":`EMERGENCY_917`},`?`,{"CNT?":`ch05.radio917_heard`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.radio917_heard`},{"->":`.^.^.^.9`},null]}],`nop`,`
`,`ev`,`str`,`^Examine: light`,`/str`,{"CNT?":`ch05.watch`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Listen: radio receiver`,`/str`,{"VAR?":`Stations`},{"VAR?":`EMERGENCY_917`},`?`,`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: flashlight`,`/str`,{"CNT?":`ch05.watch`},{"CNT?":`ch05.radio917`},`||`,{"CNT?":`ch05.reply_ok`},`!`,`&&`,{"CNT?":`ch05.reply_down`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: foot of the stairs`,`/str`,{"CNT?":`ch05.box`},`!`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Listen: TAPE 05`,`/str`,{"CNT?":`ch05.box`},`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: cottage back room`,`/str`,{"CNT?":`ch05.lh_open`},`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,{"CNT?":`ch05.tape05`},`/ev`,{"*":`.^.c-6`,flg:5},{"c-0":[`^ `,{"->":`ch05.watch`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.radio917`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.reply`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.box`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch05.tape05`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch05.room`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch05.cliff`},`
`,{"#f":5}]}],{"#f":1}],watch:[`^I leaned on the railing and counted the flashes. The rhythm matched the light outside my window at dawn. `,`#`,`^fx:beacon `,`/#`,`#`,`^signal:motif3`,`/#`,`
`,`ev`,{"VAR?":`M09`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^A flashlight blinks. “This means ‘I’m here.’” A low voice laughs. Now it’s my turn. `,`#`,`^memory:M09 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,{"->":`ch05.night_hub`},{"#f":1}],radio917:[`^I rested my hand on the receiver’s dial. The needle stood at 88.3. `,`#`,`^radio`,`/#`,`
`,`^The light came again from above.`,`
`,{"->":`ch05.night_hub`},{"#f":1}],radio917_heard:[`^A voice stayed in my ears, low and clear. `,`#`,`^payoff:F13`,`/#`,`
`,`^If I could hear this, I was not to answer, the voice said. Answer with the dawn lights, and I would be met below the stairs.`,`
`,`ev`,{"VAR?":`C05_002`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^The voice that used to open 「The Midnight Lighthouse」. A little lower now.`,`
`,{"->":`ch05.night_hub`},{"#f":1}],reply:[`ev`,{"VAR?":`signal_tries`},1,`+`,`/ev`,{"VAR=":`signal_tries`,re:!0},`ev`,{"VAR?":`signal_tries`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The light came again twenty minutes later.`,`
`,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`^I put my thumb on the flashlight switch. Up above, the lantern waited in the dark.`,`
`,`ev`,0,2,`rnd`,`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`ch05.reply_b`},{"->":`.^.^.^.24`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`ch05.reply_c`},{"->":`.^.^.^.24`},null]}],`pop`,`nop`,`
`,{"->":`ch05.reply_a`},{"#f":1}],reply_a:[[`ev`,`str`,`^Use: two short, one long `,`#`,`^timed:10`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: two long`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Use: one long, two short`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^Use: three short`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},`ev`,`str`,`^(out of time) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-4`,flg:4},{"c-0":[`^ `,{"->":`ch05.reply_wrong`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.reply_wrong_long`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.reply_ok`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.reply_wrong_short`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch05.reply_late`},`
`,{"#f":5}]}],{"#f":1}],reply_b:[[`ev`,`str`,`^Use: one long, two short `,`#`,`^timed:10`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: three short`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Use: two short, one long`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^Use: two long`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},`ev`,`str`,`^(out of time) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-4`,flg:4},{"c-0":[`^ `,{"->":`ch05.reply_ok`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.reply_wrong_short`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.reply_wrong`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.reply_wrong_long`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch05.reply_late`},`
`,{"#f":5}]}],{"#f":1}],reply_c:[[`ev`,`str`,`^Use: two long `,`#`,`^timed:10`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: three short`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Use: one long, two short`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^Use: two short, one long`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},`ev`,`str`,`^(out of time) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-4`,flg:4},{"c-0":[`^ `,{"->":`ch05.reply_wrong_long`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.reply_wrong_short`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.reply_ok`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch05.reply_wrong`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch05.reply_late`},`
`,{"#f":5}]}],{"#f":1}],reply_wrong:[`^I sent the light. Two short, one long.`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch05.reply_fail`},{"#f":1}],reply_wrong_long:[`^I sent the light. Long, then long again. The beam split the fog for a long while.`,`
`,`^A window lit up over by the pier.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch05.reply_fail`},{"#f":1}],reply_wrong_short:[`^I sent the light. Three short flashes. All three went into the fog and ended there.`,`
`,{"->":`ch05.reply_fail`},{"#f":1}],reply_late:[`^My thumb stopped over the switch. I never sent the light.`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch05.reply_fail`},{"#f":1}],reply_fail:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`signal_tries`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.reply_down`},{"->":`.^.^.^.12`},null]}],`nop`,`
`,`^Up above, the lantern waited, then went dark.`,`
`,{"->":`ch05.night_hub`},{"#f":1}],reply_down:[`ev`,{"VAR?":`difficulty`},0,`!=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"^var":`trust_jaehee`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^The light went dark. This time, it didn’t come back.`,`
`,`^Iron plates rang somewhere up the stairs. Footsteps came down, one step at a time.`,`
`,`^The footsteps stopped a few steps up. The face was in the dark.`,`
`,`^“…It is enough that you came. Look at the foot of the stairs.” Only the voice came down.`,`
`,`^The footsteps went back up. They faded toward the far side of the lighthouse.`,`
`,{"->":`ch05.night_hub`},{"#f":1}],reply_ok:[`ev`,!0,`/ev`,{"VAR=":`signal_ok`,re:!0},`^One long. Two short. My finger pressed the switch and let go.`,`
`,`^The light above came on once, long. Then dark. It didn’t come back.`,`
`,`^Iron plates rang somewhere up the stairs. No one came down. The sound faded toward the far side of the lighthouse.`,`
`,`ev`,{"^var":`trust_jaehee`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch05.night_hub`},{"#f":1}],box:[`^The foot of the stairs was dark. My flashlight found a wooden box pushed tight against the wall.`,`
`,[`ev`,{"CNT?":`ch05.reply_ok`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Wet handprints marked the top of the box, not dry yet.`,`
`,{"->":`.^.^.^.5`},null]}],[`ev`,{"CNT?":`ch05.reply_down`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^The lid stood open a finger’s width. Just opened.`,`
`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`
`,`^No dust on top of the box.`,`
`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^I opened the lid. Two tapes. One label pen.`,`
`,`^One had a label. 「The Keeper’s Light · For Seojin」.`,`
`,`^The other had none. Salt crystals clung inside the case, and the tape had stuck to itself. One bad threading would finish it.`,`
`,`ev`,{"VAR?":`I_TAPE05`},{"f()":`get_item`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`I_TAPE_MASTER`},{"f()":`get_item`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`C05_012`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"CNT?":`ch05.lh_stairs`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^A gap behind the box held another tape wrapped in plastic. 「Brothers 2003.11.10」.`,`
`,`ev`,{"VAR?":`ST_gisu`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`.^.^.^.36`},null]}],`nop`,`
`,`^I put the tapes in my inside jacket pocket and left the label pen in the box.`,`
`,{"->":`ch05.night_hub`},{"#f":1}],tape05:[[`ev`,{"CNT?":`.^.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I rewound the portable deck to the start. The little motor whirred thinly. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE05`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^I took the portable deck from my bag and put the tape in. The door clicked shut. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,`^When I put on the headphones, the boom of the waves dropped by half. `,`#`,`^tape:TAPE05`,`/#`,`
`,`^Waves, in a closed room. Above them, a voice.`,`
`,`^“This is Jaehui Yoon. I am alive.” `,`#`,`^fx:reveal(alive_jaehee) `,`/#`,`#`,`^t3:alive_jaehee`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^The 2019 tape was Jaehui’s own recording, the voice said. The transmitter room tape got added much later. The voice of someone who’d lost their place in the script.`,`
`,`^88.3 went out from the transmitter in the cottage. The light on top of the tower was the lantern. You could carry either one in your hand.`,`
`,`^The nine-year-old’s story had been spliced in by the same hand. So that I would hear it.`,`
`,`^“So that I’d hear it.” I said it back into the headphones. “You didn’t have my number?”`,`
`,`ev`,`str`,`^Listen: continue`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch05.tape05_b`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch05.tape05_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch05.tape05_clean`},`
`,{"#f":5}]}],{"#f":1}],tape05_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^Salt had built up on the heads. The swab tip went brown fast.`,`
`,{"->":`ch05.tape05`},{"#f":1}],tape05_b:[`^“Of the eleven, nine left the island alive. Under other names, to the mainland.”`,`
`,`^Why they left went unsaid. No right to say, the voice said. Then ten seconds of blank tape. Someone who knew how to splice had left that in.`,`
`,`^“On that wall, there is only one X. It is Migyeong.” `,`#`,`^payoff:F18`,`/#`,`
`,`ev`,{"VAR?":`C05_010`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“The tape in the box is the one I carried out that night. It got wet. Please save it.”`,`
`,`^“I am the one who called you here. I knew it was dangerous.”`,`
`,`^The tape of the waves had to be heard backward, the voice said. The tool would come later.`,`
`,`^“Even with no one listening, the broadcast is not over.”`,`
`,`^The clunk of the stop button. The tape had run to the end. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`^I took off the headphones. The boom of the waves came back. Above the stairs, silence.`,`
`,{"->":`ch05.night_hub`},{"#f":1}],tape05_stop:[`^I stopped the portable deck. The voice cut off midway. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"^var":`trust_jaehee`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`^I took off the headphones. Over the boom of the waves, the static was still there.`,`
`,{"->":`ch05.night_hub`},{"#f":1}],cliff:[`ev`,{"CNT?":`ch05.confess_core`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch05.confess_late`},{"->":`.^.^.^.5`},null]}],`nop`,`
`,{"->":`ch05.phone`},{"#f":1}],confess_late:[`^No chopping. With only the kitchen light left on, the landlady sat out on the porch. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`ev`,{"VAR?":`I_LUNCHBOX`},{"f()":`has_item`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I set the cloth down on the porch. She looked at the knot a long time.`,`
`,`ev`,{"VAR?":`I_LUNCHBOX`},{"f()":`drop_item`},`pop`,`/ev`,`
`,{"->":`.^.^.^.13`},null]}],`nop`,`
`,`^“I carried Jaehui’s meals. Twenty-three years.” `,`#`,`^fx:slow`,`/#`,`
`,`ev`,{"CNT?":`ch03.copy`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^From the wardrobe she brought out an envelope and handed it over. The copy. “Took it before those boys could dig through.”`,`
`,{"->":`.^.^.^.25`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Going through your bag, that was me too. Wanted to beat those boys to it. What I was after wasn’t in it.”`,`
`,{"->":`.^.^.^.25`},null]}],`nop`,`
`,`ev`,{"VAR?":`C03_016`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“The light at the end of the lane wasn’t mine. I went round by the shore.”`,`
`,{"->":`.^.^.^.32`},null]}],`nop`,`
`,`^“The studio lights, my second night. Those too?”`,`
`,`^“You eaten yet?”`,`
`,`^“The lights.”`,`
`,`^“Me. Jaehui told me to leave the 2019 tape there. Heard your footsteps and went out the back.”`,`
`,`^The landlady set a rubber-banded bundle of labels down on the porch floor. The top one read 「2003.11」.`,`
`,`^“Took them off so the youth association boys couldn’t find the tapes. Jaehui said leave just yours.”`,`
`,`ev`,{"VAR?":`C05_015`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “This is what the removal worker was after. With no labels, it all goes in one box.” `,{"->":`.^.^.^.51`},null]}],`nop`,`
`,`^“That note, I didn’t write. When I got there, it was already pinned outside the door. There’s one who walks this hallway like he owns the place.” `,`#`,`^payoff:F14`,`/#`,`
`,`^She poured barley tea into the mug with the broken handle and held it out. “Knew it the first day.” `,`#`,`^payoff:F07`,`/#`,`
`,`ev`,{"VAR?":`C05_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“Jaehui wrote the referral, and I mailed it. …Sunrye. Call me that.”`,`
`,`ev`,{"^var":`trust_sunrye`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^Grandma Sunrye turned off the kitchen light.`,`
`,{"->":`ch05.phone`},{"#f":1}],phone:[`^The telephone was ringing as I stepped up onto the porch. The third ring. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak `,`/#`,`#`,`^sfx:sfx_phone_ring`,`/#`,`
`,`^I picked up the receiver. An unknown number. A mainland area code.`,`
`,`^A woman’s voice. Low, unhurried.`,`
`,`^“The county office got in touch with me. I wrote that record.”`,`
`,`^“I was at the clinic until 2003.”`,`
`,`^“And your name…?”`,`
`,`#`,`^fx:pause(2)`,`/#`,`^“The name I go by now… is different.”`,`
`,`^The line went quiet for a while, except for her breathing. `,`#`,`^amb:amb_minbak -boiler`,`/#`,`
`,[`ev`,{"VAR?":`StoryTapes`},{"VAR?":`ST_euna`},`?`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^The voice from the clinic refrigerator tape.`,`
`,{"->":`.^.^.^.33`},null]}],[`ev`,{"VAR?":`C04_005`},{"f()":`has_clue`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^She said she was the one who wrote the clinic record.`,`
`,{"->":`.^.^.^.33`},null]}],`nop`,`
`,`^The last name on the missing persons list. Eun-a Jung.`,`
`,{"->t->":`alert_arrest`},`#`,`^cliff:rhythm`,`/#`,`^“Seojin, did that cough ever get better?”`,`
`,`ev`,{"^->":`endings`},`/ev`,{"->t->":`alert_gate`},{"->":`ch06`},{"#f":1}],"#f":1}],ch06:[`#`,`^chapter:6`,`/#`,`#`,`^label:TAPE 06 · The Seawall`,`/#`,`ev`,6,{"f()":`start_day`},`pop`,`/ev`,`
`,`^Gull cries passed low beyond the paper window. The receiver lay where I’d put it down last night. `,`#`,`^time:morning `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`^I lifted the receiver to my ear and got a long, steady dial tone. The line itself was fine. `,`#`,`^sfx:sfx_dial_tone`,`/#`,`
`,{"->":`.^.morning`},{morning:[[`ev`,`str`,`^Listen: last broadcast`,`/str`,`/ev`,{"*":`.^.c-0`,flg:20},`ev`,`str`,`^Go: kitchen`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.recap`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.kitchen`},`
`,{"#f":5}]}],{"#f":1}],recap:[`^A lantern atop the lighthouse. One long light, two short. A box under the stairs. `,`#`,`^sfx:sfx_rewind`,`/#`,`
`,`ev`,{"VAR?":`C05_012`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The second tape in the box was wet and stuck to itself. No label either.`,{"->":`.^.^.^.10`},null]}],`nop`,`
`,`^“This is Jaehui Yoon. I am alive.” That was what the tape said.`,`
`,`ev`,{"CNT?":`ch05.tape05_b`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Nine left the island alive. Under other names, to the mainland.”`,{"->":`.^.^.^.18`},null]}],`nop`,`
`,`^Then the call from a mainland area code. “Seojin, did that cough ever get better?”`,`
`,{"->":`ch06.morning`},{"#f":1}],kitchen:[`^I moved the recorder from my bag to my inside jacket pocket. I’d put in new batteries yesterday.`,`
`,`ev`,{"VAR?":`I_RECORDER`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^Grandma Sunrye had her back to me in the kitchen. Soon the chopping started up. `,`#`,`^amb:amb_minbak +dosa`,`/#`,`
`,`^“Old Park, it’s mornings or never. Sun comes up, he shuts his eyes.”`,`
`,`^Rice and soup on the tray. No barley tea.`,`
`,{"->":`ch06.table`},{"#f":1}],table:[[`ev`,`str`,`^Use: meal `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch06.meal`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: Grandma Sunrye`,`/str`,{"CNT?":`ch06.ask_park`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch06.meal`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.ask_park`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],meal:[`^Seaweed soup, the birthday kind. It wasn’t my birthday. Hot.`,`
`,`^Grandma Sunrye pushed the kimchi dish over until it sat by my soup bowl.`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,{"->":`ch06.table`},{"#f":1}],ask_park:[`^“There’s a gap in the tape from that night. I want to fill it with what Old Park says.”`,`
`,`^“Soup’s getting cold. Eat, then talk.” She set the spoon on the tray.`,`
`,`^“Man talks in circles. Never says a wrong thing, though.”`,`
`,`^“The machine comes after. Hear him out first.”`,`
`,{"->":`ch06.table`},{"#f":1}],hub:[`ev`,{"VAR?":`day_over`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ `,{"->":`ch06.night_end`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`==`,{"CNT?":`ch06.invite`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.invite`},{"->":`.^.^.^.15`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,{"CNT?":`ch06.dohyun_lose`},`&&`,{"CNT?":`ch06.dohyun_road`},`!`,`&&`,{"VAR?":`C06_011`},{"f()":`has_clue`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.dohyun_road`},{"->":`.^.^.^.32`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Gulls cried low over fog that sat at knee height. `,`#`,`^time:morning`,`/#`,`
`,{"->":`.^.^.^.41`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A power tiller puttered off along the field edge. The fog had only half lifted. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.41`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The sound of draining water spread from the seawall. The sun went down red in the fog. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.41`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^A dog started barking far off, then gave up. Fog pooled under the streetlights. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.41`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch06.solved`},`!`,{"CNT?":`ch06.mid_board`},`!`,`&&`,{"VAR?":`C03_005`},{"f()":`has_clue`},`&&`,{"VAR?":`C06_004`},{"f()":`has_clue`},{"VAR?":`C06_015`},{"f()":`has_clue`},`||`,{"VAR?":`C06_009`},{"f()":`has_clue`},`||`,{"VAR?":`C06_013`},{"f()":`has_clue`},`||`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.mid_board`},{"->":`.^.^.^.66`},null]}],`nop`,`
`,{"->":`ch06.hub_choices`},{"#f":1}],hub_choices:[[`ev`,{"VAR?":`C06_003`},{"f()":`has_clue`},{"VAR?":`C06_005`},{"f()":`has_clue`},`+`,{"VAR?":`C06_006`},{"f()":`has_clue`},`+`,{"VAR?":`C06_007`},{"f()":`has_clue`},`+`,`/ev`,{"temp=":`req`},`
`,`ev`,`str`,`^Go: Old Park’s house`,`/str`,{"VAR?":`timeslot`},0,`==`,{"VAR?":`timeslot`},1,`==`,{"CNT?":`ch06.radio`},`!`,`&&`,`||`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: seawall`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Go: old wharf`,`/str`,{"VAR?":`timeslot`},3,`<`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village lanes`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},`ev`,`str`,`^Go: police box`,`/str`,{"VAR?":`timeslot`},2,`<`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,{"VAR?":`timeslot`},3,`<`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: Haemu FM studio`,`/str`,{"VAR?":`timeslot`},3,`==`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Go: foot of the tower`,`/str`,{"VAR?":`timeslot`},0,`>`,{"VAR?":`timeslot`},3,`<`,`&&`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Go: lighthouse`,`/str`,{"VAR?":`timeslot`},1,`==`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,`/ev`,{"*":`.^.c-9`,flg:4},`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch06.solved`},`!`,{"VAR?":`req`},3,`>=`,{"VAR?":`timeslot`},3,`==`,{"VAR?":`req`},2,`>=`,`&&`,`||`,`&&`,`/ev`,{"*":`.^.c-10`,flg:5},`ev`,`str`,`^Examine: notebook — 1996`,`/str`,{"CNT?":`ch06.solved`},`!`,{"CNT?":`ch06.mid_board`},`&&`,{"CNT?":`ch06.mid_solved`},`!`,`&&`,`/ev`,{"*":`.^.c-11`,flg:5},`ev`,`str`,`^Use: end the day`,`/str`,{"CNT?":`ch06.solved`},`!`,{"VAR?":`timeslot`},3,`==`,`&&`,`/ev`,{"*":`.^.c-12`,flg:5},{"c-0":[`^ `,{"->":`ch06.park`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.seawall`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.wreck`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch06.alley`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch06.police`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch06.studio_day`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch06.studio_night`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch06.tower`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch06.lighthouse`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch06.minbak`},`
`,{"#f":5}],"c-10":[`^ `,{"->":`ch06.deduce`},`
`,{"#f":5}],"c-11":[`^ `,{"->":`ch06.mid_board`},`
`,{"#f":5}],"c-12":[`^ `,{"->":`ch06.end_night`},`
`,{"#f":5}]}],{"#f":1}],end_night:[`^I stopped under a streetlight. Fog wound around its glow and came loose again.`,`
`,`ev`,{"f()":`end_day`},`pop`,`/ev`,`
`,{"->":`ch06.night_end`},{"#f":1}],night_end:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^One by one, the streetlights sank into the fog. I turned down the lane toward the guesthouse. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch06.phone`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.phone`},{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch06.solved`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.deduce`},{"->":`.^.^.^.20`},null]}],`nop`,`
`,`^The wall clock ticking. The kitchen light was off. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`ch06.cliff`},{"#f":1}],dohyun_road:[`^A bicycle chain rattled up behind me and stopped. The officer got off.`,`
`,`^He was a little out of breath. His cap strap sat under his chin, per regulation.`,`
`,`^“I made a false statement earlier. I am correcting it. Reports were filed. To the village head, once daily.”`,`
`,`^“The reports are discontinued as of today. I came to notify you of that.”`,`
`,`ev`,{"VAR?":`C06_011`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^The bicycle disappeared into the lanes.`,`
`,{"->":`ch06.hub`},{"#f":1}],park:[`^A click from a dead radio, out on the porch. Then a dial turning. `,`#`,`^loc:park_house `,`/#`,`#`,`^amb:amb_room`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,!0,`/ev`,{"VAR=":`park_visit_am`,re:!0},{"->":`.^.^.^.14`},null]}],`nop`,`
`,`^Old Park sat at the edge of the porch with a radio to his ear and his eyes closed.`,`
`,`ev`,{"VAR?":`difficulty`},2,`<`,{"CNT?":`ch06.radio`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Not a thread of static leaked from the radio at his ear.`,`
`,{"->":`.^.^.^.27`},null]}],`nop`,`
`,`^“There’s people under the water.” No greeting. “You heard it too?”`,`
`,`^The wardrobe inside, past the porch, had one warped door that wouldn’t close all the way.`,`
`,{"->":`ch06.park_hub`},{"#f":1}],park_hub:[[`ev`,{"VAR?":`timeslot`},0,`>`,{"CNT?":`ch06.park_over`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.park_over`},{"->":`.^.^.^.9`},null]}],`nop`,`
`,`ev`,`str`,`^Examine: radio `,`#`,`^risk:trust_park+1`,`/#`,`/str`,{"VAR?":`timeslot`},1,`<=`,{"CNT?":`ch06.radio`},`!`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: lend an arm `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5 `,`/#`,`#`,`^risk:trust_park+1`,`/#`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch06.support`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^“That thing you said, people under the water. I’ve thought about it since that day.” `,`#`,`^risk:trust_park+1`,`/#`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch06.evidence`},`!`,`&&`,{"VAR?":`C02_004`},{"f()":`has_clue`},{"VAR?":`C05_001`},{"f()":`has_clue`},`||`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Talk: Old Park `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch06.talk`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Use: recorder `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert+10`,`/#`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch06.talk`},`&&`,{"VAR?":`trust_park`},2,`>=`,`&&`,{"CNT?":`ch06.record`},`!`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Use: recorder`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch06.talk`},`&&`,{"VAR?":`trust_park`},2,`<`,`&&`,{"CNT?":`ch06.record_denied`},`!`,`&&`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Examine: wardrobe `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},0,`==`,{"CNT?":`ch06.wardrobe`},`!`,`&&`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Listen: third-grade diary — with Old Park`,`/str`,{"VAR?":`timeslot`},0,`==`,{"VAR?":`StoryTapes`},{"VAR?":`ST_minwoo`},`?`,`&&`,{"CNT?":`ch06.diary`},`!`,`&&`,`/ev`,{"*":`.^.c-7`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-8`,flg:4},{"c-0":[`^ `,{"->":`ch06.radio`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.support`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.evidence`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch06.talk`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch06.record`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch06.record_denied`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch06.wardrobe`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch06.diary`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],diary:[`^The old man took the recorder and put it to his ear instead of the radio. When I pressed play, a classroom window rattled through first. `,`#`,`^sfx:sfx_deck_play`,`/#`,`
`,`^“A third-grade diary. October 21. Weather: haemi.” A young man’s voice.`,`
`,`^Eyes closed, he pressed his ear closer to the recorder.`,`
`,`^“The lady at the Sea House gave me barley tea. Her house has a low roof.”`,`
`,`^“The lighthouse grandpa said there’s people under the water. I wasn’t scared.”`,`
`,`^The hand holding the recorder left his ear and settled on his knee. The tape kept turning. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“…Wasn’t scared.” He repeated it. “Nine years old.”`,`
`,`^“I wrote that diary.”`,`
`,`^His thin fingers caught at a cuff and trembled as they let go.`,`
`,`^“Wasn’t scared back then either. Wasn’t scared.”`,`
`,`^“Got something to ask, ask. While the sun’s up.”`,`
`,`^He handed the recorder back and put the radio to his ear again. The dial clicked over one notch.`,`
`,{"->":`ch06.park_hub`},{"#f":1}],park_over:[`^Sunlight had reached the edge of the porch.`,`
`,`ev`,{"CNT?":`ch06.park_hub`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Old Park sat in the same spot as that morning, eyes closed. His breathing was slower than before.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},1,`==`,{"CNT?":`ch06.radio`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^He took the radio from his ear and set it on his knee. “Look, if you want.”`,`
`,{"->":`.^.^.^.19`},null]}],`nop`,`
`,{"->":`ch06.park_hub`},{"#f":1}],radio:[`^“Let me look at that radio. Fixing things is my job.”`,`
`,`^He lowered his hand. The palm-sized radio had its antenna snapped off halfway.`,`
`,`^I slid off the back panel and found the battery compartment empty. White crust had bloomed on the contacts.`,`
`,`^That much corrosion took years. The contacts would need replacing before this radio ever came on.`,`
`,`ev`,{"VAR?":`C06_002`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“I can swap the contacts. I’ll put batteries in for you.”`,`
`,`^“I know it don’t play.” The old man opened his eyes for the first time. “Still got to listen.”`,`
`,`^I closed the back and handed it over. He put it to his ear again. Click.`,`
`,`ev`,{"^var":`trust_park`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch06.park_hub`},{"#f":1}],support:[`^The old man swayed getting up from the porch. The radio slipped from his hand and hit the floor first.`,`
`,`^I caught his arm. Bone, right there under my hand.`,`
`,`^He let his weight rest on my arm. When I handed back the radio, he held on to it for a long while.`,`
`,`^“…Jaehui used to do that. Just like this.”`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_park`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch06.park_hub`},{"#f":1}],evidence:[`^“That thing you said, people under the water. I’ve thought about it since that day.”`,`
`,`ev`,{"VAR?":`C05_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “There were eleven names on the lighthouse wall. Only one had an X.”`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`^“What you said at the pier. It didn’t sound crazy to me.”`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^“Who put you up to it? Jaehui?” The old man took the radio from his ear.`,`
`,`^“No one. Just me.”`,`
`,`^“…That so. Somebody listens to an old man after all.”`,`
`,`ev`,{"^var":`trust_park`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch06.park_hub`},{"#f":1}],talk:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I sat down on the porch. The old man’s radio came down from his ear to his knee.`,`
`,`^“You see it all from the lighthouse.”`,`
`,`^“That dawn, I mean. Before the fog lifted. Nine stood on the pier.”`,`
`,`^“An envelope each. Got on a company boat from the mainland. Nine.”`,`
`,`^“The fishing boat went out empty. Towed on a line. Out to the mouth of the wharf.” `,`#`,`^payoff:F09`,`/#`,`
`,`^“Sank it out there. The tide pushed it right back. Into the old wharf.”`,`
`,`ev`,{"VAR?":`C02_002`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^In my notepad, I drew an arrow to the entry on the cut mooring line.`,{"->":`.^.^.^.27`},null]}],[{"->":`.^.b`},{b:[`^On his knee, his hand mimed hauling a line.`,{"->":`.^.^.^.27`},null]}],`nop`,`
`,`ev`,{"VAR?":`C06_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“Migyeong didn’t get on. Migyeong didn’t get on.”`,`
`,`^“Wasn’t just that night. Saw it in ninety-six too. Not three. Seven.”`,`
`,`ev`,{"VAR?":`trust_park`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“You got a recorder. Jaehui told me. Somebody’d come with a recorder someday.”`,`
`,`ev`,{"VAR?":`I_RECORDER`},{"f()":`has_item`},{"CNT?":`ch06.record`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.talk_recorder`},{"->":`.^.^.^.11`},null]}],`nop`,`
`,{"->":`.^.^.^.46`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Put the recorder away. Not yet.”`,`
`,{"->":`.^.^.^.46`},null]}],`nop`,`
`,{"->":`ch06.park_hub`},{"#f":1}],talk_recorder:[[`^The old man jerked his chin at my jacket. “Turn that on. Get the light on.”`,`
`,`ev`,`str`,`^Use: recorder `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert+10`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Keep the recorder pocketed`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.record`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.park_hub`},`
`,{"#f":5}]}],{"#f":1}],record:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I pressed record, and the red light came on. The old man couldn’t take his eyes off it.`,`
`,`^“When the light comes on, you keep quiet.” He set the radio down on the table.`,`
`,`^On the porch, no headphones. Not a good recording setup. The tape began to turn. `,`#`,`^tape:TAPE06`,`/#`,`
`,`^March twelfth, ninety-six, at night. The dike beside gate number three. Not three. Seven. `,`#`,`^payoff:F11`,`/#`,`
`,`^Three names. Sangcheol Kim. Deoksu Lim. Dongsu Choi. And four with no names.`,`
`,`^“That’s what the man from Daeseung said. Write down only three, he said. The rest never existed, he said.”`,`
`,`ev`,{"VAR?":`I_TAPE06`},{"f()":`get_item`},`pop`,`/ev`,`
`,`ev`,!0,`/ev`,{"VAR=":`ev_park_testimony`,re:!0},`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch06.deck06`},{"#f":1}],deck06:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch06.record_again`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.record_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.record_clean`},`
`,{"#f":5}]}],{"#f":1}],record_again:[`^I rewound the recorder and played it again. The old man’s voice spread low across the porch. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE06`,`/#`,`
`,{"->":`ch06.deck06`},{"#f":1}],record_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^I cleaned the recorder’s heads with a swab. Black dust came off on the tip. `,`#`,`^tape:TAPE06`,`/#`,`
`,{"->":`ch06.deck06`},{"#f":1}],record_stop:[`^I stopped the recorder. The sound of waves rose from under the porch. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`ev`,{"VAR?":`C06_004`},{"f()":`has_clue`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I copied the date and the number into my notepad. March twelfth, ninety-six. Seven.`,`
`,`ev`,{"VAR?":`C06_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`^“Somebody has to call their names. Seven. And one more.”`,`
`,`^Boots passed outside the yard. The wall hid whoever wore them. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`ch06.park_hub`},{"#f":1}],record_denied:[`^I took out the recorder, and the old man pushed it away with the radio.`,`
`,`^“Put it away. Not that. Not yet.”`,`
`,`^“Told Jaehui. Not you. Not yet.”`,`
`,`^The recorder went back into my inside pocket. He was already turning the dial.`,`
`,{"->":`ch06.park_hub`},{"#f":1}],wardrobe:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^“Is it all right if I open the wardrobe?”`,`
`,`^“If it’ll open.” The old man kept his ear to the radio.`,`
`,`^I lifted the warped door as I pulled, and the rusty hinges let out a long creak. Under the bedding lay a tape.`,`
`,`^The label read 「Sanggil Bae — work log」. I loaded it into the recorder and pressed play.`,`
`,`ev`,{"VAR?":`ST_sanggil`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,`^A low voice began reading from a log, dates and numbers one after another. `,`#`,`^tape:ST_sanggil`,`/#`,`
`,{"->":`ch06.deck_sanggil`},{"#f":1}],deck_sanggil:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch06.sanggil_again`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.sanggil_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.sanggil_clean`},`
`,{"#f":5}]}],{"#f":1}],sanggil_again:[`^I rewound the recorder and played it again. The low voice spread across the porch. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:ST_sanggil`,`/#`,`
`,{"->":`ch06.deck_sanggil`},{"#f":1}],sanggil_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^I cleaned the recorder’s heads with a swab. Wardrobe dust came off on the tip. `,`#`,`^tape:ST_sanggil`,`/#`,`
`,{"->":`ch06.deck_sanggil`},{"#f":1}],sanggil_stop:[`^I stopped the recorder. The turn of a page was the last thing on the tape. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`ev`,{"VAR?":`C06_015`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The two log lines I’d marked were in the notebook: the crew count for the night of March twelfth.`,`
`,{"->":`.^.^.^.11`},null]}],[{"->":`.^.b`},{b:[`
`,{"->t->":`ch06.sanggil_notes`},{"->":`.^.^.^.11`},null]}],`nop`,`
`,`^The sheet he got back had said three, the voice said. Not in his handwriting.`,`
`,`ev`,{"VAR?":`C05_017`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The brothers’ tape from under the lighthouse stairs said the same. Four had no names. `,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`^“Sanggil.” The old man said the name aloud. “He got on the boat too.”`,`
`,{"->":`ch06.park_hub`},{"#f":1}],sanggil_notes:[`ev`,{"VAR?":`C06_015`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^March twelfth. Night shift. The dike beside gate number three. Crew, seven. I copied the line into my notepad.`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],seawall:[`ev`,{"f()":`is_low_tide`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.seawall_closed`},{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^The rush of water draining through the gates. Nonstop, in six places. `,`#`,`^loc:seawall `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Fog lay low along the dike. The far gates grew darker as I walked. `,`#`,`^fx:fog`,`/#`,`
`,{"->":`.^.^.^.21`},null]}],`nop`,`
`,`^Across the island’s narrow middle ran the seawall, its concrete eaten white by salt.`,`
`,`^Six sluice gates. Below the dike, where the water had gone out, bedrock lay bare.`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Far down the dike, someone stood without moving. `,{"->":`.^.^.^.33`},null]}],`nop`,`
`,{"->":`ch06.seawall_hub`},{"#f":1}],seawall_closed:[`^The sound of water filled the foot of the seawall. The tide had come up to the dike. `,`#`,`^loc:seawall `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^The gate number plates stood half out of the water. No way down.`,`
`,`^A tide table from the fishing co-op was nailed to a post at the head of the dike. It showed two low tides: morning and evening.`,`
`,{"->":`ch06.hub`},{"#f":1}],seawall_hub:[[`ev`,`str`,`^Examine: gates`,`/str`,{"CNT?":`ch06.gates`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: rock crevice `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert+5`,`/#`,`/str`,{"CNT?":`ch06.crevice`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: diver on the rocks`,`/str`,{"VAR?":`StoryTapes`},{"VAR?":`ST_yeonja`},`?`,{"CNT?":`ch06.haenyeo`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch06.gates`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.crevice`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.haenyeo`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],haenyeo:[[`^Metal scraped on rock at the far end of the bedrock. An old woman diver was prying oysters loose.`,`
`,`^Her rubber diving suit was patched at the shoulder. The net bag at her feet was half full.`,`
`,`^“Why go poking in that crack.” She didn’t look up. The scraping went on.`,`
`,`^“There was a tape in there. The salt water didn’t kill it. Yeonja Hong’s voice.”`,`
`,`^The oyster knife came away from the rock.`,`
`,`ev`,`str`,`^Use: recorder — play it for the diver`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Sorry to bother you while you work.”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.haenyeo_play`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.seawall_hub`},`
`,{"#f":5}]}],{"#f":1}],haenyeo_play:[`^I pressed play, and a woman’s voice rose from under the wind. The diver dragged the recorder over to the rock in front of her. `,`#`,`^sfx:sfx_deck_play`,`/#`,`
`,`^“I touched all four with my own hand. One by one.”`,`
`,`^The moment that line ended, the diver pressed stop with a wet thumb. That button is not for wet thumbs.`,`
`,`^“I went in after her. The two of us.” She tossed an oyster into her net bag.`,`
`,`^“What she touched, I touched.”`,`
`,`^“When we came up, the company boat was there.”`,`
`,`^“Said we saw nothing. Kept saying it, ever since.”`,`
`,`ev`,{"VAR?":`C02_015`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Deoksu’s down there too. Malsun called his name from the dike every night.” `,{"->":`.^.^.^.22`},null]}],`nop`,`
`,`ev`,{"VAR?":`C02_016`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Sangcheol too. A week after his birthday meal, to the day.” `,{"->":`.^.^.^.29`},null]}],`nop`,`
`,`^“The four, we never knew their names. Workmen from the mainland.”`,`
`,`^“Byeongchun knows their names. Ate with them at the site canteen.”`,`
`,`ev`,{"VAR?":`timeslot`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Go see him. Before the sun’s up, that man talks straight.”`,`
`,{"->":`.^.^.^.42`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Went to the mainland on the afternoon boat, I hear. Fell down the steps, they say.”`,`
`,{"->":`.^.^.^.42`},null]}],`nop`,`
`,`^She pushed the recorder back my way.`,`
`,`ev`,{"VAR?":`C06_021`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch06.seawall_hub`},{"#f":1}],gates:[`^I touched the number plates one by one. Gate 1. Gate 2. Rust had half eaten the numbers.`,`
`,`^Gate 3 was different. New plate, new bolts, no salt on the paint.`,`
`,`^Then 4, 5, 6. Rust again.`,`
`,`^Probably the budget had only covered one.`,`
`,`ev`,{"VAR?":`C06_008`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch06.seawall_hub`},{"#f":1}],crevice:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^I climbed down off the dike. The mud sucked at my boots.`,`
`,`^The bedrock beside Gate 3. Pulling a wad of plastic from a crevice, I scraped the back of my hand on barnacles.`,`
`,`^Under the plastic was a tape labeled 「Yeonja Hong — what I saw underwater」.`,`
`,`ev`,{"VAR?":`ST_yeonja`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,`^I loaded it into the recorder, and a woman’s voice came through under the wind.`,`
`,`^She had gone into the water the day after the dike gave way. Besides the three, she said, there were four more.`,`
`,`^“There are four down there. Still.” The sound of water passed over the words.`,`
`,`ev`,{"VAR?":`C06_009`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^I climbed back onto the dike. A window on the village side closed.`,`
`,{"->":`ch06.seawall_hub`},{"#f":1}],wreck:[`ev`,{"f()":`is_low_tide`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The waves had come all the way up the old wharf, and the wreck was underwater. `,`#`,`^loc:wreck `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`ch06.hub`},{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^Waves washed in and out between the wreck’s ribs. The creak of waterlogged wood. `,`#`,`^loc:wreck `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`ev`,{"CNT?":`ch02.wreck`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The wreck of the fishing boat lay as before.`,{"->":`.^.^.^.20`},null]}],[{"->":`.^.b`},{b:[`^A fishing boat lay on its side in the mud. The letters on the bow read 「Full Moon」.`,{"->":`.^.^.^.20`},null]}],`nop`,`^ The cabin door hung half open.`,`
`,{"->":`ch06.wreck_hub`},{"#f":1}],wreck_hub:[[`ev`,`str`,`^Examine: cabin `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch06.cabin`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.cabin`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],cabin:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I squeezed into the cabin, into the smell of wet wood. My flashlight swept the floor first.`,`
`,`^No nets, no fuel cans. Not one cup, not one piece of clothing.`,`
`,`^And yet eleven people were supposed to have been aboard.`,`
`,`ev`,{"VAR?":`C06_010`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch06.wreck_hub`},{"#f":1}],alley:[`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.alley_night`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A broom was going in someone’s yard, back and forth over one spot. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The sweeping died away as I came into the lane. A broom propped against the wall was still rocking. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Boots sounded just past the wall. When I stopped, they stopped. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village `,`/#`,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Curtain rings scraped at every house. Faces watched me from behind the drawn-back curtains. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},{"CNT?":`ch06.alley_night`},`-`,1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"CNT?":`ch02.plaque`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The plaque from the shelf inside the store had moved to the window. `,{"->":`.^.^.^.6`},null]}],[{"->":`.^.b`},{b:[`^ A wooden plaque stood in the store window. `,{"->":`.^.^.^.6`},null]}],`nop`,`^ Through the glass I could read 「Haemu Society」.`,`
`,{"->":`.^.^.^.26`},null]}],[{"->":`.^.b`},{b:[`
`,`^The plaque was still in the window.`,`
`,{"->":`.^.^.^.26`},null]}],`nop`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Eating all right? Noodles just came in. Cheaper than last week’s.” The storekeeper stood with his back to the plaque.`,`
`,{"->":`.^.^.^.35`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“I’m about to lock up. Delivery never came. No stock and the lights on, that’s just the electric bill.” The storekeeper planted himself in front of the plaque.`,`
`,{"->":`.^.^.^.35`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“We’re closed today. Come back when stock’s in.” The sliding door shut. The storekeeper stood by the plaque and watched me.`,`
`,{"->":`.^.^.^.35`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^No storekeeper, no customers. The plaque stood upright behind the window glass.`,`
`,{"->":`.^.^.^.35`},null]}],`nop`,`
`,{"->":`ch06.alley_hub`},{"#f":1}],alley_hub:[[`ev`,`str`,`^Examine: plaque`,`/str`,{"CNT?":`ch06.plaque`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: storekeeper — ask indirectly `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch06.plaque`},{"CNT?":`ch06.ask_plaque`},`!`,`&&`,{"CNT?":`ch06.ask_plaque_soft`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Talk: storekeeper — ask directly `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch06.plaque`},{"CNT?":`ch06.ask_plaque`},`!`,`&&`,{"CNT?":`ch06.ask_plaque_soft`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Use: carry loads `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch06.carry`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Use: help sweep the yard `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch06.broom`},`!`,{"f()":`alert_level`},0,`==`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-5`,flg:4},{"c-0":[`^ `,{"->":`ch06.plaque`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.ask_plaque_soft`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.ask_plaque`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch06.carry`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch06.broom`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],broom:[`^I followed the sound of sweeping into a yard. An old woman was sweeping one spot in front of her gate.`,`
`,`ev`,{"CNT?":`ch01.pyeongsang`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ She was the middle one who’d been peeling garlic on the bench in the lane. `,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^The yard was already clean, yet the broom kept to one spot by the gate.`,`
`,`^“Let me.” I took the broom. A plate on the gatepost read 「Completed 2004」.`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,`^Barely a few strokes in, she slapped the gatepost with her palm.`,`
`,`^“This house went up on that money too. Same as all of them.”`,`
`,`^“If I talk, does this house come down?”`,`
`,`^“It wouldn’t come down, no.”`,`
`,`^“Then that’s that.” She took the broom back and swept the same spot again.`,`
`,`^“Only Malsun’s house never got fixed. No one left to fix it.”`,`
`,`ev`,{"VAR?":`C02_015`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Heard Deoksu’s name turned up in a crock at that house. It’s all over the island.” `,{"->":`.^.^.^.34`},null]}],`nop`,`
`,{"->":`ch06.alley_hub`},{"#f":1}],plaque:[`ev`,{"VAR?":`timeslot`},3,`==`,{"f()":`alert_level`},2,`>=`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I held the flashlight to the glass. The plaque stood facing into the shop, its back to the window.`,`
`,{"->":`.^.^.^.11`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Mind if I look at this?”`,`
`,`^“That’s not for sale. How about candy? Three for five hundred won.”`,`
`,`^I picked up the plaque from the window and turned it over.`,`
`,`^The front. 「The Haemu Society — With thanks for the 2004 village rebuilding」.`,`
`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`^The back. One line of small engraving. 「Daeseung Construction relocation consolation money · 2004.2 · From all of us at the Haemu Society」.`,`
`,`^February 2004. The year the new houses went up in the lane. `,`#`,`^payoff:F12`,`/#`,`
`,`ev`,{"VAR?":`C06_006`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.alley_night_hub`},{"->":`.^.^.^.32`},null]}],`nop`,`
`,{"->":`ch06.alley_hub`},{"#f":1}],ask_plaque_soft:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_indirect`},1,`+`,`/ev`,{"VAR=":`asked_indirect`,re:!0},`^“The houses in this lane all went up at once in 2004, I hear. Same roof color on every one.”`,`
`,`ev`,{"f()":`alert_level`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Everyone took some. To fix their houses.”`,`
`,`^“Good times, those. Cement was half what it is now. You know what cement costs these days? Nails are worse.”`,`
`,{"->":`.^.^.^.21`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Out of sugar. No coffee today either. There’s corn tea, though. That one’s free.” The storekeeper sat back down on the bench.`,`
`,{"->":`.^.^.^.21`},null]}],`nop`,`
`,{"->":`ch06.alley_hub`},{"#f":1}],ask_plaque:[`ev`,{"VAR?":`asked_direct`},1,`+`,`/ev`,{"VAR=":`asked_direct`,re:!0},`^“Relocation consolation money. Who relocated, and where to?”`,`
`,`^The storekeeper stood the plaque back in the window. Its back to the wall.`,`
`,`ev`,{"f()":`alert_level`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Company money. Everyone took some.”`,`
`,`^“Consolation money. Consolation for what?”`,`
`,`^“Let me put the radio on. Doesn’t feel like a shop without it.” He turned it up. The speaker cone was torn; I could hear it.`,`
`,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`
`,`^“You’d have to ask the village office. This place sells noodles.” He sat back down on the bench.`,`
`,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch06.alley_hub`},{"#f":1}],carry:[`ev`,{"f()":`help`},`pop`,`/ev`,`
`,`^I hauled rice sacks and noodle boxes to the shed until my back ached.`,`
`,`^The storekeeper went on about rice prices for a while and only then added, “Thanks. Rice goes up again next year, they say.”`,`
`,{"->":`ch06.alley_hub`},{"#f":1}],alley_night:[`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Wind raking across the slate roofs. The general store’s sliding door was bolted. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_fog`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^TV noise leaked from a window past the wall, then stopped. The light went with it. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_fog`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Between gusts, boots walked in step beyond the walls on both sides. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_fog `,`/#`,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^A throat cleared at this end of the lane, and another answered from the far end. Someone stood under the pole halfway along, no flashlight. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_fog`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`^In the window of the closed store, only the plaque caught the streetlight.`,`
`,{"->":`ch06.alley_night_hub`},{"#f":1}],alley_night_hub:[[`ev`,`str`,`^Examine: plaque`,`/str`,{"CNT?":`ch06.plaque`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.plaque`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],police:[`^A ballpoint pen scratched in a notebook. `,`#`,`^loc:police `,`/#`,`#`,`^amb:amb_police`,`/#`,`
`,`^The officer put the pen down and closed the notebook. Quickly.`,`
`,{"->":`ch06.police_hub`},{"#f":1}],police_hub:[[`ev`,`str`,`^Talk: officer `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch06.dohyun_ask`},`!`,{"VAR?":`C04_012`},{"f()":`has_clue`},{"VAR?":`C03_011`},{"f()":`has_clue`},`||`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: recorder `,`#`,`^risk:trust_dohyun+1`,`/#`,`/str`,{"CNT?":`ch06.admit`},{"VAR?":`ev_park_testimony`},`&&`,{"CNT?":`ch06.play_tape`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: recorder — clinic record `,`#`,`^risk:trust_dohyun+1`,`/#`,`/str`,{"CNT?":`ch06.admit`},{"VAR?":`StoryTapes`},{"VAR?":`ST_euna`},`?`,`&&`,{"CNT?":`ch06.euna_play`},`!`,`&&`,{"CNT?":`ch06.play_tape`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch06.dohyun_ask`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.play_tape`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.euna_play`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],euna_play:[`^I set the recorder on the desk and pressed play. First on the tape came fluorescent lights flickering on. The officer looked up at the recorder. `,`#`,`^sfx:sfx_deck_play`,`/#`,`
`,`^“Health clinic record, the night of March 12, 1996. I am the one who wrote it.”`,`
`,`^His eyes fastened on the turning reels.`,`
`,`^“The people who brought them said there were seven at the site. The other four never came.”`,`
`,`^Until the tape ended, his notebook lay closed on the desk.`,`
`,`^“Clinic records are official documents. When it closed, they should have been transferred to the county.”`,`
`,`^“I will check the transfer register. Starting with where the original is.” He turned to a fresh page.`,`
`,`^「1996.3.12 clinic record — transferred?」 He put that at the top, underlined.`,`
`,`^He set the pen down. “A transfer register is rarely requested for viewing. It is unlikely to have been touched.”`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch06.police_hub`},{"#f":1}],dohyun_ask:[[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^“Mr. Kang knew every place I’d been. Where’d he get the feed?”`,`
`,`^The notebook went into a drawer.`,`
`,`^“I never filed any report of that kind.” A voice with a limiter on it. `,`#`,`^confront:C6_DOHYUN`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.dohyun_win`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.dohyun_lose`},`
`,{"#f":5}]}],{"#f":1}],dohyun_win:[`^The officer set the notebook on the desk and squared its corner to the edge.`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch06.admit`},{"#f":1}],dohyun_lose:[`^“I am required to go on patrol. Per duty regulations.” The officer picked up his cap.`,`
`,`^He opened the door and stood beside it. Waiting.`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch06.hub`},{"#f":1}],admit:[`^“Reporting on outsiders’ movements… I was taught that on my first day. I sent it up to the village head every day.”`,`
`,`^“Your movements were reported too, Ms. Han. Through yesterday’s entry. I believed that was procedure.”`,`
`,`^The notebook he had laid open on the desk listed dates and places, line after line.`,`
`,`^“That notebook’s in better shape than my tapes.”`,`
`,`ev`,{"VAR?":`C04_014`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“I caught it on 95.5. Strong signal. Every stop got reported, they said.”`,`
`,`^He looked down at the open notebook. “…So it went all the way down there.”`,`
`,{"->":`.^.^.^.13`},null]}],`nop`,`
`,`^“The reports are discontinued as of today. I looked for the governing provision. To be exact, there is none.”`,`
`,`ev`,{"VAR?":`C06_011`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch06.police_hub`},{"#f":1}],react_ok:[{"->":`ch06.police_hub`},{"#f":1}],react_bad:[{"->":`ch06.police_hub`},{"#f":1}],play_tape:[`^The officer reached out first. He squared the recorder in the middle of his desk and pressed play himself.`,`
`,`^The old man’s voice filled the office. At the part about writing down only three, the officer pulled his chair in.`,`
`,`^“My father’s notebook has March ’96 too. Only three lines. ‘Accidental fall, 3.’”`,`
`,`^“That is three deaths. Under regulations, that does not end at three lines.” He took off his glasses and kept them in his hand. “I will look into it. Per procedure.”`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch06.police_hub`},{"#f":1}],studio_day:[`^The fluorescent hum echoed off empty shelves. The archive wall was bare. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,`^It had been cleared out that morning, but the console drawer and the bundle of logs were still here.`,`
`,{"->":`ch06.studio_hub`},{"#f":1}],studio_hub:[[`ev`,`str`,`^Examine: village PA log `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch06.logbook96`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.logbook96`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],logbook96:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^At the bottom of the drawer, under the Haemu FM logs, lay a thin ledger.`,`
`,`^「Village PA Broadcast Log · 1996」. A stamp on the cover: 「Handed over to Haemu FM 1998.3」.`,`
`,`^The March 13 entry was struck through. 「Seawall accident announcement — canceled. Village head’s orders」.`,`
`,`^For a month after that, only weather announcements.`,`
`,`ev`,{"VAR?":`C02_017`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The back cover had a speaker wiring diagram, with the number of the utility pole in the lane. `,{"->":`.^.^.^.19`},null]}],`nop`,`
`,`ev`,{"VAR?":`C06_013`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch06.studio_hub`},{"#f":1}],studio_night:[`^Static leaked thin through the crack of the studio door at the end of the hallway. The door opened at a push. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`^The receiver on the console was on, its dial set to 88.3.`,`
`,{"->":`ch06.studio_night_hub`},{"#f":1}],studio_night_hub:[[`ev`,`str`,`^Listen: 88.3`,`/str`,{"CNT?":`ch06.live883`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: deck`,`/str`,{"CNT?":`ch06.deck_note`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch06.live883`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.deck_note`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],live883:[`^I turned up the receiver. `,`#`,`^live:88.3 `,`/#`,`#`,`^fx:static(0.3)`,`/#`,`
`,`^The voice from the lighthouse tape. “This is Haemu FM, on air for twenty-three years.”`,`
`,`^One more line came at the end. “If you can hear this, please open your window for a moment.”`,`
`,`^I undid the latch on the studio window. Fog slid in over the console. No way to treat a console.`,`
`,`^The broadcast ended. I switched off the receiver.`,`
`,{"->":`ch06.studio_night_hub`},{"#f":1}],deck_note:[`^A scrap of paper lay on the playback deck, with two words in pencil.`,`
`,`^「Tomorrow. Backward.」`,`
`,`^The handwriting looked familiar. I put the scrap in my jacket pocket.`,`
`,{"->":`ch06.studio_night_hub`},{"#f":1}],tower:[`^Overhead, the steel frame creaked and strained in the wind. `,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower`,`/#`,`
`,`^Below the transmitter tower, by its concrete base, a square patch of grass lay flattened. I took it for where the demolition crew had stacked materials.`,`
`,{"->":`ch06.tower_hub`},{"#f":1}],tower_hub:[[`ev`,`str`,`^Examine: flattened grass `,`#`,`^risk:alert+5`,`/#`,`/str`,{"CNT?":`ch06.altar`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Listen: footsteps by the stairs`,`/str`,{"VAR?":`timeslot`},2,`==`,{"CNT?":`ch06.altar`},`&&`,{"CNT?":`ch06.invite`},`&&`,{"CNT?":`ch06.eighth`},`!`,`&&`,{"f()":`alert_level`},3,`<`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch06.altar`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.eighth`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],eighth:[[`^Glass bottles clinked near the foot of the iron stairs. One set of footsteps came to the base. `,`#`,`^sfx:sfx_steps_1`,`/#`,`
`,`^I pressed myself behind a girder. The smell of rust reached my nose.`,`
`,`^It was the village head. Soju in one hand, a stack of paper cups in the other.`,`
`,`^He crouched in front of the seven paper cups and filled each one.`,`
`,`^The neck of the bottle clinked against a rim seven times.`,`
`,`^“The old man can’t make it today. Don’t take it hard.” He said it to the cups.`,`
`,`^He peeled one new cup off the stack and set it apart, toward the tower stairs.`,`
`,`^That cup was filled too. This time the bottle struck the rim twice.`,`
`,`ev`,`str`,`^Stay hidden and watch`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Step out from behind the girder`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.eighth_watch`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.eighth_show`},`
`,{"#f":5}]}],{"#f":1}],eighth_watch:[`^He bowed his head over the cup by the stairs.`,`
`,`^Gravel crunched as he got to his feet.`,`
`,`^He stood there a long while.`,`
`,`^His footsteps went down toward the village, the empty bottle with them. `,`#`,`^sfx:sfx_steps_recede`,`/#`,`
`,`^Flecks of rust floated on the soju in the cup by the stairs.`,`
`,`ev`,{"VAR?":`C06_022`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch06.tower_hub`},{"#f":1}],eighth_show:[[`^I stepped away from the girder. Gravel crunched underfoot.`,`
`,`^The village head stood up and came a step closer.`,`
`,`^“Oh, it’s you, Ms. Han? You startled me!” His laugh rang off the steel.`,`
`,`^“Old Park does this every year. He’s in the hospital today, so I’m filling in.”`,`
`,`ev`,{"VAR?":`C06_022`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,`str`,`^“I’ll pour one too.” `,`#`,`^risk:trust_taeo+1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Who’s the eighth cup for?” `,`#`,`^risk:alert+5 `,`/#`,`#`,`^risk:trust_taeo-1`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.eighth_pour`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.eighth_ask`},`
`,{"#f":5}]}],{"#f":1}],eighth_pour:[`ev`,{"^var":`trust_taeo`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^I took the bottle and topped off the seven cups, a little each. He didn’t stop me.`,`
`,`^At the eighth cup, he held out a hand. The bottle went back into it.`,`
`,`^“Not that one.”`,`
`,`^He picked up that cup and drained it in one go. The empty cup, crushed, went into his pocket.`,`
`,`^“Calm hands, Ms. Han. Like an islander’s.” He clapped me on the shoulder.`,`
`,{"->":`ch06.tower_hub`},{"#f":1}],eighth_ask:[`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^“The seven face the seawall. Only that cup faces the tower stairs.”`,`
`,`^The village head tipped over the eighth cup with the toe of his shoe. The soju spread across the concrete.`,`
`,`^“Wind must’ve turned it.” The smile stayed only on his mouth.`,`
`,`^“It’s a memorial rite. For the island. Not for an outsider to count.”`,`
`,`^He took the bottle. His footsteps hurried off toward the village. `,`#`,`^sfx:sfx_steps_recede`,`/#`,`
`,{"->":`ch06.tower_hub`},{"#f":1}],altar:[`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^I crouched. Melted candle wax had dried white on the concrete.`,`
`,`^Drips layered over drips. I counted them the way I count mold layers, and quit around ten.`,`
`,`^Seven paper cups stood in a row, dried liquor crusted on the bottom of each.`,`
`,`^I looked where the cups pointed. The seawall. Toward Gate 3.`,`
`,`^People said an old man was near the tower every night. I counted the cups again. Still seven.`,`
`,`ev`,{"VAR?":`C06_012`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch06.tower_hub`},{"#f":1}],lighthouse:[`^The echo of waves in a closed space climbed the stairs. `,`#`,`^loc:lighthouse `,`/#`,`#`,`^amb:amb_lighthouse +radio`,`/#`,`
`,`^The back room of the keeper’s cottage was empty. `,`ev`,{"CNT?":`ch05.room`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^The fisherman’s jacket was folded differently from yesterday.`,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`^A fisherman’s jacket lay folded on the chair.`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,{"->":`ch06.lighthouse_hub`},{"#f":1}],lighthouse_hub:[[`ev`,`str`,`^Listen: below the stairs`,`/str`,{"CNT?":`ch06.stairs_voice`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.stairs_voice`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],stairs_voice:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I sat where the box had been, under the stairs. Someone else was breathing inside the echo of the waves.`,`
`,`^“Please do not come up. Visibility on the upper stairs is poor today.” From the top of the stairs, in the dark. A voice that had steadied its breath.`,`
`,`^“I did not take the envelope. That is why I am here.”`,`
`,`^“The nine took the dawn boat. I watched that boat from the lighthouse.”`,`
`,`ev`,{"VAR?":`ev_park_testimony`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“If Mr. Park allowed the recording, then he trusted the one listening.” `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“Thank you. Those words should have gone out on air, from me.”`,`
`,`ev`,{"^var":`trust_jaehee`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`.^.^.^.18`},null]}],`nop`,`
`,`ev`,{"VAR?":`C06_014`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^A left hand came down into the light on the landing and rested on the railing.`,`
`,`^When it drew back, I saw the palm. The lines ran unbroken across it.`,`
`,`ev`,{"VAR?":`C06_020`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^The breathing moved away.`,`
`,{"->":`ch06.lighthouse_hub`},{"#f":1}],minbak:[`ev`,{"VAR?":`timeslot`},2,`==`,{"CNT?":`ch06.invite`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.invite`},{"->":`.^.^.^.9`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,{"CNT?":`ch06.fall_news`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.fall_news`},{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.minbak_night`},{"->":`.^.^.^.28`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The kitchen tap dripped. Grandma Sunrye had gone out to the field. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,{"->":`.^.^.^.37`},null]}],[{"->":`.^.b`},{b:[`
`,`^Soup simmered on the kitchen stove. Grandma Sunrye kept her back turned. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,{"->":`.^.^.^.37`},null]}],`nop`,`
`,{"->":`ch06.minbak_hub`},{"#f":1}],minbak_hub:[[`ev`,`str`,`^Use: meal `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"VAR?":`timeslot`},2,`==`,{"CNT?":`ch06.meal_evening`},`!`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: radio `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},2,`==`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: rest in my room`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch06.meal_evening`},`
`,{"#f":5}],"c-1":[`^ `,`ev`,`str`,`^minbak`,`/str`,`/ev`,{"->t->":`use_radio_at`},{"->":`.^.^.^`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.rest`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],rest:[`^I lay down. The second hand ticked while the paper window slowly changed color. `,`#`,`^amb:amb_minbak -dosa -boiler`,`/#`,`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`ch06.minbak`},{"#f":1}],meal_evening:[`^The soup was saltier than the morning’s. Grandma Sunrye sat beside me and watched until the bowl was empty.`,`
`,`^She held out a hand for the empty bowl. Calluses lay even across the whole palm.`,`
`,`ev`,{"VAR?":`C06_019`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^“You ate. That’s enough.”`,`
`,`ev`,{"f()":`help`},`pop`,`/ev`,`
`,{"->":`ch06.minbak_hub`},{"#f":1}],fall_news:[`^Soup being ladled. Grandma Sunrye set a bowl on the table and jerked her chin at the seat. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak`,`/#`,`
`,`^“Old Park took a fall down his porch steps, they say.”`,`
`,`^“No clinic here, so he went to a mainland hospital on the afternoon boat. The youth association boys took him.”`,`
`,`ev`,{"VAR?":`ev_park_testimony`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I gripped the recorder in my inside jacket pocket. That morning’s tape was in it.`,`
`,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`
`,`^The old man at the edge of the porch, the radio at his ear. He’d fallen down the steps, she said.`,`
`,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`ev`,{"VAR?":`C06_002`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “And the radio? Did it go with him?”`,{"->":`.^.^.^.24`},null]}],`nop`,`
`,`^She pushed the bowl closer. “Eat. Today, you eat.”`,`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.minbak_night`},{"->":`.^.^.^.34`},null]}],`nop`,`
`,{"->":`ch06.minbak_hub`},{"#f":1}],invite:[[`^“Ms. Han! Perfect timing.” The village head’s voice came from behind me. He had a white envelope in his hand. `,`#`,`^time:evening`,`/#`,`
`,`^“The Elder wants to have tea with you. This evening. At his place.”`,`
`,`^I took the envelope. On thick mulberry paper, my name in brushstrokes. Seojin Han.`,`
`,`ev`,{"VAR?":`I_INVITATION`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^“You’re the first outsider on this island the Elder’s ever poured tea for.” He flicked the corner of the envelope.`,`
`,`ev`,`str`,`^Go: Manseok Kang’s house `,`#`,`^risk:ap1`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Today’s a tape-winding day.” `,`#`,`^risk:alert+15`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.kang`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.invite_refuse`},`
`,{"#f":5}]}],{"#f":1}],invite_refuse:[`^The village head laughed out loud and stepped closer. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“All right. I’ll smooth it over with the Elder.”`,`
`,`^He didn’t take back the envelope. He turned and walked off.`,`
`,`ev`,15,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch06.hub`},{"#f":1}],kang:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^First, a teacup touching its saucer. Then the pendulum clock. `,`#`,`^loc:kang_house `,`/#`,`#`,`^amb:amb_room +clock `,`/#`,`#`,`^sfx:sfx_clock_chime`,`/#`,`
`,`^A wide wooden floor, in the one old tile-roofed house among the new ones from 2004.`,`
`,`^An old man in a long white traditional coat sat with a teacup in both hands.`,`
`,`^“Be seated. Take a second cushion. The floor is hard.”`,`
`,`^“I am Manseok Kang, county councilor. On this island… one may simply call me the Elder.”`,`
`,`^He tipped the pot and poured my share himself. The tea smelled of dry grass.`,`
`,`^The pendulum clock’s tick leaned to one side. It was out of level. No one in this house looked likely to mention it.`,`
`,{"->":`ch06.kang_list`},{"#f":1}],kang_list:[`^“I am told you are a restorer. One who brings sound back to life.”`,`
`,`^“I can’t bring anything back. I clean up what’s there.”`,`
`,`^A folded paper showed at the end of his sleeve.`,`
`,`^“Drink your tea. How this island stood up again, you should hear that first.”`,`
`,`ev`,{"VAR?":`C06_006`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.manseok_talk`},{"->":`.^.^.^.13`},null]}],`nop`,`
`,`^“New houses went up in 2004. That money was a village rebuilding fund.”`,`
`,{"->":`ch06.kang_papers`},{"#f":1}],manseok_talk:[[`^“I believe the resort will bring this island back to life.” `,`#`,`^confront:C6_MANSEOK`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.manseok_win`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.manseok_lose`},`
`,{"#f":5}]}],{"#f":1}],manseok_win:[`^The cup went down with a short click. For the first time, he stopped smiling. `,`#`,`^fx:pause(1) `,`/#`,`#`,`^sfx:sfx_teacup`,`/#`,`
`,`^“You read paper closely, I see. Fine. Let us call it a relocation allowance. More tea?”`,`
`,{"->":`ch06.kang_papers`},{"#f":1}],manseok_lose:[`^“Enough about paper. Have you had supper?”`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch06.kang_papers`},{"#f":1}],kang_papers:[`^He drew the paper from his sleeve and spread it on the table.`,`
`,`^「Daeseung Construction relocation allowance payment list · 2003.11.16」. Nine names. Amounts. Signatures.`,`
`,`^Yeongho Kim. Malsun Seo. Dongcheol Choi. Gitaek Moon. Gisu Moon. Sanggil Bae. Yeonja Hong. Min-u Jang. Eun-a Jung.`,`
`,`^“All nine have done well. Most of them changed their names.”`,`
`,`^“Not eleven?”`,`
`,`^“Two are not on it. One went into hiding by choice. And the other.” He slid a plate of dried persimmons my way. “An accident. Please. From last winter.”`,`
`,`ev`,{"VAR?":`C06_007`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^He pressed the list flat with his palm.`,`
`,{"->":`ch06.kang_deal`},{"#f":1}],kang_deal:[`ev`,{"CNT?":`ch06.manseok_win`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Knowing the names will not float a boat.” `,`#`,`^fx:slow`,`/#`,`
`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Truth will not float a boat. Money will.” `,`#`,`^fx:slow`,`/#`,`
`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^“There is a seven-thirty boat tomorrow morning. The tapes, the recordings, I trust you will leave them behind.”`,`
`,`^“I will pay. What was paid twenty-three years ago, with interest.”`,`
`,`^He looked into my cup. I hadn’t touched it, and it had gone cold. The pendulum clock struck once.`,`
`,`^“You did not cry back then either.” `,`#`,`^plant:F19`,`/#`,`
`,`ev`,{"VAR?":`C06_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^He was smiling. “Your tea is cold. Drink.”`,`
`,{"->":`ch06.kang_choices`},{"#f":1}],kang_choices:[[`ev`,`str`,`^“Back then?”`,`/str`,{"CNT?":`ch06.ask_then`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: hands around the teacup`,`/str`,{"CNT?":`ch06.kang_hands`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Accept`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^Pretend to accept`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},`ev`,`str`,`^Refuse`,`/str`,`/ev`,{"*":`.^.c-4`,flg:4},{"c-0":[`^ `,{"->":`ch06.ask_then`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.kang_hands`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.deal_accept`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch06.deal_pretend`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch06.deal_refuse`},`
`,{"#f":5}]}],{"#f":1}],ask_then:[`^“Back then?”`,`
`,`^He drew my cup over, saucer and all, and poured more. It was still full. `,`#`,`^fx:pause(2) `,`/#`,`#`,`^sfx:sfx_teacup`,`/#`,`
`,`^“On the boat, I mean. When you first came in. The fog was thick.”`,`
`,`^I had no memory of seeing him on the boat coming in.`,`
`,`^The cup was too full to lift.`,`
`,{"->":`ch06.kang_choices`},{"#f":1}],kang_hands:[`^He set his teacup on the saucer, and both palms showed briefly.`,`
`,`^Both were thick-fleshed and smooth.`,`
`,`ev`,{"VAR?":`C06_018`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^Those hands had never held a tool.`,`
`,{"->":`ch06.kang_choices`},{"#f":1}],deal_accept:[`^“…All right.”`,`
`,`ev`,!0,`/ev`,{"VAR=":`deal_accepted`,re:!0},`ev`,-15,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^He nodded and rose.`,`
`,`^“Good. I shall bring the envelope. Sit and finish your tea.”`,`
`,`^The hem of the coat passed over the threshold. From the inner room came the creak of a wardrobe door.`,`
`,`^Beside the table stood a filing cabinet, one drawer open a finger’s width.`,`
`,{"->":`ch06.kang_alone`},{"#f":1}],deal_pretend:[`^“All right.” I picked up the teacup and held it in both hands so it wouldn’t shake.`,`
`,`^He nodded, and I took that to mean he’d bought it.`,`
`,`^“Then that is settled. The envelope will reach you on the boat tomorrow. Tae-o will see to it.”`,`
`,`^“I have a call to make. Stay seated.” The hem of the coat passed over the threshold.`,`
`,`^Beside the table stood a filing cabinet, one drawer open a finger’s width.`,`
`,{"->":`ch06.kang_alone`},{"#f":1}],kang_alone:[[`ev`,`str`,`^Examine: filing cabinet`,`/str`,{"CNT?":`ch06.cabinet`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: drink the tea`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.cabinet`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.kang_return`},`
`,{"#f":5}]}],{"#f":1}],cabinet:[`^I eased the drawer out with a fingernail, without a sound. `,`#`,`^allow-amb`,`/#`,`
`,`^A file labeled 「Daeseung Construction · Relocation Support · 2003」 had the original list, the receipts, and copies of nine envelopes.`,`
`,`^One more sheet, at the back. 「Jeongsuk Han · Migyeong Han’s share · 2003.11.28」.`,`
`,`^There were several copies. I slipped one inside my jacket and left the drawer open a finger’s width.`,`
`,`ev`,!0,`/ev`,{"VAR=":`ev_daeseung_docs`,re:!0},`ev`,{"VAR?":`I_DAESEUNG_DOCS`},{"f()":`get_item`},`pop`,`/ev`,`
`,{"->":`ch06.kang_alone`},{"#f":1}],kang_return:[`^I sipped the cold tea. It tasted of dry grass. I couldn’t have told you if it was good.`,`
`,[`ev`,{"CNT?":`ch06.deal_accept`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Manseok Kang came back and set a thick envelope on the table. It landed heavily.`,`
`,`^“Interest included.” The envelope slid my way, and I put it inside my jacket. The front bulged.`,`
`,{"->":`.^.^.^.5`},null]}],[`ev`,{"CNT?":`ch06.deal_refuse`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Manseok Kang came back empty-handed. “Tae-o is waiting at the gate.”`,`
`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`
`,`^Manseok Kang came back empty-handed. “I have told Tae-o. Seven-thirty in the morning.”`,`
`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^“You would do well to walk back with Tae-o. The sea fog is thick.”`,`
`,{"->":`ch06.kang_exit`},{"#f":1}],deal_refuse:[`^“No. I don’t cut a tape while it’s running.”`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^He kept smiling and poured more tea into my cup.`,`
`,`^“Young, I see. Migyeong was the same.” `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“I shall call Tae-o. Stay seated.” The hem of the coat passed over the threshold.`,`
`,`^Beside the table stood a filing cabinet, one drawer open a finger’s width.`,`
`,{"->":`ch06.kang_alone`},{"#f":1}],kang_exit:[[`^Manseok Kang saw me to the door.`,`
`,`^A hand rose. Toward my head.`,`
`,`ev`,`str`,`^Stand still`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Step back`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.mem10`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.no_mem10`},`
`,{"#f":5}]}],{"#f":1}],mem10:[`^The hand touched my head. It weighed nothing.`,`
`,`ev`,{"VAR?":`M10`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^A grown-up’s hand pats my head. The other hand gives Auntie an envelope. The smell of new money. `,`#`,`^memory:M10 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,`^“Go.” The hand dropped. The gate closed.`,`
`,{"->":`ch06.kang_after`},{"#f":1}],no_mem10:[`^I stepped back. The hand stopped in midair, then dropped.`,`
`,`^“Go.” The gate closed.`,`
`,{"->":`ch06.kang_after`},{"#f":1}],kang_after:[`^Outside the gate it was already dark. The village head stood waiting with a flashlight.`,`
`,`^“I’ll walk you back. The Elder’s orders.”`,`
`,{"->":`ch06.hub`},{"#f":1}],minbak_night:[`ev`,{"CNT?":`ch06.phone`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch06.phone`},{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^The wall clock ticking. The kitchen light was off. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`ch06.night_hub`},{"#f":1}],night_hub:[[`ev`,{"VAR?":`C06_003`},{"f()":`has_clue`},{"VAR?":`C06_005`},{"f()":`has_clue`},`+`,{"VAR?":`C06_006`},{"f()":`has_clue`},`+`,{"VAR?":`C06_007`},{"f()":`has_clue`},`+`,`/ev`,{"temp=":`req`},`
`,`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch06.solved`},`!`,{"VAR?":`req`},2,`>=`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: telephone `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch06.phone_confess`},`!`,{"CNT?":`ch06.phone_retry`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: radio `,`#`,`^risk:ap1`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:20},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},`ev`,`str`,`^Use: turn off the light`,`/str`,{"CNT?":`ch06.solved`},`/ev`,{"*":`.^.c-4`,flg:5},{"c-0":[`^ `,{"->":`ch06.deduce`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.phone_retry`},`
`,{"#f":5}],"c-2":[`^ `,`ev`,`str`,`^minbak`,`/str`,`/ev`,{"->t->":`use_radio_at`},{"->":`.^.^.^`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch06.cliff`},`
`,{"#f":5}]}],{"#f":1}],phone:[[`^The telephone was ringing when I came into my room. I picked up on the third ring. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak `,`/#`,`#`,`^sfx:sfx_phone_ring`,`/#`,`
`,`^Laughter from a TV drama came first, then my aunt’s voice. `,`#`,`^amb:amb_phone_tv`,`/#`,`
`,`^“Seojin. Still foggy out there, isn’t it.”`,`
`,`^“Auntie. Someone wants me on tomorrow’s boat.”`,`
`,`^“…Then take it. Take it and come home. And no more about your mom.”`,`
`,`^The TV got louder. The click of a remote button.`,`
`,`ev`,`str`,`^“I talked to Eun-a Jung. The clinic nurse. She’s alive.”`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^“Let’s talk about Mom. About it being an accident.”`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch06.phone_confess`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.phone_dodge`},`
`,{"#f":5}]}],{"#f":1}],phone_dodge:[`^“What happened to your mom was an accident. I mean… it was just an accident.”`,`
`,`^“Seojin, this is costing me. I’ll call you back when my show’s over.” The line cut off. No call came back.`,`
`,`^I set the receiver back in its cradle. `,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`ch06.minbak_night`},{"#f":1}],phone_retry:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I called back. Six rings. The TV came through first. `,`#`,`^amb:amb_phone_tv`,`/#`,`
`,`^“…Seojin.”`,`
`,`^“I talked to Eun-a Jung. The clinic nurse. She’s alive. Under a different name.”`,`
`,{"->":`ch06.phone_confess`},{"#f":1}],phone_confess:[`^A click of the remote, and the TV went off. The line stayed silent a long time. `,`#`,`^amb:amb_phone_tv -tv `,`/#`,`#`,`^fx:pause(2)`,`/#`,`
`,`^“…That money.” My aunt brought it up again, for the first time in two days.`,`
`,`^“That money… they said it was my sister’s share. They said it was hers, and I took the envelope.” `,`#`,`^payoff:F17`,`/#`,`
`,`^“Your name was on it too.” `,`#`,`^fx:reveal(phone)`,`/#`,`
`,`^“On the porch of that house. An old man in white gave it to me. You were right there beside me.”`,`
`,`^“Don’t ask why I brought you. My soup’s boiling over. I’m hanging up.”`,`
`,`ev`,{"VAR?":`C06_005`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^The TV sound came back. Neither of us put down the receiver. The wall clock struck ten. `,`#`,`^amb:amb_phone_tv`,`/#`,`
`,{"->":`ch06.minbak_night`},{"#f":1}],deduce:[[`^I opened the notebook. One card went down on each of the eleven names. `,`#`,`^deduce:CH06`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch06.solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.deduce_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.hub`},`
`,{"#f":5}]}],{"#f":1}],deduce_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^While I ran down the eleven names, midnight drew close. Far off, a tiller idled on and on.`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^Again and again, the pencil ran down the eleven names. The point wore blunt.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch06.deduce`},{"#f":1}],hint:[{"->":`ch06.deduce`},{"#f":1}],mid_board:[[`ev`,{"CNT?":`.^.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I stopped under a utility pole by the road and opened the notebook.`,`
`,`^Next to the testimony card I’d restored three days ago, I laid today’s card.`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^I laid the cards out in two rows. 1996 on top, 2003 below. `,`#`,`^deduce:CH06_MID`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch06.mid_solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch06.mid_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch06.hub_choices`},`
`,{"#f":5}]}],{"#f":1}],mid_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Leaning against the pole, I couldn’t look up from the notebook.`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch06.mid_board`},{"#f":1}],mid_solved:[`^March 13, 1996. Company men. Envelopes to three houses. Three in the log. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`^I closed the notebook.`,`
`,{"->":`ch06.hub_choices`},{"#f":1}],solved:[`^Nine on the dawn boat. Nine envelopes. In the space for the one who never came back: Migyeong Han. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,`^I closed the notebook. When I looked up, it was dark all around. `,`#`,`^time:night`,`/#`,`
`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,{"->":`ch06.hub`},{"#f":1}],cliff:[`^I turned off the light. In the dark, only the tick of the wall clock’s second hand was clear.`,`
`,`^A knock at the door. Three times. Evenly spaced. `,`#`,`^sfx:sfx_knock_x3`,`/#`,`
`,`^I opened it. The officer stood there. Behind his glasses, his eyes wouldn’t meet mine.`,`
`,`^He read from an open notebook, the way regulations are read out.`,`
`,{"->t->":`alert_arrest`},`#`,`^cliff:notice`,`/#`,`^“Tomorrow morning, the seven-thirty boat. Seojin Han is to be put aboard.”`,`
`,`ev`,{"^->":`endings`},`/ev`,{"->t->":`alert_gate`},{"->":`ch07`},{"#f":1}],"#f":1}],ch07:[`#`,`^chapter:7`,`/#`,`#`,`^label:TAPE 07 · Backward`,`/#`,`ev`,7,{"f()":`start_day`},`pop`,`/ev`,`
`,`^A boot sole scraped the doorsill. No chopping. `,`#`,`^time:morning `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa `,`/#`,`#`,`^sfx:sfx_steps_1`,`/#`,`
`,`^A bundle sat tied on the kitchen table. The smell of cooked rice came through the cloth.`,`
`,`^Grandma Sunrye was already standing at the door with her boots on.`,`
`,`^“Take it. Eat on the boat.”`,`
`,`^She turned and went out into the yard. A bent back, the height of the one I had ridden on in the fog. Far off, a ship’s horn sounded. `,`#`,`^sfx:sfx_ferry_horn`,`/#`,`
`,`ev`,{"VAR?":`C07_013`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^I picked up the bundle. Still warm.`,`
`,{"->":`.^.morning`},{morning:[[`ev`,`str`,`^Listen: last broadcast`,`/str`,`/ev`,{"*":`.^.c-0`,flg:20},`ev`,`str`,`^Go: ferry pier`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch07.recap`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.ferry`},`
`,{"#f":5}]}],{"#f":1}],recap:[`^Word that Old Park had fallen down the steps. My aunt’s TV, over the line. `,`#`,`^sfx:sfx_rewind`,`/#`,`
`,`^At my door, Dohyeon Lee read from his notebook without skipping a word.`,`
`,`^“Tomorrow morning, the seven-thirty boat. Seojin Han is to be put aboard.”`,`
`,{"->":`ch07.morning`},{"#f":1}],ferry:[`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The ferry’s engine was idling. It didn’t sound ready to leave yet. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Between the waves, the creak of a rope being coiled. A deckhand looked away. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^The engine droned low. Two youth association members stood in the shade of a shed. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^The engine. Villagers stood in a line along the pier, mouths shut. `,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^Dohyeon Lee stood at the foot of the gangway. A notebook sat in the breast pocket of his freshly pressed uniform.`,`
`,`^His words dropped one at a time, and the edit points showed.`,`
`,`ev`,{"VAR?":`deal_accepted`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“I am told you accepted the envelope. Even so, my orders say to put you aboard.”`,`
`,{"->":`.^.^.^.18`},null]}],[{"->":`.^.b`},{b:[`
`,`^“It is the seven-thirty boat. My orders say to put you aboard.”`,`
`,{"->":`.^.^.^.18`},null]}],`nop`,`
`,`^“There is talk about Byeongchun Park’s fall. Your movements yesterday are all in my notebook, down to the hour.”`,`
`,[`ev`,{"VAR?":`trust_dohyun`},1,`>=`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.branch_a`},{"->":`.^.^.^.26`},null]}],[`ev`,{"VAR?":`trust_dohyun`},0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.branch_b`},{"->":`.^.^.^.26`},null]}],[`ev`,{"VAR?":`trust_dohyun`},-1,`<=`,{"VAR?":`trust_sunrye`},2,`>=`,`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.branch_c`},{"->":`.^.^.^.26`},null]}],[{"->":`.^.b`},{b:[`
`,{"->":`ch07.branch_d`},{"->":`.^.^.^.26`},null]}],`nop`,`
`,{"#f":1}],branch_a:[`^He was slow to check his watch.`,`
`,`^A deckhand was untying the gangway rope. The engine climbed in pitch.`,`
`,`^“The boat… has already left.” `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“My orders mention only the seven-thirty boat. No other boat is mentioned.”`,`
`,`^“My watch says seven twenty-five.”`,`
`,`^He wiped the fog from his glasses and left the notebook in his pocket.`,`
`,`^The ferry’s stern went into the fog. The horn sounded from inside it. `,`#`,`^sfx:sfx_ferry_horn`,`/#`,`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`ch07.ferry_after`},{"#f":1}],branch_b:[`^Before my foot touched the gangway, I turned.`,`
`,`^I ran for the net shed, sure someone would come after me. No one did.`,`
`,`^In the rubber-smelling shade of the shed, I crouched between heaps of net.`,`
`,`^Dohyeon Lee stayed at the gangway. He took out his notebook and wrote something down.`,`
`,`^The boat left. The horn reached me all the way in among the nets. `,`#`,`^sfx:sfx_ferry_horn`,`/#`,`
`,`^I came out of the shed. The pier was empty.`,`
`,`ev`,15,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,2,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`ch07.ferry_after`},{"#f":1}],branch_c:[`^He took my arm, not hard. My foot touched the gangway.`,`
`,`^Boots came up from behind. Fast. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,`^Grandma Sunrye, still in her apron, planted herself in front of the gangway.`,`
`,`^“This child is my guest. Since when do you put a guest on a boat?”`,`
`,`^By the shed, Tae-o Kang laughed out loud and took one step back.`,`
`,`^Dohyeon Lee let go. “The regulations make no provision for guests.”`,`
`,`^The horn sounded and the boat pulled out. `,`#`,`^sfx:sfx_ferry_horn`,`/#`,`
`,`^She retied the knot on my bundle and walked off toward the village.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,2,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`ch07.ferry_after`},{"#f":1}],branch_d:[`^I went up the gangway. Dohyeon Lee stayed on the pier and wrote in his notebook.`,`
`,`^The engine pushed the boat out. The island vanished behind the fog. `,`#`,`^sfx:sfx_ferry_horn`,`/#`,`
`,`^About twenty minutes later, I went to the stern, where a lifeboat hung. The crew was in the wheelhouse.`,`
`,`^I loosened the lines, and the boat hit the water with a short slap.`,`
`,`^Fog on every side, so I rowed by feel. The waves kept pushing the boat to one side.`,`
`,`^The boat knocked against a rusted hull. The old wharf. `,`#`,`^loc:wreck `,`/#`,`#`,`^amb:amb_sea `,`/#`,`#`,`^sfx:sfx_hull_knock`,`/#`,`
`,`^I was soaked to the knees. The bundle stayed dry.`,`
`,`ev`,25,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,`^By the time I’d hauled the boat up, the sun was above the fog. `,`#`,`^time:day`,`/#`,`
`,{"->":`ch07.hub`},{"#f":1}],ferry_after:[[`ev`,`str`,`^Examine: ticket window`,`/str`,{"CNT?":`ch07.ticket`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch07.ticket`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.hub`},`
`,{"#f":5}]}],{"#f":1}],ticket:[[`^Behind the ticket window glass lay a single one-way ticket for this morning’s 7:30.`,`
`,`^The buyer box was blank. The issue date was yesterday evening.`,`
`,`ev`,{"VAR?":`C07_009`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`I_TICKET`},{"f()":`get_item`},`pop`,`/ev`,`
`,`^Without looking up, the ticket clerk pushed the ticket out through the gap under the glass.`,`
`,`ev`,{"VAR?":`C07_011`},{"f()":`has_clue`},{"VAR?":`C06_011`},{"f()":`has_clue`},`||`,{"VAR?":`C03_011`},{"f()":`has_clue`},`||`,`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“One-way, one. Seven-thirty. Yours. Afternoon boat, four-thirty. Adults, seven thousand won…” Nothing about the buyer box.`,`
`,{"->":`ch07.ticket_keep`},{"->":`.^.^.^.30`},null]}],`nop`,`
`,`^“One-way, one. Seven-thirty. Yours. Afternoon boat, four-thirty. Adults, seven thousand won…” Nothing about the buyer box. `,`#`,`^confront:C7_TICKET`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Pocket the ticket`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch07.ticket_win`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.ticket_lose`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.ticket_keep`},`
`,{"#f":5}]}],{"#f":1}],ticket_win:[`^“I never bought a ticket. Someone else knew I’d be on today’s boat.”`,`
`,`^The clerk rubbed a thumb over the stamp on the ticket. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“Issued yesterday evening. Village office stamp. Said to see you onto the boat—”`,`
`,`^“I just do tickets.” The clerk lowered the shutter halfway.`,`
`,`ev`,-5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch07.ticket_keep`},{"#f":1}],ticket_lose:[`^“Strange. I never bought it. Got a receipt?”`,`
`,`^When the clerk lowered the window shutter, a rotary dial whirred inside.`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch07.ticket_keep`},{"#f":1}],ticket_keep:[`^I put the ticket in my inside jacket pocket. An evidence bag would have been nice.`,`
`,{"->":`ch07.ferry_after`},{"#f":1}],hub:[`ev`,{"VAR?":`day_over`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ `,{"->":`ch07.night_end`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.night`},{"->":`.^.^.^.12`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Sea fog had come down to the rooftops. The echo of the ferry horn lingered in the lanes. `,`#`,`^time:morning`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Demolition trucks rumbled from every direction. The sun was above the fog. `,`#`,`^time:day`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^With the trucks gone, the waves came back to the road first. Fog sank gray where the sun was setting. `,`#`,`^time:evening`,`/#`,`
`,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"f()":`ch07_warn_due`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch07.culprit_warn`},{"->":`.^.^.^.26`},null]}],`nop`,`
`,{"->":`ch07.mid_gate`},{"#f":1}],culprit_warn:[`^I went through every card in my notebook.`,`
`,`^I still didn’t have what I needed to point at whoever was on those stairs that night.`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],mid_gate:[`ev`,{"VAR?":`C07_001`},{"f()":`has_clue`},{"VAR?":`C07_003`},{"f()":`has_clue`},`+`,{"VAR?":`C07_004`},{"f()":`has_clue`},`+`,`/ev`,{"temp=":`req`},`
`,`ev`,{"CNT?":`ch07.solved`},`!`,{"CNT?":`ch07.mid_board`},`!`,`&&`,{"VAR?":`req`},2,`>=`,`&&`,{"VAR?":`C07_003`},{"f()":`has_clue`},{"VAR?":`C02_006`},{"f()":`has_clue`},`||`,`&&`,{"VAR?":`C07_004`},{"f()":`has_clue`},{"VAR?":`C03_007`},{"f()":`has_clue`},{"VAR?":`C02_003`},{"f()":`has_clue`},`&&`,`||`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.mid_board`},{"->":`.^.^.^.39`},null]}],`nop`,`
`,{"->":`ch07.hub_choices`},{"#f":1}],hub_choices:[[`ev`,{"VAR?":`C07_001`},{"f()":`has_clue`},{"VAR?":`C07_003`},{"f()":`has_clue`},`+`,{"VAR?":`C07_004`},{"f()":`has_clue`},`+`,`/ev`,{"temp=":`req`},`
`,`ev`,`str`,`^Go: Haemu FM studio`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Go: village lanes`,`/str`,{"VAR?":`timeslot`},1,`>=`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village office`,`/str`,{"VAR?":`timeslot`},1,`==`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: police box`,`/str`,{"VAR?":`timeslot`},1,`<=`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: transmitter tower`,`/str`,`/ev`,{"*":`.^.c-4`,flg:4},`ev`,`str`,`^Go: seawall`,`/str`,{"VAR?":`timeslot`},0,`==`,`/ev`,{"*":`.^.c-5`,flg:5},`ev`,`str`,`^Go: seawall`,`/str`,{"VAR?":`timeslot`},2,`==`,`/ev`,{"*":`.^.c-6`,flg:5},`ev`,`str`,`^Go: Sea House guesthouse`,`/str`,`/ev`,{"*":`.^.c-7`,flg:4},`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch07.solved`},`!`,{"VAR?":`req`},2,`>=`,{"VAR?":`timeslot`},2,`>=`,{"VAR?":`req`},1,`>=`,`&&`,`||`,`&&`,`/ev`,{"*":`.^.c-8`,flg:5},`ev`,`str`,`^Examine: notebook — photo and memo`,`/str`,{"CNT?":`ch07.solved`},`!`,{"CNT?":`ch07.mid_board`},`&&`,{"CNT?":`ch07.mid_solved`},`!`,`&&`,`/ev`,{"*":`.^.c-9`,flg:5},{"c-0":[`^ `,{"->":`ch07.studio_go`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.alley`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.office`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.police`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch07.tower`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch07.seawall_blocked`},`
`,{"#f":5}],"c-6":[`^ `,{"->":`ch07.seawall`},`
`,{"#f":5}],"c-7":[`^ `,{"->":`ch07.minbak_rest`},`
`,{"#f":5}],"c-8":[`^ `,{"->":`ch07.deduce`},`
`,{"#f":5}],"c-9":[`^ `,{"->":`ch07.mid_board`},`
`,{"#f":5}]}],{"#f":1}],night_end:[{"->":`ch07.night`},{"#f":1}],minbak_rest:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^In the empty kitchen, the wall clock’s second hand ticked on alone. Grandma Sunrye was out. The table was bare. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,`^I set the bundle I’d been carrying down on the table.`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^In the empty kitchen, the wall clock’s second hand ticked on alone. Grandma Sunrye was out. The bundle sat where I’d left it. `,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch07.minbak_rest_hub`},{"#f":1}],minbak_rest_hub:[[`ev`,`str`,`^Use: radio `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},2,`>=`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: rest`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,`ev`,`str`,`^minbak`,`/str`,`/ev`,{"->t->":`use_radio_at`},{"->":`.^.^.^`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.rest`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.hub`},`
`,{"#f":5}]}],{"#f":1}],rest:[`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,`^I lay down in my room. The wall clock ticked on for a long while.`,`
`,`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The light in the window had changed by the time I got up.`,`
`,{"->":`ch07.hub`},{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`
`,{"->":`ch07.night`},{"->":`.^.^.^.14`},null]}],`nop`,`
`,{"#f":1}],studio_go:[`ev`,{"CNT?":`.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The switch clicked uselessly. The fluorescent lights stayed off. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_fog`,`/#`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^The sound of the door opening was slow to fade in the half-empty room. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`ch07.studio`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The switch clicked uselessly. The fluorescent lights stayed off. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_fog`,`/#`,`
`,`^I switched on the flashlight. Removal boxes lined the wall.`,`
`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`
`,`^Outside the window, a demolition truck idled in the yard. Removal boxes lined the wall. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio`,`/#`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`^The archive was empty, but one playback deck still sat on the console. The movers probably had no idea what it was worth.`,`
`,`ev`,{"CNT?":`ch06.deck_note`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I took the scrap from my pocket and smoothed it out beside the deck. 「Tomorrow. Backward.」`,`
`,{"->":`.^.^.^.24`},null]}],[{"->":`.^.b`},{b:[`
`,`^A scrap of paper lay on the deck. In pencil: 「Tomorrow. Backward.」`,`
`,{"->":`.^.^.^.24`},null]}],`nop`,`
`,`^Another scrap, in the same penciled handwriting, was tucked under the deck.`,`
`,`^「Eleven forty. No name goes on the air that the tapes cannot answer for.」`,`
`,{"->":`ch07.studio`},{"#f":1}],studio:[[`ev`,{"f()":`ch07_warn_due`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch07.culprit_warn`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,`str`,`^Use: service the deck `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch07.deck_fix`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Listen: unlabeled tape ◀`,`/str`,{"CNT?":`ch07.deck_fix`},`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: master tape `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`tool_reverse`},{"VAR?":`I_TAPE_MASTER`},{"f()":`has_item`},`&&`,{"VAR?":`master_self`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.deck_fix`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.reverse_play`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.master_restore`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.hub`},`
`,{"#f":5}]}],{"#f":1}],deck_fix:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I found a screwdriver in the drawer and took out the four screws on the deck’s cover.`,`
`,`^It was an auto-reverse deck. I pulled out the linkage that flips the head over.`,`
`,`^When I pressed reverse, the head stayed put and the tape ran backward. Oil on my fingertips.`,`
`,`^I closed the cover. Next to the button, I wrote in pen: 「◀ REVERSE」.`,`
`,`ev`,!0,`/ev`,{"VAR=":`tool_reverse`,re:!0},{"->":`ch07.studio`},{"#f":1}],reverse_play:[`ev`,{"CNT?":`.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`I_TAPE_WAVE`},{"f()":`has_item`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I loaded the unlabeled tape from my bag. The door clicked shut. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^An unlabeled tape stood beside the deck. It hadn’t made it into the removal boxes.`,`
`,`^I loaded it. The door clicked shut. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^I pressed ◀ and put on the headphones. `,`#`,`^tape:TAPE07`,`/#`,`
`,`^The waves rushed out backward, away from where they should have come in.`,`
`,`^At 1:12, the rhythm that had slipped turned into words. `,`#`,`^payoff:F06`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^I wound the tape to the end and pressed ◀ again. `,`#`,`^sfx:sfx_rewind `,`/#`,`#`,`^tape:TAPE07`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch07.deck07`},{"#f":1}],deck07:[[`ev`,`str`,`^Listen: tape again`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Use: stop`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Clean heads `,`#`,`^deck_clean`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch07.reverse_play`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.deck07_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.deck07_clean`},`
`,{"#f":5}]}],{"#f":1}],deck07_clean:[`ev`,{"VAR?":`ap`},0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^I wiped the heads with the last swab. The tip came away nearly clean.`,`
`,{"->":`ch07.reverse_play`},{"#f":1}],deck07_stop:[`^I stopped the reverse playback and took off the headphones. The reels made one more turn and stopped. `,`#`,`^sfx:sfx_tape_stop`,`/#`,`
`,`ev`,{"VAR?":`C07_005`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I read the stretch I’d copied into the notebook again. The last words were “Under the water.”`,`
`,{"->":`.^.^.^.11`},null]}],[{"->":`.^.b`},{b:[`
`,`^The backward voice never made it into my notebook.`,`
`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,{"->":`ch07.studio`},{"#f":1}],master_restore:[[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I took the unlabeled master tape from my inside jacket pocket. Salt crusted the inside of the case.`,`
`,`^I unwound the end by hand. Wherever it had been wet and dried, the tape was stiff.`,`
`,`^Four broken pieces, two of them joined back to front. `,`#`,`^restore:MASTER_R7`,`/#`,`
`,`ev`,`str`,`^Restore `,`#`,`^restore_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Give up `,`#`,`^restore_cancel`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch07.master_ok`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.master_cancel`},`
`,{"#f":5}]}],{"#f":1}],master_ok:[`ev`,!0,`/ev`,{"VAR=":`ev_master_tape`,re:!0},`ev`,!0,`/ev`,{"VAR=":`master_self`,re:!0},`^I joined the pieces in order. Splicing tape stuck to my fingertips.`,`
`,`^I threaded it past the heads. From the wet end came an old man’s voice.`,`
`,`^“Someone has to call their names.” It was the old man on the tape.`,`
`,`^I stopped the deck and put the master back in its case.`,`
`,{"->":`ch07.studio`},{"#f":1}],master_cancel:[`^I put the pieces back in the case. The end stayed stiff.`,`
`,{"->":`ch07.studio`},{"#f":1}],alley:[`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^A demolition truck’s reverse beeper came over the wall. The clotheslines had all been taken down. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^Windows shut along the lane, one after another. A truck driver looked this way, then turned away. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^As soon as a truck engine shut off, boots sounded right behind my shoulder. They stopped before I turned. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village `,`/#`,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^A tailgate banged down the lane. The people beside the truck had stopped loading to watch me. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch07.shop`},{"#f":1}],shop:[`^Empty boxes were stacked outside the general store. The sliding door stood wide open.`,`
`,`ev`,{"f()":`alert_level`},`/ev`,[`du`,`ev`,0,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Dusty, isn’t it? We’re clearing out the stock. Noodles are half price. Matches too.” The storekeeper made room at the end of the bench.`,`
`,{"->":`.^.^.^.9`},null]}],[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^This time the storekeeper nodded first. “Back again? I’ve lost count of the trucks today. What are they even hauling?” His eyes stayed on the trucks down the lane.`,`
`,{"->":`.^.^.^.9`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,`^“Closing up today. Nothing left anyway.” The storekeeper slid the door shut. Inside, two more pairs of boots.`,`
`,{"->":`.^.^.^.9`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,`^Even the bench had been cleared away. The clang of metal rose from down the lane.`,`
`,{"->":`.^.^.^.9`},null]}],`nop`,`
`,{"->":`ch07.alley_hub`},{"#f":1}],alley_hub:[[`ev`,`str`,`^Talk: storekeeper — ask indirectly `,`#`,`^risk:ap1`,`/#`,`/str`,{"CNT?":`ch07.rumor_park`},`!`,{"CNT?":`ch07.rumor_direct`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Talk: storekeeper — ask directly `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch07.rumor_direct`},`!`,{"VAR?":`C07_010`},{"f()":`has_clue`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: carry loads `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-5`,`/#`,`/str`,{"CNT?":`ch07.carry`},`!`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Use: radio `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`timeslot`},2,`>=`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,{"CNT?":`ch07.accuse`},`!`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,{"CNT?":`ch07.accuse`},`/ev`,{"*":`.^.c-5`,flg:5},{"c-0":[`^ `,{"->":`ch07.rumor_park`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.rumor_direct`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.carry`},`
`,{"#f":5}],"c-3":[`^ `,`ev`,`str`,`^alley`,`/str`,`/ev`,{"->t->":`use_radio_at`},{"->":`.^.^.^`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch07.accuse`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch07.hub`},`
`,{"#f":5}]}],{"#f":1}],rumor_park:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`asked_indirect`},1,`+`,`/ev`,{"VAR=":`asked_indirect`,re:!0},`^“On demolition days, dust gets inside my deck. Is Old Park all right?”`,`
`,`ev`,{"f()":`alert_level`},0,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The storekeeper tore open a packet of coffee and shook it into a paper cup.`,`
`,`^“The old man? He fell in the yard, I watched him. It wasn’t the steps.”`,`
`,`^“Drink up before it cools. It’s the last packet, so no charge.”`,`
`,`ev`,{"VAR?":`C07_010`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`.^.^.^.21`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Couldn’t tell you. With these eyes, what would I have seen?” The storekeeper turned the radio up. He nodded down the lane at the youth association men. “Ask it sideways and they’re the ones who hear it.”`,`
`,{"->":`.^.^.^.21`},null]}],`nop`,`
`,{"->":`ch07.alley_hub`},{"#f":1}],rumor_direct:[`ev`,{"VAR?":`asked_direct`},1,`+`,`/ev`,{"VAR=":`asked_direct`,re:!0},`^“Who first said Old Park fell down the steps? I like to hear the original.”`,`
`,`^The storekeeper got up from the bench and glanced out the sliding door. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“The yard. The yard.”`,`
`,`^“Steps, my foot. Take some noodles. Gone after today.” He slid the door half shut.`,`
`,`ev`,{"VAR?":`C07_010`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch07.alley_hub`},{"#f":1}],carry:[`ev`,{"f()":`help`},`pop`,`/ev`,`
`,`^Moving boxes were piled outside the last house in the lane. Off to a son’s place on the mainland, I was told.`,`
`,`^I carried three boxes to the truck bed. An old woman bowed her head.`,`
`,`^“Quick hands, for an outsider.” She gave a box’s cord one more tug.`,`
`,`^“These hands wind reels.”`,`
`,{"->":`ch07.alley_hub`},{"#f":1}],accuse:[[`^Tae-o Kang stood at the mouth of the lane, left hand in his pocket.`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Two youth association members stood on either side, arms folded.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^“Seojin.” He drew out the end of my name.`,`
`,`ev`,{"VAR?":`C07_010`},{"f()":`has_clue`},{"VAR?":`C07_007`},{"f()":`has_clue`},`&&`,`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“You heard about Old Park, yeah? Talk’s going around the village.”`,`
`,{"->":`ch07.accuse_plain`},{"->":`.^.^.^.21`},null]}],`nop`,`
`,`^“You heard about Old Park, yeah? Talk’s going around the village.” `,`#`,`^confront:C7_ACCUSE`,`/#`,`
`,`ev`,`str`,`^Confront `,`#`,`^confront_win`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Confront `,`#`,`^confront_lose`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^“Go check at the police box.” `,`#`,`^risk:alert+10`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^Walk past without a word `,`#`,`^risk:alert+10`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.accuse_defend`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.accuse_fail`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.accuse_police`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.accuse_fail`},`
`,{"#f":5}]}],{"#f":1}],accuse_plain:[[`ev`,`str`,`^“Go check at the police box.” `,`#`,`^risk:alert+10`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Walk past without a word `,`#`,`^risk:alert+10`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch07.accuse_police`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.accuse_fail`},`
`,{"#f":5}]}],{"#f":1}],accuse_defend:[`ev`,{"VAR?":`park_visit_am`},{"CNT?":`ch06.park`},{"CNT?":`ch06.park_over`},`!`,`&&`,`||`,{"CNT?":`ch06.talk`},`||`,{"CNT?":`ch06.support`},`||`,{"CNT?":`ch06.evidence`},`||`,{"CNT?":`ch06.wardrobe`},`||`,`/ev`,{"temp=":`park_am`},`ev`,{"VAR?":`C07_010`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “It was the yard, I’m told. Not the steps.” `,{"->":`.^.^.^.22`},null]}],`nop`,`
`,[`ev`,{"VAR?":`park_am`},{"CNT?":`ch06.park_over`},`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“I stopped by Old Park’s yesterday morning, and again in the afternoon. Both times I left, he was on the porch.”`,`
`,`^“I haven’t been back to that house since.”`,`
`,{"->":`.^.^.^.28`},null]}],[`ev`,{"CNT?":`ch06.park_over`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“I stopped by Old Park’s yesterday afternoon. When I left, he was sitting on the porch.”`,`
`,`^“I haven’t been back to that house since.”`,`
`,{"->":`.^.^.^.28`},null]}],[`ev`,{"CNT?":`ch06.park`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“I stopped by Old Park’s yesterday morning. When I left, he was sitting on the porch.”`,`
`,`^“I haven’t been back to that house since.”`,`
`,{"->":`.^.^.^.28`},null]}],[{"->":`.^.b`},{b:[`
`,`^“I didn’t even go to Old Park’s yesterday.”`,`
`,{"->":`.^.^.^.28`},null]}],`nop`,`
`,`ev`,{"VAR?":`C07_007`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “The officer’s notebook has everywhere I went. Right down to when the fall was reported. Uncut.” `,{"->":`.^.^.^.35`},null]}],`nop`,`
`,`^Tae-o Kang laughed louder. The sound bounced off the wall and came back. `,`#`,`^fx:pause(1)`,`/#`,`
`,`ev`,{"VAR?":`C07_007`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “…The officer writes that stuff down too?” `,{"->":`.^.^.^.48`},null]}],[{"->":`.^.b`},{b:[`^ “Got a way with words, huh.” `,{"->":`.^.^.^.48`},null]}],`nop`,`
`,`^He stepped aside.`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The two youth association members followed him out of the lane.`,`
`,{"->":`.^.^.^.58`},null]}],`nop`,`
`,{"->":`ch07.hub`},{"#f":1}],accuse_police:[`^“Sure. Let’s go see.”`,`
`,`^He stepped aside. Footsteps followed me to the end of the lane.`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch07.hub`},{"#f":1}],accuse_fail:[`^I brushed past his shoulder. His voice followed me.`,`
`,`^“I don’t dig up the past. But the old man, that was yesterday, yeah?”`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch07.hub`},{"#f":1}],police:[`ev`,{"CNT?":`.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The fluorescent ballast’s buzz carried to the doorway. `,`#`,`^loc:police `,`/#`,`#`,`^amb:amb_police`,`/#`,`
`,`^Dohyeon Lee didn’t look up. His pen kept scratching.`,`
`,{"->":`ch07.police_hub`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^The fluorescent ballast buzzed. Dohyeon Lee looked up from writing in his notebook at the sound of the door. `,`#`,`^loc:police `,`/#`,`#`,`^amb:amb_police `,`/#`,`#`,`^sfx:sfx_door_wood`,`/#`,`
`,`^One file lay on the desk. The cabinet had its key in the lock.`,`
`,`ev`,{"CNT?":`ch07.accuse_police`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The door opened again and Tae-o Kang came in. He leaned against the wall, arms folded.`,`
`,{"->":`.^.^.^.25`},null]}],`nop`,`
`,{"->":`ch07.police_hub`},{"#f":1}],police_hub:[[`ev`,{"f()":`ch07_warn_due`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch07.culprit_warn`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,`str`,`^Talk: where I was yesterday morning `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert-10 `,`/#`,`#`,`^risk:trust_dohyun+1`,`/#`,`/str`,{"CNT?":`ch07.notebook`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: file `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert+5`,`/#`,`/str`,{"CNT?":`ch07.notebook`},`!`,{"CNT?":`ch07.memo_self`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch07.notebook`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.memo_self`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.hub`},`
`,{"#f":5}]}],{"#f":1}],notebook:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^“Where I was yesterday. You wrote it down, didn’t you. This time I’d like to use it.”`,`
`,`^Dohyeon Lee turned back a few pages and read it out precisely, one line at a time.`,`
`,`ev`,{"VAR?":`park_visit_am`},{"CNT?":`ch06.park`},{"CNT?":`ch06.park_over`},`!`,`&&`,`||`,{"CNT?":`ch06.talk`},`||`,{"CNT?":`ch06.support`},`||`,{"CNT?":`ch06.evidence`},`||`,{"CNT?":`ch06.wardrobe`},`||`,`/ev`,{"temp=":`park_am`},[`ev`,{"VAR?":`park_am`},{"CNT?":`ch06.park_over`},`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“Morning and afternoon: Seojin Han visits Byeongchun Park’s residence. Byeongchun Park on porch at each departure.”`,`
`,`^“Thereafter: no visits by Seojin Han to Byeongchun Park’s residence.”`,`
`,{"->":`.^.^.^.31`},null]}],[`ev`,{"CNT?":`ch06.park_over`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“Afternoon: Seojin Han visits Byeongchun Park’s residence. Byeongchun Park on porch at departure. Nothing unusual.”`,`
`,`^“Thereafter: no visits by Seojin Han to Byeongchun Park’s residence.”`,`
`,{"->":`.^.^.^.31`},null]}],[`ev`,{"CNT?":`ch06.park`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“Morning: Seojin Han visits Byeongchun Park’s residence. Byeongchun Park on porch at departure. Nothing unusual.”`,`
`,`^“Thereafter: no visits by Seojin Han to Byeongchun Park’s residence.”`,`
`,{"->":`.^.^.^.31`},null]}],[{"->":`.^.b`},{b:[`
`,`^“All day: no visits by Seojin Han to Byeongchun Park’s residence.”`,`
`,{"->":`.^.^.^.31`},null]}],`nop`,`
`,`^“Fall reported at 16:20. Reported by the youth association.”`,`
`,`^“From the general store, word came in that it was the yard. No statement has been taken.”`,`
`,`^“This is the notebook I used for my reports to the village head. That is why no hour is missing.”`,`
`,`ev`,{"CNT?":`ch07.accuse_police`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Tae-o Kang pushed off the wall. “An officer writes that stuff down?”`,`
`,`^The door shut. Footsteps faded toward the lanes. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.44`},null]}],[{"->":`.^.b`},{b:[`
`,`^“If the village head asks, I will read it exactly like this.” He closed the notebook.`,`
`,{"->":`.^.^.^.44`},null]}],`nop`,`
`,`ev`,{"VAR?":`C07_007`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,-10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^Dohyeon Lee drew a yellowed sheet from the back of the file.`,`
`,`^“My father’s handwriting.” `,`#`,`^fx:pause(1)`,`/#`,`
`,`^‘11.15. Youth association head Tae-o Kang, laceration to the left hand. States it happened working on nets.’`,`
`,`^“…It says nets.”`,`
`,`^He left the paper where it lay on the desk.`,`
`,`ev`,{"VAR?":`C07_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_dohyun`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`ch07.police_hub`},{"#f":1}],memo_self:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^The telephone rang. Dohyeon Lee went into the back room.`,`
`,`^I opened the file. At the back was one yellowed sheet, not in his handwriting.`,`
`,`^‘11.15. Youth association head Tae-o Kang, laceration to the left hand. States it happened working on nets.’`,`
`,`^I read it twice to memorize it, then closed the file.`,`
`,`^When he came back, his eyes went to the file.`,`
`,`^“That page is in my father’s handwriting. To be exact, it is an initial-investigation memo.”`,`
`,`^“Firm hand. Good pen pressure.”`,`
`,`ev`,{"VAR?":`C07_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch07.police_hub`},{"#f":1}],office:[`^A telephone rang and cut off. The fan was still. `,`#`,`^loc:office `,`/#`,`#`,`^amb:amb_office -fan`,`/#`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^A youth association member sat in a chair by the window. Eyes followed me.`,`
`,{"->":`.^.^.^.15`},null]}],[{"->":`.^.b`},{b:[`
`,`^The office was empty. The rendering had been taken down.`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`^The frames lining the wall held youth association photos, year by year. The angle never changed. Maybe the same photographer, too.`,`
`,{"->":`ch07.office_hub`},{"#f":1}],office_hub:[[`ev`,`str`,`^Examine: photo`,`/str`,{"CNT?":`ch07.photo`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: take the photo `,`#`,`^risk:alert+10`,`/#`,`/str`,{"CNT?":`ch07.photo`},{"CNT?":`ch07.take_photo`},`!`,`&&`,{"f()":`alert_level`},2,`<`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch07.photo`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.take_photo`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.hub`},`
`,{"#f":5}]}],{"#f":1}],photo:[`^「Youth association, November 2003」. The youth leader stood front row, center.`,`
`,`^His left hand was bandaged thick, up to the wrist.`,`
`,`^The face was young. Even in the photo, the eyes were smiling.`,`
`,`ev`,{"VAR?":`C02_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The bandage was thickest over the palm.`,`
`,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`ev`,{"VAR?":`C07_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch07.office_hub`},{"#f":1}],take_photo:[`^I opened the back of the frame. The photo came off the glass with a soft tearing sound.`,`
`,`^Without folding it, I slid the photo inside my jacket and put the empty frame back on the wall.`,`
`,`ev`,{"VAR?":`I_PHOTO_YOUTHCLUB`},{"f()":`get_item`},`pop`,`/ev`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch07.office_hub`},{"#f":1}],mid_board:[[`ev`,{"CNT?":`.^.^`},1,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Tin on top of a wall rattled in the wind. I stood at its foot and opened the notebook.`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^I laid out the cards in order of date. Every paper corner had gone yellow. `,`#`,`^deduce:CH07_MID`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch07.mid_solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.mid_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.hub_choices`},`
`,{"#f":5}]}],{"#f":1}],mid_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Eraser crumbs piled up in the gutter of the notebook pressed to the wall.`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch07.mid_board`},{"#f":1}],mid_solved:[`^In the corner of the notebook, I penciled 「statement」. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`^11.15. Laceration, left hand. ‘States it happened working on nets.’ The one stating it was the injured man.`,`
`,`^I closed the notebook.`,`
`,{"->":`ch07.hub_choices`},{"#f":1}],tower:[`ev`,{"CNT?":`.^`},1,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Wind whined through the girders. The truck tracks in the yard hadn’t changed. `,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower`,`/#`,`
`,{"->":`ch07.tower_hub`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,`^Wind whined through the girders. The truck that hauled off the racks had left tracks in the yard. `,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower`,`/#`,`
`,`^Past the open transmitter room door, nothing. They’d ripped the racks out instead of undoing the bolts.`,`
`,{"->":`ch07.tower_hub`},{"#f":1}],tower_hub:[[`ev`,{"f()":`ch07_warn_due`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`ch07.culprit_warn`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,`ev`,`str`,`^Examine: stair railing `,`#`,`^risk:ap1 `,`/#`,`#`,`^risk:alert+5`,`/#`,`/str`,{"CNT?":`ch07.rail`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Listen: intercom`,`/str`,{"CNT?":`ch07.interphone`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch07.rail`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.interphone`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.hub`},`
`,{"#f":5}]}],{"#f":1}],rail:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I climbed the stairs. The steel plates rang underfoot.`,`
`,`^On the railing at the second landing, a weld seam had cracked and turned up a sharp edge.`,`
`,`^I touched it with a gloved hand. The fabric tore.`,`
`,`^The seam was on the left, where a left hand would grip on the way up. `,`#`,`^payoff:F08`,`/#`,`
`,`ev`,{"VAR?":`C02_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Measured against my glove, the edge was about the length of a palm.`,`
`,{"->":`.^.^.^.22`},null]}],`nop`,`
`,`ev`,{"VAR?":`C07_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,5,{"f()":`add_alert`},`pop`,`/ev`,`
`,{"->":`ch07.tower_hub`},{"#f":1}],interphone:[`^I pressed the button under the speaker of the intercom on the transmitter room wall.`,`
`,`^The stairs came through clearly, even the steel plates shuddering in the wind. `,`#`,`^fx:static(0.5)`,`/#`,`
`,`^When I let go of the button, the stairs went quiet. The intercom’s wire ran down the wall to the studio below. `,`#`,`^allow-amb`,`/#`,`
`,`ev`,{"VAR?":`C07_008`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch07.tower_hub`},{"#f":1}],seawall_blocked:[`^Trucks rumbled where the road met the seawall. The demolition crew. `,`#`,`^loc:seawall `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^Two trucks blocked the road, so there was no way through to the gates.`,`
`,{"->":`ch07.hub`},{"#f":1}],seawall:[`^The sound of draining water was different at each gate. Six dark gates in a row. `,`#`,`^loc:seawall `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^The water hadn’t gone out in front of Gates 5 and 6, so four were within reach.`,`
`,`ev`,{"VAR?":`C06_008`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Gate 3’s plate was the only new one.`,`
`,{"->":`.^.^.^.15`},null]}],`nop`,`
`,`ev`,{"VAR?":`C07_005`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The voice from the headphones was still in my ears. “Under the water.”`,`
`,{"->":`.^.^.^.22`},null]}],`nop`,`
`,`ev`,{"VAR?":`difficulty`},0,`!=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The tide was already turning.`,`
`,`ev`,{"CNT?":`ch07.gate3`},`!`,{"CNT?":`.^.^.^`},1,`>`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The fisherman was still hauling his net below the dike. `,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch07.gate3`},`!`,{"CNT?":`.^.^.^`},1,`==`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Below the dike, an old fisherman was hauling in a net. `,{"->":`.^.^.^.23`},null]}],`nop`,`
`,{"->":`.^.^.^.30`},null]}],`nop`,`
`,{"->":`ch07.seawall_hub`},{"#f":1}],seawall_hub:[[`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Water covered the foot of the gates again. High tide. I came down off the seawall.`,`
`,{"->":`ch07.hub`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch07.hairpin`},`!`,{"VAR?":`difficulty`},0,`!=`,`&&`,{"VAR?":`dig_tries`},2,`>=`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.dig_spent`},{"->":`.^.^.^.21`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch07.hairpin`},`!`,{"VAR?":`difficulty`},0,`!=`,`&&`,{"VAR?":`dig_tries`},1,`==`,`&&`,{"CNT?":`ch07.seawall_fisher`},`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.seawall_fisher`},{"->":`.^.^.^.39`},null]}],`nop`,`
`,`ev`,`str`,`^Examine: Gate 1`,`/str`,{"CNT?":`ch07.hairpin`},`!`,{"CNT?":`ch07.gate1`},`!`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: Gate 2`,`/str`,{"CNT?":`ch07.hairpin`},`!`,{"CNT?":`ch07.gate2`},`!`,`&&`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Examine: Gate 3`,`/str`,{"CNT?":`ch07.hairpin`},`!`,{"CNT?":`ch07.gate3`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Examine: Gate 4`,`/str`,{"CNT?":`ch07.hairpin`},`!`,{"CNT?":`ch07.gate4`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^Examine: rock crevice `,`#`,`^risk:ap1`,`/#`,`/str`,{"VAR?":`StoryTapes`},{"VAR?":`ST_yeonja`},`?`,`!`,{"CNT?":`ch07.rock_gap`},`!`,`&&`,`/ev`,{"*":`.^.c-4`,flg:5},`ev`,`str`,`^Go: village road`,`/str`,`/ev`,{"*":`.^.c-5`,flg:4},{"c-0":[`^ `,{"->":`ch07.gate1`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.gate2`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.gate3`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.gate4`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch07.rock_gap`},`
`,{"#f":5}],"c-5":[`^ `,{"->":`ch07.hub`},`
`,{"#f":5}]}],{"#f":1}],seawall_fisher:[`^The fisherman straightened up from his net and looked my way. “Tide’s quick. One more spot, then up on the dike.”`,`
`,{"->":`ch07.seawall_hub`},{"#f":1}],gate1:[`ev`,{"VAR?":`dig_tries`},1,`+`,`/ev`,{"VAR=":`dig_tries`,re:!0},`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^I climbed down under Gate 1 and dug. Wet sand, and then the water came in.`,`
`,{"->":`ch07.seawall_hub`},{"#f":1}],gate2:[`ev`,{"VAR?":`dig_tries`},1,`+`,`/ev`,{"VAR=":`dig_tries`,re:!0},`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^The dirt under Gate 2 was sticky and heavy. A hand’s depth, and nothing. The water came in.`,`
`,{"->":`ch07.seawall_hub`},{"#f":1}],gate4:[`ev`,{"VAR?":`dig_tries`},1,`+`,`/ev`,{"VAR=":`dig_tries`,re:!0},`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`^Gravel and shells under Gate 4. The water came in while I scraped.`,`
`,{"->":`ch07.seawall_hub`},{"#f":1}],gate3:[[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`dig_tries`},1,`+`,`/ev`,{"VAR=":`dig_tries`,re:!0},`^I climbed down under Gate 3’s new plate. The dirt was wet. `,`ev`,{"VAR?":`difficulty`},0,`!=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The fisherman below the dike had already gathered his net and gone.`,{"->":`.^.^.^.19`},null]}],`nop`,`
`,`^I dug with my hands. Dirt packed under my nails.`,`
`,`^Something white showed under the dirt. Beside it, a bit of metal glinted.`,`
`,`^The water reached my ankles. The rush through the gate quickened. `,`#`,`^tier:2 `,`/#`,`#`,`^sfx:sfx_water_rise`,`/#`,`
`,`ev`,`str`,`^Keep digging `,`#`,`^timed:12`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Take the hairpin, leave`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch07.dig_ok`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.dig_partial`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.dig_partial`},`
`,{"#f":5}]}],{"#f":1}],dig_ok:[`ev`,!0,`/ev`,{"VAR=":`ev_remains`,re:!0},`^I kept digging. The dirt turned to water.`,`
`,`^The white thing was bone. `,`#`,`^payoff:F11 `,`/#`,`#`,`^silence:1.5 `,`/#`,`#`,`^tier:2`,`/#`,`
`,`^My hands came out. The water rose over the backs of them and drew off again.`,`
`,`^I put my hands back in. I cleared the dirt away with my palms, one layer at a time. `,`#`,`^fx:slow`,`/#`,`
`,`^A long, thin bone. Dirt packed into the groove at its end.`,`
`,`^A waterproof pouch was buried beside the bone. Inside was a tape.`,`
`,`^I put the pouch inside my jacket. The water was at my knees.`,`
`,`^I laid my palm on the bone. It was cold. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^I picked up the bit of metal.`,`
`,`ev`,{"VAR?":`C07_006`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`I_POUCH`},{"f()":`get_item`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`ST_mikyung`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`ch07.hairpin`},{"#f":1}],dig_partial:[`ev`,!0,`/ev`,{"VAR=":`found_hairpin`,re:!0},`^The water rose to my knees. I grabbed only the bit of metal and backed away.`,`
`,`^Water closed over the white thing.`,`
`,{"->":`ch07.hairpin`},{"#f":1}],dig_spent:[`ev`,!0,`/ev`,{"VAR=":`found_hairpin`,re:!0},`^The water was over my ankles. It pushed in through every gate. `,`#`,`^sfx:sfx_water_rise`,`/#`,`
`,`^On the way up I passed Gate 3, where the dirt under the new plate had washed away.`,`
`,`^A small bit of metal lay bare in the washed-out dirt. I reached out and took it.`,`
`,`^The water covered the spot.`,`
`,{"->":`ch07.hairpin`},{"#f":1}],hairpin:[`^I climbed onto the seawall and rinsed the metal in my palm with seawater.`,`
`,`^A butterfly hairpin. `,`#`,`^fx:reveal(object) `,`/#`,`#`,`^payoff:F16`,`/#`,`
`,`ev`,{"VAR?":`C04_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^In the photo it had been the size of a rice grain. Now it lay in my palm, paint flaked, one wing worn down.`,{"->":`.^.^.^.16`},null]}],[{"->":`.^.b`},{b:[`^The paint had flaked off, and one wing was worn down.`,{"->":`.^.^.^.16`},null]}],`nop`,`
`,`ev`,{"VAR?":`C07_002`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`I_HAIRPIN`},{"f()":`get_item`},`pop`,`/ev`,`
`,`ev`,{"CNT?":`ch07.dig_ok`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The pouch inside my jacket weighed more than my wet clothes.`,`
`,{"->":`.^.^.^.35`},null]}],[{"->":`.^.b`},{b:[`
`,`^Water covered all of Gate 3.`,`
`,{"->":`.^.^.^.35`},null]}],`nop`,`
`,{"->":`ch07.seawall_hub`},{"#f":1}],rock_gap:[`ev`,1,{"f()":`spend_ap`},`pop`,`/ev`,`
`,`^I reached in and pulled out the plastic wedged in a crevice at the end of the seawall.`,`
`,`^The tape inside the plastic was labeled 「Yeonja Hong — what I saw underwater」.`,`
`,`ev`,{"VAR?":`ST_yeonja`},{"f()":`get_story_tape`},`pop`,`/ev`,`
`,{"->":`ch07.seawall_hub`},{"#f":1}],deduce:[[`^I opened the notebook and spread the cards I had across it. The rustle of pages. `,`#`,`^deduce:CH07`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Close notebook`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch07.solved`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.deduce_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.deduce_close`},`
`,{"#f":5}]}],{"#f":1}],deduce_hint:[`ev`,{"f()":`pay_hint`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`timeslot`},3,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I stacked the cards and spread them again. The light atop the tower blinked over and over.`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^I stacked the cards and spread them out again. The demolition trucks went up and down twice.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch07.deduce`},{"#f":1}],hint:[{"->":`ch07.deduce`},{"#f":1}],deduce_close:[`ev`,{"CNT?":`ch07.night`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ `,{"->":`ch07.night_hub`},{"->":`.^.^.^.4`},null]}],`nop`,`
`,{"->":`ch07.hub`},{"#f":1}],solved:[`ev`,!0,`/ev`,{"VAR=":`ded_culprit`,re:!0},`^In the space for the stairs that night, I wrote one name. Tae-o Kang. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`^I closed the notebook.`,`
`,`ev`,{"CNT?":`ch07.night`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ `,{"->":`ch07.night_hub`},{"->":`.^.^.^.15`},null]}],`nop`,`
`,{"->":`ch07.hub`},{"#f":1}],night:[`ev`,{"VAR?":`alert`},90,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->t->":`alert_arrest`},{"->":`endings`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"VAR?":`timeslot`},3,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"f()":`advance_timeslot`},`pop`,`/ev`,`
`,{"->":`.^.^.^.14`},null]}],`nop`,`
`,`ev`,{"f()":`end_day`},`pop`,`/ev`,`
`,`ev`,{"CNT?":`ch07.minbak_rest`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The wall clock ticking. In the dark kitchen, the bundle I’d set down earlier was still on the table. `,`#`,`^time:night `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`.^.^.^.26`},null]}],[{"->":`.^.b`},{b:[`
`,`^The wall clock ticking. In the dark kitchen, I set the bundle I’d been carrying down on the table. `,`#`,`^time:night `,`/#`,`#`,`^loc:minbak `,`/#`,`#`,`^amb:amb_minbak -dosa`,`/#`,`
`,{"->":`.^.^.^.26`},null]}],`nop`,`
`,`ev`,{"VAR?":`trust_sunrye`},1,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Grandma Sunrye sat by the door. “Don’t you go out tonight. There’s soup. Eat.”`,`
`,{"->":`.^.^.^.35`},null]}],[{"->":`.^.b`},{b:[`
`,`^Grandma Sunrye’s room was dark. Her boots weren’t by the door.`,`
`,{"->":`.^.^.^.35`},null]}],`nop`,`
`,`^I turned on her radio and tuned it to 88.3. It gave out an even hiss. `,`#`,`^sfx:sfx_radio_on `,`/#`,`#`,`^fx:static(0.3)`,`/#`,`
`,`^Outside the window. Sea fog. A light came on atop the transmitter tower. One long light. Two short. `,`#`,`^fx:beacon `,`/#`,`#`,`^signal:motif3`,`/#`,`
`,`^Off. Again. One long light, two short.`,`
`,`^I took the lantern from the entryway.`,`
`,{"->":`ch07.night_hub`},{"#f":1}],night_hub:[[`ev`,`str`,`^Listen: tape from the pouch`,`/str`,{"VAR?":`StoryTapes`},{"VAR?":`ST_mikyung`},`?`,{"CNT?":`ch07.listen_mikyung`},`!`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: notebook`,`/str`,{"CNT?":`ch07.solved`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Go: transmitter tower`,`/str`,{"CNT?":`ch07.solved`},{"CNT?":`.^.c-3`},`||`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Go: transmitter tower`,`/str`,{"CNT?":`ch07.solved`},`!`,{"CNT?":`.^.c-3`},`!`,`&&`,`/ev`,{"*":`.^.c-3`,flg:5},{"c-0":[`^ `,{"->":`ch07.listen_mikyung`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.deduce`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.tower_night`},`
`,{"#f":5}],"c-3":[`^ I shifted my grip on the lantern ring, then stopped and looked down at the notebook. `,`ev`,{"CNT?":`ch07.deduce`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The space for whoever pushed Mom on the stairs that night was still blank. `,{"->":`.^.^.^.6`},null]}],[{"->":`.^.b`},{b:[`^ I hadn’t yet opened the page for what happened on the stairs that night.`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,{"->":`.^.^.^`},{"#f":5}]}],{"#f":1}],listen_mikyung:[`^The label on the tape from the pouch read 「Tonight’s Story · Migyeong Han」.`,`
`,`^I loaded the tape into the portable deck and put on the headphones.`,`
`,`^Paper unfolding, and behind it, a generator in the distance.`,`
`,`^“This is Tonight’s Story. It was sent in by… me. Migyeong Han.”`,`
`,`^It was for Seojin Han, age nine. I pressed the headphones to my ears with both hands.`,`
`,`^“Seojin. Tonight Mom has to tell a longer story.” `,`#`,`^fx:slow`,`/#`,`
`,`^The voice moved on to the names of seven people. A page turned.`,`
`,`^“And Seojin. There’s one thing Mom can’t say,”`,`
`,`^“and that’s because I’ve never seen you cry. Even as a baby, you—” `,`#`,`^tape:ST_mikyung`,`/#`,`
`,`^The recording ended there.`,`
`,`^I kept the headphones on until the blank tape ran out.`,`
`,{"->":`ch07.night_hub`},{"#f":1}],tower_night:[`^Wind slipped low through the steelwork. Halfway up, the stairs vanished into sea fog. `,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower `,`/#`,`#`,`^fx:fog`,`/#`,`
`,`^The light at the top was out. I lit the lantern. Its glow stopped in a round blur against the fog.`,`
`,`^I set foot on the stairs. The steel plate rang.`,`
`,`ev`,{"VAR?":`M11`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^A locked room. Iron stairs sound from a little box on the wall. Two sets of footsteps. Mom’s voice. Something falling. Then it’s quiet. `,`#`,`^memory:M11 `,`/#`,`#`,`^sfx:sfx_memory`,`/#`,`
`,`^Footsteps from below. Boots. Coming up. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,`^“Seojin. Stop right there.”`,`
`,{"->":`ch07.chase1`},{"#f":1}],chase1:[`^Thick fog. `,`#`,`^t3:chase `,`/#`,`#`,`^pace:chase`,`/#`,`
`,`^Lantern in hand.`,`
`,`^Stairs only going up.`,`
`,`^Footsteps below.`,`
`,`ev`,{"VAR?":`difficulty`},0,`==`,{"VAR?":`difficulty`},1,`==`,{"VAR?":`C05_011`},{"f()":`has_clue`},`&&`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The light atop the lighthouse. Visible from the village too.`,`
`,{"->":`.^.^.^.27`},null]}],`nop`,`
`,`ev`,0,2,`rnd`,`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`ch07.chase1_b`},{"->":`.^.^.^.37`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`ch07.chase1_c`},{"->":`.^.^.^.37`},null]}],`pop`,`nop`,`
`,{"->":`ch07.chase1_a`},{"#f":1}],chase1_a:[[`ev`,`str`,`^Run with the lantern `,`#`,`^timed:6`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Kill the lantern`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Shout for help`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.c1_run`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.c1_ok`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.c1_shout`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.c1_run`},`
`,{"#f":5}]}],{"#f":1}],chase1_b:[[`ev`,`str`,`^Kill the lantern `,`#`,`^timed:6`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Shout for help`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Run with the lantern`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.c1_ok`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.c1_shout`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.c1_run`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.c1_run`},`
`,{"#f":5}]}],{"#f":1}],chase1_c:[[`ev`,`str`,`^Shout for help `,`#`,`^timed:6`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Run with the lantern`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Kill the lantern`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.c1_shout`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.c1_run`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.c1_ok`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.c1_run`},`
`,{"#f":5}]}],{"#f":1}],c1_ok:[`^Light off.`,`
`,`^Black.`,`
`,`^The steps stopped.`,`
`,`^Up.`,`
`,{"->":`ch07.chase2`},{"#f":1}],c1_run:[`^I ran.`,`
`,`^Light bled into fog.`,`
`,`^The steps sped up.`,`
`,{"->":`ch07.c1_bad`},{"#f":1}],c1_shout:[`ev`,5,{"f()":`late_alert`},`pop`,`/ev`,`
`,`^I shouted.`,`
`,`^Village windows lit.`,`
`,`^No one came out.`,`
`,`^The steps sped up.`,`
`,{"->":`ch07.c1_bad`},{"#f":1}],c1_bad:[`ev`,{"VAR?":`chase_mistakes`},1,`+`,`/ev`,{"VAR=":`chase_mistakes`,re:!0},`ev`,10,{"f()":`late_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`chase_mistakes`},2,`>=`,{"VAR?":`alert`},90,`>=`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.caught`},{"->":`.^.^.^.22`},null]}],`nop`,`
`,`^Lantern off.`,`
`,`^Too late.`,`
`,{"->":`ch07.chase2`},{"#f":1}],chase2:[`^Stairs.`,`
`,`^Steel rang underfoot.`,`
`,`^The steps closed in.`,`
`,`ev`,{"VAR?":`chase_mistakes`},1,`>=`,{"VAR?":`difficulty`},2,`<`,`&&`,{"VAR?":`difficulty`},0,`==`,`||`,{"VAR?":`difficulty`},1,`==`,{"VAR?":`C07_001`},{"f()":`has_clue`},{"CNT?":`ch03.stairs`},`||`,`&&`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`C07_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The seam, seen by day. `,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`^ The railing shook, cold. `,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`.^.^.^.29`},null]}],`nop`,`
`,`ev`,0,2,`rnd`,`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`ch07.chase2_b`},{"->":`.^.^.^.39`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`ch07.chase2_c`},{"->":`.^.^.^.39`},null]}],`pop`,`nop`,`
`,{"->":`ch07.chase2_a`},{"#f":1}],chase2_a:[[`ev`,`str`,`^Freeze in place `,`#`,`^timed:6`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Climb by the railing`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Climb along the wall`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.c2_stop`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.c2_bad`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.c2_ok`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.c2_bad`},`
`,{"#f":5}]}],{"#f":1}],chase2_b:[[`ev`,`str`,`^Climb by the railing `,`#`,`^timed:6`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Climb along the wall`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Freeze in place`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.c2_bad`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.c2_ok`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.c2_stop`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.c2_bad`},`
`,{"#f":5}]}],{"#f":1}],chase2_c:[[`ev`,`str`,`^Climb along the wall `,`#`,`^timed:6`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Freeze in place`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Climb by the railing`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.c2_ok`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.c2_stop`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.c2_bad`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.c2_bad`},`
`,{"#f":5}]}],{"#f":1}],c2_ok:[`^Back to the wall.`,`
`,`^Steel cold on my back.`,`
`,`ev`,{"VAR?":`C07_001`},{"f()":`has_clue`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^A flashlight swept the railing.`,`
`,`^The seam’s edge flashed.`,`
`,`ev`,{"VAR?":`C07_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`.^.^.^.10`},null]}],`nop`,`
`,`^Two flights up.`,`
`,{"->":`ch07.chase3`},{"#f":1}],c2_stop:[`ev`,{"VAR?":`chase_mistakes`},1,`+`,`/ev`,{"VAR=":`chase_mistakes`,re:!0},`ev`,5,{"f()":`late_alert`},`pop`,`/ev`,`
`,`^I froze.`,`
`,`^Held my breath.`,`
`,`^A flashlight beam climbed.`,`
`,`^Our eyes met.`,`
`,`ev`,{"VAR?":`chase_mistakes`},2,`>=`,{"VAR?":`alert`},90,`>=`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.caught`},{"->":`.^.^.^.30`},null]}],`nop`,`
`,`^I ran.`,`
`,`^Two flights up.`,`
`,`^Throat burning.`,`
`,{"->":`ch07.chase3`},{"#f":1}],c2_bad:[`ev`,{"VAR?":`chase_mistakes`},1,`+`,`/ev`,{"VAR=":`chase_mistakes`,re:!0},`ev`,10,{"f()":`late_alert`},`pop`,`/ev`,`
`,`^My palm tore open.`,`
`,`^The seam.`,`
`,`ev`,{"VAR?":`C07_001`},{"f()":`has_clue`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"VAR?":`C07_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`.^.^.^.22`},null]}],`nop`,`
`,`ev`,{"VAR?":`chase_mistakes`},2,`>=`,{"VAR?":`alert`},90,`>=`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.caught`},{"->":`.^.^.^.34`},null]}],`nop`,`
`,`^Blood, slippery.`,`
`,`^Climbed.`,`
`,{"->":`ch07.chase3`},{"#f":1}],chase3:[`^The transmitter room door.`,`
`,`^Above, the roof ladder.`,`
`,`^Steps one flight below.`,`
`,`ev`,{"VAR?":`chase_mistakes`},1,`>=`,{"VAR?":`difficulty`},2,`<`,`&&`,{"VAR?":`difficulty`},0,`==`,`||`,{"VAR?":`difficulty`},1,`==`,{"CNT?":`ch03.door_key`},{"CNT?":`ch03.door_force`},`||`,{"VAR?":`C07_008`},{"f()":`has_clue`},`||`,`&&`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,{"CNT?":`ch03.door_key`},{"CNT?":`ch03.door_force`},`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Concrete room, iron door. `,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`^ The iron door stood open inward. `,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`.^.^.^.31`},null]}],`nop`,`
`,`ev`,0,2,`rnd`,`/ev`,[`du`,`ev`,1,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`ch07.chase3_b`},{"->":`.^.^.^.41`},null]}],[`du`,`ev`,2,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`ch07.chase3_c`},{"->":`.^.^.^.41`},null]}],`pop`,`nop`,`
`,{"->":`ch07.chase3_a`},{"#f":1}],chase3_a:[[`ev`,`str`,`^Climb to the roof `,`#`,`^timed:6`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Get inside, bolt it`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Turn and shove`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.c3_roof`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.c3_ok`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.c3_push`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.c3_roof`},`
`,{"#f":5}]}],{"#f":1}],chase3_b:[[`ev`,`str`,`^Get inside, bolt it `,`#`,`^timed:6`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Turn and shove`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Climb to the roof`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.c3_ok`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.c3_push`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.c3_roof`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.c3_roof`},`
`,{"#f":5}]}],{"#f":1}],chase3_c:[[`ev`,`str`,`^Turn and shove `,`#`,`^timed:6`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Climb to the roof`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Get inside, bolt it`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch07.c3_push`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch07.c3_roof`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch07.c3_ok`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch07.c3_roof`},`
`,{"#f":5}]}],{"#f":1}],c3_ok:[`^I pulled the door.`,`
`,`^In.`,`
`,`^Bolt across. `,`#`,`^sfx:sfx_breaker`,`/#`,`
`,`^Clunk.`,`
`,`^A bang on the door. `,`#`,`^sfx:sfx_door_bang`,`/#`,`
`,`^The door shook. `,`#`,`^fx:shake`,`/#`,`
`,`^Then it stopped.`,`
`,{"->":`ch07.cliff_room`},{"#f":1}],c3_roof:[`ev`,{"VAR?":`chase_mistakes`},1,`+`,`/ev`,{"VAR=":`chase_mistakes`,re:!0},`ev`,10,{"f()":`late_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`chase_mistakes`},2,`>=`,{"VAR?":`alert`},90,`>=`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.caught`},{"->":`.^.^.^.22`},null]}],`nop`,`
`,`^Up the ladder.`,`
`,`^The roof.`,`
`,`^Nowhere to go.`,`
`,{"->":`ch07.cliff_roof`},{"#f":1}],c3_push:[`ev`,{"VAR?":`chase_mistakes`},1,`+`,`/ev`,{"VAR=":`chase_mistakes`,re:!0},`ev`,10,{"f()":`late_alert`},`pop`,`/ev`,`
`,`ev`,{"^var":`trust_taeo`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`chase_mistakes`},2,`>=`,{"VAR?":`alert`},90,`>=`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch07.caught`},{"->":`.^.^.^.29`},null]}],`nop`,`
`,`^I turned.`,`
`,`^Shoved.`,`
`,`^My arm, caught.`,`
`,`^Tore free.`,`
`,`^Up the ladder.`,`
`,`^The roof.`,`
`,{"->":`ch07.cliff_roof`},{"#f":1}],caught:[`^The footsteps were right behind me. `,`#`,`^pace:normal`,`/#`,`
`,{"->":`endings`},{"#f":1}],cliff_room:[`^Beyond the bolt, the breathing stopped. `,`#`,`^pace:normal `,`/#`,`#`,`^fx:pause(2)`,`/#`,`
`,{"->":`ch07.cliff`},{"#f":1}],cliff_roof:[`^In the fog, Tae-o Kang drew his left hand out of his pocket. Two steps away. `,`#`,`^pace:normal `,`/#`,`#`,`^fx:pause(2)`,`/#`,`
`,{"->":`ch07.cliff`},{"#f":1}],cliff:[`#`,`^cliff:unbroken`,`/#`,`ev`,{"CNT?":`ch07.cliff_roof`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Seojin. Stand there and you’ll fall.”`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`^“Seojin. Open the door. Family doesn’t do this to family.”`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,{"->":`ch08`},{"#f":1}],"#f":1}],ch07_culprit_cards:[`ev`,{"VAR?":`C07_004`},{"f()":`has_clue`},{"VAR?":`C03_007`},{"f()":`has_clue`},{"VAR?":`C02_001`},{"f()":`has_clue`},{"VAR?":`C07_003`},{"f()":`has_clue`},`||`,`&&`,`||`,{"VAR?":`C02_001`},{"f()":`has_clue`},{"VAR?":`C07_001`},{"f()":`has_clue`},`&&`,`||`,`/ev`,`~ret`,`
`,{"#f":1}],ch07_warn_due:[`ev`,{"VAR?":`timeslot`},1,`==`,{"CNT?":`ch07.solved`},`!`,`&&`,{"CNT?":`ch07.culprit_warn`},`!`,`&&`,{"f()":`ch07_culprit_cards`},`!`,`&&`,`/ev`,`~ret`,`
`,{"#f":1}],ch08:[`#`,`^chapter:8`,`/#`,`#`,`^label:TAPE 08 · The Unfinished Broadcast`,`/#`,`ev`,3,`/ev`,{"VAR=":`timeslot`,re:!0},`ev`,{"VAR?":`Inferences`},{"VAR?":`INF_CULPRIT`},`?`,{"VAR?":`Inferences`},{"VAR?":`INF_CH07_RAIL`},`?`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,!0,`/ev`,{"VAR=":`ded_culprit`,re:!0},{"->":`ch08.20`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch07.cliff_roof`},{"CNT?":`ch07.cliff_room`},`!`,{"VAR?":`chase_mistakes`},0,`>`,`&&`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch08.opening_roof`},{"->":`ch08.34`},null]}],[{"->":`.^.b`},{b:[`
`,{"->":`ch08.opening_room`},{"->":`ch08.34`},null]}],`nop`,`
`,{opening_room:[[`^A thud came through the barred door. Three slaps of a palm, spaced apart. `,`#`,`^time:night `,`/#`,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower`,`/#`,`
`,`^“I told you. Family doesn’t do this to family. Open the door, Seojin.”`,`
`,`^The transmitter room was dark. Bolt holes marked the wall where the racks had been.`,`
`,`^The slapping stopped.`,`
`,`^Down in the yard, the generator idled low.`,`
`,`ev`,{"VAR?":`alert`},10,{"f()":`alert_gain`},`+`,90,`>=`,{"VAR?":`trust_taeo`},3,`<`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Beyond the door, boots gathered at the foot of the stairs. The bottom step creaked. `,`#`,`^sfx:sfx_footsteps_boots`,`/#`,`
`,{"->":`.^.^.^.32`},null]}],`nop`,`
`,`^The intercom speaker on the wall crackled. `,`#`,`^sfx:sfx_static_burst `,`/#`,`#`,`^fx:static(0.7)`,`/#`,`
`,`^“Seojin. Raise the breaker.”`,`
`,`^Through the static came the sound of a breath being drawn. Not a recording.`,`
`,`^On the bare wall, the breaker box’s small standby light glowed red. The lever’s metal was cold under my hand.`,`
`,`ev`,`str`,`^Use: breaker`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},{"c-0":[`^ `,{"->":`ch08.breaker_up`},`
`,{"#f":5}]}],{"#f":1}],breaker_up:[`^I pushed the lever up. Clunk. `,`#`,`^sfx:sfx_breaker`,`/#`,`
`,`ev`,{"CNT?":`ch03.breaker_up`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^It went up easier than four days before. The missing racks, probably.`,{"->":`.^.^.^.10`},null]}],[{"->":`.^.b`},{b:[`^The clank of metal meeting metal spread through the empty rack space.`,{"->":`.^.^.^.10`},null]}],`nop`,`
`,`^Below, the generator coughed a few times, then settled into a steady run. `,`#`,`^sfx:sfx_generator_on`,`/#`,`
`,{"->":`ch08.onair`},{"#f":1}],opening_roof:[`^Wind set the railing ringing. Fog drifted between the girders. `,`#`,`^time:night `,`/#`,`#`,`^loc:tower `,`/#`,`#`,`^amb:amb_tower`,`/#`,`
`,`^Two steps away, Tae-o Kang watched me with one hand on the railing.`,`
`,`^“One more step and you fall, Seojin.”`,`
`,`^The steel plate under my feet shook. Nowhere left to back away.`,`
`,`^Down in the yard, the generator idled low.`,`
`,`ev`,{"VAR?":`alert`},10,{"f()":`alert_gain`},`+`,90,`>=`,{"VAR?":`trust_taeo`},3,`<`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Flashlights had gathered in the yard below. One beam rested on the bottom step. `,{"->":`.^.^.^.32`},null]}],`nop`,`
`,`^In the transmitter room below, the intercom crackled. The static thickened with each gust. `,`#`,`^sfx:sfx_static_burst `,`/#`,`#`,`^fx:static(0.4)`,`/#`,`
`,`^“Seojin. Raise the breaker.”`,`
`,`^In a lull in the wind, a breath came through. Not a recording.`,`
`,`^The breaker was inside the transmitter room. Out of reach.`,`
`,`^Tae-o Kang turned his head. While he looked away, a lever clunked in the transmitter room below.`,`
`,`^Below, the generator coughed, then ran steady. `,`#`,`^sfx:sfx_generator_on`,`/#`,`
`,{"->":`ch08.onair`},{"#f":1}],onair:[`^The drone of the generator climbed the steel frame. `,`#`,`^t3:island_883`,`/#`,`
`,`ev`,{"CNT?":`ch08.opening_roof`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The tower’s red lights came on one by one, from the bottom up.`,`
`,{"->":`.^.^.^.10`},null]}],[{"->":`.^.b`},{b:[`
`,`^Rust flakes dropped from the bolt holes where the racks had been.`,`
`,{"->":`.^.^.^.10`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch08.opening_roof`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Tae-o Kang stopped where he stood. `,`#`,`^hush`,`/#`,`
`,`^Below the fog, a window lit up in the village. `,`#`,`^lights:1`,`/#`,`
`,`^Two. `,`#`,`^lights:2`,`/#`,`
`,`^Five. `,`#`,`^lights:5`,`/#`,`
`,`^Radio sound leaked from every lane. Whichever house it came from, it was the same static on 88.3.`,`
`,`^“…Father,” he said. He wasn’t looking at anyone.`,`
`,`^He let go of the railing. Two steps became three.`,`
`,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`
`,`^Beyond the door, it went quiet. `,`#`,`^hush`,`/#`,`
`,`^Distant static rose through the gap at the door. One. `,`#`,`^fx:static(0.2)`,`/#`,`
`,`^Two.`,`
`,`^Five.`,`
`,`^Below the fog, every radio in the lanes was on 88.3 at once.`,`
`,`^A low voice came from beyond the door. “…Father.”`,`
`,`^I slid back the bolt and opened the door. Tae-o Kang stood alone on the landing.`,`
`,{"->":`.^.^.^.17`},null]}],`nop`,`
`,{"->":`ch08.alone`},{"#f":1}],alone:[`ev`,{"VAR?":`Inferences`},{"VAR?":`INF_CULPRIT`},`?`,{"VAR?":`Inferences`},{"VAR?":`INF_CH07_RAIL`},`?`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,!0,`/ev`,{"VAR=":`ded_culprit`,re:!0},{"->":`.^.^.^.10`},null]}],`nop`,`
`,`^Fog had climbed as far as the `,`ev`,{"CNT?":`ch08.opening_roof`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^roof`,{"->":`.^.^.^.18`},null]}],[{"->":`.^.b`},{b:[`^landing`,{"->":`.^.^.^.18`},null]}],`nop`,`^. Just Tae-o Kang and me.`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Two sets of footsteps on the stairs below. They didn’t come up. `,{"->":`.^.^.^.27`},null]}],`nop`,`
`,`^His left hand went into his pocket.`,`
`,{"->":`ch08.alone_choice`},{"#f":1}],alone_choice:[[`^“That’s all in the past, Seojin. Nobody knows that night better than me, yeah?” `,`#`,`^confront:C8_TAEO`,`/#`,`
`,`ev`,`str`,`^Present the deduction `,`#`,`^confront_done`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},{"c-0":[`^ `,{"->":`ch08.alone_done`},`
`,{"#f":5}]}],{"#f":1}],alone_done:[`ev`,{"VAR?":`Proofs`},{"VAR?":`P5`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,!0,`/ev`,{"VAR=":`ded_culprit`,re:!0},{"->":`ch08.present`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"VAR?":`ded_culprit`},{"VAR?":`Confronts`},{"VAR?":`C8_TAEO`},`?`,`!`,`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch08.present`},{"->":`.^.^.^.17`},null]}],`nop`,`
`,{"->":`ch08.taeo_holds`},{"#f":1}],taeo_holds:[`ev`,{"VAR?":`Proofs`},`LIST_COUNT`,0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Tae-o Kang laughed out loud, stepped in, and clapped my shoulder.`,`
`,`^“So, that’s it, Seojin? Where’s the hand, then?”`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^Tae-o Kang smiled.`,`
`,`^“See? There’s nothing, right?”`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`alert`},90,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Footsteps came up the stairs below. Two. Three.`,`
`,`^He didn’t step aside.`,`
`,{"->":`endings`},{"->":`.^.^.^.22`},null]}],`nop`,`
`,`^He turned away first. “Let’s go down. The broadcast’s over.”`,`
`,`^I went down the stairs. The radios in the lanes didn’t stop.`,`
`,{"->":`ch08.to_studio`},{"#f":1}],present:[`ev`,{"VAR?":`C02_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“The scar on your palm. You cut it on a seam in the tower railing. That night.”`,`
`,{"->":`.^.^.^.6`},null]}],[{"->":`.^.b`},{b:[`
`,`^“Your left hand. The one you always keep in your pocket. You cut it on a seam in the railing. That night.”`,`
`,{"->":`.^.^.^.6`},null]}],`nop`,`
`,`ev`,{"VAR?":`C07_003`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “In the youth association photo, your hand was bandaged.” `,{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,{"VAR?":`C07_004`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “And the initial-investigation memo says it happened working on nets.” `,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`^“You were on the tower stairs that night. With that hand.”`,`
`,`^He started to step closer, then stopped.`,`
`,`ev`,{"VAR?":`trust_taeo`},3,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch08.confess`},{"->":`.^.^.^.33`},null]}],[{"->":`.^.b`},{b:[`
`,{"->":`ch08.deny`},{"->":`.^.^.^.33`},null]}],`nop`,`
`,{"#f":1}],confess:[`^He sank down onto the `,`ev`,{"CNT?":`ch08.opening_roof`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^steel plate`,{"->":`.^.^.^.6`},null]}],[{"->":`.^.b`},{b:[`^landing floor`,{"->":`.^.^.^.6`},null]}],`nop`,`^. His left hand came out of his pocket. There was a scar on the palm.`,`
`,`^“Tried to grab hold.” `,`#`,`^fx:slow`,`/#`,`
`,`^“The railing… my hand slipped. Going for the tape.”`,`
`,`^“Father said go down. So I went down. She never came down.”`,`
`,`^“…I pushed. Was trying to grab hold.”`,`
`,`^He didn’t put the hand back. “I’ll go down and tell it. To Dohyeon. All of it.”`,`
`,{"->":`ch08.confess_choice`},{"#f":1}],confess_choice:[[`ev`,`str`,`^Accept the surrender`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Broadcast to the end`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch08.confess_accept`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.confess_declined`},`
`,{"#f":5}]}],{"#f":1}],confess_accept:[`^“Go down. To Dohyeon.”`,`
`,`ev`,`str`,`^confess`,`/str`,`/ev`,{"VAR=":`final_choice`,re:!0},`^He nodded, put a hand on his knee, and stood.`,`
`,`^He went down the stairs ahead of me.`,`
`,{"->":`ch08.to_studio`},{"#f":1}],confess_declined:[`^“The island has to hear it first. The statement comes after.”`,`
`,`ev`,!0,`/ev`,{"VAR=":`taeo_surrender_declined`,re:!0},`^He looked down at the scar.`,`
`,`^“…Right. It’s your mom’s broadcast, yeah?” He rested the scarred hand on his knee.`,`
`,`^“You go down first. I’ll sit here and listen.”`,`
`,`^He turned his head toward the radio static from the village.`,`
`,`^I went down the stairs.`,`
`,{"->":`ch08.to_studio`},{"#f":1}],deny:[`^“It was for the island.” His voice dropped. “We’re all family.”`,`
`,`^“I cut it on a net. That’s what the report says.”`,`
`,`ev`,{"VAR?":`C07_004`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “What’s in the report is what you told them.” `,{"->":`.^.^.^.9`},null]}],`nop`,`
`,`^“That night’s tape. A door opens, ‘It’s time,’ then nineteen seconds. I counted them myself.”`,`
`,`ev`,10,{"f()":`add_alert`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`alert`},90,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Footsteps came up the stairs below. Two. Three.`,`
`,`^He didn’t step aside.`,`
`,{"->":`endings`},{"->":`.^.^.^.25`},null]}],`nop`,`
`,`^He turned and went down the stairs into the fog.`,`
`,{"->":`ch08.to_studio`},{"#f":1}],silent:[`^I said nothing. Fog swept across the landing.`,`
`,`^He turned away first. “Let’s go down. The broadcast’s over.”`,`
`,`^I went down the stairs. The radios in the lanes still gave out the same static.`,`
`,{"->":`ch08.to_studio`},{"#f":1}],to_studio:[`ev`,{"CNT?":`ch08.opening_roof`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Grandma Sunrye stood on the transmitter-room landing in wet boots.`,`
`,`^“Jaehui said put it up. The lever.” The old woman’s boots went down the steps ahead of me.`,`
`,{"->":`.^.^.^.4`},null]}],`nop`,`
`,`^I came down from the tower to a road buried in fog. I walked toward wherever the static grew thicker.`,`
`,{"->":`ch08.road_shop`},{"#f":1}],road_shop:[`ev`,{"VAR?":`C06_022`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The base of the tower was bare. Broom marks showed where the paper cups had stood. `,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^Static, layer on layer, met me at the mouth of the lane. Until yesterday, these houses had been playing TV. `,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The store’s sliding door stood open two finger-widths. A radio was going in the dark inside.`,`
`,{"->":`.^.^.^.22`},null]}],[{"->":`.^.b`},{b:[`
`,`^The storekeeper sat on the bench outside. A radio lay across both knees. The store lights were off.`,`
`,`^His hand fan lay folded beside one knee, pushed out of the way.`,`
`,{"->":`.^.^.^.22`},null]}],`nop`,`
`,`^“Tonight… to the end, is it? You got batteries for that flashlight? They go fast on a night like this.”`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ A paper bag slid out through the gap in the door. `,{"->":`.^.^.^.33`},null]}],[{"->":`.^.b`},{b:[`^ The storekeeper pushed a paper bag my way. `,{"->":`.^.^.^.33`},null]}],`nop`,`^ A bundle of batteries rattled inside.`,`
`,`ev`,{"CNT?":`ch01.fuel_win`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Same kind Yoon from the station used to buy.” `,{"->":`.^.^.^.40`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch01.carry`},{"CNT?":`ch02.carry`},`&&`,{"CNT?":`ch01.carry`},{"CNT?":`ch03.carry`},`&&`,`||`,{"CNT?":`ch02.carry`},{"CNT?":`ch03.carry`},`&&`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ A yogurt drink sat on top of the bag. `,{"->":`.^.^.^.56`},null]}],`nop`,`
`,`^The storekeeper didn’t take out the ledger or name a price.`,`
`,`ev`,{"VAR?":`C05_014`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Gisu Moon’s row in the credit ledger hadn’t named who paid either. `,{"->":`.^.^.^.65`},null]}],`nop`,`
`,`^The pocket with the batteries in it dragged my jacket down on one side.`,`
`,{"->":`ch08.road_youth`},{"#f":1}],road_youth:[`^A two-way radio hissed at the foot of a utility pole. The man standing there was about Tae-o Kang’s age. `,`#`,`^sfx:sfx_static_burst`,`/#`,`
`,`ev`,{"f()":`alert_level`},2,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ In the shade of the wall behind him, two more pairs of boot toes showed. `,{"->":`.^.^.^.11`},null]}],`nop`,`
`,`^A voice came over the radio in broken pieces. “Do we stop her? Awaiting orders.”`,`
`,`^He looked my way through the fog for a long time.`,`
`,`^“…Leave her be. Over.”`,`
`,`^He switched off the radio and didn’t turn it back on. `,`#`,`^allow-amb`,`/#`,`
`,{"->":`ch08.road_minbak`},{"#f":1}],road_minbak:[`^The Sea House’s porch radio carried static out past the gate. The kitchen window was half open. The light was off, and sea air came and went through it.`,`
`,`ev`,{"CNT?":`ch01.first_air`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ And it wasn’t March. `,{"->":`.^.^.^.6`},null]}],`nop`,`
`,{"->":`ch08.road_police`},{"#f":1}],road_police:[`^The police box window was lit. Radio static leaked through the crack of the door.`,`
`,[`ev`,{"VAR?":`final_choice`},`str`,`^confess`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Two shadows in the window. One sat with head bowed.`,`
`,{"->":`.^.^.^.5`},null]}],[`ev`,{"VAR?":`trust_dohyun`},1,`>=`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Dohyeon Lee stood at the door. His notebook was already open.`,`
`,`^“I will write it down from the moment it goes out. To be exact, as it is received.”`,`
`,{"->":`.^.^.^.5`},null]}],[{"->":`.^.b`},{b:[`
`,`^The scratch of a pen came out with the static. The police box door stayed shut.`,`
`,{"->":`.^.^.^.5`},null]}],`nop`,`
`,`^Where the lane ended, the light in the studio window came closer through the fog.`,`
`,{"->":`ch08.studio_arrive`},{"#f":1}],studio_arrive:[`^Radio static ran from the small speaker on the console. `,`#`,`^loc:studio `,`/#`,`#`,`^amb:amb_studio +hum -reel`,`/#`,`
`,`^Someone sat at the console. White hair, tied back. A fisherman’s jacket, patched at the elbows.`,`
`,`^“Welcome.” Low and clear. The voice I had been hearing on tape for days. But the highs had gone out of it.`,`
`,`^Jaehui Yoon turned the chair around. The face was older than the voice. Tendons stood out on the backs of the hands on her knees.`,`
`,`^“This is Haemu FM. It is ten forty p.m.”`,`
`,`^“The light on the tower was my lantern. I meant to have you alone at that lever.”`,`
`,`^“Tae-o was one guest I never had on my run sheet.”`,`
`,`^“That guest has come all the way `,`ev`,{"CNT?":`ch08.opening_roof`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^to the roof`,{"->":`.^.^.^.26`},null]}],[{"->":`.^.b`},{b:[`^to the door`,{"->":`.^.^.^.26`},null]}],`nop`,`^.”`,`
`,`^“I will move the apology further down the sheet. It is nineteen minutes to eleven.”`,`
`,`ev`,{"VAR?":`ev_master_tape`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch08.last_reel`},{"->":`.^.^.^.37`},null]}],[{"->":`.^.b`},{b:[`
`,`^“You have heard the whole master. Forty minutes, seven names.” She picked up a tape from the console.`,`
`,`ev`,{"VAR?":`master_self`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“You joined the last reel with your own hands, too.” She ran a thumbnail along the splice.`,`
`,`^“I spliced that piece in backward. Twenty-three years were not enough to set it right.”`,`
`,`ev`,{"^var":`trust_jaehee`,ci:-1},1,{"f()":`add_trust`},`pop`,`/ev`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,{"->":`ch08.studio_hub`},{"->":`.^.^.^.37`},null]}],`nop`,`
`,{"#f":1}],last_reel:[`^She held out a hand. “Give me the master. The tape left in the lighthouse box.”`,`
`,`^“It is the last reel. The end of this tape. Migyeong’s story is there.”`,`
`,`^“The end got wet and broke, and I joined it back on. I was in a hurry. I spliced it in backward.”`,`
`,`^“Your hands will do.”`,`
`,`^I took the master tape from my jacket’s inside pocket. A restoration kit was already laid out on the console. It smelled of alcohol.`,`
`,`^I wiped off the salt and smoothed the stretched spot with a fingertip, then threaded it past the heads.`,`
`,`^“This splice is a mess. And it held for twenty-three years.”`,`
`,`ev`,{"VAR?":`tool_reverse`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“The end runs backward.” She changed the head alignment. The deck locked into reverse play.`,`
`,`ev`,!0,`/ev`,{"VAR=":`tool_reverse`,re:!0},{"->":`.^.^.^.19`},null]}],`nop`,`
`,`^The deck turned. After the static came Old Park’s voice. Migyeong had copied it into a script, he said. `,`#`,`^sfx:sfx_tape_in`,`/#`,`
`,`^“Someone has to call their names.” It was the old man on the tape.`,`
`,`ev`,!0,`/ev`,{"VAR=":`ev_master_tape`,re:!0},`^“…I can hear it.” She closed her eyes. “That sound was stuck on backward for twenty-three years.”`,`
`,{"->":`ch08.studio_hub`},{"#f":1}],studio_hub:[[`ev`,`str`,`^Examine: transmitter`,`/str`,{"CNT?":`ch08.transmitter`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Examine: window`,`/str`,{"CNT?":`ch08.window`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Listen: master tape`,`/str`,{"CNT?":`ch08.master_listen`},`!`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Talk: Jaehui Yoon`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch08.transmitter`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.window`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch08.master_listen`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch08.signal`},`
`,{"#f":5}]}],{"#f":1}],transmitter:[`^On the console sat a box the size of two palms. One antenna, one dial. A portable low-power transmitter.`,`
`,`^The lantern beside it had a handle worn glossy by hands.`,`
`,`^“You went on air with this every night? It can’t put out a full watt.”`,`
`,`^“Zero point five watts. The edge of the village was as far as it reached.”`,`
`,`^“Tonight I connected it to the tower antenna. It will reach the far end of the island.”`,`
`,`^“And power for the tower?”`,`
`,`^“The generator in the yard. I started it at seven ten this evening.”`,`
`,`ev`,{"VAR?":`C08_002`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch08.studio_hub`},{"#f":1}],window:[`^The window between the control room and the booth. An old crack ran along the bottom of the frame. Yellowed tape marks lay along it.`,`
`,`^The crack sat low, about waist height on a standing adult.`,`
`,`^My left wrist went to that height on its own. The scar lay level with the crack.`,`
`,`^“That glass.” Jaehui Yoon spoke from behind me. “…Your wrist.” `,`#`,`^payoff:F04 `,`/#`,`#`,`^fx:pause(1)`,`/#`,`
`,`^“It broke that day. Even I could not read the minute or the second.”`,`
`,`ev`,{"VAR?":`C08_001`},{"f()":`get_clue`},`pop`,`/ev`,`
`,{"->":`ch08.studio_hub`},{"#f":1}],master_listen:[`^The master tape went into the deck. Headphones on. `,`#`,`^tape:MASTER`,`/#`,`
`,`^Forty minutes. Seven names, and the company man in white boots.`,`
`,`ev`,{"VAR?":`master_self`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The last reel had been set right and joined. It played straight through.`,`
`,{"->":`.^.^.^.12`},null]}],[{"->":`.^.b`},{b:[`
`,`^The last reel was the section spliced in backward. The deck read only that part in reverse.`,`
`,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`^I took off the headphones. She had spent the time setting each dial on the console, even the ones with no power.`,`
`,{"->":`ch08.studio_hub`},{"#f":1}],signal:[`^“It is eleven p.m.” Jaehui Yoon turned the big knob on the console.`,`
`,`^The station theme came over the speaker. One long tone, two short. Twenty seconds. `,`#`,`^signal:live`,`/#`,`
`,`^“This is Haemu FM. Even with no one listening, the broadcast is not over.”`,`
`,`^The mic was still off. She said it toward the empty booth.`,`
`,`^“We go out on the second it was cut off. Eleven forty and three seconds. Until then, we prepare.”`,`
`,`^She stacked the tapes in order: `,`ev`,{"VAR?":`ev_park_testimony`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^testimony, `,{"->":`.^.^.^.18`},null]}],`nop`,`^master, one with no label. You don’t stack tapes flat. I didn’t say so.`,`
`,`^“`,`ev`,{"CNT?":`ch07.studio_go`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^It is as my note said`,{"->":`.^.^.^.27`},null]}],[{"->":`.^.b`},{b:[`^I do not call a name the tapes cannot answer for`,{"->":`.^.^.^.27`},null]}],`nop`,`^. Tell me at the switch what you pinned down on the tower. I will set it at the end of the row.”`,`
`,`^“The script is yours to write. Mine never got past eleven forty.”`,`
`,`^11:30 p.m. In the middle of the console, the On Air lamp warmed to orange. `,`#`,`^sfx:sfx_lamp_warm`,`/#`,`
`,`^Soon the filament heated and the lamp came on. The standby signal.`,`
`,{"->":`ch08.lamp_hub`},{"#f":1}],lamp_hub:[[`ev`,`str`,`^Examine: On Air lamp`,`/str`,{"CNT?":`ch08.lamp`},`!`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^Use: script paper`,`/str`,{"CNT?":`ch08.script_done`},`!`,`/ev`,{"*":`.^.c-1`,flg:5},`ev`,`str`,`^Use: run sheet`,`/str`,{"CNT?":`ch08.script_done`},{"CNT?":`ch08.cue_set`},`!`,`&&`,`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Talk: Jaehui Yoon`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch08.lamp`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.script`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch08.cue_order`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch08.confession`},`
`,{"#f":5}]}],{"#f":1}],cue_order:[`^Jaehui Yoon took a folded sheet, ruled into boxes, from her jacket’s inside pocket. `,`#`,`^sfx:sfx_paper_page`,`/#`,`
`,`^“This is the run sheet. The one from that night.” She spread it on the console.`,`
`,`^「23:00 Theme」. 「23:12 Tonight’s Story」. A pencil line ran through that row. Beside it, in small writing: 「Later」.`,`
`,`^「23:30 Special」. Below it, three boxes were empty.`,`
`,`ev`,{"VAR?":`C05_016`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The writing on the front was larger and straighter than in the lighthouse notebook. `,{"->":`.^.^.^.16`},null]}],`nop`,`
`,`^“Please write down what goes out, in order, from where it was cut off.”`,`
`,`^Side by side on the console: the testimony tape, my new script, an empty envelope.`,`
`,`^“The envelope is the place for Tonight’s Story. I will give you the paper soon.”`,`
`,{"->":`ch08.cue_pick`},{"#f":1}],cue_pick:[[`^I set the pencil tip to the first empty box.`,`
`,`ev`,`str`,`^Testimony tape`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^My script`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Tonight’s Story`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch08.cue_after_t`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.cue_after_s`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch08.cue_after_l`},`
`,{"#f":5}]}],{"#f":1}],cue_after_t:[[`^First box: 「Testimony」. The pencil moved down to the second.`,`
`,`ev`,`str`,`^My script`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Tonight’s Story`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch08.cue_set`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.cue_tail`},`
`,{"#f":5}]}],{"#f":1}],cue_after_s:[[`^I wrote 「Script」 in the first box. The pencil moved down to the second.`,`
`,`ev`,`str`,`^Testimony tape`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Tonight’s Story`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch08.cue_head`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.cue_head`},`
`,{"#f":5}]}],{"#f":1}],cue_after_l:[[`^I wrote 「Story」 in the first box. The pencil moved down to the second.`,`
`,`ev`,`str`,`^Testimony tape`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^My script`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},{"c-0":[`^ `,{"->":`ch08.cue_head`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.cue_head`},`
`,{"#f":5}]}],{"#f":1}],cue_head:[`^I filled in the rest. Jaehui Yoon put a fingertip on the first box.`,`
`,`^“What was it that was cut off that night?” `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“I said we would pick up where it was cut off. Tonight begins with that voice.”`,`
`,`^I erased all three boxes. Eraser crumbs lay on the run sheet.`,`
`,{"->":`ch08.cue_pick`},{"#f":1}],cue_tail:[`^I wrote 「Script」 in the third box. Jaehui Yoon put a fingertip on the second.`,`
`,`^“I put the story off that night too. 「In a little while,」 I said.” `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“The one it is meant for hears it only after we have called every name.”`,`
`,`^I erased the second and third boxes. 「Testimony」 stayed where it was.`,`
`,{"->":`ch08.cue_after_t`},{"#f":1}],cue_set:[`^I wrote 「Story」 in the third box. Testimony, script, story.`,`
`,`^Jaehui Yoon held the run sheet up at eye level. A finger went down the pencil marks one at a time.`,`
`,`ev`,{"CNT?":`ch08.cue_head`},{"CNT?":`ch08.cue_tail`},`||`,`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch08.cue_back`},{"->":`.^.^.^.11`},null]}],`nop`,`
`,`^“We will go in this order.” She slid the run sheet under the On Air lamp.`,`
`,{"->":`ch08.lamp_hub`},{"#f":1}],cue_back:[`^She turned the run sheet over. On the back were three lines of small, even pencil handwriting.`,`
`,`^「1. The testimony, to the end.」 「2. Names.」 「3. Tonight’s Story — Seojin.」`,`
`,`^“Migyeong wrote down this order before the broadcast that day.”`,`
`,`ev`,{"VAR?":`C08_004`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`^She slid the run sheet under the On Air lamp. Back side up.`,`
`,{"->":`ch08.lamp_hub`},{"#f":1}],script:[[`^Jaehui Yoon set script paper and a ballpoint pen on the console.`,`
`,`^“This is what gets read after eleven forty and three seconds.”`,`
`,`^I spread the boards from my notebook beside the paper. Seven blanks. `,`#`,`^deduce:FINAL`,`/#`,`
`,`ev`,`str`,`^Lock in `,`#`,`^deduce_ok`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Hint `,`#`,`^deduce_hint`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Go without a script`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},{"c-0":[`^ `,{"->":`ch08.script_done`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.script_hint`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch08.lamp_hub`},`
`,{"#f":5}]}],{"#f":1}],script_hint:[`ev`,{"VAR?":`hints_used`},1,`+`,`/ev`,{"VAR=":`hints_used`,re:!0},{"->":`ch08.script`},{"#f":1}],script_done:[`^I filled in the last blank and set down the pen. `,`#`,`^sfx:sfx_deduce`,`/#`,`
`,`^She picked up the pages and read them to the end. Her lips moved without a sound.`,`
`,`ev`,{"f()":`proof_weak`},{"f()":`evidence_count`},4,`<`,{"f()":`evidence_count`},3,`>=`,{"f()":`proof_strong`},`&&`,`!`,`&&`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“Every name is in here. I will decide at eleven forty whether I can read it.”`,`
`,{"->":`ch08.lamp_hub`},{"->":`.^.^.^.22`},null]}],`nop`,`
`,{"->":`ch08.script_promise`},{"#f":1}],script_promise:[`^“Every name is in here. I will read this.”`,`
`,{"->":`ch08.lamp_hub`},{"#f":1}],lamp:[`^I looked into the lamp. Inside the yellowed glass, the filament trembled.`,`
`,`ev`,{"VAR?":`M12`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^The yellow light on the desk with all the lights comes on. Glass breaks. My wrist is warm. Red. Someone locks the door. “When it’s over, I’ll take you to your mom.” `,`#`,`^memory:M12 `,`/#`,`#`,`^sfx:sfx_glass `,`/#`,`#`,`^t3:glass_m12 `,`/#`,`#`,`^blackout `,`/#`,`#`,`^silence:1.2`,`/#`,`
`,`^The fluorescent hum came back. The headphone cord lay against my left wrist.`,`
`,{"->":`ch08.lamp_hub`},{"#f":1}],confession:[`^Jaehui Yoon pushed the mic aside. It was still off. “This part does not go on the air.”`,`
`,`ev`,{"VAR?":`Memories`},{"VAR?":`M12`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^“You were the one who locked the door.” I spoke first. “So I wouldn’t see.”`,`
`,`^She nodded. A beat late. `,`#`,`^fx:pause(1)`,`/#`,`
`,`^“Yes. So you only heard the sound. Over the intercom.”`,`
`,`^“One more thing. I called you here. To finish my broadcast.” `,`#`,`^fx:slow`,`/#`,`
`,`^“I called you knowing I was using you.”`,`
`,{"->":`.^.^.^.9`},null]}],[{"->":`.^.b`},{b:[`
`,`^“I called you here. To finish my broadcast.” `,`#`,`^fx:slow`,`/#`,`
`,`^“I called you knowing I was using you.”`,`
`,`^“And that night. I was the one who locked the door. I did it so you would not see.”`,`
`,`^“So you only heard the sound. Over the intercom.”`,`
`,{"->":`.^.^.^.9`},null]}],`nop`,`
`,`^She put a hand in her jacket pocket and drew it out empty.`,`
`,`^“It was Elder Manseok who sent you to your aunt. With an envelope.” `,`#`,`^payoff:F19`,`/#`,`
`,`^“That dawn, the Elder called your name, I am told. Sunrye heard it. ‘Seojin,’ he said.”`,`
`,`ev`,{"VAR?":`C06_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Across the table, Manseok Kang had said it. “You did not cry back then either.” `,{"->":`.^.^.^.25`},null]}],`nop`,`
`,{"->":`ch08.confession_choice`},{"#f":1}],confession_choice:[[`ev`,`str`,`^Examine: On Air lamp`,`/str`,{"CNT?":`ch08.lamp`},`!`,{"CNT?":`ch08.lamp_late`},`!`,`&&`,`/ev`,{"*":`.^.c-0`,flg:5},`ev`,`str`,`^So I lived `,`#`,`^risk:trust_jaehee+2`,`/#`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^You sent Mom off alone `,`#`,`^risk:trust_jaehee-1`,`/#`,`/str`,`/ev`,{"*":`.^.c-2`,flg:4},`ev`,`str`,`^Say nothing`,`/str`,`/ev`,{"*":`.^.c-3`,flg:4},{"c-0":[`^ `,{"->":`ch08.lamp_late`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.answer_lived`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch08.answer_alone`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch08.answer_silent`},`
`,{"#f":5}]}],{"#f":1}],answer_lived:[`^“So I lived.”`,`
`,`ev`,{"^var":`trust_jaehee`,ci:-1},2,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^She looked at the wall clock. She did not read out the time. `,`#`,`^fx:pause(2)`,`/#`,`
`,`^“…Yes. That much is true.”`,`
`,`^“Thank you.”`,`
`,{"->":`ch08.manuscript`},{"#f":1}],answer_alone:[`^“You sent Mom off alone. And you locked the door.”`,`
`,`ev`,{"^var":`trust_jaehee`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`^She did not deny it. “Yes. That is true as well.”`,`
`,{"->":`ch08.manuscript`},{"#f":1}],answer_silent:[`^I said nothing. The small speaker on the console let out its static. `,`#`,`^fx:pause(2)`,`/#`,`
`,{"->":`ch08.manuscript`},{"#f":1}],lamp_late:[`^I looked into the lamp. Inside the yellowed glass, the filament trembled.`,`
`,`ev`,{"VAR?":`M12`},{"f()":`get_memory`},`pop`,`/ev`,`
`,`^The yellow light on the desk with all the lights comes on. Glass breaks. My wrist is warm. Red. Someone locks the door. “When it’s over, I’ll take you to your mom.” `,`#`,`^memory:M12 `,`/#`,`#`,`^sfx:sfx_glass `,`/#`,`#`,`^t3:glass_m12 `,`/#`,`#`,`^blackout `,`/#`,`#`,`^silence:1.2`,`/#`,`
`,`^The fluorescent hum came back. The headphone cord lay against my left wrist.`,`
`,{"->":`ch08.confession_choice`},{"#f":1}],manuscript:[`ev`,{"VAR?":`Inferences`},{"VAR?":`INF_CULPRIT`},`?`,{"VAR?":`Inferences`},{"VAR?":`INF_CH07_RAIL`},`?`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`ev`,!0,`/ev`,{"VAR=":`ded_culprit`,re:!0},{"->":`.^.^.^.10`},null]}],`nop`,`
`,`^She took a sheet of script paper from the console drawer. A water stain had spread yellow across one corner.`,`
`,`^“The last page of Migyeong’s script. From where the tape breaks off.”`,`
`,`^“Whether to read it is yours to decide. I could not read it.”`,`
`,`^I took the page. Small, even handwriting ran across it. I put it in my inside pocket without folding it.`,`
`,`ev`,{"VAR?":`C08_003`},{"f()":`get_clue`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`I_MANUSCRIPT`},{"f()":`get_item`},`pop`,`/ev`,`
`,`ev`,{"VAR?":`final_choice`},`str`,`^confess`,`/str`,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,{"->":`ch08.confess_end`},{"->":`.^.^.^.41`},null]}],[{"->":`.^.b`},{b:[`
`,{"->":`ch08.switch_scene`},{"->":`.^.^.^.41`},null]}],`nop`,`
`,{"#f":1}],confess_end:[`^The wall clock’s second hand passed that moment. Jaehui Yoon laid a hand on the transmitter switch, then took it away.`,`
`,`^“Tonight, another sound comes first, I think.”`,`
`,`^Below the fog, a siren sounded once, briefly. From the police box.`,`
`,{"->":`endings`},{"#f":1}],switch_scene:[[`^“Eleven forty and three seconds.” Jaehui Yoon checked her watch. “That is the time.” `,`#`,`^tier:2`,`/#`,`
`,`^Her hand was on the transmitter switch. She took it away. Now nothing touched the switch.`,`
`,`^She pressed her palm to each item laid out on the console.`,`
`,`ev`,{"f()":`evidence_count`},3,`==`,{"f()":`proof_strong`},`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I told her briefly what had happened atop the tower. Her palm stopped at the end of the row of tapes. `,{"->":`.^.^.^.17`},null]}],`nop`,`ev`,{"f()":`broadcast_ok`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Her fingers left the last tape and curled in. She laid the folded hand on the console. `,{"->":`.^.^.^.23`},null]}],[{"->":`.^.b`},{b:[`^ `,`ev`,{"VAR?":`trust_jaehee`},1,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ She did not lower her hand. Her eyes were on the console dials. `,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`^ `,`ev`,{"f()":`evidence_count`},4,`>=`,{"f()":`evidence_count`},3,`>=`,{"f()":`proof_strong`},`&&`,`||`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ She began to lower her hand, then stopped and looked back toward the tower. `,{"->":`.^.^.^.14`},null]}],[{"->":`.^.b`},{b:[`^ She looked a long while at where the row of tapes ended, then drew her hand back to her lap. `,{"->":`.^.^.^.14`},null]}],`nop`,{"->":`.^.^.^.8`},null]}],`nop`,{"->":`.^.^.^.23`},null]}],`nop`,`
`,`^“You are the one to throw it. I have already run away once.”`,`
`,`^The lamp was lit. A mic in front of me. Tapes side by side on the console. The second hand moving.`,`
`,`ev`,`str`,`^Go on air `,`#`,`^timed:10`,`/#`,`/str`,`/ev`,{"*":`.^.c-0`,flg:4},`ev`,`str`,`^Call the police`,`/str`,`/ev`,{"*":`.^.c-1`,flg:4},`ev`,`str`,`^Destroy the tapes`,`/str`,{"VAR?":`deal_accepted`},`/ev`,{"*":`.^.c-2`,flg:5},`ev`,`str`,`^Burn the tapes `,`#`,`^risk:trust_jaehee-1`,`/#`,`/str`,{"VAR?":`deal_accepted`},`!`,`/ev`,{"*":`.^.c-3`,flg:5},`ev`,`str`,`^(Time’s up) `,`#`,`^timeout`,`/#`,`/str`,`/ev`,{"*":`.^.c-4`,flg:4},{"c-0":[`^ `,{"->":`ch08.sw_broadcast`},`
`,{"#f":5}],"c-1":[`^ `,{"->":`ch08.sw_police`},`
`,{"#f":5}],"c-2":[`^ `,{"->":`ch08.sw_destroy`},`
`,{"#f":5}],"c-3":[`^ `,{"->":`ch08.sw_burn`},`
`,{"#f":5}],"c-4":[`^ `,{"->":`ch08.sw_timeout`},`
`,{"#f":5}]}],{"#f":1}],sw_broadcast:[`^I threw the switch. `,`#`,`^silence:0.8 `,`/#`,`#`,`^t3:on_air `,`/#`,`#`,`^sfx:sfx_onair`,`/#`,`
`,`^A small meter beside the lamp swung to the right. The generator’s drone settled along the floor.`,`
`,`^Jaehui Yoon sat down at the mic and steadied her breath.`,`
`,`ev`,`str`,`^broadcast`,`/str`,`/ev`,{"VAR=":`final_choice`,re:!0},{"->":`endings`},{"#f":1}],sw_police:[`^I didn’t touch the switch. I took out my phone and dialed the police box.`,`
`,`^He picked up on the second ring. “Dohyeon Lee.” Pages turned behind him.`,`
`,`^“I’m at the studio. Come now. There are tapes here. And a person.”`,`
`,`^Jaehui Yoon switched off the transmitter. The lamp went out.`,`
`,`ev`,`str`,`^police`,`/str`,`/ev`,{"VAR=":`final_choice`,re:!0},{"->":`endings`},{"#f":1}],sw_destroy:[`^I picked up the tapes on the console and pulled each one out of its reels. Brown ribbon piled on the floor. `,`#`,`^sfx:sfx_tape_crumple`,`/#`,`
`,`^Jaehui Yoon didn’t stop me. She only watched.`,`
`,`^I cut the transmitter’s power. The lamp went out.`,`
`,`ev`,`str`,`^destroy`,`/str`,`/ev`,{"VAR=":`final_choice`,re:!0},{"->":`endings`},{"#f":1}],sw_burn:[`^I swept up the tapes on the console: `,`ev`,{"VAR?":`ev_park_testimony`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^testimony, `,{"->":`.^.^.^.5`},null]}],`nop`,`^master, one with no label.`,`
`,`^Jaehui Yoon reached out, then drew her hand back.`,`
`,`^“…I stayed here, waiting for that one tape.”`,`
`,`^I cut the transmitter’s power. The lamp went out.`,`
`,`ev`,{"^var":`trust_jaehee`,ci:-1},-1,{"f()":`add_trust`},`pop`,`/ev`,`
`,`ev`,`str`,`^destroy`,`/str`,`/ev`,{"VAR=":`final_choice`,re:!0},{"->":`endings`},{"#f":1}],sw_timeout:[`^My hand hung above the switch. The second hand ticked ten times.`,`
`,`^She looked down at her watch. “Eleven forty and thirteen seconds. The time has passed.”`,`
`,`^Jaehui Yoon switched off the transmitter. The lamp went out.`,`
`,`ev`,`str`,`^timeout`,`/str`,`/ev`,{"VAR=":`final_choice`,re:!0},{"->":`endings`},{"#f":1}],"#f":1}],endings:[`ev`,{"f()":`ending_id`},`/ev`,[`du`,`ev`,`str`,`^END_TWELFTH`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`end_twelfth`},{"->":`.^.^.^.10`},null]}],[`du`,`ev`,`str`,`^END_SILENCE`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`end_silence`},{"->":`.^.^.^.10`},null]}],[`du`,`ev`,`str`,`^END_RECORD`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`end_record`},{"->":`.^.^.^.10`},null]}],[`du`,`ev`,`str`,`^END_HAEMU`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`end_haemu`},{"->":`.^.^.^.10`},null]}],[`du`,`ev`,`str`,`^END_UNFINISHED`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`end_unfinished`},{"->":`.^.^.^.10`},null]}],[`du`,`ev`,`str`,`^END_BROADCAST`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`pop`,`
`,{"->":`end_broadcast`},{"->":`.^.^.^.10`},null]}],[{"->":`.^.b`},{b:[`pop`,`
`,{"->":`end_fallback`},{"->":`.^.^.^.10`},null]}],`nop`,`
`,{"#f":3}],end_twelfth:[`#`,`^ending:END_TWELFTH`,`/#`,`ev`,{"CNT?":`ch07.tower_night`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Fog covered the stairs. More than one set of footsteps was coming up. `,`#`,`^amb:amb_tower`,`/#`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^Someone stepped out from among the boots. Slow footsteps.`,`
`,`^Mudflat mud had dried on the toe of every boot.`,`
`,`^A flashlight beam rested on my face. I squinted.`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^Tae-o Kang’s hand landed on my shoulder. The left one. `,`#`,`^t3:end_twelfth`,`/#`,`
`,`^“`,`ev`,{"VAR?":`day`},7,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^Seojin`,{"->":`.^.^.^.23`},null]}],[{"->":`.^.b`},{b:[`^Ms. Han`,{"->":`.^.^.^.23`},null]}],`nop`,`^. Boat leaves in the morning.”`,`
`,`^My phone slid out of my pocket. Someone held down the power button.`,`
`,`ev`,{"CNT?":`ch07.tower_night`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^The lantern went out. `,`ev`,{"CNT?":`ch08.onair`},{"CNT?":`ch08.opening_roof`},`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^One by one, the radio static from the village died away.`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^The headphones were pulled from my neck. Last came the long groan of the steel frame in the wind overhead.`,`
`,{"->":`.^.^.^.33`},null]}],[{"->":`.^.b`},{b:[`
`,`^The flashlights went out one by one. The last beam moved off toward the mudflats.`,`
`,{"->":`.^.^.^.33`},null]}],`nop`,`
`,`^[Phone screen · 3 missed calls · Auntie]`,`
`,`^“Seojin, pick up. …They said it was an accident. Just an accident.”`,`
`,`^[Local news · three days later]`,`
`,`^“An outside contractor who was sorting records on Muwol Island has been declared lost at sea.”`,`
`,`^“The coast guard ruled it a nighttime accident on the mudflats. The search was called off after two days.”`,`
`,`^“The name has not been released. The remaining belongings and a switched-off phone were sent to the family.”`,`
`,`^[Restoration log · Muwol Island · last saved]`,`
`,`^「Night of arrival. Studio deck running by itself. Batteries new.」`,`
`,`^「TAPE 01 · 9 min 37 s damaged. The rest audible.」`,`
`,`^「Contract term: 7 days · Day `,`ev`,{"VAR?":`day`},`out`,`/ev`,`^.」`,`
`,`^「To do tomorrow —」`,`
`,`^[Ferry pier notice board · the next autumn]`,`
`,`^「County records digitization project · Restorer wanted · Muwol Island · Contract term: 7 days」`,`
`,`^[Night · 88.3]`,`
`,`^“This is Haemu FM. Tonight’s broadcast was made by…” Static swallowed the rest. `,`#`,`^fx:slow `,`/#`,`#`,`^signal:tape_stretch `,`/#`,`#`,`^silence:3.0`,`/#`,`
`,`end`,{"#f":1}],end_silence:[`#`,`^ending:END_SILENCE`,`/#`,`^Jaehui Yoon sat a long time at the console with its lamp off. The chair never turned. `,`#`,`^t3:end_silence`,`/#`,`
`,`^“…It is all right. After twenty-three years of waiting, one more day is nothing.”`,`
`,`ev`,{"VAR?":`final_choice`},`str`,`^destroy`,`/str`,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ She swept the brown ribbon on the floor together by hand. She did not throw it away. `,{"->":`.^.^.^.19`},null]}],[{"->":`.^.b`},{b:[`^ The tapes sat on the console as they were. Nothing was loaded in the deck. `,{"->":`.^.^.^.19`},null]}],`nop`,`
`,`^“These are the people who made tonight’s broadcast.” She said it into the dead mic.`,`
`,`^“One who wrote the words. One who made the sound. No one was listening.”`,`
`,`^“This concludes the broadcast.” The lantern and the transmitter went inside her jacket. She opened the door and went out into the fog.`,`
`,`^The clang of metal arrived first. A demolition truck came up the lane. `,`#`,`^time:morning `,`/#`,`#`,`^loc:alley `,`/#`,`#`,`^amb:amb_village`,`/#`,`
`,`^The archive shelves were loaded whole, the console and the deck after them. Last came the cracked pane from the window frame, in pieces.`,`
`,`^Tape cases clattered across the truck bed all at once.`,`
`,`ev`,{"VAR?":`C08_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The scar on my left wrist pulled under my sleeve. `,{"->":`.^.^.^.47`},null]}],`nop`,`
`,`ev`,{"VAR?":`deal_accepted`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The envelope was in my jacket’s inside pocket. Thick. My hand kept going to that spot. `,{"->":`.^.^.^.54`},null]}],[{"->":`.^.b`},{b:[`^ An envelope came from the village office. The front read “Relocation assistance.” I took it. `,{"->":`.^.^.^.54`},null]}],`nop`,`
`,`^The 7:30 a.m. boat. The fog had lifted. No one saw me off at the pier.`,`
`,`^From the deck rail, I looked back at the island. Clear of fog, the top of the tower showed not one red light.`,`
`,`ev`,{"VAR?":`Proofs`},{"VAR?":`P5`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Tae-o Kang stood at the end of the pier with his left hand in his pocket. He didn’t look this way. `,{"->":`.^.^.^.66`},null]}],`nop`,`
`,`ev`,{"VAR?":`taeo_surrender_declined`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ In Tae-o Kang’s right hand was a portable radio, switched off. `,{"->":`.^.^.^.72`},null]}],`nop`,`
`,`ev`,{"VAR?":`trust_sunrye`},1,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Chopping came from the guesthouse kitchen, but the door stayed shut. `,{"->":`.^.^.^.80`},null]}],`nop`,`
`,`^My phone rang on the boat. My aunt. A TV played behind her.`,`
`,`^“You did well. Your mom would’ve told you to take it too. That money…”`,`
`,`^I didn’t answer. My aunt hung up.`,`
`,`^A mainland station was playing on the wheelhouse radio. I asked a deckhand for 88.3.`,`
`,`^Static. `,`#`,`^fx:static(0.8) `,`/#`,`#`,`^silence:5.0`,`/#`,`
`,`end`,{"#f":1}],end_record:[`#`,`^ending:END_RECORD`,`/#`,`^Twenty minutes later, a patrol car from the police box pulled up at the studio. No siren. `,`#`,`^t3:end_record`,`/#`,`
`,`^Dohyeon Lee came in. The notebook came out before anything else.`,`
`,`^“I will follow procedure. This time, I will be the one.”`,`
`,`ev`,{"VAR?":`ev_remains`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I named them in order: the gate number, the railing, `,`ev`,{"VAR?":`C02_001`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^the scar`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`^the left hand`,{"->":`.^.^.^.8`},null]}],`nop`,`^.`,`
`,`ev`,{"VAR?":`Proofs`},`LIST_COUNT`,0,`>`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Then what I had set before Tae-o Kang on the tower, too. `,{"->":`.^.^.^.18`},null]}],`nop`,`
`,`^Dohyeon Lee wrote it all down and never once asked me to repeat anything.`,`
`,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`
`,`^In order, I named what I had set before Tae-o Kang on the tower. The generator, the Full Moon, the dike, the nine, the hand.`,`
`,`^Dohyeon Lee wrote it all down and never once asked me to repeat anything.`,`
`,`^“The remains have not been found yet. I will start the search over.”`,`
`,`ev`,{"VAR?":`found_hairpin`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I handed him the butterfly hairpin. He tucked it between the pages of his notebook. `,{"->":`.^.^.^.11`},null]}],`nop`,`
`,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`ev`,{"VAR?":`Proofs`},{"VAR?":`P1`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “I will also record the transmitter-room breaker. It was not a fuel problem.” `,{"->":`.^.^.^.25`},null]}],`nop`,`
`,`ev`,{"VAR?":`Proofs`},{"VAR?":`P2`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ He dog-eared one page of his notebook. 「The Full Moon · mooring line · knife」. `,{"->":`.^.^.^.33`},null]}],`nop`,`
`,`^I put the tapes in an envelope and sealed it. He wrote the date and, under it, Jaehui Yoon’s name, letter by letter.`,`
`,`^“The investigation will begin again. I cannot promise you the result.”`,`
`,`^Dawn. The patrol car moved to the front of the village office. Dohyeon Lee opened the back door.`,`
`,`^Tae-o Kang ducked into the back seat with his left hand in his pocket. He didn’t say a word.`,`
`,`ev`,{"VAR?":`taeo_surrender_declined`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Before the back door shut, he looked my way. `,{"->":`.^.^.^.47`},null]}],`nop`,`
`,`^Manseok Kang’s house was dark, the gate locked. The car drove past it.`,`
`,`^Yellow tape went up across the studio door. The demolition truck didn’t come.`,`
`,`^Jaehui Yoon stayed at the console. “I will wait here. Until I am called.”`,`
`,`^“These are the people who made tonight’s broadcast.” She said it without switching the mic on.`,`
`,`^“The one who wrote it, the one who made the sound. Someone took it all down, by procedure. The names are in the paperwork.”`,`
`,`^“This concludes the broadcast. …I will leave the fluorescent lights on.”`,`
`,`^The morning boat. My phone rang. My aunt. The TV behind her grew quieter. `,`#`,`^time:morning `,`/#`,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^“They caught him, I hear. …Do I have to go too? If I go, I’ll tell them everything.”`,`
`,`^“Go.”`,`
`,`ev`,{"VAR?":`Proofs`},{"VAR?":`P3`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ A new sheet was up on the pier notice board. Dohyeon Lee’s handwriting. 「Seawall Gate 3 — No Entry」. `,{"->":`.^.^.^.82`},null]}],`nop`,`
`,`^After the call ended, I held the phone for a long time. The boat came out of the fog.`,`
`,`end`,{"#f":1}],end_haemu:[`#`,`^ending:END_HAEMU`,`/#`,`^The siren sounded once, briefly. It cut off in front of the police box. `,`#`,`^t3:end_haemu`,`/#`,`
`,`^Dohyeon Lee came to the studio at dawn, his eyes red behind his glasses.`,`
`,`^“Tae-o Kang came in voluntarily. His statement has been taken. It includes testimony regarding his father.”`,`
`,`ev`,{"VAR?":`Proofs`},{"VAR?":`P4`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “The names of the nine who boarded the boat that dawn were also recorded. He stated he does not know the names they took.” `,{"->":`.^.^.^.18`},null]}],`nop`,`
`,`^“My father’s name came up as well. My father—” Dohyeon Lee said no more and closed the notebook.`,`
`,`^The notebook cover was worn white with handling.`,`
`,`^Jaehui Yoon turned the transmitter switch off. “This is enough for tonight. The siren went first, after all.”`,`
`,`^“These are the people who made tonight’s broadcast.” She said it in front of the dead mic.`,`
`,`^“The one who wrote it, the one who made the sound. Tonight, there was also one who walked down the stairs of his own accord.”`,`
`,`^“The names are in the statement. This concludes the broadcast.”`,`
`,`^I left the studio and passed the police box. Typing clattered behind the window.`,`
`,`^Through the window, Tae-o Kang’s left hand lay on the desk beside the statement. Out of his pocket.`,`
`,`^A ship’s horn sounded long in the fog. The boat left an hour late. `,`#`,`^time:morning `,`/#`,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^No white coat showed on the pier. A patrol car stood in front of Manseok Kang’s gate.`,`
`,`ev`,{"VAR?":`Proofs`},{"VAR?":`P3`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Yellow tape was strung in front of Seawall Gate 3. A police-box bicycle stood on the dike. `,{"->":`.^.^.^.55`},null]}],`nop`,`
`,`^My phone rang on the boat. My aunt. The TV was off.`,`
`,`^“The village head turned himself in…” For a while she said nothing. “Seojin. I took one too. An envelope. Elder Manseok sent you to me.” `,`#`,`^payoff:F19`,`/#`,`
`,`^I listened to her breathing over the phone. My aunt didn’t hang up either. `,`#`,`^fx:pause(2)`,`/#`,`
`,`^Waves slapped the hull. The boat went on into the fog.`,`
`,`end`,{"#f":1}],end_broadcast:[`#`,`^ending:END_BROADCAST`,`/#`,`^Jaehui Yoon switched on the mic. A voice settled over the generator’s drone. `,`#`,`^t3:end_broadcast`,`/#`,`
`,`^“This is 「The Midnight Lighthouse」, on Haemu FM, eighty-eight point three.”`,`
`,`^“That night twenty-three years ago, this broadcast was cut off partway through. Tonight, we pick up where it stopped.”`,`
`,`ev`,{"VAR?":`C08_004`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The run sheet under the lamp lay back side up. The first line read 「The testimony, to the end.」 `,{"->":`.^.^.^.17`},null]}],`nop`,`
`,`ev`,{"VAR?":`ev_park_testimony`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^She put on the testimony tape. Old Park’s voice came from the monitor speaker. March twelfth, ninety-six.`,`
`,{"->":`.^.^.^.24`},null]}],[{"->":`.^.b`},{b:[`
`,`^She put on the master tape. Old Park’s voice on the tape came from the monitor speaker.`,`
`,{"->":`.^.^.^.24`},null]}],`nop`,`
`,`^She called out the seven. Sangcheol Kim. Deoksu Lim. Dongsu Choi. She read the four unrecorded names one syllable at a time.`,`
`,`ev`,{"VAR?":`C06_021`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The four were the names Old Park knew them by at the site canteen. `,{"->":`.^.^.^.33`},null]}],`nop`,`
`,`ev`,{"f()":`proof_strong`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^I handed her what I had set before Tae-o Kang on the tower. Five things.`,`
`,`^She read them out in order. The generator. The Full Moon. The dike. The nine. And the hand.`,`
`,`ev`,{"VAR?":`taeo_surrender_declined`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The name behind that hand reached the mic before any statement. `,{"->":`.^.^.^.9`},null]}],`nop`,`
`,{"->":`.^.^.^.39`},null]}],`nop`,`
`,{"->t->":`read_script`},`^“And November fourteenth, two thousand three. Migyeong Han. The person who wrote this story.”`,`
`,`^“That story never got as far as…”`,`
`,`^She pushed the mic over. “The one it was written for is here.”`,`
`,`^Somewhere in the lanes, radios sent those words out in the same static as the studio.`,`
`,`^The mic came to me. `,`ev`,{"VAR?":`C08_003`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The script was in my inside pocket. `,{"->":`.^.^.^.57`},null]}],[{"->":`.^.b`},{b:[`^ My hands were empty. `,{"->":`.^.^.^.57`},null]}],`nop`,`
`,`^“…This is the one it was written for. Seojin Han. I’m here.” Nothing came after that.`,`
`,`^She took the mic back. “That is all for tonight. The broadcast is not over.”`,`
`,`^“These are the people who made tonight’s broadcast.”`,`
`,`^“The one who wrote it, the one who made the sound. And those who gave their testimony.”`,`
`,`^“This concludes the broadcast.”`,`
`,`^I threw the switch down. The lamp went out. The reels on the recording deck stopped.`,`
`,`ev`,{"VAR?":`deal_accepted`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I took the envelope from my inside pocket and set it on the console. It landed heavy. Jaehui Yoon left it there. `,{"->":`.^.^.^.75`},null]}],`nop`,`
`,`^The radios in the lanes went off one by one. Not one house turned off its lights.`,`
`,`ev`,{"VAR?":`taeo_surrender_declined`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ At dawn, boots coming down the tower stairs passed the studio. Toward the police box. `,{"->":`.^.^.^.83`},null]}],`nop`,`
`,`^Low voices went back and forth between the waves. `,`#`,`^time:morning `,`/#`,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^Instead of the demolition truck, a patrol car stood outside the village office.`,`
`,`ev`,{"VAR?":`found_hairpin`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The butterfly hairpin in my pocket caught on a fingertip. Mom was still under the water at Gate 3. `,{"->":`.^.^.^.102`},null]}],`nop`,`
`,`^The window of the Sea House guesthouse was broken. A fist-sized stone lay among the shards.`,`
`,`^Grandma Sunrye stood on the pier holding a bundle in a wrapping cloth. Still in her rubber boots.`,`
`,`^“Have you eaten?” She said nothing about the window. She got on the same boat.`,`
`,`^Manseok Kang’s gate stood open, but the white coat was nowhere to be seen.`,`
`,`ev`,{"VAR?":`Proofs`},{"VAR?":`P4`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The mainland news on the deck speaker said Muwol twice. They were looking for nine people, it said. `,{"->":`.^.^.^.118`},null]}],`nop`,`
`,`ev`,{"f()":`collection_full`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ On deck, I wrote in my restoration log. Eleven stories, eleven names. Not one box left empty. `,{"->":`.^.^.^.124`},null]}],`nop`,`
`,`^My phone rang on the boat. My aunt. On her end, a TV was on.`,`
`,`^“Someone recorded it and posted it. That’s where I heard it. Your voice… it sounded like your mom’s.” `,`#`,`^signal:live_phone`,`/#`,`
`,`^“Auntie. Why did it have to be adoption?”`,`
`,`^My aunt turned the TV up. She didn’t answer.`,`
`,`^The boat went into the fog. The call didn’t end.`,`
`,`end`,{"#f":1}],read_script:[`ev`,{"VAR?":`Boards`},{"VAR?":`FINAL`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Jaehui Yoon unfolded my script pages and read them line by line.`,`
`,`^“At eleven forty, the hands that cut off the broadcast were four youth association members. They pulled the breaker down.”`,`
`,`^“The Full Moon was sent out empty. Nine people took new names and left the island.”`,`
`,`ev`,{"VAR?":`Deep`},{"VAR?":`D_CH06_SEVEN`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Under the dike, it was seven. Not three.” `,{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,{"VAR?":`Deep`},{"VAR?":`D_CH06_AMP`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “The next day’s accident announcement was canceled.” `,{"->":`.^.^.^.21`},null]}],`nop`,`
`,`ev`,{"VAR?":`Deep`},{"VAR?":`D_CH03_OUTPUT`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “After eleven forty, transmitter output was zero.” `,{"->":`.^.^.^.29`},null]}],`nop`,`
`,`ev`,{"VAR?":`Deep`},{"VAR?":`D_CH02_KEY`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “The Full Moon’s engine key was off. There was no storm, either.” `,{"->":`.^.^.^.37`},null]}],`nop`,`
`,`ev`,{"VAR?":`Deep`},{"VAR?":`D_CH03_VERDICT`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “The lost-at-sea ruling was written before the wreck was found.” `,{"->":`.^.^.^.45`},null]}],`nop`,`
`,`ev`,{"VAR?":`Deep`},{"VAR?":`D_CH04_LOG`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “In that night’s broadcast log, the guest reader was nine years old.” `,{"->":`.^.^.^.53`},null]}],`nop`,`
`,`ev`,{"VAR?":`Deep`},{"VAR?":`D_CH07_SCAR`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “The one who cut a hand on the railing was climbing the tower stairs that night.” `,{"->":`.^.^.^.61`},null]}],`nop`,`
`,`^“The one who did not come back is Migyeong Han. That hand belonged to Tae-o Kang.”`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^“There is no script. I will only call the names.”`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,`void`,`/ev`,`->->`,{"#f":1}],end_unfinished:[`#`,`^ending:END_UNFINISHED`,`/#`,`^Jaehui Yoon switched on the mic. The static in the speaker drew back a notch. `,`#`,`^t3:end_unfinished`,`/#`,`
`,`^The wall clock’s second hand passed the point where the broadcast had been cut off twenty-three years before.`,`
`,`^I took the recording deck out of my restoration kit and set it running.`,`
`,`^She called the seven names and Mom’s name, then pushed the mic my way.`,`
`,`ev`,{"VAR?":`Boards`},{"VAR?":`FINAL`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ My script came first. At each new box, I took one breath. `,{"->":`.^.^.^.20`},null]}],`nop`,`
`,`ev`,{"VAR?":`Deep`},`LIST_COUNT`,6,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The script ran past two pages. I didn’t drop a single line. `,{"->":`.^.^.^.29`},null]}],`nop`,`
`,`ev`,{"VAR?":`C08_004`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Third line on the back of the run sheet. Tonight’s Story, Seojin. `,{"->":`.^.^.^.36`},null]}],`nop`,`
`,`^I took the script from my inside pocket. The rustle of paper unfolding went into the mic.`,`
`,`^Jaehui Yoon held her breath. Mom’s handwriting leaned to the right.`,`
`,`^I read on from where it had been cut off.`,`
`,`^“Even as a baby, you didn’t cry. So Mom cried for you.”`,`
`,`^My voice didn’t waver once.`,`
`,`^The small handwriting ran on evenly. The bottom of the page came closer.`,`
`,`^The last line went like this.`,`
`,`^“It’s all right not to cry. Call the names instead. Mom’s name too.” `,`#`,`^fx:slow`,`/#`,`
`,`^The script ended there. I leaned toward the mic. “Migyeong Han.” The meter needle rose once and fell.`,`
`,`^The studio went quiet but for the fluorescent hum. `,`#`,`^fx:pause(2) `,`/#`,`#`,`^amb:amb_studio -reel`,`/#`,`
`,`^“These are the people who made tonight’s broadcast.” I kept hold of the mic as I said it.`,`
`,`^“The one who wrote it, the one who made the sound. The one who sent in the story.”`,`
`,`^“This is Haemu FM, eighty-eight point three. This concludes the broadcast.”`,`
`,`^Jaehui Yoon threw the switch down. The lamp went out. She left the generator running. `,`#`,`^tape:TAPE08`,`/#`,`
`,`^“There’s tomorrow too.” She picked up the lantern. “This time I’ll read. Other names.”`,`
`,`ev`,{"VAR?":`taeo_surrender_declined`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ At dawn, boots coming down the tower stairs passed the studio. Toward the police box. `,{"->":`.^.^.^.84`},null]}],`nop`,`
`,`^Gull cries circled over the pier. The fog had lifted. The windows in the lanes were open. `,`#`,`^time:morning `,`/#`,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^Manseok Kang’s gate stood open. No white coat.`,`
`,[`ev`,{"VAR?":`ev_remains`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^The butterfly hairpin went into the envelope with the remains. A name was written on the envelope. Migyeong Han.`,`
`,{"->":`.^.^.^.101`},null]}],[`ev`,{"VAR?":`found_hairpin`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^The butterfly hairpin was in my pocket. Mom was still under the water.`,`
`,{"->":`.^.^.^.101`},null]}],`nop`,`
`,`^Grandma Sunrye stood on the pier and held out a bottle of barley tea. “Have it on the way.”`,`
`,`^In the back seat of the patrol car at the head of the pier, Tae-o Kang kept his left hand in his pocket and didn’t look my way.`,`
`,`^Dohyeon Lee stood holding his notebook. “We will begin, per procedure. Starting with my father’s.”`,`
`,`ev`,{"VAR?":`Proofs`},`LIST_COUNT`,5,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I told him the five things from the tower. He took them down on the first page of his notebook. The generator, the Full Moon, the dike, the nine, the hand. `,{"->":`.^.^.^.116`},null]}],`nop`,`
`,`ev`,{"VAR?":`deal_accepted`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I took the thick envelope from my inside pocket and laid it on his notebook. He didn’t count it. He wrote the date first. `,{"->":`.^.^.^.122`},null]}],`nop`,`
`,`^On the boat, I took out my phone. I dialed my aunt. It rang once.`,`
`,`^No TV behind her. Her breathing was close. `,`#`,`^hush`,`/#`,`
`,`^“I read Mom’s story. To the end.”`,`
`,`^“…To the end.” My aunt was quiet a long while before she went on. “I couldn’t read it. My sister’s script…”`,`
`,`^“Next time, you read it, Auntie.”`,`
`,`ev`,{"f()":`collection_full`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ After the call, I opened my restoration log. Eleven stories and that night. No blank lines. `,{"->":`.^.^.^.141`},null]}],`nop`,`
`,`^The boat left the fog behind. The wheelhouse radio still picked up 88.3.`,`
`,`^The station theme. One long tone, two short. `,`#`,`^signal:ending `,`/#`,`#`,`^fx:beacon`,`/#`,`
`,`end`,{"#f":1}],end_fallback:[`#`,`^ending:END_FALLBACK`,`/#`,[`ev`,{"VAR?":`final_choice`},`str`,`^broadcast`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,{"->":`.^.^.^.fb_broadcast`},{"->":`.^.^.^.6`},null]}],[`ev`,{"VAR?":`final_choice`},`str`,`^police`,`/str`,`==`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,{"->":`.^.^.^.fb_police`},{"->":`.^.^.^.6`},null]}],[{"->":`.^.b`},{b:[`
`,{"->":`.^.^.^.fb_destroy`},{"->":`.^.^.^.6`},null]}],`nop`,`
`,{fb_broadcast:[[`ev`,{"VAR?":`trust_jaehee`},1,`<`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Jaehui Yoon didn’t look my way, only at the console meters.`,`
`,`ev`,{"CNT?":`ch08.answer_alone`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “You said I sent her alone. That is true. So I cannot read it out myself.” `,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch08.answer_silent`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “I never heard your answer. So I cannot read it out myself.” `,{"->":`.^.^.^.13`},null]}],`nop`,`
`,`ev`,{"CNT?":`ch08.script_promise`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “I take back what I said about reading it.” `,{"->":`.^.^.^.19`},null]}],`nop`,`
`,{"->":`.^.^.^.3`},null]}],[`ev`,{"f()":`evidence_count`},4,`<`,{"f()":`evidence_count`},3,`>=`,{"f()":`proof_strong`},`&&`,`!`,`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^Jaehui Yoon laid her palm on the bare console beside the last tape. She kept it there a long time.`,`
`,`ev`,{"VAR?":`Boards`},{"VAR?":`FINAL`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Your script says more than the tapes do. The tapes cannot hold it up.” `,{"->":`.^.^.^.9`},null]}],`nop`,`
`,{"->":`.^.^.^.3`},null]}],[{"->":`.^.b`},{b:[`
`,`^Jaehui Yoon asked before switching on the mic. “On the tower, what did Tae-o say?”`,`
`,[`ev`,{"CNT?":`ch08.deny`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“He said he cut it on a net. And that the report says so.”`,`
`,{"->":`.^.^.^.8`},null]}],[`ev`,{"CNT?":`ch08.taeo_holds`},{"VAR?":`Proofs`},`LIST_COUNT`,0,`>`,`&&`,`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“He asked if that was all. And where the hand was.”`,`
`,{"->":`.^.^.^.8`},null]}],[`ev`,{"CNT?":`ch08.taeo_holds`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“He said there was nothing. Smiling.”`,`
`,{"->":`.^.^.^.8`},null]}],[`ev`,{"CNT?":`ch08.confess_declined`},`/ev`,{"->":`.^.b`,c:!0},{b:[`
`,`^“He said he’d go down and tell them. I told him the broadcast came first.”`,`
`,{"->":`.^.^.^.8`},null]}],[{"->":`.^.b`},{b:[`
`,`^“He said the broadcast was over. Because I didn’t say a word.”`,`
`,{"->":`.^.^.^.8`},null]}],`nop`,`
`,`^She gripped the mic stand, then let go.`,`
`,`ev`,{"CNT?":`ch08.confess_declined`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “So you left those words on the tower. The island never heard them.” `,{"->":`.^.^.^.17`},null]}],[{"->":`.^.b`},{b:[`^ “If Tae-o says no, this broadcast is a rumor.” `,{"->":`.^.^.^.17`},null]}],`nop`,`
`,{"->":`.^.^.^.3`},null]}],`nop`,`
`,`ev`,{"VAR?":`Boards`},{"VAR?":`FINAL`},`?`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ She laid my script face down on the console and did not read it. `,{"->":`.^.^.^.12`},null]}],[{"->":`.^.b`},{b:[`^ She sat at the mic with no script. `,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`ev`,{"VAR?":`trust_jaehee`},1,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “Names I could not call in my own voice become a ghost broadcast.” `,{"->":`.^.^.^.21`},null]}],[{"->":`.^.b`},{b:[`^ “As it stands, our listeners would hear a ghost broadcast.” `,{"->":`.^.^.^.21`},null]}],`nop`,`
`,`^“If it is a ghost broadcast, the edge of the village is far enough.”`,`
`,`^She unplugged the line to the tower. That left the short antenna on the box.`,`
`,`ev`,{"VAR?":`C08_002`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The box was no bigger than two palms. `,{"->":`.^.^.^.32`},null]}],`nop`,`
`,`^“This is Haemu FM. Even with no one listening, the broadcast is not over.”`,`
`,`^She moved on without calling a single name.`,`
`,`^“These are the people who made tonight’s broadcast.” She had left the mic on.`,`
`,`^“The one who wrote it, the one who made the sound. The ones who could not finish. This concludes the broadcast.”`,`
`,{"->":`.^.^.fb_common`},{"#f":1}],fb_police:[`ev`,{"VAR?":`trust_dohyun`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Dohyeon Lee didn’t come. Not even a bicycle passed outside the studio.`,`
`,{"->":`.^.^.^.7`},null]}],[{"->":`.^.b`},{b:[`
`,`^Dohyeon Lee came. His eyes went from the tapes to Jaehui Yoon and back. He took out his notebook, then closed it without writing a line.`,`
`,`^“Bring it to the police box after daybreak. It must be filed there.”`,`
`,{"->":`.^.^.^.7`},null]}],`nop`,`
`,`^Jaehui Yoon sat at the dead mic. “These are the people who made tonight’s broadcast.”`,`
`,`^“The one who wrote it, the one who made the sound. The ones who could not finish. This concludes the broadcast.”`,`
`,`^A fluorescent ballast buzzed and trembled above the front desk at dawn. `,`#`,`^loc:police `,`/#`,`#`,`^amb:amb_police`,`/#`,`
`,`^I put the tapes in an envelope and set it on the front desk. Dohyeon Lee wrote the date on it.`,`
`,`ev`,{"VAR?":`ev_remains`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “There are no remains. It is a missing-persons case closed twenty-three years ago.” `,{"->":`.^.^.^.28`},null]}],`nop`,`
`,`ev`,{"VAR?":`ded_culprit`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “As for whose hand it was, there is no name I can put on paper.” `,{"->":`.^.^.^.35`},null]}],`nop`,`
`,`ev`,{"VAR?":`ev_remains`},{"VAR?":`ded_culprit`},`&&`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ “I will take this in. My authority ends here.” `,{"->":`.^.^.^.43`},null]}],`nop`,`
`,`^“A request to reopen goes through the same procedure as viewing a closed case. It starts with a public records request.”`,`
`,`ev`,{"VAR?":`C02_011`},{"f()":`has_clue`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ I had heard the same thing at this window on the second day. `,{"->":`.^.^.^.52`},null]}],`nop`,`
`,`^The envelope went into a drawer behind the front desk. The drawer shut.`,`
`,{"->":`.^.^.fb_common`},{"#f":1}],fb_destroy:[`^Jaehui Yoon sat at the dead mic. “These are the people who made tonight’s broadcast.”`,`
`,`^“The one who wrote it, the one who made the sound. The ones who could not finish. This concludes the broadcast.”`,`
`,`^At dawn, in the yard, I burned the tapes. The brown ribbon curled up as it burned.`,`
`,`^The smell stung. Jaehui Yoon only watched, to the end.`,`
`,`^Back down the lane, the general store’s bench was empty. No yogurt drinks.`,`
`,{"->":`.^.^.fb_common`},{"#f":1}],fb_common:[`^The clang of metal reached the pier. Seven in the morning, from the direction of the studio. `,`#`,`^time:morning `,`/#`,`#`,`^loc:ferry `,`/#`,`#`,`^amb:amb_sea`,`/#`,`
`,`^An excavator struck the walls first. The glass in the window frames came down all at once.`,`
`,`ev`,{"VAR?":`final_choice`},`str`,`^broadcast`,`/str`,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Someone on the pier said, “That broadcast again last night.” `,{"->":`.^.^.^.21`},null]}],`nop`,`
`,`ev`,{"VAR?":`taeo_surrender_declined`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`
`,`^Tae-o Kang was untying the gangway rope. No trace of a smile. He didn’t look my way.`,`
`,`ev`,{"VAR?":`final_choice`},`str`,`^broadcast`,`/str`,`==`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ The broadcast he’d meant to hear from the tower stopped at the village’s edge. `,{"->":`.^.^.^.12`},null]}],[{"->":`.^.b`},{b:[`^ The broadcast he’d meant to hear from the tower never went out. `,{"->":`.^.^.^.12`},null]}],`nop`,`
`,`^He never went down to the police box.`,`
`,{"->":`.^.^.^.28`},null]}],[{"->":`.^.b`},{b:[`
`,`^Tae-o Kang was untying the gangway rope. His eyes smiled. “Take care, Ms. Han.”`,`
`,{"->":`.^.^.^.28`},null]}],`nop`,`
`,`ev`,{"VAR?":`trust_sunrye`},1,`>=`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ Grandma Sunrye followed me out to the end of the pier. She stood looking only at the toes of her boots. `,{"->":`.^.^.^.37`},null]}],[{"->":`.^.b`},{b:[`^ The lane toward the guesthouse was empty. `,{"->":`.^.^.^.37`},null]}],`nop`,`
`,`^I got on the 7:30 boat.`,`
`,`^My phone rang. My aunt. The TV came through first.`,`
`,`^“Is your work there done? …Then that’s fine.”`,`
`,`^“…Not yet.” My aunt didn’t ask again. Her soup was boiling, she said.`,`
`,`^[Mainland · workshop · a month later]`,`
`,`^Static came from the receiver on the workbench. I set the dial to 88.3. `,`#`,`^amb:amb_room`,`/#`,`
`,`^The stations on either side leaked in by turns.`,`
`,`^The middle was empty. `,`#`,`^fx:static(0.2)`,`/#`,`
`,`^I opened the restoration log on my laptop. The last page was blank.`,`
`,`^[Restoration log · Muwol Island · unfinished]`,`
`,`ev`,{"VAR?":`ev_park_testimony`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ 「Old Park’s testimony — no recording」 `,{"->":`.^.^.^.70`},null]}],`nop`,`
`,`ev`,{"VAR?":`ev_daeseung_docs`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ 「Daeseung Construction documents — not obtained」 `,{"->":`.^.^.^.77`},null]}],`nop`,`
`,`ev`,{"VAR?":`ev_remains`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ 「Gate 3 — under the water」 `,{"->":`.^.^.^.84`},null]}],`nop`,`
`,`ev`,{"VAR?":`ded_culprit`},`!`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ 「That hand — no name」 `,{"->":`.^.^.^.91`},null]}],`nop`,`
`,`ev`,{"VAR?":`trust_jaehee`},1,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ 「Jaehui Yoon — we never truly sat face to face」 `,{"->":`.^.^.^.99`},null]}],`nop`,`
`,`ev`,{"VAR?":`trust_dohyun`},2,`<`,`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ 「Dohyeon Lee — we never closed the notebook together」 `,{"->":`.^.^.^.107`},null]}],`nop`,`
`,`ev`,{"f()":`proof_weak`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ 「Tower confrontation — not enough proof」 `,{"->":`.^.^.^.113`},null]}],`nop`,`
`,`ev`,{"VAR?":`taeo_surrender_declined`},`/ev`,[{"->":`.^.b`,c:!0},{b:[`^ 「Tae-o Kang — surrender not accepted」 `,{"->":`.^.^.^.119`},null]}],`nop`,`
`,`^The cursor blinked on an empty line. The static went on between the two stations.`,`
`,`end`,{"#f":1}],"#f":1}],"global decl":[`ev`,0,{"VAR=":`day`},3,{"VAR=":`timeslot`},3,{"VAR=":`ap`},0,{"VAR=":`alert`},0,{"VAR=":`trust_taeo`},0,{"VAR=":`trust_dohyun`},0,{"VAR=":`trust_sunrye`},0,{"VAR=":`trust_park`},0,{"VAR=":`trust_jaehee`},!1,{"VAR=":`ev_master_tape`},!1,{"VAR=":`ev_park_testimony`},!1,{"VAR=":`ev_daeseung_docs`},!1,{"VAR=":`ev_remains`},!1,{"VAR=":`ded_culprit`},!1,{"VAR=":`deal_accepted`},!1,{"VAR=":`found_hairpin`},0,{"VAR=":`chase_mistakes`},`str`,`^`,`/str`,{"VAR=":`final_choice`},!1,{"VAR=":`ded_child_seojin`},!1,{"VAR=":`ded_mother_mikyung`},!1,{"VAR=":`tool_filter`},!1,{"VAR=":`tool_reverse`},!1,{"VAR=":`day_over`},!1,{"VAR=":`master_self`},!1,{"VAR=":`tool_search`},!1,{"VAR=":`tide_known`},0,{"VAR=":`hints_used`},0,{"VAR=":`deduce_wrong`},0,{"VAR=":`confront_lost`},!1,{"VAR=":`assist_used`},0,{"VAR=":`helped`},0,{"VAR=":`asked_direct`},0,{"VAR=":`asked_indirect`},1,{"VAR=":`difficulty`},0,{"VAR=":`deck_wasted`},0,{"VAR=":`dig_tries`},0,{"VAR=":`signal_tries`},0,{"VAR=":`last_resort`},!1,{"VAR=":`assist_ap`},!1,{"VAR=":`taeo_surrender_declined`},0,{"VAR=":`hint_debt`},!1,{"VAR=":`signal_ok`},!1,{"VAR=":`park_visit_am`},!1,{"VAR=":`final_first_try`},{list:{},origins:[`Clues`]},{"VAR=":`Clues`},{list:{},origins:[`Memories`]},{"VAR=":`Memories`},{list:{},origins:[`StoryTapes`]},{"VAR=":`StoryTapes`},{list:{},origins:[`Inferences`]},{"VAR=":`Inferences`},{list:{},origins:[`Items`]},{"VAR=":`Items`},{list:{},origins:[`Deep`]},{"VAR=":`Deep`},{list:{},origins:[`Proofs`]},{"VAR=":`Proofs`},{list:{},origins:[`Stations`]},{"VAR=":`Stations`},{list:{},origins:[`Boards`]},{"VAR=":`Boards`},{list:{},origins:[`Confronts`]},{"VAR=":`Confronts`},`/ev`,`end`,null],"#f":1}],listDefs:{Clues:{C00_001:1,C00_002:2,C00_003:3,C00_004:4,C00_005:5,C01_001:6,C01_002:7,C01_003:8,C01_004:9,C01_005:10,C01_006:11,C01_007:12,C01_008:13,C01_009:14,C01_010:15,C01_011:16,C01_012:17,C01_013:18,C02_001:19,C02_002:20,C02_003:21,C02_004:22,C02_005:23,C02_006:24,C02_007:25,C02_008:26,C02_009:27,C02_010:28,C02_011:29,C02_012:30,C02_013:31,C02_014:32,C03_001:33,C03_002:34,C03_003:35,C03_004:36,C03_005:37,C03_006:38,C03_007:39,C03_008:40,C03_009:41,C03_010:42,C03_011:43,C03_012:44,C03_013:45,C03_014:46,C04_001:47,C04_002:48,C04_003:49,C04_004:50,C04_005:51,C04_006:52,C04_007:53,C04_008:54,C04_009:55,C04_010:56,C04_011:57,C04_012:58,C04_013:59,C05_001:60,C05_002:61,C05_003:62,C05_004:63,C05_005:64,C05_006:65,C05_007:66,C05_008:67,C05_009:68,C05_010:69,C05_011:70,C05_012:71,C06_001:72,C06_002:73,C06_003:74,C06_004:75,C06_005:76,C06_006:77,C06_007:78,C06_008:79,C06_009:80,C06_010:81,C06_011:82,C06_012:83,C06_013:84,C06_014:85,C06_015:86,C07_001:87,C07_002:88,C07_003:89,C07_004:90,C07_005:91,C07_006:92,C07_007:93,C07_008:94,C07_009:95,C07_010:96,C08_001:97,C08_002:98,C08_003:99,C03_015:100,C03_016:101,C05_013:102,C06_016:103,C06_017:104,C07_011:105,C07_012:106,C06_018:107,C06_019:108,C06_020:109,C07_013:110,C01_014:111,C02_015:112,C05_014:113,C05_015:114,C06_021:115,C06_022:116,C08_004:117,C02_016:118,C05_016:119,C02_017:120,C04_014:121,C05_017:122},Memories:{M01:1,M02:2,M03:3,M04:4,M05:5,M06:6,M07:7,M08:8,M09:9,M10:10,M11:11,M12:12},StoryTapes:{ST_jaehee:1,ST_mikyung:2,ST_youngho:3,ST_malsun:4,ST_dongcheol:5,ST_gitaek:6,ST_gisu:7,ST_sanggil:8,ST_yeonja:9,ST_minwoo:10,ST_euna:11},Inferences:{INF_CH01_CUT:1,INF_CH01_FUEL:2,INF_CH01_LOG:3,INF_CH02_EMPTY:4,INF_CH02_LIE:5,INF_CH02_NOSTORM:6,INF_CH02_ROPE:7,INF_CH03_BREAKER:8,INF_CH03_PATROL:9,INF_CH03_STORM:10,INF_CH03_TESTIMONY:11,INF_CH04_COUGH:12,INF_CH04_LIE:13,INF_CH04_MOTHER:14,INF_CH04_NAME:15,INF_CH05_NOTE:16,INF_CH05_RECOMMEND:17,INF_CH05_SENDER:18,INF_CH05_X:19,INF_CH06_EMPTY_BOAT:20,INF_CH06_MONEY:21,INF_CH06_SEVEN:22,INF_CH06_VILLAGE:23,INF_CH07_BANDAGE:24,INF_CH07_GATE:25,INF_CH07_HAIRPIN:26,INF_CULPRIT:27,INF_CH07_RAIL:28},Items:{I_LETTER:1,I_RESTORE_KIT:2,I_FLASHLIGHT:3,I_KEY_ROOM:4,I_TAPE01:5,I_TAPE_WAVE:6,I_TAPE_2019:7,I_POSTCARD:8,I_TAPE02:9,I_KEY_TOWER:10,I_TAPE03:11,I_FILTER:12,I_TAPE_COPY:13,I_NOTE_WARNING:14,I_CASE_FILE:15,I_TAPE04:16,I_LIST_MISSING:17,I_KEY_LIGHTHOUSE:18,I_LUNCHBOX:19,I_TAPE05:20,I_TAPE_MASTER:21,I_RECORDER:22,I_TAPE06:23,I_INVITATION:24,I_DAESEUNG_DOCS:25,I_TICKET:26,I_PHOTO_YOUTHCLUB:27,I_HAIRPIN:28,I_POUCH:29,I_MANUSCRIPT:30},Deep:{D_CH01_LOGGER:1,D_CH02_KEY:2,D_CH02_BODIES:3,D_CH03_VERDICT:4,D_CH03_OUTPUT:5,D_CH04_ADOPT:6,D_CH04_LOG:7,D_CH05_SIGNAL:8,D_CH05_BATTERY:9,D_CH06_SEVEN:10,D_CH06_AMP:11,D_CH07_YARD:12,D_CH07_SCAR:13},Proofs:{P1:1,P2:2,P3:3,P4:4,P5:5},Stations:{HAEMU_883:1,EMERGENCY_917:2,FISH_1024:3,MAINLAND_1049:4,YOUTH_955:5,YOUTH_955_CH4:6},Boards:{CH01:1,CH02:2,CH03:3,CH04:4,CH05:5,CH06:6,CH07:7,FINAL:8,CH03_MID:9,CH06_MID:10,CH02_MID:11,CH04_MID:12,CH05_MID:13,CH07_MID:14},Confronts:{C1_FUEL:1,C2_STORM:2,C3_PATROL:3,C3_RECORD:4,C4_AUNT:5,C4_SUNRYE:6,C5_MEAL:7,C6_MANSEOK:8,C6_DOHYUN:9,C7_ACCUSE:10,C7_TICKET:11,C8_TAEO:12}}};export{e as default};