/**
 * Created by zshaikh on 3/9/2016.
 */
(function() {

    // define a new module
    angular.module("searchtab").service("SearchService", SearchService);

    function SearchService() {

        this.countries = [{
            "name": "Afghanistan",
            "code": "af"
        }, {
            "name": "Albania",
            "code": "al"
        }, {
            "name": "Algeria",
            "code": "dz"
        }, {
            "name": "American Samoa",
            "code": "as"
        }, {
            "name": "Andorra",
            "code": "ad"
        }, {
            "name": "Angola",
            "code": "ao"
        }, {
            "name": "Anguilla",
            "code": "ai"
        }, {
            "name": "Antigua and Barbuda",
            "code": "ag"
        }, {
            "name": "Argentina",
            "code": "ar"
        }, {
            "name": "Armenia",
            "code": "am"
        }, {
            "name": "Aruba",
            "code": "aw"
        }, {
            "name": "Australia",
            "code": "au"
        }, {
            "name": "Austria",
            "code": "at"
        }, {
            "name": "Azerbaijan",
            "code": "az"
        }, {
            "name": "Bahamas",
            "code": "bs"
        }, {
            "name": "Bahrain",
            "code": "bh"
        }, {
            "name": "Bangladesh",
            "code": "bd"
        }, {
            "name": "Barbados",
            "code": "bb"
        }, {
            "name": "Belarus",
            "code": "by"
        }, {
            "name": "Belgium",
            "code": "be"
        }, {
            "name": "Belize",
            "code": "bz"
        }, {
            "name": "Benin",
            "code": "bj"
        }, {
            "name": "Bermuda",
            "code": "bm"
        }, {
            "name": "Bhutan",
            "code": "bt"
        }, {
            "name": "Bolivia, Plurinational State of",
            "code": "bo"
        }, {
            "name": "Bosnia and Herzegovina",
            "code": "ba"
        }, {
            "name": "Botswana",
            "code": "bw"
        }, {
            "name": "Brazil",
            "code": "br"
        }, {
            "name": "Brunei Darussalam",
            "code": "bn"
        }, {
            "name": "Bulgaria",
            "code": "bg"
        }, {
            "name": "Burkina Faso",
            "code": "bf"
        }, {
            "name": "Burundi",
            "code": "bi"
        }, {
            "name": "Cambodia",
            "code": "kh"
        }, {
            "name": "Cameroon",
            "code": "cm"
        }, {
            "name": "Canada",
            "code": "ca"
        }, {
            "name": "Cape Verde",
            "code": "cv"
        }, {
            "name": "Cayman Islands",
            "code": "ky"
        }, {
            "name": "Central African Republic",
            "code": "cf"
        }, {
            "name": "Chad",
            "code": "td"
        }, {
            "name": "Chile",
            "code": "cl"
        }, {
            "name": "China",
            "code": "cn"
        }, {
            "name": "Colombia",
            "code": "co"
        }, {
            "name": "Comoros",
            "code": "km"
        }, {
            "name": "Congo",
            "code": "cg"
        }, {
            "name": "Congo, the Democratic Republic of the",
            "code": "cd"
        }, {
            "name": "Cook Islands",
            "code": "ck"
        }, {
            "name": "Costa Rica",
            "code": "cr"
        }, {
            "name": "Croatia",
            "code": "hr"
        }, {
            "name": "Cuba",
            "code": "cu"
        }, {
            "name": "Cyprus",
            "code": "cy"
        }, {
            "name": "Czech Republic",
            "code": "cz"
        }, {
            "name": "Côte d'Ivoire",
            "code": "ci"
        }, {
            "name": "Denmark",
            "code": "dk"
        }, {
            "name": "Djibouti",
            "code": "dj"
        }, {
            "name": "Dominica",
            "code": "dm"
        }, {
            "name": "Dominican Republic",
            "code": "do"
        }, {
            "name": "Ecuador",
            "code": "ec"
        }, {
            "name": "Egypt",
            "code": "eg"
        }, {
            "name": "El Salvador",
            "code": "sv"
        }, {
            "name": "Equatorial Guinea",
            "code": "gq"
        }, {
            "name": "Eritrea",
            "code": "er"
        }, {
            "name": "Estonia",
            "code": "ee"
        }, {
            "name": "Ethiopia",
            "code": "et"
        }, {
            "name": "Faroe Islands",
            "code": "fo"
        }, {
            "name": "Fiji",
            "code": "fj"
        }, {
            "name": "Finland",
            "code": "fi"
        }, {
            "name": "France",
            "code": "fr"
        }, {
            "name": "French Polynesia",
            "code": "pf"
        }, {
            "name": "Gabon",
            "code": "ga"
        }, {
            "name": "Gambia",
            "code": "gm"
        }, {
            "name": "Georgia",
            "code": "ge"
        }, {
            "name": "Germany",
            "code": "de"
        }, {
            "name": "Ghana",
            "code": "gh"
        }, {
            "name": "Gibraltar",
            "code": "gi"
        }, {
            "name": "Greece",
            "code": "gr"
        }, {
            "name": "Greenland",
            "code": "gl"
        }, {
            "name": "Grenada",
            "code": "gd"
        }, {
            "name": "Guam",
            "code": "gu"
        }, {
            "name": "Guatemala",
            "code": "gt"
        }, {
            "name": "Guernsey",
            "code": "gg"
        }, {
            "name": "Guinea",
            "code": "gn"
        }, {
            "name": "Guinea-Bissau",
            "code": "gw"
        }, {
            "name": "Guyana",
            "code": "gy"
        }, {
            "name": "Haiti",
            "code": "ht"
        }, {
            "name": "Holy See (Vatican City State)",
            "code": "va"
        }, {
            "name": "Honduras",
            "code": "hn"
        }, {
            "name": "Hong Kong",
            "code": "hk"
        }, {
            "name": "Hungary",
            "code": "hu"
        }, {
            "name": "Iceland",
            "code": "is"
        }, {
            "name": "India",
            "code": "in"
        }, {
            "name": "Indonesia",
            "code": "id"
        }, {
            "name": "Iran, Islamic Republic of",
            "code": "ir"
        }, {
            "name": "Iraq",
            "code": "iq"
        }, {
            "name": "Ireland",
            "code": "ie"
        }, {
            "name": "Isle of Man",
            "code": "im"
        }, {
            "name": "Israel",
            "code": "il"
        }, {
            "name": "Italy",
            "code": "it"
        }, {
            "name": "Jamaica",
            "code": "jm"
        }, {
            "name": "Japan",
            "code": "jp"
        }, {
            "name": "Jersey",
            "code": "je"
        }, {
            "name": "Jordan",
            "code": "jo"
        }, {
            "name": "Kazakhstan",
            "code": "kz"
        }, {
            "name": "Kenya",
            "code": "ke"
        }, {
            "name": "Kiribati",
            "code": "ki"
        }, {
            "name": "Korea, Democratic People's Republic of",
            "code": "kp"
        }, {
            "name": "Korea, Republic of",
            "code": "kr"
        }, {
            "name": "Kuwait",
            "code": "kw"
        }, {
            "name": "Kyrgyzstan",
            "code": "kg"
        }, {
            "name": "Lao People's Democratic Republic",
            "code": "la"
        }, {
            "name": "Latvia",
            "code": "lv"
        }, {
            "name": "Lebanon",
            "code": "lb"
        }, {
            "name": "Lesotho",
            "code": "ls"
        }, {
            "name": "Liberia",
            "code": "lr"
        }, {
            "name": "Libya",
            "code": "ly"
        }, {
            "name": "Liechtenstein",
            "code": "li"
        }, {
            "name": "Lithuania",
            "code": "lt"
        }, {
            "name": "Luxembourg",
            "code": "lu"
        }, {
            "name": "Macao",
            "code": "mo"
        }, {
            "name": "Macedonia, the former Yugoslav Republic of",
            "code": "mk"
        }, {
            "name": "Madagascar",
            "code": "mg"
        }, {
            "name": "Malawi",
            "code": "mw"
        }, {
            "name": "Malaysia",
            "code": "my"
        }, {
            "name": "Maldives",
            "code": "mv"
        }, {
            "name": "Mali",
            "code": "ml"
        }, {
            "name": "Malta",
            "code": "mt"
        }, {
            "name": "Marshall Islands",
            "code": "mh"
        }, {
            "name": "Mauritania",
            "code": "mr"
        }, {
            "name": "Mauritius",
            "code": "mu"
        }, {
            "name": "Mexico",
            "code": "mx"
        }, {
            "name": "Micronesia, Federated States of",
            "code": "fm"
        }, {
            "name": "Moldova, Republic of",
            "code": "md"
        }, {
            "name": "Monaco",
            "code": "mc"
        }, {
            "name": "Mongolia",
            "code": "mn"
        }, {
            "name": "Montenegro",
            "code": "me"
        }, {
            "name": "Montserrat",
            "code": "ms"
        }, {
            "name": "Morocco",
            "code": "ma"
        }, {
            "name": "Mozambique",
            "code": "mz"
        }, {
            "name": "Myanmar",
            "code": "mm"
        }, {
            "name": "Namibia",
            "code": "na"
        }, {
            "name": "Nauru",
            "code": "nr"
        }, {
            "name": "Nepal",
            "code": "np"
        }, {
            "name": "Netherlands",
            "code": "nl"
        }, {
            "name": "New Caledonia",
            "code": "nc"
        }, {
            "name": "New Zealand",
            "code": "nz"
        }, {
            "name": "Nicaragua",
            "code": "ni"
        }, {
            "name": "Niger",
            "code": "ne"
        }, {
            "name": "Nigeria",
            "code": "ng"
        }, {
            "name": "Norway",
            "code": "no"
        }, {
            "name": "Oman",
            "code": "om"
        }, {
            "name": "Pakistan",
            "code": "pk"
        }, {
            "name": "Palau",
            "code": "pw"
        }, {
            "name": "Palestine",
            "code": "ps"
        }, {
            "name": "Panama",
            "code": "pa"
        }, {
            "name": "Papua New Guinea",
            "code": "pg"
        }, {
            "name": "Paraguay",
            "code": "py"
        }, {
            "name": "Peru",
            "code": "pe"
        }, {
            "name": "Philippines",
            "code": "ph"
        }, {
            "name": "Poland",
            "code": "pl"
        }, {
            "name": "Portugal",
            "code": "pt"
        }, {
            "name": "Puerto Rico",
            "code": "pr"
        }, {
            "name": "Qatar",
            "code": "qa"
        }, {
            "name": "Romania",
            "code": "ro"
        }, {
            "name": "Russian Federation",
            "code": "ru"
        }, {
            "name": "Rwanda",
            "code": "rw"
        }, {
            "name": "Réunion",
            "code": "re"
        }, {
            "name": "Saint Kitts and Nevis",
            "code": "kn"
        }, {
            "name": "Saint Lucia",
            "code": "lc"
        }, {
            "name": "Saint Vincent and the Grenadines",
            "code": "vc"
        }, {
            "name": "Samoa",
            "code": "ws"
        }, {
            "name": "San Marino",
            "code": "sm"
        }, {
            "name": "Sao Tome and Principe",
            "code": "st"
        }, {
            "name": "Saudi Arabia",
            "code": "sa"
        }, {
            "name": "Senegal",
            "code": "sn"
        }, {
            "name": "Serbia",
            "code": "rs"
        }, {
            "name": "Seychelles",
            "code": "sc"
        }, {
            "name": "Sierra Leone",
            "code": "sl"
        }, {
            "name": "Singapore",
            "code": "sg"
        }, {
            "name": "Slovakia",
            "code": "sk"
        }, {
            "name": "Slovenia",
            "code": "si"
        }, {
            "name": "Solomon Islands",
            "code": "sb"
        }, {
            "name": "Somalia",
            "code": "so"
        }, {
            "name": "South Africa",
            "code": "za"
        }, {
            "name": "Spain",
            "code": "es"
        }, {
            "name": "Sri Lanka",
            "code": "lk"
        }, {
            "name": "Sudan",
            "code": "sd"
        }, {
            "name": "Suriname",
            "code": "sr"
        }, {
            "name": "Swaziland",
            "code": "sz"
        }, {
            "name": "Sweden",
            "code": "se"
        }, {
            "name": "Switzerland",
            "code": "ch"
        }, {
            "name": "Syrian Arab Republic",
            "code": "sy"
        }, {
            "name": "Taiwan, Provice of China",
            "code": "tw"
        }, {
            "name": "Tajikistan",
            "code": "tj"
        }, {
            "name": "Tanzania, United Republic of",
            "code": "tz"
        }, {
            "name": "Thailand",
            "code": "th"
        }, {
            "name": "Timor-Leste",
            "code": "tl"
        }, {
            "name": "Togo",
            "code": "tg"
        }, {
            "name": "Tonga",
            "code": "to"
        }, {
            "name": "Trinidad and Tobago",
            "code": "tt"
        }, {
            "name": "Tunisia",
            "code": "tn"
        }, {
            "name": "Turkey",
            "code": "tr"
        }, {
            "name": "Turkmenistan",
            "code": "tm"
        }, {
            "name": "Turks and Caicos Islands",
            "code": "tc"
        }, {
            "name": "Tuvalu",
            "code": "tv"
        }, {
            "name": "Uganda",
            "code": "ug"
        }, {
            "name": "Ukraine",
            "code": "ua"
        }, {
            "name": "United Arab Emirates",
            "code": "ae"
        }, {
            "name": "United Kingdom",
            "code": "gb"
        }, {
            "name": "United States",
            "code": "us"
        }, {
            "name": "Uruguay",
            "code": "uy"
        }, {
            "name": "Uzbekistan",
            "code": "uz"
        }, {
            "name": "Vanuatu",
            "code": "vu"
        }, {
            "name": "Venezuela, Bolivarian Republic of",
            "code": "ve"
        }, {
            "name": "Viet Nam",
            "code": "vn"
        }, {
            "name": "Virgin Islands, British",
            "code": "vg"
        }, {
            "name": "Virgin Islands, U.S.",
            "code": "vi"
        }, {
            "name": "Yemen",
            "code": "ye"
        }, {
            "name": "Zambia",
            "code": "zm"
        }, {
            "name": "Zimbabwe",
            "code": "zw"
        }];

        this.get = function () {
            return this.countries;
        }

    }

})();