import axios from 'axios';

export const CREATE_PET = 'CREATE_PET';
export const LOAD_PETS = 'LOAD_PETS';

export function createPet(props) {
  return {
    type: CREATE_PET,
    payload: props
  };
}

export function loadPets(){

  const pets = [{
  "id" : 1,
  "publicationDate" : "2016-12-10T18:42:48Z",
  "specie" : "Cat",
  "race" : "Dominican (Dominican Republic)",
  "sex" : "M",
  "name" : "Eugene",
  "description" : "Dilate L Brach Art, Bifurc, w 2 Intralum Dev, Open",
  "weight" : 672,
  "castrated" : false,
  "dewormed" : true,
  "picture1" : "https://robohash.org/distinctioquibusdamid.jpg?size=250x250&set=set1",
  "picture2" : "https://robohash.org/voluptatemipsaet.png?size=250x250&set=set1",
  "picture3" : "https://robohash.org/corruptinecessitatibuslibero.jpg?size=250x250&set=set1"
}, {
  "id" : 2,
  "publicationDate" : "2016-06-21T23:23:03Z",
  "specie" : "Dog",
  "race" : "Osage",
  "sex" : "F",
  "name" : "Tina",
  "description" : "Removal of Nonaut Sub from L Up Extrem, Extern Approach",
  "weight" : 1086,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/quieosnostrum.bmp?size=250x250&set=set1",
  "picture2" : "https://robohash.org/providenthicquae.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/sequiremaut.png?size=250x250&set=set1"
}, {
  "id" : 3,
  "publicationDate" : "2015-12-16T05:16:05Z",
  "specie" : "Cat",
  "race" : "Choctaw",
  "sex" : "F",
  "name" : "Lori",
  "description" : "Insertion of Reservoir into Abd Subcu/Fascia, Open Approach",
  "weight" : 801,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/esseblanditiisrerum.jpg?size=250x250&set=set1",
  "picture2" : "https://robohash.org/quisquamducimusaspernatur.bmp?size=250x250&set=set1",
  "picture3" : "https://robohash.org/voluptasdolorumnulla.bmp?size=250x250&set=set1"
}, {
  "id" : 4,
  "publicationDate" : "2016-09-29T04:07:58Z",
  "specie" : "Dog",
  "race" : "Chinese",
  "sex" : "F",
  "name" : "Ashley",
  "description" : "HDR Brachytherapy of Stomach using Iodine 125",
  "weight" : 257,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/voluptatemeta.png?size=250x250&set=set1",
  "picture2" : "https://robohash.org/doloresmollitiarerum.png?size=250x250&set=set1",
  "picture3" : "https://robohash.org/dignissimosetvoluptatibus.jpg?size=250x250&set=set1"
}, {
  "id" : 5,
  "publicationDate" : "2016-10-27T16:32:38Z",
  "specie" : "Cat",
  "race" : "South American",
  "sex" : "M",
  "name" : "Ryan",
  "description" : "Drainage of R Finger Phalanx Jt, Perc Endo Approach, Diagn",
  "weight" : 334,
  "castrated" : false,
  "dewormed" : true,
  "picture1" : "https://robohash.org/temporibusnecessitatibuseaque.png?size=250x250&set=set1",
  "picture2" : "https://robohash.org/ullamsintet.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/utaliasquia.jpg?size=250x250&set=set1"
}, {
  "id" : 6,
  "publicationDate" : "2016-03-25T03:32:36Z",
  "specie" : "Dog",
  "race" : "Cuban",
  "sex" : "F",
  "name" : "Annie",
  "description" : "Excision of R Acromioclav Jt, Open Approach, Diagn",
  "weight" : 1954,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/utrecusandaearchitecto.bmp?size=250x250&set=set1",
  "picture2" : "https://robohash.org/beataemaximeut.png?size=250x250&set=set1",
  "picture3" : "https://robohash.org/aliquidrepellendusquo.png?size=250x250&set=set1"
}, {
  "id" : 7,
  "publicationDate" : "2016-02-21T02:16:35Z",
  "specie" : "Dog",
  "race" : "Spaniard",
  "sex" : "M",
  "name" : "Joshua",
  "description" : "Change Packing Material on Chest Wall",
  "weight" : 1294,
  "castrated" : true,
  "dewormed" : true,
  "picture1" : "https://robohash.org/excepturivoluptatemdolores.jpg?size=250x250&set=set1",
  "picture2" : "https://robohash.org/eosquiqui.bmp?size=250x250&set=set1",
  "picture3" : "https://robohash.org/quiminimaaperiam.png?size=250x250&set=set1"
}, {
  "id" : 8,
  "publicationDate" : "2016-10-11T11:32:13Z",
  "specie" : "Dog",
  "race" : "Seminole",
  "sex" : "F",
  "name" : "Nicole",
  "description" : "Low Dose Rate (LDR) Brachytherapy of Eye using Iodine 125",
  "weight" : 779,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/consequaturlaudantiumsint.png?size=250x250&set=set1",
  "picture2" : "https://robohash.org/etquisquamexcepturi.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/voluptatibusestquod.png?size=250x250&set=set1"
}, {
  "id" : 9,
  "publicationDate" : "2016-07-26T00:37:16Z",
  "specie" : "Cat",
  "race" : "Peruvian",
  "sex" : "F",
  "name" : "Karen",
  "description" : "Fusion R Temporomandib Jt w Synth Sub, Perc Endo",
  "weight" : 1723,
  "castrated" : true,
  "dewormed" : true,
  "picture1" : "https://robohash.org/arepellendusconsequuntur.jpg?size=250x250&set=set1",
  "picture2" : "https://robohash.org/blanditiisquisrem.png?size=250x250&set=set1",
  "picture3" : "https://robohash.org/nonautdolor.png?size=250x250&set=set1"
}, {
  "id" : 10,
  "publicationDate" : "2016-08-14T10:06:16Z",
  "specie" : "Cat",
  "race" : "Uruguayan",
  "sex" : "F",
  "name" : "Amanda",
  "description" : "Removal of Splint on Back",
  "weight" : 1647,
  "castrated" : false,
  "dewormed" : false,
  "picture1" : "https://robohash.org/quiaetquis.bmp?size=250x250&set=set1",
  "picture2" : "https://robohash.org/remquosvoluptatem.bmp?size=250x250&set=set1",
  "picture3" : "https://robohash.org/etnecessitatibusquo.bmp?size=250x250&set=set1"
}, {
  "id" : 11,
  "publicationDate" : "2016-12-03T22:31:27Z",
  "specie" : "Dog",
  "race" : "Ottawa",
  "sex" : "M",
  "name" : "Jimmy",
  "description" : "CT Scan of Bi Renal Art using L Osm Contrast",
  "weight" : 1027,
  "castrated" : false,
  "dewormed" : true,
  "picture1" : "https://robohash.org/faceredoloresenim.bmp?size=250x250&set=set1",
  "picture2" : "https://robohash.org/pariaturdoloremcum.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/sitdoloremqui.png?size=250x250&set=set1"
}, {
  "id" : 12,
  "publicationDate" : "2016-03-01T12:51:40Z",
  "specie" : "Cat",
  "race" : "Alaska Native",
  "sex" : "F",
  "name" : "Heather",
  "description" : "Excision of R Acromioclav Jt, Perc Endo Approach, Diagn",
  "weight" : 394,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/modiaperiamnisi.bmp?size=250x250&set=set1",
  "picture2" : "https://robohash.org/exercitationemexpeditaiure.bmp?size=250x250&set=set1",
  "picture3" : "https://robohash.org/saepenecessitatibusneque.bmp?size=250x250&set=set1"
}, {
  "id" : 13,
  "publicationDate" : "2016-02-24T07:11:05Z",
  "specie" : "Dog",
  "race" : "Native Hawaiian",
  "sex" : "F",
  "name" : "Jacqueline",
  "description" : "Introduce of Oth Therap Subst into Male Reprod, Via Opening",
  "weight" : 735,
  "castrated" : false,
  "dewormed" : true,
  "picture1" : "https://robohash.org/temporemaioresamet.jpg?size=250x250&set=set1",
  "picture2" : "https://robohash.org/repudiandaedelenitiquia.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/consequaturrerumomnis.jpg?size=250x250&set=set1"
}, {
  "id" : 14,
  "publicationDate" : "2016-11-07T11:19:05Z",
  "specie" : "Dog",
  "race" : "Sri Lankan",
  "sex" : "F",
  "name" : "Jane",
  "description" : "Beam Radiation of Chest Wall using Photons 1 - 10 MeV",
  "weight" : 1869,
  "castrated" : false,
  "dewormed" : false,
  "picture1" : "https://robohash.org/voluptasexpeditaeius.png?size=250x250&set=set1",
  "picture2" : "https://robohash.org/autveniammodi.bmp?size=250x250&set=set1",
  "picture3" : "https://robohash.org/molestiaeexrerum.jpg?size=250x250&set=set1"
}, {
  "id" : 15,
  "publicationDate" : "2016-03-29T00:21:58Z",
  "specie" : "Dog",
  "race" : "Navajo",
  "sex" : "F",
  "name" : "Kathleen",
  "description" : "Replacement of R Ext Ear with Synth Sub, Open Approach",
  "weight" : 1644,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/etdolorarchitecto.jpg?size=250x250&set=set1",
  "picture2" : "https://robohash.org/eumvelitlaboriosam.png?size=250x250&set=set1",
  "picture3" : "https://robohash.org/doloreetarchitecto.jpg?size=250x250&set=set1"
}, {
  "id" : 16,
  "publicationDate" : "2016-10-27T20:41:19Z",
  "specie" : "Dog",
  "race" : "Seminole",
  "sex" : "M",
  "name" : "Andrew",
  "description" : "Occlusion of R Up Lobe Bronc with Intralum Dev, Via Opening",
  "weight" : 1943,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/exercitationemetid.jpg?size=250x250&set=set1",
  "picture2" : "https://robohash.org/eumenimsoluta.png?size=250x250&set=set1",
  "picture3" : "https://robohash.org/doloribusporromolestiae.jpg?size=250x250&set=set1"
}, {
  "id" : 17,
  "publicationDate" : "2016-04-07T18:13:32Z",
  "specie" : "Cat",
  "race" : "Chinese",
  "sex" : "F",
  "name" : "Jacqueline",
  "description" : "Replacement of Esophagus with Nonaut Sub, Via Opening",
  "weight" : 305,
  "castrated" : false,
  "dewormed" : true,
  "picture1" : "https://robohash.org/quoeumipsum.png?size=250x250&set=set1",
  "picture2" : "https://robohash.org/quoplaceatmodi.bmp?size=250x250&set=set1",
  "picture3" : "https://robohash.org/undeasperioresvelit.png?size=250x250&set=set1"
}, {
  "id" : 18,
  "publicationDate" : "2016-06-14T02:41:32Z",
  "specie" : "Dog",
  "race" : "Guamanian",
  "sex" : "M",
  "name" : "Albert",
  "description" : "Fusion C-thor Jt w Nonaut Sub, Post Appr P Col, Perc Endo",
  "weight" : 961,
  "castrated" : false,
  "dewormed" : false,
  "picture1" : "https://robohash.org/idutet.jpg?size=250x250&set=set1",
  "picture2" : "https://robohash.org/autrerumiusto.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/impeditvoluptatemprovident.jpg?size=250x250&set=set1"
}, {
  "id" : 19,
  "publicationDate" : "2016-06-26T08:57:31Z",
  "specie" : "Cat",
  "race" : "Black or African American",
  "sex" : "F",
  "name" : "Ann",
  "description" : "Removal of Extraluminal Device from Heart, Perc Approach",
  "weight" : 814,
  "castrated" : false,
  "dewormed" : true,
  "picture1" : "https://robohash.org/harumquimodi.bmp?size=250x250&set=set1",
  "picture2" : "https://robohash.org/delenitietiure.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/itaquelaboriosamquisquam.png?size=250x250&set=set1"
}, {
  "id" : 20,
  "publicationDate" : "2016-02-22T09:24:49Z",
  "specie" : "Cat",
  "race" : "Apache",
  "sex" : "F",
  "name" : "Diane",
  "description" : "Removal of Synth Sub from L Glenoid Cav, Open Approach",
  "weight" : 1373,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/delectuslaboriosamconsequatur.png?size=250x250&set=set1",
  "picture2" : "https://robohash.org/corporissimiliqueratione.png?size=250x250&set=set1",
  "picture3" : "https://robohash.org/utbeataeea.bmp?size=250x250&set=set1"
}, {
  "id" : 21,
  "publicationDate" : "2016-02-14T06:29:32Z",
  "specie" : "Cat",
  "race" : "Ottawa",
  "sex" : "F",
  "name" : "Kathy",
  "description" : "Binaural Electroacoustic Hearing Aid Check Assessment",
  "weight" : 168,
  "castrated" : true,
  "dewormed" : true,
  "picture1" : "https://robohash.org/accusamusporrominus.bmp?size=250x250&set=set1",
  "picture2" : "https://robohash.org/laboriosamporrocommodi.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/corruptiodiolibero.bmp?size=250x250&set=set1"
}, {
  "id" : 22,
  "publicationDate" : "2016-02-01T10:38:07Z",
  "specie" : "Dog",
  "race" : "American Indian",
  "sex" : "M",
  "name" : "Martin",
  "description" : "Removal of Drainage Device from Mesentery, Open Approach",
  "weight" : 585,
  "castrated" : true,
  "dewormed" : true,
  "picture1" : "https://robohash.org/fugiatmolestiaseos.bmp?size=250x250&set=set1",
  "picture2" : "https://robohash.org/eosvoluptatemquibusdam.png?size=250x250&set=set1",
  "picture3" : "https://robohash.org/fugiatautsint.png?size=250x250&set=set1"
}, {
  "id" : 23,
  "publicationDate" : "2016-11-10T00:58:09Z",
  "specie" : "Cat",
  "race" : "Osage",
  "sex" : "M",
  "name" : "Justin",
  "description" : "Resection of Hymen, Open Approach",
  "weight" : 464,
  "castrated" : true,
  "dewormed" : true,
  "picture1" : "https://robohash.org/etexcepturifuga.bmp?size=250x250&set=set1",
  "picture2" : "https://robohash.org/repellatmolestiasprovident.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/maiorespossimusqui.bmp?size=250x250&set=set1"
}, {
  "id" : 24,
  "publicationDate" : "2016-10-29T14:19:47Z",
  "specie" : "Cat",
  "race" : "Sioux",
  "sex" : "F",
  "name" : "Kimberly",
  "description" : "Change Drainage Device in Ureter, External Approach",
  "weight" : 887,
  "castrated" : true,
  "dewormed" : false,
  "picture1" : "https://robohash.org/modisimiliqueharum.jpg?size=250x250&set=set1",
  "picture2" : "https://robohash.org/magnamveritatiset.jpg?size=250x250&set=set1",
  "picture3" : "https://robohash.org/maximeautvel.jpg?size=250x250&set=set1"
}, {
  "id" : 25,
  "publicationDate" : "2016-10-10T02:09:59Z",
  "specie" : "Cat",
  "race" : "Tohono O'Odham",
  "sex" : "M",
  "name" : "Timothy",
  "description" : "Eustachian Tube Function Assessment",
  "weight" : 197,
  "castrated" : false,
  "dewormed" : false,
  "picture1" : "https://robohash.org/aperiamautex.png?size=250x250&set=set1",
  "picture2" : "https://robohash.org/deseruntaspernaturiusto.bmp?size=250x250&set=set1",
  "picture3" : "https://robohash.org/numquamillosit.jpg?size=250x250&set=set1"
}];


  const payload = {
    data: pets
  }


  return {
    type: LOAD_PETS,
    payload: payload
  }
}
