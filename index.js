const express = require('express');
const cors = require('cors');
const app = express();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

/* Get Countries */

app.get('/get-countries', async (req, res) => {

  const countries = await prisma.country.findMany();

  res.send(countries);
  
});

/* Get Country by ID */

app.get ('/get-country/:id', async (req, res) => {

  const countryId = req.params.id;
  
  const country = await prisma.country.findUnique({
    where: {
      id: parseInt(countryId),
    },
  });

  res.send(country);
});

/* Add Country */

app.post ('/add-country', async (req, res) => {

  const countryData = req.body;

  if (!countryData.name || !countryData.description || !countryData.imgUrl) {
    return res.send({ error: 'Missing required fields' });
  }

  const country = await prisma.country.create({
    data: {
      name: countryData.name,
      description: countryData.description,
      imgUrl: countryData.imgUrl,
    },
  });

  res.send({ success: "Added " + country.name + " successfully!" });

});

/* Delete Country */

app.delete ('/delete-country/:id', async (req, res) => {

  const countryId = req.params.id;

  await prisma.country.delete({
    where: {
      id: parseInt(countryId),
    },
  });

  res.send({ success: "Deleted country " + countryId + " successfully!" });

});

/* Update Country */

app.patch ('/update-country/:id', async (req, res) => {
  const countryId = req.params.id;
  const countryData = req.body;

  const updatedCountry = await prisma.country.update({
    where: {
      id: parseInt(countryId),
    },
    data: {
      name: countryData.name || undefined,
      description: countryData.description || undefined,
      imgUrl: countryData.imgUrl || undefined,
    }
  });

  res.send({ success: "Updated country " + updatedCountry.name + " successfully!" });

});

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port`, port);
});
