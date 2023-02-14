import { createRouter, createWebHistory } from "vue-router"

const router = createRouter( {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            meta: {
                title: "Home"
            },
            component: () => import('../components/HomePage/HomePage.vue')
        },
        {
            path: "/history",
            name: "history",
            meta: {
                title: "History"
            },
            component: () => import('../components/HistoryPage/HistoryPage.vue')
        },
        {
            path: "/contact",
            name: "contact",
            meta: {
                title: "Contact"
            },
            component: () => import('../components/ContactPage/ContactPage.vue')
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: () => import('../components/PortfolioPages/PortfolioPage.vue'),

            children:[
                {
                    path: "/page-2-col",
                    name: "page-2-col",
                    meta: {
                        title: "page-2-col"
                    },
                    component: () => import('../components/PortfolioPages/Page-2-Col.vue')
                },
                {
                    path: "/page-3-col",
                    name: "page-3-col",
                    meta: {
                        title: "page-3-col"
                    },
                    component: () => import('../components/PortfolioPages/Page-3-Col.vue')
                },
            ]
        },
        {
            path: "/single-proj-1",
            name: "single-proj-1",
            meta: {
                title: "Single Project 1"
            },
            component: () => import('../components/PortfolioPages/PageSingleProj/Single-proj-1.vue')
        },

        {
            path: "/single-proj-2",
            name: "single-proj-2",
            meta: {
                title: "Single Project 2"
            },
            component: () => import('../components/PortfolioPages/PageSingleProj/Single-proj-2.vue')
        },
        {
            path: "/blog",
            name: "blog",
            component: () => import('../components/Blog/BlogPage.vue'),
            meta: {
                title: "Blog"
            },

            children:[
                {
                    path: "/blog-2-col",
                    name: "blog-2-col",
                    component: () => import('../components/Blog/Blog-2-col.vue')
                },
                {
                    path: "/blog-3-col",
                    name: "blog-3-col",
                    component: () => import('../components/Blog/Blog-3-col.vue')
                },
                {
                    path: "/publication",
                    name: "publication",
                    meta: {
                        title: "Publication"
                    },
                    component: () => import('../components/PublicationPage/PublicationPage.vue')
                },
            ]
        },
        {
            path: "/one-page",
            name: "one-page",
            meta: {
                title: "One Page"
            },
            component: () => import('../components/OnePage/OnePage.vue')
        },


        {
            path: '/behance',
            name: 'behance',
            beforeEnter() {location.href = import.meta.env.VITE_BEHANCE_API_LINK},
            component: () => {}
        },
        {
            path: '/github',
            name: 'github',
            beforeEnter() {location.href = import.meta.env.VITE_GITHUB_API_LINK},
            component: () => {}
        },
        {
            path: '/instagram',
            name: 'instagram',
            beforeEnter() {location.href = import.meta.env.VITE_INSTAGRAM_API_LINK},
            component: () => {}
        }
    ]
})

export default router;