use vehicle

db.createCollection("car")

db.car.insertOne({name:"Swift",model:"DTS",rented_user_count:3,mileage:18,Transmission:"automatic",rent:1300,fuel:"petrol",image_url:"http://swift.jpg"})

db.car.insertOne({name:"Skoda",model:"Slavia",rented_user_count:2,mileage:25,Transmission:"manual",rent:1500,fuel:"petrol",image_url:"http://skodas.jpg"})

db.car.insertOne({name:"Skoda",model:"Kodiaq",rented_user_count:5,mileage:15,Transmission:"automatic",rent:1800,fuel:"diesel",image_url:"http://skodako.jpg"})

db.car.insertOne({name:"Skoda",model:"Kushaq",rented_user_count:1,mileage:10,Transmission:"manual",rent:1600,fuel:"diesel",image_url:"http://skodaku.jpg"})

db.car.insertOne({name:"Skoda",model:"Octavia",rented_user_count:4,mileage:21,Transmission:"manual",rent:2000,fuel:"gas",image_url:"http://skodao.jpg"})

db.car.insertOne({name:"Audi",model:"A4",rented_user_count:3,mileage:10,Transmission:"automatic",rent:1000,fuel:"diesel",image_url:"http://audi4.jpg"})

db.car.insertOne({name:"Audi",model:"A6",rented_user_count:4,mileage:12,Transmission:"manual",rent:1100,fuel:"petrol",image_url:"http://audi6.jpg"})

db.car.insertOne({name:"Audi",model:"Q3",rented_user_count:8,mileage:8,Transmission:"manual",rent:900,fuel:"gas",image_url:"http://audi3.jpg"})

db.car.insertOne({name:"Audi",model:"Q7",rented_user_count:13,mileage:11,Transmission:"automatic",rent:1900,fuel:"petrol",image_url:"http://audi7.jpg"})

db.car.insertOne({name:"Benz",model:"A-Class",rented_user_count:1,mileage:20,Transmission:"manual",rent:3300,fuel:"diesel",image_url:"http://benza.jpg"})

db.car.insertOne({name:"Benz",model:"C-Class",rented_user_count:2,mileage:26,Transmission:"automatic",rent:2000,fuel:"diesel",image_url:"http://benzc.jpg"})

db.car.insertOne({name:"Benz",model:"E-Class",rented_user_count:1,mileage:13,Transmission:"manual",rent:2500,fuel:"gas",image_url:"http://benze.jpg"})

db.car.insertOne({name:"Benz",model:"G-Class",rented_user_count:0,mileage:18,Transmission:"automatic",rent:5000,fuel:"gas",image_url:"http://benzg.jpg"})

db.car.insertOne({name:"Toyota",model:"Camry",rented_user_count:3,mileage:11,Transmission:"automatic",rent:800,fuel:"petrol",image_url:"http://toyc.jpg"})

db.car.insertOne({name:"Toyota",model:"Vellfire",rented_user_count:6,mileage:10,Transmission:"manual",rent:900,fuel:"petrol",image_url:"http://toyv.jpg"})

db.car.insertOne({name:"Toyota",model:"Fortuner",rented_user_count:12,mileage:21,Transmission:"manual",rent:1000,fuel:"gas",image_url:"http://toyf.jpg"})

db.car.insertOne({name:"Toyota",model:"Glanza",rented_user_count:36,mileage:20,Transmission:"automatic",rent:300,fuel:"petrol",image_url:"http://toyg.jpg"})

db.car.insertOne({name:"Honda",model:"Amaze",rented_user_count:13,mileage:18,Transmission:"automatic",rent:1100,fuel:"petrol",image_url:"http://honda.jpg"})

db.car.insertOne({name:"Hyundai",model:"tuscan",rented_user_count:8,mileage:15,Transmission:"manual",rent:700,fuel:"gas",image_url:"http://hyundai.jpg"})

db.car.insertOne({name:"Tesla",model:"S",rented_user_count:3,mileage:30,Transmission:"automatic",rent:11300,fuel:"petrol",image_url:"http://tesla.jpg"})

db.car.find()

db.car.update({name:"Swift"},{$set:{mileage:32}})

db.car.find({name:"Swift"})

db.car.updateMany({name:"Skoda"},{$set:{fuel:"manual"}})

db.car.find({name:"Skoda"})

db.car.find({name:"Skoda"}).sort({rented_user_count:1})

db.car.find({name:"Benz"}).sort({Mileage:-1})

db.car.find({name:"Toyota"}).sort({Mileage:-1,rent:1})

db.car.deleteOne({name:"Tesla"})

db.car.find()

db.car.deleteMany({Transmission:'manual'})

db.car.find()
