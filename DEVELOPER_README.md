# ParentalAssist Developer Documentation

## Project Overview

**ParentalAssist** is a static, video-first educational website for parents of high school students, focused on communication strategies. The site is designed to work on GitHub Pages with a clean vanilla HTML/CSS/JS structure for easy content updates.

**Live URL:** (To be updated when deployed)  
**Repository:** (To be updated)  
**Target Audience:** Parents of early-to-mid high school students (grades 9-11)

---

## Project Structure

```
ParentalAssist/
├── src/                              # Main source directory
│   ├── index.html                    # Homepage
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css            # Main stylesheet (complete design system)
│   │   ├── js/
│   │   │   └── main.js               # Core JavaScript functionality
│   │   └── img/                      # Images, logos, etc.
│   ├── pages/
│   │   ├── lessons.html              # Video library/course page
│   │   ├── lesson.html               # Single lesson template
│   │   ├── about.html                # About the mission
│   │   └── contact.html              # Contact form
│   └── content/
│       ├── lessons/                  # Individual lesson markdown files (future)
│       └── data/
│           └── videos.json           # Lesson metadata and content
├── README.md                         # This file
├── InitialBuilding                   # Project planning notes (reference)
└── .git/                             # Git repository

```

---

## Design System

### Color Palette

All colors are defined as CSS variables in `styles.css`. This allows for easy global changes.

#### Primary Colors
- **Primary Blue**: `#4a90c1` (main brand color)
- **Primary Blue Light**: `#6aacdb`
- **Primary Blue Dark**: `#2d5a8a`

#### Secondary Colors
- **Sage Green**: `#7a9d75` (calming, secondary actions)
- **Sage Green Light**: `#9fbf99`
- **Sage Green Dark**: `#556b52`

- **Warm Neutral**: `#c4a88a` (accent color)
- **Warm Neutral Light**: `#e8d8c8`
- **Warm Neutral Dark**: `#9a7f66`

#### Accent Colors
- **Teal**: `#6ba8a6`
- **Coral**: `#d4927a`

#### Neutrals
- **White**: `#ffffff`
- **Off-white**: `#f8f7f5` (page background)
- **Light Gray**: `#e8e6e1`
- **Medium Gray**: `#b8b4ad`
- **Dark Gray**: `#5a5450`
- **Text Dark**: `#2c2520`

### Typography

- **Font Family**: System fonts (Apple System, Segoe UI, etc.)
- **Base Font Size**: 16px
- **Line Heights**: Optimized for readability and mobile
- **Hierarchy**: H1-H6 tags with responsive sizing

### Responsive Design

- **Mobile-First**: All designs start with mobile (max-width: 480px)
- **Tablet**: max-width: 768px
- **Desktop**: max-width: 1200px
- **Wide**: max-width: 1400px

---

## Key Features

### 1. Mobile-First Responsive Design
- 80%+ traffic expected on mobile
- All video players are fully responsive (16:9 aspect ratio)
- Touch-friendly buttons and forms
- Readable typography on all screen sizes

### 2. Video-First Content Structure
- Embedded YouTube videos with responsive iframe
- Video summaries and transcripts for accessibility
- Duration displayed for each lesson
- Topic tags for organization

### 3. Email Capture (Lead Magnet)
- Form on homepage for "High Schooler Translation Blueprint"
- Netlify Forms integration (no backend required)
- Follow-up email signup forms on other pages

### 4. Lesson Library & Filtering
- Grid-based lesson display
- Filter by topic (defusing, homework, listening, autonomy, emotions)
- Full-text search functionality
- Individual lesson pages with related content

### 5. Navigation & SEO
- Clean semantic HTML structure
- Breadcrumb navigation
- Internal linking between related lessons
- Meta tags for social sharing and SEO

---

## How to Add Content

### Adding a New Video Lesson

1. **Update `src/content/data/videos.json`**:

```json
{
  "id": "008",
  "title": "Your Lesson Title",
  "summary": "One-sentence summary for the card preview",
  "fullSummary": "Longer summary for the lesson page",
  "duration": "8 minutes",
  "youtubeId": "YOUR_YOUTUBE_ID",
  "gradient": "#4a90c1, #6ba8a6",
  "topics": ["topic1", "topic2"],
  "published": "2026-03-05",
  "keyTakeaways": [
    "Key takeaway 1",
    "Key takeaway 2",
    "Key takeaway 3"
  ],
  "transcript": "Full video transcript"
}
```

**Fields Explanation:**
- `id`: Unique identifier (use 3-digit format: 001, 002, etc.)
- `title`: Lesson title (24-60 characters recommended)
- `summary`: Card preview text (1-2 sentences, ~60 words)
- `fullSummary`: Full lesson description (2-3 paragraphs)
- `duration`: Video length (e.g., "8 minutes")
- `youtubeId`: YouTube video ID from the URL
- `gradient`: Two hex colors separated by comma (for card background)
- `topics`: Array of topics (choose from: "defusing", "homework", "listening", "autonomy", "emotions")
- `published`: ISO date format (YYYY-MM-DD)
- `keyTakeaways`: 3-5 important points from the lesson
- `transcript`: Full video transcript for accessibility

2. **Topics**:
Current available topics:
- `defusing` - Defusing Arguments
- `homework` - Homework-related strategies
- `listening` - Active Listening
- `autonomy` - Respecting Teen Autonomy
- `emotions` - Managing Emotions

Add new topics as needed, but keep them under control for better filtering.

3. **Video Colors**:
Choose gradient colors that evoke the lesson's emotional tone. Examples:
- Calming lesson: Blues and greens
- Action-oriented: Oranges and teals
- Emotional management: Warm tones and blues

### Updating Email Capture Forms

All forms use **Netlify Forms** for submissions. No backend required. Update the form name for tracking purposes:

```html
<form name="my-form-name" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

Netlify will automatically create the form in your dashboard and send notifications when submissions come in.

### Adding Pages

To add a new page (e.g., a blog post):

1. Create an HTML file in `src/pages/`
2. Use the consistent header/footer structure from existing pages
3. Import `assets/css/styles.css` and `assets/js/main.js`
4. Update navigation links in header
5. Ensure responsive design with CSS classes

---

## Deployment

### GitHub Pages Setup

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial project setup"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set "Source" to "main" branch
   - Set folder to `/src` (or root if you move files)
   - GitHub will provide your live URL

3. **Custom Domain** (Optional):
   - Add CNAME file with your domain
   - Update DNS settings per GitHub's instructions

### Building Locally (Optional)

If you want to test locally before pushing:

```bash
# No build step needed for static site
# Just open files in a browser or use Python's simple server:
cd src
python -m http.server 8000
# Visit http://localhost:8000
```

---

## Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties (variables), Grid, Flexbox
- **JavaScript**: Vanilla JS (no dependencies)
- **Video**: YouTube embeds (responsive)
- **Forms**: Netlify Forms (serverless)

### Hosting
- **GitHub Pages** (free, built-in CI/CD)
- **CDN**: Automatic via GitHub

### Future Optional Integrations
- Google Analytics (for tracking)
- Mailchimp/ConvertKit (for email list management)
- Calendly (for booking calls)
- Discord/Slack (for community)

---

## Customization Guide

### Changing Brand Colors

All colors are CSS variables at the top of `styles.css`:

```css
:root {
  --primary-blue: #4a90c1;
  /* etc. */
}
```

Change the hex values to update the entire site instantly.

### Updating the Logo/Branding

1. Change `.logo` text content in header
2. Add a logo image:
   - `<img src="assets/img/logo.png" alt="ParentalAssist" class="logo">`
3. Style with CSS if needed

### Modifying Email Capture Form

Edit the form fields in `index.html`:

```html
<form name="signup" method="POST" data-netlify="true">
  <input type="text" name="name" placeholder="Your name" required>
  <input type="email" name="email" placeholder="Your email" required>
  <!-- Add more fields as needed -->
  <button type="submit">Submit</button>
</form>
```

Netlify will automatically capture submissions.

### SEO & Meta Tags

Update `<meta>` tags in each HTML file's `<head>`:

```html
<meta name="description" content="Your page description (max 160 chars)">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<title>Page Title - ParentalAssist</title>
```

---

## Performance & Best Practices

### Image Optimization
- Keep images under 100KB
- Use JPEG for photographs, PNG for graphics
- Compress before uploading
- Use srcset for responsive images (future enhancement)

### Code Quality
- Maintain semantic HTML structure
- Use CSS classes consistently
- Test on mobile devices regularly
- Check form submissions in Netlify dashboard

### Accessibility
- Alt text on all images
- Semantic HTML headings hierarchy
- Sufficient color contrast (WCAG AAA)
- Keyboard navigation support
- Video captions and transcripts

---

## Troubleshooting

### Videos Not Showing
- Verify YouTube ID is correct
- Check video is public/unlisted (not private)
- Test URL: `https://www.youtube.com/embed/[YOUTUBE_ID]`

### Forms Not Submitting
- Ensure form has `name` and `method="POST"`
- Add `data-netlify="true"` to form tag
- Check Netlify dashboard for submissions

### Mobile Layout Breaking
- Check viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Use media queries in CSS for responsive design
- Test with DevTools device emulation

### CSS Not Loading
- Verify file path is correct (relative to HTML)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check for typos in `href` attribute

---

## Future Enhancements

- [ ] Markdown support for lesson content
- [ ] Comments/discussion on lessons
- [ ] Email list integration (Convertkit/Mailchimp)
- [ ] Community forum or Discord
- [ ] Mobile app version
- [ ] Interactive worksheets/PDFs
- [ ] Coaching/1-on-1 service tier
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] User accounts for progress tracking

---

## Contributing

When making changes:

1. Test on both desktop and mobile
2. Verify forms work in Netlify
3. Check links are not broken
4. Maintain consistent styling
5. Document major changes

---

## License & Legal

- Content: © 2026 ParentalAssist
- All rights reserved
- See `legal/` folder for privacy policy and terms (to be added)

---

## Support & Questions

For questions about setup, customization, or content:
1. Check this documentation
2. Review existing pages/code for examples
3. Contact: [hello@parentalassist.com] (when live)

---

## Changelog

### v1.0.0 (Initial Release - 2026-02-26)
- [x] Complete design system (colors, typography, spacing)
- [x] Responsive HTML/CSS framework
- [x] Homepage with hero section
- [x] Video library with filtering
- [x] Individual lesson pages with transcripts
- [x] About & Contact pages
- [x] Email capture forms
- [x] Mobile-first responsive design
- [x] Netlify Forms integration
- [x] Sample video data structure
- [ ] Deployment to GitHub Pages
- [ ] Google Analytics setup
- [ ] SEO optimization

---

**Last Updated:** February 26, 2026  
**Maintained By:** Lead Developer  
**Status:** Ready for Content Population & Deployment
