"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Button } from "./ui/button";


type MatrixEntry = {
    anchor: string,
    dmc: string
}

export const matrix: MatrixEntry[] = [
    {
        anchor: "001",
        dmc: "5200",
    },
    {
        anchor: "002",
        dmc: "White",
    },
    {
        anchor: "006",
        dmc: "353",
    },
    {
        anchor: "008",
        dmc: "3824",
    },
    {
        anchor: "009",
        dmc: "352",
    },
    {
        anchor: "010",
        dmc: "351",
    },
    {
        anchor: "011",
        dmc: "350",
    },
    {
        anchor: "013",
        dmc: "817",
    },
    {
        anchor: "019",
        dmc: "304",
    },
    {
        anchor: "020",
        dmc: "816",
    },
    {
        anchor: "022",
        dmc: "815",
    },
    {
        anchor: "023",
        dmc: "963",
    },
    {
        anchor: "024",
        dmc: "776",
    },
    {
        anchor: "025",
        dmc: "3716",
    },
    {
        anchor: "026",
        dmc: "894",
    },
    {
        anchor: "027",
        dmc: "893",
    },
    {
        anchor: "028",
        dmc: "956",
    },
    {
        anchor: "029",
        dmc: "891",
    },
    {
        anchor: "031",
        dmc: "3708",
    },
    {
        anchor: "033",
        dmc: "3706",
    },
    {
        anchor: "035",
        dmc: "3705",
    },
    {
        anchor: "036",
        dmc: "3326",
    },
    {
        anchor: "038",
        dmc: "956",
    },
    {
        anchor: "039",
        dmc: "309",
    },
    {
        anchor: "040",
        dmc: "956",
    },
    {
        anchor: "041",
        dmc: "893",
    },
    {
        anchor: "042",
        dmc: "309",
    },
    {
        anchor: "043",
        dmc: "815",
    },
    {
        anchor: "044",
        dmc: "815",
    },
    {
        anchor: "045",
        dmc: "814",
    },
    {
        anchor: "046",
        dmc: "666",
    },
    {
        anchor: "047",
        dmc: "321",
    },
    {
        anchor: "048",
        dmc: "818",
    },
    {
        anchor: "049",
        dmc: "3689",
    },
    {
        anchor: "050",
        dmc: "957",
    },
    {
        anchor: "052",
        dmc: "899",
    },
    {
        anchor: "054",
        dmc: "956",
    },
    {
        anchor: "055",
        dmc: "604",
    },
    {
        anchor: "057",
        dmc: "601",
    },
    {
        anchor: "059",
        dmc: "3350",
    },
    {
        anchor: "060",
        dmc: "3688",
    },
    {
        anchor: "062",
        dmc: "603",
    },
    {
        anchor: "063",
        dmc: "602",
    },
    {
        anchor: "065",
        dmc: "3350",
    },
    {
        anchor: "066",
        dmc: "3688",
    },
    {
        anchor: "068",
        dmc: "3687",
    },
    {
        anchor: "069",
        dmc: "3803",
    },
    {
        anchor: "070",
        dmc: "3685",
    },
    {
        anchor: "072",
        dmc: "3865",
    },
    {
        anchor: "073",
        dmc: "963",
    },
    {
        anchor: "074",
        dmc: "605",
    },
    {
        anchor: "075",
        dmc: "3733",
    },
    {
        anchor: "076",
        dmc: "3687",
    },
    {
        anchor: "077",
        dmc: "3687",
    },
    {
        anchor: "078",
        dmc: "917",
    },
    {
        anchor: "085",
        dmc: "3609",
    },
    {
        anchor: "086",
        dmc: "3608",
    },
    {
        anchor: "087",
        dmc: "3607",
    },
    {
        anchor: "088",
        dmc: "917",
    },
    {
        anchor: "089",
        dmc: "718",
    },
    {
        anchor: "090",
        dmc: "3836",
    },
    {
        anchor: "092",
        dmc: "553",
    },
    {
        anchor: "094",
        dmc: "917",
    },
    {
        anchor: "095",
        dmc: "3609",
    },
    {
        anchor: "096",
        dmc: "3608",
    },
    {
        anchor: "097",
        dmc: "554",
    },
    {
        anchor: "098",
        dmc: "553",
    },
    {
        anchor: "099",
        dmc: "552",
    },
    {
        anchor: "100",
        dmc: "327",
    },
    {
        anchor: "101",
        dmc: "550",
    },
    {
        anchor: "102",
        dmc: "550",
    },
    {
        anchor: "103",
        dmc: "211",
    },
    {
        anchor: "108",
        dmc: "210",
    },
    {
        anchor: "109",
        dmc: "209",
    },
    {
        anchor: "110",
        dmc: "208",
    },
    {
        anchor: "111",
        dmc: "208",
    },
    {
        anchor: "112",
        dmc: "3837",
    },
    {
        anchor: "117",
        dmc: "341",
    },
    {
        anchor: "118",
        dmc: "340",
    },
    {
        anchor: "119",
        dmc: "3840",
    },
    {
        anchor: "120",
        dmc: "3747",
    },
    {
        anchor: "121",
        dmc: "794",
    },
    {
        anchor: "122",
        dmc: "3807",
    },
    {
        anchor: "123",
        dmc: "791",
    },
    {
        anchor: "127",
        dmc: "823",
    },
    {
        anchor: "128",
        dmc: "3756",
    },
    {
        anchor: "129",
        dmc: "3325",
    },
    {
        anchor: "130",
        dmc: "799",
    },
    {
        anchor: "131",
        dmc: "798",
    },
    {
        anchor: "132",
        dmc: "797",
    },
    {
        anchor: "133",
        dmc: "796",
    },
    {
        anchor: "134",
        dmc: "820",
    },
    {
        anchor: "136",
        dmc: "799",
    },
    {
        anchor: "137",
        dmc: "798",
    },
    {
        anchor: "139",
        dmc: "797",
    },
    {
        anchor: "140",
        dmc: "3755",
    },
    {
        anchor: "142",
        dmc: "798",
    },
    {
        anchor: "143",
        dmc: "797",
    },
    {
        anchor: "144",
        dmc: "800",
    },
    {
        anchor: "145",
        dmc: "799",
    },
    {
        anchor: "146",
        dmc: "798",
    },
    {
        anchor: "147",
        dmc: "797",
    },
    {
        anchor: "148",
        dmc: "311",
    },
    {
        anchor: "149",
        dmc: "336",
    },
    {
        anchor: "150",
        dmc: "336",
    },
    {
        anchor: "152",
        dmc: "939",
    },
    {
        anchor: "158",
        dmc: "747",
    },
    {
        anchor: "159",
        dmc: "827",
    },
    {
        anchor: "160",
        dmc: "827",
    },
    {
        anchor: "161",
        dmc: "813",
    },
    {
        anchor: "162",
        dmc: "517",
    },
    {
        anchor: "164",
        dmc: "824",
    },
    {
        anchor: "167",
        dmc: "598",
    },
    {
        anchor: "168",
        dmc: "807",
    },
    {
        anchor: "169",
        dmc: "806",
    },
    {
        anchor: "170",
        dmc: "3765",
    },
    {
        anchor: "175",
        dmc: "794",
    },
    {
        anchor: "176",
        dmc: "793",
    },
    {
        anchor: "177",
        dmc: "792",
    },
    {
        anchor: "178",
        dmc: "791",
    },
    {
        anchor: "185",
        dmc: "964",
    },
    {
        anchor: "186",
        dmc: "959",
    },
    {
        anchor: "187",
        dmc: "958",
    },
    {
        anchor: "188",
        dmc: "3812",
    },
    {
        anchor: "189",
        dmc: "991",
    },
    {
        anchor: "203",
        dmc: "954",
    },
    {
        anchor: "204",
        dmc: "913",
    },
    {
        anchor: "205",
        dmc: "911",
    },
    {
        anchor: "206",
        dmc: "564",
    },
    {
        anchor: "208",
        dmc: "563",
    },
    {
        anchor: "209",
        dmc: "912",
    },
    {
        anchor: "210",
        dmc: "562",
    },
    {
        anchor: "211",
        dmc: "918",
    },
    {
        anchor: "212",
        dmc: "561",
    },
    {
        anchor: "213",
        dmc: "504",
    },
    {
        anchor: "214",
        dmc: "368",
    },
    {
        anchor: "215",
        dmc: "320",
    },
    {
        anchor: "216",
        dmc: "562",
    },
    {
        anchor: "217",
        dmc: "367",
    },
    {
        anchor: "218",
        dmc: "319",
    },
    {
        anchor: "225",
        dmc: "702",
    },
    {
        anchor: "226",
        dmc: "702",
    },
    {
        anchor: "227",
        dmc: "701",
    },
    {
        anchor: "228",
        dmc: "700",
    },
    {
        anchor: "229",
        dmc: "910",
    },
    {
        anchor: "230",
        dmc: "909",
    },
    {
        anchor: "231",
        dmc: "453",
    },
    {
        anchor: "232",
        dmc: "452",
    },
    {
        anchor: "233",
        dmc: "451",
    },
    {
        anchor: "234",
        dmc: "762",
    },
    {
        anchor: "235",
        dmc: "414",
    },
    {
        anchor: "236",
        dmc: "3799",
    },
    {
        anchor: "238",
        dmc: "703",
    },
    {
        anchor: "239",
        dmc: "702",
    },
    {
        anchor: "240",
        dmc: "966",
    },
    {
        anchor: "241",
        dmc: "989",
    },
    {
        anchor: "242",
        dmc: "989",
    },
    {
        anchor: "243",
        dmc: "988",
    },
    {
        anchor: "244",
        dmc: "987",
    },
    {
        anchor: "245",
        dmc: "987",
    },
    {
        anchor: "246",
        dmc: "986",
    },
    {
        anchor: "253",
        dmc: "472",
    },
    {
        anchor: "254",
        dmc: "472",
    },
    {
        anchor: "255",
        dmc: "907",
    },
    {
        anchor: "256",
        dmc: "906",
    },
    {
        anchor: "257",
        dmc: "905",
    },
    {
        anchor: "258",
        dmc: "904",
    },
    {
        anchor: "259",
        dmc: "772",
    },
    {
        anchor: "260",
        dmc: "3364",
    },
    {
        anchor: "261",
        dmc: "3053",
    },
    {
        anchor: "262",
        dmc: "3052",
    },
    {
        anchor: "263",
        dmc: "3362",
    },
    {
        anchor: "264",
        dmc: "3348",
    },
    {
        anchor: "265",
        dmc: "3348",
    },
    {
        anchor: "266",
        dmc: "471",
    },
    {
        anchor: "267",
        dmc: "469",
    },
    {
        anchor: "268",
        dmc: "937",
    },
    {
        anchor: "269",
        dmc: "936",
    },
    {
        anchor: "271",
        dmc: "819",
    },
    {
        anchor: "273",
        dmc: "645",
    },
    {
        anchor: "274",
        dmc: "928",
    },
    {
        anchor: "275",
        dmc: "746",
    },
    {
        anchor: "276",
        dmc: "543",
    },
    {
        anchor: "277",
        dmc: "830",
    },
    {
        anchor: "278",
        dmc: "3819",
    },
    {
        anchor: "279",
        dmc: "734",
    },
    {
        anchor: "280",
        dmc: "733",
    },
    {
        anchor: "281",
        dmc: "732",
    },
    {
        anchor: "288",
        dmc: "445",
    },
    {
        anchor: "289",
        dmc: "307",
    },
    {
        anchor: "290",
        dmc: "444",
    },
    {
        anchor: "291",
        dmc: "444",
    },
    {
        anchor: "292",
        dmc: "3078",
    },
    {
        anchor: "293",
        dmc: "727",
    },
    {
        anchor: "295",
        dmc: "726",
    },
    {
        anchor: "297",
        dmc: "973",
    },
    {
        anchor: "298",
        dmc: "972",
    },
    {
        anchor: "300",
        dmc: "745",
    },
    {
        anchor: "301",
        dmc: "744",
    },
    {
        anchor: "302",
        dmc: "743",
    },
    {
        anchor: "303",
        dmc: "742",
    },
    {
        anchor: "304",
        dmc: "741",
    },
    {
        anchor: "305",
        dmc: "725",
    },
    {
        anchor: "306",
        dmc: "3820",
    },
    {
        anchor: "307",
        dmc: "783",
    },
    {
        anchor: "308",
        dmc: "782",
    },
    {
        anchor: "309",
        dmc: "781",
    },
    {
        anchor: "310",
        dmc: "434",
    },
    {
        anchor: "311",
        dmc: "3827",
    },
    {
        anchor: "313",
        dmc: "977",
    },
    {
        anchor: "314",
        dmc: "741",
    },
    {
        anchor: "316",
        dmc: "971",
    },
    {
        anchor: "323",
        dmc: "722",
    },
    {
        anchor: "324",
        dmc: "721",
    },
    {
        anchor: "326",
        dmc: "720",
    },
    {
        anchor: "328",
        dmc: "3341",
    },
    {
        anchor: "329",
        dmc: "3340",
    },
    {
        anchor: "330",
        dmc: "947",
    },
    {
        anchor: "332",
        dmc: "946",
    },
    {
        anchor: "333",
        dmc: "900",
    },
    {
        anchor: "334",
        dmc: "606",
    },
    {
        anchor: "335",
        dmc: "606",
    },
    {
        anchor: "336",
        dmc: "3341",
    },
    {
        anchor: "337",
        dmc: "3778",
    },
    {
        anchor: "338",
        dmc: "3778",
    },
    {
        anchor: "339",
        dmc: "920",
    },
    {
        anchor: "340",
        dmc: "919",
    },
    {
        anchor: "341",
        dmc: "918",
    },
    {
        anchor: "342",
        dmc: "211",
    },
    {
        anchor: "343",
        dmc: "3752",
    },
    {
        anchor: "347",
        dmc: "3064",
    },
    {
        anchor: "349",
        dmc: "301",
    },
    {
        anchor: "351",
        dmc: "400",
    },
    {
        anchor: "352",
        dmc: "300",
    },
    {
        anchor: "355",
        dmc: "975",
    },
    {
        anchor: "357",
        dmc: "433",
    },
    {
        anchor: "358",
        dmc: "433",
    },
    {
        anchor: "359",
        dmc: "801",
    },
    {
        anchor: "360",
        dmc: "898",
    },
    {
        anchor: "361",
        dmc: "738",
    },
    {
        anchor: "362",
        dmc: "437",
    },
    {
        anchor: "363",
        dmc: "977",
    },
    {
        anchor: "365",
        dmc: "435",
    },
    {
        anchor: "366",
        dmc: "951",
    },
    {
        anchor: "367",
        dmc: "738",
    },
    {
        anchor: "368",
        dmc: "437",
    },
    {
        anchor: "369",
        dmc: "402",
    },
    {
        anchor: "370",
        dmc: "434",
    },
    {
        anchor: "371",
        dmc: "975",
    },
    {
        anchor: "372",
        dmc: "738",
    },
    {
        anchor: "373",
        dmc: "3828",
    },
    {
        anchor: "374",
        dmc: "420",
    },
    {
        anchor: "375",
        dmc: "869",
    },
    {
        anchor: "376",
        dmc: "3776",
    },
    {
        anchor: "378",
        dmc: "841",
    },
    {
        anchor: "379",
        dmc: "840",
    },
    {
        anchor: "380",
        dmc: "838",
    },
    {
        anchor: "381",
        dmc: "938",
    },
    {
        anchor: "382",
        dmc: "3371",
    },
    {
        anchor: "386",
        dmc: "3823",
    },
    {
        anchor: "387",
        dmc: "Ecru",
    },
    {
        anchor: "388",
        dmc: "842",
    },
    {
        anchor: "390",
        dmc: "822",
    },
    {
        anchor: "391",
        dmc: "3033",
    },
    {
        anchor: "392",
        dmc: "642",
    },
    {
        anchor: "393",
        dmc: "3790",
    },
    {
        anchor: "397",
        dmc: "3024",
    },
    {
        anchor: "398",
        dmc: "415",
    },
    {
        anchor: "399",
        dmc: "318",
    },
    {
        anchor: "400",
        dmc: "317",
    },
    {
        anchor: "401",
        dmc: "413",
    },
    {
        anchor: "403",
        dmc: "310",
    },
    {
        anchor: "410",
        dmc: "995",
    },
    {
        anchor: "433",
        dmc: "996",
    },
    {
        anchor: "681",
        dmc: "3051",
    },
    {
        anchor: "683",
        dmc: "500",
    },
    {
        anchor: "778",
        dmc: "3774",
    },
    {
        anchor: "779",
        dmc: "3768",
    },
    {
        anchor: "830",
        dmc: "644",
    },
    {
        anchor: "831",
        dmc: "613",
    },
    {
        anchor: "832",
        dmc: "612",
    },
    {
        anchor: "842",
        dmc: "3013",
    },
    {
        anchor: "843",
        dmc: "3012",
    },
    {
        anchor: "844",
        dmc: "3012",
    },
    {
        anchor: "845",
        dmc: "730",
    },
    {
        anchor: "846",
        dmc: "3011",
    },
    {
        anchor: "847",
        dmc: "3072",
    },
    {
        anchor: "848",
        dmc: "927",
    },
    {
        anchor: "849",
        dmc: "927",
    },
    {
        anchor: "850",
        dmc: "926",
    },
    {
        anchor: "851",
        dmc: "924",
    },
    {
        anchor: "852",
        dmc: "3047",
    },
    {
        anchor: "853",
        dmc: "372",
    },
    {
        anchor: "854",
        dmc: "371",
    },
    {
        anchor: "855",
        dmc: "370",
    },
    {
        anchor: "856",
        dmc: "370",
    },
    {
        anchor: "858",
        dmc: "524",
    },
    {
        anchor: "859",
        dmc: "523",
    },
    {
        anchor: "860",
        dmc: "522",
    },
    {
        anchor: "861",
        dmc: "935",
    },
    {
        anchor: "862",
        dmc: "520",
    },
    {
        anchor: "868",
        dmc: "3779",
    },
    {
        anchor: "869",
        dmc: "3743",
    },
    {
        anchor: "870",
        dmc: "3042",
    },
    {
        anchor: "871",
        dmc: "3041",
    },
    {
        anchor: "872",
        dmc: "3740",
    },
    {
        anchor: "873",
        dmc: "3740",
    },
    {
        anchor: "874",
        dmc: "834",
    },
    {
        anchor: "875",
        dmc: "3817",
    },
    {
        anchor: "876",
        dmc: "3816",
    },
    {
        anchor: "877",
        dmc: "3815",
    },
    {
        anchor: "878",
        dmc: "501",
    },
    {
        anchor: "879",
        dmc: "500",
    },
    {
        anchor: "880",
        dmc: "951",
    },
    {
        anchor: "881",
        dmc: "945",
    },
    {
        anchor: "882",
        dmc: "758",
    },
    {
        anchor: "883",
        dmc: "3064",
    },
    {
        anchor: "884",
        dmc: "920",
    },
    {
        anchor: "885",
        dmc: "739",
    },
    {
        anchor: "886",
        dmc: "677",
    },
    {
        anchor: "887",
        dmc: "3046",
    },
    {
        anchor: "888",
        dmc: "3045",
    },
    {
        anchor: "889",
        dmc: "610",
    },
    {
        anchor: "890",
        dmc: "729",
    },
    {
        anchor: "891",
        dmc: "676",
    },
    {
        anchor: "892",
        dmc: "225",
    },
    {
        anchor: "893",
        dmc: "224",
    },
    {
        anchor: "894",
        dmc: "224",
    },
    {
        anchor: "895",
        dmc: "223",
    },
    {
        anchor: "896",
        dmc: "3721",
    },
    {
        anchor: "897",
        dmc: "221",
    },
    {
        anchor: "898",
        dmc: "611",
    },
    {
        anchor: "899",
        dmc: "3782",
    },
    {
        anchor: "900",
        dmc: "648",
    },
    {
        anchor: "901",
        dmc: "680",
    },
    {
        anchor: "903",
        dmc: "3032",
    },
    {
        anchor: "905",
        dmc: "3021",
    },
    {
        anchor: "906",
        dmc: "829",
    },
    {
        anchor: "907",
        dmc: "832",
    },
    {
        anchor: "914",
        dmc: "407",
    },
    {
        anchor: "920",
        dmc: "932",
    },
    {
        anchor: "921",
        dmc: "931",
    },
    {
        anchor: "922",
        dmc: "930",
    },
    {
        anchor: "923",
        dmc: "699",
    },
    {
        anchor: "924",
        dmc: "731",
    },
    {
        anchor: "926",
        dmc: "712",
    },
    {
        anchor: "928",
        dmc: "3761",
    },
    {
        anchor: "933",
        dmc: "543",
    },
    {
        anchor: "936",
        dmc: "632",
    },
    {
        anchor: "939",
        dmc: "3755",
    },
    {
        anchor: "940",
        dmc: "824",
    },
    {
        anchor: "941",
        dmc: "792",
    },
    {
        anchor: "942",
        dmc: "738",
    },
    {
        anchor: "943",
        dmc: "422",
    },
    {
        anchor: "944",
        dmc: "869",
    },
    {
        anchor: "945",
        dmc: "834",
    },
    {
        anchor: "956",
        dmc: "613",
    },
    {
        anchor: "968",
        dmc: "778",
    },
    {
        anchor: "969",
        dmc: "223",
    },
    {
        anchor: "970",
        dmc: "3687",
    },
    {
        anchor: "972",
        dmc: "3803",
    },
    {
        anchor: "975",
        dmc: "828",
    },
    {
        anchor: "976",
        dmc: "3752",
    },
    {
        anchor: "977",
        dmc: "334",
    },
    {
        anchor: "978",
        dmc: "322",
    },
    {
        anchor: "979",
        dmc: "312",
    },
    {
        anchor: "1001",
        dmc: "976",
    },
    {
        anchor: "1002",
        dmc: "977",
    },
    {
        anchor: "1003",
        dmc: "922",
    },
    {
        anchor: "1004",
        dmc: "920",
    },
    {
        anchor: "1005",
        dmc: "816",
    },
    {
        anchor: "1006",
        dmc: "304",
    },
    {
        anchor: "1007",
        dmc: "3772",
    },
    {
        anchor: "1008",
        dmc: "3773",
    },
    {
        anchor: "1009",
        dmc: "3770",
    },
    {
        anchor: "1010",
        dmc: "951",
    },
    {
        anchor: "1011",
        dmc: "948",
    },
    {
        anchor: "1012",
        dmc: "754",
    },
    {
        anchor: "1013",
        dmc: "3778",
    },
    {
        anchor: "1014",
        dmc: "355",
    },
    {
        anchor: "1015",
        dmc: "3777",
    },
    {
        anchor: "1016",
        dmc: "3727",
    },
    {
        anchor: "1017",
        dmc: "316",
    },
    {
        anchor: "1018",
        dmc: "3726",
    },
    {
        anchor: "1019",
        dmc: "315",
    },
    {
        anchor: "1020",
        dmc: "3713",
    },
    {
        anchor: "1021",
        dmc: "761",
    },
    {
        anchor: "1022",
        dmc: "760",
    },
    {
        anchor: "1023",
        dmc: "3712",
    },
    {
        anchor: "1024",
        dmc: "3328",
    },
    {
        anchor: "1025",
        dmc: "347",
    },
    {
        anchor: "1026",
        dmc: "225",
    },
    {
        anchor: "1027",
        dmc: "3722",
    },
    {
        anchor: "1028",
        dmc: "3685",
    },
    {
        anchor: "1029",
        dmc: "915",
    },
    {
        anchor: "1030",
        dmc: "3746",
    },
    {
        anchor: "1031",
        dmc: "3753",
    },
    {
        anchor: "1032",
        dmc: "3752",
    },
    {
        anchor: "1033",
        dmc: "932",
    },
    {
        anchor: "1034",
        dmc: "931",
    },
    {
        anchor: "1035",
        dmc: "930",
    },
    {
        anchor: "1036",
        dmc: "3750",
    },
    {
        anchor: "1037",
        dmc: "3756",
    },
    {
        anchor: "1038",
        dmc: "519",
    },
    {
        anchor: "1039",
        dmc: "518",
    },
    {
        anchor: "1040",
        dmc: "647",
    },
    {
        anchor: "1041",
        dmc: "844",
    },
    {
        anchor: "1042",
        dmc: "504",
    },
    {
        anchor: "1043",
        dmc: "369",
    },
    {
        anchor: "1044",
        dmc: "895",
    },
    {
        anchor: "1045",
        dmc: "436",
    },
    {
        anchor: "1046",
        dmc: "435",
    },
    {
        anchor: "1047",
        dmc: "402",
    },
    {
        anchor: "1048",
        dmc: "3776",
    },
    {
        anchor: "1049",
        dmc: "301",
    },
    {
        anchor: "1050",
        dmc: "3781",
    },
    {
        anchor: "1060",
        dmc: "3811",
    },
    {
        anchor: "1062",
        dmc: "598",
    },
    {
        anchor: "1064",
        dmc: "597",
    },
    {
        anchor: "1066",
        dmc: "3809",
    },
    {
        anchor: "1068",
        dmc: "3808",
    },
    {
        anchor: "1070",
        dmc: "993",
    },
    {
        anchor: "1072",
        dmc: "992",
    },
    {
        anchor: "1074",
        dmc: "3814",
    },
    {
        anchor: "1076",
        dmc: "991",
    },
    {
        anchor: "1080",
        dmc: "842",
    },
    {
        anchor: "1082",
        dmc: "841",
    },
    {
        anchor: "1084",
        dmc: "840",
    },
    {
        anchor: "1086",
        dmc: "839",
    },
    {
        anchor: "1088",
        dmc: "838",
    },
    {
        anchor: "1089",
        dmc: "3843",
    },
    {
        anchor: "1090",
        dmc: "996",
    },
    {
        anchor: "1092",
        dmc: "964",
    },
    {
        anchor: "1094",
        dmc: "605",
    },
    {
        anchor: "1096",
        dmc: "3753",
    },
    {
        anchor: "1098",
        dmc: "3801",
    },
    {
        anchor: "1200",
        dmc: "62",
    },
    {
        anchor: "1201",
        dmc: "48",
    },
    {
        anchor: "1202",
        dmc: "112",
    },
    {
        anchor: "1203",
        dmc: "57",
    },
    {
        anchor: "1204",
        dmc: "107",
    },
    {
        anchor: "1206",
        dmc: "115",
    },
    {
        anchor: "1207",
        dmc: "99",
    },
    {
        anchor: "1208",
        dmc: "95",
    },
    {
        anchor: "1209",
        dmc: "126",
    },
    {
        anchor: "1210",
        dmc: "121",
    },
    {
        anchor: "1211",
        dmc: "93",
    },
    {
        anchor: "1212",
        dmc: "67",
    },
    {
        anchor: "1213",
        dmc: "101",
    },
    {
        anchor: "1214",
        dmc: "125",
    },
    {
        anchor: "1215",
        dmc: "114",
    },
    {
        anchor: "1216",
        dmc: "94",
    },
    {
        anchor: "1217",
        dmc: "104",
    },
    {
        anchor: "1218",
        dmc: "105",
    },
    {
        anchor: "1219",
        dmc: "108",
    },
    {
        anchor: "1220",
        dmc: "51",
    },
    {
        anchor: "1223",
        dmc: "53",
    },
    {
        anchor: "1243",
        dmc: "111",
    },
    {
        anchor: "4146",
        dmc: "950",
    },
    {
        anchor: "5975",
        dmc: "3830",
    },
    {
        anchor: "8581",
        dmc: "3022",
    },
    {
        anchor: "9046",
        dmc: "321",
    },
    {
        anchor: "9159",
        dmc: "828",
    },
    {
        anchor: "9575",
        dmc: "758",
    }

]



export const Convertor = () => {


    const formSchema = z.object({
        dmc: z.string(),
        anchor: z.string()
    })

    const formRef = useRef<HTMLFormElement>(null);


    const [anchor, setAnchor] = useState(
        matrix[0].anchor
    )

    const [dmc, setDmc] = useState(
        matrix[0].dmc
    )


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            dmc: matrix[0].dmc,
            anchor: matrix[0].anchor
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        if (values.anchor !== anchor)
            setAnchor(values.anchor);
        if (values.dmc !== dmc)
            setDmc(values.dmc);


    }


    useEffect(() => {
        const currentEntry = matrix.find(entry => entry.dmc === dmc);

        if (currentEntry) {
            form.setValue("anchor", currentEntry.anchor);
        }
        else {
            form.setValue("anchor", "");
        }
        setTimeout(() =>
            formRef.current?.dispatchEvent(new Event('submit', {
                'bubbles': true, // Whether the event will bubble up through the DOM or not
                'cancelable': true  // Whether the event may be canceled or not
            })), 1);
    }, [dmc])

    useEffect(() => {
        const currentEntry = matrix.find(entry => entry.anchor === anchor.padStart(3,'0'));

        if (currentEntry) {
            form.setValue("dmc", currentEntry.dmc);
        }
        else {
            form.setValue("dmc", "");
        }

        setTimeout(() =>
            formRef.current?.dispatchEvent(new Event('submit', {
                'bubbles': true, // Whether the event will bubble up through the DOM or not
                'cancelable': true  // Whether the event may be canceled or not
            })), 1);


    }, [anchor])



    return (
        <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                <Card>
                    <CardHeader>
                        <CardTitle>DMC</CardTitle>
                        <CardDescription>Saisir une valeur DMC</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="dmc"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>


                <Card>
                    <CardHeader>
                        <CardTitle>Anchor</CardTitle>
                        <CardDescription>Saisir une valeur anchor</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="anchor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <div className="grid grid-cols-subgrid gap-4 md:col-span-2 lg:col-span-3">
                    <Button type="submit">Convertir</Button>
                </div>



            </form>

        </Form>
    )
}