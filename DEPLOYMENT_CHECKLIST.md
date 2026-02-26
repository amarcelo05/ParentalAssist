# Deployment & Launch Checklist

Complete this checklist before launching ParentalAssist to GitHub Pages.

## Pre-Deployment

### Content & Design
- [ ] All 7+ lessons added to `src/content/data/videos.json`
- [ ] Each lesson has:
  - [ ] Valid YouTube video ID
  - [ ] Clear title and summary
  - [ ] Duration and topics assigned
  - [ ] 3-5 key takeaways
  - [ ] Full transcript
  - [ ] Color gradient selected
- [ ] Homepage hero section customized
- [ ] "High Schooler Translation Blueprint" lead magnet offer confirmed
- [ ] About page reflects actual mission and creators
- [ ] Contact email configured (`hello@parentalassist.com`)

### Functionality Testing
- [ ] Forms submit successfully (test on Netlify)
- [ ] Email capture form works on homepage
- [ ] Video library filters correctly by topic
- [ ] Lessons load and display properly
- [ ] Video players are responsive (test on mobile)
- [ ] All internal links work
- [ ] Navigation menu works on mobile (hamburger)
- [ ] Search functionality works in lessons page

### Mobile Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad (Safari)
- [ ] All text is readable (no tiny fonts)
- [ ] Buttons are tappable (min 48x48px)
- [ ] Forms are usable on mobile
- [ ] Videos are responsive (test with DevTools)

### Desktop Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] All layouts work at 1920px wide
- [ ] Color contrast meets WCAG AAA standards
- [ ] Hover states work on buttons and links
- [ ] No horizontal scrolling

### Accessibility
- [ ] All images have alt text (if any)
- [ ] Heading hierarchy is correct (H1 → H2 → H3)
- [ ] Transcripts provided for all videos
- [ ] Forms have labels for all fields
- [ ] Color is not the only indicator (e.g., error messages)
- [ ] Keyboard navigation works (Tab through all elements)

### SEO & Meta
- [ ] All pages have unique meta descriptions
- [ ] Titles are descriptive and under 60 characters
- [ ] Keywords in meta tags are relevant
- [ ] Homepage has clear value proposition
- [ ] Internal links use descriptive anchor text
- [ ] OG tags for social sharing (title, description, image)

### Security
- [ ] No sensitive data in code (API keys, emails)
- [ ] No console errors or warnings
- [ ] Forms use `data-netlify="true"` for Netlify Forms
- [ ] HTTPS will be enabled by GitHub Pages (automatic)

### Performance
- [ ] CSS file is minified (~20KB)
- [ ] JavaScript has no unnecessary code
- [ ] Images are optimized (all <100KB)
- [ ] Page loads in <3 seconds on 3G
- [ ] No missing resources (broken image/CSS/JS links)

## GitHub Pages Setup

### Repository Configuration
- [ ] Repository name: `ParentalAssist` (if username.github.io, use that)
- [ ] All files are in `src/` directory
  - [ ] If using `username.github.io`, move files to root first
- [ ] Push all changes to `main` branch

### GitHub Pages Settings
1. Go to **Repository Settings**
2. Scroll to **Pages** section
3. **Source**: Select `main` branch
4. **Folder**: Select `/src` (if files in src folder)
   - Or `/` (if files in root)
5. Click **Save**
6. Wait 1-2 minutes
7. Get your live URL and verify site loads

### Custom Domain (Optional)
If using custom domain:
- [ ] Update DNS records at your domain provider
- [ ] Add CNAME file (GitHub instructions)
- [ ] Wait for DNS propagation (15-48 hours)

## Post-Deployment

### Verification
- [ ] Live site loads at correct URL
- [ ] All pages are accessible
- [ ] Forms submit and appear in Netlify dashboard
- [ ] Videos play correctly
- [ ] Mobile responsive (use DevTools)
- [ ] No 404 errors in console

### Monitoring
- [ ] Set up Google Analytics (optional)
- [ ] Monitor Netlify Forms submissions
- [ ] Check GitHub Pages for any errors
- [ ] Monitor site uptime

### Optimization
- [ ] Set up email forwarding (if custom domain)
- [ ] Add site to Google Search Console
- [ ] Add site to Bing Webmaster Tools
- [ ] Create sitemap.xml (future enhancement)
- [ ] Set up robots.txt (future enhancement)

## Marketing & Launch

### Email Setup
- [ ] Email list service connected (Convertkit/Mailchimp) (optional)
- [ ] Welcome email sequence set up (optional)
- [ ] Form to list integration confirmed

### Social Media
- [ ] Create social media accounts (optional)
- [ ] Share launch announcement
- [ ] Add site link to bio/about sections

### Press/Outreach
- [ ] Reach out to relevant communities
- [ ] Share with education groups
- [ ] Invite initial testers for feedback

## Maintenance Plan

### Monthly
- [ ] Check form submissions
- [ ] Review analytics (if set up)
- [ ] Monitor for broken links
- [ ] Check for any errors in console

### Quarterly
- [ ] Add 2-3 new lessons
- [ ] Review and update existing content
- [ ] Check performance metrics
- [ ] Get user feedback

### Annually
- [ ] Major content refresh
- [ ] Design audit
- [ ] Technology stack review
- [ ] Security audit

## After Launch

### Document
- [ ] Update live URL in all documentation
- [ ] Create content calendar for future lessons
- [ ] Set up content creation process/timeline
- [ ] Train content creators on LESSON_TEMPLATE.md

### Feedback Loop
- [ ] Gather feedback from first users
- [ ] Track which lessons are most popular
- [ ] Note feature requests
- [ ] Plan improvements based on usage

### Future Features
- [ ] Community forum/Discord
- [ ] Email sequences
- [ ] User accounts for progress tracking
- [ ] Advanced analytics dashboard
- [ ] Mobile app version

---

## Quick Launch Commands

```bash
# Test locally (from src directory)
python -m http.server 8000
# Visit http://localhost:8000

# Stage changes
git add .

# Commit
git commit -m "Launch: ParentalAssist v1.0"

# Push to GitHub (triggers automatic deployment)
git push origin main

# Monitor deployment
# Go to Repository → Actions tab to see deployment status
```

---

## Critical URLs to Check

- [ ] Homepage: `/src/index.html`
- [ ] Lessons: `/src/pages/lessons.html`
- [ ] Sample Lesson: `/src/pages/lesson.html?id=001`
- [ ] About: `/src/pages/about.html`
- [ ] Contact: `/src/pages/contact.html`
- [ ] CSS loads: Check DevTools → Network tab
- [ ] JS loads: Check DevTools → Network tab
- [ ] Videos embed: YouTube iframe appears
- [ ] Forms work: Submit test form

## Support Contacts

- **GitHub Pages Help**: https://docs.github.com/en/pages
- **Netlify Forms**: https://docs.netlify.com/forms/setup/
- **YouTube Embed**: https://support.google.com/youtube/answer/171780

---

**Last Updated**: February 26, 2026  
**Status**: Ready to Deploy  
**Maintained By**: Lead Developer
