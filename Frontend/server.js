const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenAI } = require('@google/genai');


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const ai = new GoogleGenAI({ apiKey: "AIzaSyDcW2wOfAjvSPpfF0SkLPs64UEbMcwUf4I" });

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: message,
        });

        const response = result.text;
        res.json({ reply: response });
    } catch (err) {
        console.error(err);
        res.status(500).json({ reply: 'Something went wrong.' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
