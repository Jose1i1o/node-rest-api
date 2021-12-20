const db = require("../models");

function seedUsers() {
  return [{
      userName: "Joselito",
      email: "guadix88@mail.com",
      password: "123456",
      isAdmin: true,
    },
    {
      userName: "userTest",
      email: "test@test.com",
      password: "123456",
      isAdmin: false,
    },
  ];
}

async function seedMovies() {
  const debickiId = await db.Person.find({
    lastName: "Debicki"
  }, {
    _id: 1
  });
  const johnDavidId = await db.Person.find({
    firstName: "John David"
  }, {
    _id: 1
  }, );
  const nolanId = await db.Person.find({
    lastName: "Nolan"
  }, {
    _id: 1
  });
  const thompsonId = await db.Person.find({
    lastName: "Thompson"
  }, {
    _id: 1
  });
  const deepId = await db.Person.find({
    lastName: "Deep"
  }, {
    _id: 1
  });
  const winonaId = await db.Person.find({
    firstName: "Winona"
  }, {
    _id: 1
  });
  const burtonId = await db.Person.find({
    lastName: "Burton"
  }, {
    _id: 1
  });
  const baleId = await db.Person.find({
    lastName: "Bale"
  }, {
    _id: 1
  });
  const emilyId = await db.Person.find({
    firstName: "Emily"
  }, {
    _id: 1
  });
  const CaineId = await db.Person.find({
    lastName: "Caine"
  }, {
    _id: 1
  });
  const DiCaprioId = await db.Person.find({
    lastName: "DiCaprio"
  }, {
    _id: 1
  });
  const PageId = await db.Person.find({
    lastName: "Page"
  }, {
    _id: 1
  });
  const ElfmanId = await db.Person.find({
    lastName: "Elfman"
  }, {
    _id: 1
  });
  const SarandonId = await db.Person.find({
    lastName: "Sarandon"
  }, {
    _id: 1
  });
  const HathawayId = await db.Person.find({
    lastName: "Hathaway"
  }, {
    _id: 1
  });
  const McConaugheyId = await db.Person.find({
    lastName: "McConaughey"
  }, {
    _id: 1
  }, );

  return [
    // Movie numb 1
    {
      title: "Tenet",
      releaseYear: 2020,
      genres: ["action", "sci-Fi", "thriller"],
      duration: "2h 30min",
      cast: [...debickiId, ...johnDavidId],
      crew: [...nolanId, ...thompsonId],
    },
    // Movie numb 2
    {
      title: "Edward Scissorhands",
      releaseYear: 1990,
      genres: ["drama", "fantasy", "romance"],
      duration: "1h 45min",
      cast: [...deepId, ...winonaId],
      crew: [...burtonId, ...thompsonId],
    },
    // Movie numb 3
    {
      title: "Corpse Bride",
      releaseYear: 2005,
      genres: ["animation", "drama", "family"],
      duration: "1h 17min",
      cast: [...deepId, ...emilyId],
      crew: [...burtonId, ...thompsonId],
    },
    // Movie numb 4
    {
      title: "Batman Begins",
      releaseYear: 2005,
      genres: ["action", "adventure"],
      duration: "2h 20min",
      cast: [...baleId, ...CaineId],
      crew: [...nolanId, ...thompsonId],
    },
    // Movie numb 5
    {
      title: "Inception",
      releaseYear: 2005,
      genres: ["action", "adventure", "sci-Fi"],
      duration: "2h 28min",
      cast: [...DiCaprioId, ...PageId],
      crew: [...nolanId, ...thompsonId],
    },
    // Movie numb 6
    {
      title: "The Nightmare Before Christmas",
      releaseYear: 1993,
      genres: ["animation", "family", "fantasy"],
      duration: "1h 16min",
      cast: [...ElfmanId, ...SarandonId],
      crew: [...burtonId, ...thompsonId],
    },
    // Movie numb 7
    {
      title: "Interstellar",
      releaseYear: 2014,
      genres: ["adventure", "drama", "sci-Fi"],
      duration: "2h 49min",
      cast: [...McConaugheyId, ...HathawayId],
      crew: [...nolanId, ...thompsonId],
    },
  ];
}

function seedPerson() {
  return [{
      firstName: "Christopher",
      lastName: "Nolan",
      dateOfBirth: Date("1970-07-30"),
      placeOfBirth: "London",
      roles: ["director"],
    },
    {
      firstName: "John David",
      lastName: "Washington",
      dateOfBirth: Date("1984-07-24"),
      placeOfBirth: "Los Angeles",
      roles: ["actor"],
    },
    {
      firstName: "Tim",
      lastName: "Burton",
      dateOfBirth: Date("1958-08-25"),
      placeOfBirth: "Burbank",
      roles: ["director"],
    },
    {
      firstName: "Johnny",
      lastName: "Deep",
      dateOfBirth: Date("1963-06-09"),
      placeOfBirth: "Owensboro",
      roles: ["actor"],
    },
    {
      firstName: "Winona",
      lastName: "Ryder",
      dateOfBirth: Date("1971-10-29"),
      placeOfBirth: "Winona",
      roles: ["actress"],
    },
    {
      firstName: "Caroline",
      lastName: "Thompson",
      dateOfBirth: Date("1956-04-23"),
      placeOfBirth: "Washington",
      roles: ["writer"],
    },
    {
      firstName: "Elizabeth",
      lastName: "Debicki",
      dateOfBirth: Date("1990-08-24"),
      placeOfBirth: "Paris",
      roles: ["actress"],
    },
    {
      firstName: "Emily",
      lastName: "Watson",
      dateOfBirth: Date("1967-01-14"),
      placeOfBirth: "Islington",
      roles: ["actress"],
    },
    {
      firstName: "Christian",
      lastName: "Bale",
      dateOfBirth: Date("1974-01-30"),
      placeOfBirth: "Haverfordwest",
      roles: ["actor"],
    },
    {
      firstName: "Michael",
      lastName: "Caine",
      dateOfBirth: Date("1933-03-14"),
      placeOfBirth: "Rotherhithe",
      roles: ["actor"],
    },
    {
      firstName: "Leonardo",
      lastName: "DiCaprio",
      dateOfBirth: Date("1974-11-11"),
      placeOfBirth: "Hollywood",
      roles: ["actor"],
    },
    {
      firstName: "Elliot",
      lastName: "Page",
      dateOfBirth: Date("1987-02-21"),
      placeOfBirth: "Halifax",
      roles: ["actress"],
    },
    {
      firstName: "Danny",
      lastName: "Elfman",
      dateOfBirth: Date("1953-05-29"),
      placeOfBirth: "Los Angeles",
      roles: ["actor"],
    },
    {
      firstName: "Chris",
      lastName: "Sarandon",
      dateOfBirth: Date("1942-07-24"),
      placeOfBirth: "Beckley",
      roles: ["actor"],
    },
    {
      firstName: "Matthew",
      lastName: "McConaughey",
      dateOfBirth: Date("1969-11-04"),
      placeOfBirth: "Uvalde",
      roles: ["actor"],
    },
    {
      firstName: "Anne",
      lastName: "Hathaway",
      dateOfBirth: Date("1982-11-12"),
      placeOfBirth: "Brooklyn",
      roles: ["actress"],
    },
  ];
}

module.exports = {
  seedUsers: seedUsers,
  seedMovies: seedMovies,
  seedPerson: seedPerson,
};