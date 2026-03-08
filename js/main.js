import { scientistsData, systemsData } from './data.js';
import { TimelineView } from './components/TimelineView.js';
import { HierarchyView } from './components/HierarchyView.js';
import { InfoPanel } from './components/InfoPanel.js';
import { ReadingView } from './components/ReadingView.js';
import { i18n } from './i18n.js';

class AppController {
    constructor() {
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.viewContainers = document.querySelectorAll('.view-container');
        this.controlHints = document.querySelectorAll('.control-hint');
        this.langBtns = document.querySelectorAll('.lang-btn');

        // Initialize Components
        this.infoPanel = new InfoPanel();
        this.timelineView = new TimelineView(this.infoPanel);
        this.hierarchyView = new HierarchyView(this.infoPanel, systemsData);
        this.readingView = new ReadingView();

        // Subscribe to language changes
        i18n.onChange(() => this.updateStaticUIText());

        // Initial setup
        this.updateStaticUIText();
        this.init();
    }

    init() {
        // Feed data to timeline view
        this.timelineView.renderBars(scientistsData, this.timelineView.scientistsTrack, 'bar-scientist');
        this.timelineView.renderBars(systemsData, this.timelineView.systemsTrack, 'bar-system');

        // Push view position to 1800s upon load
        this.timelineView.centerOnYear(1800);

        this.bindEvents();
    }

    bindEvents() {
        // Tab switching logic
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.target);
            });
        });

        // Language switching logic
        this.langBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                if (lang === i18n.getLanguage()) return;

                // Update active state on buttons
                this.langBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // Trigger i18n manager
                i18n.setLanguage(lang);
            });
        });
    }

    updateStaticUIText() {
        // Update all elements with a data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = i18n.t(key);
        });

        // Update elements with data-i18n-aria attributes (like close buttons)
        const ariaElements = document.querySelectorAll('[data-i18n-aria]');
        ariaElements.forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            el.setAttribute('aria-label', i18n.t(key));
        });

        // Let views know to reload contents if active
        // This will be implemented inside the views via event listeners later.
    }

    switchTab(targetId) {
        // Update tab styling
        this.tabBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-target="${targetId}"]`).classList.add('active');

        // Show correct view
        this.viewContainers.forEach(container => {
            if (container.id === targetId) {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });

        // Show correct hint logic
        this.controlHints.forEach(hint => hint.classList.add('hidden'));
        if (targetId === 'view-timeline') {
            document.getElementById('hint-timeline').classList.remove('hidden');
        } else if (targetId === 'view-hierarchy') {
            document.getElementById('hint-hierarchy').classList.remove('hidden');
        } else if (targetId === 'view-reading') {
            document.getElementById('hint-reading').classList.remove('hidden');
            // Lazy-load markdown content
            this.readingView.loadContent();
        }

        // Hide info panel when switching views
        this.infoPanel.hidePanel();
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AppController();
});
