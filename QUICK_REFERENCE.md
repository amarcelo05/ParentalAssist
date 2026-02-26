# ParentalAssist - Quick Reference Guide

**Status**: Production-ready static site (v1.0)  
**Last Updated**: February 26, 2026

---

## Project Files at a Glance

| File | Purpose |
|------|---------|
| `src/index.html` | Homepage with hero section and email capture |
| `src/assets/css/styles.css` | Complete design system (2000+ lines) |
| `src/assets/js/main.js` | Core JavaScript functionality |
| `src/pages/lessons.html` | Video library with filtering |
| `src/pages/lesson.html` | Single lesson page template |
| `src/pages/about.html` | About mission page |
| `src/pages/contact.html` | Contact/feedback form |
| `src/content/data/videos.json` | Lesson metadata & content |
| `DEVELOPER_README.md` | Full development documentation |
| `LESSON_TEMPLATE.md` | Content creator's guide |
| `DEPLOYMENT_CHECKLIST.md` | Pre-launch checklist |

---

## Key Features

### Design System
- **Colors**: 12+ CSS variables (primary blue, sage green, warm neutral)
- **Typography**: Responsive sizing, 4 line-height options
- **Spacing**: 8-point grid system (0.5rem to 4rem)
- **Components**: Buttons, cards, forms, badges, video embed

### Responsive Breakpoints
- Mobile: `max-width: 480px`
- Tablet: `max-width: 768px`
- Desktop: `max-width: 1200px`

### Pages & Routes
```
/ (index.html)
/pages/lessons.html - Video library
/pages/lesson.html?id=001 - Single lesson
/pages/about.html - About mission
/pages/contact.html - Contact form
```

---

## Common Tasks

### Add a New Lesson
1. Record video, upload to YouTube
2. Get YouTube ID from URL
3. Add entry to `src/content/data/videos.json`
4. Push to GitHub
5. Live in <2 minutes

**Example JSON Entry:**
```json
{
  "id": "008",
  "title": "Your Title",
  "summary": "Short summary",
  "duration": "8 minutes",
  "youtubeId": "ABC123DEF",
  "gradient": "#4a90c1, #7a9d75",
  "topics": ["defusing", "homework"],
  "published": "2026-03-05",
  "keyTakeaways": ["Point 1", "Point 2", "Point 3"],
  "transcript": "Full transcript..."
}
```

### Change Brand Colors
Edit CSS variables in `src/assets/css/styles.css` (top of file):
```css
--primary-blue: #4a90c1;
--sage-green: #7a9d75;
--warm-neutral: #c4a88a;
```

### Add a New Page
1. Create `src/pages/mypage.html`
2. Copy header/footer from existing page
3. Include CSS/JS: `<link rel="stylesheet" href="../assets/css/styles.css">`
4. Update nav menu in header

### Deploy to GitHub Pages
```bash
git add .
git commit -m "Description of changes"
git push origin main
# GitHub Pages auto-deploys ~2 minutes
```

---

## Video Embedding

All videos use responsive YouTube embeds:
```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

The `video-container` class maintains 16:9 aspect ratio automatically.

---

## Forms

All forms use Netlify Forms (no backend needed):
```html
<form name="my-form" method="POST" data-netlify="true">
  <input type="email" name="email" required>
  <button type="submit">Submit</button>
</form>
```

Submissions appear in Netlify dashboard automatically.

---

## CSS Classes Quick Reference

### Layout
- `.container` - Max 1200px, centered
- `.section` - Full-width section with padding
- `.grid` - CSS Grid container
- `.grid-3` - 3-column grid (auto-responsive)

### Components
- `.btn .btn-primary` - Blue button
- `.btn .btn-secondary` - Green button
- `.card` - White card with shadow
- `.badge` - Small tag/label
- `.video-container` - Responsive video embed

### Typography
- `h1`, `h2`, `h3`, `h4` - Heading styles
- `strong` - Bold text (blue-dark)
- `em` - Italic text (sage-green)

---

## JavaScript Functions

### Load Videos on Homepage
Automatic on page load. Videos pulled from `videos.json`.

### Mobile Menu Toggle
```javascript
// Hamburger menu auto-opens/closes on mobile
// Click closes on link click
// ESC key closes
```

### Form Handling
Netlify handles via `data-netlify="true"` attribute.

---

## Common CSS Modifications

### Change Button Color
```css
.btn-primary {
  background-color: YOUR_HEX_COLOR;
}
.btn-primary:hover {
  background-color: DARKER_HEX_COLOR;
}
```

### Adjust Spacing
```css
--spacing-lg: 2rem; /* Change this value */
```

### Modify Typography
```css
h1 { font-size: var(--font-size-xxl); } /* 48px */
h2 { font-size: var(--font-size-xl); }  /* 32px */
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Videos not showing | Verify YouTube ID in videos.json |
| Buttons unclickable on mobile | Check form fields use `data-netlify="true"` |
| Layout broken on mobile | Add/fix media queries in CSS |
| Forms not submitting | Check form has `name` attribute |
| CSS not loading | Check file path, clear cache (Ctrl+Shift+R) |
| JavaScript errors | Check DevTools console, verify JSON syntax |

---

## Performance Targets

- ✅ CSS: < 25KB
- ✅ JavaScript: < 10KB
- ✅ Images: < 100KB each
- ✅ Page load: < 2 seconds on 3G
- ✅ Lighthouse: 90+ score

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| Mobile Chrome | ✅ Latest version |
| Mobile Safari | ✅ Latest version |

---

## SEO Basics

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Meta descriptions on all pages (< 160 chars)
- Proper heading hierarchy (no skipped levels)
- Internal links with descriptive text
- Image alt text (for accessibility)

---

## Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit with message
git commit -m "Add new lesson: Homework Battles"

# Push to GitHub
git push origin main

# View history
git log --oneline
```

---

## External Services Integrated

| Service | Purpose | Status |
|---------|---------|--------|
| GitHub Pages | Hosting | ✅ Active |
| Netlify Forms | Form submissions | ✅ Ready (add to netlify.toml if needed) |
| YouTube | Video embedding | ✅ Active |
| Google Analytics | Traffic tracking | ⏸️ Optional |
| Font assets | Typography | ✅ System fonts (fast) |

---

## File Size Analysis

```
styles.css       ~18 KB
main.js          ~4 KB
index.html       ~8 KB
lesson.html      ~6 KB
lessons.html     ~5 KB
videos.json      ~12 KB
---
Total            ~53 KB (very fast)
```

---

## Tips & Best Practices

✅ **Do**:
- Test changes locally first
- Use semantic HTML elements
- Keep CSS organized in sections
- Add comments for complex code
- Minimize images before uploading
- Write descriptive commit messages

❌ **Don't**:
- Inline critical CSS
- Use `!important` liberally
- Hardcode colors (use CSS variables)
- Add external dependencies without review
- Commit commented-out code
- Use JavaScript when CSS would work

---

## Future Enhancement Ideas

- [ ] Dark mode toggle
- [ ] Lesson progress tracking
- [ ] Comments/discussion
- [ ] Related lessons sidebar
- [ ] Print-friendly stylesheets
- [ ] Accessibility audit (WCAG AAA)
- [ ] Performance monitoring
- [ ] A/B testing setup
- [ ] Comments plugin (Disqus)
- [ ] Analytics dashboard

---

## Contact & Support

**Questions?** Review [DEVELOPER_README.md](DEVELOPER_README.md)  
**Adding content?** See [LESSON_TEMPLATE.md](LESSON_TEMPLATE.md)  
**Ready to launch?** Check [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)

---

**Keep it simple. Keep it fast. Keep it free.** ✨
