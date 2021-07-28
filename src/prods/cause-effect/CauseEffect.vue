<template>
  <div id="details" class="container">
    <div class="list">
      <h3 class="h3"><span class="h3__content">Users list</span></h3>
      <table>
        <tr v-for="person of people" :key="person.id">
          <td
            :id="person.name"
            :class="
              'person px-1-rem py-2 ' +
              (null !== current && current.id === person.id ? 'selected' : '')
            "
          >
            <a href="#details" @click="loadUser(person.id)">{{
              person.name
            }}</a>
          </td>
        </tr>
      </table>
    </div>
    <div class="details">
      <div v-if="null !== current">
        <h3 class="h3"><span class="h3__content">User details</span></h3>
        <TextInput
          id="name"
          label="Name"
          v-model:value="current.name"
          width="200"
          :readOnly="true"
        />
        <TextInput
          id="street"
          label="Address"
          v-model:value="current.street"
          width="200"
          :readOnly="true"
        />
        <TextInput
          id="city"
          label="City"
          v-model:value="current.city"
          width="200"
          :readOnly="true"
        />
        <TextInput
          id="state"
          label="State"
          v-model:value="current.state"
          width="200"
          :readOnly="true"
        />
        <TextInput
          id="country"
          label="Country"
          v-model:value="current.country"
          width="200"
          :readOnly="true"
        />
        <TextInput
          id="telephone"
          label="Phone number"
          v-model:value="current.telephone"
          width="200"
          :readOnly="true"
        />
        <TextInput
          id="birthday"
          label="Birthday"
          v-model:value="current.birthday"
          width="200"
          :readOnly="true"
        />
        <Button
          :action="true"
          middleIcon="far fa-times-circle"
          :iconOnly="true"
          :click="
            () => {
              current = null;
            }
          "
        >
          Close user details
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/atoms/input/TextInput";
import Button from "@/components/atoms/Button";

export default {
  data() {
    return {
      people: [
        {
          id: "A0EA05E5-795E-E79B-322D-C25E99780221",
          name: "Brett Johnston",
          street: "5487 Praesent Rd.",
          city: "Provo",
          state: "UT",
          country: "Taiwan",
          telephone: "0349 989 0076",
          birthday: "25/11/1966",
        },
        {
          id: "3D9C96EF-0FC4-3641-FBB9-265BAFC23099",
          name: "Yoshio Arnold",
          street: "7235 Nunc Rd.",
          city: "Coevorden",
          state: "Dr",
          country: "Spain",
          telephone: "0800 133 8669",
          birthday: "05/11/1932",
        },
        {
          id: "6A94F982-2AA1-4B3B-BD8B-2BAE9454BC5A",
          name: "Fletcher Glass",
          street: "4121 Sit Road",
          city: "Bilaspur",
          state: "CT",
          country: "Moldova",
          telephone: "(024) 2172 1115",
          birthday: "24/09/1952",
        },
        {
          id: "A4289446-C53D-EBB2-0D55-842159CAB8B0",
          name: "Dieter Tran",
          street: "P.O. Box 862, 5310 Nulla Rd.",
          city: "Port Harcourt",
          state: "RI",
          country: "Western Sahara",
          telephone: "(010263) 83986",
          birthday: "16/09/2002",
        },
        {
          id: "AE55B50D-9314-6F01-75CE-9A0DA2628D23",
          name: "Leroy Rojas",
          street: "P.O. Box 710, 4709 Vivamus Road",
          city: "Glasgow",
          state: "LK",
          country: "Seychelles",
          telephone: "0800 420 7675",
          birthday: "10/04/1939",
        },
        {
          id: "1312E700-F3E6-365A-87EF-EFA5A7287E63",
          name: "Francis Dale",
          street: "962-9037 Fames St.",
          city: "Jaén",
          state: "Cajamarca",
          country: "Mongolia",
          telephone: "0960 940 6898",
          birthday: "12/07/1951",
        },
        {
          id: "534F7C8A-D7FB-5903-7339-7C297ACA3560",
          name: "Asher Hahn",
          street: "Ap #842-1018 Non, Street",
          city: "Vanier",
          state: "Ontario",
          country: "Central African Republic",
          telephone: "056 0566 2953",
          birthday: "15/09/1979",
        },
        {
          id: "5FA3A74A-E35E-0EA4-E3A0-D01D710DB88A",
          name: "Rashad Owen",
          street: "3292 Eget Rd.",
          city: "Vienna",
          state: "Vienna",
          country: "French Southern Territories",
          telephone: "07493 530157",
          birthday: "25/03/1980",
        },
        {
          id: "EAFBB2A2-8C35-12A1-D947-23F262464750",
          name: "Kibo Pugh",
          street: "3008 Id Road",
          city: "Dunedin",
          state: "SI",
          country: "Bosnia and Herzegovina",
          telephone: "0324 893 2636",
          birthday: "22/02/1939",
        },
        {
          id: "BE32317B-562B-EEA8-5D0D-8CE7C69DEA45",
          name: "Yasir Ellison",
          street: "P.O. Box 125, 2422 Sed, Ave",
          city: "Cabrero",
          state: "VII",
          country: "Congo (Brazzaville)",
          telephone: "076 6095 8794",
          birthday: "07/07/1953",
        },
        {
          id: "ECF3A8AE-5141-BE4F-09BA-BAB003058E4B",
          name: "Talon Mcdonald",
          street: "555-5070 Mollis. Ave",
          city: "Mellet",
          state: "Henegouwen",
          country: "China",
          telephone: "(01929) 24421",
          birthday: "23/01/1931",
        },
        {
          id: "933AA3A2-C7C2-C394-ACB3-F59D84A425E7",
          name: "Jerome Bruce",
          street: "Ap #337-5752 Purus. Rd.",
          city: "Bremen",
          state: "HB",
          country: "Jersey",
          telephone: "0845 46 44",
          birthday: "02/07/1989",
        },
        {
          id: "8BD500D6-6D5D-00F1-F78B-66FA04016B85",
          name: "Joshua Browning",
          street: "Ap #634-7107 Eget St.",
          city: "Uddevalla",
          state: "Västra Götalands län",
          country: "United Kingdom (Great Britain)",
          telephone: "(0181) 135 7909",
          birthday: "04/03/1943",
        },
        {
          id: "A17A21AA-AB58-4036-4762-2FBA0C794DEE",
          name: "Alfonso Bauer",
          street: "Ap #173-5990 Elit Ave",
          city: "Pittsburgh",
          state: "Pennsylvania",
          country: "Switzerland",
          telephone: "(016977) 6104",
          birthday: "20/04/1988",
        },
        {
          id: "E4E94BF3-EA33-BB28-72BB-E73C680C6BD9",
          name: "Graham Madden",
          street: "Ap #759-8277 Ut Rd.",
          city: "Gunpo",
          state: "Gye",
          country: "Syria",
          telephone: "(028) 8667 4034",
          birthday: "07/06/1991",
        },
        {
          id: "D530E4B2-6493-64D0-F24B-34FB7C1297CD",
          name: "Tiger Green",
          street: "5556 Netus Rd.",
          city: "Saint-Pierre",
          state: "Quebec",
          country: "Samoa",
          telephone: "0800 1111",
          birthday: "22/12/1963",
        },
        {
          id: "9CF5D10B-4DAE-167D-FCBE-3B13169E7FA5",
          name: "Tanek Battle",
          street: "5868 Sapien. Av.",
          city: "Lachine",
          state: "QC",
          country: "Syria",
          telephone: "(01954) 34650",
          birthday: "13/08/2003",
        },
        {
          id: "4B796783-0304-07E8-8DD6-7744F45D3F00",
          name: "Reuben Myers",
          street: "Ap #958-5785 Erat. Ave",
          city: "Recoleta",
          state: "RM",
          country: "Italy",
          telephone: "0840 828 9701",
          birthday: "12/07/1990",
        },
        {
          id: "1268DFFA-52C7-65B7-5021-941F89DC3AB2",
          name: "Brian May",
          street: "P.O. Box 259, 6080 Nec Rd.",
          city: "San Antonio",
          state: "Texas",
          country: "Qatar",
          telephone: "0800 1111",
          birthday: "24/07/1939",
        },
        {
          id: "A344B519-E470-73A7-C181-E57BA4E8135B",
          name: "Hamilton Mcmillan",
          street: "P.O. Box 201, 8830 Nec St.",
          city: "Sale",
          state: "Victoria",
          country: "Jersey",
          telephone: "0500 791354",
          birthday: "01/08/1963",
        },
        {
          id: "A5A253A2-1B3C-5536-40DD-902D3BB6B81D",
          name: "Cade Webb",
          street: "P.O. Box 790, 610 Egestas. Ave",
          city: "Gulfport",
          state: "MS",
          country: "Wallis and Futuna",
          telephone: "0500 273760",
          birthday: "17/10/1981",
        },
        {
          id: "2F308985-B3CD-A21B-23E5-52894C9E759F",
          name: "Eagan Howe",
          street: "P.O. Box 689, 6647 Ante Avenue",
          city: "Saint-Georges",
          state: "QC",
          country: "Dominican Republic",
          telephone: "076 0149 4045",
          birthday: "19/05/1948",
        },
        {
          id: "0D94B89C-6404-FE4C-56F2-2DC195D6F95A",
          name: "Xanthus Kane",
          street: "4736 Mauris Rd.",
          city: "Kemerovo",
          state: "KEM",
          country: "Virgin Islands, British",
          telephone: "(01798) 89116",
          birthday: "30/01/1949",
        },
        {
          id: "9C078B9E-3E1E-45AB-03CE-B4A4B81D75D8",
          name: "Joseph Glover",
          street: "554-666 Ut Avenue",
          city: "Jerez de la Frontera",
          state: "Andalucía",
          country: "France",
          telephone: "076 5520 6637",
          birthday: "25/11/1942",
        },
        {
          id: "96773414-C030-CC88-5830-E1780129C9EF",
          name: "Aladdin Austin",
          street: "6398 Nullam Ave",
          city: "Bahawalpur",
          state: "PU",
          country: "Virgin Islands, British",
          telephone: "0800 325094",
          birthday: "04/03/1934",
        },
        {
          id: "1DD4ED1A-49E0-5A92-0554-A1B80DB3185A",
          name: "Cole Day",
          street: "Ap #468-4524 Accumsan Ave",
          city: "Cirebon",
          state: "JB",
          country: "Seychelles",
          telephone: "076 6266 7896",
          birthday: "01/01/1991",
        },
        {
          id: "60EBAD62-A041-47B2-7852-C0654B334695",
          name: "Elvis Rios",
          street: "P.O. Box 351, 1190 Mauris Road",
          city: "Arras",
          state: "NO",
          country: "Serbia",
          telephone: "0331 815 0218",
          birthday: "08/02/1940",
        },
        {
          id: "AC3C70BC-CDE5-61DE-F1DB-1A54719F34E9",
          name: "Boris Crane",
          street: "560-5912 Integer St.",
          city: "Kraków",
          state: "Małopolskie",
          country: "Greenland",
          telephone: "(016349) 59419",
          birthday: "11/04/1984",
        },
        {
          id: "E25298FE-3DEF-475C-C204-47C9F1471498",
          name: "Nathan Barlow",
          street: "Ap #844-3099 Dignissim St.",
          city: "Great Falls",
          state: "Montana",
          country: "Solomon Islands",
          telephone: "(010131) 80382",
          birthday: "29/05/1975",
        },
        {
          id: "CC9C5A8D-EB87-6A5C-EE6C-CB57628544C7",
          name: "Fuller Reese",
          street: "P.O. Box 812, 1008 Erat Street",
          city: "Shreveport",
          state: "LA",
          country: "Dominican Republic",
          telephone: "070 2661 3019",
          birthday: "06/02/1967",
        },
        {
          id: "7387B354-77AC-6ED9-7C03-A7C22EDC7312",
          name: "Murphy Garrison",
          street: "6732 Nam St.",
          city: "Castres",
          state: "MI",
          country: "French Guiana",
          telephone: "0500 276958",
          birthday: "12/03/1937",
        },
        {
          id: "2D5D08F9-B9C5-F0D1-0238-2FF91097DFE3",
          name: "Nolan Henry",
          street: "341-8413 Egestas. Rd.",
          city: "Swat",
          state: "Khyber Pakhtoonkhwa",
          country: "Venezuela",
          telephone: "0906 559 6646",
          birthday: "24/10/2001",
        },
        {
          id: "6991F58B-069C-E157-59B9-A18E1236B262",
          name: "Edward Bradshaw",
          street: "917-4060 Justo. Rd.",
          city: "Gölcük",
          state: "Kocaeli",
          country: "Angola",
          telephone: "(016977) 8917",
          birthday: "18/02/1944",
        },
        {
          id: "814FC639-A05D-28B9-CDAA-3434A7DD31D7",
          name: "Arthur Blevins",
          street: "P.O. Box 120, 6121 Ac St.",
          city: "Liberia",
          state: "G",
          country: "Burkina Faso",
          telephone: "(0161) 151 3522",
          birthday: "03/02/1953",
        },
        {
          id: "B473D44C-BFC6-08C0-A46B-011D694D65E7",
          name: "Dexter Schwartz",
          street: "Ap #602-3390 Justo Road",
          city: "Bucheon",
          state: "Gye",
          country: "Spain",
          telephone: "(0161) 258 4873",
          birthday: "11/10/1977",
        },
        {
          id: "E1850FCE-177B-25FC-4C71-446F3F8FD6B8",
          name: "Ray Oneal",
          street: "P.O. Box 830, 4514 Tristique Av.",
          city: "Soledad",
          state: "ATL",
          country: "Lithuania",
          telephone: "0800 613727",
          birthday: "24/05/1941",
        },
        {
          id: "10DD5855-5AF1-A206-ED8D-12B5E5A56631",
          name: "Reese Estes",
          street: "P.O. Box 904, 9211 Vulputate Av.",
          city: "Port Hope",
          state: "ON",
          country: "United States",
          telephone: "0878 706 5200",
          birthday: "07/12/1931",
        },
        {
          id: "9B9A54E2-C76F-2960-9B4C-03B8F42D7FAD",
          name: "Bruce Frost",
          street: "553-7018 Nec St.",
          city: "Veere",
          state: "Zeeland",
          country: "Belize",
          telephone: "0800 295 7827",
          birthday: "26/10/1957",
        },
        {
          id: "A88B4BD3-9166-5FDC-E6E7-287F98D4A818",
          name: "Cullen Horne",
          street: "4801 Fermentum Avenue",
          city: "Irkutsk",
          state: "IRK",
          country: "Togo",
          telephone: "(01513) 481212",
          birthday: "21/12/1934",
        },
        {
          id: "A8D37EAA-0ABD-DDA7-3FE0-9AC10AD973BB",
          name: "Leroy Wyatt",
          street: "262-7374 Tellus. Road",
          city: "Lauro de Freitas",
          state: "Bahia",
          country: "Korea, South",
          telephone: "0845 46 49",
          birthday: "03/07/1982",
        },
        {
          id: "B18C17DD-84B4-088C-B221-835DF7132756",
          name: "Wang Welch",
          street: "P.O. Box 112, 9263 Ut Rd.",
          city: "Gjoa Haven",
          state: "Nunavut",
          country: "Guatemala",
          telephone: "055 7787 1072",
          birthday: "04/11/1956",
        },
        {
          id: "9A71B608-3877-C001-0D36-70765EFBB61A",
          name: "Warren Bright",
          street: "232-6188 Facilisis. Ave",
          city: "San Francisco",
          state: "Heredia",
          country: "Zambia",
          telephone: "0800 1111",
          birthday: "22/02/1963",
        },
        {
          id: "A0A7827E-9746-5F07-C021-9558163642DD",
          name: "Derek Mayer",
          street: "253-4499 Sed, Road",
          city: "San Juan (San Juan de Tibás)",
          state: "SJ",
          country: "Bermuda",
          telephone: "(01821) 26739",
          birthday: "14/08/1966",
        },
        {
          id: "91EF0E0A-713A-9605-A666-18350DA4A2E5",
          name: "Barclay Woodard",
          street: "7239 Lectus. Street",
          city: "Hofors",
          state: "Gävleborgs län",
          country: "Bermuda",
          telephone: "(01149) 273733",
          birthday: "12/11/1949",
        },
        {
          id: "3028FC03-119E-B237-A30F-966F74AE73B3",
          name: "Peter Donaldson",
          street: "730-8416 Aliquam St.",
          city: "Ravenstein",
          state: "N.",
          country: "Pakistan",
          telephone: "0800 201 9682",
          birthday: "22/12/1945",
        },
        {
          id: "C1FDC636-E7DC-FBCD-114C-AC2A34FE9420",
          name: "Rahim Nicholson",
          street: "346 Semper, St.",
          city: "Vienna",
          state: "Vienna",
          country: "Mauritius",
          telephone: "0800 523 5401",
          birthday: "08/10/1955",
        },
        {
          id: "3D4CDE5A-7254-A680-3E26-2DC63EA5FB21",
          name: "Tyler Hoffman",
          street: "6136 Commodo Rd.",
          city: "Galway",
          state: "Connacht",
          country: "Lebanon",
          telephone: "(026) 1358 1924",
          birthday: "11/01/1949",
        },
        {
          id: "E82976B2-B977-AE89-1BA6-E4D2B976D0C6",
          name: "Harrison Frank",
          street: "668-2840 Sagittis St.",
          city: "Istanbul",
          state: "Istanbul",
          country: "Ecuador",
          telephone: "0800 489398",
          birthday: "10/02/1976",
        },
        {
          id: "24D64733-FD79-0DB9-C3BE-99090A83B938",
          name: "Barrett Fowler",
          street: "Ap #817-5264 Purus. Av.",
          city: "Gresham",
          state: "OR",
          country: "Germany",
          telephone: "(0161) 601 1382",
          birthday: "26/06/1978",
        },
        {
          id: "FA01FD65-99BB-E776-22F8-4D845F468557",
          name: "Hoyt Rutledge",
          street: "P.O. Box 828, 7042 Arcu Ave",
          city: "Achalpur",
          state: "Maharastra",
          country: "Timor-Leste",
          telephone: "070 7583 6644",
          birthday: "25/07/1994",
        },
        {
          id: "B0370535-B324-E8E1-32AE-47CD838CB4D3",
          name: "Connor Noble",
          street: "3282 Tristique St.",
          city: "Hindupur",
          state: "AP",
          country: "Canada",
          telephone: "(01498) 378475",
          birthday: "22/11/1968",
        },
        {
          id: "D04B5621-B582-583B-74AD-E212EF6D76B1",
          name: "Palmer Flowers",
          street: "P.O. Box 224, 7731 Phasellus Avenue",
          city: "Berlin",
          state: "Berlin",
          country: "Ukraine",
          telephone: "0962 966 5449",
          birthday: "07/12/1989",
        },
        {
          id: "3826EA40-37A2-7000-1D4B-F98A45A42B04",
          name: "Christian Sampson",
          street: "P.O. Box 154, 5341 Ipsum Road",
          city: "Gloucester",
          state: "ON",
          country: "Gambia",
          telephone: "07624 385871",
          birthday: "26/10/1953",
        },
        {
          id: "73D11A27-485F-EB3D-D07B-EFA6C25FE78A",
          name: "Gil Valencia",
          street: "7173 Ullamcorper Ave",
          city: "Grandrieu",
          state: "Henegouwen",
          country: "Vanuatu",
          telephone: "0845 46 48",
          birthday: "24/12/1941",
        },
        {
          id: "BBCA4ABC-A0F3-B1F3-9463-D0D108E36794",
          name: "Beau Anthony",
          street: "P.O. Box 641, 5269 Luctus, Rd.",
          city: "Poucet",
          state: "Luik",
          country: "Honduras",
          telephone: "055 7784 3512",
          birthday: "28/08/1930",
        },
        {
          id: "CC1A589D-884B-58B2-D597-7E82CF70B306",
          name: "Kennedy Humphrey",
          street: "P.O. Box 461, 1836 Tempus Road",
          city: "Sevastopol",
          state: "Sevastopol City",
          country: "Tunisia",
          telephone: "(01005) 209929",
          birthday: "03/04/1973",
        },
        {
          id: "E5C00E7B-CBBE-C490-EAB1-02A298D0355A",
          name: "Hayden Bishop",
          street: "552-9500 Amet St.",
          city: "La Cisterna",
          state: "Metropolitana de Santiago",
          country: "South Georgia and The South Sandwich Islands",
          telephone: "0800 1111",
          birthday: "20/12/1972",
        },
        {
          id: "F6DEE3B1-99C9-4D2E-D5E4-451E2A5A8A3D",
          name: "Kieran Mathews",
          street: "5990 Vulputate, Av.",
          city: "Alajuela",
          state: "Alajuela",
          country: "Philippines",
          telephone: "(01102) 73393",
          birthday: "09/07/1954",
        },
        {
          id: "C484876A-8ECF-3F74-58E5-64E6D4588E55",
          name: "Clayton Ortega",
          street: "441-1242 Semper St.",
          city: "İnegöl",
          state: "Bur",
          country: "Kazakhstan",
          telephone: "070 1685 6985",
          birthday: "18/06/2002",
        },
        {
          id: "5A2C867D-ABD4-6466-7022-285A39C7BF45",
          name: "Blake Wallace",
          street: "P.O. Box 159, 5760 Tellus Rd.",
          city: "Guelph",
          state: "Ontario",
          country: "Ghana",
          telephone: "(029) 0289 1004",
          birthday: "19/04/1938",
        },
        {
          id: "611066BC-FB1A-A7D6-FD9C-58605D7DD9D2",
          name: "Wayne Mcclure",
          street: "558-8123 Tincidunt Street",
          city: "Jackson",
          state: "Mississippi",
          country: "Burundi",
          telephone: "0845 46 49",
          birthday: "20/08/1965",
        },
        {
          id: "1CC40C83-AFB4-2F71-7EB5-760441FDB898",
          name: "Jameson Cabrera",
          street: "P.O. Box 313, 9117 Id Avenue",
          city: "Vienna",
          state: "Vienna",
          country: "Holy See (Vatican City State)",
          telephone: "(0171) 811 5386",
          birthday: "16/12/1993",
        },
        {
          id: "A79328DB-FC96-8B05-BEBA-5D21799C6A11",
          name: "Kuame Alexander",
          street: "Ap #608-204 Ornare, Ave",
          city: "Salzwedel",
          state: "Sachsen-Anhalt",
          country: "Gambia",
          telephone: "(0181) 956 2646",
          birthday: "11/05/1997",
        },
        {
          id: "64DDA4F3-50B8-4369-8429-474F97A5632A",
          name: "Nash Blake",
          street: "P.O. Box 700, 5164 Fringilla Av.",
          city: "Feilding",
          state: "North Island",
          country: "Mauritius",
          telephone: "056 8168 7373",
          birthday: "12/04/1963",
        },
        {
          id: "B9354E9C-EEE4-2B08-133D-5A21930BBC8D",
          name: "Hiram Richardson",
          street: "5149 In Rd.",
          city: "Turbo",
          state: "Antioquia",
          country: "Norfolk Island",
          telephone: "0845 46 40",
          birthday: "19/09/1962",
        },
        {
          id: "BEFCA015-8695-48AC-163E-6282DD7DD6BF",
          name: "Jakeem Buchanan",
          street: "243-7056 Eu Avenue",
          city: "La Unión",
          state: "XIV",
          country: "Colombia",
          telephone: "(0131) 834 3357",
          birthday: "11/12/1944",
        },
        {
          id: "5C574A2D-1F16-A937-129A-64386D35FD36",
          name: "Zachery Hobbs",
          street: "P.O. Box 249, 9768 Arcu. Street",
          city: "Chimbote",
          state: "Ancash",
          country: "Qatar",
          telephone: "07624 939596",
          birthday: "02/07/1947",
        },
        {
          id: "60F65866-F624-B777-3A9D-C4DE7B57A2FD",
          name: "Bernard Hopkins",
          street: "179-4295 Sed Av.",
          city: "Pichilemu",
          state: "O'Higgins",
          country: "Cameroon",
          telephone: "076 9184 1557",
          birthday: "10/08/1972",
        },
        {
          id: "26B25D29-F259-0E0F-32EF-6A12E152200A",
          name: "Jarrod Britt",
          street: "Ap #517-9027 Nulla Rd.",
          city: "Faridabad",
          state: "HR",
          country: "Bhutan",
          telephone: "0349 035 7669",
          birthday: "21/02/1979",
        },
        {
          id: "CA4D6400-3C48-0C46-6035-D36D1FEF0DF3",
          name: "Ivan Myers",
          street: "6246 Mauris Street",
          city: "Murree",
          state: "Sindh",
          country: "Iceland",
          telephone: "07711 413716",
          birthday: "22/05/1988",
        },
        {
          id: "DD0D0BF3-924C-339F-102E-744F4C0CCCE2",
          name: "Wyatt Bradford",
          street: "7346 Arcu. Road",
          city: "Vienna",
          state: "Vienna",
          country: "Korea, North",
          telephone: "0800 948047",
          birthday: "02/10/1932",
        },
        {
          id: "AEBC0882-648D-B891-CE78-C8D64D15D899",
          name: "Emerson Tanner",
          street: "Ap #807-8981 Eros Ave",
          city: "Minatitlán",
          state: "Ver",
          country: "Barbados",
          telephone: "0800 654604",
          birthday: "10/04/1971",
        },
        {
          id: "130744E9-5732-DEBE-0C6D-D6C8C10C4A26",
          name: "Oren Mcknight",
          street: "Ap #570-9135 In Rd.",
          city: "Pedro Aguirre Cerda",
          state: "Metropolitana de Santiago",
          country: "Afghanistan",
          telephone: "055 0227 7347",
          birthday: "16/09/1964",
        },
        {
          id: "2D48BC47-0BD9-B848-CD83-39749713227C",
          name: "Paul Fields",
          street: "915-4879 Vulputate Ave",
          city: "Castellana Sicula",
          state: "SIC",
          country: "Turkmenistan",
          telephone: "(0161) 813 1857",
          birthday: "10/03/1965",
        },
        {
          id: "9A3291E2-FAE7-0906-86D6-D0C2312887AA",
          name: "Cade Dillon",
          street: "Ap #957-4621 In Rd.",
          city: "Lexington",
          state: "KY",
          country: "Burundi",
          telephone: "070 4981 1077",
          birthday: "01/06/1968",
        },
        {
          id: "51355ED7-3E19-BB80-0BC2-569DA247D664",
          name: "Kyle Abbott",
          street: "Ap #440-9301 Tincidunt Rd.",
          city: "Kawerau",
          state: "North Island",
          country: "Botswana",
          telephone: "055 6095 3505",
          birthday: "14/08/1992",
        },
        {
          id: "F66AB1FE-A76D-DE1D-FBDE-8B13DFC573D2",
          name: "Luke Bell",
          street: "6673 Erat St.",
          city: "Aurora",
          state: "IL",
          country: "Russian Federation",
          telephone: "(0111) 825 1381",
          birthday: "03/06/1992",
        },
        {
          id: "605D6AAD-EEAB-7831-E007-8FA5C70751D8",
          name: "Malachi Britt",
          street: "Ap #449-4268 Curabitur Rd.",
          city: "Saltillo",
          state: "Coa",
          country: "Yemen",
          telephone: "(01661) 778943",
          birthday: "23/01/1981",
        },
        {
          id: "0B90BBEE-F90C-E7A1-0D98-A7CE60ADF896",
          name: "Eaton Campos",
          street: "P.O. Box 816, 9253 Egestas, Street",
          city: "Alajuela",
          state: "A",
          country: "Guam",
          telephone: "0816 335 7611",
          birthday: "28/02/1938",
        },
        {
          id: "F3D9E4B4-5AA2-A0F6-39C3-104319F5685C",
          name: "Ashton Carr",
          street: "8876 Est, St.",
          city: "Lasbela",
          state: "BL",
          country: "Papua New Guinea",
          telephone: "0386 351 3928",
          birthday: "19/12/2001",
        },
        {
          id: "F896A4E5-D087-AAF7-7959-0D2A72D4F1DE",
          name: "Reuben Parker",
          street: "9827 Elit, St.",
          city: "Rangiora",
          state: "SI",
          country: "Palestine, State of",
          telephone: "(025) 5920 0831",
          birthday: "18/10/2000",
        },
        {
          id: "D3B234E4-AC84-A9FA-9F0A-514B4C10E303",
          name: "Wyatt Gaines",
          street: "2536 Sodales St.",
          city: "Piracicaba",
          state: "São Paulo",
          country: "Lesotho",
          telephone: "0953 347 7888",
          birthday: "03/10/1988",
        },
        {
          id: "FA85E5C7-C2C3-DD9A-3160-6E964459A881",
          name: "Arden Mathews",
          street: "422-2540 Massa. Rd.",
          city: "Ghotki",
          state: "SI",
          country: "India",
          telephone: "0845 46 43",
          birthday: "17/11/1966",
        },
        {
          id: "41D8FEC4-78B1-504D-717B-CC0046EA563B",
          name: "Raja Lopez",
          street: "Ap #869-7631 Feugiat. Av.",
          city: "Picton",
          state: "SI",
          country: "Seychelles",
          telephone: "070 3462 4269",
          birthday: "02/01/1989",
        },
        {
          id: "4B991480-D4F9-E916-B9F1-C467C9617D06",
          name: "Grady Snow",
          street: "3877 Ultrices Road",
          city: "Eisenstadt",
          state: "Bgl",
          country: "Svalbard and Jan Mayen Islands",
          telephone: "0338 839 7009",
          birthday: "06/04/1936",
        },
        {
          id: "1AC07BDF-8AA5-7B69-7215-6DB548FAED67",
          name: "Aquila Carroll",
          street: "2325 Volutpat. Ave",
          city: "Lota",
          state: "Biobío",
          country: "Madagascar",
          telephone: "(016977) 2399",
          birthday: "10/04/1969",
        },
        {
          id: "35A733F9-7565-D806-3333-72C4A5D4AAAF",
          name: "Guy Garrison",
          street: "963-3274 Sodales Street",
          city: "Kingston",
          state: "ON",
          country: "Heard Island and Mcdonald Islands",
          telephone: "056 7452 0543",
          birthday: "12/12/1942",
        },
        {
          id: "0336BC69-BD33-AEDA-EDF3-DC16C764ADAC",
          name: "Cooper Gallegos",
          street: "3279 Dictum St.",
          city: "Lampa",
          state: "Metropolitana de Santiago",
          country: "Czech Republic",
          telephone: "0800 149 2722",
          birthday: "19/01/1961",
        },
        {
          id: "E45C422A-DC47-5804-93C3-707E22521F29",
          name: "Abel Carson",
          street: "341-5989 Natoque Ave",
          city: "Quinte West",
          state: "ON",
          country: "Mayotte",
          telephone: "(022) 9668 6445",
          birthday: "04/11/1979",
        },
        {
          id: "A718A810-3A1F-5CB3-9D7C-25A9C6AA107E",
          name: "Porter Lindsey",
          street: "P.O. Box 277, 1053 Pretium Avenue",
          city: "Oamaru",
          state: "SI",
          country: "Congo (Brazzaville)",
          telephone: "070 2207 3533",
          birthday: "18/04/1995",
        },
        {
          id: "09EC977A-A115-B683-CC9E-B5D58CDEF7D9",
          name: "Hall Ray",
          street: "P.O. Box 517, 3788 Faucibus Rd.",
          city: "Greater Hobart",
          state: "TAS",
          country: "Morocco",
          telephone: "(0119) 761 6020",
          birthday: "09/11/1932",
        },
        {
          id: "776495D9-CAC2-8FBA-AF7E-FD41E078EBB7",
          name: "Garrison Morse",
          street: "7929 Pede. Ave",
          city: "Okigwe",
          state: "IM",
          country: "Cyprus",
          telephone: "0845 46 43",
          birthday: "28/12/1941",
        },
        {
          id: "FED5C60D-E481-3879-075A-BCD52B2EF816",
          name: "Leonard Casey",
          street: "P.O. Box 690, 7849 Ut Ave",
          city: "Tallahassee",
          state: "Florida",
          country: "American Samoa",
          telephone: "0889 840 5935",
          birthday: "03/11/1964",
        },
        {
          id: "42A6F161-C4F8-2265-787C-621EF44D743A",
          name: "Vance Hood",
          street: "704-8708 Lectus St.",
          city: "Udaipur",
          state: "Rajasthan",
          country: "Togo",
          telephone: "055 4432 7709",
          birthday: "19/11/1978",
        },
        {
          id: "59C8A2DA-2168-363C-90F8-45D313364E52",
          name: "Prescott Sharpe",
          street: "P.O. Box 227, 6647 Rutrum Rd.",
          city: "Bauchi",
          state: "Bauchi",
          country: "Slovenia",
          telephone: "056 1815 8249",
          birthday: "12/09/1990",
        },
        {
          id: "4E94DB72-EADC-9286-817A-8005892FF061",
          name: "Todd Casey",
          street: "P.O. Box 463, 6450 Integer Ave",
          city: "Bismil",
          state: "Diyarbakır",
          country: "Tunisia",
          telephone: "0984 394 2406",
          birthday: "07/06/1980",
        },
        {
          id: "7029D8F2-A87A-5B04-206C-F728F7F90D41",
          name: "Barrett Bartlett",
          street: "P.O. Box 350, 1109 Aliquam Ave",
          city: "Pamplona",
          state: "NA",
          country: "Sri Lanka",
          telephone: "(016977) 8058",
          birthday: "23/02/1943",
        },
        {
          id: "FF177036-42D6-253A-CA25-8D4D91B38169",
          name: "Ryder Williamson",
          street: "8317 Diam Avenue",
          city: "Ludlow",
          state: "SA",
          country: "Netherlands",
          telephone: "0880 113 6549",
          birthday: "01/07/1986",
        },
        {
          id: "4DE0B820-EFB0-896E-3296-EDEE3F16A129",
          name: "Abdul Munoz",
          street: "2907 Augue Rd.",
          city: "Liverpool",
          state: "NSW",
          country: "Equatorial Guinea",
          telephone: "(0117) 853 4474",
          birthday: "29/10/1949",
        },
        {
          id: "05095922-42BB-2732-43F1-81B9B838FE74",
          name: "Timothy Ayers",
          street: "825 Risus. St.",
          city: "Calbuco",
          state: "Los Lagos",
          country: "Kyrgyzstan",
          telephone: "0800 952244",
          birthday: "02/04/1971",
        },
      ],
      current: null,
    };
  },
  components: {
    TextInput: TextInput,
    Button: Button,
  },
  methods: {
    loadUser(id) {
      this.current = null;
      const filter = this.people.filter((person) => {
        return person.id === id;
      });
      if (filter.length > 0) this.current = filter[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/variables.scss";

.container {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "list details";
}

.list {
  grid-area: list;
}

.details {
  grid-area: details;
}

.person:hover {
  background: lighten($lavander, 10%);
  border-radius: 1rem;
}

.selected,
.selected:hover {
  background: $lavander;
  border-radius: 1rem;
}
</style>