# Website Setup Instructions

## Contact Form Setup (Formspree)

Your contact form is now configured to use Formspree, a free service that handles form submissions without needing a backend server.

### Steps to Complete Setup:

1. **Create a Formspree Account**
   - Go to [https://formspree.io](https://formspree.io)
   - Sign up for a free account

2. **Create a New Form**
   - Click "New Form" in your Formspree dashboard
   - Give it a name like "Portfolio Contact Form"
   - Copy the form endpoint URL (it will look like: `https://formspree.io/f/xyzabc123`)

3. **Update Your HTML**
   - Open `index.html`
   - Find line with: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual form ID from Formspree

4. **Test Your Form**
   - Open your website
   - Fill out the contact form
   - Submit it
   - Check your email - Formspree will send submissions to your registered email

### Formspree Free Tier Includes:
- 50 submissions per month
- Email notifications
- Spam filtering
- No credit card required

## What's Been Fixed

### ✅ Critical HTML Corruption
- Fixed the corrupted `<title>` tag that had experience content embedded in it
- Your site will now render properly

### ✅ Mobile Navigation
- Added a hamburger menu that appears on mobile devices
- Smooth slide-in animation
- Menu closes automatically when clicking links
- Works on tablets and phones (≤768px)

### ✅ Contact Form Backend
- Integrated Formspree for form submissions
- Added loading states (button shows "Sending..." while processing)
- Success/error messages display after submission
- Form resets automatically on success

### ✅ Experience Descriptions
- Condensed lengthy descriptions for better readability
- Maintained key achievements and impact
- Improved page load time and user engagement

### ✅ Blog Functionality
- Added date stamps to blog posts
- Improved visual design with dedicated "Read PDF" buttons
- Better hover states and card interactions
- PDF icon for clarity

### ✅ SEO Meta Tags
- Added comprehensive meta description
- Open Graph tags for Facebook and LinkedIn sharing
- Twitter Card tags for Twitter sharing
- Author, keywords, and robots meta tags
- Mobile theme color
- **Configured for**: https://jackkarak.github.io/PersonalSite/

## Testing Checklist

- [ ] Test mobile menu on phone/tablet
- [ ] Submit contact form and verify email receipt
- [ ] Check blog links open PDFs correctly
- [ ] Test all navigation links
- [ ] Verify responsive design on different screen sizes

## Recommended Next Steps

1. **Analytics**: Add Google Analytics to track visitor behavior
2. **Performance**: Optimize images (consider WebP format)
3. **Accessibility**: Run WAVE or axe DevTools for accessibility audit
4. **Content**: Consider creating HTML blog posts instead of PDFs for better SEO
5. **Favicon**: Add a favicon.ico file to your root directory
6. **Deploy**: Host on GitHub Pages, Netlify, or Vercel

## Support

If you encounter any issues or need help with the Formspree setup, visit their documentation at [https://help.formspree.io](https://help.formspree.io)
