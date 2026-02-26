# How to Add a New Lesson - Content Creator's Guide

This guide walks you through adding a new video lesson to ParentalAssist. No coding knowledge required!

## Step-by-Step Instructions

### Step 1: Create Your Video

1. **Record your lesson** (5-15 minutes is ideal)
2. **Upload to YouTube**
   - Go to youtube.com and sign in
   - Click "Create" → "Upload video"
   - Upload your video
   - Title, describe, and add tags
   - Select "Unlisted" (only people with link can watch) or "Public"
3. **Get your Video ID**
   - In the URL: `youtube.com/watch?v=**dQw4w9WgXcQ**`
   - The part after `v=` is your Video ID

### Step 2: Gather Lesson Information

Before adding to the system, collect:

- **Title**: Catchy, clear (e.g., "The Escalation Trap: Why Yelling Doesn't Work")
- **Summary**: One sentence, 40-60 words (will show on video cards)
- **Full Summary**: 2-3 paragraphs for the lesson page (100-150 words)
- **Duration**: Video length (e.g., "8 minutes")
- **Topics**: Choose 1-2 from: defusing, homework, listening, autonomy, emotions
- **Key Takeaways**: 3-5 main points from your lesson (bullet points)
- **Transcript**: Full text of what you say (helps with accessibility)
- **Color Gradient**: Two colors that match the lesson's mood

### Step 3: Pick Your Colors

Colors are hex codes. Here are some combinations:

**Calming/Connection:**
- "Primary Blue, Sage Green" → `#4a90c1, #7a9d75`
- "Light Blue, Teal" → `#6aacdb, #6ba8a6`

**Warm/Action:**
- "Coral, Warm Neutral" → `#d4927a, #c4a88a`
- "Coral, Light Warm" → `#d4927a, #e8d8c8`

**Energizing:**
- "Blue Dark, Teal" → `#2d5a8a, #6ba8a6`

Use any two hex colors you prefer!

### Step 4: Edit the Data File

1. Open `src/content/data/videos.json` in a text editor
2. Find the `"lessons":` array
3. Add a new entry at the end (before the closing bracket)

**Template:**
```json
{
  "id": "008",
  "title": "Your Lesson Title Here",
  "summary": "One-sentence summary that will show on the card preview. Keep it under 60 words.",
  "fullSummary": "A longer summary with 2-3 sentences. This shows on the individual lesson page. Explain what the lesson covers and why someone should watch it.",
  "duration": "8 minutes",
  "youtubeId": "YOUR_VIDEO_ID_HERE",
  "gradient": "#4a90c1, #7a9d75",
  "topics": ["topic1", "topic2"],
  "published": "2026-03-05",
  "keyTakeaways": [
    "First key takeaway - one clear point",
    "Second key takeaway - another important idea",
    "Third key takeaway - main concept"
  ],
  "transcript": "Full transcript of your video goes here. Copy and paste everything you said during the video."
}
```

### Step 5: Fill In Your Information

Let's go field by field:

#### `id`
- Unique identifier (just a number)
- Use the next number in sequence (001, 002, 003, etc.)
- Example: `"008"`

#### `title`
- Your lesson title
- Should be specific and benefit-focused
- Example: `"Defusing Arguments Before They Start"`
- Max 60 characters recommended

#### `summary`
- ONE sentence that summarizes the lesson
- This is what people see on the card preview
- 40-60 words is ideal
- Example: `"Learn why teen resistance often comes from feeling controlled, and how a moment of connection before your request drops defensiveness by 70%."`

#### `fullSummary`
- Longer version (2-3 sentences)
- Shown on the individual lesson page
- 100-150 words
- More detail than the summary, but not the full lesson

#### `duration`
- How long the video is
- Format: `"X minutes"`
- Examples: `"5 minutes"`, `"12 minutes"`, `"15 minutes"`

#### `youtubeId`
- Your YouTube video ID (from the URL)
- Just the ID, not the full URL
- Example: `"dQw4w9WgXcQ"` (not `youtube.com/watch?v=...`)

#### `gradient`
- Two hex color codes separated by a comma
- Used for the video card background
- Examples: `"#4a90c1, #7a9d75"` or `"#d4927a, #e8d8c8"`

#### `topics`
- Array of 1-2 topics
- Choose from these options:
  - `"defusing"` - Defusing Arguments
  - `"homework"` - Homework-related strategies
  - `"listening"` - Active Listening
  - `"autonomy"` - Respecting Teen Autonomy
  - `"emotions"` - Managing Emotions
- Format: `["topic1", "topic2"]` or `["topic1"]`

#### `published`
- Date the lesson goes live
- Format: `"YYYY-MM-DD"` (2026-03-05)
- Use today's date or when you want it published

#### `keyTakeaways`
- Array of 3-5 main points
- These are the "cliff notes" version of your lesson
- Each should be ONE clear, actionable idea
- Write in plain language: "When you... your teen learns..."
- Format:
  ```json
  "keyTakeaways": [
    "First point",
    "Second point",
    "Third point"
  ]
  ```

#### `transcript`
- Full word-for-word transcript of your video
- Everything you said, exactly as you said it
- Include natural pauses and emphasis
- This helps with:
  - Accessibility (people who are deaf/hard of hearing)
  - SEO (search engines can read text)
  - People who prefer to read
- Don't worry about perfect grammar—keep it natural

### Step 6: Check Your Work

Before submitting, verify:

- [ ] Video ID is correct (can paste into YouTube URL)
- [ ] All fields are filled in
- [ ] JSON is valid (properly formatted with commas)
- [ ] Topics are spelled correctly
- [ ] Date is in YYYY-MM-DD format
- [ ] Number of keyTakeaways is 3-5
- [ ] Colors are hex codes (start with #)

### Step 7: Test the Site

1. Open `src/index.html` in a web browser
2. Check if your new lesson appears:
   - On the homepage video grid
   - In the lessons library (pages/lessons.html)
   - Can you click and view the lesson page?
3. Test on mobile (use browser's mobile view)

### Step 8: Submit

Once you've verified everything works:
1. Save your files
2. Commit to git: `git add . && git commit -m "Add lesson: [Your Title]"`
3. Push to GitHub: `git push origin main`
4. GitHub Pages will automatically update the live site

---

## Reference: Complete Example

Here's a complete, realistic example:

```json
{
  "id": "008",
  "title": "When Your Teen Says 'You Never Listen to Me'",
  "summary": "Decode what your teen really means and respond in ways that deepen trust instead of triggering more arguments.",
  "fullSummary": "When a teen says 'You never listen to me,' they're usually not complaining about your hearing. They mean you haven't understood their perspective or validated their feelings. This lesson teaches you the exact steps to listen in ways that make your teen feel truly heard and seen.",
  "duration": "9 minutes",
  "youtubeId": "abcdef123456",
  "gradient": "#6ba8a6, #7a9d75",
  "topics": ["listening", "emotions"],
  "published": "2026-03-10",
  "keyTakeaways": [
    "When teens say you don't listen, they mean you haven't validated their feelings (not that you have bad hearing)",
    "Reflect back what you hear: 'So you're feeling... because...' before you respond or problem-solve",
    "Ask curious questions instead of jumping to solutions: 'What was that like for you?' vs. 'You should have...'",
    "Validate emotions even when you disagree with choices: 'I understand you felt angry' is not the same as 'You were right'"
  ],
  "transcript": "Here's what I notice... [full transcript]"
}
```

---

## Common Mistakes to Avoid

❌ **Wrong**: Comma at the end of the last item  
✅ **Right**: No comma after the last item in a list

❌ **Wrong**: `"youtubeId": "youtube.com/watch?v=abc123"`  
✅ **Right**: `"youtubeId": "abc123"`

❌ **Wrong**: `"published": "March 5, 2026"`  
✅ **Right**: `"published": "2026-03-05"`

❌ **Wrong**: `"topics": "defusing, homework"`  
✅ **Right**: `"topics": ["defusing", "homework"]`

❌ **Wrong**: `"gradient": "#4a90c1 and #7a9d75"`  
✅ **Right**: `"gradient": "#4a90c1, #7a9d75"`

---

## Questions?

- **JSON not working?** Use [jsonlint.com](https://jsonlint.com) to validate
- **Can't find video ID?** Watch this: [How to find YouTube Video ID](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
- **Topic not listed?** Email suggestions to hello@parentalassist.com
- **Need help?** Contact the development team

Good luck! We're excited to see your lessons live! 🎬
