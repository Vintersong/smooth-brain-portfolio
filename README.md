# Andrei Moldovean - Portfolio Website

## About This Project

This is a **student assignment** for a Web Design course - a freelancing professional portfolio website built with Bootstrap 5.3.

It's also **deliberately over-the-top** and satirical. The entire site is a tongue-in-cheek parody of cyberpunk aesthetics, vaporwave design trends, and self-aware tech humor. From the ".smooth-brain-designs" branding to the brain-morphing hamburger menu, nothing here should be taken too seriously.

## Multi-Stack Architecture

This portfolio demonstrates technical range by using **different web technologies** across its pages:

| Page | Stack | Live URL | Description |
|------|-------|----------|-------------|
| Main Hub (`index.html`) | Bootstrap 5.3 + Vanilla JS | [https://smooth-brain-designs.com](https://smooth-brain-designs.com) | The original static HTML portfolio |
| CV Page (`/cv`) | **Astro** | [https://smooth-brain-designs.com/cv](https://smooth-brain-designs.com/cv) | Component-based static site generator |
| Timeline (`/timeline`) | **React + Astro** | [https://smooth-brain-designs.com/timeline](https://smooth-brain-designs.com/timeline) | Interactive timeline with React components |
| Projects (`/projects`) | **Vue + Astro** | [https://smooth-brain-designs.com/projects](https://smooth-brain-designs.com/projects) | Interactive project showcase with Vue components |
| *(Future)* Team | Astro Islands | - | Interactive Warcraft-themed character CVs |

The goal is to showcase proficiency across multiple frameworks while maintaining consistent cyberpunk styling.

## Features

- **Cyberpunk/Retro-Gaming Theme**: Neon glows, gradient borders, and glitch animations
- **Brain Hamburger Menu**: Custom SVG animation that transforms from a wrinkled brain into a smooth circle (because we're .smooth-brain-designs)
- **Fully Responsive**: Works on everything from Galaxy Note 20 down to tiny screens
- **Bootstrap 5.3**: Modern framework with custom CSS overrides
- **Astro Integration**: CV page built with Astro components for cleaner code organization
- **Satirical Content**: Fake projects, exaggerated descriptions, and self-aware comedy throughout

## Development

```bash
# Install dependencies
npm install

# Start dev server (Astro)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Assignment Requirements Met

✅ All 7 minimal requirements + 1 optional requirement completed
✅ Semantic HTML5 structure
✅ Bootstrap responsive layout
✅ Custom CSS styling
✅ Navigation, images, modals, carousel
✅ Git version control

## Security & Usability Audit

This project has undergone a comprehensive security and usability audit with the following key findings:

### 🔒 Security Summary (Score: 8.5/10)

**Strengths:**
- ✅ **No XSS vulnerabilities** - Safe text rendering, no dangerouslySetInnerHTML or v-html usage
- ✅ **No hardcoded secrets** - Clean codebase with no API keys or credentials
- ✅ **Zero dependency vulnerabilities** - npm audit shows 0 vulnerabilities across 484 packages
- ✅ **Secure external links** - All external links include `rel="noopener noreferrer"` to prevent tabnabbing
- ✅ **Subresource Integrity (SRI)** - CDN resources protected with integrity hashes
- ✅ **Sandboxed iframes** - YouTube embeds use proper sandbox attributes
- ✅ **HTTPS enforcement** - Site properly configured for secure connections

**Areas for Improvement:**
- ⚠️ Security headers should be configured at hosting level (CSP, X-Frame-Options, etc.)
- ⚠️ Consider pinning dependency versions for production deployments

### ♿ Usability Summary (Score: 7.5/10)

**Strengths:**
- ✅ **Semantic HTML5** - Proper use of header, main, section, footer elements
- ✅ **Responsive Design** - Bootstrap grid system with mobile-first approach
- ✅ **SEO Optimized** - Open Graph tags, Twitter Cards, canonical URLs, and JSON-LD schema
- ✅ **Performance** - Lazy loading, preconnect hints, deferred scripts
- ✅ **Accessibility** - Form labels, ARIA attributes, keyboard navigation

**Areas for Improvement:**
- ⚠️ Some color contrast ratios could be improved for WCAG AA compliance
- ⚠️ Additional ARIA labels needed for icon-only buttons
- ⚠️ Contact form needs validation feedback and submission handling
- ⚠️ Some placeholder links need actual targets or clear indicators

### 🛡️ Security Measures Implemented

1. **External Link Protection**: Added `rel="noopener noreferrer"` to prevent reverse tabnabbing
2. **Iframe Sandboxing**: YouTube embeds restricted with `sandbox="allow-scripts allow-same-origin allow-presentation"`
3. **Subresource Integrity**: Bootstrap CDN resources include SHA-384 integrity hashes
4. **Meta Tags**: Comprehensive Open Graph and Twitter Card meta tags for secure social sharing
5. **Canonical URLs**: Proper canonical links to prevent duplicate content issues

### 📊 Audit Methodology

The audit included:
- Automated vulnerability scanning (npm audit)
- Manual code review for XSS, injection, and security anti-patterns
- OWASP best practices validation
- WCAG 2.1 accessibility guidelines review
- Performance and SEO analysis
- Cross-browser compatibility testing

For detailed audit results, see [SECURITY-AUDIT.md](./docs/SECURITY-AUDIT.md) and [USABILITY-AUDIT.md](./docs/USABILITY-AUDIT.md).

## The Gag

This portfolio pretends to showcase professional freelance work but is actually a collection of absurd. The entire aesthetic is intentionally excessive, poking fun at the overly-serious tech industry while still demonstrating technical competence.

**TL;DR:** It's a student assignment disguised as a cyberpunk portfolio disguised as satire. Or maybe it's satire disguised as a portfolio disguised as a student assignment. We're not entirely sure anymore.

---
