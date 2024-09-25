export default function () {
    const { t } = useI18n()
    return useState('pages', () => [
        {
            name: t('page.home'),
            path: '/',
            hideSearch: false,
            hideMenu: false,
        },
        {
            name: t('page.legal'),
            path: '/legal',
            hideSearch: false,
            hideMenu: false,
        },
        {
            name: t('page.company'),
            path: '/legal/company',
            hideSearch: false,
            hideMenu: true,
        },
        {
            name: t('page.cookies'),
            path: '/legal/cookies',
            hideSearch: false,
            hideMenu: true,
        },
        {
            name: t('page.privacy'),
            path: '/legal/privacy',
            hideSearch: false,
            hideMenu: true,
        },
        {
            name: t('page.tos'),
            path: '/legal/tos',
            hideSearch: false,
            hideMenu: true,
        },
        {
            name: t('page.404'),
            path: '/:pathMatch(.*)*',
            hideSearch: true,
            hideMenu: true,
        }
    ])
}