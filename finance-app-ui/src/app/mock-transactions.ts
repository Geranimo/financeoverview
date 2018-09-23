import { Transaction } from "./transaction";
import { transition } from "@angular/core";
import { TransactionsService } from "./transactions.service";

export const MockTransactionsWithoutTag: Transaction[] = [
  {
    Payment: "+500,00",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4377,
    BalanceAfter: "+948,55",
    Description: " ",
    tag: "",
    NameCounterParty: "S. KANDASAMY SEKAR"
  },
  {
    Payment: "-23,00",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4378,
    BalanceAfter: "+925,55",
    Description:
      "Relatienr: 1510053, 2132 RX, 14, Termijnfactuur: 264629278, Periode: februari, BTW: 1.30",
    tag: "",
    NameCounterParty: "Nv Pwn Waterleidingbedrijf Noord Holland"
  },
  {
    Payment: "-39,62",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4379,
    BalanceAfter: "+885,93",
    Description: "Polisnr.: 27043205 01.02.2018 -01.03.2018",
    tag: "",
    NameCounterParty: "Nationale-Nederlanden"
  },
  {
    Payment: "-50,00",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4380,
    BalanceAfter: "+835,93",
    Description: "Geldautomaat 13:45 pasnr. 005",
    tag: "",
    NameCounterParty: "NIEUWEWEG 63 2132 CM63 HOOFDDORP"
  },
  {
    Payment: "-5,10",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4381,
    BalanceAfter: "+830,83",
    Description: "Betaalautomaat 13:58 pasnr. 005",
    tag: "",
    NameCounterParty: "Super Kalite Market HOOFDDORP"
  },
  {
    Payment: "-15,55",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4382,
    BalanceAfter: "+815,28",
    Description: "Betaalautomaat 15:01 pasnr. 005",
    tag: "",
    NameCounterParty: "Bakkerij Gorthuis BV HOOFDDORP"
  },
  {
    Payment: "-20,00",
    Date: "2018-02-02",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4383,
    BalanceAfter: "+795,28",
    Description:
      "Automatisch opladen OV-chipkaart Kaartnummer:3528020055843044 Oplaaddatum/tijd:30-01-18 18:24",
    tag: "",
    NameCounterParty: "TLS BV INZ. OV-CHIPKAART"
  },
  {
    Payment: "-107,50",
    Date: "2018-02-02",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4384,
    BalanceAfter: "+687,78",
    Description:
      "IAK Verzekeringen B.V.. Zorgverzekering(en) SV6. Polis 1206812. Februari 2018 t/m februari 2018",
    tag: "",
    NameCounterParty: "IAK VOLMACHT BV"
  },
  {
    Payment: "-27,00",
    Date: "2018-02-02",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4385,
    BalanceAfter: "+660,78",
    Description: "Betaalautomaat 13:24 pasnr. 005",
    tag: "atm",
    NameCounterParty: "Jacob van Zoest BUNSCHOTEN-SP"
  },
  {
    Payment: "-16,95",
    Date: "2018-02-02",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4386,
    BalanceAfter: "+643,83",
    Description: "Betaalautomaat 13:32 pasnr. 005",
    tag: "",
    NameCounterParty: "CCV*FIRMA SMIT LEIDERDORP"
  }
];


export const MockTransactions: Transaction[] = [
  {
    Payment: "+500,00",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4377,
    BalanceAfter: "+948,55",
    Description: " ",
    tag: "energy",
    NameCounterParty: "S. KANDASAMY SEKAR"
  },
  {
    Payment: "-23,00",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4378,
    BalanceAfter: "+925,55",
    Description:
      "Relatienr: 1510053, 2132 RX, 14, Termijnfactuur: 264629278, Periode: februari, BTW: 1.30",
    tag: "energy",
    NameCounterParty: "Nv Pwn Waterleidingbedrijf Noord Holland"
  },
  {
    Payment: "-39,62",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4379,
    BalanceAfter: "+885,93",
    Description: "Polisnr.: 27043205 01.02.2018 -01.03.2018",
    tag: "insurance",
    NameCounterParty: "Nationale-Nederlanden"
  },
  {
    Payment: "-50,00",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4380,
    BalanceAfter: "+835,93",
    Description: "Geldautomaat 13:45 pasnr. 005",
    tag: "atm",
    NameCounterParty: "NIEUWEWEG 63 2132 CM63 HOOFDDORP"
  },
  {
    Payment: "-5,10",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4381,
    BalanceAfter: "+830,83",
    Description: "Betaalautomaat 13:58 pasnr. 005",
    tag: "groceries",
    NameCounterParty: "Super Kalite Market HOOFDDORP"
  },
  {
    Payment: "-15,55",
    Date: "2018-02-01",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4382,
    BalanceAfter: "+815,28",
    Description: "Betaalautomaat 15:01 pasnr. 005",
    tag: "food",
    NameCounterParty: "Bakkerij Gorthuis BV HOOFDDORP"
  },
  {
    Payment: "-20,00",
    Date: "2018-02-02",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4383,
    BalanceAfter: "+795,28",
    Description:
      "Automatisch opladen OV-chipkaart Kaartnummer:3528020055843044 Oplaaddatum/tijd:30-01-18 18:24",
    tag: "transport",
    NameCounterParty: "TLS BV INZ. OV-CHIPKAART"
  },
  {
    Payment: "-107,50",
    Date: "2018-02-02",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4384,
    BalanceAfter: "+687,78",
    Description:
      "IAK Verzekeringen B.V.. Zorgverzekering(en) SV6. Polis 1206812. Februari 2018 t/m februari 2018",
    tag: "insurance",
    NameCounterParty: "IAK VOLMACHT BV"
  },
  {
    Payment: "-27,00",
    Date: "2018-02-02",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4385,
    BalanceAfter: "+660,78",
    Description: "Betaalautomaat 13:24 pasnr. 005",
    tag: "atm",
    NameCounterParty: "Jacob van Zoest BUNSCHOTEN-SP"
  },
  {
    Payment: "-16,95",
    Date: "2018-02-02",
    UserIban: "NL32RABO0147457521",
    SequenceNumber: 4386,
    BalanceAfter: "+643,83",
    Description: "Betaalautomaat 13:32 pasnr. 005",
    tag: "atm",
    NameCounterParty: "CCV*FIRMA SMIT LEIDERDORP"
  }
  // {
  //     Payment: "-8,70",
  //     Date: "2018-02-03",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4387,
  //     BalanceAfter: "+635,13",
  //     Description: "Betaalautomaat 21:06 pasnr. 005",
  //     tag: "movies",
  //     NameCounterParty: "CCV*CINEMEERSE BV HOOFDDORP"
  // },
  // {
  //     Payment: "-27,93",
  //     Date: "2018-02-04",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4388,
  //     BalanceAfter: "+607,20",
  //     Description: "Betaalautomaat 16:33 pasnr. 005",
  //     tag: "construction",
  //     NameCounterParty: "Karwei Hoofddorp HOOFDDORP"
  // },
  // {
  //     Payment: "-1,30",
  //     Date: "2018-02-05",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4389,
  //     BalanceAfter: "+605,90",
  //     Description: "Rabo DirectPakket                  Periode 01-02-2018 t/m 28-02-2018",
  //     tag: "atm",
  //     NameCounterParty: "Kosten"
  // },
  // {
  //     Payment: "-2,00",
  //     Date: "2018-02-05",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4390,
  //     BalanceAfter: "+603,90",
  //     Description: "(Extra) RaboCard                   Periode 01-02-2018 t/m 28-02-2018",
  //     tag: "atm",
  //     NameCounterParty: "Kosten"
  // },
  // {
  //     Payment: "-13,25",
  //     Date: "2018-02-05",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4391,
  //     BalanceAfter: "+590,65",
  //     Description: "11475500008048 februari 2018 2132RX014",
  //     NameCounterParty: "NAT POSTCODE LOTERIJ"
  // },
  // {
  //     Payment: "-6,14",
  //     Date: "2018-02-05",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4392,
  //     BalanceAfter: "+584,51",
  //     Description: "NPP0271223   / 01.02.2018",
  //     tag: "insurance",
  //     NameCounterParty: "GENERALI LEVENSVERZ MIJ"
  // },
  // {
  //     Payment: "-31,50",
  //     Date: "2018-02-05",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4393,
  //     BalanceAfter: "+553,01",
  //     Description: "Betaalautomaat 20:43 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "CCV*WOODSTONE PIZZA HO HOOFDDORP"
  // },
  // {
  //     Payment: "-2,30",
  //     Date: "2018-02-06",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4394,
  //     BalanceAfter: "+550,71",
  //     Description: "Betaalautomaat 08:28 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "Kiosk HFD 3105 HOOFDDORP"
  // },
  // {
  //     Payment: "-105,00",
  //     Date: "2018-02-07",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4395,
  //     BalanceAfter: "+445,71",
  //     Description: "100131402812/KLANT 171645080 KNMRK 201371438/FACT 465183970714 DAT. 24012018/Termijn 105,00 BTW 18,22",
  //     tag: "energy",
  //     NameCounterParty: "ESSENT RETAIL ENERG"
  // },
  // {
  //     Payment: "-101,50",
  //     Date: "2018-02-07",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4396,
  //     BalanceAfter: "+344,21",
  //     Description: "Betaalautomaat 19:56 pasnr. 005",
  //     tag: "construction",
  //     NameCounterParty: "Karwei Hoofddorp HOOFDDORP"
  // },
  // {
  //     Payment: "-4,15",
  //     Date: "2018-02-07",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4397,
  //     BalanceAfter: "+340,06",
  //     Description: "Betaalautomaat 21:13 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "KFC Hoofddorp BADHOEVEDORP"
  // },
  // {
  //     Payment: "-2,30",
  //     Date: "2018-02-08",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4398,
  //     BalanceAfter: "+337,76",
  //     Description: "Betaalautomaat 08:53 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "Kiosk HFD 3105 HOOFDDORP"
  // },
  // {
  //     Payment: "-10,00",
  //     Date: "2018-02-08",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4399,
  //     BalanceAfter: "+327,76",
  //     Description: "b8k0nk2q 0140000147142817 Deposit to your bunq-account.",
  //     tag: "bunq",
  //     NameCounterParty: "Bunq B.V."
  // },
  // {
  //     Payment: "-20,00",
  //     Date: "2018-02-09",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4400,
  //     BalanceAfter: "+307,76",
  //     Description: "Automatisch opladen OV-chipkaart Kaartnummer:3528020055843044 Oplaaddatum/tijd:06-02-18 08:26",
  //     tag: "transport",
  //     NameCounterParty: "TLS BV INZ. OV-CHIPKAART"
  // },
  // {
  //     Payment: "-13,30",
  //     Date: "2018-02-10",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4401,
  //     BalanceAfter: "+294,46",
  //     Description: "Betaalautomaat 13:49 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "C&M*SUBWAY HOOFDDORP HOOFDDORP"
  // },
  // {
  //     Payment: "-80,80",
  //     Date: "2018-02-10",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4402,
  //     BalanceAfter: "+213,66",
  //     Description: "Betaalautomaat 15:05 pasnr. 005",
  //     tag: "arts",
  //     NameCounterParty: "Wereldwinkel Hrlmeer HOOFDDORP"
  // },
  // {
  //     Payment: "-2,35",
  //     Date: "2018-02-10",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4403,
  //     BalanceAfter: "+211,31",
  //     Description: "Betaalautomaat 15:36 pasnr. 005",
  //     tag: "groceries",
  //     NameCounterParty: "Super Kalite Market HOOFDDORP"
  // },
  // {
  //     Payment: "-18,49",
  //     Date: "2018-02-10",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4404,
  //     BalanceAfter: "+192,82",
  //     Description: "Betaalautomaat 15:56 pasnr. 005",
  //     NameCounterParty: "ETOS 7942 HOOFDDORP"
  // },
  // {
  //     Payment: "-10,00",
  //     Date: "2018-02-11",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4405,
  //     BalanceAfter: "+182,82",
  //     Description: "b4t540cq 0140000147466399 Deposit to your bunq-account.",
  //     tag: "bunq",
  //     NameCounterParty: "Bunq B.V."
  // },
  // {
  //     Payment: "-20,00",
  //     Date: "2018-02-12",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4406,
  //     BalanceAfter: "+162,82",
  //     Description: "Automatisch opladen OV-chipkaart Kaartnummer:3528020055843044 Oplaaddatum/tijd:08-02-18 08:51",
  //     tag: "transport",
  //     NameCounterParty: "TLS BV INZ. OV-CHIPKAART"
  // },
  // {
  //     Payment: "-10,60",
  //     Date: "2018-02-12",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4407,
  //     BalanceAfter: "+152,22",
  //     Description: "Kenmerk: 3006.6486.9311.0379 Omschrijving: FACT: 111355143 PROLONGATIE IAK Verzekeringen B.V. Klantnr: 70110379",
  //     tag: "insurance",
  //     NameCounterParty: "IAK VOLMACHT BV"
  // },
  // {
  //     Payment: "-10,00",
  //     Date: "2018-02-12",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4408,
  //     BalanceAfter: "+142,22",
  //     Description: "b5f0fnnq 0140000147569221 Deposit to your bunq-account.",
  //     tag: "bunq",
  //     NameCounterParty: "Bunq B.V."
  // },
  // {
  //     Payment: "-3,99",
  //     Date: "2018-02-13",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4409,
  //     BalanceAfter: "+138,23",
  //     Description: "Betaalautomaat 18:36 pasnr. 005",
  //     tag: "groceries",
  //     NameCounterParty: "Aldi 027 HOOFDDORP"
  // },
  // {
  //     Payment: "-3,00",
  //     Date: "2018-02-14",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4410,
  //     BalanceAfter: "+135,23",
  //     Description: "Betaalautomaat 18:26 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "3103 HFD Kiosk HOOFDDORP"
  // },
  // {
  //     Payment: "+183,00",
  //     Date: "2018-02-15",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4411,
  //     BalanceAfter: "+318,23",
  //     Description: "MAAND FEB. NR. 671090537H8001      IB/PVV 2018       (KANDASAMY SE)",
  //     NameCounterParty: "BELASTINGDIENST"
  // },
  // {
  //     Payment: "-11,00",
  //     Date: "2018-02-15",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4412,
  //     BalanceAfter: "+307,23",
  //     Description: "Betaalautomaat 21:29 pasnr. 005",
  //     NameCounterParty: "CCV*KARAS VOF AMSTERDAM"
  // },
  // {
  //     Payment: "-30,30",
  //     Date: "2018-02-16",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4413,
  //     BalanceAfter: "+276,93",
  //     Description: "Factuurnummer 901314535231",
  //     tag: "mobile",
  //     NameCounterParty: "T-MOBILE NETHERLANDS B.V."
  // },
  // {
  //     Payment: "-19,00",
  //     Date: "2018-02-16",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4414,
  //     BalanceAfter: "+257,93",
  //     Description: "Betaalautomaat 19:34 pasnr. 005",
  //     tag: "movies",
  //     NameCounterParty: "CCV*CINEMEERSE BV HOOFDDORP"
  // },
  // {
  //     Payment: "-32,00",
  //     Date: "2018-02-16",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4415,
  //     BalanceAfter: "+225,93",
  //     Description: "Betaalautomaat 21:12 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "Im Aroy HOOFDDORP"
  // },
  // {
  //     Payment: "-8,75",
  //     Date: "2018-02-17",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4416,
  //     BalanceAfter: "+217,18",
  //     Description: "Archana Sekar groceries",
  //     tag: "groceries",
  //     NameCounterParty: "K. Virudhagiri"
  // },
  // {
  //     Payment: "-15,00",
  //     Date: "2018-02-17",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4417,
  //     BalanceAfter: "+202,18",
  //     Description: "Betaalautomaat 12:58 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "Doganlar HOOFDDORP"
  // },
  // {
  //     Payment: "-5,00",
  //     Date: "2018-02-17",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4418,
  //     BalanceAfter: "+197,18",
  //     Description: "Betaalautomaat 19:09 pasnr. 005",
  //     tag: "movies",
  //     NameCounterParty: "CCV*CINEMEERSE BV HOOFDDORP"
  // },
  // {
  //     Payment: "-4,40",
  //     Date: "2018-02-17",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4419,
  //     BalanceAfter: "+192,78",
  //     Description: "Betaalautomaat 20:12 pasnr. 005",
  //     tag: "movies",
  //     NameCounterParty: "CCV*CINEMEERSE BV HOOFDDORP"
  // },
  // {
  //     Payment: "-14,99",
  //     Date: "2018-02-18",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4420,
  //     BalanceAfter: "+177,79",
  //     Description: "Betaalautomaat 17:34 pasnr. 005",
  //     NameCounterParty: "MM Hoofddorp BV HOOFDDORP"
  // },
  // {
  //     Payment: "-3,60",
  //     Date: "2018-02-18",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4421,
  //     BalanceAfter: "+174,19",
  //     Description: "Betaalautomaat 17:49 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "H'dorpsch Friethuys HOOFDDORP"
  // },
  // {
  //     Payment: "-2,80",
  //     Date: "2018-02-18",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4422,
  //     BalanceAfter: "+171,39",
  //     Description: "Betaalautomaat 18:03 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "H'dorpsch Friethuys HOOFDDORP"
  // },
  // {
  //     Payment: "-20,00",
  //     Date: "2018-02-19",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4423,
  //     BalanceAfter: "+151,39",
  //     Description: "Automatisch opladen OV-chipkaart Kaartnummer:3528020055843044 Oplaaddatum/tijd:15-02-18 22:13",
  //     tag: "transport",
  //     NameCounterParty: "TLS BV INZ. OV-CHIPKAART"
  // },
  // {
  //     Payment: "-10,00",
  //     Date: "2018-02-19",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4424,
  //     BalanceAfter: "+141,39",
  //     Description: "Automatisch opladen OV-chipkaart Kaartnummer:3528040014598604 Oplaaddatum/tijd:15-02-18 22:13",
  //     tag: "transport",
  //     NameCounterParty: "TLS BV INZ. OV-CHIPKAART"
  // },
  // {
  //     Payment: "-25,25",
  //     Date: "2018-02-21",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4425,
  //     BalanceAfter: "+116,14",
  //     Description: "Factuurnummer 901314950831",
  //     tag: "mobile",
  //     NameCounterParty: "T-MOBILE NETHERLANDS B.V."
  // },
  // {
  //     Payment: "-2,95",
  //     Date: "2018-02-22",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4426,
  //     BalanceAfter: "+113,19",
  //     Description: "Betaalautomaat 08:23 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "Kiosk HFD 3105 HOOFDDORP"
  // },
  // {
  //     Payment: "+3121,41",
  //     Date: "2018-02-22",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4427,
  //     BalanceAfter: "+3234,60",
  //     Description: "Salary February 2018 Sytac",
  //     tag: "work",
  //     NameCounterParty: "SYTAC BV"
  // },
  // {
  //     Payment: "-10,00",
  //     Date: "2018-02-23",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4428,
  //     BalanceAfter: "+3224,60",
  //     Description: "Hartelijk dank voor uw donatie",
  //     tag: "charity",
  //     NameCounterParty: "ST. HOSPITAALBROEDERS"
  // },
  // {
  //     Payment: "-13,25",
  //     Date: "2018-02-23",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4429,
  //     BalanceAfter: "+3211,35",
  //     Description: "11483202888424 maart 2018 2132RX014",
  //     NameCounterParty: "NAT POSTCODE LOTERIJ"
  // },
  // {
  //     Payment: "-2,40",
  //     Date: "2018-02-23",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4430,
  //     BalanceAfter: "+3208,95",
  //     Description: "Betaalautomaat 09:22 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "KNUSZ KOFFIE HOOFDDORP"
  // },
  // {
  //     Payment: "-24,40",
  //     Date: "2018-02-23",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4431,
  //     BalanceAfter: "+3184,55",
  //     Description: "000020397275 0030002683827531 Rekha NL29ABNA0448294850",
  //     NameCounterParty: "ABN AMRO Bank NV"
  // },
  // {
  //     Payment: "-20,00",
  //     Date: "2018-02-23",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4432,
  //     BalanceAfter: "+3164,55",
  //     Description: "b13p282q 0140000148890525 Deposit to your bunq-account.",
  //     tag: "bunq",
  //     NameCounterParty: "Bunq B.V."
  // },
  // {
  //     Payment: "-8,25",
  //     Date: "2018-02-23",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4433,
  //     BalanceAfter: "+3156,30",
  //     Description: "Betaalautomaat 19:14 pasnr. 005",
  //     tag: "groceries",
  //     NameCounterParty: "Albert Heijn 1534 HOOFDDORP"
  // },
  // {
  //     Payment: "-80,00",
  //     Date: "2018-02-23",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4434,
  //     BalanceAfter: "+3076,30",
  //     Description: "000020481816 0030002686057229 Rekha NL29ABNA0448294850",
  //     NameCounterParty: "ABN AMRO Bank NV"
  // },
  // {
  //     Payment: "-24,00",
  //     Date: "2018-02-23",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4435,
  //     BalanceAfter: "+3052,30",
  //     Description: "BLANKENSTRAAT 14",
  //     NameCounterParty: "S.Alexander"
  // },
  // {
  //     Payment: "-31,00",
  //     Date: "2018-02-24",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4436,
  //     BalanceAfter: "+3021,30",
  //     Description: "Archana Sekar 24th Feb 18",
  //     tag: "groceries",
  //     NameCounterParty: "K. Virudhagiri"
  // },
  // {
  //     Payment: "-7,60",
  //     Date: "2018-02-24",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4437,
  //     BalanceAfter: "+3013,70",
  //     Description: "Betaalautomaat 21:05 pasnr. 005",
  //     tag: "movies",
  //     NameCounterParty: "CCV*CINEMEERSE BV HOOFDDORP"
  // },
  // {
  //     Payment: "-12,28",
  //     Date: "2018-02-25",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4438,
  //     BalanceAfter: "+3001,42",
  //     Description: "Betaalautomaat 13:55 pasnr. 005",
  //     tag: "groceries",
  //     NameCounterParty: "Albert Heijn 1534 HOOFDDORP"
  // },
  // {
  //     Payment: "-10,00",
  //     Date: "2018-02-25",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4439,
  //     BalanceAfter: "+2991,42",
  //     Description: "br90ftcq 0140000148658040 Deposit to your bunq-account.",
  //     tag: "bunq",
  //     NameCounterParty: "Bunq B.V."
  // },
  // {
  //     Payment: "-20,00",
  //     Date: "2018-02-26",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4440,
  //     BalanceAfter: "+2971,42",
  //     Description: "Automatisch opladen OV-chipkaart Kaartnummer:3528020055843044 Oplaaddatum/tijd:22-02-18 08:20",
  //     tag: "transport",
  //     NameCounterParty: "TLS BV INZ. OV-CHIPKAART"
  // },
  // {
  //     Payment: "-10,00",
  //     Date: "2018-02-26",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4441,
  //     BalanceAfter: "+2961,42",
  //     Description: "Automatisch opladen OV-chipkaart Kaartnummer:3528040014598604 Oplaaddatum/tijd:22-02-18 23:31",
  //     tag: "transport",
  //     NameCounterParty: "TLS BV INZ. OV-CHIPKAART"
  // },
  // {
  //     Payment: "-10,00",
  //     Date: "2018-02-26",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4442,
  //     BalanceAfter: "+2951,42",
  //     Description: "Automatisch opladen OV-chipkaart Kaartnummer:3528040014598604 Oplaaddatum/tijd:22-02-18 17:04",
  //     tag: "transport",
  //     NameCounterParty: "TLS BV INZ. OV-CHIPKAART"
  // },
  // {
  //     Payment: "-34,35",
  //     Date: "2018-02-26",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4443,
  //     BalanceAfter: "+2917,07",
  //     Description: "Factuur 21-02-2018 incl. 5,96 BTW, klantnummer 9069723508, KPN.",
  //     tag: "wi-fi",
  //     NameCounterParty: "KPN B.V."
  // },
  // {
  //     Payment: "-15,00",
  //     Date: "2018-02-26",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4444,
  //     BalanceAfter: "+2902,07",
  //     Description: "Hartelijk dank voor uw gift, VSO Nederland.",
  //     tag: "charity",
  //     NameCounterParty: "STICHTING VSO NEDERLAND"
  // },
  // {
  //     Payment: "-1320,09",
  //     Date: "2018-02-27",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4445,
  //     BalanceAfter: "+1581,98",
  //     Description: "Verschuldigd bedrag PERIODE 02-2018",
  //     tag: "mortgage",
  //     NameCounterParty: "Obvion N.V."
  // },
  // {
  //     Payment: "-2,50",
  //     Date: "2018-02-27",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4446,
  //     BalanceAfter: "+1579,48",
  //     Description: "Betaalautomaat 08:21 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "Kiosk HFD 3105 HOOFDDORP"
  // },
  // {
  //     Payment: "-6,50",
  //     Date: "2018-02-27",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4447,
  //     BalanceAfter: "+1572,98",
  //     Description: "Betaalautomaat 12:27 pasnr. 005",
  //     tag: "food",
  //     NameCounterParty: "8010-239-UvAScience AMSTERDAM"
  // },
  // {
  //     Payment: "-365,51",
  //     Date: "2018-02-28",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4448,
  //     BalanceAfter: "+1207,47",
  //     Description: "Kaartnummer: 5209.5307.9625.9467   Zie rekeningoverzicht 27-02-2018",
  //     NameCounterParty: "RABOBANK NEDERLAND"
  // },
  // {
  //     Payment: "-102,00",
  //     Date: "2018-02-28",
  //     UserIban: "NL32RABO0147457521",
  //     SequenceNumber: 4449,
  //     BalanceAfter: "+1105,47",
  //     Description: "Relatienummer 6919804700. Maart 2018.",
  //     tag: "insurance",
  //     NameCounterParty: "AnderZorg NV"
  // }
];
