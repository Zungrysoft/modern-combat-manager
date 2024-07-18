// server.js
const express = require('express');
const Instagram = require('instagram-web-api');

const app = express();
const port = process.env.PORT || 5000;

const client = new Instagram({ username: 'rickfryetheguy', password: 'hfuieqopdeqwbdhuq' });

// Endpoint to fetch Instagram posts
app.get('/api/posts', async (req, res) => {
  try {
    await client.login();
    const profile = await client.getPhotosByUsername({ username: 'calvin_dv' });
    res.json(profile.edge_owner_to_timeline_media.edges.map(edge => edge.node));
  } catch (error) {
    console.error('Error fetching Instagram posts', error);
    res.status(500).send('Error fetching Instagram posts');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
