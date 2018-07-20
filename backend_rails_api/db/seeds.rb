# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'rest-client'
require 'json'

john = User.create({name: "John", email: "John@mail.com"})
newReading = Reading.create({reading_name: "reading one", user: john})

loin = User.create({name: "Loin", email: "Loin@dongle.com"})
loinReading = Reading.create({reading_name: "Loin's reading", user: loin})

# receive response from API then Parse it into JSON
cardsResponse = RestClient.get('https://rws-cards-api.herokuapp.com/api/v1/cards')
cards = JSON.parse(cardsResponse)

# Iterate through the cards as a hash and persist them in my database 
cards['cards'].each do |card|
    Card.create({
        card_type: card['type'],
        name: card['name'],
        value_int: card['value_int'],
        meaning_up: card['meaning_up'],
        meaning_rev: card['meaning_rev'],
        desc: card['desc']
    })
end

# THIS IS WHAT A SINGLE CARD INSTANCE LOOKS LIKE FROM THE API
# {"type"=>"major", "name_short"=>"ar01", "name"=>"The Magician", "value"=>"1", "value_int"=>1, "meaning_up"=>"Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.", "meaning_rev"=>"Physician, Magus, mental disease, disgrace, disquiet.", "desc"=>"A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change \"unto the Ogdoad.\" The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ."}


