export default {
    path: '/admin',
    name: 'admin',
    // meta: {
    //     forAuth: true
    // },
    component: () => import('@/views/admin/Admin.vue'),
    children: [{
            path: '',
            component: () => import('@/views/admin/Dashboard.vue'),
        },
        {
            path: 'dashboard',
            name: 'dashboard',
            component: () => import('@/views/admin/Dashboard.vue'),
        },
        {
            path: 'content',
            name: 'content',
            component: () => import('@/views/admin/content/Content.vue'),
        },
        {
            path: 'content/add',
            name: 'content-add',
            component: () => import('@/views/admin/content/input.vue')
        },
        {
            path: 'content/:id/edit',
            name: 'content-edit',
            component: () => import('@/views/admin/content/edit.vue')
        },

        
        {
            path: 'daftarpembeli',
            name: 'daftarpembeli',
            component: () => import('@/views/admin/daftarpembeli/Content.vue'),
        },
        {
            path: 'daftarpembeli/add',
            name: 'daftarpembeli-add',
            component: () => import('@/views/admin/daftarpembeli/input.vue')
        },
        {
            path: 'daftarpembeli/:id/edit',
            name: 'daftarpembeli-edit',
            component: () => import('@/views/admin/daftarpembeli/edit.vue')
        },
       

      

    ]
}