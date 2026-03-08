import { i18n } from '../i18n.js';

export class ReadingView {
    constructor() {
        this.container = document.getElementById('reading-content');
        this.tocContainer = document.getElementById('reading-toc');
        this.tocList = document.getElementById('toc-list');
        this.hasLoaded = false;
        this.isLoading = false;
        this.currentLang = null;
        this.intersectionObserver = null;

        // Listen for language changes
        i18n.onChange(() => {
            this.loadContent();
        });
    }

    async loadContent() {
        const lang = i18n.getLanguage();

        // Prevent re-fetching if already loaded for the current language
        if (this.hasLoaded && this.currentLang === lang) return;

        // Prevent concurrent overlapping fetches
        if (this.isLoading) return;

        this.isLoading = true;
        this.currentLang = lang;
        this.hasLoaded = false;

        try {
            this.container.innerHTML = `<p class="placeholder-text" data-i18n="loading-reading">${i18n.t('loading-reading')}</p>`;

            const filename = lang === 'pt' ? 'history_pt.md' : 'history.md';
            // Use cache: 'no-cache' and a timestamp to absolutely prevent the browser from caching the markdown swap
            const response = await fetch(`${filename}?t=${new Date().getTime()}`, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const markdownText = await response.text();

            // Parse markdown using marked.js (loaded globally via CDN in index.html)
            if (window.marked) {
                this.container.innerHTML = window.marked.parse(markdownText);
                this.buildTableOfContents();
            } else {
                throw new Error('Markdown parser (marked.js) not found.');
            }

            this.hasLoaded = true;
        } catch (error) {
            console.error('Error loading markdown file:', error);
            this.container.innerHTML = `
                <div class="error-state" style="text-align: center; color: #f87171; padding: 40px;">
                    <h3 data-i18n="reading-error-title">${i18n.t('reading-error-title')}</h3>
                    <p>${error.message}</p>
                </div>
            `;
        } finally {
            this.isLoading = false;

            // If the user toggled the language again while we were busy fetching, re-fire
            if (this.currentLang !== i18n.getLanguage()) {
                this.loadContent();
            }
        }
    }

    buildTableOfContents() {
        const headings = this.container.querySelectorAll('h2, h3');
        if (headings.length === 0) return;

        this.tocList.innerHTML = '';

        // Ensure "Table of Contents" title is properly translated
        const tocHeader = this.tocContainer.querySelector('h3');
        if (tocHeader) {
            tocHeader.textContent = i18n.t('toc-header');
        }

        this.tocContainer.classList.remove('hidden');

        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                if (!heading.id) heading.id = `heading-${index}`;
            }

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${heading.id}`;
            a.textContent = heading.textContent;
            a.className = 'toc-link';

            if (heading.tagName.toLowerCase() === 'h3') {
                a.classList.add('toc-indent-h3');
            }

            a.addEventListener('click', (e) => {
                e.preventDefault();
                heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });

            li.appendChild(a);
            this.tocList.appendChild(li);
        });

        this.setupIntersectionObserver(headings);
    }

    setupIntersectionObserver(headings) {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
        }

        const options = {
            root: document.getElementById('view-reading'),
            rootMargin: '-20px 0px -70% 0px',
            threshold: 0
        };

        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updateActiveTocItem(entry.target.id);
                }
            });
        }, options);

        headings.forEach(heading => {
            this.intersectionObserver.observe(heading);
        });
    }

    updateActiveTocItem(id) {
        const links = this.tocList.querySelectorAll('.toc-link');
        links.forEach(link => link.classList.remove('active'));

        const activeLink = this.tocList.querySelector(`a[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}
