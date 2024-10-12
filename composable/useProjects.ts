export default function () {
    const { t } = useI18n()
    return useState('projects', () => [
        {
            name: 'DynatriSoft Games',
            category: t('project.category.brand'),
            url: 'dynatrisoft.com',
            hideSearch: false,
            image: '/brands/dynatrisoft.png',
        },
        {
            name: 'Bitwo.io',
            category: t('project.category.brand'),
            url: 'bitwo.io',
            hideSearch: false,
            image: '/brands/bitwo.png',
        },
        {
            name: 'Granport.pt',
            category: t('project.category.brand'),
            url: 'granport.pt',
            hideSearch: false,
            image: '/brands/granport.png',
        },
        {
            name: 'Zephyrus Foundation',
            category: t('project.category.care'),
            url: 'zephyrus-foundation.org',
            hideSearch: false,
            image: '/brands/zephyrus-foundation.png',
        },
    ])
}