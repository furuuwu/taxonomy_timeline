/**
 * Internationalization (i18n) Module
 */

export const translations = {
    pt: {
        'tab-timeline': 'Linha do Tempo',
        'tab-hierarchy': 'Hierarquia',
        'tab-reading': 'Leitura',
        'hint-timeline': 'Arraste para Mover • Role para Dar Zoom',
        'hint-hierarchy': 'Selecione um Sistema de Classificação',
        'hint-reading': 'Role para ler a história detalhada',
        'toc-header': 'Índice',
        'loading-reading': 'Carregando o documento...',
        'reading-error-title': 'Falha ao carregar o documento',
        'info-close': 'Fechar',
        'species-modal-close': 'Fechar',
        'timeline-century': 'Século',
        'app-title': 'A Evolução da Taxonomia e Sistemática',
        'app-subtitle': 'Visualizações e Texto',
        'track-scientists': 'Cientistas',
        'track-systems': 'Sistemas de Classificação',
        'placeholder-tree': 'Selecione um sistema à esquerda para visualizar a sua árvore hierárquica.',
        'panel-title': 'Detalhes',
        'panel-description': 'Clique em um item na linha do tempo para ver os detalhes.',
        'species-grid-title': 'Organismos Representativos'
    },
    en: {
        'tab-timeline': 'Timeline View',
        'tab-hierarchy': 'Hierarchy View',
        'tab-reading': 'Reading',
        'hint-timeline': 'Drag to Pan • Scroll to Zoom',
        'hint-hierarchy': 'Select a Classification System',
        'hint-reading': 'Scroll to read detailed history',
        'toc-header': 'Table of Contents',
        'loading-reading': 'Loading reading materials...',
        'reading-error-title': 'Failed to load document',
        'info-close': 'Close',
        'species-modal-close': 'Close',
        'timeline-century': 'Century',
        'app-title': 'The Evolution of Taxonomy & Systematics',
        'app-subtitle': 'Visualizations and Text',
        'track-scientists': 'Scientists',
        'track-systems': 'Classification Systems',
        'placeholder-tree': 'Select a system from the left to visualize its hierarchical tree.',
        'panel-title': 'Details',
        'panel-description': 'Click an item on the timeline to view details.',
        'species-grid-title': 'Representative Organisms'
    }
};

class I18nManager {
    constructor() {
        this.currentLang = 'pt'; // Portuguese is default
        this.listeners = [];
    }

    setLanguage(lang) {
        if (lang === 'pt' || lang === 'en') {
            this.currentLang = lang;
            console.log(`Language switched to: ${lang}`);
            this.notifyListeners();
        }
    }

    getLanguage() {
        return this.currentLang;
    }

    t(key) {
        if (!translations[this.currentLang] || !translations[this.currentLang][key]) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        return translations[this.currentLang][key];
    }

    onChange(callback) {
        this.listeners.push(callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback(this.currentLang));
    }
}

export const i18n = new I18nManager();
