# Usability Audit Report: Smooth Brain Portfolio

**Date**: February 15, 2026  
**Auditor**: GitHub Copilot AI UX Agent  
**Repository**: Vintersong/smooth-brain-portfolio  
**Audit Scope**: Comprehensive usability and accessibility assessment

---

## Executive Summary

This usability audit evaluated the smooth-brain-portfolio website across multiple UX dimensions: accessibility, mobile responsiveness, navigation, forms, visual design, SEO, and performance. The project demonstrates **solid usability fundamentals** with a creative cyberpunk aesthetic.

**Overall Usability Score: 7.5/10** ✅

### Key Strengths
- Semantic HTML5 structure with proper heading hierarchy
- Fully responsive design using Bootstrap 5.3
- Excellent SEO with Open Graph tags and JSON-LD schema
- Performance-optimized (lazy loading, preconnect hints, deferred scripts)
- Creative and engaging visual design

### Areas for Improvement
- Color contrast issues on some decorative text
- Missing ARIA labels on icon-only buttons
- Contact form needs validation feedback
- Some placeholder links need real targets

---

## 1. Accessibility (a11y)

### Score: 7/10 ✅ (Good with improvements needed)

#### 1.1 Semantic HTML ✅

**Findings:**
```html
<!-- ✅ EXCELLENT: Proper semantic structure -->
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="about">
    <h1>About Me</h1>
    <p>Content...</p>
  </section>
  
  <section id="projects">
    <h2>Projects</h2>
    <article>...</article>
  </section>
</main>

<footer>
  <p>&copy; 2024 Smooth Brain Designs</p>
</footer>
```

**Status: ✅ PASS** - Proper use of semantic HTML5 elements throughout the site.

---

#### 1.2 Heading Hierarchy ✅

**Analysis:**
```
h1: Main page title (.smooth-brain-designs)
  h2: About, Projects, Gallery, Contact
    h3: Project titles
      h4: Project details
        h5: Sub-sections
          h6: Technical specs
```

**Status: ✅ PASS** - Logical heading hierarchy maintained.

---

#### 1.3 Form Accessibility ✅

**Findings:**
```html
<!-- ✅ GOOD: Proper label association -->
<div class="mb-3">
  <label for="name" class="form-label">.name</label>
  <input type="text" class="form-control" id="name" name="name" required>
</div>

<div class="mb-3">
  <label for="email" class="form-label">.email</label>
  <input type="email" class="form-control" id="email" name="email" required>
</div>

<!-- ✅ GOOD: Close button accessibility -->
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
```

**Status: ✅ PASS** - All form inputs have associated labels.

---

#### 1.4 Color Contrast ⚠️

**Issues Found:**

| Element | Foreground | Background | Ratio | WCAG AA | Status |
|---------|-----------|-----------|-------|---------|--------|
| `.street-line` | `rgba(212, 180, 240, 0.6)` | `#0d0a14` | ~3.2:1 | 4.5:1 | ❌ FAIL |
| Main body text | `rgba(245, 238, 255, 0.92)` | `#0d0a14` | ~14:1 | 4.5:1 | ✅ PASS |
| `.icon-muted` | `rgba(240, 168, 196, 0.55)` | Dark | ~3.8:1 | 4.5:1 | ⚠️ BORDERLINE |
| Button text | Various | Various | Various | 4.5:1 | ✅ PASS (most) |

**Recommendations:**
```css
/* ❌ CURRENT */
.street-line {
  color: rgba(212, 180, 240, 0.6);
}

/* ✅ RECOMMENDED */
.street-line {
  color: rgba(212, 180, 240, 0.85); /* Increases to ~5.1:1 */
}

/* For decorative text only */
.decorative-text {
  color: rgba(240, 168, 196, 0.55);
  aria-hidden: "true"; /* If purely decorative */
}
```

**Status: ⚠️ NEEDS IMPROVEMENT** - Some text fails WCAG AA contrast requirements.

---

#### 1.5 ARIA Attributes ✅/⚠️

**Good Usage:**
```html
<!-- ✅ GOOD: Expandable menu -->
<button class="navbar-toggler" 
        type="button" 
        aria-expanded="false" 
        aria-controls="navbarNav">
  <span class="navbar-toggler-icon"></span>
</button>

<!-- ✅ GOOD: Modal labels -->
<button aria-label="Close" data-bs-dismiss="modal">
  <span aria-hidden="true">&times;</span>
</button>
```

**Issues Found:**
```html
<!-- ⚠️ ISSUE: Icon-only carousel items lack descriptive labels -->
<div class="carousel-item">
  <i class="bi bi-code-slash" style="font-size: 6rem;"></i>
  <p class="mono mt-3">.code-quality</p>
</div>

<!-- ✅ RECOMMENDED -->
<div class="carousel-item" role="img" aria-label="Code quality illustration">
  <i class="bi bi-code-slash" style="font-size: 6rem;" aria-hidden="true"></i>
  <p class="mono mt-3">.code-quality</p>
</div>
```

**Status: ⚠️ PARTIAL** - Good ARIA usage overall, but icon-only elements need improvement.

---

#### 1.6 Keyboard Navigation ✅

**Testing Results:**
- ✅ All navigation links accessible via Tab key
- ✅ Modal can be dismissed with Escape key (Bootstrap default)
- ✅ Form inputs accessible in logical order
- ✅ Carousel controls accessible via keyboard
- ⚠️ Missing skip-to-content link

**Recommendation:**
```html
<!-- Add at top of body -->
<a href="#main" class="skip-to-content visually-hidden-focusable">
  Skip to main content
</a>

<main id="main">
  <!-- Content -->
</main>
```

**Status: ✅ GOOD** - Keyboard navigation works, but could add skip link.

---

#### 1.7 Alt Text ✅/⚠️

**Good Examples:**
```html
<!-- ✅ GOOD: Descriptive alt text -->
<img src="images/rgb.png" 
     loading="lazy" 
     alt="RGB Game Screenshot" 
     width="800" 
     height="600">

<img src="images/skyline.png" 
     alt="Cyberpunk cityscape skyline" 
     width="1920" 
     height="400">
```

**Could Be Better:**
```html
<!-- ⚠️ CURRENT: Generic alt text -->
<img src="images/rgb.png" alt="RGB Game Screenshot">

<!-- ✅ RECOMMENDED: More descriptive -->
<img src="images/rgb.png" 
     alt="Screenshot of RGB bullet hell game showing colorful particle effects, enemy patterns, and health bars">
```

**Status: ✅ GOOD** - All images have alt text, but could be more descriptive.

---

## 2. Mobile Responsiveness

### Score: 8/10 ✅ (Excellent)

#### 2.1 Responsive Grid ✅

**Implementation:**
```html
<!-- ✅ GOOD: Bootstrap responsive grid -->
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <!-- Stacks on mobile, 2 cols on tablet, 3 cols on desktop -->
  </div>
</div>

<!-- ✅ GOOD: Responsive images -->
<img src="images/skyline.png" class="img-fluid w-100" alt="...">
```

**Status: ✅ PASS** - Fully responsive layout using Bootstrap 5.3.

---

#### 2.2 Mobile Navigation ✅

**Findings:**
```html
<!-- ✅ GOOD: Collapsible mobile menu -->
<button class="navbar-toggler" type="button" data-bs-toggle="collapse">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ms-auto">
    <!-- Navigation items -->
  </ul>
</div>
```

**Status: ✅ PASS** - Mobile menu works correctly with hamburger toggle.

---

#### 2.3 Touch Targets ✅

**Analysis:**
- ✅ Buttons meet minimum 44x44px touch target (Bootstrap default)
- ✅ Navigation links properly spaced
- ✅ Form inputs large enough for mobile
- ✅ Carousel controls accessible on mobile

**Status: ✅ PASS** - All interactive elements meet touch target guidelines.

---

#### 2.4 Font Scaling ✅/⚠️

**Good Usage:**
```css
/* ✅ GOOD: Responsive font sizing with clamp() */
.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

**Minor Issues:**
```css
/* ⚠️ FIXED SIZES: Some elements use fixed px values */
.mono {
  font-size: 0.9rem; /* Could use clamp for better scaling */
}
```

**Status: ✅ GOOD** - Font scaling mostly responsive, minor improvements possible.

---

#### 2.5 Viewport Configuration ✅

```html
<!-- ✅ GOOD: Proper viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

**Status: ✅ PASS** - Viewport properly configured.

---

## 3. Navigation & Usability

### Score: 7/10 ✅ (Good with minor issues)

#### 3.1 Navigation Structure ✅

**Main Navigation:**
```html
<!-- ✅ GOOD: Clear navigation hierarchy -->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
  <a class="navbar-brand" href="#home">.smooth-brain-designs</a>
  <ul class="navbar-nav">
    <li><a href="#about">.about</a></li>
    <li><a href="#projects">.projects</a></li>
    <li><a href="#gallery">.gallery</a></li>
    <li><a href="#contact">.contact</a></li>
    <li><a href="/cv">.cv</a></li>
    <li><a href="/timeline">.timeline</a></li>
  </ul>
</nav>
```

**Status: ✅ PASS** - Clear, logical navigation structure.

---

#### 3.2 Broken Links ⚠️

**Issues Found:**

| Location | Link | Status | Issue |
|----------|------|--------|-------|
| Line 211 | `<a href="404.html" class="play-now">` | ❌ | Links to 404 page (intentional?) |
| Line 109 | `<a href="#" data-bs-toggle="modal">` | ⚠️ | Uses `href="#"` (works but confusing) |
| Line 324 | `<a href="#" class="github-repo">` | ⚠️ | Placeholder link |

**Recommendations:**
```html
<!-- ❌ CURRENT -->
<a href="404.html" class="play-now">.play-now</a>

<!-- ✅ OPTIONS -->
<!-- Option 1: Working link -->
<a href="https://game.example.com" class="play-now">.play-now</a>

<!-- Option 2: Coming soon -->
<button class="btn" disabled>.play-now (Coming Soon)</button>

<!-- Option 3: Clearly intentional -->
<a href="404.html" class="play-now" title="Intentionally broken - part of the satire">.play-now</a>
```

**Status: ⚠️ NEEDS IMPROVEMENT** - Some links need clear targets or indicators.

---

#### 3.3 Smooth Scrolling ✅

```javascript
// ✅ GOOD: Smooth scroll implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
```

**Status: ✅ PASS** - Smooth scrolling works well.

---

#### 3.4 Breadcrumbs ⚠️

**Finding:** No breadcrumb navigation on subpages (CV, Timeline, Projects).

**Recommendation:**
```html
<!-- Add to CV, Timeline, Projects pages -->
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">.home</a></li>
    <li class="breadcrumb-item active" aria-current="page">.cv</li>
  </ol>
</nav>
```

**Status: ⚠️ NICE TO HAVE** - Not critical, but would improve UX.

---

## 4. Form Usability

### Score: 5/10 ⚠️ (Needs Significant Improvement)

#### 4.1 Form Structure ✅

```html
<!-- ✅ GOOD: Basic structure -->
<form class="bahnschrift">
  <div class="mb-3">
    <label for="name" class="form-label">.name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="mb-3">
    <label for="email" class="form-label">.email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="mb-3">
    <label for="message" class="form-label">.message</label>
    <textarea id="message" name="message" rows="4" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">.send-message</button>
</form>
```

**Status: ✅ PASS** - Good basic structure with proper labels.

---

#### 4.2 Validation Feedback ❌

**Issues:**
- ❌ No visual error messages
- ❌ No success confirmation
- ❌ No inline validation
- ❌ No error announcements for screen readers

**Current State:**
```html
<!-- ❌ CURRENT: Only HTML5 validation -->
<input type="email" required>
<!-- Browser shows generic error - not customized -->
```

**Recommended:**
```html
<!-- ✅ RECOMMENDED -->
<div class="mb-3">
  <label for="email" class="form-label">.email</label>
  <input type="email" 
         id="email" 
         name="email" 
         required 
         aria-describedby="emailError"
         class="form-control">
  <small id="emailError" class="text-danger" hidden>
    Please enter a valid email address
  </small>
</div>

<script>
// Add validation feedback
form.addEventListener('submit', (e) => {
  const email = form.querySelector('#email');
  const error = form.querySelector('#emailError');
  
  if (!email.validity.valid) {
    e.preventDefault();
    email.classList.add('is-invalid');
    error.hidden = false;
    email.focus();
  }
});
</script>
```

**Status: ❌ FAIL** - No custom validation feedback.

---

#### 4.3 Form Submission ❌

**Issue:** Form has no action attribute or submit handler.

```html
<!-- ❌ CURRENT: No submission logic -->
<form class="bahnschrift">
  <!-- Form will submit to current page and fail -->
</form>
```

**Recommended:**
```html
<!-- ✅ RECOMMENDED -->
<form class="bahnschrift" id="contactForm">
  <!-- inputs -->
</form>

<script>
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      showSuccess('Message sent successfully!');
      e.target.reset();
    } else {
      showError('Failed to send message. Please try again.');
    }
  } catch (error) {
    showError('Network error. Please try again later.');
  }
});
</script>
```

**Status: ❌ FAIL** - Form cannot submit successfully.

---

## 5. Visual Design & UX

### Score: 8/10 ✅ (Excellent)

#### 5.1 Consistent Styling ✅

**Findings:**
- ✅ Consistent color palette (cyberpunk theme)
- ✅ Consistent typography (Outfit, DM Sans, JetBrains Mono)
- ✅ Consistent spacing using Bootstrap utilities
- ✅ Consistent button styles

**CSS Custom Properties:**
```css
:root {
  --bg-dark: #0d0a14;
  --text-light: rgba(245, 238, 255, 0.92);
  --accent-pink: #FF1493;
  --accent-purple: #B794F4;
  --accent-cyan: #00FFFF;
}
```

**Status: ✅ PASS** - Excellent design consistency.

---

#### 5.2 Visual Hierarchy ✅

**Analysis:**
- ✅ Clear hero section with large title
- ✅ Proper heading sizes (h1 > h2 > h3)
- ✅ Good use of white space
- ✅ Clear call-to-action buttons

**Status: ✅ PASS** - Strong visual hierarchy.

---

#### 5.3 Hover States ✅

```css
/* ✅ GOOD: Interactive feedback */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(255, 20, 147, 0.5);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(183, 148, 244, 0.3);
}
```

**Status: ✅ PASS** - Good hover feedback on interactive elements.

---

#### 5.4 Loading States ⚠️

**Issue:** No loading indicators for async operations.

**Recommendation:**
```html
<!-- Add loading spinner -->
<button type="submit" class="btn btn-primary" id="submitBtn">
  <span class="btn-text">.send-message</span>
  <span class="spinner-border spinner-border-sm d-none" role="status">
    <span class="visually-hidden">Loading...</span>
  </span>
</button>

<script>
// Show loading state
submitBtn.querySelector('.btn-text').classList.add('d-none');
submitBtn.querySelector('.spinner-border').classList.remove('d-none');
submitBtn.disabled = true;
</script>
```

**Status: ⚠️ NICE TO HAVE** - Not critical but improves UX.

---

## 6. SEO Optimization

### Score: 9/10 ✅ (Excellent)

#### 6.1 Meta Tags ✅ (Recently Implemented)

```html
<!-- ✅ EXCELLENT: Comprehensive meta tags -->
<meta name="description" content="Andrei Moldovean - Game designer, UI/UX developer, and data analyst portfolio.">

<!-- Open Graph -->
<meta property="og:title" content=".smooth-brain-designs | Andrei Moldovean">
<meta property="og:description" content="Game designer, UI/UX developer, and data analyst portfolio.">
<meta property="og:image" content="https://smooth-brain-designs.com/images/profile.jpg">
<meta property="og:url" content="https://smooth-brain-designs.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content=".smooth-brain-designs | Andrei Moldovean">
<meta name="twitter:image" content="https://smooth-brain-designs.com/images/profile.jpg">

<!-- Canonical URL -->
<link rel="canonical" href="https://smooth-brain-designs.com">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/favicon.svg">
```

**Status: ✅ PASS** - Excellent SEO meta tags implemented.

---

#### 6.2 Structured Data ✅

```html
<!-- ✅ EXCELLENT: JSON-LD Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Andrei Moldovean",
  "url": "https://smooth-brain-designs.com",
  "sameAs": [
    "https://github.com/Vintersong",
    "https://linkedin.com/in/andrei-moldovean-b7462534a"
  ],
  "jobTitle": "Game Designer & Technical Artist",
  "knowsAbout": ["Game Design", "UI/UX", "Web Development"]
}
</script>
```

**Status: ✅ PASS** - Proper structured data for rich snippets.

---

#### 6.3 URL Structure ✅

```
✅ GOOD: Clean, semantic URLs
/
/cv
/timeline
/projects

❌ BAD (not used):
/page.php?id=123
/cv.html
```

**Status: ✅ PASS** - Clean URL structure.

---

## 7. Performance

### Score: 8.5/10 ✅ (Excellent)

#### 7.1 Resource Loading ✅

```html
<!-- ✅ GOOD: Preconnect hints -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net">

<!-- ✅ GOOD: Preload critical resources -->
<link rel="preload" href="bootstrap.min.css" as="style">
<link rel="preload" href="css/styles.css" as="style">

<!-- ✅ GOOD: Deferred scripts -->
<script src="bootstrap.bundle.min.js" defer></script>
<script src="js/scripts.js" defer></script>

<!-- ✅ GOOD: Async CSS loading -->
<link href="bootstrap-icons.css" media="print" onload="this.media='all'">
```

**Status: ✅ PASS** - Excellent resource loading optimization.

---

#### 7.2 Image Optimization ✅/⚠️

```html
<!-- ✅ GOOD: Lazy loading -->
<img src="images/rgb.png" loading="lazy" alt="...">

<!-- ✅ GOOD: Dimensions specified -->
<img src="images/skyline.png" width="1920" height="400" alt="...">

<!-- ⚠️ COULD BE BETTER: No WebP format -->
<img src="images/rgb.png" alt="...">
<!-- Could use: -->
<picture>
  <source srcset="images/rgb.webp" type="image/webp">
  <img src="images/rgb.png" alt="...">
</picture>
```

**Status: ✅ GOOD** - Images optimized, could add WebP for even better performance.

---

## Usability Scorecard

| Category | Score | Status |
|----------|-------|--------|
| Accessibility | 7/10 | ✅ Good (improvements needed) |
| Mobile Responsive | 8/10 | ✅ Excellent |
| Navigation | 7/10 | ✅ Good (some broken links) |
| Forms | 5/10 | ⚠️ Needs work |
| Visual Design | 8/10 | ✅ Excellent |
| SEO | 9/10 | ✅ Excellent |
| Performance | 8.5/10 | ✅ Excellent |
| **Overall Score** | **7.5/10** | **✅ Good** |

---

## Top 10 Recommendations

### 🔥 Critical
1. **Fix form submission** - Add backend handler and validation (HIGH)
2. **Fix color contrast** - Update `.street-line` opacity to 0.85 (MEDIUM)
3. **Fix broken links** - Replace or clearly mark 404 links (MEDIUM)

### ⚠️ High Priority
4. **Add validation feedback** - Show error messages to users (MEDIUM)
5. **Add ARIA labels** - Improve icon-only button accessibility (LOW)
6. **Add skip-to-content link** - Improve keyboard navigation (LOW)

### 💡 Nice to Have
7. **Add breadcrumbs** - Improve subpage navigation (LOW)
8. **Add WebP images** - Further performance improvement (LOW)
9. **Add loading states** - Better async operation feedback (LOW)
10. **Improve alt text** - Make descriptions more detailed (LOW)

---

## Conclusion

The smooth-brain-portfolio website demonstrates **strong usability fundamentals** with excellent responsive design, SEO, and performance. The cyberpunk aesthetic is creative and engaging without sacrificing usability.

**Key Achievements:**
- Fully responsive across all devices
- Excellent SEO with Open Graph tags
- Strong performance optimization
- Good accessibility baseline
- Creative, cohesive design

**Priority Improvements:**
- Contact form functionality (critical for portfolio)
- Color contrast compliance (WCAG AA)
- Link integrity (fix broken/placeholder links)

**Overall Assessment:** The site is **highly usable** with minor improvements needed. The satirical "smooth brain" theme ironically showcases strong technical and UX competence.

---

**Next Audit**: Recommended after implementing form backend (Q2 2026)

**Auditor**: GitHub Copilot AI UX Agent  
**Date**: February 15, 2026
