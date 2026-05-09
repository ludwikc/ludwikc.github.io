




``` 
CONTACTS{FName:t,LName:t,Email:em[mailerlite],Ph:ph,Type:s[Indiv/Corp],Status:s[Lead/Act/Ex],Src:s,VAT:t,Score:f,Tags:multi,Created:d[a],LastBuy:d,TotVal:r[SUM(Buys)],CRevenue:r,CoachRev:r,ConsRev:r,BuyFreq:f,ProdCnt:cnt,CoachRate:f,Engage:f,N:l,Buys:l[BUYS],Coach:l[COACH],Corps:l[CORPS],Don:l[DON],Comms:l[COMMS]}

PROJS{Name:t,Client:l[COMPS],Owner:l[TEAM],Stage:l[STAGE],Start:d,End:d,Status:s[Act/Done/Hold/Canc],Budget:c,Billed:c,Remain:f[Budget-Billed],Compl:n,Desc:l,N:l,Contacts:l[CORPS],Comms:l[COMMS]}

CORPS{Contact:l[CONTACTS],Company:l[COMPS],Title:t,Dept:t,Decision:c,Primary:c,N:l,Projs:l[PROJS]}

COMMS{Contact:l[CONTACTS],Date:dt,Type:s[Email/Call/Meet],Member:l[TEAM],N:l,Related:l[PROJS,PRODS],Follow:c,FDate:d,FNote:l}

COMPS{Name:t,Ind:s,Web:url,VAT:t,Contact:lkp[CONTACTS],Size:s[S/M/L/XL],Created:d[a],Addr:l,City:t,Country:s,N:l,Contacts:l[CORPS],Projs:l[PROJS],Don:l[DON],ProjVal:r[SUM(Projs)],ActProj:cnt}

COACH{Client:l[CONTACTS],Prod:l[PRODS],Date:dt,Status:s[Sched/Done/Canc],SessNum:n,TotSess:n,Prog:f[SessNum/TotSess],N:l,Tasks:l,NextDate:d}

BUYS{Cust:l[CONTACTS],Prod:l[PRODS],Date:d,Amt:c,Status:s[Act/Done/Canc],Inv:t,Pay:s[Paid/Due/Late],Method:s,N:l}

PRODS{Name:t,Type:s[Course/Coach/Consult],Tier:s[Std/Pro],Price:c,Desc:l,Status:s[On/Off],Sess:n,Weeks:n,Created:d,Updated:d,Buys:l[BUYS],BuyCnt:cnt,Rev:r[SUM(Buys)]}

TEAM{Name:t,Email:em,Role:s,Dept:s,Projs:l[PROJS],Comms:l[COMMS],ProjCnt:cnt,ProjVal:r}

DON{Donor:l[CONTACTS,COMPS],Type:s[Indiv/Corp],Date:d,Amt:c,Camp:s,Freq:s[Once/Month/Year],Recur:c,N:l,Receipt:c,Thanks:c}

STAGE{Name:t,Order:n,Desc:l,Odds:pct,DaysAvg:n,ProjCnt:cnt,Val:r[SUM(Projs)]}

MAIL{Consent:c,Status:s[Sub/Unsub],LastSent:d,OpenRate:pct}
```